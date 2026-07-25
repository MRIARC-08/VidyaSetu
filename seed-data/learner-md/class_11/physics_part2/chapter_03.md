# Chapter 3: Thermodynamics
### NCERT Class 11 - Physics Part 2

---

## Chapter Purpose

Thermodynamics studies heat, work, temperature, internal energy, and the laws governing energy transfer. It is a macroscopic branch of physics: it describes a system using measurable variables such as pressure, volume, temperature, mass, and internal energy rather than tracking every molecule.

This chapter answers four major questions:

1. What does it mean for systems to be in thermal equilibrium?
2. How are heat, work, and internal energy related?
3. What limits the conversion of heat into useful work?
4. Why are some natural processes irreversible?

---

## Chapter Map

| Section | Main Learning Focus |
| --- | --- |
| Introduction | thermodynamics as energy conversion between heat and work |
| Thermal equilibrium | equilibrium state and role of walls |
| Zeroth law | temperature as the common variable in thermal equilibrium |
| Heat, work, internal energy | distinction between state variable and energy transfer |
| First law | conservation of energy for thermodynamic systems |
| State variables | path-independent quantities such as pressure, volume, temperature, internal energy |
| Thermodynamic processes | isothermal, adiabatic, isobaric, isochoric, cyclic |
| Heat engines | conversion of heat into work in a cycle |
| Refrigerators and heat pumps | moving heat from cold region to hot region using work |
| Second law | direction limits on natural processes |
| Reversible processes | ideal processes with no dissipative effects |
| Carnot engine | maximum possible efficiency between two reservoirs |

---

# Part 1: What Thermodynamics Studies

## Core Idea

Thermodynamics deals with the interconversion of heat and other forms of energy, especially work.

Examples:

| Situation | Energy Conversion |
| --- | --- |
| rubbing palms in winter | work converts into thermal energy |
| steam engine | heat of steam helps produce mechanical work |
| bullet stopped by wood | kinetic energy converts into internal energy of bullet and wood |
| refrigerator | external work helps move heat from cold region to hot region |

---

## Macroscopic Description

Thermodynamics does not describe every molecule separately. Instead, it describes the bulk state of a system.

### Macroscopic Variables

| Variable | Meaning |
| --- | --- |
| `P` | pressure |
| `V` | volume |
| `T` | temperature |
| `m` | mass |
| `U` | internal energy |
| entropy | measure related to disorder and energy dispersal |

### Why This Matters

A gas contains an enormous number of molecules. Tracking every position and velocity is impossible in ordinary thermodynamics. Instead, the gas is described by measurable bulk variables.

---

## Mechanics Versus Thermodynamics

| Mechanics | Thermodynamics |
| --- | --- |
| studies motion of bodies as a whole | studies internal macroscopic state |
| focuses on forces, torques, acceleration | focuses on heat, work, temperature, internal energy |
| kinetic energy of whole body matters | random molecular energy matters |

### Example

When a bullet is flying, its mechanical kinetic energy is important. When it stops inside wood, that kinetic energy becomes internal energy, raising the temperature of the bullet and wood.

---

# Part 2: Thermal Equilibrium

## Thermodynamic Equilibrium

A system is in thermodynamic equilibrium when its macroscopic variables do not change with time.

For a gas in a closed insulated rigid container:

```text
P, V, T, mass, and composition remain constant with time.
```

Then the gas is in equilibrium.

---

## Adiabatic Wall And Diathermic Wall

| Wall Type | Meaning |
| --- | --- |
| adiabatic wall | does not allow heat flow |
| diathermic wall | allows heat flow |

### Learner Explanation

If two systems are separated by an adiabatic wall, heat cannot pass between them. If the wall is diathermic, energy can pass as heat until the systems reach thermal equilibrium.

---

## Thermal Equilibrium

Two systems are in thermal equilibrium when no net heat flows between them through a diathermic wall.

In thermal equilibrium:

```text
T_A = T_B
```

Temperature is the variable that becomes equal.

---

# Part 3: Zeroth Law Of Thermodynamics

## Statement

If two systems are separately in thermal equilibrium with a third system, then they are in thermal equilibrium with each other.

In symbols:

```text
If A is in thermal equilibrium with C,
and B is in thermal equilibrium with C,
then A is in thermal equilibrium with B.
```

