---
layout: post
title: "Marangoni Effect"
date: 2025-06-09
tags: [paper]
comments: true
author:junedrinleng
toc: true
---

This note mainly compiles some of the literature read on June 9, 2025. It mainly introduces related research on the Marangoni Effect that appears near the electrode in the case of electrolysis of water.

<!-- more -->
## 1 Electrocatalytic hydrogen evolution bubble dynamics
>reference: [S. Park *et al.*, *Nat. Chem.* **15**, 1532–1540 (2023).](https://www.nature.com/articles/s41557-023-01294-y)

Understanding the evolution of bubbles during the electrolysis of water can help optimize the electrode/electrolyte/bubble interface. The research direction of hydrogen evolution is different on the surface of different electrolysis-these differences are mainly due to the influence of solute Marangoni convection.

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41557_2023_1294_Figa_HTML.png)

Hofmeister series anions change the surface tension and affect the aggregation effect of the electrolyte, thereby affecting the gas generation kinetics.

![Fig. 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41557_2023_1294_Fig1_HTML.png)

The current used here is an oscillating current. What is photographed is the newly generated small droplets under the large droplets. At the same time, the relevant terms are calculated based on it.

![Fig. 2](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41557_2023_1294_Fig2_HTML.png)

Here we control the cations to be consistent and the voltage to be consistent to study the impact of the anion effect on bubble generation.

![Fig. 4](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41557_2023_1294_Fig4_HTML.png)

For the marangoni effect, the main influences are temperature and ion concentration. As the temperature increases, the surface tension decreases, and the temperature is lower far away from the electrode, which increases the surface tension in that part. The ion concentration is similar, and the concentration near the electrode is low, which makes the surface tension lower. However, the ion concentration increases far away from the electrode, thereby increasing the surface tension (there are two directions of influence, pos and neg).

## 2 Electrolyte droplets sprayed in H2 bubbles during water electrolysis under normal and microgravity conditions

> reference: [A. Bashkatov *et al.*, *Nat Commun*. **16**, 4580 (2025).](https://www.nature.com/articles/s41467-025-59762-7)

The generation of bubbles in electrolysis engineering will seriously affect the efficiency of the electrode. Therefore, understanding the dynamics of bubble generation will help optimize the electrolysis water system. This article introduces a transmission mechanism for electrolyzed water droplets to be injected into hydrogen bubbles by a jet (Worthington jet).

![Fig. 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2025_59762_Fig1_HTML.png)

The black circle in the picture is the large bubble that has been generated. Subsequently, some small bubbles will be generated where it contacts the electrode pt. These small bubbles will affect the inside of the large bubble, forming a droplet jet as shown in Figure B inside the large bubble.

Subsequently, the author calculated and characterized the velocity vortices of these jets:
![Fig. 2](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2025_59762_Fig2_HTML.png)

Subsequently, the author's team observed the back of the droplet and observed the electrolyte puddle formed after the jet:

![Fig. 3](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2025_59762_Fig3_HTML.png)

Figures a, b, and d in the figure are all captured images of electrolyte puddles in such bubbles, while figure c introduces two possible ways for the formation of electrolyte puddles:

One is that the neighboring bubbles generated on the electrode surface gradually grow up and come into contact with the bubbles, resulting in fusion. The fusion process will sputter some small droplets into the inside of the large droplets, and some small droplets will settle to the bottom after a period of time due to gravity.

Another mechanism is to continuously generate small droplets in the partition wall. The small droplets continue to rise and are captured by the large droplets. Then a jet is generated and small droplets are ejected inside the large bubble. Since the bubbles are smaller, the droplets are more likely to settle under the action of gravity.

![Fig. 4](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2025_59762_Fig4_HTML.png)

The picture above is a photograph of the jet inside this bubble and its projection. You can see that it basically presents the process of contact-fusion-jet generation-surface repair.

This experiment is implemented through the imaging system in the figure below. Figure b shows the mechanism of marangoni flow.

![Fig. 5](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2025_59762_Fig5_HTML.png)

## 3 Summary and Thoughts

Even though there is not a very large amount of work in the experiment, it is still outstanding to photograph this internal sputtering phenomenon; the big nc article focuses on studying the impact of solutes on the marangoni effect, focusing on the regulatory mechanism.