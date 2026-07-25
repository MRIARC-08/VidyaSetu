# Chapter 1: Sets

Class: 11  
Subject: Mathematics  
Input file used: `data/class_11/maths/chapter_01.md`  
Formatted file: `data_learner_md/class_11/maths/chapter_01.md`

## Learning Purpose

This chapter builds the language of modern mathematics.

Almost every later topic uses sets in some way: relations, functions, coordinate geometry, sequences, probability, calculus, algebra, and logic.

A set is not just a list.

It is a well-defined collection where we can decide whether a given object belongs to it or not.

This chapter teaches you how to write sets, compare sets, build new sets from old ones, and reason with set laws.

## Core Learning Outcomes

After studying this chapter, you should be able to:

1. Decide whether a collection is a set.
2. Write a set in roster form.
3. Write a set in set-builder form.
4. Use membership notation correctly.
5. Identify empty, finite, infinite, equal, singleton, subset, and proper subset cases.
6. Distinguish between an element and a subset.
7. Write common subsets of real numbers.
8. Represent intervals using interval notation and set-builder notation.
9. Understand universal sets.
10. Read and create simple Venn diagrams.
11. Find union, intersection, difference, and complement of sets.
12. Apply basic set laws, including De Morgan's laws.
13. Solve textbook-style questions with clean reasoning.
14. Avoid common mistakes involving repeated elements, order, empty set, and nested braces.

## Chapter Snapshot

| Topic | Main Idea |
|---|---|
| Set | A well-defined collection of objects |
| Element | An object belonging to a set |
| Roster form | Listing all elements inside braces |
| Set-builder form | Describing elements by a common property |
| Empty set | A set with no element |
| Finite set | Empty or having a definite number of elements |
| Infinite set | Not finite |
| Equal sets | Sets having exactly the same elements |
| Subset | Every element of one set is also in another set |
| Universal set | The larger set under consideration |
| Union | Elements in A or B or both |
| Intersection | Elements common to A and B |
| Difference | Elements in A but not in B |
| Complement | Elements in U but not in A |
| De Morgan's laws | Rules connecting complement with union and intersection |

## Essential Notation

| Symbol | Meaning | Example |
|---|---|---|
| `{ }` | Set braces | `{1, 2, 3}` |
| `a in A` | a is an element of A | `2 in {1, 2, 3}` |
| `a notin A` | a is not an element of A | `5 notin {1, 2, 3}` |
| `A subset B` | A is a subset of B | `{1, 2} subset {1, 2, 3}` |
| `A not subset B` | A is not a subset of B | `{1, 4} not subset {1, 2, 3}` |
| `A = B` | A and B have exactly the same elements | `{1, 2} = {2, 1}` |
| `A != B` | A and B are not equal | `{1, 2} != {1, 3}` |
| `A union B` | Union of A and B | Elements in A or B or both |
| `A intersection B` | Intersection of A and B | Elements common to A and B |
| `A - B` | Difference of A and B | Elements in A but not in B |
| `A'` | Complement of A | Elements in U but not in A |
| `n(A)` | Number of elements in A | If A = `{2, 4, 6}`, then `n(A) = 3` |

In formulas, we write the same ideas as:

$$
x \in A
$$

$$
x \notin A
$$

$$
A \subseteq B
$$

$$
A \cup B
$$

$$
A \cap B
$$

$$
A - B
$$

## 1. Meaning Of A Set

A set is a well-defined collection of objects.

"Well-defined" means there is a clear rule for deciding whether an object belongs to the collection.

For example:

- The months of a year beginning with J form a set.
- The vowels in English form a set.
- The natural numbers less than 10 form a set.
- The prime factors of 210 form a set.

These are sets because membership is not based on opinion.

Non-examples:

- The ten best writers of India.
- The most talented cricketers in the world.
- The most dangerous animals.

These are not sets in the mathematical sense because "best", "talented", and "most dangerous" are subjective unless a precise rule is given.

## 2. Elements, Members, And Objects

The objects in a set are called elements or members.

If `a` belongs to set `A`, we write:

$$
a \in A
$$

If `a` does not belong to set `A`, we write:

$$
a \notin A
$$

Example:

Let

$$
V = \{a, e, i, o, u\}
$$

Then:

$$
a \in V
$$

and

$$
b \notin V
$$

## 3. Naming Sets

Sets are usually named with capital letters:

- `A`
- `B`
- `C`
- `X`
- `Y`
- `Z`

Elements are usually written with small letters:

- `a`
- `b`
- `c`
- `x`
- `y`
- `z`

This is a convention, not a law.

The main idea is clarity.

## 4. Standard Number Sets

| Symbol | Name | Meaning |
|---|---|---|
| `N` | Natural numbers | `{1, 2, 3, 4, ...}` |
| `Z` | Integers | `{..., -3, -2, -1, 0, 1, 2, 3, ...}` |
| `Q` | Rational numbers | Numbers expressible as `p/q`, where p and q are integers and q is not zero |
| `R` | Real numbers | All rational and irrational numbers |
| `Z+` | Positive integers | `{1, 2, 3, ...}` |
| `Q+` | Positive rational numbers | Rational numbers greater than zero |
| `R+` | Positive real numbers | Real numbers greater than zero |

The common inclusion chain is:

$$
N \subseteq Z \subseteq Q \subseteq R
$$

## 5. Roster Form

In roster form, all elements are listed inside braces.

Examples:

$$
A = \{2, 4, 6\}
$$

$$
B = \{a, e, i, o, u\}
$$

$$
C = \{1, 3, 5, 7, 9\}
$$

Important points:

- Order does not matter.
- Repetition does not matter.
- Elements are separated by commas.
- Braces are required.

For example:

$$
\{1, 2, 3\} = \{3, 2, 1\}
$$

