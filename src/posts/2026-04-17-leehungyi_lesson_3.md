---
layout: post
title: "李宏毅机器学习2026春笔记3"
date: 2026-04-17
tags: [Hung-yi Lee Machine Learning]
comments: true
author: junedrinleng
toc: true
typora-copy-images-to: upload
---

本笔记记录李宏毅机器学习2026年春的第3节课程的内容，包括Flash Attention和KV Cache的相关内容，这些技术主要是应用于加速语言模型的生成速度（推理速度）而非训练速度，加速的是transformer的运算

<!-- more -->

需要注意的是，今天的课程主要注意的是这些方法做了什么，以及其代价是什么。例如有的方法是改变了原有的attention，并不是训练原有的attention了（是一个attention的近似）；有的则可能是模型绑定的，要使用这个方法是要训练这个特定的模型才行

本节不会讲，speculative decoding在之前2024年生成式ai导论的第16讲讲过，所以在本节课不会再重复的讲

## 1 Flash Attention

Flash Attention来自22年的一篇paper：https://arxiv.org/abs/2205.14135，这篇不改变原有Attention的计算结果，然后就是其是一个随插即用在任何使用在attention模型上的方法。他的代价非常小

Flash Attention之所以能够加速，是因为他考虑到了GPU的运输逻辑，所以这里先介绍一下GPU的底层运算逻辑

### 1.1 GPU 运算逻辑

GPU里有许多的运算单元称之为Execution unit，一般一个GPU里有很多这种单元。他的厉害之处就是因为数量大，所以可以同时计算执行任务，运算很快速。

缺点是，SRAM(工作台)太小了，能够存放的内容是有限的，一个很大的矩阵没办法一次性计算需要不断的放入来逐个计算。所以这个工作台很小，那么大量的数据相对放在HBM（仓库）里。所以为了运算，需要从HBM搬资料到SRAM，然后快速的运算，然后把结果搬回HBM。

这里在工作台上运算是一件很快速的事情，但是麻烦的是，搬资料是很慢的，导致他拖慢了运算速度

因此flash attention就希望减少搬资料速度来实现优化运算速度

![image-20260417172236159](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417172236159.png)

### 1.2 一般attention的运算过程

由于当前的输入序列可能非常的长，所以现在一般是把常为L的k序列切成一个个的chunk，每个chunk里有N个key，N取决于工作台的大小。

切好后放入工作台上之后就迅速计算出q·k然后放入仓库：

![image-20260417172444561](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417172444561.png)

但这里算到的内容是$a_i$，他是要计算出一个0，1区间的权重，理论上是用上面的式子，但实际上还需要减去$A_{max}$

![image-20260417172514371](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417172514371.png)

需要注意的是，不能直接把$a_i$放在工作台上，这是因为L有可能很大很大几百万这样，所以工作台不能放L相关的内容，这就使得找$a_{max}$变得很繁琐，需要每个chunk里寻找然后逐步更新

![image-20260417172841682](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417172841682.png)

每个chunk进行一个比较d和chunk内元素大小的情况

所以理论上这个比较大小的运算要进行$B=\frac{L}{N}$次才能找到$a_{max}$，找到后就可以每个元素逐步计算出每一项分子：

![image-20260417173046477](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417173046477.png)

而分母需要计算出总和，也是每个chunk逐步计算：

![image-20260417173119958](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417173119958.png)

求出坟墓之后才能算出$\hat{a_i}$:

![image-20260417173231655](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417173231655.png)

这一段操作才算计算完，这中间搬了很多次from HBM，但这还没完，还需要搬运v来计算o的局部：

![image-20260417173412148](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417173412148.png)

那么问题来了，flash attention想解决的就是怎么简化这些反复的读写？

### 1.3 简化版本的flash attention

![image-20260417173717038](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417173717038.png)

假设第一个chunk的话，$d_1$就是$a_{max}$先计算一通

那么到了第二个chunk，假设遇到了更大的$d_2$，那么基于$d_2$作为$a_{max}$来计算：

![image-20260417173857141](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417173857141.png)

这里怎么直接根据$d_1$ and $d_2$来修正$s_1$呢？

![image-20260417173954084](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417173954084.png)

这样就可以实现消除$d_1$的痕迹，这1就是flash attention的核心技巧。这样所有处理后，$a_{max}$和分母s都有，这样就很好计算了：

![image-20260417174443053](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417174443053.png)

从$B=\frac{L}{N}$简化到只需要2次

当然Flash Attention他最后不仅仅止步于此，而是他给出了灵魂拷问：

> 我们真的需要算出每一个attention weight $\hat{a_i}$吗？

### 1.4 Flash Attention

他希望就是直接一次性到位得到$o_i$:

直接在第一个chunk的时间点就把v都进来计算$o_1$:

![image-20260417174818200](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417174818200.png)

即便这里的$s_1\neq s_{real}$,  $d_1 \neq a_{max}$

那么我们看第二关chunk，之前已经说到了更新s的方案，但对于flash attention来说，更重要的是怎么直接算对o：

![image-20260417175125358](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417175125358.png)

这里新的attention weight 的$o_2$需要怎么抹掉$o_1$里$s_1$ and $d_1$存在的痕迹：

