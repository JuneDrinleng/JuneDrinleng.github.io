---
layout: post
title: "Hung-yi Lee Machine Learning Spring 2026 Notes 4"
date: 2026-04-19
tags: [Hung-yi Lee Machine Learning]
comments: true
author: junedrinleng
toc: true

---

This note records the content of the fourth lecture of Hung-yi Lee's Machine Learning Spring 2026 course, covering an introduction to Positional Encoding — from Absolute, Relative, and RoPE, all the way to eliminating Positional Embedding entirely.

<!-- more -->

## 1 Why Do We Need Positional Embedding

![image-20260419211854888](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419211854888.png)

As can be seen, the computation in the self-attention layer of a Transformer appears to contain no positional ordering information.

If the positions of tokens are swapped — say we have four input tokens A, B, C, D — the output $o_D$ would be unaffected, which would undermine the network's understanding of the sentence.

Therefore, we need to incorporate positional information into the Transformer.

## 2 Absolute Positional Embedding

The earliest idea was simply to encode a unique positional signal for each token and add it to the representation:

![image-20260419212244902](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419212244902.png)

With different positions, $o_D$ computed after swapping tokens is now different.

### 2.1 Sinusoidal Positional Embedding

A technique from the Cambrian era.

Let $d$ denote the length of each vector, and let $p_0[i]$ denote the $i$-th element of the 0-th positional embedding vector.

![image-20260419212616859](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419212616859.png)

The formula distinguishes between even and odd indices, which looks complex and strange at first glance. Let's visualize dimensions 0 and 1 of $p_0$ through $p_{49}$ to gain some intuition:

![image-20260419212905598](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419212905598.png)

Looking at dim 0 alone gives a sine wave; dim 1 gives a cosine wave. Dim 10 is also a sine wave, but because $i$ differs the denominator in the formula changes, so the period is different as well.

![image-20260419213123940](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419213123940.png)

Dimensions closer to 0 have higher frequency and change more rapidly.

This still seems a bit arbitrary, but if we pair the odd and even dimensions together — sine and cosine — we see that each pair forms a 2-D vector pointer that rotates as $k$ changes.

![image-20260419213410341](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419213410341.png)

What does this mean? The first few pointers in a row rotate quickly, the middle ones rotate more slowly, and the last few rotate even more slowly — just like hours, minutes, and seconds on a clock, encoding position.

![image-20260419213544078](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419213544078.png)

Why use this design? In the "Attention Is All You Need" paper, the authors hoped that positional embeddings would allow the Transformer to capture relative position information.

Concretely, the distance between "cat" and "fish" in "I want to tell you something fun, today the cat ate the fish" should be the same as in "the cat ate the fish", while being different from "the cat's hilariously funny action today was eating the fish."

The choice of Sinusoidal Positional Embedding was motivated by this relative-position property:
$$
p_{k+r}=M_rp_k
$$
That is, the transformation from $p_1$ to $p_4$, for example, is achieved by $M_r$, which is independent of $k$.

The proof is as follows:
![image-20260419214331173](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419214331173.png)

![image-20260419214426703](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419214426703.png)

![image-20260419214452688](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419214452688.png)

![image-20260419214519099](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419214519099.png)

The above shows the relationship among a few dimensions. For the full vector:

![image-20260419214702933](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419214702933.png)

How does this clever design affect the attention computation?
$$
𝑎=𝒒_𝑩∙𝒌_𝑨\\
=(𝒒_𝑩 )^𝑇 𝒌_𝑨\\
=(𝑊_𝑞 (𝒙_𝑩+𝒑_𝒎 ))^𝑇 𝑊_𝑘 (𝒙_𝑨+𝒑_𝒏 )\\
=(𝒙_𝑩+𝒑_𝒎 )^𝑇 𝑊_𝑞^𝑇 𝑊_𝑘 (𝒙_𝑨+𝒑_𝒏 )\\
=𝒙_𝑩^𝑇 𝑊_𝑞^𝑇 𝑊_𝑘 𝒙_𝑨++𝒙_B^𝑇 𝑊_𝑞^𝑇 𝑊_𝑘 𝒑_𝒏+𝒑_𝒎^𝑇 𝑊_𝑞^𝑇 𝑊_𝑘 𝒙_𝑨++𝒑_𝒎^𝑇 𝑊_𝑞^𝑇 𝑊_𝑘 𝒑_𝒏


