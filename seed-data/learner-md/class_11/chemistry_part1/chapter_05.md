# Chapter 5: Thermodynamics

## 1. Chapter Snapshot

Thermodynamics studies heat, work, energy, entropy, and spontaneity in physical and chemical processes. It does not usually tell how fast a process occurs. It tells whether a process is energetically possible, how much heat or work is involved, and how equilibrium is related to energy change.

The central idea is:

```text
Thermodynamics compares initial and final states using state functions such as U, H, S, and G.
```

This chapter answers four major questions:

1. How much energy changes in a process?
2. How are heat and work related to internal energy?
3. What makes a process spontaneous?
4. How is Gibbs energy related to equilibrium?

## 2. Learning Targets

By the end of this chapter, a learner should be able to:

1. Define system, surroundings, and boundary.
2. Distinguish open, closed, and isolated systems.
3. Define state function and path function.
4. Explain internal energy.
5. Use the first law of thermodynamics.
6. Apply sign conventions for heat and work.
7. Calculate pressure-volume work.
8. Explain reversible and irreversible processes.
9. Define enthalpy and relate it to internal energy.
10. Use `Delta H = Delta U + Delta n_g RT`.
11. Distinguish extensive and intensive properties.
12. Use heat capacity, molar heat capacity, and specific heat.
13. Explain calorimetry at constant volume and constant pressure.
14. Define reaction enthalpy and standard reaction enthalpy.
15. Use standard enthalpies of formation.
16. Apply Hess's law.
17. Explain enthalpies of fusion, vaporisation, sublimation, atomisation, combustion, bond dissociation, solution, and dilution.
18. Explain entropy as a measure of disorder.
19. State the second and third laws of thermodynamics.
20. Use Gibbs energy to decide spontaneity.
21. Relate Gibbs energy change to equilibrium constant.

## 3. Core Vocabulary

| Term | Learner meaning |
|---|---|
| Thermodynamics | Study of energy changes in macroscopic systems |
| System | Part of universe under study |
| Surroundings | Everything outside the system that can interact with it |
| Boundary | Real or imaginary surface separating system and surroundings |
| Open system | Exchanges matter and energy |
| Closed system | Exchanges energy but not matter |
| Isolated system | Exchanges neither matter nor energy |
| State function | Depends only on state, not path |
| Path function | Depends on route taken |
| Internal energy | Total energy contained in a system |
| Heat | Energy transfer due to temperature difference |
| Work | Energy transfer through force acting over distance |
| Enthalpy | State function `H = U + pV` |
| Entropy | State function related to disorder or energy dispersal |
| Gibbs energy | State function used for spontaneity at constant T and p |
| Spontaneous process | Process with tendency to occur without external driving |
| Calorimetry | Experimental measurement of heat changes |
| Standard state | Pure substance at 1 bar at specified temperature |
| Hess's law | Total enthalpy change is independent of path |

## 4. Big Picture Map

```text
Thermodynamics
-> system and surroundings
-> state variables
-> internal energy
-> heat and work
-> first law: Delta U = q + w
-> enthalpy for constant pressure
-> calorimetry
-> reaction enthalpies
-> Hess's law
-> entropy and spontaneity
-> Gibbs energy
-> equilibrium constant
```

## 5. What Thermodynamics Can and Cannot Tell

Thermodynamics can tell:

1. Heat absorbed or released.
2. Work done by or on a system.
3. Change in internal energy.
4. Change in enthalpy.
5. Whether a process is spontaneous under given conditions.
6. How Gibbs energy relates to equilibrium.

Thermodynamics cannot usually tell:

1. Reaction mechanism.
2. Rate of reaction.
3. Molecular pathway.
4. Time needed for completion.

Example:

Hydrogen and oxygen may form water spontaneously from a thermodynamic point of view, but the mixture can remain unchanged for a long time without ignition. Thermodynamics says the reaction has tendency; kinetics explains the rate.

## 6. System, Surroundings, and Universe

System:

```text
Part of the universe selected for study.
```

Surroundings:

```text
Everything outside the system that can exchange energy or matter with it.
```

Universe:

```text
Universe = system + surroundings
```

Example:

If a reaction occurs in a beaker, the reaction mixture may be the system. The beaker, air, table, and room act as surroundings depending on how the system is defined.

## 7. Boundary

Boundary separates system from surroundings.

It may be:

1. Real, such as walls of a container.
2. Imaginary, such as a chosen surface around a gas.
3. Fixed, if volume cannot change.
4. Movable, such as a piston.
5. Conducting, if heat can pass.
6. Adiabatic, if heat cannot pass.

The type of boundary controls possible exchanges.

## 8. Open, Closed, and Isolated Systems

| System type | Matter exchange | Energy exchange | Example |
|---|---|---|---|
| Open | Yes | Yes | Open beaker |
| Closed | No | Yes | Sealed conducting vessel |
| Isolated | No | No | Ideal thermos flask |

Most real systems are not perfectly isolated, but the concept is useful for reasoning.

## 9. State of a System

The state of a system is described by measurable macroscopic properties.

Examples:

1. Pressure, `p`.
2. Volume, `V`.
3. Temperature, `T`.
4. Amount of substance, `n`.
5. Composition.

For a gas, specifying enough of these properties fixes the state of the system.

## 10. State Functions

A state function depends only on the initial and final states, not on the path followed.

Examples:

1. Internal energy, `U`.
2. Enthalpy, `H`.
3. Entropy, `S`.
4. Gibbs energy, `G`.
5. Pressure, `p`.
6. Volume, `V`.
7. Temperature, `T`.

If water temperature changes from 25 deg C to 35 deg C, the temperature change is 10 deg C regardless of the heating path.

## 11. Path Functions

Path functions depend on how the process is carried out.

Important path functions:

1. Heat, `q`.
2. Work, `w`.

For the same initial and final states, heat and work may differ depending on the path, but their sum gives the same `Delta U`.

## 12. Internal Energy

Internal energy `U` is the total energy of a system.

