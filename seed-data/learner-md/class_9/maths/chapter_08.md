# Chapter 8: Predicting What Comes Next - Sequences and Progressions
### NCERT Class 9 - Maths

---

## Chapter at a Glance

| Detail | Learner-Friendly Information |
|---|---|
| **Class** | 9 |
| **Subject** | Maths |
| **Chapter** | 8 |
| **Actual Chapter Title** | Predicting What Comes Next: Exploring Sequences and Progressions |
| **Raw File Header** | "Quadrilaterals" |
| **Textbook Pages** | 1-200 |
| **Core Theme** | Number patterns, explicit rules, recursive rules, arithmetic progressions, geometric progressions, and fractals. |
| **Main Skill** | Finding, describing, extending, and using sequence rules. |

> [!NOTE]
> The raw source file is `chapter_08.md` and its extraction header says "Quadrilaterals", but the actual chapter content is **Predicting What Comes Next: Exploring Sequences and Progressions**. This learner-facing version follows the actual chapter content.

---

## Section Structure

| Section | Title | Main Learning Focus |
|---|---|---|
| **8.0** | Introduction | Patterns as tools for prediction. |
| **8.1** | Introduction to Sequences | Terms, finite/infinite sequences, natural, odd, triangular, and square number patterns. |
| **8.2** | Explicit Rule for a Sequence | Formula for the \(n\)th term using the position \(n\). |
| **8.3** | Recursive Rule for a Sequence | Finding later terms from previous terms. |
| **8.4** | Arithmetic Progressions | Sequences with constant difference. |
| **8.4.1** | Visualising an AP | APs as straight-line patterns when plotted. |
| **8.5** | Sum of the First \(n\) Natural Numbers | Derivation and use of \(S_n=\frac{n(n+1)}{2}\). |
| **8.6** | Geometric Progressions | Sequences with constant ratio. |
| **8.6.1** | Fun with Fractals | Sierpinski triangle and square carpet as GP examples. |
| **8.6.2** | Visualising a GP | GP graphs and bouncing ball applications. |

---

## Learning Outcomes

By the end of this chapter, you should be able to:

| Outcome | You Should Be Able To... |
|---|---|
| **Define a sequence** | Explain terms, positions, finite sequences, and infinite sequences. |
| **Use notation** | Interpret \(t_1,t_2,\ldots,t_n\). |
| **Find explicit rules** | Use a formula involving \(n\) to find any term directly. |
| **Find recursive rules** | Use previous terms to generate later terms. |
| **Recognise APs** | Identify sequences with constant difference. |
| **Use AP formulas** | Find \(n\)th terms, positions, missing values, and sums. |
| **Recognise GPs** | Identify sequences with constant ratio. |
| **Use GP formulas** | Find terms and positions in geometric progressions. |
| **Understand fractal sequences** | Connect repeated geometric construction to powers and progressions. |
| **Model real situations** | Use APs and GPs for taxi fares, salaries, bacteria growth, and bouncing balls. |

---

## Prerequisite Toolkit

| Tool | Why It Matters Here |
|---|---|
| **Natural numbers** | Position numbers \(n\) are usually natural numbers. |
| **Integers and fractions** | Sequence terms may be negative, fractional, or decimal. |
| **Linear expressions** | AP terms often look like \(an+b\). |
| **Exponents** | GP terms involve powers such as \(2^{n-1}\). |
| **Solving equations** | To find which term a number is, solve for \(n\). |
| **Coordinate plotting** | Visualising APs and GPs uses ordered pairs. |
| **Sigma-like thinking** | Sums of terms require careful counting. |

---

## Big Idea

A sequence is an ordered list.

The order matters.

For example:

$$
1,\ 3,\ 5,\ 7,\ 9,\ldots
$$

is not just a collection of numbers. It is a pattern where each term has a position.

The main questions in this chapter are:

1. What comes next?
2. What is the \(n\)th term?
3. Is a given number part of the sequence?
4. Can a real situation be modelled by a sequence?
5. Is the sequence growing by addition or multiplication?

The chapter studies two major families:

- arithmetic progressions, where we repeatedly add the same number;
- geometric progressions, where we repeatedly multiply by the same number.

---

## Key Terms

| Term | Meaning |
|---|---|
| **Sequence** | Ordered list of numbers or objects. |
| **Term** | One entry in a sequence. |
| **\(n\)th term** | Term in the \(n\)th position. |
| **Finite sequence** | Sequence with a last term. |
| **Infinite sequence** | Sequence that continues without ending. |
| **Explicit rule** | Formula that gives the \(n\)th term directly from \(n\). |
| **Recursive rule** | Rule that gives a term using previous term(s). |
| **Arithmetic progression (AP)** | Sequence with constant difference between consecutive terms. |
| **Common difference** | Fixed amount added each time in an AP. |
| **Geometric progression (GP)** | Sequence with constant ratio between consecutive terms. |
| **Common ratio** | Fixed multiplier used each time in a GP. |
| **Triangular number** | Number of dots that can form an equilateral triangular pattern. |
| **Fractal** | Pattern that repeats similar structure at smaller scales. |

---

## 8.0 - Introduction: Predicting What Comes Next

Patterns appear in:

- nature;
- art;
- music;
- finance;
- architecture;
- games;
- population growth;
- computer science;
- poetry and rhythm;
- geometry.

Mathematics studies patterns so that we can describe them clearly and predict future terms.

Example:

$$
2,\ 4,\ 6,\ 8,\ldots
$$

The next term is probably \(10\).

But a good mathematical answer should also explain the rule.

Rule:

> Start at \(2\), then add \(2\) each time.

Or:

$$
t_n=2n
$$

This rule lets us find the \(1000\)th term without writing all earlier terms.

---

## 8.1 - Introduction to Sequences

A sequence is an ordered list of numbers.

Each number is called a term.

### Examples

| Sequence | Name | Pattern |
|---|---|---|
| \(1,2,3,4,5,\ldots\) | Natural numbers | Add \(1\). |
| \(1,3,5,7,9,\ldots\) | Odd numbers | Add \(2\). |
| \(1,3,6,10,15,\ldots\) | Triangular numbers | Add \(2,3,4,5,\ldots\). |
| \(1,4,9,16,25,\ldots\) | Square numbers | \(1^2,2^2,3^2,4^2,5^2,\ldots\). |
| \(6,12,24,48,96\) | Finite doubling sequence | Multiply by \(2\), stops after 5 terms. |

