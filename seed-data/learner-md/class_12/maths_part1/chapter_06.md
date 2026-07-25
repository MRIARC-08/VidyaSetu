# Chapter 6: Application of Derivatives
### NCERT Class 12 - Maths Part 1

## Chapter at a Glance

This chapter applies derivatives to practical and graphical questions. A derivative can represent a rate of change, show whether a function is increasing or decreasing, identify turning points, and solve maximum-minimum problems.

The main learning skill is interpretation. You are no longer only finding derivatives; you are using derivatives to answer questions about motion, area, volume, cost, revenue, profit, intervals, and optimisation.

## Learning Outcomes

By the end of this chapter, learners should be able to:

- Interpret derivative as rate of change.
- Solve related-rate problems using the chain rule.
- Find marginal cost and marginal revenue.
- Use the sign of `f'(x)` to determine increasing and decreasing intervals.
- Find critical points.
- Identify local maxima and local minima using derivative tests.
- Find absolute maximum and minimum values on a closed interval.
- Convert word problems into functions to optimise.
- Check endpoints where required.
- Avoid confusing local and absolute extrema.

## Key Terms

| Term | Meaning |
|---|---|
| Rate of change | Derivative of one quantity with respect to another. |
| Related rates | Problems where multiple changing quantities are connected by an equation. |
| Marginal cost | Instantaneous rate of change of cost with respect to output. |
| Marginal revenue | Instantaneous rate of change of revenue with respect to output. |
| Increasing function | Function whose values rise as input increases. |
| Decreasing function | Function whose values fall as input increases. |
| Critical point | Point where `f'(x) = 0` or derivative does not exist. |
| Local maximum | Value greater than nearby values. |
| Local minimum | Value less than nearby values. |
| Absolute maximum | Greatest value on the whole given domain or interval. |
| Absolute minimum | Smallest value on the whole given domain or interval. |

## Quick Formula Map

| Concept | Formula or Test |
|---|---|
| Rate of change of `y` with respect to `x` | `dy/dx` |
| Related rates through time | `dy/dx = (dy/dt)/(dx/dt)` |
| Area of circle | `A = pi r^2` |
| Circumference of circle | `C = 2 pi r` |
| Volume of sphere | `V = (4/3) pi r^3` |
| Surface area of sphere | `S = 4 pi r^2` |
| Volume of cube | `V = x^3` |
| Surface area of cube | `S = 6x^2` |
| Increasing test | `f'(x) > 0` on an interval |
| Decreasing test | `f'(x) < 0` on an interval |
| Local maximum test | `f'` changes from positive to negative |
| Local minimum test | `f'` changes from negative to positive |

# Unit 6A: Derivative as Rate of Change

If `y = f(x)`, then `dy/dx` is the rate of change of `y` with respect to `x`.

If `x` and `y` both depend on time `t`, then:

`dy/dx = (dy/dt)/(dx/dt)`, provided `dx/dt != 0`.

## Interpretation

- If `dy/dx > 0`, then `y` increases as `x` increases.
- If `dy/dx < 0`, then `y` decreases as `x` increases.
- If `dy/dx = 0`, then `y` is momentarily not changing with respect to `x`.

# Unit 6B: Related Rates

In related-rate problems, two or more quantities change together. The steps are:

1. Identify the changing variables.
2. Write a formula connecting them.
3. Differentiate with respect to time.
4. Substitute given values.
5. State the required rate with units.

## Example: Area of a Circle

The area of a circle is `A = pi r^2`.

Differentiate with respect to time:

`dA/dt = 2 pi r dr/dt`

If `dr/dt = 4 cm/s` and `r = 10 cm`, then:

`dA/dt = 2 pi (10)(4) = 80 pi cm^2/s`

## Key Lesson

Differentiate before substituting changing values unless the value is a constant for the whole problem.

# Unit 6C: Rectangle Rate Problems

For a rectangle:

- Area: `A = xy`
- Perimeter: `P = 2(x + y)`

If length `x` and width `y` both change with time:

`dA/dt = x dy/dt + y dx/dt`

`dP/dt = 2(dx/dt + dy/dt)`

## Example

