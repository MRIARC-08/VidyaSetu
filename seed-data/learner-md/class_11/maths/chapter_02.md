# Chapter 2: Relations And Functions

Class: 11  
Subject: Mathematics  
Input file used: `data/class_11/maths/chapter_02.md`  
Formatted file: `data_learner_md/class_11/maths/chapter_02.md`

## Learning Purpose

This chapter extends the language of sets into ordered pairs, relations, and functions.

A relation tells us how elements of one set are connected to elements of another set.

A function is a special relation where every input has exactly one output.

This idea is central to almost all later mathematics.

Algebra, coordinate geometry, trigonometry, calculus, probability, statistics, and physics all use functions to describe how one quantity depends on another.

## Core Learning Outcomes

After studying this chapter, you should be able to:

1. Understand ordered pairs.
2. Decide when two ordered pairs are equal.
3. Form Cartesian products of two or more sets.
4. Count the number of elements in a Cartesian product.
5. Understand why `A x B` is usually not equal to `B x A`.
6. Define a relation as a subset of a Cartesian product.
7. Identify domain, codomain, and range of a relation.
8. Count the number of possible relations from A to B.
9. Decide whether a relation is a function.
10. Identify the image and preimage of an element under a function.
11. Understand real-valued functions and real functions.
12. Recognise identity, constant, polynomial, rational, modulus, signum, and greatest integer functions.
13. Find domains and ranges of standard functions.
14. Add, subtract, multiply, divide, and scale real functions.
15. Solve textbook-style questions and avoid common mistakes.

## Chapter Snapshot

| Topic | Main Idea |
|---|---|
| Ordered pair | A pair whose order matters |
| Cartesian product | Set of all ordered pairs from two sets |
| Relation | Any subset of a Cartesian product |
| Domain | Set of first components used in a relation |
| Range | Set of second components actually used |
| Codomain | Target set from which second components are chosen |
| Function | A relation where every input has exactly one image |
| Image | Output value of an input |
| Preimage | Input value that gives an output |
| Real function | Function whose domain and range are subsets of real numbers |
| Algebra of functions | Pointwise addition, subtraction, multiplication, scalar multiplication, and quotient |

## Essential Notation

| Notation | Meaning |
|---|---|
| `(a, b)` | Ordered pair with first element a and second element b |
| `A x B` | Cartesian product of A and B |
| `A x A x A` | Cartesian product of A with itself three times |
| `R subset A x B` | R is a relation from A to B |
| `f: A -> B` | f is a function from A to B |
| `f(a) = b` | b is the image of a under f |
| `Domain` | Set of all first elements of ordered pairs |
| `Range` | Set of all second elements that occur |
| `Codomain` | The full target set B in a relation or function from A to B |

In formulas:

$$
A \times B = \{(a, b) : a \in A, b \in B\}
$$

$$
R \subseteq A \times B
$$

$$
f : A \to B
$$

$$
f(a) = b
$$

## 1. Why Ordered Pairs Matter

A pair such as `(a, b)` is ordered.

This means the first position and second position have separate meanings.

In general:

$$
(a, b) \ne (b, a)
$$

unless:

$$
a = b
$$

Example:

`(Delhi, 01)` is not the same as `(01, Delhi)`.

The first may mean a state followed by a vehicle code.

The second reverses the meaning.

## 2. Equality Of Ordered Pairs

Two ordered pairs are equal if and only if corresponding components are equal.

If:

$$
(a, b) = (x, y)
$$

then:

$$
a = x
$$

and:

$$
b = y
$$

Example:

If:

$$
(x + 1, y - 2) = (3, 1)
$$

then:

$$
x + 1 = 3
$$

and:

$$
y - 2 = 1
$$

So:

$$
x = 2, \quad y = 3
$$

## 3. Cartesian Product Of Two Sets

Let A and B be non-empty sets.

The Cartesian product `A x B` is the set of all ordered pairs `(a, b)` where `a` comes from A and `b` comes from B.

Definition:

$$
A \times B = \{(a, b) : a \in A, b \in B\}
$$

Example:

$$
A = \{red, blue\}, \quad B = \{bag, coat, shirt\}
$$

Then:

$$
A \times B = \{(red, bag), (red, coat), (red, shirt), (blue, bag), (blue, coat), (blue, shirt)\}
$$

There are 6 ordered pairs.

## 4. Counting Ordered Pairs

If:

$$
n(A) = p
$$

and:

$$
n(B) = q
$$

then:

$$
n(A \times B) = pq
$$

Example:

If `A` has 3 elements and `B` has 4 elements, then:

$$
n(A \times B) = 3 \times 4 = 12
$$

