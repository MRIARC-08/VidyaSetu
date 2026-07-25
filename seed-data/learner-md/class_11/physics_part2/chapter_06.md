# Chapter 6: Waves
### NCERT Class 11 - Physics Part 2

---

## Chapter Purpose

A wave is a travelling disturbance that carries energy and information without transporting matter as a whole. This chapter studies mechanical waves, especially waves on strings and sound waves.

The central ideas are:

1. particles of the medium oscillate locally,
2. the disturbance travels through the medium,
3. energy is transferred from one place to another,
4. wave speed depends on the medium,
5. waves can superpose, reflect, form standing waves, produce beats, and show Doppler shift.

---

## Chapter Map

| Section | Main Idea |
| --- | --- |
| Nature of waves | disturbance travels, matter does not move bodily |
| Wave types | mechanical, electromagnetic, matter waves |
| Transverse and longitudinal waves | particle oscillation perpendicular or parallel to propagation |
| Progressive wave equation | displacement depends on position and time |
| Wave speed | `v = nu lambda = omega/k` |
| String waves | speed depends on tension and linear mass density |
| Sound waves | speed depends on elastic and inertial properties |
| Superposition | net displacement is algebraic sum |
| Reflection | rigid and open boundaries change reflected phase differently |
| Standing waves | nodes, antinodes, normal modes |
| Beats | periodic loudness variation due to close frequencies |
| Doppler effect | apparent frequency changes due to relative motion |

---

# Part 1: What Is A Wave?

## Basic Meaning

A wave is a moving disturbance.

It transports:

1. energy,
2. momentum,
3. information,

without transporting the medium as a whole.

---

## Pebble In Pond Example

When a pebble is dropped in still water, circular ripples move outward. A cork floating on the water moves up and down, but it does not travel outward with the ripple.

### Lesson

The disturbance travels outward. The water particles only oscillate about their local positions.

---

## Sound Example

When we speak, sound travels through air. But air from our mouth does not travel all the way to the listener's ear. Instead, pressure and density disturbances travel through air.

---

# Part 2: Types Of Waves

## Mechanical Waves

Mechanical waves require a material medium.

Examples:

| Wave | Medium |
| --- | --- |
| sound wave | air, liquid, solid |
| wave on string | stretched string |
| water wave | water surface |
| seismic wave | Earth material |

Mechanical waves cannot travel through vacuum.

---

## Electromagnetic Waves

Electromagnetic waves do not require a material medium.

Examples:

```text
light, radio waves, X-rays
```

In vacuum, all electromagnetic waves travel with speed:

```text
c = 299792458 m s^-1
```

---

## Matter Waves

Matter waves are associated with particles such as electrons, protons, atoms, and molecules. They belong to quantum physics and are not the main topic of this chapter.

---

# Part 3: Transverse And Longitudinal Waves

## Transverse Wave

In a transverse wave, particles of the medium oscillate perpendicular to the direction of wave propagation.

Example:

```text
wave on a stretched string
```

If the wave travels along `x`, the string elements may move up and down along `y`.

---

## Longitudinal Wave

In a longitudinal wave, particles oscillate parallel to the direction of propagation.

Example:

```text
sound wave in air
```

The medium forms compressions and rarefactions.

---

## Medium Requirement

| Wave Type | Medium Requirement |
| --- | --- |
| transverse mechanical wave | medium must sustain shearing stress |
| longitudinal mechanical wave | medium must sustain compressive stress |

Fluids cannot sustain shear stress, so transverse mechanical waves do not propagate through the bulk of fluids. Sound in air is longitudinal.

---

## Water Surface Waves

Ocean and surface water waves are more complicated. Particles move in a combination of up-down and back-forth motion, so the wave has both transverse and longitudinal features.

---

# Part 4: Progressive Wave Equation

## Travelling Sinusoidal Wave

A sinusoidal wave travelling in the positive x-direction can be written as:

```text
y(x,t) = a sin(kx - omega t + phi)
```

For a wave travelling in the negative x-direction:

```text
y(x,t) = a sin(kx + omega t + phi)
```

---

## Meaning Of Symbols

