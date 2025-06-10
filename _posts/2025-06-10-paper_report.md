---
layout: post
title: "20250609文献阅读笔记"
date:   2025-06-10
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要整理2025年6月10日阅读的部分文献，主要是介绍MOF修饰的仿原生细胞及其催化反应，以及一篇蛋白自组织的文献

<!-- more -->

## 1 MOF修饰类细胞液滴表面，探究类原始细胞液滴之间的相互作用

> Ref: [ Y. Ji, Y. Lin, Y. Qiao, Nat. Chem., 1–11 (2025)](https://www.nature.com/articles/s41557-025-01827-7)

利用无膜液滴仿真细胞组织以及细胞之间的相互作用仍然存在挑战，作者团队开发了一种基于MOF材料修饰无膜液滴表面的方式，借助MOF实现了细胞中细胞膜嵌入蛋白的功能从而能够模仿整个细胞膜的蛋白和膜内蛋白

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-10-paper_report/41557_2025_1827_Figa_HTML.png)

最后这个多个类细胞液滴之间的相互作用很漂亮！

![Fig. 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-10-paper_report/41557_2025_1827_Fig1_HTML.png)

对于细胞而言，细胞膜内部有一些嵌入细胞，以及细胞膜的内表面（Peripheral membrane protein 外周膜）也有一些蛋白。这些细胞通过一些相互作用与链接构建了组织。

那么对于这篇文章的原始类细胞来说，同样是原始类细胞液滴，加入嵌入了蛋白的MOF材料，将这些MOF材料包裹在原始类细胞液滴的表面，构成了表面修饰的原始类细胞，最终再通过聚集形成了原始类组织

总的来说，相当于是用这个protocell来实现对上述a图中的细胞功能的仿真

对于MOF而言，也有两种，一种是将GOx和HRP嵌入在MOF内部，另一种是在MOF的表面吸附这些蛋白

![Fig. 2](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-10-paper_report/41557_2025_1827_Fig2_HTML.png)

这里对MOF修饰的原始类细胞做了一了一系列的表征，包括表面张力（修饰后很明显的降低了表面张力），核壳结构分布（空间上的分布以及径向扫描，横切面扫描），除此之外还测量了液滴的流动性（FRAP）以及修饰MOF相较于未修饰MOF具备明显的液滴成长能力（FSCA-A,Time）

图j开始探究修饰与未修饰的相容性，可以发现，没修饰的和没修饰的之间可以相容，修饰的和修饰的之间不可以想融，没修饰的和修饰的彼此之间不能相容（i-p，m-p是证据）

![Fig. 3](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-10-paper_report/41557_2025_1827_Fig3_HTML.png)

这里探究的是液滴内部掺杂不同分子量/电荷量的分子对液滴的影响，同样大的电荷量，分子量更大的会倾向全部嵌合在MOF膜上，而小的则没有，电荷量和分子量都小的红球(f)则是部分嵌合。通过径向的荧光强度实现验证

![Fig. 4](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-10-paper_report/41557_2025_1827_Fig4_HTML.png)

这里很妙的就是通过这样一个HRP的催化剂，可以将amplex red（一种前体）反映程resorufin（红色），使得液滴逐渐变红，而过量的过氧化氢则会把红色的resorufin氧化掉从而使得红光逐渐变暗

那么在上述的基础上，就可以利用上述的结果构建人工仿生的类原始细胞：
![Fig. 5](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-10-paper_report/41557_2025_1827_Fig5_HTML.png)

最漂亮的是，团队接着把这个仿生细胞用于多细胞之间的相互作用的研究：

![Fig. 6](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-10-paper_report/41557_2025_1827_Fig6_HTML.png)

可以看到拍到了入图b的这种类原始组织的清醒，除此之外改变protocell的链接策略可以形成不同的组织形状

形成组织后甚至能构成一个多细胞协同的反应通路（f-g）

##  2 可调谐快速组装胶原蛋白元素

> Ref:  [X. Gong *et al.*, *Nat. Mater.*, 1–12 (2025).](https://www.nature.com/articles/s41563-025-02241-7)

这篇文献前面看都属于正常的走向，直到最后一张图原地抬升逼格

胶原蛋白在体外的组装与粘合是存在挑战限制了他作为生物支架以及粘合剂的使用场景，作者团队提出了一种胶原蛋白制造的方法——大分子挤压及时组装，可以实现可调控的生物打印，能被广泛应用于直接打印细胞组织甚至类器官

![Fig. 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-10-paper_report/41563_2025_2241_Fig1_HTML.png)

相较于胶原蛋白直接成交，加入PEG8k之后快速成胶。图c的透明度也在一定程度上反映交联度（交联度越高，透明度越高）

在制备的时候通过捶打的方式吸取后喷出——演化为了喷墨打印法，只需要让胶原蛋白(collagen)和PEG接触即可，可以将其使用在图案化中（如o）

![Fig. 2](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-10-paper_report/41563_2025_2241_Fig2_HTML.png)

基于此可以形成一些微血管，这些微血管还会在不断的生长

而且相较于regular的成胶方式，这种挤出得到的微血管他是均匀的，不会随着重力导致胶原蛋白沉降：

![Fig. 3](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-10-paper_report/41563_2025_2241_Fig3_HTML.png)

不仅可以将其进行图案化，还可以进行纺丝：
![Fig. 4](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-10-paper_report/41563_2025_2241_Fig4_HTML.png)

最后这个图牛逼了，他直接打印了一个类心脏器官：
![Fig. 5](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-06-10-paper_report/41563_2025_2241_Fig5_HTML.png)

观察到他的节律性的收缩舒张

## 3 总结

现在大家的生物体系都是往组织器官方面卷了吗……看的汗流浃背了，小作坊课题组的前途在哪呢……

找点能做的吧
