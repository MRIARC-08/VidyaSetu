# Chapter 7 - Binomial Theorem

Class 11 Maths learner notes

## 1. Big Picture

The binomial theorem is a shortcut for expanding powers of expressions with two terms.

An expression with two terms is called a binomial.

Examples:

- `a + b`
- `x - y`
- `2x + 3y`
- `1 + x`
- `100 - 2`

In earlier classes, learners expand:

$$
(a+b)^2
$$

and:

$$
(a+b)^3
$$

by multiplication.

But repeated multiplication becomes inefficient for higher powers such as:

$$
(a+b)^{10}
$$

or:

$$
(98)^5
$$

The binomial theorem gives a systematic expansion for:

$$
(a+b)^n
$$

where `n` is a positive integer in this chapter.

## 2. Learning Goals

By the end of this chapter, a learner should be able to:

- recognise binomial coefficients;
- write rows of Pascal's triangle;
- connect Pascal's triangle with combinations;
- expand `(a+b)^n` for positive integer `n`;
- expand `(a-b)^n`;
- expand `(1+x)^n` and `(1-x)^n`;
- find particular terms and coefficients;
- use the theorem for numerical evaluation;
- use first few terms to compare large expressions;
- prove divisibility and remainder results using binomial expansion.

## 3. Prerequisites

This chapter uses ideas from the previous chapter.

The learner should know:

- factorial notation;
- combinations;
- the formula for `C(n,r)`;
- the identity `C(n,r) = C(n,n-r)`;
- basic laws of exponents;
- multiplication of algebraic expressions.

Key combination formula:

$$
C(n,r)=\frac{n!}{r!(n-r)!}
$$

where:

$$
0 \le r \le n
$$

## 4. What Is A Binomial?

A binomial is an algebraic expression with two terms.

Examples:

$$
a+b
$$

$$
x-y
$$

$$
2x+3y
$$

$$
1+x
$$

The binomial theorem expands powers of these expressions.

For example:

$$
(a+b)^4
$$

means:

$$
(a+b)(a+b)(a+b)(a+b)
$$

Instead of multiplying all factors one by one, the theorem gives the answer directly.

## 5. Familiar Expansions

Start with small powers:

$$
(a+b)^0=1
$$

$$
(a+b)^1=a+b
$$

$$
(a+b)^2=a^2+2ab+b^2
$$

$$
(a+b)^3=a^3+3a^2b+3ab^2+b^3
$$

