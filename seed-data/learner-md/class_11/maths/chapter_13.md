# Chapter 13 - Statistics

## 1. Chapter Purpose

Statistics is the part of mathematics that helps us collect, arrange, interpret, and compare data. In earlier classes, you learned how to find a single representative value for a set of observations. That representative value may be the mean, median, or mode.

This chapter takes the next step.

Two data sets may have the same mean and the same median, but they may still behave very differently. One data set may be tightly packed around the central value, while another may be widely scattered. To understand this scatter, we study dispersion.

The main goal of this chapter is to answer one question:

How far are the observations spread out from a central value?

By the end of this chapter, you should be able to:

- explain why mean, median, and mode are not enough to describe data completely
- calculate range for simple data
- calculate mean deviation about mean and median
- calculate mean deviation for ungrouped, discrete, and continuous data
- understand the limitation of mean deviation
- calculate variance and standard deviation
- use shortcut methods for grouped data
- understand what happens to variance and standard deviation when data is shifted or scaled
- correct mean and standard deviation when a wrong observation is found

## 2. Why Central Tendency Is Not Enough

A measure of central tendency tells us where the data is centered. The common measures are:

- mean
- median
- mode

But a central value does not tell us how the values are distributed around it.

Consider two batsmen and their runs in ten matches.

| Match | Batsman A | Batsman B |
|---:|---:|---:|
| 1 | 30 | 53 |
| 2 | 91 | 46 |
| 3 | 0 | 48 |
| 4 | 64 | 50 |
| 5 | 42 | 53 |
| 6 | 80 | 53 |
| 7 | 30 | 58 |
| 8 | 5 | 60 |
| 9 | 117 | 57 |
| 10 | 71 | 52 |

For both players:

- mean = 53
- median = 53

If we only look at mean and median, both players look equally consistent. But that is not true.

Batsman A has scores from 0 to 117. The scores are highly spread out.

Batsman B has scores from 46 to 60. The scores are tightly packed.

So Batsman B is more consistent even though both players have the same mean and median.

This shows the need for a measure of dispersion.

## 3. Dispersion

Dispersion means spread or scatter in data.

If observations are close to one another, dispersion is small.

If observations are far from one another, dispersion is large.

### 3.1 Simple Meaning

Suppose two data sets have the same mean:

| Data set | Observations | Mean |
|---|---|---:|
| A | 48, 50, 52 | 50 |
| B | 10, 50, 90 | 50 |

Both means are 50.

But in data set A, every value is close to 50.

In data set B, values are spread far away from 50.

So data set B has greater dispersion.

### 3.2 Measures Of Dispersion

This chapter studies the following measures:

| Measure | Basic idea |
|---|---|
| Range | Difference between the maximum and minimum values |
| Mean deviation | Average absolute distance from a central value |
| Variance | Average squared distance from the mean |
| Standard deviation | Positive square root of variance |

Quartile deviation is also a measure of dispersion, but it is not developed in this chapter.

## 4. Range

Range is the simplest measure of dispersion.

Range is defined as:

$$
\text{Range} = \text{Maximum value} - \text{Minimum value}
$$

For Batsman A:

$$
\text{Range} = 117 - 0 = 117
$$

For Batsman B:

$$
\text{Range} = 60 - 46 = 14
$$

Batsman A has a much larger range, so his scores are more scattered.

### 4.1 Strength Of Range

Range is easy to calculate.

It gives a quick first idea of spread.

### 4.2 Weakness Of Range

Range uses only two values:

- the smallest value
- the largest value

It ignores every other observation.

For example:

| Data set | Range |
|---|---:|
| 10, 11, 12, 13, 14 | 4 |
| 10, 10, 10, 10, 14 | 4 |

Both have the same range, but their internal spread is not the same.

Because of this, range is only a rough measure of dispersion.

## 5. Deviation From A Fixed Value

If an observation is \(x\) and a fixed value is \(a\), then the deviation of \(x\) from \(a\) is:

$$
x - a
$$

If \(x > a\), the deviation is positive.

If \(x < a\), the deviation is negative.

If \(x = a\), the deviation is zero.

Example:

| Observation \(x\) | Fixed value \(a\) | Deviation \(x-a\) |
|---:|---:|---:|
| 12 | 10 | 2 |
| 8 | 10 | -2 |
| 10 | 10 | 0 |

The difficulty is that positive and negative deviations may cancel out.

For example, the deviations \(2\), \(-2\), and \(0\) have sum:

$$
2 + (-2) + 0 = 0
$$

But the observations are not all equal. There is still spread.

To avoid cancellation, mean deviation uses absolute values.

## 6. Absolute Value And Distance

The absolute value of a number is its distance from zero.

For example:

$$
|5| = 5
$$

$$
|-5| = 5
$$

So the absolute value of a deviation gives the distance between the observation and the fixed value.

The absolute deviation of \(x\) from \(a\) is:

$$
|x-a|
$$

Mean deviation is built from these absolute deviations.

## 7. Mean Deviation

Mean deviation about a value \(a\) is the average of the absolute deviations from \(a\).

For observations \(x_1, x_2, x_3, \ldots, x_n\), mean deviation about \(a\) is:

$$
\text{M.D.}(a) = \frac{1}{n}\sum_{i=1}^{n}|x_i-a|
$$

Mean deviation is commonly calculated about:

- mean
- median

### 7.1 Mean Deviation About Mean

If the mean is \(\bar{x}\), then:

$$
\text{M.D.}(\bar{x}) = \frac{1}{n}\sum_{i=1}^{n}|x_i-\bar{x}|
$$

### 7.2 Mean Deviation About Median

If the median is \(M\), then:

$$
\text{M.D.}(M) = \frac{1}{n}\sum_{i=1}^{n}|x_i-M|
$$

## 8. Mean Deviation For Ungrouped Data

Ungrouped data is raw data where observations are listed one by one.

Example:

$$
6, 7, 10, 12, 13, 4, 8, 12
$$

### 8.1 Procedure For Mean Deviation About Mean

To find mean deviation about mean:

1. Find the mean \(\bar{x}\).
2. Subtract the mean from each observation.
3. Take absolute values of the deviations.
4. Add the absolute deviations.
5. Divide by the number of observations.

### 8.2 Solved Example: Mean Deviation About Mean

Find the mean deviation about the mean for:

$$
6, 7, 10, 12, 13, 4, 8, 12
$$

First find the mean:

$$
\bar{x} = \frac{6+7+10+12+13+4+8+12}{8}
$$

$$
\bar{x} = \frac{72}{8} = 9
$$

Now find deviations from 9 and their absolute values.

| \(x_i\) | \(x_i-\bar{x}\) | \(|x_i-\bar{x}|\) |
|---:|---:|---:|
| 6 | -3 | 3 |
| 7 | -2 | 2 |
| 10 | 1 | 1 |
| 12 | 3 | 3 |
| 13 | 4 | 4 |
| 4 | -5 | 5 |
| 8 | -1 | 1 |
| 12 | 3 | 3 |

Sum of absolute deviations:

$$
3+2+1+3+4+5+1+3 = 22
$$

Mean deviation about mean:

$$
\text{M.D.}(\bar{x}) = \frac{22}{8} = 2.75
$$

So the answer is:

$$
\boxed{2.75}
$$

### 8.3 Procedure For Mean Deviation About Median

To find mean deviation about median:

1. Arrange the observations in ascending order.
2. Find the median \(M\).
3. Subtract the median from each observation.
4. Take absolute values.
5. Add the absolute deviations.
6. Divide by the number of observations.

### 8.4 Solved Example: Mean Deviation About Median

Find the mean deviation about the median for:

$$
3, 9, 5, 3, 12, 10, 18, 4, 7, 19, 21
$$

Arrange the data:

$$
3, 3, 4, 5, 7, 9, 10, 12, 18, 19, 21
$$

There are 11 observations.

Since \(n\) is odd, median is the \(\frac{n+1}{2}\)th observation:

$$
\frac{11+1}{2} = 6
$$

So the median is the 6th observation:

$$
M = 9
$$

Now compute absolute deviations from 9.

| \(x_i\) | \(|x_i-M|\) |
|---:|---:|
| 3 | 6 |
| 3 | 6 |
| 4 | 5 |
| 5 | 4 |
| 7 | 2 |
| 9 | 0 |
| 10 | 1 |
| 12 | 3 |
| 18 | 9 |
| 19 | 10 |
| 21 | 12 |

Sum:

$$
6+6+5+4+2+0+1+3+9+10+12 = 58
$$

Therefore:

$$
\text{M.D.}(M) = \frac{58}{11}
$$

$$
\text{M.D.}(M) = 5.27 \text{ approximately}
$$

So the answer is:

$$
\boxed{5.27}
$$

## 9. Mean Deviation For Discrete Frequency Distribution

In a discrete frequency distribution, each observation has a frequency.

| Observation | \(x_1\) | \(x_2\) | \(x_3\) | ... | \(x_n\) |
|---|---:|---:|---:|---:|---:|
| Frequency | \(f_1\) | \(f_2\) | \(f_3\) | ... | \(f_n\) |

The total frequency is:

$$
N = \sum_{i=1}^{n} f_i
$$

The mean is:

$$
\bar{x} = \frac{\sum_{i=1}^{n}f_i x_i}{N}
$$

### 9.1 Mean Deviation About Mean For Discrete Data

The formula is:

$$
\text{M.D.}(\bar{x}) = \frac{1}{N}\sum_{i=1}^{n} f_i|x_i-\bar{x}|
$$

The frequency \(f_i\) matters because the observation \(x_i\) occurs \(f_i\) times.

### 9.2 Procedure

1. Find \(N = \sum f_i\).
2. Find \(\sum f_i x_i\).
3. Calculate \(\bar{x}\).
4. Find \(|x_i-\bar{x}|\) for every observation.
5. Multiply each absolute deviation by its frequency.
6. Add the products.
7. Divide by \(N\).

### 9.3 Worked Model: Mean Deviation About Mean

Suppose a discrete distribution gives the following totals after tabulation:

$$
N = 40
$$

$$
\sum f_i x_i = 300
$$

$$
\sum f_i|x_i-\bar{x}| = 92
$$

Then:

$$
\bar{x} = \frac{300}{40} = 7.5
$$

Mean deviation about mean:

$$
\text{M.D.}(\bar{x}) = \frac{92}{40}
$$

$$
\text{M.D.}(\bar{x}) = 2.3
$$

So the answer is:

$$
\boxed{2.3}
$$

### 9.4 Mean Deviation About Median For Discrete Data

For mean deviation about median:

$$
\text{M.D.}(M) = \frac{1}{N}\sum_{i=1}^{n} f_i|x_i-M|
$$

The main extra work is finding the median.

### 9.5 How To Find Median In Discrete Frequency Data

1. Arrange observations in ascending order.
2. Find cumulative frequency.
3. Find \(N\), the total frequency.
4. Locate the middle observation.

If \(N\) is odd, look for the \(\frac{N+1}{2}\)th observation.

If \(N\) is even, look at the \(\frac{N}{2}\)th and \(\left(\frac{N}{2}+1\right)\)th observations.

In many frequency tables, both middle positions may correspond to the same observation.

### 9.6 Solved Example: Mean Deviation About Median

Find the mean deviation about median for the following distribution.

| \(x_i\) | 3 | 6 | 9 | 12 | 13 | 15 | 21 | 22 |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| \(f_i\) | 3 | 4 | 5 | 2 | 4 | 5 | 4 | 3 |

First form cumulative frequencies.

| \(x_i\) | \(f_i\) | Cumulative frequency |
|---:|---:|---:|
| 3 | 3 | 3 |
| 6 | 4 | 7 |
| 9 | 5 | 12 |
| 12 | 2 | 14 |
| 13 | 4 | 18 |
| 15 | 5 | 23 |
| 21 | 4 | 27 |
| 22 | 3 | 30 |

Here:

$$
N = 30
$$

Since \(N\) is even, median is the average of the 15th and 16th observations.

