# Chapter 1: Relations and Functions
### NCERT Class 12 - Maths Part 1

## Chapter at a Glance

This chapter strengthens the Class 11 idea of relations and functions. It focuses on types of relations, types of functions, composition of functions, and invertible functions. These ideas are used throughout higher mathematics, especially in algebra, calculus, matrices, probability, and coordinate geometry.

The key learning skill is classification: given a relation or function, decide what type it is and justify the answer using definitions.

## Learning Outcomes

By the end of this chapter, learners should be able to:

- Define a relation on a set and represent it as a subset of a Cartesian product.
- Test whether a relation is reflexive, symmetric, transitive, and equivalence.
- Identify equivalence classes.
- Distinguish between one-one, many-one, onto, into, and bijective functions.
- Count possible one-one functions in finite cases.
- Find composition of functions.
- Decide whether a function is invertible.
- Find the inverse of a bijective function.
- Avoid common errors in domain, codomain, and range.

## Key Terms

| Term | Meaning |
|---|---|
| Relation from A to B | Any subset of `A x B`. |
| Relation on A | Any subset of `A x A`. |
| Reflexive relation | Every element is related to itself. |
| Symmetric relation | If `aRb`, then `bRa`. |
| Transitive relation | If `aRb` and `bRc`, then `aRc`. |
| Equivalence relation | A relation that is reflexive, symmetric, and transitive. |
| Equivalence class | Set of all elements related to a particular element under an equivalence relation. |
| Function | A relation in which every element of the domain has exactly one image. |
| One-one function | Distinct elements of domain have distinct images. |
| Onto function | Every element of codomain is an image of at least one domain element. |
| Bijective function | A function that is both one-one and onto. |
| Composition | Function formed by applying one function after another. |
| Invertible function | A function that has an inverse; it must be bijective. |

## Quick Formula and Test Map

| Concept | Test |
|---|---|
| Reflexive | For every `a in A`, `(a, a) in R`. |
| Symmetric | If `(a, b) in R`, then `(b, a) in R`. |
| Transitive | If `(a, b) in R` and `(b, c) in R`, then `(a, c) in R`. |
| One-one | `f(a) = f(b)` implies `a = b`. |
| Onto | For every `y in B`, there exists `x in A` such that `f(x) = y`. |
| Bijective | One-one and onto. |
| Inverse exists | Function is bijective. |
| Composition | `(g o f)(x) = g(f(x))`. |

# Unit 1A: Relations

A relation from set `A` to set `B` is any subset of the Cartesian product `A x B`. If `(a, b) in R`, we say that `a` is related to `b`.

If the relation is from `A` to itself, then it is called a relation on `A`.

## Example

Let `A = {1, 2, 3}`. A possible relation on `A` is:

`R = {(1, 1), (2, 2), (3, 3), (1, 2)}`

This is a subset of `A x A`, so it is a relation on `A`.

## Important Counting Fact

If set `A` has `m` elements and set `B` has `n` elements, then `A x B` has `mn` ordered pairs. Since a relation from `A` to `B` is any subset of `A x B`, the number of possible relations from `A` to `B` is:

`2^(mn)`

If `A` has `n` elements, then the number of relations on `A` is:

`2^(n^2)`

# Unit 1B: Reflexive Relations

A relation `R` on a set `A` is reflexive if every element of `A` is related to itself.

In symbols:

For every `a in A`, `(a, a) in R`.

## How To Check

1. List all elements of `A`.
2. Write the required self-pairs.
3. Check whether each self-pair is in `R`.

## Example

Let `A = {1, 2, 3}` and `R = {(1,1), (2,2), (3,3), (1,2)}`.

Required self-pairs are `(1,1)`, `(2,2)`, `(3,3)`. Since all are present, `R` is reflexive.

## Common Trap

Having one self-pair is not enough. A relation is reflexive only when every self-pair is present.

# Unit 1C: Symmetric Relations

A relation `R` on `A` is symmetric if whenever `(a, b) in R`, then `(b, a) in R`.

## How To Check

1. Inspect every ordered pair in `R`.
2. Reverse it.
3. Confirm that the reverse pair is also present.

## Example

Let `A = {1, 2, 3}` and `R = {(1,1), (2,2), (1,2), (2,1)}`.

The pair `(1,2)` has reverse `(2,1)`. Self-pairs reverse to themselves. Therefore this relation is symmetric.

## Non-Example

`R = {(1,1), (2,2), (1,2)}` is not symmetric because `(1,2)` is present but `(2,1)` is missing.

# Unit 1D: Transitive Relations

A relation `R` on `A` is transitive if whenever `(a, b) in R` and `(b, c) in R`, then `(a, c) in R`.

## How To Check

1. Look for chains: `a -> b` and `b -> c`.
2. Check whether the shortcut `a -> c` is also present.
3. Repeat for all possible chains.

