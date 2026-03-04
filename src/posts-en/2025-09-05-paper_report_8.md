---
layout: post
title: "20250905 Literature Reading Notes"
date: 2025-09-05
tags: [paper]
comments: true
author:junedrinleng
toc: true
---

This note mainly records the arxiv articles recommended by hugging face today and several articles recommended on alphaXiv, all of which are related to self-supervision.

<!-- more -->

## 1 DINO v3, a self-supervised visual basic model

> ref: O. Siméoni *et al.*, DINOv3 (2025), , doi:[10.48550/arXiv.2508.10104](https://doi.org/10.48550/arXiv.2508.10104).

This model has good performance in many computer vision tasks. It introduces a new method Gram anchoring during the training process, which can effectively solve the problem of dense feature maps degrading during the training process.

The first is the linear detection result. DINO prompts more than 20 points than the traditional WSL algorithm:
![image-20250905102727736](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905102727736.png)

And under the same computational overhead, the DINO network has higher accuracy (low power consumption):

![image-20250905102810666](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905102810666.png)

What is shocking is that the DINO network can better understand your tags and find similar images in images that are close to your tags, as shown in the following figure:

![image-20250905102913741](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905102913741.png)

It is not difficult to find that, taking the orange in the lower left corner as an example, the red cross selects the sentence, so in the dense feature fig, DINO marks in green the colors that match the shape and color characteristics of the orange. The closer the color is, the more obvious the color is. The same goes for other fruits.

However, as the number of iterations increases, in general, the dense feature fig will gradually produce distortion:
![image-20250905103507661](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905103507661.png)

This article introduces a gram method to avoid feature map distortion caused by multiple iterations:

![image-20250905103520519](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905103520519.png)

By using the previously trained model as the teacher model and the newly trained model as the student model, comparative learning between the two is similar to knowledge distillation, so that the excellent performance of the previous model on the dense feature fig can be retained.  

The DINO network can not only be used to obtain dense feature fig, but can also be used for segmentation tracking of videos and improvement of remote sensing data resolution.

## 2 Multi-view 3D point tracking

> ref: F. Rajič *et al.*, Multi-view 3D point tracking (2025), , doi:[10.48550/arXiv.2508.21060](https://doi.org/10.48550/arXiv.2508.21060).

According to the author, it is the first data-driven 3D multi-angle point tracking algorithm. This algorithm can better solve the occlusion and blur problems in traditional single-view point tracking. At the same time, compared with other multi-angle tracking algorithms, this algorithm requires fewer cameras (4 is enough).

The structure of the entire network is shown in the figure below:

![image-20250905111258906](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905111258906.png)

As you can see, there are a total of three network inputs here. One is the points that need to be tracked (that is, query points), and the other is the normal multi-angle video image information (corresponding to the RGBs in the picture). The final internal parameters Instrinsics and external parameters Extrinsics are the parameters and orientation of the camera.

For image information, feature maps can be obtained directly through feature extraction CNN, and then the depth information can be obtained by combining the image information with the internal and external information. The feature information and depth information can be combined to obtain a 3D feature point cloud, and then KNN can be used to learn the remaining point features near the query point to predict the point trajectory.

![image-20250905111629409](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905111629409.png) It can be seen that this algorithm has better accuracy than other tracking algorithms

## 3 STOXLSTM: A Stochastic Extended Long Short-Term Memory Network for Time Series Forecasting

> ref: Z. Wang, Y. Li, L. Zan, Z. Gong, M. Zhu, StoxLSTM: A stochastic extended long short-term memory network for time series forecasting (2025), , doi:[10.48550/arXiv.2509.01187](https://doi.org/10.48550/arXiv.2509.01187).

Before that, let's review the most common lstm model:

![image-20250905115515243](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905115515243.png)

First, the input at the current moment and the hidden state at the previous moment are used as sigmoid to obtain three forgetting, input gates, and output gates, and tanh is used to obtain candidate memory alternatives. The forgetting gate result is combined with the memory item of the previous moment, the input gate is combined with the candidate memory alternative to obtain the candidate memory, and the memory of the previous moment is combined with the result of the forgetting gate to obtain the memory of the current moment. By the way, the memory and output gate of the current moment are used to obtain the hidden state of the current moment.

On this basis, xlstm adds two units: mlstm and slstm:

![image-20250905120153225](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905120153225.png)

Both introduced exponentials to replace the original direct sigmoid, and introduced covariance matrices in mlstm to assist in updating hidden variables and memory items.

Correspondingly, StoxLSTM, which improves xLSTM, also improves sLSTM and mLSTM respectively, introducing randomness:

![image-20250905120420662](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905120420662.png)

The randomness here is achieved by the latent feature variable $z_t$ being a normal distribution