---
layout: post
title: "Viscosity Detection Based on Particles"
date: 2025-02-25
tags: [SPT]
comments: true
author: junedrinleng
toc: true
post_id: 2025-02-25-Particle_based_viscoelasticity
source_lang: zh
source_title: "基于颗粒的粘度检测"
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.219Z"
source_hash: 5c97f5aff1ea91de19a1e78d966202b64a603deb1dd6f96219fa4ed8f24557c8
---

This note primarily introduces viscosity detection based on particles, including techniques based on dynamic light scattering (DLS) and particle image velocimetry (VPT). This article will systematically detail and organize the theoretical and computational aspects in sequence.

## Viscosity Detection via Particles

Particle-based viscoelastic detection is a passive microrheology technique that introduces tracer particles into the sample system and tracks their Brownian motion or scattering intensity changes using imaging or scattering detection systems. Subsequently, by analyzing the particle trajectories or autocorrelation functions, the diffusion coefficient is calculated, and the viscosity (viscosity, $\eta$) of the system is precisely derived through the Stokes-Einstein relation.

For example, in dynamic light scattering technology, the mean squared displacement (Mean Squared Displacement, MSD) is calculated by detecting the time variation of the scattered light intensity of probe particles:

![3b0e3fdb6bb894dbb9f03d0a477207d](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/3b0e3fdb6bb894dbb9f03d0a477207d.jpg)

> B. A. Krajina *et al.*, *Science Advances*. **7**, eabe1969 (2021).

![image-20250225113547131](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250225113547131.png)

> B. A. Krajina *et al.*, *ACS Cent. Sci.* **3**, 1294–1303 (2017).

In particle image velocimetry, the MSD is directly calculated from the particle trajectory information.

The diffusion coefficient $D$ and $\alpha$ are obtained through MSD fitting:
$$
<r^2(t)>=4Dt^\alpha
$$
![cedeac4b3c30c76146455339c956476](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/cedeac4b3c30c76146455339c956476.png)

> *Journal of Molecular Biology*. **430**, 4443–4455 (2018).

Then, the viscosity is calculated using the diffusion coefficient:
$$
\eta_t=\frac{k_B T}{6\pi r_pD_t}\\
\eta_r=\frac{k_B T}{8\pi r_p^3D_r}\\
$$
where the subscript $r$ denotes rotation, $\eta_r$ is the viscosity measured based on the rotational diffusion coefficient $D_r$, and $\eta_t$ is the viscosity measured based on the translational diffusion coefficient $D_t$:

![08dc1769aec2b4436e826aa4ef64025](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/08dc1769aec2b4436e826aa4ef64025.png)

> M. Unni *et al.*, *Science Advances* (2021), doi:[10.1126/sciadv.abf8467](https://doi.org/10.1126/sciadv.abf8467).
