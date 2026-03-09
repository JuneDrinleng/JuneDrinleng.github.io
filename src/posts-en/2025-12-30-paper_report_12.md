---
layout: post
title: "20251230 Literature Reading Notes"
date: 2025-12-30
tags: [paper]
comments: true
author: junedrinleng
toc: true
post_id: 2025-12-30-paper_report_12
source_lang: zh
source_title: "20251230文献阅读笔记"
title_key: literature_note
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.326Z"
source_hash: 31065ac8e4a2f46856281580706041588170a8165cd8fe09024bab80b52f94b4
---

This note continues to record the reading of NeurIPS 2025 Time Series papers, including a forecasting new form for time series segmentation, as well as the imaging content of a review on Single-Particle Tracking.

<!-- more -->

## 1 Timeperceiver: An Encoder-Decoder Framework for Generalized Time-Series Forecasting

> Lee, J. & Lee, H. TIMEPERCEIVER: An encoder-decoder framework for generalized time-series forecasting.

Traditional time-series models often focus on how to better optimize the encoded input to perform prediction and train the model. However, this treats prediction and training as separate or secondary concerns. The authors of this paper developed a TIMEPERCEIVER encoder-decoder forecasting framework and tightly integrated an effective training strategy. Experimental results also demonstrate that this architecture achieves SOTA performance.

![image-20251230094826997](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251230094826997.png)

The standard time-series forecasting paradigm is based on a pattern after signing, i.e., if a sequence has a total of 10 points, the information from the first 6 points is used to predict the information of the last 4 points. However, in this framework, the authors split the 10 points into two parts: L and J, where L is used for prediction data, J is the content to be predicted, and the split is generated through random splitting. Finally, the training uses L data to predict J data.

Specifically, the original time series is divided into several patches, then random split to obtain $X_L$ and $X_J$. $X_L$ is combined with indices and encoded, then serialized and input into the encoding. Meanwhile, the indices of the J part are also processed through the TPE+CPE module and Sequentialize, then input into the decoding block, combined with the encoding results for subsequent prediction, thereby enabling the prediction of $\hat{X_J}$

![image-20251230095211621](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251230095211621.png)

Github links: https://github.com/efficient-learning-lab/TimePerceiver

## 2 Synthetic Series-Symbol Data Generation for Time Series Foundation Models

> Wang, W., Wu, K., Li, Y. B., Wang, D. & Zhang, X. Synthetic Series-Symbol Data Generation for Time Series Foundation Models. Preprint at https://doi.org/10.48550/arXiv.2510.08445 (2025).

Past research on time-series analysis has made significant progress, yet challenges such as scarce and imbalanced training data still hinder their development. This paper develops a method for generating symbolic time-series data and mathematical formulas using contrastive learning. This is because the authors believe that sequence symbolic data generation and pre-training mechanisms have potential in overcoming data scarcity and improving task performance.

![image-20251230103023176](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251230103023176.png)

The premise of this approach is that time-series data is a low-dimensional sampling of complex systems, and complex systems essentially emerge through simple symbolic dynamics quantized. This bridges the gap between time-series data and symbolic representations.

![image-20251230103240032](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251230103240032.png)

Specifically, this paper includes two parts: data generation and symbolic learning of time-series. Data generation is achieved by sampling the time-series data through the model, then inputting it into the symbolic network to obtain the corresponding mathematical symbolic expression of the time-series, and finally generating the corresponding time-series using the symbolic expression.

On the model side, this is done by separately inputting the time-series and symbolic expressions into the model for contrastive learning.

## 3 Review on Machine Learning for Single-Particle Tracking: Methods, Challenges, and Biophysical Insights (Detailed Reading)
> Zhang, C. *et al.* Review of machine learning for single-particle tracking: Methods, challenges, and biophysical insights. *Chem. Biomed. Imaging* https://doi.org/10.1021/cbmi.5c00146 (2025) doi:[10.1021/cbmi.5c00146](https://doi.org/10.1021/cbmi.5c00146).

### 3.1 Background and Summary

Single-Particle Tracking (SPT) has become a mature tool for monitoring the motion of individual molecules or particles in living cells or other biological systems. Traditional methods for analyzing SPT data involve fitting Mean Squared Displacement (MSD) or decomposing trajectories into simple parameters using Hidden Markov Models (HMM), which are all reliant on prior knowledge.

