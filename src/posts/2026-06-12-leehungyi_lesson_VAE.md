---
layout: post
title: "李宏毅机器学习专题笔记——VAE"
date: 2026-06-12
tags: [Hung-yi Lee Machine Learning]
comments: true
author: junedrinleng
toc: true

---

本笔记记录李宏毅机器学习介绍的生成式模型中的VAE的相关内容，主要源自于2016年秋课程的内容，主要梳理的VAE的相关知识

<!-- more -->

## 1 从Auto-Encoder到VAE

对于auto encoder来说，我们希望做的是把数据输入到网络中，网络能够通过编码和解码来获得尽可能和输入接近的内容

![image-20260612224347696](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260612224347696.png)

那么这样的话，我们只需要random输入一个内容，那么就可以利用auto-encoder来产生相应结果。但实际上这样做，效果不一定好，所以这里才会引入VAE来解决这个问题。

对于VAE来说，encoder的输出是两个变量分别为m和σ，然后从正态分布中采样一个参数e，进行计算：
$$
c_i=exp(\sigma_i) \times e_i+m_i
$$
然后把$c_i$放入decoder中产生输出，这样相较于auto-encoder的loss是reconstruction loss之外还需要引入一个loss:
$$
Loss=\sum{exp(\sigma_i)-(1+\sigma_i)+(m_i)^2}
$$

## 2 Why VAE?

原本的auto encoder就是把信息压缩成code后延展

![image-20260612225420053](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260612225420053.png)

但问题在于，假如我们要在满月和弦月的中间加一个点来decode，那么会出现什么结果呢？我们期望是介于满月和弦月之间的，但是问题在于神经网络是非线性的，这就导致了两者之间sample的结果不一定是我们期望的结果

那么VAE做的是什么，他是在code层增加了noise的容忍度，这就使得noise区域重合的地方就可能介于两者之间了

![image-20260612225711407](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260612225711407.png)

那么对于VAE来说，刚刚提到了VAE的架构如下所示

![image-20260612225816602](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260612225816602.png)

这里的m代表的是auto encoder原来的code，而c代表的是含噪音的code，那么σ就代表的是现在noise的variance，由于var是正值，所以这里取exp

如果不加刚刚的新loss，只有重建损失的话，由于var是ml自己学习的，那么machine会直接偷懒取var=0，最后结果就是不起效果，所以需要强迫机器在学习的时候加上限制来避免偷懒：

$$
Loss=\sum{exp(\sigma_i)-(1+\sigma_i)+(m_i)^2}
$$
这个函数使得σ趋于0的时候variance趋于1，来避免variance不能等于0。$m^2$是正则项，防止overfitting

更数学的角度来说就是，我们原本的数据通过encoder之后会在高维空间构成一个概率分布$P(X)$，那么我们如果要随心所欲的生成，就需要机器拟合这个$P(X)$的概率分布，这样就能从sample的数据生成出想要的数据集里的图

如何模拟出这个概率分布，这里的方案是高斯混合模型Gaussian Mixture Model：

一个复杂的数据分布是可以用若干个高斯分布叠加来得到的，只要高斯分布足够多，就可以得到足够复杂的分布

![image-20260612230849898](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260612230849898.png)

如何sample呢？首先要确定m，选中特定m的概率是P(m)。

那么选中m之后，如何从m分布里选出x呢，那么概率就是条件概率P(X|m)，其中高斯分布m是由$σ_m$和$\mu_m$决定的。

这样，每一个x就是来自某一个分类一样，但更精确的是用概率分布来描述

那么对于VAE来说，首先需要sample一个z，z~N(0,1)。z是一个vector，每一个元素象征着某种特征。那么有z之后，就可以根据z的他的μ和sigma得到x

一个z的分布上的每一个点是对应到某一个Gaussian的，而z本身是一个连续的正态分布，这就使得可以获得无穷个高斯混合模型的高斯分布来去混合

那每一个z如何找他对应的高斯分布的μ(z)和σ(z)呢？可以通过NN来实现

![image-20260612231704520](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260612231704520.png)

这样P(X)的概率变为：
$$
P(X)=\int_zP(z)P(x|z)dz
$$
现在的问题就是应该如何找到μ和sigma的function，这里利用的是极大似然函数：
$$
L=\sum_x logP(X)
$$
![image-20260612232139964](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260612232139964.png)

那么我们如何算这个loss呢？可以通过概率的公式变化和贝叶斯公式来操作：

![image-20260612232617315](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260612232617315.png)

其中KL 散度表示两个分布的相似度，KL散度越小就越像（分布之间的“距离”，≥0）

所以我们现在要maximize的内容就是由$L_b$来决定了。而由于q(z|x)和P(x)无关，所以无论怎么改q(z|x)，logP(x)固定，对应的就是我们在maximize Lb的同时minimize了kl散度

![image-20260612233105370](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260612233105370.png)

只需要找到q(z|x)合适，那么最后的结果就是logP(x)几乎等于Lb，然后只需maximize Lb即可

![image-20260612233305521](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260612233305521.png)

而q本身是一个NN，那么本质就是调q对应的NN使得：

![image-20260612233424470](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260612233424470.png)

而另外一项则是本质是一个期望：

![image-20260612233654372](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260612233654372.png)

而这就是auto encoder所做的事情

## 3 VAE的问题

VAE并没有取学如何真正的产生一个结果。例如对于生成图片来说，一个像素在图的不同地方坏掉结果是一样的，但实际上例如手写图中崩坏的是字和崩坏的是空白可能效果是不同的

 所以VAE做的就是模仿，他记住原本的数据分布，而非产生新的内容
