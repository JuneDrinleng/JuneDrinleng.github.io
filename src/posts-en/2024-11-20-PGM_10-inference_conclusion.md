---
layout: post
title: "Probabilistic Graphical Models 10: Inference Summary"
date: 2024-11-20
tags: [pgm]
comments: true
author: junedrinleng
toc: true
post_id: 2024-11-20-PGM_10-inference_conclusion
source_lang: zh
source_title: "概率图模型10 inference小结"
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.170Z"
source_hash: 97d7f7a3cc3e47fcbc16b20d9f506cc2e33ced0c937b02ca7605e2a07be86e3f
---

This note mainly reviews and organizes the theoretical aspects of the inference section  
<!-- more -->

## 1 Introduction

Previously, the focus was on the **representation part**, i.e., how to understand the independence between variables and write the joint probability based on the graph structure of probabilistic graphical models.  

Through the representation part, we can quickly build the **network structure of probabilistic graphical models** based on the interactions between variables for a specific multi-variable problem.  

However, merely having the network structure is insufficient. We also need to use the network to perform the following two tasks:  

- Inference (inference)
- Learning (learning)

Inference refers to deriving the probability distribution given the network structure and weights, while learning aims to update the network weights through repeated learning processes.  

Analogous to neural networks, **inference** corresponds to inputting data into a pre-trained neural network model to perform **prediction**, whereas **learning** involves feeding data into the network to enable it to **learn** and update weights.  

Today's focus is primarily on inference.  

## 2 Variable Elimination (Variable Elimination) Introduction

Variable Elimination is a **forward propagation** algorithm that eliminates nodes by using information from parent nodes to derive expressions for child nodes.  

For example, consider the following Bayesian network:  

![image-20241120160049195](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120160049195.png)

Based on the representation part, we can quickly write the joint distribution using the factorization theorem:  
$$
P(V)P(S)P(T|V)P(L|S)P(B|S)P(A|T, L)P(X|A)P(D|A,B)
$$
  

This can be simplified as:  
$$
\phi_V(V)\phi_S(S)\phi_T(T,V)\phi_L(L,S)\phi_B(B,S)\phi_A(A,T.L)\phi_X(X, A)\phi_D(D, A,B)
$$

To obtain the **probability distribution of the terminal node D, $P(D)$**, the best approach is to eliminate variables from top to bottom (from parent nodes to child nodes, starting with the parent node that has no parent, whose factorization expression is itself, e.g., $P(V)$, $P(S)$, etc.).  

Since **node V** is the topmost parent node with the fewest influencing factors, we can start with it:  

For **node V**:  
$$
\tau_1(T)=\sum_V \phi_V(V)\phi_T(T,V)=P(T)
$$
Substituting equation (3) into equation (2) gives:  
$$
\tau_1(T)\phi_S(S)\phi_L(L,S)\phi_B(B,S)\phi_A(A,T.L)\phi_X(X, A)\phi_D(D, A,B)
$$
After processing V, we can similarly process node S:  
$$
\tau_2(L,B)=\sum_S \phi_S(S) \phi_L(L,S)\phi_B(B,S)
$$
Substituting equation (5) into equation (4) yields:  
$$
\tau_1(T)\tau_2(B,L)\phi_A(A,T.L)\phi_X(X, A)\phi_D(D, A,B)
$$
Continuing this process, we can further eliminate variables:  
$$
\tau_3(A)=\sum_X \phi_X(X,A)\\
\tau_4(A,L)=\sum_T \tau_1(T)\phi_A(A,T,L)\\
\tau_5(A,B)=\sum_L\tau_4(A,L)\tau_2(B,L)
$$
After these elimination steps, the original joint distribution becomes:  
$$
\tau_5(A,B)\tau_3(A)\phi_D(D,A,B)
$$
Further eliminating A's content gives $\tau_6$:  
$$
\tau_6(B,D)=\sum_A \tau_5(A,B)\tau_3(A)\phi_D(D,A,B)
$$
At this point, the factorization expression becomes $\tau_6(B,D)$. Applying the law of total probability to eliminate B gives the final probability $P(D)$ of the terminal node D.  

This is the basic process of variable elimination.  

## 3 Induced Graph in VE

When partial variable observations are given, directed graphs face many V-structures:  

![image-20241120162308817](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120162308817.png)

