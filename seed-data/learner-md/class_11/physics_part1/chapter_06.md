# Chapter 6 - System Of Particles And Rotational Motion

## 1. Chapter Purpose

Earlier mechanics chapters treated many bodies as particles.

That was useful because a particle has no size, no shape, and no internal rotation. Its motion is described completely by the motion of one point.

Real bodies are extended. A fan blade, wheel, door, cricket bat, rod, pulley, ladder, disc, and planet cannot always be treated as particles. Different parts of the same body may have different velocities at the same instant.

This chapter builds the bridge from particle mechanics to rigid-body mechanics.

By the end of this chapter, you should be able to:

- locate the centre of mass of simple systems
- explain why the centre of mass follows Newton's second law
- use conservation of linear momentum for a system of particles
- calculate vector products
- connect angular velocity with linear velocity
- calculate torque and angular momentum
- apply the rotational form of Newton's second law
- use the conditions of equilibrium of a rigid body
- understand couple, moment, and centre of gravity
- calculate and compare moment of inertia
- apply parallel-axis and perpendicular-axis theorems
- use rotational kinematic equations
- relate work, power, kinetic energy, torque, and angular acceleration
- use conservation of angular momentum in simple situations

The chapter has one central idea:

Motion of an extended body is easier when it is separated into two parts:

- translation of the centre of mass
- rotation about the centre of mass or about a fixed axis

## 2. Particle Model And Extended Body Model

A particle model is useful when the size of a body is not important for the question being asked.

For example, while studying the motion of a ball thrown across a field, we may treat the ball as a particle if we only need the path of its centre.

But the same ball cannot be treated as a particle if we study:

- spinning of the ball
- rolling without slipping
- distribution of mass inside the ball
- rotational kinetic energy
- torque acting on the ball

An extended body has size and shape. Different points of the body can have different velocities and accelerations.

A rigid body is an ideal extended body whose shape and size do not change during motion.

In a perfectly rigid body, the distance between every pair of particles remains constant.

Real bodies deform slightly under forces. But if the deformation is negligible for the problem, we treat the body as rigid.

## 3. Types Of Motion Of A Rigid Body

Rigid-body motion can be understood through three common cases.

### 3.1 Pure Translation

In pure translation, every point of the body has the same velocity at a given instant.

The body may move in a straight line or along a curved path, but it does not rotate.

Examples:

- a block sliding on a smooth table without turning
- an elevator moving vertically
- a train compartment moving along a straight track, approximately

In pure translation:

- all particles have equal displacement in the same time interval
- all particles have equal velocity
- all particles have equal acceleration
- the body's orientation does not change

### 3.2 Pure Rotation About A Fixed Axis

In pure rotation about a fixed axis, every particle of the body moves in a circle whose centre lies on the axis of rotation.

Examples:

- a ceiling fan rotating about its shaft
- a door rotating about its hinge line
- a wheel rotating about a fixed axle
- a disc spinning about its centre

In fixed-axis rotation:

- points on the axis are at rest
- points farther from the axis move faster
- all particles have the same angular velocity
- linear speed depends on distance from the axis

If the angular velocity is \(\omega\), and a particle is at perpendicular distance \(r_\perp\) from the axis, then its speed is:

$$
v=\omega r_\perp
$$

### 3.3 Rolling Motion

Rolling motion is a combination of translation and rotation.

A wheel rolling on a road translates because its centre moves forward.

The same wheel rotates because different points of the wheel move around the centre.

Rolling without slipping has a special relation:

$$
v_{cm}=R\omega
$$

where:

- \(v_{cm}\) is the speed of the centre of mass
- \(R\) is the radius of the wheel
- \(\omega\) is the angular speed

This chapter mainly develops fixed-axis rotation and the centre of mass of systems.

## 4. Centre Of Mass

The centre of mass of a body or system is the mass-weighted average position of all its particles.

It is the point whose motion represents the translational motion of the whole system.

For a system of particles, centre of mass is not necessarily a physical particle. It may lie:

- inside the body
- outside the body
- in empty space between parts of the body

Examples:

- centre of mass of a uniform ring is at its geometrical centre, although no material exists there
- centre of mass of a uniform rod is at its midpoint
- centre of mass of a uniform sphere is at its centre

## 5. Centre Of Mass Of Two Particles On A Line

Consider two particles of masses \(m_1\) and \(m_2\) placed on the x-axis at positions \(x_1\) and \(x_2\).

The x-coordinate of their centre of mass is:

$$
X=\frac{m_1x_1+m_2x_2}{m_1+m_2}
$$

This formula shows that the centre of mass is closer to the heavier particle.

If \(m_1=m_2\), then:

$$
X=\frac{x_1+x_2}{2}
$$

So for equal masses, the centre of mass is exactly midway between them.

### 5.1 Important Features

The formula is a weighted average.

Mass works as the weight in the average.

The heavier mass pulls the centre of mass closer to itself.

The centre of mass always lies between two particles if both particles are on a straight line and masses are positive.

### 5.2 Simple Example

Two particles of masses \(2\text{ kg}\) and \(6\text{ kg}\) are at \(x=0\text{ m}\) and \(x=4\text{ m}\).

Then:

$$
X=\frac{(2)(0)+(6)(4)}{2+6}
$$

$$
X=\frac{24}{8}=3\text{ m}
$$

The centre of mass is at \(x=3\text{ m}\), closer to the \(6\text{ kg}\) particle.

## 6. Centre Of Mass Of Many Particles

For \(n\) particles on a line, the x-coordinate of centre of mass is:

$$
X=\frac{m_1x_1+m_2x_2+\cdots+m_nx_n}{m_1+m_2+\cdots+m_n}
$$

Using summation notation:

$$
X=\frac{\sum_{i=1}^{n}m_ix_i}{\sum_{i=1}^{n}m_i}
$$

Let total mass be:

$$
M=\sum_{i=1}^{n}m_i
$$

Then:

$$
X=\frac{1}{M}\sum_{i=1}^{n}m_ix_i
$$

For particles in three-dimensional space:

$$
X=\frac{1}{M}\sum_{i=1}^{n}m_ix_i
$$

$$
Y=\frac{1}{M}\sum_{i=1}^{n}m_iy_i
$$

$$
Z=\frac{1}{M}\sum_{i=1}^{n}m_iz_i
$$

The vector form is:

$$
\vec{R}=\frac{1}{M}\sum_{i=1}^{n}m_i\vec{r}_i
$$

where:

- \(\vec{R}\) is the position vector of the centre of mass
- \(\vec{r}_i\) is the position vector of the \(i\)th particle
- \(M\) is the total mass

## 7. Centre Of Mass Of Continuous Bodies

For a continuous body, mass is not concentrated at separate points.

We imagine the body divided into many small elements of mass \(dm\).

