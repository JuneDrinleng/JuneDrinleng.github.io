---
layout: post
title: "Anomalous Diffusion"
date: 2025-02-13
tags: [SPT]
comments: true
author:junedrinleng
toc: true
---
This note mainly introduces the abnormal diffusion model and related data sets
<!-- more -->
## 0 Background and Keywords
Searching for the keyword `anomalous diffusion` on websites such as paperwithcode.com can quickly and accurately find relevant papers and data sets. The more classic one is the andi data set.

![image-20250213145210653](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250213145210653.png)

The andi data set can use python to generate trajectory data based on FBM, CTRW, LW, SBM and other models.

> AnDi: The Anomalous Diffusion Challenge
This data set is generated based on the above model, and there is a challenge website http://www.andi-challenge.org/
![image-20250213145117627](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250213145117627.png)

## 1 What is abnormal diffusion?

Normal particle motion in space obeys Brownian motion, and the mean square displacement of the particle motion trajectory is linear with time t:
$$
<r^2(t)> = 4Dt^{\alpha}
$$
Among them, $D$ is the diffusion coefficient, $t$ is time, $\alpha=1$.  
When the mean square displacement of the particle trajectory and time t no longer have a linear relationship, then we call it abnormal diffusion.
There are two cases of abnormal diffusion, one is sub-diffusion, that is, $\alpha<1$, and the other is super-diffusion, that is, $\alpha>1$. Generally speaking, subdiffusion corresponds to the movement of particles being hindered by the environment, while superdiffusion corresponds to the movement of particles being driven by the environment (or self-driven such as the movement of bacteria).

![image-20250213145310987](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250213145310987.png)

## 2 Trajectory analysis of abnormal diffusion
Then in actual movement, we may encounter a trajectory that is not all/every moment in Brownian motion or obeys a certain diffusion model, but shows certain stages. Therefore, in one case, one of the tasks in the field of abnormal diffusion is to segment the trajectory. By segmenting the trajectory in a smaller time range and distinguishing the abnormal diffusion model, the time resolution of the analysis of abnormal diffusion dynamics of the trajectory is improved.  
Of course, there are other challenges in addition, such as determining the diffusion model that it may conform to based on the trajectory (such as FBM, CTRW, LW, SBM, etc.), and predicting the abnormal diffusion parameters $D$ and $\alpha$ of the estimated trajectory, etc.   

## 3 Relative Papers

### 3.1 Some common methods

Based on RNN/LSTM

![image-20250213145620558](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250213145620558.png)

Based on Bayesian inference

![image-20250213145651712](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250213145651712.png)

Trajectory-based graphs (I understand that it prefers to use the cv method?)

![image-20250213145724814](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250213145724814.png)

For related references, see: https://physics.paperswithcode.com/paper/objective-comparison-of-methods-to-decode

### 3.2 Related work of this research group

1. **Extract latent features of single-particle trajectories with historical experience learning**

![gr1_lrg](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/gr1_lrg-1739430087192-3.jpg)