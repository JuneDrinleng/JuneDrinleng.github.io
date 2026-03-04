---
layout: post
title: "20260119 Literature Reading Notes - FFssFF Topic"
date:   2026-01-19
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

This note mainly records the literature reading notes on LLPS of FFssFF droplets

<!-- more -->

## 1 Origin: A Short Peptide Synthon for Liquid-Liquid Phase Separation - 2021 Nature Chemistry

> M. Abbas, W. P. Lipiński, K. K. Nakashima, W. T. S. Huck, E. Spruijt, *Nat. Chem.* **13**, 1046–1054 (2021).

Previously, droplets were mainly composed of multiple biomolecular components, and designing a self-coacervating polypeptide with self-assembly properties was challenging. This study introduces a class of molecules that can self-assemble into micrometre-sized droplets at sub-millimolar concentrations.

In addition, to demonstrate that this system can serve as protocells for primitive cells, the authors achieve reversible compartmentalization through redox-controlled disulfide derivatives.

![image-20260119111441614](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119111441614.png)

The molecular structure is shown in Figure a, abbreviated as FFssFF. Its main composition consists of two amino acid stickers connected by a spacer. The amino acids can be F (Phenylalanine, Phe), L (Leucine, Leu), or W (Tryptophan, Trp). This topic primarily focuses on stickers composed of F.

The paper mainly uses a turbidimeter to determine whether phase separation occurs (or self-assembly forms), corresponding to the turbidity@600 nm marker in the figure. The phase diagram f and pH investigation diagram g are also measured using turbidimetry.

As shown, the droplets are approximately several micrometers in size, consistent with BSA's size, as shown in Figure b. Figure c demonstrates the process of droplets gradually coalescing over time. Figure d shows the wetting pattern formed by droplets, while Figure e illustrates the coalesced bulk formed at the macroscopic scale.

Of course, the structure shown in Figure a indicates that the study not only explores amino acids as F but also investigates various combinations of L, W, and F.

![image-20260119112938333](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119112938333.png)

Note that the amino acid stickers are identical on both sides of the spacer.

The authors also tested different spacers. As shown in the table, ordinary disulfide bonds or alkyl chains lead to aggregate formation.

![image-20260119113134217](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119113134217.png)

The disulfide spacer ss was selected for subsequent studies due to its excellent redox properties.

When studying the redox properties, it was found that droplets are clear at pH < 6, begin to form aggregates around pH 7, and become clear again after adding DTT (a reducing agent). Adding hydrogen peroxide (an oxidizing agent) restores turbidity, as shown in Figure a.

![image-20260119113248508](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119113248508.png)

Figures b and c investigate the results after adding reducing agents DTT and TCEP, followed by re-oxidation with potassium ferricyanide. It was observed that the solution exhibits turbidity changes. Adding the reducing agent rapidly decreases turbidity, while adding the oxidizing agent gradually restores turbidity. DTT reduction is slower, leading to a slower decrease in turbidity.

Subsequently, the authors explored the distribution of different guest molecules within the aggregates, as shown in the following figure:

![image-20260119113733172](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119113733172.png)

Two condensation reactions were introduced to transform droplets into microreactors:

![image-20260119113818481](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119113818481.png)

The former hydrolysis condensation reaction is relatively slow, requiring tens of hours for the entire reaction. The latter Schiff base reaction is faster, occurring within tens of minutes. Many subsequent studies have continued to use reactions from this system.

## 2 Mechanism Study: Amino Acid-Dependent Phase Equilibrium and Material Properties of Tetrapeptide Condensates - Molecular Dynamics Simulation of Phase Separation Mechanism and Interactions in FFssFF /think
>Y. Zhang, R. Prasad, S. Su, D. Lee, H.-X. Zhou, *Cell Reports Physical Science*. **5**, 102218 (2024).

The final results vary depending on the sticker, for example, W forms aggregates, while I, V, and A form gel-like structures. This indicates that these peptide materials exhibit differences in phase equilibrium and material properties, such as the threshold concentration for phase separation and viscosity ranges. To investigate the reasons for these differences, the authors performed all-atom molecular dynamics simulations on this system. Additionally, they revealed some critical behaviors.

![image-20260119134012717](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119134012717.png)

First, we can observe that different sticker amino acids form condensates at varying concentrations. Whether they form condensates or precipitates also differs.

Generally, there are four scenarios:

![image-20260119134131651](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119134131651.png)

These correspond to liquid droplets, amorphous dense liquids, amorphous precipitates, and gel-like structures, which originate from differences in sticker amino acid selection.

In studying the critical concentration and critical pH for phase separation of these different stickers, it was found that the critical concentration often exhibits a linear relationship with molecular weight:

![image-20260119134419581](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119134419581.png)

The authors characterized the droplet fusion process and measured the interfacial tension of droplets using optical tweezers. In single-particle tracking, they found that the MSD exhibited the following results, with the FFssFF viscosity even reaching 1000:

![image-20260119134537946](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119134537946.png)

During molecular dynamics simulations, the authors analyzed the correlation between the average number of π-neighbor chains and the critical concentration for phase separation under different sticker amino acids, as well as the number of hydrogen bonds formed. They found that a higher number of neighbors leads to a higher critical concentration, while the number of hydrogen bonds is inversely related.

![image-20260119134902432](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119134902432.png)

## 3 Application 1: Small Molecules Influence the Physical Microenvironment of Biomolecular Condensates—Constructing Microreactors Using FFssFF

> Y. Pan *et al.*, *J. Am. Chem. Soc.* **147**, 22686–22696 (2025).

Prof. Zhang Xin's team from Westlake University designed a molecular viscosity probe to monitor viscosity changes in droplets. Subsequently, they used it to investigate the effect of solvent molecule polarity on droplet formation. Here, the FFssFF system was selected for constructing microreactors.

![image-20260119135443391](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119135443391.png)

## 4 Application 2: Anion-π Interactions Induced Phase Separation as a Probiotic Oxygenation Pathway

> X. Ren *et al.*, *Proceedings of the National Academy of Sciences*. **122**, e2508804122 (2025).

Phase separation was induced by the interaction between the P orbitals of phosphate and its polymeric derivatives and the π orbitals of FFssFF. Intramolecular microreactions can occur within the system.

![image-20260119135515789](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119135515789.png)