### Term Notation

For a sequence:

$$
t_1,\ t_2,\ t_3,\ldots
$$

\(t_1\) means first term.

\(t_2\) means second term.

\(t_n\) means \(n\)th term.

Example:

For the odd number sequence:

$$
1,\ 3,\ 5,\ 7,\ 9,\ldots
$$

we have:

$$
t_1=1
$$

$$
t_2=3
$$

$$
t_3=5
$$

$$
t_4=7
$$

### Finite and Infinite Sequences

| Type | Example | Meaning |
|---|---|---|
| Finite | \(6,12,24,48,96\) | Has a last term. |
| Infinite | \(1,2,3,4,\ldots\) | Continues without ending. |

### Triangular Numbers

Triangular numbers are:

$$
1,\ 3,\ 6,\ 10,\ 15,\ 21,\ldots
$$

They can be written as sums:

$$
1=1
$$

$$
3=1+2
$$

$$
6=1+2+3
$$

$$
10=1+2+3+4
$$

$$
15=1+2+3+4+5
$$

So the \(n\)th triangular number is:

$$
1+2+3+\cdots+n
$$

Later in the chapter, we learn:

$$
1+2+3+\cdots+n=\frac{n(n+1)}{2}
$$

### Square Numbers and Odd Numbers

Square numbers:

$$
1,\ 4,\ 9,\ 16,\ 25,\ldots
$$

Differences between consecutive square numbers:

$$
3,\ 5,\ 7,\ 9,\ldots
$$

These are odd numbers.

In fact:

$$
1=1
$$

$$
4=1+3
$$

$$
9=1+3+5
$$

$$
16=1+3+5+7
$$

So:

> The \(n\)th square number is the sum of the first \(n\) odd numbers.

### Practice: Sequence \(1,4,7,10,13,\ldots\)

This sequence adds \(3\) each time.

Next four terms:

$$
16,\ 19,\ 22,\ 25
$$

Now form the cumulative-sum sequence:

$$
1
$$

$$
1+4=5
$$

$$
1+4+7=12
$$

$$
1+4+7+10=22
$$

The first ten terms of the cumulative sequence are:

$$
1,\ 5,\ 12,\ 22,\ 35,\ 51,\ 70,\ 92,\ 117,\ 145
$$

---

## 8.2 - Explicit Rule for a Sequence

An explicit rule gives the \(n\)th term directly using \(n\).

This means we can find any term without finding all previous terms.

### Example 1: Odd Numbers

Rule:

$$
u_n=2n-1
$$

Substitute \(n=1\):

$$
u_1=2(1)-1=1
$$

Substitute \(n=2\):

$$
u_2=2(2)-1=3
$$

Substitute \(n=3\):

$$
u_3=2(3)-1=5
$$

So this rule generates:

$$
1,\ 3,\ 5,\ 7,\ldots
$$

### Why Explicit Rules Are Useful

With:

$$
u_n=2n-1
$$

the 53rd term is:

$$
u_{53}=2(53)-1=105
$$

the 108th term is:

$$
u_{108}=2(108)-1=215
$$

the 1170th term is:

$$
u_{1170}=2(1170)-1=2339
$$

No earlier terms are needed.

### Checking Whether a Number Is in a Sequence

To check whether \(137\) is an odd-number sequence term:

$$
2n-1=137
$$

$$
2n=138
$$

$$
n=69
$$

Since \(69\) is a natural number, \(137\) is the 69th term.

### Example 2: Rule \(s_n=5n-2\)

First six terms:

$$
s_1=5(1)-2=3
$$

$$
s_2=5(2)-2=8
$$

$$
s_3=5(3)-2=13
$$

So the sequence begins:

$$
3,\ 8,\ 13,\ 18,\ 23,\ 28,\ldots
$$

100th term:

$$
s_{100}=5(100)-2=498
$$

1000th term:

$$
s_{1000}=5(1000)-2=4998
$$

Check whether \(308\) is a term:

$$
5n-2=308
$$

$$
5n=310
$$

$$
n=62
$$

So \(308\) is the 62nd term.

Check whether \(471\) is a term:

$$
5n-2=471
$$

$$
5n=473
$$

$$
n=94.6
$$

Since \(n\) must be a natural number, \(471\) is not a term.

### Practice: Rule \(t_n=3n-7\)

First term:

$$
t_1=3(1)-7=-4
$$

Second term:

$$
t_2=3(2)-7=-1
$$

Third term:

$$
t_3=3(3)-7=2
$$

12th term:

$$
t_{12}=3(12)-7=29
$$

18th term:

$$
t_{18}=3(18)-7=47
$$

50th term:

$$
t_{50}=3(50)-7=143
$$

Which term is \(332\)?

$$
3n-7=332
$$

$$
3n=339
$$

$$
n=113
$$

So \(332\) is the 113th term.

Is \(557\) a term?

$$
3n-7=557
$$

$$
3n=564
$$

$$
n=188
$$

So \(557\) is the 188th term.

---

## 8.3 - Recursive Rule for a Sequence

A recursive rule gives a term using one or more previous terms.

Example sequence:

$$
1,\ 4,\ 7,\ 10,\ 13,\ldots
$$

Explicit rule:

$$
t_n=3n-2
$$

Recursive rule:

$$
t_1=1
$$

and for \(n\ge 2\):

$$
t_n=t_{n-1}+3
$$

The recursive rule says:

> Start with \(1\), then add \(3\) each time.

### Explicit vs Recursive

| Rule Type | Advantage | Limitation |
|---|---|---|
| Explicit | Finds any term directly. | May be harder to discover. |
| Recursive | Often easy to describe from pattern. | To find a far term, earlier terms may be needed. |

### Example 3

Recursive rule:

$$
u_1=1
$$

and for \(n\ge 2\):

$$
u_n=2u_{n-1}+3
$$

Find the first four terms.

Second term:

$$
u_2=2u_1+3=2(1)+3=5
$$

Third term:

$$
u_3=2u_2+3=2(5)+3=13
$$

Fourth term:

$$
u_4=2u_3+3=2(13)+3=29
$$

So the first four terms are:

$$
1,\ 5,\ 13,\ 29
$$

Continuing:

$$
u_5=2(29)+3=61
$$

$$
u_6=2(61)+3=125
$$

$$
u_7=2(125)+3=253
$$

So \(133\) is not a term.

### Example 4

Recursive rule:

$$
s_1=3
$$

and for \(n\ge 2\):

$$
s_n=s_{n-1}(s_{n-1}-1)
$$

Second term:

$$
s_2=3(3-1)=6
$$

Third term:

$$
s_3=6(6-1)=30
$$

Fourth term:

$$
s_4=30(30-1)=870
$$

So the first four terms are:

$$
3,\ 6,\ 30,\ 870
$$

### Virahanka-Fibonacci Sequence

The sequence begins:

$$
1,\ 2,\ 3,\ 5,\ 8,\ 13,\ 21,\ 34,\ldots
$$

Recursive rule:

$$
V_1=1,\quad V_2=2
$$

and for \(n\ge 3\):

$$
V_n=V_{n-1}+V_{n-2}
$$

So:

$$
V_3=V_2+V_1=2+1=3
$$

$$
V_4=V_3+V_2=3+2=5
$$

$$
V_5=V_4+V_3=5+3=8
$$

Next terms after \(34\):

$$
55,\ 89
$$

This sequence was studied in India by Virahanka in the context of poetic metres and later by other mathematicians.

---

## Exercise Set 8.1 - Guided Solutions

### Question 1

Find the first five terms.

#### (i) \(t_n=3n-4\)

$$
t_1=-1,\quad t_2=2,\quad t_3=5,\quad t_4=8,\quad t_5=11
$$

Answer:

$$
-1,\ 2,\ 5,\ 8,\ 11
$$

#### (ii) \(t_n=2-5n\)

$$
t_1=-3,\quad t_2=-8,\quad t_3=-13,\quad t_4=-18,\quad t_5=-23
$$

Answer:

$$
-3,\ -8,\ -13,\ -18,\ -23
$$

#### (iii) \(t_n=n^2-2n+3\)

$$
t_1=2,\quad t_2=3,\quad t_3=6,\quad t_4=11,\quad t_5=18
$$

Answer:

$$
2,\ 3,\ 6,\ 11,\ 18
$$

### Question 2

Sequence:

$$
t_n=5n-3
$$

10th term:

$$
t_{10}=5(10)-3=47
$$

15th term:

$$
t_{15}=5(15)-3=72
$$

### Question 3

Check \(97\):

$$
5n-3=97
$$

$$
5n=100
$$

$$
n=20
$$

So \(97\) is a term.

Check \(172\):

$$
5n-3=172
$$

$$
5n=175
$$

$$
n=35
$$

So \(172\) is a term.

### Question 4

Which term is \(607\)?

$$
5n-3=607
$$

$$
5n=610
$$

$$
n=122
$$

So \(607\) is the 122nd term.

### Question 5

Recursive rule:

$$
t_1=-5,\quad t_{n+1}=t_n+3
$$

First five terms:

$$
-5,\ -2,\ 1,\ 4,\ 7
$$

Explicit form:

$$
t_n=-5+3(n-1)
$$

Check \(52\):

$$
-5+3(n-1)=52
$$

$$
3(n-1)=57
$$

$$
n-1=19
$$

$$
n=20
$$

So \(52\) is the 20th term.

### Question 6

Given:

$$
T_1=1,\quad T_2=2,\quad T_3=4
$$

and:

$$
T_n=T_{n-1}+T_{n-2}+T_{n-3}
$$

Then:

$$
T_4=4+2+1=7
$$

$$
T_5=7+4+2=13
$$

$$
T_6=13+7+4=24
$$

$$
T_7=24+13+7=44
$$

$$
T_8=44+24+13=81
$$

Answer:

$$
7,\ 13,\ 24,\ 44,\ 81
$$

---

## 8.4 - Arithmetic Progressions

An arithmetic progression is a sequence in which the difference between consecutive terms is constant.

Short form:

> AP

### Example

$$
1,\ 5,\ 9,\ 13,\ 17,\ldots
$$

Differences:

$$
5-1=4
$$

$$
9-5=4
$$

$$
13-9=4
$$

So the common difference is:

$$
d=4
$$

### General Form of an AP

If first term is \(a\) and common difference is \(d\), then the AP is:

$$
a,\ a+d,\ a+2d,\ a+3d,\ldots
$$

The \(n\)th term is:

$$
t_n=a+(n-1)d
$$

### AP with Negative Common Difference

Example:

$$
11,\ 7,\ 3,\ -1,\ -5,\ldots
$$

Here:

$$
a=11
$$

and:

$$
d=-4
$$

The sequence decreases by \(4\) each time.

### Recursive Rule for an AP

If an AP has first term \(a\) and common difference \(d\), then:

$$
t_1=a
$$

and for \(n\ge 2\):

$$
t_n=t_{n-1}+d
$$

### Visualising an AP

If we plot points:

$$
(1,t_1),(2,t_2),(3,t_3),\ldots
$$

for an AP, the points lie on a straight line.

Reason:

The formula:

$$
t_n=a+(n-1)d
$$

can be rewritten as:

$$
t_n=dn+(a-d)
$$

This is a linear expression in \(n\).

### Taxi Fare Example

A taxi company charges:

- booking fee: Rs 200;
- per kilometre: Rs 40.

For \(n\) km:

$$
\text{fare}=200+40n
$$

For 1 km:

$$
240
$$

For 2 km:

$$
280
$$

For 3 km:

$$
320
$$

So the fare sequence is:

$$
240,\ 280,\ 320,\ldots
$$

This is an AP with:

$$
a=240,\quad d=40
$$

For 10 km:

$$
200+40(10)=600
$$

Answer:

$$
\text{Rs }600
$$

---

## 8.5 - Sum of the First \(n\) Natural Numbers

Let:

$$
S=1+2+3+\cdots+n
$$