The cumulative frequency reaches 18 at \(x_i=13\). So both the 15th and 16th observations are 13.

Thus:

$$
M = 13
$$

Now compute absolute deviations.

| \(x_i\) | \(f_i\) | \(|x_i-M|\) | \(f_i|x_i-M|\) |
|---:|---:|---:|---:|
| 3 | 3 | 10 | 30 |
| 6 | 4 | 7 | 28 |
| 9 | 5 | 4 | 20 |
| 12 | 2 | 1 | 2 |
| 13 | 4 | 0 | 0 |
| 15 | 5 | 2 | 10 |
| 21 | 4 | 8 | 32 |
| 22 | 3 | 9 | 27 |

Sum:

$$
\sum f_i|x_i-M| = 149
$$

Therefore:

$$
\text{M.D.}(M) = \frac{149}{30}
$$

$$
\text{M.D.}(M) = 4.97 \text{ approximately}
$$

So the answer is:

$$
\boxed{4.97}
$$

## 10. Mean Deviation For Continuous Frequency Distribution

In a continuous frequency distribution, observations are given in class intervals.

Example:

| Marks | 10-20 | 20-30 | 30-40 | 40-50 |
|---|---:|---:|---:|---:|
| Frequency | 2 | 3 | 8 | 14 |

In such data, individual observations are not listed.

So we use class midpoints.

The midpoint of a class is:

$$
x_i = \frac{\text{Lower limit}+\text{Upper limit}}{2}
$$

Example:

For the class 10-20:

$$
x_i = \frac{10+20}{2} = 15
$$

After replacing classes by midpoints, we treat the data like a discrete frequency distribution.

## 11. Mean Deviation About Mean For Continuous Data

The formula is:

$$
\text{M.D.}(\bar{x}) = \frac{1}{N}\sum f_i|x_i-\bar{x}|
$$

where \(x_i\) is the class midpoint.

### 11.1 Solved Example: Continuous Data

Find mean deviation about mean.

| Marks | 10-20 | 20-30 | 30-40 | 40-50 | 50-60 | 60-70 | 70-80 |
|---|---:|---:|---:|---:|---:|---:|---:|
| Frequency | 2 | 3 | 8 | 14 | 8 | 3 | 2 |

First find midpoints.

| Class | \(f_i\) | Midpoint \(x_i\) | \(f_i x_i\) |
|---|---:|---:|---:|
| 10-20 | 2 | 15 | 30 |
| 20-30 | 3 | 25 | 75 |
| 30-40 | 8 | 35 | 280 |
| 40-50 | 14 | 45 | 630 |
| 50-60 | 8 | 55 | 440 |
| 60-70 | 3 | 65 | 195 |
| 70-80 | 2 | 75 | 150 |

Totals:

$$
N = 40
$$

$$
\sum f_i x_i = 1800
$$

So:

$$
\bar{x} = \frac{1800}{40} = 45
$$

Now compute absolute deviations from 45.

| \(x_i\) | \(f_i\) | \(|x_i-\bar{x}|\) | \(f_i|x_i-\bar{x}|\) |
|---:|---:|---:|---:|
| 15 | 2 | 30 | 60 |
| 25 | 3 | 20 | 60 |
| 35 | 8 | 10 | 80 |
| 45 | 14 | 0 | 0 |
| 55 | 8 | 10 | 80 |
| 65 | 3 | 20 | 60 |
| 75 | 2 | 30 | 60 |

Sum:

$$
\sum f_i|x_i-\bar{x}| = 400
$$

Therefore:

$$
\text{M.D.}(\bar{x}) = \frac{400}{40} = 10
$$

So the answer is:

$$
\boxed{10}
$$

## 12. Shortcut Method For Mean In Continuous Data

When midpoints are large, calculation can be simplified with step deviations.

Choose:

- \(A\): assumed mean
- \(h\): common class width

Define:

$$
d_i = \frac{x_i-A}{h}
$$

Then:

$$
\bar{x} = A + h\left(\frac{\sum f_i d_i}{N}\right)
$$

After finding \(\bar{x}\), mean deviation is still calculated using:

$$
\text{M.D.}(\bar{x}) = \frac{1}{N}\sum f_i|x_i-\bar{x}|
$$

The shortcut only simplifies the calculation of the mean. It does not change the definition of mean deviation.

## 13. Median For Continuous Frequency Distribution

To find mean deviation about median in continuous data, first find the median.

The median formula is:

$$
M = l + \left(\frac{\frac{N}{2}-C}{f}\right)h
$$

where:

| Symbol | Meaning |
|---|---|
| \(l\) | lower limit of median class |
| \(N\) | total frequency |
| \(C\) | cumulative frequency before median class |
| \(f\) | frequency of median class |
| \(h\) | class width |

The median class is the class whose cumulative frequency is just greater than or equal to \(\frac{N}{2}\).

### 13.1 Mean Deviation About Median For Continuous Data

After finding median \(M\), use:

$$
\text{M.D.}(M) = \frac{1}{N}\sum f_i|x_i-M|
$$

Again, \(x_i\) is the midpoint of each class.

### 13.2 Solved Example: Mean Deviation About Median

Find mean deviation about median.

| Class | 0-10 | 10-20 | 20-30 | 30-40 | 40-50 | 50-60 |
|---|---:|---:|---:|---:|---:|---:|
| Frequency | 6 | 7 | 15 | 16 | 4 | 2 |

First form cumulative frequencies and midpoints.

| Class | \(f_i\) | Cumulative frequency | Midpoint \(x_i\) |
|---|---:|---:|---:|
| 0-10 | 6 | 6 | 5 |
| 10-20 | 7 | 13 | 15 |
| 20-30 | 15 | 28 | 25 |
| 30-40 | 16 | 44 | 35 |
| 40-50 | 4 | 48 | 45 |
| 50-60 | 2 | 50 | 55 |

Here:

$$
N = 50
$$

$$
\frac{N}{2} = 25
$$

The cumulative frequency just greater than or equal to 25 is 28, which corresponds to class 20-30.

So the median class is 20-30.

