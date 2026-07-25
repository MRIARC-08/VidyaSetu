# Chapter 9 - Straight Lines

Class 11 Maths learner notes

## 1. Big Picture

Straight lines are the simplest curves in coordinate geometry.

A straight line can be studied in two connected ways:

- geometrically, as a set of points in a plane;
- algebraically, as an equation in `x` and `y`.

The main idea of the chapter is:

> A line can be represented by an equation, and properties of the line can be read from that equation.

This chapter connects:

- slope;
- angle of inclination;
- parallel and perpendicular lines;
- equations of lines in different forms;
- distance of a point from a line;
- distance between parallel lines.

## 2. Learning Goals

By the end of this chapter, a learner should be able to:

- recall distance formula, section formula, midpoint formula, and area formula;
- calculate the slope of a line from two points;
- connect slope with inclination;
- recognise horizontal and vertical lines;
- test whether two lines are parallel or perpendicular;
- find the angle between two lines using slopes;
- write equations of lines in point-slope, two-point, slope-intercept, and intercept forms;
- convert a line to general form `Ax+By+C=0`;
- find intercepts of a line;
- find distance of a point from a line;
- find distance between parallel lines;
- solve applied problems using a linear model.

## 3. Coordinate Geometry Recall

Before studying straight lines, recall the basic formulas from coordinate geometry.

### 3.1 Distance Between Two Points

For:

$$
P(x_1,y_1),\quad Q(x_2,y_2)
$$

the distance is:

$$
PQ=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}
$$

Example:

Distance between:

$$
(6,-4)
$$

and:

$$
(3,0)
$$

is:

$$
\sqrt{(3-6)^2+(0-(-4))^2}
$$

$$
=\sqrt{(-3)^2+4^2}
$$

$$
=\sqrt{9+16}=5
$$

### 3.2 Section Formula

If a point divides the segment joining:

$$
(x_1,y_1)
$$

and:

$$
(x_2,y_2)
$$

internally in the ratio `m:n`, then the point is:

$$
\left(\frac{mx_2+nx_1}{m+n},\frac{my_2+ny_1}{m+n}\right)
$$

### 3.3 Midpoint Formula

The midpoint of the segment joining:

$$
(x_1,y_1)
$$

and:

$$
(x_2,y_2)
$$

is:

$$
\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)
$$

### 3.4 Area Of A Triangle

For vertices:

$$
(x_1,y_1),\quad (x_2,y_2),\quad (x_3,y_3)
$$

the area is:

$$
\frac{1}{2}\left|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\right|
$$

### 3.5 Collinearity

Three points are collinear if they lie on the same line.

A coordinate test:

The area of the triangle formed by the three points is 0.

Equivalently:

$$
\text{slope of }AB=\text{slope of }BC
$$

if the slopes are defined.

## 4. Inclination Of A Line

The inclination of a line is the angle it makes with the positive direction of the x-axis, measured anticlockwise.

If the inclination is `theta`, then:

$$
0\deg \le \theta \le 180\deg
$$

Special cases:

- a horizontal line has inclination `0 deg`;
- a vertical line has inclination `90 deg`;
- a line sloping upward to the right has acute inclination;
- a line sloping downward to the right has obtuse inclination.

## 5. Slope Of A Line

If `theta` is the inclination of a non-vertical line, its slope is:

$$
m=\tan\theta
$$

Slope is also called gradient.

### 5.1 Horizontal And Vertical Lines

For a horizontal line:

$$
m=0
$$

For a vertical line:

$$
m
$$

is undefined because:

$$
\tan90\deg
$$

is not defined.

## 6. Slope From Two Points

If a non-vertical line passes through:

$$
(x_1,y_1)
$$

and:

$$
(x_2,y_2)
$$

then:

$$
m=\frac{y_2-y_1}{x_2-x_1}
$$

provided:

$$
x_2\ne x_1
$$

### 6.1 Meaning Of Slope

Slope is:

$$
\frac{\text{change in }y}{\text{change in }x}
$$

It measures vertical change per unit horizontal change.

### 6.2 Example: Slope Through Two Points

Find the slope of the line through:

$$
(3,-2)
$$

and:

$$
(-1,4)
$$

Use:

$$
m=\frac{4-(-2)}{-1-3}
$$

$$
m=\frac{6}{-4}=-\frac{3}{2}
$$

### 6.3 Example: Horizontal Line

Find the slope through:

$$
(3,-2)
$$

and:

$$
(7,-2)
$$

Use:

$$
m=\frac{-2-(-2)}{7-3}
$$

$$
m=\frac{0}{4}=0
$$

So the line is horizontal.

### 6.4 Example: Vertical Line

Find the slope through:

$$
(3,-2)
$$

and:

$$
(3,4)
$$

Use:

$$
m=\frac{4-(-2)}{3-3}
$$

The denominator is 0, so the slope is undefined.

The line is vertical.

### 6.5 Example: Slope From Inclination

If a line has inclination:

$$
60\deg
$$

then:

$$
m=\tan60\deg=\sqrt3
$$

## 7. Parallel Lines

Two non-vertical lines are parallel if and only if their slopes are equal.

If line 1 has slope `m_1` and line 2 has slope `m_2`, then the lines are parallel exactly when:

$$
m_1=m_2
$$

### 7.1 Example

Line through:

$$
(0,1)
$$

and:

$$
(2,5)
$$

has slope:

$$
\frac{5-1}{2-0}=2
$$

Line through:

$$
(3,0)
$$

and:

$$
(5,4)
$$

has slope:

$$
\frac{4-0}{5-3}=2
$$

The slopes are equal, so the lines are parallel.

## 8. Perpendicular Lines

Two non-vertical lines are perpendicular if and only if the product of their slopes is `-1`.

That is:

$$
m_1m_2=-1
$$

Equivalently:

$$
m_2=-\frac{1}{m_1}
$$

The slopes are negative reciprocals.

### 8.1 Example

If one line has slope:

$$
\frac{1}{3}
$$

then a perpendicular line has slope:

$$
-3
$$

### 8.2 Example: Find x

Line through:

$$
(-2,6)
$$

and:

$$
(4,8)
$$

is perpendicular to the line through:

$$
(8,12)
$$

and:

$$
(x,24)
$$

Find `x`.

First slope:

$$
m_1=\frac{8-6}{4-(-2)}=\frac{2}{6}=\frac{1}{3}
$$

Second slope:

$$
m_2=\frac{24-12}{x-8}=\frac{12}{x-8}
$$

Since the lines are perpendicular:

$$
m_1m_2=-1
$$

So:

$$
\frac{1}{3}\cdot\frac{12}{x-8}=-1
$$

$$
\frac{4}{x-8}=-1
$$

$$
x-8=-4
$$

Hence:

$$
x=4
$$

## 9. Angle Between Two Lines

Let two non-vertical lines have slopes:

$$
m_1,\quad m_2
$$

The angle `theta` between them satisfies:

$$
\tan\theta=\left|\frac{m_2-m_1}{1+m_1m_2}\right|
$$

provided:

$$
1+m_1m_2\ne0
$$

If:

$$
1+m_1m_2=0
$$

then the lines are perpendicular and the angle is:

$$
90\deg
$$

### 9.1 Example: One Slope Given

The angle between two lines is:

$$
45\deg
$$

One line has slope:

$$
\frac{1}{2}
$$

Find possible slopes of the other line.

Let the other slope be `m`.

Use:

$$
\left|\frac{m-\frac{1}{2}}{1+\frac{m}{2}}\right|=1
$$

Case 1:

$$
\frac{m-\frac{1}{2}}{1+\frac{m}{2}}=1
$$

Then:

$$
m-\frac{1}{2}=1+\frac{m}{2}
$$

$$
\frac{m}{2}=\frac{3}{2}
$$

So:

$$
m=3
$$

Case 2:

$$
\frac{m-\frac{1}{2}}{1+\frac{m}{2}}=-1
$$

Then:

$$
m-\frac{1}{2}=-1-\frac{m}{2}
$$

$$
\frac{3m}{2}=-\frac{1}{2}
$$

So:

$$
m=-\frac{1}{3}
$$

Possible slopes:

$$
3,\quad -\frac{1}{3}
$$

## 10. Equations Of Lines

A line is a set of points satisfying one linear equation in `x` and `y`.

The same line can be written in several useful forms.

The best form depends on the information given in the problem.

## 11. Horizontal And Vertical Lines

### 11.1 Horizontal Line

A horizontal line has equation:

$$
y=c
$$

where `c` is the y-coordinate of every point on the line.

Example:

The horizontal line through:

$$
(-2,3)
$$

is:

$$
y=3
$$

### 11.2 Vertical Line

A vertical line has equation:

$$
x=c
$$

where `c` is the x-coordinate of every point on the line.

Example:

The vertical line through:

$$
(-2,3)
$$

is:

$$
x=-2
$$

## 12. Point-Slope Form

If a line has slope `m` and passes through:

$$
(x_0,y_0)
$$

then its equation is:

$$
y-y_0=m(x-x_0)
$$

### 12.1 Example

Find the equation of the line through:

$$
(-2,3)
$$

with slope:

$$
-4
$$

Use point-slope form:

$$
y-3=-4(x-(-2))
$$

$$
y-3=-4(x+2)
$$

Expand:

$$
y-3=-4x-8
$$

$$
4x+y+5=0
$$

## 13. Two-Point Form

If a line passes through:

$$
(x_1,y_1)
$$

and:

$$
(x_2,y_2)
$$

then:

$$
y-y_1=\frac{y_2-y_1}{x_2-x_1}(x-x_1)
$$

This is simply point-slope form after computing slope from the two points.

### 13.1 Example

Find the equation of the line through:

$$
(1,-1)
$$

and:

$$
(3,5)
$$

Slope:

$$
m=\frac{5-(-1)}{3-1}=\frac{6}{2}=3
$$

Use point-slope form:

$$
y-(-1)=3(x-1)
$$

$$
y+1=3x-3
$$

$$
y=3x-4
$$

General form:

$$
-3x+y+4=0
$$

## 14. Slope-Intercept Form

If a line has slope `m` and y-intercept `c`, then:

$$
y=mx+c
$$

The y-intercept is the value of `y` when:

$$
x=0
$$

The line crosses the y-axis at:

$$
(0,c)
$$

### 14.1 Example

Find the equation of a line with slope 2 and y-intercept:

$$
-\frac{3}{2}
$$

Use:

$$
y=mx+c
$$

So:

$$
y=2x-\frac{3}{2}
$$

Multiply by 2:

$$
2y=4x-3
$$

General form:

$$
4x-2y-3=0
$$

## 15. x-Intercept Form With Slope

If a line has slope `m` and x-intercept `d`, it passes through:

$$
(d,0)
$$

Using point-slope form:

$$
y-0=m(x-d)
$$

So:

$$
y=m(x-d)
$$

### 15.1 Example

Find the equation of the line with slope 2 and x-intercept 4.

Use:

$$
y=2(x-4)
$$

$$
y=2x-8
$$

General form:

$$
2x-y-8=0
$$

## 16. Intercept Form

If a line cuts the x-axis at:

$$
(a,0)
$$

and the y-axis at:

$$
(0,b)
$$

then its equation is:

$$
\frac{x}{a}+\frac{y}{b}=1
$$

where:

$$
a\ne0,\quad b\ne0
$$

### 16.1 Example

Find the equation of the line with x-intercept `-3` and y-intercept `2`.

Use:

$$
\frac{x}{-3}+\frac{y}{2}=1
$$

Multiply by 6:

$$
-2x+3y=6
$$

General form:

$$
2x-3y+6=0
$$

## 17. General Form Of A Line

The general form of a line is:

$$
Ax+By+C=0
$$

where `A` and `B` are not both zero.

### 17.1 Slope From General Form

If:

$$
B\ne0
$$

then:

$$
Ax+By+C=0
$$

can be written as:

$$
y=-\frac{A}{B}x-\frac{C}{B}
$$

So the slope is:

$$
m=-\frac{A}{B}
$$

and the y-intercept is:

$$
-\frac{C}{B}
$$

### 17.2 Intercepts From General Form

For:

$$
Ax+By+C=0
$$

x-intercept is found by putting:

$$
y=0
$$

So:

$$
Ax+C=0
$$

Hence:

$$
x=-\frac{C}{A}
$$

provided `A` is not zero.

y-intercept is found by putting:

$$
x=0
$$

So:

$$
By+C=0
$$

Hence:

$$
y=-\frac{C}{B}
$$

provided `B` is not zero.

## 18. Choosing The Right Form

| Given information | Best form |
|---|---|
| One point and slope | Point-slope |
| Two points | Two-point |
| Slope and y-intercept | Slope-intercept |
| x-intercept and y-intercept | Intercept form |
| Horizontal line | `y=c` |
| Vertical line | `x=c` |
| Distance problem | General form |
| Parallel line to known line | Use same slope |
| Perpendicular line to known line | Use negative reciprocal slope |

## 19. Distance Of A Point From A Line

The perpendicular distance from:

$$
(x_1,y_1)
$$

to the line:

$$
Ax+By+C=0
$$

is:

$$
d=\frac{|Ax_1+By_1+C|}{\sqrt{A^2+B^2}}
$$

The absolute value is necessary because distance is never negative.

### 19.1 Example

Find the distance of:

$$
(3,-5)
$$

from:

$$
3x-4y-26=0
$$

Here:

$$
A=3,\quad B=-4,\quad C=-26
$$

and:

$$
x_1=3,\quad y_1=-5
$$

Use:

$$
d=\frac{|Ax_1+By_1+C|}{\sqrt{A^2+B^2}}
$$

So:

$$
d=\frac{|3(3)+(-4)(-5)-26|}{\sqrt{3^2+(-4)^2}}
$$

$$
d=\frac{|9+20-26|}{5}
$$

$$
d=\frac{3}{5}
$$

## 20. Distance Between Two Parallel Lines

For parallel lines:

$$
Ax+By+C_1=0
$$

and:

$$
Ax+By+C_2=0
$$

the distance between them is:

$$
d=\frac{|C_1-C_2|}{\sqrt{A^2+B^2}}
$$

This formula works only when the coefficients of `x` and `y` are the same in both equations.

If needed, multiply one equation by a constant to make the `A` and `B` coefficients match.

### 20.1 Example

Find the distance between:

$$
3x-4y+7=0
$$

and:

$$
3x-4y+5=0
$$

Here:

$$
A=3,\quad B=-4,\quad C_1=7,\quad C_2=5
$$

Distance:

$$
d=\frac{|7-5|}{\sqrt{3^2+(-4)^2}}
$$

$$
d=\frac{2}{5}
$$

## 21. Lines Parallel Or Perpendicular To A Given Line

Suppose a line is:

$$
Ax+By+C=0
$$

If:

$$
B\ne0
$$

its slope is:

$$
-\frac{A}{B}
$$

### 21.1 Parallel Line Through A Point

A line parallel to:

$$
Ax+By+C=0
$$

through:

$$
(x_1,y_1)
$$

has equation:

$$
A(x-x_1)+B(y-y_1)=0
$$

### 21.2 Perpendicular Line Through A Point

If the given line has slope `m`, the perpendicular line has slope:

$$
-\frac{1}{m}
$$

Then use point-slope form.

### 21.3 Example: Parallel Line

Find the equation of the line parallel to:

$$
3x-4y+2=0
$$

and passing through:

$$
(-2,3)
$$

Use:

$$
A=3,\quad B=-4
$$

The parallel line is:

$$
3(x-(-2))-4(y-3)=0
$$

$$
3(x+2)-4(y-3)=0
$$

$$
3x+6-4y+12=0
$$

So:

$$
3x-4y+18=0
$$

## 22. Linear Models

Some real situations are described by straight lines.

If one quantity depends linearly on another, then two data points determine the model.

### 22.1 Example: Length And Temperature

The length `L` of a copper rod is a linear function of temperature `C`.

Given:

$$
L=124.942\quad\text{when }C=20
$$

and:

$$
L=125.134\quad\text{when }C=110
$$

Treat this as a line through:

$$
(20,124.942)
$$

and:

$$
(110,125.134)
$$

Slope:

$$
m=\frac{125.134-124.942}{110-20}
$$

$$
m=\frac{0.192}{90}
$$

$$
m=\frac{0.032}{15}
$$

Using point-slope form:

$$
L-124.942=\frac{0.032}{15}(C-20)
$$

This gives `L` in terms of `C`.

### 22.2 Example: Price And Demand

A milk seller sells 980 litres weekly at Rs 14 per litre and 1220 litres weekly at Rs 16 per litre.

Assume demand `D` is linear in price `p`.

Data points:

$$
(14,980),\quad (16,1220)
$$

Slope:

$$
m=\frac{1220-980}{16-14}=120
$$

So:

$$
D-980=120(p-14)
$$

At:

$$
p=17
$$

$$
D-980=120(3)=360
$$

Thus:

$$
D=1340
$$

He could sell 1340 litres weekly under the linear assumption.

## 23. Collinearity And Line Equations

Three points are collinear if one line passes through all three.

### 23.1 Example

Show that:

$$
(3,0),\quad (-2,-2),\quad (8,2)
$$

are collinear.

Slope between first two points:

$$
\frac{-2-0}{-2-3}=\frac{-2}{-5}=\frac{2}{5}
$$

Slope between second and third:

$$
\frac{2-(-2)}{8-(-2)}=\frac{4}{10}=\frac{2}{5}
$$

Since slopes are equal, the points are collinear.

## 24. Foot Of Perpendicular

The foot of perpendicular from a point to a line is the point where the perpendicular from the point meets the line.

### 24.1 Method

To find the foot from point `P` to line `L`:

1. Find the slope of `L`.
2. Find the slope of the perpendicular line.
3. Write the perpendicular line through `P`.
4. Solve it with `L`.

### 24.2 Example

Find the foot of perpendicular from:

$$
(-1,3)
$$

to:

$$
3x-4y-16=0
$$

Slope of given line:

$$
m=\frac{3}{4}
$$

because:

$$
3x-4y-16=0
$$

gives:

$$
y=\frac{3}{4}x-4
$$

Perpendicular slope:

$$
-\frac{4}{3}
$$

Line through `(-1,3)`:

$$
y-3=-\frac{4}{3}(x+1)
$$

Multiply by 3:

$$
3y-9=-4x-4
$$

So:

$$
4x+3y-5=0
$$

Now solve:

$$
3x-4y-16=0
$$

and:

$$
4x+3y-5=0
$$

Solving gives:

$$
x=4,\quad y=-1
$$

So the foot is:

$$
(4,-1)
$$

## 25. Reflection In A Line

If a point is reflected in a line, the line acts as the perpendicular bisector of the segment joining the point and its image.

### 25.1 Method

For point `P` and image `Q`:

- midpoint of `PQ` lies on the mirror line;
- line `PQ` is perpendicular to the mirror line.

### 25.2 Example

Find the image of:

$$
(1,2)
$$

in the line:

$$
x-3y+4=0
$$

Let the image be:

$$
(h,k)
$$

Slope of mirror line:

$$
\frac{1}{3}
$$

So slope of `PQ` is:

$$
-3
$$

Thus:

$$
\frac{k-2}{h-1}=-3
$$