## 5. Cartesian Product With Empty Set

If either set is empty, no ordered pair can be formed.

So:

$$
A \times \varnothing = \varnothing
$$

and:

$$
\varnothing \times B = \varnothing
$$

## 6. `A x B` Versus `B x A`

In general:

$$
A \times B \ne B \times A
$$

Example:

$$
P = \{a, b, c\}, \quad Q = \{r\}
$$

Then:

$$
P \times Q = \{(a, r), (b, r), (c, r)\}
$$

but:

$$
Q \times P = \{(r, a), (r, b), (r, c)\}
$$

These are not equal because `(a, r)` is not the same as `(r, a)`.

## 7. Cartesian Product Of Three Sets

The Cartesian product of a set with itself three times is:

$$
A \times A \times A = \{(a, b, c) : a, b, c \in A\}
$$

Here `(a, b, c)` is an ordered triplet.

Example:

If:

$$
A = \{1, 2\}
$$

then:

$$
A \times A \times A = \{(1,1,1), (1,1,2), (1,2,1), (1,2,2), (2,1,1), (2,1,2), (2,2,1), (2,2,2)\}
$$

Since A has 2 elements, the product has:

$$
2^3 = 8
$$

ordered triplets.

## 8. Cartesian Products And Coordinate Geometry

If:

$$
R
$$

is the set of real numbers, then:

$$
R \times R = \{(x, y) : x, y \in R\}
$$

This represents all points in the two-dimensional coordinate plane.

Also:

$$
R \times R \times R = \{(x, y, z) : x, y, z \in R\}
$$

This represents all points in three-dimensional space.

## 9. Finding Sets From A Cartesian Product

If:

$$
A \times B = \{(p, q), (p, r), (m, q), (m, r)\}
$$

then `A` is the set of first elements:

$$
A = \{p, m\}
$$

and `B` is the set of second elements:

$$
B = \{q, r\}
$$

## 10. Relations

A relation from A to B is a subset of `A x B`.

Definition:

$$
R \text{ is a relation from } A \text{ to } B \text{ if } R \subseteq A \times B
$$

This means a relation is made by selecting some ordered pairs from the full Cartesian product.

Example:

Let:

$$
A = \{1, 2, 3, 4, 5, 6\}
$$

Define:

$$
R = \{(x, y) : y = x + 1, x, y \in A\}
$$

Then:

$$
R = \{(1,2), (2,3), (3,4), (4,5), (5,6)\}
$$

This is a relation from A to A.

## 11. Domain, Range, And Codomain

For a relation `R` from A to B:

- Domain is the set of first elements that actually appear in R.
- Range is the set of second elements that actually appear in R.
- Codomain is the whole target set B.

For:

$$
R = \{(1,2), (2,3), (3,4), (4,5), (5,6)\}
$$

as a relation from:

$$
A = \{1, 2, 3, 4, 5, 6\}
$$

to A, we have:

$$
\text{Domain} = \{1, 2, 3, 4, 5\}
$$

$$
\text{Range} = \{2, 3, 4, 5, 6\}
$$

$$
\text{Codomain} = \{1, 2, 3, 4, 5, 6\}
$$

Notice that range is usually only a subset of codomain.

## 12. Range Versus Codomain

This distinction is important.

The codomain is the set where outputs are allowed to live.

The range is the set of outputs actually produced.

Example:

Let:

$$
f : R \to R
$$

be defined by:

$$
f(x) = x^2
$$

The codomain is `R`.

But the range is:

$$
[0, \infty)
$$

because squares are never negative.

## 13. Number Of Relations From A To B

Every relation from A to B is a subset of `A x B`.

If:

$$
n(A) = p, \quad n(B) = q
$$

then:

$$
n(A \times B) = pq
$$

The number of subsets of a set with `pq` elements is:

$$
2^{pq}
$$

So the number of relations from A to B is:

$$
2^{pq}
$$

Example:

If:

$$
A = \{1, 2\}, \quad B = \{3, 4\}
$$

then `A x B` has 4 elements.

So the number of relations from A to B is:

$$
2^4 = 16
$$

## 14. Function

A function from A to B is a special relation from A to B.

It must satisfy two conditions:

1. Every element of A must have an image in B.
2. No element of A can have more than one image.

Definition:

$$
f : A \to B
$$

is a function if every `a in A` has exactly one `b in B` such that:

$$
f(a) = b
$$

## 15. Image And Preimage

If:

$$
f(a) = b
$$

then:

- `b` is the image of `a`;
- `a` is a preimage of `b`.

In ordered-pair language:

$$
(a, b) \in f
$$

means:

$$
f(a) = b
$$

