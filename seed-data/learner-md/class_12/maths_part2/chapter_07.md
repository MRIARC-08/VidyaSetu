# Chapter 7: Probability
### NCERT Class 12 - Maths Part 2

## Chapter at a Glance

This chapter extends earlier probability ideas into conditional probability, independent events, Bayes theorem, random variables, probability distributions, Bernoulli trials, and binomial distribution. These ideas are essential for statistics, data science, reliability testing, medicine, finance, quality control, and decision-making under uncertainty.

The main skill is identifying the correct probability situation: whether events are conditional, independent, mutually exclusive, exhaustive, or part of repeated trials.

## Learning Outcomes

By the end of this chapter, learners should be able to:

- Define conditional probability.
- Use multiplication theorem of probability.
- Distinguish independent and dependent events.
- Use total probability theorem.
- Apply Bayes theorem.
- Identify random variables.
- Construct probability distributions.
- Compute expectation and variance for simple distributions.
- Understand Bernoulli trials.
- Use binomial distribution.
- Avoid common mistakes in conditional and independent events.

## Key Terms

| Term | Meaning |
|---|---|
| Conditional probability | Probability of an event given that another event has occurred. |
| Independent events | Events where occurrence of one does not affect probability of the other. |
| Dependent events | Events where occurrence of one changes probability of the other. |
| Mutually exclusive events | Events that cannot occur together. |
| Exhaustive events | Events whose union covers the whole sample space. |
| Partition | Collection of non-overlapping exhaustive events. |
| Bayes theorem | Formula for reversing conditional probability using prior probabilities. |
| Random variable | Numerical value assigned to outcomes of a random experiment. |
| Probability distribution | Table or rule giving probabilities of values of a random variable. |
| Bernoulli trial | Trial with exactly two outcomes: success and failure. |
| Binomial distribution | Distribution of number of successes in independent Bernoulli trials. |

## Quick Formula Map

| Concept | Formula |
|---|---|
| Conditional probability | `P(A|B) = P(A intersection B)/P(B)` |
| Multiplication theorem | `P(A intersection B) = P(A)P(B|A)` |
| Independence | `P(A intersection B) = P(A)P(B)` |
| Complement | `P(A') = 1 - P(A)` |
| Total probability | `P(A) = sum P(E_i)P(A|E_i)` |
| Bayes theorem | `P(E_i|A) = P(E_i)P(A|E_i) / sum P(E_j)P(A|E_j)` |
| Expected value | `E(X) = sum x_i p_i` |
| Variance | `Var(X) = E(X^2) - [E(X)]^2` |
| Binomial probability | `P(X=r) = nCr p^r q^(n-r)` |
| Binomial mean | `np` |
| Binomial variance | `npq` |

# Unit 7A: Conditional Probability

Conditional probability measures the probability of event `A` when event `B` has already occurred.

It is written as:

`P(A|B)`

Read it as "probability of A given B".

Formula:

`P(A|B) = P(A intersection B)/P(B)`, where `P(B) != 0`.

## Example

A card is drawn from a deck. Let:

- `A` = card is an ace.
- `B` = card is a spade.

Then:

`P(A|B)` means probability that the card is an ace given that it is a spade.

There are 13 spades and 1 ace of spades, so:

`P(A|B) = 1/13`

# Unit 7B: Conditional Probability Is Not Symmetric

Usually:

`P(A|B) != P(B|A)`

## Example

Let:

- `A` = a drawn card is king.
- `B` = a drawn card is face card.

`P(A|B) = 4/12 = 1/3`

But:

`P(B|A) = 1`

because every king is a face card.

# Unit 7C: Multiplication Theorem

From conditional probability:

`P(A|B) = P(A intersection B)/P(B)`

So:

`P(A intersection B) = P(B)P(A|B)`

Also:

`P(A intersection B) = P(A)P(B|A)`

## For Three Events

`P(A intersection B intersection C) = P(A)P(B|A)P(C|A intersection B)`

## Example

An urn contains 5 red and 3 black balls. Two balls are drawn without replacement. Probability both are red:

`P(first red) = 5/8`

`P(second red | first red) = 4/7`

So:

`P(both red) = (5/8)(4/7) = 5/14`

# Unit 7D: Independent Events

Events `A` and `B` are independent if occurrence of one does not affect probability of the other.

Equivalent conditions:

- `P(A|B) = P(A)`, if `P(B) != 0`
- `P(B|A) = P(B)`, if `P(A) != 0`
- `P(A intersection B) = P(A)P(B)`

## Example

Tossing a coin and throwing a die are independent experiments.

Event `A`: coin shows head.

Event `B`: die shows 6.

`P(A intersection B) = (1/2)(1/6) = 1/12`

