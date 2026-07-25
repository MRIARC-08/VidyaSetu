# Chapter 5: Arithmetic Progressions
### NCERT Class 10 - Maths

---

## Chapter at a Glance

| Detail | Learner-Friendly Information |
|---|---|
| **Class** | 10 |
| **Subject** | Maths |
| **Chapter** | 5 |
| **Core Theme** | Arithmetic progressions, nth term, and sum of first `n` terms. |
| **Main Skills** | Recognising APs, finding common difference, finding missing terms, using nth-term formula, using sum formula, solving word problems. |
| **Key Formulas** | `a_n = a + (n - 1)d`, `S_n = n/2[2a + (n - 1)d]`, `S_n = n/2(a + l)`. |

---

## Section Structure

| Unit | Topic | Main Learning Focus |
|---|---|---|
| **5A** | Pattern and AP | Recognising fixed-difference patterns. |
| **5B** | Common Difference | Finding `a` and `d`; finite and infinite APs. |
| **5C** | nth Term | Finding a term, term number, and missing information. |
| **5D** | Sum of First n Terms | Sum formulas and Gauss pairing method. |
| **5E** | Word Problems | Salary, rows, logs, penalties, savings, distance, production. |
| **5F** | Solved Exercises | Solutions for Exercises 5.1, 5.2, 5.3, and optional 5.4. |

---

## Learning Outcomes

By the end of this chapter, you should be able to:

| Outcome | You Should Be Able To... |
|---|---|
| **Recognise APs** | Check whether consecutive differences are equal. |
| **Find common difference** | Use `d = a_{k+1} - a_k`. |
| **Write terms** | Generate terms from first term `a` and common difference `d`. |
| **Use nth term** | Apply `a_n = a + (n - 1)d`. |
| **Find term number** | Solve for `n` and check that it is a positive integer. |
| **Use sum formulas** | Apply `S_n = n/2[2a + (n - 1)d]` or `S_n = n/2(a + l)`. |
| **Solve AP word problems** | Convert real-life uniform increase/decrease situations into APs. |
| **Check admissibility** | Reject impossible values such as negative counts or non-integer term numbers. |

---

## Key Terms

| Term | Meaning |
|---|---|
| **Term** | Each number in a sequence. |
| **Arithmetic progression** | List in which each term after the first is obtained by adding a fixed number to the previous term. |
| **First term** | First number of the AP, usually denoted by `a`. |
| **Common difference** | Fixed difference between consecutive terms, denoted by `d`. |
| **Finite AP** | AP with a last term. |
| **Infinite AP** | AP that continues without a last term. |
| **nth term** | General term of an AP, denoted by `a_n`. |
| **Last term** | Last term of a finite AP, often denoted by `l`. |
| **Arithmetic mean** | If `a`, `b`, `c` are in AP, then `b = (a + c)/2`. |

---

## Formula Bank

## General Form of an AP

$$
a,\ a+d,\ a+2d,\ a+3d,\ldots
$$

## Common Difference

$$
d = a_{k+1} - a_k
$$

## nth Term

$$
a_n = a + (n - 1)d
$$

## Last Term

If an AP has `n` terms:

$$
l = a_n = a + (n - 1)d
$$

## Sum of First n Terms

$$
S_n = \frac{n}{2}[2a + (n - 1)d]
$$

## Sum When First and Last Terms Are Known

$$
S_n = \frac{n}{2}(a + l)
$$

## nth Term from Sums

$$
a_n = S_n - S_{n-1}
$$

## Sum of First n Positive Integers

$$
1 + 2 + 3 + \cdots + n = \frac{n(n+1)}{2}
$$

---

# Unit 5A: Understanding Arithmetic Progressions

## What Makes a List an AP?

A list forms an arithmetic progression when the difference between every pair of consecutive terms is the same.

Example:

$$
6,\ 9,\ 12,\ 15,\ldots
$$

Differences:

$$
9 - 6 = 3
$$

$$
12 - 9 = 3
$$

$$
15 - 12 = 3
$$