The centre of mass is then written using integrals:

$$
\vec{R}=\frac{1}{M}\int \vec{r}\,dm
$$

In component form:

$$
X=\frac{1}{M}\int x\,dm
$$

$$
Y=\frac{1}{M}\int y\,dm
$$

$$
Z=\frac{1}{M}\int z\,dm
$$

For a uniform body, mass is proportional to length, area, or volume.

This often allows symmetry to locate the centre of mass without integration.

## 8. Symmetry Rules For Centre Of Mass

Symmetry is the fastest way to locate the centre of mass of uniform bodies.

### 8.1 Uniform Rod

For a uniform rod, the centre of mass lies at the midpoint.

If the rod has length \(L\), and one end is at \(x=0\), then:

$$
X=\frac{L}{2}
$$

### 8.2 Uniform Circular Ring

For a uniform circular ring, the centre of mass is at the centre of the circle.

The centre of mass is not on the material itself. It lies in the empty region inside the ring.

### 8.3 Uniform Disc

For a uniform disc, the centre of mass is at the geometrical centre.

### 8.4 Uniform Sphere

For a uniform sphere, the centre of mass is at the centre of the sphere.

### 8.5 Uniform Rectangular Lamina

For a uniform rectangular lamina, the centre of mass is at the intersection of its diagonals.

### 8.6 Uniform Triangular Lamina

For a uniform triangular lamina, the centre of mass is at the centroid.

The centroid is the common point of the medians.

A median joins a vertex to the midpoint of the opposite side.

The centroid divides each median in the ratio \(2:1\), measured from the vertex.

## 9. Worked Example: Three Particles At A Triangle

Three particles are placed at the vertices of an equilateral triangle of side \(0.5\text{ m}\).

Let the vertices be:

- \(O=(0,0)\)
- \(A=(0.5,0)\)
- \(B=(0.25,0.25\sqrt{3})\)

Let masses be:

- \(100\text{ g}\) at \(O\)
- \(150\text{ g}\) at \(A\)
- \(200\text{ g}\) at \(B\)

Total mass:

$$
M=100+150+200=450\text{ g}
$$

The x-coordinate of centre of mass is:

$$
X=\frac{(100)(0)+(150)(0.5)+(200)(0.25)}{450}
$$

$$
X=\frac{75+50}{450}
$$

$$
X=\frac{125}{450}=\frac{5}{18}\text{ m}
$$

The y-coordinate is:

$$
Y=\frac{(100)(0)+(150)(0)+(200)(0.25\sqrt{3})}{450}
$$

$$
Y=\frac{50\sqrt{3}}{450}
$$

$$
Y=\frac{\sqrt{3}}{9}\text{ m}
$$

So the centre of mass is:

$$
\left(\frac{5}{18},\frac{\sqrt{3}}{9}\right)
$$

Notice how the point shifts toward the vertex carrying the largest mass.

## 10. Worked Example: L-Shaped Lamina

Consider an L-shaped lamina made by joining three identical square plates.

Each square has side \(1\text{ m}\) and mass \(1\text{ kg}\).

Place the shape so the square centres are:

- \((0.5,0.5)\)
- \((1.5,0.5)\)
- \((0.5,1.5)\)

Because all three squares have equal mass, the centre of mass of the whole lamina is the average of these three centre positions.

The x-coordinate is:

$$
X=\frac{0.5+1.5+0.5}{3}
$$

$$
X=\frac{2.5}{3}=\frac{5}{6}\text{ m}
$$

The y-coordinate is:

$$
Y=\frac{0.5+0.5+1.5}{3}
$$

$$
Y=\frac{2.5}{3}=\frac{5}{6}\text{ m}
$$

Therefore:

$$
(X,Y)=\left(\frac{5}{6},\frac{5}{6}\right)
$$

This method works because each square can be replaced by its own centre of mass carrying the mass of that square.

## 11. Motion Of Centre Of Mass

For a system of particles:

$$
M\vec{R}=\sum_{i=1}^{n}m_i\vec{r}_i
$$

Differentiate with respect to time:

$$
M\vec{V}=\sum_{i=1}^{n}m_i\vec{v}_i
$$

where \(\vec{V}\) is the velocity of the centre of mass.

Differentiate again:

$$
M\vec{A}=\sum_{i=1}^{n}m_i\vec{a}_i
$$

where \(\vec{A}\) is the acceleration of the centre of mass.

For each particle:

$$
m_i\vec{a}_i=\vec{F}_i
$$

Adding all force equations:

$$
M\vec{A}=\sum \vec{F}_i
$$

Forces on particles may be internal or external.

Internal forces occur between particles of the system.

External forces are exerted by bodies outside the system.

By Newton's third law, internal forces cancel in pairs when summed over the whole system.

Therefore:

$$
M\vec{A}=\vec{F}_{ext}
$$

This is the equation of motion of the centre of mass.

## 12. Meaning Of The Centre Of Mass Equation

The equation:

$$
M\vec{A}=\vec{F}_{ext}
$$

means:

The centre of mass moves as if the entire mass of the system were concentrated at the centre of mass and all external force acted there.

This does not mean all particles actually move with the centre of mass.

It only says the average translational motion of the system follows Newton's second law.

### 12.1 No External Force

If:

$$
\vec{F}_{ext}=0
$$

then:

$$
\vec{A}=0
$$

So the velocity of the centre of mass remains constant.

### 12.2 Explosion In Midair

Suppose a shell is moving like a thrown body and explodes into fragments in midair.

The explosion forces are internal forces.

If air resistance is neglected, the only external force is gravity.

Therefore, the centre of mass continues along the same parabolic path that the shell would have followed if it had not exploded.

The fragments move in different directions, but their centre of mass follows the original path.

## 13. Linear Momentum Of A System

The total linear momentum of a system is:

$$
\vec{P}=\sum_{i=1}^{n}\vec{p}_i
$$

Since:

$$
\vec{p}_i=m_i\vec{v}_i
$$

we get:

$$
\vec{P}=\sum_{i=1}^{n}m_i\vec{v}_i
$$

But from centre of mass velocity:

$$
M\vec{V}=\sum_{i=1}^{n}m_i\vec{v}_i
$$

Therefore:

$$
\vec{P}=M\vec{V}
$$

The total linear momentum of a system equals total mass multiplied by velocity of the centre of mass.

## 14. Conservation Of Linear Momentum

From the centre of mass equation:

$$
M\vec{A}=\vec{F}_{ext}
$$

Since:

$$
\vec{P}=M\vec{V}
$$

we get:

$$
\frac{d\vec{P}}{dt}=\vec{F}_{ext}
$$

If net external force is zero:

$$
\vec{F}_{ext}=0
$$

then:

$$
\frac{d\vec{P}}{dt}=0
$$

So:

$$
\vec{P}=\text{constant}
$$

