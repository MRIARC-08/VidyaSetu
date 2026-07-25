# Chapter 2: Polynomials
### NCERT Class 10 - Maths

---

## Chapter at a Glance

| Detail | Learner-Friendly Information |
|---|---|
| **Class** | 10 |
| **Subject** | Maths |
| **Chapter** | 2 |
| **Core Theme** | Zeroes of polynomials, their graphical meaning, and relationships between zeroes and coefficients. |
| **Main Skills** | Identifying degree, finding zeroes, reading graph intersections, factorising quadratics, verifying sum and product relations. |
| **Important Result** | For `ax^2 + bx + c`, sum of zeroes is `-b/a` and product of zeroes is `c/a`. |

---

## Section Structure

| Unit | Topic | Main Learning Focus |
|---|---|---|
| **2A** | Polynomial Basics | Degree, linear, quadratic, cubic polynomials. |
| **2B** | Value and Zero of a Polynomial | Meaning of `p(k)` and zeroes. |
| **2C** | Geometrical Meaning of Zeroes | Zeroes as x-intercepts of `y = p(x)`. |
| **2D** | Quadratic Zeroes and Coefficients | Sum and product relations. |
| **2E** | Cubic Zeroes and Coefficients | Optional relation for cubic polynomials. |
| **2F** | Solved Exercises | Exercise 2.1 and 2.2 solutions. |

---

## Learning Outcomes

By the end of this chapter, you should be able to:

| Outcome | You Should Be Able To... |
|---|---|
| **Identify polynomials** | Decide whether an expression is a polynomial in one variable. |
| **Find degree** | Identify the highest power of the variable in a polynomial. |
| **Classify polynomials** | Recognise linear, quadratic, and cubic polynomials. |
| **Evaluate polynomial values** | Find `p(k)` by substituting `x = k`. |
| **Find zeroes** | Solve `p(x) = 0` for linear and factorable quadratic polynomials. |
| **Use graph meaning** | Count zeroes by counting x-axis intersections. |
| **Use coefficient relations** | For quadratics, verify sum and product of zeroes. |
| **Form quadratics** | Build a quadratic polynomial from sum and product of zeroes. |

---

## Key Terms

| Term | Meaning |
|---|---|
| **Polynomial** | Algebraic expression in which powers of the variable are non-negative integers. |
| **Degree** | Highest power of the variable in the polynomial. |
| **Linear polynomial** | Polynomial of degree 1. |
| **Quadratic polynomial** | Polynomial of degree 2. |
| **Cubic polynomial** | Polynomial of degree 3. |
| **Value of polynomial** | Number obtained by substituting a value for the variable. |
| **Zero of polynomial** | A real number `k` such that `p(k) = 0`. |
| **x-intercept** | Point where a graph meets the x-axis. |
| **Parabola** | Graph of a quadratic polynomial. |
| **Coefficient** | Numerical factor multiplying a power of the variable. |
| **Constant term** | Term independent of the variable. |

---

## Formula Bank

## Linear Polynomial

For:

$$
p(x) = ax + b, \quad a \ne 0
$$

Zero:

$$
x = -\frac{b}{a}
$$

## Quadratic Polynomial

For:

$$
p(x) = ax^2 + bx + c, \quad a \ne 0
$$

if zeroes are `alpha` and `beta`, then:

$$
\alpha + \beta = -\frac{b}{a}
$$

$$
\alpha\beta = \frac{c}{a}
$$

## Forming a Quadratic from Sum and Product

If sum of zeroes is `S` and product is `P`, one quadratic polynomial is:

$$
x^2 - Sx + P
$$

Any non-zero constant multiple of this polynomial has the same zeroes.

## Cubic Polynomial

For:

$$
p(x) = ax^3 + bx^2 + cx + d, \quad a \ne 0
$$

if zeroes are `alpha`, `beta`, and `gamma`, then:

$$
\alpha + \beta + \gamma = -\frac{b}{a}
$$

$$
\alpha\beta + \beta\gamma + \gamma\alpha = \frac{c}{a}
$$

$$
\alpha\beta\gamma = -\frac{d}{a}
$$

---

# Unit 2A: Polynomial Basics

## What Is a Polynomial?

A polynomial in one variable is an expression made from:

1. Constants.
2. Non-negative integer powers of the variable.
3. Addition, subtraction, and multiplication.

Examples:

| Expression | Polynomial? | Reason |
|---|---|---|
| `4x + 2` | Yes | Variable power is `1`. |
| `2y^2 - 3y + 4` | Yes | Highest power is `2`. |
| `5x^3 - 4x^2 + x - 2` | Yes | Powers are non-negative integers. |
| `1/x` | No | Variable has power `-1`. |
| `sqrt(x) + 2` | No | Variable has fractional power `1/2`. |
| `x^2 + 3x + 2` | Yes | Polynomial of degree `2`. |

## Degree of a Polynomial

The degree of a polynomial is the highest power of the variable with non-zero coefficient.

Examples:

| Polynomial | Highest Power | Degree |
|---|---:|---:|
| `4x + 2` | `1` | 1 |
| `2y^2 - 3y + 4` | `2` | 2 |
| `5x^3 - 4x^2 + x - 2` | `3` | 3 |
| `7u^6 - 4u^2 + u - 3` | `6` | 6 |

## Linear Polynomial

A polynomial of degree `1` is called a linear polynomial.

General form:

$$
ax + b, \quad a \ne 0
$$

Examples:

1. `2x - 3`.
2. `3z + 4`.
3. `-5x + 1`.
4. `x/3 + 2`.

## Quadratic Polynomial

A polynomial of degree `2` is called a quadratic polynomial.

General form:

$$
ax^2 + bx + c, \quad a \ne 0
$$

Examples:

1. `x^2 - 3x - 4`.
2. `2x^2 - 8x + 6`.
3. `3x^2 + 5x - 2`.
4. `t^2 - 15`.

## Cubic Polynomial

A polynomial of degree `3` is called a cubic polynomial.

General form:

$$
ax^3 + bx^2 + cx + d, \quad a \ne 0
$$

Examples:

1. `x^3 - 4x`.
2. `3x^3 - 2x^2 + x - 1`.
3. `2x^3 - 5x^2 - 14x + 8`.

---

# Unit 2B: Value and Zero of a Polynomial

## Value of a Polynomial

If `p(x)` is a polynomial and `k` is a real number, then `p(k)` means the value obtained by replacing `x` by `k`.

Example:

$$
p(x) = x^2 - 3x - 4
$$

At `x = 2`:

$$
p(2) = 2^2 - 3(2) - 4
$$

$$
p(2) = 4 - 6 - 4
$$

$$
p(2) = -6
$$

## Zero of a Polynomial

A real number `k` is a zero of polynomial `p(x)` if:

$$
p(k) = 0
$$

Example:

$$
p(x) = x^2 - 3x - 4
$$

At `x = -1`:

$$
p(-1) = (-1)^2 - 3(-1) - 4
$$

$$
p(-1) = 1 + 3 - 4 = 0
$$

So `-1` is a zero.

At `x = 4`:

$$
p(4) = 4^2 - 3(4) - 4
$$

$$
p(4) = 16 - 12 - 4 = 0
$$

So `4` is also a zero.

## Zero of a Linear Polynomial

For:

$$
p(x) = ax + b
$$

set `p(x) = 0`:

$$
ax + b = 0
$$

$$
ax = -b
$$

$$
x = -\frac{b}{a}
$$

So the zero of `ax + b` is:

$$
-\frac{b}{a}
$$

Example:

$$
p(x) = 2x + 3
$$

Zero:

$$
x = -\frac{3}{2}
$$

---

# Unit 2C: Geometrical Meaning of Zeroes

## Core Idea

The zeroes of a polynomial are the x-coordinates of the points where the graph of:

$$
y = p(x)
$$

intersects the x-axis.

Reason:

On the x-axis, the y-coordinate is `0`.

So if the graph meets the x-axis at `x = k`, then:

$$
p(k) = 0
$$

That means `k` is a zero.

## Linear Polynomial Graph

For:

$$
y = ax + b
$$

the graph is a straight line.

It intersects the x-axis at exactly one point.

Therefore, a linear polynomial has exactly one zero.

Example:

$$
y = 2x + 3
$$

The zero is:

$$
x = -\frac{3}{2}
$$

So the graph crosses the x-axis at:

$$
\left(-\frac{3}{2}, 0\right)
$$

