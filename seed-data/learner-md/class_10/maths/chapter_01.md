# Chapter 1: Real Numbers
### NCERT Class 10 - Maths

---

## Chapter at a Glance

| Detail | Learner-Friendly Information |
|---|---|
| **Class** | 10 |
| **Subject** | Maths |
| **Chapter** | 1 |
| **Core Theme** | Prime factorisation, Fundamental Theorem of Arithmetic, HCF, LCM, and proofs of irrationality. |
| **Main Skills** | Factorising numbers into primes, finding HCF and LCM, using HCF-LCM relation, proving numbers irrational by contradiction. |
| **Proof Focus** | Understanding uniqueness of prime factorisation and applying it to irrational numbers such as `sqrt(2)`, `sqrt(3)`, and `sqrt(5)`. |

---

## Section Structure

| Unit | Topic | Main Learning Focus |
|---|---|---|
| **1A** | Real Numbers Refresher | Rational and irrational numbers. |
| **1B** | Prime Factorisation | Expressing natural numbers as products of primes. |
| **1C** | Fundamental Theorem of Arithmetic | Existence and uniqueness of prime factorisation. |
| **1D** | HCF and LCM | Prime factorisation method and product relation for two numbers. |
| **1E** | Applications of Prime Factorisation | Ending digits, composite-number reasoning, meeting-time problems. |
| **1F** | Irrational Numbers | Proving irrationality using contradiction. |
| **1G** | Solved Exercises | Complete solutions to Exercise 1.1 and 1.2. |

---

## Learning Outcomes

By the end of this chapter, you should be able to:

| Outcome | You Should Be Able To... |
|---|---|
| **Factorise numbers** | Write any composite number as a product of prime factors. |
| **Use exponent notation** | Write repeated prime factors as powers. |
| **State the Fundamental Theorem** | Explain existence and uniqueness of prime factorisation. |
| **Find HCF** | Use the smallest powers of common prime factors. |
| **Find LCM** | Use the greatest powers of all prime factors involved. |
| **Verify HCF-LCM relation** | Check `HCF(a,b) x LCM(a,b) = a x b` for two positive integers. |
| **Recognise composite forms** | Prove expressions composite by taking a common factor. |
| **Solve meeting problems** | Use LCM for repeated simultaneous events. |
| **Prove irrationality** | Use contradiction to prove irrationality of square roots and related expressions. |

---

## Key Terms

| Term | Meaning |
|---|---|
| **Natural number** | Counting number: `1, 2, 3, ...`. |
| **Prime number** | Number greater than 1 with exactly two factors: 1 and itself. |
| **Composite number** | Number greater than 1 with more than two factors. |
| **Prime factorisation** | Writing a number as a product of prime numbers. |
| **Unique factorisation** | A number has only one prime factorisation, except for order of factors. |
| **HCF** | Highest Common Factor; greatest number that divides all given numbers. |
| **LCM** | Least Common Multiple; smallest positive number divisible by all given numbers. |
| **Coprime numbers** | Numbers whose HCF is 1. |
| **Rational number** | Number expressible as `p/q`, where `p` and `q` are integers and `q != 0`. |
| **Irrational number** | Number that cannot be expressed as `p/q`, where `p` and `q` are integers and `q != 0`. |
| **Proof by contradiction** | Proof method where we assume the opposite of what we want, reach impossibility, and reject the assumption. |

---

## Formula and Result Bank

## Fundamental Theorem of Arithmetic

Every composite number can be expressed as a product of primes, and this factorisation is unique apart from the order of prime factors.

## HCF and LCM for Two Numbers

For two positive integers `a` and `b`:

$$
\text{HCF}(a,b) \times \text{LCM}(a,b) = a \times b
$$

Therefore:

$$
\text{LCM}(a,b) = \frac{a \times b}{\text{HCF}(a,b)}
$$

## Prime Factorisation Rule for HCF

HCF is the product of the smallest powers of common prime factors.

## Prime Factorisation Rule for LCM

LCM is the product of the greatest powers of all prime factors involved.

## Important Divisibility Result

If `p` is a prime and `p` divides `a^2`, then `p` divides `a`.

