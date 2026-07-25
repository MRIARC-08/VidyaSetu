# Chapter 8 - Sequences And Series

Class 11 Maths learner notes

## 1. Big Picture

A sequence is an ordered list of numbers.

A series is the sum formed by adding the terms of a sequence.

This chapter teaches how to describe patterns, find terms, add terms, and use special sequences in real situations such as population growth, compound interest, depreciation, and repeated doubling.

The main focus is geometric progression, usually written as G.P.

In a geometric progression, every term is obtained by multiplying the previous term by the same fixed number.

Example:

$$
2,\ 4,\ 8,\ 16,\ 32,\ldots
$$

Here each term is multiplied by 2 to get the next term.

## 2. Learning Goals

By the end of this chapter, a learner should be able to:

- identify a sequence and its terms;
- distinguish between finite and infinite sequences;
- find terms from a formula for `a_n`;
- find terms from a recurrence relation;
- write the series associated with a sequence;
- use sigma notation for sums;
- identify a geometric progression;
- find the first term, common ratio, and nth term of a G.P.;
- find the sum of the first `n` terms of a G.P.;
- insert geometric means between two positive numbers;
- use the relation between arithmetic mean and geometric mean;
- solve word problems involving growth, compound interest, and depreciation.

## 3. Sequence

A sequence is an arrangement of numbers in a definite order according to a rule.

The order matters.

For example:

$$
2,\ 4,\ 6,\ 8,\ldots
$$

is not the same sequence as:

$$
8,\ 6,\ 4,\ 2,\ldots
$$

even though both contain some of the same numbers.

### 3.1 Terms Of A Sequence

The numbers in a sequence are called terms.

The first term is written as:

$$
a_1
$$

The second term is:

$$
a_2
$$

The third term is:

$$
a_3
$$

In general, the nth term is:

$$
a_n
$$

The nth term is also called the general term.

### 3.2 Example: Even Natural Numbers

Sequence:

$$
2,\ 4,\ 6,\ 8,\ 10,\ldots
$$

Terms:

$$
a_1=2
$$

$$
a_2=4
$$

$$
a_3=6
$$

The rule is:

$$
a_n=2n
$$

### 3.3 Example: Odd Natural Numbers

Sequence:

$$
1,\ 3,\ 5,\ 7,\ 9,\ldots
$$

The nth term is:

$$
a_n=2n-1
$$

Check:

For `n=1`:

$$
a_1=2(1)-1=1
$$

For `n=2`:

$$
a_2=2(2)-1=3
$$

## 4. Finite And Infinite Sequences

### 4.1 Finite Sequence

A finite sequence has a fixed number of terms.

Example:

$$
2,\ 4,\ 8,\ 16,\ldots,\ 1024
$$

if it stops at the 10th term.

### 4.2 Infinite Sequence

An infinite sequence does not end.

Example:

$$
3,\ 3.3,\ 3.33,\ 3.333,\ldots
$$

This sequence continues forever.

## 5. Sequence As A Function

A sequence can be viewed as a function whose input is a natural number.

The input is the position:

$$
1,\ 2,\ 3,\ldots
$$

The output is the term:

$$
a_1,\ a_2,\ a_3,\ldots
$$

So `a_n` means:

> the value of the sequence at position `n`.

This viewpoint helps because many sequences are defined by formulas.

## 6. Defining A Sequence By A Formula

If the nth term is given, terms are found by putting `n=1,2,3,...`.

### 6.1 Example: `a_n=2n+5`

Find the first three terms.

For `n=1`:

$$
a_1=2(1)+5=7
$$

For `n=2`:

$$
a_2=2(2)+5=9
$$

For `n=3`:

$$
a_3=2(3)+5=11
$$

So the first three terms are:

$$
7,\ 9,\ 11
$$

### 6.2 Example: `a_n=(n-1)(2-n)(n+3)`

Find the 20th term.

Put:

$$
n=20
$$

Then:

$$
a_{20}=(20-1)(2-20)(20+3)
$$

$$
a_{20}=19(-18)(23)
$$

$$
a_{20}=-7866
$$

