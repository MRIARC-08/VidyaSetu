# Chapter 3: Differential Equations
### NCERT Class 12 - Maths Part 2

## Chapter at a Glance

A differential equation is an equation involving an unknown function and one or more of its derivatives. Differential equations are used to model motion, growth, decay, population change, cooling, electrical circuits, economics, and many physical processes.

This chapter focuses on ordinary differential equations, their order and degree, general and particular solutions, formation of differential equations, and methods of solving first-order first-degree differential equations.

## Learning Outcomes

By the end of this chapter, learners should be able to:

- Define a differential equation.
- Identify order and degree when degree is defined.
- Distinguish between general and particular solutions.
- Verify whether a given function satisfies a differential equation.
- Form a differential equation from a family of curves.
- Solve equations with variables separable.
- Solve homogeneous differential equations.
- Solve linear differential equations of first order.
- Apply differential equations to simple growth, decay, and curve problems.

## Key Terms

| Term | Meaning |
|---|---|
| Differential equation | Equation involving derivatives of an unknown function. |
| Ordinary differential equation | Differential equation involving derivatives with respect to one independent variable. |
| Order | Highest order derivative appearing in the equation. |
| Degree | Power of highest order derivative after making the equation polynomial in derivatives. |
| General solution | Solution containing arbitrary constants. |
| Particular solution | Solution obtained by assigning values to arbitrary constants. |
| Initial condition | Given condition used to find constants. |
| Variables separable | Equation that can be written with all `y` terms on one side and all `x` terms on the other. |
| Homogeneous differential equation | Equation where numerator and denominator are homogeneous functions of same degree. |
| Linear differential equation | First-order equation of form `dy/dx + P y = Q`. |
| Integrating factor | Factor used to solve a linear differential equation. |

## Quick Formula Map

| Type | Standard Form | Method |
|---|---|---|
| Separable | `dy/dx = f(x)g(y)` | Put `dy/g(y) = f(x) dx`, then integrate. |
| Homogeneous | `dy/dx = F(y/x)` | Put `y = vx`, then `dy/dx = v + x dv/dx`. |
| Linear in y | `dy/dx + P y = Q` | `IF = e^(int P dx)`. |
| Solution of linear in y | `y IF = int Q IF dx + C` | Use integrating factor. |
| Linear in x | `dx/dy + P x = Q` | `IF = e^(int P dy)`. |

# Unit 3A: What Is a Differential Equation?

An equation involving derivatives is called a differential equation.

Examples:

- `dy/dx = 3x^2`
- `d2y/dx2 + y = 0`
- `dy/dx + y = e^x`

The unknown is usually a function, not just a number.

## Ordinary Differential Equation

If derivatives are taken with respect to only one independent variable, the equation is an ordinary differential equation.

In Class 12, we mainly study ordinary differential equations.

# Unit 3B: Order of a Differential Equation

The order of a differential equation is the order of the highest derivative present.

## Examples

`dy/dx + y = x` has order `1`.

`d2y/dx2 + dy/dx + y = 0` has order `2`.

`d3y/dx3 = x + y` has order `3`.

# Unit 3C: Degree of a Differential Equation

The degree is the power of the highest order derivative, after the equation is made polynomial in derivatives.

Degree is defined only when the equation is polynomial in derivatives.

## Example

`(d2y/dx2)^3 + (dy/dx)^2 = x`

Order = `2`

Degree = `3`

## Degree Not Defined

If derivatives appear inside radicals, fractions, trigonometric functions, or other non-polynomial expressions, degree may not be defined until the equation is simplified into polynomial form, if possible.

Example:

`sin(dy/dx) + y = x`

Degree is not defined.

# Unit 3D: General and Particular Solutions

## General Solution

A general solution contains arbitrary constants.

Example:

`dy/dx = 2x`

Integrating:

`y = x^2 + C`

This is the general solution.

## Particular Solution

If an extra condition is given, such as `y = 3` when `x = 1`, then `C` can be found.

For `y = x^2 + C`, use `3 = 1 + C`, so `C = 2`.

Particular solution:

`y = x^2 + 2`

# Unit 3E: Verifying a Solution

To verify that a function is a solution:

1. Differentiate the given function as needed.
2. Substitute `y`, `dy/dx`, and higher derivatives into the differential equation.
3. Show both sides are equal.

## Example

Verify `y = Ce^x` is a solution of `dy/dx = y`.

Differentiate:

`dy/dx = Ce^x`

But `y = Ce^x`, so `dy/dx = y`.

Hence verified.

# Unit 3F: Formation of Differential Equations

To form a differential equation from a family of curves, eliminate arbitrary constants.

## General Rule

If the family contains `n` arbitrary constants, differentiate `n` times and eliminate the constants.

## Example

Family: `y = mx + c`

There are two constants, `m` and `c`.

Differentiate once:

`dy/dx = m`

Differentiate again:

`d2y/dx2 = 0`

Therefore, the differential equation is:

`d2y/dx2 = 0`

## Example

Family: `y = Ae^x`

One constant `A`.

Differentiate:

`dy/dx = Ae^x`

Since `y = Ae^x`, we get:

`dy/dx = y`

# Unit 3G: Variables Separable Method

A differential equation is separable if it can be written in the form:

`dy/dx = f(x)g(y)`

Then:

`dy/g(y) = f(x) dx`

Integrate both sides.

## Example

Solve `dy/dx = xy`.

Separate:

`dy/y = x dx`

Integrate:

`log |y| = x^2/2 + C`

So:

`y = C e^(x^2/2)`

# Unit 3H: Separable Equation with Initial Condition

Solve `dy/dx = -2xy`, given `y = 1` when `x = 0`.

Separate:

`dy/y = -2x dx`

Integrate:

`log |y| = -x^2 + C`

So:

`y = C e^(-x^2)`

Use condition `y(0) = 1`:

`1 = C e^0`, so `C = 1`.

Particular solution:

`y = e^(-x^2)`

# Unit 3I: Homogeneous Differential Equations

A function `F(x, y)` is homogeneous of degree `n` if:

`F(kx, ky) = k^n F(x, y)`

A differential equation of the form:

`dy/dx = F(x, y)/G(x, y)`

is homogeneous if `F` and `G` are homogeneous functions of the same degree.

## Substitution

Use:

`y = vx`

Then:

`dy/dx = v + x dv/dx`

This changes the equation into a separable equation in `v` and `x`.

# Unit 3J: Homogeneous Equation Example

Solve:

`dy/dx = (x + y)/x`

Rewrite:

`dy/dx = 1 + y/x`

Let `y = vx`, so `dy/dx = v + x dv/dx`.

Substitute:

`v + x dv/dx = 1 + v`

So:

`x dv/dx = 1`

`dv = dx/x`

Integrate:

`v = log |x| + C`

Since `v = y/x`:

`y/x = log |x| + C`

Therefore:

`y = x(log |x| + C)`

# Unit 3K: Linear Differential Equations

A first-order linear differential equation in `y` has form:

`dy/dx + P(x)y = Q(x)`

where `P` and `Q` are functions of `x`.

## Integrating Factor

`IF = e^(int P dx)`

## Solution Formula

`y(IF) = int Q(IF) dx + C`

Then divide by `IF` to get `y`.

# Unit 3L: Linear Equation Example

Solve:

`dy/dx + y = e^x`

Here:

`P = 1`, `Q = e^x`

Integrating factor:

`IF = e^(int 1 dx) = e^x`

Solution:

`y e^x = int e^x e^x dx + C`

`y e^x = int e^(2x) dx + C`

`y e^x = e^(2x)/2 + C`

Therefore:

`y = e^x/2 + C e^(-x)`

# Unit 3M: Linear Equation in x

Sometimes the equation is easier to treat as `x` as a function of `y`.

Standard form:

`dx/dy + P(y)x = Q(y)`

Integrating factor:

`IF = e^(int P dy)`

Solution:

`x(IF) = int Q(IF) dy + C`

## When To Use

Use this form when the equation naturally gives `dx/dy` or when solving for `dy/dx` creates difficulty.

# Unit 3N: Growth and Decay Models

Differential equations often describe growth or decay.

## Growth

If the rate of change is proportional to the quantity:

`dy/dt = ky`

Solution:

`y = C e^(kt)`

