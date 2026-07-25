# Chapter 6 - Permutations And Combinations

Class 11 Maths learner notes

## 1. Big Picture

Permutations and combinations are tools for counting without listing every possibility.

This chapter answers questions such as:

- How many numbers can be formed from given digits?
- How many ways can people be arranged in seats?
- How many ways can a committee be selected?
- How many card hands are possible?
- How many words can be formed from a set of letters?
- How many arrangements are possible when some objects are identical?

The chapter has one central theme:

> Count the number of choices by understanding whether order matters.

If order matters, you usually use permutations.

If order does not matter, you usually use combinations.

The most important skill is not memorising formulas. The most important skill is deciding which formula is appropriate.

## 2. Learning Goals

By the end of this chapter, a learner should be able to:

- apply the fundamental principle of counting;
- decide when to multiply and when to add cases;
- evaluate factorial expressions quickly;
- count arrangements of distinct objects;
- count arrangements when repetition is allowed;
- count arrangements when some objects are identical;
- count selections where order does not matter;
- connect permutations and combinations;
- solve digit, word, committee, card, and seating problems;
- avoid common overcounting errors.

## 3. Core Vocabulary

### 3.1 Counting

Counting in this chapter does not mean counting one by one.

It means finding the total number of possible outcomes using structure.

Example:

If a student has 3 shirts and 2 trousers, listing all outfits is possible. But if the student has 40 shirts and 25 trousers, listing becomes inefficient. The multiplication principle gives the count immediately.

### 3.2 Arrangement

An arrangement is an ordering of objects.

Example:

The arrangements `ABC` and `BAC` are different because the order of letters is different.

### 3.3 Selection

A selection is a group of objects chosen without caring about order.

Example:

Choosing students A, B, and C for a team is the same selection as choosing C, A, and B.

### 3.4 Permutation

A permutation is an arrangement in a definite order.

Order matters.

Examples:

- passwords
- race positions
- seating arrangements
- letter arrangements
- digit numbers
- assigning posts such as president and secretary

### 3.5 Combination

A combination is a selection.

Order does not matter.

Examples:

- forming a committee
- choosing cards from a deck
- selecting subjects
- choosing team members
- drawing chords between points

## 4. The First Decision: Add Or Multiply

Most counting questions are built from two ideas:

- multiply when tasks happen in sequence;
- add when cases are separate alternatives.

### 4.1 Multiply For Successive Choices

If one choice can be made in `m` ways and after that a second choice can be made in `n` ways, then both choices together can be made in:

$$
m \times n
$$

ways.

For three successive choices:

$$
m \times n \times p
$$

ways.

### 4.2 Add For Separate Cases

If a result can happen by case A or case B, and the cases do not overlap, add their counts.

If case A has `m` outcomes and case B has `n` outcomes, total outcomes:

$$
m + n
$$

This is common in questions with words such as:

- either
- at least
- at most
- exactly
- begins with
- ends with
- vowels together
- vowels not together

### 4.3 A Quick Test

Ask:

1. Am I doing one step and then another step?

Use multiplication.

2. Am I splitting the problem into separate possible cases?

Use addition after counting each case.

## 5. Fundamental Principle Of Counting

If an event can occur in `m` ways, and after that another event can occur in `n` ways, then the two events in the given order can occur in:

$$
m n
$$

ways.

If there are several stages, multiply the number of choices at each stage.

### 5.1 Example: Outfits

Suppose Mohan has:

- 3 pants;
- 2 shirts.

Choosing an outfit means:

1. choose a pant;
2. choose a shirt.

Number of outfits:

$$
3 \times 2 = 6
$$

### 5.2 Example: Bags, Boxes, And Bottles

Suppose Sabnam has:

- 2 school bags;
- 3 tiffin boxes;
- 2 water bottles.

She chooses one of each.

Number of ways:

$$
2 \times 3 \times 2 = 12
$$

### 5.3 Example: Four Letter Words From ROSE Without Repetition

Letters: R, O, S, E.

We need 4 letter arrangements, using every letter once.

Choices:

- first place: 4 options;
- second place: 3 options;
- third place: 2 options;
- fourth place: 1 option.

Total:

$$
4 \times 3 \times 2 \times 1 = 24
$$

### 5.4 Same Example With Repetition

If repetition is allowed, each place has 4 choices.

Total:

$$
4 \times 4 \times 4 \times 4 = 4^4 = 256
$$

### 5.5 Important Lesson

Before counting, ask:

- Can objects repeat?
- Does each stage have the same number of choices?
- Does an earlier choice reduce later choices?

If repetition is not allowed, choices usually decrease.

