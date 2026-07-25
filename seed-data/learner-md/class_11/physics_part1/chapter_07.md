# Chapter 7 - Gravitation

## 1. Chapter Purpose

Gravitation is the force that connects everyday falling bodies with the motion of planets, moons, satellites, and stars.

The same kind of force that pulls a stone toward Earth also keeps the Moon in orbit around Earth and keeps planets in orbit around the Sun.

This chapter explains how Newton used ideas of force, acceleration, circular motion, and planetary data to build the universal law of gravitation.

By the end of this chapter, you should be able to:

- state Kepler's three laws of planetary motion
- explain the meaning of an ellipse, focus, and semi-major axis
- connect Kepler's area law with conservation of angular momentum
- state Newton's universal law of gravitation
- apply the inverse-square law to point masses
- use superposition for gravitational force due to many masses
- understand why spherical bodies can often be treated as point masses at their centres
- explain the meaning and measurement of the gravitational constant \(G\)
- calculate acceleration due to gravity at Earth's surface
- find how \(g\) changes above and below Earth's surface
- use gravitational potential energy near Earth and far from Earth
- calculate escape speed
- understand satellite speed, time period, and orbital energy
- explain weightlessness in orbit

The main message is:

Gravity is universal, attractive, conservative, and central.

## 2. Why Gravitation Matters

Gravity appears in many familiar situations:

- a stone falls when released
- rain drops fall from clouds
- climbing uphill is harder than moving downhill
- objects thrown upward return to Earth
- the Moon goes around Earth
- Earth goes around the Sun
- artificial satellites stay in orbit

Before Newton, falling bodies and planetary motion were often treated as separate topics.

Newton's achievement was to show that both are explained by the same law.

## 3. Historical Background

Galileo studied falling bodies and showed that, near Earth's surface, bodies fall with the same acceleration when air resistance is negligible.

Early planetary models often placed Earth at the centre. Such a model is called geocentric.

Later, the heliocentric idea placed the Sun near the centre of planetary motion.

Tycho Brahe made highly accurate observations of planetary positions.

Johannes Kepler analyzed those observations and found three laws of planetary motion.

Newton then showed that Kepler's laws could be explained using an inverse-square gravitational force.

This chapter follows that path:

- observations of planetary motion
- Kepler's laws
- Newton's law of gravitation
- consequences for Earth, satellites, and escape

## 4. Kepler's First Law: Law Of Orbits

Kepler's first law states:

Every planet moves in an elliptical orbit with the Sun at one focus of the ellipse.

An ellipse is a closed curve with two fixed points called foci.

For any point on an ellipse, the sum of its distances from the two foci is constant.

The longest line through the ellipse is called the major axis.

Half of the major axis is called the semi-major axis.

The semi-major axis is usually denoted by \(a\).

### 4.1 Special Case: Circle

A circle is a special ellipse in which the two foci coincide at the centre.

For a circular orbit:

$$
a=R
$$

where \(R\) is the radius of the circle.

### 4.2 Perihelion And Aphelion

For a planet orbiting the Sun:

- perihelion is the point closest to the Sun
- aphelion is the point farthest from the Sun

The planet moves faster near perihelion and slower near aphelion.

This speed change is explained by angular momentum conservation.

## 5. Kepler's Second Law: Law Of Areas

Kepler's second law states:

The line joining a planet to the Sun sweeps out equal areas in equal intervals of time.

This means the areal velocity is constant.

If \(\Delta A\) is the small area swept in time \(\Delta t\), then:

$$
\frac{\Delta A}{\Delta t}=\text{constant}
$$

The planet is not moving with constant speed.

It moves faster when it is closer to the Sun and slower when it is farther away.

### 5.1 Connection With Angular Momentum

For a small time interval \(\Delta t\), the displacement is approximately:

$$
\vec{v}\Delta t
$$

The small area swept by radius vector \(\vec{r}\) is approximately the area of a triangle:

$$
\Delta A=\frac{1}{2}|\vec{r}\times\vec{v}\Delta t|
$$

So:

$$
\frac{\Delta A}{\Delta t}=\frac{1}{2}|\vec{r}\times\vec{v}|
$$

Since momentum is:

$$
\vec{p}=m\vec{v}
$$

angular momentum is:

$$
\vec{L}=\vec{r}\times\vec{p}
$$

Therefore:

$$
\vec{r}\times\vec{v}=\frac{\vec{L}}{m}
$$

Thus:

$$
\frac{\Delta A}{\Delta t}=\frac{L}{2m}
$$

If angular momentum \(L\) is constant, areal velocity is constant.

Gravity is a central force, so the torque about the Sun is zero:

$$
\vec{\tau}=\vec{r}\times\vec{F}=0
$$

Therefore:

