# Chapter 11 - Introduction To Three Dimensional Geometry

Class 11 Maths learner notes

## 1. Big Picture

In two-dimensional coordinate geometry, a point in a plane is located by two numbers:

$$
(x,y)
$$

In three-dimensional geometry, a point in space is located by three numbers:

$$
(x,y,z)
$$

The third coordinate is needed because real objects do not only lie left-right and front-back. They also have height or depth.

Examples:

- position of a flying aeroplane;
- tip of a ceiling fan;
- hanging bulb in a room;
- point on a building;
- position of a ball moving through space.

This chapter introduces the coordinate system for space and the distance formula in three dimensions.

## 2. Learning Goals

By the end of this chapter, a learner should be able to:

- understand the need for three coordinates;
- identify the x-axis, y-axis, and z-axis in space;
- identify the coordinate planes XY, YZ, and ZX;
- understand the eight octants;
- locate a point from an ordered triplet `(x,y,z)`;
- decide which octant a point lies in;
- recognise points on axes and coordinate planes;
- calculate distance between two points in space;
- test basic collinearity using distances;
- test right triangle and parallelogram conditions using distances;
- form simple equations of loci in space;
- use the centroid formula for a triangle in 3D.

## 3. Why Three Coordinates Are Needed

In a plane, two perpendicular axes are enough.

For example, a point on a sheet of paper can be located by:

- distance along the x-axis;
- distance along the y-axis.

But in space, a point also has a height or depth.

So a point needs:

- an x-coordinate;
- a y-coordinate;
- a z-coordinate.

Thus, a point in space is written as:

$$
(x,y,z)
$$

## 4. Three Coordinate Axes

In 3D geometry, we use three mutually perpendicular axes:

- x-axis;
- y-axis;
- z-axis.

They meet at one point called the origin.

The origin is:

$$
(0,0,0)
$$

The coordinate axes form a rectangular coordinate system in space.

## 5. Coordinate Planes

Any two axes determine a coordinate plane.

There are three coordinate planes.

### 5.1 XY-Plane

The XY-plane contains the x-axis and y-axis.

Every point in the XY-plane has:

$$
z=0
$$

So points in the XY-plane have form:

$$
(x,y,0)
$$

Equation of XY-plane:

$$
z=0
$$

### 5.2 YZ-Plane

The YZ-plane contains the y-axis and z-axis.

Every point in the YZ-plane has:

$$
x=0
$$

So points in the YZ-plane have form:

$$
(0,y,z)
$$

Equation of YZ-plane:

$$
x=0
$$

### 5.3 ZX-Plane

The ZX-plane contains the z-axis and x-axis.

Every point in the ZX-plane has:

$$
y=0
$$

So points in the ZX-plane have form:

$$
(x,0,z)
$$

Equation of ZX-plane:

$$
y=0
$$

## 6. Points On Coordinate Axes

### 6.1 Point On x-Axis

A point on the x-axis has:

$$
y=0,\quad z=0
$$

So its form is:

$$
(x,0,0)
$$

### 6.2 Point On y-Axis

A point on the y-axis has:

$$
x=0,\quad z=0
$$

So its form is:

$$
(0,y,0)
$$

### 6.3 Point On z-Axis

A point on the z-axis has:

$$
x=0,\quad y=0
$$

So its form is:

$$
(0,0,z)
$$

## 7. Coordinates As Distances From Planes

For a point:

$$
P(x,y,z)
$$

the coordinates can be interpreted as signed distances from coordinate planes.

- `x` is the signed distance from the YZ-plane.
- `y` is the signed distance from the ZX-plane.
- `z` is the signed distance from the XY-plane.

The sign tells the side of the plane.

For example:

If:

$$
z>0
$$

the point is above the XY-plane.

If:

$$
z<0
$$

the point is below the XY-plane.

## 8. Locating A Point In Space

To locate:

$$
P(x,y,z)
$$

one way is:

1. Move `x` units along the x-axis.
2. From there, move `y` units parallel to the y-axis.
3. From that point in the XY-plane, move `z` units parallel to the z-axis.

The final point is:

$$
P(x,y,z)
$$

## 9. Octants

The three coordinate planes divide space into eight parts.

These parts are called octants.

The octant of a point is determined by the signs of:

$$
x,\quad y,\quad z
$$

## 10. Sign Table For Octants

| Octant | x | y | z |
|---|---:|---:|---:|
| I | + | + | + |
| II | - | + | + |
| III | - | - | + |
| IV | + | - | + |
| V | + | + | - |
| VI | - | + | - |
| VII | - | - | - |
| VIII | + | - | - |

### 10.1 Example

Find the octant of:

$$
(-3,1,2)
$$

Signs:

$$
(-,+,+)
$$

So the point is in the second octant.

### 10.2 Example

Find the octant of:

$$
(-3,1,-2)
$$

Signs:

$$
(-,+,-)
$$

So the point is in the sixth octant.

## 11. Reading Coordinates From A Diagram

If:

$$
P=(2,4,5)
$$

then:

- its x-coordinate is 2;
- its y-coordinate is 4;
- its z-coordinate is 5.

If a projected point has y-coordinate 0 but same x and z values, its coordinates are:

$$
(2,0,5)
$$

This is the type of reasoning used when reading points from a 3D diagram.

## 12. Distance Formula In 3D

For:

$$
P(x_1,y_1,z_1)
$$

and:

$$
Q(x_2,y_2,z_2)
$$

the distance between them is:

$$
PQ=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}
$$

This is the 3D version of the distance formula.

It comes from applying Pythagoras theorem in a rectangular box.

## 13. Distance From Origin

If:

$$
O=(0,0,0)
$$

and:

$$
Q=(x,y,z)
$$

then:

$$
OQ=\sqrt{x^2+y^2+z^2}
$$

## 14. Distance Examples

### 14.1 Example

Find the distance between:

$$
P(1,-3,4)
$$

and:

$$
Q(-4,1,2)
$$

Use:

$$
PQ=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}
$$

So:

$$
PQ=\sqrt{(-4-1)^2+(1-(-3))^2+(2-4)^2}
$$

$$
PQ=\sqrt{(-5)^2+4^2+(-2)^2}
$$

$$
PQ=\sqrt{25+16+4}
$$

$$
PQ=\sqrt{45}=3\sqrt5
$$

### 14.2 Example

Find the distance between:

$$
(2,3,5)
$$

and:

$$
(4,3,1)
$$

Use:

$$
d=\sqrt{(4-2)^2+(3-3)^2+(1-5)^2}
$$

$$
d=\sqrt{2^2+0^2+(-4)^2}
$$

$$
d=\sqrt{20}=2\sqrt5
$$

### 14.3 Example

Find the distance between:

$$
(-3,7,2)
$$

and:

$$
(2,4,-1)
$$

Use:

$$
d=\sqrt{(2+3)^2+(4-7)^2+(-1-2)^2}
$$

$$
d=\sqrt{5^2+(-3)^2+(-3)^2}
$$

$$
d=\sqrt{43}
$$

## 15. Collinearity Using Distances

Three points `P`, `Q`, and `R` are collinear if one of the distances is the sum of the other two.

For example, if:

$$
PQ+QR=PR
$$

then `P`, `Q`, and `R` lie on the same line with `Q` between `P` and `R`.

### 15.1 Example

Show that:

$$
P(-2,3,5),\quad Q(1,2,3),\quad R(7,0,-1)
$$

are collinear.

Compute:

$$
PQ=\sqrt{(1+2)^2+(2-3)^2+(3-5)^2}
$$

$$
PQ=\sqrt{3^2+(-1)^2+(-2)^2}=\sqrt{14}
$$

Now:

$$
QR=\sqrt{(7-1)^2+(0-2)^2+(-1-3)^2}
$$

$$
QR=\sqrt{6^2+(-2)^2+(-4)^2}
$$

$$
QR=\sqrt{56}=2\sqrt{14}
$$

And:

$$
PR=\sqrt{(7+2)^2+(0-3)^2+(-1-5)^2}
$$

$$
PR=\sqrt{9^2+(-3)^2+(-6)^2}
$$

$$
PR=\sqrt{126}=3\sqrt{14}
$$

Since:

$$
PQ+QR=\sqrt{14}+2\sqrt{14}=3\sqrt{14}=PR
$$

the points are collinear.

## 16. Testing Right Angled Triangle

For three points A, B, and C, calculate:

$$
AB^2,\quad BC^2,\quad CA^2
$$

The triangle is right angled if the largest one equals the sum of the other two.

That is:

$$
\text{largest squared side}=\text{sum of other two squared sides}
$$

### 16.1 Example

Are:

$$
A(3,6,9),\quad B(10,20,30),\quad C(25,-41,5)
$$

vertices of a right angled triangle?

Compute:

$$
AB^2=(10-3)^2+(20-6)^2+(30-9)^2
$$

$$
AB^2=49+196+441=686
$$

$$
BC^2=(25-10)^2+(-41-20)^2+(5-30)^2
$$

$$
BC^2=225+3721+625=4571
$$

$$
CA^2=(3-25)^2+(6-(-41))^2+(9-5)^2
$$

$$
CA^2=484+2209+16=2709
$$

Check:

$$
686+2709=3395
$$

which is not:

$$
4571
$$

So the triangle is not right angled.

## 17. Midpoint Formula In 3D

The midpoint of:

$$
(x_1,y_1,z_1)
$$

and:

$$
(x_2,y_2,z_2)
$$

is:

$$
\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2},\frac{z_1+z_2}{2}\right)
$$

This is useful for parallelogram and median problems.

## 18. Centroid Formula In 3D

For a triangle with vertices:

$$
A(x_1,y_1,z_1),\quad B(x_2,y_2,z_2),\quad C(x_3,y_3,z_3)
$$

the centroid is:

$$
\left(\frac{x_1+x_2+x_3}{3},\frac{y_1+y_2+y_3}{3},\frac{z_1+z_2+z_3}{3}\right)
$$

### 18.1 Example

The centroid of triangle ABC is:

$$
(1,1,1)
$$

Given:

$$
A=(3,-5,7)
$$

and:

$$
B=(-1,7,-6)
$$

Find `C`.

Let:

$$
C=(x,y,z)
$$

Using centroid formula:

$$
\frac{3+(-1)+x}{3}=1
$$

So:

$$
x=1
$$

Next:

$$
\frac{-5+7+y}{3}=1
$$

So:

$$
y=1
$$

Finally:

$$
\frac{7+(-6)+z}{3}=1
$$

So:

$$
z=2
$$

Therefore:

$$
C=(1,1,2)
$$

## 19. Parallelogram In 3D

A quadrilateral is a parallelogram if opposite sides are equal.

It is also a parallelogram if its diagonals bisect each other.

### 19.1 Example

Show that:

$$
A(1,2,3),\quad B(-1,-2,-1),\quad C(2,3,2),\quad D(4,7,6)
$$

form a parallelogram, but not a rectangle.

Compute side lengths.

$$
AB=\sqrt{(-1-1)^2+(-2-2)^2+(-1-3)^2}
$$

$$
AB=\sqrt{4+16+16}=6
$$

$$
CD=\sqrt{(4-2)^2+(7-3)^2+(6-2)^2}
$$

$$
CD=\sqrt{4+16+16}=6
$$

So:

$$
AB=CD
$$

Now:

$$
BC=\sqrt{(2+1)^2+(3+2)^2+(2+1)^2}
$$

$$
BC=\sqrt{9+25+9}=\sqrt{43}
$$

and:

$$
AD=\sqrt{(4-1)^2+(7-2)^2+(6-3)^2}
$$

$$
AD=\sqrt{9+25+9}=\sqrt{43}
$$

So:

$$
BC=AD
$$

Thus ABCD is a parallelogram.

To check whether it is a rectangle, compare diagonals.

$$
AC=\sqrt{(2-1)^2+(3-2)^2+(2-3)^2}
$$

$$
AC=\sqrt3
$$

$$
BD=\sqrt{(4+1)^2+(7+2)^2+(6+1)^2}
$$

$$
BD=\sqrt{25+81+49}=\sqrt{155}
$$

Since diagonals are unequal, the parallelogram is not a rectangle.

## 20. Locus: Equal Distances From Two Points

A locus is the set of all points satisfying a condition.

If a point `P(x,y,z)` is equidistant from two fixed points `A` and `B`, then:

$$
PA=PB
$$

It is usually easier to square both sides:

$$
PA^2=PB^2
$$

This often gives a plane.

### 20.1 Example

Find the equation of the set of points equidistant from:

$$
A(3,4,-5)
$$

and:

$$
B(-2,1,4)
$$

Let:

$$
P=(x,y,z)
$$

Then:

$$
PA^2=(x-3)^2+(y-4)^2+(z+5)^2
$$

and:

$$
PB^2=(x+2)^2+(y-1)^2+(z-4)^2
$$

Set equal:

$$
(x-3)^2+(y-4)^2+(z+5)^2=(x+2)^2+(y-1)^2+(z-4)^2
$$

Simplifying:

$$
10x+6y-18z-29=0
$$

This is the required locus.

## 21. Locus: Sum Of Squared Distances

### 21.1 Example

Find the equation of the set of points `P` such that:

$$
PA^2+PB^2=2k^2
$$

where:

$$
A=(3,4,5)
$$

and:

$$
B=(-1,3,-7)
$$

Let:

$$
P=(x,y,z)
$$

Then:

$$
PA^2=(x-3)^2+(y-4)^2+(z-5)^2
$$

and:

$$
PB^2=(x+1)^2+(y-3)^2+(z+7)^2
$$

Given:

$$
PA^2+PB^2=2k^2
$$

So:

$$
(x-3)^2+(y-4)^2+(z-5)^2+(x+1)^2+(y-3)^2+(z+7)^2=2k^2
$$

Expanding and collecting:

$$
2x^2+2y^2+2z^2-4x-14y+4z+109=2k^2
$$

Equivalently:

$$
2x^2+2y^2+2z^2-4x-14y+4z=2k^2-109
$$

## 22. Locus: Constant Sum Of Distances

### 22.1 Example

Find the equation of the set of points whose sum of distances from:

$$
A(4,0,0)
$$

and:

$$
B(-4,0,0)
$$

is:

$$
10
$$

These two fixed points behave like foci.

The condition is:

$$
PA+PB=10
$$

Here:

$$
2a=10
$$

so:

$$
a=5
$$

The foci are at:

$$
(\pm4,0,0)
$$

so:

$$
c=4
$$

Then:

$$
b^2=a^2-c^2=25-16=9
$$

The locus is:

$$
\frac{x^2}{25}+\frac{y^2+z^2}{9}=1
$$

This is the 3D analogue of an ellipse rotated about the x-axis.

## 23. Practice Set A: Coordinates And Octants

### Question A1

A point is on the x-axis. What are its y-coordinate and z-coordinate?

Answer:

Both are 0.

The point has form:

$$
(x,0,0)
$$

### Question A2

A point is in the XZ-plane. What is its y-coordinate?

Answer:

The y-coordinate is 0.

The point has form:

$$
(x,0,z)
$$

### Question A3

Name the octant of:

$$
(4,-2,3)
$$

Answer:

Signs:

$$
(+,-,+)
$$

This is octant IV.

### Question A4

Name the octant of:

$$
(-2,-4,-7)
$$

Answer:

Signs:

$$
(-,-,-)
$$

This is octant VII.

## 24. Practice Set B: Distance Formula

### Question B1

Find the distance between:

$$
(-1,3,-4)
$$

and:

$$
(1,-3,4)
$$

Answer:

$$
d=\sqrt{(1+1)^2+(-3-3)^2+(4+4)^2}
$$

$$
d=\sqrt{2^2+(-6)^2+8^2}
$$

$$
d=\sqrt{104}=2\sqrt{26}
$$

### Question B2

Find the distance between:

$$
(2,-1,3)
$$

and:

$$
(-2,1,3)
$$

Answer:

$$
d=\sqrt{(-2-2)^2+(1+1)^2+(3-3)^2}
$$

$$
d=\sqrt{(-4)^2+2^2+0^2}
$$

$$
d=\sqrt{20}=2\sqrt5
$$

### Question B3

Verify that:

$$
(0,7,-10),\quad (1,6,-6),\quad (4,9,-6)
$$

form an isosceles triangle.

Answer:

Let:

$$
A=(0,7,-10)
$$

$$
B=(1,6,-6)
$$

$$
C=(4,9,-6)
$$

Compute:

$$
AB^2=(1-0)^2+(6-7)^2+(-6+10)^2=1+1+16=18
$$

$$
BC^2=(4-1)^2+(9-6)^2+(-6+6)^2=9+9+0=18
$$

