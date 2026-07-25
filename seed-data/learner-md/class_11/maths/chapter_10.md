# Chapter 10 - Conic Sections

Class 11 Maths learner notes

## 1. Big Picture

Conic sections are curves obtained by cutting a double-napped right circular cone with a plane.

The main conics in this chapter are:

- circle;
- parabola;
- ellipse;
- hyperbola.

These curves are not only algebraic objects. They appear in:

- planetary motion;
- satellite orbits;
- parabolic mirrors;
- headlights and reflectors;
- antennas;
- suspension bridges;
- arches;
- mechanical motion.

The central goal of the chapter is:

> Learn the geometric definition of each conic and connect it to its standard equation.

## 2. Learning Goals

By the end of this chapter, a learner should be able to:

- describe how conic sections arise from a cone;
- distinguish circle, parabola, ellipse, and hyperbola geometrically;
- write the equation of a circle from centre and radius;
- find centre and radius of a circle by completing squares;
- use focus, directrix, vertex, and latus rectum for parabolas;
- identify the standard form and orientation of a parabola;
- use foci, vertices, axes, eccentricity, and latus rectum for ellipses;
- use foci, transverse axis, conjugate axis, eccentricity, and latus rectum for hyperbolas;
- decide the conic type from its equation;
- solve application problems involving mirrors, beams, rods, and paths.

## 3. Conic Sections From A Cone

Imagine a double-napped cone.

It has:

- a vertex;
- an axis;
- two nappes;
- generators, which are the slant lines producing the cone.

When a plane cuts the cone, the intersection curve is called a conic section.

The type of curve depends on how the plane cuts the cone.

## 4. Types Of Conic Sections

Let the generator of the cone make angle `alpha` with the axis, and let the cutting plane make angle `beta` with the axis.

### 4.1 Circle

If the plane is perpendicular to the axis of the cone, the section is a circle.

Symbolically:

$$
\beta=90\deg
$$

### 4.2 Ellipse

If the plane cuts one nappe and is not perpendicular to the axis, but cuts across the cone, the section is an ellipse.

The usual condition is:

$$
\alpha<\beta<90\deg
$$

### 4.3 Parabola

If the plane is parallel to a generator of the cone, the section is a parabola.

Symbolically:

$$
\beta=\alpha
$$

### 4.4 Hyperbola

If the plane cuts both nappes of the cone, the section is a hyperbola.

The usual condition is:

$$
0\deg\le\beta<\alpha
$$

## 5. Degenerate Conics

If the cutting plane passes through the vertex of the cone, the section may become a simpler object.

These are called degenerate conics.

Examples:

- a point;
- a straight line;
- a pair of intersecting straight lines.

They are called degenerate because the conic has collapsed into a simpler figure.

## 6. Circle

A circle is the set of all points in a plane that are at a fixed distance from a fixed point.

The fixed point is the centre.

The fixed distance is the radius.

### 6.1 Standard Equation Of A Circle

If the centre is:

$$
(h,k)
$$

and the radius is:

$$
r
$$

then the equation is:

$$
(x-h)^2+(y-k)^2=r^2
$$

### 6.2 Circle With Centre At Origin

If the centre is:

$$
(0,0)
$$

then:

$$
h=0,\quad k=0
$$

So:

$$
x^2+y^2=r^2
$$

### 6.3 Example: Centre And Radius Given

Find the equation of the circle with centre:

$$
(-3,2)
$$

and radius:

$$
4
$$

Use:

$$
(x-h)^2+(y-k)^2=r^2
$$

Here:

$$
h=-3,\quad k=2,\quad r=4
$$

So:

$$
(x+3)^2+(y-2)^2=16
$$

## 7. Completing Squares For Circles

A circle may be given in expanded form.

To find centre and radius, complete the square in `x` and `y`.

### 7.1 Example

Find the centre and radius of:

$$
x^2+y^2+8x+10y-8=0
$$

Move the constant:

$$
x^2+8x+y^2+10y=8
$$

Complete the square:

$$
x^2+8x+16=(x+4)^2
$$

and:

$$
y^2+10y+25=(y+5)^2
$$

