# Chapter 1: Integrals
### NCERT Class 12 - Maths Part 2

## Chapter at a Glance

Integration is the reverse process of differentiation. If differentiation gives the rate of change of a function, integration helps recover the original function from its derivative and also helps calculate accumulated quantities such as area, displacement, work, and total change.

This chapter covers indefinite integrals, standard formulas, substitution, partial fractions, integration by parts, definite integrals, the Fundamental Theorem of Calculus, and important properties of definite integrals.

## Learning Outcomes

By the end of this chapter, learners should be able to:

- Explain integration as the inverse process of differentiation.
- Find indefinite integrals using standard formulas.
- Use the constant of integration correctly.
- Apply substitution to simplify integrals.
- Decompose rational functions using partial fractions.
- Use integration by parts.
- Evaluate definite integrals.
- Apply the Fundamental Theorem of Calculus.
- Use properties of definite integrals to simplify problems.
- Recognise when to use symmetry in definite integrals.

## Key Terms

| Term | Meaning |
|---|---|
| Integral | Antiderivative or accumulated value depending on context. |
| Indefinite integral | Family of antiderivatives, written with `+ C`. |
| Constant of integration | Arbitrary constant added in indefinite integration. |
| Definite integral | Integral with limits, giving a number. |
| Integrand | Function being integrated. |
| Variable of integration | Variable with respect to which integration is done. |
| Substitution | Method that changes variable to simplify an integral. |
| Partial fractions | Method for splitting rational functions into simpler fractions. |
| Integration by parts | Method based on product rule of differentiation. |
| Fundamental Theorem of Calculus | Connects differentiation and definite integration. |

## Quick Formula Map

| Integral | Result |
|---|---|
| `int x^n dx`, `n != -1` | `x^(n+1)/(n+1) + C` |
| `int 1/x dx` | `log |x| + C` |
| `int e^x dx` | `e^x + C` |
| `int a^x dx` | `a^x/log a + C` |
| `int sin x dx` | `-cos x + C` |
| `int cos x dx` | `sin x + C` |
| `int sec^2 x dx` | `tan x + C` |
| `int cosec^2 x dx` | `-cot x + C` |
| `int sec x tan x dx` | `sec x + C` |
| `int cosec x cot x dx` | `-cosec x + C` |
| `int 1/(1+x^2) dx` | `tan^-1 x + C` |
| `int 1/sqrt(1-x^2) dx` | `sin^-1 x + C` |

# Unit 1A: Integration as Inverse of Differentiation

If `d/dx F(x) = f(x)`, then `F(x)` is called an antiderivative of `f(x)`.

We write:

`int f(x) dx = F(x) + C`

where `C` is an arbitrary constant.

## Why `+ C` Is Necessary

The derivative of `x^2`, `x^2 + 5`, and `x^2 - 100` is the same: `2x`.

So when we integrate `2x`, we must write:

`int 2x dx = x^2 + C`

The constant represents all possible antiderivatives.

# Unit 1B: Indefinite Integrals

An indefinite integral has no limits. Its result is a family of functions.

Example:

`int (3x^2 + 4) dx = x^3 + 4x + C`

## Basic Properties

If `k` is a constant:

- `int [f(x) + g(x)] dx = int f(x) dx + int g(x) dx`
- `int [f(x) - g(x)] dx = int f(x) dx - int g(x) dx`
- `int k f(x) dx = k int f(x) dx`

## Example

`int (5x^4 - 3x^2 + 7) dx`

`= x^5 - x^3 + 7x + C`

# Unit 1C: Standard Algebraic Integrals

## Power Rule

For `n != -1`:

`int x^n dx = x^(n+1)/(n+1) + C`

## Special Case

For `n = -1`:

`int x^-1 dx = int 1/x dx = log |x| + C`

## Examples

`int sqrt(x) dx = int x^(1/2) dx = (2/3)x^(3/2) + C`

`int 1/x^3 dx = int x^-3 dx = x^-2/(-2) + C = -1/(2x^2) + C`

# Unit 1D: Standard Trigonometric Integrals

Memorise these carefully:

| Integral | Result |
|---|---|
| `int sin x dx` | `-cos x + C` |
| `int cos x dx` | `sin x + C` |
| `int sec^2 x dx` | `tan x + C` |
| `int cosec^2 x dx` | `-cot x + C` |
| `int sec x tan x dx` | `sec x + C` |
| `int cosec x cot x dx` | `-cosec x + C` |

## Common Sign Warning

`int sin x dx = -cos x + C`

`int cosec^2 x dx = -cot x + C`

`int cosec x cot x dx = -cosec x + C`

These three negative signs are often missed.

# Unit 1E: Standard Inverse Trigonometric Forms

| Integral | Result |
|---|---|
| `int 1/(1+x^2) dx` | `tan^-1 x + C` |
| `int 1/sqrt(1-x^2) dx` | `sin^-1 x + C` |
| `int 1/(a^2+x^2) dx` | `(1/a) tan^-1(x/a) + C` |
| `int 1/sqrt(a^2-x^2) dx` | `sin^-1(x/a) + C` |
| `int 1/(x^2-a^2) dx` | `(1/(2a)) log |(x-a)/(x+a)| + C` |
| `int 1/(a^2-x^2) dx` | `(1/(2a)) log |(a+x)/(a-x)| + C` |

## Pattern Recognition

Before integrating, compare the denominator with standard forms:

- `a^2 + x^2` suggests `tan^-1`.
- `a^2 - x^2` under square root suggests `sin^-1`.
- `x^2 - a^2` or `a^2 - x^2` without square root suggests logarithm.

# Unit 1F: Integration by Substitution

Substitution is useful when the integral contains a function and its derivative.

## Standard Steps

1. Choose `u =` inside expression.
2. Find `du/dx`.
3. Replace parts of the integral in terms of `u`.
4. Integrate with respect to `u`.
5. Substitute back.

## Example

Find `int 2x cos(x^2) dx`.

Let `u = x^2`.

Then `du = 2x dx`.

So:

`int 2x cos(x^2) dx = int cos u du = sin u + C`

Therefore:

`int 2x cos(x^2) dx = sin(x^2) + C`

## Common Substitution Clues

| Integral Shape | Try |
|---|---|
| `f'(x) [f(x)]^n` | `u = f(x)` |
| `f'(x)/f(x)` | `u = f(x)` |
| `f'(x) e^(f(x))` | `u = f(x)` |
| `f'(x) sin(f(x))` | `u = f(x)` |
| `x/(x^2+a)` | `u = x^2+a` |

# Unit 1G: Integrals Reducible by Algebra

Sometimes the integrand must be simplified before using standard formulas.

## Example

Find `int (x^2 + 2x + 1)/x dx`.

First divide each term by `x`:

`(x^2 + 2x + 1)/x = x + 2 + 1/x`

Then:

`int (x + 2 + 1/x) dx = x^2/2 + 2x + log |x| + C`

## Key Lesson

Do not force a formula before simplifying algebraically.

# Unit 1H: Partial Fractions

Partial fractions help integrate rational functions where the denominator can be factorised.

## When To Use

Use partial fractions when:

- The integrand is a rational function.
- Denominator is factorisable.
- Degree of numerator is less than degree of denominator after division.

## Basic Forms

For distinct linear factors:

`1/[(x-a)(x-b)] = A/(x-a) + B/(x-b)`

For repeated linear factors:

`1/(x-a)^2 = A/(x-a) + B/(x-a)^2`

For irreducible quadratic factor:

`(px+q)/(ax^2+bx+c)`

## Example

Integrate:

`int 1/[(x-1)(x+2)] dx`

Write:

`1/[(x-1)(x+2)] = A/(x-1) + B/(x+2)`

Then:

`1 = A(x+2) + B(x-1)`

Put `x = 1`: `1 = 3A`, so `A = 1/3`.

Put `x = -2`: `1 = -3B`, so `B = -1/3`.

Therefore:

`int 1/[(x-1)(x+2)] dx = (1/3)log|x-1| - (1/3)log|x+2| + C`

# Unit 1I: Integration by Parts

Integration by parts is based on the product rule.

Formula:

`int u v dx = u int v dx - int [u' int v dx] dx`

A more common form is:

`int u dv = uv - int v du`

## Choosing First Function

A useful order is ILATE:

1. Inverse trigonometric
2. Logarithmic
3. Algebraic
4. Trigonometric
5. Exponential

Choose `u` from the function that appears earlier in this list.

## Example

Find `int x e^x dx`.

Choose `u = x`, `dv = e^x dx`.

Then `du = dx`, `v = e^x`.

Using integration by parts:

`int x e^x dx = x e^x - int e^x dx`

`= x e^x - e^x + C`

`= e^x(x - 1) + C`

# Unit 1J: Repeated Integration by Parts

Some integrals require integration by parts more than once.

## Example

Find `int x^2 e^x dx`.

First:

`int x^2 e^x dx = x^2 e^x - int 2x e^x dx`

Now integrate `int 2x e^x dx` by parts:

`int 2x e^x dx = 2[x e^x - e^x]`

Therefore:

`int x^2 e^x dx = x^2 e^x - 2x e^x + 2e^x + C`

`= e^x(x^2 - 2x + 2) + C`

# Unit 1K: Special Integration by Parts Cycles

Some integrals return to themselves.

Example:

`I = int e^x sin x dx`

Using integration by parts twice, the same integral `I` appears again. Then solve algebraically for `I`.

Standard result:

`int e^x sin x dx = (e^x/2)(sin x - cos x) + C`

and

`int e^x cos x dx = (e^x/2)(sin x + cos x) + C`

# Unit 1L: Definite Integrals

A definite integral has limits:

`int_a^b f(x) dx`

It gives a number, not a family of functions. Therefore, no `+ C` is written in the final answer.

If `F'(x) = f(x)`, then:

`int_a^b f(x) dx = F(b) - F(a)`

## Example

Evaluate `int_0^2 x^2 dx`.

Antiderivative: `x^3/3`.

So:

`int_0^2 x^2 dx = [x^3/3]_0^2 = 8/3 - 0 = 8/3`

# Unit 1M: Fundamental Theorem of Calculus

The Fundamental Theorem of Calculus connects differentiation and definite integration.

## Part 1

If `F(x) = int_a^x f(t) dt`, then:

`F'(x) = f(x)`

provided `f` is continuous.

## Part 2

If `F'(x) = f(x)`, then:

`int_a^b f(x) dx = F(b) - F(a)`

## Meaning

Differentiation and integration are inverse processes, and definite integrals can be evaluated using antiderivatives.

# Unit 1N: Properties of Definite Integrals

## Property 1

`int_a^a f(x) dx = 0`

## Property 2

`int_a^b f(x) dx = - int_b^a f(x) dx`

## Property 3

`int_a^b f(x) dx = int_a^c f(x) dx + int_c^b f(x) dx`

## Property 4

`int_a^b f(x) dx = int_a^b f(a+b-x) dx`

## Property 5

`int_0^a f(x) dx = int_0^a f(a-x) dx`

## Property 6: Even and Odd Functions

If `f` is even, then:

`int_-a^a f(x) dx = 2 int_0^a f(x) dx`

If `f` is odd, then:

`int_-a^a f(x) dx = 0`

# Unit 1O: Definite Integral by Substitution

When using substitution in definite integrals, either:

- Change the limits according to the new variable, or
- Substitute back before applying original limits.

## Example

Evaluate `int_0^1 2x(1+x^2)^3 dx`.

Let `u = 1 + x^2`, so `du = 2x dx`.

Change limits:

When `x = 0`, `u = 1`.

When `x = 1`, `u = 2`.

So:

`int_0^1 2x(1+x^2)^3 dx = int_1^2 u^3 du`

`= [u^4/4]_1^2 = (16 - 1)/4 = 15/4`

# Unit 1P: Symmetry in Definite Integrals

Symmetry saves time.

## Even Function

If `f(-x) = f(x)`, then `f` is even.

Example: `x^2`, `cos x`.

`int_-a^a f(x) dx = 2 int_0^a f(x) dx`

## Odd Function

If `f(-x) = -f(x)`, then `f` is odd.

Example: `x^3`, `sin x`.

`int_-a^a f(x) dx = 0`

## Example

