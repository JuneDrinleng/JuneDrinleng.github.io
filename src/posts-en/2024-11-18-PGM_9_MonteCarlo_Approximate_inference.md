---
layout: post
title: "Probabilistic graphical model 9 Monte Carlo approximation"
date: 2024-11-18
tags: [pgm]
comments: true
author:junedrinleng
toc: true
---

This note mainly introduces Monte Carlo approximation, including likelihood weighting and importance sampling
<!-- more -->

## 1 Two Strategies for Inference

1.Inference as optimization

   - Belief propagation on cluster (or factor) graph
   -Structured varational inference


2. Back to the frequentist probability
   - Likelihood weighting, importance sampling
   - MCMC: Gibbs sampling, Metropolis-Hastings algorithm, Hamiltonian Monte Carlo, Langevin Monte Carlo (sampling Markov blanket posterior)

The variational method is the ultimate upper limit. The inferences in the last two weeks mainly introduced the variational inference, and part of it is the inference of regression frequency probability.

The basic logic of the Monte Carlo method is to generate a bunch of efficient independent and identically distributed samples from P, and then approximate the probability based on the frequency:
$$
P(X)\approx \frac{n_x}{n_{total}}
$$
So the most critical issue is how to generate these samples efficiently

## 2 Forward Sampling

Generate samples according to the structure of the network, and then finally do statistics

**Note that all parameters are known**

The figure below shows the process of sampling based on the probability table

![image-20241118101150193](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118101150193.png)

First randomly sample a d according to the probability distribution table of D, and the same goes for I, and then obtain g based on the values ​​of i and d and the probability distribution table of G, and so on for s and l

Frequent number theory is also very simple to find conditional probability. You only need to change all the sample sizes in the denominator into the number of samples that meet the conditions. P(**Y**|**E**=**e**)

It should be noted that the greater the number of samples, the closer the frequency is to the true probability. So how many samples should we choose to keep the deviation as small as possible?

![image-20241118101710026](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118101710026.png)

But faced with a situation where generating a bunch of samples may be a waste:
$$
P(x_3=1,x_5=0|x_2=0)=\frac{N(x_3=1,x_5=0)}{N(x_2=0)}
$$
N stands for frequency

## 3 Likelihood Weighting

How to simplify it? The above frequency describes P(**Y**|**E**=**e**). We can directly set the number of E to e without sampling. The entire result obtained at this time is P(**Y**, **E**=**e**), which is one P(**E**=**e**) different from the original P(**Y**|**E**=**e**).

For example:

![image-20241118102726350](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118102726350.png)

When G and S are given, the posterior probabilities of D and I have actually changed, and we cannot use D and I to start generating according to the original method.

But the processing method mentioned above:

First, G and I are still randomly sampled according to the table, and then when G is forced to equal 2 (g2), S is also forced to be equal, and a $weight=P(S=s^1)P(G=g^2)$ is recorded.

Likelihood can already be a good solution for directed graphs.

## 4 Importance Sampling

The definition domain of Q needs to be larger than P. The sample is generated in Q instead of P to simplify sampling. Whenever P/Q>1, it is equivalent to an increase in its weight. If it is small, the weight can be reduced.

Formula:

![image-20241118104951506](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118104951506.png)

![811a6acb878b85128410c5aa4403b86](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/811a6acb878b85128410c5aa4403b86.jpg)

If P and Q are close, the approximation overhead is the least, but if they are very different, additional sampling is required.

![image-20241118105510185](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118105510185.png)

Simplify the operation: For any node with observations, delete all its associations with the parent node to obtain a multilated network

Likelihood weighting is a special case of importance sampling (when designing Q according to the above cutting rules)

Regarding the number of samples:

![image-20241118110148433](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118110148433.png)

The above set is not suitable for undirected graphs, because it needs to be converted into directed graphs, and Q is not a good choice for undirected graphs.

## 5 Boltzmann distribution and MCMC

![af1fa89625f97ada6b5adb597a30a94](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/af1fa89625f97ada6b5adb597a30a94.jpg)

The three particle states can be converted into each other. The current state is only related to the state at the previous moment (Markovian property). Then after a long time, the probability of the particle being in each state obeys the Boltzmann distribution.

Is it possible to set up a Markov chain so that the steady state of the Markov chain meets the target distribution?

It should be noted that importance sampling and likelihood weighting generate samples that have nothing to do with the sample at the previous moment, while Markov Chain Monte Carlo is related to the previous moment.

In order to avoid infinite/multiple steady-state distributions, a small number is added to all local CPDs (making the probability of 0 become a small amount)

### 5.1 The simplest MCMC algorithm: Gibbs sampling

The transition probability of Gibbs sampling is set according to the p distribution as follows:
$$
+
$$
Only when all local CPDs are greater than zero can all states be returned permanently.

![image-20241118115210860](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118115210860.png)

The conditions for regular returns are:

![image-20241118115432752](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118115432752.png)

Specifically, it depends on how to sample:

### 5.3 Gibbs Sampling of Bayesian Networks

First determine the Markov blanket

![image-20241118115610670](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118115610670.png)

![image-20241118115707870](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118115707870.png)

y is a child node of x. The above probability product is less than or equal to 1, which is not a probability. It needs to be normalized before it becomes a probability.![image-20241118115833408](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118115833408.png)

## 6 Metropolis-Hastings Algorithm

How to design a Markov chain based on an existing random generator Q

The balancing function acceptance probability is designed. The part where P is greater than Q is introduced into A for balancing, and the part where Q is greater than P is ignored.