---
layout: post
title: "20250606文献日读笔记"
date:   2025-06-06
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要整理2025年6月6日阅读的部分文献，包括主要包括钠硫电池及其机理的一篇综述，基于配合物+交联网络实现光谱反映速度场，以及纤维素支架的水凝胶

<!-- more -->

## 1 利用纤维素支架实现坚固且可控的软致动器的异质界面互锁水凝胶

> reference: [Y. Song *et al.*, *Advanced Functional Materials*. **n/a**, 2509712 (2025).](https://advanced.onlinelibrary.wiley.com/doi/10.1002/adfm.202509712)

![65fda325e47fe2bcd9ad57e4cb31a22](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-06-paper_report/65fda325e47fe2bcd9ad57e4cb31a22.png)

材料受叶片结构启发，整个水凝胶在纤维素的骨架上进行原位的聚合，并展现其导电性以及应力应变曲线、阻尼效应等力学特性

![de58c3715bbada03ca9617e81544ed9](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-06-paper_report/de58c3715bbada03ca9617e81544ed9.png)

材料可以从较为柔软的部分到硬化，并测试了其拉伸应变性能

![93d435a544432b24ffad378121f32eb](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-06-paper_report/93d435a544432b24ffad378121f32eb.png)

在不同浓度的三价铁离子里浸泡回逐渐产生弯曲的结果（与盐析效应有关，不同浓度的$Fe^{3+}$环境下，水凝胶内部的含水量不同），同时在盐酸溶液之中则呈现出动态解离的过程

![949ff607dfada406fc2c293afe78dd1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-06-paper_report/949ff607dfada406fc2c293afe78dd1.png)

选用不同的粒子也会影响水凝胶材料的弯曲角度，同时相较于对照组，PBCI材料在解交联再重新交联后，其弯曲形变保持的更好，同时材料对压力和循环的稳定性较好（图g,h）

## 2 应力的荧光可视化——借助共价有机组合体

> reference: Y. Ren *et al.*, *J. Am. Chem. Soc.* (2025), doi:[10.1021/jacs.5c05354](https://doi.org/10.1021/jacs.5c05354)

![b3f3efb618ac99f70ea20d57fe5da7b](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-06-paper_report/b3f3efb618ac99f70ea20d57fe5da7b.jpg)

通过钌配合物的氨基与TPE-4CHO的醛基发生反应形成亚胺构造交联网络

b图计算的表面电荷分布（DFT）然后测量了其不同浓度的荧光光谱

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-06-paper_report/ja5c05354_0002.jpeg)

再加上封端的peg实现peg化，进而会放生形成超结构的二次组装，peg的反应比不同其光谱特性也有所不同

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-06-paper_report/ja5c05354_0003.jpeg)

同时材料还能够对应变以及摩擦进行响应，同时其在管道中不同的流速也会呈现出不同的响应：

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-06-paper_report/ja5c05354_0004.jpeg)

因此可以用于活体的脑血流速度活体成像

（from 杨振忠课题组 **can have a try?** 先看他的后续引用情况吧）

## 3 操纵可充电金属硫电池中的硫氧化还原动力学： 基本原理和通用方法

一篇基于含硫电池的电池内氧化还原动力学的综述

> reference: X.-L. Huang *et al.*, , doi:[10.1002/adma.202419089](https://doi.org/10.1002/adma.202419089).

![Details are in the caption following the image](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-06-paper_report/adma202419089-fig-0003-m.jpg)

含硫电极经历多个级别的氧化还原过程，从$S_8$单质到诸多$S_x^{y-}$的链状多硫离子

![Details are in the caption following the image](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-06-paper_report/adma202419089-fig-0004-m.jpg)

![Details are in the caption following the image](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-06-paper_report/adma202419089-fig-0006-m.jpg)

图解了一下多硫离子的电子传到机制

![Details are in the caption following the image](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-06-paper_report/adma202419089-fig-0009-m.jpg)

对于高分子的电解质，阳离子存在类似于bridge的情形，以及形成了一些盐效应，使得紧密离子对解耦，盐浓度高了会形成更加local的离子对，减少导电性

![Details are in the caption following the image](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-06-paper_report/adma202419089-fig-0010-m.jpg)

