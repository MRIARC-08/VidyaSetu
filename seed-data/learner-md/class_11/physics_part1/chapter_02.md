# Chapter 2 - Motion In A Straight Line

## 1. Chapter Purpose

Motion is change in position with time. This chapter studies the simplest kind of motion: motion along a straight line.

Even this simple case contains the main ideas needed for later mechanics:

- position
- displacement
- distance
- average velocity
- instantaneous velocity
- speed
- acceleration
- graphs of motion
- uniformly accelerated motion
- free fall
- relative velocity

The chapter belongs to kinematics. Kinematics describes motion without asking what causes the motion. The causes of motion are studied later through force and Newton's laws.

By the end of this chapter, you should be able to:

- decide when a body can be treated as a point object
- distinguish distance and displacement
- distinguish speed and velocity
- calculate average velocity and average speed
- understand instantaneous velocity as a limit
- interpret position-time graphs
- interpret velocity-time graphs
- calculate acceleration
- use equations of uniformly accelerated motion
- solve vertical motion and free-fall problems
- use stopping distance and reaction time ideas
- calculate relative velocity in one dimension
- choose signs correctly in one-dimensional motion

## 2. Point Object Approximation

A body can be treated as a point object when its size is much smaller than the distance it travels.

Example:

A train moving between two faraway stations can often be treated as a point object if we only care about its overall motion from one station to another.

But a spinning cricket ball cannot be treated as a point object if we are studying its spin, bounce, or turning motion. In that case, the size and rotation matter.

The point object approximation is useful because it lets us describe motion by one position coordinate.

## 3. Rectilinear Motion

Rectilinear motion means motion along a straight line.

In one-dimensional motion, position can be represented using one coordinate, usually \(x\).

We choose:

- an origin
- a positive direction
- a unit of length

Example:

If the origin is a school gate and the positive direction is east:

- a student 100 m east has \(x=+100\ \text{m}\)
- a student 50 m west has \(x=-50\ \text{m}\)

The signs depend on the chosen positive direction.

## 4. Position

Position tells where an object is relative to the origin.

If an object is at coordinate \(x\), its position is \(x\).

Position may be positive, negative, or zero.

Examples:

| Position | Meaning if positive direction is right |
|---:|---|
| \(+5\ \text{m}\) | 5 m to the right of origin |
| \(-3\ \text{m}\) | 3 m to the left of origin |
| \(0\ \text{m}\) | at the origin |

## 5. Displacement

Displacement is change in position.

If an object moves from \(x_1\) to \(x_2\), then:

$$
\Delta x=x_2-x_1
$$

Displacement can be positive, negative, or zero.

Example:

If:

$$
x_1=2\ \text{m}
$$

and:

$$
x_2=9\ \text{m}
$$

then:

$$
\Delta x=9-2=7\ \text{m}
$$

If:

$$
x_1=9\ \text{m}
$$

and:

$$
x_2=2\ \text{m}
$$

then:

$$
\Delta x=2-9=-7\ \text{m}
$$

The negative sign indicates direction.

## 6. Distance

Distance is the total path length travelled.

Distance is always non-negative.

Example:

A man walks 5 m east and then 5 m west.

Total distance:

$$
5+5=10\ \text{m}
$$

Displacement:

$$
0\ \text{m}
$$

because he returns to the starting point.

## 7. Distance Versus Displacement

| Quantity | Meaning | Can be negative? | Depends on path? |
|---|---|---|---|
| distance | total path length | no | yes |
| displacement | final position minus initial position | yes | no |

For one-dimensional motion:

$$
\text{distance} \ge |\text{displacement}|
$$

Equality occurs when the object does not reverse direction.

## 8. Average Velocity

Average velocity is displacement divided by time interval.

If the position changes from \(x_1\) to \(x_2\) between times \(t_1\) and \(t_2\), then:

$$
v_{\text{avg}}=\frac{x_2-x_1}{t_2-t_1}
$$

or:

$$
v_{\text{avg}}=\frac{\Delta x}{\Delta t}
$$

Average velocity has direction. In one dimension, the sign gives the direction.

## 9. Average Speed

Average speed is total path length divided by total time.

$$
\text{Average speed}=\frac{\text{total distance}}{\text{total time}}
$$

