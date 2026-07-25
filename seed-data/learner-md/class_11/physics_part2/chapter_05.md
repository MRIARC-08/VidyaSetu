# Chapter 5: Oscillations
### NCERT Class 11 - Physics Part 2

---

## Chapter Purpose

Oscillations are repeated to-and-fro motions about an equilibrium position. This chapter builds the language and mathematics needed to describe such motion, especially simple harmonic motion.

You will learn:

1. the difference between periodic and oscillatory motion,
2. the meaning of period, frequency, amplitude, phase, and displacement,
3. why simple harmonic motion has sinusoidal displacement,
4. how SHM is related to uniform circular motion,
5. how velocity, acceleration, force, and energy behave in SHM,
6. how springs and pendulums execute SHM approximately,
7. why real oscillations get damped,
8. how forced oscillations and resonance occur.

---

## Chapter Map

| Section | Main Idea |
| --- | --- |
| Periodic motion | motion that repeats after equal intervals |
| Oscillatory motion | to-and-fro motion about a mean position |
| SHM | sinusoidal motion with restoring force proportional to displacement |
| Circular-motion link | projection of uniform circular motion is SHM |
| Velocity and acceleration | velocity is maximum at mean position; acceleration points toward mean |
| Force law | `F = -kx` produces SHM |
| Energy | kinetic and potential energy interchange while total energy remains constant |
| Spring and pendulum | important physical systems executing approximate SHM |
| Damping | amplitude decreases due to dissipative forces |
| Forced oscillation | external periodic force maintains oscillation |
| Resonance | amplitude becomes large when driving frequency matches natural frequency |

---

# Part 1: Periodic And Oscillatory Motion

## Periodic Motion

A motion that repeats itself after equal intervals of time is called periodic motion.

Examples:

| Example | Why Periodic |
| --- | --- |
| Earth revolving around the Sun | repeats after one year |
| second hand of a clock | repeats after 60 seconds |
| bouncing ball under ideal repeated conditions | height-time pattern repeats |
| alternating current voltage | repeats in sign and magnitude |

---

## Oscillatory Motion

Oscillatory motion is repeated to-and-fro motion about a mean or equilibrium position.

Examples:

| Example | Mean Position |
| --- | --- |
| swing | lowest central position |
| simple pendulum | vertical position |
| spring-block system | unstretched equilibrium position |
| vibrating string | straight resting position |

---

## Periodic Versus Oscillatory

Every oscillatory motion is periodic, but every periodic motion is not oscillatory.

### Example

Uniform circular motion is periodic because it repeats after each revolution, but it is not to-and-fro about a mean position. Therefore, it is not oscillatory.

---

## Equilibrium Position

The equilibrium position is where the net force on the body is zero.

If the body is displaced slightly, a restoring force tends to bring it back toward equilibrium.

Oscillations occur when:

1. a stable equilibrium position exists,
2. a restoring force acts toward it,
3. the body has inertia and overshoots the mean position.

---

# Part 2: Period, Frequency, And Angular Frequency

## Period

The period `T` is the smallest time after which the motion repeats.

SI unit:

```text
second, s
```

---

## Frequency

Frequency is the number of repetitions per unit time.

```text
nu = 1/T
```

SI unit:

```text
hertz, Hz
```

```text
1 Hz = 1 oscillation per second
```

---

## Angular Frequency

Angular frequency is:

```text
omega = 2 pi/T
```

Since:

```text
nu = 1/T
```

we also have:

```text
omega = 2 pi nu
```

SI unit:

```text
rad s^-1
```

---

## Example: Human Heart

If the heart beats `75` times per minute:

```text
frequency = 75/60 s^-1
frequency = 1.25 Hz
```

Period:

```text
T = 1/1.25
T = 0.8 s
```

---

# Part 3: Displacement In Oscillations

## Meaning Of Displacement

In oscillations, displacement means the changing quantity measured from equilibrium.

It may be:

| System | Displacement Variable |
| --- | --- |
| spring-block | position `x` from mean position |
| simple pendulum | angular displacement `theta` |
| AC circuit | voltage or current variation |
| sound wave | pressure variation |
| light wave | electric or magnetic field variation |

---

## Periodic Functions

The simplest periodic functions are sine and cosine:

```text
f(t) = A cos omega t
f(t) = A sin omega t
```

They repeat when the argument changes by:

```text
2 pi
```

So:

```text
T = 2 pi/omega
```

---

## Not Every Periodic Function Is SHM

A motion can be periodic without being simple harmonic. SHM requires sinusoidal displacement or a restoring force proportional to displacement.

Example:

```text
sin omega t + cos 2 omega t + sin 4 omega t
```

may be periodic, but it is not a single simple harmonic motion because it contains multiple angular frequencies.

---

# Part 4: Simple Harmonic Motion

## Definition By Displacement

A particle executes simple harmonic motion if its displacement is:

```text
x(t) = A cos(omega t + phi)
```

or equivalently:

```text
x(t) = A sin(omega t + phi)
```

---

## Meaning Of Symbols

| Symbol | Meaning |
| --- | --- |
| `x(t)` | displacement at time `t` |
| `A` | amplitude |
| `omega` | angular frequency |
| `omega t + phi` | phase |
| `phi` | phase constant |
| `T` | period |

---

## Amplitude

Amplitude is the maximum magnitude of displacement from mean position.

For:

```text
x(t) = A cos(omega t + phi)
```

the displacement lies between:

```text
-A and +A
```

---

## Phase

The phase:

```text
omega t + phi
```

tells the state of oscillation at time `t`.

It determines where the particle is and whether it is moving toward or away from the mean position.

---

## Phase Constant

The phase constant `phi` fixes the initial condition.

At `t = 0`:

```text
x(0) = A cos phi
```

So different values of `phi` mean the same oscillator starts from different positions or with different directions of motion.

---

# Part 5: SHM And Uniform Circular Motion

## Key Result

The projection of uniform circular motion on any diameter is simple harmonic motion.

If a point moves uniformly in a circle of radius `A` with angular speed `omega`, its x-coordinate is:

```text
x(t) = A cos(omega t + phi)
```

This is SHM.

---

## Why This Helps

The reference circle makes SHM easier to visualise:

| Circular Motion Quantity | SHM Meaning |
| --- | --- |
| radius of circle | amplitude |
| angular speed | angular frequency |
| angle swept | phase |
| projection on diameter | displacement in SHM |

---

## Radian Reminder

When an angle appears inside sine or cosine without a degree symbol, it is understood to be in radians.

Example:

```text
sin(15)
```

means sine of `15` radians, not `15 degrees`.

---

# Part 6: Velocity In SHM

## Derivation

Starting with:

```text
x(t) = A cos(omega t + phi)
```

Differentiate:

```text
v(t) = dx/dt
v(t) = -omega A sin(omega t + phi)
```

---

## Maximum Speed

Maximum magnitude of velocity is:

```text
v_max = omega A
```

The speed is maximum at the mean position:

```text
x = 0
```

It is zero at the extremes:

```text
x = +A or x = -A
```

---

## Velocity In Terms Of Displacement

Using energy or trigonometry:

```text
v = +/- omega sqrt(A^2 - x^2)
```

The sign depends on direction of motion.

---

# Part 7: Acceleration In SHM

## Derivation

Differentiate velocity:

```text
a(t) = dv/dt
a(t) = -omega^2 A cos(omega t + phi)
```

Since:

```text
x(t) = A cos(omega t + phi)
```

we get:

```text
a(t) = -omega^2 x(t)
```

---

## Meaning

Acceleration is proportional to displacement and directed opposite to it.

If:

```text
x > 0
```

then:

```text
a < 0
```

If:

```text
x < 0
```

then:

```text
a > 0
```

So acceleration always points toward the mean position.

---

## Maximum Acceleration

Maximum magnitude:

```text
a_max = omega^2 A
```

Acceleration is maximum at extremes and zero at the mean position.

---

# Part 8: Force Law For SHM

## Newton's Second Law

Using:

```text
F = ma
```

and:

```text
a = -omega^2 x
```

we get:

```text
F = -m omega^2 x
```

Let:

```text
k = m omega^2
```

Then:

```text
F = -kx
```

---

## Meaning Of Negative Sign

The negative sign shows that force is opposite to displacement and directed toward the mean position.

This is the restoring force.

---

## Equivalent Definition Of SHM

A motion is SHM if:

```text
F proportional to -x
```

or:

```text
a proportional to -x
```

This is often the most useful test for SHM.

---

# Part 9: Energy In SHM

## Potential Energy

For a spring-like restoring force:

```text
U = (1/2)kx^2
```

Potential energy is:

1. zero at mean position,
2. maximum at extremes.

---

## Kinetic Energy

```text
K = (1/2)mv^2
```

Using the SHM velocity relation:

```text
K = (1/2)k(A^2 - x^2)
```

Kinetic energy is:

1. maximum at mean position,
2. zero at extremes.

---

## Total Energy

Total mechanical energy is:

```text
E = K + U
E = (1/2)kA^2
```

It remains constant when there is no damping.

---

## Energy Transfer During SHM

