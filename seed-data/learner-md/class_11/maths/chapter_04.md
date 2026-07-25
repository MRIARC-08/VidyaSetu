# Chapter 4: Complex Numbers And Quadratic Equations

Class: 11  
Subject: Mathematics  
Input file used: `data/class_11/maths/chapter_04.md`  
Formatted file: `data_learner_md/class_11/maths/chapter_04.md`

## Learning Purpose

This chapter extends the real number system to complex numbers.

In the real number system, an equation such as:

$$
x^2 + 1 = 0
$$

has no solution because it requires:

$$
x^2 = -1
$$

and the square of a real number cannot be negative.

To solve such equations, mathematics introduces a new number:

$$
i = \sqrt{-1}
$$

with:

$$
i^2 = -1
$$

Once this is done, expressions such as `a + ib` become meaningful and quadratic equations with negative discriminant can be solved.

## Core Learning Outcomes

After studying this chapter, you should be able to:

1. Explain why complex numbers are needed.
2. Define the imaginary unit `i`.
3. Write a complex number in the standard form `a + ib`.
4. Identify real and imaginary parts.
5. Check equality of complex numbers.
6. Add, subtract, multiply, and divide complex numbers.
7. Find powers of `i`.
8. Simplify square roots of negative real numbers.
9. Avoid the false rule `sqrt(a)sqrt(b)=sqrt(ab)` when both a and b are negative.
10. Use algebraic identities with complex numbers.
11. Find the conjugate of a complex number.
12. Find the modulus of a complex number.
13. Find the multiplicative inverse of a non-zero complex number.
14. Represent complex numbers on the Argand plane.
15. Write simple complex numbers in polar form.
16. Solve quadratic equations whose discriminant is negative.

## Chapter Snapshot

| Topic | Main Idea |
|---|---|
| Imaginary unit | `i^2 = -1` |
| Complex number | Number of the form `a + ib`, where a and b are real |
| Real part | a in `a + ib` |
| Imaginary part | b in `a + ib` |
| Equality | Real parts equal and imaginary parts equal |
| Addition | Add real parts and imaginary parts separately |
| Multiplication | Use distributive law and `i^2 = -1` |
| Division | Multiply numerator and denominator by conjugate of denominator |
| Conjugate | Change sign of imaginary part |
| Modulus | Distance from origin in Argand plane |
| Argand plane | Geometric plane for complex numbers |
| Polar form | `r(cos theta + i sin theta)` |
| Complex roots | Quadratic roots when discriminant is negative |

## Essential Notation

| Notation | Meaning |
|---|---|
| `i` | Imaginary unit |
| `i^2 = -1` | Defining property of i |
| `z = a + ib` | Standard form of a complex number |
| `Re z` | Real part of z |
| `Im z` | Imaginary part of z |
| `bar z` | Conjugate of z |
| `|z|` | Modulus of z |
| `arg z` | Argument of z |

In formulas:

$$
z = a + ib
$$

$$
\operatorname{Re}(z) = a
$$

$$
\operatorname{Im}(z) = b
$$

## 1. Why Complex Numbers Are Needed

The equation:

$$
x^2 + 1 = 0
$$

leads to:

$$
x^2 = -1
$$

No real number has square `-1`.

So we introduce:

$$
i = \sqrt{-1}
$$

This gives:

$$
i^2 = -1
$$

Now:

$$
x^2 + 1 = 0
$$

has two solutions:

$$
x = i
$$

and:

$$
x = -i
$$

## 2. Definition Of A Complex Number

A complex number is a number of the form:

$$
a + ib
$$

where:

$$
a, b \in R
$$

Here:

- `a` is the real part;
- `b` is the imaginary part.

If:

$$
z = a + ib
$$

then:

$$
\operatorname{Re}(z) = a
$$

and:

$$
\operatorname{Im}(z) = b
$$

Example:

If:

$$
z = 2 + 5i
$$

then:

$$
\operatorname{Re}(z) = 2
$$

and:

$$
\operatorname{Im}(z) = 5
$$