Average speed is never negative.

In general:

$$
\text{average speed} \ge |v_{\text{avg}}|
$$

Equality occurs when the body does not reverse direction.

## 10. Worked Example: Market Trip

A man walks from home to a market 2.5 km away with speed 5 km h^-1. He finds the market closed and immediately returns home with speed 7.5 km h^-1.

Time to reach market:

$$
t_1=\frac{2.5}{5}=0.5\ \text{h}
$$

Time to return:

$$
t_2=\frac{2.5}{7.5}=\frac{1}{3}\ \text{h}
$$

Total time:

$$
t=\frac{1}{2}+\frac{1}{3}=\frac{5}{6}\ \text{h}
$$

Total distance:

$$
2.5+2.5=5.0\ \text{km}
$$

Net displacement:

$$
0
$$

Average speed:

$$
\frac{5.0}{5/6}=6.0\ \text{km h}^{-1}
$$

Average velocity:

$$
\frac{0}{5/6}=0
$$

This example shows why average speed and average velocity are different.

## 11. Instantaneous Velocity

Average velocity tells about motion over a time interval.

Instantaneous velocity tells the velocity at one instant.

It is defined as the limiting value of average velocity when the time interval becomes very small:

$$
v=\lim_{\Delta t\to0}\frac{\Delta x}{\Delta t}
$$

In calculus notation:

$$
v=\frac{dx}{dt}
$$

It is the rate of change of position with time.

## 12. Instantaneous Speed

Instantaneous speed is the magnitude of instantaneous velocity.

$$
\text{speed}=|v|
$$

Example:

If:

$$
v=+24\ \text{m s}^{-1}
$$

then speed is:

$$
24\ \text{m s}^{-1}
$$

If:

$$
v=-24\ \text{m s}^{-1}
$$

then speed is still:

$$
24\ \text{m s}^{-1}
$$

## 13. Position-Time Graph

A position-time graph plots position \(x\) on the vertical axis and time \(t\) on the horizontal axis.

The slope of an \(x-t\) graph gives velocity.

For a small interval:

$$
\text{slope}=\frac{\Delta x}{\Delta t}
$$

At an instant, the slope of the tangent gives instantaneous velocity.

### 13.1 Interpreting Slopes

| Shape of \(x-t\) graph | Meaning |
|---|---|
| horizontal line | object at rest |
| straight line with positive slope | constant positive velocity |
| straight line with negative slope | constant negative velocity |
| curve getting steeper upward | increasing positive velocity |
| curve flattening | decreasing speed in positive direction |

## 14. Worked Example: Velocity From Position Function

The position of an object moving along the x-axis is:

$$
x=a+bt^2
$$

where:

$$
a=8.5\ \text{m},\quad b=2.5\ \text{m s}^{-2}
$$

Velocity is:

$$
v=\frac{dx}{dt}
$$

Since:

$$
x=a+bt^2
$$

we get:

$$
v=2bt
$$

Substitute \(b=2.5\):

$$
v=5.0t
$$

At \(t=0\):

$$
v=0
$$

At \(t=2.0\ \text{s}\):

$$
v=5.0(2.0)=10\ \text{m s}^{-1}
$$

Average velocity from \(t=2.0\ \text{s}\) to \(t=4.0\ \text{s}\):

$$
v_{\text{avg}}=\frac{x(4)-x(2)}{4-2}
$$

Now:

$$
x(4)=a+b(4)^2=a+16b
$$

and:

$$
x(2)=a+b(2)^2=a+4b
$$

So:

$$
v_{\text{avg}}=\frac{(a+16b)-(a+4b)}{2}
$$

$$
v_{\text{avg}}=\frac{12b}{2}=6b
$$

$$
v_{\text{avg}}=6(2.5)=15\ \text{m s}^{-1}
$$

## 15. Acceleration

Acceleration is the rate of change of velocity with time.

Average acceleration is:

$$
a_{\text{avg}}=\frac{v_2-v_1}{t_2-t_1}
$$

or:

$$
a_{\text{avg}}=\frac{\Delta v}{\Delta t}
$$

The SI unit of acceleration is:

$$
\text{m s}^{-2}
$$

## 16. Instantaneous Acceleration