## 16. Function Test For Ordered Pairs

A relation written as ordered pairs is a function if no first component repeats with different second components.

Example:

$$
R = \{(2,1), (3,1), (4,2)\}
$$

This is a function because each first element appears once.

But:

$$
R = \{(2,2), (2,4), (3,3), (4,4)\}
$$

is not a function because the input 2 has two images: 2 and 4.

## 17. A Relation Can Fail To Be A Function In Two Ways

For a relation from A to B:

1. Some element of A may have no image.
2. Some element of A may have more than one image.

Both failures break the definition of function.

Example:

If:

$$
A = \{1, 2, 3\}
$$

and:

$$
R = \{(1,4), (2,5)\}
$$

then 3 has no image, so R is not a function from A to B.

Example:

$$
R = \{(1,4), (1,5), (2,6), (3,7)\}
$$

Input 1 has two images, so R is not a function.

## 18. Real-Valued Function And Real Function

A function is real-valued if its range is a subset of real numbers.

A function is a real function if both its domain and range are subsets of real numbers.

Example:

$$
f : R \to R, \quad f(x) = 2x + 1
$$

is a real function.

Example:

$$
f : N \to R, \quad f(n) = \sqrt{n}
$$

is real-valued, but its domain is `N`, not all real numbers.

## 19. Identity Function

The identity function is defined by:

$$
f : R \to R, \quad f(x) = x
$$

Every input maps to itself.

Domain:

$$
R
$$

Range:

$$
R
$$

Graph:

The graph is the straight line:

$$
y = x
$$

It passes through the origin.

## 20. Constant Function

A constant function is defined by:

$$
f : R \to R, \quad f(x) = c
$$

where `c` is a fixed real number.

Domain:

$$
R
$$

Range:

$$
\{c\}
$$

Graph:

The graph is a horizontal line:

$$
y = c
$$

## 21. Polynomial Function

A polynomial function has the form:

$$
f(x) = a_0 + a_1x + a_2x^2 + \cdots + a_nx^n
$$

where:

- `n` is a non-negative integer;
- coefficients are real numbers;
- powers of x are whole-number powers.

Examples:

$$
f(x) = x^3 - x^2 + 2
$$

$$
g(x) = x^4 + 2x
$$

A function with a variable in a denominator or under a non-whole power is not a polynomial.

## 22. Square Function

The square function is:

$$
f : R \to R, \quad f(x) = x^2
$$

Common values:

| x | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|---|---|---|---|
| `x^2` | 16 | 9 | 4 | 1 | 0 | 1 | 4 | 9 | 16 |

Domain:

$$
R
$$

Range:

$$
[0, \infty)
$$

The graph is a parabola opening upward.

## 23. Cube Function

The cube function is:

$$
f : R \to R, \quad f(x) = x^3
$$

Values:

$$
f(0) = 0, \quad f(1) = 1, \quad f(-1) = -1
$$

$$
f(2) = 8, \quad f(-2) = -8
$$

Domain:

$$
R
$$

Range:

$$
R
$$

## 24. Rational Function

A rational function is a quotient of two polynomial functions:

$$
h(x) = \frac{f(x)}{g(x)}
$$

where:

$$
g(x) \ne 0
$$

The domain excludes values that make the denominator zero.

Example:

$$
f(x) = \frac{1}{x}
$$

Domain:

$$
R - \{0\}
$$

Range:

$$
R - \{0\}
$$

## 25. Modulus Function

The modulus function is:

$$
f : R \to R, \quad f(x) = |x|
$$

It is defined piecewise as:

$$
|x| =
\begin{cases}
x, & x \ge 0 \\
-x, & x < 0
\end{cases}
$$

Domain:

$$
R
$$

Range:

$$
[0, \infty)
$$

Its graph is V-shaped.

## 26. Signum Function

The signum function is:

$$
f : R \to R
$$

defined by:

$$
f(x) =
\begin{cases}
1, & x > 0 \\
0, & x = 0 \\
-1, & x < 0
\end{cases}
$$

Domain:

$$
R
$$

Range:

$$
\{-1, 0, 1\}
$$

## 27. Greatest Integer Function

The greatest integer function is:

$$
f(x) = [x]
$$

where `[x]` is the greatest integer less than or equal to `x`.

Examples:

$$
[2.3] = 2
$$

$$
[2] = 2
$$

$$
[-0.2] = -1
$$

$$
[-3.7] = -4
$$

Piecewise pattern:

$$
[x] = -1 \text{ for } -1 \le x < 0
$$

$$
[x] = 0 \text{ for } 0 \le x < 1
$$

$$
[x] = 1 \text{ for } 1 \le x < 2
$$