It includes:

1. Translational energy.
2. Rotational energy.
3. Vibrational energy.
4. Electronic energy.
5. Intermolecular interaction energy.
6. Chemical energy.

Absolute internal energy is not usually measured. We measure change in internal energy:

```text
Delta U = U_final - U_initial
```

## 13. Ways to Change Internal Energy

Internal energy changes when:

1. Heat enters or leaves the system.
2. Work is done on or by the system.
3. Matter enters or leaves the system.

For a closed system:

```text
Delta U changes through heat and work.
```

## 14. Heat

Heat is energy transferred because of temperature difference.

Sign convention:

```text
q > 0: heat absorbed by system
q < 0: heat released by system
```

Heat is not a substance contained in the system. It is energy in transit.

## 15. Work

Work is energy transferred when force acts through a distance.

In chemistry, the most common work is pressure-volume work.

Sign convention used here:

```text
w > 0: work done on system
w < 0: work done by system
```

Compression gives positive work because surroundings do work on the gas.

Expansion gives negative work because gas does work on surroundings.

## 16. Adiabatic Process

An adiabatic process has no heat exchange between system and surroundings.

```text
q = 0
```

If work is done adiabatically on a system, internal energy increases.

If a system does work adiabatically, internal energy decreases.

## 17. First Law of Thermodynamics

The first law is the law of conservation of energy.

Mathematical form:

$$
\Delta U = q + w
$$

Meaning:

```text
Change in internal energy = heat supplied to system + work done on system
```

For an isolated system:

```text
q = 0, w = 0, so Delta U = 0
```

## 18. First Law Sign Practice

Case 1:

No heat absorbed, work done on system.

```text
q = 0
Delta U = w
```

Case 2:

No work, heat removed from system.

```text
w = 0
q < 0
Delta U = q
```

Case 3:

Heat supplied to system and work done by system.

```text
q > 0
w < 0
Delta U = q + w
```

If magnitude of work done by system is written as `W`, then:

```text
Delta U = q - W
```

## 19. Pressure-Volume Work

For expansion or compression against constant external pressure:

$$
w = -p_{ext}\Delta V
$$

Where:

```text
Delta V = V_final - V_initial
```

Expansion:

```text
Delta V > 0, so w < 0
```

Compression:

```text
Delta V < 0, so w > 0
```

## 20. Work in Reversible Expansion

For a reversible isothermal expansion of ideal gas:

$$
w_{rev} = -nRT \ln \frac{V_f}{V_i}
$$

Using base-10 logarithm:

$$
w_{rev} = -2.303 nRT \log \frac{V_f}{V_i}
$$

For expansion, `V_f > V_i`, so work is negative.

For compression, `V_f < V_i`, so work is positive.

## 21. Reversible Process

A reversible process is carried out so slowly that the system remains nearly in equilibrium at every stage.

Features:

1. Infinitely slow ideal process.
2. Can be reversed by infinitesimal change.
3. Gives maximum work in expansion.
4. Useful as a theoretical reference.

Real processes are usually irreversible.

## 22. Enthalpy

Enthalpy is defined as:

$$
H = U + pV
$$

It is a state function because `U`, `p`, and `V` are state functions.

At constant pressure:

$$
q_p = \Delta H
$$

This is why enthalpy is very useful for chemical reactions carried out in open flasks or under atmospheric pressure.

## 23. Relation Between Delta H and Delta U

For finite changes at constant pressure:

$$
\Delta H = \Delta U + p\Delta V
$$

For ideal gases:

$$
p\Delta V = \Delta n_g RT
$$

So:

$$
\Delta H = \Delta U + \Delta n_g RT
$$

Where:

```text
Delta n_g = moles of gaseous products - moles of gaseous reactants
```

Use only gaseous species when calculating `Delta n_g`.

## 24. When Delta H and Delta U Are Nearly Equal

`Delta H` and `Delta U` are nearly equal when:

1. No gases are involved.
2. Number of gaseous moles does not change.
3. Volume change is negligible.

If:

```text
Delta n_g = 0
```

Then:

```text
Delta H = Delta U
```

## 25. Extensive and Intensive Properties

Extensive properties depend on amount of matter.

Examples:

1. Mass.
2. Volume.
3. Internal energy.
4. Enthalpy.
5. Entropy.
6. Heat capacity.

Intensive properties do not depend on amount of matter.

Examples:

1. Temperature.
2. Pressure.
3. Density.
4. Molar volume.
5. Specific heat capacity.

## 26. Heat Capacity

Heat capacity `C` is the heat needed to raise the temperature of a system by 1 K or 1 deg C.

$$
q = C\Delta T
$$

Large heat capacity means a large amount of heat causes only a small temperature rise.

## 27. Molar Heat Capacity and Specific Heat

Molar heat capacity:

```text
heat needed to raise temperature of 1 mol by 1 K
```

Specific heat capacity:

```text
heat needed to raise temperature of 1 g by 1 K
```

For a sample:

$$
q = mc\Delta T
$$

Where:

```text
m = mass
c = specific heat capacity
Delta T = temperature change
```

If molar heat capacity is used:

$$
q = nC_m\Delta T
$$

## 28. Cp and Cv

`C_v` is heat capacity at constant volume.

`C_p` is heat capacity at constant pressure.

For one mole of ideal gas:

$$
C_p - C_v = R
$$

Reason:

At constant pressure, some heat is used to do expansion work, so `C_p` is greater than `C_v`.

## 29. Calorimetry

Calorimetry measures heat changes.

A calorimeter is used to measure temperature change.

Basic relation:

$$
q = C\Delta T
$$

Heat gained by calorimeter is equal in magnitude and opposite in sign to heat lost by reaction.

## 30. Bomb Calorimeter

Bomb calorimeter works at constant volume.

At constant volume:

```text
w = 0
```

So:

$$
\Delta U = q_v
$$

It is often used for combustion reactions.

## 31. Constant Pressure Calorimeter

At constant pressure:

$$
q_p = \Delta H
$$

If a reaction is exothermic:

```text
q_p < 0 and Delta H < 0
```

If a reaction is endothermic:

```text
q_p > 0 and Delta H > 0
```

## 32. Reaction Enthalpy

Reaction enthalpy is the enthalpy change during a chemical reaction.

For:

```text
Reactants -> Products
```

$$
\Delta_r H = \sum H_{products} - \sum H_{reactants}
$$

For standard conditions:

```text
Delta_r H^0
```

Standard state means pure substance at 1 bar at the specified temperature.

## 33. Standard Enthalpy of Formation

Standard enthalpy of formation is the enthalpy change when one mole of a compound is formed from its elements in their most stable standard states.

Example:

$$
H_2(g) + \frac{1}{2}O_2(g) \rightarrow H_2O(l)
$$

For elements in their reference states:

```text
Delta_f H^0 = 0
```

Examples of reference states:

1. `H2(g)` for hydrogen.
2. `O2(g)` for oxygen.
3. Graphite for carbon.
4. Rhombic sulfur for sulfur.

## 34. Using Formation Enthalpies

For a reaction:

$$
\Delta_r H^0 = \sum a_i\Delta_f H^0(products) - \sum b_i\Delta_f H^0(reactants)
$$

Remember:

1. Multiply each formation enthalpy by its stoichiometric coefficient.
2. Products minus reactants.
3. Elements in standard states have zero formation enthalpy.

## 35. Thermochemical Equations

A thermochemical equation is a balanced chemical equation with enthalpy change.

Example:

$$
C_2H_5OH(l) + 3O_2(g) \rightarrow 2CO_2(g) + 3H_2O(l)
$$

```text
Delta_r H^0 = -1367 kJ mol^-1
```

Important rules:

1. Coefficients represent moles.
2. If equation is multiplied, enthalpy is multiplied.
3. If equation is reversed, sign of enthalpy changes.
4. Physical states must be specified.

## 36. Hess's Law

Hess's law states:

```text
If a reaction occurs in several steps, total enthalpy change is the sum of enthalpy changes of the steps.
```

Reason:

Enthalpy is a state function.

Therefore, enthalpy change depends only on initial and final states.

## 37. Hess's Law Example: Formation of CO

Target:

$$
C(graphite) + \frac{1}{2}O_2(g) \rightarrow CO(g)
$$

Given:

$$
C(graphite) + O_2(g) \rightarrow CO_2(g)
$$

```text
Delta H = -393.5 kJ mol^-1
```

Given:

$$
CO(g) + \frac{1}{2}O_2(g) \rightarrow CO_2(g)
$$

```text
Delta H = -283.0 kJ mol^-1
```

Reverse second equation:

$$
CO_2(g) \rightarrow CO(g) + \frac{1}{2}O_2(g)
$$

```text
Delta H = +283.0 kJ mol^-1
```

Add:

```text
Delta H = -393.5 + 283.0 = -110.5 kJ mol^-1
```

## 38. Enthalpy of Phase Change

Phase changes occur at constant temperature and pressure.

| Process | Symbol | Sign |
|---|---|---|
| Fusion, solid to liquid | Delta_fus H | Positive |
| Vaporisation, liquid to gas | Delta_vap H | Positive |
| Sublimation, solid to gas | Delta_sub H | Positive |
| Freezing, liquid to solid | -Delta_fus H | Negative |
| Condensation, gas to liquid | -Delta_vap H | Negative |

Melting and vaporisation require heat, so their enthalpy changes are positive.

## 39. Enthalpy of Combustion

Standard enthalpy of combustion is the enthalpy change when one mole of a substance burns completely in oxygen under standard conditions.

Combustion reactions are usually exothermic:

```text
Delta_c H^0 < 0
```

Example:

Butane combustion releases a large amount of heat, which is why it is used as cooking gas.

## 40. Enthalpy of Atomisation

Enthalpy of atomisation is the enthalpy change when one mole of bonds is broken completely to form gaseous atoms, or when a substance is converted to gaseous atoms.

Examples:

$$
H_2(g) \rightarrow 2H(g)
$$

$$
Na(s) \rightarrow Na(g)
$$

Atomisation is endothermic.

## 41. Bond Enthalpy

Bond dissociation enthalpy is the enthalpy change when one mole of a particular covalent bond is broken in gaseous state.

Example:

$$
H_2(g) \rightarrow 2H(g)
$$

For polyatomic molecules, successive bond breaking energies may differ. Therefore, mean bond enthalpy is often used.

For gas-phase reactions:

$$
\Delta_r H^0 \approx \sum \text{bond enthalpies of reactants} - \sum \text{bond enthalpies of products}
$$

## 42. Lattice Enthalpy

Lattice enthalpy of an ionic solid is the enthalpy change when one mole of ionic solid separates into gaseous ions.

Example:

$$
NaCl(s) \rightarrow Na^+(g) + Cl^-(g)
$$

```text
Delta_lattice H^0 = +788 kJ mol^-1
```

It is usually determined indirectly by a Born-Haber cycle.

## 43. Enthalpy of Solution

Enthalpy of solution is the enthalpy change when one mole of a substance dissolves in a specified amount of solvent.

For ionic compounds:

```text
Delta_sol H^0 = Delta_lattice H^0 + Delta_hyd H^0
```

Where:

1. Lattice enthalpy is positive for separation of ions.
2. Hydration enthalpy is negative when ions are hydrated.

If lattice enthalpy is very high, the salt may be sparingly soluble.

## 44. Enthalpy of Dilution

Enthalpy of dilution is the enthalpy change when additional solvent is added to a solution.

It depends on:

1. Initial concentration.
2. Amount of solvent added.
3. Nature of solute and solvent.

For strong acids such as HCl, dilution can release heat.

## 45. Spontaneous Process

A spontaneous process has a tendency to occur without continuous external driving.

Important:

```text
Spontaneous does not mean fast.
```

Examples:

1. Gas expands into available volume.
2. Heat flows from hot body to cold body.
3. Carbon burns in oxygen once initiated.
4. Iron rusts over time.

## 46. Enthalpy Alone Is Not Enough

Many exothermic processes are spontaneous, but not all spontaneous processes are exothermic.

Examples of spontaneous processes driven by entropy:

1. Mixing of gases.
2. Dissolution of some salts.
3. Expansion of gas into vacuum.

Therefore, spontaneity depends on both enthalpy and entropy.

## 47. Entropy

Entropy `S` is a state function related to disorder, randomness, or dispersal of energy.

General trend:

```text
solid has lower entropy than liquid
liquid has lower entropy than gas
```

For the same substance:

```text
S(solid) < S(liquid) < S(gas)
```

## 48. Entropy Change

For a reversible process:

$$
\Delta S = \frac{q_{rev}}{T}
$$

Where:

```text
T is temperature in kelvin
```

Heat added at lower temperature produces a larger entropy change than the same heat added at higher temperature.

## 49. Entropy and Spontaneity

For system plus surroundings:

$$
\Delta S_{total} = \Delta S_{system} + \Delta S_{surroundings}
$$

For a spontaneous process:

```text
Delta S_total > 0
```

At equilibrium:

```text
Delta S_total = 0
```

## 50. Second Law of Thermodynamics

For an isolated system, spontaneous change occurs in the direction of increasing entropy.

Second law statement:

```text
The entropy of an isolated system increases in a spontaneous process.
```

For an isolated system:

```text
Delta U = 0
Delta S > 0 for spontaneous change
```

## 51. Third Law of Thermodynamics

Third law states:

```text
The entropy of a pure perfectly crystalline substance approaches zero as temperature approaches 0 K.
```

This permits calculation of absolute entropies of pure substances.

It applies to pure crystalline solids, not to solutions or supercooled liquids.

## 52. Gibbs Energy

Gibbs energy is defined as:

$$
G = H - TS
$$

At constant temperature:

$$
\Delta G = \Delta H - T\Delta S
$$

Gibbs energy combines enthalpy and entropy into one criterion for spontaneity at constant temperature and pressure.

## 53. Gibbs Criterion

At constant `T` and `p`:

| Delta G | Meaning |
|---:|---|
| Delta G < 0 | Process is spontaneous |
| Delta G = 0 | System is at equilibrium |
| Delta G > 0 | Process is nonspontaneous in forward direction |

`Delta G` is sometimes called free energy change because it measures energy available to do useful work under constant temperature and pressure.

## 54. Temperature and Spontaneity

Use:

$$
\Delta G = \Delta H - T\Delta S
$$

| Delta H | Delta S | Spontaneity |
|---|---|---|
| Negative | Positive | Spontaneous at all temperatures |
| Negative | Negative | Spontaneous at low temperature |
| Positive | Positive | Spontaneous at high temperature |
| Positive | Negative | Nonspontaneous at all temperatures |

High temperature favours processes with positive entropy change.

Low temperature favours processes where negative enthalpy dominates.

## 55. Gibbs Energy and Equilibrium

At equilibrium:

```text
Delta_r G = 0
```

Standard Gibbs energy change relates to equilibrium constant:

$$
\Delta_r G^0 = -RT \ln K
$$

Using common logarithm:

$$
\Delta_r G^0 = -2.303RT \log K
$$

If:

1. `K > 1`, then `Delta_r G^0 < 0`, products are favoured.
2. `K < 1`, then `Delta_r G^0 > 0`, reactants are favoured.
3. `K = 1`, then `Delta_r G^0 = 0`.

## 56. Formula Sheet

First law:

$$
\Delta U = q + w
$$

Pressure-volume work:

$$
w = -p_{ext}\Delta V
$$

Reversible isothermal work:

$$
w_{rev} = -nRT\ln\frac{V_f}{V_i}
$$

Enthalpy:

$$
H = U + pV
$$

Relation for ideal gases:

$$
\Delta H = \Delta U + \Delta n_gRT
$$

Heat:

$$
q = C\Delta T
$$

Specific heat:

$$
q = mc\Delta T
$$

Molar heat capacity:

$$
q = nC_m\Delta T
$$

Ideal gas heat capacities:

$$
C_p - C_v = R
$$

Entropy:

$$
\Delta S = \frac{q_{rev}}{T}
$$

Gibbs energy:

$$
\Delta G = \Delta H - T\Delta S
$$

Gibbs energy and equilibrium:

$$
\Delta_rG^0 = -2.303RT\log K
$$

## 57. Unit Discipline

Always keep units consistent.

Common conversions:

```text
1 kJ = 1000 J
R = 8.314 J K^-1 mol^-1
R = 0.008314 kJ K^-1 mol^-1
Temperature in kelvin = deg C + 273.15
```

When using `Delta G = Delta H - T Delta S`, convert entropy to the same energy unit as enthalpy.

Example:

```text
Delta S = 44.1 J K^-1 = 0.0441 kJ K^-1
```

## 58. Worked Example: Change in Internal Energy

Question:

Heat absorbed by system is 701 J. Work done by system is 394 J. Find `Delta U`.

Solution:

Heat absorbed:

```text
q = +701 J
```

Work done by system:

```text
w = -394 J
```

First law:

$$
\Delta U = q + w
$$

$$
\Delta U = 701 - 394 = 307 \text{ J}
$$

Answer:

```text
Delta U = +307 J
```

## 59. Worked Example: Methane Combustion Delta H and Delta U

For methane combustion:

$$
CH_4(g) + 2O_2(g) \rightarrow CO_2(g) + 2H_2O(l)
$$

Gas moles:

```text
products = 1
reactants = 3
Delta n_g = 1 - 3 = -2
```

If:

```text
Delta U^0 = -X kJ mol^-1
```

Then:

$$
\Delta H^0 = \Delta U^0 + \Delta n_gRT
$$

$$
\Delta H^0 = -X - 2RT
$$

Therefore:

```text
Delta H^0 < Delta U^0
```

