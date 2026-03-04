---
layout: post
title: "Probabilistic Graphical Model 3 Bayesian Network Local Probabilistic Model"
date: 2024-09-23
tags: [pgm]
comments: true
author:junedrinleng
toc: true
---

This note mainly introduces the probability representation of the local CPD part of the Bayesian network of the probability graphical model
<!-- more -->

## 3.1 review

![image-20241118005807602](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118005807602.png)

Here, in addition to BC being independent given AD, there is another independence condition, that is, A itself is independent of D.
![image-20240923101014780](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923101014780.png)

![image-20240923101022066](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923101022066.png)

It is reasonable for the graph (2) to satisfy the condition that it is smaller than the probability condition of the question. Here, the latter two graphs satisfy that B and C are independent after given AD. The second picture on the left has an additional condition that A and D are independent (compared to the probability space)
ps. Except for V structure and causality, other times the arrows in the Bayesian network only represent correlations.

## 3.2 Local probability model - how to express conditional probability (CPD)

The more parent nodes there are, the more child node information needs to be given to learn the parent node.
Rule·CPD:
![image-20240923102721515](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923102721515.png)
$\rho1:<a^0,j^0;0.8>$, $\rho2:<a^0,j^1;0.2>$ means that when a=0, there are two possibilities: j=0 and j=1, corresponding to probabilities of 0.8 and 0.2 respectively.
The same graph model may have different specific conditions, and the local CPD of the node will be different.

## 3.3 some models

### 3.3.1 Noisy-Or Model

For example (Noisy-Or Model):
• The failure rate of CPU is f1

• The failure rate of MEM is f2

• The failure rate of DISK is f3

• The failure rate of POWER is f4

• The failure rate of OS is f5

• The failure rate of other events is f0

• Question: the failure rate of your computer?
The case where everything is working fine is:
(1-f0)* (1-f1)* …… (1-f5)
![image-20240923104318126](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923104318126.png)
Under this model, different parent nodes will lead to the same child node result.

### 3.3.2 The Generalized Linear Models

$$
sigmoid(s)=\frac{e^s}{1+e^s}
$$
Logistic CPD:
$$
P(Y=y^1 | X_1,……,X_k)=sigmoid(w_0+\sum w_i X_i)
$$
![image-20240923105124313](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923105124313.png)

What is affected by y is realized by the linear combination of the parent node + shell (Gaussian distribution, Poisson distribution)
![image-20240923105640267](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923105640267.png)
This set is also used unconsciously in neural networks. The input of each neuron is the sum of the weights of the parent nodes of the previous layer ($w_0+\sum w_iX_i$) - the number of parent nodes + 1 is the parameter amount (because $w_0$ must be considered)
![image-20240923110551476](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923110551476.png)

The first layer has no parent node, so there are 3x1 parameters.
Each node in the second layer has three parent node weights + w_0 weights, so each node has four parameters, and four nodes have 4x4 parameters.
Each node in the third layer has four parent node weights + one w_0 weight, so each node has 5 parameters, with a total of 2x5 parameters.
So total: 3x1+4x4+2x5

### 3.3.3 Pooling Function

max pooling has translation stability; median pooling is for noise resistance
![image-20240923111056738](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923111056738.png)

## 3.4 Bayesian network graphical example

eg1. Cancer is an umbrella term that encompasses many different types of diseases. For example, there are four main subtypes of breast cancer: normal, basal, luminal A, and luminal B, which have different clinical outcomes. Each isoform has a different gene expression pattern. We need to infer subtypes based on observed gene expression.  

**First determine the variables:**
Variables: subtypes (s), gene expressions (e)
**The second step requires determining the relationship between random variables:**
subtypes define the patterns of expressions```mermaid
graph TD
s((s))-->e((e))
style e fill:#d3d3d3;
```![image-20240923112217301](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923112217301.png)

The box represents an independent and identically distributed repeating structure. To repeat N times, just write an N in the lower right corner.
A Bayesian network has now been built. It is recommended to check Bayesian networks before local CPD
**Now you need to determine the local CPD**
![image-20240923112426439](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923112426439.png)
Assume that the local CPD of s is a distribution that satisfies a polynomial, and e satisfies a Gaussian distribution under the condition of s. It should be noted that parameters such as $\pi$ are not nodes and do not need to be circled.
At this point, you can combine local CPD and bayesian network to write a complete probability model
$$
p\left(s=k,e\right)=P\left(s=k\right)p\left(e\mid s=k\right)\\=\pi_k\times\frac{\exp\left(-\frac12\left(e-\mu_k\right)^T\Sigma_k^{-1}\left(e-\mu_k\right)\right)}{\sqrt{\left(2\pi\right)^k\left|\Sigma_k\right|}}
$$

For each unit:
$$
p(S, E)=\prod_{n=1}^N p(s[n]=k, \boldsymbol{e}[n])
$$

eg2. Cancer is usually caused by independent driving processes (factors), such as continued proliferation, resistance to cell death, immune evasion, and promotion of blood vessel growth.  
• These driver processes have a combined effect on gene expression patterns.  
• We wish to infer these driver processes based on large-scale gene expression data sets.  

First determine the variables:
driving factors ($z_i$ ), gene expressions ($e_j$ )
Next, determine the relationship
z determines the distribution of e
Modeling:
![image-20240923114530349](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923114530349.png)

eg3. What makes it more complicated is that the parameters are also random variables determined by other parameters![image-20240923114824016](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923114824016.png)

## 3.4 conclusion

Three Steps for Representation:
• Define nodes/variables
• Consider edges / dependences
• Choose local CPDs