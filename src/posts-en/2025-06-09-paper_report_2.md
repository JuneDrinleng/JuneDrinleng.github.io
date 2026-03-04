---
layout: post
title: "Marangoni Effect"
date:   2025-06-09
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

This note primarily summarizes part of the literature read on June 9, 2025, focusing on studies related to the Marangoni Effect that occurs near electrodes under electrolysis conditions

<!-- more -->
## 1 Electrochemical Hydrogen Evolution Bubble Dynamics
>reference: [S. Park *et al.*, *Nat. Chem.* **15**, 1532–1540 (2023).](https://www.nature.com/articles/s41557-023-01294-y)

Understanding bubble evolution during water electrolysis can aid in optimizing the interface between electrodes/electrolytes/bubbles. Research directions reveal differences in hydrogen evolution on different electrolyte surfaces—these differences are mainly attributed to solute Marangoni convection effects

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41557_2023_1294_Figa_HTML.png)

Hofmeister series anions alter surface tension, influencing electrolyte aggregation effects and thus affecting gas generation kinetics

![Fig. 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41557_2023_1294_Fig1_HTML.png)

The current used here is oscillating, capturing newly formed small droplets under a large liquid drop, while performing relevant calculations based on these

![Fig. 2](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41557_2023_1294_Fig2_HTML.png)

Under consistent cation and voltage conditions, the effect of anions on bubble generation is studied

![Fig. 4](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41557_2023_1294_Fig4_HTML.png)

For the Marangoni effect, the main influences are temperature and ion concentration. Increased temperature reduces surface tension, while regions farther from the electrode have lower temperatures, increasing surface tension. Ion concentration shows similar trends: lower concentrations near the electrode result in lower surface tension, while higher concentrations farther from the electrode increase surface tension (with both positive and negative directional impacts)

## 2 Electrolyte Droplet Spraying in H2 Bubbles During Water Electrolysis under Normal and Microgravity Conditions

> reference:  [A. Bashkatov *et al.*, *Nat Commun*. **16**, 4580 (2025).](https://www.nature.com/articles/s41467-025-59762-7)

Bubble formation in electrolysis processes can significantly impact electrode efficiency. Understanding bubble generation dynamics helps optimize water electrolysis systems. This paper introduces a transport mechanism where electrolyte droplets are injected into hydrogen bubbles via a Worthington jet

![Fig. 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2025_59762_Fig1_HTML.png)

The black circle in the figure represents an already formed large bubble. Subsequently, small bubbles are generated at the contact site with the Pt electrode, affecting the interior of the large bubble and forming droplet jets as shown in b

The authors then calculated and characterized the velocity vortices of these jets:
![Fig. 2](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2025_59762_Fig2_HTML.png)

The team then observed the backside of the droplets, unexpectedly discovering electrolyte water pools formed after the jet:
![Fig. 3](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2025_59762_Fig3_HTML.png)

Figures a, b, and d show imaging of electrolyte water pools within bubbles, while figure c illustrates two possible pathways for electrolyte water pool formation:

One pathway involves neighboring bubbles growing and contacting the bubble, leading to fusion. This fusion process splatters some small droplets into the large droplet interior, while others settle at the bottom due to gravity after some time.

The second mechanism involves continuous generation of small droplets from neighbors, which rise and are captured by the large droplet, producing jets and spraying small droplets inside the large bubble. Due to the smaller bubble size, droplets are more likely to settle under gravity.

![Fig. 4](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2025_59762_Fig4_HTML.png)

The figure above shows imaging of the jet and its projection within the bubble, revealing a process of contact-fusion-jet generation-surface repair

This experiment was achieved through the imaging system shown in the figure, with figure b illustrating the Marangoni flow mechanism

![Fig. 5](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2025_59762_Fig5_HTML.png)

## 3 Summary and Thoughts
Although the experimental workload wasn't very large, capturing this internal sputtering phenomenon is still impressive; the paper by large NC focuses on studying the effect of solutes on the Marangoni effect, with an emphasis on control mechanisms.