Instantaneous acceleration is:

$$
a=\lim_{\Delta t\to0}\frac{\Delta v}{\Delta t}
$$

or:

$$
a=\frac{dv}{dt}
$$

It is the slope of the velocity-time graph at that instant.

## 17. Sign Of Acceleration

In one-dimensional motion, acceleration may be positive, negative, or zero.

The sign depends on the chosen positive direction.

Important:

Positive acceleration does not always mean speed is increasing.

Negative acceleration does not always mean speed is decreasing.

Speed increases when velocity and acceleration have the same sign.

Speed decreases when velocity and acceleration have opposite signs.

| Velocity | Acceleration | Speed behavior |
|---:|---:|---|
| positive | positive | speed increases |
| positive | negative | speed decreases |
| negative | negative | speed increases |
| negative | positive | speed decreases |

## 18. Velocity-Time Graph

A velocity-time graph plots velocity \(v\) against time \(t\).

The slope of a \(v-t\) graph gives acceleration.

For a small interval:

$$
\text{slope}=\frac{\Delta v}{\Delta t}
$$

The area under a \(v-t\) graph gives displacement.

If velocity is constant:

$$
\text{area}=v\times t
$$

and:

$$
\text{displacement}=vt
$$

If velocity is negative, the area below the time axis represents negative displacement.

## 19. Acceleration-Time Graph

An acceleration-time graph plots acceleration \(a\) against time \(t\).

The area under an \(a-t\) graph gives change in velocity:

$$
\Delta v=\int a\,dt
$$

For constant acceleration:

$$
\Delta v=at
$$

## 20. Uniform Motion

Uniform motion means velocity is constant.

For uniform motion:

$$
a=0
$$

and:

$$
x=x_0+vt
$$

Graphs:

- \(x-t\) graph is a straight line
- \(v-t\) graph is horizontal
- \(a-t\) graph lies on the time axis

## 21. Uniformly Accelerated Motion

Uniformly accelerated motion means acceleration is constant.

If at \(t=0\):

$$
x=x_0,\quad v=v_0
$$

then after time \(t\):

$$
v=v_0+at
$$

$$
x=x_0+v_0t+\frac{1}{2}at^2
$$

$$
v^2=v_0^2+2a(x-x_0)
$$

Also:

$$
x-x_0=\frac{v_0+v}{2}t
$$

These are the kinematic equations for one-dimensional motion with constant acceleration.

## 22. Kinematic Equations: When To Use Which

| Equation | Missing quantity | Useful when |
|---|---|---|
| \(v=v_0+at\) | displacement | final velocity, time, acceleration |
| \(x-x_0=v_0t+\frac{1}{2}at^2\) | final velocity | displacement and time |
| \(v^2=v_0^2+2a(x-x_0)\) | time | displacement without time |
| \(x-x_0=\frac{v_0+v}{2}t\) | acceleration | average velocity under constant acceleration |

These equations are algebraic. Insert signs carefully.

## 23. Deriving Kinematic Equations

For constant acceleration:

$$
a=\frac{dv}{dt}
$$

So:

$$
dv=a\,dt
$$

Integrate from \(v_0\) to \(v\), and from 0 to \(t\):

$$
\int_{v_0}^{v}dv=\int_0^t a\,dt
$$

Since \(a\) is constant:

$$
v-v_0=at
$$

Therefore:

$$
v=v_0+at
$$

Now:

$$
v=\frac{dx}{dt}
$$

and:

$$
v=v_0+at
$$

So:

$$
dx=(v_0+at)\,dt
$$

Integrating:

$$
x-x_0=\int_0^t(v_0+at)\,dt
$$

$$
x-x_0=v_0t+\frac{1}{2}at^2
$$

For the third equation:

$$
a=\frac{dv}{dt}
$$

Use:

$$
\frac{dv}{dt}=\frac{dv}{dx}\frac{dx}{dt}=v\frac{dv}{dx}
$$

So:

$$
a=v\frac{dv}{dx}
$$

Thus:

$$
v\,dv=a\,dx
$$

Integrating:

$$
\int_{v_0}^{v}v\,dv=\int_{x_0}^{x}a\,dx
$$

$$
\frac{v^2-v_0^2}{2}=a(x-x_0)
$$

