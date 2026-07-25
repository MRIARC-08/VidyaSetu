# Chapter 6: Semiconductor Electronics: Materials, Devices and Simple Circuits
### NCERT Class 12 - Physics Part 2

## Chapter at a Glance

This chapter explains how modern electronic devices are built from semiconductors. Unlike metals and insulators, semiconductors have a small energy gap and their conductivity can be controlled by temperature, light, and doping. The most important device in this chapter is the p-n junction diode, which conducts mainly in one direction and is used as a rectifier to convert AC into pulsating DC.

The chapter connects atomic bonding, energy bands, charge carriers, doping, junction formation, biasing, V-I characteristics, and rectifier circuits.

## Learning Outcomes

By the end of this chapter, you should be able to:

- classify solids as conductors, semiconductors, and insulators using resistivity and energy bands;
- explain valence band, conduction band, and energy gap;
- describe intrinsic semiconductors and electron-hole pair generation;
- explain holes as effective positive charge carriers;
- distinguish n-type and p-type semiconductors;
- explain donor and acceptor impurities;
- describe formation of p-n junction, depletion layer, and barrier potential;
- explain forward bias and reverse bias;
- interpret V-I characteristics of a diode;
- define static and dynamic resistance of diode;
- explain half-wave and full-wave rectification;
- explain use of capacitor filter in rectifier output.

## Key Terms

| Term | Meaning |
|---|---|
| Semiconductor | Material with conductivity between conductor and insulator. |
| Valence band | Energy band containing valence electrons. |
| Conduction band | Higher band where electrons are free to conduct. |
| Energy gap | Gap between valence band top and conduction band bottom. |
| Intrinsic semiconductor | Pure semiconductor. |
| Extrinsic semiconductor | Doped semiconductor. |
| Hole | Vacancy in covalent bond behaving like positive charge carrier. |
| Donor impurity | Pentavalent impurity that contributes extra electron. |
| Acceptor impurity | Trivalent impurity that creates hole. |
| n-type semiconductor | Semiconductor with electrons as majority carriers. |
| p-type semiconductor | Semiconductor with holes as majority carriers. |
| Depletion region | Region near p-n junction depleted of mobile charge carriers. |
| Barrier potential | Potential difference across depletion region. |
| Forward bias | Bias that reduces barrier and allows large current. |
| Reverse bias | Bias that increases barrier and allows tiny current. |
| Rectifier | Circuit that converts AC into unidirectional output. |

## Quick Formula Map

| Idea | Formula |
|---|---|
| Resistivity and conductivity | `rho = 1/sigma` |
| Intrinsic carrier equality | `ne = nh = ni` |
| Total current in intrinsic semiconductor | `I = Ie + Ih` |
| Mass action relation | `ne nh = ni^2` |
| Dynamic resistance | `rd = Delta V / Delta I` |
| Half-wave output frequency | `f_output = f_input` |
| Full-wave output frequency | `f_output = 2 f_input` |
| Capacitor filter time constant | `tau = R C` |

# Unit 6A: Need for Semiconductor Devices

Before semiconductor electronics, many circuits used vacuum tubes.

Vacuum tubes:

- were bulky;
- needed heating;
- consumed high power;
- operated at high voltage;
- had limited reliability.

Semiconductor devices:

- are small;
- work at low voltage;
- consume less power;
- have long life;
- are reliable;
- can be integrated into compact circuits.

This is why modern electronics is based on semiconductor materials such as silicon and germanium.

# Unit 6B: Classification by Conductivity

Solids may be classified by resistivity or conductivity.

## Metals

Metals have:

- low resistivity;
- high conductivity;
- many free electrons.

Typical resistivity range:

`10^-8 to 10^-2 ohm m`

## Insulators

Insulators have:

- high resistivity;
- very low conductivity;
- very few free charge carriers.

## Semiconductors

Semiconductors have:

- intermediate resistivity;
- conductivity strongly affected by temperature and impurities;
- small energy gap.

Examples:

- silicon;
- germanium;
- gallium arsenide;
- cadmium sulphide.

# Unit 6C: Energy Bands

In an isolated atom, electrons have discrete energy levels.

In a solid, atoms are close together. Their energy levels split and spread into bands.

Important bands:

- valence band;
- conduction band.

## Valence Band

The valence band contains electrons involved in bonding. At low temperature, it may be full.

## Conduction Band

