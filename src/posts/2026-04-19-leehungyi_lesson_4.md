---
layout: post
title: "李宏毅机器学习2026春笔记4"
date: 2026-04-19
tags: [Hung-yi Lee Machine Learning]
comments: true
author: junedrinleng
toc: true

---

本笔记记录李宏毅机器学习2026年春的第4节课程的内容，包括Positional Encoding的相关介绍内容，从Absolute、Relative、RoPE、到无 Positional Embedding

<!-- more -->

## 1 为什么我们需要Positional Embedding

![image-20260419211854888](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419211854888.png)

可以看到，对于transformer里的内容，尤其是self-attention层的计算过程，这里似乎是没有位置顺序的信息的

那么如果token位置发生对调，从输入的ABCD四个token，会发现似乎和$o_D$的结果没有任何关系，这就会导致影响网络对句子的理解结果

因此，我们需要引入transformer的位置信息

## 2 Absolute Positional Embedding

最早的想法就是直接为每个token编码一个独特的位置信息，然后加在结果里面：

![image-20260419212244902](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419212244902.png)

这就可以看到，由于位置不同，调换位置之后计算得到的$o_D$就不一样了

### 2.1 Sinusoidal Positional Embedding

寒武纪时代的技术

用d来表示每个向量的长度，用向量$p_0[i]$表示第0个positional embedding向量的第i个元素

![image-20260419212616859](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419212616859.png)

这里他还分为偶数和奇数的区别，乍看之下很复杂和离奇，很难以直接了解为什么建构成这样，我们不妨把$p_0$……$p_{49}$的第0和1个位置来可视化看看：

![image-20260419212905598](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419212905598.png)

不难发现光看第0个dim，是一个sin函数的变化；看第1个dim则看到的是cos的函数；如果看第10个dim则也是sin函数但由于i不同，公式的分母不同，周期也就不一样了

![image-20260419213123940](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419213123940.png)

可以看到，比较接近0的dim，他的frequency很高，变化很大

这样看还是比较无厘头，但我们回归到公式的奇数和偶数的sin和cos可以放在一起来看，那么就可以发现他其实是一个二维平面的一个向量指针，然后这个指针会随着k的变化而发生变化

![image-20260419213410341](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419213410341.png)

这意味着什么呢，一排的向量前几个转的很快，然后中间的指针就变得稍微慢一些，然后最后几个dim的指针更慢，就像是时分秒一样来表示位置

![image-20260419213544078](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419213544078.png)

那为什么要用这个方式？在Attention is all you need这篇文章里，作者提到希望positional embedding的时候能够让transformer感受到相对位置的信息。

具体而言，"我和你说一个很好玩的事情,今天猫吃了鱼"中的猫和鱼之间的距离应该和“猫吃了鱼”中猫与鱼之间的距离是一样的，而非关注觉得咨询，同时还得反映出和“猫今天特别好玩的一个搞笑的行为是吃了鱼”中的猫和鱼的距离不一样

选择Sinusoidal Positional Embedding就是看中了这个技术在相对位置上的一些信息，具体来说是：
$$
p_{k+r}=M_rp_k
$$
也就是比如$p_1$和$p_4$之间的变化通过$M_r$实现，其与k无关

proof如下：
![image-20260419214331173](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419214331173.png)

![image-20260419214426703](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419214426703.png)

![image-20260419214452688](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419214452688.png)

![image-20260419214519099](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419214519099.png)

以上是某几个dim之间的关系，那么其对于整个向量：

![image-20260419214702933](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419214702933.png)