| Symbol | Meaning |
| --- | --- |
| `y(x,t)` | displacement at position `x` and time `t` |
| `a` | amplitude |
| `k` | angular wave number |
| `omega` | angular frequency |
| `phi` | initial phase |
| `kx - omega t + phi` | phase of the wave |

---

## Amplitude

Amplitude is maximum displacement of a medium particle from its equilibrium position.

Since sine varies from `-1` to `+1`:

```text
y ranges from -a to +a
```

---

## Wavelength

Wavelength is the minimum distance between two points in the same phase.

Common examples:

1. crest to next crest,
2. trough to next trough,
3. compression to next compression.

Symbol:

```text
lambda
```

Relation with wave number:

```text
k = 2 pi/lambda
```

or:

```text
lambda = 2 pi/k
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

## Wave Speed

For a fixed phase point:

```text
kx - omega t = constant
```

This gives:

```text
v = omega/k
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

## Example: Reading A Wave Equation

Given:

```text
y(x,t) = 0.005 sin(80.0x - 3.0t)
```

Compare with:

```text
y = a sin(kx - omega t)
```

So:

```text
a = 0.005 m
k = 80.0 m^-1
omega = 3.0 s^-1
```

Wavelength:

```text
lambda = 2 pi/k
lambda = 2 pi/80.0
lambda = 0.0785 m = 7.85 cm
```

Period:

```text
T = 2 pi/omega
T = 2.09 s
```

Frequency:

```text
nu = 1/T = 0.48 Hz
```

---

# Part 5: Speed Of Mechanical Waves

## Medium Controls Wave Speed

Wave speed depends on:

1. elastic property of the medium,
2. inertial property of the medium.

It does not depend directly on frequency for ordinary non-dispersive waves.

Once speed is fixed by the medium:

```text
v = nu lambda
```

connects frequency and wavelength.

---

## Transverse Wave On A Stretched String

Speed is:

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

### Interpretation

Increasing tension increases speed. Increasing mass per unit length decreases speed.

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

Speed:

```text
v = sqrt(T/mu)
v = sqrt(60/(6.9 x 10^-3))
```

This gives a high wave speed because the wire is light and tightly stretched.

---

## Longitudinal Wave In A Medium

Speed of a longitudinal wave:

```text
v = sqrt(B/rho)
```

where:

| Symbol | Meaning |
| --- | --- |
| `B` | bulk modulus |
| `rho` | density |

### Meaning

A medium that is difficult to compress has high `B`, so sound travels faster. A medium with greater inertia has higher `rho`, which tends to reduce speed.

---

## Sound In A Solid Bar

For a longitudinal wave in a solid bar:

```text
v = sqrt(Y/rho)
```

where `Y` is Young's modulus.

---

## Sound In Gas: Newton And Laplace

Newton assumed sound propagation in gas is isothermal and got:

```text
v = sqrt(P/rho)
```

This gives a value too small for air.

Laplace corrected it by noting that sound compressions and rarefactions are rapid, so the process is adiabatic.

Corrected formula:

```text
v = sqrt(gamma P/rho)
```

where:

```text
gamma = Cp/Cv
```

For air at STP, this gives about:

```text
331 m s^-1
```

---

# Part 6: Superposition Of Waves

## Principle Of Superposition

When two or more waves overlap, the net displacement is the algebraic sum of individual displacements.

```text
y(x,t) = y1(x,t) + y2(x,t)
```

After crossing, each wave continues as if the other was not present.

---

## Constructive Interference

If two equal waves meet in phase:

```text
phase difference = 0
```

their amplitudes add.

Resultant amplitude:

```text
2a
```

---

## Destructive Interference

If two equal waves meet exactly out of phase:

```text
phase difference = pi
```

their displacements cancel.

Resultant displacement can be zero.

---

## General Equal-Amplitude Result

For two waves of equal amplitude `a` and phase difference `phi`, resultant amplitude is:

```text
A = 2a cos(phi/2)
```

This shows why phase difference controls interference.

---

# Part 7: Reflection Of Waves

## Rigid Boundary

At a rigid boundary, the reflected wave undergoes a phase change of:

```text
pi
```

or:

```text
180 degrees
```

### Reason