Electrons in conduction band can move through the crystal and conduct electricity.

## Energy Gap

Energy gap `Eg` is the forbidden gap between valence band and conduction band.

# Unit 6D: Band Picture of Materials

## Metals

Metals conduct because:

- conduction band is partially filled; or
- valence and conduction bands overlap.

Electrons can move easily.

## Insulators

Insulators have large energy gap:

`Eg > 3 eV`

Thermal energy at room temperature is not enough to move electrons into conduction band.

## Semiconductors

Semiconductors have small energy gap:

`Eg < 3 eV`

At room temperature, some electrons cross from valence band to conduction band, leaving holes behind.

# Unit 6E: Intrinsic Semiconductor

An intrinsic semiconductor is a pure semiconductor.

Examples:

- pure silicon;
- pure germanium.

Each Si or Ge atom has four valence electrons and forms covalent bonds with four neighbouring atoms.

At `0 K`:

- all covalent bonds are intact;
- conduction band is empty;
- material behaves almost like insulator.

At higher temperature:

- some bonds break due to thermal energy;
- electrons enter conduction band;
- holes are created in valence band.

## Carrier Equality

In an intrinsic semiconductor:

`ne = nh = ni`

where:

- `ne` is number of free electrons;
- `nh` is number of holes;
- `ni` is intrinsic carrier concentration.

# Unit 6F: Holes

A hole is a vacancy created when an electron leaves a covalent bond.

It behaves like a positive charge carrier because:

- a neighbouring bound electron can move into the vacancy;
- the vacancy appears to shift in the opposite direction;
- under electric field, holes move toward negative potential.

## Total Current

Both electrons and holes contribute to current.

`I = Ie + Ih`

where:

- `Ie` is electron current;
- `Ih` is hole current.

# Unit 6G: Extrinsic Semiconductor

Intrinsic semiconductors have low conductivity at room temperature. Their conductivity is increased by doping.

Doping means adding a very small amount of suitable impurity.

The doped material is called extrinsic semiconductor.

Requirements for dopant:

- should have suitable valency;
- should have atomic size close to semiconductor atom;
- should not distort the lattice strongly.

Two types:

- n-type;
- p-type.

# Unit 6H: n-Type Semiconductor

An n-type semiconductor is formed by doping silicon or germanium with pentavalent impurity.

Examples:

- phosphorus;
- arsenic;
- antimony.

Pentavalent atom has five valence electrons:

- four form covalent bonds with neighbouring silicon atoms;
- fifth electron is weakly bound;
- it becomes free at room temperature.

The impurity is called donor because it donates an electron.

## Carriers

In n-type semiconductor:

- electrons are majority carriers;
- holes are minority carriers.

`ne >> nh`

The material remains electrically neutral because fixed donor ions balance the extra electrons.

# Unit 6I: p-Type Semiconductor

A p-type semiconductor is formed by doping silicon or germanium with trivalent impurity.

Examples:

- boron;
- aluminium;
- indium.

Trivalent atom has three valence electrons:

- it forms three complete covalent bonds;
- one bond remains electron-deficient;
- a hole is created.

The impurity is called acceptor because it can accept an electron.

## Carriers

In p-type semiconductor:

- holes are majority carriers;
- electrons are minority carriers.

`nh >> ne`

The material remains electrically neutral because fixed acceptor ions balance mobile holes.

# Unit 6J: Mass Action Relation

For a semiconductor at a given temperature:

`ne nh = ni^2`

This means:

- increasing electron concentration reduces hole concentration;
- increasing hole concentration reduces electron concentration;
- product remains fixed at that temperature.

In n-type material, `ne` is large and `nh` is small.

In p-type material, `nh` is large and `ne` is small.

# Unit 6K: Formation of p-n Junction

When p-type and n-type materials are joined:

- electrons diffuse from n-side to p-side;
- holes diffuse from p-side to n-side;
- electrons recombine with holes near the junction.

This leaves behind fixed ions:

- positive donor ions on n-side near junction;
- negative acceptor ions on p-side near junction.

The region without mobile charge carriers is called depletion region.

## Barrier Potential

The fixed ions create an electric field that opposes further diffusion.

The corresponding potential difference is called barrier potential.

At equilibrium:

- diffusion current and drift current balance;
- net current is zero.

# Unit 6L: p-n Junction Diode

A p-n junction diode is a two-terminal device made from a p-n junction.