$$
The first term depends only on content, with no positional component. The second and third terms involve both content $x$ and position $p$ — they are the content-position interaction terms. The fourth term depends solely on position, and because of the Sinusoidal Positional Embedding property $p_{k+r}=M_r p_k$, substituting into the fourth term gives:
$$
\text{the 4th part}=(𝒑_𝒏)^𝑇 𝑀_{𝑚−𝑛} 𝑊_𝑞^𝑇 𝑊_𝑘 𝒑_𝒏
$$
This captures relative position, albeit in a modest way.

## 3 Relative Positional Embedding　

Since what we want is relative position, can we work directly from relative positions? One idea is the ALiBi approach.

### 3.1 ALiBi — An Ordovician-Era Technique

Compute the attention score $a$ without any positional component, then subtract a relative-position bias:

<img src="https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419215554343.png" alt="image-20260419215554343" style="zoom:33%;" />

Although trained only on sequences of length 512, this method generalised well to lengths such as 2048 — very strong extrapolation ability.

The slope $b$ here is manually set. What if we simply learn the bias directly? Someone already did this in T5 back in 2019:

![image-20260419215938978](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419215938978.png)

However, T5 performed slightly worse than ALiBi. Of course, even ALiBi has since been swept away by the tide of history, replaced by newer Positional Embedding techniques. The key takeaway is that relative position matters greatly, and focusing on it alone can solve the problem well.

### 3.2 RoPE

RoPE actually predates ALiBi and performs worse on some metrics, yet it is the RoPE family that ultimately prevailed, being adopted by LLaMA, Qwen, and others.

RoPE's strength is that it does not alter the attention operation — the dot product between $q$ and $k$ is computed in exactly the same way, meaning previously discussed optimisations such as KV Cache and Flash Attention can be applied directly.

How does RoPE work? It encodes position through rotation.

![image-20260419220640943](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419220640943.png)

To embed position into a vector, simply rotate it by an angle of $n\theta$.

![image-20260419220731650](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419220731650.png)

The same operation is applied to $q$: rotating by $m\theta$ yields a position-aware $q^m$. For ease of visualization, only the first two dimensions are shown here. As with Sinusoidal Positional Embedding, dimensions are paired up two at a time.

How are the rotation angles set? Following the same scheme as Sinusoidal Positional Embedding, we define $\theta_i$ — only $d/2$ angles are needed since dimensions are paired — and multiply by the position index $n$ to encode position.

![image-20260419221047890](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419221047890.png)

What effect does this have? When the relative position is unchanged, the relative angle between two vectors is unchanged:

![image-20260419221254113](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419221254113.png)

![image-20260419221456611](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419221456611.png)

The inner product of two vectors at the same relative angle does not change — the angle between $k$ and $q$ remains the same; both vectors simply rotate together.

Since rotation can be represented as the following matrix:

![image-20260419221700398](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419221700398.png)

![image-20260419221709354](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419221709354.png)

Computing $k \cdot q$ becomes:

![image-20260419221807832](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419221807832.png)

Even if $m$ is replaced by $m+r$ and $n$ by $n+r$, the result is the same as for $m$ and $n$.

