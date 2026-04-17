---
layout: post
title: "Hung-yi Lee Machine Learning Spring 2026 Notes 3"
date: 2026-04-17
tags: [Hung-yi Lee Machine Learning]
comments: true
author: junedrinleng
toc: true
typora-copy-images-to: upload
---

This note records the content of the third lecture of Hung-yi Lee's Machine Learning Spring 2026 course, covering Flash Attention and KV Cache. These techniques are primarily used to accelerate the generation speed (inference speed) of language models — not training speed — by speeding up Transformer computations.

<!-- more -->

It is important to note that today's lecture focuses on what these methods do and what trade-offs they involve. For example, some methods alter the original attention mechanism and no longer train the original attention (they are an approximation of attention); others may be model-specific, meaning you have to train that particular model to use the method.

Speculative decoding will not be covered in this lecture, as it was discussed in Lecture 16 of the 2024 Generative AI course and will not be repeated here.

## 1 Flash Attention

Flash Attention originates from a 2022 paper: <https://arxiv.org/abs/2205.14135>. It does not change the computation result of the original attention mechanism and is a plug-and-play method applicable to any model that uses attention. Its overhead is very small.

Flash Attention achieves its speedup by taking the GPU's memory transfer logic into account. We therefore begin with an introduction to the underlying computational logic of GPUs.

### 1.1 GPU Computational Logic

A GPU contains many computational units called Execution Units; a single GPU typically has a large number of them. Their power comes from their sheer quantity, which allows tasks to be executed in parallel — computation is therefore very fast.

The drawback is that SRAM (the working buffer) is very small and can hold only a limited amount of data. A very large matrix cannot be computed all at once; it must be loaded in pieces for incremental computation. The working buffer is small, so the bulk of the data resides in HBM (the storage). To carry out a computation, data must be moved from HBM to SRAM, processed quickly, and then moved back to HBM.

Computing on the working buffer is fast, but moving data is slow — and this data movement is the bottleneck.

Flash Attention therefore aims to reduce the number of data movements in order to optimize computation speed.

![image-20260417172236159](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417172236159.png)

### 1.2 Standard Attention Computation

Because the current input sequence can be very long, the key sequence of length L is typically split into chunks, each containing N keys, where N is determined by the size of the working buffer.

After loading a chunk into the working buffer, $q \cdot k$ is computed immediately and the result is written back to storage:

![image-20260417172444561](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417172444561.png)

What we compute here is $a_i$, which should be a weight in the $[0, 1]$ range. In theory the formula above suffices, but in practice $A_{\max}$ must also be subtracted for numerical stability:

![image-20260417172514371](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417172514371.png)

Note that $a_i$ cannot simply be kept on the working buffer, because L can be extremely large (potentially millions), so the working buffer cannot hold L-sized data. Finding $a_{\max}$ therefore becomes cumbersome — it must be tracked across each chunk and updated incrementally:

![image-20260417172841682](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417172841682.png)

A comparison is performed between the running maximum $d$ and the elements within each chunk.

In theory, $B = \frac{L}{N}$ such comparisons are needed to find $a_{\max}$. Once it is found, the numerator of each element can be computed step by step:

![image-20260417173046477](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417173046477.png)

The denominator requires a summation, also computed chunk by chunk:

![image-20260417173119958](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417173119958.png)

Only after the denominator is obtained can $\hat{a}_i$ be computed:

![image-20260417173231655](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417173231655.png)

This entire sequence of operations completes one pass. A great many HBM reads are performed in the process, and even then we are not finished — $v$ still needs to be fetched to compute the partial output $o$:

![image-20260417173412148](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417173412148.png)

This leads to the central question: how does Flash Attention simplify all these repeated reads and writes?

### 1.3 A Simplified Version of Flash Attention

![image-20260417173717038](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417173717038.png)

For the first chunk, $d_1$ serves as $a_{\max}$ and a preliminary computation is performed.

When processing the second chunk, suppose a larger value $d_2$ is encountered. We then treat $d_2$ as $a_{\max}$ and recompute:

![image-20260417173857141](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417173857141.png)

How can we directly correct $s_1$ using $d_1$ and $d_2$?

![image-20260417173954084](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417173954084.png)

This eliminates the influence of $d_1$. After all chunks are processed, we have both $a_{\max}$ and the denominator $s$, making the final computation straightforward:

![image-20260417174443053](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417174443053.png)

This reduces the number of passes from $B = \frac{L}{N}$ to just 2.

Flash Attention does not stop there, however. It poses a deeper question:

> Do we really need to compute every attention weight $\hat{a}_i$?

### 1.4 Flash Attention

The goal is to compute $o_i$ directly in a single pass.

Starting from the first chunk, $v$ is loaded immediately to compute $o_1$:

![image-20260417174818200](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417174818200.png)

Even though $s_1 \neq s_{\text{real}}$ and $d_1 \neq a_{\max}$ at this point.

When we reach the second chunk, we already know how to update $s$. The more important question for Flash Attention is how to compute the correct $o$ directly:

![image-20260417175125358](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417175125358.png)

How do we erase the influence of $s_1$ and $d_1$ from $o_1$ when computing the new $o_2$?

