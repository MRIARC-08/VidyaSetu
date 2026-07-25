# Chapter 3: Chemical Kinetics
### NCERT Class 12 - Chemistry Part 1

## Chapter at a Glance

Chemical kinetics studies the speed of chemical reactions and the factors that control that speed. Thermodynamics tells whether a reaction is possible; kinetics tells how fast it occurs. Diamond is thermodynamically capable of changing to graphite, but the rate is extremely slow. This difference between possibility and speed is the reason kinetics is a separate topic.

This chapter is built around rate of reaction, rate law, order, molecularity, integrated rate equations, half-life, temperature dependence, Arrhenius equation, catalysis, and collision theory.

## Learning Outcomes

By the end of this chapter, you should be able to:

- define average rate and instantaneous rate;
- express rate in terms of reactant disappearance and product formation;
- write rate law from experimental data;
- distinguish order from molecularity;
- identify zero-order and first-order reactions from equations and graphs;
- calculate rate constant and half-life;
- explain temperature dependence of reaction rate;
- use Arrhenius equation for activation energy problems;
- explain catalyst action through activation energy;
- describe collision theory and the role of orientation.

## Key Terms

| Term | Meaning |
|---|---|
| Reaction rate | Change in concentration of reactant or product per unit time. |
| Average rate | Rate measured over a finite time interval. |
| Instantaneous rate | Rate at a particular moment. |
| Rate law | Experimental relation between rate and concentration. |
| Rate constant | Proportionality constant in rate law. |
| Order | Sum of powers of concentration terms in rate law. |
| Molecularity | Number of reacting species colliding in an elementary step. |
| Half-life | Time required for concentration of a reactant to become half. |
| Activation energy | Minimum energy needed for effective collision. |
| Catalyst | Substance that changes reaction rate without being consumed. |

## Quick Learning Map

| Area | Main idea | Key expression |
|---|---|---|
| Rate | Speed of concentration change | `rate = -Delta[R] / Delta t` |
| Rate law | Found experimentally | `rate = k[A]^x[B]^y` |
| Zero order | Rate independent of concentration | `[R] = [R]0 - kt` |
| First order | Rate proportional to concentration | `k = (2.303/t) log([R]0/[R])` |
| Half-life | Time for half completion | `t1/2 = 0.693/k` for first order |
| Temperature | Rate rises with temperature | `k = A e^(-Ea/RT)` |

# Unit 3A: Rate of Reaction

Rate of reaction measures how fast reactant concentration decreases or product concentration increases.

For:

`R -> P`

Average rate of disappearance of reactant:

`rate = -Delta[R] / Delta t`

Average rate of appearance of product:

`rate = Delta[P] / Delta t`

The negative sign for reactant disappearance makes the rate positive because reactant concentration decreases with time.

## Rate and Stoichiometry

For:

`aA + bB -> cC + dD`

`rate = -(1/a) d[A]/dt = -(1/b) d[B]/dt = (1/c) d[C]/dt = (1/d) d[D]/dt`

Stoichiometric coefficients must be included when defining a single reaction rate.

# Unit 3B: Average Rate vs Instantaneous Rate

Average rate is measured over a time interval. Instantaneous rate is measured at a particular time and is obtained from slope of tangent to concentration-time graph.

| Feature | Average rate | Instantaneous rate |
|---|---|---|
| Time basis | Interval | Specific moment |
| Graph method | Slope of chord | Slope of tangent |
| Use | Approximate reaction speed | Exact speed at that time |

Rate usually decreases with time because reactant concentration decreases.

# Unit 3C: Factors Affecting Reaction Rate

| Factor | Effect |
|---|---|
| Concentration | Higher concentration usually increases rate. |
| Temperature | Higher temperature increases kinetic energy and effective collisions. |
| Catalyst | Provides path with lower activation energy. |
| Surface area | Finely divided solids react faster. |
| Nature of reactants | Ionic reactions are often faster than covalent bond-breaking reactions. |
| Medium | Solvent and pH can change mechanism and rate. |

# Unit 3D: Rate Law and Rate Constant

The rate law expresses reaction rate in terms of molar concentration of reactants. It is determined experimentally, not by simply reading the balanced equation.

For:

`aA + bB -> products`

Rate law may be:

`rate = k[A]^x[B]^y`