那么这个小巧思，是如何影响计算attention的呢？
$$
𝑎=𝒒_𝑩∙𝒌_𝑨\\
=(𝒒_𝑩 )^𝑇 𝒌_𝑨\\
=(𝑊_𝑞 (𝒙_𝑩+𝒑_𝒎 ))^𝑇 𝑊_𝑘 (𝒙_𝑨+𝒑_𝒏 )\\
=(𝒙_𝑩+𝒑_𝒎 )^𝑇 𝑊_𝑞^𝑇 𝑊_𝑘 (𝒙_𝑨+𝒑_𝒏 )\\
=𝒙_𝑩^𝑇 𝑊_𝑞^𝑇 𝑊_𝑘 𝒙_𝑨++𝒙_B^𝑇 𝑊_𝑞^𝑇 𝑊_𝑘 𝒑_𝒏+𝒑_𝒎^𝑇 𝑊_𝑞^𝑇 𝑊_𝑘 𝒙_𝑨++𝒑_𝒎^𝑇 𝑊_𝑞^𝑇 𝑊_𝑘 𝒑_𝒏


$$
其中，第一项之和内容有关，没有p相关的内容；而第二、三项则是既有内容x又有位置p，是内容和位置交互影响项；第4项只和位置有关系，而且由于Sinusoidal Positional Embedding有$p_{k+r}=M_r p_k$的关系，所以可以把这个带入第四项得到：
$$
\text{the 4th part}=(𝒑_𝒏)^𝑇 𝑀_{𝑚−𝑛} 𝑊_𝑞^𝑇 𝑊_𝑘 𝒑_𝒏
$$
可以看到，这就能够体现相对位置，虽然影响很简洁

## 3 Relative Positional Embedding　

既然我们要的就是相对位置，那我们是不是可以直接就根据相对位置来弄呢？一个想法是ALiBi的方法。

### 3.1 ALiBi ——奥陶纪时期技术

直接在没有相对位置的基础上算出attention的a之后再减去一个相对位置的bias：

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419215554343.png)

当时这个方法，虽然只在512的sequence长度上训练的话，其在2048等长度的效果也不差，外推能力很不错

但这里的b是人设定的，那么直接learn 这里的b里的bias会怎样呢？其实2019年的T5的文章里就已经有人做了：

![image-20260419215938978](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419215938978.png)

但是T5的效果比ALiBi效果要差一些，当然后面即便是ALiBi也已经消失在了历史的洪流之中，被更新的Positional Embedding技术给取代。但启示是，relative Position很重要，只需要考虑这个就可以很好的解决问题

### 3.2 RoPE

其实RoPE本身比ALiBi出的早而且效果部分还不如ALiBi，但是后面最终还是RoPE的衍生站在了历史的潮流中，被llama、qwen等使用

RoPE强的地方是不影响attention的操作，本来怎么算q，k之间的点积都是一样的，也就是这里的q和k不同一样，这样之前提到的kv cache和flash attention都可以直接应用上

那么RoPE是怎么实现的呢？旋转当作位置的印迹

![image-20260419220640943](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419220640943.png)

对于向量要表示位置的话，其实就是把这个向量旋转一个$n\theta$的角度

![image-20260419220731650](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419220731650.png)

对q的操作同理，旋转$m\theta$的角度之后的q就成了含有角度信息的$q^m$，这里为了方便画图就只考虑了前两维来可视化。当然和Sinusoidal Positional Embedding一样，都是两两维度一对，来构造的

那么如何设定旋转角度呢？参考Sinusoidal Positional Embedding一样设置$\theta_i$，只需要d/2个θ，因为是两两一组，用n乘上角度来代表位置

![image-20260419221047890](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419221047890.png)

这回带了什么效果呢？相对位置不变的时候，他的角度是不变的：

![image-20260419221254113](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419221254113.png)

![image-20260419221456611](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419221456611.png)

同样角度的内积，是并不会发生改变的，k和q之间的相对夹角没变，只是这俩向量一起旋转了

由于旋转可以表示为一下矩阵：

![image-20260419221700398](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419221700398.png)

![image-20260419221709354](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419221709354.png)

那么计算k·q就等于：

![image-20260419221807832](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419221807832.png)

即便把m换成m+r，n换成n+r，计算出的结果和m、n的计算结果一样的

