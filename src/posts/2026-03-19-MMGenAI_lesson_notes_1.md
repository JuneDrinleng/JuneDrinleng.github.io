---
layout: post
title: "多模态生成式人工智能笔记1"
date:   2026-03-19
tags: [多模态生成式人工智能]
comments: true
author: junedrinleng
toc: true
---

本笔记记录多模态生成式人工智能课程的笔记，主要包括预训练以及RLHF和DPO等内容

<!-- more -->

## 1 Pretraining

预训练包括三种常见架构：

![image-20260319081224239](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319081224239.png)

如果训练encoder，那就是类似Bert的架构，他由于只擅长完形填空，导致很难生成新的东西很好，往往输出的话还要加一个decoder才行

对于Encoder-Decoder价格，一个常见模型是T5，相较于Bert而言，是删除一段内容而非完形填空，由于需要训练生成这段被删除的内容，所以生成效果还会好一些。由于训练了decoder，所以适合更多的任务。

如果训练decoder-only，这本质更接近于语言的本质（当然现在也有用扩散模型去做decoder-only，模仿人类说长文时还需要大纲，目前还在探索之中），也就是next-word-prediction。最早的decoder-only的时候，是先学到优秀的表达，然后最后微调是学线性化的参数来应对下游任务（早期GPT如GPT-2）：

![image-20260319081924348](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319081924348.png)

具体而言，就是把这个过程作为生成模型，一步一步生成下一步

对于GPT-3来说，由于有in-context learning，他就不需要对linear 层进行微调这样。相当于是能自己根据上下文去适应任务。

早期的时候，模型的参数量和数据量的匹配是不明确的，例如chinchilla消耗的数据量很大但模型参数本身不大却表现尚可，需要考虑scaling efficient

![image-20260319082533000](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319082533000.png)

pretraining也许更像从数据里找规律来拟合数据分布（？），预训练带来了大量的数据信息，但是同时也带来了越来越多的隐私风险，这就是后续的tuning要做的

## 2 Tuning and RLHF

GPT-3时代，面临着“不懂人话”的问题，这可能也是next-token-prediction的特点：

![image-20260319083403775](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319083403775.png)

学的是训练数据的数据分布，车轱辘话来回倒扯，大语言模型空有庞大的知识，却说不出好的内容，微调就是为了教会模型怎么用这些知识来输出

![image-20260319083755984](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319083755984.png)

横轴算力，纵轴是在MMLU这个榜单上的表现水平，根据趋势算力越大能力越强。在Flan-T5的工作探索发现，模型越大，微调反而提升越大，微调越有意义。

预训练的模型参数量/训练数据量scale up会让模型更有知识，但instruction-tuning会让模型更有能力（准确的回答内容）

那么instruction tuning的问题是什么：大量任务并非有唯一真值的问题；S而且模型无法区分哪些错误是严重的，哪些错误的无关紧要的

![image-20260319085138818](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319085138818.png)

有的回答人类就是觉得更像人话，有的则不然，所以通过奖励函数，对于两个回答s1和s2，利用奖励函数来打分，然后我们的目的就是调整模型参数让回答的奖励分数最大

RL强化学习是一件很困难的事情，全局搜索很难，但离优化点很近的时候才比较好弄

用强化学习的方式来算，最直观的就是gradient ascent梯度上升，尽可能提高奖励分数：

![image-20260319085459295](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319085459295.png)

问题在于很多时候奖励函数本身不可导

![image-20260319085551600](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319085551600.png)

这里用log的方式来把乘法变成加法，很多内容无法求解只能用大量采样的方式来近似计算难以求解的事情（mcmc）

![image-20260319085750294](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319085750294.png)

尽可能增加m（样本量）的大小就可以尽可能接近期望了，那么为了近似期望就得m很大，但这会导致训练很困难，且R的方差很大（真实情况下reward很不稳定）有可能NaN，因此为了解决这个问题引入了PPO：

![image-20260319090103964](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319090103964.png)

这里用的A而非直接reward函数，确定改的方向对但不要改太多

那么如何获得人类打分的机制呢？训练一个模型来专门打分，而且一般直接打分不容易，但通过比较的方式就会比较好产生结论，通过判断输赢的方式来量化

![image-20260319090858475](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319090858475.png)

用KL散度来衡量新旧模型的答案距离，使得新模型产生的更新不会离原先模型太远

![image-20260319091954870](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260319091954870.png)

DPO相较于RLHF不再在训练的时候同时训练reward model，dpo是利用reward model先在离线把好的数据从数据里挑出来，这样就不用在训练的时候还得实时算reward了（生成一个内容，再计算reward，这会导致训练很慢）

> 1. RLHF 的“在线”模式（一边跑一边练）
>
> 在 RLHF 的 PPO 阶段，模型非常累：
>
> - **动作**：模型针对一个问题，实时生成好几个不同的回答。
> - **反馈**：它把这些回答交给旁边的“裁判”（奖励模型 RM）打分。
> - **调整**：根据分数高低，模型立刻调整自己的参数。
> - **特点**：数据是**实时产生**的，模型在不断地“探索”新可能。这就像你在考场上边做题边对答案，然后立刻改思路。
> - DPO 的“离线”模式（复盘现成的对比）
>
> DPO 根本不需要模型在训练时去生成新回答，它直接查阅**已经做好的“错题本”**：
>
> - **准备阶段**：在训练开始前，我们就已经准备好了成千上万组数据，每组都包含：`问题` + `好的回答 (Chosen)` + `差的回答 (Rejected)`。
> - **训练过程**：模型**不需要生成任何文字**。它只是把这两条现成的数据拿过来，计算一下：*“如果我选 A 的概率增加，选 B 的概率减少，我的得分是不是更高？”*
> - **特点**：数据是**静态的、死的数据**。模型不需要跟环境互动，只需要像做“选择题”一样，把好数据和坏数据的概率拉开距离