$$
\frac{d\vec{L}}{dt}=0
$$

and angular momentum is conserved.

This gives Kepler's second law.

## 6. Kepler's Third Law: Law Of Periods

Kepler's third law states:

The square of the time period of revolution of a planet is proportional to the cube of the semi-major axis of its orbit.

Mathematically:

$$
T^2\propto a^3
$$

or:

$$
\frac{T^2}{a^3}=\text{constant}
$$

For nearly circular orbits:

$$
T^2\propto R^3
$$

where \(R\) is the orbital radius.

### 6.1 Meaning Of The Law

Outer planets have larger orbital radii.

According to Kepler's third law, they also have much longer time periods.

If a planet is farther from the Sun, it takes more time to complete one revolution.

## 7. Worked Example: Speed At Perihelion And Aphelion

Let a planet have speed \(v_P\) at perihelion, where its distance from the Sun is \(r_P\).

At aphelion, let speed be \(v_A\), and distance from the Sun be \(r_A\).

At both perihelion and aphelion, the velocity is perpendicular to the radius vector.

Angular momentum at perihelion:

$$
L_P=mr_Pv_P
$$

Angular momentum at aphelion:

$$
L_A=mr_Av_A
$$

By conservation of angular momentum:

$$
mr_Pv_P=mr_Av_A
$$

Cancel \(m\):

$$
r_Pv_P=r_Av_A
$$

Therefore:

$$
\frac{v_P}{v_A}=\frac{r_A}{r_P}
$$

Since:

$$
r_A>r_P
$$

we get:

$$
v_P>v_A
$$

The planet is faster when closer to the Sun.

## 8. Newton's Universal Law Of Gravitation

Newton's universal law states:

Every particle in the universe attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between them.

For two point masses \(m_1\) and \(m_2\) separated by distance \(r\), the magnitude of the gravitational force is:

$$
F=G\frac{m_1m_2}{r^2}
$$

where \(G\) is the universal gravitational constant.

### 8.1 Direction Of Force

Gravitational force is always attractive.

The force on \(m_2\) due to \(m_1\) is directed toward \(m_1\).

The force on \(m_1\) due to \(m_2\) is directed toward \(m_2\).

These two forces are equal in magnitude and opposite in direction:

$$
\vec{F}_{12}=-\vec{F}_{21}
$$

This is consistent with Newton's third law.

### 8.2 Vector Form

Let \(\hat{r}\) be the unit vector from mass \(m_1\) to mass \(m_2\).

The force on \(m_2\) due to \(m_1\) is:

$$
\vec{F}_{21}=-G\frac{m_1m_2}{r^2}\hat{r}
$$

The negative sign shows attraction toward \(m_1\).

## 9. Important Features Of Gravitational Force

Gravitational force has these properties:

- it is always attractive
- it acts along the line joining the two masses
- it follows inverse-square dependence
- it obeys the principle of superposition
- it is a conservative force
- it is a central force for point masses
- it has infinite range, though its strength decreases rapidly with distance

### 9.1 Inverse-Square Meaning

If the distance between two masses becomes twice:

$$
r\to 2r
$$

then the force becomes:

$$
F\to \frac{F}{4}
$$

If the distance becomes three times:

$$
r\to 3r
$$

then:

$$
F\to \frac{F}{9}
$$

Small changes in distance can matter greatly.

## 10. Principle Of Superposition

If many masses exert gravitational force on a particle, the net force is the vector sum of the individual forces.

If forces on a mass are \(\vec{F}_1,\vec{F}_2,\ldots,\vec{F}_n\), then:

$$
\vec{F}_{net}=\vec{F}_1+\vec{F}_2+\cdots+\vec{F}_n
$$

Using summation notation:

$$
\vec{F}_{net}=\sum_{i=1}^{n}\vec{F}_i
$$

Each gravitational force is calculated as if the other masses were not present, then all force vectors are added.

## 11. Worked Example: Three Equal Masses Around A Centre

Three equal masses are fixed at the vertices of an equilateral triangle.

A fourth mass is placed at the centroid.

The distances from the centroid to all three vertices are equal.

The gravitational forces on the central mass have equal magnitudes and are separated symmetrically by \(120\text{ deg}\).

Their vector sum is zero:

$$
\vec{F}_{net}=0
$$

So the mass at the centroid experiences no net gravitational force.

If one vertex mass is doubled, symmetry is broken.

The net force is then directed toward the doubled mass.

The key lesson:

Symmetry can often replace long vector calculation.

## 12. Gravitational Force Due To Spherical Bodies

Newton's law is stated for point masses.

Real bodies like Earth are extended bodies.

For spherically symmetric bodies, two important results simplify the problem.

### 12.1 Point Outside A Uniform Spherical Shell

