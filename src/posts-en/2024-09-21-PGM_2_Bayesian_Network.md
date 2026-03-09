---
layout: post
title: "Probabilistic Graphical Models 2: Bayesian Networks"
date: 2024-09-21
tags: [pgm]
comments: true
author: junedrinleng
toc: true
post_id: 2024-09-21-PGM_2_Bayesian_Network
source_lang: zh
source_title: "概率图模型2 贝叶斯网络"
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.122Z"
source_hash: c6e30ab29779d9b7de70f135cbccbf028aef28a20354de9e80744d767e8392c5
---

This note mainly introduces Bayesian networks in probabilistic graphical models, including the definition of Bayesian networks/directed graphs and their factorization theorem
<!-- more -->

## 1 Independence Reduces Parameters for Describing Probability Space
Independent random variables reduce the parameters of the probability space  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921100008062.png)

**Assumptions of independence are the main helpers in simplifying complex modeling problems**  
Symbolically: Given Z, the independence of X and Y can be denoted as:
$$
𝐼𝑛𝑑(𝑋; 𝑌 | 𝑍) or (𝑋 ⊥ 𝑌 | 𝑍)
$$
For example:  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921100436717.png)

These 5 variables are neither fully correlated nor fully independent. Now let's see how many parameters are needed to describe this model:
For I→S, the required parameters are $2^2 -1=3$  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921100628063.png)  

For DIG structure:  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921100834148.png)

It can be observed that independence reduces the parameters

## 2 Naive Bayesian Model
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921101101950.png)

The number of parameters needed without knowing the naive Bayesian model is $（2^n -1)*(k-1)$, whereas with the naive Bayesian model it becomes $(k-1)+n*(k-1)$
After introducing the graph, we can quickly write:  

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921101440545.png)

This implicitly assumes a strong condition: **given the parent node, the child node is independent**, but this assumption is theoretically incomplete. Thus, the first issue to address is resolving this independence problem
## 3 Independence Problem in Bayesian Networks
### 3.1 Definition and Proof of Independence
For a directed acyclic graph (DAG) G, each node represents a random variable, and G encodes independence assumptions:
- $𝑋_𝑖$ is independent of its non-descendants given its parents (**intuitive definition → {P,G}**, but P={P, G} has not been proven yet)
- Formalized: $(𝑋_𝑖 ⊥ 𝑁𝑜𝑛𝐷𝑒𝑠𝑐(𝑋_𝑖) | 𝑃𝑎(𝑋_𝑖))$  

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921102105739.png)  

To prove P={P, G}, we first introduce the concept of independence mappings:    

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921102719937.png)  

An Imap is a set of independence statements. When all independencies in the graph hold in the probability space, the operations in the graph are valid in the probability space. At this point, we call the independence set of graph G an independence map (IMAP) for the probability space    

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921103042677.png)

In other words, the right model can model the right table's model, but cannot describe the left table's model because its I(G) does not belong to the left's I(P) — i.e., it is not an Imap of the left probability model
### 3.2 Factorization Theorem /think
**Axiomatic Premise**: If we define the independences in G as $ X_i \perp \text{NonDesc}(X_i) | \text{Pa}(X_i) $  
**Proposition**: If $ G $ is an I-Map of $ P $, it is proven that we can directly write:  

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921103621724.png)  

This is a sufficient condition (see the image for explanation), while the reverse is a necessary condition (necessary conditions are used in structure learning, see data to draw the graph) — both require proof.  
First, prove the sufficient condition:  
- Reasoning and processing always solve from parent nodes to child nodes along the graph. Based on this, we sort parent and child nodes according to their parent-child relationships: wlog. $ X_1, \dots, X_n $ is an ordering consistent with G  
- Chain rule:  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921104842414.png)  

This is because when all nodes after $ i $ are children, they are independent of the parent node. Thus, in the chain rule, we only need to consider their parent nodes:  
$$ P(X_i | X_1, \dots, X_{i-1}) = P(X_i | \text{Pa}(X_i)) $$  
Next, prove necessity — all independences in the graph must hold in probability.  
Still, we have a trick:  
- wlog. $ X_1, \dots, X_n $ is an ordering consistent with $ G $  
- Then we have:  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921105305063.png)  

## 4 Definition of Bayesian Networks  

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921105443315.png)  

P can be factorized based on the relationships in the graph  
Example of usage:  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921105628355.png)  

C is the parent node; given C, X and Y are independent child nodes  
$$ P(CXY) \rightarrow P(X|Y) = \sum_C \ P(CX|Y) \rightarrow 
P(CX|Y) = \frac{P(XY|C)P(C)}{\sum_C \ P(XY|C)P(C)} $$  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921110156752.png)  

Non-independence structure:  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921111251210.png)  

Case4 (V-structure) is the source of complexity in directed graphs. Only when the result Z is known do the causes X and Y have a relationship; when Z is unknown, X and Y are independent.  
Thus, for Bayesian networks, the best structure is a tree-like structure, with one parent node and multiple child nodes  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241117231506.png)  

The worst structure is:  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241117231535.png)  

Therefore, the forward algorithm is convenient for reasoning from causes to effects, while the backward algorithm is harder for reasoning from effects to causes.  
As long as the V-structure remains unchanged, the independence properties remain unchanged.  
The minimal I-Map is a graph where no edge can be removed.  

Example: for $ P(ABCD) $, where A and D are independent, and B and C are independent given A and D  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241117231607.png)  

This is according to the ordering ABCD ↑  
What if we use the ordering ADBC?  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241117231640.png)  

This shows that different orderings affect the structure, indicating that learning graph models from probabilities might not be straightforward.  
Overall, fewer V-structures are better.  

## 5 Further Thinking — Causal Inference
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921115340662.png)  

**Association (Association):** When not involving a V-structure, arrows do not represent causality but merely indicate independence.  
**Intervention (Intervention):** Involves experimental interventions that assist in establishing causality.  
**Counterfactuals (Counterfactual Inference):** Many real-world events cannot be repeated—e.g., a person cannot both take and not take a drug. While such experiments are not feasible, humans can still infer based on these scenarios.  

If it is a **causal edge**, intervening on a child node would require removing the causal link with its parent node.