Therefore:

$$
v^2=v_0^2+2a(x-x_0)
$$

## 24. Free Fall

Free fall is motion under gravity alone, with air resistance neglected.

Near Earth's surface, acceleration due to gravity has magnitude:

$$
g=9.8\ \text{m s}^{-2}
$$

If upward is chosen positive, then:

$$
a=-g
$$

If downward is chosen positive, then:

$$
a=+g
$$

The physics is the same. Only the sign convention changes.

## 25. Vertical Motion Sign Convention

For vertical motion, choose one direction as positive and stay consistent.

If upward is positive:

- upward displacement is positive
- downward displacement is negative
- upward velocity is positive
- downward velocity is negative
- acceleration due to gravity is negative

At the highest point of vertical motion:

$$
v=0
$$

but:

$$
a=-g
$$

The acceleration is not zero.

## 26. Worked Example: Ball Thrown Upward From A Building

A ball is thrown upward with velocity:

$$
v_0=20\ \text{m s}^{-1}
$$

from a point 25 m above the ground.

Take upward as positive and:

$$
g=10\ \text{m s}^{-2}
$$

So:

$$
a=-10\ \text{m s}^{-2}
$$

### 26.1 Maximum Height Above Launch Point

At the highest point:

$$
v=0
$$

Use:

$$
v^2=v_0^2+2a(y-y_0)
$$

Substitute:

$$
0=(20)^2+2(-10)(y-y_0)
$$

$$
0=400-20(y-y_0)
$$

$$
y-y_0=20\ \text{m}
$$

So the ball rises 20 m above the launch point.

Since launch point is 25 m above ground, maximum height above ground is:

$$
25+20=45\ \text{m}
$$

### 26.2 Time To Hit Ground

Use:

$$
y=y_0+v_0t+\frac{1}{2}at^2
$$

Ground means:

$$
y=0
$$

Launch point:

$$
y_0=25\ \text{m}
$$

So:

$$
0=25+20t+\frac{1}{2}(-10)t^2
$$

$$
0=25+20t-5t^2
$$

or:

$$
5t^2-20t-25=0
$$

Divide by 5:

$$
t^2-4t-5=0
$$

Factor:

$$
(t-5)(t+1)=0
$$

The physical time is positive:

$$
t=5\ \text{s}
$$

## 27. Galileo's Odd Number Law

For a body falling from rest under constant acceleration, displacement in time \(t\) is:

$$
s=\frac{1}{2}gt^2
$$

Take equal time intervals of length \(\tau\).

Positions after:

$$
\tau,\ 2\tau,\ 3\tau,\ 4\tau
$$

are proportional to:

$$
1^2,\ 2^2,\ 3^2,\ 4^2
$$

that is:

$$
1,\ 4,\ 9,\ 16
$$

Distances covered in successive equal intervals are:

$$
1,\ 4-1,\ 9-4,\ 16-9
$$

So:

$$
1,\ 3,\ 5,\ 7
$$

Thus, distances covered in successive equal time intervals are in the ratio:

$$
1:3:5:7:\cdots
$$

## 28. Stopping Distance

Stopping distance is the distance a vehicle travels after brakes are applied until it stops.

Let:

- initial speed be \(v_0\)
- final speed be \(v=0\)
- braking acceleration be \(-a\), where \(a>0\)
- stopping distance be \(d_s\)

Use:

$$
v^2=v_0^2+2(-a)d_s
$$

Since \(v=0\):

$$
0=v_0^2-2ad_s
$$

Therefore:

$$
d_s=\frac{v_0^2}{2a}
$$

Stopping distance is proportional to the square of initial speed.

If speed is doubled:

$$
d_s \text{ becomes } 4d_s
$$

if braking deceleration is unchanged.

## 29. Reaction Time

Reaction time is the time taken by a person to observe, decide, and act.

Example:

A driver sees an obstacle and presses the brake after a short delay. During this delay, the vehicle continues moving.

### 29.1 Ruler Drop Method

If a ruler falls freely through a distance \(d\) before being caught, then:

$$
d=\frac{1}{2}gt_r^2
$$

where \(t_r\) is reaction time.

So:

$$
t_r=\sqrt{\frac{2d}{g}}
$$

If:

$$
d=21.0\ \text{cm}=0.210\ \text{m}
$$

then:

$$
t_r=\sqrt{\frac{2(0.210)}{9.8}}
$$

$$
t_r=\sqrt{0.04286}
$$

$$
t_r\approx0.21\ \text{s}
$$

## 30. Relative Velocity

Velocity depends on the observer.

Relative velocity is the velocity of one object as seen from another object.

If object A has velocity \(v_A\) and object B has velocity \(v_B\), then velocity of B relative to A is:

$$
v_{BA}=v_B-v_A
$$

Velocity of A relative to B is:

$$
v_{AB}=v_A-v_B
$$

So:

$$
v_{AB}=-v_{BA}
$$

## 31. Relative Velocity In Same Direction

If two cars move in the same direction:

$$
v_A=30\ \text{m s}^{-1}
$$

$$
v_B=20\ \text{m s}^{-1}
$$

then velocity of B relative to A is:

$$
v_{BA}=20-30=-10\ \text{m s}^{-1}
$$

So B appears to move backward at 10 m s^-1 as seen from A.

The separation changes at 10 m s^-1.

## 32. Relative Velocity In Opposite Directions

If A moves right at:

$$
v_A=30\ \text{m s}^{-1}
$$

and B moves left at:

$$
v_B=-20\ \text{m s}^{-1}
$$

then:

$$
v_{BA}=v_B-v_A
$$

$$
v_{BA}=-20-30=-50\ \text{m s}^{-1}
$$

The speed of approach is:

$$
50\ \text{m s}^{-1}
$$

## 33. Worked Example: Bullet And Moving Car

A police van moves at:

$$
30\ \text{km h}^{-1}
$$

A thief's car moves in the same direction at:

$$
192\ \text{km h}^{-1}
$$

The muzzle speed of the bullet relative to the van is:

$$
150\ \text{m s}^{-1}
$$

Convert speeds:

$$
30\ \text{km h}^{-1}=\frac{30\times1000}{3600}=8.33\ \text{m s}^{-1}
$$

$$
192\ \text{km h}^{-1}=\frac{192\times1000}{3600}=53.33\ \text{m s}^{-1}
$$

Bullet speed relative to ground:

$$
v_b=150+8.33=158.33\ \text{m s}^{-1}
$$

Speed of bullet relative to thief's car:

$$
v_{\text{rel}}=158.33-53.33=105\ \text{m s}^{-1}
$$

This is the speed relevant for impact.

Answer:

$$
\boxed{105\ \text{m s}^{-1}}
$$

## 34. Graph Shape Summary

| Motion | \(x-t\) graph | \(v-t\) graph | \(a-t\) graph |
|---|---|---|---|
| rest | horizontal line | zero line | zero line |
| uniform velocity | straight sloping line | horizontal line | zero line |
| uniform acceleration | parabola | straight sloping line | horizontal line |
| increasing acceleration | curve changing more rapidly | curve | not constant |

## 35. Common Conceptual Points

### 35.1 Zero Velocity Does Not Mean Zero Acceleration

At the highest point of a ball thrown upward:

$$
v=0
$$

but:

$$
a=-g
$$

The ball is momentarily at rest but still accelerating downward.

### 35.2 Constant Speed Does Not Always Mean Zero Acceleration

In one-dimensional motion, if direction does not change and speed is constant, acceleration is zero.

But in circular motion, speed may be constant while direction changes, so acceleration is not zero.

This chapter focuses on straight-line motion.

### 35.3 Positive Acceleration Does Not Always Mean Speeding Up

If velocity is negative and acceleration is positive, speed decreases.

Example:

A body moving left while acceleration is right slows down.

### 35.4 Kinematic Equations Need Constant Acceleration

The equations:

$$
v=v_0+at
$$

$$
x=x_0+v_0t+\frac{1}{2}at^2
$$

$$
v^2=v_0^2+2a(x-x_0)
$$

are valid only when acceleration is constant.

## 36. Worked Example: Car Stopping

A car moving at 126 km h^-1 stops in 200 m under uniform retardation. Find the retardation and stopping time.

Convert speed:

$$
126\ \text{km h}^{-1}=126\times\frac{1000}{3600}
$$

