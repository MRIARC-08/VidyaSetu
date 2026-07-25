# Chapter 5: Measures of Central Tendency
### NCERT Class 11 Statistics for Economics

---

## Chapter Purpose

This chapter explains how a large set of data can be represented by one central or typical value. Such a value is called a measure of central tendency or an average.

The main idea is:

> A measure of central tendency summarises a data set by one representative value.

The three main averages studied here are:

1. Arithmetic Mean
2. Median
3. Mode

Each average has a different meaning and use. A good learner does not use one average blindly.

---

## Learning Outcomes

After studying this chapter, you should be able to:

1. Explain the need for averages.
2. Define central tendency.
3. Compute arithmetic mean for individual, discrete, and grouped data.
4. Use direct, assumed mean, and step deviation methods.
5. Understand weighted arithmetic mean.
6. Compute median for individual, discrete, and grouped data.
7. Understand quartiles and percentiles.
8. Compute mode for individual, discrete, and grouped data.
9. Choose the most suitable average for a given situation.
10. Understand the merits and limitations of mean, median, and mode.

---

## 1. Meaning of Central Tendency

Central tendency means the tendency of observations to cluster around a central value.

Examples:

- Average marks of a class
- Average income of households
- Average rainfall in a region
- Most common shoe size
- Median wage of workers

A central value helps summarise data, but it does not show all details.

---

## 2. Need for Averages

Averages are used because raw data may be too large to understand easily.

Example:

If we know the landholding size of 50 farmers, it may be hard to compare one farmer with the whole group. A single average landholding helps us judge whether a farmer is above or below the typical level.

Averages help in:

| Use | Explanation |
|---|---|
| Summarising | Represents large data by one value |
| Comparing | Compare groups, regions, or time periods |
| Decision-making | Helps planning and policy |
| Analysis | Supports further statistical calculations |

---

## 3. Types of Averages

| Average | Main idea | Best used when |
|---|---|---|
| Arithmetic Mean | Sum of values divided by number of values | All values are important and data is numerical |
| Median | Middle value after arranging data | Extreme values may distort the mean |
| Mode | Most frequent value | Most common size, type, or category is needed |

---

## 4. Arithmetic Mean

Arithmetic Mean is the sum of all observations divided by the number of observations.

Formula for individual data:

```text
Mean = Sum of observations / Number of observations
Xbar = Sigma X / N
```

Where:

| Symbol | Meaning |
|---|---|
| Xbar | Arithmetic mean |
| Sigma X | Sum of all observations |
| N | Number of observations |

### Example

Marks: 40, 50, 55, 78, 58

```text
Mean = (40 + 50 + 55 + 78 + 58) / 5
Mean = 281 / 5
Mean = 56.2
```

---

## 5. Arithmetic Mean for Individual Data

### 5.1 Direct Method

Use direct method when numbers are few and simple.

Steps:

1. Add all observations.
2. Count the number of observations.
3. Divide total by count.

Formula:

```text
Xbar = Sigma X / N
```

### 5.2 Assumed Mean Method

Use assumed mean method when numbers are large.

Formula:

```text
Xbar = A + (Sigma d / N)
```

Where:

| Symbol | Meaning |
|---|---|
| A | Assumed mean |
| d | X - A |
| Sigma d | Sum of deviations from assumed mean |
| N | Number of observations |

Steps:

1. Choose a convenient assumed mean A.
2. Find d = X - A for each value.
3. Add all d values.
4. Apply the formula.

### 5.3 Step Deviation Method

Use this method when deviations have a common factor.

Formula:

```text
Xbar = A + (Sigma d' / N) x c
```

Where:

```text
d' = (X - A) / c
```

| Symbol | Meaning |
|---|---|
| c | Common factor |
| d' | Step deviation |

This method simplifies calculation by reducing large deviations.

---

## 6. Arithmetic Mean for Discrete Series

In a discrete series, each value has a frequency.

Formula:

```text
Xbar = Sigma fX / Sigma f
```

Where:

| Symbol | Meaning |
|---|---|
| X | Value of variable |
| f | Frequency |
| fX | Product of value and frequency |
| Sigma f | Total frequency |

### Steps

1. Multiply each value X by its frequency f.
2. Add all fX values.
3. Add all frequencies.
4. Divide Sigma fX by Sigma f.

### Example Pattern

| X | f | fX |
|---:|---:|---:|
| 10 | 2 | 20 |
| 20 | 3 | 60 |
| 30 | 5 | 150 |
| Total | 10 | 230 |