So it is an AP with:

$$
a = 6,\quad d = 3
$$

## Common Difference Can Be Positive, Negative, or Zero

| AP | Common Difference | Meaning |
|---|---:|---|
| `1, 2, 3, 4, ...` | `1` | Increasing AP |
| `100, 70, 40, 10, ...` | `-30` | Decreasing AP |
| `3, 3, 3, 3, ...` | `0` | Constant AP |
| `-1.0, -1.5, -2.0, ...` | `-0.5` | Decreasing decimal AP |

## Not Every Pattern Is an AP

The list:

$$
1,\ 1,\ 2,\ 3,\ 5,\ldots
$$

is not an AP because consecutive differences are:

$$
0,\ 1,\ 1,\ 2,\ldots
$$

They are not equal.

---

# Unit 5B: First Term, Common Difference, and Terms

## Finding `a` and `d`

For any AP:

| Quantity | How to Find |
|---|---|
| `a` | First term. |
| `d` | Second term minus first term. |

Example:

$$
3,\ 1,\ -1,\ -3,\ldots
$$

Here:

$$
a = 3
$$

$$
d = 1 - 3 = -2
$$

## Creating an AP from `a` and `d`

If:

$$
a = -7,\quad d = -2
$$

then AP is:

$$
-7,\ -9,\ -11,\ -13,\ldots
$$

If:

$$
a = 2,\quad d = 0
$$

then AP is:

$$
2,\ 2,\ 2,\ 2,\ldots
$$

---

# Unit 5C: nth Term of an AP

## Derivation Pattern

For AP:

$$
a,\ a+d,\ a+2d,\ a+3d,\ldots
$$

we have:

| Term | Expression |
|---|---|
| First | `a` |
| Second | `a + d` |
| Third | `a + 2d` |
| Fourth | `a + 3d` |
| nth | `a + (n - 1)d` |

So:

$$
a_n = a + (n - 1)d
$$

## Finding a Term

For AP:

$$
2,\ 7,\ 12,\ldots
$$

we have:

$$
a = 2,\quad d = 5
$$

The 10th term:

$$
a_{10} = 2 + (10 - 1)5
$$

$$
a_{10} = 47
$$

## Checking Whether a Number Is a Term

For AP:

$$
5,\ 11,\ 17,\ 23,\ldots
$$

we have:

$$
a = 5,\quad d = 6
$$

To check whether `301` is a term:

$$
301 = 5 + (n - 1)6
$$

$$
301 = 6n - 1
$$

$$
n = \frac{302}{6} = \frac{151}{3}
$$

Since `n` is not a positive integer, `301` is not a term.

## Term from the End

To find a term from the end of a finite AP, either:

1. Reverse the AP and use the nth-term formula, or
2. Find total number of terms first.

Example:

AP:

$$
10,\ 7,\ 4,\ldots,\ -62
$$

Reversed AP:

$$
-62,\ -59,\ -56,\ldots
$$

Here:

$$
a = -62,\quad d = 3
$$

11th term from last:

$$
a_{11} = -62 + 10(3) = -32
$$

---

# Unit 5D: Sum of First n Terms

## Gauss Pairing Idea

To find:

$$
1 + 2 + 3 + \cdots + 100
$$

write it forward and backward:

$$
S = 1 + 2 + 3 + \cdots + 99 + 100
$$

$$
S = 100 + 99 + 98 + \cdots + 2 + 1
$$

Add:

$$
2S = 101 + 101 + \cdots + 101
$$

There are `100` pairs.

$$
2S = 100 \times 101
$$

$$
S = 5050
$$

## Sum Formula

For AP:

$$
a,\ a+d,\ a+2d,\ldots
$$

the sum of first `n` terms is:

$$
S_n = \frac{n}{2}[2a + (n - 1)d]
$$

If the last term `l` is known:

$$
S_n = \frac{n}{2}(a + l)
$$

## Example: Shakila's Money Box

Amounts:

$$
100,\ 150,\ 200,\ 250,\ldots
$$