## 7. Defining A Sequence Recursively

A recurrence relation defines later terms using earlier terms.

Example:

$$
a_1=1
$$

and:

$$
a_n=a_{n-1}+2,\quad n\ge2
$$

Then:

$$
a_2=a_1+2=3
$$

$$
a_3=a_2+2=5
$$

$$
a_4=a_3+2=7
$$

$$
a_5=a_4+2=9
$$

So the first five terms are:

$$
1,\ 3,\ 5,\ 7,\ 9
$$

### 7.1 Fibonacci Sequence

The Fibonacci sequence is defined by:

$$
a_1=1,\quad a_2=1
$$

and:

$$
a_n=a_{n-1}+a_{n-2},\quad n>2
$$

The terms are:

$$
1,\ 1,\ 2,\ 3,\ 5,\ 8,\ 13,\ldots
$$

Each term after the second is the sum of the previous two terms.

## 8. Series

A series is the sum of the terms of a sequence.

If:

$$
a_1,\ a_2,\ a_3,\ldots,a_n
$$

is a sequence, then the associated finite series is:

$$
a_1+a_2+a_3+\cdots+a_n
$$

Example:

Sequence:

$$
1,\ 3,\ 5,\ 7,\ 9
$$

Associated series:

$$
1+3+5+7+9
$$

The sum of this series is:

$$
25
$$

### 8.1 Series Versus Sum

A series is the expression showing addition.

The sum is the number obtained after adding.

Example:

The series is:

$$
1+3+5+7
$$

The sum is:

$$
16
$$

## 9. Sigma Notation

The symbol:

$$
\sum
$$

is called sigma. It means "sum".

The series:

$$
a_1+a_2+a_3+\cdots+a_n
$$

can be written as:

$$
\sum_{k=1}^{n}a_k
$$

This reads:

> sum of `a_k` from `k=1` to `n`.

### 9.1 Example

Write:

$$
1^2+2^2+3^2+\cdots+n^2
$$

in sigma notation.

Answer:

$$
\sum_{k=1}^{n}k^2
$$

### 9.2 Example

Evaluate:

$$
\sum_{k=1}^{4}(2k+1)
$$

Expand:

$$
(2(1)+1)+(2(2)+1)+(2(3)+1)+(2(4)+1)
$$

$$
3+5+7+9=24
$$

## 10. Geometric Progression

A sequence is a geometric progression if every term after the first is obtained by multiplying the previous term by a fixed non-zero constant.

This fixed constant is called the common ratio.

If the first term is `a` and the common ratio is `r`, then the G.P. is:

$$
a,\ ar,\ ar^2,\ ar^3,\ldots
$$

### 10.1 Common Ratio

For a G.P.:

$$
r=\frac{a_{k+1}}{a_k}
$$

for all valid `k`.

The same ratio must work throughout the sequence.

### 10.2 Example

Sequence:

$$
2,\ 4,\ 8,\ 16,\ldots
$$

Common ratio:

$$
r=\frac{4}{2}=2
$$

Also:

$$
\frac{8}{4}=2
$$

and:

$$
\frac{16}{8}=2
$$

So it is a G.P.

### 10.3 Example With Negative Ratio

Sequence:

$$
1,\ -3,\ 9,\ -27,\ldots
$$

Common ratio:

$$
r=-3
$$

The signs alternate because the common ratio is negative.

### 10.4 Example With Decimal Ratio

Sequence:

$$
1,\ 0.01,\ 0.0001,\ 0.000001,\ldots
$$

Common ratio:

$$
r=0.01
$$

## 11. General Term Of A G.P.

For a G.P. with first term `a` and common ratio `r`:

$$
a_1=a
$$

$$
a_2=ar
$$

$$
a_3=ar^2
$$

$$
a_4=ar^3
$$

So the nth term is:

$$
a_n=ar^{n-1}
$$

### 11.1 Example: 10th Term Of `5,25,125,...`

Here:

$$
a=5,\quad r=5
$$

The nth term:

$$
a_n=5(5)^{n-1}=5^n
$$

The 10th term:

$$
a_{10}=5^{10}
$$