Because `Delta H` is more negative.

## 60. Worked Example: Formation Enthalpy of Methane

Given combustion enthalpies:

```text
CH4 combustion = -890.3 kJ mol^-1
C graphite combustion = -393.5 kJ mol^-1
H2 combustion = -285.8 kJ mol^-1
```

Target:

$$
C(graphite) + 2H_2(g) \rightarrow CH_4(g)
$$

Using Hess's law:

$$
\Delta_fH^0(CH_4) = [\Delta_cH^0(C) + 2\Delta_cH^0(H_2)] - \Delta_cH^0(CH_4)
$$

Substitute:

$$
= [-393.5 + 2(-285.8)] - (-890.3)
$$

$$
= -965.1 + 890.3 = -74.8 \text{ kJ mol}^{-1}
$$

Answer:

```text
Delta_f H^0 of CH4(g) = -74.8 kJ mol^-1
```

## 61. Worked Example: Cyanamide Reaction

Given:

```text
Delta U = -742.7 kJ mol^-1
T = 298 K
```

Reaction:

$$
NH_2CN(s) + \frac{3}{2}O_2(g) \rightarrow N_2(g) + CO_2(g) + H_2O(l)
$$

Gas moles:

```text
products = 2
reactants = 1.5
Delta n_g = 0.5
```

Use:

$$
\Delta H = \Delta U + \Delta n_gRT
$$

$$
\Delta n_gRT = 0.5 \times 8.314 \times 298 \text{ J mol}^{-1}
$$

$$
= 1239 \text{ J mol}^{-1} = 1.239 \text{ kJ mol}^{-1}
$$

Therefore:

$$
\Delta H = -742.7 + 1.239 = -741.5 \text{ kJ mol}^{-1}
$$

Answer:

```text
Delta H = -741.5 kJ mol^-1
```

## 62. Worked Example: Heat Needed for Aluminium

Given:

```text
mass Al = 60.0 g
molar mass Al = 27.0 g mol^-1
C_m = 24 J mol^-1 K^-1
Delta T = 55 - 35 = 20 K
```

Moles:

$$
n = \frac{60.0}{27.0} = 2.222 \text{ mol}
$$

Heat:

$$
q = nC_m\Delta T
$$

$$
q = 2.222 \times 24 \times 20 = 1066.6 \text{ J}
$$

$$
q = 1.07 \text{ kJ}
$$

Answer:

```text
Heat required = 1.07 kJ
```

## 63. Worked Example: Freezing Water from 10 deg C to Ice at -10 deg C

Steps:

1. Cool liquid water from 10 deg C to 0 deg C.
2. Freeze water at 0 deg C.
3. Cool ice from 0 deg C to -10 deg C.

Given:

```text
n = 1 mol
Delta_fus H = 6.03 kJ mol^-1
Cp liquid = 75.3 J mol^-1 K^-1
Cp ice = 36.8 J mol^-1 K^-1
```

Step 1:

$$
\Delta H_1 = 1 \times 75.3 \times (0 - 10) = -753 \text{ J}
$$

$$
= -0.753 \text{ kJ}
$$

Step 2:

$$
\Delta H_2 = -6.03 \text{ kJ}
$$

Step 3:

$$
\Delta H_3 = 1 \times 36.8 \times (-10 - 0) = -368 \text{ J}
$$

$$
= -0.368 \text{ kJ}
$$

Total:

$$
\Delta H = -0.753 - 6.03 - 0.368
$$

$$
= -7.151 \text{ kJ}
$$

Answer:

```text
Delta H = -7.15 kJ mol^-1
```

## 64. Worked Example: Heat Released on Forming CO2

Given:

```text
Delta_c H of carbon = -393.5 kJ mol^-1
mass CO2 = 35.2 g
molar mass CO2 = 44.0 g mol^-1
```

Moles of CO2:

$$
n = \frac{35.2}{44.0} = 0.800 \text{ mol}
$$

Heat released:

$$
0.800 \times 393.5 = 314.8 \text{ kJ}
$$

For the reaction enthalpy:

```text
Delta H = -314.8 kJ
```

Heat released as a positive amount:

```text
314.8 kJ
```

## 65. Worked Example: Reaction Enthalpy from Formation Enthalpies

Reaction:

$$
N_2O_4(g) + 3CO(g) \rightarrow N_2O(g) + 3CO_2(g)
$$

Given formation enthalpies:

```text
CO = -110 kJ mol^-1
CO2 = -393 kJ mol^-1
N2O = 81 kJ mol^-1
N2O4 = 9.7 kJ mol^-1
```

Use:

$$
\Delta_rH = \sum \Delta_fH(products) - \sum \Delta_fH(reactants)
$$

Products:

$$
81 + 3(-393) = 81 - 1179 = -1098 \text{ kJ}
$$

Reactants:

$$
9.7 + 3(-110) = 9.7 - 330 = -320.3 \text{ kJ}
$$

Reaction enthalpy:

$$
\Delta_rH = -1098 - (-320.3) = -777.7 \text{ kJ mol}^{-1}
$$

Answer:

```text
Delta_r H = -777.7 kJ mol^-1
```

## 66. Worked Example: Formation Enthalpy of Ammonia

Given:

$$
N_2(g) + 3H_2(g) \rightarrow 2NH_3(g)
$$

```text
Delta_r H^0 = -92.4 kJ mol^-1
```

This forms 2 mol of ammonia.

For 1 mol:

$$
\Delta_fH^0(NH_3) = \frac{-92.4}{2}
$$

$$
= -46.2 \text{ kJ mol}^{-1}
$$

Answer:

```text
Delta_f H^0 of NH3(g) = -46.2 kJ mol^-1
```

## 67. Worked Example: Formation Enthalpy of Methanol

Combustion of methanol:

$$
CH_3OH(l) + \frac{3}{2}O_2(g) \rightarrow CO_2(g) + 2H_2O(l)
$$

```text
Delta_rH^0 = -726 kJ mol^-1
```

