---
layout: post
title: "李宏毅机器学习2026春笔记8"
date: 2026-06-11
tags: [Hung-yi Lee Machine Learning]
comments: true
author: junedrinleng
toc: true

---

本笔记记录李宏毅机器学习2026年春的第8节课程的内容，主要梳理的依然是AI的自我成长相关的内容。

<!-- more -->

## 1 回顾上节课的内容——loss function的design

给定机器参数$A_{\theta}$和数据/instruction之类的proxy H，然后通过loss来优化$L(A_{\theta})$

![image-20260611234523571](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260611234523571.png)

![image-20260611234513111](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260611234513111.png)

当然，在rl文献里，L对应的reward函数是越大越好，dl的一般情况的损失函数则是越小越好。

在上周的内容中，上述过程已经可以实现几乎没有人类参与的学习，上节课提到的主要是从LLM的角度去不断的更新，本节课的主要内容聚焦于harness的更新

## 2 harness的自我更新

相较于过去的表达，A不仅仅和模型参数相关，还和harness (h)相关，可以写作$A_{\theta,h}$

![image-20260611234845844](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260611234845844.png)

现在的问题是，如何更新harness呢？一个常见的作法是通过llm来更新harness：

$h$  and $L(A_{\theta,h};H)$ --> LLM --> $h'$

最早的一系列的研究更新harness是更新prompt，也就是之前的所谓的prompt engineering

![image-20260611235108720](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260611235108720.png)

最开始的方案是线性的优化，一步步优化harness，但是和SGD一样如果有一步崩坏了，就很可能陷入local minima中了。因此现代的harness update的方案就类似于遗传算法，首先有一个harness表现不错的池子（其中若干表现好的harness），然后从中取出俩harness让LLM产生更好的harness，如果产出的更好就把他放回池子中

![image-20260611235512448](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260611235512448.png)

例如[GEPA](https://arxiv.org.abs/2507.19457)，或者是update agent的memory system这一harness部分(https://arxiv.org/abs/2602.07755)，除此之外还有optimize agent的workflow：https://arxiv.org/abs/2505.22954

一个可以现成的迭代prompt的工具是DSPY: https://github/com/stanfordnlp/dspy

## 3 同时演化 harness和LLM

通常情况下，改harness是比较容易提升agent效果的，但是微调就容易崩坏。（prompt optimization优先，然后再weight optimization）

只更新prompt或者只更新weight的效果一般情况下会比同时优化prompt和weight要差。

有些时候，人类的目标是会发生更新的，那么这种情况LLM又该如何应对呢？

为了应对这种作法，有两种极端的方案，一种是如果目标变化就放弃一切轻装上阵，另一种作法是在原先的基础上不断的保留一切加新的内容，背负一切。一般情况下就需要对两者平衡

对于Test Time Training来说，很容易发生目标的改变，因为对于TTT来说，模型的目标是由input决定的，每当有新的内容时，每一步新的输入就是一个新的目标

![image-20260612001405192](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260612001405192.png)

如何平衡，参考机器学习2025的课程内容

除此之外，随着目标的改变和模型参数的更新，模型可能会遗忘之前已经有的能力，为了应对这个引入了后训练（参考去年的机器学习导论内容）。当时上述讨论的主要是在weight层面，实际上更新harness也可能会导致模型的能力下降——更新模型的workflow之后模型可能为了适应前后的workflow而增加复杂度，最终导致workflow杀鸡用牛刀甚至崩坏

## 4 参数与记忆

![image-20260612004027214](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260612004027214.png)

AI Agent的设计，其实和生物学的系统很像。

当然，AI Agent的问题在于，他很被动，缺少一个内在的欲望。现在以研究问题为例，语言模型已经可以帮你解决研究问题（例如AlphaEvolve），整理资料润色文稿，甚至可以帮你在某个领域寻找研究问题（AI co-scientist）。但这些依旧是依赖于人类来提供原生的动机

