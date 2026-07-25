# Chapter 7: Coordinate Geometry
### NCERT Class 10 - Maths

This learner version rewrites the raw chapter into a clean study guide. It keeps the textbook ideas intact, removes extraction noise, and adds detailed worked reasoning so that a learner can solve questions without depending on memorised shortcuts.

---

## Chapter at a Glance

| Item | Details |
|---|---|
| Class | 10 |
| Subject | Maths |
| Chapter | 7 |
| Chapter name | Coordinate Geometry |
| Main skill | Using algebra to measure and divide geometric figures on the coordinate plane |
| Core formulas | Distance formula, section formula, midpoint formula |
| Typical question types | Find distance, prove collinearity, identify a triangle or quadrilateral, find a point dividing a segment, find a ratio, use midpoint properties |

---

## Section Structure

| Section | Focus | What you should be able to do |
|---|---|---|
| 7.1 | Introduction | Read and plot points using coordinates |
| 7.2 | Distance Formula | Find the distance between two points and use it in geometry questions |
| 7.3 | Section Formula | Find the coordinates of a point dividing a line segment internally |
| 7.4 | Summary | Revise formulas and decide which formula fits a question |

---

## Learning Outcomes

By the end of this chapter, you should be able to:

1. locate a point using its abscissa and ordinate;
2. identify points on the x-axis and y-axis;
3. find the distance between two points in the coordinate plane;
4. find the distance of a point from the origin;
5. decide whether three given points are collinear;
6. decide whether three points form an isosceles, equilateral, scalene, or right triangle;
7. identify special quadrilaterals using side lengths and diagonals;
8. find a point that divides a line segment in a given ratio;
9. find the midpoint of a line segment;
10. use midpoint equality to solve parallelogram problems;
11. convert a word problem into coordinate points and solve it step by step.

---

## Key Terms

| Term | Meaning |
|---|---|
| Coordinate plane | The plane formed by the x-axis and y-axis |
| x-axis | The horizontal axis |
| y-axis | The vertical axis |
| Origin | The point `(0, 0)` where the two axes meet |
| Abscissa | The x-coordinate of a point |
| Ordinate | The y-coordinate of a point |
| Quadrant | One of the four regions into which the axes divide the plane |
| Distance formula | Formula used to find the distance between two coordinate points |
| Section formula | Formula used to find a point that divides a segment in a given ratio |
| Midpoint formula | Special case of section formula for ratio `1 : 1` |
| Collinear points | Points lying on the same straight line |
| Internal division | A point divides a segment internally if it lies between the two endpoints |

---

# Unit 7A: Coordinate Plane Basics

## Coordinates of a Point

A point is written as:

$$
(x, y)
$$

Here:

- `x` tells how far the point is from the y-axis.
- `y` tells how far the point is from the x-axis.
- The x-coordinate is also called the abscissa.
- The y-coordinate is also called the ordinate.

Example:

The point `(4, -3)` means:

- move 4 units to the right of the origin;
- move 3 units downward.

## Points on the Axes

| Location | General form | Example |
|---|---:|---:|
| On the x-axis | `(x, 0)` | `(5, 0)` |
| On the y-axis | `(0, y)` | `(0, -6)` |
| At the origin | `(0, 0)` | `(0, 0)` |

Important idea:

- If a point lies on the x-axis, its y-coordinate is `0`.
- If a point lies on the y-axis, its x-coordinate is `0`.

## Why Coordinate Geometry Matters

Coordinate geometry connects algebra and geometry.

Geometry talks about shapes, distances, points, and lines.

Algebra talks about numbers, equations, and formulas.

Coordinate geometry lets us study geometric shapes using algebraic calculations.

For example:

- Instead of measuring a line segment using a ruler, we can calculate its length.
- Instead of drawing a parallelogram and guessing, we can prove it using coordinates.
- Instead of locating a relay tower by trial, we can calculate its exact position.

---

# Unit 7B: Distance Formula

## Distance Along One Axis

If two points lie on the x-axis, their distance is the difference of their x-coordinates.

Example:

For `A(4, 0)` and `B(6, 0)`:

$$
AB = 6 - 4 = 2
$$

If two points lie on the y-axis, their distance is the difference of their y-coordinates.

Example:

For `C(0, 3)` and `D(0, 8)`:

$$
CD = 8 - 3 = 5
$$

In general, distance is never negative. If the subtraction gives a negative value, take its positive value.

## Distance Between Two General Points

Let:

$$
P(x_1, y_1)
$$

and

$$
Q(x_2, y_2)
$$

The horizontal difference is:

$$
x_2 - x_1
$$

The vertical difference is:

$$
y_2 - y_1
$$

These two differences form the legs of a right triangle. By Pythagoras theorem:

$$
PQ^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2
$$

Therefore:

$$
PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

This is the distance formula.

## Equivalent Form

You may also write:

$$
PQ = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}
$$

Both forms give the same answer because the square of a negative number is positive.

For example:

$$
(x_2 - x_1)^2 = (x_1 - x_2)^2
$$

## Distance From the Origin

For a point `P(x, y)`, the origin is `O(0, 0)`.

Using the distance formula:

$$
OP = \sqrt{(x - 0)^2 + (y - 0)^2}
$$

So:

$$
OP = \sqrt{x^2 + y^2}
$$

---

# Unit 7C: How to Use the Distance Formula

## Standard Method

When asked to find the distance between two points:

1. Write the two points clearly.
2. Identify `x_1`, `y_1`, `x_2`, and `y_2`.
3. Substitute into the distance formula.
4. Square each difference carefully.
5. Add the squares.
6. Take the square root.
7. Simplify the square root if possible.

Example:

Find the distance between `A(2, 3)` and `B(4, 1)`.

Here:

$$
x_1 = 2,\quad y_1 = 3,\quad x_2 = 4,\quad y_2 = 1
$$

Then:

$$
AB = \sqrt{(4 - 2)^2 + (1 - 3)^2}
$$

$$
AB = \sqrt{2^2 + (-2)^2}
$$