## Quadratic Polynomial Graph

For:

$$
y = ax^2 + bx + c
$$

the graph is a parabola.

| Condition | Shape |
|---|---|
| `a > 0` | Opens upward. |
| `a < 0` | Opens downward. |

## Possible Zeroes of a Quadratic

A quadratic polynomial can have:

| Graph Situation | Number of Zeroes |
|---|---:|
| Cuts x-axis at two distinct points | 2 zeroes |
| Touches x-axis at one point | 1 zero, repeated twice |
| Does not meet x-axis | 0 real zeroes |

Therefore a quadratic polynomial has at most `2` real zeroes.

## Example: `x^2 - 3x - 4`

Factorise:

$$
x^2 - 3x - 4 = (x + 1)(x - 4)
$$

Zeroes are:

$$
x = -1, \quad x = 4
$$

So the graph of:

$$
y = x^2 - 3x - 4
$$

intersects the x-axis at:

$$
(-1,0) \quad \text{and} \quad (4,0)
$$

## Cubic Polynomial Graph

A cubic polynomial can have at most `3` real zeroes.

Example:

$$
p(x) = x^3 - 4x
$$

Factorise:

$$
x^3 - 4x = x(x^2 - 4)
$$

$$
x^3 - 4x = x(x - 2)(x + 2)
$$

Zeroes:

$$
x = -2, \quad 0, \quad 2
$$

The graph intersects the x-axis at these three x-coordinates.

## General Graph Result

If `p(x)` is a polynomial of degree `n`, then the graph of:

$$
y = p(x)
$$

intersects the x-axis at at most `n` points.

Therefore, a polynomial of degree `n` has at most `n` real zeroes.

---

# Unit 2D: Relationship Between Zeroes and Coefficients

## Quadratic Relation

For:

$$
p(x) = ax^2 + bx + c, \quad a \ne 0
$$

let the zeroes be:

$$
\alpha \quad \text{and} \quad \beta
$$

Then:

$$
\alpha + \beta = -\frac{b}{a}
$$

and:

$$
\alpha\beta = \frac{c}{a}
$$

In words:

| Quantity | Formula |
|---|---|
| Sum of zeroes | `- coefficient of x / coefficient of x^2` |
| Product of zeroes | `constant term / coefficient of x^2` |

## Derivation

If `alpha` and `beta` are zeroes, then:

$$
p(x) = k(x - \alpha)(x - \beta)
$$

Expand:

$$
p(x) = k[x^2 - (\alpha + \beta)x + \alpha\beta]
$$

$$
p(x) = kx^2 - k(\alpha + \beta)x + k\alpha\beta
$$

Compare with:

$$
ax^2 + bx + c
$$

Then:

$$
a = k
$$

$$
b = -k(\alpha + \beta)
$$

$$
c = k\alpha\beta
$$

So:

$$
\alpha + \beta = -\frac{b}{a}
$$

and:

$$
\alpha\beta = \frac{c}{a}
$$

## Worked Example: `2x^2 - 8x + 6`

Factorise:

$$
2x^2 - 8x + 6 = 2x^2 - 6x - 2x + 6
$$

$$
= 2x(x - 3) - 2(x - 3)
$$

$$
= (2x - 2)(x - 3)
$$

$$
= 2(x - 1)(x - 3)
$$

Zeroes:

$$
x = 1, \quad x = 3
$$

Sum:

$$
1 + 3 = 4
$$

Coefficient relation:

$$
-\frac{b}{a} = -\frac{-8}{2} = 4
$$

Product:

$$
1 \times 3 = 3
$$

Coefficient relation:

$$
\frac{c}{a} = \frac{6}{2} = 3
$$

Verified.

## Worked Example: `x^2 + 7x + 10`

Factorise:

$$
x^2 + 7x + 10 = (x + 2)(x + 5)
$$

Zeroes:

$$
x = -2, \quad x = -5
$$

Sum:

$$
-2 + (-5) = -7
$$

Using coefficients:

$$
-\frac{b}{a} = -\frac{7}{1} = -7
$$

Product:

$$
(-2)(-5) = 10
$$

Using coefficients:

$$
\frac{c}{a} = \frac{10}{1} = 10
$$

Verified.

## Worked Example: `x^2 - 3`

Use identity:

$$
a^2 - b^2 = (a-b)(a+b)
$$

Here:

$$
x^2 - 3 = x^2 - (\sqrt{3})^2
$$

So:

$$
x^2 - 3 = (x - \sqrt{3})(x + \sqrt{3})
$$

Zeroes:

$$
\sqrt{3}, \quad -\sqrt{3}
$$

Sum:

$$
\sqrt{3} + (-\sqrt{3}) = 0
$$

Using coefficients:

$$
-\frac{b}{a} = -\frac{0}{1} = 0
$$

Product:

$$
(\sqrt{3})(-\sqrt{3}) = -3
$$

Using coefficients:

$$
\frac{c}{a} = \frac{-3}{1} = -3
$$

Verified.

## Forming a Quadratic Polynomial

If sum of zeroes is `S` and product of zeroes is `P`, then one quadratic polynomial is:

$$
x^2 - Sx + P
$$

Example:

Sum = `-3`, product = `2`.

Polynomial:

$$
x^2 - (-3)x + 2
$$

$$
x^2 + 3x + 2
$$

Any non-zero multiple, such as:

$$
2x^2 + 6x + 4
$$

also has the same zeroes.

---

# Unit 2E: Cubic Zeroes and Coefficients

## Cubic Relation

For:

$$
p(x) = ax^3 + bx^2 + cx + d
$$

if zeroes are:

$$
\alpha, \quad \beta, \quad \gamma
$$

then:

$$
\alpha + \beta + \gamma = -\frac{b}{a}
$$

$$
\alpha\beta + \beta\gamma + \gamma\alpha = \frac{c}{a}
$$

$$
\alpha\beta\gamma = -\frac{d}{a}
$$

## Example: `2x^3 - 5x^2 - 14x + 8`

Given zeroes:

$$
4, \quad -2, \quad \frac{1}{2}
$$

Sum:

$$
4 + (-2) + \frac{1}{2} = \frac{5}{2}
$$

Using coefficients:

$$
-\frac{b}{a} = -\frac{-5}{2} = \frac{5}{2}
$$

Product:

$$
4 \times (-2) \times \frac{1}{2} = -4
$$

Using coefficients:

$$
-\frac{d}{a} = -\frac{8}{2} = -4
$$

Sum of pairwise products:

$$
4(-2) + (-2)\left(\frac{1}{2}\right) + \left(\frac{1}{2}\right)(4)
$$

$$
= -8 -1 +2
$$

$$
= -7
$$

Using coefficients:

$$
\frac{c}{a} = \frac{-14}{2} = -7
$$

Verified.

## Examination Note

In this raw source, cubic relations are included for understanding. Most routine exercise work here focuses on quadratic zeroes and coefficient relations.

---

# Unit 2F: Solved Exercise 2.1

## Question 1: Number of Zeroes from Graphs

Rule:

Count the number of points where the graph of `y = p(x)` intersects the x-axis.

Each x-axis intersection gives one zero.

For the standard NCERT Fig. 2.10:

| Part | Number of x-axis Intersections | Number of Zeroes |
|---|---:|---:|
| (i) | 0 | 0 |
| (ii) | 1 | 1 |
| (iii) | 3 | 3 |
| (iv) | 2 | 2 |
| (v) | 4 | 4 |
| (vi) | 3 | 3 |

## How to Answer Such Questions

Write:

The number of zeroes of `p(x)` is equal to the number of points at which the graph intersects the x-axis.

Then count the intersections for each graph.

---

# Unit 2G: Solved Exercise 2.2

## Question 1: Find Zeroes and Verify Relations

### Part I: `x^2 - 2x - 8`

Factorise:

$$
x^2 - 2x - 8 = (x - 4)(x + 2)
$$

Zeroes:

$$
4, \quad -2
$$

Sum:

$$
4 + (-2) = 2
$$

Using coefficients:

$$
-\frac{b}{a} = -\frac{-2}{1} = 2
$$

Product:

$$
4(-2) = -8
$$

Using coefficients:

$$
\frac{c}{a} = \frac{-8}{1} = -8
$$

Verified.

### Part II: `4s^2 - 4s + 1`

Factorise:

$$
4s^2 - 4s + 1 = (2s - 1)^2
$$

Zeroes:

$$
s = \frac{1}{2}, \quad \frac{1}{2}
$$

Sum:

$$
\frac{1}{2} + \frac{1}{2} = 1
$$

Using coefficients:

$$
-\frac{b}{a} = -\frac{-4}{4} = 1
$$

Product:

$$
\frac{1}{2} \times \frac{1}{2} = \frac{1}{4}
$$

Using coefficients:

$$
\frac{c}{a} = \frac{1}{4}
$$

Verified.

### Part III: `6x^2 - 3 - 7x`

First write in standard form:

$$
6x^2 - 7x - 3
$$

Factorise:

$$
6x^2 - 7x - 3 = 6x^2 - 9x + 2x - 3
$$

$$
= 3x(2x - 3) + 1(2x - 3)
$$

$$
= (3x + 1)(2x - 3)
$$

Zeroes:

$$
x = -\frac{1}{3}, \quad \frac{3}{2}
$$

Sum:

$$
-\frac{1}{3} + \frac{3}{2} = \frac{-2 + 9}{6} = \frac{7}{6}
$$

Using coefficients:

$$
-\frac{b}{a} = -\frac{-7}{6} = \frac{7}{6}
$$

Product:

$$
\left(-\frac{1}{3}\right)\left(\frac{3}{2}\right) = -\frac{1}{2}
$$

Using coefficients:

$$
\frac{c}{a} = \frac{-3}{6} = -\frac{1}{2}
$$

Verified.

### Part IV: `4u^2 + 8u`

Factorise:

$$
4u^2 + 8u = 4u(u + 2)
$$

Zeroes:

$$
u = 0, \quad -2
$$

Sum:

$$
0 + (-2) = -2
$$

Using coefficients:

$$
-\frac{b}{a} = -\frac{8}{4} = -2
$$

Product:

$$
0 \times (-2) = 0
$$

Using coefficients:

$$
\frac{c}{a} = \frac{0}{4} = 0
$$

Verified.

### Part V: `t^2 - 15`

Factorise:

$$
t^2 - 15 = t^2 - (\sqrt{15})^2
$$

$$
= (t - \sqrt{15})(t + \sqrt{15})
$$

Zeroes:

$$
\sqrt{15}, \quad -\sqrt{15}
$$

Sum:

$$
\sqrt{15} + (-\sqrt{15}) = 0
$$

Using coefficients:

$$
-\frac{b}{a} = -\frac{0}{1} = 0
$$

Product:

$$
(\sqrt{15})(-\sqrt{15}) = -15
$$

Using coefficients:

$$
\frac{c}{a} = \frac{-15}{1} = -15
$$

Verified.

### Part VI: `3x^2 - x - 4`

Factorise:

$$
3x^2 - x - 4 = 3x^2 + 3x - 4x - 4
$$

$$
= 3x(x + 1) - 4(x + 1)
$$

$$
= (3x - 4)(x + 1)
$$

Zeroes:

$$
x = \frac{4}{3}, \quad -1
$$

Sum:

$$
\frac{4}{3} + (-1) = \frac{1}{3}
$$

Using coefficients:

$$
-\frac{b}{a} = -\frac{-1}{3} = \frac{1}{3}
$$

Product:

$$
\frac{4}{3}(-1) = -\frac{4}{3}
$$

Using coefficients:

$$
\frac{c}{a} = \frac{-4}{3} = -\frac{4}{3}
$$

Verified.

## Question 2: Find Quadratic Polynomial from Sum and Product

Use:

$$
x^2 - Sx + P
$$

where `S` is the sum of zeroes and `P` is the product.

### Part I: Sum `1/4`, Product `-1`

$$
x^2 - \frac{1}{4}x - 1
$$

Multiplying by `4` to avoid fractions:

$$
4x^2 - x - 4
$$

**Answer:** `4x^2 - x - 4`.

### Part II: Sum `sqrt(2)`, Product `1/3`

$$
x^2 - \sqrt{2}x + \frac{1}{3}
$$

Multiplying by `3`:

$$
3x^2 - 3\sqrt{2}x + 1
$$

**Answer:** `3x^2 - 3sqrt(2)x + 1`.

### Part III: Sum `0`, Product `sqrt(5)`

$$
x^2 - 0x + \sqrt{5}
$$

So:

$$
x^2 + \sqrt{5}
$$

