---
layout: post
title: "单颗粒示踪成像基础知识"
date:   2023-05-26
tags: [SPT]
comments: true
author: junedrinleng
toc: true
---

该笔记主要介绍单颗粒示踪技术的基础知识，包括成像系统和示踪颗粒中的金纳米颗粒的相关性质
<!-- more -->

## 1 基础知识

### 1.1 正置显微镜与倒置显微镜

#### 1.1.1 概述

光学显微镜是由两组透镜组成的光学折射系统，其中焦距较短、靠近观察物、成实像的透镜组称为物镜，焦距较长、靠近眼瞳、成虚像的透镜组则称为目镜。位于物镜前方的观察物体由物镜作放大后成倒立的实像。光学显微镜分为正置显微镜和**[倒置显微镜](http://www.mshot.com/ProSort/dzxwj.html)**

 <img src="https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2023-05-26-Imaging_system/v2-a48b48682b57c084c4237d3402128727_1440w.webp" alt="img" style="zoom:50%;" />



然后，该实像再被目镜作二级放大，在位于人眼的明视距离处，得到放大效果的倒立虚像。通过显微镜机械调焦系统，可以调整并满足相对于物镜的成像条件以及观察者明视距离的二次成像条件。

#### 1.1.2 两者的区别

1. 正置显微镜物镜转换盘朝向是向下的，载物台在物镜下方；**[倒置显微镜](http://www.mshot.com/ProSort/dzxwj.html)**的物镜是向上的，载物台在物镜上方。

2. 正置显微镜物镜适合观察切片等；**[倒置显微镜](http://www.mshot.com/ProSort/dzxwj.html)**适合观察到培养皿里面的活体细胞

3. 正置显微镜物镜工作距离比较短；**[倒置显微镜](http://www.mshot.com/ProSort/dzxwj.html)**工作距离长

4. 正置显微镜可以选择100X物镜，搭配10X目镜实现1000X高放大倍率；倒置显微镜的物镜最大放大倍率只有60X，这是因为在100X时物镜几乎是贴着样品的，这个工作距离已经小于容器底部厚度，也就是说在对焦成功前物镜就已经撞上容器底部了，根本不可能对焦。

### 1.2 光片
光片显微镜与传统显微镜的不同在于激发光的照明方式。它的照明光是一张与成像面平行的薄薄的“光片”，只有焦平面的样品被照亮，而其上下的样品不受影响

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2023-05-26-Imaging_system/v2-d1e59721f0fbdfd354dd9c0943dd3a56_1440w.jpeg)

#### 1.2.1 光片的优势

1. ***提高了图像和背景的反差(Signal-to-Background Ratio) 和轴向分辨率**：光片照明技术保证了焦平面上下的样品不会被激发，具备和共聚焦显微镜类似的**光学切片功能**；*
2. ***减少了光漂白和光毒性**：与传统的荧光照明技术相比，光毒性可以被降低**20-100**倍，这样，我们就能在更接近生理状态的条件下，对活体生物样品进行长时间的三维成像；*
3. *与激光共聚焦和双光子显微镜使用低QE的PMT的**点扫描成像**相比，光片显微镜使用高QE的CCD或sCMOS相机进行**面成像**，大大提高了成像速度和图像的信噪比。共聚焦需要**几分钟甚至几小时**才能拍完的样品，用光片显微镜只需要**几秒到几分钟**。因此，光片显微镜也特别适合用于大样品成像。*
#### 1.2.2 光片的实现

产生光片最简单的方法是在光路中引入一个**圆柱形透镜**。通过该透镜的光，宽度维持不变，但在高度上被压缩成平面 ，然后通过照明物镜，在焦面上形成“光片”。成像物镜垂直于照明物镜放置，并聚焦在光片上获取荧光信号。

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2023-05-26-Imaging_system/v2-b1988dea4dbeff3bf2c7e6bff02e2e35_1440w.jpeg)

使用这种方法生成的光片，其宽度和厚度由照明物镜的NA值决定。如图5所示，照明光束的实际形状是一个两头宽，中间细的“沙漏”形。ω0为光束腰厚度，也就是光片厚度，b为均匀照明宽度，也就是有效视野。

NA值：光学系统的数值孔径（NA）是一个无量纲的数，用以衡量该系统能够收集的光的角度范围。

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2023-05-26-Imaging_system/v2-e530c36ae7abe917edce78e3adcc157c_1440w.jpeg)

因此，使用NA较小的照明物镜，能够实现较宽范围的均匀照明，即视野更大；但是相应的，光片的厚度也越大，导致轴向分辨率降低。而高NA物镜产生的光片视野会比较小，但轴向分辨率较好。

>***要注意的是**，如果成像物镜的NA值很高，使得其景深小于光片的厚度，那么系统的轴向分辨率主要是由成像物镜的景深决定。但这时会产生普通荧光照明时具有的问题，即焦面上下的部分样品会被照亮，不必要的光毒性和杂散光会对成像效果产生负面影响。*
>*如果成像物镜的NA值较低，光片厚度比它的景深要小，那么系统的轴向分辨率就由光片的厚薄来决定。*

详细参考：

> 前沿显微成像技术专题之：光片荧光显微镜 (1) - Photometrics的文章 - 知乎 https://zhuanlan.zhihu.com/p/60772855

## 2 金纳米颗粒散射
为什么可以看到尺度极小的金纳米颗粒：

仅仅依靠光的反射数量级不够

贵金属纳米离子颗粒局域表面的等离激元共振（LSPR）

在电磁场作用下，贵金属表面自由电子的极化方向交替改变使得自由电子产生往复运动

电磁场变化频率与纳米颗粒表面自由电子固有运动频率相同时产生局域表面激元共振

<img src="https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2023-05-26-Imaging_system/image-20230526095049905.png" alt="image-20230526095049905" style="zoom:33%;" />

金纳米棒有两个等离子共振峰， 分别代表不同的轴棒: 长轴和短轴。在两个不同轴向运动的自由电子表现出不同的性质。（可以简单理解为长轴短轴的尺寸不同，共振的路程不同）

## 3关于常见的显微成像技术

### 3.1 微分干涉相差成像技术（DIC）

微分干涉相差显微成像系统的光路结构如下图所示⬇️

<img src="https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2023-05-26-Imaging_system/image-20230526095749600.png" alt="image-20230526095749600" style="zoom:50%;" />

condenser：聚光器

Wollaston Prism：沃拉斯顿棱镜 可操纵[偏振光](https://en.wikipedia.org/wiki/Polarization_(waves)) 。它将光分成两个独立的线性[偏振](https://en.wikipedia.org/wiki/Polarizer)出射光束

激光源发出激光，经过起偏器得到特定偏振方向的偏振光

这些棱镜将入射光 在到达样品前进行光束分光，在经过样品后进行光束的重新整合。经历过这个过 程后，从镜头Normaski棱镜收集的椭圆偏振和圆形偏振光经过检偏器，相互干涉 形成DIC图片。

### 3.2 偏光成像技术

偏光成像系统有两块偏振片，一块是起偏器，一块是检偏器。

<img src="https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2023-05-26-Imaging_system/image-20230526101810120.png" alt="image-20230526101810120" style="zoom:50%;" />

传统偏振成像系统如下⬇️：

<img src="https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2023-05-26-Imaging_system/image-20230526103351183.png" alt="image-20230526103351183" style="zoom:50%;" />

当被测 物体为各向同性物质如球型纳米粒子时，无论怎样旋转样品角度，视野都为黑色， 这是由于各向同性物体的去偏振化能力较弱，无法改变起偏器形成的线性偏振光的振动方向，依然与检偏器的振动方向相互垂直的缘故。若被测物体为各向异 性的物体(如纳米金纳米棒)，其存在两个离子共振带，金纳米棒长轴与入射 偏振光的夹角决定了两个等离子共振的方向与强度的大小，一部分散射光可以通 过检偏器被收集到。

<img src="https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2023-05-26-Imaging_system/1576979426758310-5068659-5068661.jpg" alt="不同波长的可见光所对应的不同颜色" style="zoom:50%;" />

长轴吸收峰在650nm的纳米金棒响应效果好，因为彩色 CCD 红色通道的响应曲线的最大值在650nm左右，一般金纳米棒长轴的衍射光成红色

对于单个纳米金纳米棒而言，其等离子共振模式通常被认为是 其长轴偏振主要是沿着长轴方向震动，而其他轴的方向是沿着横轴方面震动。当 单个纳米金纳米棒在这次研究中可以近似的被认为是简单偶极子

**样品为什么会改变偏振方向？**

单个纳米金纳米棒在这次研究中可以近似的被认为是简单偶极子,它的强度可以 表述为:
$$
I\propto K*Pa*Ps
$$
\propto 是正比于的latex代码

光强是电磁场强度的二次方

Pa 描述的是入射电场方向与偶极子的振动方向之间的相互关系，代表激发效率。Ps 描述的是能够被收集到的金纳米棒的散射信号，表示散射光的检测效率。

由下图的分解关系可以知道：

![image-20230526111144032](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2023-05-26-Imaging_system/image-20230526111144032.png)
$$
Pa=(sin \theta*cos\varphi)^2=sin^2\theta*cos^2\varphi \\
Ps=(sin \theta*sin\varphi)^2=sin^2\theta*sin^2\varphi
$$
那么可以得到：
$$
I\propto sin^2\theta*cos^2\varphi*sin^2\theta*sin^2\varphi=sin^4(\theta)sin^2(2\varphi)
$$

### 3.3 暗场显微成像

光通过聚光镜（顶部透镜通常是凹球形的，这使得从各个方向照射过来的光 形成类似空心锥的照明模式）汇聚经过样品后散开，使得背景光并不能进入目镜，只有当光被样品中的物质散射后改变光路方向得到的光才会进入目镜，进而保证进入目镜（检测器）的光都是经过目标样品散射的。

示意图如下⬇️

<img src="https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2023-05-26-Imaging_system/image-20230526102220795.png" alt="image-20230526102220795" style="zoom:50%;" />

