# Chapter 3 - Motion In A Plane

## 1. Chapter Purpose

Motion in a straight line can be described using signs: positive direction and negative direction. But motion in a plane needs more than signs. A body can move east, north, southwest, upward at an angle, around a circle, or along a curved path.

To describe such motion, Physics uses vectors.

This chapter has two major parts:

- the language of vectors
- the use of vectors to describe motion in a plane

By the end of this chapter, you should be able to:

- distinguish scalar and vector quantities
- represent position, displacement, velocity, and acceleration as vectors
- multiply a vector by a real number
- add and subtract vectors graphically
- resolve vectors into components
- use unit vectors
- add vectors analytically
- describe motion in a plane using vector equations
- solve constant-acceleration motion in two dimensions
- analyze lower-case projectile motion
- understand uniform circular motion and centripetal acceleration

## 2. Scalars And Vectors

Physical quantities are broadly classified into:

- scalars
- vectors

### 2.1 Scalar Quantity

A scalar quantity has magnitude only.

It is completely specified by a number and a unit.

Examples:

- mass
- time
- temperature
- distance
- speed
- volume
- density
- work
- energy

Scalars are added and multiplied using ordinary algebra, provided addition and subtraction are done between quantities with the same unit.

Example:

$$
2\ \text{kg}+3\ \text{kg}=5\ \text{kg}
$$

But:

$$
2\ \text{kg}+3\ \text{m}
$$

is meaningless.

### 2.2 Vector Quantity

A vector quantity has both magnitude and direction.

It also obeys the vector law of addition.

Examples:

- displacement
- velocity
- acceleration
- force
- momentum
- electric field

A vector is usually written with an arrow:

$$
\vec{A}
$$

Its magnitude is written as:

$$
|\vec{A}|=A
$$

The magnitude is always a scalar.

## 3. Why Direction Alone Is Not Enough

A quantity is not automatically a vector just because it has a direction-like description.

It must obey vector addition.

For example:

- displacement is a vector
- current is treated as a scalar in elementary circuit analysis even though it flows in a direction in a wire

The test is not only "has direction"; the test is whether vector rules apply.

## 4. Position Vector

To describe the position of a point \(P\) in a plane, choose an origin \(O\).

The vector from \(O\) to \(P\) is the position vector.

If the point has coordinates \((x,y)\), then:

$$
\vec{r}=x\hat{i}+y\hat{j}
$$

where:

- \(\hat{i}\) is the unit vector along the x-axis
- \(\hat{j}\) is the unit vector along the y-axis

In three dimensions:

$$
\vec{r}=x\hat{i}+y\hat{j}+z\hat{k}
$$

## 5. Displacement Vector

