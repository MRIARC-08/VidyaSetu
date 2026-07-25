# Chapter 7: Waves
### NCERT Class 11 - Physics Part 2

---

## Chapter Purpose

This recovered chapter is a newer/reprinted Waves chapter. It covers the core physics of mechanical waves: travelling disturbances, transverse and longitudinal waves, the mathematical form of a progressive wave, wave speed, superposition, reflection, standing waves, normal modes, and beats.

Study this chapter as the learner version of the raw `chapter_07.md` file. It overlaps strongly with the previous Waves chapter, but this file is kept separately because the raw data has a distinct chapter entry.

---

## Chapter Map

| Section | Main Learning Focus |
| --- | --- |
| Introduction | waves carry energy and information without carrying matter as a whole |
| Mechanical waves | waves that need a material medium |
| Transverse waves | medium particles oscillate perpendicular to wave travel |
| Longitudinal waves | medium particles oscillate parallel to wave travel |
| Progressive wave equation | `y(x,t) = a sin(kx - omega t + phi)` |
| Wave speed | `v = omega/k = nu lambda` |
| String waves | speed `v = sqrt(T/mu)` |
| Sound waves | speed depends on elasticity and density |
| Superposition | overlapping waves add algebraically |
| Reflection | rigid boundary reverses phase; open boundary does not |
| Standing waves | fixed nodes and antinodes |
| Beats | loud-soft variation due to close frequencies |

---

# Part 1: The Basic Idea Of A Wave

## What Moves In A Wave?

In a wave, the disturbance moves, not the material medium as a whole.

### Pond Example

When a pebble is dropped into a pond, circular ripples move outward. A cork on the surface moves up and down, but it does not travel outward with the ripple.

This shows:

```text
the wave travels; the water particles only oscillate locally
```

---

## What Waves Carry

Waves can carry:

1. energy,
2. momentum,
3. information.

They do not require transport of matter as a whole.

---

## Sound Example

When a person speaks, sound reaches a listener. Air from the speaker does not physically travel all the way to the listener. Instead, pressure-density disturbances travel through air.

---

# Part 2: Kinds Of Waves

## Mechanical Waves

Mechanical waves require a material medium.

Examples:

| Wave | Medium |
| --- | --- |
| sound wave | air, liquid, or solid |
| string wave | stretched string |
| water wave | water surface |
| seismic wave | Earth material |

Mechanical waves cannot travel through vacuum.

---

## Electromagnetic Waves

Electromagnetic waves can travel through vacuum.

Examples:

```text
light, radio waves, X-rays
```

Speed in vacuum:

```text
c = 299792458 m s^-1
```

---

## Matter Waves

Matter waves are associated with particles such as electrons, protons, neutrons, atoms, and molecules. They belong to the quantum description of nature.

The raw chapter mentions them for completeness, but this chapter mainly studies mechanical waves.

---

# Part 3: Mechanical Wave Model

## Elastic Coupling

In a mechanical medium, neighbouring parts are connected by elastic forces.

If one part is disturbed, it pulls or pushes nearby parts. The disturbance then travels through the medium.

---

## Spring Chain Model

Imagine many springs connected in a row. If one end is pulled and released:

1. the first spring is disturbed,
2. it affects the next spring,
3. the disturbance travels along the chain,
4. each spring only oscillates about its own equilibrium length.

This is a simple model of wave propagation.

---

## Sound In Air

Sound travels as compressions and rarefactions.

| Region | Meaning |
| --- | --- |
| compression | air molecules are closer together; pressure and density are higher |
| rarefaction | air molecules are farther apart; pressure and density are lower |

The pressure-density disturbance moves through air.

---

# Part 4: Transverse And Longitudinal Waves

## Transverse Wave

A wave is transverse if particles of the medium oscillate perpendicular to the direction of wave propagation.

Example:

```text
wave pulse on a stretched string
```

If the pulse travels along the string horizontally, the string elements move up and down.

---

## Longitudinal Wave

A wave is longitudinal if particles of the medium oscillate parallel to the direction of wave propagation.

Example:

```text
sound wave in air
```

Air elements move back and forth along the direction in which sound travels.

---

## Medium Restrictions

Transverse mechanical waves need a medium that can sustain shearing stress. Solids can do this; fluids generally cannot in their bulk.

Longitudinal waves need a medium that can sustain compressive strain. Solids, liquids, and gases can support them.

---

## Mixed Water Waves

Surface water waves are not purely transverse or purely longitudinal. Water particles can move both up-down and back-forth. Ocean waves are a combination.

---

