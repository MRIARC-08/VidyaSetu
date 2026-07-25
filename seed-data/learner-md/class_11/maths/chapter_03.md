# Chapter 3: Trigonometric Functions

Class: 11  
Subject: Mathematics  
Input file used: `data/class_11/maths/chapter_03.md`  
Formatted file: `data_learner_md/class_11/maths/chapter_03.md`

## Learning Purpose

This chapter upgrades trigonometry from right-triangle ratios to functions defined for real numbers.

The key change is that angles are now treated as rotations, usually measured in radians.

The unit circle lets us define sine, cosine, tangent, cotangent, secant, and cosecant for positive, negative, large, and non-acute angles.

The chapter also develops the main identities needed for simplifying expressions, proving results, evaluating exact values, and solving later trigonometric equations.

## Core Learning Outcomes

After studying this chapter, you should be able to:

1. Understand angle as rotation.
2. Distinguish positive and negative angles.
3. Convert between degree measure and radian measure.
4. Use the arc-length formula `l = r theta`.
5. Connect radians with real numbers.
6. Define trigonometric functions using the unit circle.
7. Find values of trigonometric functions at quadrantal angles.
8. Use periodicity of sine, cosine, tangent, and cotangent.
9. Determine signs of trigonometric functions in each quadrant.
10. State domains and ranges of all six trigonometric functions.
11. Use reciprocal and Pythagorean identities.
12. Use sum and difference identities.
13. Use double-angle and triple-angle identities.
14. Convert sums to products and products to sums.
15. Evaluate exact values such as `sin 15 deg`, `tan(pi/8)`, and similar expressions.
16. Prove standard trigonometric identities step by step.

## Chapter Snapshot

| Topic | Main Idea |
|---|---|
| Angle | Measure of rotation of a ray about its initial point |
| Positive angle | Anticlockwise rotation |
| Negative angle | Clockwise rotation |
| Degree | One full revolution is 360 degrees |
| Radian | Angle subtended by arc length equal to radius |
| Arc length | `l = r theta`, where theta is in radians |
| Unit circle | Circle of radius 1 centered at origin |
| Sine | y-coordinate on unit circle |
| Cosine | x-coordinate on unit circle |
| Tangent | `sin x / cos x` |
| Periodicity | Sine and cosine repeat after `2pi`; tangent and cotangent repeat after `pi` |
| Identities | Equations true for all allowed values of variables |

## Essential Notation

| Notation | Meaning |
|---|---|
| `deg` | Degree measure in text |
| `rad` | Radian measure in text |
| `theta` | A general angle |
| `sin x` | Sine of x |
| `cos x` | Cosine of x |
| `tan x` | Tangent of x |
| `cot x` | Cotangent of x |
| `sec x` | Secant of x |
| `cosec x` | Cosecant of x |
| `Z` | Set of integers |

In formulas:

$$
\pi \text{ radians} = 180^\circ
$$

$$
2\pi \text{ radians} = 360^\circ
$$

$$
l = r\theta
$$

## 1. Meaning Of Trigonometry

The word trigonometry comes from Greek roots meaning measurement of triangles.

Historically, trigonometry was used for:

- navigation;
- surveying;
- astronomy;
- measuring heights and distances;
- engineering;
- wave motion;
- electric circuits;
- seismology;
- sound analysis.

In earlier classes, trigonometric ratios were defined only for acute angles in right triangles.

In this chapter, they become trigonometric functions defined for real numbers through the unit circle.

## 2. Angle As Rotation

An angle is a measure of rotation of a ray about its initial point.

Terms:

- Initial side: the starting position of the ray.
- Terminal side: the final position after rotation.
- Vertex: the point of rotation.

If the rotation is anticlockwise, the angle is positive.

If the rotation is clockwise, the angle is negative.

Examples:

- `90 deg` is a positive quarter-turn.
- `-90 deg` is a clockwise quarter-turn.
- `360 deg` is one full revolution.
- `720 deg` is two full revolutions.

## 3. Degree Measure

One full revolution is:

$$
360^\circ
$$

One degree is:

$$
\frac{1}{360}
$$

of a full revolution.

A degree is divided into 60 minutes:

$$
1^\circ = 60'
$$

A minute is divided into 60 seconds:

$$
1' = 60''
$$

Therefore:

$$
1^\circ = 3600''
$$

## 4. Radian Measure

One radian is the angle subtended at the centre of a circle by an arc whose length equals the radius.

If a circle has radius `r`, and an arc of length `l` subtends angle `theta` at the centre, then:

$$
\theta = \frac{l}{r}
$$

or:

$$
l = r\theta
$$

This formula works only when `theta` is measured in radians.

## 5. Why Radians Are Natural

In a unit circle, radius is 1.

So:

$$
\theta = \frac{l}{1} = l
$$

That means the radian measure of an angle equals the length of the arc cut off on the unit circle.

This is why radian measure connects angles with real numbers.

The real number line can be wrapped around the unit circle.

Positive numbers wrap anticlockwise.

Negative numbers wrap clockwise.

## 6. Degree-Radian Conversion

A full revolution is:

$$
360^\circ = 2\pi
$$

So:

$$
180^\circ = \pi
$$

To convert degrees to radians:

$$
\text{Radian measure} = \frac{\pi}{180} \times \text{Degree measure}
$$

To convert radians to degrees:

$$
\text{Degree measure} = \frac{180}{\pi} \times \text{Radian measure}
$$

## 7. Common Angle Conversion Table

| Degree Measure | Radian Measure |
|---|---|
| `0 deg` | `0` |
| `30 deg` | `pi/6` |
| `45 deg` | `pi/4` |
| `60 deg` | `pi/3` |
| `90 deg` | `pi/2` |
| `180 deg` | `pi` |
| `270 deg` | `3pi/2` |
| `360 deg` | `2pi` |

## 8. Worked Conversion: Degrees To Radians

Convert:

$$
40^\circ 20'
$$

to radians.

Since:

$$
20' = \frac{20}{60}^\circ = \frac{1}{3}^\circ
$$

we get:

$$
40^\circ 20' = 40\frac{1}{3}^\circ = \frac{121}{3}^\circ
$$

Convert:

$$
\frac{121}{3} \times \frac{\pi}{180}
$$

So:

$$
40^\circ 20' = \frac{121\pi}{540}
$$

## 9. Worked Conversion: Radians To Degrees

Convert 6 radians to degrees.

Using:

$$
\text{Degree measure} = \frac{180}{\pi} \times \text{Radian measure}
$$

we get:

$$
6 \text{ radians} = \frac{1080}{\pi}^\circ
$$

Using:

$$
\pi \approx \frac{22}{7}
$$

we get:

$$
\frac{1080}{\pi} \approx \frac{1080 \times 7}{22} = \frac{3780}{11} = 343\frac{7}{11}^\circ
$$

This is approximately:

$$
343^\circ 38' 11''
$$

## 10. Arc Length Problems

Use:

$$
l = r\theta
$$

where theta is in radians.

If any angle is given in degrees, convert it to radians first.

Example:

A central angle of `60 deg` intercepts an arc of length `37.4 cm`.

Find radius.

Convert:

$$
60^\circ = \frac{\pi}{3}
$$

Now:

$$
l = r\theta
$$

So:

$$
r = \frac{l}{\theta} = \frac{37.4}{\pi/3} = \frac{112.2}{\pi}
$$

Using:

$$
\pi = \frac{22}{7}
$$

we get:

$$
r = 35.7 \text{ cm}
$$

## 11. Unit Circle Definition Of Sine And Cosine

Consider the unit circle centered at the origin.

Let P be a point on the circle corresponding to angle `x`.

If:

$$
P = (a, b)
$$

then:

$$
\cos x = a
$$

and:

$$
\sin x = b
$$

Because P is on the unit circle:

$$
a^2 + b^2 = 1
$$

Therefore:

$$
\cos^2 x + \sin^2 x = 1
$$

This is the most fundamental identity.

## 12. Quadrantal Angles

Angles that are integral multiples of:

$$
\frac{\pi}{2}
$$

are called quadrantal angles.

Important values:

| x | `0` | `pi/2` | `pi` | `3pi/2` | `2pi` |
|---|---|---|---|---|---|
| `sin x` | 0 | 1 | 0 | -1 | 0 |
| `cos x` | 1 | 0 | -1 | 0 | 1 |

## 13. Other Trigonometric Functions

The other four functions are defined using sine and cosine.

$$
\tan x = \frac{\sin x}{\cos x}
$$

where:

$$
\cos x \ne 0
$$

$$
\cot x = \frac{\cos x}{\sin x}
$$

where:

$$
\sin x \ne 0
$$

$$
\sec x = \frac{1}{\cos x}
$$

where:

$$
\cos x \ne 0
$$

$$
\cosec x = \frac{1}{\sin x}
$$

where:

$$
\sin x \ne 0
$$