| Position | Kinetic Energy | Potential Energy |
| --- | --- | --- |
| `x = 0` | maximum | zero |
| `x = +A` | zero | maximum |
| `x = -A` | zero | maximum |
| between mean and extreme | partly kinetic | partly potential |

Both kinetic and potential energy repeat twice in one oscillation, so their period is:

```text
T/2
```

---

## Example: Spring Block Energy

Given:

```text
m = 1 kg
k = 50 N m^-1
A = 0.10 m
x = 0.05 m
```

Potential energy:

```text
U = (1/2)kx^2
U = (1/2)(50)(0.05)^2
U = 0.0625 J
```

Total energy:

```text
E = (1/2)kA^2
E = (1/2)(50)(0.10)^2
E = 0.25 J
```

Kinetic energy:

```text
K = E - U
K = 0.25 - 0.0625
K = 0.1875 J
```

Approximately:

```text
K = 0.19 J
```

---

# Part 10: Spring-Mass Oscillator

## Hooke's Law

For small deformation:

```text
F = -kx
```

This is exactly the SHM force law.

---

## Angular Frequency

For a block of mass `m` attached to a spring of spring constant `k`:

```text
omega = sqrt(k/m)
```

---

## Period

```text
T = 2 pi sqrt(m/k)
```

### Important

The period does not depend on amplitude for ideal SHM.

---

## Two-Spring Example

If two identical springs each of spring constant `k` pull a mass back toward equilibrium from opposite sides, and displacement is `x`, then each spring contributes restoring force `kx`.

Net restoring force:

```text
F = -2kx
```

Effective spring constant:

```text
k_eff = 2k
```

Period:

```text
T = 2 pi sqrt(m/(2k))
```

---

# Part 11: Simple Pendulum

## Small-Angle SHM

A simple pendulum executes approximate SHM when angular displacement is small.

For small angle:

```text
sin theta approximately equals theta
```

where `theta` is in radians.

---

## Period Of Simple Pendulum

```text
T = 2 pi sqrt(L/g)
```

where:

| Symbol | Meaning |
| --- | --- |
| `L` | length of pendulum |
| `g` | acceleration due to gravity |

### Important

For small oscillations, period is independent of mass and nearly independent of amplitude.

---

## Physical Pendulum Reminder

More complex pendulum systems may have different period formulas, but the SHM test remains the same:

```text
restoring torque proportional to -angular displacement
```

---

# Part 12: Damped Oscillations

## What Is Damping?

Damping is the gradual decrease of amplitude due to dissipative forces such as friction or air resistance.

In real systems, oscillations eventually die out unless energy is supplied.

---

## Energy In Damping

Mechanical energy is converted into thermal energy and other forms.

So:

```text
amplitude decreases
energy decreases
motion eventually stops
```

---

## Light Damping

When damping is small, the motion still looks approximately sinusoidal, but amplitude slowly decreases.

---

# Part 13: Forced Oscillations

## Meaning

Forced oscillation occurs when an external periodic force drives an oscillator.

Example:

```text
F_ext = F0 cos omega_d t
```

where `omega_d` is the driving angular frequency.

---

## Natural Frequency

Every oscillator has a natural frequency at which it tends to oscillate when disturbed and left free.

For a spring-mass oscillator:

```text
omega_0 = sqrt(k/m)
```

---

## Steady-State Forced Oscillation

After initial transients die out, the oscillator moves with the driving frequency, not necessarily its natural frequency.

Amplitude depends on:

1. driving frequency,
2. natural frequency,
3. damping,
4. driving force strength.

---

# Part 14: Resonance

## Meaning

Resonance occurs when the driving frequency is close to the natural frequency of the oscillator.

Then amplitude becomes maximum.

```text
omega_d approximately equals omega_0
```

---

## Role Of Damping

Without damping, resonance amplitude can become extremely large in the ideal model.

With damping:

1. maximum amplitude is finite,
2. resonance peak becomes lower,
3. resonance peak becomes broader.

---

## Examples Of Resonance

| Example | Explanation |
| --- | --- |
| pushing a swing | best effect when pushes match natural rhythm |
| musical instruments | strings and air columns resonate |
| tuning a radio | circuit responds strongly to selected frequency |
| bridges and buildings | dangerous if driven near natural frequency |

---

# Part 15: Formula Board

## Basic Periodic Motion

| Formula | Meaning |
| --- | --- |
| `nu = 1/T` | frequency-period relation |
| `omega = 2 pi/T` | angular frequency |
| `omega = 2 pi nu` | angular and ordinary frequency |

## SHM Equation