## 3. Standard Form

The standard form is:

$$
a + ib
$$

where the real part comes first and the imaginary part is written as a real coefficient of `i`.

Examples:

$$
3 + 2i
$$

$$
-5 + 7i
$$

$$
4 - 9i
$$

$$
0 + 3i = 3i
$$

$$
6 + 0i = 6
$$

Every real number is also a complex number because:

$$
a = a + 0i
$$

## 4. Equality Of Complex Numbers

Two complex numbers are equal when both real parts and imaginary parts are equal.

If:

$$
a + ib = c + id
$$

then:

$$
a = c
$$

and:

$$
b = d
$$

Example:

If:

$$
4x + i(3x-y) = 3 - 6i
$$

then equate real and imaginary parts:

$$
4x = 3
$$

and:

$$
3x - y = -6
$$

Thus:

$$
x = \frac{3}{4}
$$

and:

$$
3\left(\frac{3}{4}\right) - y = -6
$$

So:

$$
\frac{9}{4} - y = -6
$$

Therefore:

$$
y = \frac{33}{4}
$$

## 5. Addition Of Complex Numbers

Let:

$$
z_1 = a + ib
$$

and:

$$
z_2 = c + id
$$

Then:

$$
z_1 + z_2 = (a+c) + i(b+d)
$$

Example:

$$
(2+3i) + (-6+5i)
$$

$$
= (2-6) + i(3+5)
$$

$$
= -4 + 8i
$$

## 6. Properties Of Addition

For complex numbers:

Closure:

$$
z_1 + z_2
$$

is a complex number.

Commutative law:

$$
z_1 + z_2 = z_2 + z_1
$$

Associative law:

$$
(z_1+z_2)+z_3 = z_1+(z_2+z_3)
$$

Additive identity:

$$
0 = 0 + 0i
$$

Additive inverse:

If:

$$
z = a + ib
$$

then:

$$
-z = -a - ib
$$

and:

$$
z + (-z) = 0
$$

## 7. Subtraction Of Complex Numbers

Subtraction is addition of the additive inverse.

If:

$$
z_1 = a + ib
$$

and:

$$
z_2 = c + id
$$

then:

$$
z_1 - z_2 = (a-c) + i(b-d)
$$

Example:

$$
(6+3i) - (2-i)
$$

$$
= (6-2) + i(3-(-1))
$$

$$
= 4 + 4i
$$

## 8. Multiplication Of Complex Numbers

Let:

$$
z_1 = a + ib
$$

and:

$$
z_2 = c + id
$$

Then:

$$
z_1z_2 = (a+ib)(c+id)
$$

Expanding:

$$
(a+ib)(c+id) = ac + iad + ibc + i^2bd
$$

Since:

$$
i^2 = -1
$$

we get:

$$
z_1z_2 = (ac-bd) + i(ad+bc)
$$

Example:

$$
(3+5i)(2+6i)
$$

$$
= (3\cdot2 - 5\cdot6) + i(3\cdot6 + 5\cdot2)
$$

$$
= -24 + 28i
$$

## 9. Multiplication Properties

Complex-number multiplication satisfies:

Closure:

$$
z_1z_2
$$

is complex.

Commutative law:

$$
z_1z_2 = z_2z_1
$$

Associative law:

$$
(z_1z_2)z_3 = z_1(z_2z_3)
$$

Multiplicative identity:

$$
1 = 1 + 0i
$$

Distributive law:

$$
z_1(z_2+z_3) = z_1z_2 + z_1z_3
$$

## 10. Powers Of `i`

The powers of `i` repeat in cycles of 4.

$$
i^1 = i
$$

$$
i^2 = -1
$$

$$
i^3 = -i
$$

$$
i^4 = 1
$$

Then the pattern repeats:

$$
i^5 = i
$$

$$
i^6 = -1
$$

For any integer `k`:

$$
i^{4k} = 1
$$

$$
i^{4k+1} = i
$$

$$
i^{4k+2} = -1
$$

