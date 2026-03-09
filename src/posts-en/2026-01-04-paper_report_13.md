---
layout: post
title: "20260104 Literature Review Notes"
date: 2026-01-04
tags: [paper]
comments: true
author: junedrinleng
toc: true
post_id: 2026-01-04-paper_report_13
source_lang: zh
source_title: "20260104文献阅读笔记"
title_key: literature_note
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.329Z"
source_hash: 2c5e5183fa4afda3b3090c83056f7dc9723c8c2bb9651050805522f37f03c683
---

This note continues to record the machine learning algorithm portion of the review paper on Single-Particle Tracking that was not completed from the detailed reading on December 30, 2025.

<!-- more -->

## 1 Machine Learning Review for Single-Particle Tracking: Methods, Challenges, and Biophysical Insights (Detailed Reading)

### 1.1 Machine Learning-Assisted Single-Particle Localization

Traditional detection methods (e.g., intensity thresholding and centroid detection) and tracking methods (e.g., frame-to-frame linking via nearest-neighbor or Kalman filtering) often struggle in noisy, crowded, and low-contrast live-cell imaging environments. These algorithms require careful parameter tuning for each dataset and tend to fail under low signal-to-noise ratio conditions, typically requiring significant user intervention.

In recent years, machine learning has experienced rapid development. This section will focus on how machine learning assists in particle localization and trajectory linking.

> Unlike traditional algorithms that rely on simple thresholding and centroid calculations, deep learning models can learn to recognize the visual characteristics of particles and distinguish them from noise or background directly from training data.

DNNs do not rely on traditional methods such as threshold setting or centroid calculation for particle localization, but instead directly learn image features of particles to extract them from background and noise.

The most common network layer in this field is CNN. A typical example is DeepTrack:

![image-20260104102743093](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104102743093.png)

By using convolutional layers to learn image features from images, its performance far exceeds traditional algorithms, especially in low signal-to-noise ratio and uneven illumination conditions—nanoscale particle localization accuracy.

In addition, CNNs can also effectively extract z-axis offset information from 2D images, enabling the reconstruction of 3D trajectories from 2D images:

![image-20260104103034852](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104103034852.png)

For example, after CNN-based NN learning, the offset displacement detected by the manager can obtain 3D trajectories of gold nanoparticles.

**In addition to more flexible feature extraction, another advantage of machine learning is its ability to denoise and enhance weak signals.**

The network acts as a beneficial nonlinear filter to remove background noise while preserving particle signals.

![image-20260104103244497](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104103244497.png)

For instance, in the case of S/N=1 shown in the figure, the noise obtained by convolution is still high, but the result is significantly reduced after smoothing with conv+FNN.

For algorithms in particle localization tasks, CNNs are generally used to extract candidate regions, although FNN or U-net can also be used to generate corresponding masks to assist in particle localization.

### 1.2 Machine Learning-Assisted Single-Particle Trajectory Linking

The challenge in trajectory linking lies in the fact that when particle localization points are close to each other, incorrect linking often occurs. Traditional trajectory linking algorithms such as nearest-neighbor linking or the Hungarian algorithm for minimizing gaps heavily depend on user-defined thresholds or predefined motion assumptions. These algorithms often encounter problems when particles move rapidly or exhibit irregular motion.

> Traditional tracking methods (such as nearest-neighbor linking or the Hungarian algorithm for minimizing gaps) depend heavily on predefined motion assumptions or user-specified thresholds (e.g., maximum displacement allowed per frame).

One solution is to refer to the data-driven approach of machine learning, utilizing, for example, LSTM in RNNs to learn the dynamic changes of particle motion, or relying on motion model priors such as Brownian motion models. Additionally, networks can be trained on trajectory history to predict the most likely position of a particle at the next time step, using these predictions to assist in the next particle localization matching to achieve trajectory linking.

![image-20260104104904631](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104104904631.png)