Write the same sum backwards:

$$
S=n+(n-1)+(n-2)+\cdots+1
$$

Add the two lines:

$$
2S=(n+1)+(n+1)+(n+1)+\cdots+(n+1)
$$

There are \(n\) pairs.

So:

$$
2S=n(n+1)
$$

Therefore:

$$
S=\frac{n(n+1)}{2}
$$

### Formula

$$
1+2+3+\cdots+n=\frac{n(n+1)}{2}
$$

### Examples

Sum of first 20 natural numbers:

$$
S_{20}=\frac{20(21)}{2}=210
$$

Sum of first 50 natural numbers:

$$
S_{50}=\frac{50(51)}{2}=1275
$$

Sum of first 1000 natural numbers:

$$
S_{1000}=\frac{1000(1001)}{2}=500500
$$

### Sum of Consecutive Natural Numbers

Find:

$$
25+26+27+\cdots+58
$$

Use:

$$
S_{58}-S_{24}
$$

because:

$$
S_{58}=1+2+\cdots+24+25+\cdots+58
$$

So:

$$
S_{58}=\frac{58(59)}{2}=1711
$$

$$
S_{24}=\frac{24(25)}{2}=300
$$

Therefore:

$$
25+26+\cdots+58=1711-300=1411
$$

### Triangular Numbers

The \(n\)th triangular number is:

$$
T_n=\frac{n(n+1)}{2}
$$

10th triangular number:

$$
T_{10}=\frac{10(11)}{2}=55
$$

17th triangular number:

$$
T_{17}=\frac{17(18)}{2}=153
$$

80th triangular number:

$$
T_{80}=\frac{80(81)}{2}=3240
$$

### Sum of an AP

The chapter motivates sums through natural numbers, but AP problems often need this formula:

If an AP has first term \(a\), common difference \(d\), and \(n\) terms, then:

$$
S_n=\frac{n}{2}\left[2a+(n-1)d\right]
$$

Equivalently, if first term is \(a\) and last term is \(l\):

$$
S_n=\frac{n}{2}(a+l)
$$

This matches Aryabhata's idea: average of first and last terms multiplied by number of terms.

---

## Exercise Set 8.2 - Guided Solutions

### Question 1

AP:

$$
3,\ 8,\ 13,\ 18,\ldots
$$

Here:

$$
a=3,\quad d=5
$$

10th term:

$$
t_{10}=3+9(5)=48
$$

26th term:

$$
t_{26}=3+25(5)=128
$$

### Question 2

AP:

$$
21,\ 18,\ 15,\ldots
$$

Here:

$$
a=21,\quad d=-3
$$

Find when term is \(-81\):

$$
21+(n-1)(-3)=-81
$$

$$
-3(n-1)=-102
$$

$$
n-1=34
$$

$$
n=35
$$

So \(-81\) is the 35th term.

Check whether \(0\) is a term:

$$
21-3(n-1)=0
$$

$$
3(n-1)=21
$$

$$
n-1=7
$$

$$
n=8
$$

So \(0\) is the 8th term.

### Question 3

AP:

$$
11,\ 8,\ 5,\ 2,\ldots
$$

Here:

$$
a=11,\quad d=-3
$$

Nth term:

$$
t_n=11+(n-1)(-3)
$$

$$
t_n=14-3n
$$

Recursive rule:

$$
t_1=11,\quad t_n=t_{n-1}-3
$$

### Question 4

Given:

$$
t_3=12
$$

and:

$$
t_{50}=106
$$

Using \(t_n=a+(n-1)d\):

$$
a+2d=12
$$

$$
a+49d=106
$$

Subtract:

$$
47d=94
$$

$$
d=2
$$

Then:

$$
a+2(2)=12
$$

$$
a=8
$$

29th term:

$$
t_{29}=8+28(2)=64
$$

### Question 5

Two-digit numbers divisible by \(3\):

$$
12,\ 15,\ 18,\ldots,\ 99
$$

This is an AP with:

$$
a=12,\quad d=3,\quad l=99
$$

Number of terms:

$$
99=12+(n-1)3
$$

$$
87=3(n-1)
$$

$$
n=30
$$

Sum:

$$
S_n=\frac{n}{2}(a+l)
$$

$$
S_{30}=\frac{30}{2}(12+99)
$$

$$
=15(111)
$$

$$
=1665
$$

### Question 6

Starting salary:

$$
500000
$$

Annual increment:

$$
20000
$$

Salary in year \(n\):

$$
500000+(n-1)(20000)
$$

Set equal to \(700000\):

$$
500000+(n-1)(20000)=700000
$$

$$
(n-1)(20000)=200000
$$

$$
n-1=10
$$

$$
n=11
$$

So the salary reaches Rs 7,00,000 in the 11th year, after 10 increments.

### Question 7

Marbles:

$$
1+2+3+\cdots+25
$$

Use:

$$
S_{25}=\frac{25(26)}{2}
$$

$$
S_{25}=325
$$

Answer:

$$
325
$$

---

## 8.6 - Geometric Progressions

A geometric progression is a sequence in which each term after the first is obtained by multiplying the previous term by a fixed number.

Short form:

> GP

The fixed multiplier is called the common ratio.

### Example

$$
3,\ 6,\ 12,\ 24,\ 48,\ldots
$$

Ratios:

$$
\frac{6}{3}=2
$$

$$
\frac{12}{6}=2
$$

$$
\frac{24}{12}=2
$$

So common ratio:

$$
r=2
$$

### General Form of a GP

If first term is \(a\) and common ratio is \(r\), then:

$$
a,\ ar,\ ar^2,\ ar^3,\ldots
$$

The \(n\)th term is:

$$
t_n=ar^{n-1}
$$

### Recursive Rule for a GP

$$
t_1=a
$$

and for \(n\ge 2\):

$$
t_n=rt_{n-1}
$$

### Example 6

Sequence:

$$
1,\ 2,\ 4,\ 8,\ 16,\ldots
$$

Each term is multiplied by \(2\).

So it is a GP with:

$$
r=2
$$

### Example 7

Sequence:

$$
1,\ 3,\ 9,\ 27,\ 81,\ldots
$$