For the median class:

$$
l = 20,\quad C = 13,\quad f = 15,\quad h = 10
$$

Now:

$$
M = 20 + \left(\frac{25-13}{15}\right)10
$$

$$
M = 20 + \frac{12}{15}\times 10
$$

$$
M = 20 + 8 = 28
$$

Now calculate absolute deviations from 28.

| \(x_i\) | \(f_i\) | \(|x_i-M|\) | \(f_i|x_i-M|\) |
|---:|---:|---:|---:|
| 5 | 6 | 23 | 138 |
| 15 | 7 | 13 | 91 |
| 25 | 15 | 3 | 45 |
| 35 | 16 | 7 | 112 |
| 45 | 4 | 17 | 68 |
| 55 | 2 | 27 | 54 |

Sum:

$$
\sum f_i|x_i-M| = 508
$$

Therefore:

$$
\text{M.D.}(M) = \frac{508}{50} = 10.16
$$

So the answer is:

$$
\boxed{10.16}
$$

## 14. Limitations Of Mean Deviation

Mean deviation is useful because it measures average distance from a central value.

However, it has important limitations.

### 14.1 It Uses Absolute Values

Mean deviation uses \(|x_i-a|\). Absolute values are easy to understand, but they are not always convenient in algebra.

For example:

$$
|x-5|
$$

behaves differently depending on whether \(x\) is greater than or less than 5.

Because of this, mean deviation is not as easy to use in advanced mathematical work.

### 14.2 Median May Not Represent Highly Variable Data Well

If data is extremely scattered, median alone may not describe its center well enough for measuring spread.

### 14.3 Mean Deviation About Mean Is Not The Minimum

The sum of absolute deviations is smallest when deviations are taken from the median, not necessarily from the mean.

This makes mean deviation about mean less natural in some situations.

Because of these limitations, statistics often uses variance and standard deviation.

## 15. Variance

Mean deviation avoids cancellation by taking absolute values.

Variance avoids cancellation by squaring deviations.

Since squares are always non-negative, the positive and negative deviations do not cancel.

For observations:

$$
x_1, x_2, x_3, \ldots, x_n
$$

with mean \(\bar{x}\), variance is:

$$
\sigma^2 = \frac{1}{n}\sum_{i=1}^{n}(x_i-\bar{x})^2
$$

Variance is the mean of the squared deviations from the mean.

### 15.1 Why We Divide By Number Of Observations

The sum of squared deviations alone can be misleading.

A larger data set can naturally have a larger sum simply because it has more observations.

So we take the average squared deviation:

$$
\frac{1}{n}\sum (x_i-\bar{x})^2
$$

This gives a fairer measure of spread.

## 16. Standard Deviation

Variance is measured in square units.

For example, if data is in marks, variance is in square marks. That is not easy to interpret.

So we take the positive square root of variance.

Standard deviation is:

$$
\sigma = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(x_i-\bar{x})^2}
$$

Standard deviation is measured in the same unit as the original data.

### 16.1 Relationship Between Variance And Standard Deviation

If variance is known:

$$
\sigma^2 = \text{variance}
$$

then:

$$
\sigma = \sqrt{\text{variance}}
$$

If standard deviation is known:

$$
\text{variance} = \sigma^2
$$

## 17. Variance And Standard Deviation For Ungrouped Data

### 17.1 Procedure

1. Find the mean \(\bar{x}\).
2. Find deviations \(x_i-\bar{x}\).
3. Square each deviation.
4. Add the squared deviations.
5. Divide by \(n\) to get variance.
6. Take positive square root to get standard deviation.

### 17.2 Solved Example

Find the variance and standard deviation for:

$$
6, 8, 10, 12, 14, 16, 18, 20, 22, 24
$$

First find the mean.

The data forms an arithmetic pattern, so:

$$
\bar{x} = \frac{6+24}{2} = 15
$$

Now compute squared deviations.

| \(x_i\) | \(x_i-\bar{x}\) | \((x_i-\bar{x})^2\) |
|---:|---:|---:|
| 6 | -9 | 81 |
| 8 | -7 | 49 |
| 10 | -5 | 25 |
| 12 | -3 | 9 |
| 14 | -1 | 1 |
| 16 | 1 | 1 |
| 18 | 3 | 9 |
| 20 | 5 | 25 |
| 22 | 7 | 49 |
| 24 | 9 | 81 |

Sum:

$$
\sum (x_i-\bar{x})^2 = 330
$$

There are 10 observations, so:

$$
\sigma^2 = \frac{330}{10} = 33
$$

Therefore:

$$
\sigma = \sqrt{33}
$$

$$
\sigma \approx 5.74
$$

Answer:

$$
\boxed{\text{Variance} = 33,\quad \text{Standard deviation} \approx 5.74}
$$

## 18. Variance And Standard Deviation For Discrete Frequency Distribution

For a discrete frequency distribution:

$$
\sigma^2 = \frac{1}{N}\sum f_i(x_i-\bar{x})^2
$$

and:

$$
\sigma = \sqrt{\frac{1}{N}\sum f_i(x_i-\bar{x})^2}
$$

where:

$$
N = \sum f_i
$$

### 18.1 Procedure

1. Find \(N = \sum f_i\).
2. Find \(\sum f_i x_i\).
3. Find \(\bar{x}\).
4. Find \(x_i-\bar{x}\).
5. Square each deviation.
6. Multiply each squared deviation by \(f_i\).
7. Add the products.
8. Divide by \(N\) for variance.
9. Take positive square root for standard deviation.

### 18.2 Solved Example

Find variance and standard deviation.

| \(x_i\) | 4 | 8 | 11 | 17 | 20 | 24 | 32 |
|---:|---:|---:|---:|---:|---:|---:|---:|
| \(f_i\) | 3 | 5 | 9 | 5 | 4 | 3 | 1 |

First compute \(N\) and \(\sum f_i x_i\).