The length of a rectangle is decreasing at `3 cm/min`, so `dx/dt = -3`.

The width is increasing at `2 cm/min`, so `dy/dt = 2`.

When `x = 10` and `y = 6`:

`dA/dt = 10(2) + 6(-3) = 20 - 18 = 2 cm^2/min`

`dP/dt = 2(-3 + 2) = -2 cm/min`

# Unit 6D: Marginal Cost and Marginal Revenue

If `C(x)` is total cost for producing `x` units, then:

`Marginal cost = C'(x)`

If `R(x)` is total revenue from selling `x` units, then:

`Marginal revenue = R'(x)`

## Example

Let `C(x) = 0.005x^3 - 0.02x^2 + 30x + 5000`.

Then:

`C'(x) = 0.015x^2 - 0.04x + 30`

At `x = 3`:

`C'(3) = 0.015(9) - 0.04(3) + 30 = 30.015`

So the marginal cost is about `30.02`.

## Economic Meaning

Marginal cost is not total cost. It is the approximate extra cost of producing one more unit near that output level.

# Unit 6E: Increasing Functions

A function `f` is increasing on an interval if larger input values give larger function values.

Using derivatives:

If `f'(x) > 0` for all `x` in an interval, then `f` is increasing on that interval.

## Example

Let `f(x) = 7x - 3`.

`f'(x) = 7 > 0` for all real `x`.

Therefore, `f` is increasing on `R`.

# Unit 6F: Decreasing Functions

A function `f` is decreasing on an interval if larger input values give smaller function values.

Using derivatives:

If `f'(x) < 0` for all `x` in an interval, then `f` is decreasing on that interval.

## Example

Let `f(x) = -2x + 5`.

`f'(x) = -2 < 0` for all real `x`.

Therefore, `f` is decreasing on `R`.

# Unit 6G: Finding Intervals of Increase and Decrease

To find intervals where a function increases or decreases:

1. Find `f'(x)`.
2. Solve `f'(x) = 0`.
3. Mark the critical points on the number line.
4. Test the sign of `f'(x)` in each interval.
5. State increasing intervals where `f'(x) > 0`.
6. State decreasing intervals where `f'(x) < 0`.

## Example

Find intervals for `f(x) = x^2 - 4x + 6`.

`f'(x) = 2x - 4`

Set `f'(x) = 0`:

`2x - 4 = 0`, so `x = 2`.

For `x < 2`, `f'(x) < 0`, so `f` is decreasing on `(-infinity, 2)`.

For `x > 2`, `f'(x) > 0`, so `f` is increasing on `(2, infinity)`.

# Unit 6H: Critical Points

A critical point is a point in the domain where:

- `f'(x) = 0`, or
- `f'(x)` does not exist.

Critical points are candidates for local maxima, local minima, or neither.

## Important Warning

Not every critical point is a maximum or minimum.

Example:

`f(x) = x^3` has `f'(x) = 3x^2`, so `f'(0) = 0`. But `x = 0` is not a maximum or minimum; it is a point of inflection.

# Unit 6I: Local Maximum and Local Minimum

## Local Maximum

`f(a)` is a local maximum if it is greater than or equal to nearby values of `f(x)`.

## Local Minimum

`f(a)` is a local minimum if it is less than or equal to nearby values of `f(x)`.

## First Derivative Test

Let `a` be a critical point.

- If `f'(x)` changes from positive to negative at `a`, then `f(a)` is a local maximum.
- If `f'(x)` changes from negative to positive at `a`, then `f(a)` is a local minimum.
- If `f'(x)` does not change sign, then `a` is neither local maximum nor local minimum.

# Unit 6J: Example of Local Extrema

Find local extrema of:

`f(x) = x^3 - 3x^2 + 2`

Step 1:

`f'(x) = 3x^2 - 6x = 3x(x - 2)`

Step 2:

Critical points are `x = 0` and `x = 2`.

Step 3: Sign of `f'(x)`.

- On `(-infinity, 0)`, `f'(x) > 0`.
- On `(0, 2)`, `f'(x) < 0`.
- On `(2, infinity)`, `f'(x) > 0`.

At `x = 0`, derivative changes from positive to negative, so local maximum.