Here:

- `k` is rate constant;
- `x` is order with respect to A;
- `y` is order with respect to B;
- total order is `x + y`.

## Important Point

Balanced equation coefficients and rate-law powers are not necessarily same. They match only for an elementary step.

# Unit 3E: Order of Reaction

Order is the sum of powers of concentration terms in the rate law.

Examples:

| Rate law | Order |
|---|---|
| `rate = k` | Zero order |
| `rate = k[A]` | First order |
| `rate = k[A]^2` | Second order |
| `rate = k[A][B]` | Second order |
| `rate = k[A]^(1/2)[B]^2` | `2.5` order |

Order can be zero, whole number, fraction, or even negative. It is experimental.

# Unit 3F: Molecularity

Molecularity is the number of reacting species involved in an elementary step.

| Feature | Order | Molecularity |
|---|---|---|
| Basis | Rate law | Mechanism step |
| Determination | Experimental | Theoretical for elementary step |
| Values | Zero, fraction, integer | Positive integer only |
| Applies to | Overall reaction | Elementary step |
| Can be zero? | Yes | No |

Common molecularities are unimolecular, bimolecular, and rarely termolecular.

# Unit 3G: Integrated Rate Equations

Integrated rate equations connect concentration with time. They are used to calculate rate constant, remaining concentration, and half-life.

## Zero-Order Reaction

Rate law:

`rate = k`

Integrated equation:

`[R] = [R]0 - kt`

Graph:

- plot `[R]` against `t`;
- straight line with slope `-k`;
- intercept `[R]0`.

Half-life:

`t1/2 = [R]0 / (2k)`

For zero order, half-life depends on initial concentration.

## First-Order Reaction

Rate law:

`rate = k[R]`

Integrated equation:

`k = (2.303/t) log([R]0/[R])`

Alternative:

`[R] = [R]0 e^(-kt)`

Graph:

- plot `log[R]` against `t`;
- straight line with slope `-k/2.303`.

Half-life:

`t1/2 = 0.693/k`

For first order, half-life is independent of initial concentration.

# Unit 3H: Identifying Reaction Order

| Evidence | Likely order |
|---|---|
| Rate remains constant as concentration changes | Zero order |
| `[R]` vs `t` is straight line | Zero order |
| `log[R]` vs `t` is straight line | First order |
| Half-life independent of initial concentration | First order |
| Half-life proportional to initial concentration | Zero order |

## Experimental Initial Rate Method

To find order with respect to A:

1. Compare two experiments where B is constant.
2. See how rate changes when A changes.
3. If doubling A doubles rate, order in A is 1.
4. If doubling A quadruples rate, order in A is 2.
5. If changing A has no effect, order in A is 0.

# Unit 3I: Pseudo First-Order Reactions

Sometimes a reaction is actually second order but behaves like first order because one reactant is present in large excess.

Example:

`CH3COOC2H5 + H2O -> CH3COOH + C2H5OH`

Water is present in very large excess, so its concentration remains almost constant. The rate depends mainly on ester concentration and appears first order.

# Unit 3J: Temperature Dependence of Rate

Reaction rate generally increases with temperature. A common rule is that rate may become nearly double for every 10 K rise in temperature, though this is only approximate.

The rate constant changes with temperature according to Arrhenius equation:

`k = A e^(-Ea/RT)`

Taking logarithm:

`log k = log A - Ea/(2.303 R T)`

For two temperatures:

`log(k2/k1) = (Ea / 2.303R) [(T2 - T1)/(T1 T2)]`

## Meaning of Terms

| Term | Meaning |
|---|---|
| `k` | Rate constant |
| `A` | Frequency factor |
| `Ea` | Activation energy |
| `R` | Gas constant |
| `T` | Absolute temperature |

# Unit 3K: Activation Energy

Activation energy is the minimum energy reactant molecules must possess for reaction to occur. Molecules with energy below activation energy may collide but will not form products.

Lower activation energy means larger fraction of molecules can react, so rate is faster.

## Energy Profile

In an energy profile:

- reactants start at one energy level;
- activated complex lies at the highest point;
- products lie at final energy level;
- vertical gap from reactants to activated complex is activation energy;
- vertical gap between reactants and products is enthalpy change.

# Unit 3L: Catalysis