A uniform spherical shell attracts an external point mass as if the entire mass of the shell were concentrated at the centre.

The same is true for a solid sphere with spherically symmetric density.

Thus, for a mass \(m\) outside Earth:

$$
F=G\frac{M_E m}{r^2}
$$

where \(r\) is measured from Earth's centre.

### 12.2 Point Inside A Uniform Spherical Shell

A uniform spherical shell exerts zero net gravitational force on a point mass located anywhere inside the shell.

This result is very important for finding how \(g\) changes below Earth's surface.

### 12.3 Point Inside A Uniform Solid Sphere

For a point inside a uniform solid sphere, only the mass inside the radius of that point contributes to gravitational attraction.

The outer spherical shells exert zero net force.

## 13. Gravitational Constant

The gravitational constant \(G\) appears in Newton's law:

$$
F=G\frac{m_1m_2}{r^2}
$$

Its accepted value is approximately:

$$
G=6.67\times10^{-11}\text{ N m}^2\text{ kg}^{-2}
$$

The value is very small.

That is why gravitational force between ordinary laboratory objects is extremely weak.

It becomes important for large masses such as planets, stars, and moons.

### 13.1 Cavendish Experiment

Henry Cavendish measured \(G\) using a torsion balance.

Small lead spheres were attached to a light rod suspended by a thin wire.

Large lead spheres were brought near the small spheres.

The gravitational attraction produced a small torque that twisted the wire.

When the restoring torque of the wire balanced the gravitational torque, the angle of twist gave the gravitational force.

From the measured force, known masses, and known separation, \(G\) could be found.

### 13.2 Why This Was Important

Once \(G\) is known, Earth's mass can be calculated using:

$$
g=\frac{GM_E}{R_E^2}
$$

So:

$$
M_E=\frac{gR_E^2}{G}
$$

This is why Cavendish's experiment is sometimes described as weighing Earth.

## 14. Acceleration Due To Gravity At Earth's Surface

At Earth's surface, a body of mass \(m\) experiences gravitational force:

$$
F=G\frac{M_E m}{R_E^2}
$$

But weight is also:

$$
F=mg
$$

Equating:

$$
mg=G\frac{M_E m}{R_E^2}
$$

Cancel \(m\):

$$
g=\frac{GM_E}{R_E^2}
$$

Important point:

The acceleration due to gravity at Earth's surface is independent of the mass of the falling body.

That is why, without air resistance, all bodies fall with the same acceleration near Earth's surface.

## 15. Value Of \(g\)

Near Earth's surface:

$$
g\approx 9.8\text{ m s}^{-2}
$$

This value is approximate because Earth is not a perfect sphere and it rotates.

The value of \(g\) changes slightly with:

- altitude
- depth
- latitude
- local geology
- Earth's rotation

In this chapter, Earth is usually treated as a uniform sphere unless stated otherwise.

## 16. Variation Of \(g\) Above Earth's Surface

At height \(h\) above Earth's surface, distance from Earth's centre is:

$$
r=R_E+h
$$

Therefore:

$$
g(h)=\frac{GM_E}{(R_E+h)^2}
$$

At the surface:

$$
g=\frac{GM_E}{R_E^2}
$$

Divide:

$$
\frac{g(h)}{g}=\frac{R_E^2}{(R_E+h)^2}
$$

So:

$$
g(h)=g\left(\frac{R_E}{R_E+h}\right)^2
$$

For small heights \(h<<R_E\), use binomial approximation:

$$
g(h)\approx g\left(1-\frac{2h}{R_E}\right)
$$

Thus \(g\) decreases with height.

## 17. Variation Of \(g\) Below Earth's Surface

Let a point be at depth \(d\) below Earth's surface.

Its distance from Earth's centre is:

$$
r=R_E-d
$$

Assume Earth has uniform density.

Only the mass inside radius \(r\) contributes to gravity at that point.

Since mass of a sphere is proportional to volume:

$$
\frac{M_r}{M_E}=\frac{r^3}{R_E^3}
$$

So:

$$
M_r=M_E\frac{r^3}{R_E^3}
$$

Gravity at radius \(r\):

$$
g_r=\frac{GM_r}{r^2}
$$

Substitute \(M_r\):

$$
g_r=\frac{G}{r^2}\left(M_E\frac{r^3}{R_E^3}\right)
$$

$$
g_r=\frac{GM_Er}{R_E^3}
$$

Using \(r=R_E-d\):

$$
g(d)=\frac{GM_E(R_E-d)}{R_E^3}
$$

Since:

$$
g=\frac{GM_E}{R_E^2}
$$

we get:

$$
g(d)=g\left(1-\frac{d}{R_E}\right)
$$

Thus \(g\) decreases linearly with depth in the uniform-density model.

At the centre:

$$
d=R_E
$$