If repetition is allowed, choices often stay the same.

## 6. Digit Problems

Digit problems are common because each place value is a position.

### 6.1 Two Digit Even Numbers From 1, 2, 3, 4, 5 With Repetition

Digits: 1, 2, 3, 4, 5.

The number must be even, so the units digit must be 2 or 4.

Units place:

$$
2
$$

choices.

Tens place:

$$
5
$$

choices, because repetition is allowed.

Total:

$$
5 \times 2 = 10
$$

Notice that we counted the units place first because it has a restriction.

### 6.2 Count Restricted Positions First

In digit problems, count the most restricted position early.

Examples:

- even number: units digit restricted;
- number divisible by 5: units digit restricted;
- number greater than a given value: first digit may be restricted;
- number cannot begin with 0: first digit restricted;
- repetition not allowed: choices decrease after each use.

### 6.3 Three Digit Numbers From 0, 1, 2, 3, 4, 5 Without Repetition

The first digit cannot be 0.

Hundreds place:

$$
5
$$

choices, namely 1, 2, 3, 4, 5.

Tens place:

$$
5
$$

choices, because 0 can now be used but the first digit cannot repeat.

Units place:

$$
4
$$

choices.

Total:

$$
5 \times 5 \times 4 = 100
$$

## 7. Signals And Arrangements

Suppose 5 different flags are available, and a signal is made by arranging flags one below another.

If a signal requires exactly 2 flags, then:

$$
5 \times 4 = 20
$$

If a signal may use at least 2 flags, then it can use:

- 2 flags;
- 3 flags;
- 4 flags;
- 5 flags.

Count each case:

$$
5P2 = 5 \times 4 = 20
$$

$$
5P3 = 5 \times 4 \times 3 = 60
$$

$$
5P4 = 5 \times 4 \times 3 \times 2 = 120
$$

$$
5P5 = 5 \times 4 \times 3 \times 2 \times 1 = 120
$$

Total:

$$
20 + 60 + 120 + 120 = 320
$$

## 8. Factorial Notation

For a positive integer `n`, factorial `n!` means:

$$
n! = n(n - 1)(n - 2)\cdots 3 \times 2 \times 1
$$

Examples:

$$
5! = 5 \times 4 \times 3 \times 2 \times 1 = 120
$$

$$
7! = 7 \times 6 \times 5 \times 4 \times 3 \times 2 \times 1 = 5040
$$

By definition:

$$
0! = 1
$$

### 8.1 Why 0! Is 1

In counting, `0!` represents the number of ways to arrange nothing.

There is exactly one way to arrange nothing: do nothing.

This definition also keeps formulas consistent.

For example:

$$
P(n, n) = \frac{n!}{(n - n)!} = \frac{n!}{0!}
$$

Since arranging all `n` objects must give `n!`, we need:

$$
0! = 1
$$

### 8.2 Useful Factorial Expansions

Factorials can be stopped wherever needed.

$$
8! = 8 \times 7 \times 6!
$$

$$
10! = 10 \times 9 \times 8!
$$

$$
n! = n(n - 1)!
$$

$$
n! = n(n - 1)(n - 2)!
$$

### 8.3 Simplifying Factorial Fractions

Example:

$$
\frac{7!}{5!}
$$

Expand only until the denominator appears:

$$
\frac{7!}{5!} = \frac{7 \times 6 \times 5!}{5!}
$$

Cancel:

$$
\frac{7!}{5!} = 7 \times 6 = 42
$$

Example:

$$
\frac{12!}{10! \times 2!}
$$

Since:

$$
12! = 12 \times 11 \times 10!
$$

we get:

$$
\frac{12!}{10! \times 2!}
= \frac{12 \times 11 \times 10!}{10! \times 2}
= 66
$$

## 9. Permutations Of Distinct Objects

Suppose there are `n` distinct objects and we arrange `r` of them.

The first position can be filled in `n` ways.

The second position can be filled in `n - 1` ways.

The third position can be filled in `n - 2` ways.

Continue until `r` positions are filled.

So:

$$
P(n, r) = n(n - 1)(n - 2)\cdots(n - r + 1)
$$

Using factorials:

$$
P(n, r) = \frac{n!}{(n - r)!}
$$

where:

$$
0 \le r \le n
$$

### 9.1 Meaning Of The Formula

`P(n, r)` means:

> number of ordered arrangements of `r` objects chosen from `n` distinct objects.

The word ordered is essential.

### 9.2 Special Cases

Arranging all `n` objects:

$$
P(n, n) = n!
$$

Arranging no object:

$$
P(n, 0) = 1
$$

