---
layout: post
title: "20251229 Literature Reading Notes"
date:   2025-12-29
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

This note primarily records an intensive reading of a paper on Time Series Forecasting assisted by Multi-Modal Views (MMVs), where time series are visualized and then learned using computer vision (CV). Skimming includes: pattern recognition and classification of driving trajectories.

<!-- more -->

## 1 Multi-Modal Views Enhanced Large Vision Model for Long-Term Time Series Forecasting

Previous time series forecasting focused on directly using Transformers and LLMs for context analysis. Recently, large vision models (LVMs) have achieved notable success, leading to methods that convert time series data into image-like representations to leverage LVM capabilities for parsing latent information in time series, enabling trajectory prediction.

The current SOTA method for this approach is the VisionTS Model. This work is inspired by VisionTS, utilizing self-supervised MAE to reconstruct images via LVMs for time series forecasting.

![image-20251229122132113](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229122132113.png) Specifically, there are two models: one directly extracts trends using moving average, and the other adaptively extracts time series information.

First, the moving average method preprocesses time series data to extract trends and seasonal components. For trends, a Transformer + linear model can forecast trends, while seasonal components are forecasted via visual models.

For the adaptive model, time series are directly image-ized, input into a visual forecaster to predict seasonal components. The forward content is then reconstructed and reflected back into the time series, yielding the original seasonal time series. Subtracting the predicted seasonal component from the original time series gives the trend.

![image-20251229122850779](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229122850779.png)

Specifically, for LVM forecaster, a large image is divided into patches, some of which are masked, and the masked parts are predicted by $f_{\text{LVM}}$. For adaptive networks, an additional mask backcast is introduced, representing the part the model attempts to "retrace" or understand.

![image-20251229123110551](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229123110551.png)

**Step A (Left Figure):**
- **Input:** Left half of the image $\tilde{\mathbf{I}}_{\text{left}}$ (as a Look-back window).
- **Task:** Let the model predict the masked right half.
- **Output:** Obtain the predicted right image $\hat{\mathbf{I}}_{\text{right}} = f_{\text{vis}}(\tilde{\mathbf{I}}_{\text{left}})$.

**Step B (Right Figure):**
- **Input:** Right half of the image $\tilde{\mathbf{I}}_{\text{right}}$.
- **Task:** Let the model predict the masked left half.
- **Output:** Obtain the predicted left image $\hat{\mathbf{I}}_{\text{left}} = f_{\text{vis}}(\tilde{\mathbf{I}}_{\text{right}})$.

The reconstructed image $\hat{\mathbf{I}}^i$ will **biasedly** reflect the **periodic patterns** in the data. Since visual models excel at capturing textures and repetitive structures, they tend to ignore non-periodic trends.

## 2 A Driving-Style-Adaptive Framework for Vehicle Trajectory Prediction

> Wen, D. *et al.* A driving-style-adaptive framework for vehicle trajectory prediction.

Vehicle trajectories mainly include three types: Normal (normal driving), Conservative (cautious driving), and Aggressive (aggressive driving). This paper introduces a prior model of vehicle trajectory patterns to assist in trajectory prediction (Vehicle Trajectory Prediction).

![image-20251229110949273](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229110949273.png)

Specifically, the main process is as follows: first, historical trajectories are input into the network, and a gated network learns weights to obtain preliminary classification weights $w$ for the three driving modes. Additionally, a Degree Adaptation module learns the intensity, such as the aggressiveness level of the Aggressive mode. Finally, the trajectory is predicted based on $w$ and $n$.

![image-20251229111254767](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229111254767.png)

## 3 TrajMamba: An Efficient and Semantically Rich Pre-trained Model for Vehicle Trajectory Prediction via Joint Modeling of GPS and Road Perspectives

> TrajMamba: A pre-trained model for vehicle trajectory prediction that captures motion patterns through joint modeling of GPS and road perspectives.
> Liu, Y. *et al.* TrajMamba: An Efficient and Semantic-rich Vehicle Trajectory Pre-training Model. Preprint at https://doi.org/10.48550/arXiv.2510.17545 (2025).

For vehicle trajectories, there are two primary challenges: first, the points of interest (POIs) or specific destination locations along the trajectory, and second, the issue of missing intermediate points in real-world data. How to capture motion patterns of vehicles by combining GPS-derived destination points with trajectories while maintaining robustness to missing trajectory data is a problem that needs to be addressed.

As illustrated in the figure below, the trajectory points are represented as orange rhombus blocks. However, besides these points, the road network around the trajectory also contains other POIs (e.g., supermarkets, parks, etc.). Integrating the behavior of trajectories between these POIs with POI analysis to understand trajectory behavior is a task that requires resolution.

![image-20251229113424060](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229113424060.png)

The work consists of two parts. First, during full-trajectory processing, POIs and trajectories are input into a POI text encoder for contrastive learning, enabling the model to learn semantic representations that align closely with POIs, thereby embedding rich POI semantic information into the trajectory. Additionally, trajectories and road network data are input into a text encoder for contrastive learning to enable the trajectory to learn semantic information from the road network. Through this process, the model generates a trajectory embedding vector enriched with semantic information.

![image-20251229113611474](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229113611474.png)

On the right side of the image, knowledge distillation pre-training is performed. Specifically, trajectories are subjected to random masking to simulate missing trajectory points, corresponding to the use of a Mask Generator (leveraging the Mamba Block). The masked trajectory is then embedded using the fully trained model and compared with the fully trained results to minimize the loss, thereby continuously optimizing the accuracy of embeddings for missing trajectories.