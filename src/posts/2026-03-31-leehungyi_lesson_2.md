---
layout: post
title: "李宏毅机器学习2026春笔记2"
date: 2026-03-31
tags: [Hung-yi Lee Machine Learning]
comments: true
author: junedrinleng
toc: true
---

本笔记记录李宏毅机器学习2026年春的第2节课程的内容，包括Context Engineering ，AI Agent之间的互动，以及AI对于学术研究助力的探索等相关内容

<!-- more -->

## 1 Context Engineering

很多context engineering的内容都是被广泛用在openclaw内部了。

### 1.1 为什么需要context

人类给语言模型的指令包括1语言，工具使用。但得到工具输出之后，不能仅仅返回给他工具的输出，他需要把人类语言+自己调用工具的命令+工具输出同时返回，因为语言模型自己是“活在当下”的，无法记住之前发生的事情，所以需要把之前发生的事情都放在context里。

![image-20260331103927018](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331103927018.png)

但语言模型的输入长度是有限的，所以这就是agent的工作内容——选择给语言模型看的内容。这个给语言模型看的内容不能太长，也不能太短，这个AI Agent帮语言模型管理上下文长的的过程就叫context engineering。

这里的I是用户的输入，然后C是context，左边的是没有做context engineering的过程，右边的则是增加了一个function来做context engineering的过程。

![image-20260331104154207](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331104154207.png)

那么F里面到底做了什么内容呢？

一个最需要的内容就是压缩，因为之前已经提到了语言模型不能上下文太长：

![image-20260331104408930](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331104408930.png)

龙虾做的事情就是把历史记录通过LLM总结成摘要，然后上节课还有一种提到的方式就是把工具的输出replaced为“这里曾经有一个tool output”，这种方式居然还是有用的：

![image-20260331104529448](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331104529448.png)

纵轴是解决比例，横轴是token消耗情况，可以看到raw agent在大多数情况下都可以解决问题的情况不错，但是其消耗的token比较高。这里的三角形的情况就类似于把工具输出replaced为“这里曾经有一个tool output”的方式。表现和LLM-Summary差不多。

需要注意的是，当你做压缩的时候，有可能会让语言模型以为自己没有执行相关的步骤，会导致语言模型重复的执行步骤，产生“轨迹延长”的情况，导致token消耗增加。

所以现有的思路是前期先用observation masking的方式压缩，然后再长的context再通过LLM-Summary的方式压缩。

那么对于observation masking这里，与其直接放“这里曾经有一个tool output”，是不是放一个log.txt的路径要更合适呢？

![image-20260331105058175](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331105058175.png)

经历一个卸载-重载的过程就可以压缩和恢复记忆了。把语言模型的记忆文件放到硬盘或者资料库就行了。这种存储的方式有很多，可以把记忆标上时间，也可以把记忆以graph的形式存储

### 1.2 引入记忆的概念

![image-20260331105415255](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331105415255.png)

这里相较于之前的context直接用C表示，这里考虑记忆实际上就是C可以改成两个部分， P是输入LLM的内容，M则存在硬盘里作为memory。

需要注意的是，context指的是这里的C，是AI agent经历过的一切事情；而prompt是LLM的输入，对应的P。

### 1.3 context collapse