Given:

```text
Delta_fH^0(CO2) = -393 kJ mol^-1
Delta_fH^0(H2O) = -286 kJ mol^-1
Delta_fH^0(O2) = 0
```

Let:

```text
Delta_fH^0(CH3OH) = x
```

Use:

$$
-726 = [-393 + 2(-286)] - [x]
$$

$$
-726 = -965 - x
$$

$$
x = -239 \text{ kJ mol}^{-1}
$$

Answer:

```text
Delta_f H^0 of CH3OH(l) = -239 kJ mol^-1
```

## 68. Worked Example: C-Cl Bond Enthalpy in CCl4

Required:

$$
CCl_4(g) \rightarrow C(g) + 4Cl(g)
$$

Given:

```text
Delta_vapH^0(CCl4) = 30.5 kJ mol^-1
Delta_fH^0(CCl4,l) = -135.5 kJ mol^-1
Delta_aH^0(C) = 715.0 kJ mol^-1
Delta_aH^0(Cl2) = 242 kJ mol^-1
```

First convert formation enthalpy to gas:

$$
\Delta_fH^0(CCl_4,g) = -135.5 + 30.5 = -105.0 \text{ kJ mol}^{-1}
$$

Elements to gaseous atoms:

```text
C(graphite) -> C(g): 715.0 kJ
2Cl2(g) -> 4Cl(g): 2 x 242 = 484 kJ
```

Total atom enthalpy from elements:

$$
715.0 + 484 = 1199.0 \text{ kJ}
$$

Process from `CCl4(g)` to atoms:

$$
\Delta H = 1199.0 - (-105.0) = 1304.0 \text{ kJ mol}^{-1}
$$

Mean C-Cl bond enthalpy:

$$
\frac{1304.0}{4} = 326.0 \text{ kJ mol}^{-1}
$$

Answer:

```text
Delta H for atomisation of CCl4(g) = 1304 kJ mol^-1
Mean C-Cl bond enthalpy = 326 kJ mol^-1
```

## 69. Worked Example: Temperature for Spontaneity

Given:

```text
Delta H = 400 kJ mol^-1
Delta S = 0.2 kJ K^-1 mol^-1
```

For spontaneity:

$$
\Delta G = \Delta H - T\Delta S < 0
$$

At threshold:

$$
\Delta G = 0
$$

So:

$$
T = \frac{\Delta H}{\Delta S}
$$

$$
T = \frac{400}{0.2} = 2000 \text{ K}
$$

Answer:

```text
Reaction becomes spontaneous above 2000 K.
```

## 70. Worked Example: Signs for 2Cl(g) -> Cl2(g)

Reaction:

$$
2Cl(g) \rightarrow Cl_2(g)
$$

Enthalpy:

Bond formation releases energy.

```text
Delta H < 0
```

Entropy:

Two gas atoms become one gas molecule, so disorder decreases.

```text
Delta S < 0
```

Answer:

```text
Delta H negative, Delta S negative.
```

## 71. Worked Example: Delta G from Delta U and Delta S

Reaction:

$$
2A(g) + B(g) \rightarrow 2D(g)
$$

Given:

```text
Delta U^0 = -10.5 kJ
Delta S^0 = -44.1 J K^-1 = -0.0441 kJ K^-1
T = 298 K
```

Gas moles:

```text
products = 2
reactants = 3
Delta n_g = -1
```

Convert `Delta U` to `Delta H`:

$$
\Delta H = \Delta U + \Delta n_gRT
$$

$$
\Delta H = -10.5 + (-1)(0.008314)(298)
$$

$$
\Delta H = -10.5 - 2.48 = -12.98 \text{ kJ}
$$

Now:

$$
\Delta G = \Delta H - T\Delta S
$$

$$
\Delta G = -12.98 - 298(-0.0441)
$$

$$
\Delta G = -12.98 + 13.14 = +0.16 \text{ kJ}
$$

Answer:

```text
Delta G is slightly positive, so the reaction is not spontaneous under these standard conditions.
```

## 72. Worked Example: Delta G from Equilibrium Constant

Given:

```text
K = 10
R = 8.314 J K^-1 mol^-1
T = 300 K
```

Use:

$$
\Delta G^0 = -2.303RT\log K
$$

Since:

```text
log 10 = 1
```

$$
\Delta G^0 = -2.303 \times 8.314 \times 300 \times 1
$$

$$
= -5744 \text{ J mol}^{-1}
$$

$$
= -5.74 \text{ kJ mol}^{-1}
$$

Answer:

```text
Delta G^0 = -5.74 kJ mol^-1
```

## 73. Worked Example: Thermodynamic Stability of NO

Given:

$$
\frac{1}{2}N_2(g) + \frac{1}{2}O_2(g) \rightarrow NO(g)
$$

```text
Delta_rH^0 = +90 kJ mol^-1
```

Formation of NO from elements is endothermic, so NO is thermodynamically less stable with respect to its elements.

Also:

$$
NO(g) + \frac{1}{2}O_2(g) \rightarrow NO_2(g)
$$

```text
Delta_rH^0 = -74 kJ mol^-1
```

NO releases heat on oxidation to `NO2`, so it has a thermodynamic tendency to form `NO2`.

Conclusion:

```text
NO is thermodynamically unstable with respect to decomposition into elements and oxidation to NO2, though kinetic factors may affect observed rate.
```

## 74. Worked Example: Entropy Change of Surroundings

Formation of water:

```text
Delta_fH^0 = -286 kJ mol^-1
T = 298 K
```

Heat released by system:

```text
q_system = -286 kJ
```

Heat gained by surroundings:

```text
q_surroundings = +286 kJ
```

Entropy change of surroundings:

$$
\Delta S_{surr} = \frac{q_{surr}}{T}
$$

$$
= \frac{286000}{298}
$$

$$
= 959.7 \text{ J K}^{-1}\text{ mol}^{-1}
$$

Answer:

```text
Delta S_surroundings = +960 J K^-1 mol^-1
```