This is the law of conservation of linear momentum.

Internal forces may be large, but they cannot change the total momentum of the system.

### 14.1 Example: Person On A Trolley

A child stands on a trolley moving uniformly on a smooth horizontal floor.

If the child runs around on the trolley, the child and trolley exert internal forces on each other.

If horizontal external force is absent, the centre of mass of the child-plus-trolley system keeps moving with constant velocity.

The trolley may speed up or slow down relative to the ground, but the centre of mass of the system does not change its velocity.

### 14.2 Example: Radioactive Decay

In a decay process, a nucleus splits into two fragments.

If the original nucleus is at rest and no external force acts, initial total momentum is zero.

Therefore, final total momentum is also zero.

If one fragment moves in one direction, the other must move in the opposite direction with equal momentum magnitude.

## 15. Vector Product

Rotational motion uses a second type of vector multiplication called the vector product or cross product.

For two vectors \(\vec{a}\) and \(\vec{b}\), their vector product is:

$$
\vec{c}=\vec{a}\times\vec{b}
$$

The magnitude is:

$$
c=ab\sin\theta
$$

where \(\theta\) is the smaller angle between \(\vec{a}\) and \(\vec{b}\).

The direction of \(\vec{a}\times\vec{b}\) is perpendicular to the plane containing \(\vec{a}\) and \(\vec{b}\).

The direction is found by the right-hand rule.

Curl the fingers of the right hand from \(\vec{a}\) toward \(\vec{b}\). The thumb points in the direction of \(\vec{a}\times\vec{b}\).

## 16. Properties Of Cross Product

### 16.1 Not Commutative

Cross product is not commutative.

$$
\vec{a}\times\vec{b}=-(\vec{b}\times\vec{a})
$$

Changing the order reverses the direction.

### 16.2 Zero Product

If the vectors are parallel or anti-parallel, then \(\theta=0\) or \(\theta=180\text{ deg}\).

So:

$$
\sin\theta=0
$$

and:

$$
\vec{a}\times\vec{b}=0
$$

Also:

$$
\vec{a}\times\vec{a}=0
$$

### 16.3 Maximum Product

If the vectors are perpendicular, then \(\theta=90\text{ deg}\).

So:

$$
\sin\theta=1
$$

and:

$$
|\vec{a}\times\vec{b}|=ab
$$

### 16.4 Distributive Law

Cross product distributes over vector addition:

$$
\vec{a}\times(\vec{b}+\vec{c})=\vec{a}\times\vec{b}+\vec{a}\times\vec{c}
$$

### 16.5 Scalar Multiplication

For scalar \(\lambda\):

$$
(\lambda\vec{a})\times\vec{b}=\lambda(\vec{a}\times\vec{b})
$$

and:

$$
\vec{a}\times(\lambda\vec{b})=\lambda(\vec{a}\times\vec{b})
$$

## 17. Unit Vector Cross Products

The standard right-handed unit vectors satisfy:

$$
\hat{i}\times\hat{j}=\hat{k}
$$

$$
\hat{j}\times\hat{k}=\hat{i}
$$

$$
\hat{k}\times\hat{i}=\hat{j}
$$

The reverse products are negative:

$$
\hat{j}\times\hat{i}=-\hat{k}
$$

$$
\hat{k}\times\hat{j}=-\hat{i}
$$

$$
\hat{i}\times\hat{k}=-\hat{j}
$$

Also:

$$
\hat{i}\times\hat{i}=0
$$

$$
\hat{j}\times\hat{j}=0
$$

$$
\hat{k}\times\hat{k}=0
$$

## 18. Component Form Of Cross Product

Let:

$$
\vec{a}=a_x\hat{i}+a_y\hat{j}+a_z\hat{k}
$$

and:

$$
\vec{b}=b_x\hat{i}+b_y\hat{j}+b_z\hat{k}
$$

Then:

$$
\vec{a}\times\vec{b}=(a_yb_z-a_zb_y)\hat{i}+(a_zb_x-a_xb_z)\hat{j}+(a_xb_y-a_yb_x)\hat{k}
$$

This can also be remembered using a determinant:

$$
\vec{a}\times\vec{b}=
\begin{vmatrix}
\hat{i} & \hat{j} & \hat{k}\\
a_x & a_y & a_z\\
b_x & b_y & b_z
\end{vmatrix}
$$

### 18.1 Area Meaning

The magnitude:

$$
|\vec{a}\times\vec{b}|=ab\sin\theta
$$

is the area of the parallelogram formed by \(\vec{a}\) and \(\vec{b}\).

The area of the triangle formed by them is:

$$
A_{triangle}=\frac{1}{2}|\vec{a}\times\vec{b}|
$$

## 19. Angular Velocity

When a body rotates about a fixed axis, its particles move in circles.

The angular position is described by angle \(\theta\).

Angular velocity is the rate of change of angular position:

$$
\omega=\frac{d\theta}{dt}
$$

For finite uniform rotation:

$$
\omega=\frac{\Delta\theta}{\Delta t}
$$

The SI unit of angular velocity is radian per second, written as:

$$
\text{rad s}^{-1}
$$

Angular velocity is a vector.

For fixed-axis rotation, its direction is along the axis of rotation, given by the right-hand rule.

If the fingers of the right hand curl in the direction of rotation, the thumb gives the direction of \(\vec{\omega}\).

## 20. Linear Velocity In Rotation

For a particle at perpendicular distance \(r_\perp\) from the axis:

$$
v=\omega r_\perp
$$

In vector form:

$$
\vec{v}=\vec{\omega}\times\vec{r}
$$

This equation gives both magnitude and direction.

If \(\vec{\omega}\) is along the z-axis and \(\vec{r}\) is in the xy-plane, then \(\vec{v}\) is tangent to the circular path.

### 20.1 Key Point

All particles of a rigid body rotating about a fixed axis have the same angular velocity.

But they do not have the same linear speed.

Particles farther from the axis have greater speed.

## 21. Angular Acceleration

Angular acceleration is the rate of change of angular velocity.

For fixed-axis rotation:

$$
\alpha=\frac{d\omega}{dt}
$$

For a finite interval:

$$
\alpha=\frac{\Delta\omega}{\Delta t}
$$

The SI unit is:

$$
\text{rad s}^{-2}
$$

Angular acceleration is along the axis of rotation if the axis direction is fixed.

If angular speed increases, \(\vec{\alpha}\) is in the same direction as \(\vec{\omega}\).

If angular speed decreases, \(\vec{\alpha}\) is opposite to \(\vec{\omega}\).

Tangential acceleration of a point at distance \(r_\perp\) from the axis is:

$$
a_t=\alpha r_\perp
$$

Centripetal acceleration is:

$$
a_c=\omega^2r_\perp
$$

## 22. Torque

Torque measures the turning effect of a force.

