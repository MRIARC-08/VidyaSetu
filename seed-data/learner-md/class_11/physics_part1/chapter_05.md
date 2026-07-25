# Chapter 5 - Work, Energy And Power

## 1. Chapter Purpose

Newton's laws solve mechanics through force and acceleration. This chapter introduces another powerful approach: energy.

Energy methods are often simpler because energy is a scalar. Many problems that are difficult with vectors become easier when solved with work, kinetic energy, potential energy, and conservation of mechanical energy.

By the end of this chapter, you should be able to:

- calculate scalar product of vectors
- define work done by a constant force
- decide whether work is positive, negative, or zero
- use kinetic energy
- apply the work-energy theorem
- calculate work done by a variable force
- understand conservative and non-conservative forces
- define potential energy
- use conservation of mechanical energy
- calculate spring potential energy
- use power and instantaneous power
- distinguish elastic and inelastic collisions
- solve one-dimensional collision problems
- understand collision equations in two dimensions

## 2. Scalar Product Or Dot Product

The scalar product of two vectors \(\vec{A}\) and \(\vec{B}\) is:

$$
\vec{A}\cdot\vec{B}=AB\cos\theta
$$

where \(\theta\) is the angle between the two vectors.

The result is a scalar.

### 2.1 Meaning

\(\vec{A}\cdot\vec{B}\) can be understood as:

- magnitude of \(\vec{A}\) multiplied by component of \(\vec{B}\) along \(\vec{A}\)
- or magnitude of \(\vec{B}\) multiplied by component of \(\vec{A}\) along \(\vec{B}\)

### 2.2 Properties

Commutative law:

$$
\vec{A}\cdot\vec{B}=\vec{B}\cdot\vec{A}
$$

Distributive law:

$$
\vec{A}\cdot(\vec{B}+\vec{C})=\vec{A}\cdot\vec{B}+\vec{A}\cdot\vec{C}
$$

Multiplication by scalar:

$$
\vec{A}\cdot(\lambda\vec{B})=\lambda(\vec{A}\cdot\vec{B})
$$

### 2.3 Unit Vector Products

For unit vectors:

$$
\hat{i}\cdot\hat{i}=1,\quad \hat{j}\cdot\hat{j}=1,\quad \hat{k}\cdot\hat{k}=1
$$

and:

$$
\hat{i}\cdot\hat{j}=0,\quad \hat{j}\cdot\hat{k}=0,\quad \hat{k}\cdot\hat{i}=0
$$

because the coordinate unit vectors are mutually perpendicular.

### 2.4 Component Form

If:

$$
\vec{A}=A_x\hat{i}+A_y\hat{j}+A_z\hat{k}
$$

and:

$$
\vec{B}=B_x\hat{i}+B_y\hat{j}+B_z\hat{k}
$$

then:

$$
\vec{A}\cdot\vec{B}=A_xB_x+A_yB_y+A_zB_z
$$

Also:

$$
\vec{A}\cdot\vec{A}=A^2
$$

so:

$$
A=\sqrt{A_x^2+A_y^2+A_z^2}
$$

If:

$$
\vec{A}\cdot\vec{B}=0
$$

then the vectors are perpendicular, provided neither vector is zero.

## 3. Worked Example: Dot Product

Find the angle between:

$$
\vec{F}=3\hat{i}+4\hat{j}-5\hat{k}
$$

and:

$$
\vec{d}=5\hat{i}+4\hat{j}+3\hat{k}
$$

Dot product:

$$
\vec{F}\cdot\vec{d}=3(5)+4(4)+(-5)(3)
$$

$$
=15+16-15=16
$$

Magnitudes:

$$
F=\sqrt{3^2+4^2+(-5)^2}=\sqrt{50}
$$

$$
d=\sqrt{5^2+4^2+3^2}=\sqrt{50}
$$

Using:

$$
\vec{F}\cdot\vec{d}=Fd\cos\theta
$$

we get:

$$
16=(\sqrt{50})(\sqrt{50})\cos\theta
$$

$$
16=50\cos\theta
$$

$$
\cos\theta=0.32
$$

Thus:

$$
\theta=\cos^{-1}(0.32)
$$

## 4. Work Done By A Constant Force

Work is done when a force causes displacement.

If a constant force \(\vec{F}\) acts on a body and the body undergoes displacement \(\vec{d}\), then work done by the force is:

$$
W=\vec{F}\cdot\vec{d}
$$