![image-20260417175306694](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417175306694.png)

先通过乘以$\frac{s_1}{s_2}$ 来更新分母，再通过乘以$(e^{d_1-d_2})$来更新分子，通过这种迭代的方式来不断修正前面的错误：

![image-20260417175507509](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417175507509.png)

目前torch默认的就是用的flash attention。他的代价就是算法比原版attention复杂度高一点点，然后运算多一点点，但是瑕不掩瑜，其队速度的提升是很明显的

对于大语言模型来说，由于还有编码等操作，导致输入token太短了时，flash attention加速效果一般，但是随着token的长度增加，flash attention的加速效果也就更明显

但是需要注意的是，可能长度到了一定长度，直接CUDA显存就爆炸了

## 2 KV Cache

语言模型的输入可以看成，其可以分成两半，prefill和decode：

![image-20260417181443992](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417181443992.png)

对于KV Cache，在计算attention的时候，k和v是被存下来而非丢掉。这是因为模型在生成的时候，新的输入是接前面的prompt的，这样就可以直接利用前面的attention就行了：

前面已经算了attention：

![image-20260417181718843](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417181718843.png)

那么对于第四个token，就可以直接使用前面的kv了：

![image-20260417181736547](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417181736547.png)

这在概念上很好解释，但问题是在现实操作中，往往可能会直接撑爆HBM，这是因为有可能kv很多，而且其有muti-head也会增加kv

例如对于27B的模型，each token就是0.72MB，即便是80GB显存的A100也就只能存114k tokens，超过那就CUDA out of memory

![image-20260417181944647](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417181944647.png)

为了解决这个问题，那么久会有很多的方法来解决这个问题，例如从Multi-head attention到Multi-query Attention（这个表现一般），或者说介于两者之间的group query attention

### 2.1 group query attention (GQA)

![image-20260417182227054](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417182227054.png)

![image-20260417182234451](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417182234451.png)

Group-query Attention是被广泛使用的，llama,Gemma都是通过这个实现的

### 2.2 Multi-head Latent Attention

![image-20260417182413918](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417182413918.png)

另一个方法就是先把x压成一个压缩向量，然后后续再乘回kq，这些都是需要训练的，需要注意的是这个方法是无需解压缩的

![image-20260417182708916](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417182708916.png)

这是因为对于解压缩来说，首先从c还原到k需要乘以$W_k$，然后和k相乘可以简化为$q^TW_k c$也就可以转化为$(W^T_k q)\cdot c$，这说明这种解压缩计算其实久等价于直接用q乘以$W_k^T$以及c来实现.

这一步$q\prime=W_k^Tq$相当于对q做压缩，他的好处就是q是长度一致的，相较于解压缩c这种和序列长度相关的来说，计算更简化

![image-20260417183144328](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417183144328.png)

和v的计算也是一样的，上述式子的化简也说，1其实就是等价于直接先weighted sum最后解压缩一次就行了，不需要每次都解压缩之后再weighted sum

### 2.3 Sliding Window Attention

每次attention不是attend整个sequence而是只看前面的滑窗口内的内容，这样会导致也许没那么好捕获长程相关性？

但实际上，由于现在的网络都是多层的，所以这个滑窗里的k可能对应上一层网络里更多内容的k，这取决于网络的深度：

![image-20260417183624485](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417183624485.png)

当然另一个方法就是有些layer是完整的attention，有的layer则sliding：

![image-20260417183705518](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417183705518.png)

虽然sliding会使得模型变差，但只要在inference的时候额外的加上最前面的几个token就可以使得模型的表现大增：

![image-20260417183920032](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417183920032.png)

这里图中数值越大表现越差，可以看到完整attention在某个长度之后，就会表现很差，如果让模型看前面的几个token模型表现就会好很多（streaming LLM）

LLM是很喜欢前面几个token的，当模型没什么好attend的时模型就会attend前几个，所以如果给前几个token模型就会恢复理智，否则失去前几个token可能就崩坏了

### 2.4 Pruning KV Cache

其实不是每个kv都有用，所以大可以直接抽调部分长期没有被使用的kv cache：

![image-20260417184306121](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417184306121.png)

当然，后面也有人讨论说，如果模型处理很复杂的问题的时候，丢掉kv cache后可能会影响模型的表现

### 2.5 跨对话的Cache——Cache Hit

有可能user1的前几个token的kv和user2的前几个token的kv cache是一样的，那其实可以直接挪了：

![image-20260417184629379](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417184629379.png)

需要注意的是，最后一个字即便是金是一样，但由于前面的kv不一样，那就不能再share kv cache了，只有一样的前缀，一样的preference才行

现在的模型提供商，如果你命中了他已有的cache，会有折扣，这是因为对于模型来说，他无需再计算，可以直接使用，使得计算成本大幅度降低

比如对于AI Agent而言，句子前面的system prompt是很固定的，这就会很容易Cache Hit，那么为了尽可能的击中cache，最好是最前面的越稳定越不动，尽可能变动的放在最后面：

![image-20260417185049472](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417185049472.png)

## 3 Conclusion

![image-20260417185321457](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417185321457.png)