A catalyst changes reaction rate without being consumed. It provides an alternative pathway with lower activation energy.

Important points:

- catalyst does not change overall `Delta G`;
- catalyst does not change equilibrium constant;
- catalyst helps equilibrium be reached faster;
- catalyst participates in mechanism but is regenerated.

# Unit 3M: Collision Theory

Collision theory explains reaction rate in terms of molecular collisions. For a reaction to occur, molecules must:

1. collide with enough energy;
2. collide with proper orientation.

Rate depends on effective collisions, not total collisions.

Steric factor accounts for proper orientation. Even if molecules have enough energy, wrong orientation may prevent product formation.

# Unit 3N: Formula Bank

| Purpose | Formula |
|---|---|
| Average rate | `rate = -Delta[R]/Delta t` |
| General rate law | `rate = k[A]^x[B]^y` |
| Zero-order integrated law | `[R] = [R]0 - kt` |
| Zero-order half-life | `t1/2 = [R]0/(2k)` |
| First-order integrated law | `k = (2.303/t) log([R]0/[R])` |
| First-order half-life | `t1/2 = 0.693/k` |
| Arrhenius equation | `k = A e^(-Ea/RT)` |
| Two-temperature Arrhenius form | `log(k2/k1) = Ea(T2-T1)/(2.303 R T1 T2)` |

# Unit 3O: Unit of Rate Constant

For a reaction of order `n`:

`unit of k = (mol L^-1)^(1-n) s^-1`

Examples:

| Order | Unit of `k` |
|---|---|
| Zero | `mol L^-1 s^-1` |
| First | `s^-1` |
| Second | `L mol^-1 s^-1` |
| Third | `L^2 mol^-2 s^-1` |

# Unit 3P: Problem-Solving Toolkit

| Clue in question | Method |
|---|---|
| Concentration changes over a time interval | Average rate |
| Initial rates table | Compare experiments |
| `log[R]` and time | First-order equation |
| Half-life independent of initial concentration | First order |
| Straight `[R]` vs time graph | Zero order |
| Rate doubles on temperature rise | Temperature coefficient or Arrhenius |
| Two `k` values at two temperatures | Arrhenius two-temperature equation |
| Catalyst explanation | Lower activation energy pathway |

# Unit 3Q: High-Quality Example

Question: A first-order reaction has rate constant `1.15 x 10^-3 s^-1`. How long will it take for 5 g of reactant to reduce to 3 g?

Answer method:

Use the first-order equation:

`k = (2.303/t) log([R]0/[R])`

Here, amount is proportional to concentration, so use masses:

`t = (2.303/k) log(5/3)`

Substitute `k = 1.15 x 10^-3 s^-1`.

The important idea is that first-order equations can use concentration, pressure, or mass if each is proportional to amount remaining.

# Unit 3R: Common Mistakes and Corrections

| Mistake | Correction |
|---|---|
| Finding order from balanced equation | Order is found experimentally. |
| Treating molecularity as fractional | Molecularity is a positive integer. |
| Forgetting negative sign for reactant disappearance | Rate is written positive; reactant change is negative. |
| Using Celsius in Arrhenius equation | Use kelvin. |
| Assuming catalyst changes equilibrium constant | Catalyst changes rate, not equilibrium position. |
| Applying first-order half-life to all reactions | `t1/2 = 0.693/k` only for first order. |

## Practice Set

1. Define average rate and instantaneous rate.
2. Why can order be fractional but molecularity cannot?
3. A reaction has rate law `rate = k[A]^2[B]`. Find total order and unit of `k`.
4. How can a graph identify a first-order reaction?
5. Explain pseudo first-order reaction using ester hydrolysis.
6. State Arrhenius equation and explain activation energy.
7. Why does a catalyst increase reaction rate?
8. What is the half-life expression for a zero-order reaction?
9. Why does rate usually decrease as reaction proceeds?
10. Explain effective collision.

## Final Revision

- Rate law is experimental.
- Order belongs to rate law; molecularity belongs to mechanism.
- Zero order gives straight `[R]` vs `t` graph.
- First order gives straight `log[R]` vs `t` graph.
- First-order half-life does not depend on initial concentration.
- Higher temperature increases the fraction of molecules above activation energy.
- Catalyst lowers activation energy but does not change equilibrium constant.
