# Chapter 13: Statistics
### NCERT Class 10 - Maths

This learner version rewrites the raw chapter into a structured guide for grouped-data statistics. It explains mean, mode, median, cumulative frequency, and gives solved exercise results with the key setup needed to reproduce each answer.

---

## Chapter at a Glance

| Item | Details |
|---|---|
| Class | 10 |
| Subject | Maths |
| Chapter | 13 |
| Chapter name | Statistics |
| Main topics | Mean, mode, median of grouped data |
| New idea | Cumulative frequency |
| Common tools | Class mark, assumed mean, step deviation, modal class, median class |

---

## Learning Outcomes

By the end of this chapter, you should be able to:

1. find class marks of grouped data;
2. calculate mean by direct method;
3. calculate mean by assumed mean method;
4. calculate mean by step-deviation method;
5. identify the modal class and calculate mode;
6. prepare less-than and more-than cumulative frequency tables;
7. identify the median class and calculate median;
8. choose the most suitable central tendency for a situation;
9. interpret mean, median, and mode in context.

---

## Key Terms

| Term | Meaning |
|---|---|
| Frequency | Number of observations in a class |
| Class mark | Midpoint of a class interval |
| Mean | Average value of observations |
| Mode | Most frequent value or typical value in modal class |
| Median | Middle value dividing data into two equal halves |
| Modal class | Class with maximum frequency |
| Median class | Class whose cumulative frequency first exceeds `n/2` |
| Cumulative frequency | Running total of frequencies |
| Assumed mean | Convenient central value chosen to simplify calculation |
| Step deviation | Simplified deviations divided by class width |

---

# Unit 13A: Mean of Grouped Data

## Class Mark

For a class interval:

$$
\text{class mark}=\frac{\text{lower limit}+\text{upper limit}}{2}
$$

Class marks are used as representative values of their classes.

## Direct Method

If `x_i` is class mark and `f_i` is frequency:

$$
\bar{x}=\frac{\sum f_ix_i}{\sum f_i}
$$

This is best when numbers are small.

## Assumed Mean Method

Choose an assumed mean `a`.

Define:

$$
d_i=x_i-a
$$

Then:

$$
\bar{x}=a+\frac{\sum f_id_i}{\sum f_i}
$$

This is useful when class marks are large but deviations are easier.

## Step-Deviation Method

If class width is `h`, define:

$$
u_i=\frac{x_i-a}{h}
$$

Then:

$$
\bar{x}=a+h\left(\frac{\sum f_iu_i}{\sum f_i}\right)
$$

This is most convenient when deviations have a common factor.

---

# Unit 13B: Mode of Grouped Data

The mode of grouped data lies in the modal class.

The modal class is the class with the highest frequency.

Formula:

$$
\text{Mode}=l+\left(\frac{f_1-f_0}{2f_1-f_0-f_2}\right)h
$$

where:

| Symbol | Meaning |
|---|---|
| `l` | lower limit of modal class |
| `h` | class size |
| `f_1` | frequency of modal class |
| `f_0` | frequency of preceding class |
| `f_2` | frequency of succeeding class |

Use mode when the question asks for the most common or most popular value.

---

# Unit 13C: Median of Grouped Data

The median divides the distribution into two equal halves.

First prepare cumulative frequency.

Then locate the class whose cumulative frequency is greater than and nearest to:

$$
\frac{n}{2}
$$

That class is the median class.

Formula:

$$
\text{Median}=l+\left(\frac{\frac{n}{2}-cf}{f}\right)h
$$

where:

| Symbol | Meaning |
|---|---|
| `l` | lower limit of median class |
| `n` | total frequency |
| `cf` | cumulative frequency before the median class |
| `f` | frequency of median class |
| `h` | class size |

Use median when extreme values may distort the mean.

---

# Unit 13D: Choosing Mean, Median, or Mode

| Situation | Best measure |
|---|---|
| Need average performance | Mean |
| Need middle value | Median |
| Need most common value | Mode |
| Extreme values are present | Median |
| Comparing two groups overall | Mean |
| Finding most popular size, item, or category | Mode |

Empirical relation:

$$
\text{Mode}=3\text{ Median}-2\text{ Mean}
$$

This relation is approximate and is used only when appropriate.

---

# Unit 13E: Solved Exercise 13.1 - Mean

## Question 1: Plants per House

Intervals:

`0-2, 2-4, 4-6, 6-8, 8-10, 10-12, 12-14`

Frequencies:

`1, 2, 1, 5, 6, 2, 3`

Class marks:

`1, 3, 5, 7, 9, 11, 13`

Total frequency:

$$
20
$$

Sum:

$$
\sum f_ix_i=162
$$

Mean:

$$
\bar{x}=\frac{162}{20}=8.1
$$

Answer:

$$
8.1\text{ plants per house}
$$

The direct method is suitable because the numbers are small.

## Question 2: Daily Wages

Class marks:

`510, 530, 550, 570, 590`

Frequencies:

`12, 14, 8, 6, 10`

Total frequency:

$$
50
$$

Sum:

$$
\sum f_ix_i=27260
$$

Mean:

$$
\bar{x}=\frac{27260}{50}=545.2
$$

Answer:

$$
Rs\ 545.20
$$

## Question 3: Missing Frequency

Class marks:

`12, 14, 16, 18, 20, 22, 24`

Frequencies:

`7, 6, 9, 13, f, 5, 4`

Mean is:

$$
18
$$

Total frequency:

$$
44+f
$$

Sum:

$$
752+20f
$$

Use:

$$
\frac{752+20f}{44+f}=18
$$

$$
752+20f=792+18f
$$

$$
2f=40
$$

$$
f=20
$$

Answer:

$$
20
$$

## Question 4: Heartbeats per Minute

Class marks:

`66.5, 69.5, 72.5, 75.5, 78.5, 81.5, 84.5`

Frequencies:

`2, 4, 3, 8, 7, 4, 2`

Total:

$$
30
$$

Sum:

$$
\sum f_ix_i=2277
$$

Mean:

$$
\bar{x}=\frac{2277}{30}=75.9
$$

Answer:

$$
75.9\text{ heartbeats per minute}
$$

## Question 5: Mangoes per Box

Class marks:

`51, 54, 57, 60, 63`

Frequencies:

`15, 110, 135, 115, 25`

Total:

$$
400
$$

Sum:

$$
\sum f_ix_i=22875
$$

Mean:

$$
\bar{x}=\frac{22875}{400}=57.1875
$$

Answer:

$$
57.19\text{ mangoes approximately}
$$

The assumed mean or step-deviation method is efficient because frequencies are large.

## Question 6: Daily Food Expenditure

Class marks:

`125, 175, 225, 275, 325`

Frequencies:

`4, 5, 12, 2, 2`

Total:

$$
25
$$

Sum:

$$
\sum f_ix_i=5275
$$

Mean:

$$
\bar{x}=\frac{5275}{25}=211
$$

Answer:

$$
Rs\ 211
$$

## Question 7: Concentration of SO2

Class marks:

`0.02, 0.06, 0.10, 0.14, 0.18, 0.22`

Frequencies:

`4, 9, 9, 2, 4, 2`

Total:

$$
30
$$

Sum:

$$
\sum f_ix_i=2.96
$$

Mean:

$$
\bar{x}=\frac{2.96}{30}=0.0987
$$

Answer:

$$
0.099\text{ ppm approximately}
$$

## Question 8: Absentee Record

Class marks:

`3, 8, 12, 17, 24, 33, 39`

Frequencies:

`11, 10, 7, 4, 4, 3, 1`

Total:

$$
40
$$

Sum:

$$
\sum f_ix_i=499
$$

Mean:

$$
\bar{x}=\frac{499}{40}=12.475
$$

Answer:

$$
12.48\text{ days approximately}
$$

## Question 9: Literacy Rate

Class marks:

`50, 60, 70, 80, 90`

Frequencies:

`3, 10, 11, 8, 3`

Total:

$$
35
$$

Sum:

$$
\sum f_ix_i=2430
$$

Mean:

$$
\bar{x}=\frac{2430}{35}=69.43
$$

Answer:

$$
69.43\%
$$

---

# Unit 13F: Solved Exercise 13.2 - Mode

## Question 1: Ages of Patients

Frequencies:

`6, 11, 21, 23, 14, 5`

Mean:

$$
35.38\text{ years approximately}
$$

Modal class:

$$
35-45
$$

Here:

$$
l=35,\quad h=10,\quad f_1=23,\quad f_0=21,\quad f_2=14
$$

Mode:

$$
35+\left(\frac{23-21}{2(23)-21-14}\right)10
$$