## 14. Reciprocal Identities

$$
\sec x = \frac{1}{\cos x}
$$

$$
\cosec x = \frac{1}{\sin x}
$$

$$
\cot x = \frac{1}{\tan x}
$$

where each expression is defined.

## 15. Pythagorean Identities

The basic identity is:

$$
\sin^2 x + \cos^2 x = 1
$$

Dividing by:

$$
\cos^2 x
$$

gives:

$$
1 + \tan^2 x = \sec^2 x
$$

Dividing by:

$$
\sin^2 x
$$

gives:

$$
1 + \cot^2 x = \cosec^2 x
$$

## 16. Standard Values

| x | `0` | `pi/6` | `pi/4` | `pi/3` | `pi/2` |
|---|---|---|---|---|---|
| `sin x` | 0 | `1/2` | `1/sqrt(2)` | `sqrt(3)/2` | 1 |
| `cos x` | 1 | `sqrt(3)/2` | `1/sqrt(2)` | `1/2` | 0 |
| `tan x` | 0 | `1/sqrt(3)` | 1 | `sqrt(3)` | not defined |

Use reciprocals for cosecant, secant, and cotangent.

## 17. Periodicity

Sine and cosine repeat after:

$$
2\pi
$$

For any integer `n`:

$$
\sin(2n\pi + x) = \sin x
$$

$$
\cos(2n\pi + x) = \cos x
$$

Tangent and cotangent repeat after:

$$
\pi
$$

For any integer `n`:

$$
\tan(n\pi + x) = \tan x
$$

$$
\cot(n\pi + x) = \cot x
$$

## 18. Zeros Of Sine And Cosine

Sine is zero at integral multiples of pi:

$$
\sin x = 0 \Rightarrow x = n\pi, \quad n \in Z
$$

Cosine is zero at odd multiples of `pi/2`:

$$
\cos x = 0 \Rightarrow x = (2n+1)\frac{\pi}{2}, \quad n \in Z
$$

## 19. Even And Odd Properties

Sine is odd:

$$
\sin(-x) = -\sin x
$$

Cosine is even:

$$
\cos(-x) = \cos x
$$

Therefore:

$$
\tan(-x) = -\tan x
$$

and:

$$
\cot(-x) = -\cot x
$$

## 20. Signs In Quadrants

| Quadrant | `sin x` | `cos x` | `tan x` |
|---|---|---|---|
| I | positive | positive | positive |
| II | positive | negative | negative |
| III | negative | negative | positive |
| IV | negative | positive | negative |

Memory rule:

- Quadrant I: all positive.
- Quadrant II: sine positive.
- Quadrant III: tangent positive.
- Quadrant IV: cosine positive.

Reciprocal functions have the same signs as their base functions:

- cosec has same sign as sin;
- sec has same sign as cos;
- cot has same sign as tan.

## 21. Domains And Ranges

| Function | Domain | Range |
|---|---|---|
| `sin x` | `R` | `[-1, 1]` |
| `cos x` | `R` | `[-1, 1]` |
| `tan x` | `R - {(2n+1)pi/2 : n in Z}` | `R` |
| `cot x` | `R - {npi : n in Z}` | `R` |
| `sec x` | `R - {(2n+1)pi/2 : n in Z}` | `(-infinity, -1] union [1, infinity)` |
| `cosec x` | `R - {npi : n in Z}` | `(-infinity, -1] union [1, infinity)` |

## 22. Finding Other Trigonometric Functions

Use three steps:

1. Use an identity to find the missing magnitude.
2. Use the quadrant to decide the sign.
3. Use definitions and reciprocals to find the remaining functions.

Example:

If:

$$
\cos x = -\frac{3}{5}
$$

and x lies in quadrant III, then sine is negative.

From:

$$
\sin^2 x + \cos^2 x = 1
$$

we get:

$$
\sin^2 x = 1 - \frac{9}{25} = \frac{16}{25}
$$

So:

$$
\sin x = -\frac{4}{5}
$$

Then:

$$
\tan x = \frac{\sin x}{\cos x} = \frac{4}{3}
$$

and reciprocals give:

$$
\sec x = -\frac{5}{3}, \quad \cosec x = -\frac{5}{4}, \quad \cot x = \frac{3}{4}
$$

## 23. Sum And Difference Identities

The four basic identities are:

$$
\cos(x+y) = \cos x \cos y - \sin x \sin y
$$

$$
\cos(x-y) = \cos x \cos y + \sin x \sin y
$$