and

$$
\{1, 2, 2, 3, 3\} = \{1, 2, 3\}
$$

## 6. Set-Builder Form

In set-builder form, we describe a set using a property.

Example:

$$
V = \{x : x \text{ is a vowel in the English alphabet}\}
$$

Read this as:

"V is the set of all x such that x is a vowel in the English alphabet."

Another example:

$$
A = \{x : x \in N \text{ and } 3 < x < 10\}
$$

This means:

$$
A = \{4, 5, 6, 7, 8, 9\}
$$

## 7. Roster Form Versus Set-Builder Form

| Roster Form | Set-Builder Form |
|---|---|
| Lists elements directly | Describes a rule |
| Best for small finite sets | Best for large or infinite sets |
| Example: `{2, 4, 6, 8}` | Example: `{x : x is an even natural number less than 10}` |

Use roster form when the elements can be listed conveniently.

Use set-builder form when the pattern or rule is more important.

## 8. Worked Pattern: Roster To Set-Builder

Example:

$$
A = \{1, 4, 9, 16, 25, ...\}
$$

These are squares of natural numbers.

So:

$$
A = \{x : x = n^2, n \in N\}
$$

Example:

$$
B = \{2, 4, 6, 8, ...\}
$$

These are even natural numbers.

So:

$$
B = \{x : x = 2n, n \in N\}
$$

## 9. Worked Pattern: Set-Builder To Roster

Example:

$$
A = \{x : x \in Z \text{ and } -3 \le x < 7\}
$$

Integers from `-3` up to but not including `7` are:

$$
A = \{-3, -2, -1, 0, 1, 2, 3, 4, 5, 6\}
$$

Example:

$$
B = \{x : x \in N \text{ and } x^2 < 40\}
$$

Natural numbers whose squares are less than 40 are:

$$
B = \{1, 2, 3, 4, 5, 6\}
$$

## 10. Empty Set

The empty set has no elements.

It is also called the null set or void set.

It is written as:

$$
\varnothing
$$

or

$$
\{\}
$$

Examples:

$$
\{x : x \in N \text{ and } 1 < x < 2\} = \varnothing
$$

There is no natural number between 1 and 2.

Another example:

$$
\{x : x \in Q \text{ and } x^2 - 2 = 0\} = \varnothing
$$

The solutions are `sqrt(2)` and `-sqrt(2)`, which are not rational.

## 11. Empty Set Is Not The Same As `{0}`

This is a very common mistake.

The empty set has no element:

$$
\varnothing = \{\}
$$

The set `{0}` has one element, namely `0`:

$$
n(\{0\}) = 1
$$

So:

$$
\varnothing \ne \{0\}
$$

## 12. Finite And Infinite Sets

A set is finite if it is empty or has a definite number of elements.

Examples:

$$
A = \{1, 2, 3, 4, 5\}
$$

is finite and

$$
n(A) = 5
$$

The set of days of a week is finite.

The set of letters in the English alphabet is finite.

An infinite set is not finite.

Examples:

$$
N = \{1, 2, 3, ...\}
$$

$$
Z = \{..., -2, -1, 0, 1, 2, ...\}
$$

The set of all points on a line is infinite.

## 13. Number Of Elements

The number of distinct elements in a finite set `A` is denoted by:

$$
n(A)
$$

Example:

$$
A = \{2, 4, 4, 6, 6, 6\}
$$

Repeated elements are ignored, so:

$$
A = \{2, 4, 6\}
$$

and

$$
n(A) = 3
$$

## 14. Equal Sets

Two sets are equal if they have exactly the same elements.

Order does not matter.

Repetition does not matter.

Example:

$$
\{1, 2, 3, 4\} = \{4, 3, 2, 1\}
$$

Example:

$$
\{S, C, H, O, O, L\} = \{S, C, H, O, L\}
$$

because repeated `O` is counted once.

## 15. Testing Equality

To prove `A = B`, show both:

$$
A \subseteq B
$$

and

$$
B \subseteq A
$$

Meaning:

- Every element of A is in B.
- Every element of B is in A.

If even one element differs, the sets are not equal.

## 16. Subsets

A set `A` is a subset of `B` if every element of `A` is also an element of `B`.

Symbolically:

$$
A \subseteq B \text{ if } x \in A \Rightarrow x \in B
$$

Example:

$$
\{1, 3\} \subseteq \{1, 3, 5, 7\}
$$

because both 1 and 3 belong to the larger set.

Non-example:

$$
\{1, 4\} \nsubseteq \{1, 2, 3\}
$$

because 4 is not in `{1, 2, 3}`.

## 17. Key Subset Facts

For any set `A`:

$$
A \subseteq A
$$

Every set is a subset of itself.

Also:

$$
\varnothing \subseteq A
$$

The empty set is a subset of every set.

If `A subset B` and `A != B`, then `A` is a proper subset of `B`.

## 18. Singleton Set

A set with exactly one element is called a singleton set.

Examples:

$$
\{0\}
$$

$$
\{a\}
$$

$$
\{\varnothing\}
$$

Notice:

$$
\{\varnothing\}
$$

is not empty.

It has one element: the empty set.

## 19. Element Versus Subset

This is one of the most important distinctions in the chapter.

Let:

$$
A = \{1, 2, \{3, 4\}, 5\}
$$

Then:

$$
\{3, 4\} \in A
$$

because `{3, 4}` is listed as one element of A.

But:

$$
\{3, 4\} \nsubseteq A
$$

because 3 and 4 individually are not elements of A.

However:

$$
\{\{3, 4\}\} \subseteq A
$$

because its only element, `{3, 4}`, belongs to A.

## 20. Common Subsets Of Real Numbers

The main number sets satisfy:

$$
N \subseteq Z \subseteq Q \subseteq R
$$