In contrast, machine learning can automatically extract meaningful features from trajectory data, often derived from algorithms that operate in high-dimensional, noisy spaces—something that human analysts often struggle to achieve.

Currently, the application of machine learning in single-particle tracking includes particle detection, trajectory reconstruction, diffusion pattern classification, segmentation of motion states, high-precision 2D or 3D localization, noise suppression, and uncertainty quantification to enhance analytical reliability.

### 3.2 Imaging Techniques for Single-Particle Tracking

Imaging techniques for single-particle tracking are primarily divided into two approaches: 2D imaging and 3D imaging.

#### 3.2.1 2D-SPT

First, we examine 2D-SPT. The most common microscopes include epifluorescence microscopy (EFM), total internal reflection fluorescence microscopy (TIRFM), highly inclined and laminated optical sheet (HILO) microscopy, and light sheet fluorescence microscopy (LSFM).

![image-20251230110444247](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251230110444247.png)

The most common fluorescence microscope is widely used, but its limitation lies in the relatively low signal-to-noise ratio (SNR) due to its large excitation volume, which restricts single-molecule localization accuracy.

To overcome the low SNR of conventional fluorescence microscopes, TIRFM was developed. It achieves this by creating an evanescent excitation field at the interface between media with different refractive indices. **Spatial localization accuracy is in the tens of nanometers range, and temporal resolution is in the millisecond range.** However, its limitation is inherently constrained imaging depth.

HILO microscopy circumvents the axial limitations of TIRFM by using a slightly tilted excitation beam positioned just below the critical angle. It employs a thin excitation sheet to penetrate deeper into the sample (~10 μm).

Building on this, light sheet fluorescence microscopy (LSFM) further enhances imaging depth and contrast by illuminating the sample with a laterally oriented optical sheet, clearly separating excitation and detection paths (Figure 1b).

All these are 2D imaging techniques, yielding 2D translational trajectories of single particles, but they cannot detect axial motion (z-direction), potentially misinterpreting three-dimensional particle dynamics as restricted lateral motion or reduced diffusion rates.

#### 3.2.2 3D-SPT

Since 2D-SPT faces the issue of projecting three-dimensional particle motion onto two dimensions, developing 3D SPT methods has now become widely studied.

The most straightforward idea is to directly capture the entire image stack and reconstruct the 3D trajectory—image-based tracking. By stacking a series of 2D images to form a 3D image and linking particle positions across frames, 70 axial information points are obtained. As shown in Figure a, this approach leads to poor temporal resolution because the entire image stack must be captured each time.

![image-20251230111351417](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251230111351417.png)

To overcome this challenge, 3D trajectory reconstruction algorithms based on the point spread function (PSF) have been applied. Specifically, by using a cylindrical lens to introduce controlled optical aberrations, an asymmetric PSF with shape variations along the axial position is generated. Then, the axial position is reconstructed based on the changes in the PSF shape. Existing studies include DH-PSF, SLMs, etc. This method can achieve (25 nm localization accuracy in the x-y scale, 50 nm localization precision in the z-direction). The limitation is the increased complexity of optical components due to higher brightness illumination (calibration challenges).

> Upon insertion of the cylindrical lens, the beam experiences unequal convergence along the two orthogonal axes, causing the PSF to appear as ellipses of different orientations and eccentricities above and below the focal plane. This shape variation enables nanometer-scale inference of the emitter’s axial position, thereby achieving high-precision 3D localization (Figure 2b).

Another approach is biplane imaging, which uses two channels: a beam splitter and a prism. When a particle moves in the z-direction, the relative position and intensity ratio of the image points change, allowing the z-position information to be calculated (robust). Under good SNR conditions, millisecond-level spatial accuracy is achievable.

The limitations of these approaches are the complexity of optical design and the trade-off between photon intensity and imaging depth.

**In addition to the aforementioned image-based 3D reconstruction methods for SPT trajectories,** closed-loop feedback 3D-SPT improves axial tracking range and temporal resolution by real-time adjustment to keep the particle within the imaging volume. These methods can be divided into patterned excitation and improved detection methods, each applicable. Specific details are referenced in the figure below, and the optical system is not elaborated further in this text.

![image-20251230112646589](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251230112646589.png)