For 21 birthdays:

$$
a = 100,\quad d = 50,\quad n = 21
$$

$$
S_{21} = \frac{21}{2}[2(100) + 20(50)]
$$

$$
S_{21} = \frac{21}{2}(1200)
$$

$$
S_{21} = 12600
$$

Total money is Rs `12600`.

---

# Unit 5E: Solved Exercise 5.1

## Question 1: Which Situations Form an AP?

| Part | Situation | List Pattern | AP? | Reason |
|---|---|---|---|---|
| (i) | Taxi fare: Rs 15 first km, Rs 8 each additional km | `15, 23, 31, 39, ...` | Yes | Common difference `8`. |
| (ii) | Vacuum pump removes `1/4` of remaining air each time | `A, 3A/4, 9A/16, ...` | No | Terms are multiplied by `3/4`; differences are not equal. |
| (iii) | Digging cost: Rs 150 first metre, rises by Rs 50 each metre | `150, 200, 250, ...` | Yes | Common difference `50`. |
| (iv) | Compound interest at 8 percent | `10000, 10800, 11664, ...` | No | Amount is multiplied by `1.08`; differences are not equal. |

## Question 2: First Four Terms

| Part | `a` | `d` | First Four Terms |
|---|---:|---:|---|
| (i) | `10` | `10` | `10, 20, 30, 40` |
| (ii) | `-2` | `0` | `-2, -2, -2, -2` |
| (iii) | `4` | `-3` | `4, 1, -2, -5` |
| (iv) | `-1` | `1/2` | `-1, -1/2, 0, 1/2` |
| (v) | `-1.25` | `-0.25` | `-1.25, -1.50, -1.75, -2.00` |

## Question 3: First Term and Common Difference

| Part | AP | First Term `a` | Common Difference `d` |
|---|---|---:|---:|
| (i) | `3, 1, -1, -3, ...` | `3` | `-2` |
| (ii) | `-5, -1, 3, 7, ...` | `-5` | `4` |
| (iii) | `1/3, 5/3, 9/3, 13/3, ...` | `1/3` | `4/3` |
| (iv) | `0.6, 1.7, 2.8, 3.9, ...` | `0.6` | `1.1` |

## Question 4: Which Are APs?

| Part | List | AP? | `d` if AP | Next Three Terms if AP |
|---|---|---|---:|---|
| (i) | `2, 4, 8, 16, ...` | No | - | - |
| (ii) | `2, 5/2, 3, 7/2, ...` | Yes | `1/2` | `4, 9/2, 5` |
| (iii) | `-1.2, -3.2, -5.2, -7.2, ...` | Yes | `-2` | `-9.2, -11.2, -13.2` |
| (iv) | `-10, -6, -2, 2, ...` | Yes | `4` | `6, 10, 14` |
| (v) | `3, 3+sqrt(2), 3+2sqrt(2), 3+3sqrt(2), ...` | Yes | `sqrt(2)` | `3+4sqrt(2), 3+5sqrt(2), 3+6sqrt(2)` |
| (vi) | `0.2, 0.22, 0.222, 0.2222, ...` | No | - | - |
| (vii) | `0, -4, -8, -12, ...` | Yes | `-4` | `-16, -20, -24` |
| (viii) | `-1/2, -1/2, -1/2, -1/2, ...` | Yes | `0` | `-1/2, -1/2, -1/2` |
| (ix) | `1, 3, 9, 27, ...` | No | - | - |
| (x) | `a, 2a, 3a, 4a, ...` | Yes | `a` | `5a, 6a, 7a` |
| (xi) | `a, a^2, a^3, a^4, ...` | Not generally | - | - |
| (xii) | `sqrt(2), sqrt(8), sqrt(18), sqrt(32), ...` | Yes | `sqrt(2)` | `sqrt(50), sqrt(72), sqrt(98)` |
| (xiii) | `sqrt(3), sqrt(6), sqrt(9), sqrt(12), ...` | No | - | - |
| (xiv) | `1^2, 3^2, 5^2, 7^2, ...` | No | - | - |
| (xv) | `1^2, 5^2, 7^2, 7^3, ...` | No | - | - |