$$
(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4
$$

The coefficients are:

For `n=0`:

$$
1
$$

For `n=1`:

$$
1,\ 1
$$

For `n=2`:

$$
1,\ 2,\ 1
$$

For `n=3`:

$$
1,\ 3,\ 3,\ 1
$$

For `n=4`:

$$
1,\ 4,\ 6,\ 4,\ 1
$$

These numbers form Pascal's triangle.

## 6. Patterns In The Expansion

Look at:

$$
(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4
$$

Several patterns appear.

### 6.1 Number Of Terms

The expansion of `(a+b)^n` has:

$$
n+1
$$

terms.

Example:

`(a+b)^4` has 5 terms.

### 6.2 Power Of a Decreases

The powers of `a` are:

$$
4,\ 3,\ 2,\ 1,\ 0
$$

They decrease by 1 each term.

### 6.3 Power Of b Increases

The powers of `b` are:

$$
0,\ 1,\ 2,\ 3,\ 4
$$

They increase by 1 each term.

### 6.4 Sum Of Powers Is Constant

In every term of `(a+b)^4`, the sum of the powers of `a` and `b` is 4.

Examples:

- `a^4` has powers `4 + 0 = 4`;
- `a^3b` has powers `3 + 1 = 4`;
- `a^2b^2` has powers `2 + 2 = 4`;
- `ab^3` has powers `1 + 3 = 4`;
- `b^4` has powers `0 + 4 = 4`.

The same pattern works for `(a+b)^n`.

## 7. Pascal's Triangle

Pascal's triangle is a triangular arrangement of binomial coefficients.

The first rows are:

$$
1
$$

$$
1\quad 1
$$

$$
1\quad 2\quad 1
$$

$$
1\quad 3\quad 3\quad 1
$$

$$
1\quad 4\quad 6\quad 4\quad 1
$$

$$
1\quad 5\quad 10\quad 10\quad 5\quad 1
$$

Each row begins and ends with 1.

Each middle entry is found by adding the two entries above it.

Example:

The row:

$$
1,\ 4,\ 6,\ 4,\ 1
$$

gives the next row:

$$
1,\ 5,\ 10,\ 10,\ 5,\ 1
$$

because:

$$
1+4=5
$$

$$
4+6=10
$$

$$
6+4=10
$$

$$
4+1=5
$$

## 8. Pascal's Triangle And Combinations

The row for index `n` is:

$$
C(n,0),\ C(n,1),\ C(n,2),\ldots,\ C(n,n)
$$

For example, the row for `n=5` is:

$$
C(5,0),\ C(5,1),\ C(5,2),\ C(5,3),\ C(5,4),\ C(5,5)
$$

That is:

$$
1,\ 5,\ 10,\ 10,\ 5,\ 1
$$

So:

$$
(a+b)^5
=a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5
$$

The combination formula is what allows us to write any row directly without generating all previous rows.

## 9. The Binomial Theorem

For a positive integer `n`:

$$
(a+b)^n
=C(n,0)a^n
+C(n,1)a^{n-1}b
+C(n,2)a^{n-2}b^2
+\cdots
+C(n,n-1)ab^{n-1}
+C(n,n)b^n
$$

This is the binomial theorem for positive integral indices.

Using sigma notation:

$$
(a+b)^n=\sum_{r=0}^{n} C(n,r)a^{n-r}b^r
$$

### 9.1 General Term

The `(r+1)`th term in the expansion is:

$$
T_{r+1}=C(n,r)a^{n-r}b^r
$$

where:

$$
r=0,1,2,\ldots,n
$$

This term formula is very useful when a question asks for a particular term or coefficient.

### 9.2 First Term And Last Term

First term:

$$
C(n,0)a^n=a^n
$$

Last term:

$$
C(n,n)b^n=b^n
$$

### 9.3 Coefficients

The numbers:

$$
C(n,0),C(n,1),C(n,2),\ldots,C(n,n)
$$

are called binomial coefficients.

## 10. Proof Idea By Mathematical Induction

The theorem is proved using mathematical induction.

The proof has three parts.

### 10.1 Base Case

For `n=1`:

$$
(a+b)^1=a+b
$$

The theorem gives:

$$
C(1,0)a+C(1,1)b=a+b
$$

So the result is true for `n=1`.

### 10.2 Induction Assumption

Assume the theorem is true for `n=k`.

That means:

$$
(a+b)^k=\sum_{r=0}^{k}C(k,r)a^{k-r}b^r
$$

### 10.3 Induction Step

Multiply both sides by `(a+b)`.

$$
(a+b)^{k+1}=(a+b)(a+b)^k
$$

When terms are multiplied and like terms are grouped, the new coefficients become sums of neighbouring coefficients:

$$
C(k,r)+C(k,r-1)
$$

By Pascal's identity:

$$
C(k,r)+C(k,r-1)=C(k+1,r)
$$

So the expansion for `k+1` is obtained.

Therefore, by mathematical induction, the theorem is true for every positive integer `n`.

## 11. Expanding With The Theorem

### 11.1 Example: Expand `(x+2)^6`

Use:

$$
(a+b)^n=\sum_{r=0}^{n} C(n,r)a^{n-r}b^r
$$

Here:

$$
a=x,\quad b=2,\quad n=6
$$

So:

$$
(x+2)^6
=C(6,0)x^6
+C(6,1)x^5(2)
+C(6,2)x^4(2)^2
+C(6,3)x^3(2)^3
+C(6,4)x^2(2)^4
+C(6,5)x(2)^5
+C(6,6)(2)^6
$$

Now calculate:

$$
(x+2)^6=x^6+12x^5+60x^4+160x^3+240x^2+192x+64
$$

### 11.2 Example: Expand `(2x+3y)^5`

The row for `n=5` is:

$$
1,\ 5,\ 10,\ 10,\ 5,\ 1
$$

Here:

$$
a=2x,\quad b=3y
$$

So:

$$
(2x+3y)^5
=(2x)^5
+5(2x)^4(3y)
+10(2x)^3(3y)^2
+10(2x)^2(3y)^3
+5(2x)(3y)^4
+(3y)^5
$$

Simplifying:

$$
(2x+3y)^5
=32x^5+240x^4y+720x^3y^2+1080x^2y^3+810xy^4+243y^5
$$

## 12. Expansion Of `(x-y)^n`

Use:

$$
x-y=x+(-y)
$$

Then:

$$
(x-y)^n
=C(n,0)x^n
-C(n,1)x^{n-1}y
+C(n,2)x^{n-2}y^2
-C(n,3)x^{n-3}y^3
+\cdots
+(-1)^nC(n,n)y^n
$$

The signs alternate.

### 12.1 Example: Expand `(x-2y)^5`

Using the row:

$$
1,\ 5,\ 10,\ 10,\ 5,\ 1
$$

we get:

$$
(x-2y)^5
=x^5
-5x^4(2y)
+10x^3(2y)^2
-10x^2(2y)^3
+5x(2y)^4
-(2y)^5
$$

Simplify:

$$
(x-2y)^5
=x^5-10x^4y+40x^3y^2-80x^2y^3+80xy^4-32y^5
$$

## 13. Special Cases

### 13.1 Expansion Of `(1+x)^n`

Put `a=1` and `b=x`.

$$
(1+x)^n=C(n,0)+C(n,1)x+C(n,2)x^2+\cdots+C(n,n)x^n
$$

### 13.2 Sum Of Binomial Coefficients

Put `x=1` in `(1+x)^n`.

$$
2^n=C(n,0)+C(n,1)+C(n,2)+\cdots+C(n,n)
$$

So the sum of all binomial coefficients in row `n` is:

$$
2^n
$$

### 13.3 Expansion Of `(1-x)^n`

Put `b=-x`.

$$
(1-x)^n=C(n,0)-C(n,1)x+C(n,2)x^2-\cdots+(-1)^nC(n,n)x^n
$$

### 13.4 Alternating Sum Of Binomial Coefficients

Put `x=1` in `(1-x)^n`.

$$
0=C(n,0)-C(n,1)+C(n,2)-\cdots+(-1)^nC(n,n)
$$

So the alternating sum of binomial coefficients is 0 for positive `n`.

## 14. Finding A Particular Term

The general term is:

$$
T_{r+1}=C(n,r)a^{n-r}b^r
$$

### 14.1 Example: Find The 4th Term Of `(2x+3y)^7`

The 4th term means:

$$
r+1=4
$$

So:

$$
r=3
$$

Use:

$$
T_4=C(7,3)(2x)^{7-3}(3y)^3
$$

That is:

$$
T_4=C(7,3)(2x)^4(3y)^3
$$

Now:

$$
C(7,3)=35
$$

$$
(2x)^4=16x^4
$$

$$
(3y)^3=27y^3
$$

Therefore:

$$
T_4=35 \times 16 \times 27x^4y^3
$$

$$
T_4=15120x^4y^3
$$

## 15. Finding Coefficients

To find a coefficient, use the general term and match powers.

### 15.1 Example: Coefficient Of `x^3` In `(1+2x)^6`

General term:

$$
T_{r+1}=C(6,r)(1)^{6-r}(2x)^r
$$

This simplifies to:

$$
T_{r+1}=C(6,r)2^r x^r
$$

To get `x^3`, put:

$$
r=3
$$

Coefficient:

$$
C(6,3)2^3
$$

$$
20 \times 8 = 160
$$

So the coefficient of `x^3` is:

$$
160
$$

### 15.2 Example: Coefficient Of `x^4` In `(x+2)^6`

General term:

$$
T_{r+1}=C(6,r)x^{6-r}2^r
$$

For `x^4`:

$$
6-r=4
$$

So:

$$
r=2
$$

Coefficient:

$$
C(6,2)2^2=15 \times 4=60
$$

## 16. Numerical Evaluation

The binomial theorem is useful when a number is close to an easier number.

Example:

$$
98=100-2
$$

So:

$$
98^5=(100-2)^5
$$

### 16.1 Example: Compute `98^5`

Use:

$$
(a-b)^5=a^5-5a^4b+10a^3b^2-10a^2b^3+5ab^4-b^5
$$

Here:

$$
a=100,\quad b=2
$$

So:

$$
98^5
=100^5
-5(100)^4(2)
+10(100)^3(2)^2
-10(100)^2(2)^3
+5(100)(2)^4
-(2)^5
$$

Calculate term by term:

$$
100^5=10000000000
$$

$$
5(100)^4(2)=1000000000
$$

$$
10(100)^3(2)^2=40000000
$$

$$
10(100)^2(2)^3=800000
$$

$$
5(100)(2)^4=8000
$$

$$
2^5=32
$$

Therefore:

$$
98^5=10000000000-1000000000+40000000-800000+8000-32
$$

$$
98^5=9039207968
$$

### 16.2 Example: Compute `102^5`

Write:

$$
102=100+2
$$

Then:

$$
102^5=(100+2)^5
$$

Use:

$$
(a+b)^5=a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5
$$

Here:

$$
a=100,\quad b=2
$$

So:

$$
102^5
=100^5
+5(100)^4(2)
+10(100)^3(2)^2
+10(100)^2(2)^3
+5(100)(2)^4
+2^5
$$

$$
102^5=11040808032
$$

## 17. Comparing Large Expressions

Sometimes only the first few terms are enough.

### 17.1 Example: Which Is Larger, `(1.01)^{1000000}` Or `10000`?

Write:

$$
1.01=1+0.01
$$

Then:

$$
(1.01)^{1000000}=(1+0.01)^{1000000}
$$

The first terms are:

$$
1+C(1000000,1)(0.01)+\text{positive remaining terms}
$$

Now:

$$
C(1000000,1)(0.01)=1000000 \times 0.01=10000
$$

So:

$$
(1.01)^{1000000}=1+10000+\text{positive remaining terms}
$$

Therefore:

$$
(1.01)^{1000000}>10000
$$

## 18. Divisibility And Remainder Problems

The binomial theorem can show that an expression is divisible by a number, or has a particular remainder.

The idea is to write one part as:

$$
1+m
$$

or:

$$
m-1
$$

Then most terms contain a large power of `m`.

### 18.1 Example: Show That `6^n - 5n` Leaves Remainder 1 When Divided By 25

Write:

$$
6=1+5
$$

Then:

$$
6^n=(1+5)^n
$$

By binomial theorem:

$$
(1+5)^n
=1+C(n,1)5+C(n,2)5^2+C(n,3)5^3+\cdots+5^n
$$

Since:

$$
C(n,1)=n
$$

we get:

$$
6^n=1+5n+C(n,2)5^2+C(n,3)5^3+\cdots+5^n
$$

Subtract `5n`:

$$
6^n-5n=1+C(n,2)5^2+C(n,3)5^3+\cdots+5^n
$$

Factor out `25` from all terms after 1:

$$
6^n-5n=1+25K
$$

for some integer `K`.

Therefore, when divided by 25, the remainder is:

$$
1
$$

### 18.2 Example: Show That `9^{n+1}-8n-9` Is Divisible By 64

Write:

$$
9=1+8
$$

Then:

$$
9^{n+1}=(1+8)^{n+1}
$$

Expand:

$$
(1+8)^{n+1}
=1+C(n+1,1)8+C(n+1,2)8^2+\cdots
$$

Since:

$$
C(n+1,1)=n+1
$$

we get:

$$
9^{n+1}=1+8(n+1)+64K
$$

for some integer `K`.

Now:

$$
9^{n+1}-8n-9
=1+8(n+1)+64K-8n-9
$$

Simplify:

$$
1+8n+8-8n-9=0
$$

So:

$$
9^{n+1}-8n-9=64K
$$

Therefore the expression is divisible by 64.

## 19. Approximation Using First Few Terms

When `x` is small, `(1+x)^n` can be approximated by using only the first few terms.

For small `x`:

$$
(1+x)^n
=1+nx+\frac{n(n-1)}{2}x^2+\frac{n(n-1)(n-2)}{6}x^3+\cdots
$$

### 19.1 Example: Approximate `(0.99)^5` Using First Three Terms

Write:

$$
0.99=1-0.01
$$

So:

$$
(0.99)^5=(1-0.01)^5
$$

First three terms:

$$
1-5(0.01)+C(5,2)(0.01)^2
$$

Since:

$$
C(5,2)=10
$$

we get:

$$
1-0.05+10(0.0001)
$$

$$
1-0.05+0.001=0.951
$$

So:

$$
(0.99)^5\approx0.951
$$

## 20. Difference Of Powers

A useful result:

If `a` and `b` are distinct integers and `n` is a positive integer, then:

$$
a-b
$$

is a factor of:

$$
a^n-b^n
$$

### 20.1 Binomial Proof

Write:

$$
a=(a-b)+b
$$

Then:

$$
a^n=((a-b)+b)^n
$$

Expand:

$$
a^n
=b^n+C(n,1)b^{n-1}(a-b)+C(n,2)b^{n-2}(a-b)^2+\cdots+(a-b)^n
$$

Subtract `b^n`:

$$
a^n-b^n
=C(n,1)b^{n-1}(a-b)+C(n,2)b^{n-2}(a-b)^2+\cdots+(a-b)^n
$$

Every term contains the factor:

$$
a-b
$$

Therefore:

$$
a-b
$$

is a factor of:

$$
a^n-b^n
$$

## 21. Standard Exercise Models

### Model 1: Direct Expansion

Expand:

$$
(1-2x)^5
$$

Use:

$$
(1-y)^5=1-5y+10y^2-10y^3+5y^4-y^5
$$

Put:

$$
y=2x
$$

Then:

$$
(1-2x)^5
=1-10x+40x^2-80x^3+80x^4-32x^5
$$

### Model 2: Expansion With A Coefficient Inside

Expand:

$$
(2x-3)^6
$$

Use:

$$
(a-b)^6=a^6-6a^5b+15a^4b^2-20a^3b^3+15a^2b^4-6ab^5+b^6
$$

Here:

$$
a=2x,\quad b=3
$$

So:

$$
(2x-3)^6
=(2x)^6
-6(2x)^5(3)
+15(2x)^4(3)^2
-20(2x)^3(3)^3
+15(2x)^2(3)^4
-6(2x)(3)^5
+3^6
$$

Simplify:

$$
(2x-3)^6
=64x^6-576x^5+2160x^4-4320x^3+4860x^2-2916x+729
$$

### Model 3: Sum And Difference

Find:

$$
(a+b)^4-(a-b)^4
$$

First:

$$
(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4
$$

Next:

$$
(a-b)^4=a^4-4a^3b+6a^2b^2-4ab^3+b^4
$$

Subtract:

$$
(a+b)^4-(a-b)^4
=8a^3b+8ab^3
$$

Factor:

$$
8ab(a^2+b^2)
$$

### Model 4: Sum Of Sixth Powers

Find:

$$
(x+1)^6+(x-1)^6
$$

Terms with odd powers of 1 cancel.

Expansion:

$$
(x+1)^6=x^6+6x^5+15x^4+20x^3+15x^2+6x+1
$$

$$
(x-1)^6=x^6-6x^5+15x^4-20x^3+15x^2-6x+1
$$

Add:

$$
(x+1)^6+(x-1)^6=2x^6+30x^4+30x^2+2
$$

## 22. Common Mistakes

### Mistake 1: Forgetting Alternating Signs

For `(a-b)^n`, signs alternate:

$$
+,\ -,\ +,\ -,\ldots
$$

Do not make every term positive.

### Mistake 2: Confusing Term Number With r

The general term is:

$$
T_{r+1}=C(n,r)a^{n-r}b^r
$$

So the 5th term has:

$$
r=4
$$

not `r=5`.

### Mistake 3: Forgetting Powers On Coefficients

In `(2x+3y)^5`, the term:

$$
10(2x)^3(3y)^2
$$

is not:

$$
10(2x^3)(3y^2)
$$

The coefficients 2 and 3 must also be raised to powers.

### Mistake 4: Losing Middle Terms

An expansion of `(a+b)^n` has `n+1` terms.

If `(a+b)^6` has fewer or more than 7 terms, something is wrong.

### Mistake 5: Expanding Too Much In Divisibility Questions

For divisibility, you often only need the first one or two terms.

The remaining terms can be grouped as multiples of the required divisor.

## 23. Practice Set A: Basic Expansion

### Question A1

Expand:

$$
(1+x)^5
$$

Answer:

$$
1+5x+10x^2+10x^3+5x^4+x^5
$$

### Question A2

Expand:

$$
(1-x)^5
$$

Answer:

$$
1-5x+10x^2-10x^3+5x^4-x^5
$$

### Question A3

Expand:

$$
(x+2)^4
$$

Answer:

$$
x^4+8x^3+24x^2+32x+16
$$

### Question A4

Expand:

$$
(2x-y)^4
$$

Answer:

$$
16x^4-32x^3y+24x^2y^2-8xy^3+y^4
$$

### Question A5

Expand:

$$
(3x+2)^3
$$

Answer:

$$
27x^3+54x^2+36x+8
$$

## 24. Practice Set B: Terms And Coefficients

### Question B1

Find the 3rd term of:

$$
(x+2)^6
$$

Answer:

Third term means `r=2`.

$$
T_3=C(6,2)x^4(2)^2
$$

$$
T_3=15 \times 4x^4=60x^4
$$

### Question B2

Find the coefficient of `x^4` in:

$$
(1+x)^8
$$

Answer:

Coefficient:

$$
C(8,4)=70
$$

### Question B3

Find the coefficient of `x^3` in:

$$
(1+3x)^5
$$

Answer:

Use `r=3`.

$$
C(5,3)3^3=10 \times 27=270
$$

### Question B4

Find the coefficient of `x^2` in:

$$
(2+x)^6
$$

Answer:

General term:

$$
C(6,r)2^{6-r}x^r
$$

For `x^2`, put `r=2`.

$$
C(6,2)2^4=15 \times 16=240
$$

## 25. Practice Set C: Numerical Evaluation

### Question C1

Evaluate:

$$
96^3
$$

Answer:

Write:

$$
96=100-4
$$

Then:

$$
96^3=(100-4)^3
$$

$$
=100^3-3(100)^2(4)+3(100)(4)^2-4^3
$$

$$
=1000000-120000+4800-64
$$

$$
=884736
$$

### Question C2

Evaluate:

$$
101^4
$$

Answer:

$$
101^4=(100+1)^4
$$

$$
=100^4+4(100)^3+6(100)^2+4(100)+1
$$

$$
=104060401
$$

### Question C3

Evaluate:

$$
99^5
$$

Answer:

$$
99^5=(100-1)^5
$$

$$
=100^5-5(100)^4+10(100)^3-10(100)^2+5(100)-1
$$

$$
=9509900499
$$

## 26. Practice Set D: Proof And Divisibility

### Question D1

Prove that:

$$
2^n=C(n,0)+C(n,1)+\cdots+C(n,n)
$$

Answer:

Use:

$$
(1+x)^n=C(n,0)+C(n,1)x+\cdots+C(n,n)x^n
$$

Put:

$$
x=1
$$

Then:

$$
2^n=C(n,0)+C(n,1)+\cdots+C(n,n)
$$

### Question D2

Prove that:

$$
C(n,0)-C(n,1)+C(n,2)-\cdots+(-1)^nC(n,n)=0
$$

Answer:

Use:

$$
(1-x)^n=C(n,0)-C(n,1)x+C(n,2)x^2-\cdots+(-1)^nC(n,n)x^n
$$

Put:

$$
x=1
$$

Then:

$$
(1-1)^n=0
$$

So:

$$
C(n,0)-C(n,1)+C(n,2)-\cdots+(-1)^nC(n,n)=0
$$

### Question D3

Show that `a-b` is a factor of `a^n-b^n`.

Answer:

Use the proof given in section 20.

The key step is writing:

$$
a=(a-b)+b
$$

Then every term of `a^n-b^n` contains the factor `a-b`.

## 27. Formula Sheet

### Binomial Theorem

$$
(a+b)^n=\sum_{r=0}^{n}C(n,r)a^{n-r}b^r
$$

### General Term

$$
T_{r+1}=C(n,r)a^{n-r}b^r
$$

### Positive Binomial Coefficients

$$
C(n,r)=\frac{n!}{r!(n-r)!}
$$

### Expansion Of `(a-b)^n`

$$
(a-b)^n=\sum_{r=0}^{n}(-1)^rC(n,r)a^{n-r}b^r
$$

### Sum Of Coefficients

$$
C(n,0)+C(n,1)+\cdots+C(n,n)=2^n
$$

### Alternating Sum

$$
C(n,0)-C(n,1)+C(n,2)-\cdots+(-1)^nC(n,n)=0
$$

## 28. Final Learner Check

A learner is ready to move on if they can answer these questions:

1. What is the coefficient row for `(a+b)^5`?
2. Why does `(a+b)^n` have `n+1` terms?
3. What is the general term in the expansion of `(a+b)^n`?
4. Why do signs alternate in `(a-b)^n`?
5. How do we find a coefficient without writing the full expansion?
6. Why is the sum of coefficients equal to `2^n`?
7. How can binomial theorem prove divisibility?
8. Why do first few terms sometimes prove a comparison?
9. How is Pascal's identity connected to the theorem?
10. What mistake happens if the coefficient inside a bracket is not raised to the correct power?

## 29. One-Page Review

- Binomial theorem expands `(a+b)^n`.
- The coefficients are `C(n,0), C(n,1), ..., C(n,n)`.
- Pascal's triangle gives these coefficients.
- The powers of the first term decrease from `n` to 0.
- The powers of the second term increase from 0 to `n`.
- Each term has total degree `n`.
- The `(r+1)`th term is `C(n,r)a^{n-r}b^r`.
- For `(a-b)^n`, signs alternate.
- The sum of coefficients is found by putting variables equal to 1.
- Divisibility problems often use expansions like `(1+m)^n`.
