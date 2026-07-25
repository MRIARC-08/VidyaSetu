# Chapter 2: Inverse Trigonometric Functions
### NCERT Class 12 - Maths Part 1

## Chapter at a Glance

This chapter introduces inverse trigonometric functions such as `sin^-1 x`, `cos^-1 x`, `tan^-1 x`, and their related functions. The main challenge is not calculation alone. The main challenge is understanding principal values, domains, ranges, and the restrictions needed to make trigonometric functions invertible.

Inverse trigonometric functions are used in calculus, coordinate geometry, integration, differential equations, physics, and engineering. A strong grip on this chapter prevents mistakes later in differentiation and integration.

## Learning Outcomes

By the end of this chapter, learners should be able to:

- Explain why trigonometric functions need restricted domains to have inverses.
- Define principal branches of inverse trigonometric functions.
- State the domain and range of each inverse trigonometric function.
- Find principal values of inverse trigonometric expressions.
- Use standard identities involving inverse trigonometric functions.
- Simplify expressions such as `sin(tan^-1 x)` and `cos(sin^-1 x)`.
- Avoid incorrect cancellation such as `sin^-1(sin x) = x` for all `x`.
- Handle sign and quadrant carefully.

## Key Terms

| Term | Meaning |
|---|---|
| Inverse function | Function that reverses the effect of another function. |
| Principal value | The value chosen from the principal branch of an inverse trigonometric function. |
| Principal branch | Restricted interval on which a trigonometric function is one-one and onto its range. |
| Domain | Allowed input values of a function. |
| Range | Output values actually produced by a function. |
| Arc sine | Another name for inverse sine. |
| Arc cosine | Another name for inverse cosine. |
| Arc tangent | Another name for inverse tangent. |

## Principal Branch Table

| Function | Domain | Principal Range |
|---|---|---|
| `sin^-1 x` | `[-1, 1]` | `[-pi/2, pi/2]` |
| `cos^-1 x` | `[-1, 1]` | `[0, pi]` |
| `tan^-1 x` | `R` | `(-pi/2, pi/2)` |
| `cot^-1 x` | `R` | `(0, pi)` |
| `sec^-1 x` | `(-infinity, -1] union [1, infinity)` | `[0, pi]` except `pi/2` |
| `cosec^-1 x` | `(-infinity, -1] union [1, infinity)` | `[-pi/2, pi/2]` except `0` |

# Unit 2A: Why Inverse Trigonometric Functions Need Restricted Domains

A function has an inverse only when it is one-one and onto. Usual trigonometric functions are periodic, so they are not one-one on their full domains.

For example, `sin x` takes the value `0` at `x = 0`, `x = pi`, `x = 2pi`, and many other values. Therefore, the equation `sin x = 0` has many solutions.

To define `sin^-1 x` as a function, we restrict `sin x` to an interval where it is one-one. The standard restricted interval is `[-pi/2, pi/2]`.

## Key Idea

`sin^-1 x` does not mean "all angles whose sine is x". It means the principal angle whose sine is `x`.

# Unit 2B: Principal Value

The principal value of an inverse trigonometric function is the output value that lies in its principal range.

## Example

`sin^-1(1/2) = pi/6` because:

- `sin(pi/6) = 1/2`
- `pi/6` lies in `[-pi/2, pi/2]`

Although `5pi/6` also has sine `1/2`, it is not the value of `sin^-1(1/2)` because `5pi/6` is outside the principal range of `sin^-1 x`.

## Another Example

`cos^-1(-1/2) = 2pi/3` because:

- `cos(2pi/3) = -1/2`
- `2pi/3` lies in `[0, pi]`

# Unit 2C: Domain and Range Details

## Inverse Sine

`sin^-1 x` is defined only for `-1 <= x <= 1`.

Range: `[-pi/2, pi/2]`

Important values:

| x | `sin^-1 x` |
|---|---|
| `-1` | `-pi/2` |
| `-1/2` | `-pi/6` |
| `0` | `0` |
| `1/2` | `pi/6` |
| `1` | `pi/2` |

## Inverse Cosine

`cos^-1 x` is defined only for `-1 <= x <= 1`.

Range: `[0, pi]`

Important values:

| x | `cos^-1 x` |
|---|---|
| `-1` | `pi` |
| `-1/2` | `2pi/3` |
| `0` | `pi/2` |
| `1/2` | `pi/3` |
| `1` | `0` |

## Inverse Tangent

`tan^-1 x` is defined for every real `x`.

Range: `(-pi/2, pi/2)`

Important values:

| x | `tan^-1 x` |
|---|---|
| `-1` | `-pi/4` |
| `0` | `0` |
| `1` | `pi/4` |
| `sqrt(3)` | `pi/3` |

# Unit 2D: Basic Cancellation Rules

Some cancellation rules are always valid, and some require conditions.

## Always Valid Within Domain

If `x` lies in the domain of the inverse function:

- `sin(sin^-1 x) = x`, for `x in [-1,1]`
- `cos(cos^-1 x) = x`, for `x in [-1,1]`
- `tan(tan^-1 x) = x`, for all real `x`

## Valid Only on Principal Range

- `sin^-1(sin x) = x` only if `x in [-pi/2, pi/2]`
- `cos^-1(cos x) = x` only if `x in [0, pi]`
- `tan^-1(tan x) = x` only if `x in (-pi/2, pi/2)`

## Common Trap

Do not cancel inverse trigonometric functions blindly. Always check whether the angle lies in the principal range.

# Unit 2E: Standard Identities

## Complementary Identities

For `x in [-1,1]`:

`sin^-1 x + cos^-1 x = pi/2`

For all real `x`:

`tan^-1 x + cot^-1 x = pi/2`

For `|x| >= 1`:

`sec^-1 x + cosec^-1 x = pi/2`

## Negative Argument Identities

For valid `x`:

- `sin^-1(-x) = -sin^-1 x`
- `tan^-1(-x) = -tan^-1 x`
- `cosec^-1(-x) = -cosec^-1 x`
- `cos^-1(-x) = pi - cos^-1 x`
- `cot^-1(-x) = pi - cot^-1 x`
- `sec^-1(-x) = pi - sec^-1 x`

## Why Cosine Behaves Differently

The range of `cos^-1 x` is `[0, pi]`, not symmetric about `0`. Therefore `cos^-1(-x)` is not `-cos^-1 x`. It is `pi - cos^-1 x`.

# Unit 2F: Triangle Method for Simplification

Many expressions can be simplified using a right triangle.

## Example: Find `sin(tan^-1 x)`

Let `theta = tan^-1 x`.

Then `tan theta = x = x/1`.

Build a right triangle:

- Opposite side = `x`
- Adjacent side = `1`
- Hypotenuse = `sqrt(1 + x^2)`

So:

`sin(tan^-1 x) = sin theta = x/sqrt(1 + x^2)`

## Example: Find `cos(sin^-1 x)`

Let `theta = sin^-1 x`.

Then `sin theta = x = x/1`.

Since `theta in [-pi/2, pi/2]`, `cos theta` is non-negative.

So:

`cos(sin^-1 x) = sqrt(1 - x^2)`

## Example: Find `tan(cos^-1 x)`

Let `theta = cos^-1 x`.

Then `cos theta = x = x/1`.

Since `theta in [0, pi]`, the sign of tangent depends on whether `theta` is acute or obtuse.

Using triangle magnitude:

`tan theta = sqrt(1 - x^2)/x`

This formula carries sign through `x`. If `x` is negative, tangent is negative.

# Unit 2G: Addition Formulas for Inverse Tangent

Inverse tangent addition needs conditions.

For suitable values:

`tan^-1 x + tan^-1 y = tan^-1((x + y)/(1 - xy))`

But if `xy > 1`, an adjustment by `pi` may be needed depending on signs and principal range.

## Safe Method

Instead of memorising cases blindly:

1. Let `A = tan^-1 x` and `B = tan^-1 y`.
2. Then `A` and `B` lie in `(-pi/2, pi/2)`.
3. Use `tan(A + B) = (x + y)/(1 - xy)`.
4. Decide the correct quadrant of `A + B`.
5. Choose the value in the correct principal range if writing as one inverse tangent.

## Example

Find `tan^-1 1 + tan^-1 1`.

Each value is `pi/4`, so the sum is `pi/2`.

The formula gives denominator `1 - 1 = 0`, showing tangent is undefined at `pi/2`. This is why conditions matter.

