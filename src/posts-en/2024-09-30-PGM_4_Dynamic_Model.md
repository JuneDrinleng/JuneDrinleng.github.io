---
layout: post
title: "Probabilistic Graphical Model 4 Hidden Horse Model"
date: 2024-09-30
tags: [pgm]
comments: true
author:junedrinleng
toc: true
---

This note mainly introduces the hidden Markov model HMM in the directed graph of the probabilistic graphical model
<!-- more -->

## 1 review

Factorization Theorem
1. variable
2. design the network
3. design local CPD

markov/Memoryless Property
![image-20240930095925126](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930095925126.png)
After assigning the meaning of the sequence to the index, the Markov chain has the meaning of distribution in time - it is stable in time.
e.g. random walk
eg2. Human-computer interaction, Y is video data; Z is sound information
![image-20240930100925249](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930100925249.png) One more layer of modeling to describe the problem of noise - Probabilistic graphics often introduce some variables that are difficult to detect in reality (such as noise, etc.)
This is also the part that this section mainly wants to understand and explain. The above structure is assumed to be a time-invariant system.
Generally, there are two types of parameters, one is the parameter of the internal time window, and the other is the parameter between time windows.

## 2 Hidden Markov Models

![image-20240930102527632](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930102527632.png)
In fact, s here is a hidden variable, because we do not have data for S
When the convenience of each state is satisfied, it can finally converge to a time-stable steady state.
Ensure that individual state traversal can add some particularly small numbers to some 0 places.
Other applications: sequences on the genome (not necessarily on the timeline)

### 2.1 Calculations in HMMs

- Problem 1:$ 𝑃(𝑿|𝜽)$ , given the model and the

observation sequence, infer the probability of

getting that observation sequence from the model

- Problem 2: $argmax_𝑌 𝑷(𝑿, 𝒀|𝜽)$, given the model and the observation sequence, infer the hidden labels of the sequence
- Problem 3: $argmax_𝜃 𝑷(𝑿|𝜽)$, if parameters are unknown, learn them from the observation sequence

### 2.2 Calculation of 𝑃 (𝑿|𝜽)

If no latent variables are introduced to describe the Markov model, all observed variables will not be independent and fully connected. Introducing latent variables will increase independence and simplify the number of model parameters.
![image-20240930105944273](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930105944273.png)
Factoring stuffs parent node parameters back

Forward/backward algorithm:
$\pi_i$ is the startup parameter, and e is the observation parameter
$$
\alpha_1(i)=P(Y_1=i)P(x_1|Y_1=i)
$$
![image-20240930110643533](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930110643533.png)
In fact, $[\sum_{j=1}^N \alpha_t(j)t_{j,i}]$ is $P(Y_{t=i}|Y_{t-1})$
The regression process is as follows:
![image-20240930111205625](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930111205625.png)
But in fact, the final result obtained by forward and reverse inference is the same.

### 2.3 Calculation of argmax_Y 𝑷(𝑿, 𝒀|𝜽) - Calculate which Y makes this maximum probability value obtainable

It is necessary to record how the node probability of each step comes from
![image-20240930111809755](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930111809755.png)

### 2.4 Solution of argmax_𝜽 𝑷(𝑿|𝜽)

Need to solve:
$$
argmax_\theta=\sum_YP(XY|\theta)
$$
Since they are hidden variables, Y and θ are often unknown. One solution is to use iterative methods.
$$
\theta^0-->Y^0-->\theta^1-->Y^1-->\cdots
$$
However, this method does not guarantee convergence every time, and even if it converges, it cannot guarantee global optimality.
$$
\xi_t(i,j)=P(y_t=i,y_{t+1}=j|X,\theta)
$$
![image-20240930113904060](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930113904060.png)

![image-20240930113924494](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930113924494.png)
Then use the above parameters to solve for t and e
![image-20240930114010930](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930114010930.png)

Just keep iterating:
![image-20240930114030686](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930114030686.png)

Formula: parent node, child node, parent node of child node
![image-20240930115909839](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930115909839.png)

In fact, RNN is built with reference to the Markov chain. Compared with RNN, LSTM becomes more useful because of its long-term correlation (RNN's Markov property is too strong)