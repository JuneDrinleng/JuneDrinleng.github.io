---
layout: post
title: "20250923 Literature Reading Notes"
date: 2025-09-23
tags: [paper]
comments: true
author: junedrinleng
toc: true
post_id: 2025-09-23-paper_report_9
source_lang: zh
source_title: "20250923文献阅读笔记"
title_key: literature_note
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.314Z"
source_hash: cf4f9c7d3c722a0d0e49d5fd54f3aea5b77cc46a68d59862e29008f2c5f90858
---

This note mainly records the generation of super-resolution interpolated frames, 3D reconstruction using CNN, neural network dynamics modeling, and a lipid vesicle constructed through self-assembly via bacteriophages.

<!-- more -->
## 1 Topology and kinetic pathways of colloidosome assembly and disassembly  
> ref: R. Adkins et al., *Proceedings of the National Academy of Sciences* **122**, e2427024122 (2025).  

This paper focuses on the topological structure and kinetic pathways of colloidosome self-assembly and disassembly. However, if it were not based on bacteriophage self-assembly, it might be worth attempting to reproduce.  

![image-20250923170524933](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923170524933.png)  

Figure A shows the electron microscopy structure of the bacteriophage, whose fluid membrane is formed by the self-assembly of these pore-containing bacteriophages, as illustrated in the fluid membrane structure shown in Figure B.  

The formation of this fluid droplet can be assisted by gravity:  

![image-20250923170748084](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923170748084.png)  

![image-20250923170847234](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923170847234.png)  

Figures A and C describe the situation where PEG is blocked/diffused by this vesicle. Figures A and B correspond to the 1kDa case, where PEG's small molecular weight allows it to freely diffuse out of the vesicle, resulting in a uniform fluorescence display in Figure B.  

In contrast, Figures C and D show 20kDa PEG, which exhibits spatial heterogeneity under fluorescence, indicating that PEG cannot freely diffuse in this case.  

## 2 Deep Learning Reaction Framework (DLRN) for kinetic modeling of time-resolved data  

> ref: N. Alagna *et al.*, *Commun. Chem.* **8**, 153 (2025).  

This paper is based on model-based analysis, combining experimental data with physical/mathematical models for kinetic modeling.  

![image-20250923172831778](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923172831778.png)  

It essentially involves inputting spectral data into a selected network model to perform model prediction (accurately termed as model prediction), then converting the predicted kinetic model into a matrix of rate constants, and using this matrix combined with spectral data to predict tau.  

## 3 Deep Learning-Assisted Automated Multidimensional Single Particle Tracking in Living Cells  

> ref: D. Song *et al.*, *Nano Lett.* **24**, 3082–3088 (2024).  

This is a 2024 paper by Professor Fang Ning on deep learning-assisted multidimensional single-particle 3D reconstruction. The technology is quite old.  

![image-20250923173959181](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923173959181.png)  

A dual-path imaging system, where focused measurement of $\delta y$ determines the z-position, and defocused measurement infers the rotation angle of the gold rod. The network uses CNN:  

![image-20250923174217510](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923174217510.png)  

## 4 Content-aware frame interpolation (CAFI): deep learning-based temporal super-resolution for fast bioimaging  

> ref: [Paper reference missing in original text].  

This section discusses content-aware frame interpolation (CAFI), a deep learning-based approach for temporal super-resolution in fast bioimaging.
> ref: M. Priessner *et al.*, *Nat. Methods*. **21**, 322–330 (2024).

![image-20250923174429178](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923174429178.png)

![image-20250923174554704](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923174554704.png)

This paper develops a super-resolution frame interpolation technique called CAFI, which even supports multiple frame interpolation to achieve higher resolution.

Here, we mainly focus on several parameters:

![image-20250923174841241](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923174841241.png)