| \(x_i\) | \(f_i\) | \(f_i x_i\) |
|---:|---:|---:|
| 4 | 3 | 12 |
| 8 | 5 | 40 |
| 11 | 9 | 99 |
| 17 | 5 | 85 |
| 20 | 4 | 80 |
| 24 | 3 | 72 |
| 32 | 1 | 32 |

Totals:

$$
N = 30
$$

$$
\sum f_i x_i = 420
$$

Mean:

$$
\bar{x} = \frac{420}{30} = 14
$$

Now compute squared deviations.

| \(x_i\) | \(f_i\) | \(x_i-\bar{x}\) | \((x_i-\bar{x})^2\) | \(f_i(x_i-\bar{x})^2\) |
|---:|---:|---:|---:|---:|
| 4 | 3 | -10 | 100 | 300 |
| 8 | 5 | -6 | 36 | 180 |
| 11 | 9 | -3 | 9 | 81 |
| 17 | 5 | 3 | 9 | 45 |
| 20 | 4 | 6 | 36 | 144 |
| 24 | 3 | 10 | 100 | 300 |
| 32 | 1 | 18 | 324 | 324 |

Sum:

$$
\sum f_i(x_i-\bar{x})^2 = 1374
$$

Variance:

$$
\sigma^2 = \frac{1374}{30} = 45.8
$$

Standard deviation:

$$
\sigma = \sqrt{45.8}
$$

$$
\sigma \approx 6.77
$$

Answer:

$$
\boxed{\text{Variance} = 45.8,\quad \sigma \approx 6.77}
$$

## 19. Variance And Standard Deviation For Continuous Frequency Distribution

For continuous data, first convert each class interval into its midpoint.

Then apply the discrete frequency method.

For class midpoint \(x_i\):

$$
\sigma^2 = \frac{1}{N}\sum f_i(x_i-\bar{x})^2
$$

and:

$$
\sigma = \sqrt{\frac{1}{N}\sum f_i(x_i-\bar{x})^2}
$$

### 19.1 Solved Example

Find mean, variance, and standard deviation.

| Class | 30-40 | 40-50 | 50-60 | 60-70 | 70-80 | 80-90 | 90-100 |
|---|---:|---:|---:|---:|---:|---:|---:|
| Frequency | 3 | 7 | 12 | 15 | 8 | 3 | 2 |

First find midpoints.

| Class | \(f_i\) | \(x_i\) | \(f_i x_i\) |
|---|---:|---:|---:|
| 30-40 | 3 | 35 | 105 |
| 40-50 | 7 | 45 | 315 |
| 50-60 | 12 | 55 | 660 |
| 60-70 | 15 | 65 | 975 |
| 70-80 | 8 | 75 | 600 |
| 80-90 | 3 | 85 | 255 |
| 90-100 | 2 | 95 | 190 |

Totals:

$$
N = 50
$$

$$
\sum f_i x_i = 3100
$$

Mean:

$$
\bar{x} = \frac{3100}{50} = 62
$$

Now compute squared deviations from 62.

| \(x_i\) | \(f_i\) | \(x_i-\bar{x}\) | \((x_i-\bar{x})^2\) | \(f_i(x_i-\bar{x})^2\) |
|---:|---:|---:|---:|---:|
| 35 | 3 | -27 | 729 | 2187 |
| 45 | 7 | -17 | 289 | 2023 |
| 55 | 12 | -7 | 49 | 588 |
| 65 | 15 | 3 | 9 | 135 |
| 75 | 8 | 13 | 169 | 1352 |
| 85 | 3 | 23 | 529 | 1587 |
| 95 | 2 | 33 | 1089 | 2178 |

Sum:

$$
\sum f_i(x_i-\bar{x})^2 = 10050
$$

Variance:

$$
\sigma^2 = \frac{10050}{50} = 201
$$

Standard deviation:

$$
\sigma = \sqrt{201}
$$

$$
\sigma \approx 14.18
$$

Answer:

$$
\boxed{\bar{x}=62,\quad \sigma^2=201,\quad \sigma\approx 14.18}
$$

## 20. Computational Formula For Variance

Sometimes calculating deviations from the mean is long.

A useful formula is:

$$
\sigma^2 = \frac{\sum f_i x_i^2}{N} - \left(\frac{\sum f_i x_i}{N}\right)^2
$$

For ungrouped data, this becomes:

$$
\sigma^2 = \frac{\sum x_i^2}{n} - \bar{x}^2
$$

This formula is especially useful when values are already arranged in a frequency table.

### 20.1 Solved Example

Find the standard deviation.

| \(x_i\) | 3 | 8 | 13 | 18 | 23 |
|---:|---:|---:|---:|---:|---:|
| \(f_i\) | 7 | 10 | 15 | 10 | 6 |

Make the table.

| \(x_i\) | \(f_i\) | \(f_i x_i\) | \(x_i^2\) | \(f_i x_i^2\) |
|---:|---:|---:|---:|---:|
| 3 | 7 | 21 | 9 | 63 |
| 8 | 10 | 80 | 64 | 640 |
| 13 | 15 | 195 | 169 | 2535 |
| 18 | 10 | 180 | 324 | 3240 |
| 23 | 6 | 138 | 529 | 3174 |

Totals:

$$
N = 48
$$

$$
\sum f_i x_i = 614
$$

$$
\sum f_i x_i^2 = 9652
$$

Now:

$$
\sigma^2 = \frac{9652}{48} - \left(\frac{614}{48}\right)^2
$$

This gives:

$$
\sigma \approx 6.12
$$

Answer:

$$
\boxed{\sigma \approx 6.12}
$$

## 21. Shortcut Method For Variance And Standard Deviation

When \(x_i\) values are large or class intervals are wide, use step deviations.

Choose:

- assumed mean \(A\)
- class width or common factor \(h\)

Define:

$$
y_i = \frac{x_i-A}{h}
$$

Then:

$$
\bar{x} = A + h\left(\frac{\sum f_i y_i}{N}\right)
$$

Variance is:

$$
\sigma^2 = h^2\left[\frac{\sum f_i y_i^2}{N} - \left(\frac{\sum f_i y_i}{N}\right)^2\right]
$$

Standard deviation is:

$$
\sigma = h\sqrt{\frac{\sum f_i y_i^2}{N} - \left(\frac{\sum f_i y_i}{N}\right)^2}
$$

### 21.1 Solved Example: Shortcut Method

Use the shortcut method for the following distribution.

| Class | 30-40 | 40-50 | 50-60 | 60-70 | 70-80 | 80-90 | 90-100 |
|---|---:|---:|---:|---:|---:|---:|---:|
| Frequency | 3 | 7 | 12 | 15 | 8 | 3 | 2 |

Midpoints are:

$$
35, 45, 55, 65, 75, 85, 95
$$

Choose:

$$
A = 65,\quad h = 10
$$

Then:

$$
y_i = \frac{x_i-65}{10}
$$

Make the table.

| \(x_i\) | \(f_i\) | \(y_i\) | \(y_i^2\) | \(f_i y_i\) | \(f_i y_i^2\) |
|---:|---:|---:|---:|---:|---:|
| 35 | 3 | -3 | 9 | -9 | 27 |
| 45 | 7 | -2 | 4 | -14 | 28 |
| 55 | 12 | -1 | 1 | -12 | 12 |
| 65 | 15 | 0 | 0 | 0 | 0 |
| 75 | 8 | 1 | 1 | 8 | 8 |
| 85 | 3 | 2 | 4 | 6 | 12 |
| 95 | 2 | 3 | 9 | 6 | 18 |

Totals:

$$
N = 50
$$

$$
\sum f_i y_i = -15
$$

$$
\sum f_i y_i^2 = 105
$$

Mean:

$$
\bar{x} = 65 + 10\left(\frac{-15}{50}\right)
$$

$$
\bar{x} = 65 - 3 = 62
$$

Variance:

$$
\sigma^2 = 10^2\left[\frac{105}{50} - \left(\frac{-15}{50}\right)^2\right]
$$

$$
\sigma^2 = 100\left[2.1 - 0.09\right]
$$

$$
\sigma^2 = 100(2.01) = 201
$$

Standard deviation:

$$
\sigma = \sqrt{201} \approx 14.18
$$

Answer:

$$
\boxed{\bar{x}=62,\quad \sigma^2=201,\quad \sigma\approx 14.18}
$$

## 22. Effect Of Adding Or Subtracting A Constant

Suppose every observation is increased by a constant \(a\).

If:

$$
y_i = x_i + a
$$

then the new mean is:

$$
\bar{y} = \bar{x} + a
$$

But the deviation from the new mean is:

$$
y_i-\bar{y} = (x_i+a)-(\bar{x}+a)
$$

$$
y_i-\bar{y} = x_i-\bar{x}
$$

So the deviations do not change.

Therefore:

$$
\text{New variance} = \text{Old variance}
$$

and:

$$
\text{New standard deviation} = \text{Old standard deviation}
$$

### 22.1 Key Rule

Adding or subtracting the same constant from every observation does not change variance or standard deviation.

It only shifts the data.

## 23. Effect Of Multiplying Every Observation By A Constant

Suppose every observation is multiplied by \(k\).

If:

$$
y_i = kx_i
$$

then the new mean is:

$$
\bar{y} = k\bar{x}
$$

The new deviations are:

$$
y_i-\bar{y} = kx_i-k\bar{x}
$$

$$
y_i-\bar{y} = k(x_i-\bar{x})
$$

When deviations are squared:

$$
(y_i-\bar{y})^2 = k^2(x_i-\bar{x})^2
$$

Therefore:

$$
\text{New variance} = k^2(\text{Old variance})
$$

and:

$$
\text{New standard deviation} = |k|(\text{Old standard deviation})
$$

### 23.1 Solved Example

The variance of 20 observations is 5. Each observation is multiplied by 2. Find the new variance.

Here:

$$
k = 2
$$

New variance:

$$
k^2 \times \text{old variance} = 2^2 \times 5
$$

$$
= 4 \times 5 = 20
$$

Answer:

$$
\boxed{20}
$$

## 24. Finding Missing Observations From Mean And Variance

Sometimes the mean and variance are known, and some observations are missing.

The usual method is:

1. Use the mean to form an equation in the missing observations.
2. Use the variance to form a second equation.
3. Solve the two equations.

### 24.1 Solved Example

The mean of 5 observations is 4.4 and their variance is 8.24. Three observations are 1, 2, and 6. Find the other two observations.

Let the missing observations be \(x\) and \(y\).

The observations are:

$$
1, 2, 6, x, y
$$

Mean:

$$
\frac{1+2+6+x+y}{5} = 4.4
$$

$$
1+2+6+x+y = 22
$$

$$
x+y = 13
$$

Now use variance:

$$
\sigma^2 = \frac{1}{n}\sum (x_i-\bar{x})^2
$$

Here:

$$
\bar{x}=4.4,\quad \sigma^2=8.24,\quad n=5
$$

So:

$$
\sum (x_i-\bar{x})^2 = 5(8.24) = 41.20
$$

Using the known values and simplifying gives:

$$
x^2+y^2 = 97
$$

We now have:

$$
x+y = 13
$$

and:

$$
x^2+y^2 = 97
$$

Square the first equation:

$$
(x+y)^2 = 13^2
$$

$$
x^2+y^2+2xy = 169
$$

Substitute \(x^2+y^2=97\):

$$
97 + 2xy = 169
$$

$$
2xy = 72
$$

$$
xy = 36
$$

So \(x\) and \(y\) have:

$$
x+y=13,\quad xy=36
$$

The numbers are 4 and 9.

Answer:

$$
\boxed{4,\ 9}
$$

## 25. Correcting Mean And Standard Deviation

Sometimes mean and standard deviation are calculated with an incorrect observation.

To correct them, use:

$$
\text{Correct sum} = \text{Incorrect sum} - \text{Wrong value} + \text{Correct value}
$$

For standard deviation, it is often easier to use:

$$
\sigma^2 = \frac{\sum x_i^2}{n} - \bar{x}^2
$$

So you need to correct both:

- \(\sum x_i\)
- \(\sum x_i^2\)

### 25.1 Solved Example