Domain:

$$
R
$$

Range:

$$
Z
$$

## 28. Algebra Of Real Functions

Let:

$$
f : X \to R
$$

and:

$$
g : X \to R
$$

where:

$$
X \subseteq R
$$

Then the following operations are defined pointwise.

Addition:

$$
(f + g)(x) = f(x) + g(x)
$$

Subtraction:

$$
(f - g)(x) = f(x) - g(x)
$$

Scalar multiplication:

$$
(kf)(x) = kf(x)
$$

Product:

$$
(fg)(x) = f(x)g(x)
$$

Quotient:

$$
\left(\frac{f}{g}\right)(x) = \frac{f(x)}{g(x)}
$$

provided:

$$
g(x) \ne 0
$$

## 29. Worked Example: Algebra Of Functions

Let:

$$
f(x) = x
$$

and:

$$
g(x) = 2x + 1
$$

Then:

$$
(f + g)(x) = x + (2x + 1) = 3x + 1
$$

$$
(f - g)(x) = x - (2x + 1) = -x - 1
$$

$$
(fg)(x) = x(2x + 1) = 2x^2 + x
$$

$$
\left(\frac{f}{g}\right)(x) = \frac{x}{2x + 1}
$$

The quotient is not defined when:

$$
2x + 1 = 0
$$

So:

$$
x \ne -\frac{1}{2}
$$

## 30. Domain Strategy For Real Functions

To find the domain:

1. Start with all real numbers.
2. Exclude values that make denominators zero.
3. Exclude values that make even roots negative.
4. Exclude values that break any stated restriction.

Examples:

For:

$$
f(x) = \frac{x + 5}{x^2 - 5x + 4}
$$

factor the denominator:

$$
x^2 - 5x + 4 = (x - 1)(x - 4)
$$

So the domain is:

$$
R - \{1, 4\}
$$

For:

$$
f(x) = \sqrt{x - 1}
$$

we need:

$$
x - 1 \ge 0
$$

So:

$$
x \ge 1
$$

Domain:

$$
[1, \infty)
$$

## 31. Exercise 2.1 Answer Key

### 1. Ordered Pair Equality

Given:

$$
\left(\frac{x}{3} + 1, y - \frac{2}{3}\right) = \left(\frac{5}{3}, \frac{1}{3}\right)
$$

Equate corresponding components:

$$
\frac{x}{3} + 1 = \frac{5}{3}
$$

So:

$$
\frac{x}{3} = \frac{2}{3}
$$

and:

$$
x = 2
$$

Also:

$$
y - \frac{2}{3} = \frac{1}{3}
$$

So:

$$
y = 1
$$

Final answer:

$$
x = 2, \quad y = 1
$$

### 2. Number Of Elements In `A x B`

Given:

$$
n(A) = 3
$$

and:

$$
B = \{3, 4, 5\}
$$

So:

$$
n(B) = 3
$$

Thus:

$$
n(A \times B) = 3 \times 3 = 9
$$

### 3. Find `G x H` And `H x G`

Let:

$$
G = \{7, 8\}, \quad H = \{5, 4, 2\}
$$

Then:

$$
G \times H = \{(7,5), (7,4), (7,2), (8,5), (8,4), (8,2)\}
$$

and:

$$
H \times G = \{(5,7), (5,8), (4,7), (4,8), (2,7), (2,8)\}
$$

### 4. True Or False

| Part | Answer | Correct Form Or Reason |
|---|---|---|
| i | False | `P x Q = {(m,n), (m,m), (n,n), (n,m)}` |
| ii | True | This is the definition of Cartesian product for non-empty sets |
| iii | True | `B intersection empty set = empty set`, so `A x empty set = empty set` |

### 5. Find `A x A x A`

Let:

$$
A = \{-1, 1\}
$$

Then:

$$
A \times A \times A =
\{(-1,-1,-1), (-1,-1,1), (-1,1,-1), (-1,1,1), (1,-1,-1), (1,-1,1), (1,1,-1), (1,1,1)\}
$$

### 6. Find A And B

Given:

$$
A \times B = \{(a,x), (a,y), (b,x), (b,y)\}
$$

First components:

$$
A = \{a, b\}
$$

Second components:

$$
B = \{x, y\}
$$

### 7. Verification

Let:

$$
A = \{1, 2\}, \quad B = \{1, 2, 3, 4\}
$$

$$
C = \{5, 6\}, \quad D = \{5, 6, 7, 8\}
$$

First:

$$
B \cap C = \varnothing
$$

So:

$$
A \times (B \cap C) = \varnothing
$$

Also:

`A x B` has second components from `{1,2,3,4}`, while `A x C` has second components from `{5,6}`.

They have no common ordered pairs.

So:

$$
(A \times B) \cap (A \times C) = \varnothing
$$

Hence part i is verified.

For part ii:

Since:

$$
A \subseteq B
$$

and:

$$
C \subseteq D
$$

every ordered pair in `A x C` also belongs to `B x D`.

Thus:

$$
A \times C \subseteq B \times D
$$

### 8. Subsets Of `A x B`

Let:

$$
A = \{1, 2\}, \quad B = \{3, 4\}
$$

Then:

$$
A \times B = \{(1,3), (1,4), (2,3), (2,4)\}
$$

It has 4 elements.

Number of subsets:

$$
2^4 = 16
$$

The subsets are:

$$
\varnothing
$$

$$
\{(1,3)\}, \{(1,4)\}, \{(2,3)\}, \{(2,4)\}
$$

$$
\{(1,3),(1,4)\}, \{(1,3),(2,3)\}, \{(1,3),(2,4)\}
$$

$$
\{(1,4),(2,3)\}, \{(1,4),(2,4)\}, \{(2,3),(2,4)\}
$$

$$
\{(1,3),(1,4),(2,3)\}, \{(1,3),(1,4),(2,4)\}
$$

$$
\{(1,3),(2,3),(2,4)\}, \{(1,4),(2,3),(2,4)\}
$$

$$
\{(1,3),(1,4),(2,3),(2,4)\}
$$

### 9. Find A And B

Given:

$$
n(A) = 3, \quad n(B) = 2
$$

and ordered pairs:

$$
(x,1), (y,2), (z,1)
$$

are in `A x B`, where x, y, z are distinct.

So:

$$
A = \{x, y, z\}
$$

and:

$$
B = \{1, 2\}
$$

### 10. Find A From `A x A`

If `A x A` has 9 elements, then:

$$
n(A)^2 = 9
$$

So:

$$
n(A) = 3
$$

Since `(-1,0)` and `(0,1)` belong to `A x A`, the elements `-1`, `0`, and `1` must be in A.

Therefore:

$$
A = \{-1, 0, 1\}
$$

All elements of `A x A` are:

$$
\{(-1,-1), (-1,0), (-1,1), (0,-1), (0,0), (0,1), (1,-1), (1,0), (1,1)\}
$$

The remaining elements besides the two given pairs are:

$$
\{(-1,-1), (-1,1), (0,-1), (0,0), (1,-1), (1,0), (1,1)\}
$$

## 32. Exercise 2.2 Answer Key

### 1. Relation From A To A

Let:

$$
A = \{1, 2, 3, ..., 14\}
$$

and:

$$
R = \{(x, y) : 3x - y = 0, x, y \in A\}
$$

Since:

$$
y = 3x
$$

and y must belong to A, possible x values are:

$$
1, 2, 3, 4
$$

So:

$$
R = \{(1,3), (2,6), (3,9), (4,12)\}
$$

Domain:

$$
\{1, 2, 3, 4\}
$$

Codomain:

$$
A
$$

Range:

$$
\{3, 6, 9, 12\}
$$

### 2. Relation On Natural Numbers

Given:

$$
R = \{(x, y) : y = x + 5, x < 4, x, y \in N\}
$$

Natural x values less than 4 are:

$$
1, 2, 3
$$

So:

$$
R = \{(1,6), (2,7), (3,8)\}
$$

Domain:

$$
\{1, 2, 3\}
$$

Range:

$$
\{6, 7, 8\}
$$

### 3. Difference Is Odd

Let:

$$
A = \{1, 2, 3, 5\}, \quad B = \{4, 6, 9\}
$$

Difference is odd when one number is odd and the other is even.

Thus:

$$
R = \{(1,4), (1,6), (2,9), (3,4), (3,6), (5,4), (5,6)\}
$$

### 4. Relation From A Figure

The raw chapter refers to a figure for this question.

Use this method for any arrow diagram:

1. For each arrow from `p` to `q`, write the ordered pair `(p, q)`.
2. The roster form is the set of all such ordered pairs.
3. The domain is the set of all starting points that have arrows.
4. The range is the set of all ending points that receive arrows.
5. The set-builder form should describe the visible rule behind the arrows.

### 5. Divisibility Relation

Let:

$$
A = \{1, 2, 3, 4, 6\}
$$

and:

$$
R = \{(a, b) : b \text{ is exactly divisible by } a\}
$$

Then:

$$
R = \{(1,1), (1,2), (1,3), (1,4), (1,6), (2,2), (2,4), (2,6), (3,3), (3,6), (4,4), (6,6)\}
$$

