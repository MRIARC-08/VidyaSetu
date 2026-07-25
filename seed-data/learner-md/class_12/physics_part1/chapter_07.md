# Chapter 7: Alternating Current
### NCERT Class 12 - Physics Part 1

## Chapter at a Glance

Alternating current changes magnitude and direction periodically. This chapter studies AC voltage applied to resistor, inductor, capacitor, and series LCR circuits. It introduces reactance, impedance, phasors, resonance, power factor, and transformers.

The key challenge is phase: in AC circuits, voltage and current may not reach maximum at the same time.

## Learning Outcomes

By the end of this chapter, learners should be able to:

- Define alternating current and alternating voltage.
- Relate peak and rms values.
- Analyse AC through resistor, inductor, and capacitor.
- Define inductive reactance and capacitive reactance.
- Use phasor representation.
- Calculate impedance of series LCR circuit.
- Find phase difference between voltage and current.
- Understand resonance in LCR circuit.
- Calculate average power and power factor.
- Explain transformer principle and formula.

## Key Terms

| Term | Meaning |
|---|---|
| Alternating current | Current varying periodically and reversing direction. |
| Peak value | Maximum value of AC quantity. |
| rms value | Effective value producing same heating effect as DC. |
| Phasor | Rotating vector representing sinusoidal quantity. |
| Reactance | Opposition offered by inductor or capacitor to AC. |
| Impedance | Total opposition in AC circuit. |
| Resonance | Condition when inductive and capacitive reactances are equal. |
| Power factor | `cos phi`, factor deciding real power in AC circuit. |
| Transformer | Device changing AC voltage using mutual induction. |

## Quick Formula Map

| Concept | Formula |
|---|---|
| AC voltage | `v = Vm sin(omega t)` |
| AC current | `i = Im sin(omega t + phi)` |
| rms voltage | `Vrms = Vm/sqrt(2)` |
| rms current | `Irms = Im/sqrt(2)` |
| Inductive reactance | `XL = omega L` |
| Capacitive reactance | `XC = 1/(omega C)` |
| Impedance of series LCR | `Z = sqrt(R^2 + (XL - XC)^2)` |
| Current amplitude | `Im = Vm/Z` |
| Phase angle | `tan phi = (XL - XC)/R` |
| Resonance angular frequency | `omega0 = 1/sqrt(LC)` |
| Average power | `P = Vrms Irms cos phi` |
| Power factor | `cos phi = R/Z` |
| Transformer ratio | `Vs/Vp = Ns/Np` |

# Unit 7A: Alternating Voltage and Current

An alternating voltage varies sinusoidally:

`v = Vm sin(omega t)`

where:

- `Vm` is peak voltage.
- `omega` is angular frequency.
- `omega = 2 pi f`.

Similarly:

`i = Im sin(omega t + phi)`

where `phi` is phase difference.

# Unit 7B: rms Value

rms value means root mean square value. It is the effective DC value that would produce the same heating effect.

For sinusoidal AC:

`Vrms = Vm/sqrt(2)`

`Irms = Im/sqrt(2)`

## Example

If peak voltage is `300 V`:

`Vrms = 300/sqrt(2) = 212 V` approximately.

# Unit 7C: AC Through a Resistor

For a resistor:

`v = iR`

Voltage and current are in phase.

If:

`v = Vm sin(omega t)`

then:

`i = (Vm/R) sin(omega t)`

## Power

Average power consumed:

`P = Vrms Irms = Irms^2 R`

Resistor consumes real power.

# Unit 7D: AC Through an Inductor

For a pure inductor:

Inductive reactance:

`XL = omega L`

Current amplitude:

`Im = Vm/XL`

Current lags voltage by `pi/2`.

## Frequency Dependence

As frequency increases, `XL` increases. Inductor offers more opposition to high-frequency AC.

## Power

Average power in a pure inductor over a full cycle is zero.

# Unit 7E: AC Through a Capacitor

For a pure capacitor:

Capacitive reactance:

`XC = 1/(omega C)`

Current amplitude:

`Im = Vm/XC`

Current leads voltage by `pi/2`.

## Frequency Dependence

As frequency increases, `XC` decreases. Capacitor offers less opposition to high-frequency AC.

## Power

Average power in a pure capacitor over a full cycle is zero.

# Unit 7F: Phasor Representation

Phasors represent sinusoidally varying quantities as rotating vectors.

They help compare phase relationships.

## Phase Summary

| Circuit Element | Phase Relation |
|---|---|
| Resistor | Current and voltage in phase. |
| Inductor | Current lags voltage by `pi/2`. |
| Capacitor | Current leads voltage by `pi/2`. |

Memory aid:

In inductor, current lags. In capacitor, current leads.

# Unit 7G: Series LCR Circuit

In a series LCR circuit, resistor, inductor, and capacitor are connected in series with AC source.

Total impedance:

`Z = sqrt(R^2 + (XL - XC)^2)`

Current:

`Irms = Vrms/Z`

Phase angle:

`tan phi = (XL - XC)/R`

## Cases

- If `XL > XC`, circuit is inductive and current lags voltage.
- If `XC > XL`, circuit is capacitive and current leads voltage.
- If `XL = XC`, circuit is in resonance and current is in phase with voltage.

# Unit 7H: Resonance

