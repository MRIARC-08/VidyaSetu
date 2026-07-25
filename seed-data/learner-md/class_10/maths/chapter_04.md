# Chapter 4: Quadratic Equations
### NCERT Class 10 - Maths

---

## Chapter at a Glance

| Detail | Learner-Friendly Information |
|---|---|
| **Class** | 10 |
| **Subject** | Maths |
| **Chapter** | 4 |
| **Core Theme** | Quadratic equations, roots, factorisation method, quadratic formula, discriminant, and real-life applications. |
| **Main Skills** | Identifying quadratic equations, forming equations from word problems, solving by factorisation, using discriminant to decide nature of roots. |
| **Important Idea** | The roots of `ax^2 + bx + c = 0` are the zeroes of the polynomial `ax^2 + bx + c`. |

---

## Section Structure

| Unit | Topic | Main Learning Focus |
|---|---|---|
| **4A** | Meaning of Quadratic Equation | Standard form and examples. |
| **4B** | Forming Quadratic Equations | Translating real-life situations into equations. |
| **4C** | Roots of Quadratic Equations | Meaning of root and relation to zeroes. |
| **4D** | Factorisation Method | Splitting middle term and equating factors to zero. |
| **4E** | Quadratic Formula and Discriminant | Formula, `D = b^2 - 4ac`, and nature of roots. |
| **4F** | Solved Exercises | Complete solutions for Exercises 4.1, 4.2, and 4.3. |

---

## Learning Outcomes

By the end of this chapter, you should be able to:

| Outcome | You Should Be Able To... |
|---|---|
| **Identify quadratic equations** | Simplify equations and check whether they reduce to degree 2. |
| **Write standard form** | Convert equations to `ax^2 + bx + c = 0`, where `a != 0`. |
| **Find roots** | Solve factorable quadratic equations. |
| **Reject invalid roots** | Reject negative roots when the variable represents length, age, speed, or quantity. |
| **Use discriminant** | Decide whether roots are distinct real, equal real, or not real. |
| **Use quadratic formula** | Find roots when factorisation is difficult. |
| **Model word problems** | Form quadratic equations from area, age, speed, number, and geometry contexts. |

---

## Key Terms

| Term | Meaning |
|---|---|
| **Quadratic polynomial** | Polynomial of form `ax^2 + bx + c`, where `a != 0`. |
| **Quadratic equation** | Equation of form `ax^2 + bx + c = 0`, where `a != 0`. |
| **Standard form** | `ax^2 + bx + c = 0`. |
| **Root** | Value of the variable that satisfies the quadratic equation. |
| **Solution** | Same as root for an equation. |
| **Factorisation method** | Solving by writing the quadratic as product of two linear factors. |
| **Quadratic formula** | Formula giving roots of `ax^2 + bx + c = 0`. |
| **Discriminant** | `b^2 - 4ac`, used to decide nature of roots. |
| **Real roots** | Roots that are real numbers. |
| **Equal roots** | Both roots are the same number. |

---

## Formula Bank

## Standard Form

$$
ax^2 + bx + c = 0, \quad a \ne 0
$$

## Quadratic Formula

For:

$$
ax^2 + bx + c = 0
$$

the roots are:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

provided:

$$
b^2 - 4ac \ge 0
$$

## Discriminant

$$
D = b^2 - 4ac
$$

## Nature of Roots

| Discriminant | Nature of Roots |
|---|---|
| `D > 0` | Two distinct real roots. |
| `D = 0` | Two equal real roots. |
| `D < 0` | No real roots. |

## Repeated Root

If:

$$
D = 0
$$

then:

$$
x = -\frac{b}{2a}
$$

---

# Unit 4A: Meaning of Quadratic Equation

## From Polynomial to Equation

A quadratic polynomial has form:

$$
ax^2 + bx + c
$$

where `a`, `b`, and `c` are real numbers and:

$$
a \ne 0
$$

When we equate this polynomial to zero, we get a quadratic equation:

$$
ax^2 + bx + c = 0
$$

## Examples of Quadratic Equations

| Equation | Why Quadratic? |
|---|---|
| `2x^2 + x - 300 = 0` | Highest power is `2`. |
| `2x^2 - 3x + 1 = 0` | Standard quadratic form. |
| `-3x^2 + 4x + 2 = 0` | `a = -3`, and `a != 0`. |
| `1 - x^2 + 300 = 0` | Can be written as `-x^2 + 301 = 0`. |