# Part 5: Progressive Wave Equation

## Standard Form

A sinusoidal wave travelling in the positive x-direction is:

```text
y(x,t) = a sin(kx - omega t + phi)
```

A wave travelling in the negative x-direction is:

```text
y(x,t) = a sin(kx + omega t + phi)
```

---

## What The Equation Means

At a fixed time, `y` as a function of `x` gives the shape of the wave in space.

At a fixed position, `y` as a function of `t` gives the oscillation of one particle of the medium.

So the same equation describes both:

1. the travelling pattern,
2. local SHM of medium particles.

---

## Symbols

| Symbol | Meaning |
| --- | --- |
| `y(x,t)` | displacement of medium particle |
| `a` | amplitude |
| `k` | angular wave number |
| `omega` | angular frequency |
| `phi` | initial phase |
| `kx - omega t + phi` | phase |

---

## Amplitude

Amplitude is maximum displacement from equilibrium.

For:

```text
y = a sin(...)
```

the displacement lies between:

```text
-a and +a
```

---

## Phase

Phase tells the state of the wave at a position and time.

Two points are in the same phase if they have the same displacement and the same state of motion.

---

## Wavelength

Wavelength is the least distance between two points in the same phase.

Examples:

```text
crest to next crest
trough to next trough
compression to next compression
```

Relation:

```text
k = 2 pi/lambda
```

---

## Period And Frequency

Period:

```text
T = 2 pi/omega
```

Frequency:

```text
nu = 1/T
```

Angular frequency:

```text
omega = 2 pi nu
```

---

## Longitudinal Wave Displacement

For a longitudinal wave, displacement may be written as:

```text
s(x,t) = a sin(kx - omega t + phi)
```

The formula has the same mathematical structure; only the displacement direction is parallel to the direction of propagation.

---

# Part 6: Reading A Wave Equation

## Example Equation

The raw source includes:

```text
y(x,t) = 0.005 sin(80.0x - 3.0t)
```

Compare with:

```text
y = a sin(kx - omega t)
```

Therefore:

```text
a = 0.005 m
k = 80.0 m^-1
omega = 3.0 s^-1
```

### Amplitude

```text
a = 0.005 m = 5 mm
```

### Wavelength

```text
lambda = 2 pi/k
lambda = 2 pi/80.0
lambda = 0.0785 m
lambda = 7.85 cm
```

### Period

```text
T = 2 pi/omega
T = 2 pi/3.0
T = 2.09 s
```

### Frequency

```text
nu = 1/T
nu = 0.48 Hz
```

---

# Part 7: Speed Of A Travelling Wave

## Fixed Phase Method

For a wave:

```text
y = a sin(kx - omega t)
```

a point of fixed phase satisfies:

```text
kx - omega t = constant
```

Differentiating gives:

```text
v = dx/dt = omega/k
```

Using:

```text
omega = 2 pi/T
k = 2 pi/lambda
```

we get:

```text
v = lambda/T = nu lambda
```

---

## Meaning Of `v = nu lambda`

In one period, one crest moves forward by one wavelength.

So:

```text
speed = distance/time = wavelength/period
```

---

## Medium Decides Speed

For ordinary mechanical waves, the source decides frequency, but the medium decides speed. Once speed and frequency are known, wavelength is fixed.

---

# Part 8: Speed On A Stretched String

## Formula

For transverse waves on a stretched string:

```text
v = sqrt(T/mu)
```

where:

| Symbol | Meaning |
| --- | --- |
| `T` | tension in string |
| `mu` | linear mass density |

Linear mass density:

```text
mu = mass/length
```

---

## Physical Interpretation

Higher tension makes the string restore faster, so speed increases.

Higher linear mass density means more inertia, so speed decreases.

---

## Example: Steel Wire

Given:

```text
length = 0.72 m
mass = 5.0 x 10^-3 kg
tension = 60 N
```

Linear mass density:

```text
mu = 5.0 x 10^-3 / 0.72
mu = 6.9 x 10^-3 kg m^-1
```

Wave speed:

```text
v = sqrt(60/(6.9 x 10^-3))
```

The result is about:

```text
93 m s^-1
```

---

# Part 9: Speed Of Sound

## Longitudinal Wave Speed

For a longitudinal wave:

```text
v = sqrt(B/rho)
```

where:

| Symbol | Meaning |
| --- | --- |
| `B` | bulk modulus |
| `rho` | density |

---

## Sound In A Solid Bar

For a longitudinal wave in a solid bar:

```text
v = sqrt(Y/rho)
```

where `Y` is Young's modulus.

---

