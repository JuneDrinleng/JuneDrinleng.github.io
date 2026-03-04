---
layout: post
title: "Introduction to the final project of probability graphical model"
date: 2024-10-28
tags: [pgm]
comments: true
author:junedrinleng
toc: true
---

This note mainly explains and introduces the requirements for the final major assignment.
<!-- more -->

Data: Spatial transcriptome, including pathological images and gene-spatial expression matrix
Task: Bayesian network for image segmentation using expression matrix clustering and Markov random fields
It is recommended to use LDA

## 1 Clustering task

Theoretical part: representation of LDA model, process of model inference and learning algorithm of LDA, and detailed mathematical derivation (such as variational inference or Gibbs sampling formula, parameter update formula)
There is no need to deduce the probability density function in probability theory, ensure the rigor of the derivation, and indicate the reference materials, literature or webpage materials.
Code part: use LDA for clustering and physical coordinates for visualization
You can use sklearn or gensim

## 2 Image segmentation task
Markov random fields are used for pathological image segmentation. Each pixel is an observation order. Image segmentation is to segment the class of hidden space node z.
Theoretical part: Complete the representation of the probability graphical model, write the prior probability, local conditional probability, and posterior probability, give the inference and learning methods used, and give the parameter derivation process and expressions.
Programming: You cannot change packets, you can only use basic calculation libraries or image reading