$$
\sin(x+y) = \sin x \cos y + \cos x \sin y
$$

$$
\sin(x-y) = \sin x \cos y - \cos x \sin y
$$

These are the main tools for exact values and proof questions.

## 24. Complement And Related Identities

$$
\cos\left(\frac{\pi}{2} - x\right) = \sin x
$$

$$
\sin\left(\frac{\pi}{2} - x\right) = \cos x
$$

$$
\cos\left(\frac{\pi}{2} + x\right) = -\sin x
$$

$$
\sin\left(\frac{\pi}{2} + x\right) = \cos x
$$

$$
\cos(\pi - x) = -\cos x
$$

$$
\sin(\pi - x) = \sin x
$$

$$
\cos(\pi + x) = -\cos x
$$

$$
\sin(\pi + x) = -\sin x
$$

$$
\cos(2\pi - x) = \cos x
$$

$$
\sin(2\pi - x) = -\sin x
$$

## 25. Tangent And Cotangent Sum-Difference Identities

If the expressions are defined:

$$
\tan(x+y) = \frac{\tan x + \tan y}{1 - \tan x \tan y}
$$

$$
\tan(x-y) = \frac{\tan x - \tan y}{1 + \tan x \tan y}
$$

$$
\cot(x+y) = \frac{\cot x \cot y - 1}{\cot x + \cot y}
$$

$$
\cot(x-y) = \frac{\cot x \cot y + 1}{\cot y - \cot x}
$$

Always check that the denominators are not zero.

## 26. Double-Angle Identities

$$
\sin 2x = 2\sin x \cos x
$$

$$
\cos 2x = \cos^2 x - \sin^2 x
$$

Equivalent forms of cosine double angle:

$$
\cos 2x = 2\cos^2 x - 1
$$

$$
\cos 2x = 1 - 2\sin^2 x
$$

Tangent double angle:

$$
\tan 2x = \frac{2\tan x}{1 - \tan^2 x}
$$

## 27. Triple-Angle Identities

$$
\sin 3x = 3\sin x - 4\sin^3 x
$$

$$
\cos 3x = 4\cos^3 x - 3\cos x
$$

$$
\tan 3x = \frac{3\tan x - \tan^3 x}{1 - 3\tan^2 x}
$$

## 28. Sum-To-Product Identities

$$
\cos x + \cos y = 2\cos\left(\frac{x+y}{2}\right)\cos\left(\frac{x-y}{2}\right)
$$

$$
\cos x - \cos y = -2\sin\left(\frac{x+y}{2}\right)\sin\left(\frac{x-y}{2}\right)
$$

$$
\sin x + \sin y = 2\sin\left(\frac{x+y}{2}\right)\cos\left(\frac{x-y}{2}\right)
$$

$$
\sin x - \sin y = 2\cos\left(\frac{x+y}{2}\right)\sin\left(\frac{x-y}{2}\right)
$$

## 29. Product-To-Sum Identities

$$
2\cos x \cos y = \cos(x+y) + \cos(x-y)
$$

$$
-2\sin x \sin y = \cos(x+y) - \cos(x-y)
$$

$$
2\sin x \cos y = \sin(x+y) + \sin(x-y)
$$

$$
2\cos x \sin y = \sin(x+y) - \sin(x-y)
$$

## 30. Exact Value: `sin 15 deg`

Use:

$$
15^\circ = 45^\circ - 30^\circ
$$

Then:

$$
\sin 15^\circ = \sin(45^\circ - 30^\circ)
$$

$$
= \sin45^\circ\cos30^\circ - \cos45^\circ\sin30^\circ
$$

$$
= \frac{1}{\sqrt2}\cdot\frac{\sqrt3}{2} - \frac{1}{\sqrt2}\cdot\frac{1}{2}
$$

$$
= \frac{\sqrt3 - 1}{2\sqrt2}
$$

Equivalently:

$$
\sin 15^\circ = \frac{\sqrt6 - \sqrt2}{4}
$$

## 31. Exact Value: `tan(pi/12)`

Since:

$$
\frac{\pi}{12} = \frac{\pi}{4} - \frac{\pi}{6}
$$

we use:

$$
\tan(x-y) = \frac{\tan x - \tan y}{1 + \tan x \tan y}
$$

So:

$$
\tan\frac{\pi}{12}
= \frac{1 - \frac{1}{\sqrt3}}{1 + \frac{1}{\sqrt3}}
$$

$$
= \frac{\sqrt3 - 1}{\sqrt3 + 1}
$$

Rationalising:

$$
\tan\frac{\pi}{12} = 2 - \sqrt3
$$

## 32. Exact Value: `tan(pi/8)`

Let:

$$
y = \tan\frac{\pi}{8}
$$

Then:

$$
\tan\frac{\pi}{4} = \tan\left(2\cdot\frac{\pi}{8}\right)
$$

Using:

$$
\tan 2x = \frac{2\tan x}{1-\tan^2 x}
$$

we get:

$$
1 = \frac{2y}{1-y^2}
$$

So:

$$
1-y^2 = 2y
$$

$$
y^2 + 2y - 1 = 0
$$

Thus:

$$
y = -1 \pm \sqrt2
$$

Since `pi/8` is in quadrant I, tangent is positive.

Therefore:

$$
\tan\frac{\pi}{8} = \sqrt2 - 1
$$

## 33. Exercise 3.1 Answer Key

### 1. Degree Measures To Radians

Use:

$$
\text{radians} = \frac{\pi}{180} \times \text{degrees}
$$

| Part | Given | Radian Measure |
|---|---|---|
| i | `25 deg` | `5pi/36` |
| ii | `-47 deg 30'` | `-19pi/72` |
| iii | `240 deg` | `4pi/3` |
| iv | `520 deg` | `26pi/9` |

### 2. Radians To Degree Measures

Use:

$$
\text{degrees} = \frac{180}{\pi} \times \text{radians}
$$

and:

$$
\pi = \frac{22}{7}
$$

| Part | Given | Degree Measure |
|---|---|---|
| i | `11/16` | `39 deg 22' 30''` |
| ii | `-4` | approximately `-229 deg 5' 27''` |
| iii | `5pi/3` | `300 deg` |
| iv | `7pi/6` | `210 deg` |

### 3. Wheel Revolutions

A wheel makes 360 revolutions in one minute.

In one second:

$$
\frac{360}{60} = 6
$$

revolutions.

One revolution is:

$$
2\pi
$$

radians.

So in one second it turns:

$$
6 \times 2\pi = 12\pi
$$

radians.

### 4. Angle Subtended By Arc

Given:

$$
r = 100 \text{ cm}, \quad l = 22 \text{ cm}
$$

Then:

$$
\theta = \frac{l}{r} = \frac{22}{100} = \frac{11}{50}
$$

radians.

Convert to degrees:

$$
\theta = \frac{11}{50} \times \frac{180}{\pi}
$$

Using `pi = 22/7`:

$$
\theta = \frac{11}{50} \times \frac{180 \times 7}{22} = \frac{126}{10} = 12.6^\circ
$$

So:

$$
\theta = 12^\circ 36'
$$

### 5. Minor Arc Of A Chord

Diameter:

$$
40 \text{ cm}
$$

so:

$$
r = 20 \text{ cm}
$$

Chord length is also 20 cm.

For chord length:

$$
c = 2r\sin\frac{\theta}{2}
$$

So:

$$
20 = 40\sin\frac{\theta}{2}
$$

Thus:

$$
\sin\frac{\theta}{2} = \frac{1}{2}
$$

Therefore:

$$
\frac{\theta}{2} = \frac{\pi}{6}
$$

and:

$$
\theta = \frac{\pi}{3}
$$

Minor arc length:

$$
l = r\theta = 20 \cdot \frac{\pi}{3} = \frac{20\pi}{3} \text{ cm}
$$

### 6. Ratio Of Radii

For equal arc lengths:

$$
r_1\theta_1 = r_2\theta_2
$$

So:

$$
\frac{r_1}{r_2} = \frac{\theta_2}{\theta_1}
$$

Given angles:

$$
60^\circ \text{ and } 75^\circ
$$

Thus:

$$
r_1:r_2 = 75:60 = 5:4
$$

### 7. Pendulum Arc Angles

Use:

$$
\theta = \frac{l}{r}
$$

where:

$$
r = 75 \text{ cm}
$$

| Arc Length | Angle In Radians |
|---|---|
| `10 cm` | `2/15` |
| `15 cm` | `1/5` |
| `21 cm` | `7/25` |

## 34. Exercise 3.2 Answer Key

### 1. `cos x = -1/2`, x In Quadrant III

In quadrant III, sine and cosine are negative, tangent is positive.

$$
\cos x = -\frac{1}{2}
$$

Then:

$$
\sin x = -\frac{\sqrt3}{2}
$$

Other functions:

$$
\tan x = \sqrt3
$$

$$
\sec x = -2
$$

