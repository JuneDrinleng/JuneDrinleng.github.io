---
layout: post
title: "Probability Graph Models 4: Hidden Markov Models"
date:   2024-09-30
tags: [pgm]
comments: true
author: junedrinleng
toc: true
---

This note mainly introduces the Hidden Markov Model (HMM) in directed graphs of probabilistic graphical models  
<!-- more -->

## 1 Review

Factorization Theorem  
1. variable  
2. design the network  
3. design local CPD  

Markov/Memoryless Property  
![image-20240930095925126](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930095925126.png)  
After assigning subscripts to the sequence, the Markov chain gains a temporal distribution meaning—the time is in steady state  
eg. random walk  
eg2. Human-computer interaction, Y is video data; Z is audio information  
![image-20240930100925249](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930100925249.png) Modeling an additional layer to describe noise issues—probabilistic graphical models often introduce variables that are difficult to detect in reality (e.g., noise)  
This is also the main part of this section that we want to understand and explain. The above structure assumes a time-invariant system  
Generally, there are two types of parameters: one is the internal time window parameters, and the other is the parameters between time windows  

## 2 Hidden Markov Models

![image-20240930102527632](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930102527632.png)  
In fact, the s here is the hidden variable, since we don't have data for S  
When satisfying the Markov property, it can finally converge to a time-stationary steady state  
Ensuring ergodicity can add a very small number to some zero places  
Other applications: sequences on the genome (not necessarily requiring a time-axis sequence)  

### 2.1 Calculations in HMMs

- Problem 1: $𝑃(𝑿|𝜽)$, given the model and the observation sequence, infer the probability of getting that observation sequence from the model  
- Problem 2: $argmax_𝑌 𝑷(𝑿, 𝒀|𝜽)$, given the model and the observation sequence, infer the hidden labels of the sequence  
- Problem 3: $argmax_𝜃 𝑷(𝑿|𝜽)$, if parameters are unknown, learn them from the observation sequence  

### 2.2 Calculation of $𝑃(𝑿|𝜽)$

Without introducing hidden variables to describe the Markov model, all observed variables would be fully connected and not independent. Introducing hidden variables increases independence and simplifies the number of model parameters  
![image-20240930105944273](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930105944273.png)  
Factorization places the parent node parameters back  

Forward/Backward Algorithm:  
$\pi_i$ is the start parameter, e is the observation parameter  
$$
\alpha_1(i)=P(Y_1=i)P(x_1|Y_1=i)
$$
![image-20240930110643533](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930110643533.png)  
In fact, $[\sum_{j=1}^N \alpha_t(j)t_{j,i}]$ is $P(Y_{t=i}|Y_{t-1})$  
The backward process is as follows:  
![image-20240930111205625](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930111205625.png)  
In reality, the results of the forward and backward processes are the same  

### 2.3 Calculation of $argmax_Y 𝑷(𝑿, 𝒀|𝜽)$—Calculating which Y makes this maximum probability value achievable /think
It is necessary to record how the probability of each node is derived  
![image-20240930111809755](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930111809755.png)

### 2.4 Solving argmax_𝜃 𝑷(𝑿|𝜽)  

The goal is to solve:  
$$
argmax_\theta=\sum_YP(XY|\theta)
$$
Since Y is a hidden variable, both Y and θ are often unknown. One solution is to use an iterative approach  
$$
\theta^0-->Y^0-->\theta^1-->Y^1-->\cdots
$$
However, this method does not guarantee convergence, and even if it does, it cannot ensure global optimality  
$$
\xi_t(i,j)=P(y_t=i,y_{t+1}=j|X,\theta)
$$
![image-20240930113904060](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930113904060.png)

![image-20240930113924494](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930113924494.png)
Then use the above parameters to solve for t and e  
![image-20240930114010930](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930114010930.png)

Repeated iteration is sufficient:  
![image-20240930114030686](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930114030686.png)

Mnemonic: Parent node, child node, child node's parent node  
![image-20240930115909839](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930115909839.png)

In reality, RNNs are constructed based on Markov chains. LSTM becomes more useful than RNNs due to its ability to capture long-term dependencies (RNNs have too strong Markov properties)