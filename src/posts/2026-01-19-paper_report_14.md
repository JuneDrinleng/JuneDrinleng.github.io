---
layout: post
title: "20250119文献阅读笔记-FFssFF专题"
date:   2025-01-19
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要记录FFssFF液滴进行LLPS的文献阅读笔记专题

<!-- more -->

## 1 起源：一种用于液-液相分离的短肽合成子——2021年nature chemistry

> M. Abbas, W. P. Lipiński, K. K. Nakashima, W. T. S. Huck, E. Spruijt, *Nat. Chem.* **13**, 1046–1054 (2021).

过去的液滴主要都是多种生物大分子成分构成，涉及一种能自己凝聚的（self-coacervates）的多肽小分子往往是困难的，这里文中涉及了这样的一类分子，可以自凝聚为micrometre-sized液滴在sub-millimolar的浓度。

除此之外，为了证明该system可以用作原始细胞protocells，作者通过这种二硫键衍生物可以被氧化还原化学控制实现可逆区室化。

![image-20260119111441614](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-19-paper_report_14/image-20260119111441614.png)

首先这种分子结构是如图a所示，可以简写为FFssFF，其主要的构成就是由两个氨基酸构成的sticker，俩sticker通过spacer相连形成。这里的氨基酸可以是F（苯丙氨酸，Phenylalanine，Phe）也可以是L（亮氨酸，Leucine，Leu）和W（色氨酸，Tryptophan，Trp）。本专题主要聚焦于F构成的sticker

本文主要通过浊度计的方式来判断相分离是否形成（或者说自凝聚是否形成），对应图上就是turbidity@600 nm这个标识。相图f和pH探究图g也是通过浊度计的方式测量得到的。

可以看到，这里的液滴大概就是几个微米左右和BSA的size比较一致，如b图所示，c图展示的则是随着时间变化液滴逐渐凝聚融合的过程，d图则展示的是液滴形成wetting pattern的情况，e图则是在宏观尺度上液滴形成的凝聚bulk

当然了，上述a图构造出了这样的结构就说明他不仅仅探索了氨基酸为F的情况，实际上他也探索了L,W,F的各种组合

![image-20260119112938333](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-19-paper_report_14/image-20260119112938333.png)

需要注意的是，这里都是sticker的氨基酸组合，spacer两侧的sticker是完全一致的

当然，作者肯定也尝试了不同的spacer，从这里的表格可以看出，普通的二硫键或者烷基链会导致形成Aggregate

![image-20260119113134217](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-19-paper_report_14/image-20260119113134217.png)

二硫键spacer ss则由于其出色的氧化还原性被选为后续的研究的spacer

再研究这里的氧化还原性的时候，可以发现，液滴在pH<6的时候是澄清，在7左右开始出现凝聚体，通过加入DTT还原后会澄清，再加入氧化剂双氧水则又会恢复浊度——如图a所示

![image-20260119113248508](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-19-paper_report_14/image-20260119113248508.png)

图b和c则分别探究了加入还原剂DTT和TCEP后重新加入铁氰化钾氧化后的结果，可以发现此时溶液呈现出浊度的变化，加入还原剂后浊度迅速下降，而加入氧化剂后浊度又逐渐回升，而且DTT的还原更慢，浊度的下降也更慢

后续作者探究了不同客体分子在凝聚体中的分布情况如下图所示：

![image-20260119113733172](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-19-paper_report_14/image-20260119113733172.png)

还引入了两种缩合反应使得液滴变为microreactors：

![image-20260119113818481](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-19-paper_report_14/image-20260119113818481.png)

前者羟醛缩合反应有一点慢，整个反应需要数十个小时，后者的席夫碱反应快一些，只需要数十分钟就能发生，后续也有很多人继续用该system里的反应

## 2 机制研究：四肽缩合物的氨基酸依赖相平衡和材料特性——分子动力学模拟FFssFF的相分离机制与相互作用

>Y. Zhang, R. Prasad, S. Su, D. Lee, H.-X. Zhou, *Cell Reports Physical Science*. **5**, 102218 (2024).

对于不同的sticker，最终形成的结果也不一样，例如W时会形成一些aggregate，I、V、A时则形成一些gel like的情况。这说明这些多肽材料在相平衡和材料性质上呈现出差异，比如相分离的阈值浓度和粘度范围等等，为了研究这种差异出现的原因，作者对该system做了一个全原子分子动力学模拟，除此之外还揭示了一些临界的行为。

![image-20260119134012717](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-19-paper_report_14/image-20260119134012717.png)

首先我们可以看到，不同的sticker氨基酸形成凝聚体的浓度不同，是成凝聚体还是成为沉淀本身也有一些差异

一般情况下，有以下四种情况：

![image-20260119134131651](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-19-paper_report_14/image-20260119134131651.png)

分别对应于液态的液滴、无定形的稠密液体，无定形的沉淀，和gel-like的形态，这源自sticker的氨基酸选择的区别

在研究这些不同sticker形成相分离的临界浓度和临界Ph时，发现临界浓度往往和分子量是成线性关系：

![image-20260119134419581](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-19-paper_report_14/image-20260119134419581.png)

作者对其液滴融合过程进行了表征，还用光镊测量了液滴的界面张力，在单颗粒示踪中，发现其msd呈现如下的结果，且FFssFF的粘度甚至到了1000的情况

![image-20260119134537946](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-19-paper_report_14/image-20260119134537946.png)

作者在进行分子动力学模拟的时候分析了不同sticker氨基酸下的π平均链邻居数与相分离阈值浓度的相关性情况和氢键形成数，发现由于邻居越多而导致临界浓度越高，氢键数目则截然相反

![image-20260119134902432](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-19-paper_report_14/image-20260119134902432.png)

## 3 应用1：小分子影响生物分子凝聚体的物理微环境——利用FFssFF构造微反应器

> Y. Pan *et al.*, *J. Am. Chem. Soc.* **147**, 22686–22696 (2025).

西湖大学张鑫等人设计了一种分子粘度探针用以监测液滴中的粘度变化，后续将其用于探究溶剂分子极性对液滴形成的影响中，这里选用了FFssFF体系进行微反应器的构造

![image-20260119135443391](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-19-paper_report_14/image-20260119135443391.png)

## 4 应用2：阴离子- π相互作用诱导的相分离是一种益生元的氧合途径

> X. Ren *et al.*, *Proceedings of the National Academy of Sciences*. **122**, e2508804122 (2025).

利用磷酸及其多聚体的P轨道和FFssFF的π轨道相互作用形成进而形成相分离，分子内可以发生微反应

![image-20260119135515789](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2026-01-19-paper_report_14/image-20260119135515789.png)