很多人说，当q和k的距离越远的时候attention会越算越小,实际上是不是这样的，参考[here](https://colab.research.google.com/drive/1rWDtAkScrb2K3tcprSTzwuRQo5bGiyKJ?usp=sharing) and [here](https://arxiv.org/pdf/2410.06205),当q和k的内容一模一样的时候才可能距离越远大体是attention越来越小但不是严格递减而是锯齿的。ALiBi的假设是距离越远attention越来越小，RoPE则不一定严格符合，这在语言上不一定是错误的，RoPE的这种不随着距离增加attention严格减小是有利于精细建模的

## 4 Train Short, Test Long

Reference: https://amaarora.github.io/posts/2025-09-21-rope-context-extension.html

为什么要这样呢，这是因为我们希望虽然在训练的时候选取的模型长度很小，但在用的时候就模型长度更长。这很有意义，毕竟我们训练的时候训练数据输入长度总是有限的，但是比如使用agent的时候他的输入长度是很长很长的。

很遗憾，RoPE并不能实现这种目标。在sinusoidal，RoPE,T5和ALiBi这几个基本的模型里Train Short Test Long表现最好的是ALiBi，但是由于他的假设比较粗暴不如RoPE那么优美，所以后人想的是能不能基于RoPE来改进来实现Train Short Test Long

为什么RoPE在没看过的长度上会失败呢？这是因为比如说我们训练的最长的序列长度也就是向量旋转到$N\theta$，那么如果test的时候旋转$2N\theta$的话，那模型序列都没看过，那模型直接就崩坏了

### 4.1 Position Interpolation

那如何解决呢？想的是，那么我们就改变编号好了，比如训练N长度，test一个LN长度的，从原先的：1，2，3……LN，编号在test上改成1/L, 2/L,3/L……N，这样可能编号有小数，但小数照样可以继续做RoPE来旋转

这个方法叫做Position Interpolation，使用这招会使得效果编号，但是模型还是需要微调模型参数来使得模型适应非整数的模型编号：

![image-20260419223731531](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419223731531.png)

### 4.2 Frequency-Based Approach

那么这里考虑的是除了扩展倍数和L有关，能不能和维度有关呢？dim小的旋转的很快，dim大的旋转的慢，这里的想法就是高频dim不变的基础上在低频的时候进行压缩。这是因为他转的快，训练的时候可能每个角度都已经看过了，模型并不会崩坏，都是在这个圆里旋转；而对于旋转的慢的指针，一旦不在区域里，那就崩坏了：

![image-20260419224115622](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419224115622.png)

为了解决这个问题，其中一个方法是NTK-Aware Scaling:

![image-20260419224207319](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419224207319.png)

最高频的完全不用管，最低频的则直接就是N。当然这个方法没有文章，只是出自一个reddit的贴文

当然基于频率来压缩的方法还有很大，比如YaRN，实际上优化了这个scaling factor的曲线：

![image-20260419224602187](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419224602187.png)

### 4.3 Dynamic Scaling Based Approach

上述方案虽然可以在长序列上能做了，但是导致在短序列上模型的表现比原来更糟糕了，那么dynamic scaling的方案就是在inference的时候做模式识别一样：如果test长度小于train长度，那就一切如常；如果长于train的长度，那就用之前的特别处理缩放好了：

![image-20260419224828333](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419224828333.png)

但是这个方案就是和KV Cache方案不相容（该方案也是源于一篇reddit的文章）

dynamic的好处就是可以结合的，和frequency-based结合是很好的，那么怎么决定两者的结合方案呢？这里LongRoPE就是使用的了**evolutionary search** 的方案来寻找最好的方案，做到了2048k的长度处理。他的方案是先finetune，然后提取出LongRoPE然后再去调来延长的

## 5 我们真的需要Positional Embedding吗

刚刚提到的是只是基于一层的attention层，但真实的网络是有很多层的，即便不考虑位置编码，可能对于下一层的attention而已，输入就已经不同了，所以[NoPE](https://arxiv.org/pdf/2305.19466)就提出了无需Positional Embedding的方案

![image-20260419225741633](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419225741633.png)

一个方案是，直接在训练快结束的时候，把RoPE拔掉即DroPE:

![image-20260419230015291](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419230015291.png)

他的表现居然比RoPE+YaRN效果好：

![image-20260419230051283](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260419230051283.png)