$$
AB = \sqrt{4 + 4}
$$

$$
AB = \sqrt{8}
$$

$$
AB = 2\sqrt{2}
$$

## Common Mistakes

| Mistake | Why it is wrong | Correct habit |
|---|---|---|
| Forgetting the square root | The formula gives distance, not distance squared | Write the final square root |
| Treating negative differences as negative distances | Squaring removes the sign | Square each difference before adding |
| Adding coordinates directly | Distance depends on coordinate differences | Subtract matching coordinates first |
| Mixing x and y coordinates | It changes the geometry | Keep x-difference and y-difference separate |
| Assuming all points form a triangle | Three collinear points do not form a triangle | Check collinearity if required |

---

# Unit 7D: Using Distance to Study Triangles

## Do Three Points Form a Triangle?

Three points form a triangle only if they are not collinear.

Using distances:

- If the sum of two smaller distances equals the largest distance, the points are collinear.
- If the sum of any two distances is greater than the third distance, the points form a triangle.

## Identifying the Type of Triangle

Let the side lengths be `a`, `b`, and `c`.

| Condition | Triangle type |
|---|---|
| All three sides equal | Equilateral |
| Exactly two sides equal | Isosceles |
| All three sides unequal | Scalene |
| Largest side squared equals sum of squares of other two sides | Right triangle |

If:

$$
c^2 = a^2 + b^2
$$

then the triangle is right-angled, with the right angle opposite the side `c`.

## Worked Example: Triangle Type

Show whether the points `P(3, 2)`, `Q(-2, -3)`, and `R(2, 3)` form a triangle. If they do, identify the type.

Find the three distances.

For `PQ`:

$$
PQ = \sqrt{(-2 - 3)^2 + (-3 - 2)^2}
$$

$$
PQ = \sqrt{(-5)^2 + (-5)^2}
$$

$$
PQ = \sqrt{25 + 25} = \sqrt{50}
$$

For `QR`:

$$
QR = \sqrt{(2 - (-2))^2 + (3 - (-3))^2}
$$

$$
QR = \sqrt{4^2 + 6^2}
$$

$$
QR = \sqrt{16 + 36} = \sqrt{52}
$$

For `PR`:

$$
PR = \sqrt{(2 - 3)^2 + (3 - 2)^2}
$$

$$
PR = \sqrt{(-1)^2 + 1^2}
$$

$$
PR = \sqrt{2}
$$

Now compare squares:

$$
PQ^2 + PR^2 = 50 + 2 = 52
$$

and

$$
QR^2 = 52
$$

So:

$$
PQ^2 + PR^2 = QR^2
$$

Therefore, the points form a right triangle, with the right angle at `P`.

---

# Unit 7E: Using Distance to Study Quadrilaterals

Coordinate geometry can prove the type of a quadrilateral by comparing side lengths and diagonal lengths.

## Useful Tests

| Evidence from distances | Likely conclusion |
|---|---|
| Four sides equal and diagonals equal | Square |
| Four sides equal but diagonals unequal | Rhombus |
| Opposite sides equal and diagonals equal | Rectangle |
| Opposite sides equal | Parallelogram |
| One pair of opposite sides parallel | Trapezium |
| No special equality or parallel pattern | General quadrilateral |

This chapter mainly uses distances, so the most common tests are side equality and diagonal equality.

## Worked Example: Proving a Square

Show that the points `A(1, 7)`, `B(4, 2)`, `C(-1, -1)`, and `D(-4, 4)` are vertices of a square.

Find the side lengths.

$$
AB = \sqrt{(4 - 1)^2 + (2 - 7)^2}
$$

$$
AB = \sqrt{3^2 + (-5)^2} = \sqrt{34}
$$

$$
BC = \sqrt{(-1 - 4)^2 + (-1 - 2)^2}
$$

$$
BC = \sqrt{(-5)^2 + (-3)^2} = \sqrt{34}
$$

$$
CD = \sqrt{(-4 - (-1))^2 + (4 - (-1))^2}
$$

$$
CD = \sqrt{(-3)^2 + 5^2} = \sqrt{34}
$$

$$
DA = \sqrt{(1 - (-4))^2 + (7 - 4)^2}
$$

$$
DA = \sqrt{5^2 + 3^2} = \sqrt{34}
$$

All four sides are equal.

Now find the diagonals.

$$
AC = \sqrt{(-1 - 1)^2 + (-1 - 7)^2}
$$

$$
AC = \sqrt{(-2)^2 + (-8)^2} = \sqrt{68}
$$

$$
BD = \sqrt{(-4 - 4)^2 + (4 - 2)^2}
$$

$$
BD = \sqrt{(-8)^2 + 2^2} = \sqrt{68}
$$

The diagonals are equal.

Therefore, the quadrilateral is a square.

---

# Unit 7F: Collinearity

## Meaning

Three or more points are collinear if they lie on the same straight line.

## Distance Test for Collinearity

For three points `A`, `B`, and `C`, calculate:

$$
AB,\quad BC,\quad AC
$$

If:

$$
AB + BC = AC
$$

then `A`, `B`, and `C` are collinear, with `B` between `A` and `C`.

The same idea works with any order. The largest distance must be equal to the sum of the other two distances.

## Worked Example: Are the Points in a Line?

Ashima, Bharti, and Camella are seated at:

$$
A(3, 1),\quad B(6, 4),\quad C(8, 6)
$$

Find the distances.

$$
AB = \sqrt{(6 - 3)^2 + (4 - 1)^2}
$$

$$
AB = \sqrt{3^2 + 3^2} = 3\sqrt{2}
$$

$$
BC = \sqrt{(8 - 6)^2 + (6 - 4)^2}
$$

$$
BC = \sqrt{2^2 + 2^2} = 2\sqrt{2}
$$

$$
AC = \sqrt{(8 - 3)^2 + (6 - 1)^2}
$$

$$
AC = \sqrt{5^2 + 5^2} = 5\sqrt{2}
$$

Now:

$$
AB + BC = 3\sqrt{2} + 2\sqrt{2} = 5\sqrt{2}
$$

