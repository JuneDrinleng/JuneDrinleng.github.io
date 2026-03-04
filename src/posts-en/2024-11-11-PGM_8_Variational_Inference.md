---
layout: post
title: "Probability graphical model 8 mean field approximation"
date: 2024-11-11
tags: [pgm]
comments: true
author:junedrinleng
toc: true
---

This note introduces content related to variational inference and mean field approximation
<!-- more -->

There is no way to construct a clique tree for precise distribution calculation, so variational inference is proposed for approximate inference.
There is a complete theoretical system behind the calculus of variations.

## 1 Target conversion (from P to Q)
Reason: As the grid structure increases, the inference of P(X) becomes more and more difficult, so we want to use a simpler Q(X) for fitting, so that it can represent P(X). When making inferences in the future, we only need to make inferences on the simplified Q(X) instead of the more complicated P(X).

![64da2c5b98d2a75a01d5e9658cab534](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/64da2c5b98d2a75a01d5e9658cab534.jpg)

The above is the basic logic of the calculus of variations
Therefore, we need to strictly define a physical quantity to calculate the similarity between P(X) and Q(X). Here, KL divergence is used to describe the gap:
![image-20241111101711115](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111101711115.png)
It should be noted that the order of Q and P is asymmetric. The divergence of P in front and Q in the back and Q in the front and P in the back are different.
The goal is to find a Q in the domain of Q to minimize the divergence between Q and P:
$$
\min_Q\ D_{KL}(Q||P)
$$
Then we also try our best to define Q(X) on a simple graph structure
![image-20241111102245416](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111102245416.png)
reverse KL means at least model one peak
forward Kl requires at least all coverage
In practice we usually use reverse KL divergence:
$$
D_{KL}(Q||P)=E_{X\sim Q}(ln \frac{Q(X)}{P(X|z)})
$$
It is obviously more convenient to find the off-plan property for Q here. If you use forward divergence, you have to find the expectation for P.
![image-20241111102659617](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111102659617.png)
Where $E_{Q}(lnQ)$ is the entropy of Q distribution
After the above equivalence, our goal becomes
$$
\max_Q(E_{x \sim Q}(lnP(X,z))+H(Q(X)))
$$
In physics, it is called maximization of the energy function ($\max_Q L(Q)$) or minimization J(Q)=-L(Q)
![image-20241111103129463](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111103129463.png)

When Q and P are similar, the first term will be more appropriate, but at this time the second term requires Q to be as average as possible, which makes the result of it deviate from the first term. Through these two terms, the two terms can be considered.
![image-20241111103148767](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111103148767.png)
Find![image-20241111104729965](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111104729965-1731914123725-8.png) When Q:
The domain of Q needs to be limited, and the similarity between Q and P needs to be evaluated. After determining these, the entire problem becomes an optimization task of finding Q to achieve the above goals.

## 2 Mean field model
Hope to construct Q of a graph model without edges (also known as mean field inference)
For example:
![image-20241111105032586](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111105032586.png)
According to the probability graph model, the current Q distribution has its own marginal distribution on each node, and they are independent of each other, so when multiplied together, they form a joint distribution:
$$
q(x;\theta)=\prod_i q_i(x_i)
$$
![image-20241111105218737](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111105218737.png)

Finally, the sum of the two terms is L(q)
![image-20241111105311200](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111105311200.png)
It is difficult to optimize all at once during optimization, so now we hope to optimize one q by one q. When optimizing a specific q, the other qs will be fixed:
![image-20241111105439685](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111105439685.png)
The final result is:
![image-20241111105737569](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111105737569.png)
When:
![image-20241111105849401](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111105849401.png)
At this time, you only need to satisfy the above to make L(q) reach the maximum## 3 Mean field model example
The goal now is to find the optimal Q to simulate P of the following problem:
![image-20241111110125444](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111110125444.png)
There is no first-order term in the ising model (convention)
After solving P~(X), let’s look at the design of q distribution
![image-20241111110709223](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111110709223.png)
Continue to simplify P~(X):
![image-20241111111032384](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111111032384.png)
For the grid model, all edges that are not directly connected to node j become constants after calculating the expectation and are put into c without affecting the results.
![image-20241111111537090](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111111537090.png)
For example, the 3-6 node item $w_{3,6}x_3x_6$ in the figure
And since q is a binomial distribution 1~θ,-1~(1-θ), the expectation is 1* θ -1(1-θ)=2θ-1
![image-20241111111913716](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111111913716.png)
**The variable here is -1 and 1, but if it is distributed between 0 and 1, it cannot be used in this way. For example, in the restricted Boltzmann product, the binary value is 1 and 0, which is $w_{ij}\theta_i$ **

For example questions:
![image-20241111113559446](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111113559446.png)
$$
ln P(x,y)=\frac{1}{z}e^{\alpha_1 x1+\alpha_2 x2+\alpha_3 x3+\beta y+w_{1,2}x_1x_2+w_{1,3}x_1x_3+w_{3,2}x_3x_2+h_1
x_1y+h_2x_2y+h_3x_3y}$$
Then at this time
$$
$$
E_{q_1(X)}(h_1x_1y)=h_1\theta_1y
$$

$$
E_{q_2(X)}(h_2x_2y)=h_2\theta_1y
$$


$$
E_{q_3(X)}(h_3x_3y)=h_3\theta_1y
$$
Mean field/variational inference works well for denoising:
![image-20241111114429756](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111114429756.png)
For binary problems, it is easier to achieve analytical solutions, but sometimes the analytical solutions cannot be solved directly. So now gradient descent can be done through stochastic gradients.

When the variation is completed, you only need to use q to calculate it, and there is no need to solve it in p. This is the meaning of variation (all subsequent calculations are calculated using q)
## 4 NN for variational inference
Variational functions are difficult to design when the data is particularly complex:
![image-20241111115804371](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111115804371.png)
These two items can be realized using the encode and decode of neural networks.
What is actually done is variational inference
VAE is equivalent to the more complex q of Variation through the neural network.