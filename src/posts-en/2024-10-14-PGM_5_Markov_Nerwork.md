---
layout: post
title: "Probabilistic graphical model 5 undirected graph: Markov random field"
date: 2024-10-14
tags: [pgm]
comments: true
author:junedrinleng
toc: true
---

This note mainly introduces the undirected graph of the probabilistic graphical model, whose more common name is Markov random field
<!-- more -->

## 1 Introduction

![image-20241014100722122](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014100722122.png)
The independence of the left picture and the independence on the right cannot be fully explained - or in other words, the independence between nodes is transformed when changing from undirected to directed.

In the picture on the left, there are ind(A,D|B,C) and ind(B,C|A,D)

## 2 Markov Networks

For the above scenario, the interaction between nodes has no direction, so it should be modeled with an undirected graph (also called a Markov network)
In an undirected graph, nodes represent random variables. If there is no path between two nodes, it means that the two nodes are independent.
![image-20241014101500415](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014101500415.png)

In the above figure, given that B is cut off from the path between BD, D has no path to connect with A and C. That is, D is independent of A and C at this time.
Markov property means that after a given field, it has no relationship with other nodes. Since the above network has this property, it is called **Markov Networks** (in physics, it is called **Markov random field**)
The special structure of undirected graphs is polygons (more than three nodes), and the special structure of Bayesian networks is V-structure

For the modeling of interactions such as undirected graphs, the interaction between states needs to be given, and it is not required to give the form of probability sum to 1 like the Bayesian network.

Gibbs distribution: used to describe the above-mentioned local factors (originally derived from the above-mentioned problem of describing molecular states) - needs to be defined on the clique
![image-20241014102614627](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014102614627.png)

The $\pi[a,b]$ here is the mutual influence between the factors AB.  
After finding F, normalization is required
P(a,b,c,d) is used to describe the physical state of this abcd system in a given field

The basic structure of the graph is cliques, which must be fully connected.

> In Markov Network, the basic units are called cliques. This refers to the largest complete subgraph in which any two nodes in the graph are directly connected. Specifically:
> 1. **Definition of group**:
    - A clique is a subgraph in which every pair of nodes is connected by an edge.  
    - A maximal clique is a complete subgraph of the graph that cannot be extended any further.  
 2. **Roles in Markov Networks**:
    - Cliques are used to define joint probability distributions.  
    - Each clique is associated with a potential function that represents the interaction between nodes.  
    - Potential functions are not directly probabilistic, but are used to calculate probability distributions.  
>Cliques are used in Markov networks to capture local dependencies and help construct joint probability distributions.  

In undirected graphs, we need to pay attention to maximal cliques - multiple large subgraphs
![image-20241014105924736](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014105924736.png)

For example, in the above undirected graph, there are three maximum subgraphs, which are blue, green and orange circles. The largest subgraph is the blue circle.
When factoring, you need to use high-order large subgraphs instead of all low-order edges to form factors.
![image-20241014110201360](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014110201360.png)
Forward reasoning is talking through pictures, and backward reasoning is structural learning.

Given a graph H, there are several cliques D1,...Dn, and factors are defined on the cliques:
![image-20241014110416834](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014110416834.png)
Here Z is the distribution function (Partition function or so called total energy)
For example, for the following network, there are only two factors, namely points and edges:
![image-20241014110554444](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014110554444.png)
$$
P=\frac{1}{Z}\ (\Pi_i \ \pi[X_i] )\ (\Pi_i \ \pi[X_i,X_j])
$$
The product is inconvenient when derivation, so the logarithm is often used to achieve the product becoming linear (you need to combine the physical scenario to understand the negative sign inside)
$$
𝜋[𝑫] = exp( −𝜀[𝑫])\ where \ 𝜀[𝑫] = −ln[𝜋[𝑫]]
$$
Then the joint probability can be transformed into:
![image-20241014111137407](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014111137407.png)

In many cases in undirected graphs, you don't care about the absolute value, but the relative value (this is because the distribution function needs to sum up so many contents, and it is difficult to sum up, so I want to use other states/ground states to eliminate the difficulty of summing z)
![image-20241014111303311](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014111303311.png)
This theorem gives the form of Π (constructive solution)
It is necessary to satisfy the I-Map that H is a positive probability distribution
![image-20241014111933452](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014111933452.png)
$$
Q=(α_a a+……+\alpha_ff)+(\beta_{ab}ab+……+\beta_{df}df)
+(\gamma_{cde}cde+\gamma_{abc}abc+……+\gamma{bcd}bcd)
+\mu_{a,b,c,d}abcd
$$
At this time $$P=1/z*exp(-Q)$$

![image-20241014113232454](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014113232454.png)
![image-20241014114135716](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014114135716.png)Z here:
$$
Z=\sum_{A,B,C,D,E}exp(-U)
$$
(U=-Q, when using U in order to match the energy function)

## 3 Continuous VariablesThe multivariate Gaussian distribution can be directly independent by having the covariance of the corresponding random variable be 0.
The more common situation is where the covariance matrix is 0, if and only if there is no direct edge between x and j - that is, the topology of the Gaussian random field can be drawn by solving the information matrix.
![image-20241014120448241](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014120448241.png)
![image-20241014120459828](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014120459828.png)