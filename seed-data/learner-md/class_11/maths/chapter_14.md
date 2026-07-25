# Chapter 14 - Probability

## 1. Chapter Purpose

Probability is the mathematical study of chance. It gives a numerical value to how likely an event is to occur.

In earlier learning, probability is often introduced through simple experiments such as tossing coins, throwing dice, or drawing cards. In this chapter, probability is studied more carefully through the language of sets.

The main idea is:

Every event is a subset of the sample space.

Once you understand that sentence, the rest of the chapter becomes much easier. The words "or", "and", and "not" become set operations.

By the end of this chapter, you should be able to:

- define event as a subset of the sample space
- identify impossible, sure, simple, and compound events
- translate event statements into sets
- use complement, union, intersection, and difference of events
- identify mutually exclusive events
- identify exhaustive events
- state the axioms of probability
- check whether a probability assignment is valid
- calculate probability for equally likely outcomes
- use the addition rule of probability
- calculate probabilities involving complements
- solve problems using cards, dice, coins, committees, and arrangements

## 2. Random Experiment, Sample Space, And Event

A random experiment is an experiment whose outcome cannot be predicted with certainty before it is performed.

Examples:

- tossing a coin
- rolling a die
- drawing a card from a deck
- selecting a student from a class
- choosing a committee from a group

The sample space is the set of all possible outcomes of the experiment.

It is usually denoted by \(S\).

An event is any subset of the sample space.

If:

$$
S = \{HH, HT, TH, TT\}
$$

then the event "exactly one head appears" is:

$$
E = \{HT, TH\}
$$

Since \(E\) is a subset of \(S\), it is an event.

## 3. Event As A Subset

Consider the experiment of tossing a coin two times.

The sample space is:

$$
S = \{HH, HT, TH, TT\}
$$

Now describe different events as subsets of \(S\).

| Description | Event subset |
|---|---|
| exactly two tails | \(\{TT\}\) |
| at least one tail | \(\{HT, TH, TT\}\) |
| at most one head | \(\{HT, TH, TT\}\) |
| second toss is tail | \(\{HT, TT\}\) |
| at most two tails | \(S\) |
| more than two tails | \(\emptyset\) |

Important observation:

- \(S\) itself is an event.
- \(\emptyset\), the empty set, is also an event.

So an event can have no outcome, one outcome, many outcomes, or all outcomes.

## 4. Occurrence Of An Event

An event occurs if the actual outcome belongs to the event.

Suppose a die is thrown.

The sample space is:

$$
S = \{1,2,3,4,5,6\}
$$

Let:

$$
E = \{1,2,3\}
$$

where \(E\) is the event "a number less than 4 appears".

If the outcome is 1, 2, or 3, event \(E\) occurs.

If the outcome is 4, 5, or 6, event \(E\) does not occur.

In general:

- if the actual outcome belongs to \(E\), then \(E\) occurs
- if the actual outcome does not belong to \(E\), then \(E\) does not occur

## 5. Types Of Events

Events are classified according to how many outcomes they contain and how they relate to the sample space.

## 6. Impossible Event

The impossible event is the event that cannot occur.

It is represented by the empty set:

$$
\emptyset
$$

Example:

When a die is thrown, getting a multiple of 7 is impossible.

The sample space is:

$$
S = \{1,2,3,4,5,6\}
$$

There is no multiple of 7 in \(S\).

So the event is:

$$
E = \emptyset
$$

## 7. Sure Event

The sure event is the event that always occurs.

It is the whole sample space:

$$
S
$$

Example:

When a die is thrown, the event "the number is odd or even" is:

$$
\{1,2,3,4,5,6\}
$$

This is the whole sample space, so it is a sure event.

## 8. Simple Event

A simple event has exactly one sample point.

Example:

When two coins are tossed:

$$
S = \{HH, HT, TH, TT\}
$$

The simple events are:

$$
\{HH\},\quad \{HT\},\quad \{TH\},\quad \{TT\}
$$

If a sample space has \(n\) outcomes, it has \(n\) simple events.

## 9. Compound Event

A compound event has more than one sample point.

Example:

When three coins are tossed:

$$
S = \{HHH, HHT, HTH, THH, HTT, THT, TTH, TTT\}
$$

The event "exactly one head appears" is:

$$
E = \{HTT, THT, TTH\}
$$

