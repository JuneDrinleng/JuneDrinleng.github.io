---
layout: post
title: "李宏毅机器学习2026春笔记7"
date: 2026-05-11
tags: [Hung-yi Lee Machine Learning]
comments: true
author: junedrinleng
toc: true

---

本笔记记录李宏毅机器学习2026年春的第7节课程的内容，主要梳理的是AI的自我成长相关的内容。

<!-- more -->

## 1 何谓AI的自我成长

所谓AI的自我成长，这里暂时还没有明确的定义，许多AI自我成长的宣称，实际上都还是有人类的介入，只不过人类的介入程度要比过去的少

机器学习的本质就是三个步骤：我要找什么函数+我有哪些函数可以选择→选择一个最好的函数

过去这里三个步骤里的我，是指的“人类”，那么什么时候这里的“我”从人类变为AI就是AI的自我成长

传统机器学习的本质是根据loss来优化函数的参数θ：

![image-20260511173957612](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511173957612.png)

过去我们获得标准答案，对于有监督来说就是通过人类的标注的方式来获得。那么这里能否用AI来实现呢？

一个悖论是，如果这个ai本身就已经能够产生答案，说明他比当前这个训练中的ai更厉害，即我们已经有了更厉害的ai了，那为什么不基于更厉害的ai去成长呢？

那么所以一个想法就是，除了用训练的这个ai模型产生y之外，也用它来阐释$\hat y$。例如上次课程我们所说的ai的自我修正，不过上期所说的自我修正的过程是并不会改变模型的参数的，那么下次同样的输入再度输入模型的时候，给出的还是之前未修正的输出结果——因为模型的参数本身没变

那么问题就在于我们也许可以通过模型自我修正后的输出来用于fine-tuning模型，以便后续相同的输入的时候可以输出更准确的答案

![image-20260511174529619](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511174529619.png)

## 2 从有监督学习到强化学习

刚刚的讨论都是基于supervised learning，但实际上还有许多方案（比如RL）是无需人工给出标准答案。然而这不代表其无需人类介入，只不过此时人类介入在奖励函数这

![image-20260511174753610](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511174753610.png)

RL的问题就是reward很spare，这就导致AI很难以学习。为了简化训练，在训练过程中需要reward shaping——也就是为了引导ai到达最终的reward，我们可以设置一些先验的流程reward

![image-20260511174955930](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511174955930.png)

现在目前可以是人类定义reward function，但让ai辅助定义reward shape的时候的proxy reward function：

![image-20260511175113780](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511175113780.png)

问题在于，这个世界上不是所有事情都很容易可以简化为reward function，一个想法是用一个新的ai来创建reward，但如何评价这个ai写出的reward function是否好还是需要人类

![image-20260511175914231](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511175914231.png)

这就是RLHF的思路，当然也有RLAIF的想法希望去掉人类的评价

![image-20260511180232026](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511180232026.png)

实现RLALF的方案很大，比如verbalize-based，ensemble-based，certainty-based等方案

还有诸如Test-Time training 的方案实现自己订loss，但是这种自己ai订loss的方案只有在小范围调整（小范围的数据集）的时候才是有效的，当范围变大效果就会劣化：

![image-20260511181143303](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511181143303.png)

## 3 如何minimize entropy

![image-20260511181527179](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511181527179.png)

传统的算entropy的方案需要便利所有y，但是LLM的输出是无穷无尽的，这是难以遍历的。当时的主流做法不是minimize sequence的entropy，而是minimize每个token输出时候的概率分布的entropy：

![image-20260511181651269](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511181651269.png)

先minimize这个概率分布，然后采样出y1，然后进而产生下一个概率分布，然后继续minimize这个分布后再采样出y2

但我们梳理的时候得到的过去的gradient的方向并不是真正该update的方向，参考以下梳理：

![image-20260511182043355](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511182043355.png)

## 4 从需要人类介入到No Human

刚刚的loop中，还需要人类来搜素数据，然后实现后续的无需人类的自我学习过程，但2025年的时候也有相关的研究来实现出题-解题-评价：

![image-20260511182607214](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260511182607214.png)

需要注意的是这里的l和l`的关系需要谨慎的注意和设计，因为如果proposer出题简单那就模型无法提升，如果出题太难那么无人能解决也就起不到训练的方案

和之前的Test-time training一样，随着训练步数增加，模型会收敛，然后也就停止进步了。

除此之外，目前模型的proposer出题需要额外的信息，比如人类介入，这样模型会相较于没有额外信息而已效果更好

## 5 自我成长很难，但强AI来训练弱AI是很可能的

例如有人用Opus 4.5用于训练Gemma3-4B-Base

但模型训练模型相较于直接人类训练来说，有的任务表现的好，有的表现的一般，同时模型还存在一些作弊的可能

需要注意的是，即便是差的模型也有可能使得强的模型有所增长
