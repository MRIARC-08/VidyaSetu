# Chapter 4: Kinetic Theory
### NCERT Class 11 - Physics Part 2

---

## Chapter Purpose

Kinetic theory explains the behaviour of gases by treating a gas as a huge collection of rapidly moving atoms or molecules. Instead of only saying that pressure, volume, and temperature are related, it explains why those relations exist at the molecular level.

The chapter connects:

1. gas laws with molecular motion,
2. pressure with molecular collisions,
3. temperature with average kinetic energy,
4. specific heat with degrees of freedom,
5. diffusion and viscosity with mean free path.

---

## Chapter Map

| Section | Main Idea |
| --- | --- |
| Molecular nature of matter | matter is made of atoms and molecules |
| Behaviour of gases | ideal gas equation and gas laws |
| Kinetic theory of ideal gas | pressure arises from molecular collisions |
| Temperature interpretation | temperature measures average molecular kinetic energy |
| Maxwell distribution | molecules have a distribution of speeds |
| Equipartition of energy | energy is shared equally among quadratic modes |
| Specific heats | degrees of freedom explain heat capacities |
| Mean free path | average distance between molecular collisions |

---

# Part 1: Molecular View Of Matter

## Atomic Hypothesis

The central idea is:

```text
Matter is made of atoms or molecules that are in continuous motion.
```

These particles attract each other at moderate separations and repel strongly when pushed very close.

---

## Why Gases Are Easier To Model

In gases, molecules are far apart compared with their own size. Therefore, intermolecular forces can often be ignored except during collisions.

This makes gases easier to describe than solids and liquids.

| State | Molecular Spacing | Motion | Intermolecular Force |
| --- | --- | --- | --- |
| solid | very close | vibration about fixed positions | strong |
| liquid | close | molecules move around but remain near | significant |
| gas | far apart | rapid random motion | negligible except during collision |

---

## Atomic Size And Spacing

The raw source gives the order of atomic size:

```text
atomic size approximately 10^-10 m
```

This is about one angstrom.

In solids and liquids, atoms are separated by a few angstroms. In gases, average separations are much larger.

---

## Dynamic Equilibrium In A Gas

A gas may look still, but its molecules are moving rapidly and randomly.

Equilibrium is dynamic:

1. molecules keep colliding,
2. individual speeds keep changing,
3. average pressure, temperature, and density remain constant.

---

# Part 2: Ideal Gas Behaviour

## Ideal Gas Equation

The ideal gas equation is:

```text
PV = nRT
```

The same equation can be written in molecular form:

```text
PV = NkB T
```

where:

| Symbol | Meaning |
| --- | --- |
| `P` | pressure |
| `V` | volume |
| `n` | number of moles |
| `R` | universal gas constant |
| `N` | number of molecules |
| `kB` | Boltzmann constant |
| `T` | absolute temperature |

Constants:

```text
R = 8.314 J mol^-1 K^-1
kB = 1.38 x 10^-23 J K^-1
R = NA kB
```

---

## Avogadro's Law

Equal volumes of gases at the same temperature and pressure contain the same number of molecules.

At standard temperature and pressure:

```text
22.4 L of any ideal gas contains 6.02 x 10^23 molecules
```

This number is Avogadro's number:

```text
NA = 6.02 x 10^23 mol^-1
```

---

## Boyle's Law From Ideal Gas Equation

For fixed amount of gas and fixed temperature:

```text
PV = constant
```

So pressure is inversely proportional to volume.

### Interpretation

If volume decreases, molecules hit the walls more frequently, so pressure increases.

---

## Charles' Law From Ideal Gas Equation

For fixed amount of gas at constant pressure:

```text
V proportional to T
```

Temperature must be in kelvin.

### Interpretation

If temperature increases, molecules move faster. To keep pressure constant, volume must increase so wall collisions become less frequent per unit area.

---

## Dalton's Law Of Partial Pressures

For a mixture of non-reacting ideal gases:

```text
P = P1 + P2 + P3 + ...
```

Each partial pressure is the pressure that gas would exert if it alone occupied the same volume at the same temperature.

### Example Logic

If neon and oxygen are in the same vessel at the same temperature and volume:

```text
P_Ne / P_O2 = n_Ne / n_O2 = N_Ne / N_O2
```

because pressure is proportional to number of molecules for fixed `V` and `T`.

---

## Real Gas Versus Ideal Gas

No real gas is perfectly ideal.

Real gases approach ideal behaviour when:

1. pressure is low,
2. temperature is high,
3. molecules are far apart,
4. intermolecular forces are negligible.

---

# Part 3: Kinetic Theory Assumptions

## Assumptions Of Ideal Gas Kinetic Theory