## 75. Exercise Support: Multiple Choice Answers

Thermodynamic state function:

```text
whose value is independent of path
```

Adiabatic condition:

```text
q = 0
```

Enthalpy of elements in standard states:

```text
zero
```

Methane combustion relation:

```text
Delta H^0 < Delta U^0
```

Formation enthalpy of methane:

```text
-74.8 kJ mol^-1
```

Exothermic reaction with positive entropy change:

```text
spontaneous at all temperatures
```

## 76. Exercise Support: Isolated System and Entropy

For an isolated system:

```text
Delta U = 0
```

For a spontaneous process in an isolated system:

```text
Delta S > 0
```

At equilibrium:

```text
Delta S = 0 for further change
```

The entropy of an isolated system tends to increase until equilibrium is reached.

## 77. Common Student Confusions

| Confusion | Correct idea |
|---|---|
| Heat is stored inside a system | Heat is energy in transit |
| Work done by system is positive | In chemistry convention, work done by system is negative |
| q and w are state functions | q and w are path functions |
| Delta U depends on path | Delta U is a state function |
| Delta H always equals Delta U | Only when pDeltaV or Delta n_gRT is zero |
| Standard enthalpy of element is always one | It is zero in reference state |
| Spontaneous means fast | Spontaneous means thermodynamic tendency |
| Exothermic always means spontaneous | Entropy also matters |
| Positive Delta S always means spontaneous | Delta H and temperature also matter |
| Delta G positive means forward reaction is spontaneous | Delta G negative means forward reaction is spontaneous |
| K greater than 1 gives positive Delta G^0 | K greater than 1 gives negative Delta G^0 |

## 78. Exam Answer: First Law

The first law of thermodynamics states that energy can neither be created nor destroyed. For a closed system, the change in internal energy is equal to heat supplied to the system plus work done on the system:

$$
\Delta U = q + w
$$

If the system is isolated, no heat or work is exchanged, so `Delta U = 0`.

## 79. Exam Answer: State Function

A state function is a property whose value depends only on the state of the system and not on the path used to reach that state. Internal energy, enthalpy, entropy, Gibbs energy, pressure, volume, and temperature are state functions. Heat and work are not state functions because their values depend on the path.

## 80. Exam Answer: Enthalpy

Enthalpy is a thermodynamic state function defined as:

$$
H = U + pV
$$

At constant pressure, heat absorbed or evolved by a system is equal to enthalpy change:

$$
q_p = \Delta H
$$

For ideal gases:

$$
\Delta H = \Delta U + \Delta n_gRT
$$

## 81. Exam Answer: Hess's Law

Hess's law states that if a reaction takes place in several steps, the total enthalpy change is the sum of enthalpy changes of all steps. This is because enthalpy is a state function and depends only on initial and final states, not on the path.

## 82. Exam Answer: Entropy

Entropy is a thermodynamic state function that measures disorder or dispersal of energy. Entropy generally increases from solid to liquid to gas. For a reversible process:

$$
\Delta S = \frac{q_{rev}}{T}
$$

For a spontaneous process in an isolated system, total entropy increases.

## 83. Exam Answer: Gibbs Energy

Gibbs energy is defined as:

$$
G = H - TS
$$

At constant temperature:

$$
\Delta G = \Delta H - T\Delta S
$$

At constant temperature and pressure, `Delta G < 0` means spontaneous, `Delta G = 0` means equilibrium, and `Delta G > 0` means nonspontaneous in the forward direction.

## 84. Exam Answer: Delta G and Equilibrium

Standard Gibbs energy change is related to equilibrium constant by:

$$
\Delta_rG^0 = -RT\ln K
$$

or:

$$
\Delta_rG^0 = -2.303RT\log K
$$

If `K > 1`, products are favoured and `Delta_rG^0` is negative. If `K < 1`, reactants are favoured and `Delta_rG^0` is positive.

## 85. Short Answer Practice

1. Define thermodynamics.
2. What are system and surroundings?
3. Define boundary.
4. Distinguish open, closed, and isolated systems.
5. What is a state function?
6. Why are heat and work path functions?
7. Define internal energy.
8. State the first law of thermodynamics.
9. What is the sign of work during expansion?
10. What is an adiabatic process?
11. Write the formula for pressure-volume work.
12. Define enthalpy.
13. Why is enthalpy useful at constant pressure?
14. What is `Delta n_g`?
15. Distinguish extensive and intensive properties.
16. Define heat capacity.
17. State the relation between `C_p` and `C_v` for ideal gas.
18. What is calorimetry?
19. What is standard state?
20. Define standard enthalpy of formation.
21. State Hess's law.
22. Define enthalpy of combustion.
23. Define bond enthalpy.
24. Define entropy.
25. State the second law.
26. State the third law.
27. Define Gibbs energy.
28. What is the Gibbs criterion for spontaneity?
29. Relate Gibbs energy to equilibrium constant.
30. Why does spontaneous not mean fast?

## 86. Long Answer Practice

1. Explain the first law of thermodynamics and its sign conventions.
2. Derive pressure-volume work for constant external pressure.
3. Explain reversible work for ideal gas expansion.
4. Derive the relation between enthalpy and internal energy.
5. Explain calorimetry at constant volume and constant pressure.
6. Explain standard enthalpy of formation and use it to calculate reaction enthalpy.
7. Explain Hess's law with an example.
8. Describe different enthalpy changes: fusion, vaporisation, sublimation, combustion, atomisation, bond enthalpy, solution, and dilution.
9. Explain entropy and spontaneity.
10. Explain Gibbs energy and the effect of temperature on spontaneity.
11. Derive the relation between `Delta G^0` and equilibrium constant.
12. Solve a thermodynamics numerical by clearly tracking units and signs.

## 87. Memory Map