Add 16 and 25 to both sides:

$$
x^2+8x+16+y^2+10y+25=8+16+25
$$

So:

$$
(x+4)^2+(y+5)^2=49
$$

This is:

$$
(x-(-4))^2+(y-(-5))^2=7^2
$$

Therefore:

Centre:

$$
(-4,-5)
$$

Radius:

$$
7
$$

## 8. Inside, On, Or Outside A Circle

For a circle:

$$
(x-h)^2+(y-k)^2=r^2
$$

and a point:

$$
P(x_1,y_1)
$$

compare:

$$
(x_1-h)^2+(y_1-k)^2
$$

with:

$$
r^2
$$

If it is less than `r^2`, the point is inside.

If it equals `r^2`, the point is on the circle.

If it is greater than `r^2`, the point is outside.

### 8.1 Example

Does:

$$
(-2.5,3.5)
$$

lie inside, outside, or on:

$$
x^2+y^2=25
$$

Compute:

$$
(-2.5)^2+(3.5)^2=6.25+12.25=18.5
$$

Since:

$$
18.5<25
$$

the point lies inside the circle.

## 9. Circle Through Two Points With Centre On A Line

### 9.1 Example

Find the circle through:

$$
(2,-2)
$$

and:

$$
(3,4)
$$

whose centre lies on:

$$
x+y=2
$$

Let the centre be:

$$
(h,k)
$$

Since the centre lies on the line:

$$
h+k=2
$$

So:

$$
k=2-h
$$

The distances from the centre to the two given points must be equal.

So:

$$
(2-h)^2+(-2-k)^2=(3-h)^2+(4-k)^2
$$

Substitute:

$$
k=2-h
$$

Then:

$$
(2-h)^2+(h-4)^2=(3-h)^2+(h+2)^2
$$

Simplifying gives:

$$
h=\frac{7}{10}
$$

Then:

$$
k=\frac{13}{10}
$$

The radius squared is:

$$
r^2=(2-\frac{7}{10})^2+(-2-\frac{13}{10})^2
$$

$$
r^2=\frac{629}{50}
$$

Therefore the circle is:

$$
\left(x-\frac{7}{10}\right)^2+\left(y-\frac{13}{10}\right)^2=\frac{629}{50}
$$

## 10. Parabola

A parabola is the set of all points in a plane that are equidistant from:

- a fixed point, called the focus;
- a fixed line, called the directrix.

The focus is not on the directrix.

### 10.1 Axis And Vertex

The line through the focus and perpendicular to the directrix is called the axis of the parabola.

The point where the parabola meets its axis is called the vertex.

For standard parabolas in this chapter, the vertex is at:

$$
(0,0)
$$

## 11. Standard Equations Of Parabolas

There are four standard orientations.

### 11.1 Opens Right

Equation:

$$
y^2=4ax,\quad a>0
$$

Focus:

$$
(a,0)
$$

Directrix:

$$
x=-a
$$

Axis:

$$
y=0
$$

Length of latus rectum:

$$
4a
$$

### 11.2 Opens Left

Equation:

$$
y^2=-4ax,\quad a>0
$$

Focus:

$$
(-a,0)
$$

Directrix:

$$
x=a
$$

Axis:

$$
y=0
$$

Length of latus rectum:

$$
4a
$$

### 11.3 Opens Up

Equation:

$$
x^2=4ay,\quad a>0
$$

Focus:

$$
(0,a)
$$

Directrix:

$$
y=-a
$$

Axis:

$$
x=0
$$

Length of latus rectum:

$$
4a
$$

### 11.4 Opens Down

Equation:

$$
x^2=-4ay,\quad a>0
$$

Focus:

$$
(0,-a)
$$

Directrix:

$$
y=a
$$

Axis:

$$
x=0
$$

Length of latus rectum:

$$
4a
$$

## 12. How To Identify A Parabola

If the equation has `y^2` and a first power of `x`, its axis is horizontal.

Examples:

$$
y^2=4ax
$$

and:

$$
y^2=-4ax
$$

If the equation has `x^2` and a first power of `y`, its axis is vertical.

Examples:

$$
x^2=4ay
$$