So:

$$
AB + BC = AC
$$

Therefore, the points are collinear.

---

# Unit 7G: Equidistant Points

## What Equidistant Means

A point is equidistant from two given points if its distance from both points is the same.

If `P(x, y)` is equidistant from `A` and `B`, then:

$$
PA = PB
$$

It is usually easier to square both sides:

$$
PA^2 = PB^2
$$

This avoids square roots.

## Worked Example: Find a Relation

Find a relation between `x` and `y` such that the point `P(x, y)` is equidistant from `A(7, 1)` and `B(3, 5)`.

Since `P` is equidistant from `A` and `B`:

$$
PA^2 = PB^2
$$

So:

$$
(x - 7)^2 + (y - 1)^2 = (x - 3)^2 + (y - 5)^2
$$

Expand:

$$
x^2 - 14x + 49 + y^2 - 2y + 1 = x^2 - 6x + 9 + y^2 - 10y + 25
$$

Cancel `x^2` and `y^2` on both sides:

$$
-14x - 2y + 50 = -6x - 10y + 34
$$

Bring like terms together:

$$
-8x + 8y + 16 = 0
$$

Divide by `-8`:

$$
x - y = 2
$$

Required relation:

$$
x - y = 2
$$

## Worked Example: Point on the y-axis

Find a point on the y-axis which is equidistant from `A(6, 5)` and `B(-4, 3)`.

A point on the y-axis has the form:

$$
P(0, y)
$$

Since `P` is equidistant from `A` and `B`:

$$
PA^2 = PB^2
$$

So:

$$
(0 - 6)^2 + (y - 5)^2 = (0 - (-4))^2 + (y - 3)^2
$$

$$
36 + (y - 5)^2 = 16 + (y - 3)^2
$$

Expand:

$$
36 + y^2 - 10y + 25 = 16 + y^2 - 6y + 9
$$

$$
y^2 - 10y + 61 = y^2 - 6y + 25
$$

Cancel `y^2`:

$$
-10y + 61 = -6y + 25
$$

$$
36 = 4y
$$

$$
y = 9
$$

Therefore, the required point is:

$$
(0, 9)
$$

---

# Unit 7H: Section Formula

## Internal Division

Suppose a point `P` lies on the line segment joining:

$$
A(x_1, y_1)
$$

and

$$
B(x_2, y_2)
$$

If `P` divides `AB` internally in the ratio:

$$
m_1 : m_2
$$

then:

$$
AP : PB = m_1 : m_2
$$

The coordinates of `P` are:

$$
P\left(\frac{m_1x_2 + m_2x_1}{m_1 + m_2},\frac{m_1y_2 + m_2y_1}{m_1 + m_2}\right)
$$

This is the section formula.

## Important Order Rule

If the ratio is `m_1 : m_2` and the points are `A` then `B`, then:

$$
x = \frac{m_1x_2 + m_2x_1}{m_1 + m_2}
$$

Notice the cross-multiplication pattern:

- `m_1` is multiplied by the coordinate of `B`;
- `m_2` is multiplied by the coordinate of `A`.

This is because a point closer to `B` has a larger share of `A`'s direction already covered.

## Section Formula for Ratio k : 1

If:

$$
AP : PB = k : 1
$$

then:

$$
P\left(\frac{kx_2 + x_1}{k + 1},\frac{ky_2 + y_1}{k + 1}\right)
$$

## Midpoint Formula

The midpoint divides a line segment in the ratio:

$$
1 : 1
$$

So the midpoint of `A(x_1, y_1)` and `B(x_2, y_2)` is:

$$
\left(\frac{x_1 + x_2}{2},\frac{y_1 + y_2}{2}\right)
$$

---

# Unit 7I: How to Apply Section Formula

## Standard Method

When asked to find a point dividing a segment:

1. Name the endpoints as `A(x_1, y_1)` and `B(x_2, y_2)`.
2. Write the ratio as `m_1 : m_2`.
3. Use the section formula carefully.
4. Simplify x-coordinate and y-coordinate separately.
5. Write the answer as an ordered pair.

## Worked Example: Point Dividing a Segment

Find the point which divides the line segment joining `(4, -3)` and `(8, 5)` in the ratio `3 : 1` internally.

Let:

$$
A(4, -3),\quad B(8, 5)
$$

and:

$$
m_1 : m_2 = 3 : 1
$$

Using section formula:

$$
x = \frac{3(8) + 1(4)}{3 + 1}
$$

$$
x = \frac{24 + 4}{4} = 7
$$

For the y-coordinate:

$$
y = \frac{3(5) + 1(-3)}{3 + 1}
$$

$$
y = \frac{15 - 3}{4} = 3
$$

Therefore, the required point is:

$$
(7, 3)
$$

## Worked Example: Find the Ratio

In what ratio does the point `P(-4, 6)` divide the line segment joining `A(-6, 10)` and `B(3, -8)`?

Let:

$$
AP : PB = m_1 : m_2
$$

Using the x-coordinate:

$$
-4 = \frac{m_1(3) + m_2(-6)}{m_1 + m_2}
$$

$$
-4(m_1 + m_2) = 3m_1 - 6m_2
$$

$$
-4m_1 - 4m_2 = 3m_1 - 6m_2
$$

$$
2m_2 = 7m_1
$$

So:

$$
\frac{m_1}{m_2} = \frac{2}{7}
$$

Therefore:

$$
m_1 : m_2 = 2 : 7
$$

Check with the y-coordinate:

$$
\frac{2(-8) + 7(10)}{2 + 7} = \frac{-16 + 70}{9} = 6
$$

The y-coordinate matches.

Therefore, `P(-4, 6)` divides `AB` internally in the ratio:

$$
2 : 7
$$

## Worked Example: Points of Trisection

Find the points of trisection of the segment joining `A(2, -2)` and `B(-7, 4)`.

Trisection means the segment is divided into three equal parts.

Let the points be `P` and `Q`.

Then:

$$
AP : PB = 1 : 2
$$

and:

$$
AQ : QB = 2 : 1
$$