$$
=36.82
$$

Answer:

Mean is about `35.38` years and mode is about `36.82` years. The most common patient age is slightly higher than the average age.

## Question 2: Lifetimes of Electrical Components

Modal class:

$$
60-80
$$

Here:

$$
l=60,\quad h=20,\quad f_1=61,\quad f_0=52,\quad f_2=38
$$

Mode:

$$
60+\left(\frac{61-52}{2(61)-52-38}\right)20
$$

$$
=65.625
$$

Answer:

$$
65.63\text{ hours approximately}
$$

## Question 3: Monthly Household Expenditure

Modal class:

$$
1500-2000
$$

Mode:

$$
1500+\left(\frac{40-24}{2(40)-24-33}\right)500
$$

$$
=1847.83
$$

Mean:

Using class marks `1250, 1750, 2250, 2750, 3250, 3750, 4250, 4750`:

$$
\bar{x}=2662.5
$$

Answer:

$$
\text{Mode}=Rs\ 1847.83,\quad \text{Mean}=Rs\ 2662.50
$$

## Question 4: Teacher-Student Ratio

Modal class:

$$
30-35
$$

Mode:

$$
30+\left(\frac{10-9}{2(10)-9-3}\right)5
$$

$$
=30.625
$$

Mean:

$$
29.21
$$

Answer:

Mode is about `30.63` students per teacher; mean is about `29.21` students per teacher.

## Question 5: Runs Scored by Batsmen

Modal class:

$$
4000-5000
$$

Here:

$$
l=4000,\quad h=1000,\quad f_1=18,\quad f_0=4,\quad f_2=9
$$

Mode:

$$
4000+\left(\frac{18-4}{2(18)-4-9}\right)1000
$$

$$
=4608.70
$$

Answer:

$$
4608.70\text{ runs approximately}
$$

## Question 6: Number of Cars

Frequencies:

`7, 14, 13, 12, 20, 11, 15, 8`

Modal class:

$$
40-50
$$

Mode:

$$
40+\left(\frac{20-12}{2(20)-12-11}\right)10
$$

$$
=44.71
$$

Answer:

$$
44.71\text{ cars approximately}
$$

---

# Unit 13G: Solved Exercise 13.3 - Median, Mean, and Mode

## Question 1: Monthly Electricity Consumption

Frequencies:

`4, 5, 13, 20, 14, 8, 4`

Total:

$$
n=68
$$

Mean:

$$
137.06
$$

Median:

$$
\frac{n}{2}=34
$$

Cumulative frequency first exceeding `34` is in class:

$$
125-145
$$

Here:

$$
l=125,\quad cf=22,\quad f=20,\quad h=20
$$

Median:

$$
125+\left(\frac{34-22}{20}\right)20=137
$$

Mode:

$$
125+\left(\frac{20-13}{2(20)-13-14}\right)20
$$

$$
=135.77
$$

Answer:

$$
\text{Mean}=137.06,\quad \text{Median}=137,\quad \text{Mode}=135.77
$$

The three values are close, so the distribution is fairly balanced around `136-137` units.

## Question 2: Find `x` and `y`

Given:

$$
n=60,\quad \text{Median}=28.5
$$

Frequencies:

`5, x, 20, 15, y, 5`

Total gives:

$$
x+y=15
$$

The median class is:

$$
20-30
$$

because median `28.5` lies there.

Use:

$$
28.5=20+\left(\frac{30-(5+x)}{20}\right)10
$$

$$
8.5=\frac{25-x}{2}
$$

$$
17=25-x
$$

$$
x=8
$$

Then:

$$
y=7
$$

Answer:

$$
x=8,\quad y=7
$$

## Question 3: Median Age of Policy Holders

Convert less-than cumulative data to class frequencies:

| Class | Frequency |
|---|---:|
| 18-20 | 2 |
| 20-25 | 4 |
| 25-30 | 18 |
| 30-35 | 21 |
| 35-40 | 33 |
| 40-45 | 11 |
| 45-50 | 3 |
| 50-55 | 6 |
| 55-60 | 2 |

Total:

$$
n=100
$$

So:

$$
\frac{n}{2}=50
$$

Cumulative frequency before `35-40` is:

$$
45
$$

Median class:

$$
35-40
$$

Median:

$$
35+\left(\frac{50-45}{33}\right)5
$$

$$
=35.76
$$

Answer:

$$
35.76\text{ years approximately}
$$

## Question 4: Median Length of Leaves

The classes must be made continuous:

`117.5-126.5, 126.5-135.5, ..., 171.5-180.5`

Total:

$$
n=40
$$

So:

$$
\frac{n}{2}=20
$$

Cumulative frequencies:

`3, 8, 17, 29, 34, 38, 40`

Median class:

$$
144.5-153.5
$$

Here:

$$
l=144.5,\quad cf=17,\quad f=12,\quad h=9
$$

Median:

$$
144.5+\left(\frac{20-17}{12}\right)9
$$

$$
=146.75
$$

Answer:

$$
146.75\text{ mm}
$$

## Question 5: Median Lifetime of Neon Lamps

Total:

$$
n=400
$$

So:

$$
\frac{n}{2}=200
$$

Cumulative frequencies:

`14, 70, 130, 216, 290, 352, 400`

Median class:

$$
3000-3500
$$

Here:

$$
l=3000,\quad cf=130,\quad f=86,\quad h=500
$$

Median:

$$
3000+\left(\frac{200-130}{86}\right)500
$$

$$
=3406.98
$$

Answer:

$$
3406.98\text{ hours approximately}
$$

## Question 6: Surname Letter Counts

Frequencies:

`6, 30, 40, 16, 4, 4`

### Median

Total:

$$
n=100
$$

Median class:

$$
7-10
$$

because cumulative frequencies are:

`6, 36, 76, 92, 96, 100`

Here:

$$
l=7,\quad cf=36,\quad f=40,\quad h=3
$$

Median:

$$
7+\left(\frac{50-36}{40}\right)3
$$

$$
=8.05
$$

### Mean

Class marks:

`2.5, 5.5, 8.5, 11.5, 14.5, 17.5`

Mean:

$$
8.32
$$

### Mode

Modal class:

$$
7-10
$$

Mode:

$$
7+\left(\frac{40-30}{2(40)-30-16}\right)3
$$

$$
=7.88
$$

Answer:

$$
\text{Median}=8.05,\quad \text{Mean}=8.32,\quad \text{Mode}=7.88
$$

## Question 7: Median Weight

Frequencies:

`2, 3, 8, 6, 6, 3, 2`

Total:

$$
n=30
$$

So:

$$
\frac{n}{2}=15
$$

Cumulative frequencies:

`2, 5, 13, 19, 25, 28, 30`

Median class:

$$
55-60
$$

Here:

$$
l=55,\quad cf=13,\quad f=6,\quad h=5
$$

Median:

$$
55+\left(\frac{15-13}{6}\right)5
$$

$$
=56.67
$$

Answer:

$$
56.67\text{ kg approximately}
$$

---

# Unit 13H: Common Mistakes and Corrections

| Mistake | Why it is wrong | Correct habit |
|---|---|---|
| Using class limits instead of class marks for mean | Mean needs representative values | Find midpoints first |
| Choosing modal class by class mark | Mode depends on maximum frequency | Look at frequency column |
| Using `n` instead of `n/2` for median class | Median divides data in half | Locate `n/2` in cumulative frequency |
| Forgetting `cf` is before median class | Formula uses previous cumulative frequency | Do not use cumulative frequency of median class |
| Mixing class width values | Wrong `h` changes answer | Check common class size |
| Applying median formula to discontinuous classes without correction | Formula assumes continuous classes | Convert inclusive classes if needed |
| Treating mean, median, and mode as always equal | They measure different things | Interpret based on context |

---

# Final One-Page Summary

1. Class mark:

$$
x_i=\frac{\text{lower limit}+\text{upper limit}}{2}
$$

2. Mean by direct method:

$$
\bar{x}=\frac{\sum f_ix_i}{\sum f_i}
$$

3. Mean by assumed mean:

$$
\bar{x}=a+\frac{\sum f_id_i}{\sum f_i}
$$

4. Mean by step deviation:

$$
\bar{x}=a+h\left(\frac{\sum f_iu_i}{\sum f_i}\right)
$$

5. Mode:

$$
\text{Mode}=l+\left(\frac{f_1-f_0}{2f_1-f_0-f_2}\right)h
$$

6. Median:

$$
\text{Median}=l+\left(\frac{\frac{n}{2}-cf}{f}\right)h
$$

7. Mean uses all observations.
8. Median gives the middle value.
9. Mode gives the most common value.