For example, in the above figure, specifying the value of G causes the originally independent variables D and I to no longer be independent, increasing the difficulty of subsequent processing.  

Thus, we aim to simplify the directed graph using the induced graph method to eliminate V-structures.  

The approach is to replace all directed edges (→) in the directed graph with undirected edges (-), and connect the parent nodes of V-structures to form triangles, followed by triangulation.  

![image-20241120162614911](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120162614911.png)

After completing the above processing, perform the variable elimination process described in section 2.1:  

![image-20241120163316566](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120163316566.png)

## 4 Clique Tree
### 4.1 Introduction

The aforementioned variational process faces a relatively important issue: we need to compute the entire network from top to bottom every time we infer, without utilizing intermediate variables to reduce computational load. Therefore, we hope to improve this aspect.

From the graph, the aforementioned variational process treats each clique individually (elimination/information propagation).

> In Markov Networks, the basic unit is called a clique. This refers to the largest complete subgraph where any two nodes are directly connected. Specifically:
> > 1. **Definition of a Clique**:
> >   - A clique is a subgraph where every pair of nodes is connected by an edge.
> >   - A maximal clique is a complete subgraph that cannot be expanded further in the graph.

Thus, researchers in probabilistic graphical models abstract the above clique processing procedure, constructing a clique tree and message passing to represent the above VE process:

![image-20241120163802048](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120163802048.png)

Taking the calculation of P(J) as an example:

The above directed graph is abstracted as:

Eliminate C: clique1(C,D) passes information $\delta_{1→2}(D)$ to clique2(D,I,G)

Eliminate D: clique2 passes information $\delta_{2→3}(G,I)$ to clique3

Note that:

**Clique trees are equivalent representations of the model, another data structure; performing summation-product message passing on clique trees "equals" variable elimination**

![image-20241120164753471](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120164753471.png)

### 4.2 Clique Tree Calibration

Having only the clique tree as an abstract representation compared to probabilistic graphs cannot resolve the difficulties mentioned above in VE. To address this issue and utilize intermediate variables in the VE process to simplify calculations, we need to calibrate the clique tree.

Calibration refers to first transmitting all the information (performing VE once) so that each local clique has global information:

- For each clique, it has an initial distribution function (or potential function): $\psi = \Pi (factors \times weight)$
- Then select a root node, propagating information from all nodes to the root node, i.e., the above $\delta$. At this point, the potential function $\psi$ of the clique receiving information will be updated: $\psi_{new} = \psi \times \Pi(\delta)$, i.e., the original potential function multiplied by all received information
- After a round of bidirectional information propagation across the entire clique tree, calibration is achieved, and probabilities can be represented using potential functions:

![image-20241120170934168](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120170934168.png)

Moreover, since all potential functions are already calibrated, calculating the probability of any node only requires using the potential functions.

The process of information transmission is also called belief updating.

## 5 Variational Inference

The fundamental logic of variational inference is to replace the original distribution with a simpler distribution to achieve simplification. Subsequently, only inference on Q is needed, without complex inference on P.

So how can we construct an appropriate Q to replace P? Here, divergence plus entropy is used.

KL divergence is used to describe the similarity between Q and P:
$$
\min_Q\ D_{KL}(Q||P)
$$
Meanwhile, the entropy of Q is used to describe its complexity. Without this term, Q would directly become P to approach it, failing to simplify. Adding a term that increases Q's complexity prevents this scenario.

Therefore, what we need is to find a Q that satisfies:
$$
L(Q)=\max_Q(E_{x \sim Q}(\ln P(X,z)) + H(Q(X)))\\
= \ln P(z) - D_{KL}(Q||P) \leq \ln P(z)
$$

## 6 Mean Field Inference

The basic idea of the mean field model is to construct a model without edges as q to replace the original right-side p distribution:

![image-20241122142946482](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241122142946482.png)

Since the q corresponding to the mean field model has no edges, its distribution is easily written (equivalent to all nodes being independent)
$$
q(x;\theta)=\prod_i q_i(x_i)
$$
Substituting into the above $L(Q)$ formula:
$$
L(q)=\sum_x[\prod_i q_i(x_i)][\ln p(x,z) - \sum_k \ln q_k(x_k)]
$$
Here, L is the optimization function (similar to loss), and we aim to iteratively update Q to approach P along the direction of L.