For `P`:

$$
x = \frac{1(-7) + 2(2)}{1 + 2} = \frac{-7 + 4}{3} = -1
$$

$$
y = \frac{1(4) + 2(-2)}{1 + 2} = \frac{4 - 4}{3} = 0
$$

So:

$$
P(-1, 0)
$$

For `Q`:

$$
x = \frac{2(-7) + 1(2)}{2 + 1} = \frac{-14 + 2}{3} = -4
$$

$$
y = \frac{2(4) + 1(-2)}{2 + 1} = \frac{8 - 2}{3} = 2
$$

So:

$$
Q(-4, 2)
$$

The points of trisection are:

$$
(-1, 0)\quad\text{and}\quad(-4, 2)
$$

## Worked Example: Ratio in Which the y-axis Divides a Segment

Find the ratio in which the y-axis divides the segment joining `A(5, -6)` and `B(-1, -4)`. Also find the point of intersection.

Let the ratio be:

$$
k : 1
$$

The point dividing `A` and `B` in this ratio is:

$$
\left(\frac{k(-1) + 1(5)}{k + 1},\frac{k(-4) + 1(-6)}{k + 1}\right)
$$

That is:

$$
\left(\frac{5 - k}{k + 1},\frac{-4k - 6}{k + 1}\right)
$$

The point lies on the y-axis, so its x-coordinate is `0`.

Therefore:

$$
\frac{5 - k}{k + 1} = 0
$$

So:

$$
5 - k = 0
$$

$$
k = 5
$$

Hence the ratio is:

$$
5 : 1
$$

Now find the y-coordinate:

$$
y = \frac{-4(5) - 6}{5 + 1}
$$

$$
y = \frac{-20 - 6}{6}
$$

$$
y = -\frac{13}{3}
$$

The point of intersection is:

$$
\left(0,-\frac{13}{3}\right)
$$

## Worked Example: Parallelogram with Unknown Coordinate

If `A(6, 1)`, `B(8, 2)`, `C(9, 4)`, and `D(p, 3)` are vertices of a parallelogram taken in order, find `p`.

In a parallelogram, diagonals bisect each other.

So the midpoint of `AC` equals the midpoint of `BD`.

Midpoint of `AC`:

$$
\left(\frac{6 + 9}{2},\frac{1 + 4}{2}\right)
$$

$$
= \left(\frac{15}{2},\frac{5}{2}\right)
$$

Midpoint of `BD`:

$$
\left(\frac{8 + p}{2},\frac{2 + 3}{2}\right)
$$

$$
= \left(\frac{8 + p}{2},\frac{5}{2}\right)
$$

Equate x-coordinates:

$$
\frac{15}{2} = \frac{8 + p}{2}
$$

$$
15 = 8 + p
$$

$$
p = 7
$$

---

# Unit 7J: Solved Exercise 7.1

## Question 1: Find the Distance Between Each Pair of Points

### Part I: `(2, 3)` and `(4, 1)`

$$
d = \sqrt{(4 - 2)^2 + (1 - 3)^2}
$$

$$
d = \sqrt{2^2 + (-2)^2}
$$

$$
d = \sqrt{4 + 4}
$$

$$
d = 2\sqrt{2}
$$

Answer:

$$
2\sqrt{2}
$$

### Part II: `(-5, 7)` and `(-1, 3)`

$$
d = \sqrt{(-1 - (-5))^2 + (3 - 7)^2}
$$

$$
d = \sqrt{4^2 + (-4)^2}
$$

$$
d = \sqrt{16 + 16}
$$

$$
d = 4\sqrt{2}
$$

Answer:

$$
4\sqrt{2}
$$

### Part III: `(a, b)` and `(-a, -b)`

$$
d = \sqrt{(-a - a)^2 + (-b - b)^2}
$$

$$
d = \sqrt{(-2a)^2 + (-2b)^2}
$$

$$
d = \sqrt{4a^2 + 4b^2}
$$

$$
d = 2\sqrt{a^2 + b^2}
$$

Answer:

$$
2\sqrt{a^2 + b^2}
$$

## Question 2: Distance Between `(0, 0)` and `(36, 15)`

$$
d = \sqrt{(36 - 0)^2 + (15 - 0)^2}
$$

$$
d = \sqrt{36^2 + 15^2}
$$

$$
d = \sqrt{1296 + 225}
$$

$$
d = \sqrt{1521}
$$

$$
d = 39
$$

The distance between the two towns is:

$$
39\text{ km}
$$

## Question 3: Check Whether `(1, 5)`, `(2, 3)`, and `(-2, -11)` Are Collinear

Let:

$$
A(1, 5),\quad B(2, 3),\quad C(-2, -11)
$$

Find `AB`:

$$
AB = \sqrt{(2 - 1)^2 + (3 - 5)^2}
$$

$$
AB = \sqrt{1^2 + (-2)^2}
$$

$$
AB = \sqrt{5}
$$

Find `BC`:

$$
BC = \sqrt{(-2 - 2)^2 + (-11 - 3)^2}
$$

$$
BC = \sqrt{(-4)^2 + (-14)^2}
$$

$$
BC = \sqrt{212} = 2\sqrt{53}
$$

Find `AC`:

$$
AC = \sqrt{(-2 - 1)^2 + (-11 - 5)^2}
$$

$$
AC = \sqrt{(-3)^2 + (-16)^2}
$$

$$
AC = \sqrt{265}
$$

No one distance is equal to the sum of the other two distances.

Therefore, the points are not collinear.

## Question 4: Check Whether `(5, -2)`, `(6, 4)`, and `(7, -2)` Form an Isosceles Triangle

Let:

$$
A(5, -2),\quad B(6, 4),\quad C(7, -2)
$$

Find `AB`:

$$
AB = \sqrt{(6 - 5)^2 + (4 - (-2))^2}
$$

$$
AB = \sqrt{1^2 + 6^2}
$$

$$
AB = \sqrt{37}
$$

Find `BC`:

$$
BC = \sqrt{(7 - 6)^2 + (-2 - 4)^2}
$$