If `k > 0`, the quantity grows.

## Decay

If:

`dy/dt = -ky`, with `k > 0`,

then:

`y = C e^(-kt)`

The quantity decreases over time.

## Continuous Compound Interest

If principal `P` grows continuously at rate `r`, then:

`dP/dt = rP`

Solution:

`P = P0 e^(rt)`

# Unit 3O: Curve Problems

Some problems give slope conditions.

Example phrase:

"Find the equation of the curve passing through `(1,1)` whose slope at any point is `2x`."

Slope means:

`dy/dx = 2x`

Integrate:

`y = x^2 + C`

Use point `(1,1)`:

`1 = 1 + C`, so `C = 0`.

Curve:

`y = x^2`

# Unit 3P: Worked Examples

## Example 1: Order and Degree

For:

`(d2y/dx2)^2 + (dy/dx)^3 = x`

Highest derivative is `d2y/dx2`, so order is `2`.

Power of highest derivative is `2`, so degree is `2`.

## Example 2: Variables Separable

Solve:

`dy/dx = (1 + y^2)/(1 + x^2)`

Separate:

`dy/(1+y^2) = dx/(1+x^2)`

Integrate:

`tan^-1 y = tan^-1 x + C`

## Example 3: Linear Equation

Solve:

`dy/dx + 2y = 4`

Here `P = 2`, `Q = 4`.

`IF = e^(int 2 dx) = e^(2x)`

`y e^(2x) = int 4e^(2x) dx + C`

`y e^(2x) = 2e^(2x) + C`

`y = 2 + C e^(-2x)`

# Unit 3Q: Answer-Writing Framework

## To find order and degree

Write in this order:

1. Identify all derivatives.
2. Find the highest order derivative.
3. Check whether equation is polynomial in derivatives.
4. If yes, find power of highest order derivative.
5. State order and degree.

## To form a differential equation

Write in this order:

1. Count arbitrary constants.
2. Differentiate that many times.
3. Use original and derivative equations.
4. Eliminate constants.
5. State the differential equation.

## To solve a separable equation

Write in this order:

1. Separate `x` and `y` terms.
2. Integrate both sides.
3. Add constant.
4. Apply initial condition if given.

## To solve a linear equation

Write in this order:

1. Put in standard form `dy/dx + Py = Q`.
2. Find `IF = e^(int P dx)`.
3. Use `y IF = int Q IF dx + C`.
4. Divide by `IF`.
5. Apply condition if given.

# Unit 3R: Common Mistakes and Corrections

| Mistake | Correction |
|---|---|
| Confusing order and degree | Order is derivative level; degree is power of highest derivative. |
| Finding degree when not defined | Degree is defined only when polynomial in derivatives. |
| Forgetting arbitrary constant | General solution must contain constants. |
| Not using initial condition | Use it to find particular solution. |
| Separating variables incorrectly | Keep all `y` terms with `dy`, all `x` terms with `dx`. |
| Using homogeneous method on non-homogeneous functions | Check degrees first. |
| Forgetting `dy/dx = v + x dv/dx` when `y = vx` | This is essential in homogeneous equations. |
| Wrong integrating factor | For `dy/dx + Py = Q`, use `e^(int P dx)`. |

## Practice Set

1. Find order and degree of `(d2y/dx2)^3 + (dy/dx)^2 = x`.
2. State whether degree is defined for `sin(dy/dx) = x`.
3. Verify that `y = Ce^x` satisfies `dy/dx = y`.
4. Form the differential equation of `y = mx + c`.
5. Solve `dy/dx = x/y`.
6. Solve `dy/dx = y tan x`.
7. Solve `dy/dx = 1 + y/x`.
8. Solve `dy/dx + y = x`.
9. Find a curve passing through `(0,1)` with slope `3x^2`.
10. Model exponential decay using `dy/dt = -ky`.

## Final Revision

Remember these points:

- Differential equations involve derivatives.
- Order is the highest derivative order.
- Degree is defined only for polynomial form in derivatives.
- General solution has constants; particular solution uses conditions.
- Separable equations are solved by separating variables.
- Homogeneous equations use `y = vx`.
- Linear equations use integrating factor.