The boundary point must have zero displacement. The reflected wave must cancel the incident displacement at the boundary.

---

## Open Or Free Boundary

At an open boundary, there is no phase reversal.

The reflected pulse has the same phase as the incident pulse, assuming no energy loss.

---

## Echo

Echo is reflection of sound from a distant rigid or hard surface.

The reflected sound returns to the listener after a time delay.

---

# Part 8: Standing Waves

## Formation

A standing wave forms when two waves of the same frequency, wavelength, and amplitude travel in opposite directions and superpose.

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

## Why It Is Called Standing

The pattern does not travel left or right. Each point oscillates with fixed amplitude depending on its position.

---

## Nodes

Nodes are points of zero displacement.

They do not move.

For:

```text
y = 2a sin kx cos omega t
```

nodes occur where:

```text
sin kx = 0
```

---

## Antinodes

Antinodes are points of maximum amplitude.

They occur midway between nodes.

---

## Normal Modes On A String Fixed At Both Ends

For a string of length `L` fixed at both ends, both ends must be nodes.

Allowed wavelengths:

```text
lambda_n = 2L/n
```

where:

```text
n = 1, 2, 3, ...
```

Allowed frequencies:

```text
nu_n = n v/(2L)
```

The first harmonic or fundamental frequency:

```text
nu_1 = v/(2L)
```

---

## Harmonics

| Mode | Name | Frequency |
| --- | --- | --- |
| `n = 1` | first harmonic, fundamental | `v/(2L)` |
| `n = 2` | second harmonic | `2v/(2L)` |
| `n = 3` | third harmonic | `3v/(2L)` |

---

# Part 9: Beats

## Meaning

Beats are periodic variations in loudness caused by superposition of two sound waves of nearly equal frequencies.

---

## Beat Frequency

If two frequencies are:

```text
nu1 and nu2
```

then beat frequency is:

```text
nu_beat = |nu1 - nu2|
```

---

## Learner Explanation

At some instants, the waves are in phase and sound is loud. At other instants, they are out of phase and sound is weak. This repeating loud-soft pattern is beats.

---

## Use Of Beats

Musicians use beats for tuning. When two notes are close but not identical, beats are heard. As tuning improves, beat frequency decreases and becomes zero when frequencies match.

---

# Part 10: Doppler Effect

## Meaning

Doppler effect is the apparent change in frequency heard by an observer because of relative motion between source and observer.

---

## Everyday Example

The pitch of a siren is higher when an ambulance approaches and lower when it moves away.

---

## Qualitative Rule

| Relative Motion | Observed Frequency |
| --- | --- |
| source and observer approach each other | higher |
| source and observer move away from each other | lower |
| no relative motion along line joining them | no Doppler shift |

---

## Why It Happens

When the source moves toward the observer, successive wavefronts are crowded closer together. The observed wavelength decreases, so frequency increases.

When the source moves away, wavefronts are spread farther apart. The observed wavelength increases, so frequency decreases.

---

## Applications

| Application | Use |
| --- | --- |
| radar speed measurement | detects speed from frequency shift |
| astronomy | motion of stars and galaxies |
| medical ultrasound | blood flow and heart imaging |
| weather radar | storm motion |

---

# Part 11: Formula Board

## Wave Equation

| Formula | Meaning |
| --- | --- |
| `y(x,t) = a sin(kx - omega t + phi)` | wave moving in positive x-direction |
| `y(x,t) = a sin(kx + omega t + phi)` | wave moving in negative x-direction |
| `k = 2 pi/lambda` | angular wave number |
| `omega = 2 pi nu` | angular frequency |
| `T = 1/nu` | period-frequency relation |
| `v = omega/k` | wave speed |
| `v = nu lambda` | wave speed relation |

## Wave Speed In Media

| Formula | Meaning |
| --- | --- |
| `v = sqrt(T/mu)` | transverse wave on stretched string |
| `mu = mass/length` | linear mass density |
| `v = sqrt(B/rho)` | longitudinal wave in bulk medium |
| `v = sqrt(Y/rho)` | longitudinal wave in solid bar |
| `v = sqrt(gamma P/rho)` | sound in ideal gas with Laplace correction |

## Superposition And Standing Waves