$$
BC = \sqrt{1^2 + (-6)^2}
$$

$$
BC = \sqrt{37}
$$

Find `AC`:

$$
AC = \sqrt{(7 - 5)^2 + (-2 - (-2))^2}
$$

$$
AC = \sqrt{2^2 + 0^2}
$$

$$
AC = 2
$$

Since:

$$
AB = BC
$$

the triangle is isosceles.

## Question 5: Classroom Seating and Square Check

The raw extraction refers to Fig. 7.8, but the figure itself is not visible in the extracted text. In the standard textbook figure, the four friends are placed at:

$$
A(3, 4),\quad B(6, 7),\quad C(9, 4),\quad D(6, 1)
$$

Check the side lengths:

$$
AB = \sqrt{(6 - 3)^2 + (7 - 4)^2} = \sqrt{18} = 3\sqrt{2}
$$

$$
BC = \sqrt{(9 - 6)^2 + (4 - 7)^2} = \sqrt{18} = 3\sqrt{2}
$$

$$
CD = \sqrt{(6 - 9)^2 + (1 - 4)^2} = \sqrt{18} = 3\sqrt{2}
$$

$$
DA = \sqrt{(3 - 6)^2 + (4 - 1)^2} = \sqrt{18} = 3\sqrt{2}
$$

All four sides are equal.

Check the diagonals:

$$
AC = \sqrt{(9 - 3)^2 + (4 - 4)^2} = 6
$$

$$
BD = \sqrt{(6 - 6)^2 + (1 - 7)^2} = 6
$$

The diagonals are equal.

Therefore, `ABCD` is a square. Champa is correct.

## Question 6: Name the Type of Quadrilateral

### Part I

Points:

$$
A(-1, -2),\quad B(1, 0),\quad C(-1, 2),\quad D(-3, 0)
$$

Side lengths:

$$
AB = \sqrt{(1 + 1)^2 + (0 + 2)^2} = \sqrt{8} = 2\sqrt{2}
$$

$$
BC = \sqrt{(-1 - 1)^2 + (2 - 0)^2} = \sqrt{8} = 2\sqrt{2}
$$

$$
CD = \sqrt{(-3 + 1)^2 + (0 - 2)^2} = \sqrt{8} = 2\sqrt{2}
$$

$$
DA = \sqrt{(-1 + 3)^2 + (-2 - 0)^2} = \sqrt{8} = 2\sqrt{2}
$$

Diagonals:

$$
AC = \sqrt{(-1 + 1)^2 + (2 + 2)^2} = 4
$$

$$
BD = \sqrt{(-3 - 1)^2 + (0 - 0)^2} = 4
$$

All sides are equal and diagonals are equal.

Therefore, the quadrilateral is a square.

### Part II

Points:

$$
A(-3, 5),\quad B(3, 1),\quad C(0, 3),\quad D(-1, -4)
$$

Side lengths:

$$
AB = \sqrt{(3 + 3)^2 + (1 - 5)^2} = \sqrt{52}
$$

$$
BC = \sqrt{(0 - 3)^2 + (3 - 1)^2} = \sqrt{13}
$$

$$
CD = \sqrt{(-1 - 0)^2 + (-4 - 3)^2} = \sqrt{50}
$$

$$
DA = \sqrt{(-3 + 1)^2 + (5 + 4)^2} = \sqrt{85}
$$

The side lengths do not show equal opposite sides or all equal sides.

Therefore, no special quadrilateral is formed from these points in the given order.

### Part III

Points:

$$
A(4, 5),\quad B(7, 6),\quad C(4, 3),\quad D(1, 2)
$$

Side lengths:

$$
AB = \sqrt{(7 - 4)^2 + (6 - 5)^2} = \sqrt{10}
$$

$$
BC = \sqrt{(4 - 7)^2 + (3 - 6)^2} = \sqrt{18}
$$

$$
CD = \sqrt{(1 - 4)^2 + (2 - 3)^2} = \sqrt{10}
$$

$$
DA = \sqrt{(4 - 1)^2 + (5 - 2)^2} = \sqrt{18}
$$

Opposite sides are equal:

$$
AB = CD
$$

and:

$$
BC = DA
$$

Therefore, the quadrilateral is a parallelogram.

## Question 7: Point on the x-axis Equidistant From `(2, -5)` and `(-2, 9)`

A point on the x-axis has the form:

$$
P(x, 0)
$$

Let:

$$
A(2, -5),\quad B(-2, 9)
$$

Since `P` is equidistant from `A` and `B`:

$$
PA^2 = PB^2
$$

So:

$$
(x - 2)^2 + (0 + 5)^2 = (x + 2)^2 + (0 - 9)^2
$$

$$
(x - 2)^2 + 25 = (x + 2)^2 + 81
$$

Expand:

$$
x^2 - 4x + 4 + 25 = x^2 + 4x + 4 + 81
$$

$$
x^2 - 4x + 29 = x^2 + 4x + 85
$$

Cancel `x^2`:

$$
-4x + 29 = 4x + 85
$$

$$
-8x = 56
$$

$$
x = -7
$$

Required point:

$$
(-7, 0)
$$

## Question 8: Values of y if Distance Between `P(2, -3)` and `Q(10, y)` Is 10

Use the distance formula:

$$
10 = \sqrt{(10 - 2)^2 + (y - (-3))^2}
$$

$$
10 = \sqrt{8^2 + (y + 3)^2}
$$

Square both sides:

$$
100 = 64 + (y + 3)^2
$$

$$
(y + 3)^2 = 36
$$

So:

$$
y + 3 = 6
$$

or:

$$
y + 3 = -6
$$

Therefore:

$$
y = 3
$$

or:

$$
y = -9
$$

## Question 9: Q(0, 1) Equidistant From P(5, -3) and R(x, 6)

Given:

$$
Q(0, 1),\quad P(5, -3),\quad R(x, 6)
$$

Since `Q` is equidistant from `P` and `R`:

$$
QP = QR
$$

Use squares:

$$
QP^2 = QR^2
$$

Find `QP^2`:

$$
QP^2 = (5 - 0)^2 + (-3 - 1)^2
$$

$$
QP^2 = 25 + 16 = 41
$$

Find `QR^2`:

$$
QR^2 = (x - 0)^2 + (6 - 1)^2
$$

$$
QR^2 = x^2 + 25
$$

Equate:

$$
x^2 + 25 = 41
$$

$$
x^2 = 16
$$

$$
x = 4\quad\text{or}\quad x = -4
$$

Since `QR^2 = 41`:

$$
QR = \sqrt{41}
$$

If `x = 4`, then `R(4, 6)`:

$$
PR = \sqrt{(4 - 5)^2 + (6 - (-3))^2}
$$

$$
PR = \sqrt{1 + 81} = \sqrt{82}
$$

If `x = -4`, then `R(-4, 6)`:

$$
PR = \sqrt{(-4 - 5)^2 + (6 - (-3))^2}
$$

$$
PR = \sqrt{81 + 81} = 9\sqrt{2}
$$

Answer:

$$
x = 4\text{ or }-4,\quad QR = \sqrt{41}
$$

and:

$$
PR = \sqrt{82}\text{ if }x = 4
$$

while:

$$
PR = 9\sqrt{2}\text{ if }x = -4
$$

## Question 10: Relation Between x and y

Find a relation between `x` and `y` such that `P(x, y)` is equidistant from `(3, 6)` and `(-3, 4)`.

Let:

$$
A(3, 6),\quad B(-3, 4)
$$

Since `P` is equidistant from `A` and `B`:

$$
PA^2 = PB^2
$$

So:

$$
(x - 3)^2 + (y - 6)^2 = (x + 3)^2 + (y - 4)^2
$$

Expand:

$$
x^2 - 6x + 9 + y^2 - 12y + 36 = x^2 + 6x + 9 + y^2 - 8y + 16
$$

Cancel `x^2`, `y^2`, and simplify:

$$
-6x - 12y + 45 = 6x - 8y + 25
$$

$$
-12x - 4y + 20 = 0
$$

Divide by `-4`:

$$
3x + y - 5 = 0
$$

Required relation:

$$
3x + y = 5
$$

---

# Unit 7K: Solved Exercise 7.2

## Question 1: Point Dividing `(-1, 7)` and `(4, -3)` in Ratio `2 : 3`

Let:

$$
A(-1, 7),\quad B(4, -3)
$$

and:

$$
AP : PB = 2 : 3
$$

Using section formula:

$$
x = \frac{2(4) + 3(-1)}{2 + 3}
$$

$$
x = \frac{8 - 3}{5} = 1
$$

$$
y = \frac{2(-3) + 3(7)}{2 + 3}
$$

$$
y = \frac{-6 + 21}{5} = 3
$$

Required point:

$$
(1, 3)
$$

## Question 2: Points of Trisection of `(4, -1)` and `(-2, -3)`

Let:

$$
A(4, -1),\quad B(-2, -3)
$$

The first point divides `AB` in the ratio `1 : 2`.

For first point `P`:

$$
x = \frac{1(-2) + 2(4)}{1 + 2}
$$

$$
x = \frac{-2 + 8}{3} = 2
$$

$$
y = \frac{1(-3) + 2(-1)}{1 + 2}
$$

$$
y = \frac{-3 - 2}{3} = -\frac{5}{3}
$$

So:

$$
P\left(2,-\frac{5}{3}\right)
$$

The second point divides `AB` in the ratio `2 : 1`.

For second point `Q`:

$$
x = \frac{2(-2) + 1(4)}{2 + 1}
$$

$$
x = \frac{-4 + 4}{3} = 0
$$

$$
y = \frac{2(-3) + 1(-1)}{2 + 1}
$$

$$
y = \frac{-6 - 1}{3} = -\frac{7}{3}
$$

So:

$$
Q\left(0,-\frac{7}{3}\right)
$$

Answer:

$$
\left(2,-\frac{5}{3}\right)\quad\text{and}\quad\left(0,-\frac{7}{3}\right)
$$

## Question 3: Sports Day Flags

The raw extraction refers to Fig. 7.12. The question describes a rectangular ground where chalk lines are 1 m apart and flower pots mark distances along `AD`.

Interpret the positions as:

- green flag: on the second line, at one-fourth of `AD`;
- red flag: on the eighth line, at one-fifth of `AD`;
- 100 flower pots placed 1 m apart along `AD`, so the marked distance is treated as 100 m.

Thus:

$$
G(2, 25)
$$

and:

$$
R(8, 20)
$$

Distance between flags:

$$
GR = \sqrt{(8 - 2)^2 + (20 - 25)^2}
$$

$$
GR = \sqrt{6^2 + (-5)^2}
$$

$$
GR = \sqrt{36 + 25}
$$

$$
GR = \sqrt{61}
$$

So the distance between the green and red flags is:

$$
\sqrt{61}\text{ m}
$$

Rashmi must post the blue flag halfway between the two flags.

Use midpoint formula:

$$
\left(\frac{2 + 8}{2},\frac{25 + 20}{2}\right)
$$

$$
= \left(5,\frac{45}{2}\right)
$$

$$
= (5, 22.5)
$$

So Rashmi should post the blue flag on the fifth line, 22.5 m from the starting side along `AD`.

## Question 4: Ratio in Which `(-1, 6)` Divides the Segment

The segment joins:

$$
A(-3, 10)
$$

and:

$$
B(6, -8)
$$

Point:

$$
P(-1, 6)
$$

Let:

$$
AP : PB = m_1 : m_2
$$

Using the x-coordinate:

$$
-1 = \frac{m_1(6) + m_2(-3)}{m_1 + m_2}
$$

$$
-(m_1 + m_2) = 6m_1 - 3m_2
$$

$$
-m_1 - m_2 = 6m_1 - 3m_2
$$

$$
2m_2 = 7m_1
$$

So:

$$
m_1 : m_2 = 2 : 7
$$

Check using y-coordinate:

$$
\frac{2(-8) + 7(10)}{2 + 7} = \frac{-16 + 70}{9} = 6
$$

The y-coordinate matches.

Required ratio:

$$
2 : 7
$$

## Question 5: Ratio in Which x-axis Divides `A(1, -5)` and `B(-4, 5)`

Let the point of division be on the x-axis, so its y-coordinate is `0`.

Let:

$$
AP : PB = m_1 : m_2
$$

Use the y-coordinate:

$$
0 = \frac{m_1(5) + m_2(-5)}{m_1 + m_2}
$$

So:

$$
5m_1 - 5m_2 = 0
$$

$$
m_1 = m_2
$$

Therefore, the ratio is:

$$
1 : 1
$$

Now use midpoint formula:

$$
\left(\frac{1 + (-4)}{2},\frac{-5 + 5}{2}\right)
$$

$$
= \left(-\frac{3}{2},0\right)
$$

Answer:

$$
1 : 1,\quad \left(-\frac{3}{2},0\right)
$$

## Question 6: Parallelogram Vertices

Given vertices in order:

$$
A(1, 2),\quad B(4, y),\quad C(x, 6),\quad D(3, 5)
$$

In a parallelogram, diagonals bisect each other.

Therefore, midpoint of `AC` = midpoint of `BD`.

Midpoint of `AC`:

$$
\left(\frac{1 + x}{2},\frac{2 + 6}{2}\right)
$$

$$
= \left(\frac{1 + x}{2},4\right)
$$

Midpoint of `BD`:

$$
\left(\frac{4 + 3}{2},\frac{y + 5}{2}\right)
$$

$$
= \left(\frac{7}{2},\frac{y + 5}{2}\right)
$$

Equate x-coordinates:

$$
\frac{1 + x}{2} = \frac{7}{2}
$$

$$
1 + x = 7
$$

$$
x = 6
$$

Equate y-coordinates:

$$
4 = \frac{y + 5}{2}
$$

$$
8 = y + 5
$$

$$
y = 3
$$

Answer:

$$
x = 6,\quad y = 3
$$

## Question 7: Endpoint of Diameter

The centre of a circle is:

$$
O(2, -3)
$$

One endpoint of diameter is:

$$
B(1, 4)
$$

Let the other endpoint be:

$$
A(x, y)
$$

The centre is the midpoint of a diameter.

So:

$$
\left(\frac{x + 1}{2},\frac{y + 4}{2}\right) = (2, -3)
$$

Equate x-coordinates:

$$
\frac{x + 1}{2} = 2
$$

$$
x + 1 = 4
$$

$$
x = 3
$$

Equate y-coordinates:

$$
\frac{y + 4}{2} = -3
$$

$$
y + 4 = -6
$$

$$
y = -10
$$

Required point:

$$
A(3, -10)
$$

## Question 8: Find P Such That `AP = 3/7 AB`

Given:

$$
A(-2, -2),\quad B(2, -4)
$$

and:

$$
AP = \frac{3}{7}AB
$$

This means `AP` is 3 parts out of the total 7 parts.

So:

$$
AP : PB = 3 : 4
$$

Using section formula:

$$
x = \frac{3(2) + 4(-2)}{3 + 4}
$$

$$
x = \frac{6 - 8}{7} = -\frac{2}{7}
$$

$$
y = \frac{3(-4) + 4(-2)}{3 + 4}
$$

$$
y = \frac{-12 - 8}{7} = -\frac{20}{7}
$$

Required point:

$$
P\left(-\frac{2}{7},-\frac{20}{7}\right)
$$

## Question 9: Divide `A(-2, 2)` and `B(2, 8)` Into Four Equal Parts

Four equal parts require three internal division points.

Let the points be `P`, `Q`, and `R`.

Then:

$$
AP : PB = 1 : 3
$$

$$
AQ : QB = 2 : 2
$$

$$
AR : RB = 3 : 1
$$

For `P`:

$$
x = \frac{1(2) + 3(-2)}{1 + 3} = \frac{2 - 6}{4} = -1
$$

$$
y = \frac{1(8) + 3(2)}{1 + 3} = \frac{8 + 6}{4} = \frac{7}{2}
$$

So:

$$
P\left(-1,\frac{7}{2}\right)
$$

For `Q`, use midpoint:

$$
Q = \left(\frac{-2 + 2}{2},\frac{2 + 8}{2}\right)
$$

$$
Q = (0, 5)
$$

For `R`:

$$
x = \frac{3(2) + 1(-2)}{3 + 1} = \frac{6 - 2}{4} = 1
$$

$$
y = \frac{3(8) + 1(2)}{3 + 1} = \frac{24 + 2}{4} = \frac{13}{2}
$$

So:

$$
R\left(1,\frac{13}{2}\right)
$$

Answer:

$$
\left(-1,\frac{7}{2}\right),\quad (0, 5),\quad \left(1,\frac{13}{2}\right)
$$

## Question 10: Area of a Rhombus

Vertices of the rhombus are:

$$
A(3, 0),\quad B(4, 5),\quad C(-1, 4),\quad D(-2, -1)
$$

Area of a rhombus:

$$
\text{Area} = \frac{1}{2}\times d_1\times d_2
$$

where `d_1` and `d_2` are the diagonals.

The diagonals are `AC` and `BD`.

Find `AC`:

$$
AC = \sqrt{(-1 - 3)^2 + (4 - 0)^2}
$$

$$
AC = \sqrt{(-4)^2 + 4^2}
$$

$$
AC = \sqrt{32} = 4\sqrt{2}
$$

Find `BD`:

$$
BD = \sqrt{(-2 - 4)^2 + (-1 - 5)^2}
$$

$$
BD = \sqrt{(-6)^2 + (-6)^2}
$$

$$
BD = \sqrt{72} = 6\sqrt{2}
$$

Therefore:

$$
\text{Area} = \frac{1}{2}\times 4\sqrt{2}\times 6\sqrt{2}
$$

$$
\text{Area} = \frac{1}{2}\times 24\times 2
$$