Many people claim that the attention score decreases as the distance between $q$ and $k$ grows. In practice this is not strictly true — see [here](https://colab.research.google.com/drive/1rWDtAkScrb2K3tcprSTzwuRQo5bGiyKJ?usp=sharing) and [here](https://arxiv.org/pdf/2410.06205). Only when the content of $q$ and $k$ is identical does the attention score generally (but not strictly monotonically) decrease with distance — it zigzags. ALiBi assumes that attention strictly decreases with distance; RoPE does not necessarily satisfy this, which is actually not a drawback in language modelling: RoPE's non-strict decrease with distance allows for more fine-grained modelling.

## 4 Train Short, Test Long

Reference: https://amaarora.github.io/posts/2025-09-21-rope-context-extension.html

The goal is to train a model with short sequences yet use it with much longer sequences at test time. This is practically important: training data lengths are always limited, but at inference time — especially when running AI Agents — input lengths can be extremely long.

Unfortunately, RoPE cannot achieve this out of the box. Among Sinusoidal, RoPE, T5, and ALiBi, ALiBi performs best at Train Short, Test Long. However, because ALiBi's assumption is fairly coarse and less elegant than RoPE, subsequent researchers sought to extend RoPE to support Train Short, Test Long.

Why does RoPE fail on unseen lengths? If the longest training sequence causes vectors to rotate up to $N\theta$, then at test time a rotation of $2N\theta$ is entirely unseen by the model, causing it to break down.

### 4.1 Position Interpolation

The fix is to rescale the position indices. If trained on length $N$ and tested on length $LN$, the indices $1, 2, 3, \ldots, LN$ are remapped to $\frac{1}{L}, \frac{2}{L}, \frac{3}{L}, \ldots, N$ at test time. Fractional indices are perfectly valid for RoPE rotations.

This method is called Position Interpolation. It improves generalisation to longer sequences, but the model still needs fine-tuning to adapt to non-integer position indices:

![image-20260419223731531](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419223731531.png)

### 4.2 Frequency-Based Approach

Beyond tying the scaling factor to $L$, can it also depend on the dimension? Low-index dimensions rotate quickly while high-index dimensions rotate slowly. The idea here is to leave high-frequency dimensions unchanged and compress only the low-frequency ones. This is because high-frequency pointers rotate so fast that during training every angle is already seen — the model will not break. For slowly rotating pointers, stepping outside the trained angular range causes the model to fail:

![image-20260419224115622](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419224115622.png)

One method addressing this is **NTK-Aware Scaling**:

![image-20260419224207319](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419224207319.png)

The highest-frequency dimensions are left completely unchanged; the lowest-frequency ones are scaled directly to $N$. Note that this method has no formal paper — it originated from a Reddit post.

Frequency-based compression has been further refined; for example, **YaRN** optimises the shape of the scaling-factor curve:

![image-20260419224602187](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419224602187.png)

### 4.3 Dynamic Scaling Based Approach

The methods above enable long-sequence inference but degrade performance on short sequences. Dynamic Scaling addresses this by pattern-matching at inference time: if the test length is within the training length, everything proceeds normally; if it exceeds the training length, the special scaling is applied:

![image-20260419224828333](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419224828333.png)

The drawback is that this approach is incompatible with KV Cache (this method also originated from a Reddit post).

Dynamic scaling combines well with frequency-based approaches. To determine the best combination, **LongRoPE** uses **evolutionary search** to find the optimal configuration, achieving context lengths of up to 2048k tokens. Its recipe is: first fine-tune the model, then extract the LongRoPE configuration and further tune to extend the context.

## 5 Do We Really Need Positional Embedding?

The discussion above focused on a single attention layer, but real networks have many layers. Even without positional encoding, the input to the next attention layer may already differ from the current one. Based on this observation, [NoPE](https://arxiv.org/pdf/2305.19466) proposed a Positional-Embedding-free approach:

![image-20260419225741633](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419225741633.png)

One further idea is to remove RoPE near the end of training — this is called **DroPE**:

![image-20260419230015291](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419230015291.png)

Surprisingly, its performance exceeds RoPE + YaRN:

![image-20260419230051283](https://cdn.jsdelivr.net/gh/JuneDrinleng/JuneDrinleng.github.io@main/assets/img/image-20260419230051283.png)