So:

$$
W=Fd\cos\theta
$$

where \(\theta\) is the angle between force and displacement.

Work is a scalar.

SI unit:

$$
\text{joule}=\text{J}
$$

Dimension:

$$
[W]=[M L^2T^{-2}]
$$

## 5. Positive, Negative, And Zero Work

### 5.1 Positive Work

If force has a component in the direction of displacement:

$$
0^\circ\le\theta<90^\circ
$$

then:

$$
W>0
$$

Example:

A person pulls a box forward and the box moves forward.

### 5.2 Negative Work

If force has a component opposite to displacement:

$$
90^\circ<\theta\le180^\circ
$$

then:

$$
W<0
$$

Example:

Friction does negative work on a sliding body.

### 5.3 Zero Work

Work is zero if:

- displacement is zero
- force is zero
- force is perpendicular to displacement

Examples:

If a person pushes a wall and the wall does not move, work on the wall is zero.

If a satellite moves in a circular orbit and gravity is radial while displacement is tangential, gravity does no work for a perfectly circular orbit.

## 6. Work Done By Action-Reaction Forces

Newton's third law says action and reaction forces are equal and opposite.

But the work done by them need not be equal and opposite.

Example:

A cycle skids to a stop. The road exerts friction on the cycle and does negative work on it.

The cycle exerts an equal and opposite force on the road, but the road does not undergo displacement. So work done by the cycle on the road is zero.

Thus:

$$
\vec{F}_{AB}=-\vec{F}_{BA}
$$

does not imply:

$$
W_{AB}=-W_{BA}
$$

## 7. Kinetic Energy

Kinetic energy is energy due to motion.

For a body of mass \(m\) moving with speed \(v\):

$$
K=\frac{1}{2}mv^2
$$

Kinetic energy is a scalar and is always non-negative.

SI unit:

$$
\text{J}
$$

## 8. Work-Energy Theorem

The work-energy theorem states:

The work done by the net force on a body is equal to the change in its kinetic energy.

$$
W_{\text{net}}=K_f-K_i
$$

or:

$$
W_{\text{net}}=\Delta K
$$

This theorem follows from Newton's second law.

## 9. Derivation For Constant Acceleration

For one-dimensional motion with constant acceleration:

$$
v^2-u^2=2as
$$

Multiply by \(m/2\):

$$
\frac{1}{2}mv^2-\frac{1}{2}mu^2=mas
$$

Since:

$$
F=ma
$$

we get:

$$
\frac{1}{2}mv^2-\frac{1}{2}mu^2=Fs
$$

Thus:

$$
K_f-K_i=W
$$

## 10. Worked Example: Raindrop

A raindrop of mass:

$$
m=1.00\ \text{g}=10^{-3}\ \text{kg}
$$

falls through:

$$
h=1.00\ \text{km}=10^3\ \text{m}
$$

and hits the ground with speed:

$$
v=50.0\ \text{m s}^{-1}
$$

Assume it starts from rest and take:

$$
g=10\ \text{m s}^{-2}
$$

Change in kinetic energy:

$$
\Delta K=\frac{1}{2}mv^2
$$

$$
\Delta K=\frac{1}{2}(10^{-3})(50)^2
$$

$$
\Delta K=1.25\ \text{J}
$$

Work done by gravity:

$$
W_g=mgh
$$

$$
W_g=(10^{-3})(10)(10^3)=10.0\ \text{J}
$$

Let work by air resistance be \(W_r\).

Using work-energy theorem:

$$
\Delta K=W_g+W_r
$$

So:

$$
W_r=\Delta K-W_g
$$

$$
W_r=1.25-10.0=-8.75\ \text{J}
$$

Air resistance does negative work.

## 11. Worked Example: Skidding Cycle

A cyclist skids to a stop in:

$$
d=10\ \text{m}
$$

The force by road on cycle is:

$$
F=200\ \text{N}
$$

opposite to motion.

Work done by road on cycle:

$$
W=Fd\cos180^\circ
$$

$$
W=200(10)(-1)
$$

$$
W=-2000\ \text{J}
$$

Negative work reduces kinetic energy.

## 12. Work Done By A Variable Force

For a variable force in one dimension, work is the area under the force-displacement graph.

If force depends on position:

$$
F=F(x)
$$

then work from \(x_i\) to \(x_f\) is:

$$
W=\int_{x_i}^{x_f}F(x)\,dx
$$