---

# Unit 5F: Solved Exercise 5.2

## Question 1: Fill the Table

Use:

$$
a_n = a + (n - 1)d
$$

| Part | Given | Missing Value | Working |
|---|---|---:|---|
| (i) | `a = 7`, `d = 3`, `n = 8` | `a_n = 28` | `7 + 7(3) = 28` |
| (ii) | `a = -18`, `n = 10`, `a_n = 0` | `d = 2` | `0 = -18 + 9d` |
| (iii) | `d = -3`, `n = 18`, `a_n = -5` | `a = 46` | `-5 = a + 17(-3)` |
| (iv) | `a = -18.9`, `d = 2.5`, `a_n = 3.6` | `n = 10` | `22.5 = 2.5(n - 1)` |
| (v) | `a = 3.5`, `d = 0`, `n = 105` | `a_n = 3.5` | Constant AP |

## Question 2: Choose the Correct Choice

| Part | AP | Required Term | Working | Answer |
|---|---|---|---|---|
| (i) | `10, 7, 4, ...` | `a_30` | `10 + 29(-3) = -77` | `(C) -77` |
| (ii) | `-3, -1/2, 2, ...` | `a_11` | `-3 + 10(5/2) = 22` | `(B) 22` |

## Question 3: Missing Terms

| Part | Given AP Form | Completed AP |
|---|---|---|
| (i) | `2, __, 26` | `2, 14, 26` |
| (ii) | `__, 13, __, 3` | `18, 13, 8, 3` |
| (iii) | `5, __, __, 19/2` | `5, 13/2, 8, 19/2` |
| (iv) | `-4, __, __, __, __, 6` | `-4, -2, 0, 2, 4, 6` |
| (v) | `__, 38, __, __, __, -22` | `53, 38, 23, 8, -7, -22` |

## Questions 4 to 20

| Q | Problem | Key Working | Answer |
|---|---|---|---|
| 4 | Which term of `3, 8, 13, ...` is `78`? | `78 = 3 + (n-1)5` | `16th` |
| 5(i) | Number of terms in `7, 13, 19, ..., 205` | `205 = 7 + (n-1)6` | `34` |
| 5(ii) | Number of terms in `18, 15.5, 13, ..., -47` | `-47 = 18 + (n-1)(-5/2)` | `27` |
| 6 | Is `-150` a term of `11, 8, 5, 2, ...`? | `-150 = 11 + (n-1)(-3)` gives `n = 164/3` | No |
| 7 | `a_11 = 38`, `a_16 = 73`; find `a_31` | `5d = 35`, so `d=7`; `a=-32` | `178` |
| 8 | 50 terms, `a_3=12`, last `106`; find `a_29` | `47d=94`, so `d=2`, `a=8` | `64` |
| 9 | `a_3=4`, `a_9=-8`; which term is zero? | `d=-2`, `a=8`; `0=8+(n-1)(-2)` | `5th` |
| 10 | `a_17` exceeds `a_10` by 7 | `a_17-a_10=7d=7` | `d=1` |
| 11 | Which term of `3,15,27,...` is 132 more than `a_54`? | `a_54=639`; target `771`; `3+(n-1)12=771` | `65th` |
| 12 | Two APs have same `d`; difference of 100th terms is 100 | Difference between same-numbered terms is constant | `100` |
| 13 | Three-digit numbers divisible by 7 | First `105`, last `994`, `d=7` | `128` |
| 14 | Multiples of 4 between 10 and 250 | First `12`, last `248`, `d=4` | `60` |
| 15 | Equal nth terms of `63,65,67,...` and `3,10,17,...` | `2n+61 = 7n-4` | `n=13` |
| 16 | `a_3=16`, `a_7` exceeds `a_5` by 12 | `2d=12`, so `d=6`; `a=4` | `4, 10, 16, 22, ...` |
| 17 | 20th term from last of `3,8,13,...,253` | Reverse AP: `253,248,243,...`; `a_20=253+19(-5)` | `158` |
| 18 | `a_4+a_8=24`, `a_6+a_10=44` | `a+5d=12`, `a+7d=22`; `d=5`, `a=-13` | `-13, -8, -3` |
| 19 | Salary Rs 5000 in 1995, increment Rs 200; reaches Rs 7000 | `7000=5000+(n-1)200` | `11th year`, i.e. `2005` |
| 20 | Savings Rs 5 first week, increases by Rs 1.75; reaches Rs 20.75 | `20.75=5+(n-1)1.75` | `n=10` |