The irrational numbers are real numbers that are not rational.

If `T` denotes the set of irrational numbers:

$$
T = \{x : x \in R \text{ and } x \notin Q\}
$$

Then:

$$
T \subseteq R
$$

but:

$$
N \nsubseteq T
$$

because natural numbers are rational.

## 21. Intervals As Subsets Of R

Intervals are special subsets of the real number line.

Let `a` and `b` be real numbers and `a < b`.

Open interval:

$$
(a, b) = \{x : a < x < b\}
$$

Closed interval:

$$
[a, b] = \{x : a \le x \le b\}
$$

Left-closed, right-open interval:

$$
[a, b) = \{x : a \le x < b\}
$$

Left-open, right-closed interval:

$$
(a, b] = \{x : a < x \le b\}
$$

## 22. Interval Examples

Set-builder to interval:

$$
\{x : x \in R \text{ and } -5 < x \le 7\} = (-5, 7]
$$

Interval to set-builder:

$$
[-3, 5) = \{x : x \in R \text{ and } -3 \le x < 5\}
$$

Non-negative real numbers:

$$
[0, \infty) = \{x : x \in R \text{ and } x \ge 0\}
$$

Negative real numbers:

$$
(-\infty, 0) = \{x : x \in R \text{ and } x < 0\}
$$

All real numbers:

$$
(-\infty, \infty) = R
$$

The length of any interval from `a` to `b` is:

$$
b - a
$$

## 23. Universal Set

A universal set is the basic set under consideration in a given context.

It is usually denoted by `U`.

Examples:

- If we are studying natural numbers, `U` may be `N`.
- If we are studying integers, `U` may be `Z`.
- If we are studying real number intervals, `U` may be `R`.
- If we are studying students in a school, `U` may be the set of all students in that school.

The universal set is not fixed forever.

It depends on the problem.

## 24. Venn Diagrams

A Venn diagram represents sets visually.

Usually:

- the rectangle represents the universal set `U`;
- circles or closed curves represent subsets of `U`;
- overlap represents common elements;
- outside a circle but inside the rectangle represents elements not in that set.

Venn diagrams are especially useful for union, intersection, difference, and complement.

## 25. Union Of Sets

The union of `A` and `B` contains all elements that are in `A`, in `B`, or in both.

Definition:

$$
A \cup B = \{x : x \in A \text{ or } x \in B\}
$$

In mathematics, "or" usually means inclusive or.

So elements in both sets are included.

Example:

$$
A = \{2, 4, 6, 8\}, \quad B = \{6, 8, 10, 12\}
$$

Then:

$$
A \cup B = \{2, 4, 6, 8, 10, 12\}
$$

Common elements are written once.

## 26. Union Laws

For subsets of a universal set:

$$
A \cup B = B \cup A
$$

Commutative law.

$$
(A \cup B) \cup C = A \cup (B \cup C)
$$

Associative law.

$$
A \cup \varnothing = A
$$

Identity law.

$$
A \cup A = A
$$

Idempotent law.

$$
U \cup A = U
$$

Universal set law.

## 27. Intersection Of Sets

The intersection of `A` and `B` contains only elements common to both sets.

Definition:

$$
A \cap B = \{x : x \in A \text{ and } x \in B\}
$$

Example:

$$
A = \{2, 4, 6, 8\}, \quad B = \{6, 8, 10, 12\}
$$

Then:

$$
A \cap B = \{6, 8\}
$$

## 28. Disjoint Sets

Two sets are disjoint if they have no common element.

That means:

$$
A \cap B = \varnothing
$$

Example:

$$
A = \{2, 4, 6, 8\}, \quad B = \{1, 3, 5, 7\}
$$

Then:

$$
A \cap B = \varnothing
$$

so `A` and `B` are disjoint.

## 29. Intersection Laws

$$
A \cap B = B \cap A
$$

Commutative law.

$$
(A \cap B) \cap C = A \cap (B \cap C)
$$

Associative law.

$$
\varnothing \cap A = \varnothing
$$

Empty set law.

$$
U \cap A = A
$$

Universal set identity law.

$$
A \cap A = A
$$

Idempotent law.

## 30. Distributive Laws

Intersection distributes over union:

$$
A \cap (B \cup C) = (A \cap B) \cup (A \cap C)
$$

Union distributes over intersection:

$$
A \cup (B \cap C) = (A \cup B) \cap (A \cup C)
$$

These laws are often proved using Venn diagrams or element-wise reasoning.

## 31. Difference Of Sets

The difference `A - B` contains elements that are in `A` but not in `B`.

Definition:

$$
A - B = \{x : x \in A \text{ and } x \notin B\}
$$

Example:

$$
A = \{1, 2, 3, 4, 5, 6\}, \quad B = \{2, 4, 6, 8\}
$$

Then:

$$
A - B = \{1, 3, 5\}
$$

and:

$$
B - A = \{8\}
$$

So, in general:

$$
A - B \ne B - A
$$

Set difference is not commutative.

## 32. Difference Splits A Set

For two sets `A` and `B`, the set `A` can be split into:

- elements of A that are also in B;
- elements of A that are not in B.

In formula form:

$$
A = (A \cap B) \cup (A - B)
$$

Also:

$$
(A \cap B) \cap (A - B) = \varnothing
$$

This means the two parts do not overlap.

## 33. Complement Of A Set

Let `U` be the universal set and let `A subset U`.

The complement of `A`, written `A'`, is the set of all elements of `U` that are not in `A`.

Definition:

$$
A' = \{x : x \in U \text{ and } x \notin A\}
$$

Since this is the same as elements in `U` but not in `A`, we also write:

$$
A' = U - A
$$

Example:

$$
U = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}
$$

and

$$
A = \{1, 3, 5, 7, 9\}
$$