and:

$$
x^2=-4ay
$$

The sign decides direction.

## 13. Latus Rectum Of A Parabola

The latus rectum of a parabola is the chord through the focus and perpendicular to the axis.

For every standard parabola:

$$
\text{length of latus rectum}=4a
$$

For:

$$
y^2=4ax
$$

the endpoints of the latus rectum are:

$$
(a,2a)
$$

and:

$$
(a,-2a)
$$

## 14. Parabola Examples

### 14.1 Example: Read Focus And Directrix

Find focus, axis, directrix, and latus rectum of:

$$
y^2=8x
$$

Compare with:

$$
y^2=4ax
$$

So:

$$
4a=8
$$

Hence:

$$
a=2
$$

Focus:

$$
(2,0)
$$

Directrix:

$$
x=-2
$$

Axis:

$$
y=0
$$

Length of latus rectum:

$$
4a=8
$$

### 14.2 Example: Focus And Directrix Given

Find the equation of the parabola with focus:

$$
(2,0)
$$

and directrix:

$$
x=-2
$$

The vertex is midway between focus and directrix, at the origin.

The parabola opens right.

Thus:

$$
y^2=4ax
$$

with:

$$
a=2
$$

So:

$$
y^2=8x
$$

### 14.3 Example: Vertex And Focus Given

Find the equation with vertex:

$$
(0,0)
$$

and focus:

$$
(0,2)
$$

The parabola opens upward.

Use:

$$
x^2=4ay
$$

Here:

$$
a=2
$$

So:

$$
x^2=8y
$$

### 14.4 Example: Symmetric About y-Axis And Passing Through A Point

Find the parabola symmetric about the y-axis, with vertex at origin, passing through:

$$
(2,-3)
$$

Since it is symmetric about y-axis:

$$
x^2=4ay
$$

or:

$$
x^2=-4ay
$$

The point has negative `y`, so the parabola opens downward:

$$
x^2=-4ay
$$

Substitute `(2,-3)`:

$$
2^2=-4a(-3)
$$

$$
4=12a
$$

So:

$$
a=\frac{1}{3}
$$

Equation:

$$
x^2=-\frac{4}{3}y
$$

or:

$$
3x^2=-4y
$$

## 15. Ellipse

An ellipse is the set of all points in a plane such that the sum of the distances from two fixed points is constant.

The fixed points are called foci.

The midpoint of the line segment joining the foci is the centre.

The line through the foci is the major axis.

The line through the centre perpendicular to the major axis is the minor axis.

The endpoints of the major axis are the vertices.

## 16. Ellipse Parameters

For a standard ellipse:

- `a` is the semi-major axis;
- `b` is the semi-minor axis;
- `c` is the distance from centre to each focus.

For an ellipse:

$$
a>b>0
$$

and:

$$
c^2=a^2-b^2
$$

The eccentricity is:

$$
e=\frac{c}{a}
$$

For an ellipse:

$$
0<e<1
$$

## 17. Standard Ellipse With Major Axis Along x-Axis

Equation:

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1,\quad a>b>0
$$

Centre:

$$
(0,0)
$$

Vertices:

$$
(\pm a,0)
$$

Foci:

$$
(\pm c,0)
$$

where:

$$
c^2=a^2-b^2
$$

Length of major axis:

$$
2a
$$

Length of minor axis:

$$
2b
$$

Length of latus rectum:

$$
\frac{2b^2}{a}
$$

## 18. Standard Ellipse With Major Axis Along y-Axis

Equation:

$$
\frac{x^2}{b^2}+\frac{y^2}{a^2}=1,\quad a>b>0
$$

Centre:

$$
(0,0)
$$

Vertices:

$$
(0,\pm a)
$$

Foci:

$$
(0,\pm c)
$$

where:

$$
c^2=a^2-b^2
$$

Length of major axis:

$$
2a
$$

Length of minor axis:

$$
2b
$$

Length of latus rectum:

$$
\frac{2b^2}{a}
$$

## 19. How To Identify Major Axis Of An Ellipse

Write the ellipse in standard form:

$$
\frac{x^2}{A}+\frac{y^2}{B}=1
$$

