---
layout: post
title: "Anomalous Diffusion"
date:   2025-01-04
tags: [SPT]
comments: true
author: junedrinleng
toc: true
---
该笔记主要介绍异常扩散模型以及相关数据集
<!-- more -->
## 0 背景与关键词
在paperwithcode.com等网站搜索关键词`anomalous diffusion`可以迅速而准确的找到相关的论文和数据集，其中较为经典的就是andi数据集  

![image-20250213145210653](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-02-13-anomalous_diffusion/image-20250213145210653.png)

andi数据集可以使用python来生成基于FBM, CTRW, LW, SBM等模型的轨迹数据  

> AnDi: The Anomalous Diffusion Challenge
该数据集是基于上述的模型生成的，且有一个挑战的网站http://www.andi-challenge.org/    
![image-20250213145117627](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-02-13-anomalous_diffusion/image-20250213145117627.png)

## 1 何为异常扩散

正常的粒子在空间中的运动是服从布朗运动的，其粒子运动轨迹的均方位移与时间t呈现线性：
$$
<r^2(t)> = 4Dt^{\alpha}
$$
其中，$D$是扩散系数，$t$是时间，$\alpha=1$。  
而当粒子运动轨迹的均方位移和时间t不在呈现一次方的关系，那么此时我们称之为异常扩散。
异常扩散有两种情况，一种是亚扩散，即$\alpha<1$，另一种是超扩散，即$\alpha>1$。一般而言，亚扩散对应与粒子的运动受到了环境的阻碍，而超扩散对应于粒子的运动受到了环境的驱动（或者自驱动比如细菌的运动）。

![image-20250213145310987](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-02-13-anomalous_diffusion/image-20250213145310987.png)

## 2 异常扩散的轨迹分析
那么在实际运动中，我们可能会遇到一条轨迹并不是全部/时时刻刻都是布朗运动或者服从某一种扩散模型，而是呈现出一定的阶段性，因此在一情况下，异常扩散领域的一个任务就是对轨迹进行segmentation，通过对轨迹在更小的时间范围内的分割与分辨异常扩散模型，进而实现了对轨迹异常扩散动力学分析的时间分辨率的提高。  
当然，除此之外还有其他的挑战，例如根据轨迹确定其可能符合的扩散模型（如FBM, CTRW, LW, SBM等），以及预测估计轨迹的异常扩散参数$D$和$\alpha$等。   

## 3 Relative Papers

### 3.1 一些常见的方法

基于RNN/LSTM

![image-20250213145620558](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-02-13-anomalous_diffusion/image-20250213145620558.png)

基于贝叶斯推断

![image-20250213145651712](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-02-13-anomalous_diffusion/image-20250213145651712.png)

基于轨迹的图（我理解的是偏向于用cv的方法来做？）

![image-20250213145724814](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-02-13-anomalous_diffusion/image-20250213145724814.png)

相关reference参见：https://physics.paperswithcode.com/paper/objective-comparison-of-methods-to-decode

### 3.2 本课题组相关工作

1. **Extract latent features of single-particle trajectories with historical experience learning**

![gr1_lrg](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-02-13-anomalous_diffusion/gr1_lrg-1739430087192-3.jpg)