So:

```text
T_A = T_C
T_B = T_C
therefore T_A = T_B
```

---

## Why It Is Important

The zeroth law gives a formal basis for temperature measurement.

### Thermometer Logic

If a thermometer is in thermal equilibrium with a body, the thermometer temperature equals the body temperature. If two bodies give the same thermometer reading, they are at the same temperature.

---

## Answer Frame

```text
The zeroth law states that if two systems are separately in thermal equilibrium with a third system, they are in thermal equilibrium with each other.
It establishes temperature as the physical quantity that has the same value for systems in thermal equilibrium.
This is the basis of thermometry.
```

---

# Part 4: Heat, Work, And Internal Energy

## Internal Energy

Internal energy `U` is the sum of molecular kinetic and potential energies inside a system, measured in the frame where the centre of mass of the system is at rest.

It includes:

1. random translational kinetic energy,
2. rotational energy,
3. vibrational energy,
4. molecular potential energy, where relevant.

It does not include the kinetic energy of the whole body moving from one place to another.

---

## Heat

Heat is energy transferred because of temperature difference.

Correct:

```text
Heat is supplied to a system.
Heat flows from hot body to cold body.
```

Incorrect:

```text
A system contains heat.
```

A system contains internal energy, not heat as a state property.

---

## Work

Work is energy transfer by means other than temperature difference.

Example:

If a piston compresses gas, work is done on the gas and its internal energy may increase.

---

## Heat And Work Are Not State Variables

Heat and work depend on the path followed during a process.

Internal energy is a state variable. It depends only on the state, not on the path.

| Quantity | State Variable? | Why |
| --- | --- | --- |
| pressure | yes | value describes state |
| volume | yes | value describes state |
| temperature | yes | value describes state |
| internal energy | yes | depends on state |
| heat | no | energy transfer during process |
| work | no | energy transfer during process |

---

# Part 5: First Law Of Thermodynamics

## Sign Convention Used Here

The raw source uses:

```text
Delta Q = heat supplied to the system
Delta W = work done by the system on surroundings
Delta U = change in internal energy
```

With this convention:

```text
Delta Q = Delta U + Delta W
```

or:

```text
Delta U = Delta Q - Delta W
```

---

## Meaning Of The First Law

The first law is conservation of energy applied to thermodynamic systems.

If heat is supplied to a system, it can:

1. increase internal energy,
2. be used by the system to do work,
3. do both.

---

## Work Done By Gas At Constant Pressure

For a gas expanding against constant pressure:

```text
Delta W = P Delta V
```

So:

```text
Delta Q = Delta U + P Delta V
```

### Meaning

If the gas expands, `Delta V` is positive and the gas does work on surroundings. If the gas is compressed, work done by the gas is negative.

---

## Example: Water To Steam

The source gives:

```text
Delta Q = 2256 J
Delta W = 169.2 J
Delta U = 2086.8 J
```

for `1 g` water changing from liquid to vapour at atmospheric pressure.

Using:

```text
Delta U = Delta Q - Delta W
Delta U = 2256 - 169.2
Delta U = 2086.8 J
```

### Interpretation

Most supplied heat increases internal energy. A smaller part is used as expansion work because steam occupies much larger volume than liquid water.

---

# Part 6: Specific Heat Capacity In Thermodynamics

## Heat Capacity

```text
S = Delta Q / Delta T
```

It is the heat required for one unit temperature rise of the whole body.

---

## Specific Heat Capacity

```text
s = Delta Q / (m Delta T)
```

SI unit:

```text
J kg^-1 K^-1
```

---

## Molar Specific Heat Capacity

```text
C = Delta Q / (n Delta T)
```

SI unit:

```text
J mol^-1 K^-1
```

---

## For Gases: `Cp` And `Cv`

| Symbol | Condition |
| --- | --- |
| `Cv` | heat supplied at constant volume |
| `Cp` | heat supplied at constant pressure |

For an ideal gas:

```text
Cp - Cv = R
```

### Why `Cp` Is Larger

At constant pressure, the gas expands when heated and does work. Extra heat is needed for that work. At constant volume, no expansion work is done.

---

# Part 7: Equation Of State

## State Variables

State variables describe the present state of the system.