Each term is multiplied by \(3\).

So it is a GP with:

$$
r=3
$$

### Example 8

Sequence:

$$
1,\ -1,\ 1,\ -1,\ 1,\ldots
$$

Each term is multiplied by \(-1\).

So it is a GP with:

$$
r=-1
$$

### Example 9

Sequence:

$$
5,\ \frac{15}{4},\ \frac{45}{16},\ \frac{135}{64},\ldots
$$

Find ratios:

$$
\frac{15/4}{5}=\frac{15}{4}\cdot \frac{1}{5}=\frac{3}{4}
$$

$$
\frac{45/16}{15/4}=\frac{45}{16}\cdot \frac{4}{15}=\frac{3}{4}
$$

$$
\frac{135/64}{45/16}=\frac{135}{64}\cdot \frac{16}{45}=\frac{3}{4}
$$

So it is a GP with:

$$
a=5,\quad r=\frac{3}{4}
$$

Nth term:

$$
t_n=5\left(\frac{3}{4}\right)^{n-1}
$$

### Practice: Recursive Rule for \(t_n=3\cdot 10^{n-1}\)

This generates:

$$
3,\ 30,\ 300,\ 3000,\ldots
$$

Common ratio:

$$
10
$$

Recursive rule:

$$
t_1=3,\quad t_n=10t_{n-1}\quad (n\ge 2)
$$

---

## 8.6.1 - Fun with Fractals

A fractal is a pattern that repeats similar structure at smaller and smaller scales.

### Sierpinski Triangle

Start with one equilateral triangle.

At each stage:

1. Divide each black triangle into four equal smaller triangles.
2. Remove the middle triangle.
3. Keep the three corner triangles.

### Number of Black Triangles

Using stage number \(n\), starting at Stage 0:

| Stage \(n\) | Number of Black Triangles |
|---:|---:|
| 0 | \(1\) |
| 1 | \(3\) |
| 2 | \(9\) |
| 3 | \(27\) |
| 4 | \(81\) |
| 5 | \(243\) |

Rule:

$$
B_n=3^n
$$

Recursive rule:

$$
B_0=1,\quad B_n=3B_{n-1}\quad (n\ge 1)
$$

### Area of Black Region

At each stage, each triangle keeps \(3\) out of \(4\) equal parts.

So the black area is multiplied by:

$$
\frac{3}{4}
$$

If Stage 0 area is \(1\), then:

| Stage \(n\) | Black Area |
|---:|---:|
| 0 | \(1\) |
| 1 | \(\frac{3}{4}\) |
| 2 | \(\left(\frac{3}{4}\right)^2=\frac{9}{16}\) |
| 3 | \(\left(\frac{3}{4}\right)^3=\frac{27}{64}\) |
| 4 | \(\left(\frac{3}{4}\right)^4=\frac{81}{256}\) |
| 5 | \(\left(\frac{3}{4}\right)^5=\frac{243}{1024}\) |

Rule:

$$
A_n=\left(\frac{3}{4}\right)^n
$$

Recursive rule:

$$
A_0=1,\quad A_n=\frac{3}{4}A_{n-1}\quad (n\ge 1)
$$

### What Happens as \(n\) Increases?

The number of black triangles:

$$
3^n
$$

increases rapidly.

The total black area:

$$
\left(\frac{3}{4}\right)^n
$$

decreases toward \(0\).

This is a striking feature of fractals: number of pieces can grow while total area shrinks.

---

## 8.6.2 - Visualising a GP

When we plot an AP, the points lie on a straight line.

When we plot a GP like:

$$
3,\ 6,\ 12,\ 24,\ 48,\ldots
$$

the points do not lie on a straight line.

They grow faster and faster.

### Example 10: Bouncing Ball

A ball is dropped from a height of \(24\) feet.

Each bounce reaches:

$$
\frac{3}{4}
$$

of the previous height.

First bounce:

$$
24\cdot \frac{3}{4}=18
$$

Second bounce:

$$
18\cdot \frac{3}{4}=13.5
$$

Third bounce:

$$
13.5\cdot \frac{3}{4}=10.125
$$

The bounce-height sequence is:

$$
18,\ 13.5,\ 10.125,\ 7.59375,\ 5.6953125,\ldots
$$

This is a GP with:

$$
a=18,\quad r=\frac{3}{4}
$$

Nth bounce height:

$$
h_n=18\left(\frac{3}{4}\right)^{n-1}
$$

The original height is \(24\) feet.

One-sixth of the original height is:

$$
\frac{24}{6}=4
$$

After the 7th bounce:

$$
h_7=18\left(\frac{3}{4}\right)^6\approx 3.20
$$

So after 7 bounces, the ball remains below one-sixth of the original height.

---

## Exercise Set 8.3 - Guided Solutions

### Question 1

GP common ratio:

$$
r=2
$$

8th term:

$$
t_8=192
$$

The 12th term is 4 steps after the 8th term:

$$
t_{12}=192\cdot 2^4
$$

$$
t_{12}=192\cdot 16=3072
$$

### Question 2

GP:

$$
5,\ 25,\ 125,\ldots
$$

Here:

$$
a=5,\quad r=5
$$

Nth term:

$$
t_n=5\cdot 5^{n-1}=5^n
$$

10th term:

$$
t_{10}=5^{10}=9765625
$$

### Question 3

Recursive rule:

$$
t_1=2,\quad t_{n+1}=3t_n-2
$$

Generate terms:

$$
t_1=2
$$

$$
t_2=3(2)-2=4
$$

$$
t_3=3(4)-2=10
$$

$$
t_4=3(10)-2=28
$$

$$
t_5=3(28)-2=82
$$

$$
t_6=3(82)-2=244
$$

$$
t_7=3(244)-2=730
$$

So \(730\) is the 7th term.

### Question 4

GP:

$$
2,\ 6,\ 18,\ldots
$$

Here:

$$
a=2,\quad r=3
$$

Explicit formula:

$$
t_n=2\cdot 3^{n-1}
$$

Find when:

$$
2\cdot 3^{n-1}=4374
$$

$$
3^{n-1}=2187
$$

Since:

$$
2187=3^7
$$

we get:

$$
n-1=7
$$

