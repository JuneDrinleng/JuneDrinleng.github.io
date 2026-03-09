---
layout: post
title: "Probabilistic Graphical Models 9: Monte Carlo Approximation"
date: 2024-11-18
tags: [pgm]
comments: true
author: junedrinleng
toc: true
post_id: 2024-11-18-PGM_9_MonteCarlo_Approximate_inference
source_lang: zh
source_title: "概率图模型9 蒙特卡洛近似"
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.166Z"
source_hash: a0c80f4868e5225eb521c0691e5de1fb372fe181ec549ca968fad080526d2ffa
---

This note mainly introduces Monte Carlo approximation, including likelihood weighting and importance sampling
<!-- more -->

## 1 Two Strategies for Inference

1. Inference as optimization

   - Belief propagation on cluster (or factor) graph
   - Structured variational inference


2. Back to the frequentist probability
   - Likelihood weighting, importance sampling
   - MCMC: Gibbs sampling, Metropolis-Hastings algorithm, Hamiltonian Monte Carlo, Langevin Monte Carlo (sampling Markov blanket posterior)

Variational methods are optimal in the upper bound, and the inference introduced in the past two weeks mainly focuses on variational inference, with another part being regression-based frequentist probability inference

The basic logic of Monte Carlo methods is to generate a large number of independent and identically distributed samples from P, then approximate probabilities based on frequency:
$$
P(X)\approx \frac{n_x}{n_{total}}
$$
The key issue is how to efficiently generate these samples

## 2 Forward Sampling

Generate samples according to the network structure and perform statistics at the end

**Note that all parameters are known**

The figure below shows the sampling process based on probability tables

![image-20241118101150193](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118101150193.png)

First, randomly sample a d from the probability distribution table of D, I is the same. Then, based on the values of i and d and the probability distribution table of G, obtain g, and so on for s and l

Frequentist probability is simple for conditional probability calculation; just convert the total number of samples in the denominator to the number of samples satisfying the condition P(**Y**|**E**=**e**)

Note that the more samples you take, the closer the frequency is to the true probability. How many samples should we take to minimize the bias?

![image-20241118101710026](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118101710026.png)

But there may be situations where generating a large number of samples is wasteful:
$$
P(x_3=1,x_5=0|x_2=0)=\frac{N(x_3=1,x_5=0)}{N(x_2=0)}
$$
N represents the frequency

## 3 Likelihood Weighting

How to simplify this? The above frequency describes P(**Y**|**E**=**e**). We can directly set E to e without sampling, resulting in P(**Y**, **E**=**e**), which differs from the original P(**Y**|**E**=**e**) by a factor of P(**E**=**e**)

Example:

![image-20241118102726350](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118102726350.png)

Given G and S, the posterior probabilities of D and I have changed, so they cannot be generated using the original method for D and I

But the above approach:

First, G and I are still sampled randomly from the table, then G is forced to equal 2 (g2), S is also forced to equal, and a weight $weight=P(S=s^1)P(G=g^2)$ is recorded

For directed graphs, likelihood weighting can effectively solve the problem

## 4 Importance Sampling

Q's domain needs to be larger than P's; samples are generated from Q instead of P to simplify sampling. Where P/Q > 1, the weight increases, and where it is small, the weight decreases

Formula:

![image-20241118104951506](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118104951506.png)

![811a6acb878b85128410c5aa4403b86](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/811a6acb878b85128410c5aa4403b86.jpg)

When P and Q are close, the approximation cost is minimal, but if they differ significantly, additional sampling is needed

![image-20241118105510185](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118105510185.png)

Simplification: For observed nodes, remove all connections with parent nodes to obtain a mutilated network

Likelihood weighting is a special case of importance sampling (designed Q according to the above cutting rules)

Regarding the number of samples:

![image-20241118110148433](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118110148433.png)

The above approach is not suitable for undirected graphs because it requires converting undirected graphs into directed ones, and it's difficult to choose Q for undirected graphs

## 5 Boltzmann Distribution and MCMC
![af1fa89625f97ada6b5adb597a30a94](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/af1fa89625f97ada6b5adb597a30a94.jpg)

Three particle states can transition mutually, and the current state depends only on the previous state (Markov property). Therefore, after a long time, the probability of particles being in each state follows the Boltzmann distribution.

Can we set up a Markov chain such that its stationary distribution matches the target distribution?

Note that importance sampling and likelihood weighting generate samples independently of the previous sample, while Markov Chain Monte Carlo (MCMC) methods depend on the previous state.

To avoid infinite values/multiple stationary distributions, a small number is added to all local Conditional Probability Distributions (CPDs), turning zero probabilities into small quantities.

### 5.1 The Simplest MCMC Algorithm: Gibbs Sampling

The transition probability of Gibbs sampling is defined as follows according to the target distribution $ P $:
$$
𝑇(𝑿(𝑡) = 𝒙 → 𝑿(𝑡+1) = 𝒙′)= 𝑃(𝑿(𝑡+1)|𝑿(𝑡), 𝒆)
$$
Only when all local CPDs are greater than zero can all states be recurrent.

![image-20241118115210860](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118115210860.png)

The condition for recurrence is:

![image-20241118115432752](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118115432752.png)

Specific sampling methods:

### 5.3 Gibbs Sampling for Bayesian Networks

First, determine the Markov blanket.

![image-20241118115610670](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118115610670.png)

![image-20241118115707870](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118115707870.png)

$ y $ is a child node of $ x $; the product of the above probabilities is less than or equal to 1, not a probability. It needs to be normalized to become a probability.

![image-20241118115833408](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118115833408.png)

## 6 Metropolis-Hastings Algorithm

How to design a Markov chain based on an existing random generator $ Q $?

A balance function (acceptance probability) is designed to introduce the part of $ P $ greater than $ Q $ into $ A $ for balancing. The part of $ Q $ greater than $ P $ is ignored.
