---
layout: post
title: "20250104文献阅读笔记"
date:   2025-01-04
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记继续记录2025年12月30日精读的关于单颗粒示踪的综述中之前尚未完成的机器学习算法部分内容。

<!-- more -->

## 1 单粒子追踪的机器学习综述：方法、挑战和生物物理见解（精读）

### 1.1 机器学习辅助单颗粒定位

传统的检测方法( e.g. ,强度阈值化和质心寻找)和跟踪方法(例如,通过最近邻或卡尔曼滤波进行帧间链接)往往在噪声、拥挤和低对比度的活细胞成像环境中挣扎。这些算法需要对每个数据集进行仔细的参数调整，并且在低信噪比条件下容易失效，通常需要大量的用户干预。

近些年来机器学习迅猛发展，本节将聚焦于机器学习是如何辅助粒子定位和轨迹链接的

> Unlike traditional algorithms that rely on simple thresholding and centroid calculations, deep learning models can learn to recognize the visual characteristics of particles and distinguish them from noise or background directly from training data.

DNN在粒子定位上并不像传统的比如说阈值设定或者质心计算，而是直接学习粒子的图像特征进而将其从背景和噪音中提取出来。

这一领域最为常见的是CNN的网络层，一个典型的例子是DeepTrack：

![image-20260104102743093](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-04-paper_report_13/image-20260104102743093.png)

通过卷积层来从图像中学习图像特征，其表现远远优于传统的算法，尤其是在低信噪比和光照不均的情况——纳米级的粒子定位精度。

除此之外，CNN还能够较好的提取二维图像中的z轴偏移信息，进而实现从二维图像中重建出3d的轨迹：

![image-20260104103034852](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-04-paper_report_13/image-20260104103034852.png)

例如通过检测经理的偏移位移经过CNN-based的NN学习之后就能够获得3D的金纳米颗粒轨迹。

**除了特征提取的更灵活以外，机器学习的另一个有点就是他能够降噪以及增强弱型号。**

网络是一个有利的非线性过滤器来滤掉背景早上并保留粒子信号

![image-20260104103244497](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-04-paper_report_13/image-20260104103244497.png)

例如图中同样是S/N=1的情况，卷积得到的噪声还是很高，但在conv+FNN的平滑下结果噪声弱化了许多。

对于这些粒子定位任务的算法，一般都是通过CNN来提取待选区域，当然也有用FNN或者U-net来产生对应的mask进而辅助粒子定位的。

### 1.2 机器学习辅助单颗粒轨迹链接

轨迹链接的难点在于但粒子定位点和其他定位点比较接近时，往往会出现错链。传统的轨迹链接算法比如最近老或者最小化间隙的Hungarian算法依赖用户设定的阈值先验。这些算法但粒子运动较快或者没有规律时往往会出现问题。

> Traditional tracking methods (such as nearest-neighbor linking or the Hungarian algorithm for minimizing gaps) depend heavily on predefined motion assumptions or user-specified thresholds (e.g., maximum displacement allowed per frame).

一个解决问题的方法就是参考机器学习的数据驱动思路，利用例如RNN中的LSTM来学习颗粒运动的动态变化，甚至依赖布朗运动模型等运动模型先验，还可以根据轨迹历史训练网络来预测粒子下一时刻最可能出现的位置，利用这些预测来辅助下一步的粒子定位匹配从而实现轨迹链接

![image-20260104104904631](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-04-paper_report_13/image-20260104104904631.png)

例如如同所示的就是通过CNN首先分析每个粒子所处的小图像patches来解析出图像特征，然后用LSTM去学习粒子的运动表现，最终相较于传统的轨迹链接算法能够很好的实现轨迹的链接。通过学习粒子的运动特征，即便粒子密度很高，该算法也能保证一定的准确度。

### 1.3 机器学习辅助轨迹的分类与状态识别

