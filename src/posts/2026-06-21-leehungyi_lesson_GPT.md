---
layout: post
title: "李宏毅机器学习2021春笔记——GPT"
date: 2026-06-21
tags: [Hung-yi Lee Machine Learning]
comments: true
author: junedrinleng
toc: true

---

本笔记记录李宏毅2021年春机器学习课程的内容，主要梳理的自监督学习的相关知识，包括Bert和GPT-3的内容

<!-- more -->

## 1 BERT的奇闻轶事

Bert输出的向量是代表的输入词的意思的，这是如何实现的呢？

一个语言学原理：了解一个词汇我们需要了解他的上下文

而Bert本身学会的就是填空题，他可能在学的时候就是根据上下文的信息来推测被mask的内容

Bert其实更像是deep learning版本的word embedding模型CBOW，称之为contextualized word embedding

李宏毅他们课题组把BERT模型应用在蛋白质、DNA、领域的时候，以根据DNA序列将DNA分类为例

他们的作法是，把AGTC每个碱基对应一个词，然后把词输入到BERT中，然后再接一个下游任务linear

![image-20260621222703376](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260621222703376.png)

就这样硬做下去之后，发现BERT的分类结果居然能够比随机分的表现要好——即便输入Bert的内容是莫名其妙称不上句子的序列

## 2 Multi-lingual BERT

对于multi-lingual 的Bert，就是把多种语言输入进去训练学习。结果学习后，即便用英文输入之后，他也可以用中文输出（有一定正确率）

![image-20260621223148551](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260621223148551.png)

为什么会这样呢？也许对于multi-bert而言，可能即便词不一样，但是同一个词在不同语言下对应的向量距离可能很接近，但可能并没有完全抹掉不同语言之间的差异

经过实验来看，资料量会直接影响multi-lingual的能力，训练资料太小的情况下并不会有这种能力，而当资料量增加就会突然出现

![image-20260621223801434](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260621223801434.png)

也就是我们把中文向量空间和英文向量的整体bias加到英文句子输入到Bert后的输出结果上，他就成了中文。同理，如果我们把输入的英文单词的向量加上中英差距bias后，Bert居然输出中文了

![image-20260621224009405](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260621224009405.png)

![image-20260621223954486](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260621223954486.png)

但结果说明，如果是按照（把输入的英文单词的向量加上中英差距bias后，Bert居然输出中文）这种方式的话，输出的中文并不是和ground truth完全一致，说明这种语言的差异不仅仅在词向量空间，而是模型内部也有

## 3 GPT系列

BERT做的是完形填空的话，GPT做的是next token prediction（下一个词的预测）

![image-20260621224251969](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260621224251969.png)

对于GPT来说，他模型的架构更像一个transformer的encoder。由于GPT是预测下一个token的能力，因此他是具有生成能力的，可以不断的往下生成

那GPT如何用在下游任务上呢？对于BERT来说，BERT的作法之前提到就是把预训练的BERT拿出来后面接一个linear model来处理下游任务

但是对于GPT来说，由于GPT太大了，即便是fine tune都没那么容易，所以GPT系列的使用方式就是把问题描述+example+指令prompt的方案，实现few-shot learning(只给了一点例子，但是他不是一般的learning，没有梯度下降和参数更像，他们被称之为in-context learning)

## 4 在文字之外

self-supervised learning不仅仅局限于nlp领域，还有包括语音/cv等领域里，甚至刚刚提到的Bert和gpt也只是涉及到了prediction的方案，还有data centric和Contrastive的方案

![image-20260621225625909](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260621225625909.png)