## Not Every Equation That Looks Quadratic Stays Quadratic

You must simplify before deciding.

Example:

$$
x(x+1) + 8 = (x+2)(x-2)
$$

Expand:

$$
x^2 + x + 8 = x^2 - 4
$$

Cancel `x^2`:

$$
x + 12 = 0
$$

This is linear, not quadratic.

## Some Equations That Look Cubic Become Quadratic

Example:

$$
(x+2)^3 = x^3 - 4
$$

Expand left:

$$
x^3 + 6x^2 + 12x + 8 = x^3 - 4
$$

Cancel `x^3`:

$$
6x^2 + 12x + 12 = 0
$$

Divide by `6`:

$$
x^2 + 2x + 2 = 0
$$

This is quadratic.

---

# Unit 4B: Forming Quadratic Equations

## Area of Prayer Hall

A prayer hall has area `300 m^2`.

Let breadth be:

$$
x
$$

Length is one metre more than twice the breadth:

$$
2x + 1
$$

Area:

$$
x(2x + 1) = 300
$$

So:

$$
2x^2 + x = 300
$$

Standard form:

$$
2x^2 + x - 300 = 0
$$

## Marble Problem

John and Jivanti together have `45` marbles.

Let John have:

$$
x
$$

Then Jivanti has:

$$
45 - x
$$

After both lose `5` marbles:

| Person | Marbles Left |
|---|---|
| John | `x - 5` |
| Jivanti | `40 - x` |

Product is `124`:

$$
(x - 5)(40 - x) = 124
$$

Expand:

$$
-x^2 + 45x - 200 = 124
$$

Standard form:

$$
x^2 - 45x + 324 = 0
$$

## Toy Production Problem

Let number of toys produced be:

$$
x
$$

Cost per toy is:

$$
55 - x
$$

Total cost is `750`:

$$
x(55 - x) = 750
$$

So:

$$
55x - x^2 = 750
$$

Standard form:

$$
x^2 - 55x + 750 = 0
$$

---

# Unit 4C: Roots of a Quadratic Equation

## Meaning of Root

A real number `alpha` is a root of:

$$
ax^2 + bx + c = 0
$$

if:

$$
a\alpha^2 + b\alpha + c = 0
$$

In simple words, a root is a value of `x` that makes the equation true.

## Roots and Zeroes

The roots of:

$$
ax^2 + bx + c = 0
$$

are the same as the zeroes of the polynomial:

$$
ax^2 + bx + c
$$

## Number of Roots

A quadratic equation can have at most two real roots.

It may have:

1. Two distinct real roots.
2. Two equal real roots.
3. No real roots.

---

# Unit 4D: Factorisation Method

## Method

To solve:

$$
ax^2 + bx + c = 0
$$

by factorisation:

1. Factorise `ax^2 + bx + c` into two linear factors.
2. Use the rule: if product of two factors is zero, at least one factor is zero.
3. Set each factor equal to zero.
4. Solve the resulting linear equations.

## Worked Example: `2x^2 - 5x + 3 = 0`

Split middle term:

$$
2x^2 - 5x + 3 = 2x^2 - 2x - 3x + 3
$$

Group:

$$
= 2x(x - 1) - 3(x - 1)
$$

Factor:

$$
= (2x - 3)(x - 1)
$$

So:

$$
(2x - 3)(x - 1) = 0
$$

Therefore:

$$
2x - 3 = 0
$$

or:

$$
x - 1 = 0
$$

Roots:

$$
x = \frac{3}{2}, \quad x = 1
$$

## Worked Example: `6x^2 - x - 2 = 0`

Factorise:

$$
6x^2 - x - 2 = 6x^2 + 3x - 4x - 2
$$

$$
= 3x(2x + 1) - 2(2x + 1)
$$

$$
= (3x - 2)(2x + 1)
$$

Set factors to zero:

$$
3x - 2 = 0
$$

or:

$$
2x + 1 = 0
$$

Roots:

$$
x = \frac{2}{3}, \quad x = -\frac{1}{2}
$$

## Worked Example: Repeated Root

Equation:

$$
3x^2 - 2\sqrt{6}x + 2 = 0
$$

