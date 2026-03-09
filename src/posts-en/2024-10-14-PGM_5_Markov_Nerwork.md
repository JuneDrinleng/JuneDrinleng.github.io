---
layout: post
title: "Probabilistic Graphical Models 5: Undirected Graphs - Markov Random Fields"
date: 2024-10-14
tags: [pgm]
comments: true
author: junedrinleng
toc: true
post_id: 2024-10-14-PGM_5_Markov_Nerwork
source_lang: zh
source_title: "概率图模型5 无向图：马尔可夫随机场"
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.138Z"
source_hash: 15c8b3dcd177a29cdda428b00e48482508f0c91d6b1fbfbc0fabbbc1db501100
---

This note mainly introduces undirected graphs in probabilistic graphical models, which are more commonly known as Markov Random Fields  
<!-- more -->

## 1 Intro

![image-20241014100722122](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014100722122.png)
The independence in the left image cannot fully explain the independence in the right image — or rather, the independence between nodes changes when transitioning from undirected to directed graphs  

In the left image, there is ind(A,D|B,C) and ind(B,C|A,D)  

## 2 Markov Networks

In the above scenario, the interactions between nodes are undirected, so an undirected graph (also called a Markov network) should be used to model it  
In an undirected graph, nodes represent random variables, and two nodes are independent if they have no path connecting them  
![image-20241014101500415](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014101500415.png)

In the above graph, given B, the path between B and D is severed, making D disconnected from A and C, meaning D is independent of A and C at this point  
Markov property means that after conditioning on the neighborhood, a node is independent of all other nodes. Since the above network has this property, it is called **Markov Networks** (in physics, it is called **Markov random field**).  
The special structure of undirected graphs is polygons (with more than three nodes), while Bayesian networks have V-structures as their special structure  

For modeling interactions in undirected graphs, we need to define interactions between states without requiring the probability form like Bayesian networks where probabilities sum to 1  

Gibbs distribution: used to describe local factors (originally derived from problems describing molecular states) — needs to be defined on cliques  
![image-20241014102614627](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014102614627.png)

Here, $\pi[a,b]$ represents the interaction between the factor AB.  
After calculating F, normalization is required  
P(a,b,c,d) is used to describe the physical state of the abcd system under given fields  

The basic structure of the graph is cliques, which must be fully connected  

> In Markov Networks, the basic unit is called a clique. This refers to the largest complete subgraph in the graph where every pair of nodes is directly connected. Specifically:  
> 1. **Definition of a clique**:  
    - A clique is a subgraph where every pair of nodes is connected by an edge.  
    - A maximal clique is a complete subgraph that cannot be expanded further in the graph.  
 2. **Role in Markov Networks**:  
    - Cliques are used to define joint probability distributions.  
    - Each clique is associated with a potential function that represents interactions between nodes.  
    - Potential functions are not probabilities themselves but are used to compute probability distributions.  
> Cliques in Markov Networks capture local dependencies and help construct joint probability distributions.  

In undirected graphs, we need to focus on maximal cliques — multiple large subgraphs  
![image-20241014105924736](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014105924736.png)

For example, in the above undirected graph, there are three maximal subgraphs: the blue, green, and orange circles, with the blue circle being the largest clique  
When performing factor decomposition, higher-order large cliques should be used instead of lower-order ones like edges to form factors  
![image-20241014110201360](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014110201360.png)
Forward reasoning is about interpreting the graph, while backward reasoning is about structure learning  

Given a graph H with several cliques D1, ..., Dn, and factors defined on cliques:  
![image-20241014110416834](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014110416834.png)
Here, Z is the distribution function (Partition function or so-called total energy)  
For example, in the following network, there are only two factors, respectively representing nodes and edges:  
![image-20241014110554444](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014110554444.png)
$$
P=\frac{1}{Z}\ (\Pi_i \ \pi[X_i] )\ (\Pi_i \ \pi[X_i,X_j])
$$
Multiplication is inconvenient when taking derivatives, so it is often transformed into logarithmic form to convert the product into linearity (the negative sign inside needs to be understood in the context of physical scenarios)  
$$
𝜋[𝑫] = exp( −𝜀[𝑫])\ where \ 𝜀[𝑫] = −ln[𝜋[𝑫]]
$$
Thus, the joint probability can be transformed into:  
![image-20241014111137407](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014111137407.png)

In undirected graphs, many times we don't care about absolute values but focus on relative values (this is because the partition function needs to sum over so many components, making the total sum difficult to compute, so we want to eliminate the summation difficulty of Z by using other states/ground states)  
![image-20241014111303311](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014111303311.png)
This theorem provides the form of Π (constructive solution)  
It needs to satisfy H being an I-Map of a positive probability distribution  
![image-20241014111933452](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014111933452.png)
$$
Q=(α_a a+……+\alpha_ff)+(\beta_{ab}ab+……+\beta_{df}df)
+(\gamma_{cde}cde+\gamma_{abc}abc+……+\gamma{bcd}bcd)
+\mu_{a,b,c,d}abcd
$$
At this time $$P=1/z*exp(-Q)$$  

![image-20241014113232454](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014113232454.png)
![image-20241014114135716](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014114135716.png) Here, Z:
$$
Z=\sum_{A,B,C,D,E}exp(-U)
$$
(U=-Q, using U to match the energy function)

## 3 Continuous Variables
The multivariate Gaussian distribution can be directly obtained by setting the covariance between corresponding random variables to zero, resulting in complete independence. More commonly, the covariance matrix is zero at positions where there is no direct edge between x and j—this condition allows the topology of the Gaussian Markov random field to be directly inferred by solving the information matrix.  
![image-20241014120448241](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014120448241.png)  
![image-20241014120459828](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014120459828.png)
