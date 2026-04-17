---
layout: post
title: "Multimodal Generative AI Notes 4"
date: 2026-04-16
tags: [Multimodal Generative AI]
comments: true
author: junedrinleng
toc: true
---

These notes mainly review generative models — in particular multimodal generative large models — as a mid-course summary.

<!-- more -->

## 1 Generative Models Fundamentally Fit Data Distributions

Generative models typically have a much wider output space than the range of their input data. The current solution to overfitting is to increase the amount of data, and there is still a large body of work addressing the overfitting problem.

![image-20260416080958732](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260416080958732.png)

All generative models carry some prior assumptions. For example, the prior assumption of next-token prediction in autoregression is that the current token is conditionally dependent on the preceding tokens. Setting these prior assumptions introduces certain biases. What models learn is not the laws of the world, but a representative encoding of the finite existing data shaped by human-defined priors — yet this does not mean the models themselves are invalid.

Deep Learning at its core performs representation learning:

![image-20260416081543319](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260416081543319.png)

For generative models, almost everything in the world follows a Gaussian distribution. A generative model therefore samples from a Gaussian distribution and then maps those samples back to the data distribution of the original dataset:

![image-20260416081740926](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260416081740926.png)

Even though the goal is always to fit the data distribution, different network designs may not share the same objective function:

![image-20260416081912702](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260416081912702.png)

The advantage of generative models is that they only need to connect input and output information. Discriminative models, by contrast, must compress or downsample, meaning the input information is always richer than the output.

For diffusion models:

![image-20260416083201558](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260416083201558.png)

The forward (noising) process artificially adds noise to transform the data into a Gaussian distribution, while the reverse (denoising) process is performed by the model:

![image-20260416083252444](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260416083252444.png)

A similar approach is **Flow Matching**. Flow Matching computes an intermediate state — or "velocity" — between two data distributions (whereas diffusion models predict noise):

![image-20260416083406288](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260416083406288.png)

The limitation of Flow Matching is that it is not well-suited for very high-resolution tasks; diffusion models currently hold an advantage for high-resolution generation.

## 2 Unified Generative Models

"Unified" here means doing both understanding and generation simultaneously. For humans, understanding text is slower than understanding images, so a unified approach is needed for a more end-to-end implementation.

Autoregressive models can produce images of at most 512×512 resolution and are not well-suited for image generation.
