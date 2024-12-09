---
title: "Math"
date: "2023-10-01"
slug: ["math"]
highlight: false
---

# Mathematics Examples

## Basic Math

Inline math: $x = y + 2$

Display math:
$$
  f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d\xi
$$

## Matrix

Ma tran
$$
\begin{bmatrix}
a & b \\

c & d
\end{bmatrix}
$$

$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

## Equations

The quadratic formula:

$$
x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$



## Greek Letters

- Alpha: $\alpha$
- Beta: $\beta$
- Gamma: $\gamma$
- Delta: $\Delta$

## Summation and Products

Sum notation:
$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

Product notation:
$$
\prod_{i=1}^{n} i = n!
$$

## Limits

$$
\lim_{x \to \infty} \frac{1}{x} = 0
$$

## Fractions

$$
\frac{\partial f}{\partial x} = \frac{df}{dx}
$$

## Sets and Logic

$$
A \cup B = \{x \mid x \in A \text{ or } x \in B\}
$$

## Trigonometry

$$
\sin^2 \theta + \cos^2 \theta = 1
$$

## Cách sử dụng dấu dollar \$

### 1. Inline Math

Để viết công thức toán học trong dòng, dùng một cặp dấu dollar:

Input: `$f(x) = ax + b$ `

Output: $f(x) = ax + b$

### 2. Block Math
Để viết công thức toán học dạng block (hiển thị ở dòng riêng), dùng hai cặp dấu dollar:

Input:
```
$$ f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{-x^2/2} dx $$
```

Output:
$$ f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{-x^2/2} dx $$

### 3. Align
Input:
```
$$
\begin{align}
a &= b + c \\
a - c &= b
\end{align}
$$
```
Ouput:
$$
\begin{align}
a &= b + c \\
a - c &= b
\end{align}
$$


### 4. Escape Dollar Sign (\$)

Để hiển thị dấu dollar (\$) như một ký tự thông thường, có thể:

1. Thêm dấu backslash (\\) phía trước: `\$`

Lưu ý:
- Không nên sử dụng $ đơn lẻ mà không có \ đứng trước
- Luôn đóng/mở cặp $ đầy đủ khi viết công thức toán

| Input ----------------| Output |
|-------|--------|
| `\$ f(x) \$` | \$ f(x) \$ |
| `$ f(x) $` | $ f(x) $ |
| `($ f(x) $)` | ($ f(x) $) |
| `\$($ f(x) $)` | \$($ f(x) $) |
| `($) f(x) ($)` | ($) f(x) ($) |
