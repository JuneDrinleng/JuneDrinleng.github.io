---
layout: post
title: "Probabilistic graphical model 2 Bayesian network"
date: 2024-09-21
tags: [pgm]
comments: true
author:junedrinleng
toc: true
---


This note mainly introduces Bayesian networks in probabilistic graphical models, including the definition of Bayesian networks/directed graphs and their factorization theorem.
<!-- more -->

## 1 Independence reduces the number of parameters describing the probability space
Independent random variables reduce the parameters of the probability space
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921100008062.png)

**When modeling complex problems, the assumption of independence is a major helper in simplifying the problem**
Symbolically: when given Z, the opposition between X and Y can be written as:
$$
𝐼𝑛𝑑(𝑋; 𝑌 | 𝑍) or (𝑋 ⊥ 𝑌 | 𝑍)
$$
For example:
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921100436717.png)

These five variables are not completely related, nor are they completely independent. Now let’s look at how many parameters are needed to describe this model:
The required parameters for I→S are 2^2 -1=3
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921100628063.png)

For DIG structure:
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921100834148.png)

It can be found that independence reduces the parameters

## 2 Naive Bayes model
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921101101950.png)

The number of parameters required when Naive Bayes is unknown is $(2^n -1)*(k-1)$, and after Naive Bayes is known, it is $(k-1)+n*(k-1)$
After passing the diagram, you can quickly write:

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921101440545.png)

This implies a strong assumption: **The child nodes are independent given the parent node**, but this is incomplete in theory, so the first problem is to solve this independence problem.
## 3 Independence problem of Bayesian network
### 3.1 Definition and proof of independence
For a directed acyclic graph (DAG) G, each node represents a random variable, and G contains the assumption of independence:
- $𝑋_　$ is independent of its non-descendants given its parents(**intuitive definition→{P,G}**, but it has not been proved that P={P,G})
- Formulation: $(𝑋_ responsible ⊥ 𝑁𝑜𝑛𝐷𝑒𝑠𝑐(𝑋_ responsible) | 𝑃𝑎(𝑋_ responsible))$

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921102105739.png)

To prove that P = {P, G} first introduce a concept of independence Mappings:

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921102719937.png)

Imap is a set of independence. When the independence in the graph is established in the probability space, then the operation in the graph is established in the probability space. At this time, the independence set of the graph G is said to be the Imap of the probability space.

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921103042677.png)

In other words, the model on the right can be used to model the model in the table on the right, but it cannot describe the model in the table on the left because its I(G) does not belong to the I(P) on the left - that is, it is not the IMAP of the probability model on the left.
### 3.2 Factoring Theorem
Premise axiom: If we define the independences in G as 𝑋　 ⊥ 𝑁𝑜𝑛𝐷𝑒𝑠𝑐(𝑋　)| 𝑃𝑎(𝑋　)
Proposition: If 𝐺 is an I-Map of 𝑃 is proved, then it can be written directly:

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921103621724.png)

This is a sufficient condition (look at the picture to speak), and inference is a necessary condition (the necessary condition is used in structural learning, look at the data and draw a picture) - all need to be proved
First prove sufficient conditions:
- The solution idea during reasoning and processing is to push from the parent node to the child node along the graph. Based on this, we sort the parent node and child nodes according to the parent-child relationship: wlog. 𝑋1 , … , 𝑋𝑛 is an ordering consistent with G
- Chain Rule:
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921104842414.png)

This is because when i is followed by all child nodes and has nothing to do with the parent node, then only its parent node needs to be considered when using the chain rule.
$$P(X_i | X_1 ,..., X_{i−1} ) = P(X_i | Pa(X_i ))$$
Prove the necessity again - the independence in the graph is established in the probability
So there’s still the trick first:
- wlog. 𝑋1 , … , 𝑋𝑛 is an ordering consistent with 𝐺
- Then we have:
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921105305063.png)


## 4 Definition of Bayesian Network

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921105443315.png)

P can be factored according to the relationship in the graph
Usage examples:
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921105628355.png)

C is the parent node, and X and Y are independent child nodes given C
$$P(CXY)→P(X|Y)＝sum_C \ P(CX|Y)→
P(CX|Y)=P(XY|C)P(C)/sum_C \ P(XY|C)P(C)$$
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921110156752.png)


Dependent structure:
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921111251210.png)

Case4 (V-structure) is the source of complexity of directed graphs. Causes X and Y are related only when the result Z is known. Causes X and Y are independent when the result is unknown.
Therefore, for Bayesian networks, the best structure is a tree structure, with one parent node and several child nodes.
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241117231506.png)

The worst structure is:
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241117231535.png)Therefore, the forward algorithm is more convenient to infer the result from the cause, while the backward algorithm is not so easy to infer the front from the back.
As long as the V structure does not change, the independence will not change.
Minimal IMAP is to give a graph. Every edge in the graph cannot be deleted, which is minimal IMAP.

Example: for P(ABCD) where A and D are independent, and B and C are independent under AD conditions
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241117231607.png)

This is in the order of ABCD👆
What if we follow the ADBC order:
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241117231640.png)

It shows that different orders will affect the structure. This shows that it is not that easy to learn graphical models based on probability.
Generally speaking, the less V-structure, the better

## 5 further thinking——causal inference
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921115340662.png)

Association: When the V structure is not involved, the arrow does not represent cause and effect but only represents independence.
Intervention: involves intervention experiments to assist in giving some cause and effect
Counterfactuals Counterfactual inference: Many things in the world cannot be repeated events - it is impossible for the same person to take medicine and not take medicine at the same time. Although such an experiment cannot be done, people can infer based on this

If it is a causal edge, then when intervening on a child node, its causal edge with the parent node must be removed.