Since it has more than one outcome, it is a compound event.

## 10. Event Algebra

Because events are sets, we can use set operations on them.

The most important operations are:

| Event phrase | Set notation | Meaning |
|---|---|---|
| not \(A\) | \(A^c\) or \(S-A\) | outcomes not in \(A\) |
| \(A\) or \(B\) | \(A \cup B\) | outcomes in \(A\), in \(B\), or in both |
| \(A\) and \(B\) | \(A \cap B\) | outcomes common to both \(A\) and \(B\) |
| \(A\) but not \(B\) | \(A-B\) | outcomes in \(A\) but not in \(B\) |

The sample space \(S\) acts like the universal set.

## 11. Complement Of An Event

The complement of event \(A\) is the event that \(A\) does not occur.

It is denoted by:

$$
A^c
$$

or:

$$
S-A
$$

Example:

When three coins are tossed:

$$
S = \{HHH, HHT, HTH, THH, HTT, THT, TTH, TTT\}
$$

Let \(A\) be the event "only one tail appears":

$$
A = \{HHT, HTH, THH\}
$$

Then "not \(A\)" is:

$$
A^c = \{HHH, HTT, THT, TTH, TTT\}
$$

Together:

$$
A \cup A^c = S
$$

and:

$$
A \cap A^c = \emptyset
$$

## 12. Event \(A\) Or \(B\)

The event "\(A\) or \(B\)" means:

\(A\) occurs, or \(B\) occurs, or both occur.

In set notation:

$$
A \cup B
$$

For example, if:

$$
A = \{2,3,5\}
$$

and:

$$
B = \{1,3,5\}
$$

then:

$$
A \cup B = \{1,2,3,5\}
$$

The common outcomes are not repeated.

## 13. Event \(A\) And \(B\)

The event "\(A\) and \(B\)" means both events occur together.

In set notation:

$$
A \cap B
$$

Example:

If:

$$
A = \{2,3,5\}
$$

and:

$$
B = \{1,3,5\}
$$

then:

$$
A \cap B = \{3,5\}
$$

Only the common outcomes remain.

## 14. Event \(A\) But Not \(B\)

The event "\(A\) but not \(B\)" means outcomes that are in \(A\), but not in \(B\).

In set notation:

$$
A-B
$$

It can also be written as:

$$
A \cap B^c
$$

Example:

If:

$$
A = \{2,3,5\}
$$

and:

$$
B = \{1,3,5\}
$$

then:

$$
A-B = \{2\}
$$

## 15. Worked Example: Event Algebra With One Die

A die is rolled.

Let:

$$
A = \text{event of getting a prime number}
$$

and:

$$
B = \text{event of getting an odd number}
$$

The sample space is:

$$
S = \{1,2,3,4,5,6\}
$$

Prime numbers on the die:

$$
A = \{2,3,5\}
$$

Odd numbers on the die:

$$
B = \{1,3,5\}
$$

Now:

$$
A \cup B = \{1,2,3,5\}
$$

$$
A \cap B = \{3,5\}
$$

$$
A-B = \{2\}
$$

$$
A^c = \{1,4,6\}
$$

## 16. Mutually Exclusive Events

Two events are mutually exclusive if they cannot occur together.

In set notation:

$$
A \cap B = \emptyset
$$

Example:

When a die is thrown:

$$
A = \{1,3,5\}
$$

is the event "odd number".

$$
B = \{2,4,6\}
$$

is the event "even number".

No number is both odd and even.

So:

$$
A \cap B = \emptyset
$$

Thus, \(A\) and \(B\) are mutually exclusive.

### 16.1 Not Mutually Exclusive

Let:

$$
A = \{1,3,5\}
$$

and:

$$
B = \{1,2,3\}
$$

Here:

$$
A \cap B = \{1,3\}
$$

Since the intersection is not empty, the events are not mutually exclusive.

### 16.2 Important Point

Simple events of the same sample space are always mutually exclusive.

For example, in a die throw:

$$
\{1\}, \{2\}, \{3\}, \{4\}, \{5\}, \{6\}
$$

are mutually exclusive simple events.

## 17. Exhaustive Events

Events are exhaustive if at least one of them must occur whenever the experiment is performed.

If events \(E_1, E_2, \ldots, E_n\) are exhaustive, then:

$$
E_1 \cup E_2 \cup \cdots \cup E_n = S
$$

