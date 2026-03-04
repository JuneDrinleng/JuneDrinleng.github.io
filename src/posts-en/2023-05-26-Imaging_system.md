---
layout: post
title: "The Basics of Single Particle Tracer Imaging"
date: 2023-05-26
tags: [SPT]
comments: true
author: junedrinleng
toc: true
---

The note mainly introduces the basics of single particle tracing technology, including the imaging system and the related properties of gold nanoparticles in tracer

<!-- particles.more -->

## 1 Basics

### 1.1 Upright and Inverted Microscopes

#### 1.1.1 Overview

The optical microscope is an optical refraction system composed of two groups of lenses, in which the lens group with a short focal length, close to the observation object, and imaging, is called the objective lens, and the lens group with a long focal length, close to the eye pupil, and imaging, is called the eyepiece lens.The observation object located in front of the objective is enlarged by the objective lens to form an inverted solid image.Optical microscopes are divided into upright microscopes and \* _ [inverted microscopes] (http://www.mshot.com/ProSort/dzxwj.html) _ \*

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/v2-a48b48682b57c084c4237d3402128727_1440w.webp)

Then, the real image is magnified by the eyepiece as a secondary magnification, and the inverted virtual image with magnification effect is obtained at the bright distance of the human eye.Through the microscope mechanical focusing system, the imaging conditions relative to the objective and the secondary imaging conditions of the observer's clear vision distance can be adjusted and satisfied.

#### 1.1.2 Differences

1. The upright microscope objective conversion plate is facing down, and the stage is below the objective; the objective of \* _ [inverted microscope] (http://www.mshot.com/ProSort/dzxwj.html) _ \* is facing up, and the stage is above the objective.

2. Upright microscope objective suitable for viewing slices, etc.; \* _ [inverted microscope] (http://www.mshot.com/ProSort/dzxwj.html) _ \* suitable for viewing living cells in a culture dish

3. The working distance of the upright microscope objective is relatively short; \* _ [Inverted microscope] (http://www.mshot.com/ProSort/dzxwj.html) _ \* Long working distance

4.The upright microscope can select the 100x objective lens, and the 10x eyepiece can achieve a high magnification of 1000x; the maximum magnification of the objective lens of the inverted microscope is only 60x, because at 100x, the objective lens is almost close to the sample, and the working distance is already less than the thickness of the bottom of the container, which means that the objective lens has already hit the bottom of the container before successful focusing, so it is impossible to focus at all.

#### 1.2 CDs

Light sheet microscopes differ from traditional microscopes in the way they excite light.Its illumination is a thin "sheet of light" parallel to the imaging plane, only the sample in the focal plane is illuminated, and the sample above and below it is not affected

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/v2-d1e59721f0fbdfd354dd9c0943dd3a56_1440w.jpeg)

#### 1.2.1 Benefits of Optical Films

1. - _\ _ Improved image and background contrast (Signal-to-Background Ratio) and axial resolution \* _: Flake lighting technology ensures that samples above and below the focal plane are not excitedHair with _ _ optical sectioning _ _ similar to confocal microscopy;\ _
2. - _\ _ Reduced photobleaching and phototoxicity \* _: Phototoxicity can be reduced by a factor of _ _ 20-100 _ _ compared to conventional fluorescent illumination techniques, so that we can perform long-term 3D imaging of living biological samples under conditions closer to physiological conditions;\ _ 3._Compared with laser confocal and two-photon microscopy using \* * point scanning imaging * * with low QE PMT, optical sheet microscopy uses * * surface imaging * * with a high QE CCD or sCMOS camera, which greatly improves the imaging speed and the signal-to-noise ratio of the image.Confocal samples take * * minutes or even hours * * to take, and light microscopes take * * seconds to minutes * \*.Therefore, light sheet microscopes are also particularly suitable for imaging large samples._

#### 1.2.2 Implementation of Optical Films

The easiest way to produce a light sheet is to introduce a \* _ cylindrical lens _ \* in the light path.Through the light of this lens, the width remains unchanged, but is compressed into a plane in height, and then through the illumination objective, a "light sheet" is formed on the focal plane.The imaging objective is placed perpendicular to the illumination objective and focused on the optical plate to obtain a fluorescence signal.

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/v2-b1988dea4dbeff3bf2c7e6bff02e2e35_1440w.jpeg)

The width and thickness of the light sheet generated using this method is determined by the NA value of the illumination objective.As shown in Figure 5, the actual shape of the illumination beam is a two-end wide, thin "hourglass" shape in the middle. ω0 is the thickness of the beam waist, that is, the thickness of the light sheet, and b is the uniform illumination width, that is, the effective field of view.

NA value: The numerical aperture (NA) of an optical system is a dimensionless number that measures the angular range of light that the system is capable of collecting.

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/v2-e530c36ae7abe917edce78e3adcc157c_1440w.jpeg)

Therefore, the use of a smaller NA illumination objective can achieve a wider range of uniform illumination, that is, a larger field of view; but correspondingly, the thickness of the light sheet is also larger, resulting in a lower axial resolution.And high NA objective lens productionThe raw light sheet will have a smaller field of view, but a better axial resolution.