which gives:

$$
k-2=-3h+3
$$

so:

$$
3h+k-5=0
$$

The midpoint is:

$$
\left(\frac{h+1}{2},\frac{k+2}{2}\right)
$$

It lies on:

$$
x-3y+4=0
$$

So:

$$
\frac{h+1}{2}-3\left(\frac{k+2}{2}\right)+4=0
$$

Multiply by 2:

$$
h+1-3k-6+8=0
$$

Thus:

$$
h-3k+3=0
$$

Solve:

$$
3h+k-5=0
$$

and:

$$
h-3k+3=0
$$

This gives:

$$
h=\frac{6}{5},\quad k=\frac{7}{5}
$$

So the image is:

$$
\left(\frac{6}{5},\frac{7}{5}\right)
$$

## 26. Concurrency Of Lines

Three or more lines are concurrent if they pass through one common point.

### 26.1 Method

To test concurrency:

1. Find the intersection of two lines.
2. Check whether that point lies on the third line.

### 26.2 Example

Find `k` if:

$$
2x+y-3=0
$$

$$
5x+ky-3=0
$$

and:

$$
3x-y-2=0
$$

are concurrent.

First solve:

$$
2x+y-3=0
$$

and:

$$
3x-y-2=0
$$

Adding:

$$
5x-5=0
$$

so:

$$
x=1
$$

Then:

$$
2(1)+y-3=0
$$

so:

$$
y=1
$$

The common point is:

$$
(1,1)
$$

It must satisfy:

$$
5x+ky-3=0
$$

So:

$$
5+k-3=0
$$

Hence:

$$
k=-2
$$

## 27. Locus From Equal Distances

A locus is a path traced by a moving point satisfying a condition.

### 27.1 Example

Find the path of a point whose distances from:

$$
3x-2y=5
$$

and:

$$
3x+2y=5
$$

are equal.

Write the lines in general form:

$$
3x-2y-5=0
$$

and:

$$
3x+2y-5=0
$$

Let the point be:

$$
(h,k)
$$

Equal distances mean:

$$
\frac{|3h-2k-5|}{\sqrt{13}}
=
\frac{|3h+2k-5|}{\sqrt{13}}
$$

So:

$$
|3h-2k-5|=|3h+2k-5|
$$

This gives two possibilities.

Case 1:

$$
3h-2k-5=3h+2k-5
$$

So:

$$
k=0
$$

Case 2:

$$
3h-2k-5=-(3h+2k-5)
$$

So:

$$
6h-10=0
$$

Hence:

$$
h=\frac{5}{3}
$$

Therefore, the locus is:

$$
y=0
$$

or:

$$
x=\frac{5}{3}
$$

These are the angle bisectors of the two given lines.

## 28. Common Mistakes

### Mistake 1: Treating A Vertical Line As Having Slope 0

Horizontal line:

$$
y=c
$$

slope 0.

Vertical line:

$$
x=c
$$

slope undefined.

### Mistake 2: Reversing The Slope Formula

Correct:

$$
m=\frac{y_2-y_1}{x_2-x_1}
$$

Not:

$$
\frac{x_2-x_1}{y_2-y_1}
$$

### Mistake 3: Forgetting Absolute Value In Distance Formula

Distance from a point to a line is:

$$
\frac{|Ax_1+By_1+C|}{\sqrt{A^2+B^2}}
$$

Without absolute value, the expression can be negative.

### Mistake 4: Using Parallel Formula Without Matching A And B

For distance between parallel lines, equations must be written with the same `A` and `B`.

Example:

$$
9x+6y-7=0
$$

and:

$$
3x+2y+6=0
$$

must first be adjusted because the first has coefficients 3 times the second.

### Mistake 5: Using Perpendicular Slope Incorrectly

If slope is:

$$
\frac{2}{3}
$$

then perpendicular slope is:

$$
-\frac{3}{2}
$$

not:

$$
\frac{3}{2}
$$