$$
\text{Area} = 24
$$

Answer:

$$
24\text{ square units}
$$

---

# Unit 7L: Formula Bank

## Distance Formula

For:

$$
P(x_1, y_1),\quad Q(x_2, y_2)
$$

distance is:

$$
PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

## Distance From Origin

For:

$$
P(x, y)
$$

distance from origin is:

$$
OP = \sqrt{x^2 + y^2}
$$

## Section Formula

If `P` divides `A(x_1, y_1)` and `B(x_2, y_2)` internally in the ratio `m_1 : m_2`, then:

$$
P\left(\frac{m_1x_2 + m_2x_1}{m_1 + m_2},\frac{m_1y_2 + m_2y_1}{m_1 + m_2}\right)
$$

## Midpoint Formula

The midpoint of `A(x_1, y_1)` and `B(x_2, y_2)` is:

$$
\left(\frac{x_1 + x_2}{2},\frac{y_1 + y_2}{2}\right)
$$

---

# Unit 7M: Choosing the Right Method

| Question says | Use |
|---|---|
| Find distance | Distance formula |
| Distance from origin | Origin-distance formula |
| Points are equidistant | Set squared distances equal |
| Check collinearity | Compare distances or use largest distance = sum of other two |
| Name triangle type | Find all side lengths |
| Name quadrilateral type | Find side lengths and diagonals |
| Divide a segment in given ratio | Section formula |
| Find midpoint | Midpoint formula |
| Circle diameter endpoint with centre given | Centre is midpoint |
| Parallelogram with unknown coordinate | Diagonals bisect each other |
| Point lies on x-axis | y-coordinate is 0 |
| Point lies on y-axis | x-coordinate is 0 |

---

# Unit 7N: Quick Practice Set

Try these without looking at the solutions first.

## Practice 1

Find the distance between `(1, 2)` and `(5, 5)`.

Solution:

$$
d = \sqrt{(5 - 1)^2 + (5 - 2)^2}
$$

$$
d = \sqrt{4^2 + 3^2}
$$

$$
d = 5
$$

## Practice 2

Find the midpoint of `(-3, 4)` and `(7, -2)`.

Solution:

$$
\left(\frac{-3 + 7}{2},\frac{4 + (-2)}{2}\right)
$$

$$
= (2, 1)
$$

## Practice 3

Find the point dividing `(0, 0)` and `(6, 9)` in the ratio `1 : 2`.

Solution:

$$
x = \frac{1(6) + 2(0)}{1 + 2} = 2
$$

$$
y = \frac{1(9) + 2(0)}{1 + 2} = 3
$$

Answer:

$$
(2, 3)
$$

## Practice 4

Find the relation if `P(x, y)` is equidistant from `(1, 0)` and `(0, 1)`.

Solution:

$$
(x - 1)^2 + y^2 = x^2 + (y - 1)^2
$$

Expand:

$$
x^2 - 2x + 1 + y^2 = x^2 + y^2 - 2y + 1
$$

Cancel common terms:

$$
-2x = -2y
$$

So:

$$
x = y
$$

---

# Unit 7O: Common Mistakes and Corrections

| Mistake | Example of the error | Correction |
|---|---|---|
| Reversing section formula incorrectly | Multiplying `m_1` with `x_1` instead of `x_2` | For internal division `m_1 : m_2`, use `m_1x_2 + m_2x_1` |
| Forgetting denominator in section formula | Writing only `m_1x_2 + m_2x_1` | Always divide by `m_1 + m_2` |
| Using midpoint formula when ratio is not `1 : 1` | Applying midpoint to `2 : 3` | Use section formula |
| Taking distance as negative | Saying distance is `-5` | Distance is always non-negative |
| Avoiding square roots but comparing distances | Comparing `AB^2` with `BC` | Compare squares with squares or distances with distances |
| Assuming equal sides prove square | Four equal sides alone prove a rhombus, not necessarily a square | Also check diagonals equal or one right angle |
| Missing axis condition | Point on x-axis written as `(0, y)` | Point on x-axis is `(x, 0)` |
| Confusing x-axis and y-axis | Point on y-axis written as `(x, 0)` | Point on y-axis is `(0, y)` |

---

# Unit 7P: Exam Strategy

## For Distance Formula Questions

Write:

$$
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

Then substitute neatly. Most marks come from correct substitution and simplification.

## For Ratio Questions

Always label:

$$
A(x_1, y_1),\quad B(x_2, y_2)
$$

and:

$$
AP : PB = m_1 : m_2
$$

This prevents wrong order in the section formula.

## For Parallelogram Questions

Use:

$$
\text{midpoint of one diagonal} = \text{midpoint of other diagonal}
$$

This is usually the fastest and cleanest method.

## For Figure-Based Questions

If the question refers to a diagram:

1. identify the coordinates from the diagram;
2. write them clearly;
3. solve using distance or midpoint formula;
4. mention the conclusion in words.

---

# Final One-Page Summary

1. A point is written as `(x, y)`.
2. The x-coordinate is the abscissa.
3. The y-coordinate is the ordinate.
4. A point on the x-axis has form `(x, 0)`.
5. A point on the y-axis has form `(0, y)`.
6. Distance between `P(x_1, y_1)` and `Q(x_2, y_2)` is:

$$
\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

7. Distance of `P(x, y)` from origin is:

$$
\sqrt{x^2 + y^2}
$$

8. Section formula for internal division in ratio `m_1 : m_2` is:

$$
\left(\frac{m_1x_2 + m_2x_1}{m_1 + m_2},\frac{m_1y_2 + m_2y_1}{m_1 + m_2}\right)
$$

9. Midpoint formula is:

$$
\left(\frac{x_1 + x_2}{2},\frac{y_1 + y_2}{2}\right)
$$

10. In a parallelogram, diagonals bisect each other.
11. In a rhombus:

$$
\text{Area} = \frac{1}{2}\times d_1\times d_2
$$

12. For equidistant point questions, set squared distances equal.
13. For collinearity using distances, check whether the largest distance equals the sum of the other two.

