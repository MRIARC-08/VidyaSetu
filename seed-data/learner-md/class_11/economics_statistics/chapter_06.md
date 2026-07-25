# Chapter 6: Measures of Dispersion
### NCERT Class 11 Statistics for Economics

---

## Chapter Purpose

This chapter explains how spread or variation in data is measured. An average tells us the central value, but it does not tell us whether the observations are close together or widely scattered.

The main idea is:

> Dispersion measures how far values are spread around a central value or within a distribution.

Two groups may have the same average but very different levels of variation. Dispersion helps identify which group is more consistent, unequal, risky, or reliable.

---

## Learning Outcomes

After studying this chapter, you should be able to:

1. Explain why averages alone are not enough.
2. Define dispersion.
3. Distinguish absolute and relative measures of dispersion.
4. Calculate range.
5. Calculate quartile deviation.
6. Calculate mean deviation.
7. Calculate standard deviation.
8. Understand coefficient of variation.
9. Compare consistency using relative measures.
10. Understand the Lorenz curve as a diagram of inequality.

---

## 1. Why Averages Are Not Enough

An average gives only one representative value. It does not show how values are distributed around that value.

Example:

| Family | Incomes of members | Average income |
|---|---|---:|
| A | 15,000; 15,000; 15,000; 15,000 | 15,000 |
| B | 5,000; 5,000; 10,000; 40,000 | 15,000 |

Both families have the same average income, but Family B has much more inequality. Dispersion reveals this difference.

---

## 2. Meaning of Dispersion

Dispersion means the extent to which values vary from one another or from an average.

Low dispersion means values are close together.

High dispersion means values are widely spread.

Examples:

| Situation | Meaning |
|---|---|
| Students scoring 48, 50, 52 | Low dispersion |
| Students scoring 10, 50, 90 | High dispersion |
| Workers earning similar wages | Low wage dispersion |
| Workers earning very unequal wages | High wage dispersion |

---

## 3. Measures of Dispersion

The main measures are:

| Measure | Based on |
|---|---|
| Range | Difference between highest and lowest value |
| Quartile Deviation | Spread of middle 50 percent values |
| Mean Deviation | Average absolute deviation from a central value |
| Standard Deviation | Square root of average squared deviations |
| Lorenz Curve | Graphical representation of inequality |

---

## 4. Absolute and Relative Measures

### 4.1 Absolute Measures

Absolute measures express dispersion in the same unit as the data.

Examples:

- Range = Rs 5,000
- Standard deviation = 4 marks
- Quartile deviation = 10 kg

Absolute measures are useful within the same unit and scale.

### 4.2 Relative Measures

Relative measures express dispersion as a ratio or percentage. They are useful for comparison between different series.

Examples:

- Coefficient of range
- Coefficient of quartile deviation
- Coefficient of mean deviation
- Coefficient of variation

If two series have different units or different averages, relative measures are better for comparison.

---

## 5. Range

Range is the difference between the largest and smallest value.

Formula:

```text
Range = L - S
```

Where:

| Symbol | Meaning |
|---|---|
| L | Largest value |
| S | Smallest value |

### Example

Values: 20, 30, 40, 50, 200

```text
Range = 200 - 20 = 180
```

### Coefficient of Range

Formula:

```text
Coefficient of Range = (L - S) / (L + S)
```

### Merits

- Simple to calculate.
- Easy to understand.
- Shows total spread quickly.

### Limitations

- Based only on two extreme values.
- Ignores all other observations.
- Highly affected by extreme values.
- Not reliable for detailed analysis.

---

## 6. Quartile Deviation

Quartile Deviation is half of the interquartile range.

It measures the spread of the middle 50 percent of observations.

Formula:

```text
Quartile Deviation = (Q3 - Q1) / 2
```

Where:

| Symbol | Meaning |
|---|---|
| Q1 | First quartile |
| Q3 | Third quartile |

Interquartile range:

```text
Q3 - Q1
```

### Coefficient of Quartile Deviation

```text
Coefficient of Q.D. = (Q3 - Q1) / (Q3 + Q1)
```

### Why It Is Useful

Quartile deviation ignores extreme values and focuses on the central part of the data.

Useful when:

- Extreme values are present.
- Open-ended classes exist.
- Median is used as the central value.

### Limitation

It ignores half the observations: the lowest 25 percent and highest 25 percent.

---

## 7. Mean Deviation

Mean deviation is the average of absolute deviations from a central value.

It can be calculated from:

- Mean
- Median
- Mode

Because deviations can be positive or negative, absolute values are taken.

### Formula for Individual Data