Thus:

$$
AB=BC
$$

So the triangle is isosceles.

## 25. Practice Set C: Midpoint, Centroid, Parallelogram

### Question C1

Three vertices of parallelogram ABCD are:

$$
A(3,-1,2),\quad B(1,2,-4),\quad C(-1,1,2)
$$

Find D.

Answer:

For consecutive vertices of a parallelogram:

$$
A+C=B+D
$$

So:

$$
D=A+C-B
$$

Compute:

$$
D=(3,-1,2)+(-1,1,2)-(1,2,-4)
$$

$$
D=(2,0,4)-(1,2,-4)
$$

$$
D=(1,-2,8)
$$

### Question C2

If the origin is the centroid of triangle PQR with:

$$
P=(2a,2,6)
$$

$$
Q=(-4,3b,-10)
$$

$$
R=(8,14,2c)
$$

find `a`, `b`, and `c`.

Answer:

Centroid is:

$$
(0,0,0)
$$

So:

$$
\frac{2a-4+8}{3}=0
$$

$$
2a+4=0
$$

$$
a=-2
$$

Next:

$$
\frac{2+3b+14}{3}=0
$$

$$
3b+16=0
$$

$$
b=-\frac{16}{3}
$$

Finally:

$$
\frac{6-10+2c}{3}=0
$$

$$
2c-4=0
$$

$$
c=2
$$

## 26. Formula Sheet

### Point In Space

$$
(x,y,z)
$$

### Origin

$$
(0,0,0)
$$

### Coordinate Planes

XY-plane:

$$
z=0
$$

YZ-plane:

$$
x=0
$$

ZX-plane:

$$
y=0
$$

### Coordinate Axes

x-axis:

$$
(x,0,0)
$$

y-axis:

$$
(0,y,0)
$$

z-axis:

$$
(0,0,z)
$$

### Distance Between Two Points

$$
d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}
$$

### Distance From Origin

$$
d=\sqrt{x^2+y^2+z^2}
$$

### Midpoint

$$
\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2},\frac{z_1+z_2}{2}\right)
$$

### Centroid Of Triangle

$$
\left(\frac{x_1+x_2+x_3}{3},\frac{y_1+y_2+y_3}{3},\frac{z_1+z_2+z_3}{3}\right)
$$

## 27. Common Mistakes

### Mistake 1: Writing Coordinates In Wrong Order

Always write a point in 3D as:

$$
(x,y,z)
$$

not `(x,z,y)`.

### Mistake 2: Confusing Coordinate Planes

XY-plane means:

$$
z=0
$$

not `y=0`.

### Mistake 3: Forgetting The z-Part In Distance

In 3D:

$$
d^2=(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2
$$

Do not use only the first two terms.

### Mistake 4: Misidentifying Octants

Octants depend on the signs of all three coordinates.

Check x, then y, then z.

### Mistake 5: Using Distances Instead Of Squared Distances Unnecessarily

For right triangle tests, use squared distances.

This avoids extra square roots.

## 28. Final Learner Check

A learner is ready to move on if they can answer these:

1. Why does a point in space need three coordinates?
2. What are the equations of the coordinate planes?
3. What is the form of a point on the z-axis?
4. What octant contains a point with signs `(-,+,-)`?
5. What is the distance between two points in 3D?
6. How do you test collinearity using distances?
7. How do you test whether three points form a right triangle?
8. What is the midpoint formula in 3D?
9. What is the centroid formula in 3D?
10. What type of equation usually appears when a point is equidistant from two fixed points?

## 29. One-Page Review

- A point in 3D is written as `(x,y,z)`.
- The coordinate axes are x-axis, y-axis, and z-axis.
- The coordinate planes are XY, YZ, and ZX.
- XY-plane has equation `z=0`.
- YZ-plane has equation `x=0`.
- ZX-plane has equation `y=0`.
- The coordinate planes divide space into eight octants.
- The signs of `(x,y,z)` determine the octant.
- Distance between two points is the square root of the sum of squares of coordinate differences.
- Points on x-axis have form `(x,0,0)`.
- Points on y-axis have form `(0,y,0)`.
- Points on z-axis have form `(0,0,z)`.
- Midpoint and centroid formulas work coordinate by coordinate.
