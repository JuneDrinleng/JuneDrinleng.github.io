---
layout: post
title: "20250903 Literature Reading Notes"
date: 2025-09-03
tags: [paper]
comments: true
author:junedrinleng
toc: true
---

This note mainly records the recent literature on keywords related to synthetic cells, including a review of artificial cells, a DNA reaction driven by magnetism, and a circadian rhythm simulation experiment of giant unilamellar vesicle biomimetic cells.

<!-- more -->

## 1 Magnetic activation of spherical nucleic acids enables remote control of synthetic cells

> ref: E. Parkes *et al.*, *Nat. Chem.*, 1–9 (2025).

In synthetic cells, liposome vesicles that can mimic the structure and function of living cells have become a hot field and can be used in drug delivery and other application scenarios.

This article constructed a magnetic nanoparticle similar to a core-shell structure. Its main structure is shown in the figure below:

![image-20250904112547557](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904112547557.png)

The size of this kind of nanoparticles feels very small. I don’t know if the scale bar in the picture is wrong or if they are really that small.  

The inner sphere has a magnetic response, and the outer chain segments are used to connect DNA chains to achieve related reactions:

![image-20250904112826116](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904112826116.png)

Achieved through 1,3 dipolar cycloaddition of the azide group. When an alternating magnetic field is introduced from the outside, the magnetic response of the internal magnetic particles will cause the local temperature of the particles to change, which can change the activity of the modified chain segment and connect the DNA chain segment to the substrate:

![image-20250904112951398](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904112951398.png)

![image-20250904113018741](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904113018741.png)

It can be found in the experiment that by applying an external magnetic field, the vesicle droplets that originally exhibit red fluorescence inside change to produce green modified chain segments, causing some droplets to appear green.

## 2 Reconstructing circadian clocks in synthetic cells reveals principles of timekeeping

> ref: A. Z. T. Li, A. LiWang, A. B. Subramaniam, *Nat Commun*. **16**, 6686 (2025).

The entire document is mainly explained from the perspective of biological mechanisms such as protein translation and expression. The system of this article is:

![image-20250904113618619](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904113618619.png)

By diffusing three solutions of proteins KaiA-C into the growing vesicles, a multi-component protein droplet wrapped in the vesicles is formed. The photographed results are shown in the figure below:

![image-20250904113800557](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904113800557.png)

It can be seen that within the 4-day experimental interval, the droplets of v1 and v2 show a certain periodic rhythm.  

It should be noted that the fluorescently labeled BSA (FITC-BSA) is used as a background to test whether the syn-cell membrane has holes and penetration:

![image-20250904114021134](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904114021134.png)

Under normal circumstances, the membrane should not have obvious characteristics for other proteins such as BSA, so in Figure B we can see that spatially BSA is almost evenly distributed in the field of view. Judging from the fluorescence intensity of the cross-section, the fluorescence intensity of BSA in the droplet area and outside the droplet is not much different.



## 3 Strategies and Applications of Synthetic Cell Communication

> ref: H. Moghimianavval, C. Newell, P. Parvizian, M. J. Booth, A. P. Liu, *Nat Chem Biol*. **21**, 1317–1329 (2025).

This is a review about communication between bionic cells. I think it also summarizes some of the production schools of bionic cells to a certain extent:

![image-20250904114325446](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904114325446.png)

For example, in this picture, it is recorded that synthetic cells have polymer boundaries, droplet boundaries formed by proteins, bionic droplets formed by condensates (such as condensate droplets formed by the polymerization of anions and cations mentioned in 9.2), as well as the liposome vesicles mentioned above and many hydrogels that have been made for everyone.   

This picture also summarizes some common signals such as small signaling molecules (seems to be ATP), large biological molecules such as DNA and proteins, and some physical factors such as light and heat. These signals trigger a series of processes, resulting in effects such as fluorescence/membrane pores/release of bioactive molecules.