---

# Unit 5G: Solved Exercise 5.3

## Question 1: Find the Sums

| Part | AP and Terms | Working | Sum |
|---|---|---|---:|
| (i) | `2, 7, 12, ...`, 10 terms | `S = 10/2[2(2)+9(5)]` | `245` |
| (ii) | `-37, -33, -29, ...`, 12 terms | `S = 12/2[2(-37)+11(4)]` | `-180` |
| (iii) | `0.6, 1.7, 2.8, ...`, 100 terms | `S = 100/2[1.2+99(1.1)]` | `5505` |
| (iv) | `1/15, 1/12, 1/10, ...`, 11 terms | `a=1/15`, `d=1/60` | `33/20` |

## Question 2: Find the Sums

| Part | Series | Working | Sum |
|---|---|---|---:|
| (i) | `7 + 10.5 + 14 + ... + 84` | `a=7`, `d=3.5`, `n=23`; `S=23/2(7+84)` | `2093/2` |
| (ii) | `34 + 32 + 30 + ... + 10` | `a=34`, `d=-2`, `n=13`; `S=13/2(44)` | `286` |
| (iii) | `-5 + (-8) + (-11) + ... + (-230)` | `a=-5`, `d=-3`, `n=76`; `S=76/2(-235)` | `-8930` |

## Question 3: Mixed AP Data

| Part | Given | Required | Key Working | Answer |
|---|---|---|---|---|
| (i) | `a=5`, `d=3`, `a_n=50` | `n`, `S_n` | `50=5+(n-1)3` | `n=16`, `S_n=440` |
| (ii) | `a=7`, `a_13=35` | `d`, `S_13` | `35=7+12d` | `d=7/3`, `S_13=273` |
| (iii) | `a_12=37`, `d=3` | `a`, `S_12` | `37=a+11(3)` | `a=4`, `S_12=246` |
| (iv) | `a_3=15`, `S_10=125` | `d`, `a_10` | `a+2d=15`, `5[2a+9d]=125` | `d=-1`, `a_10=8` |
| (v) | `d=5`, `S_9=75` | `a`, `a_9` | `9/2[2a+40]=75` | `a=-35/3`, `a_9=85/3` |
| (vi) | `a=2`, `d=8`, `S_n=90` | `n`, `a_n` | `n/2[4+8(n-1)]=90` | `n=5`, `a_n=34` |
| (vii) | `a=8`, `a_n=62`, `S_n=210` | `n`, `d` | `210=n/2(8+62)` | `n=6`, `d=54/5` |
| (viii) | `a_n=4`, `d=2`, `S_n=-14` | `n`, `a` | `a=6-2n`; `S=n/2(a+4)` | `n=7`, `a=-8` |
| (ix) | `a=3`, `n=8`, `S=192` | `d` | `192=8/2[6+7d]` | `d=6` |
| (x) | `l=28`, `S=144`, `n=9` | `a` | `144=9/2(a+28)` | `a=4` |

## Questions 4 to 20