## 29. Practice Set A: Slope And Angles

### Question A1

Find the slope of the line through:

$$
(0,-4)
$$

and:

$$
(8,0)
$$

Answer:

$$
m=\frac{0-(-4)}{8-0}=\frac{4}{8}=\frac{1}{2}
$$

### Question A2

Find the slope of the line through the origin and the midpoint of:

$$
(0,-4)
$$

and:

$$
(8,0)
$$

Answer:

Midpoint:

$$
\left(\frac{0+8}{2},\frac{-4+0}{2}\right)=(4,-2)
$$

Slope from origin to `(4,-2)`:

$$
m=\frac{-2-0}{4-0}=-\frac{1}{2}
$$

### Question A3

Find a point on the x-axis equidistant from:

$$
(7,6)
$$

and:

$$
(3,4)
$$

Answer:

Let the point be:

$$
(x,0)
$$

Equidistant condition:

$$
(x-7)^2+(0-6)^2=(x-3)^2+(0-4)^2
$$

$$
(x-7)^2+36=(x-3)^2+16
$$

Expand:

$$
x^2-14x+49+36=x^2-6x+9+16
$$

$$
x^2-14x+85=x^2-6x+25
$$

$$
-8x=-60
$$

So:

$$
x=\frac{15}{2}
$$

Point:

$$
\left(\frac{15}{2},0\right)
$$

### Question A4

Find the angle made with the positive x-axis by the line joining:

$$
(3,-1)
$$

and:

$$
(4,-2)
$$

Answer:

Slope:

$$
m=\frac{-2-(-1)}{4-3}=-1
$$

So:

$$
\tan\theta=-1
$$

For:

$$
0\deg\le\theta\le180\deg
$$

we get:

$$
\theta=135\deg
$$

## 30. Practice Set B: Equations Of Lines

### Question B1

Write the equations of the coordinate axes.

Answer:

x-axis:

$$
y=0
$$

y-axis:

$$
x=0
$$

### Question B2

Find the equation of the line through:

$$
(-4,3)
$$

with slope 2.

Answer:

$$
y-3=2(x+4)
$$

$$
y-3=2x+8
$$

$$
2x-y+11=0
$$

### Question B3

Find the equation of the line through:

$$
(-1,1)
$$

and:

$$
(2,-4)
$$

Answer:

Slope:

$$
m=\frac{-4-1}{2-(-1)}=-\frac{5}{3}
$$

Equation:

$$
y-1=-\frac{5}{3}(x+1)
$$

Multiply by 3:

$$
3y-3=-5x-5
$$

So:

$$
5x+3y+2=0
$$

### Question B4

Find the median through `R` for triangle:

$$
P(2,1),\quad Q(-2,3),\quad R(4,5)
$$

Answer:

Midpoint of `PQ`:

$$
\left(\frac{2+(-2)}{2},\frac{1+3}{2}\right)=(0,2)
$$

Median through `R` passes through:

$$
(4,5)
$$

and:

$$
(0,2)
$$

Slope:

$$
m=\frac{5-2}{4-0}=\frac{3}{4}
$$

Equation:

$$
y-2=\frac{3}{4}(x-0)
$$

$$
4y-8=3x
$$

So:

$$
3x-4y+8=0
$$

### Question B5

Find the equation of a line cutting equal intercepts on the axes and passing through:

$$
(2,3)
$$

Answer:

Equal intercepts mean:

$$
a=b
$$

Intercept form:

$$
\frac{x}{a}+\frac{y}{a}=1
$$

So:

$$
x+y=a
$$

Since `(2,3)` lies on it:

$$
2+3=a
$$

Thus:

$$
a=5
$$

Equation:

$$
x+y=5
$$

or:

$$
x+y-5=0
$$

## 31. Practice Set C: Distance

### Question C1

Find the distance of:

$$
(-1,1)
$$

from:

$$
12(x+6)=5(y-2)
$$

Answer:

Convert to general form:

$$
12x+72=5y-10
$$

$$
12x-5y+82=0
$$

Use:

$$
d=\frac{|Ax_1+By_1+C|}{\sqrt{A^2+B^2}}
$$

So:

$$
d=\frac{|12(-1)-5(1)+82|}{\sqrt{12^2+(-5)^2}}
$$

$$
d=\frac{65}{13}=5
$$

### Question C2

Find the distance between:

$$
15x+8y-34=0
$$

and:

$$
15x+8y+31=0
$$

Answer:

$$
d=\frac{|-34-31|}{\sqrt{15^2+8^2}}
$$

$$
d=\frac{65}{17}
$$

### Question C3

Find the equation of the line equidistant from:

$$
9x+6y-7=0
$$

and:

$$
3x+2y+6=0
$$

Answer:

First make coefficients match.

Multiply the second line by 3:

$$
9x+6y+18=0
$$

Now the two parallel lines are:

$$
9x+6y-7=0
$$

and:

$$
9x+6y+18=0
$$

The middle line has constant term equal to the average:

$$
\frac{-7+18}{2}=\frac{11}{2}
$$

So:

$$
9x+6y+\frac{11}{2}=0
$$

Multiply by 2:

$$
18x+12y+11=0
$$

## 32. Formula Sheet

### Distance Between Points

$$
d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}
$$

### Midpoint

$$
\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)
$$

### Area Of Triangle

$$
\frac{1}{2}\left|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\right|
$$

### Slope

$$
m=\frac{y_2-y_1}{x_2-x_1}
$$

### Slope From Inclination

$$
m=\tan\theta
$$

### Parallel Lines

$$
m_1=m_2
$$

### Perpendicular Lines

$$
m_1m_2=-1
$$

### Angle Between Lines

$$
\tan\theta=\left|\frac{m_2-m_1}{1+m_1m_2}\right|
$$

### Point-Slope Form

$$
y-y_0=m(x-x_0)
$$

### Two-Point Form

$$
y-y_1=\frac{y_2-y_1}{x_2-x_1}(x-x_1)
$$

### Slope-Intercept Form

$$
y=mx+c
$$

### Intercept Form

$$
\frac{x}{a}+\frac{y}{b}=1
$$

### General Form

$$
Ax+By+C=0
$$

### Distance From Point To Line

$$
d=\frac{|Ax_1+By_1+C|}{\sqrt{A^2+B^2}}
$$

### Distance Between Parallel Lines

$$
d=\frac{|C_1-C_2|}{\sqrt{A^2+B^2}}
$$

## 33. Final Learner Check

A learner is ready to move on if they can answer these:

1. What is the slope of a horizontal line?
2. Why is the slope of a vertical line undefined?
3. How do equal slopes indicate parallel lines?
4. Why do perpendicular slopes multiply to `-1`?
5. Which equation form is best for one point and a slope?
6. Which equation form is best for two intercepts?
7. How do you find slope from `Ax+By+C=0`?
8. Why does distance from a point to a line use absolute value?
9. How do you make two parallel equations compatible before using the distance formula?
10. How can a real-world linear relation be modeled using two points?

## 34. One-Page Review

- A straight line in a plane can be represented by a linear equation.
- Slope measures change in `y` per change in `x`.
- Slope from two points is `(y_2-y_1)/(x_2-x_1)`.
- Horizontal lines have slope 0.
- Vertical lines have undefined slope.
- Parallel non-vertical lines have equal slopes.
- Perpendicular non-vertical lines have slopes whose product is `-1`.
- Point-slope form is `y-y_0=m(x-x_0)`.
- Slope-intercept form is `y=mx+c`.
- Intercept form is `x/a+y/b=1`.
- General form is `Ax+By+C=0`.
- Distance from point to line is `|Ax_1+By_1+C|/sqrt(A^2+B^2)`.
- Distance between parallel lines is `|C_1-C_2|/sqrt(A^2+B^2)` after matching `A` and `B`.
