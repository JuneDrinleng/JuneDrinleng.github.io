---
layout: post
title: "PINN Basics Notes"
date: 2025-03-12
tags: ["ML&DL"]
comments: true
author: junedrinleng
toc: true
post_id: 2025-03-12-PINN_notes
source_lang: zh
source_title: "PINN基础笔记"
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.222Z"
source_hash: 57a4ebc3b5241d968e51cb5f6111ed87bd07e214fdbcdf5cae0e87742cdbe905
---

This note mainly introduces physics-informed neural networks (physics informed neural network), including basic concepts and a simple PyTorch implementation.
<!-- more -->

## 1 Research Background

Previously, describing complex multiscale system dynamics often involved solving partial differential equations (PDEs) numerically using finite difference, finite element, spectral, or meshless methods.

These traditional approaches face high costs and are unable to address missing, intermittent, or noisy boundary conditions.

The advantages of deep learning lie in the automatic selection of data features, but its black-box nature leads to physical inconsistencies or untrustworthiness (resulting in poor generalization ability).

Existing approaches can be roughly categorized into three types:

1. Small data + complete understanding of all physical knowledge
2. **Moderate data type, but missing some parameter values or terms in the PDEs**
3. Large data — fully data-driven, containing no physical knowledge

## 2 Advantages of PINN

2.1 Handling imperfect models and noisy data

2.2 Strong generalization ability in small data domains

2.3 Better interpretation of deep learning and quantification of uncertainty

2.4 Handling high-dimensional data

## 3 How to Embed Physics — Observation and Induction

1. Sufficient data can contain all the dataset for the learning task — ideal scenario (facing data collection costs)
2. Solving equations to obtain solution expressions, designing input operations based on expressions, but facing difficulties in equation solving
3. Embedding PDEs into the neural network loss function — controlling the training process of network parameters between inputs and outputs, maintaining a certain physical relationship with input variables (using automatic differentiation)

## 4 PyTorch Implementation

![image-20240927102511146](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240927102511146.png)

The equations here are arbitrarily written, with the second equation being the boundary condition.

First, converting 2D to 1D:

![image-20240927102835709](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240927102835709.png)

Then designing the gradient computation part:

![image-20240927102934822](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240927102934822.png)

order is the order of the derivative

Next, building the loss function based on the above two equations:

![image-20240927103448178](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240927103448178.png)

![image-20240927104444975](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240927104444975.png)

## 5 Applications and Limitations of PINN

![image-20250312102627371](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250312102627371.png)
