---
layout: post
title: "20251229 Literature Reading Notes"
date: 2025-12-29
tags: [paper]
comments: true
author:junedrinleng
toc: true
---

This note mainly records an intensive reading of a Time Series Forecast assisted by using MMVs. After visualizing the time series, cv is used to learn the time series. The rough reading includes: Pattern recognition classification of driving trajectories

<!-- more -->

## 1 Multimodal view enhances wide-view models for long-term time series forecasting

In the past, time series predictions focused on directly using Transformer and LLM for context analysis. Recently, large visual models have gradually achieved good results. Therefore, there is also a method of converting time series data into image-like representations to use the ability of LVM to parse the potential information in the time series, thereby achieving trajectory prediction.

The current SOTA of this method is VisionTS Model. This work is inspired by VisionTS Model and uses the ability of LVM to reconstruct the image and predict the time series through the self-supervised MAE method.

![image-20251229122132113](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229122132113.png) Specifically, there are two models, one is to use moving directly The average method extracts the trend in time series information, and the other is model adaptive time series information extraction.

First, let’s look at the method of using moving average. Here, the time series is input into the pre-processing module and the moving average is used to obtain the trend and seasonal components. For the trend part, the transformer+linear model can be used directly to perform the trend forecast, while for the seasonal component, the visual model is used to forecast.

The adaptive processing model first directly images the time series, inputs the graphics into the visual forecaster to predict the seasonal part, and then fills out the forward content and reflects it back to the time series, which is the seasonal part of the previous part of the time series. The original time series - the predicted seasonal component is obtained by trend.

![image-20251229122850779](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229122850779.png)

Specifically, for LVM forecaster, a large image is often taken into several patches and then covered, and the covered parts are predicted through $f_{LVM}$. For adaptive networks, more mask Backcast is added, which is the part that the model tries to "backtrack" or understand.

![image-20251229123110551](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229123110551.png)

**Step A (left):**

- **Input:** The left half of the image $\tilde{\mathbf{I}}_{\text{left}}$ (as the Look-back window).
- **Task:** Let the model predict the occluded right half.
- **Output:** Get the prediction map on the right $\hat{\mathbf{I}}*{\text{right}} = f*{\text{vis}}(\tilde{\mathbf{I}}_{\text{left}})$.

**Step B (right picture):**

- **Input:** The right half of the image $\tilde{\mathbf{I}}_{\text{right}}$.
- **Task:** Let the model predict the occluded left half.
- **Output:** Get the prediction map $\hat{\mathbf{I}}*{\text{left}} = f*{\text{vis}}(\tilde{\mathbf{I}}_{\text{right}})$ on the left.

This reconstructed image $\hat{\mathbf{I}}^i$ will biasedly reflect periodic patterns in the data. Because visual models are good at capturing textures and repetitive structures while ignoring non-periodic trends

## 2 A driving style adaptive vehicle trajectory prediction framework

> Wen, D. *et al.* A driving-style-adaptive framework for vehicle trajectory prediction.

The driving trajectories of cars mainly include the following three types, namely Normal, Conservative, and Aggressive. This article introduces the prior of the car's driving trajectory model and uses it to predict the car's trajectory (Vehicle Trajectory Prediction).

![image-20251229110949273](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229110949273.png)

Specifically, the main process is as follows. First, the historical trajectory is input into the network, and weight learning is performed on it through the gated network. What is obtained is the preliminary prediction classification weight w of the three driving modes. In addition, the Degree Adaptation part is also used to determine the degree of learning, such as how aggressive the Aggressive mode is. Finally, the final car trajectory is predicted based on w and n.
![image-20251229111254767](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229111254767.png)

## 3 Capturing motion patterns by jointly modeling trajectories from GPS and road perspectives TrajMamba: an efficient and semantically rich pre-trained model for vehicle trajectories

> Liu, Y. *et al.* TrajMamba: An Efficient and Semantic-rich Vehicle Trajectory Pre-training Model. Preprint at https://doi.org/10.48550/arXiv.2510.17545 (2025).

For vehicle trajectories, there are two main problems. One is the points of interest/specific destination points along which the trajectory passes, and the other is that trajectories often face missing midpoints in the trajectory in real-life data. How to combine the destination points and trajectories of GPS to capture the motion patterns of car trajectories while maintaining robustness to missing trajectories is a problem that needs to be solved.

For example, in the figure below, the points of the trajectory are represented by orange diamond blocks. However, in addition, there are other points of interest (POI) in the road network around the trajectory, such as supermarkets, parks, etc. Analyzing the behavior of the trajectory based on the behavior of the trajectory between these points and POI is a matter that needs to be solved.

![image-20251229113424060](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229113424060.png)

This work has two parts. First, when the trajectory is full, the POI and trajectory are input into the POI text encoder for comparative learning, so that the semantics of the POI are as close as possible, so that the trajectory learned by the model can contain rich POI semantic information. In addition, the trajectory and road network data need to be input for text encoding and then comparative learning to learn the semantic information of the road network with the help of the trajectory. According to the above process, the model can generate a trajectory embedding vector containing rich semantic information.

![image-20251229113611474](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229113611474.png)

On the right side of the picture is the distillation pre-training of knowledge. Specifically, the trajectory is randomly masked and discarded to simulate the absence of trajectory points. The corresponding method is to use the Mask Generator (with the help of Mamba Block). Put the masked trajectory into the fully trained model for embedding, and then perform loss with the full result to continuously optimize the embedding accuracy under the missing trajectory.