### 9.3 Example: Three Letter Words From NUMBER

The word NUMBER has 6 distinct letters.

Three letter arrangements without repetition:

$$
P(6, 3) = 6 \times 5 \times 4 = 120
$$

If repetition is allowed:

$$
6^3 = 216
$$

### 9.4 Example: Chairman And Vice Chairman

There are 12 persons. A chairman and vice chairman are to be chosen. One person cannot hold both posts.

Order matters because chairman and vice chairman are different posts.

Number of ways:

$$
P(12, 2) = 12 \times 11 = 132
$$

## 10. Permutations With Repetition Allowed

If `r` positions are to be filled using `n` distinct objects, and repetition is allowed, each position has `n` choices.

Number of arrangements:

$$
n^r
$$

Example:

4 digit codes using digits 0 to 9 with repetition allowed:

$$
10^4 = 10000
$$

Example:

5 letter strings from the English alphabet with repetition allowed:

$$
26^5
$$

## 11. Permutations With Identical Objects

When some objects are identical, the basic `n!` count overcounts.

### 11.1 Example: ROOT

Letters: R, O, O, T.

There are 4 letters, but two O's are identical.

If the two O's were different, there would be:

$$
4!
$$

arrangements.

But each visible arrangement has been counted:

$$
2!
$$

times because the two O's can be interchanged without changing the word.

Therefore:

$$
\frac{4!}{2!} = \frac{24}{2} = 12
$$

### 11.2 General Formula

If there are `n` objects in total:

- `p_1` are identical of one kind;
- `p_2` are identical of another kind;
- continuing up to `p_k`.

Then the number of distinct arrangements is:

$$
\frac{n!}{p_1!p_2!\cdots p_k!}
$$

### 11.3 Example: ALLAHABAD

The word ALLAHABAD has 9 letters.

Counts:

- A appears 4 times;
- L appears 2 times;
- H, B, D appear once each.

Number of arrangements:

$$
\frac{9!}{4!2!}
$$

Calculate:

$$
\frac{9!}{4!2!}
= \frac{9 \times 8 \times 7 \times 6 \times 5}{2}
= 7560
$$

### 11.4 Example: INDEPENDENCE

The word INDEPENDENCE has 12 letters.

Counts:

- E appears 4 times;
- N appears 3 times;
- D appears 2 times;
- I, P, C appear once each.

Total arrangements:

$$
\frac{12!}{4!3!2!} = 1663200
$$

Arrangements starting with P:

Fix P in the first position. Arrange the remaining 11 letters.

$$
\frac{11!}{4!3!2!} = 138600
$$

Arrangements beginning with I and ending with P:

Fix I at the beginning and P at the end. Arrange the remaining 10 letters.

$$
\frac{10!}{4!3!2!} = 12600
$$

## 12. Vowels Together And Not Together

Many word arrangement questions ask whether vowels must stay together.

### 12.1 Block Method

When some objects must occur together, treat them as one block.

Then:

1. arrange the block along with the other objects;
2. arrange the objects inside the block.

Multiply the two counts.

### 12.2 Example: DAUGHTER With Vowels Together

The word DAUGHTER has 8 distinct letters.

Vowels: A, U, E.

Consonants: D, G, H, T, R.

Treat the vowel group as one block:

$$
(AUE)
$$

Now there are 6 objects:

- the vowel block;
- five consonants.

Arrange these 6 objects:

$$
6!
$$

Arrange the vowels inside the block:

$$
3!
$$

Total:

$$
6! \times 3! = 720 \times 6 = 4320
$$

### 12.3 Same Word With Vowels Not All Together

Total arrangements of 8 distinct letters:

$$
8!
$$

Arrangements where all vowels are together:

$$
6! \times 3!
$$

Therefore, arrangements where all vowels are not together:

$$
8! - 6! \times 3!
$$

$$
40320 - 4320 = 36000
$$

### 12.4 Complement Method

For "not all together" questions, it is often easier to use:

$$
\text{required count} = \text{total count} - \text{bad count}
$$

Here, the bad count is the count where the forbidden condition happens.

## 13. Combinations

A combination is a selection where order does not matter.

Example:

If X and Y are selected for a team, the team XY is the same as YX.

So we do not count both.

### 13.1 Combination Formula

The number of ways to choose `r` objects from `n` distinct objects is:

$$
C(n, r) = \frac{n!}{r!(n-r)!}
$$

where:

$$
0 \le r \le n
$$

### 13.2 Connection Between Permutations And Combinations

First choose `r` objects from `n`.

Then arrange those `r` objects.

This gives:

$$
P(n, r) = C(n, r) \times r!
$$

