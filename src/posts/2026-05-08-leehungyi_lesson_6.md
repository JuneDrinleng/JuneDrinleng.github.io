---
layout: post
title: "李宏毅机器学习2026春笔记6"
date: 2026-05-08
tags: [Hung-yi Lee Machine Learning]
comments: true
author: junedrinleng
toc: true

---

本笔记记录李宏毅机器学习2026年春的第6节课程的内容，主要梳理的是AI的自我修正能力这条路线的发展，从decoding、workflow到reasoning这一路的发展。

<!-- more -->

## 1 修改inference过程来实现AI的自我修正

### 1.1 额外训练detector和corrector

一个最常见也是最基本的想法就是利用输入和输出的概率分布来训练一个error检测器，然后再利用error检测器参考下通过error修正器修正从概率分布采样的output：

![image-20260508175410799](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508175410799.png)

例如在2023年，有人就首先让大模型输出一类正确的输出，同时也让其产生一堆错误的输出，然后把这些正确的输出和错误的输出用于训练一个error检测器，然后发现这个训练得到的error检测器是能够检测出正确与否的，同时还具有一定的泛化能力

![image-20260508175423525](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508175423525.png)

那么2024年，一篇TruthX的工作则介绍的是关于修正器的一个设想。假设模型肯由答对的一堆回答和一堆打错的回答，将答对回平均减去答错回答的平均，就得到了正确与错误之间的差值，然后把这个插值加入到模型的错误vector上，模型就有可能给出正确的答案

![image-20260508175805176](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508175805176.png)

这俩都需要收集额外的资料来让模型先优先学习到正误才能实现error detection和error correction

### 1.2 利用额外模型来产生错误答案的contrastive decoding

于是就迭代了一个新的思路就是contrastive decoding的方案

首先正常问模型一个问题，他去预测下一个词的答案，这里模型的回答是可能对可能错的答案，然后我们现在制造出一个可能回答错的输入输入到模型，这样模型回答的肯定就是错的

那么我们把可能对和可能错的向量（蓝色）减去答错向量（绿色）乘以一个系数$\alpha$得到离错误答案的距离向量（黄色），然后在输出的时候把距离向量和原本输出的蓝色向量加和产生修正后的向量

![image-20260508181004570](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508181004570.png)

以上操作每次生成下一个token的时候都要进行上述的操作一次，这个方法的优点是无需改变模型参数，那么可以正常训练模型后在inference阶段即可，缺点就是在inference阶段原本只需要一次现在还需要一次额外的inference

这里的向量蓝色和绿色一般就是模型的logit分布。这里的错误答案的产生可以通过一个小参数的模型来进行inference，例如用GPT-2 XL预测蓝色向量，用GPT-2 small来预测错误向量。然后两者直接用模型输出的概率分布logit上进行相减（https://arxiv.org/abs/2210.15097）

### 1.3 利用不同层输出结果来实现contrastive decoding

那在2023年的时候 Decoding by Contrasting Layers (DoLa) 被用于推理（现在直接封装在了hugging face 的transformer套件，可以直接调用）

介绍DoLa之前，先介绍一下Logit lens的概念。可以用LM head来处理每一层的输出特征，进而可以得到中间向量的decode结果，进而能够一见其中的过程

![image-20260508181953990](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508181953990.png)

那么受此启发，DoLa这篇文章就认为，可以利用logit lens来实现错误输出的对比。他的先验假设是这样的，通过模型早期层的输出结果，利用logit lens作为错误输出，然后和最终层进行contrast的方式，得到了最后的DoLa输出

![image-20260508182430315](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508182430315.png)

那么问题就是如何找到最合适的层的输出结果才是输出的错的内容呢？这可以详见原始论文https://arxiv.org/abs/2309.03883

DoLa无需额外的计算，不需要一个额外的小模型，那么计算资源就有所降低了

