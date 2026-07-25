# Chapter 3: Current Electricity
### NCERT Class 12 - Physics Part 1

## Chapter at a Glance

Current electricity studies charges in motion. This chapter connects microscopic electron drift with macroscopic circuit quantities such as current, voltage, resistance, resistivity, power, emf, internal resistance, Kirchhoff's rules, and Wheatstone bridge.

The central idea is that an electric field inside a conductor drives charges, producing current, while resistance opposes the motion of charge.

## Learning Outcomes

By the end of this chapter, learners should be able to:

- Define electric current and current density.
- Explain drift velocity of electrons.
- Derive relation between current and drift velocity.
- State and apply Ohm's law.
- Understand resistance, resistivity, and conductivity.
- Explain temperature dependence of resistivity.
- Calculate electric power and energy.
- Distinguish emf and terminal voltage.
- Solve circuits with internal resistance.
- Combine cells in series and parallel.
- Apply Kirchhoff's junction and loop rules.
- Use Wheatstone bridge balance condition.

## Key Terms

| Term | Meaning |
|---|---|
| Electric current | Rate of flow of charge. |
| Drift velocity | Average velocity acquired by electrons under electric field. |
| Current density | Current per unit area normal to flow. |
| Ohm's law | Current through conductor is proportional to potential difference at constant temperature. |
| Resistance | Opposition offered to current. |
| Resistivity | Material property determining resistance. |
| Conductivity | Reciprocal of resistivity. |
| Mobility | Drift velocity per unit electric field. |
| emf | Work done by source per unit charge. |
| Internal resistance | Resistance inside a cell. |
| Terminal voltage | Potential difference across cell terminals. |
| Kirchhoff's junction rule | Sum of currents entering a junction equals sum leaving. |
| Kirchhoff's loop rule | Algebraic sum of potential changes in a closed loop is zero. |
| Wheatstone bridge | Circuit used to compare resistances. |

## Quick Formula Map

| Concept | Formula |
|---|---|
| Current | `I = dQ/dt` |
| Current density | `j = I/A` |
| Current and drift velocity | `I = neA vd` |
| Ohm's law | `V = IR` |
| Resistance | `R = rho L/A` |
| Conductivity | `sigma = 1/rho` |
| Current density form | `j = sigma E` |
| Mobility | `mu = vd/E` |
| Temperature dependence | `R = R0[1 + alpha(T - T0)]` |
| Power | `P = VI = I^2R = V^2/R` |
| Terminal voltage, discharging cell | `V = epsilon - Ir` |
| Terminal voltage, charging cell | `V = epsilon + Ir` |
| Wheatstone balance | `P/Q = R/S` |

# Unit 3A: Electric Current

Electric current is the rate of flow of charge through a cross-section of a conductor.

`I = dQ/dt`

SI unit:

`ampere (A)`

`1 A = 1 C/s`

## Direction of Current

Conventional current is taken in the direction of flow of positive charge. In metallic conductors, electrons move opposite to conventional current.

# Unit 3B: Current Density

Current density is current per unit area normal to direction of flow.

`j = I/A`

Unit:

`A/m^2`

Current density is a vector directed along conventional current.

# Unit 3C: Electric Current in Conductors

In a metal, free electrons move randomly even without an electric field. Random motion does not produce net current.

When an electric field is applied, electrons acquire a small average velocity opposite the field. This is called drift velocity.

## Drift Velocity

Drift velocity is much smaller than random thermal speed, but it produces net current because a large number of electrons drift together.

# Unit 3D: Relation Between Current and Drift Velocity

Let:

- `n` = number density of free electrons.
- `e` = charge of electron.
- `A` = cross-sectional area.
- `vd` = drift speed.

Then:

`I = neA vd`

## Meaning

Current increases when:

- Number density is larger.
- Area is larger.
- Drift velocity is larger.

# Unit 3E: Ohm's Law

Ohm's law states that for many conductors at constant temperature:

`V proportional to I`

or:

`V = IR`

where `R` is resistance.

## Ohmic Conductors

Conductors obeying Ohm's law have a straight-line `V-I` graph through origin.

## Non-Ohmic Devices

Some devices do not obey Ohm's law:

- Diode.
- Transistor.
- Electrolyte.
- Filament lamp over wide temperature range.

# Unit 3F: Resistance and Resistivity

Resistance of a conductor:

`R = rho L/A`

where:

- `rho` is resistivity.
- `L` is length.
- `A` is cross-sectional area.

## Dependence

- Longer wire has larger resistance.
- Thicker wire has smaller resistance.
- Resistivity depends on material and temperature.

## Conductivity

`sigma = 1/rho`

Current density form of Ohm's law:

`j = sigma E`

# Unit 3G: Mobility

Mobility is drift velocity per unit electric field:

`mu = vd/E`

Unit:

`m^2/(V s)`

Higher mobility means charge carriers move more easily in response to electric field.

# Unit 3H: Temperature Dependence of Resistivity

For many metals:

`R = R0[1 + alpha(T - T0)]`

where `alpha` is temperature coefficient of resistance.

## Metals

Resistance of metals generally increases with temperature because lattice vibrations increase collisions.

## Semiconductors

Resistance of semiconductors generally decreases with temperature because more charge carriers become available.

# Unit 3I: Electrical Energy and Power

Electrical power:

`P = VI`

Using Ohm's law:

`P = I^2R`

and:

`P = V^2/R`

Electrical energy used in time `t`:

`W = Pt = VIt`

## Heat Produced

Joule heating:

`H = I^2Rt`

# Unit 3J: Cells, emf, and Internal Resistance

The emf of a cell is work done per unit charge by the cell in driving charge around the complete circuit.

It is written as `epsilon`.

A real cell has internal resistance `r`.

## Discharging Cell

When current is drawn from a cell:

`V = epsilon - Ir`

where `V` is terminal voltage.

## Charging Cell

When current is forced into a cell:

`V = epsilon + Ir`

## Short Circuit Current

If external resistance is zero:

`I = epsilon/r`

# Unit 3K: Cells in Series

When cells are connected in series with same orientation:

Equivalent emf:

`epsilon_eq = epsilon1 + epsilon2 + ...`

Equivalent internal resistance:

`r_eq = r1 + r2 + ...`

## Use

Series combination increases voltage.

# Unit 3L: Cells in Parallel

Parallel combination is used to provide more current capacity and reduce effective internal resistance.

For identical cells, each of emf `epsilon` and internal resistance `r`, connected in parallel:

`epsilon_eq = epsilon`

`r_eq = r/n`

where `n` is number of cells.

# Unit 3M: Kirchhoff's Junction Rule

At any junction:

`sum of currents entering = sum of currents leaving`

This is based on conservation of charge.

## Example

If currents `I1` and `I2` enter a junction and `I3` leaves:

`I1 + I2 = I3`

# Unit 3N: Kirchhoff's Loop Rule

In any closed loop:

`algebraic sum of potential changes = 0`

This is based on conservation of energy.

## Sign Convention

Common convention:

- Across a resistor in direction of current: potential drop `-IR`.
- Across a resistor opposite current: `+IR`.
- Across a cell from negative to positive terminal: `+epsilon`.
- Across a cell from positive to negative terminal: `-epsilon`.

# Unit 3O: Wheatstone Bridge

Wheatstone bridge is used to compare resistances.

At balance, no current flows through galvanometer.

If arms are `P`, `Q`, `R`, and `S`, balance condition is:

`P/Q = R/S`

## Why Useful

At balance, galvanometer branch can be ignored because current through it is zero.

# Unit 3P: Worked Examples

## Example 1: Current from Charge Flow

If `60 C` charge passes through a wire in `2 min`, current is:

`I = Q/t`

`I = 60/120 = 0.5 A`

## Example 2: Resistance of a Wire

Given `rho = 2 x 10^-8 ohm m`, `L = 5 m`, `A = 1 x 10^-6 m^2`.

`R = rho L/A`

`R = (2 x 10^-8)(5)/(1 x 10^-6)`

`R = 0.1 ohm`

## Example 3: Terminal Voltage

A cell has `epsilon = 12 V`, internal resistance `r = 0.5 ohm`, current `I = 4 A`.

When discharging:

`V = epsilon - Ir`

`V = 12 - 4(0.5) = 10 V`

## Example 4: Wheatstone Bridge

If `P = 2 ohm`, `Q = 4 ohm`, `R = 3 ohm`, find `S` for balance.

`P/Q = R/S`

`2/4 = 3/S`

`S = 6 ohm`

# Unit 3Q: Answer-Writing Framework

## To solve drift velocity problems

Write in this order:

1. Write `I = neA vd`.
2. Convert all quantities to SI units.
3. Substitute known values.
4. Solve for unknown.
5. State direction if asked.

## To solve resistor problems

Write in this order:

1. Identify whether using `V = IR` or `R = rho L/A`.
2. Convert units.
3. Substitute.
4. Check whether temperature correction is needed.

## To solve Kirchhoff problems

Write in this order:

1. Assign currents in branches.
2. Apply junction rule.
3. Choose loops and direction.
4. Apply loop rule with signs.
5. Solve simultaneous equations.

# Unit 3R: Common Mistakes and Corrections

| Mistake | Correction |
|---|---|
| Confusing electron direction with conventional current | Conventional current is opposite electron drift in metals. |
| Forgetting area in `I = neA vd` | Current depends on cross-sectional area. |
| Using Ohm's law for all devices | Ohm's law is not universal. |
| Treating resistivity as same as resistance | Resistivity is material property; resistance depends on shape. |
| Forgetting internal resistance | Real cells have terminal voltage different from emf. |
| Wrong signs in Kirchhoff loop rule | Use one sign convention consistently. |
| Applying Wheatstone condition when not balanced | `P/Q = R/S` only at balance. |

## Practice Set

1. Find current if `120 C` charge flows in `1 min`.
2. Find drift velocity using `I = neA vd`.
3. Calculate resistance of a wire from resistivity, length, and area.
4. Find power consumed by a resistor.
5. Calculate heat produced in a resistor.
6. Find terminal voltage of a discharging cell.
7. Find equivalent emf and internal resistance of cells in series.
8. Apply Kirchhoff's rules to a two-loop circuit.
9. Use Wheatstone bridge balance to find unknown resistance.
10. Explain why metals have positive temperature coefficient of resistance.

## Final Revision

Remember these points:

- Current is rate of flow of charge.
- Electron drift is opposite to conventional current.
- Ohm's law is `V = IR` under suitable conditions.
- Resistance depends on material, length, area, and temperature.
- Power is `VI`, also `I^2R` or `V^2/R`.
- emf and terminal voltage are not the same for a real cell.
- Kirchhoff's rules come from conservation of charge and energy.
