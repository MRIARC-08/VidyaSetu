# Chapter 7: Correlation
### NCERT Class 11 Statistics for Economics

---

## Chapter Purpose

This chapter explains how the relationship between two variables is studied. In Economics, many variables move together: income and consumption, price and demand, rainfall and crop output, money supply and price level. Correlation helps measure the direction and degree of such relationship.

The main idea is:

> Correlation measures how two variables vary together.

Correlation does not automatically prove cause and effect. It only tells whether variables move together, in opposite directions, or show little systematic movement.

---

## Learning Outcomes

After studying this chapter, you should be able to:

1. Define correlation.
2. Explain positive, negative, zero, linear, and non-linear correlation.
3. Understand why correlation is useful in Economics.
4. Interpret scatter diagrams.
5. Calculate Karl Pearson's coefficient of correlation.
6. Understand covariance and standard deviation in correlation.
7. Use the step deviation method for correlation.
8. Calculate Spearman's rank correlation.
9. Handle repeated ranks in rank correlation.
10. Explain why correlation does not imply causation.

---

## 1. Meaning of Correlation

Correlation is a statistical measure that studies the relationship between two variables.

If changes in one variable are associated with changes in another variable, the variables are said to be correlated.

Examples:

| Variable X | Variable Y | Likely relationship |
|---|---|---|
| Income | Consumption | Positive |
| Price | Demand | Negative |
| Rainfall | Crop output | Positive, in many cases |
| Advertising expenditure | Sales | Positive, if advertising works |
| Temperature | Demand for woollen clothes | Negative |

Correlation asks two questions:

1. Do the variables move together?
2. How strong is the relationship?

---

## 2. Correlation Is Not Causation

This is the most important warning in the chapter.

Correlation means two variables move together in some way. It does not prove that one variable causes the other.

Example:

Ice cream sales and temperature may rise together. This relationship has a meaningful explanation.

But the arrival of migratory birds and birth rate in a locality may move together by coincidence. It would be wrong to say one causes the other without proper reasoning.

Use this rule:

> Correlation suggests association. Causation needs theory, logic, and evidence.

---

## 3. Types of Correlation

### 3.1 Positive Correlation

Positive correlation exists when two variables move in the same direction.

If X increases, Y also tends to increase. If X decreases, Y also tends to decrease.

Examples:

- Income and consumption
- Study time and marks
- Irrigation and crop yield
- Advertising and sales

### 3.2 Negative Correlation

Negative correlation exists when two variables move in opposite directions.

If X increases, Y tends to decrease. If X decreases, Y tends to increase.

Examples:

- Price and demand
- Temperature and demand for woollen clothes
- Interest rate and borrowing

### 3.3 Zero Correlation

Zero correlation means there is no systematic linear relationship between the variables.

Example:

Shoe size and marks in Economics are likely to have no meaningful relationship.

### 3.4 Linear Correlation

Linear correlation exists when the relationship between two variables can be approximately represented by a straight line.

Karl Pearson's coefficient is mainly used for linear relationship.

### 3.5 Non-Linear Correlation

Non-linear correlation exists when the relationship cannot be represented well by a straight line.

Example:

A variable may first increase with another variable, then decrease after a point. A straight-line correlation measure may fail to capture this properly.

---

## 4. Scatter Diagram

A scatter diagram is a graph showing paired observations of two variables.

Steps:

1. Put variable X on the x-axis.
2. Put variable Y on the y-axis.
3. Plot each pair of values as a point.
4. Observe the pattern of points.

### Interpreting Scatter Diagrams

| Pattern | Meaning |
|---|---|
| Points slope upward | Positive correlation |
| Points slope downward | Negative correlation |
| Points lie close to a straight line | Strong correlation |
| Points are widely scattered | Weak correlation |
| Points show no pattern | Little or no correlation |
| Points form a curve | Non-linear relationship |

Scatter diagrams should be examined before calculating correlation because they reveal the shape of the relationship.

---

## 5. Karl Pearson's Coefficient of Correlation

Karl Pearson's coefficient of correlation, usually denoted by r, measures the degree and direction of linear relationship between two variables.

Range:

```text
-1 <= r <= +1
```

Interpretation:

| Value of r | Meaning |
|---|---|
| +1 | Perfect positive correlation |
| Close to +1 | Strong positive correlation |
| 0 | No linear correlation |
| Close to -1 | Strong negative correlation |
| -1 | Perfect negative correlation |

If r is outside the range -1 to +1, there is a calculation error.

---

## 6. Formula of Pearson's r

Using deviations from means:

```text
r = Sigma xy / sqrt(Sigma x^2 x Sigma y^2)
```

Where:

| Symbol | Meaning |
|---|---|
| x | X - Xbar |
| y | Y - Ybar |
| Sigma xy | Sum of products of deviations |
| Sigma x^2 | Sum of squared deviations of X |
| Sigma y^2 | Sum of squared deviations of Y |

### Steps

1. Calculate mean of X.
2. Calculate mean of Y.
3. Find x = X - Xbar.
4. Find y = Y - Ybar.
5. Calculate xy, x squared, and y squared.
6. Substitute in formula.

---

## 7. Direct Formula for Pearson's r

Another commonly used formula:

```text
r = [N Sigma XY - (Sigma X)(Sigma Y)] /
    sqrt([N Sigma X^2 - (Sigma X)^2] [N Sigma Y^2 - (Sigma Y)^2])
```

Where N is the number of pairs.

Use this when raw X and Y values are given and direct computation is convenient.

---

## 8. Step Deviation Method

When values are large, calculations can be simplified by changing origin and scale.

Transform:

```text
u = (X - A) / h
v = (Y - B) / k
```

Where:

| Symbol | Meaning |
|---|---|
| A | Assumed mean of X |
| B | Assumed mean of Y |
| h | Common factor for X |
| k | Common factor for Y |

The value of correlation remains unchanged if origin and scale are changed in this way, provided scale factors have the same sign.

Important property:

> Correlation is unaffected by change of origin and scale.

---

## 9. Spearman's Rank Correlation

Spearman's rank correlation measures correlation between ranks.

It is useful when:

- Exact values are not available.
- Variables are qualitative but can be ranked.
- Data involves preferences, ability, beauty, honesty, or similar attributes.
- We compare ranks given by judges or examiners.

### Formula Without Repeated Ranks

```text
rk = 1 - [6 Sigma D^2 / (N^3 - N)]
```

Where:

| Symbol | Meaning |
|---|---|
| rk | Spearman's rank correlation |
| D | Difference between ranks |
| N | Number of paired ranks |

### Steps

1. Rank X values.
2. Rank Y values.
3. Find D = Rank X - Rank Y.
4. Square D.
5. Add D squared.
6. Apply formula.

---

## 10. Repeated Ranks

If two or more observations have the same value, they receive the average of the ranks they occupy.

Example:

If two values are tied for rank 3 and 4, each gets:

```text
(3 + 4) / 2 = 3.5
```

When repeated ranks occur, a correction factor is added:

```text
(m^3 - m) / 12
```

Where m is the number of times a rank is repeated.

The corrected rank formula uses:

```text
Sigma D^2 + correction factor
```

Repeated ranks are common in marks, scores, ratings, or grouped observations.

---

## 11. Pearson vs Spearman

| Basis | Pearson's r | Spearman's rank correlation |
|---|---|---|
| Data type | Actual numerical values | Ranks |
| Relationship measured | Linear relationship | Rank association |
| Use when | Variables are measurable | Variables are ranked or qualitative |
| Sensitive to extreme values | More sensitive | Less sensitive |
| Example | Income and consumption | Ranking students by two judges |

---

## 12. Properties of Correlation Coefficient

| Property | Meaning |
|---|---|
| Range is -1 to +1 | Values outside this range are impossible |
| Sign shows direction | Positive or negative relationship |
| Magnitude shows strength | Closer to 1 means stronger |
| Unit-free | Correlation has no unit |
| Unaffected by origin and scale | Changing units does not change r |
| Measures association, not causation | Interpretation needs economic logic |

---

## 13. Common Mistakes

| Mistake | Correct understanding |
|---|---|
| Saying correlation proves causation | Correlation only shows association. |
| Ignoring scatter diagram | Scatter plot helps identify linear or non-linear relationship. |
| Using Pearson's r for curved relationship | Pearson's r is mainly for linear relationship. |
| Getting r greater than 1 or less than -1 | This indicates calculation error. |
| Confusing sign and strength | Sign gives direction; absolute value gives strength. |
| Forgetting repeated rank correction | Tied ranks need correction. |
| Ranking in different directions | Ranks must be assigned consistently. |

---

## 14. Formula Board

| Measure | Formula |
|---|---|
| Pearson's r, deviation form | r = Sigma xy / sqrt(Sigma x^2 x Sigma y^2) |
| Pearson's r, direct form | r = [N Sigma XY - Sigma X Sigma Y] / sqrt([N Sigma X^2 - (Sigma X)^2][N Sigma Y^2 - (Sigma Y)^2]) |
| Step deviation variables | u = (X - A)/h, v = (Y - B)/k |
| Spearman's rank correlation | rk = 1 - [6 Sigma D^2 / (N^3 - N)] |
| Repeated rank correction | (m^3 - m) / 12 |

---

## 15. Answer Frames

### Frame 1: Meaning and Types of Correlation

1. Define correlation.
2. Explain movement between two variables.
3. Distinguish positive, negative, and zero correlation.
4. Add examples from Economics.
5. Mention that correlation does not prove causation.

### Frame 2: Scatter Diagram

1. Define scatter diagram.
2. Explain plotting paired values.
3. Interpret upward, downward, scattered, and curved patterns.
4. State why it should be examined before Pearson's r.

### Frame 3: Pearson's Coefficient

1. Define Pearson's r.
2. State range -1 to +1.
3. Write formula.
4. Explain sign and magnitude.
5. Mention use for linear relationship.

### Frame 4: Spearman's Rank Correlation

1. Define rank correlation.
2. State where it is useful.
3. Write formula.
4. Explain rank difference and repeated rank correction.

---

## 16. Practice Questions

### Short Answer Questions

1. What is correlation?
2. Define positive correlation.
3. Define negative correlation.
4. What is zero correlation?
5. What is a scatter diagram?
6. What is Karl Pearson's coefficient of correlation?
7. What is the range of r?
8. What does r = -1 mean?
9. What is Spearman's rank correlation?
10. What is repeated rank correction?

### Long Answer Questions

1. Explain the meaning and types of correlation with examples.
2. Explain scatter diagram and its interpretation.
3. Explain Karl Pearson's coefficient of correlation.
4. Distinguish between Pearson's and Spearman's correlation.
5. Explain why correlation does not imply causation.
6. Explain rank correlation and treatment of repeated ranks.

---

## 17. Learner Checklist

Before leaving this chapter, make sure you can:

- Identify positive and negative relationships.
- Interpret a scatter diagram.
- Explain why correlation is not causation.
- Use Pearson's formula.
- Interpret r values correctly.
- Use rank correlation when data is ranked.
- Treat repeated ranks correctly.
- Choose Pearson or Spearman according to the data.

---

## Final Takeaway

Correlation helps measure the direction and strength of association between two variables. It is useful in Economics because many economic variables move together, but every correlation must be interpreted with logic and caution. A strong correlation is not automatically a cause-and-effect proof.
