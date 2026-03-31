---
layout: post
title: "Multimodal Generative AI Notes 2"
date: 2026-03-26
tags: [Multimodal Generative AI]
comments: true
author: junedrinleng
toc: true
---

These notes mainly record how other modalities are represented in multimodal foundation models and how they work.

<!-- more -->

## Replace CNN with Self-Attention

CNNs mainly focus on local information, while transformers can model pairwise relationships across the entire input.

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/1774485931758.png)

Hand-crafted image features include edges, gradients, and similar cues. This approach relies heavily on manual design and therefore carries a strong inductive bias. Because the features are fixed in advance, the model can only operate within those human-designed features and has very little freedom.

CNNs focus on **locality** (neighboring pixels are more correlated) and **translation invariance** (moving an object does not change recognition). Their inductive bias is strong: CNNs naturally assume that "relationships between nearby pixels matter more." At the same time, the same convolution kernel slides across the entire image.

Transformers have a different bias: **global pairwise interaction** plus **content-based reasoning**. Through the attention mechanism, any two positions can interact directly. This makes their inductive bias **weaker but more flexible**. Relatively speaking, they **do not impose a locality constraint**: they do not assume adjacent elements are more important, position 1 can directly attend to position 1000, and structural relationships must be **learned from data**. The model decides for itself what deserves attention.

## The Effect of Network Depth

Does making a network deeper always make it better?

Kaiming He and others showed at CVPR 2016 that simply increasing network depth does not necessarily improve training. In some cases, a deeper network even has a higher training error (for example, a 50-layer network can have higher error than a 20-layer one). What ResNet does is not just make the network deeper, but also make it learnable.

The degradation caused by depth comes from poor optimization directions during initialization, and gradient descent cannot fix that effectively on its own.

This does not mean CNNs have now been completely replaced by transformers. Some of the latest CNN architectures can achieve performance close to transformers, **but they usually require larger amounts of data**.

### ViT and Its Training Methods

The simplest idea is to split an image into patches and feed them into a transformer as a sequence.

![image-20260326090555591](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260326090555591.png)

Then there is BeIT, which is inspired by BERT:

The encoder is used to learn semantic information, while the decoder is responsible for reconstruction, because the masked regions contain richer semantic information.

![image-20260326090807753](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260326090807753.png)

MAE masks out 70% of the image. Early attempts following BERT-style masking used only around 15%, but that did not work. The reason is that images contain a lot of redundant information, so masking only a small portion makes the task too easy, and the learned representation distribution is not complex enough.

![image-20260326090942066](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260326090942066.png)

In essence, an image is a relatively sparse information carrier, and its information density is not very high.

## The Emergence of CLIP

Why, then, are transformers still used more often than CNNs in multimodal large models? A major reason is **the emergence of CLIP**.

![image-20260326091441676](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260326091441676.png)

CLIP computes cosine similarity between text and images, hoping that the similarity matrix has its highest values on the diagonal. Because the whole task is weakly supervised, the dataset is relatively easy to obtain. Once this network is trained, matching text and images becomes straightforward.

Given an image, we can use the image encoder to obtain its representation, generate textual labels for the image, feed those labels into the text encoder, and then compute their similarity to the image encoder output. This makes it possible to optimize the model toward correct labels quite effectively.

This framework is very clever because it enables almost zero-shot learning: one set of parameters can be applied broadly, rather than requiring task-specific fine-tuning as in ResNet-style approaches.

**So why does CLIP work so well?**

Because CLIP has a very large number of parameters and is trained on a very large dataset:

![image-20260326092004619](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260326092004619.png)

![image-20260326092019161](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260326092019161.png)

OpenAI's CLIP performs very well and supports fine-grained distinctions. For example, if you input photos of Liu Yifei and Gao Yuanyuan, the correlation between "Liu Yifei" and a photo of Liu Yifei should certainly be higher than the correlation between "Liu Yifei" and a photo of Gao Yuanyuan. Because OpenAI has such a high-quality CLIP model, it also becomes easier to obtain data labels, which in turn further improves model performance.

However, CLIP does not really understand relationships between words. For example, it may know the words in "grass growing in a cup" and "a cup on top of grass," but it cannot reliably distinguish the relationships among those words.

Another issue is that CLIP relies on very large batch sizes to learn fine-grained distinctions. A batch size of 32,000 is difficult for most people outside large industrial labs. Also, the examples grouped into a batch may already be highly related to one another (for example, all male celebrities), which makes it easier to learn harder fine-grained tasks.

How should multimodal information be handled?

One simple approach is to directly concatenate the modalities. Another approach is closer to CLIP: compute similarity between the modalities, which is what people refer to as **cross-modal** learning.

![image-20260326093219800](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260326093219800.png)