$$
=35\ \text{m s}^{-1}
$$

Given:

$$
v_0=35\ \text{m s}^{-1},\quad v=0,\quad x=200\ \text{m}
$$

Use:

$$
v^2=v_0^2+2ax
$$

$$
0=(35)^2+2a(200)
$$

$$
0=1225+400a
$$

$$
a=-3.0625\ \text{m s}^{-2}
$$

Retardation magnitude:

$$
3.06\ \text{m s}^{-2}
$$

Now use:

$$
v=v_0+at
$$

$$
0=35-3.0625t
$$

$$
t=\frac{35}{3.0625}=11.43\ \text{s}
$$

Answer:

$$
\boxed{3.06\ \text{m s}^{-2},\quad 11.4\ \text{s}}
$$

## 37. Worked Example: Ball Thrown Up With Speed 29.4 m s^-1

A ball is thrown upward with initial speed:

$$
u=29.4\ \text{m s}^{-1}
$$

Take:

$$
g=9.8\ \text{m s}^{-2}
$$

and upward as positive.

Then:

$$
a=-9.8\ \text{m s}^{-2}
$$

### 37.1 Direction Of Acceleration

Acceleration is vertically downward throughout the motion.

### 37.2 Velocity And Acceleration At Highest Point

At highest point:

$$
v=0
$$

but:

$$
a=-9.8\ \text{m s}^{-2}
$$

### 37.3 Maximum Height

Use:

$$
v^2=u^2+2as
$$

At top:

$$
0=(29.4)^2+2(-9.8)s
$$

$$
s=\frac{(29.4)^2}{2(9.8)}
$$

$$
s=44.1\ \text{m}
$$

### 37.4 Time To Return To Hand

Time to reach highest point:

$$
v=u+at
$$

$$
0=29.4-9.8t
$$

$$
t=3\ \text{s}
$$

Time to return to same height:

$$
2t=6\ \text{s}
$$

Answer:

$$
\boxed{\text{maximum height}=44.1\ \text{m},\quad \text{total time}=6\ \text{s}}
$$

## 38. Practice Set A: Basics

1. A particle moves from \(x=-3\ \text{m}\) to \(x=7\ \text{m}\). Find displacement.
2. A particle travels 5 m east and 2 m west. Find distance and displacement.
3. A car moves 100 m in 5 s without reversing direction. Find average speed.
4. A particle returns to its starting point after 10 s. What is its average velocity?
5. Can average speed be zero for a moving body?

Answers:

1. \(10\ \text{m}\)
2. distance \(=7\ \text{m}\), displacement \(=3\ \text{m}\) east
3. \(20\ \text{m s}^{-1}\)
4. zero
5. no, unless it does not move

## 39. Practice Set B: Graphs

1. What does slope of \(x-t\) graph represent?
2. What does slope of \(v-t\) graph represent?
3. What does area under \(v-t\) graph represent?
4. What does a horizontal \(x-t\) graph mean?
5. What does a horizontal \(v-t\) graph mean?

Answers:

1. velocity
2. acceleration
3. displacement
4. rest
5. constant velocity

## 40. Practice Set C: Kinematic Equations

### 40.1 Find Final Velocity

A particle starts with:

$$
v_0=4\ \text{m s}^{-1}
$$

and acceleration:

$$
a=2\ \text{m s}^{-2}
$$

for:

$$
t=5\ \text{s}
$$

Then:

$$
v=v_0+at=4+2(5)=14\ \text{m s}^{-1}
$$

### 40.2 Find Displacement

Using the same data:

$$
s=v_0t+\frac{1}{2}at^2
$$

$$
s=4(5)+\frac{1}{2}(2)(5)^2
$$

$$
s=20+25=45\ \text{m}
$$

### 40.3 Find Velocity Without Time

If:

$$
v_0=3\ \text{m s}^{-1},\quad a=2\ \text{m s}^{-2},\quad s=20\ \text{m}
$$

then:

$$
v^2=v_0^2+2as
$$

$$
v^2=9+80=89
$$

$$
v=\sqrt{89}\ \text{m s}^{-1}
$$

## 41. Practice Set D: Relative Velocity

### 41.1 Same Direction