`int_-2^2 x^3 dx = 0` because `x^3` is odd.

`int_-2^2 x^2 dx = 2 int_0^2 x^2 dx = 2(8/3) = 16/3`

# Unit 1Q: Worked Examples

## Example 1: Basic Integral

Find `int (4x^3 - 6) dx`.

`int 4x^3 dx = x^4`

`int -6 dx = -6x`

So:

`int (4x^3 - 6) dx = x^4 - 6x + C`

## Example 2: Substitution

Find `int x/(x^2 + 5) dx`.

Let `u = x^2 + 5`, so `du = 2x dx`.

`int x/(x^2 + 5) dx = (1/2) int du/u`

`= (1/2) log|u| + C`

`= (1/2) log(x^2 + 5) + C`

## Example 3: By Parts

Find `int x log x dx`.

Choose `u = log x`, `dv = x dx`.

Then `du = 1/x dx`, `v = x^2/2`.

So:

`int x log x dx = (x^2/2)log x - int (x^2/2)(1/x) dx`

`= (x^2/2)log x - (1/2)int x dx`

`= (x^2/2)log x - x^2/4 + C`

## Example 4: Definite Integral

Evaluate `int_0^pi sin x dx`.

Antiderivative is `-cos x`.

`int_0^pi sin x dx = [-cos x]_0^pi`

`= -cos pi - (-cos 0)`

`= 1 + 1 = 2`

# Unit 1R: Answer-Writing Framework

## To solve an indefinite integral

Write in this order:

1. Simplify the integrand if possible.
2. Match with a standard formula.
3. If not direct, choose substitution, partial fractions, or parts.
4. Integrate step by step.
5. Add `+ C`.

## To use substitution

Write in this order:

1. Choose `u`.
2. Compute `du`.
3. Replace the integral in terms of `u`.
4. Integrate.
5. Substitute back if indefinite.
6. For definite integrals, change limits or return to original variable.

## To use integration by parts

Write in this order:

1. Choose `u` and `dv`.
2. Find `du` and `v`.
3. Use `int u dv = uv - int v du`.
4. Simplify the remaining integral.
5. Add `+ C` if indefinite.

## To evaluate a definite integral

Write in this order:

1. Find an antiderivative.
2. Substitute upper limit.
3. Substitute lower limit.
4. Compute upper value minus lower value.
5. Do not add `+ C`.

# Unit 1S: Common Mistakes and Corrections

| Mistake | Correction |
|---|---|
| Forgetting `+ C` in indefinite integrals | Always add `+ C` for indefinite integrals. |
| Adding `+ C` in definite integrals | Definite integrals give a number, no `+ C`. |
| Using power rule for `int 1/x dx` | Use `log |x| + C`. |
| Missing negative signs in trigonometric integrals | Memorise signs carefully. |
| Choosing poor substitution | Look for inner function and its derivative. |
| Using integration by parts when substitution is easier | Try simpler methods first. |
| Forgetting to change limits after substitution | Change limits or substitute back. |
| Ignoring odd/even symmetry | Symmetry can make definite integrals much shorter. |

## Practice Set

1. Find `int (3x^2 - 4x + 5) dx`.
2. Find `int 1/(x+2) dx`.
3. Find `int 2x e^(x^2) dx`.
4. Find `int x/(x^2 + 9) dx`.
5. Find `int x cos x dx`.
6. Find `int log x dx`.
7. Find `int 1/[(x-1)(x+3)] dx`.
8. Evaluate `int_0^1 (x^2 + 1) dx`.
9. Evaluate `int_-2^2 x^5 dx`.
10. Evaluate `int_-1^1 (x^2 + 1) dx`.
11. Use `int_a^b f(x) dx = int_a^b f(a+b-x) dx` to simplify a suitable integral.
12. State when `+ C` is required and when it is not.

## Final Revision

Remember these points:

- Integration reverses differentiation.
- Indefinite integrals need `+ C`.
- Definite integrals give numbers.
- Substitution is best when a function and its derivative appear together.
- Partial fractions help with rational functions.
- Integration by parts comes from product rule.
- Definite integral properties often reduce work.
- Even and odd symmetry are powerful in limits `[-a, a]`.
