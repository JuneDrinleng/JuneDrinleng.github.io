---
layout: post
title: "PINN Basic Notes"
date: 2025-03-12
tags: [ML&DL]
comments: true
author:junedrinleng
toc: true
---

This note mainly introduces physics informed neural network, including basic concepts and simple pytorch implementation.
<!-- more -->

## 1 Research background

In the past, finite difference, finite element, spectrum or network-free methods were often used to numerically solve partial differential equations to describe the dynamics of complex multi-scale systems.

These traditional research methods face problems such as high cost and inability to solve missing, gap or noisy boundary conditions.

The advantage of deep learning lies in the automatic selection of data features, but due to its black box nature, it is physically inconsistent or untrustworthy (leading to poor generalization ability)

There are roughly three existing matching forms:

1. Small data + understand all physics knowledge
2. **The data type is medium, but some parameter values or terms of partial differential equations are missing**
3. Big data - completely driven by data and does not contain any physical knowledge

## 2 Advantages of PINN

2.1 Coping with imperfect models and noisy data

2.2 Strong generalization ability in the field of small data

2.3 Better explain deep learning and quantification of uncertainty

2.4 Processing of high-bit data

## 3 How to embed physics - observation and induction

1. Enough data to include all data sets for the learning task - ideal situation (faced with the cost of data collection)
2. Solve the equation to obtain the solution expression, and design the operation after input based on the expression, but this faces the difficulty of solving the equation.
3. Embed partial differential equations into the loss function of the neural network - control the network parameter training process between input and output, and maintain a certain physical relationship with the input variables (using automatic derivation)

## 4 Implementation of pytorch

![image-20240927102511146](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240927102511146.png)

The system of equations here is written casually, and the second equation is the boundary condition.

First, two dimensions become one dimension:

![image-20240927102835709](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240927102835709.png)

Then you need to design the gradient calculation part

![image-20240927102934822](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240927102934822.png)

order is to find several derivatives

The next step is to construct the loss function based on the above two equations

 ![image-20240927103448178](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240927103448178.png)

![image-20240927104444975](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240927104444975.png)

## 5 Applications and limitations of PINN

![image-20250312102627371](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250312102627371.png)