## Example

Let `A = {1, 2, 3}` and `R = {(1,1), (2,2), (3,3), (1,2), (2,3), (1,3)}`.

Since `(1,2)` and `(2,3)` are present, transitivity requires `(1,3)`, which is present. Self-pairs do not break transitivity. This relation is transitive.

## Common Trap

Students often check only one chain. A relation is transitive only if every valid chain satisfies the rule.

# Unit 1E: Equivalence Relations

A relation is an equivalence relation if it is:

- Reflexive.
- Symmetric.
- Transitive.

Equivalence relations are important because they divide a set into non-overlapping groups called equivalence classes.

## Standard Example

On the set of integers `Z`, define `aRb` if `a - b` is divisible by `3`.

This is an equivalence relation:

- Reflexive: `a - a = 0`, and `0` is divisible by `3`.
- Symmetric: If `a - b` is divisible by `3`, then `b - a = -(a - b)` is also divisible by `3`.
- Transitive: If `a - b` and `b - c` are divisible by `3`, then `(a - b) + (b - c) = a - c` is divisible by `3`.

## Equivalence Classes

For divisibility by `3`, integers split into three classes:

- Numbers leaving remainder `0`: `{..., -6, -3, 0, 3, 6, ...}`
- Numbers leaving remainder `1`: `{..., -5, -2, 1, 4, 7, ...}`
- Numbers leaving remainder `2`: `{..., -4, -1, 2, 5, 8, ...}`

# Unit 1F: Functions

A function from `A` to `B` is a relation that assigns every element of `A` exactly one element of `B`.

If `f` is a function from `A` to `B`, we write:

`f: A -> B`

Here:

- `A` is the domain.
- `B` is the codomain.
- The actual output values form the range.

## Domain, Codomain, Range

| Word | Meaning |
|---|---|
| Domain | Set of allowed input values. |
| Codomain | Set in which output values are expected to lie. |
| Range | Set of values actually obtained. |

## Function Test

A relation is a function if:

- Every input in the domain appears.
- No input has two different images.

# Unit 1G: One-One Functions

A function `f: A -> B` is one-one if different elements of `A` have different images in `B`.

In symbols:

If `f(a) = f(b)`, then `a = b`.

## Example

`f: R -> R` given by `f(x) = 2x + 3` is one-one.

Proof:

Let `f(a) = f(b)`.

Then `2a + 3 = 2b + 3`, so `2a = 2b`, hence `a = b`.

Therefore, `f` is one-one.

## Non-Example

`f: R -> R` given by `f(x) = x^2` is not one-one because `f(1) = 1` and `f(-1) = 1`, but `1 != -1`.

# Unit 1H: Onto Functions

A function `f: A -> B` is onto if every element of codomain `B` is used as an output.

In symbols:

For every `y in B`, there exists `x in A` such that `f(x) = y`.

## Example

`f: R -> R` given by `f(x) = x + 5` is onto.

For any `y in R`, choose `x = y - 5`. Then `f(x) = y`.

## Non-Example

`f: R -> R` given by `f(x) = x^2` is not onto because negative real numbers are not obtained as outputs.

## Key Warning

Onto depends on codomain. The same formula can be onto for one codomain and not onto for another.

Example: `f(x) = x^2` from `R` to `[0, infinity)` is onto, but from `R` to `R` is not onto.

# Unit 1I: Bijective Functions

A function is bijective if it is both one-one and onto.

Bijective functions are special because they pair every element of the domain with exactly one element of the codomain and use every codomain element exactly once.

## Finite Set Test

If `A` and `B` are finite and have the same number of elements:

- One-one implies onto.
- Onto implies one-one.

But this shortcut is only safe when the sets are finite and have equal size.

# Unit 1J: Composition of Functions

If `f: A -> B` and `g: B -> C`, then the composition `g o f` is defined from `A` to `C` by:

`(g o f)(x) = g(f(x))`

Read `g o f` as "g after f". First apply `f`, then apply `g`.

## Example

Let `f(x) = 2x + 1` and `g(x) = x^2`.

Then:

`(g o f)(x) = g(2x + 1) = (2x + 1)^2`

`(f o g)(x) = f(x^2) = 2x^2 + 1`

Usually, `g o f != f o g`.

## Common Trap

Composition order matters. In `g o f`, the right-side function acts first.

# Unit 1K: Invertible Functions

A function `f: A -> B` is invertible if there exists a function `g: B -> A` such that:

`g(f(x)) = x` for all `x in A`

and

`f(g(y)) = y` for all `y in B`

The inverse of `f` is written as `f^(-1)`.

## Main Theorem

A function is invertible if and only if it is bijective.

## How To Find an Inverse