$$
i^{4k+3} = -i
$$

## 11. How To Simplify Powers Of `i`

Divide the exponent by 4 and use the remainder.

Example:

Find:

$$
i^{37}
$$

Since:

$$
37 = 4(9) + 1
$$

we get:

$$
i^{37} = i
$$

Example:

Find:

$$
i^{102}
$$

Since:

$$
102 = 4(25) + 2
$$

we get:

$$
i^{102} = i^2 = -1
$$

## 12. Square Roots Of Negative Real Numbers

For positive real `a`:

$$
\sqrt{-a} = i\sqrt{a}
$$

Examples:

$$
\sqrt{-1} = i
$$

$$
\sqrt{-3} = i\sqrt3
$$

$$
\sqrt{-25} = 5i
$$

The two square roots of `-a` are:

$$
i\sqrt a
$$

and:

$$
-i\sqrt a
$$

The principal square root notation usually means:

$$
\sqrt{-a} = i\sqrt a
$$

## 13. Important Warning About Square Roots

For positive real numbers:

$$
\sqrt a \sqrt b = \sqrt{ab}
$$

But this rule is not valid when both `a` and `b` are negative.

Wrong reasoning:

$$
\sqrt{-1}\sqrt{-1} = \sqrt{1} = 1
$$

But:

$$
\sqrt{-1}\sqrt{-1} = i \cdot i = i^2 = -1
$$

So the product rule must not be used blindly for negative radicands.

## 14. Algebraic Identities

Algebraic identities that hold for real numbers also work for complex numbers.

For complex numbers `z1` and `z2`:

$$
(z_1+z_2)^2 = z_1^2 + 2z_1z_2 + z_2^2
$$

$$
(z_1-z_2)^2 = z_1^2 - 2z_1z_2 + z_2^2
$$

$$
(z_1+z_2)^3 = z_1^3 + 3z_1^2z_2 + 3z_1z_2^2 + z_2^3
$$

$$
(z_1-z_2)^3 = z_1^3 - 3z_1^2z_2 + 3z_1z_2^2 - z_2^3
$$

$$
z_1^2 - z_2^2 = (z_1+z_2)(z_1-z_2)
$$

## 15. Worked Example: Cube Of A Complex Number

Express:

$$
(5-3i)^3
$$

in standard form.

Use:

$$
(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3
$$

Here:

$$
a = 5, \quad b = 3i
$$

Then:

$$
(5-3i)^3 = 5^3 - 3(5^2)(3i) + 3(5)(3i)^2 - (3i)^3
$$

Now:

$$
(3i)^2 = 9i^2 = -9
$$

and:

$$
(3i)^3 = 27i^3 = -27i
$$

So:

$$
(5-3i)^3 = 125 - 225i - 135 + 27i
$$

Therefore:

$$
(5-3i)^3 = -10 - 198i
$$

## 16. Conjugate Of A Complex Number

If:

$$
z = a + ib
$$

then the conjugate of z is:

$$
\bar z = a - ib
$$

Examples:

$$
\overline{3+4i} = 3 - 4i
$$

$$
\overline{2-5i} = 2 + 5i
$$

$$
\overline{-7i} = 7i
$$

Geometrically, conjugation reflects a complex number across the real axis.

## 17. Modulus Of A Complex Number

If:

$$
z = a + ib
$$

then:

$$
|z| = \sqrt{a^2+b^2}
$$

The modulus is always non-negative.

It represents distance from the origin in the Argand plane.

Examples:

$$
|3+i| = \sqrt{3^2+1^2} = \sqrt{10}
$$

$$
|2-5i| = \sqrt{2^2+(-5)^2} = \sqrt{29}
$$

## 18. Key Conjugate And Modulus Results

For:

$$
z = a + ib
$$

we have:

$$
z\bar z = (a+ib)(a-ib)
$$

$$
= a^2 + b^2
$$

So:

$$
z\bar z = |z|^2
$$

Also:

$$
\overline{z_1+z_2} = \bar z_1 + \bar z_2
$$

$$
\overline{z_1-z_2} = \bar z_1 - \bar z_2
$$

$$
\overline{z_1z_2} = \bar z_1\bar z_2
$$

$$
\left|\frac{z_1}{z_2}\right| = \frac{|z_1|}{|z_2|}
$$

where:

$$
z_2 \ne 0
$$

## 19. Multiplicative Inverse

For a non-zero complex number:

$$
z = a + ib
$$

the inverse is:

$$
\frac{1}{z} = \frac{1}{a+ib}
$$

Multiply numerator and denominator by conjugate:

$$
\frac{1}{a+ib} = \frac{a-ib}{(a+ib)(a-ib)}
$$

Since:

$$
(a+ib)(a-ib) = a^2 + b^2
$$

we get:

$$
\frac{1}{a+ib} = \frac{a-ib}{a^2+b^2}
$$

or:

$$
z^{-1} = \frac{\bar z}{|z|^2}
$$

## 20. Worked Example: Inverse Of `2 - 3i`

Let:

$$
z = 2 - 3i
$$

Then:

$$
\bar z = 2 + 3i
$$

and:

$$
|z|^2 = 2^2 + (-3)^2 = 13
$$

Thus:

$$
z^{-1} = \frac{2+3i}{13}
$$

So:

$$
\frac{1}{2-3i} = \frac{2}{13} + \frac{3}{13}i
$$

## 21. Division Of Complex Numbers

To divide complex numbers, multiply numerator and denominator by the conjugate of the denominator.

Example:

$$
\frac{5+2i}{1-2i}
$$

Multiply by:

$$
\frac{1+2i}{1+2i}
$$

Then:

$$
\frac{5+2i}{1-2i}
= \frac{(5+2i)(1+2i)}{(1-2i)(1+2i)}
$$

Numerator:

$$
(5+2i)(1+2i) = 5 + 10i + 2i + 4i^2 = 1 + 12i
$$

Denominator:

$$
1^2 + 2^2 = 5
$$

So:

$$
\frac{5+2i}{1-2i} = \frac{1}{5} + \frac{12}{5}i
$$

## 22. Argand Plane

The complex number:

$$
z = x + iy
$$

corresponds to the point:

$$
(x, y)
$$

in the coordinate plane.

This plane is called the complex plane or Argand plane.

The horizontal axis is the real axis.

The vertical axis is the imaginary axis.

Examples:

| Complex Number | Point In Argand Plane |
|---|---|
| `2 + 4i` | `(2, 4)` |
| `-2 + 3i` | `(-2, 3)` |
| `i` | `(0, 1)` |
| `2` | `(2, 0)` |
| `-5 - 2i` | `(-5, -2)` |
| `1 - 2i` | `(1, -2)` |

## 23. Modulus In The Argand Plane

If:

$$
z = x + iy
$$

then:

$$
|z| = \sqrt{x^2+y^2}
$$

This is the distance from:

$$
(0,0)
$$

to:

$$
(x,y)
$$

in the Argand plane.

The conjugate:

$$
\bar z = x - iy
$$

corresponds to:

$$
(x,-y)
$$

This is the reflection of `(x,y)` in the real axis.

## 24. Polar Form

Let:

$$
z = x + iy
$$

and:

$$
r = |z| = \sqrt{x^2+y^2}
$$

If theta is an argument of z, then:

$$
x = r\cos\theta
$$

and:

$$
y = r\sin\theta
$$

Therefore:

$$
z = r(\cos\theta + i\sin\theta)
$$

This is called polar form.

## 25. Worked Example: Rectangular To Polar Form

Write:

$$
z = 1 + \sqrt3 i
$$

in polar form.

First:

$$
r = |z| = \sqrt{1^2 + (\sqrt3)^2} = 2
$$

Now:

$$
\cos\theta = \frac{1}{2}
$$

and:

$$
\sin\theta = \frac{\sqrt3}{2}
$$

So:

$$
\theta = \frac{\pi}{3}
$$

Therefore:

$$
z = 2\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right)
$$

