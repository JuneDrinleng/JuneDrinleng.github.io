---
layout: post
title: "20251229文献阅读笔记"
date:   2025-12-29
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要记录精读的一篇Time Series Forecast  assisted by using MMVs, 将time series进行visualize之后利用cv进行time series的学习，粗读的包括：驾驶轨迹的模式识别分类

<!-- more -->

## 1 多模态视图增强了用于长期时间序列预测的大视野模型

过去对时间序列的预测聚焦于直接使用Transformer和LLM进行上下文的分析，最近大视觉模型也逐渐取得了不错的成就，因此也有了一类通过将时间序列数据转换为image-like的representations的方法利用LVM的能力来解析时间序列中的潜在信息，进而实现轨迹预测

目前这一方法的的SOTA是VisionTS Model，本工作是inspired by VisionTS Model 通过自监督MAE的方法来利用LVM的能力重构image进而预测时间序列

![image-20251229122132113](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-12-29-paper_report_11/image-20251229122132113.png)具体而言，有两种模型，一个是直接使用moving average的方式将时间序列信息中的trend提取出来，另一种则是模型自适应的时间序列信息提取。

首先来看利用moving average的方法，这里将时间序列输入前处理模块利用moving average得到trend和seasonal component，对于trend部分可以直接使用transformer+linear model的方式来进行trend forecast，而对于seasonal component，则通过visual model的方式来forecast。

而自适应的处理模型则首先将时间序列直接进行image化，将图形输入visual forecaster预测出seasonal部分，然后将其前向的内容补出后反映射回时间序列，就是之前部分的seasonal 部分时间序列，将原时间序列-预测的seasonal component就得到了trend

![image-20251229122850779](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-12-29-paper_report_11/image-20251229122850779.png)

具体而言，对于LVM forecaster，往往是将一个大的image对其取若干个patches然后将其遮住，通过$f_{LVM}$预测出被遮住的部分。对于自适应网络来说则是加入了一个更多的mask Backcast，这是模型试图“回溯”或理解的部分

![image-20251229123110551](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-12-29-paper_report_11/image-20251229123110551.png)

**步骤 A（左图）：**

- **输入：** 图像的左半部分 $\tilde{\mathbf{I}}_{\text{left}}$（作为 Look-back window）。
- **任务：** 让模型预测被遮挡的右半部分。
- **输出：** 得到右侧的预测图 $\hat{\mathbf{I}}*{\text{right}} = f*{\text{vis}}(\tilde{\mathbf{I}}_{\text{left}})$。

**步骤 B（右图）：**

- **输入：** 图像的右半部分 $\tilde{\mathbf{I}}_{\text{right}}$。
- **任务：** 让模型预测被遮挡的左半部分。
- **输出：** 得到左侧的预测图 $\hat{\mathbf{I}}*{\text{left}} = f*{\text{vis}}(\tilde{\mathbf{I}}_{\text{right}})$。

这个重建图像 $\hat{\mathbf{I}}^i$ 会**有偏地（biased）** 反映数据中的**周期性模式**。因为视觉模型擅长捕捉纹理和重复结构，而忽略非周期的趋势

## 2 一种驾驶风格自适应的车辆轨迹预测框架

> Wen, D. *et al.* A driving-style-adaptive framework for vehicle trajectory prediction.

汽车的行驶轨迹主要包括以下三种类型，分别是Normal正常形式，Conservative保守行驶，以及Aggressive侵略性行驶，本文通过引入了汽车行驶轨迹模型的先验在其辅助下进行汽车轨迹的预测（Vehicle Trajectory Prediction）

![image-20251229110949273](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-12-29-paper_report_11/image-20251229110949273.png)

具体而言，主要流程如下，首先将历史轨迹输入网络，通过门控网络对其进行权重学习，得到的是三种驾驶模式的初步预测分类权重w，除此之外还利用Degree Adaptation部分进行学习程度，例如Aggressive模式的激进度是多少，最终根据w和n来预测最后的汽车运行的轨迹
![image-20251229111254767](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-12-29-paper_report_11/image-20251229111254767.png)

## 3 通过联合建模轨迹的GPS和道路视角捕获运动模式TrajMamba：一个高效且语义丰富的车辆轨迹预训练模型

> Liu, Y. *et al.* TrajMamba: An Efficient and Semantic-rich Vehicle Trajectory Pre-training Model. Preprint at https://doi.org/10.48550/arXiv.2510.17545 (2025).

对于车辆的轨迹来说，主要有两个主要的问题，一个是轨迹所途径的兴趣点/具体的目的地点位，另一个是轨迹在现实数据中往往面临着轨迹中间点缺失的情况，如何结合GPS的目的地点位和轨迹对汽车轨迹进行运动模式的捕获的同时保持对缺失轨迹的鲁棒性是一个需要解决的问题

以下图为例，轨迹的点为橘色的菱形块表示，但是除此之外，轨迹周围的路网还有其他point of interest （POI）例如超市，公园等等，结合轨迹在这些点之间的行为以及POI分析轨迹的行为是一件需要解决的事情

![image-20251229113424060](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-12-29-paper_report_11/image-20251229113424060.png)

该工作有两个部分，首先是轨迹全量的时候，将POI和轨迹输入POI文本encoder进行对比学习，使得其尽可能的拉近与POI的语义，从而使得模型学习到的轨迹能够包含丰富的POI语义信息。除此之外还需要将轨迹和路网数据输入进行文本encode后对比学习，来借助轨迹学习路网的语义信息。根据上述过程就使得模型可以生成一个包含丰富语义信息的轨迹嵌入向量

![image-20251229113611474](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-12-29-paper_report_11/image-20251229113611474.png)

图片的右边则是对知识进行蒸馏预训练，具体而言是将轨迹进行随机的掩码丢弃，从而模拟轨迹点缺失的情况，对应的就是使用Mask Generator(借助的Mamba Block)。将掩码的轨迹放入全量训练的模型进行embedding，然后再和全量的结果进行损失，从而不断优化对缺失轨迹下的embedding准确性
