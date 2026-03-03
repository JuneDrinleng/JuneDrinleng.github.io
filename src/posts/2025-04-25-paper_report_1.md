---
layout: post
title: "20250425文献日读笔记"
date:   2025-04-25
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要整理4.25部分的文献，包括主要包括水凝胶网络以及神经网络时间序列相关论文

<!-- more -->




![image-20250425151225393](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-25-paper_report_1/image-20250425151225393.png)

一种可逆的水凝胶网络，加入催化剂促进水凝胶网络的转变

> J. Lou, S. Friedowitz, K. Will, J. Qin, Y. Xia, *Advanced Materials*. **33**, 2104460 (2021).

![6fb41b899c065c3447b0fb6e3f56e8c](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-25-paper_report_1/6fb41b899c065c3447b0fb6e3f56e8c.png)

一种水性的相分离，由葡聚糖和PNIPAM产生，粘弹性随温度发生变化：

![6b858421d6b45ed00f514e69e03deb9](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-25-paper_report_1/6b858421d6b45ed00f514e69e03deb9.png)

> H. Cui *et al.*, *Advanced Materials*. **34**, 2205649 (2022).、

日常各自材料中的粘弹性模量范围：

![Fig. 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-25-paper_report_1/41467_2024_47969_Fig1_HTML.png)

动态光散射来测量g以及<g^2>

> G. K. Wang, Y. M. Yang, D. Jia, *Nat Commun*. **15**, 3569 (2024).

![Fig. 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-25-paper_report_1/41467_2024_45323_Fig1_HTML.png)

利用动态时间序列信息和原始图像进行重建，用的tensorflow

嵌合SDE实现，隐状态数量需要提前设定

> F. Regazzoni, S. Pagani, M. Salvador, L. Dede’, A. Quarteroni, *Nat Commun*. **15**, 1834 (2024).

![Fig. 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-25-paper_report_1/41467_2025_57664_Fig1_HTML.png)

不同区域/特征的时间序列（x_i），构造D(x)矩阵，实现无模型推断各个节点之间的相互作用

julia 语言编写

> R. Delabays, G. De Pasquale, F. Dörfler, Y. Zhang, *Nat Commun*. **16**, 2691 (2025).



![3813cdb3ad235a06f04baee67171035](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-25-paper_report_1/3813cdb3ad235a06f04baee67171035.png)

confocal下捕获无序多态的运动，计算自相关（ zero-mode waveguides (ZMWs)辅助），对应构象变化的阐释（解折叠）

![a1fdaaf670c163df91cac5d6340dea5](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-25-paper_report_1/a1fdaaf670c163df91cac5d6340dea5.png)

> M. F. Nüesch *et al.*, *J. Am. Chem. Soc.* **144**, 52–56 (2022).
