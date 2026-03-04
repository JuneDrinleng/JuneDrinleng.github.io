---
layout: post
title: "Liquid-liquid phase separation control mechanism"
date: 2025-04-03
tags: [paper]
comments: true
author:junedrinleng
---

This note mainly records content related to the regulatory mechanism of liquid-liquid phase separation, including related theories of crowding, NMR characterization of the phase separation process, analysis of the BSA phase separation process, and residue interaction mechanisms.
<!-- more -->

## 1 Molecular Crowding: The History and Development of a Scientific Paradigm

reference: Alfano C, Fichou Y, Huber K, et al. Molecular crowding: the history and development of a scientific paradigm[J]. Chemical Reviews, 2024, 124(6): 3186-3219.

The crowding judgment of the two phases in phase separation is often related to R and the radius of gyration Rg:![b12addbdb82e3928043ce8dcd1fba44](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/b12addbdb82e3928043ce8dcd1fba44.png)1. **Upper left: Colloid Limit (Rg < R)**
   - **The big black balls are colloid particles**, and the small curved lines are polymer chains.
   - Because **Rg < R**, that is, the size of the polymer chain is smaller than that of the colloid, **the colloid becomes the object of crowding**, and the polymer is the **crowder**.
   - This is what you mentioned: **macromolecules as crowder**.
2. **Middle and upper: Rg ∼ R**
   - The size of polymer chains and colloids are about the same, and the interaction between them becomes important in the competition for space.
   - At this ratio, crowding is more complex and it is not possible to simply distinguish who is the crowder.
3. **Upper right: Protein Limit (Rg > R)**
   - The polymer chains are very large and the colloids become small dots (similar to protein particles).
   - Colloids (such as proteins) become **crowder**, while polymer chains are restricted objects.

Correlation length ξ (correlation length) describes the microscale characteristics of crowdingWang et al. [(61)](javascript:void(0);) stated that crowding can affect protein stability in two ways: by hard-core repulsions or by soft chemical interactions.

> Wang, Yaqiang; Sarkar, Mohona; Smith, Austin E.; Krois, Alexander S.; Pielak, Gary J.
>
> Journal of the American Chemical Society (2012), 134 (40), 16614-16618CODEN: JACSAT; ISSN:0002-7863. (American Chemical Society)The explicit contraposition of entropy and enthalpy in the effect of crowders on protein stability was accepted also by other authors. For example, Senske et al., [(63)](javascript:void(0);) when studying the thermal unfolding of ubiquitin, observed that addition of other solutes (glucose, dextran, PEG, guanidinium, and urea) led to both enthalpic and entropic destabilization. The authors argued that the classification of cosolute effects based on their excess enthalpic contributions results ina comprehensive thermodynamic model. Other authors have also accepted the effects of entropy and enthalpy on population stability. For example, while studying the thermal unfolding of ubiquitin, Senske et al. (63) observed that the addition of other solutes (glucose, dextran, polyethylene glycol, guanidine, and urea) resulted in enthalpic and entropic destabilization. The authors argue that the classification of cosmological effects based on their excess enthalpy contribution leads to a comprehensive thermodynamic model.

> Why is it difficult to form LLPS after adding urea to BSA LLPS?

Regarding crowding, there is a view that it should be inert and not interact with the research target molecules, so the ones generally selected are PEG, DEXTRAN, FICOLL and POLY (sodium 4-benzoate) (PSS). These polymers are typically supplied as polydisperse species and therefore have a distribution of molecular masses - entropic enthalpy separation, with entropic effects dominating primarily?

Another view is that crowding actually has a weak interaction with the target molecule. For example, Lee et al. studied the interaction between PEG and specific bases of the protein - which also has an enthalpy effect.> Lee, Cheng-Chung; Su, Yu-Cheng; Ko, Tzu-Ping; Lin, Li-Ling; Yang, Chih-Ya; Chang, Stanley Shi-Chung; Roffler, Steve R.; (BioMed Central Ltd.)

The classic LLPS protein system selected by some researchers: Examples of these proteins are the bovine pancreatic trypsin inhibitor (BPTI), ribonuclease A, lysozyme, β-lactoglobulin, hemoglobin, and bovine serum albumin (BSA)![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/cr3c00615_0003.jpeg)

The tight folding of the protein will reduce the steric repulsion between it and the surrounding crowder, thereby reducing the free energy

![Figure 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/cr3c00615_0005.gif)

Hydrogen bonding structure also affects thermodynamic stability - amyloid protein

Small droplets gradually form larger droplets through aggregation and maturation

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/cr3c00615_0006.jpeg)

You can refer to this picture## 2 A colloidal model for the equilibrium assembly and liquid-liquid phase separation of the reflectin A1 protein

reference: Huang T C, Levenson R, Li Y, et al. A colloidal model for the equilibrium assembly and liquid-liquid phase separation of the reflectin A1 protein[J]. Biophysical Journal, 2024, 123(18): 3065-3079.

![image-20250403170019004](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250403170019004.png)The A1 protein consists of `evolutionarily conserved domains` and `linker domains between them`. The linker mainly responds to isoelectric changes in pH, while the conserved region may have non-specific hydrophobic interactions.

Highly folded proteins, such as lysozyme, GG, etc., can be described using the SA-LR model

![fa15abf5c5afe1be2e25c28b719336d](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/fa15abf5c5afe1be2e25c28b719336d.png)

Regarding the effects of pH and concentration on phase separation, many proteins should be able to draw phase diagrams:![cf501043f4833857934dd8e48afac6c](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/cf501043f4833857934dd8e48afac6c.jpg)

