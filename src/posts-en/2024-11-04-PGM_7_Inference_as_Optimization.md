---
layout: post
title: "Probability graphical model 7 cluster graph and clique tree"
date: 2024-11-04
tags: [pgm]
comments: true
author:junedrinleng
toc: true
---

This note mainly introduces the theory related to graph cluster in the inference part, and the use of clique tree for accurate inference.
<!-- more -->

Brand new chapter: The core of the entire machine learning is inference
inference: All parameters of the model are known, and probabilistic inference needs to be made based on the model.
![image-20241104100148673](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104100148673.png)
Task 1: Find the probability distribution of the entire y
Task 2: Find a point estimate (that is, the maximum value point of the conditional probability y)
Obviously Task 1 obtains more information, but it also means that Task 1 is more difficult to achieve.
![def54b24d4cbf1d93a81ed2b6982e13](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/def54b24d4cbf1d93a81ed2b6982e13.jpg)
**The core of inference is to find the posterior probability **

## 1 Simple Bayesian chain network

![image-20241104101812293](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104101812293.png)
You can eliminate a from (Σa P(a)P(b|a)), and then you can eliminate a, b, c, etc. step by step
This is direct variable elimination

## 2 Elimination method in hidden horse model and Markov random field

![image-20241104102115835](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104102115835.png)
Initial conditions:
$$
\alpha_1(i)=\pi_i e_{i,x_1}
$$
where $\pi_i$ is the initial value of y1, and e is the initial value of x1
Then its recursion formula is:
$$
\alpha_{t+1}(i)=[\sum_{j=1}^N \alpha_t(j)t_{j,i}] e_{i,x_{t+1}}
$$
Final integration:
$$
P(X|\theta)=\sum_{i=1}^N \alpha_T(i)
$$
For these relatively simple example models, they can be implemented directly through the elimination method, but the elimination method alone is not enough. We also hope to find a more efficient algorithm.
## 3 More complex Bayesian networks
![image-20241104102937031](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104102937031.png)
The joint probability can be known from this graph, but we want to know P(D) (that is, P(Dyspnea))
First factorize:
$$
P(V)P(S)P(T |V)P(L | S)P(B | S)P(A|T, L)P(X | A)P(D | A,B)
$$
Simplify the notation of conditional probability in terms of factors:
$$
\phi V (V) \phi S (S) \phi T (T,V)\phi L (L,S)\phi B (B,S)\phi A (A,T.L)\phi X (X, A)\phi D (D, A,B)
$$
In order to find P(D), you need to eliminate: V,S,X,T,L,A,B
According to the above factoring theorem:
First eliminate: V:
$$
\tau_1(T)=\sum_V \phi_V(V)\phi_T(T,V)
$$
Here $\tau_1(T)=P(T)$, then the above factor decomposition can be rewritten as:
$$
\tau_1(T) \phi S (S) \phi L (L,S)\phi B (B,S)\phi A (A,T.L)\phi X (X, A)\phi D (D, A,B)
$$
Then repeat the above process and eliminate S from the current situation:
$$
\tau_2(L,B)=\sum_V\phi_S(S)\phi_L(L,S)\phi_B(B,S)
$$
Then the factorization theorem can be abbreviated as:
$$
\tau_1(T) \tau_2(L,B) \phi A (A,T.L)\phi X (X, A)\phi D (D, A,B)
$$
Next eliminate X:
$$
\tau_3(A)=\sum_X \phi_X(X,A)
$$
It should be noted that $\tau_3(A)=1$ here
Then the factorization theorem can be written as:
![image-20241104104211296](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104104211296.png)

Finally, eliminate T:
![image-20241104104226582](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104104226582.png)

Then eliminate L:
![image-20241104104250249](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104104250249.png)

Then eliminate A
![image-20241104104317128](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104104317128.png) Finally, only B needs to be eliminated:
![image-20241104104336303](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104104336303.png)
$$
P(D)=\tau_7(D)
$$

For directed graphs, the V structure is generally processed and transformed into an undirected graph, and then the elements are eliminated in sequence.
In order to reduce the calculation cost, you can also calculate the clique of a large graph. In the future, you only need to directly use the clique results to implement inference.
Directed graph --> Process the v structure (HGJ here is also v-structure, remember to triangulate it - connect to GJ) --> Process the quadrilateral to get the induced graph --> Then convert it to get the clique tree
![image-20241104110519425](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104110519425.png)
It should be noted that the clique tree here is to select the highest order clique
φi of each factor is defined on the clique
Information from both sides is sent to the target clique
![image-20241104111156911](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104111156911.png)

The target we call the root node
For example, for the following clique tree
![image-20241104111437601](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104111437601.png)The root node is C6
The first way is that first 1 sends a message to 4, 2 sends a message to 3, and 3 sends a message to 4. At this time, 4 already has nodes 1 and 3, then 4 can send a message to the root node 6, and then 5 sends a message to 6.
The opposite is the third sequence. After sending 3 to 4, it is unreasonable for 4 to send a message directly to 6, because 1 has not sent a message at this time.
The purpose of the clique tree is to simplify and make the elimination method of inference easier to understand.
![image-20241104112233287](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104112233287.png)
The current situation has finished calculating the edge probabilities of 5 nodes. We only need to send out the information again, and then we can get the edge probabilities of other nodes.
![image-20241104112359377](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104112359377.png)
(This step is called downward pass)
After the two steps of upward and downward, the entire network has been **calibrated** (each node is its edge probability), and the entire model has become a steady state, which makes it very convenient to perform query——This is the **calibration** of clique tree
**Which one is chosen as the root node has no effect on the result**

Since the information on each edge is included in the edge probabilities of the two adjacent nodes, the information on the edges is repeatedly calculated when calculating the total p, and needs to be removed:
![image-20241104113732983](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104113732983.png)
For example:
![image-20241104113820885](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104113820885.png)
There is also information dissemination that no longer fixes the root node, but starts sending information at random. What needs to be ensured is that the entire clique tree can reach a steady state after many rounds of iterations.

The clique tree is the equivalent representation of the original probability graphical model. Its advantage is that it can better help us implement the design of the algorithm.
## 4 clique tree design
![image-20241104114935716](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104114935716.png)

Be sure to process v-structure first and then polygons
## 5 loopy cluster graph
If the undirected graph is not triangulated, it will appear in a ring shape:
![image-20241104115555973](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104115555973.png)
This will make A turn around and the information will return to 1
This cluster graph has no theoretical basis, it is just a processing algorithm.
Just need to satisfy the Running Intersection Property
But there is no guarantee that the result will converge, nor that the convergence result will be the correct edge probability (belief propagation here)