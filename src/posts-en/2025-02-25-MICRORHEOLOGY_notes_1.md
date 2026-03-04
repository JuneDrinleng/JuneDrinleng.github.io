---
layout: post
title: "Microrheology Notes 1"
date:   2025-02-25
tags: [SPT]
comments: true
author: junedrinleng
toc: true
---

This note mainly introduces *Microrheology* by Eric M. Furst (Author), Todd M. Squires (Author). This note is the notes of the introduction part of the book.
<!-- more -->

## Microrheology

Microrheology is a class of tools for characterizing the rheological properties of materials. Common features of microrheology include elasticity and viscosity, which generally exhibit the characteristics shown in the following figure:

![image-20250225174219068](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250225174219068.png)

It can be observed that for a pure viscous fluid, after a particle is displaced by an external force, if the external force is removed, the particle remains at the position pulled by the force; whereas for an elastic solid, if the external force is removed, the particle returns to its original position.

Of course, in reality, possible fluids may have both viscous and elastic properties, so viscoelasticity arises accordingly.

### Active and passive microrheology

Early measurement methods of microrheology mainly exhibited the following characteristics: measuring the movement of a probe particle embedded in the material in response to forces, thereby inferring the material's response properties.

When external interactions such as magnetic, gravitational, or centrifugal forces perturb the particle, this is active microrheology; conversely, if there is no such external force, it is passive microrheology.

> Aside: TG Mason is actually the pioneer of passive microrheology.
>
> The other class, called passive microrheology, is a more recent development, and began with the seminal work of Mason and Weitz (1995) and Gittes et al. (1997)

Passive microrheology employs extremely small microrheology probe particles (typically micrometer or smaller in size), whose thermal fluctuations are strong enough to drive measurable motion of the probe. This motion originates from the continuous thermal fluctuations of surrounding molecules, causing the probe to exhibit random motion in the environment. Due to these random forces, the particles move in different directions and intensities, covering multiple time scales. The magnitude of the random forces and the particle's response to these forces depend on the material's properties. In a viscous fluid, particles driven by random forces typically drift along the direction of the force, exhibiting diffusion behavior with an average displacement.

**Can it be considered that in a viscous fluid, particles are mainly driven by random forces to drift along the direction of the force?**
$$
<\Delta x^2(t)>=2Dt\\
$$

$$
\zeta = 6 \pi a \eta
$$

Stokes calculated the fluid dynamic resistance ζ, as shown in (2).

Combining Einstein and Stokes, we can derive:
$$
D = \frac{k_B T}{6 \pi a \eta}
$$

### Limitations and Advantages

**Limitations:**

Microrheology has always had some important limitations from the beginning: its core technology relies on tracking the motion of small particles in the material, so this method is only applicable to **relatively soft materials**, whose modulus is typically no more than **hundreds of pascals** (equivalent to the stiffness of gel) or liquids with higher flowability than honey.

**Advantages:** Small sample size, easy data acquisition, sensitivity, extension to frequency domain, in-situ (local rheology), simple experiments

![image-20250225180117014](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250225180117014.png)

Microrheology is suitable for small batches and low-modulus samples, while traditional rheology is more suitable for high-concentration and high-modulus materials.

### Linear and Nonlinear Microrheology

![image-20250225181136123](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250225181136123.png)

The shear stress and strain are shown in the figure above, where $A_y$ is the area of application.

If the material between the plates is an elastic solid, the strain will reach a stable value after applying a given stress and no longer change. Whereas if the material is a viscous liquid, the strain will continue to increase over time, showing the material's continuous deformation, at which point the plates will move to the right at a shear rate **γ = σ / η**. These two behaviors are analogous to the movement of probe particles in Figure 1.1, corresponding to the mechanical responses of elasticity and viscosity, respectively.

**Linear response:** Reflects the material's micro-response when deviating from equilibrium (similar to a system in equilibrium being perturbed slightly and gradually returning to equilibrium through linear response)

**Nonlinear response:** This often corresponds to the material experiencing stress beyond the linear response region, further stress causing structural damage within the material

The Cox–Merz rule is an empirical relationship related to complex viscosity and frequency:
$$
\eta^*(\omega) = \frac{G^*(\omega)}{i\omega}
$$
Linear response measurements are referenced in the book's 1.2.2 section

![image-20250225182314762](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250225182314762.png)

### Complex Shear Modulus G*
General oscillatory strain can be applied via a rheometer:
$$
\gamma(t) = \gamma_0 e^{i\omega t}
$$
The material then responds to the oscillatory strain, generating stress:
$$
\sigma(t) = \sigma_0 e^{i(\omega t + \delta)}
$$
From the stress and strain, the frequency-dependent complex shear modulus can be derived:
$$
G^*(\omega) = \frac{\sigma(t)}{\gamma(t)} = \frac{\sigma_0 e^{i\delta}}{\gamma_0}
$$
Typically, the complex shear modulus is divided into real and imaginary parts:
$$
G^*(\omega) = G'(\omega) + iG''(\omega)
$$
where $G'(\omega)$ represents the elastic (storage) modulus; $G''(\omega)$ represents the viscous (loss) modulus.

The storage modulus describes the recoverable energy required for elastic deformation at a specific frequency. A higher $G'(\omega)$ indicates dominant elastic behavior, resembling a solid.

The loss modulus describes the irreversible energy dissipation during viscous flow at a specific frequency. A higher $G''(\omega)$ indicates dominant viscous behavior, resembling a liquid.

Additionally, the phase angle is defined as:
$$
\tan \delta(\omega) = \frac{G''(\omega)}{G'(\omega)}
$$
For purely elastic materials, $\delta = 0$, where stress varies directly with strain. For viscous fluids, $\delta = \pi/2$, where stress lags the strain by 90 degrees (implying that $\tan\delta$ approaches infinity as $G' \rightarrow 0$).

## Colloidal Particles

This section primarily reviews the physicochemical properties of colloidal particles.

### Colloidal Particles as Probes

Colloidal particles as probes require the following three characteristics:

- Uniform size and shape of particles
- Stability of the probe to prevent chemical degradation; uniform dispersion in the medium to reflect local microrheological properties (dispersibility)
- Surface chemical inertness (to avoid altering the original properties of the sample medium after probe particle introduction)