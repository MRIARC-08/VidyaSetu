# Chapter 2: Application of Integrals
### NCERT Class 12 - Maths Part 2

## Chapter at a Glance

This chapter applies definite integrals to find areas of plane regions. Instead of treating integration only as an antiderivative, this chapter uses it as accumulation of small strips of area.

The main skill is setting up the integral correctly: identify the region, choose vertical or horizontal strips, find limits, and integrate the correct upper-minus-lower or right-minus-left expression.

## Learning Outcomes

By the end of this chapter, learners should be able to:

- Interpret definite integrals as area.
- Find area under a curve and above the x-axis.
- Find area between a curve and the x-axis when the curve changes sign.
- Find area between two curves.
- Choose vertical or horizontal strips appropriately.
- Find area enclosed by a circle or ellipse using symmetry.
- Set limits from intersection points.
- Avoid sign errors by using upper function minus lower function.

## Key Terms

| Term | Meaning |
|---|---|
| Area under curve | Region between a curve and an axis over an interval. |
| Vertical strip | Thin rectangle of width `dx`. |
| Horizontal strip | Thin rectangle of width `dy`. |
| Upper curve | Curve with larger `y` value in a vertical strip. |
| Lower curve | Curve with smaller `y` value in a vertical strip. |
| Right curve | Curve with larger `x` value in a horizontal strip. |
| Left curve | Curve with smaller `x` value in a horizontal strip. |
| Bounded region | Region enclosed by curves or axes. |

## Quick Formula Map

| Situation | Area Formula |
|---|---|
| Area under `y = f(x)` above x-axis from `a` to `b` | `int_a^b f(x) dx` |
| Area between `y = f(x)` and x-axis | `int_a^b |f(x)| dx` |
| Area between curves using vertical strips | `int_a^b [upper - lower] dx` |
| Area between curves using horizontal strips | `int_c^d [right - left] dy` |
| Circle `x^2 + y^2 = a^2` | Area `= pi a^2` |
| Ellipse `x^2/a^2 + y^2/b^2 = 1` | Area `= pi ab` |

# Unit 2A: Area as a Definite Integral

If `y = f(x)` is non-negative on `[a, b]`, the area between the curve, the x-axis, and the vertical lines `x = a`, `x = b` is:

`Area = int_a^b f(x) dx`

This works because the region is divided into many thin vertical strips. Each strip has approximate area:

`height x width = f(x) dx`

Adding all strips gives the integral.

# Unit 2B: Area When Curve Is Below the x-Axis

If `f(x)` is below the x-axis, then `int_a^b f(x) dx` is negative. But area cannot be negative.

So:

`Area = int_a^b |f(x)| dx`

If the curve changes sign, split the interval at the points where `f(x) = 0`.

## Example

Find area between `y = x` and x-axis from `x = -1` to `x = 1`.

Since `x` is negative on `[-1,0]` and positive on `[0,1]`:

`Area = int_-1^0 (-x) dx + int_0^1 x dx`

`= 1/2 + 1/2 = 1`

# Unit 2C: Area Using Vertical Strips

When using vertical strips, integrate with respect to `x`.

Area between upper curve `y = f(x)` and lower curve `y = g(x)` from `x = a` to `x = b` is:

`Area = int_a^b [f(x) - g(x)] dx`

where `f(x) >= g(x)` on the interval.

## Steps

1. Sketch or understand the region.
2. Find intersection points.
3. Decide upper curve and lower curve.
4. Write area as `int [upper - lower] dx`.
5. Evaluate.

# Unit 2D: Area Using Horizontal Strips

When curves are easier to write as `x` in terms of `y`, use horizontal strips.

Area between right curve `x = f(y)` and left curve `x = g(y)` from `y = c` to `y = d` is:

`Area = int_c^d [f(y) - g(y)] dy`

## When Horizontal Strips Help

Use horizontal strips when:

- The region is bounded left-right more naturally than top-bottom.
- The curve is difficult to express as `y = f(x)`.
- Vertical strips require splitting into many integrals.

# Unit 2E: Area Enclosed by a Circle

For circle:

`x^2 + y^2 = a^2`

Upper semicircle:

`y = sqrt(a^2 - x^2)`

Area of circle:

`Area = 4 int_0^a sqrt(a^2 - x^2) dx`

This evaluates to:

`pi a^2`

## Why Symmetry Helps

The circle is symmetric in all four quadrants. Instead of integrating from `-a` to `a`, we can find area in the first quadrant and multiply by `4`.

# Unit 2F: Area Enclosed by an Ellipse

For ellipse:

`x^2/a^2 + y^2/b^2 = 1`

Upper half:

`y = (b/a)sqrt(a^2 - x^2)`

Area:

`Area = 4 int_0^a (b/a)sqrt(a^2 - x^2) dx`