| Q | Problem | Key Working | Answer |
|---|---|---|---|
| 4 | Terms of `9,17,25,...` for sum `636` | `n/2[18+(n-1)8]=636` | `12 terms` |
| 5 | `a=5`, `l=45`, `S=400` | `400=n/2(50)` | `n=16`, `d=8/3` |
| 6 | `a=17`, `l=350`, `d=9` | `350=17+(n-1)9` | `n=38`, `S=6973` |
| 7 | `d=7`, `a_22=149`; find `S_22` | `a=149-21(7)=2` | `1661` |
| 8 | Second and third terms are 14 and 18 | `d=4`, `a=10`; `S_51=51/2[20+50(4)]` | `5610` |
| 9 | `S_7=49`, `S_17=289` | `a+3d=7`, `a+8d=17`; `a=1`, `d=2` | `S_n=n^2` |
| 10(i) | `a_n=3+4n` | First term `7`, `d=4`; `S_15=15/2[14+56]` | AP, `S_15=525` |
| 10(ii) | `a_n=9-5n` | First term `4`, `d=-5`; `S_15=15/2[8-70]` | AP, `S_15=-465` |
| 11 | `S_n=4n-n^2` | `a_n=S_n-S_{n-1}` | `S_1=3`, `S_2=4`, `a_2=1`, `a_3=-1`, `a_10=-15`, `a_n=5-2n` |
| 12 | First 40 positive integers divisible by 6 | `6,12,...,240` | `4920` |
| 13 | First 15 multiples of 8 | `8,16,...,120` | `960` |
| 14 | Odd numbers between 0 and 50 | `1,3,...,49` | `625` |
| 15 | Penalty delayed 30 days | AP: `200,250,300,...`; `S_30=30/2[400+29(50)]` | Rs `27750` |
| 16 | Seven prizes total Rs 700, each Rs 20 less | `S_7=700`, `d=-20`; `a=160` | `160, 140, 120, 100, 80, 60, 40` |
| 17 | 3 sections each of Classes I to XII plant class-number trees | `3(1+2+...+12)` | `234 trees` |
| 18 | Spiral of 13 semicircles, radii `0.5,1.0,...,6.5` | Sum of lengths `= pi(0.5+1+...+6.5)` | `143 cm` using `pi=22/7` |
| 19 | 200 logs stacked `20,19,18,...` | `n/2[40-(n-1)]=200` | `16 rows`, top row `5 logs` |
| 20 | Potato race distances `5,8,11,...,32`; round trip each | Total `=2(5+8+...+32)` | `370 m` |

---

# Unit 5H: Optional Exercise 5.4 Solutions

## Question 1: First Negative Term

AP:

$$
121,\ 117,\ 113,\ldots
$$

Here:

$$
a = 121,\quad d = -4
$$

Need:

$$
a_n < 0
$$

$$
121 + (n - 1)(-4) < 0
$$

$$
125 - 4n < 0
$$

$$
n > 31.25
$$

So the first negative term is the `32nd` term.

## Question 2: Sum of Third and Seventh Terms

Given:

$$
a_3 + a_7 = 6
$$

and:

$$
a_3a_7 = 8
$$

The two terms are `2` and `4`.

Two APs are possible:

| Case | `a_3` | `a_7` | `d` | `a` | `S_16` |
|---|---:|---:|---:|---:|---:|
| 1 | `2` | `4` | `1/2` | `1` | `76` |
| 2 | `4` | `2` | `-1/2` | `5` | `20` |

So the sum of first sixteen terms is `76` or `20`, depending on the order of the third and seventh terms.

## Question 3: Ladder Rungs

Distance between top and bottom rungs is `2.5 m = 250 cm`.

Rungs are `25 cm` apart, so number of gaps:

$$
\frac{250}{25} = 10
$$

Number of rungs:

$$
10 + 1 = 11
$$

Lengths form an AP from `45 cm` to `25 cm`.

Total wood:

$$
S = \frac{11}{2}(45 + 25)
$$

$$
S = 385 \ \text{cm}
$$

**Answer:** `385 cm` or `3.85 m`.

## Question 4: House Number

Houses are numbered `1` to `49`.

Total sum:

$$
\frac{49 \times 50}{2} = 1225
$$

Need house number `x` such that:

$$
1 + 2 + \cdots + (x-1) = (x+1) + (x+2) + \cdots + 49
$$