Two cars move in the same direction with speeds 25 m s^-1 and 15 m s^-1.

Relative speed:

$$
25-15=10\ \text{m s}^{-1}
$$

### 41.2 Opposite Directions

Two cars approach each other with speeds 25 m s^-1 and 15 m s^-1.

Relative speed:

$$
25+15=40\ \text{m s}^{-1}
$$

## 42. Common Mistakes

### 42.1 Confusing Distance And Displacement

Distance depends on path.

Displacement depends only on initial and final positions.

### 42.2 Treating Negative Velocity As Slower Velocity

Negative velocity means motion in the negative direction.

It does not automatically mean smaller speed.

Example:

$$
v=-30\ \text{m s}^{-1}
$$

has speed:

$$
30\ \text{m s}^{-1}
$$

### 42.3 Forgetting Sign Of Gravity

If upward is positive:

$$
a=-g
$$

If downward is positive:

$$
a=+g
$$

### 42.4 Using Kinematic Equations For Non-Constant Acceleration

The standard equations are valid only for constant acceleration.

### 42.5 Thinking Velocity Is Zero At Top Means Motion Ends

At the top of vertical motion, velocity is zero only for an instant. Acceleration remains downward, so the object starts moving downward.

## 43. Formula Sheet

### 43.1 Displacement

$$
\Delta x=x_2-x_1
$$

### 43.2 Average Velocity

$$
v_{\text{avg}}=\frac{\Delta x}{\Delta t}
$$

### 43.3 Average Speed

$$
\text{average speed}=\frac{\text{total distance}}{\text{total time}}
$$

### 43.4 Instantaneous Velocity

$$
v=\frac{dx}{dt}
$$

### 43.5 Instantaneous Speed

$$
\text{speed}=|v|
$$

### 43.6 Average Acceleration

$$
a_{\text{avg}}=\frac{\Delta v}{\Delta t}
$$

### 43.7 Instantaneous Acceleration

$$
a=\frac{dv}{dt}
$$

### 43.8 Kinematic Equations

$$
v=v_0+at
$$

$$
x=x_0+v_0t+\frac{1}{2}at^2
$$

$$
v^2=v_0^2+2a(x-x_0)
$$

$$
x-x_0=\frac{v_0+v}{2}t
$$

### 43.9 Free Fall

If upward is positive:

$$
a=-g
$$

If downward is positive:

$$
a=+g
$$

### 43.10 Stopping Distance

$$
d_s=\frac{v_0^2}{2a}
$$

where \(a\) is the magnitude of braking deceleration.

### 43.11 Reaction Time

$$
t_r=\sqrt{\frac{2d}{g}}
$$

### 43.12 Relative Velocity

$$
v_{BA}=v_B-v_A
$$

## 44. Learner Checklist

Before leaving this chapter, make sure you can:

- define position, displacement, and distance
- explain why distance is not always displacement
- calculate average velocity
- calculate average speed
- explain instantaneous velocity as a derivative
- read slope of \(x-t\) graph
- read slope of \(v-t\) graph
- find displacement from area under \(v-t\) graph
- use all three kinematic equations
- solve upward and downward motion under gravity
- calculate stopping distance
- estimate reaction time
- calculate relative velocity
- handle signs consistently

## 45. One Page Revision

Motion in a straight line uses one coordinate:

$$
x
$$

Displacement:

$$
\Delta x=x_2-x_1
$$

Average velocity:

$$
v_{\text{avg}}=\frac{\Delta x}{\Delta t}
$$

Average speed:

$$
\frac{\text{total path length}}{\Delta t}
$$

Instantaneous velocity:

$$
v=\frac{dx}{dt}
$$

Acceleration:

$$
a=\frac{dv}{dt}
$$

Graph meanings:

- slope of \(x-t\): velocity
- slope of \(v-t\): acceleration
- area under \(v-t\): displacement

Uniform acceleration equations:

$$
v=v_0+at
$$

$$
x=x_0+v_0t+\frac{1}{2}at^2
$$

$$
v^2=v_0^2+2a(x-x_0)
$$

Free fall:

$$
a=\pm g
$$

depending on sign convention.

Relative velocity:

$$
v_{BA}=v_B-v_A
$$