This evaluates to:

`pi ab`

## Special Case

If `a = b`, the ellipse becomes a circle and area becomes `pi a^2`.

# Unit 2G: Area Bounded by a Line and Axes

If a line intersects the x-axis and y-axis, the bounded region is often a triangle. It can be solved by geometry or integration.

## Example

Find area bounded by `y = 3x + 2`, the x-axis, and ordinates if limits are specified.

If the region is between `x = a` and `x = b` and the line is above the x-axis:

`Area = int_a^b (3x + 2) dx`

If the line crosses the x-axis, split at the root `3x + 2 = 0`.

# Unit 2H: Area Between Two Curves

Suppose curves are:

`y = f(x)` and `y = g(x)`

The points of intersection are found by solving:

`f(x) = g(x)`

These intersection points usually give the limits.

## Example

Find area between `y = x` and `y = x^2`.

Intersections:

`x = x^2`

`x(x - 1) = 0`

So `x = 0` and `x = 1`.

On `[0,1]`, `x >= x^2`, so:

`Area = int_0^1 (x - x^2) dx`

`= [x^2/2 - x^3/3]_0^1`

`= 1/2 - 1/3 = 1/6`

# Unit 2I: Regions Requiring Splitting

Sometimes the upper curve changes within the interval. Then split the area at the intersection point where the change happens.

## Rule

If the top-bottom order changes, do not use one integral across the whole interval. Split it.

## Example Pattern

For functions `f(x)` and `g(x)`:

- If `f >= g` on `[a, c]`
- If `g >= f` on `[c, b]`

then:

`Area = int_a^c [f-g] dx + int_c^b [g-f] dx`

# Unit 2J: Worked Examples

## Example 1: Area Under a Parabola

Find area under `y = x^2` from `x = 0` to `x = 2`.

`Area = int_0^2 x^2 dx`

`= [x^3/3]_0^2 = 8/3`

## Example 2: Area Between Line and Parabola

Find area between `y = 2x` and `y = x^2`.

Intersections:

`2x = x^2`

`x(x - 2) = 0`

So `x = 0`, `x = 2`.

On `[0,2]`, `2x >= x^2`.

`Area = int_0^2 (2x - x^2) dx`

`= [x^2 - x^3/3]_0^2`

`= 4 - 8/3 = 4/3`

## Example 3: Area Using y Limits

Find area between `x = y^2` and `x = 2y`.

Intersections:

`y^2 = 2y`

`y(y - 2) = 0`

So `y = 0`, `y = 2`.

For `0 <= y <= 2`, right curve is `x = 2y` and left curve is `x = y^2`.

`Area = int_0^2 (2y - y^2) dy`

`= [y^2 - y^3/3]_0^2`

`= 4 - 8/3 = 4/3`

# Unit 2K: Answer-Writing Framework

## To find area under one curve

Write in this order:

1. Identify curve and interval.
2. Check whether curve is above or below axis.
3. Split interval if sign changes.
4. Write integral.
5. Evaluate and state square units.

## To find area between two curves

Write in this order:

1. Find points of intersection.
2. Decide whether to use vertical or horizontal strips.
3. Identify upper-lower or right-left curve.
4. Set up the integral.
5. Evaluate.
6. State the final area.

## To use symmetry

Write in this order:

1. Identify symmetry of region.
2. Compute area of one part.
3. Multiply by the number of equal parts.
4. State final area.

# Unit 2L: Common Mistakes and Corrections

| Mistake | Correction |
|---|---|
| Using lower curve minus upper curve | Use upper minus lower for vertical strips. |
| Forgetting absolute area | Area cannot be negative. |
| Not finding intersection points | Intersections usually give limits. |
| Using one integral when curves switch order | Split the region. |
| Choosing `dx` when curves are easier in terms of `y` | Use horizontal strips and integrate with respect to `y`. |
| Ignoring symmetry | Symmetry can reduce calculation. |
| Writing answer without units | Area is in square units. |

## Practice Set

1. Find area under `y = x^2 + 1` from `x = 0` to `x = 2`.
2. Find area between `y = x` and the x-axis from `-2` to `3`.
3. Find area between `y = x^2` and `y = x`.
4. Find area between `y = 4x - x^2` and the x-axis.
5. Find area between `x = y^2` and `x = y + 2`.
6. Derive area of a circle using symmetry and integration.
7. Derive area of an ellipse using symmetry and integration.
8. Explain when a region must be split into two integrals.

## Final Revision

Remember these points:

- Area under a positive curve is a definite integral.
- If a curve is below the axis, use absolute value or split.
- Between two curves, use upper minus lower or right minus left.
- Intersections determine limits.
- Symmetry is powerful for circles, ellipses, and even functions.
- The final answer should be non-negative and in square units.