Examples:

```text
P, V, T, U
```

Heat and work are not state variables.

---

## Equation Of State

An equation of state connects state variables.

For an ideal gas:

```text
PV = nRT
```

This relates pressure, volume, temperature, and number of moles.

---

# Part 8: Thermodynamic Processes

## Process Overview

| Process | Quantity Kept Constant | Main Relation |
| --- | --- | --- |
| isothermal | temperature | `Delta U = 0` for ideal gas |
| adiabatic | heat exchange zero | `Delta Q = 0` |
| isobaric | pressure | `W = P Delta V` |
| isochoric | volume | `W = 0` |
| cyclic | initial and final states same | `Delta U = 0` |

---

## Quasi-Static Process

A quasi-static process is carried out infinitely slowly so that the system remains nearly in equilibrium at every stage.

### Why It Matters

Only in a quasi-static process can pressure, volume, and temperature be well-defined throughout the process.

---

## Isothermal Process

Temperature remains constant:

```text
T = constant
```

For an ideal gas:

```text
Delta U = 0
```

Using first law:

```text
Delta Q = Delta W
```

Heat supplied is completely converted into work done by the gas.

For reversible isothermal expansion:

```text
W = nRT ln(V2/V1)
```

---

## Adiabatic Process

No heat is exchanged:

```text
Delta Q = 0
```

Using first law:

```text
Delta U = -Delta W
```

If the gas expands adiabatically, it does work using its internal energy, so temperature falls.

For a reversible adiabatic ideal-gas process:

```text
PV^gamma = constant
```

where:

```text
gamma = Cp/Cv
```

---

## Isobaric Process

Pressure remains constant:

```text
P = constant
```

Work done:

```text
W = P Delta V
```

---

## Isochoric Process

Volume remains constant:

```text
V = constant
```

So:

```text
Delta V = 0
W = 0
```

Using first law:

```text
Delta Q = Delta U
```

All heat supplied increases internal energy.

---

## Cyclic Process

In a cyclic process, the system returns to its initial state.

Therefore:

```text
Delta U = 0
```

Using first law:

```text
Q = W
```

over the complete cycle.

---

# Part 9: Heat Engines

## What Is A Heat Engine?

A heat engine is a device that converts heat into work through a cyclic process.

It operates between:

1. a hot reservoir or source,
2. a working substance,
3. a cold reservoir or sink.

---

## Energy Flow In A Heat Engine

```text
Q1 = heat absorbed from hot reservoir
Q2 = heat rejected to cold reservoir
W = work output
```

By conservation of energy:

```text
W = Q1 - Q2
```

---

## Efficiency

Efficiency of a heat engine is:

```text
eta = W/Q1
```

Using `W = Q1 - Q2`:

```text
eta = 1 - Q2/Q1
```

### Meaning

Efficiency tells what fraction of absorbed heat becomes useful work.

---

## Why Efficiency Cannot Be 1

If efficiency were 1:

```text
Q2 = 0
```

That would mean all absorbed heat becomes work with no heat rejected. The second law forbids this for a cyclic heat engine.

---

# Part 10: Refrigerators And Heat Pumps

## Refrigerator

A refrigerator moves heat from a cold region to a hot region by using external work.

```text
Q2 = heat extracted from cold reservoir
W = work done on refrigerator
Q1 = heat released to hot reservoir
```

Energy conservation:

```text
Q1 = Q2 + W
```

---

## Coefficient Of Performance

For a refrigerator:

```text
alpha = Q2/W
```

This can be greater than 1 because the refrigerator is not converting work fully into cooling; it is using work to transfer heat.

---

## Heat Pump

A heat pump is the same physical device used for heating a space.

For a heat pump:

```text
COP = Q1/W
```

where `Q1` is the heat delivered to the warmer region.

---

## Why Work Is Required

Heat naturally flows from hot to cold. A refrigerator makes heat move from cold to hot, so external work is required.

---

# Part 11: Second Law Of Thermodynamics

## Why First Law Is Not Enough

The first law says energy is conserved. But many energy-conserving processes never happen naturally.

Example:

A book on a table never spontaneously jumps upward by cooling the table and converting that internal energy into mechanical energy.

So nature has direction rules beyond energy conservation.

---

## Kelvin-Planck Statement