1. A gas contains a very large number of molecules.
2. Molecules are in continuous random motion.
3. Molecular size is negligible compared with intermolecular separation.
4. Intermolecular forces are negligible except during collisions.
5. Collisions among molecules and with container walls are elastic.
6. Molecules obey Newton's laws between collisions.
7. Motion is random, so there is no preferred direction.

---

## Why Collisions Produce Pressure

When a molecule hits a wall and rebounds, its momentum changes. By Newton's laws, the wall receives an impulse.

Many molecules colliding with the wall every second produce a steady force.

Pressure is:

```text
pressure = force / area
```

So gas pressure is the result of molecular momentum transfer to container walls.

---

# Part 4: Pressure Of An Ideal Gas

## Single-Molecule Collision Idea

Consider a molecule of mass `m` moving with x-component of velocity `vx`.

Before collision with a wall:

```text
momentum in x direction = m vx
```

After elastic rebound:

```text
momentum in x direction = -m vx
```

Change in molecule's momentum:

```text
Delta p = -2m vx
```

Momentum given to wall:

```text
2m vx
```

---

## Pressure Formula

After averaging over many molecules:

```text
P = (1/3) n_mol m <v^2>
```

where:

| Symbol | Meaning |
| --- | --- |
| `n_mol` | number of molecules per unit volume |
| `m` | mass of one molecule |
| `<v^2>` | mean square speed |

Avoid confusing `n_mol` with number of moles. Here it means number density.

---

## Root Mean Square Speed

The root mean square speed is:

```text
v_rms = sqrt(<v^2>)
```

Using kinetic theory:

```text
P = (1/3) rho v_rms^2
```

where:

```text
rho = n_mol m
```

is mass density of the gas.

---

# Part 5: Kinetic Interpretation Of Temperature

## Connecting Pressure Formula With Ideal Gas Law

Kinetic theory gives:

```text
P = (1/3) n_mol m <v^2>
```

Ideal gas equation in number-density form gives:

```text
P = n_mol kB T
```

Equating:

```text
(1/3)m<v^2> = kB T
```

So:

```text
(1/2)m<v^2> = (3/2)kB T
```

---

## Meaning

The average translational kinetic energy of one molecule is:

```text
average KE = (3/2)kB T
```

Therefore, absolute temperature measures average molecular translational kinetic energy.

### Important

Temperature is not the speed of one molecule. It is related to the average kinetic energy of a huge number of molecules.

---

## RMS Speed Formula

From:

```text
(1/2)m v_rms^2 = (3/2)kB T
```

we get:

```text
v_rms = sqrt(3kB T/m)
```

For one mole, since `M = NA m` and `R = NA kB`:

```text
v_rms = sqrt(3RT/M)
```

where `M` is molar mass in `kg mol^-1`.

---

# Part 6: Distribution Of Molecular Speeds

## Not All Molecules Move At The Same Speed

At a given temperature, gas molecules have different speeds. Collisions keep changing individual speeds, but the overall distribution remains steady at equilibrium.

---

## Maxwell Distribution

Maxwell's distribution describes how molecular speeds are distributed.

### Qualitative Features

1. Some molecules are slow.
2. Some molecules are very fast.
3. Most molecules have speeds near a most probable speed.
4. Higher temperature shifts the distribution toward higher speeds.

---

## Why Lighter Molecules Move Faster

At the same temperature:

```text
average kinetic energy is the same
```

So:

```text
(1/2)m<v^2> = constant
```

If `m` is smaller, `<v^2>` must be larger.

### Example: Uranium Hexafluoride

The source compares molecules with masses `349 u` and `352 u`.

Speed ratio:

```text
v_349 / v_352 = sqrt(352/349)
v_349 / v_352 approximately 1.0044
```

The lighter molecule is faster by about:

```text
0.44 percent
```

---

# Part 7: Moving Piston And Temperature Change

## Molecular Explanation Of Compression Heating

If a piston moves inward, molecules collide with a moving wall. A molecule rebounding from a wall moving toward it can leave with greater speed.

Thus, compression increases molecular kinetic energy and raises temperature.

---

## Expansion Cooling

If compressed gas pushes the piston outward, molecules collide with a wall moving away. They may rebound with lower speed.

Average kinetic energy decreases, so temperature falls.

---

## Daily-Life Connection

| Process | Observation |
| --- | --- |
| gas compressed rapidly | temperature rises |
| gas expands rapidly | temperature falls |
| bicycle pump used quickly | pump warms |
| aerosol spray expansion | spray feels cold |

---

# Part 8: Equipartition Of Energy

## Degree Of Freedom

A degree of freedom is an independent way in which a molecule can store energy.

| Motion | Degrees Of Freedom |
| --- | --- |
| motion along a line | 1 translational |
| motion in a plane | 2 translational |
| motion in space | 3 translational |