Then:

$$
A' = \{2, 4, 6, 8, 10\}
$$

## 34. Complement Laws

Complement law 1:

$$
A \cup A' = U
$$

Complement law 2:

$$
A \cap A' = \varnothing
$$

Double complement law:

$$
(A')' = A
$$

Empty set and universal set laws:

$$
\varnothing' = U
$$

$$
U' = \varnothing
$$

## 35. De Morgan's Laws

De Morgan's laws connect complement, union, and intersection.

First law:

$$
(A \cup B)' = A' \cap B'
$$

Second law:

$$
(A \cap B)' = A' \cup B'
$$

Meaning in words:

- Not in `A union B` means not in A and not in B.
- Not in `A intersection B` means not in A or not in B.

These laws are very important for proofs and Venn diagram questions.

## 36. Worked Example: De Morgan's Law

Let:

$$
U = \{1, 2, 3, 4, 5, 6\}
$$

$$
A = \{2, 3\}
$$

$$
B = \{3, 4, 5\}
$$

Then:

$$
A' = \{1, 4, 5, 6\}
$$

and:

$$
B' = \{1, 2, 6\}
$$

So:

$$
A' \cap B' = \{1, 6\}
$$

Also:

$$
A \cup B = \{2, 3, 4, 5\}
$$

Therefore:

$$
(A \cup B)' = \{1, 6\}
$$

Hence:

$$
(A \cup B)' = A' \cap B'
$$

## 37. Worked Example: Solving A Quadratic Set

Write the solution set of:

$$
x^2 + x - 2 = 0
$$

in roster form.

Factor:

$$
x^2 + x - 2 = (x - 1)(x + 2)
$$

So:

$$
(x - 1)(x + 2) = 0
$$

Thus:

$$
x = 1 \text{ or } x = -2
$$

The solution set is:

$$
\{-2, 1\}
$$

The order could also be `{1, -2}`.

## 38. Worked Example: Equal Sets

Let:

$$
A = \{x : x - 5 = 0\}
$$

and:

$$
B = \{x : x \text{ is a positive integral root of } x^2 - 2x - 15 = 0\}
$$

For `A`:

$$
x - 5 = 0 \Rightarrow x = 5
$$

So:

$$
A = \{5\}
$$

For `B`:

$$
x^2 - 2x - 15 = (x - 5)(x + 3)
$$

Roots are `5` and `-3`.

The positive integral root is `5`.

So:

$$
B = \{5\}
$$

Therefore:

$$
A = B
$$

## 39. Worked Example: Subsets Of `{ -1, 0, 1 }`

Let:

$$
A = \{-1, 0, 1\}
$$

Subsets with no element:

$$
\varnothing
$$

Subsets with one element:

$$
\{-1\}, \{0\}, \{1\}
$$

Subsets with two elements:

$$
\{-1, 0\}, \{-1, 1\}, \{0, 1\}
$$

Subset with three elements:

$$
\{-1, 0, 1\}
$$

So all subsets are:

$$
\varnothing, \{-1\}, \{0\}, \{1\}, \{-1, 0\}, \{-1, 1\}, \{0, 1\}, \{-1, 0, 1\}
$$

A set with 3 elements has:

$$
2^3 = 8
$$

subsets.

## 40. Worked Example: Show `A union B = A intersection B` Implies `A = B`

Given:

$$
A \cup B = A \cap B
$$

We prove `A subset B`.

Let:

$$
x \in A
$$

Then:

$$
x \in A \cup B
$$

Since:

$$
A \cup B = A \cap B
$$

we get:

$$
x \in A \cap B
$$

Therefore:

$$
x \in B
$$

So:

$$
A \subseteq B
$$

Similarly, if `x in B`, then `x in A`.

So:

$$
B \subseteq A
$$

Hence:

$$
A = B
$$

## 41. Exercise 1.1 Answer Key

### 1. Which Collections Are Sets?

| Part | Answer | Reason |
|---|---|---|
| i | Set | Months beginning with J can be decided clearly |
| ii | Not a set | "Ten most talented writers" is subjective |
| iii | Not a set | "Best cricketers" is subjective |
| iv | Set | Boys in your class can be clearly identified |
| v | Set | Natural numbers less than 100 are clear |
| vi | Set | Novels written by Munshi Prem Chand can be listed |
| vii | Set | Even integers are well-defined |
| viii | Set | Questions in the chapter are definite |
| ix | Not a set | "Most dangerous animals" is subjective |

### 2. Membership Symbols

Let:

$$
A = \{1, 2, 3, 4, 5, 6\}
$$

Then:

| Part | Answer |
|---|---|
| i | `5 in A` |
| ii | `8 notin A` |
| iii | `0 notin A` |
| iv | `4 in A` |
| v | `2 in A` |
| vi | `10 notin A` |

### 3. Roster Form

| Part | Answer |
|---|---|
| i | `{-3, -2, -1, 0, 1, 2, 3, 4, 5, 6}` |
| ii | `{1, 2, 3, 4, 5}` |
| iii | `{17, 26, 35, 44, 53, 62, 71, 80}` |
| iv | `{2, 3, 5}` |
| v | `{T, R, I, G, O, N, M, E, Y}` |
| vi | `{B, E, T, R}` |

### 4. Set-Builder Form

| Part | One Good Answer |
|---|---|
| i | `{x : x = 3n, n in N and 1 <= n <= 4}` |
| ii | `{x : x = 2^n, n in N and 1 <= n <= 5}` |
| iii | `{x : x = 5^n, n in N and 1 <= n <= 4}` |
| iv | `{x : x is an even natural number}` |
| v | `{x : x = n^2, n in N and 1 <= n <= 10}` |

### 5. List Elements

| Part | Answer |
|---|---|
| i | `{1, 3, 5, 7, ...}` |
| ii | `{0, 1, 2, 3, 4}` |
| iii | `{-2, -1, 0, 1, 2}` |
| iv | `{L, O, Y, A}` |
| v | `{February, April, June, September, November}` |
| vi | `{b, c, d, f, g, h, j}` |

### 6. Matching

| Roster Set | Matching Set-Builder Form |
|---|---|
| `{1, 2, 3, 6}` | natural number divisor of 6 |
| `{2, 3}` | prime number divisor of 6 |
| `{M, A, T, H, E, I, C, S}` | letter of the word MATHEMATICS |
| `{1, 3, 5, 7, 9}` | odd natural number less than 10 |

## 42. Exercise 1.2 Answer Key

### 1. Null Set Cases

| Part | Answer | Reason |
|---|---|---|
| i | Null set | No odd natural number is divisible by 2 |
| ii | Not null | 2 is an even prime |
| iii | Null set | No natural number is both less than 5 and greater than 7 |
| iv | Null set | Parallel lines have no common point |

### 2. Finite Or Infinite

| Part | Answer |
|---|---|
| i | Finite |
| ii | Infinite |
| iii | Finite |
| iv | Infinite |
| v | Finite |

### 3. Finite Or Infinite

| Part | Answer |
|---|---|
| i | Infinite |
| ii | Finite |
| iii | Infinite |
| iv | Finite, although very large and changing in reality |
| v | Infinite |

### 4. Equal Or Not

| Part | Answer | Reason |
|---|---|---|
| i | Equal | Same elements, different order |
| ii | Not equal | 12 belongs to A but not B; 18 belongs to B but not A |
| iii | Equal | Both are `{2, 4, 6, 8, 10}` |
| iv | Not equal | B contains 15 and 25, not multiples of 10 |

### 5. Equal Pair Check

| Part | Answer |
|---|---|
| i | Not equal; the equation gives `{-2, -3}`, not `{2, 3}` |
| ii | Equal; both reduce to `{F, O, L, W}` |

### 6. Select Equal Sets

Equal pairs:

$$
B = D
$$

because both are `{1, 2, 3, 4}`.

Also:

$$
E = G
$$

because both are `{-1, 1}`.

No other listed sets are equal.

## 43. Exercise 1.3 Answer Key

### 1. Fill Subset Or Not Subset

| Part | Answer |
|---|---|
| i | subset |
| ii | not subset |
| iii | subset |
| iv | not subset |
| v | not subset |
| vi | subset |
| vii | subset |

### 2. True Or False

| Part | Answer | Reason |
|---|---|---|
| i | False | `{a, b}` is a subset of `{b, c, a}` |
| ii | True | a and e are vowels |
| iii | False | 2 is not in `{1, 3, 5}` |
| iv | True | a is in `{a, b, c}` |
| v | False | a is an element, but `{a}` is not an element of `{a, b, c}` |
| vi | True | `{2, 4}` is a subset of divisors of 36 |

### 3. Nested Set Check

Let:

$$
A = \{1, 2, \{3, 4\}, 5\}
$$

| Part | Statement | Correct? | Reason |
|---|---|---|---|
| i | `{3, 4} subset A` | Incorrect | 3 and 4 are not individual elements of A |
| ii | `{3, 4} in A` | Correct | `{3, 4}` is listed as one element |
| iii | `{{3, 4}} subset A` | Correct | Its only element `{3, 4}` is in A |
| iv | `1 in A` | Correct | 1 is listed |
| v | `1 subset A` | Incorrect | 1 is an element, not a set here |
| vi | `{1, 2, 5} subset A` | Correct | All three elements are in A |
| vii | `{1, 2, 5} in A` | Incorrect | It is not listed as one element |
| viii | `{1, 2, 3} subset A` | Incorrect | 3 is not in A |
| ix | `empty set in A` | Incorrect | empty set is not listed |
| x | `empty set subset A` | Correct | empty set is subset of every set |
| xi | `{empty set} subset A` | Incorrect | empty set is not an element of A |

### 4. All Subsets

| Set | Subsets |
|---|---|
| `{a}` | `empty set`, `{a}` |
| `{a, b}` | `empty set`, `{a}`, `{b}`, `{a, b}` |
| `{1, 2, 3}` | `empty set`, `{1}`, `{2}`, `{3}`, `{1, 2}`, `{1, 3}`, `{2, 3}`, `{1, 2, 3}` |
| `empty set` | `empty set` only |

### 5. Write As Intervals

| Part | Answer |
|---|---|
| i | `(-4, 6]` |
| ii | `(-12, -10)` |
| iii | `[0, 7)` |
| iv | `[3, 4]` |

### 6. Write In Set-Builder Form

| Part | Answer |
|---|---|
| i | `{x : x in R and -3 < x < 0}` |
| ii | `{x : x in R and 6 <= x <= 12}` |
| iii | `{x : x in R and 6 < x <= 12}` |
| iv | `{x : x in R and -23 <= x < 5}` |

### 7. Universal Sets

| Given Set | Possible Universal Set |
|---|---|
| Right triangles | Set of all triangles in a plane |
| Isosceles triangles | Set of all triangles in a plane |

### 8. Universal Set Choice

Given:

$$
A = \{1, 3, 5\}, \quad B = \{2, 4, 6\}, \quad C = \{0, 2, 4, 6, 8\}
$$

A universal set must contain every element of A, B, and C.

Valid choices:

$$
\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}
$$

