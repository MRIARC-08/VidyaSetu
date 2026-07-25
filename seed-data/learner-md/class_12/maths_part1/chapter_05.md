# Chapter 5: Continuity and Differentiability
### NCERT Class 12 - Maths Part 1

## Chapter at a Glance

This chapter connects two central ideas of calculus: continuity and differentiability. Continuity studies whether a function has a break at a point. Differentiability studies whether the function has a well-defined tangent or rate of change at a point.

The chapter also builds the derivative toolkit needed for the rest of Class 12 calculus: chain rule, implicit differentiation, derivatives of inverse trigonometric functions, exponential and logarithmic differentiation, parametric differentiation, and second order derivatives.

## Learning Outcomes

By the end of this chapter, learners should be able to:

- Test continuity of a function at a point.
- Test continuity on an interval.
- Use left-hand and right-hand limits.
- Apply algebra of continuous functions.
- Understand differentiability at a point.
- Prove that differentiability implies continuity.
- Use product, quotient, and chain rules.
- Differentiate composite functions.
- Differentiate implicit functions.
- Differentiate inverse trigonometric functions.
- Differentiate exponential and logarithmic functions.
- Use logarithmic differentiation.
- Differentiate functions given in parametric form.
- Find second order derivatives.

## Key Terms

| Term | Meaning |
|---|---|
| Continuous at a point | Limit at the point equals the function value. |
| Left-hand limit | Value approached as `x` approaches `a` from the left. |
| Right-hand limit | Value approached as `x` approaches `a` from the right. |
| Discontinuous | Not continuous at a point. |
| Differentiable | Derivative exists at a point. |
| Derivative | Instantaneous rate of change. |
| Chain rule | Rule for differentiating composite functions. |
| Implicit function | Relation where `y` is not explicitly written as a function of `x`. |
| Logarithmic differentiation | Taking logarithm before differentiating. |
| Parametric form | Variables expressed in terms of a third variable. |
| Second order derivative | Derivative of the first derivative. |

## Quick Formula Map

| Concept | Formula |
|---|---|
| Continuity at `a` | `lim x->a f(x) = f(a)` |
| Derivative at `a` | `f'(a) = lim h->0 [f(a+h)-f(a)]/h` |
| Product rule | `(uv)' = u'v + uv'` |
| Quotient rule | `(u/v)' = (u'v - uv')/v^2` |
| Chain rule | `d/dx f(g(x)) = f'(g(x))g'(x)` |
| Parametric derivative | `dy/dx = (dy/dt)/(dx/dt)` |
| Second derivative in parameter | `d2y/dx2 = [d/dt(dy/dx)]/(dx/dt)` |

# Unit 5A: Continuity at a Point

A function `f` is continuous at `x = a` if:

1. `f(a)` is defined.
2. `lim x->a f(x)` exists.
3. `lim x->a f(x) = f(a)`.

If any one of these fails, the function is discontinuous at `a`.

## Left and Right Limits

The limit `lim x->a f(x)` exists only when:

`lim x->a- f(x) = lim x->a+ f(x)`

and both are finite.

## Example

Let `f(x) = 2x + 3`. Check continuity at `x = 1`.

`f(1) = 5`

`lim x->1 (2x + 3) = 5`

Since the limit equals the function value, `f` is continuous at `x = 1`.

# Unit 5B: Common Types of Discontinuity

## Function Not Defined

Example: `f(x) = 1/(x - 2)` is not continuous at `x = 2` because `f(2)` is not defined.

## Left and Right Limits Unequal

A piecewise function may approach different values from left and right.

## Limit Exists but Does Not Equal Function Value

Example:

`f(x) = (x^2 - 1)/(x - 1)` for `x != 1`, and `f(1) = 5`.

For `x != 1`, `f(x) = x + 1`, so `lim x->1 f(x) = 2`.

But `f(1) = 5`, so the function is discontinuous at `1`.

# Unit 5C: Continuity on an Interval

A function is continuous on an open interval `(a, b)` if it is continuous at every point of `(a, b)`.

For a closed interval `[a, b]`, it must satisfy:

- Continuous at every point inside `(a, b)`.
- Right-continuous at `a`.
- Left-continuous at `b`.

