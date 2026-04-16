---
layout: post
title: "多模态生成式人工智能笔记4"
date: 2026-04-16
tags: [Multimodal Generative AI]
comments: true
author: junedrinleng
toc: true
---

本笔记主要回顾生成式模型尤其是生成式多模态大模型，一个中期的小总结

<!-- more -->

## 1 生成式模型本质是拟合数据分布

生成式模型往往是数据的输入内容比模型的输出的范围要小很多。当前的解决overfit的方案就是提高数据量，现在还有大量的工作来解决over fitting的问题

![image-20260416080958732](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260416080958732.png)

所有的生成式模型都有一些先验假设，比如next-token prediction的auto regression的先验是当前词和前几个词是condition相关的，这些先验假设的设置就会面临一些bias。模型学到的并不是这个世界的规律，而是对已有的有限数据和基于人类设定先验而成的代表性表示，但这不意味着模型本身无效。

Deep Learning本身做的是表征学习的内容：

![image-20260416081543319](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260416081543319.png)

对于生成模型来说，这个世界几乎所有都是高斯分布的，那生成模型做的就是从高斯分布中采样，然后把采样的内容给还原出原先数据集的数据分布：

![image-20260416081740926](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260416081740926.png)

即便目标都是拟合数据分布，不同的网络设计的目标函数也不一定一样：

![image-20260416081912702](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260416081912702.png)

生成式模型的优势就是只要能够连接输入和输出信息就行，而辨别模型需要做压缩/下采样一定是数据信息＞输出信息的

对于diffusion：

![image-20260416083201558](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260416083201558.png)

加噪这部分是人为增加的噪音使之变为高斯分布，降噪部分则是模型所为：

![image-20260416083252444](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260416083252444.png)

一个类似的例子是Flow Matching：

对于flow matching其实就是计算出两个数据分布的中间态，或者说“速度”（diffusion model逼近的是噪声）

![image-20260416083406288](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260416083406288.png)

Flow matching的缺陷是不太擅长做特别高清的事情，目前高清任务diffusion更有优势

## 2 Unified Generative Models

这里的unified的意思是understanding和generation同时做，因为对于人类来说，人类理解文字比理解图片要慢，所以为了更端到端的实现这里需要unified

auto-regressive最清晰的图片也就512*512而且其不适合做图片生成