**Answer:** `x^2 + sqrt(5)`.

### Part IV: Sum `1`, Product `1`

$$
x^2 - x + 1
$$

**Answer:** `x^2 - x + 1`.

### Part V: Sum `-1/4`, Product `1/4`

$$
x^2 - \left(-\frac{1}{4}\right)x + \frac{1}{4}
$$

$$
x^2 + \frac{1}{4}x + \frac{1}{4}
$$

Multiplying by `4`:

$$
4x^2 + x + 1
$$

**Answer:** `4x^2 + x + 1`.

### Part VI: Sum `4`, Product `1`

$$
x^2 - 4x + 1
$$

**Answer:** `x^2 - 4x + 1`.

---

# Unit 2H: Common Mistakes and Corrections

| Mistake | Correct Understanding |
|---|---|
| Calling any expression with `x` a polynomial. | Powers of variables must be non-negative integers. |
| Forgetting `a != 0` in `ax^2 + bx + c`. | If `a = 0`, it is not quadratic. |
| Thinking zero of polynomial means polynomial itself is zero everywhere. | A zero is an input value that makes `p(x) = 0`. |
| Counting turning points instead of x-axis intersections. | Number of zeroes equals number of x-axis intersections. |
| Using `b/a` for sum of zeroes. | Correct formula is `-b/a`. |
| Using `-c/a` for product. | Correct formula is `c/a`. |
| Forgetting repeated zeroes. | A graph touching the x-axis has one visible zero but it may be repeated. |
| Not writing polynomial in standard form. | Arrange as `ax^2 + bx + c` before reading coefficients. |
| Thinking only one polynomial exists for given sum and product. | Any non-zero multiple has the same zeroes. |

---

# Unit 2I: Quick Revision Tables

## Degree Names

| Degree | Name | General Form |
|---:|---|---|
| 1 | Linear | `ax + b` |
| 2 | Quadratic | `ax^2 + bx + c` |
| 3 | Cubic | `ax^3 + bx^2 + cx + d` |

## Zeroes and Graphs

| Polynomial Type | Maximum Number of Zeroes | Graph Meaning |
|---|---:|---|
| Linear | 1 | Straight line intersects x-axis once. |
| Quadratic | 2 | Parabola may cut, touch, or miss x-axis. |
| Cubic | 3 | Cubic curve may intersect x-axis up to three times. |
| Degree `n` | `n` | Graph can intersect x-axis at most `n` times. |

## Quadratic Relations

| Polynomial | Sum of Zeroes | Product of Zeroes |
|---|---|---|
| `ax^2 + bx + c` | `-b/a` | `c/a` |

## Forming Quadratic

| Given | Polynomial |
|---|---|
| Sum `S`, product `P` | `x^2 - Sx + P` |

---

# Final Study Strategy

## What to Memorise

Memorise:

1. Definitions of linear, quadratic, and cubic polynomial.
2. Meaning of zero of a polynomial.
3. Graph meaning of zeroes.
4. Quadratic relations: sum `= -b/a`, product `= c/a`.
5. Polynomial from sum and product: `x^2 - Sx + P`.

## What to Practise

Practise:

| Skill | Practice Method |
|---|---|
| Identifying degree | Circle the highest power of the variable. |
| Finding zeroes | Factorise and set each factor equal to zero. |
| Verification | Compare actual sum/product with `-b/a` and `c/a`. |
| Graph questions | Count x-axis intersections only. |
| Forming polynomial | Substitute sum and product into `x^2 - Sx + P`. |

## One-Page Chapter Summary

A polynomial has terms with non-negative integer powers of the variable. A polynomial of degree 1 is linear, degree 2 is quadratic, and degree 3 is cubic. A zero of `p(x)` is a real number `k` for which `p(k) = 0`.

Graphically, zeroes of `p(x)` are the x-coordinates of the points where the graph of `y = p(x)` intersects the x-axis. A quadratic polynomial can have at most two zeroes, and a cubic polynomial can have at most three zeroes.

For a quadratic polynomial `ax^2 + bx + c`, if zeroes are `alpha` and `beta`, then `alpha + beta = -b/a` and `alpha beta = c/a`. If the sum of zeroes is `S` and product is `P`, one polynomial is `x^2 - Sx + P`.