and

$$
\{1, 2, 3, 4, 5, 6, 7, 8\}
$$

The first listed option `{0, 1, 2, 3, 4, 5, 6}` is not enough because it does not contain 8.

The empty set is not valid.

## 44. Exercise 1.4 Answer Key

### 1. Union Of Given Pairs

| Part | Answer |
|---|---|
| i | `{1, 2, 3, 5}` |
| ii | `{a, b, c, e, i, o, u}` |
| iii | `{1, 2, 3, 4, 5, 6, 9, 12, ...}` |
| iv | `{2, 3, 4, 5, 6, 7, 8, 9}` |
| v | `{1, 2, 3}` |

### 2. Subset And Union

Given:

$$
A = \{a, b\}, \quad B = \{a, b, c\}
$$

Then:

$$
A \subseteq B
$$

and:

$$
A \cup B = B = \{a, b, c\}
$$

### 3. If `A subset B`, Then `A union B`

If:

$$
A \subseteq B
$$

then:

$$
A \cup B = B
$$

### 4. Unions

Let:

$$
A = \{1, 2, 3, 4\}, \quad B = \{3, 4, 5, 6\}
$$

$$
C = \{5, 6, 7, 8\}, \quad D = \{7, 8, 9, 10\}
$$

| Part | Answer |
|---|---|
| i | `{1, 2, 3, 4, 5, 6}` |
| ii | `{1, 2, 3, 4, 5, 6, 7, 8}` |
| iii | `{3, 4, 5, 6, 7, 8}` |
| iv | `{3, 4, 5, 6, 7, 8, 9, 10}` |
| v | `{1, 2, 3, 4, 5, 6, 7, 8}` |
| vi | `{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}` |
| vii | `{3, 4, 5, 6, 7, 8, 9, 10}` |