so:

$$
g(d)=0
$$

## 18. Where Is \(g\) Maximum

In this model, \(g\) is maximum at Earth's surface.

Above the surface, \(g\) decreases with inverse square of distance.

Below the surface, \(g\) decreases because less mass lies inside the radius.

So:

- \(g\) decreases upward
- \(g\) decreases downward
- \(g\) is maximum at the surface

## 19. Weight

Weight is the gravitational force on a body.

Near Earth's surface:

$$
W=mg
$$

At height \(h\):

$$
W(h)=mg(h)
$$

At depth \(d\):

$$
W(d)=mg(d)
$$

Mass remains the same, but weight changes if \(g\) changes.

## 20. Worked Example: Weight At Height

A body weighs \(63\text{ N}\) on Earth's surface.

Find its weight at height:

$$
h=\frac{R_E}{2}
$$

Use:

$$
g(h)=g\left(\frac{R_E}{R_E+h}\right)^2
$$

Substitute \(h=R_E/2\):

$$
g(h)=g\left(\frac{R_E}{R_E+R_E/2}\right)^2
$$

$$
g(h)=g\left(\frac{R_E}{3R_E/2}\right)^2
$$

$$
g(h)=g\left(\frac{2}{3}\right)^2
$$

$$
g(h)=\frac{4}{9}g
$$

Weight is proportional to \(g\), so:

$$
W(h)=\frac{4}{9}(63)
$$

$$
W(h)=28\text{ N}
$$

## 21. Worked Example: Weight At Depth

A body weighs \(250\text{ N}\) on Earth's surface.

Find its weight halfway down to Earth's centre.

Halfway down means:

$$
d=\frac{R_E}{2}
$$

Use:

$$
g(d)=g\left(1-\frac{d}{R_E}\right)
$$

Substitute:

$$
g(d)=g\left(1-\frac{1}{2}\right)
$$

$$
g(d)=\frac{g}{2}
$$

Therefore:

$$
W(d)=\frac{250}{2}=125\text{ N}
$$

## 22. Gravitational Potential Energy Near Earth

Near Earth's surface, if height changes are small compared with Earth's radius, gravitational force is nearly constant.

In that case:

$$
U=mgh
$$

This expression is valid when:

$$
h<<R_E
$$

The change in potential energy between heights \(h_1\) and \(h_2\) is:

$$
\Delta U=mg(h_2-h_1)
$$

Only change in potential energy is physically important.

The zero level can be chosen conveniently.

## 23. Gravitational Potential Energy Far From Earth

For large distances, \(g\) is not constant.

For a body of mass \(m\) at distance \(r\) from Earth's centre, gravitational potential energy is:

$$
U(r)=-G\frac{M_E m}{r}
$$

This formula uses the convention:

$$
U(\infty)=0
$$

The value is negative at finite \(r\).

Why negative?

Because work must be supplied to take the body from distance \(r\) to infinity.

The body is bound to Earth if total mechanical energy is negative.

### 23.1 Potential Energy Of Two Masses

For two masses \(m_1\) and \(m_2\) separated by distance \(r\):

$$
U=-G\frac{m_1m_2}{r}
$$

For a system of many particles, total gravitational potential energy is the sum over all distinct pairs.

Each pair is counted once.

## 24. Gravitational Potential

Gravitational potential at a point is potential energy per unit mass placed at that point.

If a mass \(m\) has potential energy \(U\), gravitational potential \(V\) is:

$$
V=\frac{U}{m}
$$

For Earth:

$$
V(r)=-G\frac{M_E}{r}
$$

The unit is:

$$
\text{J kg}^{-1}
$$

Gravitational field strength is related to how potential changes with position.

## 25. Worked Example: Potential Energy Of Four Masses At A Square

Four equal masses \(m\) are placed at the corners of a square of side \(l\).

Total gravitational potential energy is the sum for all pairs.

There are four side pairs, each separated by \(l\).

There are two diagonal pairs, each separated by:

$$
l\sqrt{2}
$$

Energy from side pairs:

$$
U_s=4\left(-G\frac{m^2}{l}\right)
$$

Energy from diagonal pairs:

$$
U_d=2\left(-G\frac{m^2}{l\sqrt{2}}\right)
$$

Total:

$$
U=U_s+U_d
$$

$$
U=-\frac{4Gm^2}{l}-\frac{2Gm^2}{l\sqrt{2}}
$$

Since:

$$
\frac{2}{\sqrt{2}}=\sqrt{2}
$$

we get:

$$
U=-\frac{Gm^2}{l}(4+\sqrt{2})
$$

Potential at the centre due to one mass:

$$
V_1=-G\frac{m}{r}
$$

Distance from centre to a corner:

$$
r=\frac{l}{\sqrt{2}}
$$