Example:

For a die:

$$
S = \{1,2,3,4,5,6\}
$$

Let:

$$
A = \{1,2,3\}
$$

$$
B = \{3,4\}
$$

$$
C = \{5,6\}
$$

Then:

$$
A \cup B \cup C = \{1,2,3,4,5,6\} = S
$$

So \(A\), \(B\), and \(C\) are exhaustive.

They are not pairwise mutually exclusive because:

$$
A \cap B = \{3\}
$$

## 18. Mutually Exclusive And Exhaustive Events

Events are mutually exclusive and exhaustive if:

1. no two events can occur together
2. at least one event must occur

In notation:

$$
E_i \cap E_j = \emptyset \quad \text{for } i \ne j
$$

and:

$$
E_1 \cup E_2 \cup \cdots \cup E_n = S
$$

Example:

When three coins are tossed, define:

- \(A\): no head appears
- \(B\): exactly one head appears
- \(C\): at least two heads appear

The sample space is:

$$
S = \{HHH, HHT, HTH, THH, HTT, THT, TTH, TTT\}
$$

Then:

$$
A = \{TTT\}
$$

$$
B = \{HTT, THT, TTH\}
$$

$$
C = \{HHT, HTH, THH, HHH\}
$$

These events cover all outcomes:

$$
A \cup B \cup C = S
$$

They do not overlap.

So they are mutually exclusive and exhaustive.

## 19. Axiomatic Approach To Probability

The axiomatic approach defines probability using rules.

Let \(S\) be the sample space of a random experiment. Probability is a function \(P\) that assigns a number to every event.

For every event \(E\):

$$
0 \le P(E) \le 1
$$

The axioms are:

### 19.1 Axiom 1: Non-Negativity

For every event \(E\):

$$
P(E) \ge 0
$$

A probability cannot be negative.

### 19.2 Axiom 2: Probability Of Sample Space

The sample space is certain to occur.

Therefore:

$$
P(S) = 1
$$

### 19.3 Axiom 3: Addition For Mutually Exclusive Events

If \(E\) and \(F\) are mutually exclusive, then:

$$
P(E \cup F) = P(E) + P(F)
$$

This works because \(E\) and \(F\) do not overlap.

## 20. Probability Of Impossible Event

The probability of the impossible event is zero.

$$
P(\emptyset)=0
$$

Why?

Since \(E\) and \(\emptyset\) are mutually exclusive:

$$
P(E \cup \emptyset) = P(E) + P(\emptyset)
$$

But:

$$
E \cup \emptyset = E
$$

So:

$$
P(E) = P(E) + P(\emptyset)
$$

Hence:

$$
P(\emptyset)=0
$$

## 21. Probability Of Elementary Outcomes

Suppose:

$$
S = \{\omega_1,\omega_2,\ldots,\omega_n\}
$$

where \(\omega_1,\omega_2,\ldots,\omega_n\) are elementary outcomes.

Then:

$$
0 \le P(\omega_i) \le 1
$$

for every \(i\), and:

$$
P(\omega_1)+P(\omega_2)+\cdots+P(\omega_n)=1
$$

For any event \(A\):

$$
P(A)=\sum_{\omega_i \in A}P(\omega_i)
$$

That means the probability of an event is the sum of the probabilities of the elementary outcomes inside it.

## 22. Checking A Probability Assignment

A probability assignment is valid if:

1. every probability is between 0 and 1
2. the total of all outcome probabilities is 1

### 22.1 Valid Assignment Example

Let:

$$
S = \{\omega_1,\omega_2,\omega_3,\omega_4\}
$$

Suppose:

| Outcome | \(\omega_1\) | \(\omega_2\) | \(\omega_3\) | \(\omega_4\) |
|---|---:|---:|---:|---:|
| Probability | 0.2 | 0.3 | 0.1 | 0.4 |

All values lie between 0 and 1.

Also:

$$
0.2+0.3+0.1+0.4 = 1
$$

So this assignment is valid.

### 22.2 Invalid Assignment Example

| Outcome | \(\omega_1\) | \(\omega_2\) | \(\omega_3\) |
|---|---:|---:|---:|
| Probability | 0.5 | 0.7 | -0.2 |

This is invalid because one probability is negative.

Another invalid case:

