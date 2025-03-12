---
layout: post
title: "PINN基础笔记"
date:   2025-02-25
tags: [ML&DL]
comments: true
author: junedrinleng
toc: true
---

该笔记主要介绍物理信息嵌入的神经网络（physics informed neural network），包括基本概念和简单的pytorch实现。
<!-- more -->

## 1 研究背景

以往描述复杂多尺度系统动力学往往采用有限差分、有限元、光谱亦或是无网络方法数值求解偏微分方程

这些传统的研究方法面临着代价高昂、无法解决缺失、间隙或者噪声边界条件等问题

深度学习的有点在于数据特征的自动选取，但由于其黑箱的性质在物理上不一致性或不可信较多（导致较差的泛化能力）

现有的大概有三种匹配形式：

1. 小数据+了解所有的物理知识
2. **数据类型中等，但缺少一些参数值或者偏微分方程的项**
3. 大数据——完全由数据驱动，不包含任何物理知识

## 2 PINN的优点

2.1 应对不完美的模型和噪声数据

2.2 小数据领域上由较强的泛化能力

2.3 更好的阐释深度学习、不确定性的量化

2.4 高位数据的处理

## 3 如何嵌入物理——观测与归纳

1. 足够的数据可以包含学习任务的所有的数据集——理想情况（面临数据收集的成本）
2. 将方程进行求解得到求解表达式，根据表达式来设计输入之后的运算，但这面临着方程求解的难度
3. 将偏微分方程嵌入神经网络的损失函数——控制输入和输出之间的网络参数训练过程、使其和输入变量保持一定的物理关系（利用自动求导）

## 4 pytorch的实现

![image-20240927102511146](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-03-12-PINN_notes/image-20240927102511146.png)

这里给方程组是随便写的，其中第二个方程是边界条件

首先是二维变成一维：

![image-20240927102835709](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-03-12-PINN_notes/image-20240927102835709.png)

然后需要设计梯度计算的部分

![image-20240927102934822](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-03-12-PINN_notes/image-20240927102934822.png)

order是求几阶导

接下来就是基于上述的两个方程来构建损失函数

 ![image-20240927103448178](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-03-12-PINN_notes/image-20240927103448178.png)

![image-20240927104444975](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-03-12-PINN_notes/image-20240927104444975.png)

## 5 PINN的应用及局限性

![image-20250312102627371](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-03-12-PINN_notes/image-20250312102627371.png)