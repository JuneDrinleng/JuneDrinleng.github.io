---
layout: post
title: "20251230文献阅读笔记"
date:   2025-12-30
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记继续记录阅读neurips 2025 Time Series的paper，包括一个切分Time Series的Forecasting New Form 等，以及一篇关于单颗粒示踪的综述的成像部分内容。

<!-- more -->

## 1 Timeperceiver：一种用于广义时间序列预测的Encoder - Decoder框架

> Lee, J. & Lee, H. TIMEPERCEIVER: An encoder-decoder framework for generalized time-series forecasting.

传统的时间序列模型往往聚焦于如何更好的优化encode的input，进而来做预测和训练模型，然而这是将将预测和训练作为单独或次要的关注点。本文作者开发了一种TIMEPERCEIVER的编码-解码 预测框架并紧密结合了一种有效的训练策略，实验结果也显示该架构呈现出SOTA的表现性能。

![image-20251230094826997](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-12-30-paper_report_12/image-20251230094826997.png)

标准的时间序列预测范式是签约后的模式，即一段序列总共是10个point的话，用前面6个点的信息来预测后面四个点的信息。但在本框架中，作者采用的是将这10个点拆分成两部分分别是L和J，其中的L是用于预测的数据，J是需要被预测的内容，通过随机split的方式生成，最终训练用L的数据来预测J的数据。

具体而言，将原始的时间序列分成若干个patch，然后对其进行random split得到$X_L$和$X_J$,将$X_L$结合indices的编码后经过序列化之后放入encoding中，同时把J部分的indices也经过TPE+CPE模块和Sequentialize之后输入解码块，结合encoding的结果来做后续的预测，进而能够预测出$\hat{X_J}$

![image-20251230095211621](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-12-30-paper_report_12/image-20251230095211621.png)

Github links: https://github.com/efficient-learning-lab/TimePerceiver

## 2 合成序列- -时间序列基础模型符号数据的生成

> Wang, W., Wu, K., Li, Y. B., Wang, D. & Zhang, X. Synthetic Series-Symbol Data Generation for Time Series Foundation Models. Preprint at https://doi.org/10.48550/arXiv.2510.08445 (2025).

过去对时间序列分析的相关研究已经取得了长足的进步，然而，诸如训练数据稀缺和不平衡等挑战仍然阻碍着它们的发展。本文开发了一种符号化的产生时间序列数据和数学公式的方法，利用对比学习机制。这是因为作者认为，序列符号数据生成和预训练机制在克服数据稀缺性和提高任务性能方面的潜力

![image-20251230103023176](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-12-30-paper_report_12/image-20251230103023176.png)

该思路的前提就是，时间序列数据是对复杂系统的低维采样，而复杂系统本质是通过简单的符号动力学通过量化而涌现出的。这样就沟通起了时间序列和符号表示之间的桥梁

![image-20251230103240032](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-12-30-paper_report_12/image-20251230103240032.png)

具体而言，本文包含数据生成和符号化学习时间序列两部分，数据生成是通过模型随机采样得到采样后的时间序列数据，然后输入到符号化的网络中得到该时间序列背后对应的数学符号表达，最后在利用符号表达生成相应的时间序列。

而模型上这是通过分别将时间序列和符号表达都输入到模型在做一个对比学习

## 3 单粒子追踪的机器学习综述：方法、挑战和生物物理见解（精读）

> Zhang, C. *et al.* Review of machine learning for single-particle tracking: Methods, challenges, and biophysical insights. *Chem. Biomed. Imaging* https://doi.org/10.1021/cbmi.5c00146 (2025) doi:[10.1021/cbmi.5c00146](https://doi.org/10.1021/cbmi.5c00146).

### 3.1 背景与摘要

SPT已经是一个通过监控单个分子或者颗粒在活细胞或者其他生物系统中的运动的成熟的坚持工具，传统的分析SPT数据的方法有通过MSD进行拟合或者通过HMM来将轨迹分解为简单的参数，这都是需要依赖先验知识的。

相对而言，机器学习能够自动的从轨迹数据中解析出有意义的特征，并且这种解析往往源自算法从充满噪声的高维空间中获得，这是人类分析者常常难以做到的。