Potential due to four masses:

$$
V=4\left(-G\frac{m}{l/\sqrt{2}}\right)
$$

$$
V=-\frac{4\sqrt{2}Gm}{l}
$$

## 26. Escape Speed

Escape speed is the minimum speed with which a body must be launched so that it can reach infinity with zero speed.

It is called a speed, not a velocity, because direction does not matter in the ideal calculation when air resistance and other bodies are ignored.

At Earth's surface, initial total energy is:

$$
E_i=\frac{1}{2}mv_e^2-G\frac{M_E m}{R_E}
$$

At infinity, for minimum escape:

$$
E_f=0
$$

By conservation of energy:

$$
\frac{1}{2}mv_e^2-G\frac{M_E m}{R_E}=0
$$

So:

$$
\frac{1}{2}mv_e^2=G\frac{M_E m}{R_E}
$$

Cancel \(m\):

$$
v_e^2=\frac{2GM_E}{R_E}
$$

Therefore:

$$
v_e=\sqrt{\frac{2GM_E}{R_E}}
$$

Since:

$$
g=\frac{GM_E}{R_E^2}
$$

we have:

$$
GM_E=gR_E^2
$$

So:

$$
v_e=\sqrt{2gR_E}
$$

For Earth:

$$
v_e\approx 11.2\text{ km s}^{-1}
$$

## 27. Escape Speed From Height

At distance \(r=R_E+h\) from Earth's centre:

$$
v_e=\sqrt{\frac{2GM_E}{R_E+h}}
$$

Escape speed decreases with height.

At larger \(r\), the body is less tightly bound to Earth.

### 27.1 Dependence Of Escape Speed

Escape speed from a planet depends on:

- mass of the planet
- radius or starting distance from centre

It does not depend on:

- mass of the launched body
- direction of launch in the ideal energy calculation

It can be affected in real life by atmosphere, rotation, and other bodies.

## 28. Why The Moon Has Almost No Atmosphere

Escape speed from the Moon is much smaller than from Earth.

Approximate lunar escape speed:

$$
v_e\approx 2.3\text{ km s}^{-1}
$$

Gas molecules can more easily escape the Moon's gravitational attraction.

Over long time scales, this makes it difficult for the Moon to retain a significant atmosphere.

## 29. Worked Example: Final Speed Far From Earth

A body is launched from Earth's surface with speed three times Earth's escape speed.

Find its speed far away from Earth, ignoring other bodies.

Initial speed:

$$
v_i=3v_e
$$

Initial total energy:

$$
E_i=\frac{1}{2}m(3v_e)^2-G\frac{M_E m}{R_E}
$$

But:

$$
\frac{1}{2}mv_e^2=G\frac{M_E m}{R_E}
$$

So:

$$
E_i=\frac{9}{2}mv_e^2-\frac{1}{2}mv_e^2
$$

$$
E_i=4mv_e^2
$$

At infinity:

$$
E_f=\frac{1}{2}mv_f^2
$$

Equate:

$$
\frac{1}{2}mv_f^2=4mv_e^2
$$

Cancel \(m\):

$$
v_f^2=8v_e^2
$$

Therefore:

$$
v_f=2\sqrt{2}v_e
$$

Using \(v_e=11.2\text{ km s}^{-1}\):

$$
v_f\approx 31.7\text{ km s}^{-1}
$$

## 30. Earth Satellites

An Earth satellite is an object orbiting Earth.

The Moon is Earth's natural satellite.

Artificial satellites are used for communication, weather observation, navigation, scientific measurement, and imaging.

For a satellite in circular orbit at height \(h\), orbital radius is:

$$
r=R_E+h
$$

The required centripetal force is:

$$
F_c=\frac{mv^2}{r}
$$

Gravity provides this centripetal force:

$$
G\frac{M_E m}{r^2}=\frac{mv^2}{r}
$$

Cancel \(m\) and one \(r\):

$$
v^2=\frac{GM_E}{r}
$$

So orbital speed is:

$$
v=\sqrt{\frac{GM_E}{r}}
$$

Using \(r=R_E+h\):

$$
v=\sqrt{\frac{GM_E}{R_E+h}}
$$

Orbital speed decreases as height increases.

## 31. Time Period Of A Circular Satellite

The satellite travels one circumference in one time period:

$$
T=\frac{2\pi r}{v}
$$

Substitute:

$$
v=\sqrt{\frac{GM_E}{r}}
$$

Then:

$$
T=2\pi r\sqrt{\frac{r}{GM_E}}
$$

So:

$$
T=2\pi\sqrt{\frac{r^3}{GM_E}}
$$

Squaring:

$$
T^2=\frac{4\pi^2}{GM_E}r^3
$$

This is Kepler's third law for satellites around Earth.