Therefore:

$$
C(n, r) = \frac{P(n, r)}{r!}
$$

Using:

$$
P(n, r) = \frac{n!}{(n-r)!}
$$

we get:

$$
C(n, r) = \frac{n!}{r!(n-r)!}
$$

### 13.3 Why Divide By r!

When selecting a group of `r` objects, the same group can be arranged in:

$$
r!
$$

orders.

Permutations count all these orders.

Combinations count the group once.

So permutations must be divided by `r!` to get combinations.

## 14. Properties Of Combinations

### 14.1 Selecting r Is Same As Rejecting n-r

Choosing `r` objects from `n` leaves out `n - r` objects.

So:

$$
C(n, r) = C(n, n-r)
$$

Example:

Choosing 2 students from 10 is equivalent to rejecting 8 students from 10.

$$
C(10, 2) = C(10, 8)
$$

### 14.2 Boundary Values

Choosing none:

$$
C(n, 0) = 1
$$

Choosing all:

$$
C(n, n) = 1
$$

Choosing one:

$$
C(n, 1) = n
$$

Choosing all but one:

$$
C(n, n-1) = n
$$

### 14.3 Pascal Identity

The chapter includes the identity:

$$
C(n, r) + C(n, r-1) = C(n+1, r)
$$

This can be understood by separating cases.

Suppose there are `n + 1` people and one particular person is named A. To choose `r` people:

- either A is not selected, so choose all `r` from the remaining `n` people;
- or A is selected, so choose the other `r - 1` from the remaining `n` people.

Therefore:

$$
C(n+1, r) = C(n, r) + C(n, r-1)
$$

## 15. Permutation Or Combination: Decision Table

| Situation | Does order matter? | Use |
|---|---:|---|
| Seating people in a row | Yes | Permutation |
| Making a number from digits | Yes | Permutation or multiplication |
| Assigning chairman and vice chairman | Yes | Permutation |
| Selecting a committee | No | Combination |
| Choosing cards | No | Combination |
| Arranging letters of a word | Yes | Permutation |
| Selecting letters before arranging them | Selection first, then arrangement | Combination and permutation |
| Drawing a chord between two points | No | Combination |
| Choosing team members | No | Combination |

## 16. Solved Examples

### Example 1: Three Digit Numbers From 1, 2, 3, 4, 5

Find the number of 3 digit numbers that can be formed.

#### Case A: Repetition Allowed

Each of the three positions has 5 choices.

$$
5 \times 5 \times 5 = 125
$$

#### Case B: Repetition Not Allowed

Choices decrease:

$$
5 \times 4 \times 3 = 60
$$

### Example 2: Four Letter Codes From First 10 English Letters

No letter is repeated.

There are 10 choices for the first position, then 9, then 8, then 7.

$$
P(10, 4) = 10 \times 9 \times 8 \times 7 = 5040
$$

### Example 3: Five Digit Telephone Numbers Starting With 67

Digits 0 to 9 are available. Each number starts with 67. No digit appears more than once.

The first two positions are fixed:

$$
67
$$

Digits 6 and 7 are already used.

Remaining positions: 3.

Remaining available digits: 8.

Number of ways:

$$
8 \times 7 \times 6 = 336
$$

### Example 4: Coin Tossed Three Times

Each toss has 2 outcomes: H or T.

For 3 tosses:

$$
2^3 = 8
$$

### Example 5: Four Digit Numbers From 1 To 9 Without Repetition

There are 9 digits and 4 positions.

$$
P(9, 4) = 9 \times 8 \times 7 \times 6 = 3024
$$

### Example 6: Three Digit Even Numbers From 1, 2, 3, 4, 6, 7

No digit is repeated.

The units digit must be even.

Even choices: 2, 4, 6.

Units place:

$$
3
$$

choices.

After choosing the units digit, 5 digits remain.

Hundreds place:

$$
5
$$

choices.

Tens place:

$$
4
$$

choices.

Total:

$$
3 \times 5 \times 4 = 60
$$

### Example 7: Find n If P(n-1, 3) : P(n, 4) = 1 : 9

Given:

$$
\frac{P(n-1,3)}{P(n,4)} = \frac{1}{9}
$$

Use:

$$
P(n-1,3) = (n-1)(n-2)(n-3)
$$

and:

$$
P(n,4) = n(n-1)(n-2)(n-3)
$$

So:

$$
\frac{P(n-1,3)}{P(n,4)}
= \frac{1}{n}
$$

Therefore:

$$
\frac{1}{n} = \frac{1}{9}
$$

Hence:

$$
n = 9
$$

