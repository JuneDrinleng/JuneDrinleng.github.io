---
layout: post
title: "Anomalous Diffusion"
date: 2025-02-13
tags: [SPT]
comments: true
author: junedrinleng
toc: true
post_id: 2025-02-13-anomalous_diffusion
source_lang: zh
source_title: "Anomalous Diffusion"
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.205Z"
source_hash: e7d33b1059b5f93a0d56bbc18308dccd0bf734a8615d34e0f29b34e7600b462a
---

This note mainly introduces the anomalous diffusion model and related datasets
<!-- more -->
## 0 Background and Keywords
Searching for the keyword `anomalous diffusion` on websites like paperwithcode.com can quickly and accurately find related papers and datasets, among which the classic one is the AnDi dataset  

![image-20250213145210653](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250213145210653.png)

The AnDi dataset can be generated using Python to create trajectory data based on models such as FBM, CTRW, LW, SBM, etc.  

> AnDi: The Anomalous Diffusion Challenge
This dataset is generated based on the aforementioned models, and there is a challenge website http://www.andi-challenge.org/    
![image-20250213145117627](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250213145117627.png)

## 1 What is Anomalous Diffusion

Normal particle motion in space follows Brownian motion, with the mean squared displacement of particle trajectories showing a linear relationship with time $t$:
$$
<r^2(t)> = 4Dt^{\alpha}
$$
where $D$ is the diffusion coefficient, $t$ is time, and $\alpha=1$.  
When the mean squared displacement of particle trajectories does not show a linear relationship with time $t$, we refer to this as anomalous diffusion. Anomalous diffusion has two cases: subdiffusion ($\alpha<1$) and superdiffusion ($\alpha>1$). Generally, subdiffusion corresponds to particle motion hindered by the environment, while superdiffusion corresponds to particle motion driven by the environment (or self-driven, such as bacterial motion).

![image-20250213145310987](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250213145310987.png)

## 2 Trajectory Analysis of Anomalous Diffusion
In actual motion, we may encounter a trajectory that is not entirely or at all times Brownian motion or follows a specific diffusion model, but rather exhibits certain stages. Therefore, in one scenario, a task in the field of anomalous diffusion is to perform segmentation on the trajectory, enabling the identification of anomalous diffusion models within smaller time ranges, thereby improving the temporal resolution of the trajectory's anomalous diffusion dynamics analysis.  
Of course, there are other challenges as well, such as determining the possible diffusion model (e.g., FBM, CTRW, LW, SBM) that a trajectory conforms to, as well as predicting and estimating the anomalous diffusion parameters $D$ and $\alpha$ of the trajectory.

## 3 Related Papers

### 3.1 Some Common Methods

Based on RNN/LSTM

![image-20250213145620558](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250213145620558.png)

Based on Bayesian inference

![image-20250213145651712](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250213145651712.png)

Based on trajectory graphs (I understand this as leaning towards using CV methods?)

![image-20250213145724814](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250213145724814.png)

Related references can be found at: https://physics.paperswithcode.com/paper/objective-comparison-of-methods-to-decode

### 3.2 Related Work from Our Group

1. **Extract latent features of single-particle trajectories with historical experience learning**

![gr1_lrg](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/gr1_lrg-1739430087192-3.jpg)
 /think