## Standard Continuous Functions

The following are continuous on their domains:

- Polynomial functions.
- Rational functions where denominator is not zero.
- Sine and cosine.
- Tangent where defined.
- Exponential functions.
- Logarithmic functions for positive input.
- Inverse trigonometric functions on their domains.

# Unit 5D: Algebra of Continuous Functions

If `f` and `g` are continuous at `a`, then:

- `f + g` is continuous at `a`.
- `f - g` is continuous at `a`.
- `fg` is continuous at `a`.
- `kf` is continuous at `a` for constant `k`.
- `f/g` is continuous at `a`, provided `g(a) != 0`.

## Important Use

Instead of proving continuity from first principles every time, identify a function as a combination of known continuous functions.

## Example

`f(x) = (x^2 + sin x)/(x^2 + 1)` is continuous for all real `x` because numerator and denominator are continuous, and denominator is never zero.

# Unit 5E: Greatest Integer and Modulus Functions

## Modulus Function

`f(x) = |x|` is continuous for all real `x`.

At `x = 0`, left and right limits are both `0`, and `f(0) = 0`.

## Greatest Integer Function

The greatest integer function, often written as `[x]`, is discontinuous at every integer.

Example:

At `x = 2`, the left-hand limit is `1`, the right-hand limit is `2`, and the function value is `2`. Since left and right limits differ, it is discontinuous at `2`.

# Unit 5F: Differentiability at a Point

A function `f` is differentiable at `x = a` if the following limit exists:

`f'(a) = lim h->0 [f(a+h) - f(a)]/h`

This derivative gives the instantaneous rate of change and the slope of the tangent at the point.

## Left and Right Derivatives

The derivative exists at `a` only if:

- Left-hand derivative exists.
- Right-hand derivative exists.
- Both are equal.

# Unit 5G: Differentiability Implies Continuity

If a function is differentiable at a point, then it is continuous at that point.

But the converse is not always true.

## Example

`f(x) = |x|` is continuous at `x = 0`, but it is not differentiable at `x = 0`.

Reason:

- Left derivative at `0` is `-1`.
- Right derivative at `0` is `1`.

Since they are unequal, derivative does not exist.

## Key Lesson

Differentiability is stronger than continuity.

# Unit 5H: Basic Derivative Rules

If `u` and `v` are differentiable functions of `x`, then:

## Sum and Difference

`d/dx(u + v) = du/dx + dv/dx`

`d/dx(u - v) = du/dx - dv/dx`

## Constant Multiple

`d/dx(ku) = k du/dx`

## Product Rule

`d/dx(uv) = u dv/dx + v du/dx`

## Quotient Rule

`d/dx(u/v) = (v du/dx - u dv/dx)/v^2`, where `v != 0`.

# Unit 5I: Chain Rule

The chain rule is used for composite functions.

If `y = f(u)` and `u = g(x)`, then:

`dy/dx = dy/du * du/dx`

## Example

Differentiate `y = sin(x^2)`.

Let `u = x^2`, so `y = sin u`.

Then:

`dy/dx = cos u * 2x = 2x cos(x^2)`

## Common Trap

Do not differentiate only the outside function. Always multiply by the derivative of the inside function.

# Unit 5J: Derivatives of Composite Functions

## Example 1

Differentiate `y = (3x + 1)^5`.

Using chain rule:

`dy/dx = 5(3x + 1)^4 * 3 = 15(3x + 1)^4`

## Example 2

Differentiate `y = e^(sin x)`.

`dy/dx = e^(sin x) cos x`

## Example 3

Differentiate `y = log(x^2 + 1)`.

`dy/dx = 1/(x^2 + 1) * 2x = 2x/(x^2 + 1)`

# Unit 5K: Implicit Differentiation

In implicit differentiation, `y` is not isolated as a function of `x`. We differentiate both sides with respect to `x`, treating `y` as a function of `x`.

Whenever differentiating a term involving `y`, multiply by `dy/dx`.

## Example

Find `dy/dx` if `x^2 + y^2 = 25`.

Differentiate both sides:

`2x + 2y dy/dx = 0`

So:

`dy/dx = -x/y`

## Example