### 11.2 Example: Which Term Is 131072?

Sequence:

$$
2,\ 8,\ 32,\ldots
$$

Here:

$$
a=2,\quad r=4
$$

Let:

$$
a_n=131072
$$

Use:

$$
2(4)^{n-1}=131072
$$

Divide by 2:

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

Therefore:

$$
n=9
$$

So 131072 is the 9th term.

### 11.3 Example: Find 10th Term From Two Given Terms

In a G.P., the 3rd term is 24 and the 6th term is 192.

Let first term be `a` and common ratio be `r`.

Then:

$$
a_3=ar^2=24
$$

and:

$$
a_6=ar^5=192
$$

Divide:

$$
\frac{ar^5}{ar^2}=\frac{192}{24}
$$

$$
r^3=8
$$

So:

$$
r=2
$$

Use:

$$
ar^2=24
$$

$$
a(2)^2=24
$$

$$
a=6
$$

The 10th term:

$$
a_{10}=ar^9=6(2)^9=3072
$$

## 12. Sum Of The First n Terms Of A G.P.

Let:

$$
S_n=a+ar+ar^2+\cdots+ar^{n-1}
$$

Multiply by `r`:

$$
rS_n=ar+ar^2+ar^3+\cdots+ar^n
$$

Subtract:

$$
S_n-rS_n=a-ar^n
$$

So:

$$
(1-r)S_n=a(1-r^n)
$$

If:

$$
r\ne1
$$

then:

$$
S_n=\frac{a(1-r^n)}{1-r}
$$

Equivalent form:

$$
S_n=\frac{a(r^n-1)}{r-1}
$$

Use the first form when `|r|<1` or when it is easier.

Use the second form when `r>1`.

### 12.1 Special Case: r Is 1

If:

$$
r=1
$$

then every term is `a`.

So:

$$
S_n=na
$$

### 12.2 Sum Formula Using Last Term

If the last term is:

$$
l=ar^{n-1}
$$

then:

$$
lr=ar^n
$$

Using:

$$
S_n=\frac{a(r^n-1)}{r-1}
$$

we get:

$$
S_n=\frac{lr-a}{r-1}
$$

## 13. Solved Examples On G.P. Sum

### Example 1: Sum Of `1 + 2/3 + 4/9 + ...`

Here:

$$
a=1,\quad r=\frac{2}{3}
$$

For `n` terms:

$$
S_n=\frac{a(1-r^n)}{1-r}
$$

So:

$$
S_n=\frac{1-\left(\frac{2}{3}\right)^n}{1-\frac{2}{3}}
$$

$$
S_n=3\left(1-\left(\frac{2}{3}\right)^n\right)
$$

For 5 terms:

$$
S_5=3\left(1-\left(\frac{2}{3}\right)^5\right)
$$

$$
S_5=3\left(1-\frac{32}{243}\right)
$$

$$
S_5=3\left(\frac{211}{243}\right)=\frac{211}{81}
$$

### Example 2: Ancestors Over 10 Generations

A person has:

- 2 parents;
- 4 grandparents;
- 8 great grandparents;
- and so on.

This is a G.P.:

$$
2,\ 4,\ 8,\ldots
$$

Here:

$$
a=2,\quad r=2,\quad n=10
$$

Sum:

$$
S_{10}=\frac{2(2^{10}-1)}{2-1}
$$

$$
S_{10}=2(1024-1)=2046
$$

So the number of ancestors in the 10 preceding generations is:

$$
2046
$$

### Example 3: How Many Terms Are Needed?

How many terms of:

$$
3,\ \frac{3}{2},\ \frac{3}{4},\ldots
$$

are needed to give the sum:

$$
\frac{3069}{512}
$$

Here:

$$
a=3,\quad r=\frac{1}{2}
$$

Use:

$$
S_n=\frac{3\left(1-\left(\frac{1}{2}\right)^n\right)}{1-\frac{1}{2}}
$$

So:

$$
S_n=6\left(1-\left(\frac{1}{2}\right)^n\right)
$$

Set equal to the given sum:

$$
6\left(1-\left(\frac{1}{2}\right)^n\right)=\frac{3069}{512}
$$