This result is used in irrationality proofs.

---

# Unit 1A: Real Numbers Refresher

## Real Numbers

Real numbers include rational and irrational numbers.

| Number Type | Meaning | Examples |
|---|---|---|
| Rational | Can be written as `p/q`, where `p`, `q` are integers and `q != 0`. | `2`, `-3/5`, `0.75`, `1.333...` |
| Irrational | Cannot be written as `p/q`. | `sqrt(2)`, `sqrt(3)`, `sqrt(5)`, `pi` |

## Why This Chapter Matters

This chapter studies positive integers deeply using prime factorisation.

The same idea helps us:

1. Find HCF and LCM efficiently.
2. Prove that some square roots are irrational.
3. Decide whether some powers can end in particular digits.
4. Understand why prime factorisation is a foundation of number theory.

## Euclid's Division Idea

The raw chapter introduction mentions Euclid's division algorithm.

The basic idea is:

When a positive integer `a` is divided by a positive integer `b`, the result can be written in the form:

$$
a = bq + r
$$

where:

| Symbol | Meaning |
|---|---|
| `a` | dividend |
| `b` | divisor |
| `q` | quotient |
| `r` | remainder |

The remainder always satisfies:

$$
0 \le r < b
$$

This is the formal version of ordinary long division.

---

# Unit 1B: Prime Factorisation

## Prime Numbers and Composite Numbers

| Number | Type | Reason |
|---|---|---|
| `2` | Prime | Factors are `1` and `2`. |
| `3` | Prime | Factors are `1` and `3`. |
| `4` | Composite | Factors include `1, 2, 4`. |
| `11` | Prime | Factors are `1` and `11`. |
| `15` | Composite | Factors include `1, 3, 5, 15`. |

The number `1` is neither prime nor composite.

## Meaning of Prime Factorisation

Prime factorisation means writing a composite number as a product of prime numbers.

Examples:

$$
12 = 2 \times 2 \times 3
$$

$$
12 = 2^2 \times 3
$$

$$
60 = 2 \times 2 \times 3 \times 5
$$

$$
60 = 2^2 \times 3 \times 5
$$

## Factor Tree Method

To factorise a number:

1. Split it into any two factors.
2. Keep splitting composite factors.
3. Stop when all factors are prime.
4. Write prime factors in ascending order.
5. Combine repeated factors using powers.

## Example: Factorising 32760

The raw chapter gives:

$$
32760 = 2 \times 2 \times 2 \times 3 \times 3 \times 5 \times 7 \times 13
$$

Therefore:

$$
32760 = 2^3 \times 3^2 \times 5 \times 7 \times 13
$$

## Important Learning Point

The factor tree may be drawn in different ways, but the final prime factors are always the same except for their order.

That fact is exactly what the Fundamental Theorem of Arithmetic states.

---

# Unit 1C: Fundamental Theorem of Arithmetic

## Statement

Every composite number can be expressed as a product of primes, and this factorisation is unique apart from the order in which the prime factors occur.

## Meaning of the Theorem

The theorem has two parts:

| Part | Meaning |
|---|---|
| Existence | Every composite number can be factorised into primes. |
| Uniqueness | There is only one prime factorisation, except for order. |

## Example of Uniqueness

The following are the same factorisation:

$$
2 \times 3 \times 5 \times 7
$$

$$
3 \times 5 \times 7 \times 2
$$

Only the order changed.

The set of prime factors is the same.

## Standard Form

When writing prime factorisation, write prime factors in ascending order.

Example:

$$
420 = 2^2 \times 3 \times 5 \times 7
$$

This standard order makes comparison easier while finding HCF and LCM.

## Why the Theorem Is Powerful

It allows us to reason about divisibility precisely.

For example, if a number's prime factorisation has no factor `5`, then the number is not divisible by `5`.

This helps decide whether powers such as `4^n` or `6^n` can end in digit `0`.

---

# Unit 1D: HCF and LCM by Prime Factorisation

## HCF by Prime Factorisation

Steps:

1. Prime-factorise each number.
2. Identify common prime factors.
3. Take the smallest power of each common prime factor.
4. Multiply those powers.

## LCM by Prime Factorisation