```text
Mean Deviation = Sigma |d| / N
```

Where:

| Symbol | Meaning |
|---|---|
| |d| | Absolute deviation from average |
| N | Number of observations |

### Steps

1. Choose the central value, usually mean or median.
2. Find deviation of each value from that central value.
3. Ignore signs and take absolute deviations.
4. Add absolute deviations.
5. Divide by number of observations.

### Example Pattern

Values: 2, 4, 7, 8, 9

Suppose median = 7.

| X | |X - Median| |
|---:|---:|
| 2 | 5 |
| 4 | 3 |
| 7 | 0 |
| 8 | 1 |
| 9 | 2 |

```text
Mean Deviation = (5 + 3 + 0 + 1 + 2) / 5 = 11 / 5 = 2.2
```

### Mean Deviation for Frequency Data

Formula:

```text
M.D. = Sigma f|d| / Sigma f
```

For grouped data, use class midpoints.

### Coefficient of Mean Deviation

```text
Coefficient of M.D. = Mean Deviation / Average used
```

If M.D. is calculated from median, divide by median. If calculated from mean, divide by mean.

---

## 8. Standard Deviation

Standard Deviation is the square root of the average of squared deviations from the mean.

It is the most widely used measure of dispersion.

### Why Square Deviations?

If deviations from mean are added directly, positive and negative deviations cancel out. Squaring removes negative signs and gives more importance to larger deviations.

### Formula for Individual Data

```text
Standard Deviation = sqrt [Sigma (X - Xbar)^2 / N]
```

### Direct Formula

```text
Standard Deviation = sqrt [(Sigma X^2 / N) - (Xbar)^2]
```

### Steps Using Mean

1. Calculate mean.
2. Find deviation of each value from mean.
3. Square each deviation.
4. Add squared deviations.
5. Divide by N.
6. Take square root.

### Example Pattern

| X | d = X - Xbar | d squared |
|---:|---:|---:|
| 5 | -19 | 361 |
| 10 | -14 | 196 |
| 25 | 1 | 1 |
| 30 | 6 | 36 |
| 50 | 26 | 676 |

Then:

```text
Standard Deviation = sqrt (Sigma d^2 / N)
```

---

## 9. Standard Deviation for Frequency Data

### Discrete Series

Formula:

```text
Standard Deviation = sqrt [Sigma fd^2 / Sigma f]
```

Where:

```text
d = X - Xbar
```

### Grouped Series

Use class midpoints.

Steps:

1. Find midpoint m of each class.
2. Calculate mean.
3. Find d = m - mean.
4. Square d.
5. Multiply by frequency.
6. Apply formula.

### Assumed Mean Method

When calculations are large, use assumed mean.

Formula:

```text
Standard Deviation = sqrt [(Sigma fd^2 / N) - (Sigma fd / N)^2]
```

Where:

```text
d = X - A
```

For grouped data, replace X with midpoint m.

### Step Deviation Method

When deviations have a common factor c:

```text
Standard Deviation = c x sqrt [(Sigma fd'^2 / N) - (Sigma fd' / N)^2]
```

Where:

```text
d' = (X - A) / c
```

---

## 10. Coefficient of Variation

Coefficient of Variation, or C.V., is a relative measure based on standard deviation.

Formula:

```text
Coefficient of Variation = (Standard Deviation / Arithmetic Mean) x 100
```

### Use

C.V. is used to compare consistency between two series.

| C.V. | Meaning |
|---|---|
| Lower C.V. | More consistency, less variation |
| Higher C.V. | Less consistency, more variation |

Example:

If two batsmen have similar averages, the batsman with lower C.V. is more reliable.

---

## 11. Choosing the Right Measure of Dispersion

| Situation | Suitable measure |
|---|---|
| Quick rough spread | Range |
| Extreme values present | Quartile Deviation |
| Average absolute distance is needed | Mean Deviation |
| Detailed and algebraic analysis | Standard Deviation |
| Compare variation between two series | Coefficient of Variation |
| Show inequality graphically | Lorenz Curve |

---

## 12. Lorenz Curve

The Lorenz Curve is a graphical method used to show inequality or concentration.

It is commonly used for:

- Income inequality
- Wealth distribution
- Land distribution
- Market concentration

### Main Idea

If income is equally distributed, the Lorenz Curve lies on the line of equal distribution. If income is unequal, the curve bends away from that line.

The farther the Lorenz Curve is from the line of equal distribution, the greater the inequality.

### Steps to Draw a Lorenz Curve