Terminals:

- p-side is connected to anode;
- n-side is connected to cathode.

Diode property:

- conducts easily in forward bias;
- conducts very little in reverse bias.

This one-way conduction is used in rectifiers.

# Unit 6M: Forward Bias

In forward bias:

- p-side connected to positive terminal;
- n-side connected to negative terminal.

Effect:

- external voltage opposes barrier potential;
- depletion layer becomes thinner;
- barrier height decreases;
- majority carriers cross junction easily;
- current becomes large.

Forward current is usually in milliampere range.

## Threshold Voltage

Forward current remains small until voltage crosses a certain value.

Approximate threshold:

- germanium diode: `0.2 V`;
- silicon diode: `0.7 V`.

# Unit 6N: Reverse Bias

In reverse bias:

- p-side connected to negative terminal;
- n-side connected to positive terminal.

Effect:

- external voltage supports barrier potential;
- depletion layer widens;
- barrier height increases;
- majority carrier diffusion is suppressed;
- only tiny minority carrier current flows.

Reverse current is nearly constant and very small until breakdown.

## Breakdown

At high reverse voltage, current suddenly rises. If not limited externally, diode may be damaged.

# Unit 6O: V-I Characteristics of Diode

The V-I curve shows relation between diode voltage and current.

## Forward Region

- current small below threshold voltage;
- current increases rapidly after threshold;
- diode resistance becomes low.

## Reverse Region

- current is very small;
- current nearly independent of voltage;
- after breakdown voltage, current rises sharply.

## Dynamic Resistance

Dynamic resistance is:

`rd = Delta V / Delta I`

It is the ratio of small change in voltage to corresponding small change in current at an operating point.

# Unit 6P: Diode as Rectifier

A rectifier converts AC into unidirectional output.

The diode works as rectifier because it conducts only during the half-cycle when it is forward biased.

# Unit 6Q: Half-Wave Rectifier

In a half-wave rectifier:

- one diode is connected in series with load;
- during positive half-cycle, diode conducts;
- during negative half-cycle, diode is reverse biased and does not conduct.

Output:

- only one half of AC cycle appears across load;
- output is pulsating DC.

Frequency:

`f_output = f_input`

If input is `50 Hz`, output ripple frequency is `50 Hz`.

## Limitation

Half-wave rectifier uses only half the input cycle, so it is less efficient and output has large ripple.

# Unit 6R: Full-Wave Rectifier

A full-wave rectifier gives output during both halves of AC cycle.

Using centre-tap transformer:

- two diodes are used;
- one diode conducts in one half-cycle;
- the other diode conducts in the next half-cycle;
- current through load remains in same direction.

Output:

- both halves are rectified;
- ripple frequency is double the input frequency.

Frequency:

`f_output = 2 f_input`

If input is `50 Hz`, output ripple frequency is `100 Hz`.

## Advantage

Full-wave rectifier is more efficient than half-wave rectifier and gives smoother output.

# Unit 6S: Capacitor Filter

Rectifier output is unidirectional but not steady. A capacitor connected across the load can smooth the output.

Working:

- capacitor charges when rectified voltage rises;
- capacitor discharges through load when rectified voltage falls;
- output voltage becomes smoother.

Time constant:

`tau = R C`

Larger `RC` gives better smoothing.

## Practical Note

Capacitor filters reduce ripple but do not make ideal DC. More filtering or regulation may be needed in practical power supplies.

# Unit 6T: Worked Examples

## Example 1: Intrinsic Carrier Equality

In a pure semiconductor, the number of conduction electrons is `5 x 10^16 m^-3`. Find number of holes.

For intrinsic semiconductor:

`ne = nh`

So:

`nh = 5 x 10^16 m^-3`

## Example 2: Minority Carrier Concentration

For a doped semiconductor:

`ne = 5 x 10^22 m^-3`

and:

`ni = 1.5 x 10^16 m^-3`

Find `nh`.

Use:

`ne nh = ni^2`

`nh = ni^2/ne`

`nh = (1.5 x 10^16)^2 / (5 x 10^22)`

`nh = 2.25 x 10^32 / 5 x 10^22`

`nh = 4.5 x 10^9 m^-3`

Since electrons dominate, material is n-type.

## Example 3: Dynamic Resistance

A silicon diode current changes from `10 mA` to `20 mA` when voltage changes from `0.7 V` to `0.8 V`. Find dynamic resistance.