Using \(r=R_E+h\):

$$
T^2=\frac{4\pi^2}{GM_E}(R_E+h)^3
$$

## 32. Low Earth Orbit Approximation

For a satellite very close to Earth's surface:

$$
h<<R_E
$$

so:

$$
r\approx R_E
$$

Orbital speed becomes:

$$
v\approx \sqrt{\frac{GM_E}{R_E}}
$$

Since:

$$
g=\frac{GM_E}{R_E^2}
$$

we get:

$$
\frac{GM_E}{R_E}=gR_E
$$

So:

$$
v\approx \sqrt{gR_E}
$$

The time period becomes:

$$
T\approx 2\pi\sqrt{\frac{R_E}{g}}
$$

Using \(R_E\approx 6.4\times10^6\text{ m}\) and \(g\approx 9.8\text{ m s}^{-2}\), this gives about \(85\) minutes.

## 33. Geostationary Satellite

A geostationary satellite appears fixed over one point on Earth's equator.

For this to happen:

- its orbit must be circular
- its orbit must be in Earth's equatorial plane
- it must revolve in the same direction as Earth's rotation
- its time period must equal Earth's rotational period

The approximate time period is:

$$
T\approx 24\text{ h}
$$

Such satellites are useful for communication and broadcasting because ground antennas can point in a fixed direction.

## 34. Energy Of A Circular Orbiting Satellite

For a satellite of mass \(m\) in circular orbit of radius \(r\):

$$
v^2=\frac{GM_E}{r}
$$

Kinetic energy:

$$
K=\frac{1}{2}mv^2
$$

Substitute \(v^2\):

$$
K=\frac{1}{2}m\frac{GM_E}{r}
$$

So:

$$
K=\frac{GM_E m}{2r}
$$

Potential energy:

$$
U=-\frac{GM_E m}{r}
$$

Total energy:

$$
E=K+U
$$

$$
E=\frac{GM_E m}{2r}-\frac{GM_E m}{r}
$$

$$
E=-\frac{GM_E m}{2r}
$$

Important relation:

$$
E=\frac{U}{2}
$$

and:

$$
K=-\frac{U}{2}
$$

Total energy is negative, so the satellite is bound to Earth.

## 35. Bound And Unbound Motion

With potential energy zero at infinity:

- negative total energy means bound orbit
- zero total energy means just escapes with zero speed at infinity
- positive total energy means escapes with nonzero speed at infinity

For a circular satellite:

$$
E=-\frac{GM_E m}{2r}<0
$$

So a circular satellite is bound.

## 36. Raising A Satellite To A Higher Orbit

For circular orbit:

$$
E=-\frac{GM_E m}{2r}
$$

If orbital radius increases, \(r\) becomes larger.

The total energy becomes less negative.

Therefore energy must be supplied to move a satellite from a lower orbit to a higher circular orbit.

Kinetic energy decreases in the higher orbit because:

$$
K=\frac{GM_E m}{2r}
$$

Potential energy increases because it becomes less negative:

$$
U=-\frac{GM_E m}{r}
$$

This can feel surprising:

A higher circular orbit has lower speed but higher total energy.

## 37. Worked Example: Energy Needed To Escape From Orbit

A satellite of mass \(m\) is in circular orbit of radius \(r\).

Total energy in orbit:

$$
E=-\frac{GM_E m}{2r}
$$

To escape with zero speed at infinity, final energy must be:

$$
E_f=0
$$

Energy required:

$$
\Delta E=E_f-E
$$

$$
\Delta E=0-\left(-\frac{GM_E m}{2r}\right)
$$

Therefore:

$$
\Delta E=\frac{GM_E m}{2r}
$$

This equals the kinetic energy of the satellite in that circular orbit.

## 38. Weightlessness In A Satellite

An astronaut in orbit feels weightless.

This is not because gravity is zero.

At common satellite heights, Earth's gravitational field is still significant.

The astronaut feels weightless because both the astronaut and the spacecraft are falling around Earth together.

They have the same acceleration due to gravity.

There is no normal reaction from the floor in the usual standing sense.

Apparent weight is the normal reaction.

If the normal reaction is zero, apparent weight is zero.

Thus weightlessness in orbit is a free-fall effect.

## 39. Gravitational Field And Tides

The gravitational force of the Sun on Earth is stronger than the Moon's force on Earth.

However, tides depend strongly on how much the gravitational field changes across Earth's diameter.

This is called the tidal effect.

The Moon is much closer to Earth than the Sun.

Because of this closeness, the Moon's gravitational pull changes more sharply across Earth.

So the Moon produces stronger tides than the Sun.

## 40. Gravitational Shielding

Electrical forces can be shielded in some situations using conductors.

Gravity cannot be shielded in this way.