1. Arrange income groups in ascending order.
2. Calculate cumulative population percentages.
3. Calculate cumulative income percentages.
4. Plot cumulative population percentage on x-axis.
5. Plot cumulative income percentage on y-axis.
6. Draw the line of equal distribution.
7. Join plotted points to form Lorenz Curve.

---

## 13. Absolute vs Relative Comparison

Suppose two shops have different average sales. Comparing only range or standard deviation may be misleading because the scale is different.

Use relative measures when:

- Units differ.
- Averages differ greatly.
- You need consistency comparison.

Example:

| Series | Mean | Standard deviation | C.V. |
|---|---:|---:|---:|
| A | 100 | 10 | 10 percent |
| B | 500 | 25 | 5 percent |

Although B has higher standard deviation, it has lower C.V. Therefore B is relatively more consistent.

---

## 14. Common Mistakes

| Mistake | Correct understanding |
|---|---|
| Comparing only averages | Averages must be supplemented by dispersion. |
| Treating range as highly reliable | Range uses only extreme values. |
| Forgetting absolute deviations in mean deviation | Mean deviation ignores signs. |
| Forgetting to square deviations in standard deviation | Standard deviation is based on squared deviations. |
| Confusing standard deviation and coefficient of variation | S.D. is absolute; C.V. is relative. |
| Saying higher S.D. always means less consistency | Compare C.V. when means differ. |
| Drawing Lorenz Curve without cumulative percentages | Lorenz Curve uses cumulative percentages. |

---

## 15. Formula Board

| Measure | Formula |
|---|---|
| Range | L - S |
| Coefficient of Range | (L - S) / (L + S) |
| Quartile Deviation | (Q3 - Q1) / 2 |
| Coefficient of Q.D. | (Q3 - Q1) / (Q3 + Q1) |
| Mean Deviation | Sigma |d| / N |
| Mean Deviation, frequency data | Sigma f|d| / Sigma f |
| Standard Deviation | sqrt [Sigma (X - Xbar)^2 / N] |
| S.D. direct formula | sqrt [(Sigma X^2 / N) - (Xbar)^2] |
| S.D. assumed mean | sqrt [(Sigma fd^2 / N) - (Sigma fd / N)^2] |
| Coefficient of Variation | (S.D. / Mean) x 100 |

---

## 16. Answer Frames

### Frame 1: Need for Measures of Dispersion

1. Explain that averages show only central value.
2. Define dispersion.
3. Give example of two series with same average but different spread.
4. Mention range, Q.D., M.D., S.D., and C.V.
5. Conclude that dispersion helps compare reliability, inequality, and consistency.

### Frame 2: Range and Quartile Deviation

1. Define range and write formula.
2. Mention its simplicity and limitation.
3. Define quartile deviation and write formula.
4. Explain that Q.D. focuses on middle 50 percent values.

### Frame 3: Standard Deviation

1. Define standard deviation.
2. Explain deviations from mean.
3. Mention squaring and square root.
4. Write formula.
5. Explain why it is widely used.

### Frame 4: Coefficient of Variation

1. Define C.V.
2. Write formula.
3. Explain that it is relative.
4. State that lower C.V. means more consistency.
5. Use example of comparing two series.

---

## 17. Practice Questions

### Short Answer Questions

1. What is dispersion?
2. Why are averages alone not sufficient?
3. Define range.
4. What is coefficient of range?
5. Define quartile deviation.
6. What is interquartile range?
7. Define mean deviation.
8. Why are absolute deviations used in mean deviation?
9. Define standard deviation.
10. What is coefficient of variation?
11. What does lower C.V. indicate?
12. What is Lorenz Curve?

### Long Answer Questions

1. Explain the need for measures of dispersion.
2. Explain range and its merits and limitations.
3. Explain quartile deviation and its use.
4. Explain mean deviation with calculation steps.
5. Explain standard deviation and why it is important.
6. Distinguish between absolute and relative measures of dispersion.
7. Explain coefficient of variation and its use in comparing consistency.
8. Explain the Lorenz Curve and its use in measuring inequality.

---

## 18. Learner Checklist

Before leaving this chapter, make sure you can:

- Explain why two series with the same average may differ.
- Calculate range.
- Calculate quartile deviation.
- Calculate mean deviation using absolute deviations.
- Calculate standard deviation using deviations or direct method.
- Use class midpoints for grouped data.
- Distinguish absolute and relative dispersion.
- Use C.V. to compare consistency.
- Explain Lorenz Curve in words.

---

## Final Takeaway

Dispersion completes the meaning of an average. Averages tell where the data is centred; dispersion tells how far the values spread. For comparison, reliability, inequality, and consistency, measures of dispersion are essential.