For a force \(\vec{F}\) applied at position vector \(\vec{r}\) from the origin:

$$
\vec{\tau}=\vec{r}\times\vec{F}
$$

The magnitude is:

$$
\tau=rF\sin\theta
$$

where \(\theta\) is the angle between \(\vec{r}\) and \(\vec{F}\).

The direction is given by the right-hand rule.

The SI unit of torque is:

$$
\text{N m}
$$

Torque has the same dimensional formula as work, but torque is a vector and work is a scalar.

### 22.1 Moment Arm

The perpendicular distance from the axis to the line of action of the force is called the moment arm.

If this perpendicular distance is \(r_\perp\), then:

$$
\tau=Fr_\perp
$$

Equivalently, if \(F_\perp\) is the component of force perpendicular to \(\vec{r}\), then:

$$
\tau=rF_\perp
$$

### 22.2 When Torque Is Zero

Torque is zero if:

- force is zero
- point of application is at the axis
- line of action of force passes through the axis
- force is parallel or anti-parallel to \(\vec{r}\)

This is why a door is difficult to open by pushing near the hinge or by pushing along the door instead of perpendicular to it.

## 23. Worked Example: Torque On A Door

A force of \(20\text{ N}\) is applied perpendicular to a door at a distance \(0.75\text{ m}\) from the hinge.

Torque about the hinge is:

$$
\tau=rF
$$

$$
\tau=(0.75)(20)
$$

$$
\tau=15\text{ N m}
$$

If the same force is applied at \(30\text{ deg}\) to the door radius, then:

$$
\tau=rF\sin30\text{ deg}
$$

$$
\tau=(0.75)(20)\left(\frac{1}{2}\right)
$$

$$
\tau=7.5\text{ N m}
$$

The same force produces less turning effect because only the perpendicular component contributes.

## 24. Angular Momentum Of A Particle

For a particle of momentum \(\vec{p}\) at position \(\vec{r}\), angular momentum about the origin is:

$$
\vec{l}=\vec{r}\times\vec{p}
$$

Since:

$$
\vec{p}=m\vec{v}
$$

the magnitude is:

$$
l=rp\sin\theta
$$

where \(\theta\) is the angle between \(\vec{r}\) and \(\vec{p}\).

Angular momentum is perpendicular to the plane containing \(\vec{r}\) and \(\vec{p}\).

The SI unit is:

$$
\text{kg m}^2\text{ s}^{-1}
$$

### 24.1 Component Form

If:

$$
\vec{r}=x\hat{i}+y\hat{j}+z\hat{k}
$$

and:

$$
\vec{p}=p_x\hat{i}+p_y\hat{j}+p_z\hat{k}
$$

then:

$$
\vec{l}=(yp_z-zp_y)\hat{i}+(zp_x-xp_z)\hat{j}+(xp_y-yp_x)\hat{k}
$$

If the particle moves in the xy-plane, then \(z=0\) and \(p_z=0\).

So:

$$
\vec{l}=(xp_y-yp_x)\hat{k}
$$

The angular momentum has only a z-component.

## 25. Relation Between Torque And Angular Momentum

Start with:

$$
\vec{l}=\vec{r}\times\vec{p}
$$

Differentiate:

$$
\frac{d\vec{l}}{dt}=\frac{d\vec{r}}{dt}\times\vec{p}+\vec{r}\times\frac{d\vec{p}}{dt}
$$

Since:

$$
\frac{d\vec{r}}{dt}=\vec{v}
$$

and:

$$
\vec{p}=m\vec{v}
$$

the first term is:

$$
\vec{v}\times m\vec{v}=0
$$

Also:

$$
\frac{d\vec{p}}{dt}=\vec{F}
$$

Therefore:

$$
\frac{d\vec{l}}{dt}=\vec{r}\times\vec{F}
$$

So:

$$
\frac{d\vec{l}}{dt}=\vec{\tau}
$$

Torque is the rate of change of angular momentum.

This is the rotational analogue of:

$$
\frac{d\vec{p}}{dt}=\vec{F}
$$

## 26. Angular Momentum Of A System

For a system of particles, total angular momentum is:

$$
\vec{L}=\sum_{i=1}^{n}\vec{l}_i
$$

For the \(i\)th particle:

$$
\vec{l}_i=\vec{r}_i\times\vec{p}_i
$$

So:

$$
\vec{L}=\sum_{i=1}^{n}\vec{r}_i\times\vec{p}_i
$$

The rate of change is:

$$
\frac{d\vec{L}}{dt}=\vec{\tau}_{ext}
$$

Internal torques cancel if internal forces are central, meaning the force between two particles acts along the line joining them.

This is usually true for ordinary mechanical systems in this chapter.

## 27. Conservation Of Angular Momentum

If the net external torque on a system is zero:

$$
\vec{\tau}_{ext}=0
$$

then:

$$
\frac{d\vec{L}}{dt}=0
$$

Therefore:

$$
\vec{L}=\text{constant}
$$

This is conservation of angular momentum.

It is one of the most powerful principles in rotational motion.

### 27.1 Rotating Chair Example

A student sits on a frictionless rotating chair with arms stretched out.

When the student pulls the arms inward, the moment of inertia decreases.

If external torque is negligible, angular momentum remains constant:

$$
I_1\omega_1=I_2\omega_2
$$

If \(I_2<I_1\), then:

$$
\omega_2>\omega_1
$$

So the student spins faster.

### 27.2 Planetary Motion Idea

A planet moving around the Sun experiences a gravitational force nearly along the line joining the planet and the Sun.

The torque about the Sun is nearly zero.

Therefore, angular momentum about the Sun is conserved.

This is connected to equal areas swept in equal times.

## 28. Equilibrium Of A Rigid Body

A rigid body is in mechanical equilibrium if it has:

- no translational acceleration
- no angular acceleration

Therefore, two conditions must be satisfied.

### 28.1 Translational Equilibrium

The vector sum of all external forces must be zero:

$$
\sum \vec{F}=0
$$

This prevents acceleration of the centre of mass.

In component form:

$$
\sum F_x=0
$$

$$
\sum F_y=0
$$

$$
\sum F_z=0
$$

### 28.2 Rotational Equilibrium

The vector sum of all external torques must be zero:

$$
\sum \vec{\tau}=0
$$

This prevents angular acceleration.

For a coplanar force system, we usually take torques about an axis perpendicular to the plane.

Clockwise torques and anticlockwise torques are assigned opposite signs.

## 29. Principle Of Moments

For a rigid body in equilibrium under coplanar forces:

$$
\sum \tau_{clockwise}=\sum \tau_{anticlockwise}
$$

This is the principle of moments.

It follows from:

$$
\sum \tau=0
$$

### 29.1 Choosing The Torque Point

In equilibrium problems, the point about which torques are taken can be chosen for convenience.

