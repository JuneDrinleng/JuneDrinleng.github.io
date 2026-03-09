---
layout: post
title: "Probabilistic Graphical Models 8: Mean Field Approximation"
date: 2024-11-11
tags: [pgm]
comments: true
author: junedrinleng
toc: true
post_id: 2024-11-11-PGM_8_Variational_Inference
source_lang: zh
source_title: "概率图模型8 平均场近似"
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.151Z"
source_hash: 61bcd1d00b59946117960f37c72f90d354e7b9713a3b89b4c1aedfdfd057f685
---

This note introduces variational inference and related content on mean field approximation  
<!-- more -->

It is impossible to construct a clique tree for exact distribution computation, so variational inference is proposed for approximate inference  
Variational methods have a complete theoretical framework behind them  

## 1 Target Conversion (from P to Q)
Cause: As the grid structure increases, inferring P(X) becomes increasingly difficult, so we want to fit a simpler Q(X) to represent P(X). Future inference can then be performed on the simplified Q(X) instead of the more complex P(X)  

![64da2c5b98d2a75a01d5e9658cab534](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/64da2c5b98d2a75a01d5e9658cab534.jpg)

The above is the basic logic of variational methods  
Therefore, we need to strictly define a physical quantity to calculate the similarity between P(X) and Q(X). Here, KL divergence is used to describe the gap:  
![image-20241111101711115](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111101711115.png)
Note that the order of Q and P is asymmetric. The divergence of P followed by Q is different from Q followed by P  
The goal is to find a Q within its domain to minimize the divergence between Q and P:  
$$
\min_Q\ D_{KL}(Q||P)
$$
We also aim to define Q(X) on a simpler graph structure  
![image-20241111102245416](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111102245416.png)
Reverse KL divergence models at least one peak  
Forward KL requires full coverage  
In practice, we typically use reverse KL divergence:  
$$
D_{KL}(Q||P)=E_{X\sim Q}(ln \frac{Q(X)}{P(X|z)})
$$
Taking the expectation over Q is more convenient. If using forward divergence, we would need to take the expectation over P  
![image-20241111102659617](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111102659617.png)
Where $E_{Q}(lnQ)$ is the entropy of the Q distribution  
After the above equivalence, our goal becomes  
$$
\max_Q(E_{x \sim Q}(lnP(X,z))+H(Q(X)))
$$
In physics, this is called maximizing the energy function ($\max_Q L(Q)$) or minimizing J(Q)=-L(Q)  
![image-20241111103129463](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111103129463.png)

When Q and P are similar, the first term is appropriate, but the second term requires Q to be as uniform as possible, causing it to diverge from the first term. These two terms balance each other  
![image-20241111103148767](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111103148767.png)
Finding Q involves:  
Limiting the domain of Q, evaluating the similarity between Q and P, and then transforming the problem into an optimization task to find Q that achieves the above goal  

## 2 Mean Field Model
We aim to construct a Q distribution for a graph model without edges (i.e., mean field inference)  
For example:  
![image-20241111105032586](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111105032586.png)
Currently, the Q distribution according to probabilistic graphical models has its own marginal distribution for each node, and they are independent so their joint distribution is the product:  
$$
q(x;\theta)=\prod_i q_i(x_i)
$$
![image-20241111105218737](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111105218737.png)

The final combination of the two terms is L(q)  
![image-20241111105311200](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111105311200.png)
Optimizing all at once is difficult, so we want to optimize one q at a time, keeping other q fixed during optimization:  
![image-20241111105439685](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111105439685.png)
The final result is:  
![image-20241111105737569](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111105737569.png)
When:  
![image-20241111105849401](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111105849401.png)
Satisfying the above condition maximizes L(q)  

## 3 Mean Field Model Example
The current goal is to find the optimal Q to simulate the following problem's P:  
![image-20241111110125444](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111110125444.png)  
The Ising model does not have first-order terms (convention)  
After solving P~(X), we then look at the design of q distribution  
![image-20241111110709223](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111110709223.png)  
Continue simplifying P~(X):  
![image-20241111111032384](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111111032384.png)  
For the grid model, any edges not directly connected to node j become constants after taking the expectation and are thus incorporated into c without affecting the results  
![image-20241111111537090](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111111537090.png)  
For example, the term $w_{3,6}x_3x_6$ in the figure  
Moreover, since q is a Bernoulli distribution (1~θ, -1~(1-θ)), the expectation is 1*θ -1*(1-θ) = 2θ - 1  
![image-20241111111913716](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111111913716.png)  
**Here the variables are binary variables taking -1 and 1, but if it's a 0,1 distribution, this approach cannot be used, for example, in restricted Boltzmann machines where binary variables take 1 and 0, in which case it would be $w_{ij}\theta_i$**  

For the example problem:  
![image-20241111113559446](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111113559446.png)  
$$
\ln P(x,y)=\frac{1}{z}e^{\alpha_1 x1+\alpha_2 x2+\alpha_3 x3+\beta y+w_{1,2}x_1x_2+w_{1,3}x_1x_3+w_{3,2}x_3x_2+h_1 x_1y+h_2x_2y+h_3x_3y}
$$  
At this point  
$$
E_{q_1(X)}(h_1x_1y)=h_1\theta_1y 
$$

$$
E_{q_2(X)}(h_2x_2y)=h_2\theta_1y
$$


$$
E_{q_3(X)}(h_3x_3y)=h_3\theta_1y 
$$  
Mean-field/variational inference performs well in denoising:  
![image-20241111114429756](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111114429756.png)  
For binary problems, it is convenient to derive analytical solutions, but sometimes analytical solutions cannot be directly derived, so now we can use stochastic gradient descent for gradient descent  

After completing variational inference, we only need to use q for all calculations, without further solving in p, which is the meaning of variational inference (all subsequent calculations use q)    
## 4 NN for variational inference  
When data is particularly complex, designing variational functions is difficult:  
![image-20241111115804371](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111115804371.png)  
These two terms can be implemented using neural network encoders and decoders  
In reality, it is performing variational inference  
VAE is essentially using neural networks to approximate complex q distributions