### 5. Intersections Of Question 1 Pairs

| Part | Answer |
|---|---|
| i | `{1, 3}` |
| ii | `{a}` |
| iii | `{3}` |
| iv | `empty set` |
| v | `empty set` |

### 6. Intersections

Let:

$$
A = \{3, 5, 7, 9, 11\}, \quad B = \{7, 9, 11, 13\}
$$

$$
C = \{11, 13, 15\}, \quad D = \{15, 17\}
$$

| Part | Answer |
|---|---|
| i | `{7, 9, 11}` |
| ii | `{11, 13}` |
| iii | `empty set` |
| iv | `{11}` |
| v | `empty set` |
| vi | `{7, 9, 11}` |
| vii | `empty set` |
| viii | `{7, 9, 11}` |
| ix | `{7, 9, 11}` |
| x | `{7, 9, 11, 15}` |

### 7. Natural Number Sets

Let:

- `A` be natural numbers;
- `B` be even natural numbers;
- `C` be odd natural numbers;
- `D` be prime numbers.

| Part | Answer |
|---|---|
| i | `B` |
| ii | `C` |
| iii | `D` |
| iv | `empty set` |
| v | `{2}` |
| vi | Set of odd prime numbers, `{3, 5, 7, 11, ...}` |

### 8. Disjoint Or Not

| Part | Answer | Reason |
|---|---|---|
| i | Not disjoint | 4 is common |
| ii | Not disjoint | e is common |
| iii | Disjoint | No integer is both even and odd |

### 9. Differences

Let:

$$
A = \{3, 6, 9, 12, 15, 18, 21\}
$$

$$
B = \{4, 8, 12, 16, 20\}
$$

$$
C = \{2, 4, 6, 8, 10, 12, 14, 16\}
$$

$$
D = \{5, 10, 15, 20\}
$$

| Part | Answer |
|---|---|
| i | `{3, 6, 9, 15, 18, 21}` |
| ii | `{3, 9, 15, 18, 21}` |
| iii | `{3, 6, 9, 12, 18, 21}` |
| iv | `{4, 8, 16, 20}` |
| v | `{2, 4, 8, 10, 14, 16}` |
| vi | `{5, 10, 20}` |
| vii | `{20}` |
| viii | `{4, 8, 12, 16}` |
| ix | `{2, 6, 10, 14}` |
| x | `{5, 10, 15}` |
| xi | `{2, 4, 6, 8, 12, 14, 16}` |
| xii | `{5, 15, 20}` |

### 10. Difference And Intersection

Let:

$$
X = \{a, b, c, d\}, \quad Y = \{f, b, d, g\}
$$

Then:

$$
X - Y = \{a, c\}
$$

$$
Y - X = \{f, g\}
$$

$$
X \cap Y = \{b, d\}
$$

### 11. `R - Q`

`R - Q` is the set of irrational numbers.

### 12. True Or False

| Part | Answer | Reason |
|---|---|---|
| i | False | 3 is common |
| ii | False | a is common |
| iii | True | No common element |
| iv | True | No common element |

## 45. Exercise 1.5 Answer Key

### 1. Complements And Expressions

Let:

$$
U = \{1, 2, 3, 4, 5, 6, 7, 8, 9\}
$$

$$
A = \{1, 2, 3, 4\}, \quad B = \{2, 4, 6, 8\}, \quad C = \{3, 4, 5, 6\}
$$

| Part | Answer |
|---|---|
| i | `{5, 6, 7, 8, 9}` |
| ii | `{1, 3, 5, 7, 9}` |
| iii | `{7, 8, 9}` |
| iv | `{5, 7, 9}` |
| v | `{1, 2, 3, 4}` |
| vi | `{1, 2, 3, 4, 5, 6, 7, 9}` |

### 2. Complements

Let:

$$
U = \{a, b, c, d, e, f, g, h\}
$$

| Part | Answer |
|---|---|
| i | `{d, e, f, g, h}` |
| ii | `{a, b, c, h}` |
| iii | `{b, d, f, h}` |
| iv | `{b, c, d, e}` |

### 3. Complements In Natural Numbers

Take `U = N`.