For example, as shown in the figure, CNNs first analyze small image patches around each particle to extract image features, then use LSTM to learn the motion patterns of particles, ultimately achieving better trajectory linking compared to traditional tracking algorithms. By learning the motion features of particles, this algorithm can maintain a certain level of accuracy even at high particle densities.

### 1.3 Machine Learning-Assisted Trajectory Classification and State Recognition
After obtaining trajectories, a critical question is what information can be extracted from them. The two primary tasks are anomaly diffusion model identification and dynamics state segmentation.

We first examine Diffusion-Type Classification: Over the past few years, numerous stochastic dynamics models have been developed to describe deviations from Brownian motion, such as Brownian motion (normal diffusion), fractional Brownian motion (FBM), continuous-time random walk (CTRW), and Lévy walks (LW). Previously, identifying these models relied on TAMSD, VACF, PSD, and p-variation analysis. These methods perform well under ideal conditions and possess physical interpretability, but they depend on the stationarity and homogeneity assumptions of trajectories, making them vulnerable to noise, trajectory length, and dynamical heterogeneity.

Compared to traditional methods, machine learning approaches automatically extract data from trajectories, enabling them to better handle complex environments. An early approach involved manually extracting descriptive features from particle trajectories and feeding these features into NNs for pattern recognition. A particle is exemplified in this PNAS paper:

![image-20260104110113135](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104110113135.png)

Additionally, by introducing the concept of "diffusion fingerprint," authors established a unified feature representation for cross-system comparison and provided insights into the physical mechanisms governing particle motion.

In recent years, the growing power of machine learning has enabled the use of CNNs and RNNs to extract motion types from trajectories:

![image-20260104110326681](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104110326681.png)

> While classifying entire trajectories into diffusion types provides an initial understanding of molecular motion, diffusion behavior in real biological systems often exhibits pronounced spatiotemporal heterogeneity.

In reality, particles may display different diffusion behaviors at different time points, making accurate identification of these hidden diffusion behaviors essential.

Early trajectory analysis methods relied on Huang's approach to detect local changes, but sliding window methods' accuracy is constrained by noise and the choice of window size. Building on this, HMM methods provide a rigorous framework for identifying diffusion states. Traditional HMM methods depend on the specification of the number of states, leading researchers to develop Bayesian extensions of HMMs, such as VB-HMM, to reduce overfitting, enhance robustness, and incorporate Gaussian mixture models, etc.

Bayesian extensions offer greater model flexibility but still rely on probabilistic assumptions and require high computational costs. Some studies employ a two-step approach to identify diffusion states: segmenting trajectory data into short fragments, extracting statistical features, and classifying using methods like random forests or support vector machines. This strategy balances interpretability and the capabilities of established classifiers, proving effective in tasks such as detecting viral particle motion patterns or combining features from hidden Markov models.

Building on this, a series of trajectory analysis methods have been developed to address the aforementioned issues:

![image-20260104111020699](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104111020699.png)

For example, the RNN-based DL-MSS uses the Moment Scaling Spectrum (MSS), a local descriptor capturing high-order statistical features of particle trajectories, and feeds them into a two-layer LSTM for sequence classification.

Other methods include NOBIAS, which first segments fast diffusion, slow diffusion, and three states for pattern recognition, as well as CNN-based approaches modeling SPT as a continuous process without imposing topic boundaries, and methods like deepsees, etc.

![image-20260104111331291](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104111331291.png)

### 1.4 Inferring Molecular States and Stochastic Dynamics

Many biological processes depend on molecular state transitions, and SPT technology can effectively capture these states: characterizing state transitions involved in processes such as ligand-receptor binding and dissociation, complex assembly, active transport, or conformational changes.

A key capability of SPT is resolving heterogeneity and transition behaviors that are easily masked by averaging.

Traditional MSD methods face issues of subjective interpretation, limited lag time (not exceeding 20% of total length), requiring longer trajectories, and poor performance under low SNR conditions.

![image-20260104112258967](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104112258967.png)
