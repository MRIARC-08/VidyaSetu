# Chapter 2: Electrostatic Potential and Capacitance
### NCERT Class 12 - Physics Part 1

## Chapter at a Glance

This chapter shifts from electric field to electric potential and potential energy. Electric field is a vector, while electric potential is a scalar. This makes potential a powerful tool for solving electrostatic problems.

The chapter also explains equipotential surfaces, conductors in electrostatic equilibrium, dielectrics, capacitors, combinations of capacitors, and energy stored in a capacitor.

## Learning Outcomes

By the end of this chapter, learners should be able to:

- Define electrostatic potential.
- Calculate potential due to a point charge, dipole, and system of charges.
- Relate electric field and potential.
- Explain equipotential surfaces.
- Calculate electrostatic potential energy of charge systems.
- Describe electrostatics of conductors.
- Explain dielectrics and polarisation.
- Define capacitance.
- Calculate capacitance of a parallel plate capacitor.
- Analyse capacitors in series and parallel.
- Calculate energy stored in a capacitor.

## Key Terms

| Term | Meaning |
|---|---|
| Electric potential | Work done per unit positive charge in bringing charge from infinity to a point. |
| Potential difference | Work done per unit charge in moving charge between two points. |
| Volt | SI unit of potential, equal to joule per coulomb. |
| Equipotential surface | Surface on which potential is same at every point. |
| Potential energy | Energy due to position of charges in an electric field. |
| Dielectric | Insulating material that can be polarised in an electric field. |
| Polarisation | Separation or alignment of charges inside dielectric. |
| Capacitor | Device that stores charge and electrical energy. |
| Capacitance | Charge stored per unit potential difference. |
| Farad | SI unit of capacitance. |

## Quick Formula Map

| Concept | Formula |
|---|---|
| Potential | `V = W/q0` |
| Potential due to point charge | `V = kq/r` |
| Potential energy of charge | `U = qV` |
| Potential energy of two charges | `U = k q1 q2/r` |
| Potential of dipole, far point | `V = k p cos theta/r^2` |
| Field-potential relation | `E = -dV/dr` for one-dimensional variation |
| Capacitance | `C = Q/V` |
| Parallel plate capacitor | `C = epsilon0 A/d` |
| With dielectric fully inserted | `C = K epsilon0 A/d` |
| Capacitors in series | `1/Ceq = 1/C1 + 1/C2 + ...` |
| Capacitors in parallel | `Ceq = C1 + C2 + ...` |
| Energy stored | `U = (1/2)CV^2 = Q^2/(2C) = (1/2)QV` |
| Energy density in field | `u = (1/2)epsilon0 E^2` |

# Unit 2A: Electric Potential

Electric potential at a point is the work done per unit positive test charge in bringing the test charge from infinity to that point without acceleration.

`V = W/q0`

SI unit:

`J/C = volt`

## Scalar Nature

Electric potential is a scalar. It has no direction. This makes adding potentials easier than adding electric fields.

## Important Difference

| Electric Field | Electric Potential |
|---|---|
| Vector | Scalar |
| Unit `N/C` or `V/m` | Unit `V` |
| Added vectorially | Added algebraically |
| Force per unit charge | Work per unit charge |

# Unit 2B: Potential Difference

Potential difference between points `A` and `B` is work done per unit charge in moving charge from `A` to `B`.

`VB - VA = W_AB/q`

If a charge `q` moves through potential difference `V`, work or energy change is:

`W = qV`

# Unit 2C: Potential Due to a Point Charge

Potential at distance `r` from point charge `q` is:

`V = kq/r`

where:

`k = 1/(4 pi epsilon0)`

## Sign

- Potential due to positive charge is positive.
- Potential due to negative charge is negative.

## Example

Potential at `0.2 m` from `+4 microC`:

`V = (9 x 10^9)(4 x 10^-6)/0.2`

`V = 1.8 x 10^5 V`

# Unit 2D: Potential Due to System of Charges

Potential due to several point charges is the algebraic sum of individual potentials:

`V = k q1/r1 + k q2/r2 + k q3/r3 + ...`

## Why Algebraic Sum?

Potential is scalar. We consider signs of charges, but not vector directions.

## Common Trap

Do not resolve potential into components. Components are for vectors, not scalars.

# Unit 2E: Potential Due to an Electric Dipole

For a dipole with dipole moment `p`, potential at a far point is:

`V = k p cos theta/r^2`

where `theta` is angle between dipole moment and position vector.

## Special Cases

On axial line:

`theta = 0`, so potential is maximum positive on positive side.

On equatorial line:

`theta = 90 degrees`, so `V = 0`.

## Important Difference from Field

Dipole field varies as `1/r^3` at large distance, while dipole potential varies as `1/r^2`.

# Unit 2F: Equipotential Surfaces

An equipotential surface is a surface on which potential is same at every point.

## Properties

- No work is done in moving a charge along an equipotential surface.
- Electric field is perpendicular to an equipotential surface.
- Equipotential surfaces never intersect.
- For a point charge, equipotential surfaces are concentric spheres.
- For a uniform electric field, equipotential surfaces are parallel planes.

## Why Field Is Perpendicular

If electric field had a component along an equipotential surface, work would be done moving charge along it. That would change potential, which contradicts the definition.

# Unit 2G: Relation Between Electric Field and Potential

Electric field points in the direction of decreasing potential.

For one-dimensional variation:

`E = -dV/dr`

For uniform field:

`E = -Delta V/Delta r`

## Meaning of Negative Sign

The negative sign means electric field is directed from higher potential to lower potential.

# Unit 2H: Potential Energy of Charges

Potential energy of a charge `q` at a point of potential `V`:

`U = qV`

Potential energy of two point charges:

`U = k q1 q2/r`

## Sign Meaning

- Like charges: `U` positive.
- Unlike charges: `U` negative.

Positive potential energy means work must be done to assemble the system from infinity. Negative potential energy means energy is released.

# Unit 2I: Potential Energy of a System of Charges

For a system of point charges, total potential energy is sum over all pairs:

`U = k q1q2/r12 + k q1q3/r13 + k q2q3/r23 + ...`

## Important Rule

Count each pair only once.

## Example Pattern

For four charges at corners of a square, include:

- Four side pairs.
- Two diagonal pairs.

# Unit 2J: Dipole in External Electric Field

Potential energy of a dipole in a uniform electric field:

`U = -pE cos theta`

Torque:

`tau = pE sin theta`

## Stable Equilibrium

When `theta = 0`, potential energy is minimum:

`U = -pE`

The dipole is aligned with the field.

## Unstable Equilibrium

When `theta = 180 degrees`, potential energy is maximum:

`U = +pE`

# Unit 2K: Electrostatics of Conductors

In electrostatic equilibrium, conductors have special properties.

## Key Results

- Electric field inside a conductor is zero.
- Charge resides on the outer surface of an isolated conductor.
- Electric field just outside conductor is perpendicular to surface.
- Potential is constant throughout conductor and on its surface.
- No charge exists inside a cavity unless a charge is placed there.

## Electrostatic Shielding

Since electric field inside a conductor is zero, a closed conducting shell can shield its interior from external electrostatic fields.

# Unit 2L: Dielectrics and Polarisation

A dielectric is an insulating material. In an electric field, charges inside dielectric do not move freely through the material, but molecules may become polarised.

## Polarisation

Polarisation means positive and negative charge centres shift slightly or align, producing induced dipoles.

## Effect

Dielectrics reduce the effective electric field inside the material and increase capacitance when inserted in a capacitor.

# Unit 2M: Capacitors and Capacitance

A capacitor stores charge and electrical energy.

For a capacitor:

`C = Q/V`

where:

- `Q` is charge on one plate.
- `V` is potential difference between plates.
- `C` is capacitance.

SI unit:

`farad (F)`

## Meaning

Large capacitance means the capacitor can store more charge for the same potential difference.

# Unit 2N: Parallel Plate Capacitor

For two large parallel plates of area `A` separated by distance `d`:

`C = epsilon0 A/d`

This assumes air or vacuum between plates and negligible edge effects.

## Dependence

- Larger plate area increases capacitance.
- Larger separation decreases capacitance.

# Unit 2O: Effect of Dielectric

If a dielectric of dielectric constant `K` completely fills the space between plates:

`C = K epsilon0 A/d`

So:

`C = K C0`

where `C0` is capacitance without dielectric.

## Physical Reason

Dielectric reduces effective electric field for the same charge, lowering potential difference. Since `C = Q/V`, capacitance increases.

# Unit 2P: Capacitors in Series

For capacitors in series:

`1/Ceq = 1/C1 + 1/C2 + 1/C3 + ...`