For a force-displacement graph:

- area above the x-axis gives positive work
- area below the x-axis gives negative work

## 13. Worked Example: Variable Push And Friction

A woman pushes a trunk.

From \(x=0\) to \(x=10\ \text{m}\), she applies:

$$
100\ \text{N}
$$

From \(x=10\ \text{m}\) to \(x=20\ \text{m}\), her force decreases linearly from 100 N to 50 N.

Friction is constant:

$$
50\ \text{N}
$$

opposite motion.

Work by woman:

First part:

$$
W_1=100(10)=1000\ \text{J}
$$

Second part is area of trapezium:

$$
W_2=\frac{1}{2}(100+50)(10)=750\ \text{J}
$$

Total:

$$
W=1000+750=1750\ \text{J}
$$

Work by friction:

$$
W_f=-50(20)=-1000\ \text{J}
$$

Net work:

$$
W_{\text{net}}=1750-1000=750\ \text{J}
$$

## 14. Work-Energy Theorem For A Variable Force

In one dimension:

$$
K=\frac{1}{2}mv^2
$$

The rate of change of kinetic energy is:

$$
\frac{dK}{dt}=mv\frac{dv}{dt}
$$

Using:

$$
F=m\frac{dv}{dt}
$$

we get:

$$
\frac{dK}{dt}=Fv
$$

But:

$$
v=\frac{dx}{dt}
$$

So:

$$
\frac{dK}{dt}=F\frac{dx}{dt}
$$

Thus:

$$
dK=Fdx
$$

Integrating:

$$
K_f-K_i=\int_{x_i}^{x_f}F(x)\,dx
$$

Therefore:

$$
K_f-K_i=W
$$

The work-energy theorem holds for variable forces.

## 15. Potential Energy

Potential energy is stored energy due to position or configuration.

Examples:

- a raised object has gravitational potential energy
- a stretched bow has elastic potential energy
- a compressed spring stores elastic potential energy

Potential energy can be defined only for conservative forces.

## 16. Conservative Force

A force is conservative if:

- work done by it depends only on initial and final positions
- work done by it over any closed path is zero
- it can be associated with a potential energy function

Examples:

- gravitational force
- spring force

Non-conservative forces:

- friction
- air resistance
- viscous drag

For a conservative force in one dimension:

$$
F(x)=-\frac{dV}{dx}
$$

and:

$$
\Delta V=-W_{\text{conservative}}
$$

## 17. Gravitational Potential Energy Near Earth

Near Earth's surface, \(g\) is approximately constant.

If height \(h\) is measured upward from a chosen zero level:

$$
V(h)=mgh
$$

The gravitational force is downward:

$$
F=-mg
$$

If an object falls from height \(h\), gravitational potential energy converts into kinetic energy.

Using conservation:

$$
mgh=\frac{1}{2}mv^2
$$

So:

$$
v=\sqrt{2gh}
$$

## 18. Conservation Of Mechanical Energy

Mechanical energy is:

$$
E=K+V
$$

If only conservative forces do work:

$$
K_i+V_i=K_f+V_f
$$

or:

$$
E=\text{constant}
$$

Kinetic and potential energy may change individually, but their sum remains constant.

## 19. Falling Body Energy

A ball of mass \(m\) is dropped from height \(H\).

At the top:

$$
K=0,\quad V=mgH
$$

Total energy:

$$
E=mgH
$$

At height \(h\):

$$
V=mgh
$$

and:

$$
K=\frac{1}{2}mv^2
$$

Conservation gives:

$$
mgH=mgh+\frac{1}{2}mv^2
$$

So:

$$
v^2=2g(H-h)
$$

At ground:

$$
v=\sqrt{2gH}
$$

## 20. Spring Force

For an ideal spring:

$$
F_s=-kx
$$

This is Hooke's law.

Here:

- \(x\) is displacement from equilibrium
- \(k\) is spring constant
- negative sign means restoring force

Unit of \(k\):

$$
\text{N m}^{-1}
$$

## 21. Spring Potential Energy

Work done by spring force from \(x_i\) to \(x_f\) is:

$$
W_s=\int_{x_i}^{x_f}(-kx)\,dx
$$

$$
W_s=-\frac{1}{2}k(x_f^2-x_i^2)
$$

Spring potential energy is:

$$
V(x)=\frac{1}{2}kx^2
$$

It is positive for both extension and compression.

## 22. Energy In A Spring-Block System