$$
n=8
$$

Recursive formula:

$$
t_1=2,\quad t_n=3t_{n-1}\quad (n\ge 2)
$$

### Question 5

A ball is dropped from \(80\) metres.

Bounce ratio:

$$
0.6
$$

#### (i) Height After 5th Bounce

$$
h_5=80(0.6)^5
$$

$$
h_5=80(0.07776)
$$

$$
h_5=6.2208
$$

Answer:

$$
6.2208\text{ m}
$$

#### (ii) Total Vertical Distance by the Time It Hits Ground for 6th Time

Initial fall:

$$
80
$$

Bounce heights before the 6th ground hit:

$$
48,\ 28.8,\ 17.28,\ 10.368,\ 6.2208
$$

Each bounce height is travelled upward and downward before the next hit.

Total distance:

$$
80+2(48+28.8+17.28+10.368+6.2208)
$$

$$
=80+2(110.6688)
$$

$$
=301.3376
$$

Answer:

$$
301.3376\text{ m}
$$

### Question 6

The raw extraction of this question is damaged. It appears to involve powers of \(2\) and asks which term is \(128\).

If the intended sequence is:

$$
2,\ 2^2,\ 2^3,\ 2^4,\ldots
$$

then:

$$
128=2^7
$$

So \(128\) is the 7th term.

If the intended sequence is:

$$
2^2,\ 2^4,\ 2^6,\ldots
$$

then every term is an even power of \(2\), and \(128=2^7\) is not a term.

The method is to express \(128\) as a power of \(2\), then compare exponents with the sequence rule.

### Question 7: Sierpinski Square Carpet

Stage 0 begins with 1 square.

At each stage:

- each retained square is divided into 9 smaller squares;
- the centre square is removed;
- 8 squares are retained.

#### Number of Red Squares

| Stage \(n\) | Number of Red Squares |
|---:|---:|
| 0 | \(1\) |
| 1 | \(8\) |
| 2 | \(64\) |
| 3 | \(512\) |
| 4 | \(4096\) |
| 5 | \(32768\) |

Explicit formula:

$$
R_n=8^n
$$

Recursive formula:

$$
R_0=1,\quad R_n=8R_{n-1}\quad (n\ge 1)
$$

#### Area of Red Region

At each stage, \(8\) out of \(9\) equal parts are retained.

If Stage 0 area is \(1\), then:

| Stage \(n\) | Red Area |
|---:|---:|
| 0 | \(1\) |
| 1 | \(\frac{8}{9}\) |
| 2 | \(\left(\frac{8}{9}\right)^2=\frac{64}{81}\) |
| 3 | \(\left(\frac{8}{9}\right)^3=\frac{512}{729}\) |
| 4 | \(\left(\frac{8}{9}\right)^4=\frac{4096}{6561}\) |
| 5 | \(\left(\frac{8}{9}\right)^5=\frac{32768}{59049}\) |

Explicit formula:

$$
A_n=\left(\frac{8}{9}\right)^n
$$

Recursive formula:

$$
A_0=1,\quad A_n=\frac{8}{9}A_{n-1}\quad (n\ge 1)
$$

As \(n\) increases, the number of red squares grows, but the total red area decreases toward \(0\).

---

## End-of-Chapter Exercises - Structured Solutions

### Question 1

Find the 31st term of an AP whose 11th term is \(38\) and 16th term is \(73\).

Let first term be \(a\), common difference \(d\).

$$
t_{11}=a+10d=38
$$

$$
t_{16}=a+15d=73
$$

Subtract:

$$
5d=35
$$

$$
d=7
$$

Then:

$$
a+10(7)=38
$$

$$
a=-32
$$

31st term:

$$
t_{31}=a+30d=-32+210=178
$$

### Question 2

Third term:

$$
a+2d=16
$$

7th term exceeds 5th term by \(12\):

$$
(a+6d)-(a+4d)=12
$$

$$
2d=12
$$

$$
d=6
$$

Then:

$$
a+2(6)=16
$$

$$
a=4
$$

AP:

$$
4,\ 10,\ 16,\ 22,\ldots
$$

### Question 3

Three-digit multiples of \(7\).

Smallest:

$$
105
$$

Largest:

$$
994
$$

AP:

$$
105,\ 112,\ 119,\ldots,\ 994
$$

Number of terms:

$$
994=105+(n-1)7
$$

$$
889=7(n-1)
$$

$$
n-1=127
$$

$$
n=128
$$

Answer:

$$
128
$$

### Question 4

Multiples of \(4\) between \(10\) and \(250\):

$$
12,\ 16,\ 20,\ldots,\ 248
$$

Number of terms:

$$
248=12+(n-1)4
$$

$$
236=4(n-1)
$$

$$
n-1=59
$$

$$
n=60
$$

### Question 5

Find a GP where the sum of first two terms is \(-4\) and fifth term is 4 times third term.

Let first term be \(a\), common ratio \(r\).

First two terms:

$$
a,\ ar
$$

Condition:

$$
a+ar=-4
$$

So:

$$
a(1+r)=-4
$$

Third term:

$$
ar^2
$$

Fifth term:

$$
ar^4
$$

Given:

$$
ar^4=4ar^2
$$

Assuming \(a\ne 0\) and \(r\ne 0\):

$$
r^2=4
$$

So:

$$
r=2\quad \text{or}\quad r=-2
$$

If \(r=2\):

$$
a(3)=-4
$$

$$
a=-\frac{4}{3}
$$

One GP is:

$$
-\frac{4}{3},\ -\frac{8}{3},\ -\frac{16}{3},\ldots
$$

If \(r=-2\):

$$
a(1-2)=-4
$$

$$
-a=-4
$$

$$
a=4
$$

Another GP is:

$$
4,\ -8,\ 16,\ -32,\ldots
$$

### Question 6

Express \(100\) as a sum of consecutive natural numbers.

Possible expressions:

$$
100
$$

$$
18+19+20+21+22=100
$$

$$
9+10+11+12+13+14+15+16=100
$$

These are the positive-natural-number expressions using consecutive terms.

### Question 7

Bacteria double every hour. Initially:

$$
30
$$

At end of 2nd hour:

$$
30\cdot 2^2=120
$$

At end of 4th hour:

$$
30\cdot 2^4=480
$$

At end of \(n\)th hour:

$$
30\cdot 2^n
$$

### Question 8

Given:

$$
t_4+t_8=24
$$

and:

$$
t_6+t_{10}=44
$$

Using \(t_n=a+(n-1)d\):

$$
(a+3d)+(a+7d)=24
$$

$$
2a+10d=24
$$

$$
a+5d=12
$$

Also:

$$
(a+5d)+(a+9d)=44
$$

$$
2a+14d=44
$$

$$
a+7d=22
$$

Subtract:

$$
2d=10
$$

$$
d=5
$$

Then:

$$
a+25=12
$$

$$
a=-13
$$

First three terms:

$$
-13,\ -8,\ -3
$$

### Question 9

Find the smallest \(n\) such that:

$$
\frac{n(n+1)}{2}>1000
$$

Check \(n=44\):

$$
\frac{44(45)}{2}=990
$$

Check \(n=45\):

$$
\frac{45(46)}{2}=1035
$$

Smallest value:

$$
n=45
$$

### Question 10

GP:

$$
2,\ 8,\ 32,\ldots
$$

Here:

$$
a=2,\quad r=4
$$

Explicit formula:

$$
t_n=2\cdot 4^{n-1}
$$

Find:

$$
2\cdot 4^{n-1}=131072
$$

$$
4^{n-1}=65536
$$

Since:

$$
65536=4^8
$$

we get:

$$
n-1=8
$$

$$
n=9
$$

Recursive formula:

$$
t_1=2,\quad t_n=4t_{n-1}\quad (n\ge 2)
$$

### Question 11

Let three GP terms be:

$$
\frac{a}{r},\ a,\ ar
$$

Their product is:

$$
\frac{a}{r}\cdot a\cdot ar=a^3
$$

Given product:

$$
a^3=-1
$$

So:

$$
a=-1
$$

Sum:

$$
\frac{-1}{r}-1-r=\frac{13}{12}
$$

Solving gives:

$$
r=-\frac{4}{3}
$$

or:

$$
r=-\frac{3}{4}
$$

The terms are:

$$
\frac{3}{4},\ -1,\ \frac{4}{3}
$$

or:

$$
\frac{4}{3},\ -1,\ \frac{3}{4}
$$

### Question 12

In a GP:

$$
t_n=ar^{n-1}
$$

Given:

$$
x=t_4=ar^3
$$

$$
y=t_{10}=ar^9
$$

$$
z=t_{16}=ar^{15}
$$

Then:

$$
\frac{y}{x}=\frac{ar^9}{ar^3}=r^6
$$

and:

$$
\frac{z}{y}=\frac{ar^{15}}{ar^9}=r^6
$$

Since:

$$
\frac{y}{x}=\frac{z}{y}
$$

\(x,y,z\) are in GP.

### Question 13

The first three terms of a GP have sum \(26\) and sum of squares \(364\).

One suitable GP is:

$$
2,\ 6,\ 18
$$

Check sum:

$$
2+6+18=26
$$

Check sum of squares:

$$
2^2+6^2+18^2=4+36+324=364
$$

So the terms are:

$$
2,\ 6,\ 18
$$

The reverse order:

$$
18,\ 6,\ 2
$$

is also a GP with common ratio \(\frac{1}{3}\).

### Question 14

Given:

$$
P_1=1,\quad P_2=2
$$

and for \(n>2\):

$$
P_n=P_1+P_2+\cdots+P_{n-1}+1
$$

Compute:

$$
P_3=1+2+1=4
$$

$$
P_4=1+2+4+1=8
$$

$$
P_5=1+2+4+8+1=16
$$

So:

$$
P_1,\ldots,P_8=1,\ 2,\ 4,\ 8,\ 16,\ 32,\ 64,\ 128
$$

Simpler recursive formula:

$$
P_n=2P_{n-1}\quad (n\ge 2)
$$

Explicit formula:

$$
P_n=2^{n-1}
$$

### Question 15

Given:

$$
W_1=1,\quad W_2=2
$$

and for \(n>2\):

$$
W_n=W_1+W_2+\cdots+W_{n-2}+2
$$

Compute:

$$
W_3=W_1+2=3
$$

$$
W_4=W_1+W_2+2=5
$$

$$
W_5=W_1+W_2+W_3+2=8
$$

Continuing:

$$
W_1,\ldots,W_8=1,\ 2,\ 3,\ 5,\ 8,\ 13,\ 21,\ 34
$$

This is the Virahanka-Fibonacci sequence.

Simpler recursive rule:

$$
W_n=W_{n-1}+W_{n-2}\quad (n\ge 3)
$$

---

## Formula Sheet

### Sequence Notation

First term:

$$
t_1
$$

Nth term:

$$
t_n
$$

### Arithmetic Progression

General form:

$$
a,\ a+d,\ a+2d,\ a+3d,\ldots
$$

Nth term:

$$
t_n=a+(n-1)d
$$

Recursive rule:

$$
t_1=a,\quad t_n=t_{n-1}+d
$$

Sum of first \(n\) terms:

$$
S_n=\frac{n}{2}\left[2a+(n-1)d\right]
$$

or:

$$
S_n=\frac{n}{2}(a+l)
$$

### Natural Number Sum

$$
1+2+3+\cdots+n=\frac{n(n+1)}{2}
$$

### Triangular Number

$$
T_n=\frac{n(n+1)}{2}
$$

### Geometric Progression

General form:

$$
a,\ ar,\ ar^2,\ ar^3,\ldots
$$

Nth term:

$$
t_n=ar^{n-1}
$$

Recursive rule:

$$
t_1=a,\quad t_n=rt_{n-1}
$$

### Sierpinski Triangle

Number of black triangles at Stage \(n\):

$$
B_n=3^n
$$

Area at Stage \(n\), if Stage 0 area is \(1\):

$$
A_n=\left(\frac{3}{4}\right)^n
$$

### Sierpinski Square Carpet

Number of red squares at Stage \(n\):

$$
R_n=8^n
$$

Area at Stage \(n\), if Stage 0 area is \(1\):

