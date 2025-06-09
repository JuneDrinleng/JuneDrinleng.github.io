---
layout: post
title: "Marangoni Effect"
date:   2025-06-09
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要整理2025年6月9日阅读的部分文献，主要是介绍电解水情况下，电极附近出现的Marangoni Effect的相关研究

<!-- more -->
## 1 电催化析氢气泡动力学
>reference: [S. Park *et al.*, *Nat. Chem.* **15**, 1532–1540 (2023).](https://www.nature.com/articles/s41557-023-01294-y)

了解电解水过程中的气泡演化能够对电极/电解质/气泡的界面优化起到帮助，研究方向氢气的析出在不同电解的表面呈现处差别——这些差别主要是由于溶质Marangoni 对流影响的

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-09-paper_report/41557_2023_1294_Figa_HTML.png)

Hofmeister系列阴离子改变表面张力影响电解质的聚集效应，从而影响了气体的生成动力学

![Fig. 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-09-paper_report/41557_2023_1294_Fig1_HTML.png)

这里的电流采用的是振荡的电流，拍摄的是大液滴下新生成小液滴，同时根据其进行相关项的计算

![Fig. 2](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-09-paper_report/41557_2023_1294_Fig2_HTML.png)

这里控制阳离子一致，电压一致的情况下研究阴离子效应对气泡生成的影响

![Fig. 4](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-09-paper_report/41557_2023_1294_Fig4_HTML.png)

对于marangoni效应，主要影响的就是温度和离子浓度两种情况，温度增加，表面张力降低，而远离电极的地方温度则要低一些，使得那部分的表面张力增加；离子浓度与之相近，靠近电极的地方浓度较低从而使得表面张力较低，而远离电极的地方增加了离子浓度，进而增加了表面张力（存在pos和neg两种影响的方向）

## 2 正常和微重力条件下水电解期间电解质液滴在H2气泡中喷洒

> reference:  [A. Bashkatov *et al.*, *Nat Commun*. **16**, 4580 (2025).](https://www.nature.com/articles/s41467-025-59762-7)

电解工程中的气泡产生会县住的影响到电极的效率，因此理解气泡产生动力学有助于优化电解水系统，本文介绍了一种电解水液滴被射流（Worthington jet）进入氢气气泡内的传输机制

![Fig. 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-09-paper_report/41467_2025_59762_Fig1_HTML.png)

图中的黑色圆圈是已经生成的大气泡，后续他和电极pt接触的地方会陆续产生一些小的气泡，这些小的气泡会影响到大气泡的内部，在大气泡的内部形成b图那样的液滴射流

随后，作者将这些射流的速度涡旋给计算表征了出来：
![Fig. 2](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-09-paper_report/41467_2025_59762_Fig2_HTML.png)

随后，作者团队对液滴的背面进行了观察，竟然观察到了射流之后形成的电解质水坑：

![Fig. 3](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-09-paper_report/41467_2025_59762_Fig3_HTML.png)

图中的a，b，d都是这种气泡内的电解质水坑的拍摄图像，而图c则是介绍的电解质水坑形成的可能的两种途径：

一种是在电极表面生成的邻居气泡逐渐长大后接触了该气泡，从而产生融合，融合过程会将部分的小液滴溅射入大液滴内部，部分小液滴由于重力作用，在一段时间之后就沉降在了底部。

另一种机制则是在隔壁不断的产生小液滴，小液滴不断升起，被大液滴捕获，然后产生射流并在大气泡内部产生喷射的小液滴，由于气泡更小，所以液滴更容易在重力作用下沉降。

![Fig. 4](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-09-paper_report/41467_2025_59762_Fig4_HTML.png)

上图是对这种气泡内部射流及其投影的拍摄，可以看见其基本呈现接触-融合-射流产生-表面修复的过程

本实验通过下图的成像系统实现，图b是marangoni流的机制

![Fig. 5](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-09-paper_report/41467_2025_59762_Fig5_HTML.png)

## 3 总结与思考

即便实验上并没有非常大的工作量，但是拍摄到了这种内部的溅射现象依然是很出彩的；大nc那篇则是着重于研究溶质对marangoni效应的影响，着重于调控机制