If a spring is stretched to \(x_m\) and released from rest on a smooth surface, total energy is:

$$
E=\frac{1}{2}kx_m^2
$$

At any position \(x\):

$$
\frac{1}{2}mv^2+\frac{1}{2}kx^2=\frac{1}{2}kx_m^2
$$

At equilibrium \(x=0\), speed is maximum:

$$
\frac{1}{2}mv_{\text{max}}^2=\frac{1}{2}kx_m^2
$$

So:

$$
v_{\text{max}}=x_m\sqrt{\frac{k}{m}}
$$

## 23. Worked Example: Car Compressing A Spring

A car of mass:

$$
m=1000\ \text{kg}
$$

moves with speed:

$$
18.0\ \text{km h}^{-1}=5.0\ \text{m s}^{-1}
$$

It compresses a spring of constant:

$$
k=5.25\times10^3\ \text{N m}^{-1}
$$

On a smooth road, kinetic energy becomes spring potential energy.

$$
\frac{1}{2}mv^2=\frac{1}{2}kx^2
$$

Cancel \(1/2\):

$$
mv^2=kx^2
$$

So:

$$
x=v\sqrt{\frac{m}{k}}
$$

$$
x=5.0\sqrt{\frac{1000}{5.25\times10^3}}
$$

$$
x\approx2.0\ \text{m}
$$

## 24. Non-Conservative Forces And Mechanical Energy

When non-conservative forces do work, mechanical energy changes.

Work-energy theorem:

$$
W_c+W_{nc}=\Delta K
$$

For conservative force:

$$
W_c=-\Delta V
$$

Thus:

$$
W_{nc}=\Delta K+\Delta V
$$

So:

$$
W_{nc}=\Delta E
$$

where:

$$
E=K+V
$$

If friction does negative work, mechanical energy decreases.

## 25. Power

Power is the rate at which work is done or energy is transferred.

Average power:

$$
P_{\text{avg}}=\frac{W}{t}
$$

Instantaneous power:

$$
P=\frac{dW}{dt}
$$

Since:

$$
dW=\vec{F}\cdot d\vec{r}
$$

we get:

$$
P=\vec{F}\cdot\vec{v}
$$

Power is a scalar.

SI unit:

$$
\text{watt}=\text{W}
$$

$$
1\ \text{W}=1\ \text{J s}^{-1}
$$

Another unit:

$$
1\ \text{hp}=746\ \text{W}
$$

## 26. Kilowatt Hour

Kilowatt hour is a unit of energy, not power.

$$
1\ \text{kWh}=1000\ \text{W}\times3600\ \text{s}
$$

$$
1\ \text{kWh}=3.6\times10^6\ \text{J}
$$

Electricity bills commonly use kWh.

## 27. Worked Example: Elevator Power

An elevator with total load:

$$
m=1800\ \text{kg}
$$

moves upward at constant speed:

$$
v=2\ \text{m s}^{-1}
$$

Frictional force opposing motion:

$$
F_f=4000\ \text{N}
$$

Take:

$$
g=10\ \text{m s}^{-2}
$$

Total downward force to be balanced:

$$
F=mg+F_f
$$

$$
F=1800(10)+4000=22000\ \text{N}
$$

Power:

$$
P=Fv
$$

$$
P=22000(2)=44000\ \text{W}
$$

In horsepower:

$$
P=\frac{44000}{746}\approx59\ \text{hp}
$$

## 28. Collisions

A collision is an interaction between bodies over a short time interval.

During collision:

- forces may be very large
- time of contact is small
- momentum of the isolated system is conserved
- kinetic energy may or may not be conserved

Total momentum is conserved in all collisions if no external impulse acts.

## 29. Elastic And Inelastic Collisions

### 29.1 Elastic Collision

In an elastic collision:

- total momentum is conserved
- total kinetic energy is conserved

### 29.2 Inelastic Collision

In an inelastic collision:

- total momentum is conserved
- kinetic energy is not conserved

Some kinetic energy changes into heat, sound, deformation, or internal energy.

### 29.3 Completely Inelastic Collision

In a completely inelastic collision, the bodies stick together and move with common velocity after collision.

## 30. Completely Inelastic Collision In One Dimension

Suppose mass \(m_1\) moving with speed \(v_{1i}\) collides with mass \(m_2\) at rest.

After collision, both move together with speed \(v_f\).

Momentum conservation:

$$
m_1v_{1i}=(m_1+m_2)v_f
$$

