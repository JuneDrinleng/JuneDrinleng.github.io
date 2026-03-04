--- 
layout: post
title: "20260104 Literature Reading Notes"
date: 2026-01-04
tags: [paper]
comments: true
author: junedrinleng
toc: true
--- 

This note continues the previously uncompleted machine learning algorithm part of the intensive December 30, 2025 review on single particle tracing.<!-- more -->



# # 1 Machine Learning Overview of Single-Particle Tracking: Methods, Challenges, and Biophysical Insights (Intensive Reading)

# # # 1.1 Machine Learning Assisted Single Particle Positioning

Traditional detection methods (e.g., intensity thresholding and centroid finding) and tracking methods (e.g., interframe linking via nearest neighbor or Kalman filtering) often struggle in noisy, crowded, and low-contrast living cell imaging environments.These algorithms require careful parameter tuning of each dataset and are prone to failure under low SNR conditions, often requiring extensive user intervention.

Machine learning has evolved rapidly in recent years, and this section will focus on how machine learning assists particle positioning and trajectory linking

&gt; Unlike traditional algorithmsthat rely on simple thresholding and centroid calculations, deep learning models can learn to recognize the visual characteristics of particles and distinguish them from noise or background directly from training data.

The DNN is not like the traditional threshold setting or centroid calculation in particle positioning, but directly learns the image characteristics of the particles and extracts them from the background and noise.

The most common in this area is the network layer of CNNs, a typical example is DeepTrack:

! [image-20260104102743093] (https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104102743093.png)

Learning image features from images through convolutional layers is far superior to traditional algorithms, especially in the case of low signal-to-noise ratios and uneven illumination - nanoscale particle positioning accuracy.

In addition, the CNN is also able to better extract the z-axis offset information in the two-dimensional image, and then reconstruct the 3d trajectory from the two-dimensional image:

! [image-20260104103034852] (https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104103034852.png)

For example, 3D gold nanoparticle trajectories can be obtained after CNN-based NN learning by detecting the offset of the manager.

* * In addition to being more flexible in feature extraction, another bit of machine learning is his ability to reduce noise and enhance weak models. * *

The network is an advantageous nonlinear filter to filter out the background morning and preserve the particle signal

! [image-20260104103244497] (https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104103244497.png)

For example, in the case where S/N = 1 is also shown in the figure, the noise obtained by convolution is still very high, but the resulting noise is much weakened under the smoothing of conv + FNN.

For the algorithm of these particle positioning tasks, the selected area is usually extracted through CNN. Of course, FNN or U-net is also used to generate the corresponding mask to assist particle positioning.

# # # 1.2 Machine Learning Assisted Single Grain Trajectory Linking

The difficulty of trajectory linking is that the wrong chain often occurs when the particle anchor point is closer to other anchor points.Traditional trajectory-linking algorithms, such as recent old or Hungarian algorithms that minimize gaps, rely on user-set threshold a priori.However, these algorithms often cause problems when the particles move faster or have no regularity.

> Traditional tracking methods (such as nearest-neighbor linking or the Hungarian algorithm for minimizing gaps) depend heavily on predefined motion assumptions or user-specified thresholds (e.g., maximum displacement allowed per frame).

One way to solve the problem is to refer to the data-driven thinking of machine learning, use the LSTM in RNN, for example, to learn the dynamic changes of particle movement, and even rely on the motion model a priori such as Brown's motion model. You can also predict the most likely location of particles at the next moment based on the trajectory history training network, and use these predictions to assist the next step of particle positioning matching to achieve trajectory linking.

! [image-20260104104904631] (https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104104904631.png)

For example, as shown, the CNN first analyzes the small image patches in which each particle is located to resolve the image features, and then uses the LSTM to learn the particles.In the end, compared to the traditional trajectory linking algorithm, the sub-motion performance can achieve the trajectory linking well.By learning the motion characteristics of the particles, the algorithm can guarantee a certain degree of accuracy even if the particle density is high.