除此之外还有基于多模态的LayerCD (https://arxiv.org/abs/2509.25177):

![image-20260508182650946](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508182650946.png)

### 1.4 Instruction Contrastive Decoding (ICD)

直接给模型一个降智的prompt

![image-20260508182909304](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508182909304.png)

Ref: https://arxiv.org/abs/2311.00233 ，https://arxiv.org/abs/2403.18715

### 1.5 Context-aware Decoding (CAD)

可以利用不给参考资料让语言模型得到错误的答案，然后再把资料给模型来得到另一个答案，然后两者的差来修正。一般CAD会用于图像资料

![image-20260508183157563](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508183157563.png)

因为多模态模型是有语言上的先验的（先入为主的思想钢印），那只需要把图片变为杂讯相当于不让模型看到，得出他的先入为主的答案作为错误的，进而可以获得错误答案

这里加入杂讯有很多方案，总的来说是为了让模型特别容易产生误会的（比如把图片切碎打乱，比如把模型最看重的图像部位遮掉）

### 1.6 减少inference开销

那么上面的这些contrast decoding都是会带来额外的inference开销，如何减少inference开销就成为了一个需要注意的点

一个想法就是在平时不开启contrast decoding，只有在特定的，比如输出概率分布很平均的时候才开启

![image-20260508184038221](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508184038221.png)

但上述还是需要把同样的input的sequence把他decode以得到错误的答案，其实这种符合直觉的方案并没有节省计算开销

这里一个聪明的想法是我们可以利用kv cache的机制。那么为了尽可能利用kv cache，那么我们应该把搞乱模型的内容prompt放在最后，而且经过实验发现其实output error是最合适的

![image-20260508184422942](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508184422942.png)

## 2 修改Harness来实现AI的自我修正

### 2.1 模型的自我反思

具体的框架就是Generation→Verification

即模型输出之后在自动加一个反思的指令让模型开始自我反思和修正：

![image-20260508185618651](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508185618651.png)

上述过程的先验就是以下两点：1. 批判比生成本身要更容易一些（写不出好小说不代表判断不了一部小说好不好） 2. 生成过程是无法回顾只能一步步next prediction，即便有错误也没办法修改了，通过verification来给模型机会生成修正的答案

![image-20260508190615629](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508190615629.png)

文章（https://arxiv.org/pdf/2510.16062）来测试说自我反思的回馈效果不一定好（不稳定），而如果引入的外部反思（比如参考代码生成的话是程序输出结果之类的这些参考）就会好一些

同时，插入的这句reflection本身的用词也很重要（因为模型有可能分为固执的模型和接受批评的模型）https://arxiv.org/pdf/2412.19513

不同模型的固执程度：

![image-20260508192634470](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508192634470.png)

自我反思的插入指令对模型的区别：

![image-20260508192648201](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508192648201.png)

### 2.2 模型的verification到底划算吗

也许相较于直接把算力用于反思，模型直接多生成几种代码也可能更有用呢？或者说，同样算力投资在反思上对准确性的投资真的划算吗？

![image-20260508193001399](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508193001399.png)

左图表示：在产生结果sample一定次数的基础上，加上一定次数的反思会带来一定的准确性

右图则表示在sample的基础上（SC）加入额外的反思的情况下最后成功率和多投入算力在采样上的成功率比较。我们可以看到，反思相较于采样来说，相同算力下用于反思不如用于采样多次。而后续相较于多次采样到达瓶颈后再想通过反思来提升成功率需要消耗128倍的算力

也就是说，verification是在已经投入很多算力sample提升到底极限的时候，再反思才是划算的

## 3 模型直接修改参数——通过reasoning

![image-20260508193514248](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508193514248.png)

相较于workflow来说，reasoning模型自己学到什么时候该修改就去修改，不该修改就不修改，这可以更加节省算例

那么如何实现这个reasoning的方案呢？一个直觉的方案是让模型越来越强，他就会自我修正了。但https://arxiv.org/pdf/2505.16170这篇文章指出，正确的认知并不代表模型就会自我修正——自我修正是一个独特的能力，和模型的认知能力是不一定直接相等

### 3.1 直接教模型自我修正

首先要教模型自我错误侦测：

![image-20260508193919627](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508193919627.png)

然后还要教模型错误修正：

![image-20260508193941274](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508193941274.png)

但问题是，直接教模型自我修正可能会又问题，比如说训练的时候没有遇到的错误方案模型就不会修正了

![image-20260508194147704](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508194147704.png)

因此在此基础上就是发展出了Reinforcement Learning （RL）的方法

### 3.2 Reinforcement Learning

![image-20260508194315926](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508194315926.png)

常见于数学和代码任务上，有了rl的调试之后模型会很自然的开始产生了思考的过程（reasoning process）

那么为什么不一开始就做对呢？人不可能一开始对，人往往会犯频繁的发生，没有经历过就是会发生（人教人教不会，事教人一遍会），那么reasoning就是增加一个事教人的过程

同时，一步做对的训练资料需要比多步操作更多的资料才行。reasoning让需要的训练资料更少，同时又有更好的泛化能力

![image-20260508195235065](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508195235065.png)

![image-20260508195242837](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508195242837.png)

一个想法是觉得，RL做的就是让你从已有的路径中挑出正确路径的概率提升

另一个想法是认为，RL做的是真的开发了新的思路：

![image-20260508195759971](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260508195759971.png)