The mean and standard deviation of 100 observations were calculated as 40 and 5.1. Later it was found that 50 was taken instead of 40 for one observation. Find the correct mean and standard deviation.

Given:

$$
n = 100
$$

Incorrect mean:

$$
\bar{x} = 40
$$

Incorrect standard deviation:

$$
\sigma = 5.1
$$

Incorrect sum:

$$
\sum x_i = n\bar{x} = 100 \times 40 = 4000
$$

Correct sum:

$$
4000 - 50 + 40 = 3990
$$

Correct mean:

$$
\frac{3990}{100} = 39.9
$$

Now use:

$$
\sigma^2 = \frac{\sum x_i^2}{n} - \bar{x}^2
$$

For the incorrect calculation:

$$
5.1^2 = \frac{\sum x_i^2}{100} - 40^2
$$

$$
26.01 = \frac{\sum x_i^2}{100} - 1600
$$

$$
\frac{\sum x_i^2}{100} = 1626.01
$$

$$
\sum x_i^2 = 162601
$$

Correct the sum of squares:

$$
\text{Correct } \sum x_i^2 = 162601 - 50^2 + 40^2
$$

$$
= 162601 - 2500 + 1600 = 161701
$$

Correct variance:

$$
\sigma^2 = \frac{161701}{100} - 39.9^2
$$

$$
\sigma^2 = 1617.01 - 1592.01 = 25
$$

Correct standard deviation:

$$
\sigma = \sqrt{25} = 5
$$

Answer:

$$
\boxed{\text{Correct mean} = 39.9,\quad \text{Correct standard deviation} = 5}
$$

## 26. Choosing The Right Measure

| Measure | Best used when | Main weakness |
|---|---|---|
| Range | You need a quick rough spread | Uses only two observations |
| Mean deviation | You want average absolute distance | Harder for algebraic work |
| Variance | You need mathematically useful spread | Unit is squared |
| Standard deviation | You need interpretable spread with original unit | Requires more calculation |

Standard deviation is the most widely used measure because it uses all observations and has good algebraic properties.

## 27. Common Mistakes

### 27.1 Forgetting Absolute Value In Mean Deviation

Wrong:

$$
\text{M.D.} = \frac{\sum (x_i-\bar{x})}{n}
$$

This can become zero because deviations from the mean add to zero.

Correct:

$$
\text{M.D.} = \frac{\sum |x_i-\bar{x}|}{n}
$$

### 27.2 Using Class Limits Instead Of Midpoints

For continuous frequency distributions, use midpoints.

For class 20-30:

$$
x_i = 25
$$

Do not use 20 or 30 as the representative value.

### 27.3 Confusing Variance And Standard Deviation

Variance:

$$
\sigma^2
$$

Standard deviation:

$$
\sigma
$$

They are not the same.

### 27.4 Forgetting Frequencies

For frequency distributions, every term must be multiplied by frequency.

For example:

$$
\sum f_i(x_i-\bar{x})^2
$$

not:

$$
\sum (x_i-\bar{x})^2
$$

### 27.5 Using Wrong Median Class

In continuous data, the median class is found using cumulative frequency and \(\frac{N}{2}\).

Do not choose the class with the highest frequency unless it also contains the median position.

## 28. Formula Sheet

### 28.1 Range

$$
\text{Range} = \text{Maximum value} - \text{Minimum value}
$$

### 28.2 Mean Deviation: Ungrouped Data

$$
\text{M.D.}(a) = \frac{1}{n}\sum |x_i-a|
$$

About mean:

$$
\text{M.D.}(\bar{x}) = \frac{1}{n}\sum |x_i-\bar{x}|
$$

About median:

$$
\text{M.D.}(M) = \frac{1}{n}\sum |x_i-M|
$$

### 28.3 Mean Deviation: Frequency Data

$$
\text{M.D.}(a) = \frac{1}{N}\sum f_i|x_i-a|
$$

About mean:

$$
\text{M.D.}(\bar{x}) = \frac{1}{N}\sum f_i|x_i-\bar{x}|
$$

About median:

$$
\text{M.D.}(M) = \frac{1}{N}\sum f_i|x_i-M|
$$

### 28.4 Mean For Frequency Data

$$
\bar{x} = \frac{\sum f_i x_i}{N}
$$

### 28.5 Median For Continuous Data

$$
M = l + \left(\frac{\frac{N}{2}-C}{f}\right)h
$$

### 28.6 Variance And Standard Deviation: Ungrouped

$$
\sigma^2 = \frac{1}{n}\sum (x_i-\bar{x})^2
$$

$$
\sigma = \sqrt{\frac{1}{n}\sum (x_i-\bar{x})^2}
$$

### 28.7 Variance And Standard Deviation: Frequency Data

$$
\sigma^2 = \frac{1}{N}\sum f_i(x_i-\bar{x})^2
$$

$$
\sigma = \sqrt{\frac{1}{N}\sum f_i(x_i-\bar{x})^2}
$$

### 28.8 Computational Formula

$$
\sigma^2 = \frac{\sum f_i x_i^2}{N} - \left(\frac{\sum f_i x_i}{N}\right)^2
$$

### 28.9 Step Deviation Formula

$$
y_i = \frac{x_i-A}{h}
$$

$$
\bar{x} = A + h\left(\frac{\sum f_i y_i}{N}\right)
$$

$$
\sigma^2 = h^2\left[\frac{\sum f_i y_i^2}{N} - \left(\frac{\sum f_i y_i}{N}\right)^2\right]
$$

$$
\sigma = h\sqrt{\frac{\sum f_i y_i^2}{N} - \left(\frac{\sum f_i y_i}{N}\right)^2}
$$

## 29. Exam Strategy

### 29.1 When A Question Says Mean Deviation

First check whether it asks about:

- mean
- median

Then choose the correct central value.

### 29.2 When Data Is Ungrouped

Use:

$$
\frac{\sum |x_i-a|}{n}
$$

or:

$$
\frac{\sum (x_i-\bar{x})^2}{n}
$$

depending on the question.

### 29.3 When Data Has Frequencies