目前，机器学习在单颗粒示踪中的应用包括粒子检测、轨迹重建、扩散模式分类、运动状态的分割、二维或三维的高精度定位、噪声抑制和不确定性量化以提高分析可靠性。

### 3.2 单颗粒示踪技术的成像手段

单颗粒示踪技术的成像手段主要有两个流派，分别是二维情况下的成像与三维情况下的成像。

#### 3.2.1 2D-SPT

首先我们来看2D-SPT，最为常见的就是以下的几种显微镜epifluorescence microscopy (荧光显微镜，最常见，EFM), total internal reflection fluorescence microscopy (全内反荧光显微镜，TIRFM), highly inclined and laminated optical sheet (高倾斜和叠层光片显微镜——斜照明，HILO) microscopy, and light sheet fluorescence microscopy (LSFM，光片荧光显微镜).

![image-20251230110444247](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-12-30-paper_report_12/image-20251230110444247.png)

最普通的荧光显微镜是被广泛使用的，但其问题在于EFM由于其较大的激发体积，通常具有较低的信噪比( Signal-to-Noise Ratio，SNR )，从而限制了单分子定位精度。

为了克服普通荧光显微镜的低信噪比，TIRFM被开发出来，其是通过在具有不同折射率的介质之间的界面处创建倏逝激发场来实现的。**空间定位精度在几十纳米量级，时间分辨率在毫秒量级。**但其问题在于内在地受限于成像深度。

HILO显微镜则通过使用位于临界角正下方的轻微倾斜的激发光束来规避TIRFM的轴向限制。其使用一个较薄的激发片穿透样品较深处(~10μm )。

在此基础上，光片LSFM则是通过用横向取向的光学片照明样品，进一步增强了成像深度和对比度(图1b )，明显地分离了激发和检测路径。

以上这些都是2D的成像手段，得到的也是2D的单颗粒平动轨迹，但是无法探测轴向运动( z方向)可能导致将三维粒子动力学误解为受限的横向运动或扩散速率降低。

#### 3.2.2 3D-SPT

既然2D-SPT面临着三维粒子运动被投影到2维的问题，那么开发3D的SPT方法现在也被广泛的研究。

最直观的想法但是直接拍摄整个图像堆栈，然后在重建出三维轨迹——基于图像的跟踪。通过将一系列2D图像堆叠生成3D图像，并将粒子位置跨帧链接，获得70个轴向信息。下图a所示，但这会导致时间分辨率不佳因为每次都要将整个图像堆栈拍下。

![image-20251230111351417](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-12-30-paper_report_12/image-20251230111351417.png)

为了克服这一难题，基于点扩散函数（PSF）的三维轨迹重建算法被应用了出来，具体而言就是通过类似于图b中的装置，利用柱面透镜引入受控的光学像差，产生形状随轴向位移变化的非对称PSF，然后根据轴线位移变化来重建出三维信息，已经有的相关研究包括DH-PSF，SLMs等等。这种方法可以实现（x-y尺度上25nm的定位进度，z方向上50nm的定位精读）。局限性就是更高亮度照明带来的光学器件复杂性（校准难题）

> Upon insertion of the cylindrical lens, the beam experiences unequal convergence along the two orthogonal axes, causing the PSF to appear as ellipses of different orientations and eccentricities above and below the focal plane. This shape variation enables nanometer-scale inference of the emitter’s axial position, thereby achieving high-precision 3D localization (Figure 2b).

另一种方案是双平面成像（biplane imaging），有分光镜和棱镜（spectroscope or prism）两个通道。当粒子在z方向上移动的时候，图像点的相对位置和强度比例就会发生改变，这样就可以通过这种改变算出z的位置信息（是robust的），在良好的信噪比条件下，毫秒级的空间精度较高。

这些方案的局限性都是成像的光学设计复杂度，以及光子强度和图像深度的trade-off

**除了上述的基于图像信息的三维重建SPT轨迹方法以外**， Closed-loop feedback 3d-spt通过实时调节动态保持粒子在成像体积内，从而提高轴向跟踪范围和时间分辨率。这些方法可以分为图案化激发和改进的检测方法，每一种方法都适用。具体细节参考下图，本文不再过多描述光学系统。	

![image-20251230112646589](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-12-30-paper_report_12/image-20251230112646589.png)