Divide by 6:

$$
1-\left(\frac{1}{2}\right)^n=\frac{3069}{3072}
$$

So:

$$
\left(\frac{1}{2}\right)^n=\frac{3}{3072}=\frac{1}{1024}
$$

Thus:

$$
2^n=1024=2^{10}
$$

Therefore:

$$
n=10
$$

## 14. Series Made From Repeated Digits

Some series are not G.P. directly, but can be rewritten using a G.P.

Example:

$$
7+77+777+7777+\cdots
$$

The kth term with repeated 7's is:

$$
7\left(\frac{10^k-1}{9}\right)
$$

So the sum to `n` terms is:

$$
S_n=\frac{7}{9}\left[(10+10^2+\cdots+10^n)-n\right]
$$

Now:

$$
10+10^2+\cdots+10^n=\frac{10(10^n-1)}{9}
$$

Therefore:

$$
S_n=\frac{7}{9}\left[\frac{10(10^n-1)}{9}-n\right]
$$

The same method works for:

$$
8+88+888+\cdots
$$

and:

$$
5+55+555+\cdots
$$

## 15. Geometric Mean

The geometric mean of two positive numbers `a` and `b` is:

$$
G=\sqrt{ab}
$$

Example:

The geometric mean of 2 and 8 is:

$$
\sqrt{2\cdot8}=\sqrt{16}=4
$$

The numbers:

$$
2,\ 4,\ 8
$$

are in G.P.

### 15.1 Why This Makes Sense

If `a, G, b` are in G.P., then:

$$
\frac{G}{a}=\frac{b}{G}
$$

Cross multiply:

$$
G^2=ab
$$

Since `G` is positive:

$$
G=\sqrt{ab}
$$

## 16. Inserting Geometric Means

Suppose we want to insert `n` numbers between positive numbers `a` and `b` so that the full sequence is a G.P.

The sequence is:

$$
a,\ G_1,\ G_2,\ldots,G_n,\ b
$$

There are `n+2` terms.

The last term is:

$$
b=ar^{n+1}
$$

Therefore:

$$
r=\left(\frac{b}{a}\right)^{\frac{1}{n+1}}
$$

Then:

$$
G_1=ar
$$

$$
G_2=ar^2
$$

and in general:

$$
G_k=ar^k
$$

### 16.1 Example: Insert Three Numbers Between 1 And 256

We need:

$$
1,\ G_1,\ G_2,\ G_3,\ 256
$$

Here:

$$
a=1,\quad b=256,\quad n=3
$$

Since there are 4 equal ratio steps:

$$
256=1\cdot r^4
$$

So:

$$
r^4=256
$$

The real values of `r` are:

$$
r=4
$$

or:

$$
r=-4
$$

For `r=4`, the inserted numbers are:

$$
4,\ 16,\ 64
$$

For `r=-4`, the inserted numbers are:

$$
-4,\ 16,\ -64
$$

Both create a G.P.

## 17. Arithmetic Mean And Geometric Mean

For two positive numbers `a` and `b`, the arithmetic mean is:

$$
A=\frac{a+b}{2}
$$

The geometric mean is:

$$
G=\sqrt{ab}
$$

### 17.1 AM-GM Relation

For positive `a` and `b`:

$$
A\ge G
$$

That is:

$$
\frac{a+b}{2}\ge\sqrt{ab}
$$

Equality holds only when:

$$
a=b
$$

### 17.2 Proof

Since a square is always non-negative:

$$
(\sqrt a-\sqrt b)^2\ge0
$$

Expanding:

$$
a+b-2\sqrt{ab}\ge0
$$

So:

$$
a+b\ge2\sqrt{ab}
$$

Divide by 2:

$$
\frac{a+b}{2}\ge\sqrt{ab}
$$

Thus:

$$
A\ge G
$$

### 17.3 Example: A.M. 10 And G.M. 8

Let the positive numbers be `a` and `b`.

Given:

$$
\frac{a+b}{2}=10
$$

So:

$$
a+b=20
$$

Given:

$$
\sqrt{ab}=8
$$