So:

$$
v_f=\frac{m_1v_{1i}}{m_1+m_2}
$$

Kinetic energy is lost in a completely inelastic collision.

## 31. Elastic Collision In One Dimension

Let \(m_1\) move with initial velocity \(v_{1i}\) and \(m_2\) be initially at rest.

For a head-on elastic collision:

$$
v_{1f}=\frac{m_1-m_2}{m_1+m_2}v_{1i}
$$

$$
v_{2f}=\frac{2m_1}{m_1+m_2}v_{1i}
$$

### 31.1 Equal Masses

If:

$$
m_1=m_2
$$

then:

$$
v_{1f}=0
$$

and:

$$
v_{2f}=v_{1i}
$$

The first body stops and the second moves with the first body's initial speed.

### 31.2 Heavy Target

If:

$$
m_2\gg m_1
$$

then approximately:

$$
v_{1f}\approx -v_{1i}
$$

and:

$$
v_{2f}\approx0
$$

The light body rebounds.

## 32. Collisions In Two Dimensions

In two-dimensional collisions, momentum is conserved component-wise.

If initial motion is along x-axis:

Momentum along x:

$$
m_1v_{1i}=m_1v_{1f}\cos\theta_1+m_2v_{2f}\cos\theta_2
$$

Momentum along y:

$$
0=m_1v_{1f}\sin\theta_1-m_2v_{2f}\sin\theta_2
$$

If collision is elastic, kinetic energy is also conserved:

$$
\frac{1}{2}m_1v_{1i}^2
=\frac{1}{2}m_1v_{1f}^2+\frac{1}{2}m_2v_{2f}^2
$$

Usually one extra piece of information is needed to solve a two-dimensional collision.

## 33. Equal Mass Elastic Glancing Collision

For two equal masses, if one is initially at rest and the collision is elastic, the final velocity directions are perpendicular.

That is:

$$
\theta_1+\theta_2=90^\circ
$$

This result is useful in billiards and carrom-like collisions when rotational effects are neglected.

## 34. Common Mistakes

### 34.1 Saying Work Is Done Whenever Force Acts

Force alone is not enough. Displacement is required.

### 34.2 Forgetting The Angle In Work

Work uses:

$$
W=Fd\cos\theta
$$

not simply \(Fd\) in every case.

### 34.3 Treating Work As A Vector

Work is scalar. It can be positive or negative, but it has no direction.

### 34.4 Assuming Mechanical Energy Is Always Conserved

Mechanical energy is conserved only when non-conservative work is zero.

Total energy is always conserved, but mechanical energy may transform into heat, sound, or internal energy.

### 34.5 Forgetting Momentum In Collisions

Momentum is conserved in both elastic and inelastic collisions if the system is isolated.

Kinetic energy is conserved only in elastic collisions.

### 34.6 Confusing kW And kWh

kW is power.

kWh is energy.

## 35. Formula Sheet

### 35.1 Dot Product

$$
\vec{A}\cdot\vec{B}=AB\cos\theta
$$

Component form:

$$
\vec{A}\cdot\vec{B}=A_xB_x+A_yB_y+A_zB_z
$$

### 35.2 Work

$$
W=\vec{F}\cdot\vec{d}
$$

$$
W=Fd\cos\theta
$$

### 35.3 Kinetic Energy

$$
K=\frac{1}{2}mv^2
$$

### 35.4 Work-Energy Theorem

$$
W_{\text{net}}=\Delta K
$$

$$
W_{\text{net}}=K_f-K_i
$$

### 35.5 Variable Force Work

$$
W=\int_{x_i}^{x_f}F(x)\,dx
$$

### 35.6 Conservative Force

$$
F(x)=-\frac{dV}{dx}
$$

$$
\Delta V=-W_c
$$

### 35.7 Gravitational Potential Energy

$$
V=mgh
$$

### 35.8 Mechanical Energy

$$
E=K+V
$$

If only conservative forces do work:

$$
K_i+V_i=K_f+V_f
$$

### 35.9 Spring Force

$$
F_s=-kx
$$

### 35.10 Spring Potential Energy

$$
V=\frac{1}{2}kx^2
$$

### 35.11 Non-Conservative Work

$$
W_{nc}=\Delta(K+V)
$$

### 35.12 Power

$$
P_{\text{avg}}=\frac{W}{t}
$$

$$
P=\frac{dW}{dt}
$$