## 26. Quadratic Equations And Complex Roots

For:

$$
ax^2 + bx + c = 0
$$

where:

$$
a \ne 0
$$

the discriminant is:

$$
D = b^2 - 4ac
$$

The roots are:

$$
x = \frac{-b \pm \sqrt{D}}{2a}
$$

If:

$$
D < 0
$$

then:

$$
\sqrt{D} = i\sqrt{-D}
$$

So the roots are complex:

$$
x = \frac{-b \pm i\sqrt{-D}}{2a}
$$

Complex roots of a quadratic with real coefficients occur in conjugate pairs.

## 27. Worked Example: Quadratic With Negative Discriminant

Solve:

$$
x^2 + 4x + 13 = 0
$$

Here:

$$
a = 1, \quad b = 4, \quad c = 13
$$

Discriminant:

$$
D = b^2 - 4ac = 16 - 52 = -36
$$

So:

$$
\sqrt{D} = \sqrt{-36} = 6i
$$

Roots:

$$
x = \frac{-4 \pm 6i}{2}
$$

Therefore:

$$
x = -2 \pm 3i
$$

The roots are:

$$
-2 + 3i
$$

and:

$$
-2 - 3i
$$

## 28. Exercise 4.1 Method Guide

The raw exercise asks several times to express complex expressions in standard form `a + ib`.

Use this checklist:

1. Replace powers of `i` using the cycle `i, -1, -i, 1`.
2. Expand brackets carefully.
3. Combine real terms.
4. Combine imaginary terms.
5. If there is a denominator with `i`, multiply by the conjugate.
6. Write the final answer as `a + ib`.

## 29. Exercise 4.1 Inverse Questions

For inverse questions, use:

$$
\frac{1}{a+ib} = \frac{a-ib}{a^2+b^2}
$$

Examples:

For:

$$
4 - 3i
$$

the inverse is:

$$
\frac{1}{4-3i} = \frac{4+3i}{4^2+(-3)^2}
$$

So:

$$
\frac{1}{4-3i} = \frac{4+3i}{25}
$$

For:

$$
5 + 3i
$$

the inverse is:

$$
\frac{1}{5+3i} = \frac{5-3i}{34}
$$

For:

$$
-i
$$

the inverse is:

$$
\frac{1}{-i} = i
$$

because:

$$
(-i)(i) = -i^2 = 1
$$

## 30. Miscellaneous Exercise Guide

### Product Real Part

If:

$$
z_1 = a + ib
$$

and:

$$
z_2 = c + id
$$

then:

$$
z_1z_2 = (ac-bd) + i(ad+bc)
$$

So:

$$
\operatorname{Re}(z_1z_2) = ac-bd
$$

But:

$$
\operatorname{Re}(z_1) = a, \quad \operatorname{Re}(z_2)=c
$$

and:

$$
\operatorname{Im}(z_1)=b, \quad \operatorname{Im}(z_2)=d
$$

Therefore:

$$
\operatorname{Re}(z_1z_2)
= \operatorname{Re}(z_1)\operatorname{Re}(z_2)
- \operatorname{Im}(z_1)\operatorname{Im}(z_2)
$$

### Modulus Product Result

If:

$$
(a+ib)(c+id)(e+if)(g+ih) = A+iB
$$

then take modulus on both sides.

Using:

$$
|z_1z_2z_3z_4| = |z_1||z_2||z_3||z_4|
$$

we get:

$$
A^2+B^2 = (a^2+b^2)(c^2+d^2)(e^2+f^2)(g^2+h^2)
$$

### Finding Real x And y From A Conjugate Condition

If an expression involving `x` and `y` is said to equal the conjugate of a given complex number:

1. First write the conjugate.
2. Expand the expression.
3. Equate real parts.
4. Equate imaginary parts.
5. Solve the simultaneous equations.

## 31. Key Formulas In One Table

