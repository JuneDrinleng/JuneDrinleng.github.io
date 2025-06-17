---
layout: post
title: "20250617文献阅读笔记"
date:   2025-06-17
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要整理2025年6月17日阅读的部分文献，主要是介绍protocell相关文献

<!-- more -->

## 1 渗透压诱导膜化凝聚力的形态转化

> Ref：X. Qiao *et al.*, *Journal of the American Chemical Society* (2025), doi:[10.1021/jacs.5c01581](https://doi.org/10.1021/jacs.5c01581).

这是一篇jacs，通过磷脂为膜，内部是Su-Am和PMEDAB-Chol(应该是一种阳离子和聚合物形成的共同condense)，这俩本身可以形成liquid-liquid phase separation，加入磷脂之后可以形成含膜液滴：

<img src="https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-17-paper_report/02182a618f2296bcb4bc68b0ce19765.png" alt="02182a618f2296bcb4bc68b0ce19765" style="zoom: 50%;" />

这种液滴在葡聚糖-水或者是peg外界条件下呈现出不同的变化

首先当然是要对这种液滴进行表征，这里他的膜选用的就是被红色荧光标记的分子，然后内部分子用绿色荧光进行标记：

![8c5940ce9993c34713b4573e121b5a1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-17-paper_report/8c5940ce9993c34713b4573e121b5a1.png)

除此之外就是一些用流式细胞仪测的FSC-A等基本信息



然后作者就对其进行了加水的情况，相当于降低液滴内部的渗透液，发现液滴内部出现了小的液滴：

![1530c46a70a7c5ecf004baada7df1cc](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-17-paper_report/1530c46a70a7c5ecf004baada7df1cc.png)

可以看到b图，随着时间的增加，水分子在内部形成了小的液滴，然后时间增加后就逐渐溶解![images_large_ja5c01581_0003](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-17-paper_report/images_large_ja5c01581_0003.jpeg)

而现在的很多荧光，感觉更像是液滴内部有催化能力，然后通过催化产生了中间能有荧光的产物

当然这个液滴加入PEG之后，则会面临膜破裂，然后又重新形成的过程：

![02478efdbaa98547baac48e9dc161d7](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-17-paper_report/02478efdbaa98547baac48e9dc161d7.png)

![c2627ac2c9fe984ab6098004139fc9c](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-17-paper_report/c2627ac2c9fe984ab6098004139fc9c.png)

## 2 氧化还原控制的超分子组件自排序组装

多种超分子混合在一起的时候往往会发生组装之间的彼此干扰，这里通过的是将超分子单体的还原态前体置于膜反应器内，然后根据不同的氧化还原速率，先后得到自组织单体（被氧化的还原态前体），这样就会导致组分A自组装的时候，租房B还没生成，从而避免了两种自组装的掺杂

> Ref: S. Patra, S. Dhiman, S. J. George, *Angew Chem Int Ed*. **64**, e202500456 (2025).

![0f2483f32efa98754519199ba8ceca5](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-17-paper_report/0f2483f32efa98754519199ba8ceca5.png)![De

这是本文的示意图，可以看到整个反应是由DOPC构成的膜内进行的，其中选用了两对自组装前体，分别是NDI和OEt-NDI，两者都可以经过氧化，得到自组装单体，但是两者的自组装形态不一样，一个是形成自组装液滴，一个是形成纤维状。

![image-20250617121558660](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-17-paper_report/image-20250617121558660.png)

这里实际上是由于对NDI加上了一个乙氧基，从而改变了电位，整体电位提高了，反应时间也变长了

![image-20250617121800249](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-17-paper_report/image-20250617121800249.png)

我感觉还真可以这样，以DOPC之类的物质作为反应器膜，内部发生自组装/先后自组装