No process is possible whose sole result is the absorption of heat from a reservoir and complete conversion of that heat into work.

### Meaning

A perfect heat engine with 100 percent efficiency is impossible.

---

## Clausius Statement

No process is possible whose sole result is transfer of heat from a colder body to a hotter body.

### Meaning

Heat cannot naturally flow from cold to hot without external work.

---

## Equivalence Of Statements

The Kelvin-Planck and Clausius statements are two forms of the same second law. If one were violated, the other could be violated too.

---

# Part 12: Reversible And Irreversible Processes

## Irreversible Process

An irreversible process cannot be reversed so that both system and surroundings return exactly to their original states with no other change.

Most natural processes are irreversible.

Examples:

| Process | Why Irreversible |
| --- | --- |
| heat flowing from hot body to cold body | reverse would violate second law |
| free expansion of gas | system passes through non-equilibrium states |
| combustion | chemical and thermal dissipation |
| diffusion of gas | spontaneous spreading does not reverse |
| friction stopping a moving body | mechanical energy dissipates as heat |

---

## Causes Of Irreversibility

1. Non-equilibrium states during the process.
2. Friction, viscosity, and other dissipative effects.
3. Finite temperature differences during heat transfer.

---

## Reversible Process

A reversible process is an ideal process that can be reversed completely with no net change anywhere else.

Conditions:

1. process must be quasi-static,
2. no friction,
3. no viscosity,
4. no dissipative effects,
5. no finite temperature difference during heat transfer.

### Example

An ideal gas expanding isothermally in a cylinder with a frictionless piston, extremely slowly, can be treated as reversible.

---

# Part 13: Carnot Engine

## Purpose Of Carnot Engine

The Carnot engine is an ideal reversible heat engine operating between two reservoirs:

```text
T1 = hot reservoir temperature
T2 = cold reservoir temperature
```

with:

```text
T1 > T2
```

Temperatures must be in kelvin.

---

## Carnot Cycle Steps

| Step | Process | What Happens |
| --- | --- | --- |
| 1 to 2 | isothermal expansion at `T1` | gas absorbs heat `Q1` and does work |
| 2 to 3 | adiabatic expansion | gas cools from `T1` to `T2` |
| 3 to 4 | isothermal compression at `T2` | gas rejects heat `Q2` |
| 4 to 1 | adiabatic compression | gas warms from `T2` back to `T1` |

---

## Carnot Efficiency

The maximum efficiency between two reservoirs is:

```text
eta = 1 - T2/T1
```

where temperatures are in kelvin.

### Important

Carnot efficiency depends only on reservoir temperatures, not on the working substance.

---

## Why Carnot Engine Is Important

No engine operating between the same two temperatures can be more efficient than a Carnot engine.

This is Carnot's theorem.

### Practical Meaning

Real engines are less efficient because they involve friction, heat loss, rapid processes, turbulence, and other irreversibilities.

---

## Example Interpretation

If:

```text
T1 = 600 K
T2 = 300 K
```

then:

```text
eta = 1 - 300/600
eta = 0.5
```

Maximum possible efficiency:

```text
50 percent
```

No real engine between these reservoirs can exceed this.

---

# Part 14: Formula Board

## First Law And Work

| Formula | Meaning |
| --- | --- |
| `Delta Q = Delta U + Delta W` | first law, work done by system convention |
| `Delta U = Delta Q - Delta W` | change in internal energy |
| `Delta W = P Delta V` | work at constant pressure |

## Heat Capacities

| Formula | Meaning |
| --- | --- |
| `S = Delta Q/Delta T` | heat capacity |
| `s = Delta Q/(m Delta T)` | specific heat capacity |
| `C = Delta Q/(n Delta T)` | molar specific heat capacity |
| `Cp - Cv = R` | ideal gas relation |

## Processes

| Formula | Meaning |
| --- | --- |
| `PV = nRT` | ideal gas equation |
| `W = nRT ln(V2/V1)` | reversible isothermal ideal-gas work |
| `PV^gamma = constant` | reversible adiabatic ideal-gas process |
| `gamma = Cp/Cv` | heat capacity ratio |

## Engines And Refrigerators