```text
Thermodynamics
-> system and surroundings
   -> open
   -> closed
   -> isolated
-> state functions
   -> U
   -> H
   -> S
   -> G
-> path functions
   -> q
   -> w
-> first law
   -> Delta U = q + w
-> work
   -> w = -p_ext Delta V
-> enthalpy
   -> H = U + pV
   -> Delta H = Delta U + Delta n_gRT
-> calorimetry
   -> qv = Delta U
   -> qp = Delta H
-> reaction enthalpy
   -> formation enthalpy
   -> Hess's law
   -> bond enthalpy
-> entropy
   -> disorder
   -> Delta S = qrev/T
   -> second law
-> Gibbs energy
   -> Delta G = Delta H - T Delta S
   -> spontaneity
   -> equilibrium
```

## 88. Mistakes to Avoid

1. Do not use deg C in gas-law temperature calculations; use kelvin.
2. Do not forget to convert J to kJ when combining `T Delta S` with `Delta H`.
3. Do not include solids and liquids in `Delta n_g`.
4. Do not assign nonzero standard formation enthalpy to elements in reference states.
5. Do not forget that reversing a thermochemical equation reverses the sign of `Delta H`.
6. Do not forget that multiplying an equation multiplies `Delta H`.
7. Do not call `q` and `w` state functions.
8. Do not assume every exothermic reaction is spontaneous at all temperatures.
9. Do not assume positive entropy alone guarantees spontaneity.
10. Do not confuse `Delta G` with `Delta G^0`.
11. Do not use `R = 8.314` with kJ unless you convert it to `0.008314`.
12. Do not ignore signs in work calculations.

## 89. One-Line Revision Points

1. Thermodynamics studies energy changes.
2. System plus surroundings equals universe.
3. Open systems exchange matter and energy.
4. Closed systems exchange energy but not matter.
5. Isolated systems exchange neither energy nor matter.
6. State functions depend only on state.
7. Heat and work are path functions.
8. Internal energy is a state function.
9. First law is `Delta U = q + w`.
10. Heat absorbed by system is positive.
11. Work done on system is positive.
12. Expansion work is negative.
13. Adiabatic means `q = 0`.
14. Enthalpy is `H = U + pV`.
15. At constant pressure, `q_p = Delta H`.
16. At constant volume, `q_v = Delta U`.
17. `Delta H = Delta U + Delta n_gRT`.
18. Extensive properties depend on amount.
19. Intensive properties do not depend on amount.
20. Heat capacity connects heat and temperature change.
21. Hess's law works because enthalpy is a state function.
22. Formation enthalpy of elements in reference states is zero.
23. Fusion and vaporisation enthalpies are positive.
24. Combustion enthalpies are usually negative.
25. Entropy measures disorder.
26. Spontaneous processes increase total entropy.
27. Third law assigns zero entropy to perfect crystal at 0 K.
28. Gibbs energy is `G = H - TS`.
29. `Delta G < 0` means spontaneous at constant T and p.
30. `Delta G^0 = -2.303RT log K`.

## 90. Glossary

| Term | Meaning |
|---|---|
| Adiabatic | No heat exchange |
| Boundary | Surface separating system and surroundings |
| Calorimeter | Device for measuring heat change |
| Closed system | Exchanges energy but not matter |
| Entropy | State function related to disorder |
| Enthalpy | Heat content function, `H = U + pV` |
| Extensive property | Depends on amount of matter |
| Gibbs energy | State function for spontaneity at constant T and p |
| Heat | Energy transfer due to temperature difference |
| Heat capacity | Heat needed per unit temperature rise |
| Hess's law | Enthalpy change independent of path |
| Intensive property | Independent of amount of matter |
| Internal energy | Total energy of system |
| Isolated system | Exchanges neither matter nor energy |
| Open system | Exchanges matter and energy |
| Path function | Depends on path |
| Reversible process | Ideal process reversible by infinitesimal change |
| Spontaneous | Has tendency to occur without external driving |
| Standard state | Pure substance at 1 bar |
| State function | Depends only on state |
| Surroundings | Everything outside system |
| System | Part of universe under study |
| Work | Energy transfer by force through distance |

## 91. Final Revision Sheet

Before leaving this chapter, make sure you can answer:

1. What is thermodynamics?
2. What are system, surroundings, and boundary?
3. How do open, closed, and isolated systems differ?
4. What is a state function?
5. Why are heat and work path functions?
6. What is internal energy?
7. What is the first law?
8. What sign is assigned to heat absorbed by system?
9. What sign is assigned to work done by system?
10. What is pressure-volume work?
11. What is reversible work?
12. What is enthalpy?
13. How are `Delta H` and `Delta U` related?
14. What is heat capacity?
15. How do `C_p` and `C_v` differ?
16. What does a bomb calorimeter measure?
17. What does constant pressure calorimetry measure?
18. What is reaction enthalpy?
19. What is standard enthalpy of formation?
20. What is Hess's law?
21. What are enthalpy of combustion and atomisation?
22. What is bond enthalpy?
23. What is lattice enthalpy?
24. What is entropy?
25. What are the second and third laws?
26. What is Gibbs energy?
27. How does temperature affect spontaneity?
28. What is the relation between `Delta G^0` and `K`?
29. How do you handle units in Gibbs calculations?
30. Why does thermodynamics not decide reaction rate?

## 92. End Summary

Thermodynamics studies energy changes in macroscopic systems. A system is separated from surroundings by a boundary and may be open, closed, or isolated. Internal energy is a state function, while heat and work depend on path. The first law, `Delta U = q + w`, expresses conservation of energy. Pressure-volume work is negative for expansion and positive for compression under the chemistry sign convention. Enthalpy, `H = U + pV`, is useful because heat at constant pressure equals `Delta H`. Reaction enthalpies can be calculated using formation enthalpies and Hess's law. Entropy measures disorder and helps decide spontaneity; total entropy increases in a spontaneous process. Gibbs energy combines enthalpy and entropy through `Delta G = Delta H - T Delta S`, giving the main spontaneity criterion at constant temperature and pressure. Standard Gibbs energy also connects thermodynamics with equilibrium through `Delta G^0 = -2.303RT log K`.