If a particle moves from position vector \(\vec{r}\) to \(\vec{r}'\), the displacement is:

$$
\Delta\vec{r}=\vec{r}'-\vec{r}
$$

If:

$$
\vec{r}=x\hat{i}+y\hat{j}
$$

and:

$$
\vec{r}'=x'\hat{i}+y'\hat{j}
$$

then:

$$
\Delta\vec{r}=(x'-x)\hat{i}+(y'-y)\hat{j}
$$

or:

$$
\Delta\vec{r}=\Delta x\hat{i}+\Delta y\hat{j}
$$

Displacement depends only on initial and final positions, not on the actual path.

## 6. Equality Of Vectors

Two vectors are equal if:

- their magnitudes are equal
- their directions are the same

They do not need to start from the same point.

Vectors that can be shifted parallel to themselves without changing meaning are called free vectors.

Example:

Two displacement vectors of 5 m east are equal even if they are drawn at different locations.

## 7. Multiplication Of A Vector By A Real Number

If a vector \(\vec{A}\) is multiplied by a real number \(\lambda\), the result is:

$$
\lambda\vec{A}
$$

### 7.1 Positive Multiplier

If \(\lambda>0\), the direction remains the same and magnitude becomes:

$$
|\lambda\vec{A}|=\lambda|\vec{A}|
$$

Example:

$$
2\vec{A}
$$

has twice the magnitude of \(\vec{A}\) and the same direction.

### 7.2 Negative Multiplier

If \(\lambda<0\), the direction reverses.

Example:

$$
-\vec{A}
$$

has the same magnitude as \(\vec{A}\), but opposite direction.

### 7.3 Zero Multiplier

If:

$$
\lambda=0
$$

then:

$$
0\vec{A}=\vec{0}
$$

This is the zero vector.

## 8. Addition Of Vectors: Head-To-Tail Method

To add \(\vec{A}\) and \(\vec{B}\):

1. Draw \(\vec{A}\).
2. Place the tail of \(\vec{B}\) at the head of \(\vec{A}\).
3. Draw a vector from the tail of \(\vec{A}\) to the head of \(\vec{B}\).

The result is:

$$
\vec{R}=\vec{A}+\vec{B}
$$

This is called the triangle law of vector addition.

## 9. Parallelogram Method

To add two vectors using the parallelogram method:

1. Draw \(\vec{A}\) and \(\vec{B}\) with the same tail.
2. Complete a parallelogram using lines parallel to \(\vec{A}\) and \(\vec{B}\).
3. The diagonal from the common tail is the resultant.

The resultant is:

$$
\vec{R}=\vec{A}+\vec{B}
$$

The triangle and parallelogram methods give the same result.

## 10. Properties Of Vector Addition

### 10.1 Commutative Law

$$
\vec{A}+\vec{B}=\vec{B}+\vec{A}
$$

Order does not matter in vector addition.

### 10.2 Associative Law

$$
(\vec{A}+\vec{B})+\vec{C}=\vec{A}+(\vec{B}+\vec{C})
$$

Grouping does not matter.

### 10.3 Zero Vector

The zero vector has zero magnitude.

$$
\vec{A}+(-\vec{A})=\vec{0}
$$

and:

$$
\vec{A}+\vec{0}=\vec{A}
$$

The direction of the zero vector is not specified.

## 11. Subtraction Of Vectors

Subtraction is defined using addition of the negative vector.

$$
\vec{A}-\vec{B}=\vec{A}+(-\vec{B})
$$

To draw \(\vec{A}-\vec{B}\):

1. Reverse \(\vec{B}\) to get \(-\vec{B}\).
2. Add \(\vec{A}\) and \(-\vec{B}\).

## 12. Unit Vectors

A unit vector has magnitude 1 and indicates direction.

The unit vectors along the coordinate axes are:

$$
\hat{i},\quad \hat{j},\quad \hat{k}
$$

They satisfy:

$$
|\hat{i}|=|\hat{j}|=|\hat{k}|=1
$$

Unit vectors have no physical dimension. They only show direction.

If \(\hat{n}\) is a unit vector along \(\vec{A}\), then:

$$
\vec{A}=A\hat{n}
$$

## 13. Resolution Of A Vector

Resolution means breaking a vector into components along chosen directions.

For a vector \(\vec{A}\) in the x-y plane:

$$
\vec{A}=A_x\hat{i}+A_y\hat{j}
$$

Here:

- \(A_x\) is the x-component
- \(A_y\) is the y-component
- \(A_x\hat{i}\) is the vector component along x
- \(A_y\hat{j}\) is the vector component along y

Important:

\(A_x\) and \(A_y\) are scalars. The vector components are \(A_x\hat{i}\) and \(A_y\hat{j}\).

## 14. Components From Magnitude And Angle

If \(\vec{A}\) has magnitude \(A\) and makes angle \(\theta\) with the positive x-axis, then:

$$
A_x=A\cos\theta
$$

$$
A_y=A\sin\theta
$$

The signs of components depend on the quadrant.

## 15. Magnitude And Direction From Components

If \(A_x\) and \(A_y\) are known, then:

$$
A=\sqrt{A_x^2+A_y^2}
$$

and:

$$
\tan\theta=\frac{A_y}{A_x}
$$

So:

$$
\theta=\tan^{-1}\left(\frac{A_y}{A_x}\right)
$$

You must still check the quadrant from the signs of \(A_x\) and \(A_y\).

## 16. Vector Addition By Components

Let:

$$
\vec{A}=A_x\hat{i}+A_y\hat{j}
$$

and:

$$
\vec{B}=B_x\hat{i}+B_y\hat{j}
$$

Then:

$$
\vec{R}=\vec{A}+\vec{B}
$$

is:

$$
\vec{R}=(A_x+B_x)\hat{i}+(A_y+B_y)\hat{j}
$$

Thus:

$$
R_x=A_x+B_x
$$

$$
R_y=A_y+B_y
$$

In three dimensions:

$$
R_x=A_x+B_x,\quad R_y=A_y+B_y,\quad R_z=A_z+B_z
$$

## 17. Resultant Of Two Vectors With Angle Between Them

If two vectors \(\vec{A}\) and \(\vec{B}\) make angle \(\theta\), the magnitude of the resultant is:

$$
R=\sqrt{A^2+B^2+2AB\cos\theta}
$$

The direction \(\alpha\) of \(\vec{R}\) measured from \(\vec{A}\) is:

$$
\tan\alpha=\frac{B\sin\theta}{A+B\cos\theta}
$$

Special cases:

If \(\theta=0\):

$$
R=A+B
$$

If \(\theta=180^\circ\):

$$
R=|A-B|
$$

If \(\theta=90^\circ\):

$$
R=\sqrt{A^2+B^2}
$$

## 18. Worked Example: Rain And Wind

Rain falls vertically downward with speed:

$$
35\ \text{m s}^{-1}
$$

Wind blows from east to west with speed:

$$
12\ \text{m s}^{-1}
$$

The resultant velocity of rain relative to the ground has magnitude:

$$
R=\sqrt{35^2+12^2}
$$

$$
R=\sqrt{1225+144}=\sqrt{1369}=37\ \text{m s}^{-1}
$$

Let \(\theta\) be the angle with the vertical:

$$
\tan\theta=\frac{12}{35}
$$

$$
\theta\approx19^\circ
$$

The boy should hold the umbrella tilted into the direction from which the rain appears to come, at about 19 deg with the vertical.

## 19. Worked Example: Motorboat And Current

A motorboat moves north with speed:

$$
25\ \text{km h}^{-1}
$$

Water current has speed:

$$
10\ \text{km h}^{-1}
$$

in a direction 60 deg east of south.

The angle between the boat velocity and current velocity is:

$$
120^\circ
$$

Using the cosine rule:

$$
R^2=25^2+10^2+2(25)(10)\cos120^\circ
$$

Since:

$$
\cos120^\circ=-\frac{1}{2}
$$

we get:

$$
R^2=625+100-250=475
$$

So:

$$
R=\sqrt{475}\approx21.8\ \text{km h}^{-1}
$$

The direction can be found using sine rule or components.

## 20. Motion In A Plane

For motion in a plane, position is written as:

$$
\vec{r}=x\hat{i}+y\hat{j}
$$

Both \(x\) and \(y\) may change with time.

So:

$$
\vec{r}(t)=x(t)\hat{i}+y(t)\hat{j}
$$

The path of the particle is the curve traced by its position vector.

## 21. Velocity In A Plane

Average velocity is:

$$
\vec{v}_{\text{avg}}=\frac{\Delta\vec{r}}{\Delta t}
$$

Instantaneous velocity is:

$$
\vec{v}=\frac{d\vec{r}}{dt}
$$

Since:

$$
\vec{r}=x\hat{i}+y\hat{j}
$$

we get:

$$
\vec{v}=\frac{dx}{dt}\hat{i}+\frac{dy}{dt}\hat{j}
$$

So:

$$
\vec{v}=v_x\hat{i}+v_y\hat{j}
$$

where:

$$
v_x=\frac{dx}{dt},\quad v_y=\frac{dy}{dt}
$$

The magnitude of velocity is:

$$
v=\sqrt{v_x^2+v_y^2}
$$

and:

$$
\tan\theta=\frac{v_y}{v_x}
$$

The instantaneous velocity vector is tangent to the path.

## 22. Acceleration In A Plane

Average acceleration is:

$$
\vec{a}_{\text{avg}}=\frac{\Delta\vec{v}}{\Delta t}
$$

Instantaneous acceleration is:

$$
\vec{a}=\frac{d\vec{v}}{dt}
$$

Since:

$$
\vec{v}=v_x\hat{i}+v_y\hat{j}
$$

we get:

$$
\vec{a}=\frac{dv_x}{dt}\hat{i}+\frac{dv_y}{dt}\hat{j}
$$

So:

$$
\vec{a}=a_x\hat{i}+a_y\hat{j}
$$

where:

$$
a_x=\frac{dv_x}{dt},\quad a_y=\frac{dv_y}{dt}
$$

The magnitude of acceleration is:

$$
a=\sqrt{a_x^2+a_y^2}
$$

## 23. Worked Example: Position Vector Function

Suppose the position of a particle is:

$$
\vec{r}(t)=3.0t\hat{i}+2.0t^2\hat{j}+5.0\hat{k}
$$

where \(t\) is in seconds and \(\vec{r}\) is in metres.

Velocity:

$$
\vec{v}(t)=\frac{d\vec{r}}{dt}
$$

$$
\vec{v}(t)=3.0\hat{i}+4.0t\hat{j}
$$

Acceleration:

$$
\vec{a}(t)=\frac{d\vec{v}}{dt}
$$

$$
\vec{a}(t)=4.0\hat{j}
$$

At:

$$
t=1.0\ \text{s}
$$

velocity is:

$$
\vec{v}=3.0\hat{i}+4.0\hat{j}
$$

Magnitude:

$$
v=\sqrt{3^2+4^2}=5.0\ \text{m s}^{-1}
$$

Direction:

$$
\theta=\tan^{-1}\left(\frac{4}{3}\right)\approx53^\circ
$$

above the positive x-axis.

## 24. Constant Acceleration In A Plane

If acceleration is constant:

$$
\vec{a}=a_x\hat{i}+a_y\hat{j}
$$

then velocity is:

$$
\vec{v}=\vec{v}_0+\vec{a}t
$$

In components:

$$
v_x=v_{0x}+a_xt
$$

$$
v_y=v_{0y}+a_yt
$$

Position is:

$$
\vec{r}=\vec{r}_0+\vec{v}_0t+\frac{1}{2}\vec{a}t^2
$$

In components:

$$
x=x_0+v_{0x}t+\frac{1}{2}a_xt^2
$$

$$
y=y_0+v_{0y}t+\frac{1}{2}a_yt^2
$$

This means motion in a plane can be treated as two simultaneous one-dimensional motions.

## 25. Worked Example: Constant Acceleration In x-y Plane

A particle starts from the origin with velocity:

$$
\vec{v}_0=5.0\hat{i}\ \text{m s}^{-1}
$$

and acceleration:

$$
\vec{a}=3.0\hat{i}+2.0\hat{j}\ \text{m s}^{-2}
$$

Find the y-coordinate when the x-coordinate is 84 m, and find the speed then.

Since:

$$
\vec{r}_0=0
$$

position is:

$$
\vec{r}=\vec{v}_0t+\frac{1}{2}\vec{a}t^2
$$

So:

$$
\vec{r}=5.0t\hat{i}+\frac{1}{2}(3.0\hat{i}+2.0\hat{j})t^2
$$

Therefore:

$$
x=5.0t+1.5t^2
$$

and:

$$
y=1.0t^2
$$

Given:

$$
x=84
$$

so:

$$
5.0t+1.5t^2=84
$$

This gives:

$$
t=6\ \text{s}
$$

Then:

$$
y=(6)^2=36\ \text{m}
$$

Velocity:

$$
\vec{v}=\vec{v}_0+\vec{a}t
$$

At \(t=6\):

$$
\vec{v}=5.0\hat{i}+(3.0\hat{i}+2.0\hat{j})6
$$

$$
\vec{v}=23.0\hat{i}+12.0\hat{j}
$$

Speed:

$$
v=\sqrt{23^2+12^2}
$$

$$
v=\sqrt{673}\approx26\ \text{m s}^{-1}
$$

## 26. lower-case projectile Motion

A projectile is an object thrown into the air and then allowed to move under gravity.

Examples:

- a cricket ball after it leaves the hand
- a stone thrown from a cliff
- a football after being kicked

In the ideal model:

- air resistance is neglected
- gravity acts downward
- horizontal acceleration is zero
- vertical acceleration is \(-g\) if upward is positive

## 27. Components Of Initial Velocity

Suppose a projectile is launched with speed \(v_0\) at angle \(\theta_0\) above the horizontal.

Initial velocity components are:

$$
v_{0x}=v_0\cos\theta_0
$$

$$
v_{0y}=v_0\sin\theta_0
$$

Acceleration components are:

$$
a_x=0
$$

$$
a_y=-g
$$

## 28. Position And Velocity In lower-case projectile Motion

Assume launch point is origin.

Horizontal position:

$$
x=(v_0\cos\theta_0)t
$$

Vertical position:

$$
y=(v_0\sin\theta_0)t-\frac{1}{2}gt^2
$$

Horizontal velocity:

$$
v_x=v_0\cos\theta_0
$$

Vertical velocity:

$$
v_y=v_0\sin\theta_0-gt
$$

At the highest point:

$$
v_y=0
$$

but \(v_x\) is still unchanged.

## 29. Path Of A Thrown Body

Eliminate \(t\) from:

$$
x=(v_0\cos\theta_0)t
$$

So:

$$
t=\frac{x}{v_0\cos\theta_0}
$$

Substitute into:

$$
y=(v_0\sin\theta_0)t-\frac{1}{2}gt^2
$$

Then:

$$
y=x\tan\theta_0-\frac{g x^2}{2v_0^2\cos^2\theta_0}
$$

This has the form:

$$
y=ax-bx^2
$$

So the path is a parabola.

## 30. Time Of Flight, Maximum Height, And Range

### 30.1 Time To Reach Maximum Height

At maximum height:

$$
v_y=0
$$

So:

$$
0=v_0\sin\theta_0-gt_m
$$

Therefore:

$$
t_m=\frac{v_0\sin\theta_0}{g}
$$

### 30.2 Time Of Flight

For return to the same vertical level:

$$
T_f=2t_m
$$

Thus:

$$
T_f=\frac{2v_0\sin\theta_0}{g}
$$

### 30.3 Maximum Height

$$
h_m=\frac{v_0^2\sin^2\theta_0}{2g}
$$

### 30.4 Horizontal Range

Range is horizontal distance covered before returning to the same vertical level.

$$
R=v_{0x}T_f
$$

$$
R=(v_0\cos\theta_0)\left(\frac{2v_0\sin\theta_0}{g}\right)
$$

So:

$$
R=\frac{v_0^2\sin2\theta_0}{g}
$$

Maximum range occurs when:

$$
\sin2\theta_0=1
$$

so:

$$
2\theta_0=90^\circ
$$

and:

$$
\theta_0=45^\circ
$$

Maximum range:

$$
R_{\text{max}}=\frac{v_0^2}{g}
$$

## 31. Complementary Angles For Equal Range

For a fixed launch speed:

$$
R=\frac{v_0^2\sin2\theta}{g}
$$

Angles:

$$
45^\circ+\alpha
$$

and:

$$
45^\circ-\alpha
$$

give:

$$
2\theta=90^\circ+2\alpha
$$

and:

$$
2\theta=90^\circ-2\alpha
$$

Since:

$$
\sin(90^\circ+2\alpha)=\sin(90^\circ-2\alpha)
$$

the ranges are equal.

## 32. Worked Example: Horizontal Throw From A Cliff

A hiker throws a stone horizontally from a cliff 490 m high with speed:

$$
15\ \text{m s}^{-1}
$$

Take:

$$
g=9.8\ \text{m s}^{-2}
$$

Choose upward as positive. Then:

$$
y=-490\ \text{m}
$$

and:

$$
v_{0y}=0
$$

Vertical motion:

$$
y=v_{0y}t-\frac{1}{2}gt^2
$$

$$
-490=-\frac{1}{2}(9.8)t^2
$$

$$
490=4.9t^2
$$

$$
t^2=100
$$

$$
t=10\ \text{s}
$$

Horizontal velocity remains:

$$
v_x=15\ \text{m s}^{-1}
$$

Vertical velocity on impact:

$$
v_y=-gt=-9.8(10)=-98\ \text{m s}^{-1}
$$

Speed on impact:

$$
v=\sqrt{15^2+98^2}
$$

$$
v\approx99\ \text{m s}^{-1}
$$

## 33. Worked Example: Cricket Ball

A cricket ball is thrown with speed:

$$
v_0=28\ \text{m s}^{-1}
$$

at angle:

$$
\theta_0=30^\circ
$$

above horizontal.

Take:

$$
g=9.8\ \text{m s}^{-2}
$$

### 33.1 Maximum Height

$$
h_m=\frac{v_0^2\sin^2\theta_0}{2g}
$$

Since:

$$
\sin30^\circ=\frac{1}{2}
$$

we get:

$$
h_m=\frac{(28)^2(1/2)^2}{2(9.8)}
$$

$$
h_m=\frac{784/4}{19.6}
$$

$$
h_m=10.0\ \text{m}
$$

### 33.2 Time Of Flight

$$
T_f=\frac{2v_0\sin\theta_0}{g}
$$

$$
T_f=\frac{2(28)(1/2)}{9.8}
$$

$$
T_f=\frac{28}{9.8}\approx2.9\ \text{s}
$$

### 33.3 Range

$$
R=\frac{v_0^2\sin2\theta_0}{g}
$$

Here:

$$
2\theta_0=60^\circ
$$

So:

$$
R=\frac{(28)^2\sin60^\circ}{9.8}
$$

$$
R\approx69\ \text{m}
$$

## 34. Uniform Circular Motion

Uniform circular motion is motion along a circular path with constant speed.

Even though speed is constant, velocity is not constant because direction changes continuously.

Therefore, the object has acceleration.

This acceleration is directed toward the centre of the circle and is called centripetal acceleration.

## 35. Centripetal Acceleration

If an object moves with speed \(v\) in a circle of radius \(R\), centripetal acceleration is:

$$
a_c=\frac{v^2}{R}
$$

Direction:

- always toward the centre
- always perpendicular to instantaneous velocity

Since the direction changes continuously, centripetal acceleration is not a constant vector even if its magnitude is constant.

## 36. Angular Speed

Angular speed is rate of change of angular displacement.

$$
\omega=\frac{\Delta\theta}{\Delta t}
$$

If the particle travels arc length \(\Delta s\), then:

$$
\Delta s=R\Delta\theta
$$

So:

$$
v=R\omega
$$

Therefore:

$$
a_c=\frac{v^2}{R}
$$

becomes:

$$
a_c=R\omega^2
$$

## 37. Period And Frequency

Time period \(T\) is time for one complete revolution.

Frequency \(\nu\) is number of revolutions per second.

$$
\nu=\frac{1}{T}
$$

In one revolution, distance covered is:

$$
2\pi R
$$

So:

$$
v=\frac{2\pi R}{T}
$$

and:

$$
v=2\pi R\nu
$$

Angular speed:

$$
\omega=2\pi\nu
$$

Centripetal acceleration:

$$
a_c=4\pi^2\nu^2R
$$

## 38. Worked Example: Insect In Circular Groove

An insect moves in a circular groove of radius:

$$
R=12\ \text{cm}
$$

It completes 7 revolutions in 100 s.

Frequency:

$$
\nu=\frac{7}{100}=0.07\ \text{s}^{-1}
$$

Angular speed:

$$
\omega=2\pi\nu
$$

$$
\omega=2\pi(0.07)\approx0.44\ \text{rad s}^{-1}
$$

Linear speed:

$$
v=\omega R
$$

$$
v=(0.44)(12)=5.3\ \text{cm s}^{-1}
$$

Centripetal acceleration:

$$
a_c=\omega^2R
$$

$$
a_c=(0.44)^2(12)
$$

$$
a_c\approx2.3\ \text{cm s}^{-2}
$$

The acceleration vector is not constant because its direction keeps changing.

## 39. Important Comparisons

### 39.1 Displacement And Path Length

Displacement depends only on endpoints.

Path length depends on the actual path.

Always:

$$
\text{path length}\ge|\Delta\vec{r}|
$$

### 39.2 Average Speed And Average Velocity

Average speed:

$$
\frac{\text{path length}}{\Delta t}
$$

Magnitude of average velocity:

$$
\left|\frac{\Delta\vec{r}}{\Delta t}\right|
$$

Always:

$$
\text{average speed}\ge|\vec{v}_{\text{avg}}|
$$

### 39.3 Resultant Velocity And Relative Velocity

Resultant velocity:

$$
\vec{v}=\vec{v}_1+\vec{v}_2
$$

Relative velocity:

$$
\vec{v}_{12}=\vec{v}_1-\vec{v}_2
$$

Do not confuse addition of velocities with relative velocity.

## 40. Common Mistakes

### 40.1 Calling Every Quantity With Direction A Vector

A vector must obey vector addition.

### 40.2 Treating Components As Vectors

\(A_x\) is a scalar component.

\(A_x\hat{i}\) is a vector component.

### 40.3 Forgetting Signs Of Components

Components may be positive, negative, or zero depending on direction.

### 40.4 Applying Constant-Acceleration Equations To Circular Motion

Uniform circular motion has constant acceleration magnitude but changing acceleration direction.

The usual constant-vector acceleration equations do not apply to complete circular motion.

### 40.5 Saying Centripetal Acceleration Is Constant

Its magnitude may be constant, but its direction changes.

So the vector is not constant.

### 40.6 Forgetting That Horizontal And Vertical Motions Are Independent

In ideal projectile motion:

- horizontal velocity remains constant
- vertical velocity changes due to gravity

## 41. Formula Sheet

### 41.1 Vector Components

$$
\vec{A}=A_x\hat{i}+A_y\hat{j}
$$

$$
A_x=A\cos\theta
$$

$$
A_y=A\sin\theta
$$

$$
A=\sqrt{A_x^2+A_y^2}
$$

$$
\tan\theta=\frac{A_y}{A_x}
$$

### 41.2 Vector Addition

$$
R_x=A_x+B_x
$$

$$
R_y=A_y+B_y
$$

$$
R=\sqrt{R_x^2+R_y^2}
$$

### 41.3 Resultant Of Two Vectors

$$
R=\sqrt{A^2+B^2+2AB\cos\theta}
$$

$$
\tan\alpha=\frac{B\sin\theta}{A+B\cos\theta}
$$

### 41.4 Position, Velocity, Acceleration

$$
\vec{r}=x\hat{i}+y\hat{j}
$$

$$
\vec{v}=\frac{d\vec{r}}{dt}
$$

$$
\vec{a}=\frac{d\vec{v}}{dt}
$$

### 41.5 Constant Acceleration In A Plane

$$
\vec{v}=\vec{v}_0+\vec{a}t
$$

$$
\vec{r}=\vec{r}_0+\vec{v}_0t+\frac{1}{2}\vec{a}t^2
$$

Component form:

$$
v_x=v_{0x}+a_xt
$$

$$
v_y=v_{0y}+a_yt
$$

$$
x=x_0+v_{0x}t+\frac{1}{2}a_xt^2
$$

$$
y=y_0+v_{0y}t+\frac{1}{2}a_yt^2
$$

### 41.6 lower-case projectile Motion

$$
v_{0x}=v_0\cos\theta_0
$$

$$
v_{0y}=v_0\sin\theta_0
$$

$$
x=(v_0\cos\theta_0)t
$$

$$
y=(v_0\sin\theta_0)t-\frac{1}{2}gt^2
$$

$$
v_x=v_0\cos\theta_0
$$

$$
v_y=v_0\sin\theta_0-gt
$$

$$
y=x\tan\theta_0-\frac{g x^2}{2v_0^2\cos^2\theta_0}
$$

$$
t_m=\frac{v_0\sin\theta_0}{g}
$$

$$
T_f=\frac{2v_0\sin\theta_0}{g}
$$

$$
h_m=\frac{v_0^2\sin^2\theta_0}{2g}
$$

$$
R=\frac{v_0^2\sin2\theta_0}{g}
$$

### 41.7 Uniform Circular Motion

$$
v=R\omega
$$

$$
a_c=\frac{v^2}{R}
$$

$$
a_c=R\omega^2
$$

$$
\omega=2\pi\nu
$$

$$
v=2\pi R\nu
$$

$$
a_c=4\pi^2\nu^2R
$$

## 42. Practice Set A: Scalars And Vectors

Classify each as scalar or vector:

| Quantity | Type |
|---|---|
| volume | scalar |
| mass | scalar |
| speed | scalar |
| acceleration | vector |
| density | scalar |
| velocity | vector |
| displacement | vector |
| angular frequency | scalar |

## 43. Practice Set B: Components

A vector has magnitude 10 and makes angle 30 deg with the x-axis.

Find components.

$$
A_x=10\cos30^\circ=10\left(\frac{\sqrt{3}}{2}\right)=5\sqrt{3}
$$

$$
A_y=10\sin30^\circ=10\left(\frac{1}{2}\right)=5
$$

So:

$$
\vec{A}=5\sqrt{3}\hat{i}+5\hat{j}
$$

## 44. Practice Set C: Vector Addition

Let:

$$
\vec{A}=3\hat{i}+4\hat{j}
$$

and:

$$
\vec{B}=2\hat{i}-5\hat{j}
$$

Then:

$$
\vec{A}+\vec{B}=(3+2)\hat{i}+(4-5)\hat{j}
$$

$$
\vec{A}+\vec{B}=5\hat{i}-\hat{j}
$$

Magnitude:

$$
R=\sqrt{5^2+(-1)^2}=\sqrt{26}
$$

## 45. Practice Set D: Circular Motion

A stone moves in a circle of radius 0.80 m and makes 14 revolutions in 25 s.

Frequency:

$$
\nu=\frac{14}{25}=0.56\ \text{s}^{-1}
$$

Angular speed:

$$
\omega=2\pi\nu=2\pi(0.56)
$$

Centripetal acceleration:

$$
a_c=4\pi^2\nu^2R
$$

$$
a_c=4\pi^2(0.56)^2(0.80)
$$

$$
a_c\approx9.9\ \text{m s}^{-2}
$$

Direction is toward the centre of the circle.

## 46. Learner Checklist

Before leaving this chapter, make sure you can:

- define scalar and vector
- explain why displacement is a vector
- draw vector addition by head-to-tail method
- subtract vectors by adding the negative
- resolve a vector into x and y components
- find magnitude and direction from components
- add vectors component-wise
- write position, velocity, and acceleration in unit vector form
- solve constant-acceleration motion in a plane
- split projectile motion into horizontal and vertical parts
- derive and use time of flight, height, and range formulae
- calculate centripetal acceleration
- explain why uniform circular motion is accelerated motion

## 47. One Page Revision

Scalar:

- magnitude only

Vector:

- magnitude and direction
- obeys vector addition

Vector components:

$$
\vec{A}=A_x\hat{i}+A_y\hat{j}
$$

$$
A_x=A\cos\theta,\quad A_y=A\sin\theta
$$

$$
A=\sqrt{A_x^2+A_y^2}
$$

Vector addition:

$$
R_x=A_x+B_x,\quad R_y=A_y+B_y
$$

Motion in plane:

$$
\vec{r}=x\hat{i}+y\hat{j}
$$

$$
\vec{v}=\frac{d\vec{r}}{dt}
$$

$$
\vec{a}=\frac{d\vec{v}}{dt}
$$

Constant acceleration:

$$
\vec{v}=\vec{v}_0+\vec{a}t
$$

$$
\vec{r}=\vec{r}_0+\vec{v}_0t+\frac{1}{2}\vec{a}t^2
$$

lower-case projectile motion:

$$
x=(v_0\cos\theta_0)t
$$

$$
y=(v_0\sin\theta_0)t-\frac{1}{2}gt^2
$$

Range:

$$
R=\frac{v_0^2\sin2\theta_0}{g}
$$

Uniform circular motion:

$$
a_c=\frac{v^2}{R}=R\omega^2
$$