### Example 8: Arrangements Of EQUATION

The word EQUATION has 8 distinct letters.

Using all letters exactly once:

$$
8! = 40320
$$

### Example 9: Arrangements Of MONDAY

The word MONDAY has 6 distinct letters.

#### Four Letters At A Time

$$
P(6, 4) = 6 \times 5 \times 4 \times 3 = 360
$$

#### All Letters At A Time

$$
6! = 720
$$

#### All Letters Used And First Letter Is A Vowel

Vowels in MONDAY: O, A.

Choose first letter:

$$
2
$$

Arrange remaining 5 letters:

$$
5!
$$

Total:

$$
2 \times 5! = 240
$$

### Example 10: MISSISSIPPI With Four I's Not Together

The word MISSISSIPPI has 11 letters.

Counts:

- M appears 1 time;
- I appears 4 times;
- S appears 4 times;
- P appears 2 times.

Total arrangements:

$$
\frac{11!}{4!4!2!}
$$

Arrangements where all four I's are together:

Treat `IIII` as one block.

Then objects are:

- one I-block;
- M;
- four S's;
- two P's.

Total objects: 8.

Repeated objects: 4 S's and 2 P's.

Bad arrangements:

$$
\frac{8!}{4!2!}
$$

Required count:

$$
\frac{11!}{4!4!2!} - \frac{8!}{4!2!}
$$

Calculate:

$$
\frac{11!}{4!4!2!} = 34650
$$

$$
\frac{8!}{4!2!} = 840
$$

So:

$$
34650 - 840 = 33810
$$

### Example 11: Permutations Of PERMUTATIONS Starting With P And Ending With S

The word PERMUTATIONS has 12 letters.

Counts:

- P appears 1 time;
- E appears 1 time;
- R appears 1 time;
- M appears 1 time;
- U appears 1 time;
- A appears 1 time;
- I appears 1 time;
- O appears 1 time;
- N appears 1 time;
- S appears 1 time;
- T appears 2 times.

Fix P at the start and S at the end.

Arrange the remaining 10 letters, with T repeated twice:

$$
\frac{10!}{2!} = 1814400
$$

### Example 12: A Committee Of 3 From 2 Men And 3 Women

There are 5 people total.

Number of committees of 3:

$$
C(5,3) = 10
$$

Committees with 1 man and 2 women:

$$
C(2,1) \times C(3,2)
$$

$$
2 \times 3 = 6
$$

### Example 13: Chords Through 21 Points On A Circle

A chord is determined by choosing 2 points.

Order does not matter.

Number of chords:

$$
C(21,2) = \frac{21 \times 20}{2} = 210
$$

### Example 14: Team Of 3 Boys And 3 Girls

Choose from 5 boys and 4 girls.

Choose boys:

$$
C(5,3) = 10
$$

Choose girls:

$$
C(4,3) = 4
$$

Total:

$$
10 \times 4 = 40
$$

### Example 15: Selecting Balls By Colour

There are:

- 6 red balls;
- 5 white balls;
- 5 blue balls.

Select 9 balls, with 3 of each colour.

Number of ways:

$$
C(6,3) \times C(5,3) \times C(5,3)
$$

$$
20 \times 10 \times 10 = 2000
$$

### Example 16: One Ace In A 5 Card Hand

A deck has 52 cards.

There are 4 aces and 48 non-aces.

A 5 card hand with exactly one ace:

$$
C(4,1) \times C(48,4)
$$

### Example 17: A Cricket Team With Exactly 4 Bowlers

There are 17 players, of whom 5 can bowl.

Choose an 11 player team with exactly 4 bowlers.

Choose bowlers:

$$
C(5,4)
$$

Choose remaining players from non-bowlers:

There are:

$$
17 - 5 = 12
$$

non-bowlers.

Need:

$$
11 - 4 = 7
$$

non-bowlers.

Total:

$$
C(5,4) \times C(12,7)
$$

### Example 18: Words From INVOLUTE With 3 Vowels And 2 Consonants

Vowels: I, O, U, E.

Consonants: N, V, L, T.

Choose 3 vowels:

$$
C(4,3) = 4
$$

Choose 2 consonants:

$$
C(4,2) = 6
$$

Each chosen group has 5 distinct letters, which can be arranged in:

$$
5!
$$

ways.

Total:

$$
C(4,3) \times C(4,2) \times 5!
$$

$$
4 \times 6 \times 120 = 2880
$$

### Example 19: Team From 4 Girls And 7 Boys

Choose a 5 member team.

#### No Girl

Choose all 5 from boys:

$$
C(7,5) = 21
$$

#### At Least One Boy And One Girl