A spherical shell produces zero gravitational field at points inside due to the shell itself.

But it does not block the gravitational field due to masses outside the shell.

There is no known material shield that cancels gravity the way conductors can shield electrostatic effects.

## 41. Common Mistakes

### 41.1 Thinking Gravity Is Only Near Earth

Gravity acts between all masses.

It is weak for ordinary masses, but it is not limited to Earth.

### 41.2 Forgetting The Square In The Inverse-Square Law

The force varies as:

$$
F\propto \frac{1}{r^2}
$$

It does not vary as \(1/r\).

### 41.3 Using \(mgh\) At Very Large Heights

The expression:

$$
U=mgh
$$

is an approximation for small heights near Earth's surface.

For large distances, use:

$$
U=-G\frac{M_E m}{r}
$$

### 41.4 Thinking Escape Speed Depends On Body Mass

The mass of the escaping body cancels out.

Escape speed from a planet does not depend on the mass of the launched body.

### 41.5 Saying Weightlessness Means No Gravity

Weightlessness in orbit means zero apparent weight, not zero gravitational force.

Gravity is the force that keeps the astronaut and satellite in orbit.

### 41.6 Forgetting That Potential Energy Is Negative

When \(U(\infty)=0\), gravitational potential energy is negative at finite distance:

$$
U=-G\frac{Mm}{r}
$$

This sign is essential in escape and satellite energy problems.

### 41.7 Confusing Orbital Speed And Escape Speed

For a circular orbit at radius \(r\):

$$
v_o=\sqrt{\frac{GM}{r}}
$$

Escape speed from the same radius is:

$$
v_e=\sqrt{\frac{2GM}{r}}
$$

Therefore:

$$
v_e=\sqrt{2}v_o
$$

## 42. Formula Sheet

### 42.1 Newton's Law Of Gravitation

$$
F=G\frac{m_1m_2}{r^2}
$$

$$
G=6.67\times10^{-11}\text{ N m}^2\text{ kg}^{-2}
$$

### 42.2 Superposition

$$
\vec{F}_{net}=\sum_i\vec{F}_i
$$

### 42.3 Acceleration Due To Gravity

At Earth's surface:

$$
g=\frac{GM_E}{R_E^2}
$$

At height \(h\):

$$
g(h)=g\left(\frac{R_E}{R_E+h}\right)^2
$$

For \(h<<R_E\):

$$
g(h)\approx g\left(1-\frac{2h}{R_E}\right)
$$

At depth \(d\), using uniform-density model:

$$
g(d)=g\left(1-\frac{d}{R_E}\right)
$$

### 42.4 Potential Energy And Potential

Near surface:

$$
U=mgh
$$

General two-body form:

$$
U=-G\frac{Mm}{r}
$$

Gravitational potential:

$$
V=-G\frac{M}{r}
$$

### 42.5 Escape Speed

From distance \(r\):

$$
v_e=\sqrt{\frac{2GM}{r}}
$$

From Earth's surface:

$$
v_e=\sqrt{\frac{2GM_E}{R_E}}=\sqrt{2gR_E}
$$

### 42.6 Satellite Motion

Orbital speed:

$$
v=\sqrt{\frac{GM_E}{r}}
$$

Time period:

$$
T=2\pi\sqrt{\frac{r^3}{GM_E}}
$$

Kepler form:

$$
T^2=\frac{4\pi^2}{GM_E}r^3
$$

### 42.7 Satellite Energy

Kinetic energy:

$$
K=\frac{GM_E m}{2r}
$$

Potential energy:

$$
U=-\frac{GM_E m}{r}
$$

Total energy:

$$
E=-\frac{GM_E m}{2r}
$$

Energy needed to escape from circular orbit:

$$
\Delta E=\frac{GM_E m}{2r}
$$

## 43. Practice Set A: Kepler's Laws

1. State Kepler's first law.

2. What is the semi-major axis of an ellipse?

3. Why does a planet move faster near perihelion?

4. If a planet's orbital radius is four times Earth's orbital radius, estimate its period in Earth years for a circular orbit around the Sun.

5. Which conservation law explains Kepler's second law?

### 43.1 Answers

1. Planets move in elliptical orbits with the Sun at one focus.

2. It is half the major axis.

3. Angular momentum is conserved, so speed increases when distance from the Sun decreases.

4. \(T^2\propto R^3\), so \(T^2=4^3=64\), hence \(T=8\) years.

5. Conservation of angular momentum.

## 44. Practice Set B: Gravitational Force

1. Two \(5\text{ kg}\) masses are \(2\text{ m}\) apart. Write the formula for force between them.

2. If distance between two masses is doubled, what happens to gravitational force?

3. If both masses are doubled and distance is unchanged, what happens to gravitational force?