| Outcome | \(\omega_1\) | \(\omega_2\) | \(\omega_3\) |
|---|---:|---:|---:|
| Probability | 0.5 | 0.7 | 0.3 |

This is invalid because:

$$
0.5+0.7+0.3 = 1.5
$$

The sum is not 1.

## 23. Equally Likely Outcomes

Outcomes are equally likely when each outcome has the same chance of occurring.

If a sample space has \(n\) equally likely outcomes, then each outcome has probability:

$$
\frac{1}{n}
$$

If event \(E\) has \(m\) favourable outcomes, then:

$$
P(E)=\frac{m}{n}
$$

This is usually written as:

$$
P(E)=\frac{\text{Number of outcomes favourable to }E}{\text{Total number of possible outcomes}}
$$

or:

$$
P(E)=\frac{n(E)}{n(S)}
$$

This formula works only when all outcomes are equally likely.

## 24. Probability Of Cards

A standard deck has 52 cards.

Important facts:

| Category | Count |
|---|---:|
| total cards | 52 |
| suits | 4 |
| cards in each suit | 13 |
| red cards | 26 |
| black cards | 26 |
| aces | 4 |
| kings | 4 |
| queens | 4 |
| jacks | 4 |

The suits are:

- hearts
- diamonds
- clubs
- spades

Hearts and diamonds are red.

Clubs and spades are black.

### 24.1 Worked Example: One Card

One card is drawn from a well-shuffled deck of 52 cards.

Find the probability that the card is a diamond.

There are 13 diamonds.

Total outcomes:

$$
52
$$

So:

$$
P(\text{diamond}) = \frac{13}{52} = \frac{1}{4}
$$

### 24.2 Probability Of Not An Ace

There are 4 aces.

So:

$$
P(\text{ace}) = \frac{4}{52} = \frac{1}{13}
$$

Therefore:

$$
P(\text{not ace}) = 1-\frac{1}{13}
$$

$$
P(\text{not ace}) = \frac{12}{13}
$$

### 24.3 Probability Of A Black Card

There are 26 black cards.

$$
P(\text{black card}) = \frac{26}{52} = \frac{1}{2}
$$

### 24.4 Probability Of Not A Diamond

Since:

$$
P(\text{diamond}) = \frac{1}{4}
$$

we get:

$$
P(\text{not diamond}) = 1-\frac{1}{4} = \frac{3}{4}
$$

## 25. Probability With Colored Objects

Suppose a bag contains:

- 4 red discs
- 3 blue discs
- 2 yellow discs

Total discs:

$$
4+3+2=9
$$

If one disc is drawn at random:

$$
P(\text{red})=\frac{4}{9}
$$

$$
P(\text{yellow})=\frac{2}{9}
$$

$$
P(\text{blue})=\frac{3}{9}=\frac{1}{3}
$$

The probability of not blue is:

$$
1-\frac{1}{3}=\frac{2}{3}
$$

The probability of red or blue is:

$$
\frac{4}{9}+\frac{3}{9}=\frac{7}{9}
$$

Red and blue are mutually exclusive because one drawn disc cannot be both red and blue.

## 26. Addition Rule Of Probability

For any two events \(A\) and \(B\):

$$
P(A \cup B)=P(A)+P(B)-P(A \cap B)
$$

This is called the addition rule.

### 26.1 Why We Subtract The Intersection

When we add \(P(A)\) and \(P(B)\), the outcomes common to both \(A\) and \(B\) are counted twice.

So we subtract:

$$
P(A \cap B)
$$

once.

### 26.2 Special Case: Mutually Exclusive Events

If \(A\) and \(B\) are mutually exclusive, then:

$$
A \cap B = \emptyset
$$

so:

$$
P(A \cap B)=0
$$

Therefore:

$$
P(A \cup B)=P(A)+P(B)
$$

## 27. Probability Of Not \(A\)

For any event \(A\):

$$
P(A^c)=1-P(A)
$$

This works because \(A\) and \(A^c\) are mutually exclusive and exhaustive.

That means:

$$
A \cup A^c = S
$$

and:

$$
A \cap A^c = \emptyset
$$

So:

$$
P(A)+P(A^c)=1
$$

## 28. Worked Example: Two Students

Two students, Anil and Ashima, appeared in an examination.

Let:

- \(E\): Anil qualifies
- \(F\): Ashima qualifies

Given:

$$
P(E)=0.05
$$

$$
P(F)=0.10
$$

$$
P(E \cap F)=0.02
$$

### 28.1 Probability That Both Do Not Qualify

Both do not qualify means:

$$
E^c \cap F^c
$$

By De Morgan's law:

$$
E^c \cap F^c = (E \cup F)^c
$$

First find:

$$
P(E \cup F)=P(E)+P(F)-P(E \cap F)
$$

$$
P(E \cup F)=0.05+0.10-0.02=0.13
$$

Therefore:

$$
P(E^c \cap F^c)=1-0.13=0.87
$$

Answer:

$$
\boxed{0.87}
$$

### 28.2 Probability That At Least One Does Not Qualify

At least one does not qualify is the opposite of both qualifying.

So:

$$
P(\text{at least one does not qualify})=1-P(E \cap F)
$$

$$
=1-0.02=0.98
$$

Answer:

$$
\boxed{0.98}
$$

### 28.3 Probability That Only One Qualifies

Only one qualifies means:

- Anil qualifies and Ashima does not
- or Ashima qualifies and Anil does not

So:

$$
(E \cap F^c) \cup (E^c \cap F)
$$

These two events are mutually exclusive.

Now:

$$
P(E \cap F^c)=P(E)-P(E \cap F)
$$

$$
=0.05-0.02=0.03
$$

and:

$$
P(E^c \cap F)=P(F)-P(E \cap F)
$$

$$
=0.10-0.02=0.08
$$

Therefore:

$$
P(\text{only one qualifies})=0.03+0.08=0.11
$$

Answer:

$$
\boxed{0.11}
$$

## 29. Counting Method For Committee Problems

When a committee is selected from a group, use combinations.

The number of ways to choose \(r\) objects from \(n\) objects is:

$$
{}^nC_r = \frac{n!}{r!(n-r)!}
$$

### 29.1 Worked Example: Two Men And Two Women

A committee of 2 persons is selected from 2 men and 2 women.

Total persons:

$$
4
$$

Total committees:

$$
{}^4C_2 = 6
$$

### 29.2 No Man

No man means both selected persons are women.

Number of ways:

$$
{}^2C_2 = 1
$$

Probability:

$$
\frac{1}{6}
$$

### 29.3 One Man

Choose 1 man from 2 and 1 woman from 2:

$$
{}^2C_1 \times {}^2C_1 = 2 \times 2 = 4
$$

Probability:

$$
\frac{4}{6}=\frac{2}{3}
$$

### 29.4 Two Men

Choose both men:

$$
{}^2C_2 = 1
$$

Probability:

$$
\frac{1}{6}
$$

## 30. Probability With Arrangements

When order matters, use arrangements or permutations.

### 30.1 City Visit Example

Veena visits four cities \(A\), \(B\), \(C\), and \(D\) in a random order.

Total possible orders:

$$
4! = 24
$$

### 30.2 Probability That \(A\) Is Before \(B\)

In exactly half of all arrangements, \(A\) comes before \(B\).

So:

$$
P(A \text{ before } B)=\frac{1}{2}
$$

### 30.3 Probability That \(A\) Before \(B\), And \(B\) Before \(C\)

Among \(A\), \(B\), and \(C\), there are:

$$
3! = 6
$$

possible relative orders.

Only one of them is:

$$
A \text{ before } B \text{ before } C
$$

So:

$$
P(A \text{ before } B \text{ before } C)=\frac{1}{6}
$$

### 30.4 Probability That \(A\) Is First And \(B\) Is Last

Fix \(A\) first and \(B\) last.

The remaining two cities \(C\) and \(D\) can be arranged in:

$$
2! = 2
$$

ways.

Total ways:

$$
24
$$

Probability:

$$
\frac{2}{24}=\frac{1}{12}
$$

### 30.5 Probability That \(A\) Is First Or Second

If \(A\) is first, the remaining cities can be arranged in:

$$
3! = 6
$$

ways.

If \(A\) is second, the remaining cities can also be arranged in:

$$
3! = 6
$$

ways.

Favourable ways:

$$
6+6=12
$$

Probability:

$$
\frac{12}{24}=\frac{1}{2}
$$

### 30.6 Probability That \(A\) Is Just Before \(B\)

Treat \(AB\) as one block.

Then the objects are:

$$
AB,\ C,\ D
$$