# # # 1.3 Classification and state recognition of machine learning-assisted trajectories

After obtaining the trajectory, an important question is what information can be extracted from the trajectory. The two main tasks are abnormal diffusion model recognition and dynamic state segmentation.

Let's start with Diffusion-Type Classification: Over the past few years, a number of stochastic dynamics models have been developed to describe deviation from Brownian motion (normal diffusion), fractional Brownian motion (FBM), continuoustime random walk (CTRW), and Le ́ vy walks (LW). Previous identification of these models relied on TAMSD, VACF and PSD, as well as p-variation analysis.These methods perform well under ideal conditions and are also physically interpretable, but they rely on trajectoriesStationarity and homogeneity assumptions, which lead to their vulnerable to noise, trajectory length, and kinetic heterogeneity.

Compared with traditional methods, machine learning methods automatically extract data from trajectories, which means that they can better cope with complex environments.An early approach was to first manually extract the descriptive features from the particle trajectory, and then put these features into NN for pattern recognition. A particle is this PNAS:

! [image-20260104110113135] (https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104110113135.png)

In addition, by introducing the concept of “diffusion fingerprints,” the authors established a unified representation of features that support cross-system comparisons and provide insights into the physical mechanisms that control particle motion.

In recent years, the increasing power of machine learning has also made it possible to use CNNs and RNNs to extract motion types from trajectories.

! [image-20260104110326681] (https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104110326681.png)

> While classifying entire trajectories into diffusion types provides an initial understanding of molecular motion, diffusion behavior in real biological systems often exhibits pronounced spatiotemporal heterogeneity.

But in fact, particles may exhibit different diffusion behaviors at different time nodes, so it is necessary to accurately identify these hidden diffusion behaviors.

Early trajectory analysis methods relied on the Huang Chuan method to detect local changes, but the accuracy of the sliding window method was limited by noise and the choice of sliding window size.Based on this, the Hmm methodology provides a rigorous boxTo identify the diffusion state, the traditional Hmm method relies on the designation of the number of states. On this basis, the researchers developed Bayesian extended Hmm such as VB-HMM, etc., reduced overfitting to increase morning robustness, and introduced the Gaussian mixture model, etc.

Bayesian extensions provide greater model flexibility but still rely on probabilistic assumptions and are computationally demanding.Some studies use a two-step approach to identifying diffusion states: segmenting trajectory data into short pieces, extracting statistical features, and categorizing them using methods such as random forests or support vector machines.This strategy balances interpretability with the ability of established classifiers and is effective in tasks such as detecting viral particle motion patterns 100 or combining features from hidden Markov models.

On this basis, a series of trajectory analysis methods were developed to solve the above problems:![image-20260104111020699](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104111020699.png)

For example, RNN-based DL-MSS uses Moment Scaling Spectrum (MSS), which is a local descriptor that captures the high-order statistical characteristics of particle trajectories and inputs them into a two-layer LSTM for sequence classification.

There are also NOBIAS that perform pattern recognition by segmenting three states of fast diffusion, first, and slow diffusion, and methods that use CNN to model SPT as a continuous process without imposing thematic boundaries, as well as the deepsees method, etc.

![image-20260104111331291](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104111331291.png)

### 1.4 Inferring molecular states and stochastic dynamics

Many biological processes often rely on dynamic state transitions of molecules, and SPT technology can capture this state very well: characterizing the state transitions involved in these processes, such as binding and dissociation between ligands and receptors, assembly into complexes, active transport, or conformational changes.

A key capability of SPT is to resolve heterogeneity and switching behavior, information that is easily obscured by averages.

The problem with the traditional MSD method is the subjectivity of manual interpretation, the lag time does not exceed 20% of the total length, the dependence on longer trajectories, and it is also poor under low signal-to-noise ratio conditions.

![image-20260104112258967](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104112258967.png)