Steps:

1. Prime-factorise each number.
2. List all prime factors involved.
3. Take the greatest power of each prime factor.
4. Multiply those powers.

## Worked Example: HCF and LCM of 6 and 20

Prime factorisations:

$$
6 = 2 \times 3
$$

$$
20 = 2^2 \times 5
$$

HCF uses the common factor with smallest power:

$$
\text{HCF}(6,20) = 2
$$

LCM uses the greatest powers of all factors:

$$
\text{LCM}(6,20) = 2^2 \times 3 \times 5
$$

$$
\text{LCM}(6,20) = 60
$$

Verification:

$$
\text{HCF} \times \text{LCM} = 2 \times 60 = 120
$$

$$
6 \times 20 = 120
$$

So the relation is verified.

## Worked Example: HCF and LCM of 96 and 404

Prime factorisations:

$$
96 = 2^5 \times 3
$$

$$
404 = 2^2 \times 101
$$

Common prime factor is `2`, and the smallest power is `2^2`.

$$
\text{HCF}(96,404) = 2^2 = 4
$$

Using product relation:

$$
\text{LCM}(96,404) = \frac{96 \times 404}{4}
$$

$$
\text{LCM}(96,404) = 9696
$$

## Worked Example: HCF and LCM of 6, 72, and 120

Prime factorisations:

$$
6 = 2 \times 3
$$

$$
72 = 2^3 \times 3^2
$$

$$
120 = 2^3 \times 3 \times 5
$$

Common prime factors: `2` and `3`.

Smallest powers:

$$
2^1 \quad \text{and} \quad 3^1
$$

So:

$$
\text{HCF}(6,72,120) = 2 \times 3 = 6
$$

Greatest powers involved:

$$
2^3, \quad 3^2, \quad 5^1
$$

So:

$$
\text{LCM}(6,72,120) = 2^3 \times 3^2 \times 5
$$

$$
\text{LCM}(6,72,120) = 360
$$

## Warning for Three Numbers

For two positive integers:

$$
\text{HCF}(a,b) \times \text{LCM}(a,b) = a \times b
$$

But for three positive integers, generally:

$$
\text{HCF}(a,b,c) \times \text{LCM}(a,b,c) \ne a \times b \times c
$$

Do not apply the two-number product relation blindly to three numbers.

---

# Unit 1E: Applications of Prime Factorisation

## Ending with Digit Zero

A number ending with `0` is divisible by `10`.

Since:

$$
10 = 2 \times 5
$$

a number ending with `0` must have both prime factors `2` and `5`.

## Example: Can `4^n` End with Zero?

Since:

$$
4 = 2^2
$$

we have:

$$
4^n = (2^2)^n = 2^{2n}
$$

The prime factorisation contains only `2`.

It does not contain `5`.

Therefore `4^n` cannot end with digit `0` for any natural number `n`.

## Example: Can `6^n` End with Zero?

Since:

$$
6 = 2 \times 3
$$

we have:

$$
6^n = 2^n \times 3^n
$$

The factorisation contains `2` and `3`, but no `5`.

Therefore `6^n` cannot end with digit `0` for any natural number `n`.

## Proving an Expression Is Composite

To prove a number is composite, show that it has a factor other than `1` and itself.

Often this is done by taking a common factor.

Example:

$$
7 \times 11 \times 13 + 13 = 13(7 \times 11 + 1)
$$

Since it is a product of two integers greater than 1, it is composite.

## Meeting Again Problems

When two or more repeated events start together and we need to know when they occur together again, use LCM.

Example:

If one person takes `18` minutes per round and another takes `12` minutes per round, they meet at the starting point again after:

$$
\text{LCM}(18,12)
$$

$$
18 = 2 \times 3^2
$$

$$
12 = 2^2 \times 3
$$

$$
\text{LCM} = 2^2 \times 3^2 = 36
$$

They meet again after `36` minutes.

---

# Unit 1F: Revisiting Irrational Numbers

## Rational and Irrational

A number is rational if it can be written as:

$$
\frac{p}{q}
$$

where `p` and `q` are integers and `q != 0`.

A number that cannot be written in this form is irrational.

Examples of irrational numbers:

1. `sqrt(2)`.
2. `sqrt(3)`.
3. `sqrt(5)`.
4. `pi`.
5. `0.10110111011110...`

## Key Theorem Used in Proofs

If `p` is prime and `p` divides `a^2`, then `p` divides `a`.

Examples:

| Statement | Conclusion |
|---|---|
| If `2` divides `a^2` | `2` divides `a`. |
| If `3` divides `a^2` | `3` divides `a`. |
| If `5` divides `a^2` | `5` divides `a`. |

## Proof by Contradiction

To prove a number is irrational:

1. Assume it is rational.
2. Write it in lowest form as `a/b`, where `a` and `b` are coprime.
3. Use algebra to show a prime divides both `a` and `b`.
4. This contradicts that `a` and `b` are coprime.
5. Therefore the original assumption was false.

## Proof That `sqrt(2)` Is Irrational

Assume, for contradiction, that `sqrt(2)` is rational.

Then:

$$
\sqrt{2} = \frac{a}{b}
$$

where `a` and `b` are coprime integers and `b != 0`.

Squaring:

$$
2 = \frac{a^2}{b^2}
$$

So:

$$
a^2 = 2b^2
$$

Therefore `2` divides `a^2`.

Since `2` is prime, `2` divides `a`.

So let:

$$
a = 2c
$$

Substitute:

$$
(2c)^2 = 2b^2
$$

$$
4c^2 = 2b^2
$$

$$
b^2 = 2c^2
$$

Therefore `2` divides `b^2`, so `2` divides `b`.

Now both `a` and `b` are divisible by `2`, which contradicts that they are coprime.

Hence:

$$
\sqrt{2}
$$

is irrational.

## Proof That `sqrt(3)` Is Irrational

Assume:

$$
\sqrt{3} = \frac{a}{b}
$$

where `a` and `b` are coprime and `b != 0`.

Squaring:

$$
3 = \frac{a^2}{b^2}
$$

So:

$$
a^2 = 3b^2
$$

Therefore `3` divides `a^2`.

Since `3` is prime, `3` divides `a`.

Let:

$$
a = 3c
$$

Substitute:

$$
9c^2 = 3b^2
$$

$$
b^2 = 3c^2
$$

Therefore `3` divides `b^2`, so `3` divides `b`.

Thus `a` and `b` have common factor `3`, contradicting that they are coprime.

Therefore `sqrt(3)` is irrational.

## Irrationality of Rational Plus Irrational

If `r` is rational and `x` is irrational, then:

$$
r + x
$$

is irrational.

Reason:

If `r + x` were rational, then subtracting rational `r` would make `x` rational, which is impossible.

## Irrationality of Non-Zero Rational Times Irrational

If `r` is a non-zero rational number and `x` is irrational, then:

$$
rx
$$

is irrational.

Reason:

If `rx` were rational, dividing by non-zero rational `r` would make `x` rational, which is impossible.

---

# Unit 1G: Solved Exercise 1.1

## Exercise 1.1, Question 1: Express Each Number as Product of Prime Factors

### Part I: 140

$$
140 = 14 \times 10
$$

$$
140 = (2 \times 7)(2 \times 5)
$$

$$
140 = 2^2 \times 5 \times 7
$$

**Answer:** `2^2 x 5 x 7`.

### Part II: 156

$$
156 = 2 \times 78
$$

$$
156 = 2 \times 2 \times 39
$$

$$
156 = 2^2 \times 3 \times 13
$$

**Answer:** `2^2 x 3 x 13`.

### Part III: 3825

$$
3825 = 3 \times 1275
$$

$$
1275 = 3 \times 425
$$

$$
425 = 5 \times 85
$$

$$
85 = 5 \times 17
$$

Therefore:

$$
3825 = 3^2 \times 5^2 \times 17
$$

**Answer:** `3^2 x 5^2 x 17`.

### Part IV: 5005

$$
5005 = 5 \times 1001
$$

$$
1001 = 7 \times 143
$$

$$
143 = 11 \times 13
$$

Therefore:

$$
5005 = 5 \times 7 \times 11 \times 13
$$

**Answer:** `5 x 7 x 11 x 13`.

