---
layout: post
title: "Summary of Probabilistic Graphical Model 10 inference"
date: 2024-11-20
tags: [pgm]
comments: true
author:junedrinleng
toc: true
---

This note mainly reviews and organizes the theory in the inference part.
<!-- more -->

## 1 introduction

The main introduction before was the **representation part**, that is, how to understand the independence between variables and write the joint probability based on the graph structure of the probability graphical model.  

Through the representation part, we can quickly construct the network structure of the probability graphical model based on the interaction between each variable for a specific multi-variable influencing factor problem**

But the network structure alone is not enough. We also need to use the network to do the following two things:

- inference
- learning

Among them, inference is to infer the probability distribution when the network structure and weights are known; while learning is to hope that the network will update the network weights during repeated learning.By analogy with neural networks, what **inference** does is to input data into the trained neural network model and do **predict**; and what learning does is to put data into the network so that the network can **learn** and update the weights.

Today’s main summary is inference

## 2 Variable Elimination introduction

The variational elimination method is a **forward propagation** algorithm. It uses the information of the parent node to eliminate elements, and then obtains the expression of the child node.

 For example, consider the following Bayesian network:

![image-20241120160049195](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120160049195.png)

According to the representation part, we can quickly use the factorization theorem to write the joint distribution:
$$
P(V)P(S)P(T|V)P(L|S)P(B|S)P(A|T, L)P(X|A)P(D|A,B)
$$It can be abbreviated:
$$
\phi_V(V)\phi_S(S)\phi_T(T,V)\phi_L(L,S)\phi_B(B,S)\phi_A(A,T.L)\phi_X(X, A)\phi_D(D, A,B)
$$



To obtain the distribution probability $P(D)$** of the last child node D, the best way is to eliminate elements from top to bottom (from parent node to child node, the initial parent node has no parent node, then the probability expression in the formula of its factorization theorem is itself, such as P(V), P(S), etc.)

Since in terms of the network, **V node** is the top-level parent node and has the fewest influencing factors, so we can start from him:For **V-node**:
$$
\tau_1(T)=\sum_V \phi_V(V)\phi_T(T,V)=P(T)
$$
Then the above joint probability (2) can be substituted into (3) to get:
$$
\tau_1(T)\phi_S(S)\phi_L(L,S)\phi_B(B,S)\phi_A(A,T.L)\phi_X(X, A)\phi_D(D, A,B)
$$
After processing V we can also process the S node:
$$
\tau_2(L,B)=\sum_S \phi_S(S) \phi_L(L,S)\phi_B(B,S)
$$
Substituting (5) into (4) we can get:
$$
\tau_1(T)\tau_2(B,L)\phi_A(A,T.L)\phi_X(X, A)\phi_D(D, A,B)
$$
The same principle can be further eliminated to get:
$$
\tau_3(A)=\sum_X \phi_X(X,A)\\
\tau_4(A,L)=\sum_T \tau_1(T)\phi_A(A,T,L)\\
\tau_5(A,B)=\sum_L\tau_4(A,L)\tau_2(B,L)
$$
At this time, after so many steps of elimination, the original joint distribution has been eliminated.:
$$
\tau_5(A,B)\tau_3(A)\phi_D(D,A,B)
$$
Further eliminate the content of A to obtain $\tau_6$
$$
\tau_6(B,D)=\sum_A \tau_5(A,B)\tau_3(A)\phi_D(D,A,B)
$$
At this time, the factor decomposition formula is substituted and becomes: $\tau_6(B,D)$. Apply the full probability formula to eliminate B to get the probability of the end D $P(D)$

The above is the most basic process of variation and elimination.

## 3 induced graph in VE

After some variable observations are given, the directed graph faces a lot of V-structures:

![image-20241120162308817](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120162308817.png)

For example, after the value of G is given in the above figure, the two variables D and I that were originally independent will no longer be independent, which will increase the difficulty of our subsequent processing.So I want to use the induced graph method to simplify the directed graph and eliminate the v-structure.