1. Write `y = f(x)`.
2. Solve for `x` in terms of `y`.
3. Replace `y` by `x`.
4. Write the inverse function.

## Example

Find the inverse of `f: R -> R` given by `f(x) = 3x - 4`.

Let `y = 3x - 4`.

Then `3x = y + 4`, so `x = (y + 4)/3`.

Therefore:

`f^(-1)(x) = (x + 4)/3`

# Unit 1L: Counting Functions

Let `A` have `m` elements and `B` have `n` elements.

## Total Functions

Each element of `A` can be mapped to any of the `n` elements of `B`.

Number of functions from `A` to `B`:

`n^m`

## One-One Functions

One-one functions are possible only if `m <= n`.

Number of one-one functions from `A` to `B`:

`nP m = n!/(n-m)!`

## Bijective Functions

If `m = n`, number of bijections from `A` to `B`:

`n!`

# Unit 1M: Worked Examples

## Example 1: Classify a Relation

Let `A = {1, 2, 3}` and `R = {(1,1), (2,2), (3,3), (1,2), (2,1)}`.

Check:

- Reflexive: yes, all self-pairs are present.
- Symmetric: yes, `(1,2)` and `(2,1)` are both present.
- Transitive: no, because `(1,2)` and `(2,1)` require `(1,1)`, which is present, and many checks pass, but `(2,1)` and `(1,2)` require `(2,2)`, present. This relation is actually transitive for the pairs present.

So `R` is an equivalence relation.

Its equivalence classes are `{1,2}` and `{3}`.

## Example 2: One-One and Onto

Let `f: R -> R` be `f(x) = x^3`.

One-one:

If `a^3 = b^3`, then `a = b`. So `f` is one-one.

Onto:

For any `y in R`, choose `x = cube root of y`. Then `f(x) = y`. So `f` is onto.

Therefore `f` is bijective.

## Example 3: Composition

Let `f(x) = x + 2` and `g(x) = 3x`.

Then:

- `(g o f)(x) = g(x + 2) = 3x + 6`
- `(f o g)(x) = f(3x) = 3x + 2`

So composition is not commutative.

# Unit 1N: Answer-Writing Framework

## To prove a relation is equivalence

Write in this order:

1. State the set and relation.
2. Prove reflexive property.
3. Prove symmetric property.
4. Prove transitive property.
5. Conclude it is an equivalence relation.
6. If asked, list equivalence classes.

## To prove a function is one-one

Write in this order:

1. Let `f(a) = f(b)`.
2. Use the formula of `f`.
3. Simplify until `a = b`.
4. Conclude that `f` is one-one.

## To prove a function is onto

Write in this order:

1. Let `y` be any element of codomain.
2. Solve `y = f(x)` for `x`.
3. Show this `x` lies in the domain.
4. Conclude that every codomain element has a preimage.

## To find inverse

Write in this order:

1. Check or state that the function is bijective.
2. Put `y = f(x)`.
3. Solve for `x`.
4. Replace `y` by `x`.
5. State `f^(-1)(x)`.

# Unit 1O: Common Mistakes and Corrections

| Mistake | Correction |
|---|---|
| Confusing codomain and range | Codomain is declared; range is actually obtained. |
| Checking only one self-pair for reflexive | Every element must be related to itself. |
| Assuming symmetric means equal pairs only | Symmetric means reverse pairs must exist. |
| Forgetting transitive chains | Every valid chain must produce the shortcut pair. |
| Saying every function has inverse | Only bijective functions have inverses. |
| Reversing composition order | In `g o f`, apply `f` first, then `g`. |
| Ignoring domain restrictions | One-one and onto depend on domain and codomain. |

## Practice Set

1. Let `A = {1,2,3}` and `R = {(1,1),(2,2),(3,3),(1,2),(2,1)}`. Test whether `R` is reflexive, symmetric, and transitive.
2. On `Z`, define `aRb` if `a - b` is divisible by `5`. Prove that `R` is an equivalence relation.
3. Check whether `f: R -> R`, `f(x) = 4x - 7`, is one-one and onto.
4. Check whether `f: R -> R`, `f(x) = x^2 + 1`, is one-one or onto.
5. Find `(g o f)(x)` and `(f o g)(x)` for `f(x) = x^2` and `g(x) = x + 1`.
6. Find the inverse of `f(x) = (2x - 3)/5`.
7. If `A` has 3 elements and `B` has 5 elements, find the number of one-one functions from `A` to `B`.
8. If `A` has 4 elements, find the number of relations on `A`.

## Final Revision

Remember these points:

- A relation on `A` is a subset of `A x A`.
- Equivalence relation means reflexive, symmetric, and transitive together.
- Function means every input has exactly one output.
- One-one is about distinct inputs; onto is about covering the codomain.
- Composition order matters.
- Inverse exists exactly when the function is bijective.