| Formula | Meaning |
| --- | --- |
| `W = Q1 - Q2` | heat engine work output |
| `eta = W/Q1` | heat engine efficiency |
| `eta = 1 - Q2/Q1` | efficiency in heat terms |
| `alpha = Q2/W` | refrigerator coefficient of performance |
| `Q1 = Q2 + W` | refrigerator energy balance |
| `eta_Carnot = 1 - T2/T1` | Carnot engine efficiency |

---

# Part 15: Common Mistakes

## Mistake 1: Saying A Body Contains Heat

Correct:

```text
A body has internal energy.
Heat is energy transferred because of temperature difference.
```

---

## Mistake 2: Forgetting The Sign Convention

In this chapter:

```text
Delta W = work done by the system
```

If another book uses work done on the system, the first law may appear with a different sign.

---

## Mistake 3: Treating Heat And Work As State Variables

Heat and work depend on path. Internal energy does not.

---

## Mistake 4: Using Celsius In Carnot Efficiency

Wrong:

```text
eta = 1 - 30/300
```

if temperatures are in degree Celsius.

Correct:

```text
Convert to kelvin first.
```

---

## Mistake 5: Thinking First Law Alone Determines Direction

The first law checks energy conservation. The second law tells which direction is naturally possible.

---

# Part 16: Answer-Writing Frames

## Zeroth Law Answer

```text
If two systems are separately in thermal equilibrium with a third system, they are in thermal equilibrium with each other.
This law introduces temperature as the variable that is equal for systems in thermal equilibrium.
It forms the basis of thermometry.
```

---

## First Law Answer

```text
The first law of thermodynamics is conservation of energy for thermodynamic systems.
If Delta Q heat is supplied to a system, part may increase internal energy Delta U and part may be used as work Delta W done by the system.
Thus Delta Q = Delta U + Delta W.
```

---

## Second Law Answer

```text
The second law gives the natural direction of thermodynamic processes.
It states that no cyclic heat engine can convert all heat absorbed from a reservoir completely into work.
Equivalently, heat cannot pass from a colder body to a hotter body without external work.
```

---

## Carnot Engine Answer

```text
A Carnot engine is an ideal reversible engine working between a hot reservoir at T1 and a cold reservoir at T2.
Its cycle consists of two isothermal and two adiabatic processes.
Its efficiency is eta = 1 - T2/T1, with temperatures in kelvin.
No engine working between the same temperatures can be more efficient.
```

---

# Part 17: Practice Questions

## Concept Questions

1. Why is thermodynamics called a macroscopic science?
2. What is the difference between an adiabatic wall and a diathermic wall?
3. State the zeroth law and explain how it leads to temperature.
4. Why are heat and work not state variables?
5. Explain the first law using a gas in a cylinder with a piston.
6. Why is `Cp` greater than `Cv` for an ideal gas?
7. What is a quasi-static process?
8. Why does an adiabatic expansion cool a gas?
9. Why can no heat engine have 100 percent efficiency?
10. What conditions are required for a reversible process?

---

## Numerical Practice

1. A system absorbs `500 J` of heat and does `200 J` of work. Find `Delta U`.
2. A gas expands at constant pressure `2 x 10^5 Pa` and volume increases by `0.01 m^3`. Find work done.
3. A heat engine absorbs `1000 J` and rejects `400 J`. Find work output and efficiency.
4. A refrigerator removes `600 J` from a cold reservoir using `200 J` work. Find coefficient of performance.
5. A Carnot engine works between `500 K` and `300 K`. Find maximum efficiency.

---

# Final Revision Checklist

- [ ] I can explain thermodynamics as a macroscopic science.
- [ ] I can distinguish thermal equilibrium from mechanical equilibrium.
- [ ] I can state and use the zeroth law.
- [ ] I can distinguish heat, work, and internal energy.
- [ ] I can apply `Delta Q = Delta U + Delta W`.
- [ ] I can identify state variables and path-dependent quantities.
- [ ] I can compare isothermal, adiabatic, isobaric, isochoric, and cyclic processes.
- [ ] I can calculate heat-engine efficiency.
- [ ] I can explain refrigerator coefficient of performance.
- [ ] I can state Kelvin-Planck and Clausius forms of the second law.
- [ ] I can explain reversible and irreversible processes.
- [ ] I can use Carnot efficiency with temperatures in kelvin.