The larger denominator gives the major axis.

If the larger denominator is under `x^2`, the major axis is the x-axis.

If the larger denominator is under `y^2`, the major axis is the y-axis.

## 20. Ellipse Examples

### 20.1 Example: Ellipse With Major Axis Along x-Axis

Find foci, vertices, axes, eccentricity, and latus rectum for:

$$
\frac{x^2}{25}+\frac{y^2}{9}=1
$$

Here:

$$
a^2=25,\quad b^2=9
$$

So:

$$
a=5,\quad b=3
$$

Since the larger denominator is under `x^2`, the major axis is along the x-axis.

Find `c`:

$$
c^2=a^2-b^2=25-9=16
$$

So:

$$
c=4
$$

Foci:

$$
(-4,0),\quad (4,0)
$$

Vertices:

$$
(-5,0),\quad (5,0)
$$

Length of major axis:

$$
2a=10
$$

Length of minor axis:

$$
2b=6
$$

Eccentricity:

$$
e=\frac{4}{5}
$$

Length of latus rectum:

$$
\frac{2b^2}{a}=\frac{2(9)}{5}=\frac{18}{5}
$$

### 20.2 Example: Ellipse With Major Axis Along y-Axis

Find the data for:

$$
9x^2+4y^2=36
$$

First put in standard form:

$$
\frac{x^2}{4}+\frac{y^2}{9}=1
$$

The larger denominator is under `y^2`, so the major axis is along the y-axis.

Thus:

$$
a=3,\quad b=2
$$

Find `c`:

$$
c^2=a^2-b^2=9-4=5
$$

So:

$$
c=\sqrt5
$$

Foci:

$$
(0,\sqrt5),\quad (0,-\sqrt5)
$$

Vertices:

$$
(0,3),\quad (0,-3)
$$

Length of major axis:

$$
6
$$

Length of minor axis:

$$
4
$$

Eccentricity:

$$
e=\frac{\sqrt5}{3}
$$

### 20.3 Example: Vertices And Foci Given

Find the ellipse with vertices:

$$
(\pm13,0)
$$

and foci:

$$
(\pm5,0)
$$

Major axis is along x-axis.

So:

$$
a=13,\quad c=5
$$

Use:

$$
c^2=a^2-b^2
$$

So:

$$
25=169-b^2
$$

Thus:

$$
b^2=144
$$

Equation:

$$
\frac{x^2}{169}+\frac{y^2}{144}=1
$$

### 20.4 Example: Major Axis Length And Foci Given

Find the ellipse whose major axis has length 20 and foci are:

$$
(0,\pm5)
$$

Since foci are on y-axis, major axis is y-axis.

Major axis length:

$$
2a=20
$$

So:

$$
a=10
$$

Also:

$$
c=5
$$

Use:

$$
c^2=a^2-b^2
$$

$$
25=100-b^2
$$

Thus:

$$
b^2=75
$$

Equation:

$$
\frac{x^2}{75}+\frac{y^2}{100}=1
$$

### 20.5 Example: Major Axis Along x-Axis And Two Points Given

Find the ellipse with major axis along x-axis passing through:

$$
(4,3)
$$

and:

$$
(-1,4)
$$

Use:

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1
$$

Substitute `(4,3)`:

$$
\frac{16}{a^2}+\frac{9}{b^2}=1
$$

Substitute `(-1,4)`:

$$
\frac{1}{a^2}+\frac{16}{b^2}=1
$$

Solving gives:

$$
a^2=\frac{247}{7}
$$

and:

$$
b^2=\frac{247}{15}
$$

Thus:

$$
\frac{x^2}{247/7}+\frac{y^2}{247/15}=1
$$

Multiplying by 247:

$$
7x^2+15y^2=247
$$

## 21. Hyperbola

A hyperbola is the set of all points in a plane such that the difference of the distances from two fixed points is constant.

The fixed points are the foci.

The midpoint of the foci is the centre.

The line through the foci is the transverse axis.

The line through the centre perpendicular to the transverse axis is the conjugate axis.

The points where the hyperbola meets the transverse axis are the vertices.

