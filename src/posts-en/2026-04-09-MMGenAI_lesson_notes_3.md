---
layout: post
title: "Multimodal Generative AI Notes 3"
date: 2026-04-09
tags: [Multimodal Generative AI]
comments: true
author: junedrinleng
toc: true
---

These notes mainly record other common model paradigms in multimodal large models. Since autoregressive methods are not well-suited for the multimodal domain, alternative approaches beyond autoregression have emerged.

<!-- more -->

## Why Autoregressive Models Fall Short

If we treat each of the 256 possible values of every image pixel as a classification problem, the computation becomes intractable. A 1024×1024 image would have 3 million sub-pixels:

![image-20260409081251537](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260409081251537.png)

This is because the information density of adjacent pixels in an image is much lower than that of words in text, leading to enormous computational cost.

Although autoregression is mathematically clean, words do not naturally share structured feature relationships with one another, making direct clustering and unsupervised learning difficult.

## VAE Model

A VAE (Variational Autoencoder) essentially takes a lower bound on the data, reducing the density of irrelevant information.

The simplest approach is to use a loss function for reconstruction:

![image-20260409081756794](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260409081756794.png)

The reconstructed image tends to be blurrier than the original — this is an inherent limitation of MSE loss. With this representation, a linear layer can be used to classify features.

One downstream task is image generation. The reason VAE is used instead of methods like SimCLR is that the latter captures semantic information from images, but semantic information alone is insufficient to reconstruct an image.

To enable VAE to generate images, we want to map x into a known space rather than a random one. For VAE, this means compressing z into a Gaussian distribution:

![image-20260409083020285](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260409083020285.png)

Operating in latent space is more efficient than using autoregressive methods directly. For example, if the image changes, direct training would require re-training the encoder as well, whereas with VAE only the decoder portion needs to be trained.

## Generative Adversarial Networks

Adversarial, at its core, means opposition. **Generative Adversarial Networks (GANs)** do not directly fit a probability distribution; instead, they employ an adversarial approach — an "adversarial game" — to train the model:

![image-20260409083554218](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260409083554218.png)

GANs are no longer widely used today. GANs were published in 2014 and remained in use until around 2021, but were subsequently abandoned. The reason is that GAN training is tricky: two models must be trained simultaneously, and if one model goes wrong during training, even a low loss does not guarantee that the final result is correct:

![image-20260409084050000](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260409084050000.png)

Looking at these two curves alone — one decreasing and the other increasing — does not tell us whether the outcome is actually good. In addition, the constant dynamic competition between the two models makes training unstable. Furthermore, training two models at once means that scaling up requires training both simultaneously, resulting in low data efficiency and difficulty in scaling.

## Diffusion Models

![image-20260409085423186](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260409085423186.png)

We move from x toward z. The endpoints of this path are x and z, and every point along the path corresponds to an interpolation between them. The task is then to train a neural network to learn this process. During learning, a conditioning interface is added for navigation, guiding the generation of desired content.

The earliest diffusion models added and removed noise directly on images, but this is inefficient. Compared to the VAE approach mentioned earlier, operating in latent space is more efficient for training and learning. For example, if the image changes, direct training requires re-training the encoder too, but with VAE only the decoder needs to be trained.

![image-20260409090155702](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260409090155702.png)

However, the problem with VAE is blurriness. One idea is to add a discriminator inspired by GAN:

![image-20260409090435512](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260409090435512.png)

So how do we go from a noisy image to a less noisy one? A denoising U-Net is used, whose key property is that the output has the same size as the input (intuitively, it is a small autoencoder).

Some conclusions derived from the diffusion model:

**Conclusion 1:**

The noise at any time step can be computed directly from $\mathbf{x}_0$:
$$
\mathbf{x}_t = \sqrt{\bar{\alpha}_t}\mathbf{x}_0 + \sqrt{1 - \bar{\alpha}_t}\epsilon \text{ where } \epsilon \sim \mathcal{N}(\mathbf{0}, \mathbf{I})
$$
The above framework is based on convolutions. After 2020, self-attention was found to have very strong expressive power, so CNNs have gradually been replaced by Diffusion Transformers (self-attention is also more suitable for scaling up and parallel computation).

**Conclusion 2:**

When generating an image, we need to "denoise" step by step — that is, compute $q(\mathbf{x}_{t-1} \mid \mathbf{x}_t)$ (given the current blurry state, find the slightly clearer state one step back). As the slides point out, computing this directly is intractable because there are infinitely many possible denoising paths.

**The turning point:** However, if we simultaneously condition on the original clean image $\mathbf{x}_0$, i.e., compute $q(\mathbf{x}_{t-1} \mid \mathbf{x}_t, \mathbf{x}_0)$, this distribution becomes a fully computable, deterministic Gaussian!

The slides give the formula for the mean $\tilde{\mu}_q(\mathbf{x}_t, \mathbf{x}_0)$ and variance $\sigma_t^2$ of this distribution. The **mean $\tilde{\mu}_q$ is the "central target" we should aim for when denoising**.

**Conclusion 3:**

Property 2 seems perfect, but there is a fatal paradox during actual image generation: **we do not know what the final clean image $\mathbf{x}_0$ looks like at the denoising stage!** (If we already knew, there would be no need to generate it.)

Property 3 completes the most elegant algebraic substitution:

1. It inverts the formula from **Property 1**, expressing $\mathbf{x}_0$ in terms of the current image $\mathbf{x}_t$ and the noise $\epsilon$:

   $$\mathbf{x}_0 = (\mathbf{x}_t - \sqrt{1 - \bar{\alpha}_t}\epsilon) / \sqrt{\bar{\alpha}_t}$$

2. This expression for $\mathbf{x}_0$ is then substituted into the mean formula $\tilde{\mu}_q$ from **Property 2**.

3. After algebraic simplification, the final formula shown in the lower-right corner of the slide is obtained:

   $$\tilde{\mu}_q(\mathbf{x}_t, \mathbf{x}_0) = \frac{1}{\sqrt{\alpha_t}} \left( \mathbf{x}_t - \frac{1 - \alpha_t}{\sqrt{1 - \bar{\alpha}_t}}\epsilon \right)$$

## Image, Video and Audio Generation

![image-20260409091426967](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260409091426967.png)

Without constraints, a single semantic prompt can in fact generate many different images.
