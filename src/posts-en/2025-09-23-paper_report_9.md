---
layout: post
title: "20250923 Literature Reading Notes"
date: 2025-09-23
tags: [paper]
comments: true
author:junedrinleng
toc: true
---

This note mainly records super-resolution interpolation frame generation, 3D reconstruction of CNN, neural network dynamics modeling, and a liposome vesicle constructed through the self-assembly of bacteriophage.

<!-- more -->
## 1 Topology and kinetic pathways of colloidosome assembly and disassembly
> ref: R. Adkins et al., Proceedings of the National Academy of Sciences. 122, e2427024122 (2025).

This article focuses on the topological structure during the self-assembly and disassembly process of liposome microcapsules, but if it is not based on phage self-assembly, it may be possible to try to reproduce it.

![image-20250923170524933](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923170524933.png)

Picture A here is the electron microscope structure of a phage. The fluid film it consists of is self-assembled by these pore-containing phages. The structure of the fluid film is shown in Figure B.

The formation of droplets of this fluid can be aided by gravity:

![image-20250923170748084](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923170748084.png)

![image-20250923170847234](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923170847234.png)

Figures A and C here depict the blocking/diffusion of photoactivated PEG by this vesicle. A and B are the cases of 1kDa. Since the molecular weight of PEG is relatively small, it can freely diffuse out of the vesicles, so the fluorescent display in picture B is uniform.

C and D are 20kDa PEG. It can be seen that they show spatial heterogeneity under fluorescence, indicating that PEG cannot diffuse freely in this case.

## 2 Deep Learning Reaction Framework (DLRN) for kinetic modeling of timeresolved data

> ref: N. Alagna *et al.*, *Commun. Chem.* **8**, 153 (2025).

This piece is based on model analysis, which combines experimental data and physical/mathematical models to perform dynamic modeling.

![image-20250923172831778](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923172831778.png)

It is equivalent to first inputting the spectral data into the model selection network, doing a matching of the kinetic model (called model prediction to be precise), then converting the predicted kinetic model into a matrix of rate constants, and combining this matrix with the spectral data to predict tau.

## 3 Deep Learning-Assisted Automated Multidimensional Single Particle Tracking in Living Cells

> ref: D. Song *et al.*, *Nano Lett.* **24**, 3082–3088 (2024).

This is an article written by Teacher Fang Ning for 24 years on deep learning-assisted single-particle 3D reconstruction. The technology is quite old.

![image-20250923173959181](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923173959181.png)

A dual-channel imaging system, focused measurement $\delta y$ to determine the position of z, defocused to infer the rotation angle of the gold rod, CNN used in the network:

![image-20250923174217510](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923174217510.png)

## 4 Content-aware frame interpolation (CAFI): deep learning-based temporal super-resolution for fast bioimaging

> ref: M. Priessner *et al.*, *Nat. Methods*. **21**, 322–330 (2024).

![image-20250923174429178](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923174429178.png)

![image-20250923174554704](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923174554704.png)

This article develops a super-resolution frame interpolation technology CAFI, which even supports multiple frame interpolation to achieve higher resolution.

Here we mainly learn several parameters:

![image-20250923174841241](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923174841241.png)