So:

$$
ab=64
$$

Use:

$$
(a-b)^2=(a+b)^2-4ab
$$

Then:

$$
(a-b)^2=20^2-4(64)
$$

$$
(a-b)^2=400-256=144
$$

So:

$$
a-b=\pm12
$$

Solving with:

$$
a+b=20
$$

gives:

$$
a=16,\quad b=4
$$

or:

$$
a=4,\quad b=16
$$

## 18. Products And Ratios In G.P.

### 18.1 Product Of Corresponding Terms

Suppose:

$$
a,\ ar,\ ar^2,\ldots,ar^{n-1}
$$

and:

$$
A,\ AR,\ AR^2,\ldots,AR^{n-1}
$$

are two G.P.s.

The products of corresponding terms are:

$$
aA,\ ar\cdot AR,\ ar^2\cdot AR^2,\ldots
$$

That is:

$$
aA,\ aA(rR),\ aA(rR)^2,\ldots
$$

So the products also form a G.P. with common ratio:

$$
rR
$$

### 18.2 Product Of n Terms Of A G.P.

Let a G.P. have first term `a`, nth term `b`, and product of all `n` terms `P`.

The terms are:

$$
a,\ ar,\ ar^2,\ldots,ar^{n-1}=b
$$

The product is:

$$
P=a^n r^{0+1+2+\cdots+(n-1)}
$$

Since:

$$
0+1+2+\cdots+(n-1)=\frac{n(n-1)}{2}
$$

we get:

$$
P=a^n r^{\frac{n(n-1)}{2}}
$$

Also:

$$
ab=a\cdot ar^{n-1}=a^2r^{n-1}
$$

Raise to power `n`:

$$
(ab)^n=a^{2n}r^{n(n-1)}
$$

But:

$$
P^2=a^{2n}r^{n(n-1)}
$$

Therefore:

$$
P^2=(ab)^n
$$

## 19. Applications Of G.P.

### 19.1 Bacteria Doubling Every Hour

Suppose there are 30 bacteria initially, and the number doubles every hour.

After 1 hour:

$$
30\cdot2
$$

After 2 hours:

$$
30\cdot2^2=120
$$

After 4 hours:

$$
30\cdot2^4=480
$$

After `n` hours:

$$
30\cdot2^n
$$

### 19.2 Compound Interest

If an amount `P` is deposited at annual rate `r percent`, compounded annually, then after `n` years:

$$
A=P\left(1+\frac{r}{100}\right)^n
$$

Example:

Rs 500 at 10 percent compounded annually for 10 years:

$$
A=500(1.10)^{10}
$$

Since:

$$
(1.10)^{10}\approx2.59374246
$$

we get:

$$
A\approx1296.87
$$

So the amount is about Rs 1296.87.

### 19.3 Depreciation

If a value decreases by `p percent` every year, then after `n` years:

$$
V=P\left(1-\frac{p}{100}\right)^n
$$

Example:

A machine costs Rs 15625 and depreciates by 20 percent each year.

After 5 years:

$$
V=15625(0.8)^5
$$

Since:

$$
0.8^5=0.32768
$$

we get:

$$
V=5120
$$

## 20. Solved Mixed Examples

### Example 1: First Five Terms From `a_n=n(n+2)`

Put `n=1,2,3,4,5`.

$$
a_1=1(3)=3
$$

$$
a_2=2(4)=8
$$

$$
a_3=3(5)=15
$$

$$
a_4=4(6)=24
$$

$$
a_5=5(7)=35
$$

First five terms:

$$
3,\ 8,\ 15,\ 24,\ 35
$$

### Example 2: First Five Terms From `a_n=2^n`

$$
a_1=2
$$

$$
a_2=4
$$

$$
a_3=8
$$

$$
a_4=16
$$

$$
a_5=32
$$

### Example 3: A G.P. With 8th Term 192 And Common Ratio 2

Find the 12th term.

We know:

$$
a_8=ar^7=192
$$

and:

$$
r=2
$$

The 12th term is:

$$
a_{12}=ar^{11}
$$

Divide:

$$
\frac{a_{12}}{a_8}=r^4
$$

So:

$$
a_{12}=192(2^4)
$$

$$
a_{12}=192\cdot16=3072
$$

### Example 4: Show That 5th, 8th, 11th Terms Give `q^2=ps`

Let the 5th, 8th, and 11th terms of a G.P. be:

$$
p,\ q,\ s
$$

Using:

$$
a_n=ar^{n-1}
$$

we have:

$$
p=ar^4
$$

$$
q=ar^7
$$

$$
s=ar^{10}
$$

Then:

$$
q^2=(ar^7)^2=a^2r^{14}
$$

and:

$$
ps=(ar^4)(ar^{10})=a^2r^{14}
$$

Therefore:

$$
q^2=ps
$$

### Example 5: Find x So That `2/7, x, 7/2` Are In G.P.

If three numbers are in G.P., then the square of the middle term equals the product of the outer terms.

So:

$$
x^2=\frac{2}{7}\cdot\frac{7}{2}
$$

$$
x^2=1
$$

Therefore:

$$
x=\pm1
$$

### Example 6: Sum Of Products Of Corresponding Terms

Sequences:

$$
2,\ 4,\ 8,\ 16,\ 32
$$

and:

$$
128,\ 32,\ 8,\ 2,\ \frac{1}{2}
$$

Products:

$$
256,\ 128,\ 64,\ 32,\ 16
$$

This is a G.P. with:

$$
a=256,\quad r=\frac{1}{2},\quad n=5
$$

Sum:

$$
S_5=\frac{256\left(1-\left(\frac{1}{2}\right)^5\right)}{1-\frac{1}{2}}
$$

$$
S_5=512\left(1-\frac{1}{32}\right)
$$

$$
S_5=512\cdot\frac{31}{32}=496
$$

## 21. Common Mistakes

### Mistake 1: Confusing Sequence And Series

Sequence:

$$
1,\ 3,\ 5,\ 7
$$

Series:

$$
1+3+5+7
$$

Sum:

$$
16
$$

### Mistake 2: Using The Wrong Common Ratio

For:

$$
2,\ 8,\ 32,\ldots
$$

the common ratio is:

$$
\frac{8}{2}=4
$$

not 2.

### Mistake 3: Forgetting The Exponent `n-1`

The nth term of a G.P. is:

$$
a_n=ar^{n-1}
$$

not:

$$
ar^n
$$

### Mistake 4: Using The Sum Formula When r Is 1

If:

$$
r=1
$$

use:

$$
S_n=na
$$

The formula with denominator `1-r` would divide by zero.

### Mistake 5: Ignoring Positivity In Geometric Mean

The geometric mean:

$$
\sqrt{ab}
$$

is defined here for positive `a` and `b`.

### Mistake 6: Losing The Negative Ratio

A G.P. may have a negative common ratio.

Example:

$$
3,\ -6,\ 12,\ -24,\ldots
$$

Here:

$$
r=-2
$$

## 22. Practice Set A: Sequences

### Question A1

Write the first five terms of:

$$
a_n=n(n+2)
$$

Answer:

$$
3,\ 8,\ 15,\ 24,\ 35
$$

### Question A2

Write the first five terms of:

$$
a_n=\frac{1}{n+1}
$$

Answer:

$$
\frac{1}{2},\ \frac{1}{3},\ \frac{1}{4},\ \frac{1}{5},\ \frac{1}{6}
$$

### Question A3

Write the first five terms of:

$$
a_n=2^n
$$

Answer:

$$
2,\ 4,\ 8,\ 16,\ 32
$$

### Question A4

Find `a_17` and `a_24` if:

$$
a_n=4n-3
$$

Answer:

$$
a_{17}=4(17)-3=65
$$

$$
a_{24}=4(24)-3=93
$$

### Question A5

The Fibonacci sequence is:

$$
1,\ 1,\ 2,\ 3,\ 5,\ 8,\ldots
$$

Find:

$$
\frac{a_{n+1}}{a_n}
$$

for `n=1,2,3,4,5`.

Answer:

$$
\frac{a_2}{a_1}=1
$$

