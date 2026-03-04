---
layout: post
title: "Probabilistic Graphical Models 6: Summary and Advancement of Probabilistic Graphical Model Representation"
date:   2024-10-21
tags: [pgm]
comments: true
author: junedrinleng
toc: true
---

This note mainly reviews the previously learned part of probabilistic graphical model representation, while introducing some more advanced research
<!-- more -->
## 1 Review

![image-20241021100617654](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021100617654.png)
Dynamic sequence models use directed graphs to study sequence problems  
Examples of representation part:  
Bayesian Networks:   

![506008128fa27a903e052f0ad773012](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/506008128fa27a903e052f0ad773012.jpg)
Sequence models:  

![d9ff7ce17969f8841642c265b699fab](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/d9ff7ce17969f8841642c265b699fab.jpg)
Markov Blanket: parent nodes, child nodes, and parent nodes of child nodes  
For the transformation from directed graphs to undirected graphs: I(H)⊂I(G), the task is to connect the parent nodes of V structure, for example, for the above Bayesian Network, the transformed version becomes:  

![db514cfb539a8429bc4e23ab3f1be9d](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/db514cfb539a8429bc4e23ab3f1be9d.jpg)

For directed graphs, after decomposition, the design of each local CPD content is still required  
## 2 Question Solved Way
![image-20241021103042384](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021103042384.png)

Designing hidden variables is crucial (and AI models cannot assist with this)  

![image-20241021104124100](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021104124100.png)
z is used for dimensionality reduction, C is used for mixture models, and finally obtain x:  
The above three-dimensional distribution has each data distribution in a plane, the above S three-dimensional distribution has 5 planes:  

![e925ce4670f0f6bf1bc314766b925a8](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/e925ce4670f0f6bf1bc314766b925a8.jpg)

Each time, select a class label and then select a z coordinate, finally generating data x  

## 3 Model Conditional Information
![image-20241021105644311](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021105644311.png)
Two types of problems: generative models/discriminative problems  
Model joint probability is often generative models, which is much more difficult than model conditional probability discriminative models  
From HMM generative models to discriminative MEMM (Max Entropy Markov Models):  
![image-20241021105900784](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021105900784.png)

Conditional nodes: added a condition node independent of all nodes, equivalent to adding an x to the end of each conditional term  
![image-20241021110056582](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021110056582.png)
X is always observed, and it has no effect on the independence of the original graph's nodes  
![image-20241021110708212](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021110708212.png)

At this point, the terms containing only X do not need to be included, but all other terms related to x and y cliques need to be retained (write all out and then remove the terms containing only x)  

When modeling, higher-order effects are sometimes ignored (leaving only the effects of edges and nodes) — whether to ignore higher-order effects depends on the actual application  

Discriminative models have the disadvantage of not being able to generate new data and being greatly affected by classification boundaries (outliers near the boundary will lead to misleading discriminative planes)  
Discriminative models require labeled data  

## 4 Deep Structures
Initial situation: "Big" unlabeled data and "small" labeled data  
How to model a large amount of unlabeled data (feature extraction, traditional methods use PCA, Hinton & Salakhutdinov. Reducing the dimensionality of data with neural networks. Science 2006 performed pretraining with a restricted Boltzmann machine (RBM) for dimensionality reduction  
![image-20241021114106199](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021114106199.png)  
Learning through an end-to-end loss function  
Web resources:  

- Machine intelligence (Nature 521:7553, 435)

![image-20241021120843494](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021120843494.png)