## 22. Hyperbola Parameters

For a standard hyperbola:

- `a` is the semi-transverse axis;
- `b` is the semi-conjugate axis;
- `c` is the distance from centre to each focus.

For a hyperbola:

$$
c^2=a^2+b^2
$$

The eccentricity is:

$$
e=\frac{c}{a}
$$

For a hyperbola:

$$
e>1
$$

## 23. Standard Hyperbola With Transverse Axis Along x-Axis

Equation:

$$
\frac{x^2}{a^2}-\frac{y^2}{b^2}=1
$$

Centre:

$$
(0,0)
$$

Vertices:

$$
(\pm a,0)
$$

Foci:

$$
(\pm c,0)
$$

where:

$$
c^2=a^2+b^2
$$

Length of transverse axis:

$$
2a
$$

Length of conjugate axis:

$$
2b
$$

Length of latus rectum:

$$
\frac{2b^2}{a}
$$

Asymptotes:

$$
y=\pm\frac{b}{a}x
$$

## 24. Standard Hyperbola With Transverse Axis Along y-Axis

Equation:

$$
\frac{y^2}{a^2}-\frac{x^2}{b^2}=1
$$

Centre:

$$
(0,0)
$$

Vertices:

$$
(0,\pm a)
$$

Foci:

$$
(0,\pm c)
$$

where:

$$
c^2=a^2+b^2
$$

Length of transverse axis:

$$
2a
$$

Length of conjugate axis:

$$
2b
$$

Length of latus rectum:

$$
\frac{2b^2}{a}
$$

Asymptotes:

$$
y=\pm\frac{a}{b}x
$$

## 25. How To Identify Transverse Axis Of A Hyperbola

The positive squared term tells the transverse axis.

If the positive term is:

$$
\frac{x^2}{a^2}
$$

then the transverse axis is the x-axis.

If the positive term is:

$$
\frac{y^2}{a^2}
$$

then the transverse axis is the y-axis.

## 26. Hyperbola Examples

### 26.1 Example: x-Axis Hyperbola

Find foci, vertices, eccentricity, and latus rectum for:

$$
\frac{x^2}{9}-\frac{y^2}{16}=1
$$

Here:

$$
a^2=9,\quad b^2=16
$$

So:

$$
a=3,\quad b=4
$$

Find `c`:

$$
c^2=a^2+b^2=9+16=25
$$

Thus:

$$
c=5
$$

Foci:

$$
(\pm5,0)
$$

Vertices:

$$
(\pm3,0)
$$

Eccentricity:

$$
e=\frac{5}{3}
$$

Length of latus rectum:

$$
\frac{2b^2}{a}=\frac{2(16)}{3}=\frac{32}{3}
$$

### 26.2 Example: y-Axis Hyperbola

Find data for:

$$
y^2-16x^2=16
$$

Divide by 16:

$$
\frac{y^2}{16}-x^2=1
$$

Write:

$$
\frac{y^2}{16}-\frac{x^2}{1}=1
$$

So:

$$
a=4,\quad b=1
$$

Find:

$$
c^2=a^2+b^2=16+1=17
$$

Thus:

$$
c=\sqrt{17}
$$

Foci:

$$
(0,\pm\sqrt{17})
$$

Vertices:

$$
(0,\pm4)
$$

Eccentricity:

$$
e=\frac{\sqrt{17}}{4}
$$

Length of latus rectum:

$$
\frac{2b^2}{a}=\frac{2}{4}=\frac{1}{2}
$$

### 26.3 Example: Foci And Vertices Given

Find the hyperbola with foci:

$$
(0,\pm3)
$$

and vertices:

$$
\left(0,\pm\frac{\sqrt{11}}{2}\right)
$$

The transverse axis is y-axis.

So:

$$
a=\frac{\sqrt{11}}{2}
$$

and:

$$
c=3
$$

Then:

$$
b^2=c^2-a^2
$$

$$
b^2=9-\frac{11}{4}=\frac{25}{4}
$$

Equation:

$$
\frac{y^2}{11/4}-\frac{x^2}{25/4}=1
$$

Multiply to simplify:

$$
100y^2-44x^2=275
$$

### 26.4 Example: Foci And Latus Rectum Given

Find the hyperbola with foci:

$$
(0,\pm12)
$$

and latus rectum length:

$$
36
$$

Since foci are on the y-axis:

$$
\frac{y^2}{a^2}-\frac{x^2}{b^2}=1
$$

Here:

$$
c=12
$$

Latus rectum:

$$
\frac{2b^2}{a}=36
$$

So:

$$
b^2=18a
$$

Also:

$$
c^2=a^2+b^2
$$

Therefore:

$$
144=a^2+18a
$$

$$
a^2+18a-144=0
$$

Solving:

$$
a=6
$$

Then:

$$
b^2=108
$$

Equation:

$$
\frac{y^2}{36}-\frac{x^2}{108}=1
$$

or:

$$
3y^2-x^2=108
$$

## 27. Comparing Ellipse And Hyperbola

| Feature | Ellipse | Hyperbola |
|---|---|---|
| Distance condition | Sum of distances from foci is constant | Difference of distances from foci is constant |
| Relation among a, b, c | `c^2=a^2-b^2` | `c^2=a^2+b^2` |
| Eccentricity | `0<e<1` | `e>1` |
| Standard x-axis form | `x^2/a^2+y^2/b^2=1` | `x^2/a^2-y^2/b^2=1` |
| Shape | Closed oval | Two open branches |
| Major or transverse axis | Along foci | Along foci |

## 28. Application: Parabolic Mirror

### 28.1 Example

The focus of a parabolic mirror is 5 cm from the vertex. The mirror is 45 cm deep. Find the width.

Set vertex at origin and axis along the positive x-axis.

Then:

$$
y^2=4ax
$$

Given:

$$
a=5
$$

So:

$$
y^2=20x
$$

Depth is 45 cm, so:

$$
x=45
$$

Then:

$$
y^2=20(45)=900
$$

So:

$$
y=30
$$

The full width is:

$$
2y=60
$$

Therefore, the mirror is 60 cm wide.

## 29. Application: Parabolic Beam

A beam supported at both ends can take a parabolic shape under a central load.

### 29.1 Example

Supports are 12 m apart. The deflection at the centre is 3 cm. How far from the centre is the deflection 1 cm?

Take the lowest point as vertex and axis vertical.

Use:

$$
x^2=4ay
$$

Half span:

$$
6\text{ m}
$$

The end is 3 cm above the lowest point:

$$
\frac{3}{100}\text{ m}
$$

So point:

$$
\left(6,\frac{3}{100}\right)
$$

lies on the parabola.

Thus:

$$
36=4a\left(\frac{3}{100}\right)
$$

So:

$$
a=300
$$

For deflection 1 cm from the lowest point, the height above the vertex is:

$$
\frac{2}{100}
$$

because the total centre deflection is 3 cm and the point has deflection 1 cm below the support level.

Now:

$$
x^2=4(300)\left(\frac{2}{100}\right)
$$

$$
x^2=24
$$

Hence:

$$
x=2\sqrt6
$$

So the point is `2sqrt6` metres from the centre.

## 30. Application: Locus Of A Point On A Rod

### 30.1 Example

A rod of length 15 cm rests between coordinate axes. End A lies on the x-axis and end B lies on the y-axis. Point P on the rod satisfies `AP=6 cm`. Show that the locus of P is an ellipse.

Then:

$$
PB=15-6=9
$$

Let:

$$
P=(x,y)
$$

Using the geometry of the right triangle formed with the axes:

$$
\frac{x}{9}=\cos\theta
$$

and:

$$
\frac{y}{6}=\sin\theta
$$

Since:

$$
\cos^2\theta+\sin^2\theta=1
$$

we get:

$$
\left(\frac{x}{9}\right)^2+\left(\frac{y}{6}\right)^2=1
$$

So:

$$
\frac{x^2}{81}+\frac{y^2}{36}=1
$$

This is an ellipse.

## 31. Practice Set A: Circles

### Question A1

Find the equation of the circle with centre `(0,2)` and radius 2.

Answer:

$$
x^2+(y-2)^2=4
$$

