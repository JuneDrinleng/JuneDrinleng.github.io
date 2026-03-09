---
layout: post
title: "Fundamentals of Single-Particle Tracking Imaging"
date: 2023-05-26
tags: [SPT]
comments: true
author: junedrinleng
toc: true
post_id: 2023-05-26-Imaging_system
source_lang: zh
source_title: "单颗粒示踪成像基础知识"
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:30.189Z"
source_hash: b50035d0196e4912f0535c0f79cf7367278ea168d4b48a2d3e8047f947c104b5
---

This note mainly introduces the fundamentals of single-particle tracking technology, including the properties of gold nanoparticles in imaging systems and tracer particles

<!-- more -->

## 1 Fundamentals

### 1.1 Upright and Inverted Microscopes

#### 1.1.1 Overview

An optical microscope is an optical refractive system composed of two sets of lenses, where the lens group with a shorter focal length, closer to the object, and forming a real image is called the objective lens. The lens group with a longer focal length, closer to the eye pupil, and forming a virtual image is called the eyepiece. The object located in front of the objective lens is magnified by the objective lens to form an inverted real image. Optical microscopes are divided into upright microscopes and **[inverted microscope](http://www.mshot.com/ProSort/dzxwj.html)**

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/v2-a48b48682b57c084c4237d3402128727_1440w.webp)

Then, this real image is further magnified by the eyepiece to form an inverted virtual image at the viewer's near point distance, achieving the magnification effect. Through the microscope mechanical focusing system, the imaging conditions relative to the objective lens and the secondary imaging conditions for the observer's near point distance can be adjusted and satisfied.

#### 1.1.2 Differences Between the Two

1. The objective lens of an upright microscope has its turret facing downward, with the stage located below the objective lens; **[inverted microscope](http://www.mshot.com/ProSort/dzxwj.html)** has its objective lens facing upward, with the stage located above the objective lens.

2. The objective lens of an upright microscope is suitable for observing slices, etc.; **[inverted microscope](http://www.mshot.com/ProSort/dzxwj.html)** is suitable for observing live cells in culture dishes.

3. The working distance of the objective lens in an upright microscope is relatively short; **[inverted microscope](http://www.mshot.com/ProSort/dzxwj.html)** has a longer working distance.

4. An upright microscope can choose a 100X objective lens combined with a 10X eyepiece to achieve a high magnification of 1000X; the maximum magnification of an inverted microscope's objective lens is only 60X. This is because, at 100X, the objective lens is almost touching the sample, and the working distance is already less than the thickness of the container bottom. That means the objective lens would collide with the container bottom before focusing, making it impossible to focus.

### 1.2 Light Sheet

The difference between light sheet microscopy and traditional microscopy lies in the illumination method of the excitation light. Its illumination light is a thin "light sheet" parallel to the imaging plane, only illuminating the sample at the focal plane, while the samples above and below are not affected.

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/v2-d1e59721f0fbdfd354dd9c0943dd3a56_1440w.jpeg)

#### 1.2.1 Advantages of Light Sheet

1. **\*Improves the signal-to-background ratio (Signal-to-Background Ratio) and axial resolution**: Light sheet illumination technology ensures that samples above and below the focal plane are not excited, providing similar **optical slicing capabilities** to confocal microscopes; \*
2. **\*Reduces photobleaching and phototoxicity**: Compared to traditional fluorescence illumination techniques, phototoxicity can be reduced by **20-100 times**, allowing us to perform long-term 3D imaging of living biological samples under conditions closer to physiological states; \*
3. _Compared to point-scanning imaging using low QE PMTs in laser confocal and two-photon microscopes, light sheet microscopy uses high QE CCD or sCMOS cameras for **area imaging**, significantly improving imaging speed and image signal-to-noise ratio. Samples that take **minutes or even hours** to capture with confocal microscopes can be captured in **seconds to minutes** with light sheet microscopy. Therefore, light sheet microscopy is also particularly suitable for large sample imaging._

#### 1.2.2 Implementation of Light Sheet

The simplest method to generate a light sheet is to introduce a **cylindrical lens** into the optical path. The light passing through this lens maintains a constant width but is compressed into a plane in height, then illuminated by the illumination objective lens to form a "light sheet" at the focal plane. The imaging objective lens is placed perpendicular to the illumination objective lens and focuses on the light sheet to capture fluorescence signals.

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/v2-b1988dea4dbeff3bf2c7e6bff02e2e35_1440w.jpeg)

The width and thickness of the light sheet generated by this method are determined by the NA value of the illumination objective lens. As shown in Figure 5, the actual shape of the illumination beam is a "hourglass" shape with wide ends and a narrow middle. ω0 is the beam waist thickness, i.e., the thickness of the light sheet, b is the uniform illumination width, i.e., the effective field of view.

NA value: The numerical aperture (NA) of an optical system is a dimensionless number used to measure the range of angles of light that the system can collect.

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/v2-e530c36ae7abe917edce78e3adcc157c_1440w.jpeg)

Therefore, using an illumination objective lens with a smaller NA can achieve a wider range of uniform illumination, i.e., a larger field of view; however, the thickness of the light sheet also increases, leading to reduced axial resolution. In contrast, a high NA objective lens produces a smaller field of view but better axial resolution.