Resonance in series LCR circuit occurs when:

`XL = XC`

So:

`omega L = 1/(omega C)`

Therefore:

`omega0 = 1/sqrt(LC)`

At resonance:

- Impedance is minimum: `Z = R`.
- Current is maximum.
- Phase angle is zero.
- Power factor is one.

# Unit 7I: Power in AC Circuit

Average power:

`P = Vrms Irms cos phi`

where `cos phi` is power factor.

For series LCR:

`cos phi = R/Z`

## Special Cases

| Circuit | Power Factor | Average Power |
|---|---|---|
| Pure resistor | `1` | Maximum real power |
| Pure inductor | `0` | Zero average power |
| Pure capacitor | `0` | Zero average power |
| LCR at resonance | `1` | Maximum power |

# Unit 7J: Wattless Current

In a pure inductor or pure capacitor, average power is zero even though current flows. Such current is called wattless current because no net energy is consumed over a full cycle.

Energy is alternately stored and returned.

# Unit 7K: LC Oscillations

In an ideal LC circuit, energy oscillates between:

- Electric field of capacitor.
- Magnetic field of inductor.

Natural angular frequency:

`omega0 = 1/sqrt(LC)`

Frequency:

`f0 = 1/(2 pi sqrt(LC))`

# Unit 7L: Transformers

A transformer changes AC voltage using mutual induction.

It has:

- Primary coil.
- Secondary coil.
- Laminated iron core.

For ideal transformer:

`Vs/Vp = Ns/Np`

Also:

`Vp Ip = Vs Is`

So:

`Is/Ip = Np/Ns`

## Step-Up Transformer

`Ns > Np`, so secondary voltage is greater.

## Step-Down Transformer

`Ns < Np`, so secondary voltage is smaller.

## Why It Works Only With AC

Transformer needs changing magnetic flux. DC after steady state does not produce continuously changing flux.

# Unit 7M: Transformer Losses

Real transformers lose energy due to:

- Copper loss in windings.
- Eddy current loss in core.
- Hysteresis loss.
- Flux leakage.

## Reducing Losses

- Use low-resistance copper windings.
- Use laminated core to reduce eddy currents.
- Use soft iron core to reduce hysteresis.

# Unit 7N: Worked Examples

## Example 1: rms Value

Peak voltage is `283 V`.

`Vrms = 283/sqrt(2) = 200 V` approximately.

## Example 2: Inductive Reactance

If `L = 0.5 H` and `f = 50 Hz`:

`omega = 2 pi f = 100 pi`

`XL = omega L = 100 pi x 0.5 = 50 pi ohm`

## Example 3: Capacitive Reactance

If `C = 100 microF` and `f = 50 Hz`:

`XC = 1/(omega C)`

`= 1/[(100 pi)(100 x 10^-6)]`

`= 100/pi ohm` approximately.

## Example 4: Series LCR

If `R = 30 ohm`, `XL = 50 ohm`, `XC = 10 ohm`:

`Z = sqrt(30^2 + (50-10)^2)`

`Z = sqrt(900 + 1600) = 50 ohm`

# Unit 7O: Answer-Writing Framework

## To solve AC element problems

Write in this order:

1. Identify resistor, inductor, or capacitor.
2. Write corresponding resistance or reactance.
3. Use rms values unless peak values are requested.
4. State phase relation.
5. Calculate current or voltage.

## To solve LCR problems

Write in this order:

1. Compute `XL = omega L`.
2. Compute `XC = 1/(omega C)`.
3. Compute `Z`.
4. Find current using `I = V/Z`.
5. Find phase and power factor if required.

## To solve transformer problems

Write in this order:

1. Identify primary and secondary quantities.
2. Use `Vs/Vp = Ns/Np`.
3. For ideal transformer, use `VpIp = VsIs`.
4. State step-up or step-down.

# Unit 7P: Common Mistakes and Corrections

| Mistake | Correction |
|---|---|
| Using peak value when rms is needed | Check whether problem gives peak or rms. |
| Saying inductor current leads voltage | In inductor, current lags voltage. |
| Saying capacitor current lags voltage | In capacitor, current leads voltage. |
| Adding reactances directly in LCR | Use `XL - XC` inside impedance. |
| Forgetting resonance condition | At resonance, `XL = XC`. |
| Saying pure inductor consumes average power | Average power is zero. |
| Applying transformer formula to DC steady current | Transformer requires changing flux, so AC. |

## Practice Set

1. Convert peak voltage to rms voltage.
2. Find current through a resistor connected to AC supply.
3. Find inductive reactance of a coil.
4. Find capacitive reactance of a capacitor.
5. Compare phase in R, L, and C circuits.
6. Find impedance of a series LCR circuit.
7. Find resonance frequency of an LCR circuit.
8. Calculate average power and power factor.
9. Explain wattless current.
10. Solve an ideal transformer voltage ratio problem.

## Final Revision

Remember these points:

- rms value equals peak value divided by `sqrt(2)`.
- Resistor: current and voltage in phase.
- Inductor: current lags voltage.
- Capacitor: current leads voltage.
- Series LCR impedance is `sqrt(R^2 + (XL-XC)^2)`.
- Resonance occurs when `XL = XC`.
- Average AC power is `Vrms Irms cos phi`.
- Transformer works by mutual induction and needs AC.