4. Why is gravitational force between classroom objects difficult to notice?

5. What is the direction of gravitational force between two point masses?

### 44.1 Answers

1. \(F=G(5)(5)/2^2\)

2. It becomes one-fourth.

3. It becomes four times.

4. \(G\) is extremely small.

5. Along the line joining the masses, attractive in nature.

## 45. Practice Set C: Variation Of \(g\)

1. Write the formula for \(g\) at height \(h\).

2. Write the approximate formula for \(g(h)\) when \(h<<R_E\).

3. Write the formula for \(g\) at depth \(d\) in the uniform-density model.

4. Where is \(g\) maximum in this model?

5. A body weighs \(100\text{ N}\) on Earth's surface. What is its weight at depth \(R_E/4\)?

### 45.1 Answers

1. \(g(h)=g(R_E/(R_E+h))^2\)

2. \(g(h)\approx g(1-2h/R_E)\)

3. \(g(d)=g(1-d/R_E)\)

4. At Earth's surface.

5. \(W=100(1-1/4)=75\text{ N}\)

## 46. Practice Set D: Potential Energy And Escape

1. Why is gravitational potential energy negative when zero is chosen at infinity?

2. Derive escape speed from Earth's surface.

3. Does escape speed depend on mass of the launched body?

4. If a body is launched at exactly escape speed, what is its speed at infinity?

5. Which formula should be used far from Earth: \(mgh\) or \(-GMm/r\)?

### 46.1 Answers

1. Work must be supplied to separate the masses to infinity.

2. Use \(\frac{1}{2}mv_e^2=GM_E m/R_E\), giving \(v_e=\sqrt{2GM_E/R_E}\).

3. No.

4. Zero, in the ideal minimum case.

5. \(-GMm/r\)

## 47. Practice Set E: Satellites

1. Derive orbital speed of a circular satellite.

2. How does satellite speed change when orbital radius increases?

3. What is the total energy of a circular satellite?

4. Why is the total energy of a bound satellite negative?

5. Why does an astronaut in orbit feel weightless?

### 47.1 Answers

1. Equate \(GM_E m/r^2=mv^2/r\), giving \(v=\sqrt{GM_E/r}\).

2. It decreases.

3. \(E=-GM_E m/(2r)\)

4. Zero energy corresponds to escape to infinity; a bound orbit has less than that.

5. Astronaut and spacecraft are in free fall together, so apparent weight is zero.

## 48. Learner Checklist

You are ready for this chapter when you can:

- state all three Kepler laws
- explain why planetary speed changes in an elliptical orbit
- connect area law with angular momentum conservation
- use \(F=Gm_1m_2/r^2\)
- apply superposition for gravitational forces
- explain why a spherical body can act like a point mass from outside
- state the shell theorem results used in this chapter
- write the value and unit of \(G\)
- derive \(g=GM_E/R_E^2\)
- calculate \(g(h)\)
- calculate \(g(d)\)
- explain why \(g\) is maximum at the surface in the simplified model
- use \(U=mgh\) only near Earth's surface
- use \(U=-GMm/r\) for large distances
- derive escape speed
- explain why escape speed is independent of launched mass
- derive orbital speed of a circular satellite
- derive satellite time period
- calculate satellite energy
- explain why satellite total energy is negative
- explain weightlessness as free fall

## 49. One Page Revision

Kepler's laws:

- planets move in ellipses with the Sun at one focus
- radius vector sweeps equal areas in equal times
- \(T^2\propto a^3\)

Newton's law of gravitation:

$$
F=G\frac{m_1m_2}{r^2}
$$

Gravity is attractive and central.

For many masses:

$$
\vec{F}_{net}=\sum_i\vec{F}_i
$$

At Earth's surface:

$$
g=\frac{GM_E}{R_E^2}
$$

At height:

$$
g(h)=g\left(\frac{R_E}{R_E+h}\right)^2
$$

At depth:

$$
g(d)=g\left(1-\frac{d}{R_E}\right)
$$

Potential energy near surface:

$$
U=mgh
$$

General gravitational potential energy:

$$
U=-G\frac{Mm}{r}
$$

Escape speed:

$$
v_e=\sqrt{\frac{2GM}{r}}
$$

From Earth's surface:

$$
v_e=\sqrt{2gR_E}
$$

Circular orbital speed:

$$
v=\sqrt{\frac{GM_E}{r}}
$$

Time period:

$$
T=2\pi\sqrt{\frac{r^3}{GM_E}}
$$

Satellite energies:

$$
K=\frac{GM_E m}{2r}
$$

$$
U=-\frac{GM_E m}{r}
$$

$$
E=-\frac{GM_E m}{2r}
$$

Weightlessness in orbit is not absence of gravity. It is free fall with zero normal reaction.