This gives:

$$
x^2 = 1225
$$

So:

$$
x = 35
$$

**Answer:** House number `35`.

## Question 5: Concrete Terrace

There are `15` steps.

Volume of first step:

$$
50 \times \frac{1}{4} \times \frac{1}{2} = \frac{25}{4} \ \text{m}^3
$$

Volumes are:

$$
\frac{25}{4},\ 2\left(\frac{25}{4}\right),\ 3\left(\frac{25}{4}\right),\ldots,\ 15\left(\frac{25}{4}\right)
$$

Total volume:

$$
\frac{25}{4}(1 + 2 + \cdots + 15)
$$

$$
= \frac{25}{4} \times 120
$$

$$
= 750 \ \text{m}^3
$$

**Answer:** `750 cubic metres`.

---

# Unit 5I: Common Mistakes and Corrections

| Mistake | Correct Understanding |
|---|---|
| Subtracting previous term in the wrong order. | Use `d = next term - previous term`. |
| Assuming every pattern is an AP. | AP needs equal consecutive differences. |
| Forgetting `n` must be a positive integer. | If `n` is fractional, the number is not a term. |
| Confusing `a_n` and `S_n`. | `a_n` is one term; `S_n` is sum of terms. |
| Using `S_n = n/2(a+l)` when `l` is not known. | Use `S_n = n/2[2a+(n-1)d]` unless last term is known. |
| Forgetting round trip in race problems. | Multiply distance to each object by `2`. |
| Counting gaps instead of objects. | Number of objects is often number of gaps plus one. |
| Accepting both roots in AP sum problems without checking context. | Check whether `n` is positive and meaningful. |

---

# Unit 5J: Quick Revision Tables

## AP Recognition

| Test | Meaning |
|---|---|
| `a_2 - a_1 = a_3 - a_2 = a_4 - a_3 = ...` | AP |
| Consecutive differences not equal | Not AP |

## Main Formulas

| Quantity | Formula |
|---|---|
| nth term | `a_n = a + (n - 1)d` |
| Sum of first n terms | `S_n = n/2[2a + (n - 1)d]` |
| Sum using last term | `S_n = n/2(a + l)` |
| nth term from sums | `a_n = S_n - S_{n-1}` |

## When to Use Which Formula

| Given | Use |
|---|---|
| `a`, `d`, `n` | `a_n = a + (n - 1)d` |
| `a`, `d`, `n`, need sum | `S_n = n/2[2a + (n - 1)d]` |
| `a`, `l`, `n`, need sum | `S_n = n/2(a + l)` |
| `S_n`, need term | `a_n = S_n - S_{n-1}` |

---

# Final Study Strategy

## What to Memorise

Memorise:

1. Definition of AP.
2. Common difference formula.
3. nth term formula.
4. Sum formula using `a`, `d`, `n`.
5. Sum formula using first and last terms.
6. `a_n = S_n - S_{n-1}`.

## What to Practise

Practise:

| Skill | Practice Method |
|---|---|
| AP recognition | Compute three consecutive differences. |
| Term finding | Use `a_n = a + (n-1)d`. |
| Term number | Solve for `n` and check integer value. |
| Sum problems | Identify whether last term is known. |
| Word problems | Convert uniform increase/decrease into `a`, `d`, `n`. |
| Optional problems | Track objects versus gaps carefully. |

## One-Page Chapter Summary

An arithmetic progression is a list of numbers in which each term after the first is obtained by adding a fixed common difference `d` to the preceding term. Its general form is `a, a+d, a+2d, ...`.

The nth term is `a_n = a + (n - 1)d`. This formula helps find a term, check whether a number belongs to an AP, and find the number of terms. The sum of the first `n` terms is `S_n = n/2[2a + (n - 1)d]`. If the first and last terms are known, use `S_n = n/2(a + l)`.

APs appear in salaries, savings, penalties, rows of objects, divisible numbers, and distance problems. Always identify `a`, `d`, and `n` clearly, and check whether answers make sense in context.