Factorise:

$$
3x^2 - 2\sqrt{6}x + 2 = (\sqrt{3}x - \sqrt{2})^2
$$

So:

$$
(\sqrt{3}x - \sqrt{2})^2 = 0
$$

Therefore:

$$
\sqrt{3}x - \sqrt{2} = 0
$$

Root:

$$
x = \frac{\sqrt{2}}{\sqrt{3}}
$$

The same root is repeated.

## Rejecting Invalid Roots

In word problems, a root may be mathematically valid but physically impossible.

Examples:

| Variable Represents | Invalid Root Type |
|---|---|
| Length | Negative length rejected. |
| Breadth | Negative breadth rejected. |
| Age | Negative age rejected. |
| Number of articles | Negative or fractional articles rejected if count required. |
| Speed | Non-positive speed rejected. |

---

# Unit 4E: Quadratic Formula and Discriminant

## Quadratic Formula

For:

$$
ax^2 + bx + c = 0
$$

roots are:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

This formula is useful when factorisation is difficult.

## Discriminant

The expression:

$$
D = b^2 - 4ac
$$

is called the discriminant.

It decides the nature of roots.

## Nature of Roots

| Value of `D` | Roots |
|---|---|
| `D > 0` | Two distinct real roots. |
| `D = 0` | Two equal real roots. |
| `D < 0` | No real roots. |

## Example: No Real Roots

Equation:

$$
2x^2 - 4x + 3 = 0
$$

Here:

$$
a = 2, \quad b = -4, \quad c = 3
$$

Discriminant:

$$
D = (-4)^2 - 4(2)(3)
$$

$$
D = 16 - 24
$$

$$
D = -8
$$

Since `D < 0`, the equation has no real roots.

## Example: Equal Real Roots

Equation:

$$
3x^2 - 2x + \frac{1}{3} = 0
$$

Here:

$$
a = 3, \quad b = -2, \quad c = \frac{1}{3}
$$

Discriminant:

$$
D = (-2)^2 - 4(3)\left(\frac{1}{3}\right)
$$

$$
D = 4 - 4
$$

$$
D = 0
$$

Roots are equal:

$$
x = -\frac{b}{2a}
$$

$$
x = \frac{2}{6}
$$

$$
x = \frac{1}{3}
$$

So both roots are:

$$
\frac{1}{3}, \quad \frac{1}{3}
$$

---

# Unit 4F: Solved Exercise 4.1

## Question 1: Check Whether the Equations Are Quadratic

### Part I

$$
(x + 1)^2 = 2(x - 3)
$$

Expand:

$$
x^2 + 2x + 1 = 2x - 6
$$

Bring all terms to one side:

$$
x^2 + 7 = 0
$$

This is quadratic.

### Part II

$$
x^2 - 2x = (-2)(3 - x)
$$

Right side:

$$
(-2)(3 - x) = -6 + 2x
$$

So:

$$
x^2 - 2x = -6 + 2x
$$

$$
x^2 - 4x + 6 = 0
$$

This is quadratic.

### Part III

$$
(x - 2)(x + 1) = (x - 1)(x + 3)
$$

Expand:

$$
x^2 - x - 2 = x^2 + 2x - 3
$$

Cancel `x^2`:

$$
-x - 2 = 2x - 3
$$

$$
-3x + 1 = 0
$$

This is linear, not quadratic.

### Part IV

$$
(x - 3)(2x + 1) = x(x + 5)
$$

Expand:

$$
2x^2 - 5x - 3 = x^2 + 5x
$$

Bring all terms to one side:

$$
x^2 - 10x - 3 = 0
$$

This is quadratic.

### Part V

$$
(2x - 1)(x - 3) = (x + 5)(x - 1)
$$

Expand:

$$
2x^2 - 7x + 3 = x^2 + 4x - 5
$$

Bring all terms to one side:

$$
x^2 - 11x + 8 = 0
$$

This is quadratic.

### Part VI

$$
x^2 + 3x + 1 = (x - 2)^2
$$

Right side:

$$
(x - 2)^2 = x^2 - 4x + 4
$$

So:

$$
x^2 + 3x + 1 = x^2 - 4x + 4
$$

Cancel `x^2`:

$$
7x - 3 = 0
$$

This is linear, not quadratic.