### Part V: 7429

Check divisibility:

$$
7429 = 17 \times 437
$$

and:

$$
437 = 19 \times 23
$$

Therefore:

$$
7429 = 17 \times 19 \times 23
$$

**Answer:** `17 x 19 x 23`.

## Exercise 1.1, Question 2: Find LCM and HCF and Verify Product Relation

### Part I: 26 and 91

Prime factorisations:

$$
26 = 2 \times 13
$$

$$
91 = 7 \times 13
$$

HCF:

$$
\text{HCF} = 13
$$

LCM:

$$
\text{LCM} = 2 \times 7 \times 13
$$

$$
\text{LCM} = 182
$$

Verification:

$$
\text{HCF} \times \text{LCM} = 13 \times 182 = 2366
$$

$$
26 \times 91 = 2366
$$

Verified.

### Part II: 510 and 92

Prime factorisations:

$$
510 = 2 \times 3 \times 5 \times 17
$$

$$
92 = 2^2 \times 23
$$

HCF:

$$
\text{HCF} = 2
$$

LCM:

$$
\text{LCM} = 2^2 \times 3 \times 5 \times 17 \times 23
$$

$$
\text{LCM} = 23460
$$

Verification:

$$
\text{HCF} \times \text{LCM} = 2 \times 23460 = 46920
$$

$$
510 \times 92 = 46920
$$

Verified.

### Part III: 336 and 54

Prime factorisations:

$$
336 = 2^4 \times 3 \times 7
$$

$$
54 = 2 \times 3^3
$$

HCF:

$$
\text{HCF} = 2 \times 3 = 6
$$

LCM:

$$
\text{LCM} = 2^4 \times 3^3 \times 7
$$

$$
\text{LCM} = 3024
$$

Verification:

$$
\text{HCF} \times \text{LCM} = 6 \times 3024 = 18144
$$

$$
336 \times 54 = 18144
$$

Verified.

## Exercise 1.1, Question 3: HCF and LCM of Three Integers

### Part I: 12, 15, and 21

Prime factorisations:

$$
12 = 2^2 \times 3
$$

$$
15 = 3 \times 5
$$

$$
21 = 3 \times 7
$$

HCF:

$$
\text{HCF} = 3
$$

LCM:

$$
\text{LCM} = 2^2 \times 3 \times 5 \times 7
$$

$$
\text{LCM} = 420
$$

### Part II: 17, 23, and 29

All three numbers are prime and distinct.

HCF:

$$
\text{HCF} = 1
$$

LCM:

$$
\text{LCM} = 17 \times 23 \times 29
$$

$$
\text{LCM} = 11339
$$

### Part III: 8, 9, and 25

Prime factorisations:

$$
8 = 2^3
$$

$$
9 = 3^2
$$

$$
25 = 5^2
$$

There is no common prime factor.

HCF:

$$
\text{HCF} = 1
$$

LCM:

$$
\text{LCM} = 2^3 \times 3^2 \times 5^2
$$

$$
\text{LCM} = 1800
$$

## Exercise 1.1, Question 4: Given HCF(306,657) = 9, Find LCM

For two numbers:

$$
\text{HCF} \times \text{LCM} = \text{Product of numbers}
$$

So:

$$
9 \times \text{LCM} = 306 \times 657
$$

Therefore:

$$
\text{LCM} = \frac{306 \times 657}{9}
$$

$$
\text{LCM} = 34 \times 657
$$

$$
\text{LCM} = 22338
$$

**Answer:** `22338`.

## Exercise 1.1, Question 5: Can `6^n` End with Digit 0?

A number ending in `0` must be divisible by `10`.

Since:

$$
10 = 2 \times 5
$$

the number must contain prime factors `2` and `5`.

But:

$$
6^n = (2 \times 3)^n
$$

$$
6^n = 2^n \times 3^n
$$

There is no factor `5`.

Therefore `6^n` cannot end with digit `0` for any natural number `n`.

## Exercise 1.1, Question 6: Explain Why the Given Numbers Are Composite

### Part I

$$
7 \times 11 \times 13 + 13
$$

Take `13` common:

$$
7 \times 11 \times 13 + 13 = 13(7 \times 11 + 1)
$$

$$
= 13(77 + 1)
$$

$$
= 13 \times 78
$$

This is a product of two numbers greater than 1.

Therefore it is composite.

### Part II

$$
7 \times 6 \times 5 \times 4 \times 3 \times 2 \times 1 + 5
$$

Take `5` common:

$$
7 \times 6 \times 5 \times 4 \times 3 \times 2 \times 1 + 5
$$

$$
= 5(7 \times 6 \times 4 \times 3 \times 2 \times 1 + 1)
$$

$$
= 5(1008 + 1)
$$

$$
= 5 \times 1009
$$

This is a product of two numbers greater than 1.

Therefore it is composite.

## Exercise 1.1, Question 7: Sonia and Ravi Meet Again

Sonia takes `18` minutes for one round.

Ravi takes `12` minutes for one round.

They meet again at the starting point after the LCM of `18` and `12`.

Prime factorisations:

$$
18 = 2 \times 3^2
$$

$$
12 = 2^2 \times 3
$$

LCM:

$$
\text{LCM} = 2^2 \times 3^2
$$

$$
\text{LCM} = 36
$$

**Answer:** They will meet again at the starting point after `36 minutes`.

---

# Unit 1H: Solved Exercise 1.2

## Exercise 1.2, Question 1: Prove That `sqrt(5)` Is Irrational

Assume, for contradiction, that `sqrt(5)` is rational.

Then:

$$
\sqrt{5} = \frac{a}{b}
$$

where `a` and `b` are coprime integers and `b != 0`.

Squaring:

$$
5 = \frac{a^2}{b^2}
$$

So:

$$
a^2 = 5b^2
$$

Therefore `5` divides `a^2`.

Since `5` is prime, `5` divides `a`.

Let:

$$
a = 5c
$$

Substitute:

$$
(5c)^2 = 5b^2
$$

$$
25c^2 = 5b^2
$$

$$
b^2 = 5c^2
$$

Therefore `5` divides `b^2`, so `5` divides `b`.

Thus both `a` and `b` are divisible by `5`, contradicting that they are coprime.

Therefore:

$$
\sqrt{5}
$$

is irrational.

## Exercise 1.2, Question 2: Prove That `3 + 2sqrt(5)` Is Irrational

Assume, for contradiction, that:

$$
3 + 2\sqrt{5}
$$

is rational.

Let:

$$
3 + 2\sqrt{5} = r
$$

where `r` is rational.

Then:

$$
2\sqrt{5} = r - 3
$$

Since `r` and `3` are rational, `r - 3` is rational.

So:

$$
\sqrt{5} = \frac{r - 3}{2}
$$

This would make `sqrt(5)` rational, which contradicts the fact that `sqrt(5)` is irrational.

Therefore:

$$
3 + 2\sqrt{5}
$$

is irrational.

## Exercise 1.2, Question 3: Prove the Following Are Irrational

### Part I: `1/sqrt(2)`

Assume, for contradiction, that:

$$
\frac{1}{\sqrt{2}}
$$

is rational.

Then its reciprocal would also be rational.

So:

$$
\sqrt{2}
$$

would be rational.

But `sqrt(2)` is irrational.

This is a contradiction.

Therefore:

$$
\frac{1}{\sqrt{2}}
$$

is irrational.

### Part II: `7sqrt(5)`

Assume, for contradiction, that:

$$
7\sqrt{5}
$$

is rational.

Divide by non-zero rational number `7`:

$$
\sqrt{5} = \frac{7\sqrt{5}}{7}
$$

This would make `sqrt(5)` rational.

But `sqrt(5)` is irrational.

Therefore:

$$
7\sqrt{5}
$$

is irrational.

### Part III: `6 + sqrt(2)`

Assume, for contradiction, that:

$$
6 + \sqrt{2}
$$

is rational.

Let:

$$
6 + \sqrt{2} = r
$$

where `r` is rational.

Then:

$$
\sqrt{2} = r - 6
$$

Since `r` and `6` are rational, `r - 6` is rational.

This would make `sqrt(2)` rational, which is false.

Therefore:

$$
6 + \sqrt{2}
$$