$$
P=\vec{F}\cdot\vec{v}
$$

### 35.13 Energy Unit

$$
1\ \text{kWh}=3.6\times10^6\ \text{J}
$$

### 35.14 Completely Inelastic Collision

$$
v_f=\frac{m_1v_{1i}+m_2v_{2i}}{m_1+m_2}
$$

If \(m_2\) is initially at rest:

$$
v_f=\frac{m_1v_{1i}}{m_1+m_2}
$$

### 35.15 Elastic Collision With Target At Rest

$$
v_{1f}=\frac{m_1-m_2}{m_1+m_2}v_{1i}
$$

$$
v_{2f}=\frac{2m_1}{m_1+m_2}v_{1i}
$$

## 36. Practice Set A: Work Signs

State whether work is positive, negative, or zero.

1. Work by a man lifting a bucket from a well.
2. Work by gravity while the bucket is lifted.
3. Work by friction on a sliding block.
4. Work by normal reaction on a block sliding horizontally.
5. Work by gravity on a satellite in a circular orbit.

Answers:

1. positive
2. negative
3. negative
4. zero
5. zero

## 37. Practice Set B: Work-Energy Theorem

A body of mass 2 kg starts from rest. A net force does 100 J of work on it.

Using:

$$
W_{\text{net}}=\Delta K
$$

we get:

$$
100=\frac{1}{2}(2)v^2-0
$$

$$
100=v^2
$$

$$
v=10\ \text{m s}^{-1}
$$

## 38. Practice Set C: Power

A pump lifts water of mass 500 kg through height 20 m in 50 s.

Work against gravity:

$$
W=mgh
$$

Taking \(g=10\):

$$
W=500(10)(20)=100000\ \text{J}
$$

Power:

$$
P=\frac{W}{t}
$$

$$
P=\frac{100000}{50}=2000\ \text{W}
$$

## 39. Practice Set D: Spring

A spring of constant 200 N m^-1 is compressed by 0.10 m.

Energy stored:

$$
V=\frac{1}{2}kx^2
$$

$$
V=\frac{1}{2}(200)(0.10)^2
$$

$$
V=1.0\ \text{J}
$$

## 40. Practice Set E: Collision

A 2 kg body moving at 6 m s^-1 collides completely inelastically with a 4 kg body at rest.

Common final speed:

$$
v_f=\frac{m_1v_{1i}}{m_1+m_2}
$$

$$
v_f=\frac{2(6)}{2+4}=2\ \text{m s}^{-1}
$$

Initial kinetic energy:

$$
K_i=\frac{1}{2}(2)(6)^2=36\ \text{J}
$$

Final kinetic energy:

$$
K_f=\frac{1}{2}(6)(2)^2=12\ \text{J}
$$

Kinetic energy lost:

$$
24\ \text{J}
$$

Momentum is conserved, but kinetic energy is not.

## 41. Learner Checklist

Before leaving this chapter, make sure you can:

- calculate dot product
- calculate work done by a force at an angle
- identify positive, negative, and zero work
- use kinetic energy formula
- apply the work-energy theorem
- find work from force-displacement graph
- identify conservative and non-conservative forces
- use \(V=mgh\)
- use \(V=\frac{1}{2}kx^2\)
- apply conservation of mechanical energy
- include non-conservative work when friction is present
- calculate power
- distinguish kW and kWh
- distinguish elastic, inelastic, and completely inelastic collisions
- use conservation of momentum in collisions

## 42. One Page Revision

Dot product:

$$
\vec{A}\cdot\vec{B}=AB\cos\theta
$$

Work:

$$
W=Fd\cos\theta
$$

Kinetic energy:

$$
K=\frac{1}{2}mv^2
$$

Work-energy theorem:

$$
W_{\text{net}}=K_f-K_i
$$

Variable force:

$$
W=\int F(x)\,dx
$$

Conservative force:

$$
F=-\frac{dV}{dx}
$$

Gravitational potential:

$$
V=mgh
$$

Spring force:

$$
F_s=-kx
$$

Spring potential:

$$
V=\frac{1}{2}kx^2
$$

Mechanical energy:

$$
E=K+V
$$

Conservation:

$$
K_i+V_i=K_f+V_f
$$

Power:

$$
P=\frac{dW}{dt}=\vec{F}\cdot\vec{v}
$$

Collision:

- momentum is conserved in isolated systems
- kinetic energy is conserved only in elastic collisions