### Part VII

$$
(x + 2)^3 = 2x(x^2 - 1)
$$

Expand:

$$
x^3 + 6x^2 + 12x + 8 = 2x^3 - 2x
$$

Bring all terms to one side:

$$
-x^3 + 6x^2 + 14x + 8 = 0
$$

This is cubic, not quadratic.

### Part VIII

$$
x^3 - 4x^2 - x + 1 = (x - 2)^3
$$

Right side:

$$
(x - 2)^3 = x^3 - 6x^2 + 12x - 8
$$

So:

$$
x^3 - 4x^2 - x + 1 = x^3 - 6x^2 + 12x - 8
$$

Cancel `x^3` and simplify:

$$
2x^2 - 13x + 9 = 0
$$

This is quadratic.

## Question 2: Represent Situations as Quadratic Equations

### Part I: Rectangular Plot

Let breadth be:

$$
x
$$

Length is one more than twice breadth:

$$
2x + 1
$$

Area:

$$
x(2x + 1) = 528
$$

Standard form:

$$
2x^2 + x - 528 = 0
$$

### Part II: Consecutive Positive Integers

Let the integers be:

$$
x \quad \text{and} \quad x + 1
$$

Product:

$$
x(x + 1) = 306
$$

Standard form:

$$
x^2 + x - 306 = 0
$$

### Part III: Rohan and His Mother

Let Rohan's present age be:

$$
x
$$

Mother's present age:

$$
x + 26
$$

After 3 years:

| Person | Age |
|---|---|
| Rohan | `x + 3` |
| Mother | `x + 29` |

Product:

$$
(x + 3)(x + 29) = 360
$$

Expand:

$$
x^2 + 32x + 87 = 360
$$

Standard form:

$$
x^2 + 32x - 273 = 0
$$

### Part IV: Train Speed

Let speed of train be:

$$
x \ \text{km/h}
$$

Original time:

$$
\frac{480}{x}
$$

Reduced speed:

$$
x - 8
$$

New time:

$$
\frac{480}{x - 8}
$$

New time is 3 hours more:

$$
\frac{480}{x - 8} = \frac{480}{x} + 3
$$

Multiply by `x(x - 8)`:

$$
480x = 480(x - 8) + 3x(x - 8)
$$

Simplify:

$$
480x = 480x - 3840 + 3x^2 - 24x
$$

$$
3x^2 - 24x - 3840 = 0
$$

Divide by `3`:

$$
x^2 - 8x - 1280 = 0
$$

---

# Unit 4G: Solved Exercise 4.2

## Question 1: Find Roots by Factorisation

### Part I

$$
x^2 - 3x - 10 = 0
$$

Factorise:

$$
x^2 - 3x - 10 = (x - 5)(x + 2)
$$

So:

$$
x = 5, \quad x = -2
$$

### Part II

$$
2x^2 + x - 6 = 0
$$

Factorise:

$$
2x^2 + x - 6 = 2x^2 + 4x - 3x - 6
$$

$$
= 2x(x + 2) - 3(x + 2)
$$

$$
= (2x - 3)(x + 2)
$$

Roots:

$$
x = \frac{3}{2}, \quad x = -2
$$

### Part III

$$
\sqrt{2}x^2 + 7x + 5\sqrt{2} = 0
$$

Factorise:

$$
\sqrt{2}x^2 + 7x + 5\sqrt{2}
$$

Split middle term:

$$
= \sqrt{2}x^2 + 5x + 2x + 5\sqrt{2}
$$

Group:

$$
= x(\sqrt{2}x + 5) + \sqrt{2}(\sqrt{2}x + 5)
$$

Factor:

$$
= (x + \sqrt{2})(\sqrt{2}x + 5)
$$

So roots are:

$$
x = -\sqrt{2}
$$

and:

$$
\sqrt{2}x + 5 = 0
$$

$$
x = -\frac{5}{\sqrt{2}} = -\frac{5\sqrt{2}}{2}
$$

**Answer:** `-sqrt(2)` and `-5sqrt(2)/2`.

### Part IV

$$
2x^2 - x + \frac{1}{8} = 0
$$

Multiply by `8`:

$$
16x^2 - 8x + 1 = 0
$$

Factorise:

$$
(4x - 1)^2 = 0
$$

So:

$$
4x - 1 = 0
$$

$$
x = \frac{1}{4}
$$

**Answer:** Roots are `1/4` and `1/4`.

### Part V

$$
100x^2 - 20x + 1 = 0
$$

Factorise:

$$
100x^2 - 20x + 1 = (10x - 1)^2
$$

So:

$$
10x - 1 = 0
$$

$$
x = \frac{1}{10}
$$

**Answer:** Roots are `1/10` and `1/10`.

## Question 2: Solve the Problems Given in Example 1

### Part I: Marbles

Equation from Example 1:

$$
x^2 - 45x + 324 = 0
$$

Factorise:

$$
x^2 - 45x + 324 = (x - 36)(x - 9)
$$

Roots:

$$
x = 36 \quad \text{or} \quad x = 9
$$

If John had `36`, Jivanti had:

$$
45 - 36 = 9
$$

If John had `9`, Jivanti had:

$$
45 - 9 = 36
$$

**Answer:** They had `36` and `9` marbles, in either order.

### Part II: Toys

Equation from Example 1:

$$
x^2 - 55x + 750 = 0
$$

Factorise:

$$
x^2 - 55x + 750 = (x - 25)(x - 30)
$$

Roots:

$$
x = 25 \quad \text{or} \quad x = 30
$$

If `25` toys are produced, cost per toy:

$$
55 - 25 = 30
$$

If `30` toys are produced, cost per toy:

$$
55 - 30 = 25
$$

Both give total cost:

$$
25 \times 30 = 750
$$

and:

$$
30 \times 25 = 750
$$

**Answer:** Number of toys is `25` or `30`.

## Question 3: Two Numbers with Sum 27 and Product 182

Let one number be:

$$
x
$$

Other number:

$$
27 - x
$$

Product:

$$
x(27 - x) = 182
$$

So:

$$
27x - x^2 = 182
$$

$$
x^2 - 27x + 182 = 0
$$

Factorise:

$$
x^2 - 27x + 182 = (x - 13)(x - 14)
$$

Roots:

$$
x = 13, \quad 14
$$

**Answer:** The numbers are `13` and `14`.

## Question 4: Consecutive Positive Integers Whose Squares Sum to 365

Let the integers be:

$$
x \quad \text{and} \quad x + 1
$$

Given:

$$
x^2 + (x + 1)^2 = 365
$$

Expand:

$$
x^2 + x^2 + 2x + 1 = 365
$$

$$
2x^2 + 2x - 364 = 0
$$

Divide by `2`:

$$
x^2 + x - 182 = 0
$$

Factorise:

$$
(x + 14)(x - 13) = 0
$$

Roots:

$$
x = 13, \quad x = -14
$$

Since integers are positive:

$$
x = 13
$$

**Answer:** The integers are `13` and `14`.

## Question 5: Right Triangle

Let base be:

$$
x
$$

Altitude is `7 cm` less:

$$
x - 7
$$

Hypotenuse:

$$
13
$$

Using Pythagoras theorem:

$$
x^2 + (x - 7)^2 = 13^2
$$

$$
x^2 + x^2 - 14x + 49 = 169
$$

$$
2x^2 - 14x - 120 = 0
$$

Divide by `2`:

$$
x^2 - 7x - 60 = 0
$$

Factorise:

$$
(x - 12)(x + 5) = 0
$$

Roots:

$$
x = 12, \quad -5
$$

Reject negative length.

Base:

$$
12 \ \text{cm}
$$

Altitude:

$$
12 - 7 = 5 \ \text{cm}
$$

**Answer:** Other two sides are `12 cm` and `5 cm`.

## Question 6: Pottery Articles

Let number of articles be:

$$
x
$$

Cost per article is 3 more than twice number of articles:

$$
2x + 3
$$

Total cost:

$$
x(2x + 3) = 90
$$

Standard form:

$$
2x^2 + 3x - 90 = 0
$$

Factorise:

$$
2x^2 + 3x - 90 = 2x^2 + 15x - 12x - 90
$$

$$
= x(2x + 15) - 6(2x + 15)
$$

$$
= (x - 6)(2x + 15)
$$

Roots:

$$
x = 6, \quad x = -\frac{15}{2}
$$

Reject negative number of articles.

So:

$$
x = 6
$$

Cost per article:

$$
2(6) + 3 = 15
$$

**Answer:** `6` articles were produced, and each article cost Rs `15`.

---

# Unit 4H: Solved Exercise 4.3

## Question 1: Nature of Roots and Roots if Real

### Part I

$$
2x^2 - 3x + 5 = 0
$$

Here:

$$
a = 2, \quad b = -3, \quad c = 5
$$

Discriminant:

$$
D = b^2 - 4ac
$$

$$
D = (-3)^2 - 4(2)(5)
$$

$$
D = 9 - 40
$$

$$
D = -31
$$

Since `D < 0`, there are no real roots.

### Part II

$$
3x^2 - 4\sqrt{3}x + 4 = 0
$$

Here:

$$
a = 3, \quad b = -4\sqrt{3}, \quad c = 4
$$

Discriminant:

$$
D = (-4\sqrt{3})^2 - 4(3)(4)
$$

$$
D = 48 - 48
$$

$$
D = 0
$$

So roots are equal.

Root:

$$
x = -\frac{b}{2a}
$$

$$
x = \frac{4\sqrt{3}}{6}
$$

$$
x = \frac{2\sqrt{3}}{3}
$$

**Answer:** Equal real roots, both `2sqrt(3)/3`.

### Part III

$$
2x^2 - 6x + 3 = 0
$$

Here:

$$
a = 2, \quad b = -6, \quad c = 3
$$

Discriminant:

$$
D = (-6)^2 - 4(2)(3)
$$

$$
D = 36 - 24
$$

$$
D = 12
$$

Since `D > 0`, roots are distinct and real.

Using formula:

$$
x = \frac{-b \pm \sqrt{D}}{2a}
$$

$$
x = \frac{6 \pm \sqrt{12}}{4}
$$

$$
x = \frac{6 \pm 2\sqrt{3}}{4}
$$

$$
x = \frac{3 \pm \sqrt{3}}{2}
$$

**Answer:** Roots are `(3 + sqrt(3))/2` and `(3 - sqrt(3))/2`.

## Question 2: Values of `k` for Equal Roots

### Part I

$$
2x^2 + kx + 3 = 0
$$

For equal roots:

$$
D = 0
$$

Here:

$$
a = 2, \quad b = k, \quad c = 3
$$

So:

$$
k^2 - 4(2)(3) = 0
$$

$$
k^2 - 24 = 0
$$

$$
k^2 = 24
$$

$$
k = \pm 2\sqrt{6}
$$

**Answer:** `k = 2sqrt(6)` or `k = -2sqrt(6)`.

### Part II

$$
kx(x - 2) + 6 = 0
$$

Expand:

$$
kx^2 - 2kx + 6 = 0
$$

Here:

$$
a = k, \quad b = -2k, \quad c = 6
$$

For equal roots:

$$
D = 0
$$

$$
(-2k)^2 - 4(k)(6) = 0
$$

$$
4k^2 - 24k = 0
$$

$$
4k(k - 6) = 0
$$

So:

$$
k = 0 \quad \text{or} \quad k = 6
$$

But if `k = 0`, the equation becomes:

$$
6 = 0
$$

which is not a quadratic equation.

Therefore:

$$
k = 6
$$

**Answer:** `k = 6`.

## Question 3: Rectangular Mango Grove

Let breadth be:

$$
x
$$

Length is twice breadth:

$$
2x
$$

Area:

$$
2x^2 = 800
$$

$$
x^2 = 400
$$

$$
x = 20
$$

Reject negative length.

Breadth:

$$
20 \ \text{m}
$$

Length:

$$
40 \ \text{m}
$$

**Answer:** Yes, it is possible. Length is `40 m`, breadth is `20 m`.

## Question 4: Ages of Two Friends

Let one friend's present age be:

$$
x
$$

Other friend's present age:

$$
20 - x
$$

Four years ago:

$$
x - 4
$$

and:

$$
16 - x
$$

Product was `48`:

$$
(x - 4)(16 - x) = 48
$$

Expand:

$$
-x^2 + 20x - 64 = 48
$$

Bring to standard form:

$$
x^2 - 20x + 112 = 0
$$

Discriminant:

$$
D = (-20)^2 - 4(1)(112)
$$

$$
D = 400 - 448
$$

$$
D = -48
$$

