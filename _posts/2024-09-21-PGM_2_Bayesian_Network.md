---
layout: post
title: "概率图模型2 贝叶斯网络"
date:   2024-09-21
tags: [pgm]
comments: true
author: junedrinleng
toc: true
---


该笔记主要介绍概率图模型中的贝叶斯网络，包括贝叶斯网络/有向图的定义以及其因子分解定理
<!-- more -->

## 1 独立会减少描述概率空间的参数
独立随机变量会减小概率空间的参数  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/image-20240921100008062.png)

**在建模复杂问题时，独立性的假设是简化问题的主要帮手**  
符号上：given Z时X和Y对立可以记为：
$$
𝐼𝑛𝑑(𝑋; 𝑌 | 𝑍) or (𝑋 ⊥ 𝑌 | 𝑍)
$$
例如：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/image-20240921100436717.png)

这5个变量并非完全相关，也非完全独立，现在来看需要多少个参数来描述这个模型：
对于I→S需要的参数是2^2 -1=3  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/image-20240921100628063.png)  

对于DIG结构：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/image-20240921100834148.png)

可以发现独立性减少了参数

## 2 朴素贝叶斯模型
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/image-20240921101101950.png)

未知朴素贝叶斯的情况下需要的参数量是$（2^n -1)*(k-1)$，而在已知朴素贝叶斯之后则是$(k-1)+n*(k-1)$
在通过图之后可以很快的写出：  

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/image-20240921101440545.png)

这暗含了一个很强的假设：**给定父节点后子节点是独立的**，但这在理论上是不完备的，所以第一个问题就是需要解决这个独立性的问题
## 3 贝叶斯网络的独立性问题
### 3.1 独立性定义和证明
对于有向无环图（Directed acyclic graph (DAG) ）G,每一个节点代表一个随机变量，G中蕴含着独立性的假设：
- $𝑋_𝑖$ is independent of its non-descendants given its parents(**直观定义→{P,G}**，但尚未证明P={P，G})
- 公式化：$(𝑋_𝑖 ⊥ 𝑁𝑜𝑛𝐷𝑒𝑠𝑐(𝑋_𝑖) | 𝑃𝑎(𝑋_𝑖))$  

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/image-20240921102105739.png)  

证明P={P，G}先引入一个概念independency Mappings :    

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/image-20240921102719937.png)  

Imap是独立性的集合，当图里的独立性在概率空间里都成立，那么此时图里的操作在概率空间中成立，此时称图G的独立性集合是概率空间的Imap    

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/image-20240921103042677.png)

也就是说用右边的模型可以建模右边的表格里的模型，但是并不能描述左边的表格里的模型，因为其I(G)并不属于左边的I(P)——即不是左边概率模型的IMAP
### 3.2 因子分解定理
前提公理：If we define the independences in G as 𝑋𝑖 ⊥ 𝑁𝑜𝑛𝐷𝑒𝑠𝑐(𝑋𝑖)| 𝑃𝑎(𝑋𝑖)  
命题：若𝐺 is an I-Map of 𝑃 被证明，那么可以直接写出：  

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/image-20240921103621724.png)  

这是充分条件（看图说话），反推是必要条件（必要条件在结构学习中使用，看数据画图）——皆需要证明  
先证明充分条件：  
- 推理和处理时求解思路都是从父节点沿着图向子节点来推，基于此我们将父节点子节点按父子关系排序：wlog. 𝑋1 , … , 𝑋𝑛 is an ordering consistent with G
- 链式法则：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/image-20240921104842414.png)  

这是因为当i后面的都是子节点，与父节点无关，那么在链式法则的时候就只需要考虑其父节点  
$$P(X_i | X_1 ,..., X_{i−1} ) = P(X_i | Pa(X_i ))$$
再证明必要性——图里的独立性在概率里都成立即可  
那么还是先有trick：  
- wlog. 𝑋1 , … , 𝑋𝑛 is an ordering consistent with 𝐺
- 那么则有：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/image-20240921105305063.png)  


## 4 贝叶斯网络的定义  

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/image-20240921105443315.png)  

P可以根据图里的关系进行因子分解  
使用举例：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/image-20240921105628355.png)  

C是父节点，给定C时X和Y是独立的子节点  
$$P(CXY)→P(X|Y)＝sum_C  \ P(CX|Y)→ 
P(CX|Y)=P(XY|C)P(C)/sum_C \ P(XY|C)P(C)$$  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/image-20240921110156752.png)  


非独立性结构：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/image-20240921111251210.png)

Case4（V-structure）是有向图复杂性的来源，只有当结果Z知道的时候原因X和Y才是有关系的，当结果不知道时原因X和Y是独立的  
因此对于贝叶斯网络来说，最好的结构就是树状结构，一个父节点若干子节点  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/20241117231506.png)  

最不好的结构则是：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/20241117231535.png)  

因此前向算法是从原因推结果比较方便，而后向算法是从后面推前面就没那么容易    
只要V结构没变，独立性就没有变化  
最小IMAP就是给出一个图，图里的每条边都不能删了就是minimal Imap  

例题： for P(ABCD)其中A和D独立，在AD条件下B与C独立  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/20241117231607.png)  

这是按照ABCD的顺序👆  
那如果按照ADBC的顺序呢：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/20241117231640.png)  

说明顺序不一样会影响结构，这说明根据概率来学图模型是不是那么容易的  
总体来说V-structure越少越好  

## 5 further thinking——因果推断  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2024-09-21-PGM_2_Bayesian_Network/image-20240921115340662.png)  

association关联：不涉及V结构时箭头并不代表因果而只是代表独立性  
Intervention干预：涉及干预实验辅助给出一些因果  
Counterfactuals反事实推断：世界的很多事情并不能做重复事件——同一个人不可能既吃药又不吃药，虽然不能这么实验但是人可以基于此推断  

如果是causal edge，那么对子节点进行干预的时候其与父节点的因果关联边就得去除了  