$$
\cosec x = -\frac{2}{\sqrt3}
$$

$$
\cot x = \frac{1}{\sqrt3}
$$

### 2. `sin x = 3/5`, x In Quadrant II

In quadrant II, sine is positive and cosine is negative.

$$
\sin x = \frac{3}{5}
$$

Then:

$$
\cos x = -\frac{4}{5}
$$

Other functions:

$$
\tan x = -\frac{3}{4}
$$

$$
\cosec x = \frac{5}{3}
$$

$$
\sec x = -\frac{5}{4}
$$

$$
\cot x = -\frac{4}{3}
$$

### 3. `cot x = 4/3`, x In Quadrant III

In quadrant III, sine and cosine are negative, tangent and cotangent are positive.

$$
\cot x = \frac{4}{3}
$$

So:

$$
\tan x = \frac{3}{4}
$$

Using the 3-4-5 triangle:

$$
\sin x = -\frac{3}{5}
$$

$$
\cos x = -\frac{4}{5}
$$

and:

$$
\cosec x = -\frac{5}{3}, \quad \sec x = -\frac{5}{4}
$$

### 4. `sec x = 13/5`, x In Quadrant IV

In quadrant IV, cosine and secant are positive, sine is negative.

$$
\sec x = \frac{13}{5}
$$

So:

$$
\cos x = \frac{5}{13}
$$

Then:

$$
\sin x = -\frac{12}{13}
$$

Other functions:

$$
\cosec x = -\frac{13}{12}
$$

$$
\tan x = -\frac{12}{5}
$$

$$
\cot x = -\frac{5}{12}
$$

### 5. `tan x = -5/12`, x In Quadrant II

In quadrant II, tangent is negative, sine is positive, cosine is negative.

Using the 5-12-13 triangle:

$$
\sin x = \frac{5}{13}
$$

$$
\cos x = -\frac{12}{13}
$$

Other functions:

$$
\cosec x = \frac{13}{5}
$$

$$
\sec x = -\frac{13}{12}
$$

$$
\cot x = -\frac{12}{5}
$$

### 6 To 10. Reduce Using Periodicity

| Part | Expression | Value |
|---|---|---|
| 6 | `sin 765 deg` | `sqrt(2)/2` |
| 7 | `cosec(-1410 deg)` | `-2` |
| 8 | `tan(19pi/3)` | `sqrt(3)` |
| 9 | `sin(-11pi/3)` | `1/2` |
| 10 | `cot(-15pi/4)` | `1` |

Reasoning:

- `765 deg = 720 deg + 45 deg`.
- `-1410 deg + 1440 deg = 30 deg`.
- `19pi/3 = 6pi + pi/3`.
- `-11pi/3 + 4pi = pi/3`.
- `-15pi/4 + 4pi = pi/4`.

## 35. Exercise 3.3 Proof Toolkit

Most proof questions in this exercise use a small set of techniques.

Use these patterns instead of expanding randomly.

### Pattern 1: Convert Everything To Sine And Cosine

Use:

$$
\tan x = \frac{\sin x}{\cos x}, \quad \cot x = \frac{\cos x}{\sin x}
$$

$$
\sec x = \frac{1}{\cos x}, \quad \cosec x = \frac{1}{\sin x}
$$

This is best when the expression mixes several trigonometric functions.

### Pattern 2: Use Sum-To-Product

Use when you see:

$$
\sin A + \sin B
$$

or:

$$
\cos A - \cos B
$$

For example:

$$
\sin 5x - \sin 3x = 2\cos 4x \sin x
$$

because:

$$
\frac{5x+3x}{2}=4x, \quad \frac{5x-3x}{2}=x
$$

### Pattern 3: Use Product-To-Sum

Use when you see products like:

$$
\sin A \sin B
$$

or:

$$
\cos A \cos B
$$

For example:

$$
2\sin A \cos B = \sin(A+B) + \sin(A-B)
$$

### Pattern 4: Use Double-Angle Identities

Use when you see:

$$
\sin 2x, \quad \cos 2x, \quad \tan 2x
$$

For example:

$$
\sin 2x = 2\sin x\cos x
$$

### Pattern 5: Use Triple-Angle Identities

Use when you see:

$$
\sin 3x, \quad \cos 3x, \quad \tan 3x
$$

For example:

$$
\sin 3x = 3\sin x - 4\sin^3 x
$$

## 36. Selected Exercise 3.3 Proof Outlines

### Identity: `sin(n+1)x sin(n+2)x + cos(n+1)x cos(n+2)x = cos x`