$$
\frac{a_3}{a_2}=2
$$

$$
\frac{a_4}{a_3}=\frac{3}{2}
$$

$$
\frac{a_5}{a_4}=\frac{5}{3}
$$

$$
\frac{a_6}{a_5}=\frac{8}{5}
$$

## 23. Practice Set B: Geometric Progression

### Question B1

Find the 20th and nth terms of:

$$
\frac{5}{2},\ \frac{5}{4},\ \frac{5}{8},\ldots
$$

Answer:

Here:

$$
a=\frac{5}{2},\quad r=\frac{1}{2}
$$

Nth term:

$$
a_n=\frac{5}{2}\left(\frac{1}{2}\right)^{n-1}
$$

So:

$$
a_n=\frac{5}{2^n}
$$

20th term:

$$
a_{20}=\frac{5}{2^{20}}
$$

### Question B2

The 4th term of a G.P. is the square of its second term. The first term is `-3`. Find the 7th term.

Answer:

Let the G.P. be:

$$
a,\ ar,\ ar^2,\ldots
$$

Given:

$$
a=-3
$$

Second term:

$$
ar=-3r
$$

Fourth term:

$$
ar^3=-3r^3
$$

Given:

$$
ar^3=(ar)^2
$$

So:

$$
-3r^3=9r^2
$$

Since `r` is non-zero:

$$
-3r=9
$$

$$
r=-3
$$

7th term:

$$
a_7=ar^6=-3(-3)^6
$$

$$
a_7=-3\cdot729=-2187
$$

### Question B3

Find the sum of 20 terms of:

$$
0.15,\ 0.015,\ 0.0015,\ldots
$$

Answer:

Here:

$$
a=0.15,\quad r=0.1
$$

So:

$$
S_{20}=\frac{0.15(1-0.1^{20})}{1-0.1}
$$

$$
S_{20}=\frac{1}{6}(1-10^{-20})
$$

### Question B4

How many terms of:

$$
3,\ 3^2,\ 3^3,\ldots
$$

are needed to give the sum 120?

Answer:

This G.P. has:

$$
a=3,\quad r=3
$$

Use:

$$
S_n=\frac{3(3^n-1)}{3-1}
$$

Set:

$$
\frac{3(3^n-1)}{2}=120
$$

Then:

$$
3(3^n-1)=240
$$

$$
3^n-1=80
$$

$$
3^n=81=3^4
$$

Therefore:

$$
n=4
$$

## 24. Practice Set C: Geometric Mean And AM-GM

### Question C1

Insert two numbers between 3 and 81 so that the resulting sequence is a G.P.

Answer:

The sequence is:

$$
3,\ G_1,\ G_2,\ 81
$$

There are 3 ratio steps.

$$
81=3r^3
$$

So:

$$
r^3=27
$$

$$
r=3
$$

Inserted numbers:

$$
9,\ 27
$$

### Question C2

The sum of two positive numbers is 6 times their geometric mean. Show their ratio.

Answer:

Let the numbers be `a` and `b`.

Given:

$$
a+b=6\sqrt{ab}
$$

Let:

$$
x=\sqrt{\frac{a}{b}}
$$

Then:

$$
\frac{a+b}{\sqrt{ab}}=x+\frac{1}{x}
$$

So:

$$
x+\frac{1}{x}=6
$$

Multiply by `x`:

$$
x^2-6x+1=0
$$

Thus:

$$
x=3\pm2\sqrt2
$$

Since:

$$
\frac{a}{b}=x^2
$$

the ratio can be written as:

$$
(3+2\sqrt2)^2:1
$$

or equivalently:

$$
(3+2\sqrt2):(3-2\sqrt2)
$$

### Question C3

If the A.M. and G.M. of the roots of a quadratic equation are 8 and 5, find the quadratic equation.

Answer:

Let the roots be `alpha` and `beta`.

Arithmetic mean:

$$
\frac{\alpha+\beta}{2}=8
$$

So:

$$
\alpha+\beta=16
$$

Geometric mean:

$$
\sqrt{\alpha\beta}=5
$$

So:

$$
\alpha\beta=25
$$

The quadratic equation is:

$$
x^2-(\alpha+\beta)x+\alpha\beta=0
$$

Therefore:

$$
x^2-16x+25=0
$$

## 25. Practice Set D: Applications

### Question D1

The number of bacteria doubles every hour. Initially there are 30 bacteria. Find the number after 2 hours, 4 hours, and `n` hours.

Answer:

After `t` hours:

$$
30\cdot2^t
$$

After 2 hours:

$$
30\cdot2^2=120
$$

After 4 hours:

$$
30\cdot2^4=480
$$

After `n` hours:

$$
30\cdot2^n
$$

### Question D2

Rs 500 is deposited for 10 years at 10 percent interest compounded annually. Find the amount.

Answer:

$$
A=500(1.10)^{10}
$$

$$
A\approx1296.87
$$

### Question D3

A value of Rs 15625 depreciates by 20 percent per year. Find the estimated value after 5 years.

Answer:

$$
V=15625(0.8)^5
$$

$$
V=5120
$$

## 26. Formula Sheet

### nth Term Of A Sequence

The nth term is written as:

$$
a_n
$$

### Series Associated With A Sequence

$$
a_1+a_2+a_3+\cdots+a_n
$$

### Sigma Notation

$$
\sum_{k=1}^{n}a_k
$$

### General Form Of A G.P.

$$
a,\ ar,\ ar^2,\ ar^3,\ldots
$$

### Common Ratio

$$
r=\frac{a_{k+1}}{a_k}
$$

### nth Term Of A G.P.

$$
a_n=ar^{n-1}
$$

### Sum Of First n Terms Of A G.P.

For `r\ne1`:

$$
S_n=\frac{a(1-r^n)}{1-r}
$$

or:

$$
S_n=\frac{a(r^n-1)}{r-1}
$$

For `r=1`:

$$
S_n=na
$$

### Sum Using Last Term

$$
S_n=\frac{lr-a}{r-1}
$$

where:

$$
l=ar^{n-1}
$$

### Geometric Mean

$$
G=\sqrt{ab}
$$

### AM-GM Relation

$$
\frac{a+b}{2}\ge\sqrt{ab}
$$

## 27. Fast Decision Guide

Use this checklist:

- If you are given positions and terms, think of `a_n`.
- If each term is found from previous terms, look for a recurrence relation.
- If you are adding terms, you are working with a series.
- If each term is multiplied by the same number to get the next, it is a G.P.
- If a G.P. asks for a term, use `a_n=ar^{n-1}`.
- If a G.P. asks for a sum, use `S_n`.
- If a question has two positive numbers and a middle proportional, use geometric mean.
- If a question compares A.M. and G.M., use `A>=G`.
- If a value repeatedly grows or decays by a fixed percentage, model it as a G.P.

## 28. Final Learner Check

A learner is ready to move on if they can answer these:

1. What is the difference between a sequence and a series?
2. What does `a_n` mean?
3. How is a recurrence relation different from a direct formula?
4. What condition makes a sequence a G.P.?
5. Why is the nth term of a G.P. `ar^{n-1}` and not `ar^n`?
6. How is the sum formula for a G.P. derived?
7. Why does the case `r=1` need a separate sum formula?
8. How do we insert geometric means between two numbers?
9. Why is the geometric mean of two positive numbers `sqrt(ab)`?
10. Why is the arithmetic mean always at least the geometric mean for positive numbers?

## 29. One-Page Review

- A sequence is an ordered list of numbers.
- A finite sequence stops; an infinite sequence does not stop.
- A series is formed by adding the terms of a sequence.
- Sigma notation writes long sums compactly.
- A G.P. has a constant ratio between consecutive terms.
- The nth term of a G.P. is `a_n=ar^{n-1}`.
- The sum of the first `n` terms of a G.P. is `a(1-r^n)/(1-r)` for `r` not equal to 1.
- The geometric mean of positive `a` and `b` is `sqrt(ab)`.
- For positive `a` and `b`, A.M. is greater than or equal to G.M.
- Repeated growth and repeated decay are natural G.P. applications.
