---
layout: post
title: "多模态生成式人工智能笔记3"
date: 2026-04-09
tags: [Multimodal Generative AI]
comments: true
author: junedrinleng
toc: true
---

本笔记主要记录多模态大模型中其他的常见的模型模式，因为自回归在多模态这一领域不太优势，所以才有了自回归外的其他模型

<!-- more -->

## 自回归模型为什么不行

如果把每个图像的像素的256取值作classification的话，会导致太难以计算，因为一张1024x1024的图片将有3M的subpixels：

![image-20260409081251537](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260409081251537.png)

这是因为图片的相邻像素的信息密度并不如文字那么高，导致了极大的计算量。

自回归虽然表达在数学上比较干净利落，但是词与词之间并不自然的有特征的联系，难以直接进行聚类和无监督学习

## VAE模型

VAE本质就是将数据取了一个下界，来降低无效信息密度

最简单的方法就是直接用损失函数做重建：

![image-20260409081756794](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260409081756794.png)

重建的图会比原图要糊一些，这是mse loss本身的局限导致的。有了这个表征就可以用线性层去对feature层进行分类。

一个下游任务就是generated image，之所以用VAE而非simCLR等方式是因为后者是获取图片的语义信息，但语义信息本身是不足以还原出一张图的

为了使得VAE做到产生图片，我们希望把x收敛到一个已知的空间，而非一个随机的空间里。对于VAE来说，就是把z给压缩到高斯分布里

![image-20260409083020285](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260409083020285.png)

在latent space上进行操作相较于直接用autoregressive的方式会更高效

## **Generative Adversarial Networks**

adversarial本质就是对抗，这个**Generative Adversarial Networks**本质就是不在直接的去拟合概率分布，而是用对抗的方式来训练是一个“对抗博弈”

![image-20260409083554218](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260409083554218.png)

但现在GAN已经不在有人使用了，GAN发表于2014年，但从此一直到2021年都还在使用，但随后便被抛弃。这是因为GAN的训练是很麻烦的，要同时训练两个模型，这会导致最后一旦一个模型训练出问题，最后即便loss低，他也不保证最后就一定是对的

![image-20260409084050000](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260409084050000.png)

光看这两条曲线，一方降低一方提高，并不能说明他就一定是结果好的。除此之外，双方一直在动态博弈会导致训练不是很稳定。另外，整个训练要训练两个模型，一旦需要scale up的时候，会导致要同时训俩模型，数据利用率低的同时也导致难以scale up

## Diffusion Models

![image-20260409085423186](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260409085423186.png)

已知我们从x到z去移动，这个线段的头和尾就是x和z，这样线段里的每个点都相当于线段的插值，然后这里就相当于要训练一个神经网络去学。当然，在学的时候要加一个条件接口，来做导航，便于生成需要的内容

最早的扩散模型是在图片上加噪声和减噪声，但这种操作是不高效的，相较于我们之前提到的vae来说，vae在latent空间进行训练和学习会要更加高效一些（例如你图片有变化，对于直接训需要把encoder也训练，但vae后只需要训decoder的部分即可）

![image-20260409090155702](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260409090155702.png)

但vae的问题就是会糊，那么一个思路是参考GAN给增加一个discriminator：

![image-20260409090435512](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260409090435512.png)

那么如何从一个噪声的图到不那么噪声的图呢？使用的是denoising u-net，特点就是输入图片是多大输出就是多大（直观来说就是一个小的autoencoder）

一些from diffusion model的结论：

结论1：

任意时刻的噪声都可以直接从x_0直接算出来：
$$
\mathbf{x}_t = \sqrt{\bar{\alpha}_t}\mathbf{x}_0 + \sqrt{1 - \bar{\alpha}_t}\epsilon \text{ where } \epsilon \sim \mathcal{N}(\mathbf{0}, \mathbf{I})
$$
但上面这一套都是基于卷积的，20年之后发现self-attention有很强的表达能力，所以cnn逐渐被diffusion transformers替代了（self-attention的确也更适合scale up和并行计算）

结论2：

生成图像时，我们需要一步步“去噪”，也就是计算 $q(\mathbf{x}_{t-1} \mid \mathbf{x}_t)$（已知当前模糊状态，求上一步稍微清晰一点的状态）。幻灯片中指出，直接算这个是 intractable（难以处理的），因为有无数种可能的去噪路径。

**转机来了：** 但是，如果我们在条件中**同时加入初始的清晰图像 $\mathbf{x}_0$**，即计算 $q(\mathbf{x}_{t-1} \mid \mathbf{x}_t, \mathbf{x}_0)$，这个分布就变成了一个完全可以计算的、确定的正态分布！

幻灯片给出了这个分布的均值 $\tilde{\mu}_q(\mathbf{x}_t, \mathbf{x}_0)$ 和方差 $\sigma_t^2$ 的公式。其中，**均值 $\tilde{\mu}_q$ 就是我们去噪时应该瞄准的“中心目标”**。

结论3：

性质 2 看似完美，但在实际生成图像时有一个致命的悖论：**我们在去噪阶段，根本不知道最终的清晰图像 $\mathbf{x}_0$ 是什么！**（如果我们知道了，就不需要生成了）。

所以，性质 3 完成了最精彩的一步代数替换：

1. 它把**性质 1** 的公式倒过来，用当前图像 $\mathbf{x}_t$ 和噪声 $\epsilon$ 来反向表达 $\mathbf{x}_0$：

   $$\mathbf{x}_0 = (\mathbf{x}_t - \sqrt{1 - \bar{\alpha}_t}\epsilon) / \sqrt{\bar{\alpha}_t}$$

2. 然后，把这个 $\mathbf{x}_0$ 的表达式代入到**性质 2** 的均值公式 $\tilde{\mu}_q$ 中。

3. 经过一顿代数化简，得到了幻灯片右下角的最终公式：

   $$\tilde{\mu}_q(\mathbf{x}_t, \mathbf{x}_0) = \frac{1}{\sqrt{\alpha_t}} \left( \mathbf{x}_t - \frac{1 - \alpha_t}{\sqrt{1 - \bar{\alpha}_t}}\epsilon \right)$$

## Image, Video and Audio Generation

![image-20260409091426967](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260409091426967.png)

不加限制的话，其实一个语义可以看到能生成很多的图片