If `xy + y^2 = 3`, then:

Derivative of `xy` is `x dy/dx + y`.

Derivative of `y^2` is `2y dy/dx`.

So:

`x dy/dx + y + 2y dy/dx = 0`

`dy/dx (x + 2y) = -y`

`dy/dx = -y/(x + 2y)`

# Unit 5L: Derivatives of Inverse Trigonometric Functions

## Standard Formulas

| Function | Derivative |
|---|---|
| `sin^-1 x` | `1/sqrt(1 - x^2)` |
| `cos^-1 x` | `-1/sqrt(1 - x^2)` |
| `tan^-1 x` | `1/(1 + x^2)` |
| `cot^-1 x` | `-1/(1 + x^2)` |
| `sec^-1 x` | `1/(|x| sqrt(x^2 - 1))` |
| `cosec^-1 x` | `-1/(|x| sqrt(x^2 - 1))` |

## Chain Rule Forms

If `u` is a function of `x`, then:

- `d/dx(sin^-1 u) = u'/sqrt(1 - u^2)`
- `d/dx(cos^-1 u) = -u'/sqrt(1 - u^2)`
- `d/dx(tan^-1 u) = u'/(1 + u^2)`

## Example

Differentiate `y = tan^-1(3x)`.

Here `u = 3x`, so `u' = 3`.

`dy/dx = 3/(1 + 9x^2)`

# Unit 5M: Exponential and Logarithmic Functions

## Exponential Functions

| Function | Derivative |
|---|---|
| `e^x` | `e^x` |
| `e^u` | `e^u u'` |
| `a^x` | `a^x log a` |
| `a^u` | `a^u log a * u'` |

Here `log` means natural logarithm unless another base is specified.

## Logarithmic Functions

| Function | Derivative |
|---|---|
| `log x` | `1/x` |
| `log u` | `u'/u` |
| `log_a x` | `1/(x log a)` |

## Example

Differentiate `y = e^(x^2 + 1)`.

`dy/dx = e^(x^2 + 1) * 2x`

## Example

Differentiate `y = log(5x - 2)`.

`dy/dx = 5/(5x - 2)`

# Unit 5N: Logarithmic Differentiation

Logarithmic differentiation is useful when:

- Variables appear in both base and exponent.
- A function is a product of many powers.
- The expression is easier after taking logarithms.

## Example: Differentiate `y = x^x`, `x > 0`

Take logarithm:

`log y = x log x`

Differentiate:

`(1/y) dy/dx = log x + 1`

Therefore:

`dy/dx = x^x (log x + 1)`

## Example: Differentiate `y = (sin x)^x`

Take logarithm:

`log y = x log(sin x)`

Differentiate:

`(1/y) dy/dx = log(sin x) + x cot x`

Therefore:

`dy/dx = (sin x)^x [log(sin x) + x cot x]`

# Unit 5O: Parametric Differentiation

Sometimes `x` and `y` are both given in terms of a third variable `t`.

If:

`x = f(t)` and `y = g(t)`,

then:

`dy/dx = (dy/dt)/(dx/dt)`, provided `dx/dt != 0`.

## Example

Let `x = t^2` and `y = t^3`.

Then:

`dx/dt = 2t`

`dy/dt = 3t^2`

So:

`dy/dx = (3t^2)/(2t) = 3t/2`, for `t != 0`.

# Unit 5P: Second Order Derivatives

The second order derivative is the derivative of the first derivative.

If `y = f(x)`, then:

`d2y/dx2 = d/dx(dy/dx)`

## Example

If `y = x^3 - 5x^2 + 2x`, then:

`dy/dx = 3x^2 - 10x + 2`

`d2y/dx2 = 6x - 10`

## Parametric Second Derivative

If `x = f(t)` and `y = g(t)`, then:

`d2y/dx2 = [d/dt(dy/dx)]/(dx/dt)`

Do not simply divide `d2y/dt2` by `d2x/dt2`. That is a common error.

# Unit 5Q: Worked Examples

## Example 1: Continuity of a Piecewise Function

Let:

`f(x) = x + 1` for `x < 2`

`f(x) = 5` for `x = 2`

`f(x) = 2x - 1` for `x > 2`