`Delta V = 0.8 - 0.7 = 0.1 V`

`Delta I = 20 mA - 10 mA = 10 mA = 0.01 A`

`rd = Delta V/Delta I`

`rd = 0.1/0.01 = 10 ohm`

## Example 4: Reverse Resistance

A reverse-biased diode has reverse current `1 microA` at `10 V`. Estimate resistance.

`R = V/I`

`I = 1 microA = 1 x 10^-6 A`

`R = 10/(1 x 10^-6)`

`R = 1 x 10^7 ohm`

Reverse resistance is very high.

## Example 5: Rectifier Frequency

Input AC frequency is `50 Hz`.

For half-wave rectifier:

`f_output = 50 Hz`

For full-wave rectifier:

`f_output = 2 x 50 = 100 Hz`

# Unit 6U: Answer-Writing Framework

## To classify materials using bands

1. State valence band and conduction band.
2. Mention energy gap.
3. Metal: overlapping or partially filled band.
4. Insulator: large gap.
5. Semiconductor: small gap.

## To explain intrinsic conduction

1. Silicon or germanium has covalent bonds.
2. Thermal energy breaks some bonds.
3. Electrons enter conduction band.
4. Holes remain in valence band.
5. Both electrons and holes conduct.

## To explain n-type and p-type

1. Name dopant valency.
2. Explain extra electron or hole formation.
3. Identify majority and minority carriers.
4. Mention electrical neutrality.

## To explain p-n junction

1. Electrons and holes diffuse across junction.
2. Recombination occurs near junction.
3. Immobile ions remain.
4. Depletion region forms.
5. Barrier potential opposes further diffusion.

## To explain diode biasing

1. Forward bias: p to positive, n to negative.
2. Barrier decreases, depletion layer narrows, current increases.
3. Reverse bias: p to negative, n to positive.
4. Barrier increases, depletion layer widens, current is small.

## To explain rectification

1. Diode conducts in forward bias only.
2. AC alternately forward and reverse biases the diode.
3. Half-wave uses one half-cycle.
4. Full-wave uses both half-cycles.
5. Capacitor filter smooths pulsating output.

# Unit 6V: Common Mistakes and Corrections

| Mistake | Correction |
|---|---|
| Saying holes are physical positive particles. | Holes are vacancies behaving as positive carriers. |
| Saying n-type material is negatively charged. | n-type material is electrically neutral overall. |
| Saying p-type material has no electrons. | It has electrons, but holes are majority carriers. |
| Confusing donor with acceptor. | Donor is pentavalent; acceptor is trivalent. |
| Saying depletion region has many mobile carriers. | It is depleted of mobile carriers and contains fixed ions. |
| Reversing bias connections. | Forward bias: p to positive, n to negative. |
| Saying reverse current is exactly zero. | It is small due to minority carriers. |
| Forgetting full-wave output frequency doubles. | Full-wave rectifier gives two output pulses per input cycle. |

## Practice Set

1. Define valence band, conduction band, and energy gap.
2. Why is diamond an insulator while silicon is a semiconductor?
3. Explain electron-hole pair generation in intrinsic semiconductor.
4. What is a hole? How does it move?
5. Distinguish n-type and p-type semiconductor.
6. Why does adding pentavalent impurity increase electron concentration?
7. Explain formation of depletion region in a p-n junction.
8. What happens to depletion width in forward bias and reverse bias?
9. Draw and explain the qualitative V-I characteristic of a diode.
10. Why is a diode useful as a rectifier?
11. A diode current changes by `20 mA` for voltage change `0.2 V`. Find dynamic resistance.
12. Input AC is `60 Hz`. Find output frequency for half-wave and full-wave rectifiers.

## Final Revision

- Semiconductors have small energy gap.
- Intrinsic semiconductor has `ne = nh`.
- Holes behave as positive charge carriers.
- Doping increases conductivity.
- n-type uses pentavalent donor impurities and has electrons as majority carriers.
- p-type uses trivalent acceptor impurities and has holes as majority carriers.
- p-n junction forms depletion layer and barrier potential.
- Forward bias lowers barrier and gives large current.
- Reverse bias raises barrier and gives small current.
- Diode conducts mainly in one direction.
- Half-wave rectifier uses one half-cycle.
- Full-wave rectifier uses both half-cycles and doubles ripple frequency.
- Capacitor filter smooths rectified output.