| Formula | Meaning |
| --- | --- |
| `x(t) = A cos(omega t + phi)` | displacement in SHM |
| `v(t) = -omega A sin(omega t + phi)` | velocity |
| `a(t) = -omega^2 x(t)` | acceleration |
| `v = +/- omega sqrt(A^2 - x^2)` | speed-position relation |

## Force And Energy

| Formula | Meaning |
| --- | --- |
| `F = -kx` | restoring force |
| `k = m omega^2` | effective spring constant relation |
| `omega = sqrt(k/m)` | spring-mass angular frequency |
| `T = 2 pi sqrt(m/k)` | spring-mass period |
| `U = (1/2)kx^2` | potential energy |
| `K = (1/2)k(A^2 - x^2)` | kinetic energy |
| `E = (1/2)kA^2` | total energy |

## Pendulum

| Formula | Meaning |
| --- | --- |
| `T = 2 pi sqrt(L/g)` | simple pendulum, small oscillations |
| `sin theta approximately theta` | small-angle approximation in radians |

---

# Part 16: Common Mistakes

## Mistake 1: Calling Every Periodic Motion SHM

SHM is sinusoidal and has restoring force proportional to displacement. Periodic motion alone is not enough.

---

## Mistake 2: Forgetting Direction Of Restoring Force

In SHM:

```text
F = -kx
```

The force is opposite to displacement.

---

## Mistake 3: Saying Acceleration Is Maximum At Mean Position

Acceleration in SHM:

```text
a = -omega^2 x
```

At mean position, `x = 0`, so acceleration is zero.

It is maximum at extremes.

---

## Mistake 4: Saying Speed Is Maximum At Extremes

At extremes, the oscillator momentarily stops before reversing direction, so speed is zero.

Speed is maximum at the mean position.

---

## Mistake 5: Using Pendulum Formula For Large Angles

```text
T = 2 pi sqrt(L/g)
```

is valid for small angular displacements only.

---

# Part 17: Answer-Writing Frames

## Periodic And Oscillatory Motion

```text
Periodic motion repeats after equal intervals of time.
Oscillatory motion is periodic to-and-fro motion about an equilibrium position.
Every oscillatory motion is periodic, but every periodic motion is not oscillatory.
```

---

## SHM Definition

```text
Simple harmonic motion is oscillatory motion in which displacement is a sinusoidal function of time.
Equivalently, acceleration or restoring force is directly proportional to displacement and opposite in direction.
Thus a = -omega^2 x or F = -kx.
```

---

## Energy In SHM

```text
In SHM, kinetic and potential energies continuously transform into each other.
At the mean position, energy is entirely kinetic.
At the extreme positions, energy is entirely potential.
In the absence of damping, total energy remains constant and equals (1/2)kA^2.
```

---

## Resonance

```text
Resonance occurs when the frequency of an external periodic force is close to the natural frequency of the oscillator.
The amplitude then becomes maximum.
Damping limits the maximum amplitude and broadens the resonance peak.
```

---

# Part 18: Practice Questions

## Concept Questions

1. Define periodic motion and give two examples.
2. Why is uniform circular motion periodic but not oscillatory?
3. What is amplitude?
4. What is phase in SHM?
5. Show that `a = -omega^2 x` for SHM.
6. Why is velocity maximum at mean position?
7. Why is acceleration maximum at extreme position?
8. Derive the period of a spring-mass oscillator.
9. Why is the simple pendulum formula valid only for small angles?
10. What is resonance and why can it be dangerous?

---

## Numerical Practice

1. A particle completes 20 oscillations in 10 s. Find frequency and period.
2. For `x = 0.05 cos(10t)`, find amplitude, angular frequency, period, and maximum speed.
3. A spring has `k = 100 N m^-1` and mass `m = 1 kg`. Find period.
4. A pendulum has length `1 m`. Find approximate period using `g = 9.8 m s^-2`.
5. A spring oscillator has `k = 50 N m^-1` and amplitude `0.10 m`. Find total energy.

---

# Final Revision Checklist

- [ ] I can distinguish periodic, oscillatory, and simple harmonic motion.
- [ ] I can define period, frequency, angular frequency, amplitude, and phase.
- [ ] I can write and interpret `x(t) = A cos(omega t + phi)`.
- [ ] I can explain SHM as projection of uniform circular motion.
- [ ] I can derive velocity and acceleration in SHM.
- [ ] I can use `F = -kx` as the SHM force law.
- [ ] I can identify where speed and acceleration are maximum.
- [ ] I can explain energy exchange in SHM.
- [ ] I can use spring and pendulum period formulas.
- [ ] I can explain damping, forced oscillation, and resonance.