The method is to replace all the → edges of the directed graph with - of the undirected graph, and at the same time connect the parent nodes of the v-structure to form a triangle, which will then be triangulated.

![image-20241120162614911](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120162614911.png)

After completing the above processing, proceed to the variational elimination process in 2.1:

![image-20241120163316566](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120163316566.png)

## 4 clique tree

### 4.1 introductionAn important problem faced by the above-mentioned variational process is that we need to calculate the entire network from top to bottom every time we infer, and we do not make good use of intermediate variables to reduce the amount of calculation, so we hope to improve in this regard.

The above variation process can be seen from the figure as processing (elimination/transfer of information) for each clique.

> In Markov Network, the basic units are called cliques. This refers to the largest complete subgraph in which any two nodes in the graph are directly connected. Specifically:
> > 1. **Definition of group**:
> > - A clique is a subgraph in which every pair of nodes is connected by an edge.
> > - A maximal clique is a complete subgraph of the graph that cannot be extended any further.

Therefore, researchers of probabilistic graphical models abstracted the above-mentioned clique processing process and constructed clique tree and passing message to represent the above-mentioned VE process:

![image-20241120163802048](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120163802048.png)

Then take P(J) as an exampleThe above directed graph is abstracted into:

Eliminate C: clique1(C,D) transfers information $\delta_{1→2}(D)$ to clique2(D,I,G)

Eliminate D: clique2 transfers information $\delta_{2→3}(G,I)$ to clique3

Things to note are:

**Clique tree is an equivalent representation of the model another data structure; sum product message passing "equals" variable elimination on clique tree**

![image-20241120164753471](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120164753471.png)

### 4.2 clique tree calibration

Only the clique tree, an abstract representation compared to the probability graph, cannot solve the difficulty of VE mentioned above. In order to solve this problem and make good use of the intermediate variables of the VE process to simplify the calculation, we need to calibrate the clique tree.

The so-called calibration is to first transfer the above information once (VE once) so that each local clique has global information:- For each clique, it has an initial distribution function (or potential function): $\psi=\Pi (factors*weight)$
- Then select a root node and propagate information from each node to the root node, which is the $\delta$ above. At this time, the potential function $\psi$ of the clique that receives the information will be updated: $\psi_{new}=\psi*\Pi(\delta)$, that is, the original potential function multiplied by all the information it receives
- After the entire clique tree undergoes a round of two-way information transfer, calibration is achieved, and the potential function can be used to represent the probability:

![image-20241120170934168](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120170934168.png)

And since all potential functions are already available after calibration, calculating the probability of any node only requires calculation using the potential function.

The process of transmitting information is also called belief updating.

## 5 Variational InferenceThe basic logic of variational inference is to replace the original distribution with a simpler distribution and thereby achieve simplification. Subsequently, you only need to infer Q and do not need to infer on the complex P.

So how can we construct a suitable Q to replace P? Here the form of divergence + entropy is used

KL divergence is used to describe the similarity between Q and P:
$$
\min_Q\ D_{KL}(Q||P)
$$
The entropy of Q is used to describe the complexity of Q, because if this term is not added, in order to make Q and P close, it will directly become Q=P, which does not play a simplification role. Only adding an term of the complexity of Q can avoid the above situation.

Then what I don't need is to find a Q such that:
$$
L(Q)=\max_Q(E_{x \sim Q}(lnP(X,z))+H(Q(X)))\\
=lnP(z)-D_{KL}(Q||P)≤lnP(z)
$$

## 6 Mean field Inference

The basic principle of the mean field model is to construct a model without edges as q to replace the original p distribution on the right:![image-20241122142946482](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241122142946482.png)

Since the mean field model corresponding to q has no edges, its distribution is easy to write (equivalent to all nodes being independent)
$$
q(x;\theta)=\prod_i q_i(x_i)
$$
Substituting into the above formula of $L(Q)$:
$$
L(q)=\sum_x[\prod_i q_i(x_i)][ln p(x,z)-\sum_k lnq_k(x_k)]
$$
L here is the optimization function (similar to loss). What we want is to continuously iterate Q so that it approaches P along the direction of L.