Domain:

$$
\{1, 2, 3, 4, 6\}
$$

Range:

$$
\{1, 2, 3, 4, 6\}
$$

### 6. Domain And Range

Given:

$$
R = \{(x, x + 5) : x \in \{0, 1, 2, 3, 4, 5\}\}
$$

Roster form:

$$
R = \{(0,5), (1,6), (2,7), (3,8), (4,9), (5,10)\}
$$

Domain:

$$
\{0, 1, 2, 3, 4, 5\}
$$

Range:

$$
\{5, 6, 7, 8, 9, 10\}
$$

### 7. Prime Cubes

Prime numbers less than 10 are:

$$
2, 3, 5, 7
$$

So:

$$
R = \{(2,8), (3,27), (5,125), (7,343)\}
$$

### 8. Number Of Relations

Let:

$$
A = \{x, y, z\}, \quad B = \{1, 2\}
$$

Then:

$$
n(A) = 3, \quad n(B) = 2
$$

So:

$$
n(A \times B) = 6
$$

Number of relations:

$$
2^6 = 64
$$

### 9. Relation On Z

Given:

$$
R = \{(a,b) : a,b \in Z, a - b \in Z\}
$$

For any integers a and b, `a - b` is also an integer.

So:

$$
R = Z \times Z
$$

Domain:

$$
Z
$$

Range:

$$
Z
$$

## 33. Exercise 2.3 Answer Key

### 1. Which Relations Are Functions?

Part i:

$$
\{(2,1), (5,1), (8,1), (11,1), (14,1), (17,1)\}
$$

This is a function.

Domain:

$$
\{2, 5, 8, 11, 14, 17\}
$$

Range:

$$
\{1\}
$$

Part ii:

$$
\{(2,1), (4,2), (6,3), (8,4), (10,5), (12,6), (14,7)\}
$$

This is a function.

Domain:

$$
\{2, 4, 6, 8, 10, 12, 14\}
$$

Range:

$$
\{1, 2, 3, 4, 5, 6, 7\}
$$

Part iii:

$$
\{(1,3), (1,5), (2,5)\}
$$

This is not a function because input 1 has two images: 3 and 5.

### 2. Domains And Ranges

Part i:

$$
f(x) = -x
$$

Domain:

$$
R
$$

Range:

$$
R
$$

Part ii:

$$
f(x) = \sqrt{9 - x^2}
$$

For the square root to be real:

$$
9 - x^2 \ge 0
$$

So:

$$
-3 \le x \le 3
$$

Domain:

$$
[-3, 3]
$$

Range:

$$
[0, 3]
$$

### 3. Evaluate `f(x) = 2x - 5`

$$
f(0) = 2(0) - 5 = -5
$$

$$
f(7) = 2(7) - 5 = 9
$$

$$
f(-3) = 2(-3) - 5 = -11
$$

### 4. Celsius To Fahrenheit

Given:

$$
t(C) = \frac{9C}{5} + 32
$$

Then:

$$
t(0) = 32
$$

$$
t(28) = \frac{9(28)}{5} + 32 = \frac{252}{5} + 32 = 82.4
$$

$$
t(-10) = \frac{9(-10)}{5} + 32 = 14
$$

For:

$$
t(C) = 212
$$

we solve:

$$
\frac{9C}{5} + 32 = 212
$$

$$
\frac{9C}{5} = 180
$$

$$
C = 100
$$

### 5. Ranges

Part i:

$$
f(x) = 2 - 3x, \quad x > 0
$$

Since `x > 0`, we have `3x > 0`, so:

$$
f(x) < 2
$$

There is no lower bound.

Range:

$$
(-\infty, 2)
$$

Part ii:

$$
f(x) = x^2 + 2
$$

Since `x^2 >= 0`, the minimum value is 2.

Range:

$$
[2, \infty)
$$

Part iii:

$$
f(x) = x
$$

Range:

$$
R
$$

## 34. Miscellaneous Exercise Guide

### 1. Show f Is A Function And g Is Not

The intended comparison is that in `f`, the two rules agree at the joining point, while in `g`, they do not.

For example:

$$
f(x) =
\begin{cases}
x^2, & 0 \le x \le 3 \\
3x, & 3 \le x \le 10
\end{cases}
$$

At:

$$
x = 3
$$

both rules give:

$$
3^2 = 9
$$

and:

$$
3(3) = 9
$$

So `x = 3` has one image. Hence f is a function.

For:

$$
g(x) =
\begin{cases}
x^2, & 0 \le x \le 2 \\
3x, & 2 \le x \le 10
\end{cases}
$$

At:

$$
x = 2
$$

the first rule gives:

$$
2^2 = 4
$$

and the second rule gives:

$$
3(2) = 6
$$

So one input has two images. Hence g is not a function.

### 2. Difference Quotient

For:

$$
f(x) = x^2
$$

find:

$$
\frac{f(1.1) - f(1)}{1.1 - 1}
$$

Now:

$$
f(1.1) = (1.1)^2 = 1.21
$$

and:

$$
f(1) = 1
$$

So:

$$
\frac{f(1.1) - f(1)}{1.1 - 1}
= \frac{1.21 - 1}{0.1}
= \frac{0.21}{0.1}
= 2.1
$$

### 3. Domain Of A Rational Function

For a rational function with denominator:

$$
x^2 - 8x + 12
$$

factor:

$$
x^2 - 8x + 12 = (x - 2)(x - 6)
$$

The denominator is zero at:

$$
x = 2, \quad x = 6
$$

So the domain is:

$$
R - \{2, 6\}
$$

### 4. Domain And Range Of `sqrt(x - 1)`

Let:

$$
f(x) = \sqrt{x - 1}
$$

For real output:

$$
x - 1 \ge 0
$$

So:

$$
x \ge 1
$$

Domain:

$$
[1, \infty)
$$

Range:

$$
[0, \infty)
$$

### 5. Domain And Range Of `-sqrt(1 - x)`

Let:

$$
f(x) = -\sqrt{1 - x}
$$

For real output:

$$
1 - x \ge 0
$$

So:

$$
x \le 1
$$

Domain:

$$
(-\infty, 1]
$$

Because the square root is non-negative and there is a negative sign outside it:

$$
f(x) \le 0
$$

Range:

$$
(-\infty, 0]
$$

### 6. Range Of `x/(x + 2)`

Let:

$$
y = \frac{x}{x + 2}
$$

where:

$$
x \ne -2
$$

Solve for x:

$$
y(x + 2) = x
$$

$$
yx + 2y = x
$$

$$
x(y - 1) = -2y
$$

If:

$$
y \ne 1
$$

then:

$$
x = \frac{-2y}{y - 1}
$$

So every real y except 1 is possible.

Range:

$$
R - \{1\}
$$

### 7. Algebra Of Two Functions

Let:

$$
f(x) = x + 1
$$

and:

$$
g(x) = 2x - 3
$$

Then:

$$
(f + g)(x) = (x + 1) + (2x - 3) = 3x - 2
$$

$$
(f - g)(x) = (x + 1) - (2x - 3) = -x + 4
$$

$$
(fg)(x) = (x + 1)(2x - 3) = 2x^2 - x - 3
$$

### 8. Linear Function From Ordered Pairs

Let:

$$
f(x) = ax + b
$$

Given:

$$
f(0) = -1
$$

So:

$$
b = -1
$$

Given:

$$
f(1) = 1
$$

So:

$$
a + b = 1
$$

Using `b = -1`:

$$
a - 1 = 1
$$

Thus:

$$
a = 2
$$

Therefore:

$$
f(x) = 2x - 1
$$

### 9. Equality Relation On N

Let:

$$
R = \{(a,b) : a,b \in N \text{ and } a = b\}
$$

Part i:

For all `a in N`, `(a,a) in R`.

True, because `a = a`.

Part ii:

If `(a,b) in R`, then `a = b`.

So `b = a`, hence `(b,a) in R`.

True.

Part iii:

If `(a,b) in R` and `(b,c) in R`, then:

$$
a = b
$$

and:

$$
b = c
$$

So:

$$
a = c
$$

Thus `(a,c) in R`.

True.

### 10. Relation And Function Check

Let:

$$
A = \{1,2,3,4\}
$$

$$
B = \{1,5,9,11,15,16\}
$$

and:

$$
f = \{(1,5), (2,9), (3,1), (4,5), (2,11)\}
$$

Every first element is in A and every second element is in B.

So f is a relation from A to B.

But f is not a function because input 2 has two images:

$$
9 \text{ and } 11
$$

### 11. Is `f = {(ab, a + b) : a,b in Z}` A Function From Z To Z?

No.

The same first component can have different second components.

Example:

Take:

$$
a = 0, \quad b = 0
$$

Then:

$$
(ab, a + b) = (0, 0)
$$

Take:

$$
a = 0, \quad b = 1
$$

Then:

$$
(ab, a + b) = (0, 1)
$$

So the input 0 has two possible images, 0 and 1.

Therefore it is not a function from Z to Z.

### 12. Highest Prime Factor Function

Let:

$$
A = \{9, 10, 11, 12, 13\}
$$

and:

$$
f(n) = \text{highest prime factor of } n
$$