A smart choice often eliminates unknown forces because a force passing through the torque point has zero torque about that point.

For example, in a ladder problem, taking torque about the bottom contact point removes the normal reaction and friction at the bottom from the torque equation.

## 30. Couple

A couple consists of two equal and opposite parallel forces separated by a distance.

The net force of a couple is zero.

But the net torque is not zero.

Therefore, a couple produces pure rotation without translation of the centre of mass.

If each force has magnitude \(F\), and perpendicular separation between their lines of action is \(d\), then torque of the couple is:

$$
\tau=Fd
$$

The torque of a couple is independent of the origin.

Examples:

- turning a steering wheel with two hands
- opening a bottle cap
- rotating a tap handle

## 31. Centre Of Gravity

The centre of gravity is the point through which the resultant gravitational force on a body acts.

If the gravitational field is uniform, the centre of gravity and centre of mass are the same point.

For bodies near Earth's surface and not extremely large, this approximation is excellent.

If the gravitational field changes significantly across the body, centre of gravity may differ from centre of mass.

For Class 11 mechanics near Earth:

$$
\text{centre of gravity}=\text{centre of mass}
$$

### 31.1 Why Weight Can Be Taken At One Point

Every small part of a body has its own weight.

In a uniform gravitational field, these many parallel weights can be replaced by a single resultant weight \(Mg\) acting at the centre of mass.

This simplifies equilibrium problems.

## 32. Moment Of Inertia

Moment of inertia measures resistance to angular acceleration.

For a system of particles rotating about a fixed axis:

$$
I=\sum_{i=1}^{n}m_ir_i^2
$$

where \(r_i\) is the perpendicular distance of the \(i\)th particle from the axis.

Moment of inertia depends on:

- total mass
- how far the mass is from the axis
- chosen axis of rotation
- shape of the body

Mass alone does not determine moment of inertia.

The same mass can have different moment of inertia if distributed differently.

### 32.1 SI Unit

The SI unit of moment of inertia is:

$$
\text{kg m}^2
$$

### 32.2 Physical Meaning

For translation:

$$
F=ma
$$

Mass \(m\) resists linear acceleration.

For rotation:

$$
\tau=I\alpha
$$

Moment of inertia \(I\) resists angular acceleration.

The farther mass is from the axis, the larger \(I\) becomes because distance is squared.

## 33. Rotational Kinetic Energy

For a particle rotating in a circle:

$$
K_i=\frac{1}{2}m_iv_i^2
$$

Since:

$$
v_i=\omega r_i
$$

we get:

$$
K_i=\frac{1}{2}m_i\omega^2r_i^2
$$

For a rigid body, all particles have the same \(\omega\).

So total kinetic energy is:

$$
K=\sum_{i=1}^{n}\frac{1}{2}m_i\omega^2r_i^2
$$

$$
K=\frac{1}{2}\omega^2\sum_{i=1}^{n}m_ir_i^2
$$

Since:

$$
I=\sum_{i=1}^{n}m_ir_i^2
$$

therefore:

$$
K=\frac{1}{2}I\omega^2
$$

This is the rotational analogue of:

$$
K=\frac{1}{2}mv^2
$$

## 34. Radius Of Gyration

Radius of gyration is the distance \(k\) from the axis at which the whole mass may be assumed concentrated without changing the moment of inertia.

It is defined by:

$$
I=Mk^2
$$

Therefore:

$$
k=\sqrt{\frac{I}{M}}
$$

The radius of gyration is not usually a physical radius of the body.

It is an equivalent distance that represents the spread of mass around the axis.

Larger \(k\) means the mass is effectively farther from the axis.

## 35. Standard Moments Of Inertia

These results should be remembered carefully.

| Body | Axis | Moment of inertia |
|---|---|---|
| Thin ring | through centre, perpendicular to plane | \(MR^2\) |
| Thin ring | about a diameter | \(\frac{1}{2}MR^2\) |
| Circular disc | through centre, perpendicular to plane | \(\frac{1}{2}MR^2\) |
| Circular disc | about a diameter | \(\frac{1}{4}MR^2\) |
| Solid cylinder | symmetry axis | \(\frac{1}{2}MR^2\) |
| Hollow cylinder, thin shell | symmetry axis | \(MR^2\) |
| Solid sphere | about a diameter | \(\frac{2}{5}MR^2\) |
| Thin spherical shell | about a diameter | \(\frac{2}{3}MR^2\) |
| Uniform rod | through centre, perpendicular to length | \(\frac{1}{12}ML^2\) |
| Uniform rod | through one end, perpendicular to length | \(\frac{1}{3}ML^2\) |

### 35.1 How To Compare Values

For the same mass and radius:

- a hollow cylinder has larger \(I\) than a solid cylinder
- a thin ring has larger \(I\) than a disc
- a thin spherical shell has larger \(I\) than a solid sphere

Reason:

More mass is farther from the axis.

## 36. Perpendicular-Axis Theorem

The perpendicular-axis theorem applies to a plane lamina.

If \(x\) and \(y\) axes lie in the plane of the lamina and \(z\) axis is perpendicular to the plane, all three axes passing through the same point, then:

$$
I_z=I_x+I_y
$$

This theorem is valid only for plane laminae.

### 36.1 Example: Ring

For a thin ring:

$$
I_z=MR^2
$$

By symmetry:

$$
I_x=I_y
$$

Using perpendicular-axis theorem:

$$
MR^2=I_x+I_y=2I_x
$$

So:

$$
I_x=\frac{1}{2}MR^2
$$

Moment of inertia of a thin ring about a diameter is:

$$
\frac{1}{2}MR^2
$$

## 37. Parallel-Axis Theorem

The parallel-axis theorem relates moment of inertia about an axis through the centre of mass to moment of inertia about another parallel axis.

If:

- \(I_{cm}\) is moment of inertia about an axis through centre of mass
- \(I\) is moment of inertia about a parallel axis
- \(a\) is distance between the two axes
- \(M\) is total mass

then:

$$
I=I_{cm}+Ma^2
$$

Moment of inertia is minimum about the parallel axis passing through the centre of mass.

Any shift of the axis away from the centre of mass increases \(I\) by \(Ma^2\).

### 37.1 Example: Rod About One End

For a uniform rod of length \(L\), moment of inertia about an axis through its centre and perpendicular to its length is:

$$
I_{cm}=\frac{1}{12}ML^2
$$

The distance from centre to one end is:

$$
a=\frac{L}{2}
$$

By parallel-axis theorem:

$$
I=I_{cm}+Ma^2
$$

$$
I=\frac{1}{12}ML^2+M\left(\frac{L}{2}\right)^2
$$

$$
I=\frac{1}{12}ML^2+\frac{1}{4}ML^2
$$

$$
I=\frac{1}{3}ML^2
$$