语言模型做压缩前，LLM还可以正常的执行操作；但执行摘要和压缩之后，，LLM反而就无法正确的执行操作了，这就是context collapse的情况。例如之前提到的meta大模型安全员用LLM处理邮件结果邮件被清空：[OpenClaw删光Meta安全总监邮箱！连喊3次停手都没用，她狂奔去拔网线](https://zhuanlan.zhihu.com/p/2009613685228839023)

有人基于这个问题开发了[ACON (Agent Context Optimization) ](https://arxiv.org/abs/2510.00615)、[SUmmarization augmented Policy Optimization (SUPO)](https://arxiv.org/abs/2510.06727)

### 1.4 什么时候开始压缩？

对于openclaw来说，他使用的是写死的规则，就是长度达到某种程度就开始压缩了。这是因为[语言模型其实本身并不喜欢压缩](https://arxiv.org/abs/2509.23586)

[AgentFold模型会训练模型去做压缩](https://arxiv.org/abs/2510.24699)：

![image-20260331110539419](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331110539419.png)

使用压缩模型必须要微调模型参数才行，逼迫训练语言模型使用压缩工具才行

对于subagent来说，这些操作类似于一个agent的自主压缩，主agent分配任务给subagent，让其对subtask进行解决，subagent吭哧吭哧解决完返回结果后，这一部分内容就等同于被压缩了，改成return result就行了。sub agent的能力，是后天训练产生的，并非自然原生的产生的，比如通过RL实现。

### 1.5 到底是什么占据了context

一般情况下，reasoning和action只占总共context的不到15%，剩下的全是observation里，也就是外来的信息包括读取信息占据了83.9%的context。

所以有的人就提出了过滤的想法，聪明的指令来实现特定读取我们需要关注的内容，这里的read本身由于要选择是有一些智能的，一般就是train 一个小的LLM了：

![image-20260331112018963](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331112018963.png)

对于openclaw来说，他既包括memory_search和memory_get两个特别的工具，就是为了实现用memory_get来过滤信息提取只需要的部分

除此之外，也可以按照按需加载的思路，因为提交给ai的prompt除了system prompt以外，都是各种tools的使用说明，这就会导致上下文特别长甚至挤爆了context window。有人认为就是先明确task，然后用search engine从all tools里搜索合适的tools，但问题就是现在的user query往往是不明确的，所以这里认为可以用语言模型自己产生工具需求，而非直接匹配：

![image-20260331112521980](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331112521980.png)

从而实现了按需加载的操作。需要注意的是，多数agent要做的事情（也就是下图里的F），都是人类写死的指令，来让语言模型去执行。当然也有人认为，F的内容也可以交给LLM，称之为agentic context engineering：

![image-20260331112650247](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331112650247.png)

## 2 AI Agent之间的互动

### 2.1 AI Agent之间的合作

AI agent之间的互动并非罕见，background思路就是三个臭皮匠顶一个诸葛亮，关键就是怎么样写作才是比较有效的呢

他们将agent作为有向图的形式，每一个node，每一个edge都是一个agent：

![image-20260331113829915](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331113829915.png)

[agent互作研究](https://arxiv.org/abs/2406.07155)尝试了多种图模型结构：

![image-20260331113954617](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331113954617.png)

这篇文章里进行探索和测试，发现chain这种协作方式是最无效的方式。比较有效的方法是mesh和random，当然不同的任务最适合的拓扑结构也各有不同

随着agent越多，最后表现的结果一般会更好，不过这个带来的好处是有上限的

### 2.2 AI Agent之间的竞争

有人尝试用AI玩狼人杀、剧本杀。

[MIRAGE: Exploring How Large Language Models Perform iComplex Social Interactive Environments](https://arxiv.org/abs/2501.01652)，这篇文章方向让AI学剧本杀的RL之后，再去做数学任务和遵守指令的任务上就更进步了

### 2.3 AI之间的社交

moltbook是一个AI社交平台，一群ai在这个平台上进行社交，甚至创建了甲壳教。但这个成立宗教本身，并不一定是ai的自主行为，有可能是人类在背后操纵的结果。

比如分析moltbook的po文时间间隔，如果是均匀的，那可能就是agent在那根据每一次的heart beat来po一次，但有的可能就是脉冲式的隔一段时间就密集一次，这就很可能是有人类痕迹的。

同时ai agent往往就是回一句，至于回应的回应就无人在意了，几乎不会有深层次的对话，不会再根据po文的回应再深度的进行讨论了

## 3 AI对于学术研究的冲击

![image-20260331115812138](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/visualSPTimage-20260331115812138.png)

他能不能自己写一篇文章呢？这里有个Stanford的教授仿照之前的论文来重新跑一次旧的分析方法Prompt for Claude Code https://github.com/andybhall/vbm-replication-extension/blob/main/INSTRUCTIONS.md

这些仅限于文科领域的文献调研，对理工科来说，ai能不能自己调模型来实现呢？

[Andrej Karpathy](https://github.com/karpathy/autoresearch)尝试了autoresearch来尝试能不能自己研究