---

## Law Of Equipartition

In thermal equilibrium, each quadratic energy term contributes:

```text
(1/2)kB T
```

to the average energy per molecule.

---

## Monatomic Gas

A monatomic gas molecule has only three translational degrees of freedom.

Average energy per molecule:

```text
E = (3/2)kB T
```

For one mole:

```text
U = (3/2)RT
```

---

## Diatomic Gas

A rigid diatomic molecule has:

1. three translational degrees of freedom,
2. two rotational degrees of freedom.

Total:

```text
5 degrees of freedom
```

Average energy per molecule:

```text
E = (5/2)kB T
```

For one mole:

```text
U = (5/2)RT
```

---

## Vibrational Mode

A vibrational mode contributes two quadratic terms:

1. kinetic energy of vibration,
2. potential energy of vibration.

Therefore one vibrational mode contributes:

```text
kB T
```

per molecule, not just `(1/2)kB T`.

---

# Part 9: Specific Heat Capacities From Kinetic Theory

## General Ideal Gas Relation

For any ideal gas:

```text
Cp - Cv = R
```

---

## Monatomic Gas

For one mole:

```text
U = (3/2)RT
```

So:

```text
Cv = (3/2)R
Cp = (5/2)R
gamma = Cp/Cv = 5/3
```

---

## Rigid Diatomic Gas

For one mole:

```text
U = (5/2)RT
```

So:

```text
Cv = (5/2)R
Cp = (7/2)R
gamma = 7/5
```

---

## Polyatomic Gas

A general polyatomic molecule has translational, rotational, and possible vibrational modes.

If vibrational modes are active, heat capacity increases because more energy-storage modes are available.

---

## Specific Heat Of Solids

For a solid, atoms vibrate about mean positions. In three dimensions, equipartition predicts for one mole:

```text
U = 3RT
```

So:

```text
C approximately 3R
```

This is the Dulong-Petit law at ordinary temperatures.

### Low-Temperature Warning

At very low temperatures, classical equipartition fails. Specific heats approach zero as temperature approaches zero, which requires quantum theory for explanation.

---

## Example: Helium In A Fixed Cylinder

The source gives a cylinder of volume `44.8 L` containing helium at standard temperature and pressure.

At STP:

```text
22.4 L = 1 mole
```

So:

```text
44.8 L = 2 moles
```

Helium is monatomic and the cylinder volume is fixed, so use:

```text
Cv = (3/2)R
```

Heat required for `15 K` rise:

```text
Q = n Cv Delta T
Q = 2 x (3/2)R x 15
Q = 45R
Q = 45 x 8.31
Q = 374 J
```

---

# Part 10: Brownian Motion

## Observation

Tiny pollen grains suspended in water move in a zigzag random way under a microscope.

This is called Brownian motion.

---

## Kinetic Theory Explanation

Water molecules bombard the suspended particle from all sides. For a large object, these impacts average out. For a very small visible particle, the imbalance is noticeable and produces random motion.

### Importance

Brownian motion is visible evidence of molecular motion.

---

# Part 11: Mean Free Path

## Meaning

Mean free path is the average distance travelled by a molecule between successive collisions.

It is denoted here as:

```text
lambda
```

---

## Formula

For molecules treated as spheres of diameter `d`, number density `n_mol`:

Approximate form:

```text
lambda = 1/(n_mol pi d^2)
```

More accurate form including relative motion:

```text
lambda = 1/(sqrt(2) n_mol pi d^2)
```

---

## Collision Time

If average speed is `<v>`, then average time between collisions is:

```text
tau = lambda / <v>
```

---

## Air At STP

The source gives typical values:

```text
number density = 2.7 x 10^25 m^-3
molecular diameter = 2 x 10^-10 m
tau = 6.1 x 10^-10 s
lambda = 2.9 x 10^-7 m
```

The mean free path is about:

```text
1500 molecular diameters
```

---

## Why Gas Diffusion Can Be Slow

Molecules move very fast, but they collide frequently and keep changing direction. So a gas smell or smoke cloud spreads through a room more slowly than a straight-line molecular speed might suggest.

---

# Part 12: Formula Board

## Ideal Gas

| Formula | Meaning |
| --- | --- |
| `PV = nRT` | ideal gas equation in mole form |
| `PV = NkB T` | ideal gas equation in molecule form |
| `P = n_mol kB T` | pressure using number density |
| `R = NA kB` | relation between gas constants |
| `PV = constant` | Boyle's law at fixed `n` and `T` |
| `V proportional to T` | Charles' law at fixed `n` and `P` |
| `P = P1 + P2 + ...` | Dalton's law of partial pressures |

## Kinetic Theory

