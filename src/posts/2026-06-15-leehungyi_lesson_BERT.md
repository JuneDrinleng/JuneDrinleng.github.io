---
layout: post
title: "李宏毅机器学习专题笔记——BERT"
date: 2026-06-15
tags: [Hung-yi Lee Machine Learning]
comments: true
author: junedrinleng
toc: true

---

本笔记记录李宏毅2021年春机器学习课程的内容，主要梳理的自监督学习的相关知识，包括Bert的内容

<!-- more -->

## 1 芝麻街、进击的巨人与自监督学习

今天自监督学习模型的很多模型名字都和芝麻街的人物很像：

![image-20260615152740479](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260615152740479.png)

除此之外，BERT在2021年，相当于是进击的巨人里击破玛丽亚之墙的超大型巨人，因为其参数量特别大，高达340M（在2026年的今天，这个参数量已经算不上什么了，但在2021年确实算很大了）

实际上，2021年时代，诸如BERT（340M），GPT-2（1542M），Megatron（8B），T5（11B），GPT-3（175B），宛如地鸣被发动一般，各种大参数模型拔地而起

## 2 Bert 模型简介
### 2.1 从supervised learning到self-supervised learning

![image-20260615153851722](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260615153851722.png)

监督学习是需要人工提供标注的；而自监督则是在没有标注的情况下，将数据分成两个部分，一个作为模型的输入，一部分作为模型的标注。从某些角度来看，自监督某种程度上算是无监督的一种

### 2.2 BERT Masking

BERT一般用于自然语言处理nlp，其输入往往用于一个sequence的文本，当然Bert的输入不仅仅局限于文字，还可以是其他的

对于BERT来说，这段输入的文本会被随机的盖住（Masked），这种盖住有两种方案，一种是把被盖住的字替换为特殊token，例如MASK，另一种是随机mask为一个随机的文字

![image-20260615154355863](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260615154355863.png)

那么训练的目标就是使得被盖住的词应该在输出的概率中应该是最大的，例如上图的台湾大学，应该就是湾最大概率一样。类似于一个分类问题，Bert需要成功预测出一个所有的类中，mask到底属于哪个参数

### 2.3 Next Sentence Prediction

从资料库中拿出两个句子，在句子之间增加特殊的符号用于分割（[SEP]），同时还需要增加一个起始符号（[CLS]）

![image-20260615154929931](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260615154929931.png)

BERT要做的是预测两个句子是不是接在一起的

然而这个方案被论文论证似乎没什么用，因为在这判断两个句子是不是接在一起很简单，导致BERT很容易就实现了，进而就导致模型没学到更深的内容。

### 2.4 Downstream Tasks

虽然Bert在训练的时候，是要他做完形填空；但是训练好之后却可以用来fine-tune进而用在各式各样的任务

![image-20260615155447676](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260615155447676.png)

一个测试ssl的能力的榜单是GLUE: https://www.cluebenchmarks.com/

那么具体来说，Bert怎么使用呢？

#### 2.4.1 Case1：sentiment analysis

sentiment analysis是输入一个句子，判断这个句子是正面还是负面：对于Bert来说只需要根据cls的输出正负面结果。但是这一部，Bert是不能判断哪些是正面哪些是负面的，所以是要被学的且有监督的

![image-20260615160203018](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260615160203018.png)

区别在于，随机初始化的参数，只有linear层是随机初始化的，Bert的则是使用一个已经会填空题的Bert

Bert预训练是自监督的，linear fine tune是有监督的，合起来就是semi-supervised的

#### 2.4.2 Case 2：POS tagging

对于词性标注来说，输入任务和输出任务的长度是一样的

![image-20260615160907249](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260615160907249.png)

#### 2.4.3 Case 3: Natural Language Inferencee(NLI)

机器要做的就是只两个句子，然后吐出这俩句子的关系，例如矛盾，一致，中立

![image-20260615161236476](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260615161236476.png)

那么Bert的解决就是把俩句子（含有cls和sep）输入Bert，然后只看cls的输出并classification

![image-20260615161321405](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260615161321405.png)

#### 2.4.4 Extraction-based Question Answering (QA)

这里的问答需要假设答案一定在文档内

![image-20260615161459736](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260615161459736.png)

这里要做的就是把问题和问题放进模型，然后输出两个正整数s和e，然后答案就在这俩正整数对应的词之间的内容

![image-20260615161854841](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260615161854841.png)

具体作法就是把question和document放进去，然后把Bert输出结果和要学的向量做点积后做softmax，谁概率最大，对应的s就是多少。e的得到是同理。

### 2.5 训练BERT的难度

从上述来看，似乎Bert的训练并不难，就是训练transformer的encoder？

然而，Google训练Bert就已经用了3billion的words，几乎是哈利波特全集的3000倍，除此之外训练过程也很痛苦，为了达到公开模型的baseline，需要迭代1M的steps，差不多用TPU就是8天，colab可能要训练200days了（苦笑）