Always use \(f_i\).

For mean deviation:

$$
\sum f_i|x_i-a|
$$

For variance:

$$
\sum f_i(x_i-\bar{x})^2
$$

### 29.4 When Data Has Classes

Find midpoints first.

Then use the same frequency methods.

### 29.5 When Values Are Large

Use:

$$
y_i = \frac{x_i-A}{h}
$$

This reduces arithmetic.

## 30. Practice Set A: Concept Checks

1. Why can two data sets with the same mean still have different consistency?
2. What does dispersion measure?
3. Why is range considered a rough measure?
4. Why do we use absolute values in mean deviation?
5. Why do we square deviations in variance?
6. Why is standard deviation preferred over variance for interpretation?
7. What is the role of class midpoint in continuous frequency distribution?
8. What happens to variance if every observation is increased by 10?
9. What happens to standard deviation if every observation is multiplied by 3?
10. Why should the median class be found using cumulative frequency?

## 31. Practice Set B: Direct Calculation

### 31.1 Range

Find the range:

$$
12, 18, 7, 25, 20, 9
$$

Answer:

$$
25-7 = 18
$$

### 31.2 Mean Deviation About Mean

Find the mean deviation about mean:

$$
4, 7, 8, 9, 10, 12, 13, 17
$$

Guidance:

First find:

$$
\bar{x} = 10
$$

Then calculate:

$$
\frac{\sum |x_i-10|}{8}
$$

### 31.3 Mean Deviation About Median

Find the mean deviation about median:

$$
13, 17, 16, 14, 11, 13, 10, 16, 11, 18, 12, 17
$$

Guidance:

Arrange the observations first, then find the average of the 6th and 7th observations.

### 31.4 Variance

Find variance:

$$
2, 4, 6, 8, 10
$$

Mean:

$$
\bar{x}=6
$$

Squared deviations:

$$
16, 4, 0, 4, 16
$$

Variance:

$$
\sigma^2 = \frac{40}{5} = 8
$$

Standard deviation:

$$
\sigma = \sqrt{8} = 2\sqrt{2}
$$

## 32. Practice Set C: Frequency Distribution

Find mean deviation about mean.

| \(x_i\) | 5 | 10 | 15 | 20 | 25 |
|---:|---:|---:|---:|---:|---:|
| \(f_i\) | 7 | 4 | 6 | 3 | 5 |

Suggested table columns:

| Column | Meaning |
|---|---|
| \(x_i\) | observation |
| \(f_i\) | frequency |
| \(f_i x_i\) | product for mean |
| \(|x_i-\bar{x}|\) | absolute deviation |
| \(f_i|x_i-\bar{x}|\) | weighted absolute deviation |

Final formula:

$$
\text{M.D.}(\bar{x}) = \frac{\sum f_i|x_i-\bar{x}|}{N}
$$

## 33. Practice Set D: Continuous Distribution

Find mean and standard deviation.

| Class | 0-10 | 10-20 | 20-30 | 30-40 | 40-50 |
|---|---:|---:|---:|---:|---:|
| Frequency | 5 | 8 | 15 | 16 | 6 |

Steps:

1. Find midpoints.
2. Find \(\sum f_i x_i\).
3. Find mean.
4. Find either deviations or use the computational formula.
5. Calculate variance.
6. Take square root for standard deviation.

## 34. Practice Set E: Transformation Questions

### 34.1 Scaling

The variance of 15 observations is 12. Each observation is multiplied by 4. Find the new variance.

Solution:

$$
\text{New variance} = 4^2 \times 12 = 192
$$

### 34.2 Shifting

The standard deviation of a data set is 6. Each observation is increased by 25. Find the new standard deviation.

Solution:

Adding a constant does not change standard deviation.

Answer:

$$
\boxed{6}
$$

### 34.3 Combined Change

If every observation is changed from \(x_i\) to \(3x_i+7\), what happens to variance?

The multiplication by 3 changes variance by \(3^2\).

The addition of 7 does not change variance.

So:

$$
\text{New variance} = 9 \times \text{Old variance}
$$

## 35. Learner Checklist

Before leaving this chapter, make sure you can do the following without looking at notes:

- define dispersion
- calculate range
- explain why range is rough
- calculate mean deviation about mean for ungrouped data
- calculate mean deviation about median for ungrouped data
- use frequencies in mean deviation
- find median from cumulative frequency
- use midpoints for continuous data
- calculate variance for ungrouped data
- calculate standard deviation for grouped data
- use the computational formula for variance
- use shortcut method with \(y_i = \frac{x_i-A}{h}\)
- state what happens when all observations are increased by a constant
- state what happens when all observations are multiplied by a constant
- correct mean and standard deviation after a wrong observation is found

## 36. One Page Revision

Dispersion measures how spread out data is.

Range:

$$
\text{Range} = \text{Maximum} - \text{Minimum}
$$

Mean deviation about \(a\):

$$
\text{M.D.}(a) = \frac{1}{n}\sum |x_i-a|
$$

Frequency form:

$$
\text{M.D.}(a) = \frac{1}{N}\sum f_i|x_i-a|
$$

Variance:

$$
\sigma^2 = \frac{1}{n}\sum (x_i-\bar{x})^2
$$

Frequency form:

$$
\sigma^2 = \frac{1}{N}\sum f_i(x_i-\bar{x})^2
$$

Standard deviation:

$$
\sigma = \sqrt{\sigma^2}
$$

Computational formula:

$$
\sigma^2 = \frac{\sum f_i x_i^2}{N} - \left(\frac{\sum f_i x_i}{N}\right)^2
$$

Step deviation:

$$
y_i = \frac{x_i-A}{h}
$$

$$
\sigma^2 = h^2\left[\frac{\sum f_i y_i^2}{N} - \left(\frac{\sum f_i y_i}{N}\right)^2\right]
$$

Transformation rules:

- adding or subtracting a constant does not change variance or standard deviation
- multiplying every observation by \(k\) makes variance \(k^2\) times
- multiplying every observation by \(k\) makes standard deviation \(|k|\) times

