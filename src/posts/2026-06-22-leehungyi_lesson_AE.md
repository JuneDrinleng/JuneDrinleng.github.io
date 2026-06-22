---
layout: post
title: "李宏毅机器学习2021春笔记——Auto Encoder"
date: 2026-06-22
tags: [Hung-yi Lee Machine Learning]
comments: true
author: junedrinleng
toc: true

---

本笔记记录李宏毅2021年春机器学习课程的内容，主要梳理的自监督学习的相关知识中的auto encoder相关内容

<!-- more -->

## 1 review for self-supervised learning

对于自监督学习来说，自监督的情况就是一堆数据，想一些不用标注数据的相关任务比如填空题/接龙等等，这些训练好的本身算是pre train，然后再根据后续下游任务微调小模型就行了

现在自监督学习比较流行的当然是生成式模型GPT/BERT之类的，但除此之外还有一类古老的范式，就是auto encoder

## 2 auto encoder是如何实现的？

对于auto encoder来说，有编码器encoder和解码器decoder两个神经网络，这里以图片为例

对于encoder来说，就是把图片压缩成一个向量；而这个向量输入会作为decoder的输入，然后decoder根据这个向量产生一个图片；训练的目标就是encoder的输入和decoder的输出越像越好（也可以称之为重建reconstruction）

![image-20260622200233905](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260622200233905.png)

一个常见的可以在下游任务的方法就是把高维input给降维到code vector空间，可以称之为dimension reduction（有很多技术比如PCA，t-SNE等非dl based的降维方法）

那么这个auto-encoder有什么好处呢？

以图片为例，图片的变化是有限的，这就使得即便是3x3的图片，可能他的变化方案只有几个，那么就可以只用2dim来描述

![image-20260622200931445](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260622200931445.png)

化繁为简，把复杂的问题简单化，这个auto encoder的想法并不复杂，比如hinton（机器学习之父）在2006年就已经使用了auto encoder这个思想了

除此之外还有一个常见的变形叫做de-noising auto encoder，他输入的是原图+噪音的结果，然后decoder要试图还原加噪音前的原图：
这样auto-encoder相当于不仅仅要重建，还需要降噪

![image-20260622201440411](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260622201440411.png)

（这个技术是一个2008年就出现的技术）

不过今天其实Bert本质上也是一种另类的de noising auto encoder，因为Bert训练的时候是加了mask(某种程度上就是加了noise)

## 3 auto encoder其他有意思的应用

既然能够通过coder来重建回图片的话，说明这个向量已经包含了原数据里所有重要的信息，只不过这些信息是全部纠缠在这个向量内，我们并不清楚这些信息对应向量的哪个部分

因此，我们希望feature disentangle来实现解析出这个隐空间code内的内容和包含信息的对应关系，这个事情是可行的（限于篇幅，老师没有细说）

![image-20260622203227657](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260622203227657.png)

一个应用就是柯南变声领结👆

## 4 discrete representation

现在的code里都是假设code内的元素是真实数字，但我们也许可以将其转化为binary或者one-hot的，来实现目标检测/图片分类之类的下游任务呢？

![image-20260622203412720](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260622203412720.png)

最知名的实现上述idea的方案是VQVAE:

![image-20260622203538047](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260622203538047.png)

还有更加激进的方案是，比如说可以把text作为representation的话，那么就可以实现输入一篇文章，得到一个word sequence作为summary

![image-20260622203942467](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260622203942467.png)

然而这样train起来之后，word sequence是人看不懂的，他们会发明自己的暗号，为了使得其可读的话还需要discriminator来看看是不是人写的，这就是cycle gan的想法了

## 5 More Application

刚刚的decoder就是吃一个向量来产生一个图片，那么其可以作为一个generator了，一个思路就是VAE了。通过这些方案就可以应用于图片的生成

除此之外，利用auto encoder的encoder可以实现图片压缩，虽然他拿到的图片是失真的压缩图片

除此之外还可以用于anomaly detection：给定一堆训练集，检测新的输入结果是不是和之前训练资料相似