## Why Sound Is Faster In Solids

Solids and liquids usually have greater density than gases, but their elastic moduli are much larger. The larger stiffness dominates, so sound usually travels faster in solids and liquids than in gases.

---

## Newton's Formula

If sound in gas were isothermal:

```text
v = sqrt(P/rho)
```

This predicts about:

```text
280 m s^-1
```

for air at STP, which is too low.

---

## Laplace Correction

Sound compressions and rarefactions happen quickly, so there is little time for heat exchange. The process is adiabatic, not isothermal.

Correct formula:

```text
v = sqrt(gamma P/rho)
```

where:

```text
gamma = Cp/Cv
```

For air:

```text
gamma = 7/5
```

This gives about:

```text
331 m s^-1
```

which matches observation.

---

# Part 10: Superposition And Interference

## Principle Of Superposition

If two or more waves overlap, the resultant displacement is the algebraic sum of individual displacements.

```text
y(x,t) = y1(x,t) + y2(x,t)
```

Each wave continues after crossing as if the other wave had not permanently changed it.

---

## Constructive Interference

If two waves arrive in phase:

```text
phase difference = 0
```

their displacements add.

For equal amplitudes `a`:

```text
resultant amplitude = 2a
```

---

## Destructive Interference

If two equal waves arrive exactly out of phase:

```text
phase difference = pi
```

their displacements cancel.

Result:

```text
y = 0
```

at complete cancellation.

---

## Resultant Amplitude For Equal Waves

For two equal waves with phase difference `phi`:

```text
A = 2a cos(phi/2)
```

This formula shows how phase difference controls the strength of the resultant wave.

---

# Part 11: Reflection Of Waves

## Rigid Boundary

At a rigid boundary, the reflected pulse is inverted.

Phase change:

```text
pi
```

Reason:

The displacement at the rigid boundary must remain zero.

---

## Open Boundary

At a free or open boundary, the reflected pulse is not inverted.

Phase change:

```text
0
```

---

## Echo

Echo is reflection of sound from a distant surface.

It is a direct example of wave reflection.

---

# Part 12: Standing Waves And Normal Modes

## Standing Wave Formation

A standing wave forms by superposition of two waves of equal amplitude and frequency travelling in opposite directions.

Example:

```text
y1 = a sin(kx - omega t)
y2 = a sin(kx + omega t)
```

Result:

```text
y = 2a sin kx cos omega t
```

---

## Difference From Travelling Wave

In a travelling wave, the phase combination is:

```text
kx - omega t
```

In the standing wave:

```text
2a sin kx cos omega t
```

space and time factors are separated. The pattern does not move forward.

---

## Nodes

Nodes are points where amplitude is zero.

For:

```text
y = 2a sin kx cos omega t
```

nodes occur when:

```text
sin kx = 0
```

---

## Antinodes

Antinodes are points where amplitude is maximum.

They occur midway between adjacent nodes.

---

## Normal Modes

Boundary conditions restrict the allowed wavelengths and frequencies.

For a string fixed at both ends:

```text
lambda_n = 2L/n
```

and:

```text
nu_n = n v/(2L)
```

where:

```text
n = 1, 2, 3, ...
```

---

## Fundamental And Harmonics

| Mode | Name | Frequency |
| --- | --- | --- |
| `n = 1` | fundamental or first harmonic | `v/(2L)` |
| `n = 2` | second harmonic | `2v/(2L)` |
| `n = 3` | third harmonic | `3v/(2L)` |

---

# Part 13: Beats

## Meaning

Beats occur when two sound waves of nearly equal frequencies are heard together.

The sound becomes alternately loud and weak.

---

## Beat Frequency

If the two frequencies are:

```text
nu1 and nu2
```

then:

```text
beat frequency = |nu1 - nu2|
```

---

## Why Beats Occur

At some moments, the two waves are in phase and reinforce each other. At other moments, they are out of phase and partially cancel.

This produces repeated loud-soft-loud-soft variation.

---

## Use In Tuning

If two musical notes are close but not equal, beats are heard. As the instrument is tuned closer to the reference note, beat frequency decreases.

When beats disappear, the frequencies are equal.

---

# Part 14: Formula Board

## Progressive Waves

| Formula | Use |
| --- | --- |
| `y(x,t) = a sin(kx - omega t + phi)` | positive x-direction wave |
| `y(x,t) = a sin(kx + omega t + phi)` | negative x-direction wave |
| `k = 2 pi/lambda` | wave number |
| `omega = 2 pi nu` | angular frequency |
| `T = 1/nu` | period-frequency relation |
| `v = omega/k` | speed from angular quantities |
| `v = nu lambda` | general wave-speed relation |