# Unit 2H: Solving Principal Value Questions

## Example 1

Find the principal value of `sin^-1(-sqrt(3)/2)`.

Since `sin(-pi/3) = -sqrt(3)/2` and `-pi/3` lies in `[-pi/2, pi/2]`,

`sin^-1(-sqrt(3)/2) = -pi/3`.

## Example 2

Find the principal value of `cot^-1(-1)`.

The range of `cot^-1 x` is `(0, pi)`.

Cotangent is `-1` at `3pi/4` in this interval.

So:

`cot^-1(-1) = 3pi/4`

## Example 3

Find `cos^-1(cos(5pi/3))`.

The answer is not `5pi/3` because `5pi/3` is not in `[0, pi]`.

Since `cos(5pi/3) = 1/2`, we get:

`cos^-1(cos(5pi/3)) = cos^-1(1/2) = pi/3`

# Unit 2I: Worked Mixed Examples

## Example 1: Simplify `tan(sin^-1 x)`

Let `theta = sin^-1 x`.

Then `sin theta = x/1`.

Opposite = `x`, hypotenuse = `1`, adjacent = `sqrt(1 - x^2)`.

So:

`tan(sin^-1 x) = x/sqrt(1 - x^2)`

Valid for `-1 < x < 1`.

## Example 2: Simplify `sec(tan^-1 x)`

Let `theta = tan^-1 x`.

Then `tan theta = x/1`.

Hypotenuse = `sqrt(1 + x^2)`, adjacent = `1`.

So:

`sec(tan^-1 x) = sqrt(1 + x^2)`

## Example 3: Evaluate `sin^-1(1/2) + cos^-1(1/2)`

Using the identity:

`sin^-1 x + cos^-1 x = pi/2`

At `x = 1/2`, the value is `pi/2`.

# Unit 2J: Answer-Writing Framework

## To find a principal value

Write in this order:

1. Identify the inverse trigonometric function.
2. Write its principal range.
3. Find an angle whose trigonometric value matches the input.
4. Choose the angle lying in the principal range.
5. State the answer.

## To simplify an expression like `sin(tan^-1 x)`

Write in this order:

1. Put `theta = tan^-1 x`.
2. Convert to a basic trigonometric ratio.
3. Build a right triangle.
4. Find the required ratio.
5. Check signs using the principal range.

## To prove an identity

Write in this order:

1. Start from one side.
2. Substitute a variable angle if useful.
3. Use principal ranges.
4. Apply standard identities.
5. State the required result.

# Unit 2K: Common Mistakes and Corrections

| Mistake | Correction |
|---|---|
| Treating `sin^-1 x` as `1/sin x` | `sin^-1 x` means inverse sine, not reciprocal sine. |
| Writing `sin^-1(sin x) = x` for all `x` | This is true only when `x` is in the principal range. |
| Forgetting the range of `cos^-1 x` | It is `[0, pi]`, never negative. |
| Writing `cos^-1(-x) = -cos^-1 x` | Correct formula is `cos^-1(-x) = pi - cos^-1 x`. |
| Ignoring domain | `sin^-1 2` is not real because `2` is outside `[-1,1]`. |
| Applying tangent addition formula without conditions | Check denominator, sign, and quadrant. |

## Practice Set

1. Find the principal values of `sin^-1(-1/2)`, `cos^-1(-1/2)`, and `tan^-1(sqrt(3))`.
2. Find `cot^-1(-sqrt(3))`.
3. Simplify `sin(tan^-1 x)`.
4. Simplify `cos(tan^-1 x)`.
5. Simplify `tan(sin^-1 x)`.
6. Evaluate `sin^-1(sin(2pi/3))`.
7. Evaluate `cos^-1(cos(7pi/6))`.
8. Prove `sin^-1 x + cos^-1 x = pi/2`.
9. Find the domain of `sin^-1(2x - 1)`.
10. Explain why `tan^-1(tan(3pi/4))` is not `3pi/4`.

## Final Revision

Remember these points:

- Inverse trigonometric functions give principal values.
- Principal range decides the answer.
- `sin^-1 x`, `cos^-1 x` need `x in [-1,1]`.
- `tan^-1 x` is defined for all real `x`.
- Never cancel without checking the principal range.
- Use right triangles for expressions like `sin(tan^-1 x)`.