$$
A_n=\left(\frac{8}{9}\right)^n
$$

---

## Common Mistakes and Corrections

| Mistake | Why It Is Wrong | Correct Thinking |
|---|---|---|
| Treating every pattern as an AP | Some patterns grow by multiplication or irregular rules. | Check differences first; if not constant, check ratios. |
| Using \(t_n=an+d\) blindly | The AP formula is \(a+(n-1)d\), not always \(an+d\). | Identify first term and common difference carefully. |
| Forgetting \(n-1\) in GP formula | First term is \(a\), not \(ar\). | Use \(t_n=ar^{n-1}\). |
| Allowing fractional \(n\) as a term position | Term positions are natural numbers. | If solving gives non-natural \(n\), the number is not a term. |
| Confusing explicit and recursive rules | Explicit uses \(n\); recursive uses previous terms. | Name the rule based on how it finds the term. |
| Thinking equal differences and equal ratios are the same | AP adds; GP multiplies. | AP: constant difference. GP: constant ratio. |
| Using AP sum formula without knowing number of terms | Sum needs \(n\). | Find \(n\) before summing. |
| Mixing stage numbering in fractals | Some patterns start at Stage 0, not Stage 1. | State your indexing clearly. |
| Assuming a decreasing sequence cannot be an AP | APs can have negative common difference. | Example: \(11,7,3,-1,\ldots\). |
| Assuming a GP must increase | GPs can decrease if \(0<r<1\), alternate if \(r<0\). | Check the common ratio. |

---

## Concept Map

| Concept | Leads To |
|---|---|
| Ordered list | Sequence |
| Position notation | \(t_n\) |
| Direct formula | Explicit rule |
| Previous-term formula | Recursive rule |
| Constant difference | Arithmetic progression |
| AP graph | Straight line |
| Natural-number sum | Triangular numbers and AP sums |
| Constant ratio | Geometric progression |
| Powers | GP nth terms |
| Repeated geometric construction | Fractals and GPs |
| Repeated doubling or multiplying | Growth models |

---

## Rapid Revision Questions

### Definitions

1. What is a sequence?
2. What is a term?
3. What is an explicit rule?
4. What is a recursive rule?
5. What is an arithmetic progression?
6. What is a common difference?
7. What is a geometric progression?
8. What is a common ratio?
9. What is a triangular number?
10. What is a fractal?

### Calculation Practice

1. Find the 20th term of \(t_n=4n-1\).
2. Check whether \(151\) is a term of \(t_n=5n+1\).
3. Find the 30th term of AP \(7,11,15,\ldots\).
4. Find the sum of the first 50 natural numbers.
5. Find the 12th triangular number.
6. Find the 8th term of GP \(3,6,12,\ldots\).
7. Find which term of GP \(5,15,45,\ldots\) is \(1215\).
8. Find the Stage 5 number of black triangles in the Sierpinski triangle.

---

## Answers to Rapid Revision Calculations

### 1. \(t_n=4n-1\)

$$
t_{20}=4(20)-1=79
$$

### 2. Check \(151\)

$$
5n+1=151
$$

$$
5n=150
$$

$$
n=30
$$

So \(151\) is the 30th term.

### 3. AP \(7,11,15,\ldots\)

Here:

$$
a=7,\quad d=4
$$

30th term:

$$
t_{30}=7+29(4)=123
$$

### 4. Sum of First 50 Natural Numbers

$$
S_{50}=\frac{50(51)}{2}=1275
$$

### 5. 12th Triangular Number

$$
T_{12}=\frac{12(13)}{2}=78
$$

### 6. GP \(3,6,12,\ldots\)

Here:

$$
a=3,\quad r=2
$$

8th term:

$$
t_8=3\cdot 2^7=384
$$

### 7. GP \(5,15,45,\ldots\)

Here:

$$
t_n=5\cdot 3^{n-1}
$$

Set:

$$
5\cdot 3^{n-1}=1215
$$

$$
3^{n-1}=243
$$

$$
243=3^5
$$

So:

$$
n=6
$$

### 8. Sierpinski Triangle Stage 5

$$
B_5=3^5=243
$$

---

## Final Chapter Summary

- A sequence is an ordered list of numbers.
- Each number in a sequence is called a term.
- \(t_n\) denotes the \(n\)th term.
- A finite sequence ends; an infinite sequence continues.
- An explicit rule gives the \(n\)th term directly from \(n\).
- A recursive rule gives a term using previous term(s).
- The triangular number sequence is:

$$
1,\ 3,\ 6,\ 10,\ 15,\ldots
$$

- The \(n\)th triangular number is:

$$
T_n=\frac{n(n+1)}{2}
$$

- An AP has a constant difference.
- The \(n\)th term of an AP is:

$$
t_n=a+(n-1)d
$$

- The sum of the first \(n\) natural numbers is:

$$
S_n=\frac{n(n+1)}{2}
$$

- The sum of the first \(n\) terms of an AP is:

$$
S_n=\frac{n}{2}\left[2a+(n-1)d\right]
$$

- A GP has a constant ratio.
- The \(n\)th term of a GP is:

$$
t_n=ar^{n-1}
$$

- APs grow by repeated addition.
- GPs grow or shrink by repeated multiplication.
- Sierpinski triangle and Sierpinski square carpet produce geometric progressions.
- In fractals, the number of pieces may increase while total area decreases.

---

## Study Strategy for Learners

When solving a sequence problem:

1. Write the first few terms clearly.
2. Check differences.
3. If differences are constant, use AP methods.
4. If differences are not constant, check ratios.
5. If ratios are constant, use GP methods.
6. If a rule is given with \(n\), it is explicit.
7. If a rule uses earlier terms, it is recursive.
8. When asked whether a number is a term, solve for \(n\) and check that \(n\) is a natural number.
9. For sums, first find the number of terms.
10. For fractals, be careful whether the first stage is called Stage 0 or Stage 1.

The most important distinction in this chapter is simple:

- AP means add the same number.
- GP means multiply by the same number.

---

*Source: NCERT Class 9 - Maths, Chapter 8 raw file. Learner-facing version manually rewritten from the extracted chapter content about sequences and progressions.*