| Part | Complement |
|---|---|
| i | Odd natural numbers |
| ii | Even natural numbers |
| iii | Natural numbers not divisible by 3 |
| iv | Composite numbers together with 1 |
| v | Natural numbers not divisible by 15 |
| vi | Natural numbers that are not perfect squares |
| vii | Natural numbers that are not perfect cubes |
| viii | `N - {3}` |
| ix | `N - {2}` |
| x | `{1, 2, 3, 4, 5, 6}` |
| xi | `{1, 2, 3, 4}` |

For part xi:

$$
2x + 1 > 10 \Rightarrow x > \frac{9}{2}
$$

So in natural numbers, the set is `{5, 6, 7, ...}`, and its complement is `{1, 2, 3, 4}`.

### 4. Verify De Morgan's Laws

Let:

$$
U = \{1, 2, 3, 4, 5, 6, 7, 8, 9\}
$$

$$
A = \{2, 4, 6, 8\}, \quad B = \{2, 3, 5, 7\}
$$

First:

$$
A \cup B = \{2, 3, 4, 5, 6, 7, 8\}
$$

So:

$$
(A \cup B)' = \{1, 9\}
$$

Also:

$$
A' = \{1, 3, 5, 7, 9\}
$$

and:

$$
B' = \{1, 4, 6, 8, 9\}
$$

Thus:

$$
A' \cap B' = \{1, 9\}
$$

So:

$$
(A \cup B)' = A' \cap B'
$$

Second:

$$
A \cap B = \{2\}
$$

So:

$$
(A \cap B)' = \{1, 3, 4, 5, 6, 7, 8, 9\}
$$

Also:

$$
A' \cup B' = \{1, 3, 4, 5, 6, 7, 8, 9\}
$$

Hence:

$$
(A \cap B)' = A' \cup B'
$$

### 5. Venn Diagram Guidance

For each expression:

| Expression | Shade This Region |
|---|---|
| `(A union B)'` | Outside both A and B |
| `A' intersection B'` | Outside A and outside B; same as outside both |
| `(A intersection B)'` | Everything except the overlap of A and B |
| `A' union B'` | Everything outside A or outside B; same as everything except the overlap |

### 6. Complement Of Triangles With At Least One Angle Different From 60

Let `U` be all triangles in a plane.

Let `A` be the set of triangles with at least one angle different from 60.

Then `A'` is the set of triangles in which no angle is different from 60.

So:

$$
A' = \{\text{equilateral triangles in the plane}\}
$$

### 7. Fill In The Blanks

| Part | Answer |
|---|---|
| i | `U` |
| ii | `A` |
| iii | `empty set` |
| iv | `empty set` |

## 46. Miscellaneous Exercise Guide

### 1. Subset Relations

Given:

$$
A = \{x : x \in R \text{ and } x^2 - 8x + 12 = 0\}
$$

Factor:

$$
x^2 - 8x + 12 = (x - 2)(x - 6)
$$

So:

$$
A = \{2, 6\}
$$

Also:

$$
B = \{2, 4, 6\}
$$

$$
C = \{2, 4, 6, 8, ...\}
$$

$$
D = \{6\}
$$

Subset relations:

$$
D \subseteq A \subseteq B \subseteq C
$$

Also:

$$
D \subseteq B
$$

and:

$$
D \subseteq C
$$

### 2. True Or False With Reason

| Part | Answer | Reason |
|---|---|---|
| i | False | Example: A = `{1}`, B = `{{1}}`; then `1 in A` and `A in B`, but `1 notin B` |
| ii | False | A subset B and B in C does not force A in C |
| iii | True | Subset relation is transitive |
| iv | False | Example: A = `{1}`, B = `{2}`, C = `{1, 2}`; A not subset B and B not subset C is false here if B subset C, so choose carefully; the statement is not generally reliable |
| v | False | If A not subset B, not every element of A must be in B |
| vi | True | If every element of A is in B, anything outside B is outside A |

A cleaner counterexample for part iv:

Let:

$$
A = \{1\}, \quad B = \{2\}, \quad C = \{1\}
$$

Then:

$$
A \nsubseteq B
$$

and:

$$
B \nsubseteq C
$$

but:

$$
A \subseteq C
$$

So the statement is false.

### 3. Show `B = C`

Given:

$$
A \cup B = A \cup C
$$

and:

$$
A \cap B = A \cap C
$$

To show `B = C`, take any `x in B`.

If `x in A`, then:

$$
x \in A \cap B = A \cap C
$$

so `x in C`.

If `x notin A`, then `x in A union B`.

Since:

$$
A \cup B = A \cup C
$$

we get `x in A union C`.

But `x notin A`, so `x in C`.

Thus `B subset C`.

Similarly, `C subset B`.

Therefore:

$$
B = C
$$

### 4. Equivalent Conditions For `A subset B`

The following are equivalent:

$$
A \subseteq B
$$

$$
A - B = \varnothing
$$

$$
A \cup B = B
$$

$$
A \cap B = A
$$

Why:

- If every element of A is already in B, nothing remains in `A - B`.
- Adding A to B does not enlarge B.
- The common part of A and B is all of A.

### 5. If `A subset B`, Then `C - B subset C - A`

Assume:

$$
A \subseteq B
$$

Take:

$$
x \in C - B
$$

Then `x in C` and `x notin B`.

Since `A subset B`, if `x` were in A, then `x` would be in B.

But `x notin B`, so `x notin A`.

Thus `x in C - A`.

Therefore:

$$
C - B \subseteq C - A
$$

### 6. Useful Identities

First:

$$
A = (A \cap B) \cup (A - B)
$$

This says every element of A is either in B or not in B.

Second:

$$
A \cup (B - A) = A \cup B
$$

because adding to A only the part of B outside A gives all elements of A or B.

### 7. Absorption Laws

First:

$$
A \cup (A \cap B) = A
$$

because `A intersection B` is already inside A.

Second:

$$
A \cap (A \cup B) = A
$$

because every element of A is inside `A union B`, and intersection with A gives A back.

### 8. Same Intersection Does Not Force Same Sets

Example:

$$
A = \{1\}, \quad B = \{1, 2\}, \quad C = \{1, 3\}
$$

Then:

$$
A \cap B = \{1\}
$$

and:

$$
A \cap C = \{1\}
$$

but:

$$
B \ne C
$$

### 9. If `A intersection X = B intersection X = empty set` And `A union X = B union X`, Show `A = B`

Since `A intersection X` is empty, A has no common element with X.

So every element of `A union X` is either from A or from X, with no overlap.

Similarly for B and X.

Given:

$$
A \cup X = B \cup X
$$

Take `a in A`.

Then `a in A union X`, so `a in B union X`.

But `a` cannot be in X because `A intersection X` is empty.

Therefore `a in B`.

So:

$$
A \subseteq B
$$

Similarly:

$$
B \subseteq A
$$

Thus:

$$
A = B
$$

### 10. Example With Pairwise Non-Empty Intersections But Empty Triple Intersection

Let:

$$
A = \{1, 2\}, \quad B = \{2, 3\}, \quad C = \{1, 3\}
$$

Then:

$$
A \cap B = \{2\}
$$

$$
B \cap C = \{3\}
$$

$$
A \cap C = \{1\}
$$

All pairwise intersections are non-empty.

But:

$$
A \cap B \cap C = \varnothing
$$

because no element belongs to all three sets.

## 47. Key Laws In One Table

| Law | Formula |
|---|---|
| Union commutative | `A union B = B union A` |
| Intersection commutative | `A intersection B = B intersection A` |
| Union associative | `(A union B) union C = A union (B union C)` |
| Intersection associative | `(A intersection B) intersection C = A intersection (B intersection C)` |
| Union identity | `A union empty set = A` |
| Intersection with universal set | `A intersection U = A` |
| Intersection with empty set | `A intersection empty set = empty set` |
| Union with universal set | `A union U = U` |
| Union idempotent | `A union A = A` |
| Intersection idempotent | `A intersection A = A` |
| Complement union | `A union A' = U` |
| Complement intersection | `A intersection A' = empty set` |
| Double complement | `(A')' = A` |
| De Morgan 1 | `(A union B)' = A' intersection B'` |
| De Morgan 2 | `(A intersection B)' = A' union B'` |
| Absorption 1 | `A union (A intersection B) = A` |
| Absorption 2 | `A intersection (A union B) = A` |

## 48. Common Mistakes And Corrections

| Mistake | Correction |
|---|---|
| Treating `{0}` as empty | `{0}` has one element; empty set has none |
| Repeating elements in a set | Repetition does not change a set |
| Thinking order matters | `{1, 2, 3}` and `{3, 2, 1}` are equal |
| Confusing `in` and `subset` | Elements belong; sets are subsets |
| Assuming `A - B = B - A` | Difference is not commutative |
| Forgetting universal set in complements | Complement is always relative to U |
| Using `(a, b)` as an ordered pair in interval questions | In this chapter, `(a, b)` can mean open interval depending on context |
| Saying all infinite sets can be written in roster form | Many infinite sets, such as real numbers, cannot be listed by a simple pattern |

## 49. Fast Problem-Solving Checklist

When solving a set question:

1. Identify the universal set if complements are involved.
2. Convert set-builder form to roster form if the set is small.
3. Remove repeated elements.
4. Ignore order.
5. For union, collect everything once.
6. For intersection, keep only common elements.
7. For difference `A - B`, start with A and remove elements of B.
8. For complement, start with U and remove elements of A.
9. For subset, check every element of the smaller claimed set.
10. For equality, prove both subset directions or compare simplified rosters.

## 50. Quick Self-Test

1. Is the collection of "beautiful flowers" a set?
2. Write `{x : x in N and x < 5}` in roster form.
3. Is `{1, 2, 2, 3}` equal to `{3, 2, 1}`?
4. Is the empty set a subset of `{1, 2, 3}`?
5. Is `{1}` an element of `{1, 2, 3}`?
6. Is `{1}` a subset of `{1, 2, 3}`?
7. Find `{1, 2, 3} union {3, 4, 5}`.
8. Find `{1, 2, 3} intersection {3, 4, 5}`.
9. Find `{1, 2, 3} - {3, 4, 5}`.
10. If `U = {1, 2, 3, 4, 5}` and `A = {2, 4}`, find `A'`.
11. Write `(-2, 5]` in set-builder form.
12. State De Morgan's first law.

## 51. Self-Test Answers

1. No, because "beautiful" is subjective.
2. `{1, 2, 3, 4}`.
3. Yes.
4. Yes.
5. No. The element is 1, not `{1}`.
6. Yes.
7. `{1, 2, 3, 4, 5}`.
8. `{3}`.
9. `{1, 2}`.
10. `{1, 3, 5}`.
11. `{x : x in R and -2 < x <= 5}`.
12. `(A union B)' = A' intersection B'`.

## 52. Final Chapter Summary

A set is a well-defined collection of objects.

Sets can be represented in roster form or set-builder form.

The empty set has no elements, while a singleton set has exactly one element.

Finite sets have a definite number of elements; infinite sets do not.

Two sets are equal when they have exactly the same elements, regardless of order or repetition.

A subset is a set whose every element belongs to another set.

Intervals are important subsets of real numbers.

A universal set fixes the context for complements.

Union collects elements from either set.

Intersection keeps common elements.

Difference keeps elements in the first set but not the second.

Complement keeps elements in the universal set but outside the given set.

The most important identities include union and intersection laws, complement laws, absorption laws, and De Morgan's laws.

The chapter is foundational because later mathematical ideas are built using set language.
