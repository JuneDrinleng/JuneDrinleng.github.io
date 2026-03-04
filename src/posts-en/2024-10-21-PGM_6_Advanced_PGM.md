---
layout: post
title: "Probability graphical model 6 Summary and advancement of probability graphical model representation"
date: 2024-10-21
tags: [pgm]
comments: true
author:junedrinleng
toc: true
---

This note mainly reviews the probabilistic graphical model representation part learned some time ago, and also introduces some more cutting-edge research.
<!-- more -->
## 1 review

![image-20241021100617654](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021100617654.png)
The dynamic sequence model uses directed graphs to study sequence problems.
Examples of representation parts:
Bayesian network:

![506008128fa27a903e052f0ad773012](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/506008128fa27a903e052f0ad773012.jpg)
Sequence model:

![d9ff7ce17969f8841642c265b699fab](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/d9ff7ce17969f8841642c265b699fab.jpg)
Markov blanket: parent node, child node, parent node of child node
For the conversion from a directed graph to an undirected graph: I(H)⊂I(G), what needs to be done is to connect the parent nodes of the V structure. For example, for the above-mentioned Bayesian network, after conversion, it becomes:

![db514cfb539a8429bc4e23ab3f1be9d](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/db514cfb539a8429bc4e23ab3f1be9d.jpg)

For directed graphs, after decomposition, the content of each local CPD needs to be designed.
## 2 question solved way
![image-20241021103042384](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021103042384.png)

Among them, designing hidden variables is very important (and AI models cannot help)

![image-20241021104124100](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021104124100.png)
z is used for dimensionality reduction, C is used for the mixture model, and finally x is obtained:
Each set of data in the above three-dimensional distribution is distributed in a plane. There are 5 planes in the above S three-dimensional distribution:

![e925ce4670f0f6bf1bc314766b925a8](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/e925ce4670f0f6bf1bc314766b925a8.jpg)

   

Each time you select a class label and then select a z coordinate, finally the data x is generated.

## 3 Medel Conditional Information
![image-20241021105644311](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021105644311.png)
Two types of problems: generative model/discrimination problem
Model joint probability is often a generative model, which is much more difficult than the discriminative model of model conditional probability.
From HMM generative model to discriminative MEMM (Max Entropy Markov Models):
![image-20241021105900784](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021105900784.png)

conditional nodes: There is one more conditional node that is detached from all nodes, which is equivalent to adding an x after each item of the condition.
![image-20241021110056582](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021110056582.png)
When X is always observed, it has no impact on the independence of the nodes of the original graph.
![image-20241021110708212](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021110708212.png)

At this time, items containing only X do not need to be included, but all other cliques of y related to

Sometimes higher-order effects are ignored when modeling (in this case only the influence terms of edges and nodes are left) - whether to ignore higher-order effects depends on the actual application



The disadvantage of the discriminant model is that it cannot generate new data and is greatly affected by the classification boundary (outliers located near the boundary will lead to misleading discriminant planes)
The discriminant model requires data with labels

## 4 Deep Structures

The current situation: “Big” unlabeled data and “small” labeled data
How to model a large amount of unlabeled data (extract features, the traditional method is PCA, Hinton & Salakhutdinov. Reducing the dimensionality of data with neural networks. Science 2006 made a pretraining restricted Boltzmann product RBM for dimensionality reduction
![image-20241021114106199](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021114106199.png)
Learn through end-to-end loss function
Web resources:

- Machine intelligence (Nature 521:7553, 435)

![image-20241021120843494](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021120843494.png)