| Formula | Meaning |
| --- | --- |
| `y = y1 + y2` | superposition |
| `A = 2a cos(phi/2)` | resultant amplitude for equal waves |
| `y = 2a sin kx cos omega t` | standing wave |
| `lambda_n = 2L/n` | fixed string allowed wavelengths |
| `nu_n = n v/(2L)` | fixed string allowed frequencies |

## Beats

| Formula | Meaning |
| --- | --- |
| `nu_beat = |nu1 - nu2|` | beat frequency |

---

# Part 12: Common Mistakes

## Mistake 1: Saying Medium Travels With The Wave

The medium particles oscillate locally. The disturbance travels.

---

## Mistake 2: Confusing Longitudinal With Transverse

Check particle motion, not wave direction alone.

If particles move parallel to wave travel, the wave is longitudinal. If perpendicular, it is transverse.

---

## Mistake 3: Thinking Wave Speed Is Set By Frequency Alone

For mechanical waves, the medium sets the speed. Frequency is set by the source. Wavelength adjusts through:

```text
v = nu lambda
```

---

## Mistake 4: Forgetting Phase Change At Rigid Boundary

A reflected pulse at a rigid boundary is inverted.

---

## Mistake 5: Calling A Standing Wave A Travelling Wave

In a standing wave, nodes and antinodes stay fixed. Energy is not transported along the pattern the same way as in a progressive wave.

---

# Part 13: Answer-Writing Frames

## What Is A Wave?

```text
A wave is a disturbance that travels through space or a medium, carrying energy and information without transporting matter as a whole.
In a mechanical wave, particles of the medium oscillate about their equilibrium positions while the disturbance propagates.
```

---

## Transverse And Longitudinal

```text
In a transverse wave, particles oscillate perpendicular to the direction of propagation.
In a longitudinal wave, particles oscillate parallel to the direction of propagation.
Waves on a stretched string are transverse, while sound in air is longitudinal.
```

---

## Superposition

```text
When two or more waves overlap, the resultant displacement at any point is the algebraic sum of the displacements due to individual waves.
This is the principle of superposition and explains interference.
```

---

## Doppler Effect

```text
The Doppler effect is the apparent change in frequency due to relative motion between source and observer.
Frequency increases when source and observer approach each other and decreases when they move apart.
```

---

# Part 14: Practice Questions

## Concept Questions

1. Why does a cork on water move up and down while ripples move outward?
2. Why can sound not travel through vacuum?
3. Distinguish transverse and longitudinal waves with examples.
4. What is wavelength?
5. What is the physical meaning of wave number?
6. Why does increasing tension increase speed on a string?
7. Why is Laplace correction needed for speed of sound?
8. State the principle of superposition.
9. What are nodes and antinodes?
10. What causes beats?
11. Explain Doppler effect for an approaching ambulance.

---

## Numerical Practice

1. A wave has frequency `50 Hz` and wavelength `2 m`. Find speed.
2. A string has tension `100 N` and linear density `0.01 kg m^-1`. Find wave speed.
3. For `y = 0.02 sin(4x - 20t)`, find amplitude, `k`, `omega`, wavelength, period, frequency, and speed.
4. Two tuning forks have frequencies `256 Hz` and `260 Hz`. Find beat frequency.
5. A fixed string of length `1 m` has wave speed `100 m s^-1`. Find first three harmonics.

---

# Final Revision Checklist

- [ ] I can define a wave as travelling disturbance.
- [ ] I can distinguish mechanical, electromagnetic, and matter waves.
- [ ] I can compare transverse and longitudinal waves.
- [ ] I can read `y(x,t) = a sin(kx - omega t + phi)`.
- [ ] I can use `k = 2 pi/lambda`, `omega = 2 pi nu`, and `v = nu lambda`.
- [ ] I can calculate wave speed on a stretched string.
- [ ] I can explain speed of sound using elastic and inertial properties.
- [ ] I can state and apply superposition.
- [ ] I can explain reflection at rigid and open boundaries.
- [ ] I can identify nodes, antinodes, and harmonics.
- [ ] I can calculate beat frequency.
- [ ] I can explain Doppler effect qualitatively.

