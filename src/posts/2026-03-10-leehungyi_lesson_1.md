---
layout: post
title: "李宏毅机器学习2026春笔记1"
date:   2026-02-10
tags: [李宏毅机器学习]
comments: true
author: junedrinleng
toc: true
---

本笔记记录李宏毅机器学习2026年春的第一节课程的内容，聚焦于AI Agent的运作原理（以openclaw为例来了解）

<!-- more -->

## 1 绪论

作业有部分是涉及训练模型的，有的则不涉及。焦灼的等待，迷茫的调超参，本身是深度学习的一个部分。

所有的作业都可以使用colab平台实现，没有人会因为你是在没有资源的实验室就认为你可以工作的内容比较差——提前感受社会的不公（永远有人的资源比你多）

有ai助教的新版课程网页[here](https://ml.ee.ntu.edu.tw/course/home)

## 2 解剖小龙虾 — 以 OpenClaw 为例介绍 AI Agent 的运作原理

今天这堂课，就是来看看怎么搞清楚小龙虾是如何运作的

openclaw这样的ai agent和常用的基于chat的 ai 页面有什么不同呢？

一般过去的ai只动口，不动手，他只能给你指导建议（和导师一样），而openclaw则是直接会自动的进行对应的操作：

![image-20260310194136029](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310194136029.png)

### 2.1 AI agent并非全新概念

AI Agent 并非全新的概念，早在2022年年底就已经有了agent的期待，但是于2023年就推出了auto-gpt的agent，但当时大语言模型还不太想，就导致最后热潮退出。

2025年，ai agent已经出具雏形（Claude Code, Gemini CLI），其实Claude Code和openclaw基本差不多，只不过openclaw能够直接链接whatsapp之类的社交app

### 2.2 AI agent不是语言模型，不是人工智能

![image-20260310194935086](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310194935086.png)

Openclaw实际上是AI Agent中不是AI的部分，龙虾的聪明程度实际上取决于背后的模型

有了很自主的AI Agent之后，就会带来了更新的想象，比如说ai缺乏一个物理的身体

需要注意的是，由于openclaw在不断的变化，那么本节课也主要是讲概念为主

语言模型真正做的实际上是文字接龙，我们把输出的接龙的这个内容叫做token，而未完成的句子有个专有名词叫做prompt：

![image-20260310195900816](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310195900816.png)

这些语言模型就是当你把prompt输入之后就开始接龙，然后接龙完之后就把输出的接龙链接到prompt，然后继续接龙，直至结束：

![image-20260310200032717](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310200032717.png)

另一个需要注意的地方是，语言模型的输入+输出是有长度上限的，这个上限就是context Windows，不同的模型context Window上限各不相同：

![image-20260310200205330](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310200205330.png)

当今的语言模型，输入越长，就越没法做准确的进行接龙了。

可以把大语言模型想象成一个被关在什么都不存在的黑屋子里，他唯一能做的就是给不知道是谁的那获取prompt然后接龙输出token

### 2.3 AI Agent是怎么知道自己是谁，主人是谁

背后的模式就是这样的：

![image-20260310200513008](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310200513008.png)

agent每次都会添加上system prompt，现在的小龙虾里有很多相关的资讯：

![image-20260310200602159](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310200602159.png)

这些文件都是人类可读的，他唯一做的就是把这些文件内容都读出来，然后把其贴到system prompt里，这个system prompt是很长的，叠加一个简单的问题就消耗了4000个token了

这些文件就是普通的文件，你可以自己改，但是由于文件很多很容易挂一漏万，所以不如直接把任务交给agent

那么这只是第一轮问答，多轮对话还会把过去的对话也一并贴上

![image-20260310200931391](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310200931391.png)

### 2.4 怎么使用电脑的呢？

输入prompt之后给出的token是使用工具这个指令，这些有关工具的使用手册都写在system prompt里：

![image-20260310201158364](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310201158364.png)

![image-20260310201331376](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310201331376.png)

然后语言模型就会传出相关的指令，然后根据这个内容继续后续的流程（每一轮都是把之前的所有历史贴入大语言模型）

openclaw最强大的工具是exec，他可以通过这个工具执行任何shell command（文字指令）。由于语言模型更prefer文字，所以他还是更喜欢用文字指令而非根据屏幕的内容

由于其可以通过exec执行任何指令，而他又有可能在读取网页的过程中遇到了植入了特殊的指令，就会让语言模型做出不该做的事情。

那么如何防御呢？

![image-20260310202022472](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310202022472.png)

模型层面的防御的问题在于，大语言模型的输出是不可预测的，从而导致不一定能完全避免。而龙虾侧面的防御，则是写死的规则，因为龙虾完全没有语言能力和思考能力，他只会机械的执行规则

### 2.5 AI Agent会自己创作工具

![image-20260310202312050](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310202312050.png)

在所有的工具里，最特殊的一个工具是sub-agent(更正式的名称是spawn)：

![image-20260310202844301](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310202844301.png)

相当于把一个大龙虾繁殖出俩小龙虾：

![image-20260310202924193](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310202924193.png)

这里召唤的小龙虾可以节省大龙虾的context window，不需要非常复杂的互动，只有摘要，就像一个导师一样，只关注你的组会ppt，而不关注你具体做了什么。这一套技术就叫做context engineering。

如何解决层层外包无人做事的问题呢？那就是让小龙虾失去生育能力，openclaw直接禁止繁衍的小龙虾使用spawn工具

### 2.6 Skill介绍

Skill不是一段代码，而是一段龙虾的工作流程说明书，也只不过是一段文件而已

具体的使用流程是这样，每次收到prompt之后，在文件夹里搜索有没有指定的Skill，如果有对应的Skill就把文件内容添加到prompt里：
![image-20260310203614108](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310203614108.png)

现在只把Skill放路径，按需读取，来节省token的使用，不然把skill全加入会因为context window挤爆而出问题。

因为Skill很简单，就是文件，所以只需要把Skill的文件放在指定的文件夹就行了。网上的专门搜寻skill的网址：clawhub，需要注意的是有些skill是有恶意的

### 2.7 长期运行的上下文窗口不够用

龙虾的特色是，长时间的运行就会导致迟早会超过上下文窗口的context window长度。一个简单的方法就是new session。

龙虾并不会轻易的失忆，因为龙虾会把一些内容写在日记里（memory/YYYY-MM-DD.md）和长期记忆MEMORY.md里

龙虾读取记忆就是靠RAG，对记忆的.md文件档案做RAG

![image-20260310204329997](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310204329997.png)

这里的RAG具体流程是这样：把所有记忆文档切成若干个chunk，然后和把关键词和chunk进行匹配，包括字面比对和语义比对，然后把最契合的前k个chunk作为prompt输入到模型里

![image-20260310204601889](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310204601889.png)

需要注意的是，有的模型很蠢，并不会去做，只会在嘴上答应，只要没有编辑文档，那就是没记住

当龙虾要给语言模型的文字超过语言模型的context window的时候，龙虾会启动context compression：

![image-20260310205546778](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310205546778.png)

这里的压缩是可以不断递归的，可以产生摘要的摘要，摘要的摘要的摘要，以便不断的保证满足context window内。需要注意的是，龙虾不会压缩memory.md里的内容，因为龙虾不会压缩system prompt，而一旦没写就很容易忘记。

### 2.8 心跳机制和cron job 系统

每隔一段时间，给龙虾发一个固定的文档，然后让龙虾固定一段时间就执行内容：可以帮你做一些周期性的任务，也可以内容不明确（eg. 向着目标前进）

![image-20260310204918913](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260310204918913.png)

cron job系统是一个排程工具，能够安排日程，比如到中午几点就会增加一次额外心跳（不是读heartbeat.md而是设置好的prompt）

这个排程系统的优秀之处就在于可以让人工智能学会等待，不过即便是模型很好他也不一定每次都会用cron job，一个比较好的思路就是在memory里告诉他