# Unit 7E: Mutually Exclusive versus Independent

These are different ideas.

## Mutually Exclusive

Events cannot occur together:

`P(A intersection B) = 0`

## Independent

Events do not affect each other's probabilities:

`P(A intersection B) = P(A)P(B)`

## Important Warning

If two non-empty events are mutually exclusive, they are generally not independent. If one occurs, the other becomes impossible.

# Unit 7F: Independent Complements

If `A` and `B` are independent, then the following pairs are also independent:

- `A'` and `B`
- `A` and `B'`
- `A'` and `B'`

## Why This Matters

Many probability problems ask for "at least one" or "not both". Complements often simplify the work.

Example:

`P(at least one success) = 1 - P(no success)`

# Unit 7G: Total Probability Theorem

Suppose `E1, E2, ..., En` form a partition of the sample space. This means:

- They are mutually exclusive.
- They are exhaustive.
- Each has non-zero probability.

Then for any event `A`:

`P(A) = P(E1)P(A|E1) + P(E2)P(A|E2) + ... + P(En)P(A|En)`

## Meaning

If event `A` can happen through several different cases, add the probability of `A` through each case.

# Unit 7H: Bayes Theorem

Bayes theorem helps find the probability of a cause given an observed effect.

If `E1, E2, ..., En` form a partition, then:

`P(E_i|A) = P(E_i)P(A|E_i) / [P(E1)P(A|E1) + ... + P(En)P(A|En)]`

## Meaning

Bayes theorem reverses conditional probability:

- Given cause, find probability of effect: `P(A|E_i)`.
- Given effect, find probability of cause: `P(E_i|A)`.

# Unit 7I: Bayes Theorem Example

A factory has machines `M1`, `M2`, and `M3`.

They produce:

- `M1`: 30 percent of items.
- `M2`: 45 percent of items.
- `M3`: 25 percent of items.

Defect rates:

- `M1`: 2 percent.
- `M2`: 3 percent.
- `M3`: 4 percent.

If an item is defective, find probability it came from `M2`.

Let `D` = defective.

`P(M2|D) = P(M2)P(D|M2) / [P(M1)P(D|M1) + P(M2)P(D|M2) + P(M3)P(D|M3)]`

`= (0.45)(0.03) / [(0.30)(0.02) + (0.45)(0.03) + (0.25)(0.04)]`

`= 0.0135 / [0.006 + 0.0135 + 0.010]`

`= 0.0135/0.0295`

# Unit 7J: Random Variables

A random variable assigns a numerical value to each outcome of a random experiment.

## Example

Toss two coins. Sample space:

`{HH, HT, TH, TT}`

Let `X` = number of heads.

Then:

- `X(HH) = 2`
- `X(HT) = 1`
- `X(TH) = 1`
- `X(TT) = 0`

So `X` can take values `0`, `1`, `2`.

# Unit 7K: Probability Distribution

A probability distribution lists values of a random variable and their probabilities.

For two coin tosses:

| X | Probability |
|---|---|
| 0 | `1/4` |
| 1 | `1/2` |
| 2 | `1/4` |

## Conditions

For a valid probability distribution:

- Each probability is between `0` and `1`.
- Sum of all probabilities is `1`.

# Unit 7L: Expected Value and Variance

## Expected Value

If random variable `X` takes values `x1, x2, ..., xn` with probabilities `p1, p2, ..., pn`, then:

`E(X) = sum x_i p_i`

This is the long-run average value of `X`.

## Variance

`Var(X) = E(X^2) - [E(X)]^2`

Variance measures spread.

## Example

For two coin tosses:

`E(X) = 0(1/4) + 1(1/2) + 2(1/4) = 1`

`E(X^2) = 0^2(1/4) + 1^2(1/2) + 2^2(1/4) = 3/2`

`Var(X) = 3/2 - 1^2 = 1/2`

# Unit 7M: Bernoulli Trials

A Bernoulli trial is an experiment with exactly two outcomes:

- Success
- Failure

Examples:

- Tossing a coin: head as success.
- Product testing: defective as success.
- Free throw: basket as success.

## Conditions for Bernoulli Trials

Repeated trials are Bernoulli trials if:

- Number of trials is fixed.
- Each trial has two outcomes.
- Probability of success is same in each trial.
- Trials are independent.

# Unit 7N: Binomial Distribution

If `X` is the number of successes in `n` independent Bernoulli trials, with probability of success `p` and failure `q = 1-p`, then:

`P(X = r) = nCr p^r q^(n-r)`

where `r = 0, 1, 2, ..., n`.

## Mean and Variance

Mean:

`E(X) = np`

Variance:

`Var(X) = npq`

Standard deviation:

`sqrt(npq)`

# Unit 7O: Binomial Example

A coin is tossed 5 times. Find probability of exactly 3 heads.

Here:

- `n = 5`
- `p = 1/2`
- `q = 1/2`
- `r = 3`

Using binomial formula:

`P(X=3) = 5C3 (1/2)^3 (1/2)^2`

`= 10(1/2)^5`

`= 10/32 = 5/16`

# Unit 7P: At Least and At Most

## At Least

`P(X >= 1) = 1 - P(X = 0)`

This is often easier than adding many cases.

## At Most

`P(X <= r) = P(X=0) + P(X=1) + ... + P(X=r)`

## Exactly

Use one binomial term:

`P(X = r)`

# Unit 7Q: Worked Examples

## Example 1: Conditional Probability

A die is thrown. Given that the number is even, find probability it is greater than 3.

Even outcomes: `{2,4,6}`

Greater than 3 among these: `{4,6}`

Probability:

`2/3`

## Example 2: Without Replacement

An urn contains 4 red and 6 black balls. Two balls are drawn without replacement. Find probability both are black.

`P(first black) = 6/10`

`P(second black | first black) = 5/9`

So:

`P(both black) = (6/10)(5/9) = 1/3`

## Example 3: Independence Check

Suppose `P(A) = 1/2`, `P(B) = 1/3`, and `P(A intersection B) = 1/6`.

Since:

`P(A)P(B) = (1/2)(1/3) = 1/6`

events are independent.

## Example 4: Probability Distribution

Let `X` have distribution:

| X | 0 | 1 | 2 |
|---|---|---|---|
| P(X) | `1/4` | `1/2` | `1/4` |

Sum of probabilities:

`1/4 + 1/2 + 1/4 = 1`

So it is valid.

# Unit 7R: Answer-Writing Framework

## To solve conditional probability

Write in this order:

1. Define events clearly.
2. Identify what is given.
3. Use `P(A|B) = P(A intersection B)/P(B)`.
4. Compute numerator and denominator.
5. State answer.

## To test independence

Write in this order:

1. Find `P(A)`.
2. Find `P(B)`.
3. Find `P(A intersection B)`.
4. Compare with `P(A)P(B)`.
5. Conclude independent or not independent.

## To apply Bayes theorem

Write in this order:

1. Identify possible causes `E1, E2, ..., En`.
2. Check that they form a partition.
3. Identify observed event `A`.
4. Write prior probabilities `P(E_i)`.
5. Write likelihoods `P(A|E_i)`.
6. Substitute in Bayes formula.

## To solve binomial problems

Write in this order:

1. Identify `n`, `p`, `q`.
2. Identify required number of successes `r`.
3. Use `P(X=r) = nCr p^r q^(n-r)`.
4. For "at least" or "at most", add cases or use complement.

# Unit 7S: Common Mistakes and Corrections

| Mistake | Correction |
|---|---|
| Confusing `P(A|B)` and `P(B|A)` | They are usually different. |
| Treating mutually exclusive events as independent | Non-empty mutually exclusive events are generally dependent. |
| Forgetting replacement condition | Without replacement changes probabilities. |
| Ignoring independence in multiplication | Use conditional probability unless independence is known. |
| Applying Bayes theorem without partition | Causes must be exhaustive and non-overlapping. |
| Probability distribution sums not checked | Sum must be `1`. |
| Using binomial distribution when trials are not independent | Binomial requires independent Bernoulli trials. |
| Forgetting `q = 1-p` | Always compute failure probability. |

## Practice Set

1. Find `P(A|B)` if `P(A intersection B)=1/5` and `P(B)=2/5`.
2. A card is drawn. Given that it is a face card, find probability it is a king.
3. Two balls are drawn without replacement from an urn with 5 red and 4 black balls. Find probability both are red.
4. Check whether events are independent if `P(A)=0.4`, `P(B)=0.5`, and `P(A intersection B)=0.2`.
5. State total probability theorem.
6. Apply Bayes theorem to a two-box ball problem.
7. Construct probability distribution for number of heads in three coin tosses.
8. Find expectation for the distribution in question 7.
9. Find probability of exactly 2 successes in 5 Bernoulli trials with `p=0.3`.
10. Find probability of at least one success in 4 trials with success probability `p`.

## Final Revision

Remember these points:

- Conditional probability changes the sample space.
- `P(A|B)` and `P(B|A)` are different in general.
- Independent means `P(A intersection B)=P(A)P(B)`.
- Bayes theorem finds probability of cause after observing an effect.
- A random variable assigns numbers to outcomes.
- A probability distribution must sum to `1`.
- Binomial distribution needs fixed, independent, two-outcome trials with constant success probability.