Since `D < 0`, the equation has no real roots.

**Answer:** The situation is not possible.

## Question 5: Rectangular Park

Let length be:

$$
x
$$

Breadth:

$$
40 - x
$$

because perimeter is `80 m`, so:

$$
2(l + b) = 80
$$

and:

$$
l + b = 40
$$

Area is `400 m^2`:

$$
x(40 - x) = 400
$$

Expand:

$$
40x - x^2 = 400
$$

Standard form:

$$
x^2 - 40x + 400 = 0
$$

Factorise:

$$
(x - 20)^2 = 0
$$

So:

$$
x = 20
$$

Then:

$$
40 - x = 20
$$

**Answer:** Yes, it is possible. The park is a square of side `20 m`.

---

# Unit 4I: Common Mistakes and Corrections

| Mistake | Correct Understanding |
|---|---|
| Deciding degree before simplifying. | Always expand and simplify first. |
| Forgetting `a != 0`. | If coefficient of `x^2` becomes zero, it is not quadratic. |
| Solving only one factor after factorisation. | Set both linear factors equal to zero. |
| Accepting negative length or age. | Reject roots invalid in the context. |
| Using discriminant as `b^2 + 4ac`. | Correct discriminant is `b^2 - 4ac`. |
| Saying `D = 0` means no roots. | `D = 0` means two equal real roots. |
| Forgetting denominator `2a` in formula. | Roots are `(-b +/- sqrt(D))/(2a)`. |
| Not converting word problems into standard form. | Put all terms on one side before solving. |

---

# Unit 4J: Quick Revision Tables

## Identifying Quadratic Equations

| After Simplification | Type |
|---|---|
| Highest power is `2` and coefficient of `x^2` is non-zero | Quadratic |
| Highest power is `1` | Linear |
| Highest power is `3` | Cubic |
| Variable in denominator or radical | Not a quadratic equation in standard polynomial form |

## Factorisation Steps

| Step | Action |
|---|---|
| 1 | Write equation as `ax^2 + bx + c = 0`. |
| 2 | Split middle term. |
| 3 | Factor by grouping. |
| 4 | Set each factor equal to zero. |
| 5 | Solve linear equations. |
| 6 | Check context if word problem. |

## Discriminant

| `D = b^2 - 4ac` | Nature |
|---|---|
| `D > 0` | Two distinct real roots |
| `D = 0` | Two equal real roots |
| `D < 0` | No real roots |

## Common Word Problem Models

| Situation | Model |
|---|---|
| Rectangle area | `length x breadth = area` |
| Consecutive integers | `x` and `x + 1` |
| Ages after years | Present age plus years |
| Train speed | `time = distance/speed` |
| Right triangle | `base^2 + altitude^2 = hypotenuse^2` |

---

# Final Study Strategy

## What to Memorise

Memorise:

1. Standard form `ax^2 + bx + c = 0`.
2. Meaning of root.
3. Factorisation method.
4. Quadratic formula.
5. Discriminant `D = b^2 - 4ac`.
6. Nature of roots for `D > 0`, `D = 0`, and `D < 0`.

## What to Practise

Practise:

| Skill | Practice Method |
|---|---|
| Checking quadratic | Expand, simplify, and inspect degree. |
| Factorisation | Split middle term and group. |
| Word problems | Define variable and write relation carefully. |
| Discriminant | Identify `a`, `b`, `c` and compute `D`. |
| Quadratic formula | Use when factorisation is not quick. |
| Context checking | Reject negative ages, lengths, speeds, and quantities. |

## One-Page Chapter Summary

A quadratic equation is an equation of the form `ax^2 + bx + c = 0`, where `a != 0`. A root is a value of `x` that satisfies the equation. The roots of a quadratic equation are the same as the zeroes of the corresponding quadratic polynomial.

Quadratic equations can be solved by factorisation when the expression can be written as a product of two linear factors. Each factor is then equated to zero. The quadratic formula gives roots as `(-b +/- sqrt(b^2 - 4ac))/(2a)`.

The discriminant `D = b^2 - 4ac` tells the nature of roots. If `D > 0`, roots are two distinct real numbers. If `D = 0`, roots are real and equal. If `D < 0`, there are no real roots. In word problems, always reject roots that do not make sense physically, such as negative length, age, speed, or count.