is irrational.

---

# Unit 1I: Common Mistakes and Corrections

| Mistake | Correct Understanding |
|---|---|
| Treating `1` as prime. | `1` is neither prime nor composite. |
| Forgetting repeated prime factors. | Use powers such as `2^3` and `3^2`. |
| Using largest common powers for HCF. | HCF uses smallest powers of common factors. |
| Using smallest powers for LCM. | LCM uses greatest powers of all involved factors. |
| Applying `HCF x LCM = product` to three numbers. | That relation is guaranteed for two positive integers, not generally for three. |
| Saying a number ending in `0` only needs factor `2`. | It needs both `2` and `5`, because `10 = 2 x 5`. |
| Assuming `sqrt(2) = a/b` without lowest form. | Use coprime `a` and `b` to create contradiction. |
| Forgetting that rational minus rational is rational. | This fact is used in proofs like `3 + 2sqrt(5)`. |
| Saying non-zero rational times irrational may be rational. | It is irrational if the rational factor is non-zero. |

---

# Unit 1J: Quick Revision Tables

## HCF and LCM Strategy

| Task | Method |
|---|---|
| Prime factorise | Break number into prime factors. |
| HCF | Take smallest powers of common prime factors. |
| LCM | Take greatest powers of all prime factors present. |
| Verify for two numbers | Check `HCF x LCM = product`. |

## Ending Digit Zero Test

| Requirement | Explanation |
|---|---|
| Number ends in `0` | It is divisible by `10`. |
| Divisible by `10` | Prime factorisation contains `2 x 5`. |
| No factor `5` | Cannot end in `0`. |

## Irrational Proof Pattern

| Step | Action |
|---|---|
| 1 | Assume the number is rational. |
| 2 | Write it as `a/b` in lowest form. |
| 3 | Square if needed. |
| 4 | Use prime divisibility result. |
| 5 | Show the same prime divides both `a` and `b`. |
| 6 | Contradict coprime condition. |
| 7 | Conclude the number is irrational. |

## Results to Remember

| Result | Meaning |
|---|---|
| Fundamental Theorem of Arithmetic | Prime factorisation is unique apart from order. |
| If prime `p` divides `a^2`, then `p` divides `a`. | Used in irrationality proofs. |
| HCF-LCM relation | Works for two positive integers. |
| Rational plus irrational | Irrational. |
| Non-zero rational times irrational | Irrational. |

---

# Final Study Strategy

## What to Memorise

Memorise:

1. Statement of Fundamental Theorem of Arithmetic.
2. HCF rule using prime powers.
3. LCM rule using prime powers.
4. Product relation for two numbers.
5. Divisibility result: if prime `p` divides `a^2`, then `p` divides `a`.
6. Proof structure for `sqrt(2)`, `sqrt(3)`, and `sqrt(5)` irrational.

## What to Practise

Practise:

| Skill | Practice Method |
|---|---|
| Prime factorisation | Factorise numbers using division or factor trees. |
| HCF and LCM | Solve pairs and triples separately. |
| Verification | Check product relation only for pairs. |
| Composite proofs | Pull out a common factor. |
| LCM word problems | Look for repeated events meeting again. |
| Irrational proofs | Write clean contradiction proofs with coprime assumption. |

## One-Page Chapter Summary

Every composite number can be written uniquely as a product of prime factors, except for the order of those factors. This is the Fundamental Theorem of Arithmetic. Prime factorisation helps us find HCF by taking smallest powers of common prime factors and LCM by taking greatest powers of all prime factors involved.

For two positive integers, `HCF x LCM = product of the numbers`. This relation is useful when HCF is known and LCM is required. A number ending in zero must have prime factors `2` and `5`, so powers such as `4^n` and `6^n` cannot end in zero because their prime factorisations do not contain `5`.

The chapter also uses prime factorisation to prove irrationality. If a prime `p` divides `a^2`, then `p` divides `a`. This helps prove that `sqrt(2)`, `sqrt(3)`, and `sqrt(5)` are irrational by contradiction. Expressions formed by adding a rational number to an irrational number, or multiplying an irrational number by a non-zero rational number, remain irrational.