| Formula | Meaning |
| --- | --- |
| `P = (1/3)n_mol m <v^2>` | pressure from molecular motion |
| `P = (1/3)rho v_rms^2` | pressure using density |
| `v_rms = sqrt(<v^2>)` | root mean square speed |
| `(1/2)m<v^2> = (3/2)kB T` | temperature and average kinetic energy |
| `v_rms = sqrt(3kB T/m)` | molecular rms speed |
| `v_rms = sqrt(3RT/M)` | molar-mass form |

## Equipartition And Heat Capacity

| Formula | Meaning |
| --- | --- |
| each quadratic term gives `(1/2)kB T` | equipartition |
| monatomic `Cv = (3/2)R` | constant-volume molar heat capacity |
| monatomic `Cp = (5/2)R` | constant-pressure molar heat capacity |
| rigid diatomic `Cv = (5/2)R` | constant-volume molar heat capacity |
| rigid diatomic `Cp = (7/2)R` | constant-pressure molar heat capacity |
| `Cp - Cv = R` | ideal gas heat capacity relation |

## Mean Free Path

| Formula | Meaning |
| --- | --- |
| `lambda = 1/(sqrt(2)n_mol pi d^2)` | mean free path |
| `tau = lambda/<v>` | average time between collisions |

---

# Part 13: Common Mistakes

## Mistake 1: Thinking All Gas Molecules Have Same Speed

They have a distribution of speeds. Temperature fixes average kinetic energy, not one identical speed.

---

## Mistake 2: Confusing Number Density With Number Of Moles

`n_mol` in kinetic theory pressure formulas often means number per unit volume. In ideal gas equations, `n` often means number of moles. Always check the meaning.

---

## Mistake 3: Using Celsius In Molecular Speed Formula

Use kelvin:

```text
v_rms = sqrt(3RT/M)
```

requires `T` in kelvin.

---

## Mistake 4: Forgetting Molar Mass Units

In:

```text
v_rms = sqrt(3RT/M)
```

`M` must be in `kg mol^-1`, not `g mol^-1`.

---

## Mistake 5: Treating Equipartition As Always Exact

Equipartition is classical. It works well in many ordinary-temperature cases, but fails at low temperatures and when quantum effects freeze some degrees of freedom.

---

# Part 14: Answer-Writing Frames

## Kinetic Theory Introduction

```text
Kinetic theory explains gas behaviour by assuming that gases consist of a very large number of molecules in rapid random motion.
Pressure is due to molecular collisions with container walls, and temperature is related to average molecular kinetic energy.
```

---

## Pressure Explanation

```text
When a molecule collides elastically with a wall, its momentum changes.
The wall receives an equal impulse.
The rate of momentum transfer by many molecules gives force, and force per unit area gives pressure.
```

---

## Temperature Explanation

```text
Combining the kinetic theory pressure equation with the ideal gas equation gives average translational kinetic energy per molecule equal to (3/2)kB T.
Thus absolute temperature measures average molecular kinetic energy.
```

---

## Mean Free Path Explanation

```text
Mean free path is the average distance travelled by a molecule between two successive collisions.
It decreases when number density increases or molecular diameter increases.
```

---

# Part 15: Practice Questions

## Concept Questions

1. Why can intermolecular forces be neglected for gases at low pressure?
2. State Avogadro's law and connect it with the ideal gas equation.
3. How does kinetic theory explain gas pressure?
4. Why is temperature related to average kinetic energy, not total kinetic energy?
5. Why do lighter molecules move faster at the same temperature?
6. What are degrees of freedom?
7. State the law of equipartition of energy.
8. Why is `Cp` greater than `Cv` for an ideal gas?
9. What is Brownian motion and why is it important?
10. Why does a gas diffuse slowly even though molecules move fast?

---

## Numerical Practice

1. Calculate number of moles in `44.8 L` ideal gas at STP.
2. Find `v_rms` of a gas if molar mass and temperature are given.
3. Use `P = (1/3)rho v_rms^2` to find pressure.
4. Find heat required to raise temperature of helium at constant volume.
5. Estimate mean free path using `lambda = 1/(sqrt(2)n pi d^2)`.

---

# Final Revision Checklist

- [ ] I can state the assumptions of kinetic theory.
- [ ] I can write ideal gas equation in mole and molecule forms.
- [ ] I can explain pressure as momentum transfer.
- [ ] I can derive the relation between temperature and average kinetic energy.
- [ ] I can use `v_rms = sqrt(3RT/M)` with correct units.
- [ ] I can explain Maxwell distribution qualitatively.
- [ ] I can apply equipartition to monatomic and diatomic gases.
- [ ] I can calculate `Cv`, `Cp`, and `gamma` for simple gases.
- [ ] I can explain Brownian motion.
- [ ] I can define and use mean free path.

