---
layout: post
title: "Probabilistic Graphical Models 7: Cluster Graphs and Clique Trees"
date: 2024-11-04
tags: [pgm]
comments: true
author: junedrinleng
toc: true
post_id: 2024-11-04-PGM_7_Inference_as_Optimization
source_lang: zh
source_title: "概率图模型7 cluster graph与clique tree"
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.149Z"
source_hash: 8ab563c85baca5efdca5280b59d908102cfaf9dafb690a3f882c6ad070425036
---

This note mainly introduces the theoretical framework of inference-related graph clusters and the use of clique trees for accurate inference  
<!-- more -->

New chapter: The core of machine learning is inference  
Inference: All model parameters are known, and the goal is to perform probabilistic inference based on the model  
![image-20241104100148673](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104100148673.png)
Task 1: Find the probability distribution of the entire y  
Task 2: Find point estimates (i.e., the maximum point of conditional probability y)  
Clearly, Task 1 provides more information, but it also means Task 1 is more challenging to implement  
![def54b24d4cbf1d93a81ed2b6982e13](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/def54b24d4cbf1d93a81ed2b6982e13.jpg)
**The core of inference is to compute the posterior probability** 

## 1 Simple Bayesian Chain Network  

![image-20241104101812293](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104101812293.png)
We can eliminate a step by step through (Σa P(a)P(b|a)), thereby eliminating a, b, c, etc.  
This is direct variable elimination  

## 2 Elimination Method in Hidden Markov Models and Markov Random Fields  

![image-20241104102115835](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104102115835.png)
Initial conditions:  
$$
\alpha_1(i)=\pi_i e_{i,x_1}
$$
where $\pi_i$ is the initial value of y1, and e is the initial value of x1  
The recursive formula is:  
$$
\alpha_{t+1}(i)=[\sum_{j=1}^N \alpha_t(j)t_{j,i}] e_{i,x_{t+1}}
$$
Final integration:  
$$
P(X|\theta)=\sum_{i=1}^N \alpha_T(i)
$$
For these relatively simple models, direct elimination can be used, but elimination alone is insufficient. We also hope to find more efficient algorithms  
## 3 More Complex Bayesian Networks
![image-20241104102937031](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104102937031.png)
From this graph, we can know the joint probability, but we want to find P(D) (i.e., P(Dyspnea))  
First, factor decomposition:  
$$
P(V)P(S)P(T |V)P(L | S)P(B | S)P(A|T, L)P(X | A)P(D | A,B)
$$
Simplify the conditional probability notation with factors:  
$$
\phi V (V) \phi S (S) \phi T (T,V)\phi L (L,S)\phi B (B,S)\phi A (A,T.L)\phi X (X, A)\phi D (D, A,B)
$$
To compute P(D), we need to eliminate: V,S,X,T,L,A,B  
According to the above factor decomposition theorem:  
First eliminate V:  
$$
\tau_1(T)=\sum_V \phi_V(V)\phi_T(T,V)
$$
Here, $\tau_1(T)=P(T)$, so the factor decomposition can be rewritten as:  
$$
\tau_1(T) \phi S (S) \phi L (L,S)\phi B (B,S)\phi A (A,T.L)\phi X (X, A)\phi D (D, A,B)
$$
Repeating the process, eliminate S:  
$$
\tau_2(L,B)=\sum_V\phi_S(S)\phi_L(L,S)\phi_B(B,S)
$$
The factor decomposition theorem can be simplified as:  
$$
\tau_1(T) \tau_2(L,B) \phi A (A,T.L)\phi X (X, A)\phi D (D, A,B)
$$
Next eliminate X:  
$$
\tau_3(A)=\sum_X \phi_X(X,A)
$$
Note that $\tau_3(A)=1$  
The factor decomposition theorem can be written as:  
![image-20241104104211296](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104104211296.png)

Finally, eliminate T:  
![image-20241104104226582](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104104226582.png)

Then eliminate L:  
![image-20241104104250249](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104104250249.png)

Then eliminate A  
![image-20241104104317128](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104104317128.png) Finally, eliminate B:  
![image-20241104104336303](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104104336303.png)
$$
P(D)=\tau_7(D)
$$

For directed graphs, it's generally processed after V structure to convert into undirected graphs, then eliminate sequentially  
To reduce computational cost, we can precompute cliques for large graphs and directly use clique results for inference  
Directed graph --> eliminate V structure (here, HGJ is also a V-structure, remember triangulation -- connect GJ) --> eliminate quadrilaterals to get induced graph --> convert to get clique tree  
![image-20241104110519425](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104110519425.png)
Note that the clique tree here selects the highest-order clique  
Each factor φi is defined on a clique  
Information flows from both sides to the target clique  
![image-20241104111156911](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104111156911.png)

The target is called the root node  
For example, for the following clique tree  
![image-20241104111437601](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104111437601.png)

The root node is C6  
First approach: 1 sends information to 4, 2 sends to 3, 3 sends to 4, then 4 sends to root node 6, then 5 sends to 6  
The opposite is the third order: after 3 sends to 4, 4 sends to 6 directly, which is unreasonable because 1 hasn't sent information yet  
Clique tree simplifies inference to make elimination easier to understand  
![image-20241104112233287](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104112233287.png)
Currently, the edge probability of node 5 is calculated, and then the information is sent out to get the edge probabilities of other nodes  
![image-20241104112359377](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104112359377.png)
(This step is called downward pass)  
After upward and downward passes, the entire network is **calibrated** (each node has its marginal probability), making the model reach a steady state, which is convenient for querying —— this is the **calibration** of clique trees  
**Choosing which node as the root has no effect on the result** 

Since information on each edge is recorded in the marginal probabilities of the two adjacent nodes, the total p calculation duplicates edge information, which needs to be removed:  
![image-20241104113732983](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104113732983.png)
For example:  
![image-20241104113820885](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104113820885.png)
Instead of fixing the root node, information propagation can be started arbitrarily, ensuring that the clique tree reaches a steady state after many iterations  

Clique tree is an equivalent representation of the original probabilistic graphical model, its advantage lies in better helping us design algorithms  
## 4 Clique Tree Design /think
![image-20241104114935716](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104114935716.png)

You must first process the v-structure before handling the polygon  
## 5 loopy cluster graph  
An undirected graph will result in a cyclic structure if not triangulated:  
![image-20241104115555973](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104115555973.png)  
This will cause information to loop back to node 1  
This cluster graph lacks theoretical foundation and is merely an algorithmic approach; it's sufficient to compute results  
Only the Running Intersection Property needs to be satisfied  
However, convergence cannot be guaranteed here, nor can the correctness of the resulting edge probabilities (in belief propagation) be ensured