> - _\ _ Note that \* _, if the NA value of the imaging objective is so high that its depth of field is less than the thickness of the optical sheet, then the axial resolution of the system is mainly determined by the depth of field of the imaging objective.However, this creates a problem with ordinary fluorescent illumination, that is, some samples above and below the focal plane will be illuminated, and unnecessary phototoxicity and stray light will negatively affect the imaging effect.\ _
>   _If the NA value of the imaging objective is low and the thickness of the light sheet is smaller than its depth of field, then the axial resolution of the system is determined by the thickness of the light sheet._

Detailed Reference:

> Of the topic of cutting-edge microscopic imaging technology: photoluminescence microscopy (1) - Photometrics article - https://zhuanlan.zhihu.com/p/60772855

## 2 Gold nanoparticle scattering

Why can gold nanoparticles of very small scale be seen:

It is not enough to rely solely on the reflection order of light

Plasma excitation resonance (LSPR) on the local surface of noble metal nano-ion particles

Under the action of an electromagnetic field, the polarization direction of the free electrons on the surface of the noble metal changes alternately, causing the free electrons to reciprocate.

Local surface exciton resonance occurs when the electromagnetic field changes at the same frequency as the natural frequency of free electron movement on the surface of the nanoparticle![image-20230526095049905](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20230526095049905.png)

Gold nanorods have two plasma resonance peaks that represent different axial rods: the long axis and the short axis.Free electrons moving in two different axes exhibit different properties.(It can be simply understood that the dimensions of the long axis and the short axis are different, and the distance of resonance is different)

## 3 About common microscopic imaging techniques

### 3.1 Differential Interferometric Phase Imaging (DIC)

The optical path structure of the differential interferometric phase contrast microscopy imaging system is shown in the figure below⬇️

![image-20230526095749600](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20230526095749600.png)

condenserWollaston Prism: Wollaston prism manipulates [polarized light] (<https://en.wikipedia.org/wiki/Polarization_(waves)>).It splits light into two independent linear [polarized] (https://en.wikipedia.org/wiki/Polarizer) exit beams

The laser source emits laser light, and polarized light in a specific polarization direction is obtained through the polarizer.

These prisms split the incident light beam before reaching the sample and re-integrate the beam after passing through the sample.After undergoing this process, the elliptical polarized and circular polarized light collected from the lens Normaski prism passes through the analyzer and interferes with each other to form a DIC picture.

### 3.2 Polarization imaging technology

The polarization imaging system has two polarizers, one is the polarizer and the other is the polarizer.

![image-20230526101810120](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20230526101810120.png)

Traditional polarization imaging systems are as follows⬇️:

![image-20230526103351183](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20230526103351183.png)

When the object under test is an isotropic material such as spherical nanoparticles, the field of view is black no matter how the sample is rotated. This is due to the weak depolarization ability of the isotropic object, which cannot change the vibration direction of the linearly polarized light formed by the polarizer, and is still perpendicular to the vibration direction of the polarizer.If the object under test is an anisotropic object (such as a nanogold nanorod), there are two ion resonance bands. The angle between the long axis of the gold nanorod and the incident polarized light determines the direction and intensity of the two plasma resonances. A part of the scattered light can be collected through the polarizer.![Different colors corresponding to different wavelengths of visible light](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/1576979426758310-5068659-5068661.jpg)
Gold nanorods with long-axis absorption peaks at 650nm have good response effects because the maximum value of the response curve of the red channel of the color CCD is around 650nm. Generally, the diffracted light of the long axis of gold nanorods turns red.

For a single gold nanorod, its plasmon resonance mode is usually considered to be that its long-axis polarization mainly vibrates along the long axis, while the other axes vibrate along the transverse axis. When a single gold nanorod in this study can be approximately considered as a simple dipole

**Why does the sample change polarization direction? **

A single gold nanorod can be approximately considered as a simple dipole in this study, and its strength can be expressed as:

$$
I\propto K*Pa*Ps
$$

\propto is the latex code proportional to

Light intensity is the square of the electromagnetic field intensity

Pa describes the relationship between the direction of the incident electric field and the vibration direction of the dipole, representing the excitation efficiency. Ps describes the scattered signal of gold nanorods that can be collected, indicating the detection efficiency of scattered light.

We can know from the decomposition relationship in the figure below:

![image-20230526111144032](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20230526111144032.png)

$$
Pa=(sin \theta*cos\varphi)^2=sin^2\theta*cos^2\varphi \\
Ps=(sin \theta*sin\varphi)^2=sin^2\theta*sin^2\varphi
$$

Then you can get:

$$
I\propto sin^2\theta*cos^2\varphi*sin^2\theta*sin^2\varphi=sin^4(\theta)sin^2(2\varphi)
$$

### 3.3 Dark field microscopy imaging

The light passes through the condenser (the top lens is usually concave spherical, which makes the light from all directions form an illumination pattern similar to a hollow cone) and then disperses after passing through the sample, so that the background light cannot enter the eyepiece. Only the light obtained by changing the direction of the light path after being scattered by the material in the sample will enter the eyepiece, thereby ensuring that the light entering the eyepiece (detector) is scattered by the target sample.

The schematic diagram is as follows⬇️

![image-20230526102220795](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20230526102220795.png)