![image-20260417175306694](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417175306694.png)

First multiply by $\frac{s_1}{s_2}$ to update the denominator, then multiply by $e^{d_1 - d_2}$ to update the numerator. Through this iterative correction, previous errors are progressively eliminated:

![image-20260417175507509](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417175507509.png)

PyTorch uses Flash Attention by default. Its trade-off is that the algorithm is slightly more complex and requires slightly more computation than standard attention, but the improvement in speed is well worth it.

For large language models, Flash Attention's speedup is modest when the input token count is very short (due to encoding and other operations), but as token length increases the speedup becomes increasingly pronounced.

It is worth noting that beyond a certain length, CUDA memory may simply run out.

## 2 KV Cache

The input to a language model can be divided into two parts: prefill and decode:

![image-20260417181443992](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417181443992.png)

In KV Cache, keys and values are stored rather than discarded during the attention computation. This is because, when the model is generating, new inputs are appended to the previous prompt — previously computed attention can therefore be reused directly:

The attention for earlier tokens has already been computed:

![image-20260417181718843](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417181718843.png)

For the fourth token, the previously stored KV can be used directly:

![image-20260417181736547](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417181736547.png)

Conceptually this is straightforward, but in practice the KV cache can easily overflow HBM. The cache can grow very large, and multi-head attention further multiplies the KV count.

For example, with a 27B-parameter model, each token occupies 0.72 MB. Even an A100 with 80 GB of VRAM can only store 114 K tokens; beyond that, CUDA out-of-memory errors occur.

![image-20260417181944647](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417181944647.png)

To address this, many methods have been proposed, such as transitioning from Multi-Head Attention to Multi-Query Attention (which performs poorly in general) or the intermediate option of Group Query Attention.

### 2.1 Group Query Attention (GQA)

![image-20260417182227054](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417182227054.png)

![image-20260417182234451](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417182234451.png)

Group Query Attention is widely adopted; LLaMA and Gemma both implement it.

### 2.2 Multi-Head Latent Attention

![image-20260417182413918](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417182413918.png)

Another approach is to first compress $x$ into a compressed vector and then recover $k$ and $q$ by multiplying back. All of these transformations require training. Importantly, this method does not require decompression at inference time:

![image-20260417182708916](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417182708916.png)

This is because for the decompression step, restoring $c$ to $k$ requires multiplying by $W_k$, and then the dot product with $k$ simplifies to $q^T W_k c$, which can be rewritten as $(W_k^T q) \cdot c$. This means the decompression is equivalent to directly computing $q' = W_k^T q$ and then dotting with $c$.

The step $q' = W_k^T q$ effectively compresses $q$. Since $q$ has a fixed length — unlike decompressing $c$, which scales with sequence length — the computation is more efficient.

![image-20260417183144328](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417183144328.png)

The same applies to the computation with $v$. The simplification also shows that it is equivalent to performing the weighted sum first and then decompressing once at the end, rather than decompressing every time before the weighted sum.

### 2.3 Sliding Window Attention

Instead of attending to the entire sequence, each attention step looks only at the content within a preceding sliding window. This might seem to limit the model's ability to capture long-range dependencies.

In practice, however, since modern networks are deep, the keys within the sliding window at one layer may correspond to a much wider span of keys from the layer below, depending on network depth:

![image-20260417183624485](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417183624485.png)

Another option is to use full attention in some layers and sliding-window attention in others:

![image-20260417183705518](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417183705518.png)

Although sliding-window attention degrades the model, simply including the first few tokens of the sequence at inference time can greatly restore performance:

![image-20260417183920032](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417183920032.png)

Higher values in the figure indicate worse performance. We can see that full attention degrades beyond a certain length. Allowing the model to see the first few tokens restores performance significantly (Streaming LLM).

LLMs are fond of the first few tokens. When there is nothing meaningful to attend to, the model tends to attend to the initial tokens. Providing those tokens keeps the model grounded; losing them can cause the model to become erratic.

### 2.4 Pruning KV Cache

Not every KV pair is useful. It is therefore reasonable to simply discard KV cache entries that have not been accessed for a long time:

![image-20260417184306121](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417184306121.png)

Some researchers have argued, however, that dropping KV cache entries may hurt model performance when the model is handling complex problems.

### 2.5 Cross-Conversation Cache — Cache Hit

It is possible that the KV cache for the first few tokens of User 1's conversation is identical to that for User 2's first few tokens. In that case, the cache can simply be shared:

![image-20260417184629379](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417184629379.png)

Note that even if the last character is the same (say, "金"), if the preceding KV cache differs, the KV cache can no longer be shared. Only an identical prefix with identical preceding context qualifies for cache sharing.

Today's model providers offer discounts when a cache hit occurs, because from the model's perspective no computation is needed — the cached result can be used directly, dramatically reducing computational cost.

For AI Agents, for instance, the system prompt at the beginning of a conversation is highly stable, making cache hits very likely. To maximize cache hits, the most stable, unchanging content should be placed at the very front, and the most dynamic content at the very end:

![image-20260417185049472](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417185049472.png)

## 3 Conclusion

![image-20260417185321457](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260417185321457.png)