`f(0) = 2`

At `x = 2`, derivative changes from negative to positive, so local minimum.

`f(2) = 8 - 12 + 2 = -2`

# Unit 6K: Absolute Maximum and Minimum on Closed Intervals

If a function is continuous on a closed interval `[a, b]`, then it attains both absolute maximum and absolute minimum on that interval.

## Steps

1. Find `f'(x)`.
2. Find critical points inside `(a, b)`.
3. Evaluate `f(x)` at all critical points inside the interval.
4. Evaluate `f(a)` and `f(b)`.
5. Compare all values.
6. Greatest is absolute maximum; smallest is absolute minimum.

## Example

Find absolute maximum and minimum of `f(x) = x^2 - 4x + 6` on `[0, 5]`.

`f'(x) = 2x - 4`

Critical point: `x = 2`, which lies in `[0, 5]`.

Evaluate:

- `f(0) = 6`
- `f(2) = 2`
- `f(5) = 25 - 20 + 6 = 11`

Absolute minimum is `2` at `x = 2`.

Absolute maximum is `11` at `x = 5`.

# Unit 6L: Optimisation Word Problems

Optimisation problems ask for largest or smallest possible value under given conditions.

## Standard Steps

1. Identify the quantity to maximise or minimise.
2. Assign variables.
3. Use the condition to reduce to one variable.
4. Write the function to optimise.
5. Find derivative.
6. Find critical points.
7. Use first derivative test or closed interval comparison.
8. Answer in words with units.

## Example: Two Numbers

Find two positive numbers whose sum is `15` and whose product is maximum.

Let the numbers be `x` and `15 - x`.

Product:

`P(x) = x(15 - x) = 15x - x^2`

`P'(x) = 15 - 2x`

Set `P'(x) = 0`:

`15 - 2x = 0`, so `x = 15/2`.

The other number is also `15/2`.

So the product is maximum when the numbers are equal.

# Unit 6M: Geometry Optimisation

Geometry problems often involve area, volume, distance, or surface area.

## Example: Minimum Distance to a Parabola

To find the shortest distance from a point to a curve:

1. Take a general point on the curve.
2. Write distance squared instead of distance.
3. Minimise the squared distance.

Distance squared is easier because it avoids square roots and gives the same minimum point.

## Example: Box Problems

For open-box problems:

1. Draw the base rectangle.
2. Let square cut size be `x`.
3. Express new length, width, and height in terms of `x`.
4. Write volume.
5. Differentiate volume.
6. Check practical domain.

The domain matters because physical lengths must be positive.

# Unit 6N: Second Derivative Test

The first derivative test is usually enough, but the second derivative test can be faster.

If `f'(a) = 0`:

- If `f''(a) < 0`, then `f(a)` is a local maximum.
- If `f''(a) > 0`, then `f(a)` is a local minimum.
- If `f''(a) = 0`, the test is inconclusive.

## Example

For `f(x) = x^2 - 4x + 6`:

`f'(x) = 2x - 4`, so critical point is `x = 2`.

`f''(x) = 2 > 0`, so `f(2)` is a local minimum.

# Unit 6O: Word Problem Units

Rates must carry correct units.

Examples:

- If radius is in `cm` and time in `s`, then `dr/dt` is `cm/s`.
- If area is in `cm^2`, then `dA/dt` is `cm^2/s`.
- If volume is in `cm^3`, then `dV/dt` is `cm^3/s`.
- Marginal cost may be rupees per unit.
- Marginal revenue may be rupees per unit.

Units help catch wrong formulas.

# Unit 6P: Worked Examples

## Example 1: Volume of a Cube

The volume of a cube is increasing at `9 cm^3/s`. Find how fast surface area is increasing when side length is `10 cm`.

Let side be `x`.

`V = x^3`, so `dV/dt = 3x^2 dx/dt`.

Given `dV/dt = 9`.

At `x = 10`:

`9 = 3(100) dx/dt`

`dx/dt = 9/300 = 3/100`

Surface area:

`S = 6x^2`

`dS/dt = 12x dx/dt`

At `x = 10`:

`dS/dt = 12(10)(3/100) = 18/5 = 3.6 cm^2/s`