### Question A2

Find the equation of the circle with centre `(-2,3)` and radius 4.

Answer:

$$
(x+2)^2+(y-3)^2=16
$$

### Question A3

Find centre and radius:

$$
(x+5)^2+(y-3)^2=36
$$

Answer:

Centre:

$$
(-5,3)
$$

Radius:

$$
6
$$

### Question A4

Find centre and radius:

$$
x^2+y^2-4x-8y-45=0
$$

Answer:

Complete squares:

$$
x^2-4x+y^2-8y=45
$$

$$
(x-2)^2+(y-4)^2=65
$$

Centre:

$$
(2,4)
$$

Radius:

$$
\sqrt{65}
$$

## 32. Practice Set B: Parabolas

### Question B1

Find focus, directrix, axis, and latus rectum of:

$$
y^2=12x
$$

Answer:

Compare with:

$$
y^2=4ax
$$

So:

$$
a=3
$$

Focus:

$$
(3,0)
$$

Directrix:

$$
x=-3
$$

Axis:

$$
y=0
$$

Latus rectum length:

$$
12
$$

### Question B2

Find focus, directrix, axis, and latus rectum of:

$$
x^2=-16y
$$

Answer:

Compare with:

$$
x^2=-4ay
$$

So:

$$
a=4
$$

Focus:

$$
(0,-4)
$$

Directrix:

$$
y=4
$$

Axis:

$$
x=0
$$

Latus rectum length:

$$
16
$$

### Question B3

Find the parabola with vertex `(0,0)` and focus `(3,0)`.

Answer:

It opens right with:

$$
a=3
$$

So:

$$
y^2=12x
$$

### Question B4

Find the parabola with vertex `(0,0)`, axis along x-axis, passing through `(2,3)`.

Answer:

Use:

$$
y^2=4ax
$$

Substitute:

$$
3^2=4a(2)
$$

$$
9=8a
$$

So:

$$
a=\frac{9}{8}
$$

Equation:

$$
y^2=\frac{9}{2}x
$$

## 33. Practice Set C: Ellipses

### Question C1

Find data for:

$$
\frac{x^2}{36}+\frac{y^2}{16}=1
$$

Answer:

Major axis is x-axis.

$$
a=6,\quad b=4
$$

$$
c^2=36-16=20
$$

$$
c=2\sqrt5
$$

Foci:

$$
(\pm2\sqrt5,0)
$$

Vertices:

$$
(\pm6,0)
$$

Major axis length:

$$
12
$$

Minor axis length:

$$
8
$$

Eccentricity:

$$
\frac{\sqrt5}{3}
$$

Latus rectum:

$$
\frac{2b^2}{a}=\frac{32}{6}=\frac{16}{3}
$$

### Question C2

Find the ellipse with vertices:

$$
(0,\pm13)
$$

and foci:

$$
(0,\pm5)
$$

Answer:

Major axis is y-axis.

$$
a=13,\quad c=5
$$

$$
b^2=a^2-c^2=169-25=144
$$

Equation:

$$
\frac{x^2}{144}+\frac{y^2}{169}=1
$$

### Question C3

Find the ellipse with foci:

$$
(\pm3,0)
$$

and:

$$
a=4
$$

Answer:

Major axis is x-axis.

$$
c=3,\quad a=4
$$

$$
b^2=a^2-c^2=16-9=7
$$

Equation:

$$
\frac{x^2}{16}+\frac{y^2}{7}=1
$$

## 34. Practice Set D: Hyperbolas

### Question D1

Find data for:

$$
\frac{x^2}{16}-\frac{y^2}{9}=1
$$

Answer:

Transverse axis is x-axis.

$$
a=4,\quad b=3
$$

$$
c^2=a^2+b^2=16+9=25
$$

$$
c=5
$$

Foci:

$$
(\pm5,0)
$$

Vertices:

$$
(\pm4,0)
$$

Eccentricity:

$$
\frac{5}{4}
$$

Latus rectum:

$$
\frac{2b^2}{a}=\frac{18}{4}=\frac{9}{2}
$$

### Question D2

Find the hyperbola with vertices:

$$
(\pm2,0)
$$

and foci:

$$
(\pm3,0)
$$

Answer:

Transverse axis is x-axis.

$$
a=2,\quad c=3
$$

$$
b^2=c^2-a^2=9-4=5
$$

Equation:

$$
\frac{x^2}{4}-\frac{y^2}{5}=1
$$

### Question D3

Find the hyperbola with vertices:

$$
(0,\pm5)
$$

and foci:

$$
(0,\pm8)
$$

Answer:

Transverse axis is y-axis.

$$
a=5,\quad c=8
$$

$$
b^2=c^2-a^2=64-25=39
$$

Equation:

$$
\frac{y^2}{25}-\frac{x^2}{39}=1
$$

## 35. Formula Sheet

### Circle

$$
(x-h)^2+(y-k)^2=r^2
$$

### Parabola Opening Right

$$
y^2=4ax
$$

Focus:

$$
(a,0)
$$

Directrix:

$$
x=-a
$$

### Parabola Opening Left

$$
y^2=-4ax
$$

Focus:

$$
(-a,0)
$$

Directrix:

$$
x=a
$$

### Parabola Opening Up

$$
x^2=4ay
$$

Focus:

$$
(0,a)
$$

Directrix:

$$
y=-a
$$

### Parabola Opening Down

$$
x^2=-4ay
$$

Focus:

$$
(0,-a)
$$

Directrix:

$$
y=a
$$

### Ellipse, Major Axis x-Axis

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1,\quad a>b
$$

$$
c^2=a^2-b^2
$$

Foci:

$$
(\pm c,0)
$$

### Ellipse, Major Axis y-Axis

$$
\frac{x^2}{b^2}+\frac{y^2}{a^2}=1,\quad a>b
$$

$$
c^2=a^2-b^2
$$

Foci:

$$
(0,\pm c)
$$

### Hyperbola, Transverse Axis x-Axis

$$
\frac{x^2}{a^2}-\frac{y^2}{b^2}=1
$$

$$
c^2=a^2+b^2
$$

Foci:

$$
(\pm c,0)
$$

### Hyperbola, Transverse Axis y-Axis

$$
\frac{y^2}{a^2}-\frac{x^2}{b^2}=1
$$

$$
c^2=a^2+b^2
$$

Foci:

$$
(0,\pm c)
$$

### Eccentricity

Ellipse or hyperbola:

$$
e=\frac{c}{a}
$$

### Latus Rectum

Parabola:

$$
4a
$$

Ellipse or hyperbola:

$$
\frac{2b^2}{a}
$$

## 36. Final Learner Check

A learner is ready to move on if they can answer these:

1. How does a plane cut a cone to form a circle?
2. What geometric condition defines a parabola?
3. What is the difference between focus and directrix?
4. How do you know whether a parabola opens right, left, up, or down?
5. How do you complete squares to identify a circle?
6. What is the difference between the distance condition for ellipse and hyperbola?
7. Why is `c^2=a^2-b^2` for an ellipse but `c^2=a^2+b^2` for a hyperbola?
8. How do you identify the major axis of an ellipse from its equation?
9. How do you identify the transverse axis of a hyperbola from its equation?
10. What does eccentricity measure?

## 37. One-Page Review

- A conic section is formed by cutting a cone with a plane.
- A circle is the set of points at fixed distance from a fixed centre.
- Circle equation is `(x-h)^2+(y-k)^2=r^2`.
- A parabola is the set of points equidistant from a focus and a directrix.
- Standard parabolas have equations `y^2=4ax`, `y^2=-4ax`, `x^2=4ay`, and `x^2=-4ay`.
- A parabola has latus rectum length `4a`.
- An ellipse is defined by constant sum of distances from two foci.
- For an ellipse, `c^2=a^2-b^2` and `0<e<1`.
- A hyperbola is defined by constant difference of distances from two foci.
- For a hyperbola, `c^2=a^2+b^2` and `e>1`.
- Ellipse and hyperbola latus rectum length is `2b^2/a`.
- The larger denominator in an ellipse gives the major axis.
- The positive term in a hyperbola gives the transverse axis.