## Wave Speed

| Formula | Use |
| --- | --- |
| `v = sqrt(T/mu)` | transverse wave on string |
| `mu = mass/length` | linear mass density |
| `v = sqrt(B/rho)` | longitudinal wave in bulk medium |
| `v = sqrt(Y/rho)` | longitudinal wave in solid bar |
| `v = sqrt(gamma P/rho)` | sound in gas with Laplace correction |

## Superposition And Standing Waves

| Formula | Use |
| --- | --- |
| `y = y1 + y2` | superposition |
| `A = 2a cos(phi/2)` | resultant amplitude for two equal waves |
| `y = 2a sin kx cos omega t` | standing wave |
| `lambda_n = 2L/n` | fixed string wavelengths |
| `nu_n = n v/(2L)` | fixed string frequencies |
| `nu_beat = |nu1 - nu2|` | beat frequency |

---

# Part 15: Common Mistakes

## Mistake 1: Thinking Water Or Air Travels With The Wave

Medium particles oscillate locally. The disturbance travels.

---

## Mistake 2: Confusing Speed With Frequency

The source sets frequency. The medium sets speed. Wavelength adjusts through:

```text
v = nu lambda
```

---

## Mistake 3: Missing Direction In The Wave Equation

```text
kx - omega t
```

usually represents travel in positive x-direction.

```text
kx + omega t
```

represents travel in negative x-direction.

---

## Mistake 4: Forgetting Phase Reversal

A rigid boundary inverts the reflected pulse. An open boundary does not.

---

## Mistake 5: Calling Nodes Rest Positions Only

Nodes are not just points that happen to be at rest at one instant. They are points of permanent zero displacement in a standing wave.

---

# Part 16: Answer-Writing Frames

## Wave Definition

```text
A wave is a disturbance that propagates through a medium or space, carrying energy and information without transporting matter as a whole.
In mechanical waves, particles of the medium oscillate about their equilibrium positions.
```

---

## Transverse And Longitudinal Comparison

```text
In a transverse wave, particles oscillate perpendicular to the direction of propagation.
In a longitudinal wave, particles oscillate parallel to the direction of propagation.
Waves on a stretched string are transverse, while sound waves in air are longitudinal.
```

---

## Superposition Answer

```text
When two waves overlap, the displacement of the medium is the algebraic sum of the displacements due to the individual waves.
This is the principle of superposition and it explains constructive and destructive interference.
```

---

## Standing Wave Answer

```text
A standing wave is formed by superposition of two waves of the same frequency and amplitude travelling in opposite directions.
It has fixed nodes of zero displacement and antinodes of maximum displacement.
Boundary conditions allow only certain normal modes.
```

---

# Part 17: Practice Questions

## Concept Questions

1. What is transported by a wave?
2. Why does a cork on a ripple not move outward with the ripple?
3. Why do mechanical waves need a medium?
4. Distinguish transverse and longitudinal waves.
5. What is wavelength?
6. How do `k`, `lambda`, `omega`, and `nu` relate?
7. Why does wave speed on a string increase with tension?
8. Why is Laplace correction needed for sound in air?
9. State the principle of superposition.
10. What happens when a pulse reflects from a rigid boundary?
11. What are nodes and antinodes?
12. What are beats?

---

## Numerical Practice

1. A wave has frequency `20 Hz` and wavelength `0.5 m`. Find speed.
2. For `y = 0.005 sin(80x - 3t)`, find amplitude, wavelength, period, frequency, and speed.
3. A string has tension `50 N` and linear density `0.02 kg m^-1`. Find wave speed.
4. A fixed string has length `0.75 m` and wave speed `150 m s^-1`. Find the fundamental frequency.
5. Two tuning forks have frequencies `256 Hz` and `258 Hz`. Find beat frequency.

---

# Final Revision Checklist

- [ ] I can define a wave correctly.
- [ ] I can explain why waves transfer energy without bulk transfer of matter.
- [ ] I can classify transverse and longitudinal waves.
- [ ] I can read a progressive wave equation.
- [ ] I can calculate wavelength, period, frequency, and speed.
- [ ] I can use `v = sqrt(T/mu)` for string waves.
- [ ] I can explain Newton's and Laplace's formulas for sound speed.
- [ ] I can apply superposition to interference.
- [ ] I can explain reflection at rigid and open boundaries.
- [ ] I can identify nodes, antinodes, normal modes, and harmonics.
- [ ] I can calculate beat frequency.