## Example 2: Increasing and Decreasing

Find intervals for `f(x) = x^3 - 6x^2 + 9x + 1`.

`f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)`

Critical points: `x = 1`, `x = 3`.

Sign of `f'(x)`:

- Positive on `(-infinity, 1)`.
- Negative on `(1, 3)`.
- Positive on `(3, infinity)`.

Therefore:

- Increasing on `(-infinity, 1)` and `(3, infinity)`.
- Decreasing on `(1, 3)`.

## Example 3: Absolute Extrema

Find absolute maximum and minimum of `f(x) = x^3 - 3x` on `[-2, 2]`.

`f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)`

Critical points: `x = -1`, `x = 1`.

Evaluate:

- `f(-2) = -8 + 6 = -2`
- `f(-1) = -1 + 3 = 2`
- `f(1) = 1 - 3 = -2`
- `f(2) = 8 - 6 = 2`

Absolute maximum is `2` at `x = -1` and `x = 2`.

Absolute minimum is `-2` at `x = -2` and `x = 1`.

# Unit 6Q: Answer-Writing Framework

## To solve a related-rate problem

Write in this order:

1. Define variables and their units.
2. Write the relation between variables.
3. Differentiate with respect to time.
4. Substitute the given values and rates.
5. Solve for the required rate.
6. State the answer with units and sign.

## To find increasing and decreasing intervals

Write in this order:

1. Find `f'(x)`.
2. Solve `f'(x) = 0`.
3. Make sign intervals.
4. Test sign of `f'(x)` in each interval.
5. State increasing and decreasing intervals.

## To find local maxima and minima

Write in this order:

1. Find critical points.
2. Check sign change of `f'(x)`.
3. Positive to negative gives local maximum.
4. Negative to positive gives local minimum.
5. Find function values at those points.

## To solve an optimisation problem

Write in this order:

1. Define what is to be maximised or minimised.
2. Write it as a function of one variable.
3. Identify the practical domain.
4. Differentiate.
5. Find critical points.
6. Test values or sign changes.
7. State the final answer in context.

# Unit 6R: Common Mistakes and Corrections

| Mistake | Correction |
|---|---|
| Substituting changing values before differentiating | Differentiate first, then substitute instant values. |
| Forgetting negative sign for decreasing quantity | If a quantity decreases, its rate is negative. |
| Confusing `dy/dx` with `dy/dt` | Use chain rule carefully in related rates. |
| Saying `f'(x) = 0` always means maximum or minimum | It gives only a critical point candidate. |
| Ignoring intervals where derivative is undefined | Such points can also be critical. |
| Forgetting endpoints on closed intervals | Absolute extrema require endpoint comparison. |
| Giving local maximum when absolute maximum is asked | Local and absolute extrema are different. |
| Ignoring practical domain in word problems | Lengths, areas, and volumes must satisfy physical constraints. |

## Practice Set

1. A circle's radius increases at `3 cm/s`. Find `dA/dt` when `r = 10 cm`.
2. A cube's side increases at `2 cm/s`. Find `dV/dt` when side is `5 cm`.
3. Find marginal cost if `C(x) = x^3 - 4x^2 + 20x + 100` at `x = 4`.
4. Find intervals of increase and decrease for `f(x) = x^2 - 6x + 8`.
5. Find local maxima and minima of `f(x) = x^3 - 3x`.
6. Find absolute maximum and minimum of `f(x) = x^2 + 2x` on `[-3, 2]`.
7. Find two positive numbers with sum `20` and maximum product.
8. A rectangular field has fixed perimeter `100 m`. Find dimensions for maximum area.
9. Explain why endpoints must be checked on closed intervals.
10. Give an example where `f'(a) = 0` but there is no maximum or minimum.

## Final Revision

Remember these points:

- Derivative measures rate of change.
- Related-rate problems need differentiation with respect to time.
- `f'(x) > 0` means increasing; `f'(x) < 0` means decreasing.
- Critical points are candidates, not guaranteed extrema.
- First derivative sign change identifies local maximum or minimum.
- Absolute extrema on closed intervals require checking endpoints.
- Optimisation problems must be reduced to one-variable functions with valid domains.