```text
Mean = 230 / 10 = 23
```

---

## 7. Arithmetic Mean for Grouped Data

In grouped data, use class midpoints.

Formula:

```text
Xbar = Sigma fm / Sigma f
```

Where:

| Symbol | Meaning |
|---|---|
| m | Midpoint of class interval |
| f | Frequency |
| fm | Frequency x midpoint |

Midpoint formula:

```text
m = (Lower limit + Upper limit) / 2
```

### Steps

1. Find midpoint of each class.
2. Multiply each midpoint by frequency.
3. Add all fm values.
4. Divide by total frequency.

---

## 8. Properties of Arithmetic Mean

| Property | Meaning |
|---|---|
| Uses all values | Every observation affects the mean |
| Algebraic treatment possible | Useful in further statistical analysis |
| Sum of deviations from mean is zero | Positive and negative deviations balance |
| Affected by extremes | Very high or low values can distort it |

Important property:

```text
Sigma (X - Xbar) = 0
```

---

## 9. Weighted Arithmetic Mean

Weighted mean is used when all items are not equally important.

Formula:

```text
Weighted Mean = Sigma WX / Sigma W
```

Where:

| Symbol | Meaning |
|---|---|
| X | Value |
| W | Weight |
| WX | Product of value and weight |

Example:

If food has more importance in a household budget than entertainment, food price should receive a higher weight while calculating average price change.

Use weighted mean when importance differs.

---

## 10. Median

Median is the middle value of a series when observations are arranged in ascending or descending order.

It divides the data into two equal parts:

- 50 percent observations lie below it.
- 50 percent observations lie above it.

### Median for Individual Data

Steps:

1. Arrange data in ascending order.
2. Count number of observations N.
3. Locate the median position.

If N is odd:

```text
Median = Value of ((N + 1) / 2)th item
```

If N is even:

```text
Median = Average of (N/2)th item and ((N/2) + 1)th item
```

### Example

Data: 5, 8, 2, 9, 4

Arranged data: 2, 4, 5, 8, 9

```text
N = 5
Median position = (5 + 1) / 2 = 3rd item
Median = 5
```

---

## 11. Median for Discrete Series

Steps:

1. Arrange values in ascending order.
2. Write frequencies.
3. Compute cumulative frequencies.
4. Find N = Sigma f.
5. Locate (N + 1) / 2 item.
6. The value whose cumulative frequency contains this item is the median.

Example pattern:

| X | f | Cumulative frequency |
|---:|---:|---:|
| 10 | 2 | 2 |
| 20 | 4 | 6 |
| 30 | 10 | 16 |
| 40 | 4 | 20 |

```text
N = 20
Median position = (20 + 1) / 2 = 10.5th item
```

The 10.5th item lies in cumulative frequency 16, so median = 30.

---

## 12. Median for Grouped Data

Formula:

```text
Median = L + [(N/2 - cf) / f] x h
```

Where:

| Symbol | Meaning |
|---|---|
| L | Lower limit of median class |
| N | Total frequency |
| cf | Cumulative frequency before median class |
| f | Frequency of median class |
| h | Class width |

### Steps

1. Prepare cumulative frequency.
2. Find N/2.
3. Identify the median class: class whose cumulative frequency first exceeds N/2.
4. Apply formula.

---

## 13. Quartiles and Percentiles

Quartiles divide data into four equal parts.

| Quartile | Meaning |
|---|---|
| Q1 | Lower quartile; 25 percent observations lie below it |
| Q2 | Median; 50 percent observations lie below it |
| Q3 | Upper quartile; 75 percent observations lie below it |

For individual data:

```text
Q1 = Size of ((N + 1) / 4)th item
Q3 = Size of (3(N + 1) / 4)th item
```

Percentiles divide data into 100 equal parts.

Example:

If a student is at the 82nd percentile, the student's performance is better than about 82 percent of candidates and below about 18 percent of candidates.

---

## 14. Mode

Mode is the value that occurs most frequently.

It represents the most common or typical value.

Examples:

- Most common shoe size
- Most demanded shirt size
- Most common wage group
- Most popular transport mode

### Mode for Individual Data

The value repeated most often is the mode.

Example:

Data: 10, 20, 20, 30, 40

Mode = 20

### Mode for Discrete Series

The value with the highest frequency is the mode.

Example:

| X | f |
|---:|---:|
| 10 | 3 |
| 20 | 8 |
| 30 | 5 |

Mode = 20 because it has the highest frequency.

### Mode for Grouped Data

Formula:

```text
Mode = L + [D1 / (D1 + D2)] x h
```

Where:

| Symbol | Meaning |
|---|---|
| L | Lower limit of modal class |
| D1 | Frequency of modal class - frequency of preceding class |
| D2 | Frequency of modal class - frequency of succeeding class |
| h | Class width |

Modal class is the class with the highest frequency.

---

## 15. Mean, Median, and Mode Compared

| Basis | Mean | Median | Mode |
|---|---|---|---|
| Meaning | Arithmetic average | Middle value | Most frequent value |
| Uses all values | Yes | No | No |
| Affected by extreme values | Yes | Less affected | Less affected |
| Suitable for open-ended classes | Not ideal | Suitable | Suitable |
| Algebraic use | Strong | Limited | Limited |
| Best for | General numerical average | Positional average | Most common value |

---

## 16. Which Average Should Be Used?

| Situation | Best average |
|---|---|
| Average marks or income with no extreme values | Mean |
| Income distribution with very rich and poor values | Median |
| Most common shoe or garment size | Mode |
| Open-ended frequency distribution | Median or mode |
| Qualitative measurement | Mode or median, depending on ordering |
| Further algebraic analysis needed | Mean |
| Extreme values present | Median |

---

## 17. Common Mistakes

| Mistake | Correct understanding |
|---|---|
| Using mean even when extremes are present | Median may be better. |
| Forgetting to arrange data before median | Median requires ordered data. |
| Treating mode as always unique | A series may have more than one mode or no clear mode. |
| Confusing frequency with value | Mode is the value with highest frequency, not the frequency itself. |
| Forgetting class midpoint in grouped mean | Grouped mean uses class midpoints. |
| Using N instead of Sigma f in frequency series | Total frequency is the denominator. |
| Ignoring weights | Weighted mean is needed when importance differs. |

---

## 18. Formula Board

| Measure | Formula |
|---|---|
| Mean, individual data | Xbar = Sigma X / N |
| Mean, discrete data | Xbar = Sigma fX / Sigma f |
| Mean, grouped data | Xbar = Sigma fm / Sigma f |
| Assumed mean | Xbar = A + Sigma d / N |
| Step deviation | Xbar = A + (Sigma d' / N) x c |
| Weighted mean | Sigma WX / Sigma W |
| Median, grouped data | L + [(N/2 - cf) / f] x h |
| Mode, grouped data | L + [D1 / (D1 + D2)] x h |

---

## 19. Answer Frames

### Frame 1: Need for Measures of Central Tendency

1. Define central tendency.
2. Explain that large data needs summary.
3. Mention comparison and decision-making.
4. Name mean, median, and mode.
5. Add that different averages suit different situations.

### Frame 2: Arithmetic Mean

1. Define arithmetic mean.
2. Write formula.
3. Explain symbols.
4. Mention direct, assumed mean, and step deviation methods.
5. State merits and limitation regarding extreme values.

### Frame 3: Median

1. Define median.
2. State that data must be arranged.
3. Explain odd/even or grouped formula as required.
4. Mention that it is less affected by extreme values.
5. Give suitable use cases.

### Frame 4: Mode

1. Define mode.
2. Explain highest frequency.
3. Mention modal class for grouped data.
4. Give examples such as garment size or common wage group.

---

## 20. Practice Questions

### Short Answer Questions

1. What is central tendency?
2. Define arithmetic mean.
3. What is assumed mean method?
4. What is step deviation method?
5. What is weighted mean?
6. Define median.
7. What is quartile?
8. What is percentile?
9. Define mode.
10. What is modal class?

### Long Answer Questions

1. Explain the need for measures of central tendency.
2. Explain the calculation of arithmetic mean for individual, discrete, and grouped data.
3. Explain median and its calculation for different series.
4. Explain mode and its calculation for grouped data.
5. Compare mean, median, and mode.
6. Which average is suitable in different situations? Explain with examples.

---

## 21. Learner Checklist

Before leaving this chapter, make sure you can:

- Define mean, median, and mode.
- Calculate mean from individual and frequency data.
- Use class midpoints for grouped mean.
- Use assumed mean and step deviation formulas.
- Arrange data before calculating median.
- Prepare cumulative frequency for median.
- Identify modal class.
- Choose the right average for a situation.
- Explain why mean is affected by extreme values.

---

## Final Takeaway

Measures of central tendency summarise data into one typical value. Mean is useful for complete numerical analysis, median is useful when position and extreme values matter, and mode is useful when the most common value is important. The best average depends on the purpose of the study.