At `x = 2`:

Left-hand limit = `3`.

Right-hand limit = `3`.

Limit exists and equals `3`, but `f(2) = 5`.

Therefore, `f` is discontinuous at `2`.

## Example 2: Differentiability of Modulus

For `f(x) = |x|` at `x = 0`:

Left derivative = `-1`.

Right derivative = `1`.

Since left and right derivatives differ, `f` is not differentiable at `0`.

## Example 3: Chain Rule

Differentiate `y = sqrt(1 + x^2)`.

Write `y = (1 + x^2)^(1/2)`.

`dy/dx = (1/2)(1 + x^2)^(-1/2) * 2x`

`dy/dx = x/sqrt(1 + x^2)`

## Example 4: Implicit Differentiation

If `x^3 + y^3 = 3xy`, then:

`3x^2 + 3y^2 dy/dx = 3(x dy/dx + y)`

Divide by `3`:

`x^2 + y^2 dy/dx = x dy/dx + y`

`dy/dx(y^2 - x) = y - x^2`

`dy/dx = (y - x^2)/(y^2 - x)`

# Unit 5R: Answer-Writing Framework

## To test continuity at a point

Write in this order:

1. Find left-hand limit.
2. Find right-hand limit.
3. Check whether the two limits are equal.
4. Find function value at the point.
5. Compare limit with function value.
6. Conclude continuous or discontinuous.

## To test differentiability at a point

Write in this order:

1. Find left-hand derivative.
2. Find right-hand derivative.
3. Compare them.
4. If equal, derivative exists.
5. If unequal, not differentiable.

## To differentiate an implicit equation

Write in this order:

1. Differentiate both sides with respect to `x`.
2. Whenever differentiating `y`, multiply by `dy/dx`.
3. Collect all `dy/dx` terms on one side.
4. Factor `dy/dx`.
5. Solve for `dy/dx`.

## To use logarithmic differentiation

Write in this order:

1. Take natural log on both sides.
2. Use log laws to simplify.
3. Differentiate both sides.
4. Solve for `dy/dx`.
5. Replace `y` by the original expression.

# Unit 5S: Common Mistakes and Corrections

| Mistake | Correction |
|---|---|
| Checking only function value for continuity | Continuity needs limit and value to match. |
| Ignoring left and right limits in piecewise functions | Both must be checked. |
| Assuming continuity implies differentiability | Differentiability implies continuity, not conversely. |
| Forgetting inside derivative in chain rule | Always multiply by derivative of inner function. |
| Treating `y` as constant in implicit differentiation | `y` is a function of `x`, so use `dy/dx`. |
| Forgetting negative sign in `cos^-1 x` derivative | Derivative is `-1/sqrt(1-x^2)`. |
| Differentiating `x^x` by power rule only | Use logarithmic differentiation. |
| Using wrong second derivative formula in parametric form | Use `[d/dt(dy/dx)]/(dx/dt)`. |

## Practice Set

1. Check continuity of `f(x) = x^2 - 3x + 2` at `x = 1`.
2. Find points of discontinuity of `f(x) = 1/(x^2 - 4)`.
3. Check continuity of a piecewise function at the joining point.
4. Show that `|x|` is continuous but not differentiable at `0`.
5. Differentiate `sin(x^2 + 1)`.
6. Differentiate `(2x - 3)^7`.
7. Find `dy/dx` if `x^2 + xy + y^2 = 7`.
8. Differentiate `sin^-1(2x)`.
9. Differentiate `log(x^2 + 4)`.
10. Differentiate `x^sin x` using logarithmic differentiation.
11. If `x = t^2 + 1` and `y = t^3 - t`, find `dy/dx`.
12. Find the second derivative of `y = e^(2x) + sin x`.

## Final Revision

Remember these points:

- Continuity at `a` means limit equals function value.
- Differentiability requires equal left and right derivatives.
- Differentiability implies continuity, but continuity does not imply differentiability.
- Chain rule is essential for composite functions.
- In implicit differentiation, every `y` term needs `dy/dx`.
- Logarithmic differentiation is best for variable powers.
- Parametric derivative is `(dy/dt)/(dx/dt)`.