They can be arranged in:

$$
3! = 6
$$

ways.

Total ways:

$$
24
$$

Probability:

$$
\frac{6}{24}=\frac{1}{4}
$$

## 31. Probability With Card Hands

When several cards are drawn together and order does not matter, use combinations.

### 31.1 Seven-Card Hand

A hand of 7 cards is drawn from a deck of 52 cards.

Total possible hands:

$$
{}^{52}C_7
$$

### 31.2 Probability Of All 4 Kings

If the hand contains all 4 kings, the remaining 3 cards must be chosen from the 48 non-king cards.

Favourable hands:

$$
{}^4C_4 \times {}^{48}C_3
$$

Probability:

$$
\frac{{}^4C_4 \times {}^{48}C_3}{{}^{52}C_7}
$$

### 31.3 Probability Of Exactly 3 Kings

Choose 3 kings from 4 and 4 non-kings from 48:

$$
{}^4C_3 \times {}^{48}C_4
$$

Probability:

$$
\frac{{}^4C_3 \times {}^{48}C_4}{{}^{52}C_7}
$$

### 31.4 Probability Of At Least 3 Kings

At least 3 kings means:

- exactly 3 kings
- or exactly 4 kings

So:

$$
P(\text{at least 3 kings})=P(\text{3 kings})+P(\text{4 kings})
$$

because the two cases are mutually exclusive.

## 32. Addition Rule For Three Events

For three events \(A\), \(B\), and \(C\):

$$
P(A \cup B \cup C)
= P(A)+P(B)+P(C)
-P(A \cap B)-P(A \cap C)-P(B \cap C)
+P(A \cap B \cap C)
$$

Why does the final plus term appear?

When the pairwise intersections are subtracted, the common part of all three events gets subtracted too many times, so it must be added back once.

This is the probability version of inclusion-exclusion.

## 33. Common Word Translations

| Phrase | Mathematical event |
|---|---|
| not \(A\) | \(A^c\) |
| \(A\) or \(B\) | \(A \cup B\) |
| \(A\) and \(B\) | \(A \cap B\) |
| \(A\) but not \(B\) | \(A \cap B^c\) |
| neither \(A\) nor \(B\) | \(A^c \cap B^c\) |
| at least one of \(A,B\) | \(A \cup B\) |
| exactly one of \(A,B\) | \((A \cap B^c)\cup(A^c \cap B)\) |
| both \(A\) and \(B\) | \(A \cap B\) |
| at most one of \(A,B\) | \((A \cap B)^c\) |

## 34. Common Mistakes

### 34.1 Treating "Or" As Exclusive

In probability, "\(A\) or \(B\)" usually means \(A\), or \(B\), or both.

So:

$$
P(A \cup B)=P(A)+P(B)-P(A \cap B)
$$

Use simple addition only when events are mutually exclusive.

### 34.2 Forgetting The Intersection

Wrong:

$$
P(A \cup B)=P(A)+P(B)
$$

Correct in general:

$$
P(A \cup B)=P(A)+P(B)-P(A \cap B)
$$

### 34.3 Confusing Mutually Exclusive With Independent

This chapter uses mutually exclusive events, not independence.

Mutually exclusive means:

$$
A \cap B=\emptyset
$$

It means both events cannot occur together.

### 34.4 Using Equally Likely Formula When Outcomes Are Not Equally Likely

The formula:

$$
P(E)=\frac{n(E)}{n(S)}
$$

requires equally likely outcomes.

If probabilities are already assigned unequally, add the assigned probabilities of favourable outcomes instead.

### 34.5 Misreading "At Least" And "At Most"

At least 2 means 2 or more.

At most 2 means 2 or fewer.

Exactly 2 means only 2.

## 35. Formula Sheet

### 35.1 Event Basics

Event:

$$
E \subseteq S
$$

Impossible event:

$$
\emptyset
$$

Sure event:

$$
S
$$

Complement:

$$
A^c=S-A
$$

### 35.2 Event Operations

Or:

$$
A \text{ or } B = A \cup B
$$

And:

$$
A \text{ and } B = A \cap B
$$

But not:

$$
A \text{ but not } B = A-B=A \cap B^c
$$

### 35.3 Mutually Exclusive

$$
A \cap B=\emptyset
$$

### 35.4 Exhaustive