## 38. Rotational Kinematics

For fixed-axis rotation with constant angular acceleration, the equations match linear kinematics.

Linear quantities:

- displacement \(s\)
- velocity \(v\)
- acceleration \(a\)

Rotational quantities:

- angular displacement \(\theta\)
- angular velocity \(\omega\)
- angular acceleration \(\alpha\)

The equations are:

$$
\omega=\omega_0+\alpha t
$$

$$
\theta=\omega_0t+\frac{1}{2}\alpha t^2
$$

$$
\omega^2=\omega_0^2+2\alpha\theta
$$

and:

$$
\theta=\frac{\omega_0+\omega}{2}t
$$

These equations apply only when \(\alpha\) is constant.

### 38.1 Radian Measure

Angular equations use radians.

One revolution is:

$$
2\pi\text{ rad}
$$

If speed is given in revolutions per minute, convert before using formulas.

For example:

$$
240\text{ rev min}^{-1}=4\text{ rev s}^{-1}=8\pi\text{ rad s}^{-1}
$$

## 39. Worked Example: Angular Acceleration

A wheel speeds up from \(240\text{ rev min}^{-1}\) to \(360\text{ rev min}^{-1}\) in \(4\text{ s}\).

Initial angular speed:

$$
\omega_0=240\text{ rev min}^{-1}
$$

$$
\omega_0=4\text{ rev s}^{-1}
$$

$$
\omega_0=8\pi\text{ rad s}^{-1}
$$

Final angular speed:

$$
\omega=360\text{ rev min}^{-1}
$$

$$
\omega=6\text{ rev s}^{-1}
$$

$$
\omega=12\pi\text{ rad s}^{-1}
$$

Angular acceleration:

$$
\alpha=\frac{\omega-\omega_0}{t}
$$

$$
\alpha=\frac{12\pi-8\pi}{4}
$$

$$
\alpha=\pi\text{ rad s}^{-2}
$$

## 40. Dynamics Of Fixed-Axis Rotation

For a rigid body rotating about a fixed axis, torque produces angular acceleration.

The rotational form of Newton's second law is:

$$
\tau=I\alpha
$$

This applies when:

- the axis is fixed
- the moment of inertia about that axis is constant
- \(\tau\) is the net external torque about that axis

The comparison with linear motion is:

| Translation | Rotation |
|---|---|
| force \(F\) | torque \(\tau\) |
| mass \(m\) | moment of inertia \(I\) |
| acceleration \(a\) | angular acceleration \(\alpha\) |
| velocity \(v\) | angular velocity \(\omega\) |
| displacement \(s\) | angular displacement \(\theta\) |
| momentum \(p=mv\) | angular momentum \(L=I\omega\) |
| kinetic energy \(\frac{1}{2}mv^2\) | kinetic energy \(\frac{1}{2}I\omega^2\) |

## 41. Work Done By Torque

For a small angular displacement \(d\theta\), work done by torque is:

$$
dW=\tau\,d\theta
$$

If torque is constant:

$$
W=\tau\theta
$$

For variable torque:

$$
W=\int \tau\,d\theta
$$

This work changes rotational kinetic energy:

$$
W=\Delta K_{rot}
$$

where:

$$
K_{rot}=\frac{1}{2}I\omega^2
$$

## 42. Power In Rotational Motion

Power is the rate of doing work.

In rotation:

$$
P=\frac{dW}{dt}
$$

Since:

$$
dW=\tau\,d\theta
$$

we get:

$$
P=\tau\frac{d\theta}{dt}
$$

Therefore:

$$
P=\tau\omega
$$

This is the rotational analogue of:

$$
P=Fv
$$

## 43. Worked Example: Flywheel Pulled By A Cord

A cord is wound around a flywheel of mass \(20\text{ kg}\) and radius \(0.20\text{ m}\).

The cord is pulled by a force of \(25\text{ N}\).

Assume the flywheel behaves like a thin ring about its axis.

Moment of inertia:

$$
I=MR^2
$$

$$
I=(20)(0.20)^2
$$

$$
I=0.8\text{ kg m}^2
$$

Torque:

$$
\tau=FR
$$

$$
\tau=(25)(0.20)
$$

$$
\tau=5\text{ N m}
$$

Angular acceleration:

$$
\alpha=\frac{\tau}{I}
$$

$$
\alpha=\frac{5}{0.8}
$$

$$
\alpha=6.25\text{ rad s}^{-2}
$$

If the cord unwinds by \(2\text{ m}\), angular displacement is:

$$
\theta=\frac{s}{R}
$$

$$
\theta=\frac{2}{0.20}=10\text{ rad}
$$

Work done:

$$
W=Fs
$$

$$
W=(25)(2)=50\text{ J}
$$

The same work is:

$$
W=\tau\theta
$$

$$
W=(5)(10)=50\text{ J}
$$

This work becomes rotational kinetic energy if losses are neglected.

## 44. Angular Momentum In Fixed-Axis Rotation

For simple fixed-axis rotation about a symmetry axis:

$$
L=I\omega
$$

The vector \(\vec{L}\) is along the axis of rotation.

In more advanced cases, \(\vec{L}\) and \(\vec{\omega}\) need not always be parallel.

For this chapter's standard fixed-axis problems, we use:

$$
\vec{L}=I\vec{\omega}
$$

when the axis is a symmetry axis and \(I\) is about that axis.

Since:

$$
\vec{\tau}=\frac{d\vec{L}}{dt}
$$

if \(I\) is constant:

$$
\tau=I\alpha
$$

## 45. Worked Example: Folding Arms While Rotating

A child stands at the centre of a turntable and rotates with arms stretched out.

Initial moment of inertia is \(I_1\), and angular speed is:

$$
\omega_1=40\text{ rev min}^{-1}
$$

The child folds the arms, reducing moment of inertia to:

$$
I_2=\frac{2}{5}I_1
$$

If external torque is negligible:

$$
I_1\omega_1=I_2\omega_2
$$

Substitute:

$$
I_1(40)=\left(\frac{2}{5}I_1\right)\omega_2
$$

Cancel \(I_1\):

$$
40=\frac{2}{5}\omega_2
$$

Therefore:

$$
\omega_2=100\text{ rev min}^{-1}
$$

The angular speed increases because moment of inertia decreases.

### 45.1 What Happens To Kinetic Energy

Initial kinetic energy:

$$
K_1=\frac{1}{2}I_1\omega_1^2
$$

Final kinetic energy:

$$
K_2=\frac{1}{2}I_2\omega_2^2
$$

Using angular momentum conservation:

$$
I_1\omega_1=I_2\omega_2
$$

For the numbers above:

$$
\frac{K_2}{K_1}=\frac{I_2\omega_2^2}{I_1\omega_1^2}
$$

