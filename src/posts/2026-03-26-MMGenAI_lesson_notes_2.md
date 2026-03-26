---
layout: post
title: "多模态生成式人工智能笔记2"
date: 2026-03-26
tags: [Multimodal Generative AI]
comments: true
author: junedrinleng
toc: true
---

本笔记主要记录多模态大模型中其他模态的表示形式以及how it works

<!-- more -->

## Replace CNN with Self-Attention
CNN主要关注局部信息，但transformer可以关注的是全程的两两之间的关系
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/1774485931758.png)

手动设计的图像特征包括边缘和梯度等等他是依赖手工设计有很强的归纳偏置，因为特征完全固定，模型只能在这些人为设计的特征上做文章，完全没有自由度

CNN则是聚焦**局部性**（相邻像素更相关）+ **平移不变性**（物体移动位置不影响识别），CNN的归纳偏置强，CNN天然假设"邻近像素关系更重要"；同时他是同一个卷积核滑过整张图

Transformer其**偏置内容**：**全局成对交互** + **基于内容的推理**（通过注意力机制，任意两个位置都可以直接交互），这让他的**偏置强度**：**弱/灵活**；相对来说**没有局部性约束**：不假设相邻元素更重要，位置1可以直接关注位置1000，结构关系必须**从数据中学习**，模型自己决定该关注什么

## 网络的深度影响

网络深度一定是越深效果越好吗

何恺明等人2016年的CVPR发现，单纯的增加网络深度并不会增加训练效果，甚至出现深度变深training error都更高（50层比20层error更高），res net做的就是不仅要让他变深，还要让他可学习

变深结果效果变差是因为初始化参数的方向不对，然后并没有很好的通过gradient descend去fix

CNN并不意味着现在完全被transformer淘汰，部分最新的CNN网络性能和transformer其实接近，**只不过需要更大的数据量**

### ViT and its training methods

最简单的就是把patch按序列放入transformer

![image-20260326090555591](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260326090555591.png)

然后就是参考BERT构建的BeIT：

encoder用于学习语义信息，decoder负责回复，这是因为挖的mask的语义信息更多

![image-20260326090807753](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260326090807753.png)

MAE的mask是遮掉了70%，一开始参考bert也就遮掉了15%左右，结果不work，因为这是因为图像的冗余信息很多，这就导致只遮挡少数内容会导致整个训练的任务偏简单，学到的模型表示分布本身也不够复杂了

![image-20260326090942066](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260326090942066.png)

图像本质就是一个很空的信息载体，信息密度不高

## CLIP的出现

那为什么现在依然是transformer更多的用在大模型的多模态里呢，这是因为**CLIP的出现**

![image-20260326091441676](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260326091441676.png)

通过文字和图片算cos相关性，希望相关性矩阵在对角线上是最高的。由于整个任务是弱监督的，就导致他的数据集很容易获得。训练了这个网络就可以很容易实现文字和图片的匹配：

已知一个图片，可以用图片来阐释图片encoder表示，然后根据根据图片输入网络来生成文字标签，然后输入到text encoder后计算其和image encoder的相关性，这样就可以很好的优化到标签

这个框架很巧妙，使得他可以几乎零样本（zero-shot）的学习，一个参数干天下（而非Resnet需要对特定的任务来微调）

**那么为什么CLIP效果好**

因为CLIP的参数量很大，同时训练数据集也很大：

![image-20260326092004619](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260326092004619.png)

![image-20260326092019161](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260326092019161.png)

OpenAI的CLIP模型效果很好，而且细粒度很高（比如说刘亦菲和高圆圆的图片放进去，刘亦菲和刘亦菲图片的相关性一定比刘亦菲和高圆圆图片的相关性高）。而由于他们有高质量的CLIP模型，使得他们也更容易的获得数据标签，进而又进一步可以增强模型的性能

但问题在于他不知道词之间的相关性：比如 杯中长草 和 草上杯子，图的词知道，但词和词之间的关系无法区分

同时他的问题还有就是依赖很大的batch size去实现细粒度的学习（32000的batch size对于业界以外的一般很难实现），这里的batch的放在一起的很可能是一个batch 里都很相关（比如都是男明星）这样可以更细粒度的学习到难的任务

如何处理多模态的信息呢：

一种简单的方式就是直接接起来；另一种则是类似于CLIP的思路两之间算相似度，这也就是所谓的cross-modal：

![image-20260326093219800](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260326093219800.png)