Use complement.

Total teams:

$$
C(11,5)
$$

Invalid teams:

- all boys: `C(7,5)`;
- all girls: impossible, because only 4 girls are available.

Required:

$$
C(11,5) - C(7,5)
$$

$$
462 - 21 = 441
$$

#### At Least 3 Girls

Possible cases:

- 3 girls and 2 boys;
- 4 girls and 1 boy.

Total:

$$
C(4,3)C(7,2) + C(4,4)C(7,1)
$$

$$
4 \times 21 + 1 \times 7 = 91
$$

### Example 20: Dictionary Order Of AGAIN

Letters: A, A, G, I, N.

Total arrangements:

$$
\frac{5!}{2!} = 60
$$

Alphabetical order of letters:

$$
A, A, G, I, N
$$

Words starting with A:

Fix A first. Remaining letters are A, G, I, N, all distinct.

$$
4! = 24
$$

Words starting with G:

Fix G first. Remaining letters are A, A, I, N.

$$
\frac{4!}{2!} = 12
$$

Words starting with I:

Fix I first. Remaining letters are A, A, G, N.

$$
\frac{4!}{2!} = 12
$$

Total before words starting with N:

$$
24 + 12 + 12 = 48
$$

The 49th word is the first word starting with N:

$$
NAAGI
$$

The 50th word is:

$$
NAAIG
$$

### Example 21: Numbers Greater Than 1000000

Digits: 1, 2, 0, 2, 4, 2, 4.

All numbers formed use all 7 digits.

Total 7 digit arrangements ignoring leading zero:

First count all arrangements:

$$
\frac{7!}{3!2!} = 420
$$

Invalid arrangements have 0 in the first place.

Fix 0 at the first place. Arrange remaining digits:

$$
1,2,2,2,4,4
$$

Number of invalid arrangements:

$$
\frac{6!}{3!2!} = 60
$$

Required:

$$
420 - 60 = 360
$$

### Example 22: Seating 5 Girls And 3 Boys With No Two Boys Together

First arrange the 5 girls:

$$
5!
$$

This creates 6 gaps:

$$
\_G\_G\_G\_G\_G\_
$$

To keep boys separated, place the 3 boys in 3 of these 6 gaps.

Since boys are distinct, arrange them in selected gaps:

$$
P(6,3)
$$

Total:

$$
5! \times P(6,3)
$$

$$
120 \times 120 = 14400
$$

## 17. Common Mistakes

### Mistake 1: Using Combination When Order Matters

Question:

How many ways can a president and secretary be selected from 10 students?

Wrong idea:

Use `C(10,2)`.

Why wrong:

President A and secretary B is not the same as president B and secretary A.

Correct:

$$
P(10,2) = 10 \times 9 = 90
$$

### Mistake 2: Forgetting That A Number Cannot Start With 0

When forming 3 digit numbers from digits including 0, the hundreds place cannot be 0.

Always handle the first digit carefully.

### Mistake 3: Treating Identical Letters As Distinct

The word ALLAHABAD has repeated letters.

Using `9!` overcounts because A's and L's are identical.

Correct:

$$
\frac{9!}{4!2!}
$$

### Mistake 4: Counting Overlapping Cases Twice

When using addition, make sure cases do not overlap.

If cases overlap, subtract the overlap or choose a better case split.

### Mistake 5: Misreading "At Least"

"At least 3 girls" means:

- 3 girls;
- 4 girls;
- 5 girls if possible;
- and so on.

Do not count only exactly 3.

### Mistake 6: Forgetting Internal Arrangement Of A Block

When vowels are together, first treat vowels as a block.

But after arranging the block, also arrange the vowels inside the block.

## 18. Strategy Bank

### 18.1 Restricted Position First

Use this for digit problems.

Examples:

- last digit must be even;
- first digit cannot be 0;
- last digit must be 0 or 5;
- first letter must be a vowel.

### 18.2 Block Method

Use this when objects must remain together.

Examples:

- vowels together;
- all S's together;
- two friends sit together;
- letters P and S stay together.

### 18.3 Gap Method

Use this when objects must not be together.

Examples:

- no two boys sit together;
- no two vowels are adjacent;
- selected objects must be separated.

### 18.4 Complement Method

Use this when direct counting is hard.

Examples:

- not all vowels together;
- at least one girl;
- at least one ace;
- no repeated condition violation.

Formula:

$$
\text{desired count} = \text{total count} - \text{undesired count}
$$

### 18.5 Case Method

Use this when a condition can occur in different exact ways.

Example:

At least 3 girls in a 5 member team from 4 girls and 7 boys:

- exactly 3 girls;
- exactly 4 girls.

## 19. Exercise Set A: Fundamental Counting

### Question A1

How many 3 digit numbers can be formed from 1, 2, 3, 4, 5 if repetition is allowed?

Answer:

$$
5^3 = 125
$$

### Question A2

How many 3 digit numbers can be formed from 1, 2, 3, 4, 5 if repetition is not allowed?

Answer:

$$
5 \times 4 \times 3 = 60
$$

### Question A3

How many 3 digit even numbers can be formed from 1, 2, 3, 4, 5, 6 if repetition is allowed?

Answer:

Units digit has 3 choices: 2, 4, 6.

Other two positions have 6 choices each.

$$
6 \times 6 \times 3 = 108
$$

### Question A4

How many 4 letter codes can be formed using the first 10 letters of the English alphabet if no letter repeats?

Answer:

$$
P(10,4) = 10 \times 9 \times 8 \times 7 = 5040
$$

### Question A5

A coin is tossed 3 times. How many possible outcomes are there?

Answer:

$$
2^3 = 8
$$

## 20. Exercise Set B: Factorials And Permutations

### Question B1

Evaluate:

$$
8!
$$

Answer:

$$
8! = 40320
$$

### Question B2

Evaluate:

$$
4! - 3!
$$

Answer:

$$
24 - 6 = 18
$$

### Question B3

Compute:

$$
\frac{8!}{6!2!}
$$

Answer:

$$
\frac{8 \times 7 \times 6!}{6! \times 2} = 28
$$

### Question B4

Find:

$$
P(9,5)
$$

Answer:

$$
P(9,5) = 9 \times 8 \times 7 \times 6 \times 5 = 15120
$$

### Question B5

How many words can be formed using all letters of EQUATION once?

Answer:

All 8 letters are distinct.

$$
8! = 40320
$$

## 21. Exercise Set C: Repeated Objects

### Question C1

How many distinct arrangements can be made from the letters of ROOT?

Answer:

$$
\frac{4!}{2!} = 12
$$

### Question C2

How many arrangements can be made from the letters of ALLAHABAD?

Answer:

$$
\frac{9!}{4!2!} = 7560
$$

### Question C3

How many arrangements can be made from the letters of MISSISSIPPI?

Answer:

Letters:

- I appears 4 times;
- S appears 4 times;
- P appears 2 times;
- M appears 1 time.

$$
\frac{11!}{4!4!2!} = 34650
$$

### Question C4

How many arrangements of INDEPENDENCE start with P?

Answer:

Fix P first.

Arrange remaining 11 letters:

$$
\frac{11!}{4!3!2!} = 138600
$$

## 22. Exercise Set D: Combinations

### Question D1

If:

$$
C(n,8) = C(n,2)
$$

find `n`.

Answer:

Use:

$$
C(n,r) = C(n,n-r)
$$

So:

$$
8 = n - 2
$$

Hence:

$$
n = 10
$$

Then:

$$
C(n,2) = C(10,2) = 45
$$

### Question D2

How many chords can be drawn through 21 points on a circle?

Answer:

Choose 2 points:

$$
C(21,2) = 210
$$

### Question D3

In how many ways can a team of 3 boys and 3 girls be selected from 5 boys and 4 girls?

Answer:

$$
C(5,3)C(4,3) = 10 \times 4 = 40
$$

### Question D4

A bag contains 5 black and 6 red balls. In how many ways can 2 black and 3 red balls be selected?

Answer:

$$
C(5,2)C(6,3)
$$

$$
10 \times 20 = 200
$$

### Question D5

A student chooses 5 courses from 9 available courses. Two specific courses are compulsory. How many choices are possible?

Answer:

The two compulsory courses are already chosen.

Choose 3 more from the remaining 7:

$$
C(7,3) = 35
$$

## 23. Exercise Set E: Mixed Problems

### Question E1

How many words can be formed from DAUGHTER using exactly 2 vowels and 3 consonants?

Answer:

DAUGHTER has 3 vowels: A, U, E.

It has 5 consonants: D, G, H, T, R.

Choose 2 vowels:

$$
C(3,2) = 3
$$

Choose 3 consonants:

$$
C(5,3) = 10
$$

Arrange 5 chosen letters:

$$
5! = 120
$$

Total:

$$
3 \times 10 \times 120 = 3600
$$

### Question E2

How many 6 digit numbers can be formed from 0, 1, 3, 5, 7, 9 that are divisible by 10, with no digit repeated?

Answer:

Divisible by 10 means last digit is 0.

Fix 0 in the units place.

Arrange the remaining 5 digits in the first 5 positions:

$$
5! = 120
$$

### Question E3

How many arrangements of ASSASSINATION have all S's together?

Answer:

ASSASSINATION has 13 letters.

Counts:

- A appears 3 times;
- S appears 4 times;
- I appears 2 times;
- N appears 2 times;
- T appears 1 time;
- O appears 1 time.

Treat all four S's as one block.

Objects to arrange:

- S-block;
- 3 A's;
- 2 I's;
- 2 N's;
- T;
- O.

Total objects:

$$
10
$$

Repeated objects:

- 3 A's;
- 2 I's;
- 2 N's.

Number of arrangements:

$$
\frac{10!}{3!2!2!}
$$

$$
151200
$$

### Question E4

There are 5 men and 4 women. They are seated in a row so that women occupy even places. How many arrangements are possible?

Answer:

There are 9 seats.

Even positions: 2, 4, 6, 8.

Place 4 women in these 4 positions:

$$
4!
$$

Place 5 men in the remaining 5 positions:

$$
5!
$$

Total:

$$
4! \times 5! = 2880
$$

### Question E5

A class has 25 students. An excursion party of 10 is to be chosen. Three particular students decide that either all three join or none of them join. How many ways are possible?

Answer:

Split into two cases.

Case 1: all three join.

Then choose 7 more from the remaining 22:

$$
C(22,7)
$$

Case 2: none of the three joins.

Choose all 10 from the remaining 22:

$$
C(22,10)
$$

Total:

$$
C(22,7) + C(22,10)
$$

## 24. High-Quality Problem Solving Template

Use this template before applying a formula.

### Step 1: Identify Objects

What is being counted?

Examples:

- digits;
- letters;
- people;
- balls;
- cards;
- seats;
- posts.

### Step 2: Decide Order

Ask:

> If I swap two chosen objects, do I get a new outcome?

If yes, order matters.

If no, order does not matter.

### Step 3: Check Repetition

Ask:

- Can the same digit or letter be used again?
- Are some objects identical?
- Does choosing one object remove it from later choices?

### Step 4: Find Restrictions

Look for:

- first position restrictions;
- last position restrictions;
- together restrictions;
- not together restrictions;
- exact number of a type;
- at least or at most conditions.

### Step 5: Choose Method

Use:

- multiplication principle;
- permutation;
- combination;
- block method;
- gap method;
- complement method;
- case splitting.

### Step 6: Compute Carefully

Simplify factorials before multiplying.

This reduces arithmetic errors.

## 25. Formula Sheet

### Fundamental Counting Principle

$$
\text{total ways} = m_1m_2m_3\cdots m_k
$$

### Factorial

$$
n! = n(n-1)(n-2)\cdots 2 \times 1
$$

$$
0! = 1
$$

### Permutation Without Repetition

$$
P(n,r) = \frac{n!}{(n-r)!}
$$

### Permutation With Repetition

$$
n^r
$$

### Permutation With Identical Objects

$$
\frac{n!}{p_1!p_2!\cdots p_k!}
$$

### Combination

$$
C(n,r) = \frac{n!}{r!(n-r)!}
$$

### Permutation And Combination Connection

$$
P(n,r) = C(n,r)r!
$$

### Symmetry Of Combinations

$$
C(n,r) = C(n,n-r)
$$

### Pascal Identity

$$
C(n,r) + C(n,r-1) = C(n+1,r)
$$

## 26. Rapid Review

- Counting problems become easier when positions or roles are identified.
- Multiplication is used for successive choices.
- Addition is used for separate non-overlapping cases.
- Permutations are ordered arrangements.
- Combinations are unordered selections.
- Factorials describe arrangements of distinct objects.
- Repeated identical objects require division by repeated factorials.
- Repetition allowed usually produces powers such as `n^r`.
- "Together" often suggests the block method.
- "Not together" often suggests the gap method or complement method.
- "At least" and "at most" usually require cases or complement counting.

## 27. Final Learner Check

Before leaving this chapter, a learner should be able to answer these without guessing:

1. Why is `P(n,r)` bigger than or equal to `C(n,r)`?
2. Why do we divide by `r!` in combinations?
3. Why is `0!` equal to 1?
4. Why can a digit problem fail if 0 is treated like every other first digit?
5. When should repeated letters cause division by factorials?
6. When is complement counting easier than direct counting?
7. How does the block method handle "together" conditions?
8. How does the gap method handle "not together" conditions?
9. Why is choosing a committee different from assigning posts?
10. Why must case splits be non-overlapping?

If these questions are clear, the learner is ready for probability and binomial expansion topics that use counting heavily.