Since \(I_2=\frac{2}{5}I_1\) and \(\omega_2=\frac{5}{2}\omega_1\):

$$
\frac{K_2}{K_1}=\left(\frac{2}{5}\right)\left(\frac{5}{2}\right)^2
$$

$$
\frac{K_2}{K_1}=\frac{5}{2}
$$

The rotational kinetic energy increases.

The extra energy comes from internal work done by the child while pulling the arms inward.

## 46. Comparing Translational And Rotational Motion

| Translational motion | Rotational motion |
|---|---|
| position \(x\) | angular position \(\theta\) |
| displacement \(s\) | angular displacement \(\theta\) |
| velocity \(v\) | angular velocity \(\omega\) |
| acceleration \(a\) | angular acceleration \(\alpha\) |
| mass \(m\) | moment of inertia \(I\) |
| force \(F\) | torque \(\tau\) |
| linear momentum \(p=mv\) | angular momentum \(L=I\omega\) |
| \(F=ma\) | \(\tau=I\alpha\) |
| work \(W=Fs\) | work \(W=\tau\theta\) |
| power \(P=Fv\) | power \(P=\tau\omega\) |
| kinetic energy \(K=\frac{1}{2}mv^2\) | kinetic energy \(K=\frac{1}{2}I\omega^2\) |

This comparison is useful, but it should not be used blindly.

Rotation is more sensitive to the chosen axis because \(I\), \(\tau\), and \(L\) all depend on the axis.

## 47. Common Mistakes

### 47.1 Treating Centre Of Mass As Always Inside Matter

The centre of mass of a ring is at its centre, where no material exists.

The centre of mass of a bent wire or hollow object may lie outside the material.

### 47.2 Forgetting That Internal Forces Cancel Only In Total

Internal forces can change the motion of individual particles.

They cannot change the motion of the centre of mass of the whole system.

### 47.3 Using Linear Speed Same For All Rotating Points

In fixed-axis rotation, all particles have the same angular velocity.

They do not have the same linear speed.

The speed is:

$$
v=\omega r_\perp
$$

### 47.4 Confusing Torque With Force

A large force can produce small torque if applied near the axis or along a line through the axis.

A smaller force can produce larger torque if applied far from the axis and perpendicular to the radius.

### 47.5 Using Moment Of Inertia Without Axis

Moment of inertia is always about a specified axis.

Saying "the moment of inertia of a rod" is incomplete unless the axis is named.

### 47.6 Applying Perpendicular-Axis Theorem To 3D Bodies

The perpendicular-axis theorem applies only to plane laminae.

It cannot be used directly for a solid sphere, solid cylinder, or thick body.

### 47.7 Forgetting To Convert Revolutions Per Minute

Rotational kinematic formulas use radians and seconds.

Before substitution, convert rev/min to rad/s:

$$
1\text{ rev}=2\pi\text{ rad}
$$

$$
1\text{ min}=60\text{ s}
$$

### 47.8 Assuming Angular Momentum Conservation Without Checking Torque

Angular momentum is conserved only when net external torque is zero about the chosen point or axis.

Always check external torque first.

## 48. Formula Sheet

### 48.1 Centre Of Mass

For two particles on a line:

$$
X=\frac{m_1x_1+m_2x_2}{m_1+m_2}
$$

For many particles:

$$
\vec{R}=\frac{1}{M}\sum m_i\vec{r}_i
$$

For continuous bodies:

$$
\vec{R}=\frac{1}{M}\int \vec{r}\,dm
$$

### 48.2 Centre Of Mass Motion

$$
\vec{P}=M\vec{V}
$$

$$
M\vec{A}=\vec{F}_{ext}
$$

$$
\frac{d\vec{P}}{dt}=\vec{F}_{ext}
$$

If \(\vec{F}_{ext}=0\):

$$
\vec{P}=\text{constant}
$$

### 48.3 Cross Product

$$
|\vec{a}\times\vec{b}|=ab\sin\theta
$$

$$
\vec{a}\times\vec{b}=-(\vec{b}\times\vec{a})
$$

$$
\hat{i}\times\hat{j}=\hat{k}
$$

$$
\hat{j}\times\hat{k}=\hat{i}
$$

$$
\hat{k}\times\hat{i}=\hat{j}
$$

### 48.4 Angular Motion

$$
\omega=\frac{d\theta}{dt}
$$

$$
\alpha=\frac{d\omega}{dt}
$$

$$
v=\omega r_\perp
$$

$$
\vec{v}=\vec{\omega}\times\vec{r}
$$

$$
a_t=\alpha r_\perp
$$

$$
a_c=\omega^2r_\perp
$$

### 48.5 Torque And Angular Momentum

$$
\vec{\tau}=\vec{r}\times\vec{F}
$$

$$
\tau=rF\sin\theta
$$

$$
\vec{l}=\vec{r}\times\vec{p}
$$

$$
\frac{d\vec{l}}{dt}=\vec{\tau}
$$

$$
\vec{L}=\sum \vec{l}_i
$$

$$
\frac{d\vec{L}}{dt}=\vec{\tau}_{ext}
$$

If \(\vec{\tau}_{ext}=0\):

$$
\vec{L}=\text{constant}
$$

### 48.6 Equilibrium

$$
\sum \vec{F}=0
$$

$$
\sum \vec{\tau}=0
$$

$$
\sum \tau_{clockwise}=\sum \tau_{anticlockwise}
$$

### 48.7 Moment Of Inertia

$$
I=\sum m_ir_i^2
$$

$$
K_{rot}=\frac{1}{2}I\omega^2
$$

$$
I=Mk^2
$$

Parallel-axis theorem:

$$
I=I_{cm}+Ma^2
$$

Perpendicular-axis theorem:

$$
I_z=I_x+I_y
$$

### 48.8 Rotational Kinematics

$$
\omega=\omega_0+\alpha t
$$

$$
\theta=\omega_0t+\frac{1}{2}\alpha t^2
$$

$$
\omega^2=\omega_0^2+2\alpha\theta
$$

### 48.9 Rotational Dynamics

$$
\tau=I\alpha
$$

$$
W=\tau\theta
$$

$$
P=\tau\omega
$$

$$
L=I\omega
$$

## 49. Practice Set A: Centre Of Mass

1. Two particles of masses \(3\text{ kg}\) and \(7\text{ kg}\) are at \(x=0\text{ m}\) and \(x=10\text{ m}\). Find their centre of mass.

2. Three particles of masses \(1\text{ kg}\), \(2\text{ kg}\), and \(3\text{ kg}\) are at \(x=1\text{ m}\), \(x=2\text{ m}\), and \(x=5\text{ m}\). Find \(X\).

3. Four equal masses are placed at the corners of a square. Where is the centre of mass?

4. A uniform rod extends from \(x=2\text{ m}\) to \(x=8\text{ m}\). Locate its centre of mass.

