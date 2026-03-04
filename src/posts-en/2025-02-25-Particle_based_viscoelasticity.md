---
layout: post
title: "Particle-based viscosity detection"
date: 2025-02-25
tags: [SPT]
comments: true
author:junedrinleng
toc: true
---

This note mainly introduces particle-based viscosity detection, including based on dynamic light scattering (DLS) technology and based on particle image tracing (VPT). This article will introduce and organize in detail the theoretical and practical calculation parts.
<!-- more -->

## Implement viscosity detection based on particles

Particle-based viscoelastic detection is a passive microrheological technology that introduces tracer particles into the system to be measured and uses an imaging or scattering detection system to track the Brownian motion or scattered light intensity changes of the particles. Subsequently, by analyzing the motion trajectory or autocorrelation function of the particles, the diffusion coefficient is calculated, and the viscosity (viscosity, $\eta$) of the system is accurately derived based on the Stokes-Einstein formula.

For example, in dynamic light scattering technology, the mean squared displacement (MSD) is calculated by detecting the time change of the scattered light intensity of the probe particles:

![3b0e3fdb6bb894dbb9f03d0a477207d](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/3b0e3fdb6bb894dbb9f03d0a477207d.jpg)

> B. A. Krajina *et al.*, *Science Advances*. **7**, eabe1969 (2021).

![image-20250225113547131](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250225113547131.png)

> B. A. Krajina *et al.*, *ACS Cent. Sci.* **3**, 1294–1303 (2017).

In particle image tracing, the mean square displacement is calculated directly based on the trajectory information of the particles.

The diffusion coefficient D and $\alpha$ are obtained through MSD fitting:
$$
<r^2(t)>=4Dt^\alpha
$$
![cedeac4b3c30c76146455339c956476](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/cedeac4b3c30c76146455339c956476.png)

> *Journal of Molecular Biology*. **430**, 4443–4455 (2018).

Then the viscosity is obtained by using the diffusion coefficient:
$$
\eta_t=\frac{k_B T}{6\pi r_pD_t}\\
\eta_r=\frac{k_B T}{8\pi r_p^3D_r}\\
$$
The angle r represents rotation, $\eta_r$ is the viscosity measured based on the rotational diffusion coefficient $D_r$, and $\eta_t$ is the viscosity measured based on the translational diffusion coefficient $D_t$:

![08dc1769aec2b4436e826aa4ef64025](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/08dc1769aec2b4436e826aa4ef64025.png)

> M. Unni *et al.*, *Science Advances* (2021), doi:[10.1126/sciadv.abf8467](https://doi.org/10.1126/sciadv.abf8467).