## Key Features

- Charge on each capacitor is same.
- Potential difference divides.
- Equivalent capacitance is less than the smallest individual capacitance.

# Unit 2Q: Capacitors in Parallel

For capacitors in parallel:

`Ceq = C1 + C2 + C3 + ...`

## Key Features

- Potential difference across each capacitor is same.
- Total charge is sum of charges.
- Equivalent capacitance is greater than each individual capacitance.

# Unit 2R: Energy Stored in a Capacitor

Energy stored in a charged capacitor is:

`U = (1/2)CV^2`

Equivalent forms:

`U = Q^2/(2C)`

`U = (1/2)QV`

Energy density in electric field:

`u = (1/2)epsilon0 E^2`

## Important Note

The energy is stored in the electric field between the plates.

# Unit 2S: Worked Examples

## Example 1: Potential Due to Charges

Two charges `+3 microC` and `-2 microC` are at distances `0.3 m` and `0.2 m` from point `P`. Find potential at `P`.

`V = kq1/r1 + kq2/r2`

`V = (9 x 10^9)(3 x 10^-6)/0.3 + (9 x 10^9)(-2 x 10^-6)/0.2`

`V = 9 x 10^4 - 9 x 10^4 = 0`

Potential is zero, but electric field may not be zero.

## Example 2: Parallel Plate Capacitance

Let `A = 2 x 10^-3 m^2`, `d = 1 x 10^-3 m`.

`C = epsilon0 A/d`

`C = (8.85 x 10^-12)(2 x 10^-3)/(1 x 10^-3)`

`C = 1.77 x 10^-11 F`

## Example 3: Capacitors in Series

For `C1 = 3 microF`, `C2 = 6 microF`:

`1/Ceq = 1/3 + 1/6 = 1/2`

So:

`Ceq = 2 microF`

## Example 4: Energy Stored

For `C = 10 microF`, `V = 100 V`:

`U = (1/2)CV^2`

`U = (1/2)(10 x 10^-6)(100)^2`

`U = 0.05 J`

# Unit 2T: Answer-Writing Framework

## To solve potential problems

Write in this order:

1. Identify all source charges.
2. Find distance of each charge from the point.
3. Use `V = kq/r` for each charge.
4. Add potentials algebraically.
5. State unit volt.

## To solve capacitor combination problems

Write in this order:

1. Identify series and parallel groups.
2. Reduce one group at a time.
3. For series, use reciprocal formula.
4. For parallel, add capacitances.
5. Track charge and voltage rules.

## To solve energy problems

Write in this order:

1. Identify known values among `Q`, `C`, and `V`.
2. Choose suitable formula.
3. Convert units.
4. Substitute and calculate.
5. State energy in joule.

# Unit 2U: Common Mistakes and Corrections

| Mistake | Correction |
|---|---|
| Treating potential as vector | Potential is scalar; add algebraically. |
| Confusing potential and potential energy | `V` is energy per unit charge; `U = qV`. |
| Forgetting signs of charges | Potential can be positive or negative. |
| Saying field is zero when potential is zero | Potential may be zero while field is non-zero. |
| Using series capacitor rule for parallel | Series uses reciprocal; parallel uses direct sum. |
| Forgetting same charge in series | Capacitors in series carry same charge. |
| Forgetting same voltage in parallel | Capacitors in parallel have same potential difference. |
| Missing factor `1/2` in capacitor energy | Energy is `(1/2)CV^2`, not `CV^2`. |

## Practice Set

1. Find potential due to a point charge at a given distance.
2. Find potential at a point due to two charges.
3. Explain why electric field is perpendicular to equipotential surface.
4. Calculate potential energy of two charges.
5. Find torque and energy of a dipole in uniform electric field.
6. State properties of conductors in electrostatic equilibrium.
7. Derive capacitance of a parallel plate capacitor.
8. Find equivalent capacitance for series capacitors.
9. Find equivalent capacitance for parallel capacitors.
10. Calculate energy stored in a capacitor.

## Final Revision

Remember these points:

- Potential is scalar; electric field is vector.
- Potential due to point charge is `kq/r`.
- Electric field points toward decreasing potential.
- Conductors have zero electric field inside in electrostatic equilibrium.
- Capacitor stores charge and energy.
- Dielectrics increase capacitance.
- Series capacitors share charge; parallel capacitors share voltage.