在获取轨迹后，一个重要的问题就是从轨迹中能够提取出什么信息，最主要的两个任务就是异常扩散模型识别以及动力学状态的分割。

我们首先来看Diffusion-Type Classification：过去的数年，一大堆的随机动力学模型已经被开发来描述与布朗运动的deviation，例如：Brownian motion (normal diffusion), fractional Brownian motion (FBM),continuoustime random walk (CTRW),and Lévy walks (LW). 之前识别这些模型依赖的是TAMSD,VACF以及PSD，还有p-variation  analysis.这些方法在理想条件下表现良好，并且也具有物理可解释性，但是他们依赖轨迹的平稳性和同质性假设，这导致他们vulnerable to noise，轨迹长度，以及动力学异质性。

那么相较于传统的方法而言，机器学习的方法是自动的从轨迹中提取数据的，这是的他们可以比较好的应对复杂的环境。早期的一个做法是，首先从粒子轨迹中手动提取描述特征，然后将这些特征放入NN中做模式识别，一个粒子就是这篇PNAS：

![image-20260104110113135](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-04-paper_report_13/image-20260104110113135.png)

此外，通过引入"扩散指纹"的概念，作者建立了一个支持跨系统比较的统一特征表示，并对控制粒子运动的物理机制提供了见解。

近些年来，机器学习逐渐强大也使得有用CNN和RNN来从轨迹中提取motion type的方法

![image-20260104110326681](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-04-paper_report_13/image-20260104110326681.png)

> While classifying entire trajectories into diffusion types provides an initial understanding of molecular motion, diffusion behavior in real biological systems often exhibits pronounced spatiotemporal heterogeneity.

但实际上粒子在不同的时间节点可能呈现出不同的扩散行为，因此准确的识别这些隐藏的扩散行为是十分必要的。

早期的轨迹分析方法依赖黄闯的方式来检测局部的变化，然而滑窗方法的准确性会受到噪音和滑窗尺寸选择的制约。在此基础上，HMM方法提供了一种严格的框架来识别扩散状态，传统的HMM方法依赖状态数的指定，在此基础上研究人员研发了贝叶斯扩展的HMM例如VB-HMM等，减少过拟合增加早上的鲁棒性，以及引入高斯混合模型等等

贝叶斯扩展提供了更大的模型灵活性，但仍然依赖于概率假设，并且在计算上要求很高。一些研究使用两步方法来识别扩散状态：将轨迹数据分割成短片段，提取统计特征，并使用随机森林或支持向量机等方法进行分类。该策略平衡了可解释性和已建立的分类器的能力，并在检测病毒粒子运动模式100或从隐马尔可夫模型中结合特征等任务中有效。

在此基础上，一系列的轨迹分析方法被开发出来解决上述的问题：

![image-20260104111020699](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-04-paper_report_13/image-20260104111020699.png)

例如RNN-based的DL-MSS用矩尺度谱( Moment Scaling Spectrum，MSS )是一种局部描述符，捕捉粒子轨迹的高阶统计特征，并将其输入到两层LSTM中进行序列分类。

而也有通过切分出快扩散，首先，和慢扩散三种状态进而进行模式识别的NOBIAS，以及用CNN将SPT建模为连续过程进而不施加专题边界的方法，以及deepsees方法等等

![image-20260104111331291](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-04-paper_report_13/image-20260104111331291.png)

### 1.4推断分子状态和随机动力学

很多的生物过程往往依赖于分子的动力学状态转变，而SPT技术可以很好的捕获这种状态：表征了这些过程中涉及的状态转变，如配体和受体之间的结合和解离，组装成复合物，被主动运输，或发生构象变化。

SPT的一个关键能力就是解决异质性和转换行为这种容易被平均所掩盖的信息。

传统的msd方法的问题在于人工解释的主观性、滞后时间不超过总长的20%依赖更长的轨迹，低信噪比条件下也很差

![image-20260104112258967](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-04-paper_report_13/image-20260104112258967.png)