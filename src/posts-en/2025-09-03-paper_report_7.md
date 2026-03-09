---
layout: post
title: "20250903 Literature Reading Notes"
date: 2025-09-03
tags: [paper]
comments: true
author: junedrinleng
toc: true
post_id: 2025-09-03-paper_report_7
source_lang: zh
source_title: "20250903文献阅读笔记"
title_key: literature_note
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.308Z"
source_hash: 6b322643b251e07df67470112eb618f695e332ce0f977abae35fc643e738061f
---

This note primarily records recent literature on synthetic cells, including a review on artificial cells, a study on magnetically driven DNA reactions, and an experimental simulation of circadian rhythm in giant single-layer vesicles mimicking synthetic cells.

<!-- more -->

## 1 Magnetic Activation of Spherical Nucleic Acids Enables Remote Control of Synthetic Cells

> ref: E. Parkes *et al.*, *Nat. Chem.*, 1–9 (2025).

In synthetic cells, lipid vesicles that mimic the structure and function of living cells have become a popular research area, with applications in drug delivery.

This paper constructs a magnetic nanoparticle with a core-shell structure, as shown in the following figure:

![image-20250904112547557](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904112547557.png)

The **size of these nanoparticles seems very small**, unsure whether it's due to an error in the scale bar or their actual size.

The internal sphere has magnetic responsiveness, while the external segments are used to attach DNA strands for relevant reactions:

![image-20250904112826116](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904112826116.png)

This is achieved through azide-based 1,3-dipolar cycloaddition. When an external alternating magnetic field is introduced, the magnetic response of the internal magnetic particles causes local temperature changes, thereby altering the activity of the modified segments to attach DNA strands to the substrate:

![image-20250904112951398](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904112951398.png)

![image-20250904113018741](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904113018741.png)

Experiments show that applying an external magnetic field changes the originally red-fluorescent vesicle droplets into green-modified segments, resulting in some droplets displaying green fluorescence.

## 2 Reconstructing a Biological Clock in Synthetic Cells Reveals the Principles of Timekeeping

> ref: A. Z. T. Li, A. LiWang, A. B. Subramaniam, *Nat Commun*. **16**, 6686 (2025).

This paper primarily explains from the perspective of protein translation and expression mechanisms. The system described in this study is:

![image-20250904113618619](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904113618619.png)

By diffusing solutions of proteins KaiA-C into growing vesicles, multicomponent protein droplets encapsulated in vesicles were formed, as shown in the following figure:

![image-20250904113800557](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904113800557.png)

It can be observed that within a 4-day experimental interval, droplets v1 and v2 exhibit certain periodic rhythms.

Note that FITC-BSA (fluorescently labeled BSA) is used as a background to test for membrane defects and permeability in syn-cells:

![image-20250904114021134](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904114021134.png)

Generally, the membrane should not allow significant diffusion of BSA, so in B, BSA is almost uniformly distributed in the field of view. From the fluorescence intensity in cross-section, the fluorescence intensity in the droplet region and outside the droplet is also similar.

## 3 Strategies and Applications of Communication in Synthetic Cells

> ref: H. Moghimianavval, C. Newell, P. Parvizian, M. J. Booth, A. P. Liu, *Nat Chem Biol*. **21**, 1317–1329 (2025).

This is a review on inter-cellular communication in bio-inspired cells. I believe it summarizes some fabrication approaches for bio-inspired cells to some extent:

![image-20250904114325446](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904114325446.png)

For example, this figure records that synthetic cells have polymer boundaries, protein-formed droplet boundaries, and bio-inspired droplets formed by condensates (e.g., the ionic polymer droplets mentioned in 9.2), as well as the lipid vesicles mentioned earlier and hydrogels that have been extensively studied.

This figure also summarizes common signals such as small signaling molecules (seems to be ATP), large biomolecules like DNA and proteins, and physical factors such as light and heat. These signals trigger a series of processes, resulting in effects like fluorescence, membrane pores, and release of bioactive molecules.