| Idea | Formula |
|---|---|
| Imaginary unit | `i^2 = -1` |
| Complex number | `z = a + ib` |
| Equality | `a+ib = c+id` means `a=c` and `b=d` |
| Addition | `(a+ib)+(c+id) = (a+c)+i(b+d)` |
| Difference | `(a+ib)-(c+id) = (a-c)+i(b-d)` |
| Product | `(a+ib)(c+id) = (ac-bd)+i(ad+bc)` |
| Conjugate | `bar z = a - ib` |
| Modulus | `|z| = sqrt(a^2+b^2)` |
| Modulus square | `z bar z = |z|^2` |
| Inverse | `1/(a+ib) = (a-ib)/(a^2+b^2)` |
| Polar form | `z = r(cos theta + i sin theta)` |
| Quadratic formula | `x = (-b +- sqrt(D))/(2a)` |
| Negative discriminant roots | `x = (-b +- i sqrt(-D))/(2a)` |

## 32. Common Mistakes And Corrections

| Mistake | Correction |
|---|---|
| Thinking imaginary part of `3+5i` is `5i` | Imaginary part is `5` |
| Forgetting `i^2 = -1` | Replace every `i^2` by `-1` |
| Adding real and imaginary parts together | Combine real with real, imaginary with imaginary |
| Dividing without conjugate | Multiply denominator by its conjugate |
| Using square-root product law for two negatives | Do not use it when both radicands are negative |
| Thinking modulus can be negative | Modulus is always non-negative |
| Thinking conjugate changes real part | Conjugate only changes sign of imaginary part |
| Forgetting complex roots come in pairs | With real coefficients, non-real roots occur as conjugates |

## 33. Fast Problem-Solving Checklist

For simplifying complex expressions:

1. Put all powers of `i` into the cycle of 4.
2. Expand products carefully.
3. Replace `i^2` by `-1`.
4. Collect real terms.
5. Collect imaginary terms.
6. For quotients, use the conjugate of the denominator.
7. For modulus, use square root of sum of squares.
8. For conjugate, change sign of imaginary part.
9. For quadratic roots, compute discriminant first.
10. If discriminant is negative, write square root using `i`.

## 34. Quick Self-Test

1. What is `i^2`?
2. What is `i^7`?
3. Find real and imaginary parts of `-4+9i`.
4. Add `(3+2i)` and `(5-7i)`.
5. Multiply `(2+i)(3-4i)`.
6. Find the conjugate of `6-11i`.
7. Find the modulus of `3-4i`.
8. Find the inverse of `1+i`.
9. Write the point corresponding to `-2+5i`.
10. Solve `x^2+9=0`.
11. Solve `x^2-2x+5=0`.
12. Write polar form of `1+i`.

## 35. Self-Test Answers

1. `-1`.
2. Since `7 = 4(1)+3`, `i^7 = -i`.
3. Real part `-4`, imaginary part `9`.
4. `8 - 5i`.
5. `10 - 5i`.
6. `6 + 11i`.
7. `5`.
8. `(1-i)/2`.
9. `(-2, 5)`.
10. `x = +-3i`.
11. `x = 1 +- 2i`.
12. `sqrt2(cos(pi/4)+i sin(pi/4))`.

## 36. Final Chapter Summary

Complex numbers extend the real number system by introducing `i`, where `i^2 = -1`.

Every complex number can be written as `a + ib`, with real part `a` and imaginary part `b`.

Complex numbers are equal only when their real and imaginary parts match separately.

Addition and subtraction are done component-wise.

Multiplication uses the distributive law and `i^2 = -1`.

Division is handled by multiplying numerator and denominator by the conjugate of the denominator.

Powers of `i` repeat every four powers.

The conjugate of `a + ib` is `a - ib`.

The modulus of `a + ib` is `sqrt(a^2+b^2)` and represents distance from the origin in the Argand plane.

The Argand plane represents `x + iy` as the point `(x,y)`.

Polar form writes a complex number as `r(cos theta + i sin theta)`.

Quadratic equations with negative discriminant have complex roots, and for real coefficients these roots occur as conjugate pairs.