> **\*Note that** if the NA value of the imaging objective lens is very high, making its depth of field smaller than the thickness of the light sheet, the axial resolution of the system is mainly determined by the depth of field of the imaging objective lens. However, this can lead to the same issues as conventional fluorescence illumination, where parts of the sample above and below the focal plane are illuminated, causing unnecessary phototoxicity and stray light to negatively affect imaging quality.\*
> _If the NA value of the imaging objective lens is low, and the thickness of the light sheet is smaller than its depth of field, then the axial resolution of the system is determined by the thickness of the light sheet._

Detailed reference:

> Frontiers in Microscopy Imaging Technology Series: Light Sheet Fluorescence Microscopy (1) - Article by Photometrics - Zhihu https://zhuanlan.zhihu.com/p/60772855

## 2 Gold Nanoparticles Scattering
Why can we observe extremely small gold nanoparticles:

The mere number of reflected light is insufficient in terms of magnitude

Localized surface plasmon resonance (LSPR) on the surface of noble metal nanionic particles

Under the influence of an electromagnetic field, the polarization direction of free electrons on the surface of noble metals alternates, causing the free electrons to oscillate reciprocally

When the frequency of the electromagnetic field matches the inherent oscillation frequency of free electrons on the surface of the nanoparticle, localized surface plasmon resonance occurs

![image-20230526095049905](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20230526095049905.png)

Gold nanorods have two plasmon resonance peaks, representing different axes: the long axis and short axis. The free electrons oscillating in two different axial directions exhibit distinct properties. (This can be simply understood as the long and short axes having different dimensions, resulting in different resonance paths)

## 3 About Common Microscopy Techniques

### 3.1 Differential Interference Contrast Microscopy (DIC)

The optical path structure of a differential interference contrast microscope is shown in the figure below⬇️

![image-20230526095749600](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20230526095749600.png)

condenser: condenser

Wollaston Prism: Wollaston prism, which can manipulate [polarized light](<https://en.wikipedia.org/wiki/Polarization_(waves)>). It splits the light into two independent linear [polarized](https://en.wikipedia.org/wiki/Polarizer) outgoing light beams

A laser source emits laser light, which is polarized into a specific polarization direction after passing through a polarizer

These prisms split the incident light into two beams before it reaches the sample and recombine the beams after passing through the sample. After this process, the elliptically polarized and circularly polarized light collected by the Normaski prism is passed through an analyzer, resulting in DIC images through interference

### 3.2 Polarization Imaging Technology

A polarization imaging system has two polarizers: one is a polarizer, and the other is an analyzer

![image-20230526101810120](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20230526101810120.png)

Traditional polarization imaging system is as follows⬇️:

![image-20230526103351183](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20230526103351183.png)

When the object under test is an isotropic material such as spherical nanoparticles, the field remains black regardless of the rotation angle of the sample. This is because isotropic materials have weak depolarization ability, unable to change the vibration direction of the linearly polarized light formed by the polarizer, remaining perpendicular to the vibration direction of the analyzer. If the object under test is anisotropic (such as gold nanorods), it has two plasmon resonance bands. The angle between the long axis of the gold nanorod and the incident polarized light determines the direction and intensity of the two plasmon resonances. Part of the scattered light can be collected through the analyzer

![Different colors corresponding to different wavelengths of visible light](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/1576979426758310-5068659-5068661.jpg)
Gold nanorods with a long-axis absorption peak at 650nm show good response effects, as the response curve of the color CCD's red channel peaks around 650nm. Generally, the diffracted light from the long axis of gold nanorods appears red

For a single gold nanorod, its plasmon resonance mode is typically considered as the long-axis polarization mainly vibrating along the long-axis direction, while other axes vibrate along the transverse direction. In this study, a single gold nanorod can be approximately regarded as a simple dipole

**Why does the sample change the polarization direction?**

In this study, a single gold nanorod can be approximately regarded as a simple dipole. Its intensity can be expressed as:

$$
I\propto K*Pa*Ps
$$

\propto is the LaTeX code for "proportional to"

Light intensity is the square of the electromagnetic field strength

Pa describes the relationship between the incident electric field direction and the dipole's vibration direction, representing the excitation efficiency. Ps describes the detection efficiency of the scattered signal from the gold nanorod, indicating the detection efficiency of the scattered light

From the decomposition relationship in the figure below, we can know:

![image-20230526111144032](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20230526111144032.png)

$$
Pa=(sin \theta*cos\varphi)^2=sin^2\theta*cos^2\varphi \\
Ps=(sin \theta*sin\varphi)^2=sin^2\theta*sin^2\varphi
$$

Therefore, we can obtain:

$$
I\propto sin^2\theta*cos^2\varphi*sin^2\theta*sin^2\varphi=sin^4(\theta)sin^2(2\varphi)
$$

### 3.3 Dark-field Microscopy
Light passes through the condenser lens (the top lens is typically a concave spherical lens, which creates a hollow cone illumination pattern from light coming from all directions). The light converges after passing through the sample and then diverges, preventing background light from entering the eyepiece. Only light scattered by the sample, which changes its path direction, enters the eyepiece, thereby ensuring that the light entering the eyepiece (detector) is all scattered by the target sample.

Schematic diagram is as follows ⬇️

![image-20230526102220795](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20230526102220795.png)
