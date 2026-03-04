---
layout: post
title: "20260119 Literature Reading Notes-FFssFF Special Topic"
date: 2026-01-19
tags: [paper]
comments: true
author:junedrinleng
toc: true
---

This note mainly records the topic of literature reading notes on FFssFF droplets for LLPS.

<!-- more -->

## 1 Origin: A short peptide synthon for liquid-liquid phase separation - 2021 nature chemistry

> M. Abbas, W. P. Lipiński, K. K. Nakashima, W. T. S. Huck, E. Spruijt, *Nat. Chem.* **13**, 1046–1054 (2021).

In the past, droplets were mainly composed of a variety of biological macromolecules. It was often difficult to involve a small polypeptide molecule that can self-coacervate. Here, this article involves a type of molecule that can self-coagulate into micrometre-sized droplets at sub-millimolar concentrations.

In addition, to prove that this system can be used as protocells, the authors achieved reversible compartmentalization through the control of redox chemistry by disulfide bond derivatives.

![image-20260119111441614](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119111441614.png)

First of all, this molecular structure is shown in Figure a, which can be abbreviated as FFssFF. Its main component is a sticker composed of two amino acids, and the two stickers are connected through a spacer. The amino acids here can be F (phenylalanine, Phenylalanine, Phe) or L (leucine, Leucine, Leu) and W (tryptophan, Tryptophan, Trp). This topic mainly focuses on stickers composed of F

This article mainly uses a turbidity meter to determine whether phase separation is formed (or whether self-agglomeration is formed). The corresponding figure shows the symbol turbidity@600 nm. The phase diagram f and the pH investigation diagram g are also measured by a turbidimeter.

It can be seen that the size of the droplets here is about a few microns, which is consistent with the size of BSA, as shown in picture b, picture c shows the process of gradual agglomeration and fusion of droplets over time, picture d shows the formation of wetting pattern by droplets, and picture e shows the condensed bulk formed by droplets on a macro scale.

Of course, the construction of such a structure in Figure A above shows that he not only explored the case where the amino acid is F, but actually also explored various combinations of L, W, and F.

![image-20260119112938333](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119112938333.png)

It should be noted that here are the amino acid combinations of the sticker, and the stickers on both sides of the spacer are completely the same.

Of course, the author must have tried different spacers. As can be seen from the table here, ordinary disulfide bonds or alkyl chains will lead to the formation of Aggregate

![image-20260119113134217](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119113134217.png)

The disulfide bond spacer ss was selected as the spacer for subsequent research due to its excellent redox properties.

When studying the redox properties here, it can be found that the droplets are clarified when the pH is <6, and aggregates begin to appear around 7. They will be clarified after reduction by adding DTT, and the turbidity will be restored by adding the oxidant hydrogen peroxide - as shown in Figure a.

![image-20260119113248508](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119113248508.png)

Figures b and c respectively explore the results after adding potassium ferricyanide to the oxidation after adding the reducing agents DTT and TCEP. It can be found that the solution shows a change in turbidity at this time. The turbidity decreases rapidly after the reducing agent is added, and the turbidity gradually rises after the oxidant is added. Moreover, the reduction of DTT is slower and the turbidity decreases more slowly.

Subsequent authors explored the distribution of different guest molecules in the condensate, as shown in the figure below:

![image-20260119113733172](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119113733172.png)

Two condensation reactions are also introduced to turn droplets into microreactors:

![image-20260119113818481](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119113818481.png)

The former aldol condensation reaction is a bit slow, and the entire reaction takes dozens of hours. The latter's Schiff base reaction is faster and only takes dozens of minutes to occur. Many people continue to use the reaction in this system in the future.

## 2 Mechanism study: Amino acid-dependent phase equilibrium and material properties of tetrapeptide condensate - molecular dynamics simulation of phase separation mechanism and interaction of FFssFF

>Y. Zhang, R. Prasad, S. Su, D. Lee, H.-X. Zhou, *Cell Reports Physical Science*. **5**, 102218 (2024).

For different stickers, the final results will be different. For example, some aggregate will be formed when W is used, and some gel like will be formed when I, V, and A are used. This shows that these polypeptide materials show differences in phase equilibrium and material properties, such as the threshold concentration of phase separation and viscosity range, etc. In order to study the reasons for this difference, the author conducted an all-atom molecular dynamics simulation of the system. In addition, it also revealed some critical behaviors.

![image-20260119134012717](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119134012717.png)

First of all, we can see that different sticker amino acids have different concentrations of aggregates, and there are also some differences in whether they form aggregates or become precipitates.

Generally speaking, there are the following four situations:

![image-20260119134131651](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119134131651.png)

They respectively correspond to liquid droplets, amorphous dense liquids, amorphous precipitates, and gel-like forms. This is due to the difference in the amino acid selection of the sticker.

When studying the critical concentration and critical Ph for phase separation of these different stickers, it was found that the critical concentration is often linearly related to the molecular weight:

![image-20260119134419581](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119134419581.png)

The author characterized the droplet fusion process, and also used optical tweezers to measure the interfacial tension of the droplets. In single particle tracing, it was found that its msd showed the following results, and the viscosity of FFssFF even reached 1000

![image-20260119134537946](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119134537946.png)

When conducting molecular dynamics simulations, the author analyzed the correlation between the average number of π chain neighbors and the phase separation threshold concentration and the number of hydrogen bond formation under different sticker amino acids. It was found that the more neighbors lead to a higher critical concentration, the opposite is true for the number of hydrogen bonds.

![image-20260119134902432](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119134902432.png)

## 3 Application 1: Small molecules affect the physical microenvironment of biomolecule condensates - using FFssFF to construct microreactors

> Y. Pan *et al.*, *J. Am. Chem. Soc.* **147**, 22686–22696 (2025).

Zhang Xin and others from West Lake University designed a molecular viscosity probe to monitor viscosity changes in droplets, and later used it to explore the impact of solvent molecule polarity on droplet formation. Here, the FFssFF system was chosen to construct the microreactor.![image-20260119135443391](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119135443391.png)

## 4 Application 2: Anion-π interaction-induced phase separation is a prebiotic oxygenation pathway

> X. Ren *et al.*, *Proceedings of the National Academy of Sciences*. **122**, e2508804122 (2025).

By utilizing the interaction between the P orbital of phosphoric acid and its polymer and the π orbital of FFssFF to form phase separation, microreactions can occur within the molecule.

![image-20260119135515789](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119135515789.png)