## 3 Temporal and spatial characterization of protein liquid-liquid phase separation using NMR spectroscopy

reference: Bramham J E, Golovanov A P. Temporal and spatial characterization of protein liquid-liquid phase separation using NMR spectroscopy[J]. Nature Communications, 2022, 13(1): 1767.

Using trifluoroethanol TFE as an NMR probe to study the BSA phase separation system

Background reference:

> During liquid-liquid phase separation (LLPS), a homogenous mixture of macromolecules separates into two distinct liquid phases, a ‘dense’ condensed phase enriched with a subset of components, and a ‘lean’ phase depleted of these components. This process is increasingly recognised in biology[1](https://www.nature.com/articles/s41467-022-29408-z#ref-CR1),[2](https://www.nature.com/articles/s41467-022-29408-z#ref-CR2), where it is responsible for the formation of membraneless organelles and condensates, including the nucleolus[3](https://www.nature.com/articles/s41467-022-29408-z#ref-CR3) and stress granules[4](https://www.nature.com/articles/s41467-022-29408-z#ref-CR4), but also implicated in a range of diseases, including neurodegenerative diseases[5](https://www.nature.com/articles/s41467-022-29408-z#ref-CR5),[6](https://www.nature.com/articles/s41467-022-29408-z#ref-CR6),[7](https://www.nature.com/articles/s41467-022-29408-z#ref-CR7), cataracts[8](https://www.nature.com/articles/s41467-022-29408-z#ref-CR8),[9](https://www.nature.com/articles/s41467-022-29408-z#ref-CR9), and sickle cell anaemia[10](https://www.nature.com/articles/s41467-022-29408-z#ref-CR10). LLPS is also an important phenomenon in biotechnology, as a purification and processing technique[11](https://www.nature.com/articles/s41467-022-29408-z#ref-CR11),[12](https://www.nature.com/articles/s41467-022-29408-z#ref-CR12), or as an unwanted physical instability in biopharmaceuticals[13](https://www.nature.com/articles/s41467-022-29408-z#ref-CR13).During liquid-liquid phase separation (LLP), a homogeneous mixture of macromolecules separates into two distinct liquid phases, a "dense" condensed phase enriched in a subset of components, and a "lean" phase depleted of these components. This process is increasingly recognized in biology, where it is responsible for the formation of membraneless organelles and condensates, including Nucleolus and stress granules, but is also implicated in a range of diseases, including neurodegenerative diseases, Cataracts, Cataracts, and sickle cell anaeemia. LLP is also an important phenomenon in biotechnology, as a purification and processing technology11,12, or as a deleterious body destabilizer in biopharmaceuticals13.
>
> LLPS, sometimes referred to as condensation, manifests itself as the appearance of small dense liquid droplets suspended within a lean phase (microscopic LLPS), which often proceeds to the formation of distinct dense and lean layers in the sample once the droplets become large enough and coalesce (macroscopic LLPS). As the dense and lean phases exist in both scenarios, it is convenient to use the term “layer separation” to refer to this final stage of macroscopic LLPS. The kinetics of these processes, and the effect of different conditions or additives on these kinetics, is of particular interest[14](https://www.nature.com/articles/s41467-022-29408-z#ref-CR14),[15](https://www.nature.com/articles/s41467-022-29408-z#ref-CR15). However, these processes are difficult to study by existing techniques. Light scattering due to the presence of liquid droplets, or fluctuations in density or refractive index often results in opalescent or turbid solutions, rendering quantitative optical approaches challenging[16](https://www.nature.com/articles/s41467-022-29408-z#ref-CR16),[17](https://www.nature.com/articles/s41467-022-29408-z#ref-CR17). Fluorescence microscopy using labelled LLPS components or dyes may report on the radius of droplets, but not the concentration of the two phases[15](https://www.nature.com/articles/s41467-022-29408-z#ref-CR15),[18](https://www.nature.com/articles/s41467-022-29408-z#ref-CR18). Additionally, layer separation adds a complicating spatial component, due to non-uniform distribution of the phases throughout the sample[19](https://www.nature.com/articles/s41467-022-29408-z#ref-CR19). Therefore, the physical and geometrical constraints of biophysical techniques each may be limited to studying one aspect of LLPS, and further characterization techniques are needed to reach a more holistic assessment, particularly regarding the evolution of the concentration and volumes of the two phases. LLP is sometimes referred to as condensation and has the appearance of small dense droplets suspended within a lean phase (microscopic LLP), which often results in the formation of different dense and lean layers in the sample once the droplets become large enough and coalesce (macroscopic LLP). Since in both cases there are dense and lean phases, it is convenient to use the term "layer separation" to refer to the final phase of the macro LLP. The kinetics of these processes and the effect of different conditions or additives on these kinetics are of particular interest14,15. However, these processes are difficult to study with existing techniques. Light scattering due to the presence of droplets or fluctuations in density or refractive index often results in milky or turbid solutions, calling quantitative optical methods into question16,17. Use labeled LLFluorescence microscopy of P components or dyes can report the radius of the droplet but not the concentration of the two phases15,18. Furthermore, layer separation adds a complex spatial component due to the uneven distribution of these phases throughout the sample. Therefore, the physical and geometric constraints of biophysical techniques mean that each may be limited to studying one aspect of the LLP, requiring further characterization techniques for a more comprehensive assessment, especially with respect to the evolution of concentration and volume in these two phases.

![Fig. 7](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2022_29408_Fig7_HTML.png)