Then:

$$
f(9) = 3
$$

$$
f(10) = 5
$$

$$
f(11) = 11
$$

$$
f(12) = 3
$$

$$
f(13) = 13
$$

Range:

$$
\{3, 5, 11, 13\}
$$

## 35. Key Formulas In One Table

| Idea | Formula |
|---|---|
| Cartesian product | `A x B = {(a, b) : a in A, b in B}` |
| Product count | `n(A x B) = n(A)n(B)` |
| Empty product | `A x empty set = empty set` |
| Relation | `R subset A x B` |
| Number of relations | `2^(n(A)n(B))` |
| Function | Every input has exactly one image |
| Identity function | `f(x) = x` |
| Constant function | `f(x) = c` |
| Square function range | `[0, infinity)` |
| Reciprocal function domain | `R - {0}` |
| Modulus function | `|x| = x` if `x >= 0`, `-x` if `x < 0` |
| Signum range | `{-1, 0, 1}` |
| Greatest integer range | `Z` |
| Sum of functions | `(f+g)(x)=f(x)+g(x)` |
| Difference of functions | `(f-g)(x)=f(x)-g(x)` |
| Product of functions | `(fg)(x)=f(x)g(x)` |
| Quotient of functions | `(f/g)(x)=f(x)/g(x)`, where `g(x) != 0` |

## 36. Common Mistakes And Corrections

| Mistake | Correction |
|---|---|
| Treating `(a,b)` and `(b,a)` as always equal | Ordered pairs depend on order |
| Forgetting pairs in Cartesian product | Pair every element of A with every element of B |
| Writing `A x B = B x A` | Usually false |
| Confusing range with codomain | Range is actual outputs; codomain is target set |
| Calling every relation a function | A function needs exactly one image for every input |
| Allowing one input to have two outputs | This breaks the function rule |
| Ignoring denominator restrictions | Denominators cannot be zero |
| Ignoring square root restrictions | Even roots need non-negative radicands |
| Saying range of `x^2` is R | It is `[0, infinity)` |
| Saying range of `1/x` includes 0 | It never equals 0 |

## 37. Fast Function Test

For a relation from A to B:

1. Check every element of A.
2. Each element must appear as a first component at least once.
3. No element of A may appear as first component with two different second components.
4. If both conditions hold, it is a function.
5. If even one input has no image or two images, it is not a function.

For a graph:

Use the vertical line idea.

If a vertical line cuts the graph at more than one point, the graph does not represent a function of x.

## 38. Quick Self-Test

1. Is `(2,3) = (3,2)`?
2. If `A = {1,2}` and `B = {a,b}`, write `A x B`.
3. If `n(A)=4` and `n(B)=5`, find `n(A x B)`.
4. How many relations are possible from a 2-element set to a 3-element set?
5. What is the domain of `{(1,2),(3,4),(5,6)}`?
6. What is the range of `{(1,2),(3,4),(5,6)}`?
7. Is `{(1,2),(1,3),(2,4)}` a function?
8. What is the range of `f(x)=x^2` over R?
9. What is the domain of `f(x)=1/(x-5)`?
10. What is `(f+g)(x)` if `f(x)=x^2` and `g(x)=3x`?
11. What is the range of the signum function?
12. What is the greatest integer less than or equal to `-2.3`?

## 39. Self-Test Answers

1. No, unless the first and second components match in order.
2. `{(1,a), (1,b), (2,a), (2,b)}`.
3. `20`.
4. `2^(2 x 3) = 64`.
5. `{1, 3, 5}`.
6. `{2, 4, 6}`.
7. No, because input 1 has two images.
8. `[0, infinity)`.
9. `R - {5}`.
10. `x^2 + 3x`.
11. `{-1, 0, 1}`.
12. `-3`.

## 40. Final Chapter Summary

An ordered pair is a pair in which order matters.

The Cartesian product `A x B` is the set of all ordered pairs whose first element comes from A and second element comes from B.

If A has p elements and B has q elements, then `A x B` has `pq` elements.

A relation from A to B is any subset of `A x B`.

The domain of a relation is the set of first elements that actually occur.

The range is the set of second elements that actually occur.

The codomain is the full target set.

A function is a relation where every element of the domain has exactly one image.

Common real functions include identity, constant, polynomial, rational, modulus, signum, and greatest integer functions.

For real functions, domains must exclude values that make denominators zero or even roots invalid.

Function algebra is done pointwise: add outputs, subtract outputs, multiply outputs, divide outputs where allowed, and multiply outputs by scalars.

This chapter prepares the foundation for trigonometric functions, calculus, coordinate geometry, probability, and mathematical modelling.