5. A uniform triangular lamina has vertices \((0,0)\), \((6,0)\), and \((0,6)\). Find the centroid.

### 49.1 Answers

1. \(7\text{ m}\)

2. \(20/6=10/3\text{ m}\)

3. At the centre of the square

4. \(x=5\text{ m}\)

5. \((2,2)\)

## 50. Practice Set B: Torque

1. A \(10\text{ N}\) force acts perpendicular to a wrench \(0.30\text{ m}\) long. Find torque.

2. A \(20\text{ N}\) force acts at \(60\text{ deg}\) to a radius of \(0.50\text{ m}\). Find torque magnitude.

3. Why is torque zero when force passes through the axis?

4. A door is easier to open by pushing at the handle than near the hinge. Explain using torque.

5. A couple has force \(15\text{ N}\) and separation \(0.20\text{ m}\). Find torque of the couple.

### 50.1 Answers

1. \(3\text{ N m}\)

2. \(5\sqrt{3}\text{ N m}\)

3. Moment arm is zero

4. The handle gives a larger moment arm

5. \(3\text{ N m}\)

## 51. Practice Set C: Moment Of Inertia

1. Two masses \(2\text{ kg}\) each are fixed at the ends of a light rod of length \(1\text{ m}\). Find \(I\) about the centre perpendicular to the rod.

2. A ring and a disc have the same mass and radius. Which has larger \(I\) about the central perpendicular axis?

3. A rod has \(I_{cm}=\frac{1}{12}ML^2\). Use the parallel-axis theorem to find \(I\) about one end.

4. A disc has \(I_z=\frac{1}{2}MR^2\). Use the perpendicular-axis theorem to find moment of inertia about a diameter.

5. If \(I=4\text{ kg m}^2\) and \(M=16\text{ kg}\), find radius of gyration.

### 51.1 Answers

1. Each mass is \(0.5\text{ m}\) from the centre, so \(I=2(2)(0.5)^2=1\text{ kg m}^2\)

2. The ring

3. \(\frac{1}{3}ML^2\)

4. \(\frac{1}{4}MR^2\)

5. \(0.5\text{ m}\)

## 52. Practice Set D: Rotational Dynamics

1. A wheel has \(I=2\text{ kg m}^2\). A torque of \(6\text{ N m}\) acts on it. Find angular acceleration.

2. A disc rotates at \(10\text{ rad s}^{-1}\) and has \(I=0.5\text{ kg m}^2\). Find rotational kinetic energy.

3. A constant torque of \(4\text{ N m}\) rotates a body through \(5\text{ rad}\). Find work done.

4. A motor supplies torque \(8\text{ N m}\) at angular speed \(20\text{ rad s}^{-1}\). Find power.

5. A body has \(I=3\text{ kg m}^2\) and \(\omega=4\text{ rad s}^{-1}\). Find angular momentum.

### 52.1 Answers

1. \(3\text{ rad s}^{-2}\)

2. \(25\text{ J}\)

3. \(20\text{ J}\)

4. \(160\text{ W}\)

5. \(12\text{ kg m}^2\text{ s}^{-1}\)

## 53. Practice Set E: Conservation Laws

1. A system has no external force. What happens to its total linear momentum?

2. A system has no external torque about a point. What happens to its angular momentum about that point?

3. A rotating student reduces moment of inertia to half. If external torque is zero, what happens to angular speed?

4. A shell explodes in midair. What path does the centre of mass follow if air resistance is neglected?

5. Why can internal forces not change total momentum of a system?

### 53.1 Answers

1. It remains constant

2. It remains constant

3. It doubles

4. The same parabolic path as the unexploded shell would have followed

5. Internal forces cancel in action-reaction pairs in the total system equation

## 54. Learner Checklist

You are ready for this chapter when you can:

- define centre of mass clearly
- calculate centre of mass for particles on a line
- calculate centre of mass in two dimensions
- use symmetry to locate centre of mass
- explain why \(M\vec{A}=\vec{F}_{ext}\)
- connect total momentum with centre of mass velocity
- state conservation of linear momentum
- calculate cross products using magnitude and direction
- use unit vector cross product rules
- define angular velocity and angular acceleration
- use \(v=\omega r\)
- calculate torque using \(rF\sin\theta\)
- identify zero-torque situations
- define angular momentum of a particle
- derive \(\frac{d\vec{l}}{dt}=\vec{\tau}\)
- state conservation of angular momentum
- apply both equilibrium conditions
- use the principle of moments
- explain a couple
- distinguish centre of mass and centre of gravity
- define moment of inertia
- compare moment of inertia for different mass distributions
- use standard moment of inertia formulas
- apply parallel-axis theorem
- apply perpendicular-axis theorem
- solve rotational kinematics problems
- calculate rotational kinetic energy
- calculate work and power in rotational motion
- use \(\tau=I\alpha\)

## 55. One Page Revision

Centre of mass is the mass-weighted average position:

$$
\vec{R}=\frac{1}{M}\sum m_i\vec{r}_i
$$

Its motion obeys:

$$
M\vec{A}=\vec{F}_{ext}
$$

Total linear momentum is:

$$
\vec{P}=M\vec{V}
$$

If external force is zero, total linear momentum is conserved.

Cross product creates a vector perpendicular to two vectors:

$$
|\vec{a}\times\vec{b}|=ab\sin\theta
$$

Torque is:

$$
\vec{\tau}=\vec{r}\times\vec{F}
$$

Angular momentum is:

$$
\vec{l}=\vec{r}\times\vec{p}
$$

Torque is the rate of change of angular momentum:

$$
\vec{\tau}=\frac{d\vec{l}}{dt}
$$

For a system:

$$
\vec{\tau}_{ext}=\frac{d\vec{L}}{dt}
$$

If external torque is zero, angular momentum is conserved.

Rigid-body equilibrium requires:

$$
\sum \vec{F}=0
$$

and:

$$
\sum \vec{\tau}=0
$$

Moment of inertia is:

$$
I=\sum m_ir_i^2
$$

Rotational kinetic energy is:

$$
K=\frac{1}{2}I\omega^2
$$

Parallel-axis theorem:

$$
I=I_{cm}+Ma^2
$$

Perpendicular-axis theorem:

$$
I_z=I_x+I_y
$$

Rotational kinematics for constant angular acceleration:

$$
\omega=\omega_0+\alpha t
$$

$$
\theta=\omega_0t+\frac{1}{2}\alpha t^2
$$

$$
\omega^2=\omega_0^2+2\alpha\theta
$$

Rotational dynamics:

$$
\tau=I\alpha
$$

Work and power in rotation:

$$
W=\tau\theta
$$

$$
P=\tau\omega
$$

For fixed-axis rotation about a symmetry axis:

$$
L=I\omega
$$