$$
E_1 \cup E_2 \cup \cdots \cup E_n=S
$$

### 35.5 Probability Axioms

$$
P(E)\ge 0
$$

$$
P(S)=1
$$

If \(E\) and \(F\) are mutually exclusive:

$$
P(E \cup F)=P(E)+P(F)
$$

### 35.6 Equally Likely Outcomes

$$
P(E)=\frac{n(E)}{n(S)}
$$

### 35.7 Complement Rule

$$
P(A^c)=1-P(A)
$$

### 35.8 Addition Rule

$$
P(A \cup B)=P(A)+P(B)-P(A \cap B)
$$

If \(A\) and \(B\) are mutually exclusive:

$$
P(A \cup B)=P(A)+P(B)
$$

### 35.9 Three-Event Rule

$$
P(A \cup B \cup C)
= P(A)+P(B)+P(C)
-P(A \cap B)-P(A \cap C)-P(B \cap C)
+P(A \cap B \cap C)
$$

## 36. Practice Set A: Event Writing

### 36.1 One Die

A die is thrown.

Write each event as a subset of:

$$
S=\{1,2,3,4,5,6\}
$$

1. A number less than 7
2. A number greater than 7
3. A multiple of 3
4. A number less than 4
5. An even number greater than 4
6. A number not less than 3

Answers:

$$
\{1,2,3,4,5,6\}
$$

$$
\emptyset
$$

$$
\{3,6\}
$$

$$
\{1,2,3\}
$$

$$
\{6\}
$$

$$
\{3,4,5,6\}
$$

### 36.2 Three Coins

For three coin tosses:

$$
S=\{HHH,HHT,HTH,THH,HTT,THT,TTH,TTT\}
$$

Write:

1. exactly two heads
2. no head
3. at least one head
4. at most one head

Answers:

$$
\{HHT,HTH,THH\}
$$

$$
\{TTT\}
$$

$$
\{HHH,HHT,HTH,THH,HTT,THT,TTH\}
$$

$$
\{TTT,HTT,THT,TTH\}
$$

## 37. Practice Set B: Mutually Exclusive And Exhaustive

1. In a die throw, are "odd number" and "even number" mutually exclusive?
2. In a die throw, are "odd number" and "number less than 4" mutually exclusive?
3. In three coin tosses, do the events "no head", "exactly one head", and "at least two heads" form a mutually exclusive and exhaustive collection?
4. Give two events that are mutually exclusive but not exhaustive for one die.
5. Give two events that are not mutually exclusive for one die.

Short answers:

1. Yes.
2. No, because 1 and 3 are common.
3. Yes.
4. Example: \(\{1\}\) and \(\{2\}\).
5. Example: \(\{1,3,5\}\) and \(\{1,2,3\}\).

## 38. Practice Set C: Basic Probability

### 38.1 Coin Twice

A coin is tossed twice. Find the probability that at least one tail occurs.

Sample space:

$$
S=\{HH,HT,TH,TT\}
$$

At least one tail:

$$
E=\{HT,TH,TT\}
$$

Probability:

$$
P(E)=\frac{3}{4}
$$

### 38.2 One Die

A die is thrown. Find:

1. probability of a prime number
2. probability of a number greater than or equal to 3
3. probability of a number more than 6

Answers:

Prime numbers:

$$
\{2,3,5\}
$$

$$
P=\frac{3}{6}=\frac{1}{2}
$$

Greater than or equal to 3:

$$
\{3,4,5,6\}
$$

$$
P=\frac{4}{6}=\frac{2}{3}
$$

More than 6:

$$
\emptyset
$$

$$
P=0
$$

## 39. Practice Set D: Addition Rule

### 39.1 Given Probabilities

Let:

$$
P(A)=0.42,\quad P(B)=0.48,\quad P(A \cap B)=0.16
$$

Find:

1. \(P(A^c)\)
2. \(P(B^c)\)
3. \(P(A \cup B)\)

Solutions:

$$
P(A^c)=1-0.42=0.58
$$

$$
P(B^c)=1-0.48=0.52
$$

$$
P(A \cup B)=0.42+0.48-0.16=0.74
$$

### 39.2 Class Subject Choice

In a class, 40 percent study Mathematics, 30 percent study Biology, and 10 percent study both.

Find the probability that a randomly selected student studies Mathematics or Biology.

Let:

$$
P(M)=0.40,\quad P(B)=0.30,\quad P(M \cap B)=0.10
$$

Then:

$$
P(M \cup B)=0.40+0.30-0.10=0.60
$$

Answer:

$$
\boxed{0.60}
$$

## 40. Practice Set E: Complement Method

### 40.1 At Least One Green Marble

A box contains 10 red, 20 blue, and 30 green marbles. Five marbles are drawn.

The probability of at least one green marble is easier by complement.

At least one green means not "no green".

So:

$$
P(\text{at least one green})=1-P(\text{no green})
$$

No green means all 5 are selected from the 30 non-green marbles.

Total marbles:

$$
60
$$

Thus:

$$
P(\text{no green})=\frac{{}^{30}C_5}{{}^{60}C_5}
$$

Therefore:

$$
P(\text{at least one green})=1-\frac{{}^{30}C_5}{{}^{60}C_5}
$$

### 40.2 Lottery

A person chooses 6 different natural numbers from 1 to 20. If the chosen set matches the fixed winning set, the person wins.

Total possible choices:

$$
{}^{20}C_6
$$

Only one choice wins.

Probability of winning:

$$
\frac{1}{{}^{20}C_6}
$$

## 41. Exam Strategy

### 41.1 First Build The Sample Space

Before calculating probability, identify the experiment and sample space.

Ask:

- Are outcomes equally likely?
- Is order important?
- Is replacement involved?
- Are we choosing or arranging?

### 41.2 Translate Words Into Set Operations

Use this pattern:

- "or" means union
- "and" means intersection
- "not" means complement
- "but not" means difference
- "at least one" often uses complement

### 41.3 Use The Complement When Direct Counting Is Long

Events like "at least one" are often easier with:

$$
P(A^c)=1-P(A)
$$

Examples:

- at least one head
- at least one green marble
- at least one correct envelope
- not getting a prize

### 41.4 Check Whether Events Overlap

Before adding probabilities, check:

$$
A \cap B
$$

If the intersection is empty, add directly.

If not, subtract the intersection.

### 41.5 Use Combinations When Order Does Not Matter

Examples:

- drawing a hand of cards
- selecting a committee
- choosing lottery numbers

Use:

$$
{}^nC_r
$$

### 41.6 Use Permutations Or Factorials When Order Matters

Examples:

- city visit order
- finishing order in a race
- lock sequences

Use:

$$
n!
$$

or:

$$
{}^nP_r
$$

## 42. Learner Checklist

Before leaving this chapter, make sure you can:

- write sample space for coin, dice, and card experiments
- express events as subsets
- identify impossible and sure events
- identify simple and compound events
- find complements of events
- calculate \(A \cup B\), \(A \cap B\), and \(A-B\)
- decide whether events are mutually exclusive
- decide whether events are exhaustive
- state the three probability axioms
- check valid probability assignments
- apply \(P(E)=n(E)/n(S)\) for equally likely outcomes
- apply \(P(A^c)=1-P(A)\)
- apply \(P(A \cup B)=P(A)+P(B)-P(A \cap B)\)
- use combinations in selection problems
- use factorials in arrangement problems
- use complement method for "at least one" problems

## 43. One Page Revision

Event:

$$
E \subseteq S
$$

Impossible event:

$$
\emptyset
$$

Sure event:

$$
S
$$

Complement:

$$
A^c=S-A
$$

Or:

$$
A \cup B
$$

And:

$$
A \cap B
$$

But not:

$$
A-B=A \cap B^c
$$

Mutually exclusive:

$$
A \cap B=\emptyset
$$

Exhaustive:

$$
E_1 \cup E_2 \cup \cdots \cup E_n=S
$$

Probability bounds:

$$
0 \le P(E) \le 1
$$

Total probability:

$$
P(S)=1
$$

Equally likely outcomes:

$$
P(E)=\frac{n(E)}{n(S)}
$$

Complement:

$$
P(A^c)=1-P(A)
$$

Addition rule:

$$
P(A \cup B)=P(A)+P(B)-P(A \cap B)
$$

Mutually exclusive addition:

$$
P(A \cup B)=P(A)+P(B)
$$

Three events:

$$
P(A \cup B \cup C)
=P(A)+P(B)+P(C)-P(A \cap B)-P(A \cap C)-P(B \cap C)+P(A \cap B \cap C)
$$

