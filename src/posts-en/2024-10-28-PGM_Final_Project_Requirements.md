---
layout: post
title: "Introduction to the Final Project on Probabilistic Graphical Models"
date:   2024-10-28
tags: [pgm]
comments: true
author: junedrinleng
toc: true
---

This note mainly explains the requirements for the final project  
<!-- more -->

**Data**: Spatial transcriptomics, including histopathological images and gene-spatial expression matrix  
**Tasks**: Bayesian network clustering of the expression matrix, Markov Random Field (MRF) image segmentation  
Recommended to use LDA

## 1 Clustering Task

**Theoretical Part**: Representation of LDA models, provide the inference and learning algorithm workflow of LDA, and detailed mathematical derivation (e.g., variational inference or Gibbs sampling formulas, parameter update formulas)  
No need to derive probability density functions in probability theory, ensure rigorous derivation, cite reference textbooks, literature, or web resources  
**Code Part**: Use LDA for clustering, visualize using physical coordinates  
Can use sklearn or gensim

## 2 Image Segmentation Task  
Use Markov Random Field (MRF) for histopathological image segmentation, where each pixel is an observation node, and image segmentation is to classify the hidden space nodes z  
**Theoretical Part**: Complete the representation of probabilistic graphical models, write prior probability, local conditional probability, posterior probability, provide the inference and learning methods used, derive the parameter derivation process and expressions  
**Programming**: Cannot use pre-built packages, only use basic operation libraries or image reading tools  
/think