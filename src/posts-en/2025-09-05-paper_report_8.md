---
layout: post
title: "20250905 Literature Reading Notes"
date:   2025-09-05
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

This note mainly records the arxiv articles recommended by hugging face and several articles from alphaXiv today, all of which are related to self-supervised learning content.

<!-- more -->

## 1 DINO v3, A Self-Supervised Visual Foundation Model

> ref: O. Siméoni *et al.*, DINOv3 (2025), , doi:[10.48550/arXiv.2508.10104](https://doi.org/10.48550/arXiv.2508.10104).

This model demonstrates excellent performance in various computer vision tasks. During training, it introduces a new method called Gram anchoring, which effectively addresses the issue of dense feature maps degradation (degeneration).

First, the linear probing results show that DINO outperforms traditional WSL algorithms by more than 20 points:
![image-20250905102727736](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905102727736.png)

Under the same computational cost, DINO achieves higher accuracy (low power consumption):

![image-20250905102810666](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905102810666.png)

Surprisingly, the DINO network can effectively understand your labels and find similar images in the dataset, as shown in the following figure:

![image-20250905102913741](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905102913741.png)

As observed, taking the orange in the lower-left corner as an example, the red cross-selected sentence is matched with dense feature fig, where DINO highlights features matching the orange's shape and color with green. The closer the match, the more prominent the color. This applies to other fruits as well.

However, as the number of iterations increases, dense feature figs typically suffer from distortion:
![image-20250905103507661](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905103507661.png)

This paper introduces a Gram-based approach to prevent feature map distortion caused by multiple iterations:

![image-20250905103520519](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905103520519.png)

By using a pre-trained model as the teacher model and the newly trained model as the student model, they perform contrastive learning similar to knowledge distillation to retain the excellent performance of the teacher model on dense feature figs.

The DINO network is not only applicable for obtaining dense feature figs but also for video segmentation tracking and improving resolution in remote sensing data.

## 2 Multi-View 3D Point Tracking

> ref: F. Rajič *et al.*, Multi-view 3D point tracking (2025), , doi:[10.48550/arXiv.2508.21060](https://doi.org/10.48550/arXiv.2508.21060).

According to the authors, this is the first data-driven 3D multi-angle point tracking algorithm. This algorithm effectively addresses issues like occlusion and blurriness in traditional single-view point tracking. Compared to other multi-angle tracking algorithms, it requires fewer cameras (only 4 are needed).

The overall network structure is shown in the following figure:

![image-20250905111258906](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905111258906.png)

As shown, the network input consists of three components: the points to be tracked (query points), normal multi-angle video image information (corresponding to RGBs in the image), and finally, the intrinsic parameters (Instrinsics) and extrinsic parameters (Extrinsics) of the camera, which represent camera parameters and orientation information.

The image information can be directly extracted using a CNN to obtain feature maps. Combining the image information with intrinsic and extrinsic parameters yields depth information. By integrating feature information with depth information, 3D feature point clouds are generated. Then, KNN is used to learn query point features to predict point trajectories.

![image-20250905111629409](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905111629409.png) As shown, this algorithm outperforms other tracking algorithms in terms of accuracy.

## 3 STOXLSTM: A Randomly Extended Long Short-Term Memory Network for Time Series Prediction
> ref: Z. Wang, Y. Li, L. Zan, Z. Gong, M. Zhu, StoxLSTM: A stochastic extended long short-term memory network for time series forecasting (2025), , doi:[10.48550/arXiv.2509.01187](https://doi.org/10.48550/arXiv.2509.01187).

Before proceeding, we first review the standard LSTM model:

![image-20250905115515243](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905115515243.png)

First, the current input and previous hidden state are processed through a sigmoid function to obtain three gates: forget gate, input gate, and output gate. A tanh function is used to generate the candidate memory. The forget gate result is combined with the previous memory to produce the candidate memory, which is then multiplied by the input gate and candidate memory to update the memory. The current memory is obtained by combining the updated memory with the previous memory and forget gate result. Meanwhile, the current memory is multiplied by the output gate to obtain the current hidden state.

XLSTM extends this by introducing two additional units: mLSTM and sLSTM:

![image-20250905120153225](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905120153225.png)

Both units replace the direct sigmoid function with exponentials and incorporate a covariance matrix in mLSTM to assist in updating hidden variables and memory items.

Similarly, StoxLSTM further improves XLSTM by introducing stochasticity to both sLSTM and mLSTM:

![image-20250905120420662](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905120420662.png)

The stochasticity is implemented through the hidden feature variable $ z_t $, which follows a normal distribution.