---
layout: post
title: "Microrheology Notes 1"
date: 2025-02-25
tags: [SPT]
comments: true
author:junedrinleng
toc: true
---

This note mainly introduces the book Microrheology by Eric M. Furst (Author), Todd M. Squires (Author). This note is the introduction part of the book.
<!-- more -->

## Microrheology

Microrheology is a tool for characterizing the rheology of materials. Common microrheological characteristics include elasticity and viscosity. Generally, the performance of both shows the characteristics as shown in the figure below:

![image-20250225174219068](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250225174219068.png)

It can be found that for pure viscous fluid, after the particles are displaced by the outside world, if the external force is removed, the particles will stay in the position after being pulled by the force; while for elastic solid, if the external force is removed, the particles will return to the original position.

Of course, possible fluids in reality include both viscous and elastic, so viscoelastic is also produced.

### Active and passive microrheology

The early measurement methods of microrheology mainly showed the following characteristics: measuring the movement of probe particles embedded in the material in response to force, and then infer the response characteristics of the material.

When there are external interactions such as magnetic or gravitational or centrifugal that disturb the particles, this is active microrheology; conversely, if there is not, it is passive microrheology.

> Digression: TG Mason is actually the founder of passive microrheology.
>
> The other class, called passive microrheology, is a
> more recent development, and began with the seminal work of Mason
> and Weitz (1995) and Gittes et al. (1997)

Passive microrheology uses extremely small microrheology probe particles (often only microns or smaller in size) whose thermal fluctuations are strong enough to drive measurable movement of the probe. This movement results from the continuous thermal wave bombardment of surrounding molecules, causing the probe to move randomly in the environment. As a result of these random forces, particles move in different directions and intensities across multiple time scales. The magnitude of the random forces and how the particles respond to these forces depends on the properties of the material. In viscous fluids, particles driven by random forces usually drift along the force direction, and their motion trajectories show diffusion behavior with average displacement.

**It can be considered that in viscous fluids, particles are mainly driven by random forces to drift along the force direction? **
$$
<\Delta x^2(t)>=2Dt\\
$$

$$
\zeta = 6 \pi a \eta
$$

Stokes calculated the hydrodynamic resistance ζ as (2).

Combining Einstein and Stokes gives:
$$
D = \frac{k_B T}{6 \pi a \eta}
$$

### Limitations and Advantages

**Limitations:**

Microrheology has had some important limitations from the start: its core technology relies on tracking the movement of small particles in materials, so the method is only suitable for relatively soft materials, whose modulus usually does not exceed a few hundred pa (equivalent to the stiffness of jelly) or liquids that are more fluid than honey.

**Advantages:** Small sample size, easy data acquisition, sensitive, extended to frequency domain, in situ (Local rheology), simple experiment

![image-20250225180117014](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250225180117014.png)

Microrheology is suitable for low-volume, low-modulus samples, while bulk rheology is more suitable for high-concentration and high-modulus materials.

### Linear and nonlinear microrheology

![image-20250225181136123](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250225181136123.png)

Shear stress and strain are shown in the figure above, where $A_y$ is the action area

If the material between the plates is an elastic solid, then after a given stress is applied, the strain will reach a stable value and no longer change. If the material is a viscous liquid, the strain will continue to increase over time, manifested as continuous deformation of the material, and the plate will move to the right at a shear rate **γ = σ / η**. The two behaviors are similar to the movement of the probe particles in Figure 1.1 and correspond to the mechanical responses of elastic and viscous properties respectively.

**Linear response**: reflects the micro-response of the material when it deviates from the equilibrium state (similar to a system at equilibrium that deviates from equilibrium after being perturbed, and then gradually returns to the equilibrium state through a linear response)

**Nonlinear response**: This often corresponds to the stress received by the material exceeding the linear response area, and further stress causes damage to the internal structure of the material.

The Cox – Merz rule is an empirical relationship related to frequency-dependent complex viscosities:
$$
\eta^*(\omega) = \frac{G^*(\omega)}{i\omega}
$$
For the measurement of linear response, see 1.2.2 of the book

![image-20250225182314762](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250225182314762.png)

### Complex shear modulus G*

Oscillatory strain can generally be applied via a rheometer:
$$
\gamma(t) = \gamma_0 e^{i\omega t}
$$
Then the material will respond to the oscillatory strain, thereby generating stress:
$$
\sigma(t) = \sigma_0 e^{i(\omega t + \delta)}
$$
Then the frequency-dependent complex shear modulus is obtained from stress and strain:
$$
G^*(\omega) = \frac{\sigma(t)}{\gamma(t)} = \frac{\sigma_0 e^{i\delta}}{\gamma_0}
$$
In general, the complex shear modulus is divided into real and imaginary parts:
$$
G^*(\omega) = G'(\omega) + iG''(\omega)
$$
Among them, elastic (storage) modulus $G'(\omega)$; viscous (loss) modulus $G''(\omega)$

The storage modulus describes the (recoverable) energy required for a material to elastically deform at a specific frequency. If $G'(\omega)$ is high, the elastic behavior of the material dominates, similar to a solid.

The loss modulus describes the (irrecoverable) energy loss when a material experiences viscous flow at a specific frequency. If $G''(\omega)$ is high, the viscous behavior of the material dominates, similar to a liquid.

In addition to this there is also the phase angle:
$$
\tan \delta(\omega) = \frac{G''(\omega)}{G'(\omega)}
$$
A purely elastic material has a range of $δ=0$, where its stress varies with strain, while a viscous fluid has a range of $δ=π/2$, where its stress varies 90 degrees with the applied strain (of course, this means that the difference in tanδ$ is g'→0$)

## Colloidal particles

This section mainly reviews the physical and chemical properties of colloidal particles

### Colloidal particles as probes

Colloidal particles, as probes, need to meet the following three characteristics:

- Uniform particle size and shape
- The probe must be stable to avoid chemical degradation; it must also be uniformly dispersed in the medium to reflect local microrheological properties (dispersion)
- Surface chemical inertness (to avoid changing the original properties of the medium to be measured after the introduction of probe particles)