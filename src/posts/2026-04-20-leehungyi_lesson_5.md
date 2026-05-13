---
layout: post
title: "李宏毅机器学习2026春笔记5"
date: 2026-04-20
tags: [Hung-yi Lee Machine Learning]
comments: true
author: junedrinleng
toc: true

---

本笔记记录李宏毅机器学习2026年春的第5节课程的内容，包括Harness Engineering的相关介绍内容，“有时候语言模型看起来不够聪明，其实只是人类不会引导”。

<!-- more -->

## 1 AI Agent 表现不如人意的时候

当AI Agent表现的很笨的时候，我们可以增加一些指令来尽可能让AI Agent更好的了解真的应该如何实现任务的内容

![image-20260420201715047](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260420201715047.png)

AI Agent由大语言模型和其他内容构成，这里的其他内容就是harness，包括OpenClaw，Codex，Claude Code等等。

那么强化AI Agent一方面就可以优化LLM来实现更好的表现（[训练](https://youtu.be/YJoegm7kiUM?si=6idTFlUG9MkNgUQ5), [微调](https://youtu.be/EnWz5XuOnIQ?si=pXLKotxfFb9pDPqR) ）；另一方面很重要的部分就是harness了，打造一个好的harness也可以强化AI Agent的能力——AI是一匹很强大的🐎但是你需要借助马鞍驾驭它

## 2 From Prompt Engineering to Harness Engineering

Prompt → Context → Harness，三者核心价值不同

Prompt Engineering：过去LLM能力比较弱，同一个问题不同的问法就表现不一样，所以才会有一些基于prompt的方法来优化模型的输出

![image-20260420202338360](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260420202338360.png)

Context Engineering：后来人们发现，原来大语言模型对于有些内容就是做不到，是因为其并不知道一些资讯信息，所以为了让语言模型在回答的时候能够有新的额外信息进行参考，所以这里就引入的context

![image-20260420202512447](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260420202512447.png)

Harness Engineering：今天语言模型完成任务的时候不再是简单的一问一答，而是一个互动的多轮对话过程，为了能够较好的完成这个任务，所以构成了Harness Engineering

![image-20260420202654058](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260420202654058.png)

其本质就是人类通过一些手段来驾驭这些模型，比如**通过人类的语言来控制认知框架，通过工具来控制能力边界，通过工作流程来控制模型的行为**

## 3 控制模型认知框架

人类可以通过人类语言写成的规则，然后放入prompt，来操控模型的认知框架。

这些框架往往会有一些常见的文档内容，比如AGENTS.md等；和人类社会的法律不一定完全会被遵守一样，模型的文档规定的规则也不一定会百分百被模型遵守

比如对于OpenClaw是优先读取AGENTS.md，而Cowork或者Claude Code则是优先读取CLAUDE.md

![image-20260420203310064](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260420203310064.png)

从2026年开始，已经有许多人系统的开始研究这个md档案会如何影响AI Agent的行为。有人研究发现，AGENTS.md的存在会增加模型的运行速度（均值差不多，主要是在edge case会缩短使用时间）；有人研究1发现人人类写的AGENTS.md并不一定总是发挥作用，LLM自己写的AGENTS.md甚至更烂：

![image-20260420203617078](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260420203617078.png)

>  https://arxiv.org/abs/2602.11988

Openai研究发现，AGENTS.md不要写的太长，他们研究发现如果给模型一个百科全书式的AGENTS.md模型反而表现的很烂，实际上应该让AGENTS.md表现的像一个地图/工作手册，告诉Agent应该去干什么就好了。

## 4 控制Agent的能力边界

比如对于Openclaw来说，由于其自己就是有操作浏览器的工具，这使得其自己可以很轻易地运营一个账户，但比如说cowork由于是在云端沙箱进行的，所以他就不能像openclaw一样可以运营youtube账号

给模型不同的工具会大幅度影响模型的能力，但给模型的工具适合人类的模型（比如给人类的搜索引擎逻辑——一次性只展示10个资料）很可能比不给还表现还差：

![image-20260420204436114](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260420204436114.png)

所以很可能，以后很多服务不再是面向人类，而是面向agent，对于agent来说他们更喜欢cli而非gui图形界面

## 5 用标准工作流程控制Agent的行为

![image-20260420204906033](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260420204906033.png)

AI和人类一样，不一定能一次性生成一个完全没错的内容，因为他是一个autoregressive的过程，只有引入了evaluator才能让agent不断的优化自己的内容

而且这篇工作里，并不是generator生成完才给evaluator来审阅，而是一开始就商量好合作框架。

![image-20260420205316294](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260420205316294.png)

Ralph Loop就是让语言模型不断的迭代，而非一次性生成后就结束。但上图里很容易很快到达LLM的上下文窗口长度，所以也可以每次产生feedback之后就做个summary然后再输入

harness不是一个万用的内容，是随着语言模型的能力改变而不断的增加/减少组件

不同的任务内容，可能就需要设计不同的feedback来优化最后的输出结果。

除了这些工具的feedback内容，还有一些feedback是来自于于人类的feedback，而人类过度责备AI Agent可能是有害的，这因为模型很可能有一个代表情绪的向量，这个向量是和输入的文本的情绪会相关

## 6 Life-long AI Agent

这些模型并不一定是短暂的陪伴你，很可能是一辈子陪伴你的工具。为了实现这个目的本身，agent也需要做一些其他的内容，比如对于Claude code来说，一个还没上线的模式是AutoDream可以进入睡眠的状态一样来整理自己的记忆

另一个更重要的要求是，AI Agent应该伴随着主人随着互动的过程中根据feedback不断的增强自己的能力

![image-20260420212114708](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260420212114708.png)

多数时候，现在AI Agent获得的回馈是很模糊的，这样的咨询应该如何拿来优化模型是一个需要考虑的问题

一种自我强化的方案是直接把成功的经验写成skill；但整个AI Agent的框架里并不只有harness，还有语言模型，也许能够更新语言模型的参数也是很重要的