Use:

$$
\cos(A-B) = \cos A\cos B + \sin A\sin B
$$

Let:

$$
A = (n+2)x, \quad B = (n+1)x
$$

Then:

$$
A-B = x
$$

So:

$$
\sin(n+1)x\sin(n+2)x + \cos(n+1)x\cos(n+2)x = \cos x
$$

### Identity: `sin^2 6x - sin^2 4x = sin 2x sin 10x`

Start with:

$$
\sin^2 A - \sin^2 B = (\sin A - \sin B)(\sin A + \sin B)
$$

Use sum-to-product:

$$
\sin A - \sin B = 2\cos\left(\frac{A+B}{2}\right)\sin\left(\frac{A-B}{2}\right)
$$

$$
\sin A + \sin B = 2\sin\left(\frac{A+B}{2}\right)\cos\left(\frac{A-B}{2}\right)
$$

Put:

$$
A = 6x, \quad B = 4x
$$

Then:

$$
\frac{A+B}{2} = 5x, \quad \frac{A-B}{2} = x
$$

The product becomes:

$$
4\sin x\cos x\sin5x\cos5x
$$

Using:

$$
2\sin x\cos x = \sin2x
$$

and:

$$
2\sin5x\cos5x = \sin10x
$$

we get:

$$
\sin2x\sin10x
$$

### Identity: `cos^2 2x - cos^2 6x = sin 4x sin 8x`

Use:

$$
\cos^2 A - \cos^2 B = (\cos A - \cos B)(\cos A + \cos B)
$$

Put:

$$
A = 2x, \quad B = 6x
$$

Then apply:

$$
\cos A - \cos B = -2\sin\left(\frac{A+B}{2}\right)\sin\left(\frac{A-B}{2}\right)
$$

and:

$$
\cos A + \cos B = 2\cos\left(\frac{A+B}{2}\right)\cos\left(\frac{A-B}{2}\right)
$$

After simplifying signs:

$$
\cos^2 2x - \cos^2 6x = \sin4x\sin8x
$$

### Identity: `cos 4x = 1 - 8 sin^2 x cos^2 x`

Use:

$$
\cos 4x = 1 - 2\sin^2 2x
$$

and:

$$
\sin 2x = 2\sin x\cos x
$$

Then:

$$
\sin^2 2x = 4\sin^2 x\cos^2 x
$$

So:

$$
\cos 4x = 1 - 2(4\sin^2 x\cos^2 x)
$$

Hence:

$$
\cos 4x = 1 - 8\sin^2 x\cos^2 x
$$

### Identity: `cot x cot 2x - cot 2x cot 3x - cot 3x cot x = 1`

Convert cotangent to tangent if needed, or use:

$$
\cot(A+B) = \frac{\cot A\cot B - 1}{\cot A + \cot B}
$$

Put:

$$
A = x, \quad B = 2x
$$

Then:

$$
\cot 3x = \frac{\cot x\cot 2x - 1}{\cot x + \cot 2x}
$$

Cross-multiply:

$$
\cot 3x(\cot x + \cot 2x) = \cot x\cot 2x - 1
$$

Rearrange:

$$
\cot x\cot 2x - \cot 2x\cot 3x - \cot 3x\cot x = 1
$$

## 37. Miscellaneous Exercise Guidance

### Half-Angle Method

For questions asking for:

$$
\sin\frac{x}{2}, \quad \cos\frac{x}{2}, \quad \tan\frac{x}{2}
$$

use:

$$
\sin^2\frac{x}{2} = \frac{1-\cos x}{2}
$$

$$
\cos^2\frac{x}{2} = \frac{1+\cos x}{2}
$$

$$
\tan\frac{x}{2} = \frac{\sin x}{1+\cos x}
$$

or:

$$
\tan\frac{x}{2} = \frac{1-\cos x}{\sin x}
$$

Choose signs according to the quadrant of `x/2`.

### Example: `tan x = -4/3`, x In Quadrant II

In quadrant II:

$$
\sin x > 0, \quad \cos x < 0
$$

Using 3-4-5:

$$
\sin x = \frac{4}{5}, \quad \cos x = -\frac{3}{5}
$$

Since:

$$
\frac{x}{2}
$$

lies in quadrant I, both sine and cosine of `x/2` are positive.

Now:

$$
\sin^2\frac{x}{2} = \frac{1-\cos x}{2}
= \frac{1 + 3/5}{2}
= \frac{4}{5}
$$

So:

$$
\sin\frac{x}{2} = \frac{2}{\sqrt5}
$$

Also:

$$
\cos^2\frac{x}{2} = \frac{1+\cos x}{2}
= \frac{1 - 3/5}{2}
= \frac{1}{5}
$$

So:

$$
\cos\frac{x}{2} = \frac{1}{\sqrt5}
$$

Therefore:

$$
\tan\frac{x}{2} = 2
$$

## 38. High-Value Identity Bank

### Basic

$$
\sin^2 x + \cos^2 x = 1
$$

$$
1 + \tan^2 x = \sec^2 x
$$

$$
1 + \cot^2 x = \cosec^2 x
$$

### Negative Angles

$$
\sin(-x) = -\sin x
$$

$$
\cos(-x) = \cos x
$$

$$
\tan(-x) = -\tan x
$$

### Periods

$$
\sin(x+2\pi) = \sin x
$$

$$
\cos(x+2\pi) = \cos x
$$

$$
\tan(x+\pi) = \tan x
$$

### Sum And Difference

$$
\sin(x+y) = \sin x\cos y + \cos x\sin y
$$

$$
\sin(x-y) = \sin x\cos y - \cos x\sin y
$$

$$
\cos(x+y) = \cos x\cos y - \sin x\sin y
$$

$$
\cos(x-y) = \cos x\cos y + \sin x\sin y
$$

### Double Angle

$$
\sin2x = 2\sin x\cos x
$$

$$
\cos2x = 2\cos^2 x - 1
$$

$$
\cos2x = 1 - 2\sin^2 x
$$

$$
\tan2x = \frac{2\tan x}{1-\tan^2 x}
$$

### Triple Angle

$$
\sin3x = 3\sin x - 4\sin^3 x
$$

$$
\cos3x = 4\cos^3 x - 3\cos x
$$

$$
\tan3x = \frac{3\tan x-\tan^3 x}{1-3\tan^2 x}
$$

## 39. Common Mistakes And Corrections

| Mistake | Correction |
|---|---|
| Using `l = r theta` with theta in degrees | Convert theta to radians first |
| Forgetting signs in quadrants | Use the quadrant sign table |
| Writing `sin(x+y)=sin x + sin y` | False; use the sum identity |
| Writing `cos(x-y)=cos x - cos y` | False; use the difference identity |
| Ignoring undefined points | Tangent and secant are undefined where cosine is zero |
| Treating radians and degrees as the same | They are different measures of the same angle |
| Forgetting periodicity | Reduce large angles before evaluating |
| Using wrong half-angle sign | Decide quadrant of `x/2` first |

## 40. Quick Self-Test

1. Convert `90 deg` to radians.
2. Convert `pi/6` to degrees.
3. If `r = 10` and `theta = pi/3`, find arc length.
4. What are `sin(pi/2)` and `cos(pi/2)`?
5. What is the period of sine?
6. What is the period of tangent?
7. In which quadrants is cosine positive?
8. State `sin(x+y)`.
9. State `cos(x-y)`.
10. State `tan(x+y)`.
11. Find `sin 15 deg`.
12. Find `tan(pi/8)`.

## 41. Self-Test Answers

1. `pi/2`.
2. `30 deg`.
3. `10pi/3`.
4. `sin(pi/2)=1`, `cos(pi/2)=0`.
5. `2pi`.
6. `pi`.
7. Quadrants I and IV.
8. `sin x cos y + cos x sin y`.
9. `cos x cos y + sin x sin y`.
10. `(tan x + tan y)/(1 - tan x tan y)`.
11. `(sqrt6 - sqrt2)/4`.
12. `sqrt2 - 1`.

## 42. Final Chapter Summary

Angles measure rotation.

Degrees and radians are two units for measuring angles, connected by `pi radians = 180 deg`.

The radian measure is natural because it directly relates arc length and radius through `l = r theta`.

The unit circle defines sine and cosine as coordinates, and all other trigonometric functions are built from them.

The identity `sin^2 x + cos^2 x = 1` is the foundation for many other results.

Sine and cosine have period `2pi`, while tangent and cotangent have period `pi`.

Signs of trigonometric functions depend on the quadrant.

Domains and ranges must be remembered carefully, especially for tangent, cotangent, secant, and cosecant.

The sum, difference, double-angle, triple-angle, sum-to-product, and product-to-sum identities are the main tools for exact evaluation and proof.

The safest way to prove identities is to start with the more complicated side, convert strategically, use known identities, and keep domain restrictions in mind.
