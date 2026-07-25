# Chapter 7: The Mathematics of Maybe - Introduction to Probability
### NCERT Class 9 - Maths

---

## Chapter at a Glance

| Detail | Learner-Friendly Information |
|---|---|
| **Class** | 9 |
| **Subject** | Maths |
| **Chapter** | 7 |
| **Actual Chapter Title** | The Mathematics of Maybe: Introduction to Probability |
| **Raw File Header** | "Triangles" |
| **Textbook Pages** | 1-173 |
| **Core Theme** | Measuring chance, uncertainty, randomness, and likelihood. |
| **Main Skill** | Listing possible outcomes, identifying events, and calculating experimental and theoretical probability. |

> [!NOTE]
> The raw source file is `chapter_07.md` and its extraction header says "Triangles", but the actual chapter content is **The Mathematics of Maybe: Introduction to Probability**. This learner-facing version follows the actual chapter content.

---

## Section Structure

| Section | Title | Main Learning Focus |
|---|---|---|
| **7.0** | Introduction | Why probability helps us reason about uncertain situations. |
| **7.1** | What Is Probability? | Probability as a measurement of likelihood. |
| **7.1.1** | What Is Randomness? | Random experiments, unpredictability, and known possible outcomes. |
| **7.1.2** | The Probability Scale | Values from \(0\) to \(1\), from impossible to certain. |
| **7.2** | Measuring Probability Objectively | Experimental probability and theoretical probability. |
| **7.2.1** | Experimental Probability | Estimating probability using trials and relative frequency. |
| **7.2.2** | Theoretical Probability | Calculating probability when equally likely outcomes are known. |
| **7.2.3** | Statistical Data and Probability | Sampling, population, sample estimates, and long-run behaviour. |
| **7.3** | Sample Spaces and Events | Listing all possible outcomes and selecting event outcomes. |
| **7.3.1** | Sample Space | Complete, non-repeated list of possible outcomes. |
| **7.3.2** | Events | Subsets of sample space. |
| **7.4** | Tree Diagrams | Visualising multi-step experiments and listing outcomes systematically. |

---

## Learning Outcomes

By the end of this chapter, you should be able to:

| Outcome | You Should Be Able To... |
|---|---|
| **Explain probability** | Describe probability as a number measuring likelihood. |
| **Use probability language** | Correctly use impossible, unlikely, even chance, likely, and certain. |
| **Recognise randomness** | Identify random experiments and explain why exact outcomes cannot be known in advance. |
| **Use the probability scale** | Place events between \(0\) and \(1\). |
| **Find experimental probability** | Use data from trials to estimate probability. |
| **Find theoretical probability** | Use favourable outcomes and total equally likely outcomes. |
| **Build sample spaces** | List outcomes completely without duplicates. |
| **Describe events** | Represent an event as a subset of the sample space. |
| **Use tree diagrams** | Organise outcomes for two-step or multi-step experiments. |
| **Avoid common fallacies** | Explain why past independent outcomes do not force future outcomes. |

---

## Prerequisite Toolkit

| Tool | Why It Matters Here |
|---|---|
| **Fractions** | Probabilities are often written as fractions. |
| **Decimals** | Probabilities may be written as decimals between \(0\) and \(1\). |
| **Percentages** | Probability can be interpreted as a percentage chance. |
| **Sets** | Sample spaces and events are written using set notation. |
| **Ratios** | Probability compares favourable outcomes with total outcomes. |
| **Tables** | Tables help organise sample spaces and survey data. |
| **Multiplication principle** | Multi-step experiments often multiply numbers of choices. |

### Converting Probability Forms

The same probability can be written in different forms.

Example:

$$
\frac{1}{2}=0.5=50\%
$$

Example:

$$
\frac{1}{4}=0.25=25\%
$$

Example:

$$
\frac{3}{4}=0.75=75\%
$$

---

## Big Idea

Probability measures how likely an event is.

It does not guarantee what will happen next. It helps us reason about what can happen and how likely each possibility is.

For example:

- A fair coin can land heads or tails.
- You cannot know the next toss in advance.
- But you can say that heads and tails are equally likely.
- So the probability of heads is \(1/2\).

Probability is the mathematics of uncertainty.

It is used in:

- games;
- weather prediction;
- insurance;
- surveys;
- science experiments;
- sports analysis;
- business forecasts;
- risk assessment.

---

## Key Terms

| Term | Meaning |
|---|---|
| **Probability** | A number that measures how likely an event is. |
| **Random experiment** | A repeatable action whose exact outcome cannot be predicted in advance. |
| **Trial** | One performance of a random experiment. |
| **Outcome** | A possible result of a random experiment. |
| **Sample space** | The set of all possible outcomes. |
| **Event** | A single outcome or a group of outcomes from the sample space. |
| **Favourable outcome** | Outcome that satisfies the event being studied. |
| **Experimental probability** | Probability estimated from actual trials or observations. |
| **Relative frequency** | Fraction of trials in which an event occurs. |
| **Theoretical probability** | Probability calculated from equally likely outcomes. |
| **Population** | Entire group being studied. |
| **Sample** | Smaller part of a population used to estimate information about the whole. |
| **Sampling** | Process of collecting data from a sample. |
| **Fair** | All relevant outcomes are equally likely. |
| **Unbiased** | No outcome is favoured by the object or process. |
| **Independent events** | Events where one result does not change the probability of another. |
| **Tree diagram** | Branching diagram used to list multi-step outcomes. |

---

## 7.0 - Introduction: The Mathematics of Maybe

Many everyday questions do not have a fixed answer before the event happens.

Examples:

- Will it rain today?
- Will our school win tomorrow's match?
- Will my name be picked in a lucky draw?
- Will a die show \(6\) on the next roll?
- Will a randomly chosen student prefer mango?

These questions involve uncertainty.

We may know the possible outcomes, but we do not know which one will occur.

Probability gives a mathematical way to describe this uncertainty.

---

## 7.1 - What Is Probability?

Probability is a measurement of likelihood.

Just as:

- length measures how long something is;
- area measures how much space a region occupies;
- volume measures how much space a solid occupies;

probability measures how likely an event is to occur.

### Probability Language

| Phrase | Meaning |
|---|---|
| **Impossible** | Cannot happen. |
| **Less likely** | Can happen, but chance is small. |
| **Equally likely / even chance** | Chance of happening and not happening is the same. |
| **More likely** | Chance is greater than half. |
| **Certain** | Must happen. |

### Subjective Probability

Sometimes people estimate likelihood based on personal judgement.

Example:

One friend says:

> It is sunny, so rain is unlikely.

Another friend says:

> It is very hot, so rain may come later.

Both are judging based on evidence, but their estimates may differ.

This is called subjective probability.

### Objective Probability

Objective probability uses:

- collected data;
- repeated trials;
- mathematical reasoning;
- equally likely outcomes.

This chapter focuses on objective ways of estimating probability.

---

## 7.1.1 - What Is Randomness?

Randomness means that the exact result cannot be predicted in advance, even though the possible results may be known.

### Examples of Random Experiments

| Experiment | Possible Outcomes | Why It Is Random |
|---|---|---|
| Tossing a coin | Heads, tails | You cannot know the result of one toss in advance. |
| Rolling a die | \(1,2,3,4,5,6\) | Any face may appear. |
| Lucky draw | Any eligible name | The selected name is not known beforehand. |
| Tossing a paper cup | Bottom, top, side | Landing position is uncertain. |
| Weather tomorrow | Rain, no rain, or more detailed categories | Weather depends on many changing factors. |

### Random Experiment

A random experiment is an action or process that:

1. can be repeated under similar conditions;
2. has known possible outcomes;
3. has an outcome that cannot be predicted with certainty before it occurs.

### Trial

One performance of a random experiment is called a trial.

If a coin is tossed 20 times, then 20 trials are performed.

### Why a Coin Toss Is Useful in Sports

A fair coin toss is used to decide which team bats, serves, or chooses side because:

- heads and tails are equally likely;
- neither team can control the outcome;
- the process is quick and accepted as fair.

### Rain as a Random Event

Rain depends on temperature, humidity, wind, pressure, and other atmospheric conditions.

These factors are complex and sensitive.

So meteorologists may estimate probability of rain, but cannot guarantee exact timing and location with absolute certainty.

---

## 7.1.2 - The Probability Scale

Probability is measured from \(0\) to \(1\).

### Probability Scale

| Probability | Meaning |
|---|---|
| \(0\) | Impossible |
| Between \(0\) and \(0.5\) | Less likely |
| \(0.5\) | Even chance |
| Between \(0.5\) and \(1\) | More likely |
| \(1\) | Certain |

### Examples

| Event | Probability Type | Explanation |
|---|---|---|
| Getting a number greater than \(6\) on a standard die | Impossible | Die has only \(1\) to \(6\). |
| Rolling a \(3\) on a die | Less likely | Only one face is \(3\). |
| Getting heads on a fair coin | Even chance | Heads and tails are equally likely. |
| Drawing a number card from 2 to 10 in a standard deck | More likely | Many cards have these numbers. |
| Choosing a red sweet from a bag of all red sweets | Certain | Every sweet is red. |

### Probability Cannot Be Negative or Greater Than 1

For any event \(E\):

$$
0\le P(E)\le 1
$$

A probability like \(-0.2\) is impossible.

A probability like \(1.3\) is also impossible.

### Percent Interpretation

If:

$$
P(E)=0.75
$$

then the event has a:

$$
75\%
$$

chance in the probability model.

---

## Exercise Set 7.1 - Guided Format

### Question 1

Rank each event from \(0\) to \(1\), and label it as impossible, less likely, even chance, more likely, or certain.

| Event | Suggested Ranking | Reason |
|---|---|---|
| The next Monday will come after Sunday. | \(1\), certain | In the normal calendar, Monday follows Sunday. |
| It will snow in Mumbai in July. | \(0\), impossible or extremely close to impossible in ordinary school probability context | Mumbai's July climate does not support snowfall. |
| An elephant will walk through your classroom today. | Very close to \(0\), less likely | Not logically impossible, but extremely unlikely in ordinary circumstances. |
| You will greet at least one friend at school tomorrow. | More likely | If you attend school and meet friends, this is likely, but not absolutely certain. |

### Learner Note

Probability estimates for everyday events may depend on context.

For example, greeting a friend tomorrow depends on:

- whether school is open;
- whether you attend;
- whether your friend attends;
- whether you meet or speak.

So it is more likely, not automatically certain.

---

## 7.2 - Measuring Probability Objectively

There are two main objective approaches.

### 1. Experimental Probability

Use actual observations or trials.

Example:

Roll a die 50 times and count how often \(4\) appears.

### 2. Theoretical Probability

Use reasoning about equally likely outcomes.

Example:

A fair die has 6 equally likely faces, and only one face is \(4\). So:

$$
P(4)=\frac{1}{6}
$$

### Comparison

| Type | Based On | Used When |
|---|---|---|
| Experimental probability | Data from trials or observations | We can collect evidence or observe real cases. |
| Theoretical probability | Equally likely possible outcomes | We have a fair, ideal model. |

---

## 7.2.1 - Experimental Probability

Experimental probability is based on actual results.

### Formula

$$
\text{Experimental probability}=\frac{\text{number of times the event occurred}}{\text{total number of trials}}
$$

This is also called relative frequency.

### Example 1: Coin and Die Sample Spaces

Coin toss:

$$
S=\{H,T\}
$$

Die roll:

$$
S=\{1,2,3,4,5,6\}
$$

### Example 2: Rolling a Die 50 Times

Suppose a die is rolled 50 times and \(4\) appears 8 times.

Experimental probability of rolling \(4\):

$$
\frac{8}{50}
$$

Simplify:

$$
\frac{8}{50}=\frac{4}{25}
$$

Decimal:

$$
\frac{4}{25}=0.16
$$

Percentage:

$$
0.16=16\%
$$

So the experimental probability is:

$$
0.16
$$

### Important

Experimental probability may differ from theoretical probability.

For a fair die:

$$
P(4)=\frac{1}{6}\approx 0.1667
$$

The experimental value \(0.16\) is close, but not exactly equal.

This is normal.

---

## 7.2.2 - Theoretical Probability

Theoretical probability is used when all outcomes are equally likely.

### Formula

If all outcomes in the sample space are equally likely, then:

$$
P(E)=\frac{\text{number of favourable outcomes}}{\text{number of possible outcomes}}
$$

Using set notation:

$$
P(E)=\frac{n(E)}{n(S)}
$$

where:

- \(S\) is the sample space;
- \(E\) is the event;
- \(n(S)\) is the number of outcomes in \(S\);
- \(n(E)\) is the number of favourable outcomes in \(E\).

### Example 3: Rolling a 4 on a Die

Sample space:

$$
S=\{1,2,3,4,5,6\}
$$

Event:

$$
E=\{4\}
$$

So:

$$
n(S)=6
$$

and

$$
n(E)=1
$$

Probability:

$$
P(E)=\frac{1}{6}
$$

Decimal:

$$
\frac{1}{6}=0.1666\ldots
$$

Approximately:

$$
0.167
$$

or:

$$
16.7\%
$$

### Example 4: Letter from "PROBABILITY"

The word is:

$$
PROBABILITY
$$

It has 11 letters.

The letter \(B\) appears 2 times.

So:

$$
P(\text{B})=\frac{2}{11}
$$

Decimal:

$$
\frac{2}{11}=0.1818\ldots
$$

Approximately:

$$
0.182
$$

or:

$$
18.2\%
$$

### When Not to Use Theoretical Probability

Do not assume theoretical probability unless outcomes are equally likely.

Example:

A bag has 3 red marbles and 7 blue marbles.

The colour outcomes red and blue are not equally likely.

So:

$$
P(\text{red})=\frac{3}{10}
$$

and

$$
P(\text{blue})=\frac{7}{10}
$$

---

## 7.2.3 - Analysing Statistical Data Using Probability

Probability is often estimated from collected data.

This is common in:

- business;
- marketing;
- weather forecasts;
- insurance;
- medical studies;
- sports analytics;
- social science research.

### Example 5: Favourite Fruit Survey

Suppose 50 students are surveyed.

| Favourite Fruit | Number of Students |
|---|---:|
| Mango | 20 |
| Apple | 15 |
| Banana | 10 |
| Grapes | 5 |
| **Total** | **50** |

Estimated probability that a randomly chosen student likes mango:

$$
P(\text{mango})=\frac{20}{50}
$$

$$
P(\text{mango})=0.4
$$

So:

$$
P(\text{mango})=40\%
$$

### Using Sample Data for a Population

Suppose the whole school has 1500 students.

If the sample estimate says \(40\%\) like mango, then estimated number of mango preferences:

$$
0.4\times 1500=600
$$

So we estimate about 600 students may prefer mango.

### Population and Sample

| Term | Meaning in Example |
|---|---|
| Population | All 1500 students in the school |
| Sample | The 50 students surveyed |
| Sample estimate | \(20/50=0.4\) |
| Population estimate | About \(600\) mango-preferring students |

### Better Samples

A better sample should be:

- large enough;
- representative of the population;
- not biased toward one group;
- selected in a fair way.

If only one class is surveyed, the result may not represent the whole school well.

### Law of Large Numbers

When a random experiment is repeated many times, the experimental probability tends to get closer to the theoretical probability.

Example:

For a fair die, theoretical probability of \(4\) is:

$$
\frac{1}{6}
$$

If you roll only 12 times, the experimental result may be far from \(1/6\).

If you roll 6000 times, it is usually much closer to \(1/6\).

### Gambler's Fallacy

The Gambler's Fallacy is the mistaken belief that past independent outcomes force future outcomes.

Example:

A fair coin lands heads six times in a row.

Someone may think tails is now more likely.

But the coin has no memory.

The next toss still has:

$$
P(\text{tails})=\frac{1}{2}
$$

and:

$$
P(\text{heads})=\frac{1}{2}
$$

### Example 6: Snakes and Ladders Die Roll

You roll a fair die three times and get \(6\) every time.

Probability of getting \(6\) on the next roll is still:

$$
\frac{1}{6}
$$

It does not become smaller because \(6\) has already appeared.

Each fair die roll is independent.

---

## Exercise Set 7.2 - Guided Format

### Question 1: Sweets Sample

Sample:

| Colour | Count |
|---|---:|
| Red | 10 |
| Green | 8 |
| Yellow | 7 |
| Blue | 5 |
| **Total** | **30** |

Probability of green:

$$
P(\text{green})=\frac{8}{30}=\frac{4}{15}
$$

Estimated yellow sweets in 600:

$$
\frac{7}{30}\times 600=140
$$

Answer:

$$
140
$$

### Question 2: Favourite Club Survey

Sample:

| Club | Count |
|---|---:|
| Science | 14 |
| Arts | 11 |
| Sports | 9 |
| Debate | 6 |
| **Total** | **40** |

Probability a sample student prefers Arts Club:

$$
P(\text{Arts})=\frac{11}{40}=0.275
$$

Estimated Sports Club preference in school of 800:

$$
\frac{9}{40}\times 800=180
$$

Answer:

$$
180
$$

### Question 3: Toss a Coin 20 Times

The first three parts depend on your actual experiment.

If heads appears \(h\) times in 20 tosses, then:

$$
P_{\text{experimental}}(\text{heads})=\frac{h}{20}
$$

If the coin is fair, then the probability of tails on one more toss is:

$$
\frac{1}{2}
$$

The past 20 tosses do not change the theoretical probability of the next toss.

### Question 4: Tossing a Paper Cup

Possible outcomes:

$$
S=\{\text{bottom},\ \text{top},\ \text{side}\}
$$

If the cup is tossed \(N\) times:

$$
P(\text{bottom})=\frac{\text{number of bottom landings}}{N}
$$

$$
P(\text{top})=\frac{\text{number of top landings}}{N}
$$

$$
P(\text{side})=\frac{\text{number of side landings}}{N}
$$

### Question 5: Even Number on a Fair Die

Sample space:

$$
S=\{1,2,3,4,5,6\}
$$

Event:

$$
E=\{2,4,6\}
$$

So:

$$
P(E)=\frac{3}{6}=\frac{1}{2}
$$

### Question 6: Rolling a 3

The die is rolled 12 times and \(3\) appears 3 times.

Experimental probability:

$$
\frac{3}{12}=\frac{1}{4}=0.25
$$

Theoretical probability:

$$
\frac{1}{6}\approx 0.1667
$$

They may differ because 12 trials is a small number.

With 60, 600, or 6000 rolls, the experimental probability is expected to move closer to \(1/6\), though it may not be exactly equal.

---

## 7.3 - Elements of Probability: Sample Spaces and Events

Probability calculations become easier when we clearly identify:

1. the sample space;
2. the event;
3. the number of favourable outcomes;
4. the total number of outcomes.

---

## 7.3.1 - Sample Space

The sample space is the set of all possible outcomes of a random experiment.

It is usually denoted by:

$$
S
$$

### Rules for a Good Sample Space

1. It must include every possible outcome.
2. It must not repeat the same outcome.
3. Its outcomes must match the level of detail needed by the question.

### Sample Size

The number of outcomes in the sample space is denoted:

$$
n(S)
$$

### Examples

| Experiment | Sample Space | Sample Size |
|---|---|---:|
| Will it rain tomorrow? | \(\{\text{Rain},\text{No Rain}\}\) | 2 |
| Match result | \(\{\text{Win},\text{Lose},\text{Draw}\}\) | 3 |
| Toss one coin | \(\{H,T\}\) | 2 |
| Roll one die | \(\{1,2,3,4,5,6\}\) | 6 |
| Toss two coins | \(\{HH,HT,TH,TT\}\) | 4 |

### Level of Detail

For rain, the sample space:

$$
\{\text{Rain},\text{No Rain}\}
$$

may be enough for one question.

But if the question asks about intensity, use:

$$
\{\text{No Rain},\text{Drizzle},\text{Light Rain},\text{Heavy Rain}\}
$$

The correct sample space depends on the question.

---

## 7.3.2 - Events

An event is a single outcome or a group of outcomes from the sample space.

In set language:

> An event is a subset of the sample space.

### Example 1: Tossing Two Coins

Sample space:

$$
S=\{HH,HT,TH,TT\}
$$

Event: at least one head.

$$
E=\{HH,HT,TH\}
$$

So:

$$
n(E)=3
$$

and:

$$
n(S)=4
$$

Probability:

$$
P(E)=\frac{3}{4}
$$

### Example 2: Rolling a Die

Sample space:

$$
S=\{1,2,3,4,5,6\}
$$

Event: number greater than \(4\).

$$
E=\{5,6\}
$$

Probability:

$$
P(E)=\frac{2}{6}=\frac{1}{3}
$$

### Example 3: Fruit Basket

Sample space:

$$
S=\{\text{Apple},\text{Banana},\text{Orange}\}
$$

Event: yellow fruit.

$$
E=\{\text{Banana}\}
$$

If all three fruit types are equally likely:

$$
P(E)=\frac{1}{3}
$$

---

## Exercise Set 7.3 - Guided Format

### Question 1

When a single 6-sided die is rolled:

$$
S=\{1,2,3,4,5,6\}
$$

So:

$$
n(S)=6
$$

### Question 2(i): Rolling a Die and Tossing a Coin Together

Sample space:

$$
S=\{(1,H),(1,T),(2,H),(2,T),(3,H),(3,T),(4,H),(4,T),(5,H),(5,T),(6,H),(6,T)\}
$$

Sample size:

$$
n(S)=12
$$

### Question 2(ii): Random Integer Between \(-5\) and \(+5\)

Assuming both endpoints are included:

$$
S=\{-5,-4,-3,-2,-1,0,1,2,3,4,5\}
$$

Sample size:

$$
n(S)=11
$$

### Question 2(iii): Box with 5 Green and 7 Red Balls

If only colour is recorded:

$$
S=\{\text{Green},\text{Red}\}
$$

But green and red are not equally likely.

If each physical ball is treated separately, a more detailed sample space could label balls:

$$
S=\{G_1,G_2,G_3,G_4,G_5,R_1,R_2,R_3,R_4,R_5,R_6,R_7\}
$$

This detailed sample space has:

$$
n(S)=12
$$

### Question 3: Snacks and Drinks

Snacks:

$$
\{\text{Samosa},\text{Pakora},\text{Bhaji}\}
$$

Drinks:

$$
\{\text{Chai},\text{Lassi}\}
$$

Sample space:

$$
S=\{(\text{Samosa},\text{Chai}),(\text{Samosa},\text{Lassi}),(\text{Pakora},\text{Chai}),(\text{Pakora},\text{Lassi}),(\text{Bhaji},\text{Chai}),(\text{Bhaji},\text{Lassi})\}
$$

Event: selecting Samosa as snack.

$$
E=\{(\text{Samosa},\text{Chai}),(\text{Samosa},\text{Lassi})\}
$$

If all combinations are equally likely:

$$
P(E)=\frac{2}{6}=\frac{1}{3}
$$

---

## 7.4 - Tree Diagrams

A tree diagram is a branching diagram used to list outcomes in a multi-step experiment.

Examples of multi-step experiments:

- toss a coin two times;
- roll a die and toss a coin;
- choose a fruit from basket A and then from basket B;
- draw one ball, then draw another ball;
- answer multiple-choice questions.

### Why Tree Diagrams Help

Tree diagrams help us:

- list all outcomes systematically;
- avoid missing outcomes;
- see whether outcomes are equally likely;
- compute probabilities in stages;
- understand replacement and non-replacement situations.

### Example 7: Toss a Coin Two Times

First toss:

$$
H\quad \text{or}\quad T
$$

Second toss:

$$
H\quad \text{or}\quad T
$$

Sample space:

$$
S=\{HH,HT,TH,TT\}
$$

Each outcome has probability:

$$
\frac{1}{4}
$$

Event: heads twice.

$$
E=\{HH\}
$$

So:

$$
P(E)=\frac{1}{4}
$$

Event: one head and one tail.

$$
E=\{HT,TH\}
$$

So:

$$
P(E)=\frac{2}{4}=\frac{1}{2}
$$

### Branch Probability Rule

In a tree diagram, probability along a path is found by multiplying branch probabilities.

For two fair coin tosses:

$$
P(HH)=\frac{1}{2}\times \frac{1}{2}=\frac{1}{4}
$$

### With Replacement vs Without Replacement

With replacement:

- the item is put back;
- probabilities often stay the same in the next step.

Without replacement:

- the item is not put back;
- probabilities change in the next step.

This difference is very important in tree diagrams.

---

## Exercise Set 7.4 - Guided Format

### Question 1: Fruit Baskets

Basket A:

$$
\{\text{Apple},\text{Orange},\text{Orange}\}
$$

Basket B:

$$
\{\text{Banana},\text{Mango}\}
$$

Possible fruit pairs:

$$
S=\{(A,B),(A,M),(O,B),(O,M)\}
$$

If the two oranges are treated as separate physical fruits, the detailed sample space is:

$$
\{(A,B),(A,M),(O_1,B),(O_1,M),(O_2,B),(O_2,M)\}
$$

Probability of picking one apple and one banana:

$$
P(\text{apple from A})=\frac{1}{3}
$$

and:

$$
P(\text{banana from B})=\frac{1}{2}
$$

So:

$$
P(\text{apple and banana})=\frac{1}{3}\times \frac{1}{2}=\frac{1}{6}
$$

### Question 2: Pens with Replacement

Box:

- 3 red pens;
- 4 black pens;
- 2 green pens.

Total:

$$
3+4+2=9
$$

Colour probabilities for one pick:

$$
P(R)=\frac{3}{9}=\frac{1}{3}
$$

$$
P(B)=\frac{4}{9}
$$

$$
P(G)=\frac{2}{9}
$$

Because the pen is replaced, the second person's probabilities are the same.

Probability both pick the same colour:

$$
P(RR)+P(BB)+P(GG)
$$

$$
=\frac{3}{9}\cdot \frac{3}{9}+\frac{4}{9}\cdot \frac{4}{9}+\frac{2}{9}\cdot \frac{2}{9}
$$

$$
=\frac{9}{81}+\frac{16}{81}+\frac{4}{81}
$$

$$
=\frac{29}{81}
$$

---

## End-of-Chapter Exercises - Structured Learner Guide

### Question 1: Fill in the Blanks

| Blank | Answer |
|---|---|
| Probability of an impossible event | \(0\) |
| Set of all possible outcomes | sample space |
| Probability of a certain event | \(1\) |
| Probability of heads on a fair coin | \(\frac{1}{2}\) |

### Question 2: Survey of Football Preference

15 out of 50 students like football.

Frequency:

$$
15
$$

Relative frequency:

$$
\frac{15}{50}=\frac{3}{10}=0.3
$$

### Question 3: Equally Likely Outcomes

| Experiment | Equally Likely? | Reason |
|---|---|---|
| Car starts or does not start | Not necessarily | A working car is more likely to start. |
| Tossing a fair coin | Yes | Heads and tails are equally likely. |
| Rolling a fair 6-sided die | Yes | Each face is equally likely. |
| Choosing a marble from 3 red and 7 blue | Individual marbles are equally likely; colours are not | Red has probability \(3/10\), blue \(7/10\). |
| A baby is born, boy or girl | Not safe to assume exactly equally likely in real data | A simple classroom model may approximate, but real population data need evidence. |

### Question 4: Sample Spaces and Probabilities

#### 4(i) Two Coins: At Least One Head

Sample space:

$$
S=\{HH,HT,TH,TT\}
$$

Event:

$$
E=\{HH,HT,TH\}
$$

Probability:

$$
P(E)=\frac{3}{4}
$$

#### 4(ii) Cards Numbered 1 to 10: Even Number

Event:

$$
E=\{2,4,6,8,10\}
$$

Probability:

$$
P(E)=\frac{5}{10}=\frac{1}{2}
$$

#### 4(iii) Die: Number Greater Than 4

Event:

$$
E=\{5,6\}
$$

Probability:

$$
P(E)=\frac{2}{6}=\frac{1}{3}
$$

#### 4(iv) Bag: Not Red

Bag has:

- 3 red;
- 2 blue;
- 1 green.

Total:

$$
6
$$

Not red means blue or green:

$$
2+1=3
$$

Probability:

$$
\frac{3}{6}=\frac{1}{2}
$$

#### 4(v) Three Coins: Exactly Two Heads

Sample space:

$$
S=\{HHH,HHT,HTH,HTT,THH,THT,TTH,TTT\}
$$

Event exactly two heads:

$$
E=\{HHT,HTH,THH\}
$$

Probability:

$$
P(E)=\frac{3}{8}
$$

### Question 5: Three Candies

Candies:

$$
\{\text{strawberry},\text{lemon},\text{mint}\}
$$

Probability of strawberry:

$$
\frac{1}{3}
$$

### Question 6: Outfit Combinations

Shirts:

$$
\{\text{Red},\text{Blue}\}
$$

Pants:

$$
\{\text{Jeans},\text{Khakis},\text{Shorts}\}
$$

| Shirt | Pants |
|---|---|
| Red | Jeans |
| Red | Khakis |
| Red | Shorts |
| Blue | Jeans |
| Blue | Khakis |
| Blue | Shorts |

Total combinations:

$$
2\times 3=6
$$

### Question 7: Tyre Replacement Data

Total cases:

$$
1000
$$

| Distance Category | Cases |
|---|---:|
| Less than \(4000\text{ km}\) | 20 |
| \(4000\) to \(9000\text{ km}\) | 210 |
| \(9000\) to \(14000\text{ km}\) | 325 |
| More than \(14000\text{ km}\) | 445 |

Probability less than \(4000\text{ km}\):

$$
\frac{20}{1000}=0.02
$$

Probability between \(4000\) and \(14000\text{ km}\):

$$
\frac{210+325}{1000}=\frac{535}{1000}=0.535
$$

Probability more than \(14000\text{ km}\):

$$
\frac{445}{1000}=0.445
$$

### Question 8: Letters of "PEACE"

Cards:

$$
P,\ E,\ A,\ C,\ E
$$

Total:

$$
5
$$

#### 8(i) Probability of \(P\), \(E\), or \(C\)

Favourable cards:

$$
P,\ E,\ E,\ C
$$

Count:

$$
4
$$

Probability:

$$
\frac{4}{5}
$$

#### 8(ii) Probability of Not \(E\)

Not \(E\):

$$
P,\ A,\ C
$$

Count:

$$
3
$$

Probability:

$$
\frac{3}{5}
$$

### Question 9: Spinner Numbered 1 to 8

All 8 outcomes are equally likely.

| Event | Favourable Outcomes | Probability |
|---|---|---|
| Points at 8 | \(\{8\}\) | \(\frac{1}{8}\) |
| Odd number | \(\{1,3,5,7\}\) | \(\frac{4}{8}=\frac{1}{2}\) |
| Greater than 2 | \(\{3,4,5,6,7,8\}\) | \(\frac{6}{8}=\frac{3}{4}\) |
| Less than 9 | \(\{1,2,3,4,5,6,7,8\}\) | \(1\) |
| Multiple of 3 | \(\{3,6\}\) | \(\frac{2}{8}=\frac{1}{4}\) |

### Question 10: Drawing Balls Without Replacement

Basket:

- 4 red balls;
- 5 blue balls.

Total:

$$
9
$$

#### 10(i) Red Then Blue

$$
P(R\text{ then }B)=\frac{4}{9}\times \frac{5}{8}
$$

$$
=\frac{20}{72}=\frac{5}{18}
$$

#### 10(ii) Two Blue Balls

$$
P(BB)=\frac{5}{9}\times \frac{4}{8}
$$

$$
=\frac{20}{72}=\frac{5}{18}
$$

### Question 11: Pair of Dice

An event with probability \(0\):

> Sum is \(13\).

This cannot happen with two standard dice.

An event with probability \(1\):

> Sum is between \(2\) and \(12\), inclusive.

This must happen with two standard dice.

### Question 12: Mixed Probability Problems

#### 12(i) Two Dice: Sum Is a Prime Number Greater Than 5

Prime sums greater than 5 possible with two dice:

$$
7,\ 11
$$

Number of outcomes with sum \(7\):

$$
6
$$

Number of outcomes with sum \(11\):

$$
2
$$

Favourable outcomes:

$$
8
$$

Total outcomes:

$$
36
$$

Probability:

$$
\frac{8}{36}=\frac{2}{9}
$$

#### 12(ii) Two Balls of Different Colours Without Replacement

Bag:

- 4 red;
- 3 green;
- 2 blue.

Total balls:

$$
9
$$

Total unordered pairs:

$$
\binom{9}{2}=36
$$

Same-colour pairs:

$$
\binom{4}{2}+\binom{3}{2}+\binom{2}{2}=6+3+1=10
$$

Different-colour pairs:

$$
36-10=26
$$

Probability:

$$
\frac{26}{36}=\frac{13}{18}
$$

#### 12(iii) Three Coins: First Coin Heads and Exactly Two Heads Total

Sample outcomes with first coin heads and exactly two heads:

$$
HHT,\ HTH
$$

Total outcomes for three coins:

$$
8
$$

Probability:

$$
\frac{2}{8}=\frac{1}{4}
$$

#### 12(iv) Four-Digit Number from 1, 2, 3, 4 Without Repetition Is Even

Total numbers:

$$
4!=24
$$

For an even number, last digit must be \(2\) or \(4\).

Choices for last digit:

$$
2
$$

Arrange remaining three digits:

$$
3!=6
$$

Favourable numbers:

$$
2\times 6=12
$$

Probability:

$$
\frac{12}{24}=\frac{1}{2}
$$

#### 12(v) Three Multiple-Choice Questions, Exactly Two Correct

Each question has 4 options and one correct answer.

Probability correct on one question:

$$
\frac{1}{4}
$$

Probability wrong on one question:

$$
\frac{3}{4}
$$

Exactly two correct means choose which 2 of the 3 questions are correct:

$$
\binom{3}{2}=3
$$

Probability:

$$
3\left(\frac{1}{4}\right)^2\left(\frac{3}{4}\right)
$$

$$
=3\cdot \frac{1}{16}\cdot \frac{3}{4}
$$

$$
=\frac{9}{64}
$$

### Question 13: Drawing Numbered Balls

Box:

$$
\{1,2,3,4\}
$$

#### With Replacement

First draw has 4 choices.

Second draw also has 4 choices.

Sample size:

$$
4\times 4=16
$$

Sample space:

$$
\{(1,1),(1,2),(1,3),(1,4),(2,1),(2,2),(2,3),(2,4),(3,1),(3,2),(3,3),(3,4),(4,1),(4,2),(4,3),(4,4)\}
$$

#### Without Replacement

First draw has 4 choices.

Second draw has 3 remaining choices.

Sample size:

$$
4\times 3=12
$$

Sample space:

$$
\{(1,2),(1,3),(1,4),(2,1),(2,3),(2,4),(3,1),(3,2),(3,4),(4,1),(4,2),(4,3)\}
$$

### Question 14: Toss Coin and Draw Card Numbered 1 to 6

Sample space:

$$
S=\{(H,1),(H,2),(H,3),(H,4),(H,5),(H,6),(T,1),(T,2),(T,3),(T,4),(T,5),(T,6)\}
$$

Sample size:

$$
12
$$

### Question 15: Number of Heads in Three Coin Tosses

Possible numbers of heads:

$$
0,\ 1,\ 2,\ 3
$$

Correct sample space:

$$
\{0,1,2,3\}
$$

Why the others fail:

| List | Problem |
|---|---|
| \(\{1,2,3\}\) | Missing \(0\) heads. |
| \(\{0,1,2\}\) | Missing \(3\) heads. |
| \(\{0,1,2,3,4\}\) | Includes impossible outcome \(4\) heads. |
| \(\{0,1,2,3\}\) | Correct. |

### Question 16: Dye Dropped on a Rectangle

Rectangle dimensions:

$$
2\text{ m}\times 3\text{ m}
$$

Rectangle area:

$$
6\text{ m}^2
$$

Circle diameter:

$$
1\text{ m}
$$

Radius:

$$
\frac{1}{2}\text{ m}
$$

Circle area:

$$
\pi\left(\frac{1}{2}\right)^2=\frac{\pi}{4}
$$

Probability dye lands inside circle:

$$
\frac{\text{area of circle}}{\text{area of rectangle}}
$$

$$
=\frac{\pi/4}{6}
$$

$$
=\frac{\pi}{24}
$$

Approximate value:

$$
\frac{3.14}{24}\approx 0.131
$$

---

## Detailed Worked Examples

### Example 1: Probability of At Least One Head in Two Tosses

Sample space:

$$
S=\{HH,HT,TH,TT\}
$$

Event:

$$
E=\{HH,HT,TH\}
$$

So:

$$
P(E)=\frac{3}{4}
$$

### Example 2: Probability of an Even Number on a Die

Sample space:

$$
S=\{1,2,3,4,5,6\}
$$

Even outcomes:

$$
E=\{2,4,6\}
$$

Probability:

$$
P(E)=\frac{3}{6}=\frac{1}{2}
$$

### Example 3: Survey-Based Probability

In a sample of 80 students, 28 prefer basketball.

Estimated probability:

$$
P(\text{basketball})=\frac{28}{80}
$$

$$
=\frac{7}{20}
$$

$$
=0.35
$$

So the estimated probability is:

$$
35\%
$$

If the school has 1200 students, estimated number preferring basketball:

$$
0.35\times 1200=420
$$

### Example 4: Drawing a Card from Letters

The letters of "LEVEL" are written on cards.

Cards:

$$
L,\ E,\ V,\ E,\ L
$$

Probability of drawing \(L\):

$$
\frac{2}{5}
$$

Probability of drawing \(E\):

$$
\frac{2}{5}
$$

Probability of drawing a vowel:

$$
\frac{2}{5}
$$

because only the two \(E\)'s are vowels.

### Example 5: Without Replacement

A bag has 2 red balls and 3 blue balls. Two balls are drawn without replacement.

Probability of red then blue:

$$
\frac{2}{5}\times \frac{3}{4}
$$

$$
=\frac{6}{20}=\frac{3}{10}
$$

Probability of one red and one blue in any order:

$$
P(RB)+P(BR)
$$

$$
=\frac{2}{5}\cdot \frac{3}{4}+\frac{3}{5}\cdot \frac{2}{4}
$$

$$
=\frac{6}{20}+\frac{6}{20}
$$

$$
=\frac{12}{20}=\frac{3}{5}
$$

---

## Formula Sheet

### Experimental Probability

$$
P_{\text{experimental}}(E)=\frac{\text{number of times }E\text{ occurred}}{\text{total number of trials}}
$$

### Theoretical Probability

When all outcomes are equally likely:

$$
P(E)=\frac{\text{number of favourable outcomes}}{\text{number of possible outcomes}}
$$

or:

$$
P(E)=\frac{n(E)}{n(S)}
$$

### Probability Range

$$
0\le P(E)\le 1
$$

### Complement

If \(E'\) means "not \(E\)", then:

$$
P(E')=1-P(E)
$$

### Multi-Step Path Probability

For a path in a tree diagram:

$$
P(\text{path})=(\text{branch probability 1})(\text{branch probability 2})\cdots
$$

### Equally Likely Multi-Step Outcomes

If there are \(m\) choices in step 1 and \(n\) choices in step 2, then:

$$
\text{total outcomes}=mn
$$

---

## Common Mistakes and Corrections

| Mistake | Why It Is Wrong | Correct Thinking |
|---|---|---|
| Saying probability can be \(120\%\) | Probability cannot exceed \(1\) or \(100\%\). | Always check \(0\le P(E)\le 1\). |
| Treating past coin tosses as changing the next toss | A fair coin has no memory. | Independent trials keep the same probability. |
| Forgetting repeated letters in words | Each card/letter position counts. | In "PEACE", \(E\) appears twice. |
| Listing incomplete sample spaces | Missing outcomes gives wrong probability. | Write all outcomes systematically. |
| Repeating outcomes in sample space | Repetition changes counts incorrectly. | Each outcome should be listed once, unless physical objects are labelled separately. |
| Assuming outcomes are equally likely without evidence | Real-world outcomes may be biased. | Use equally likely only when the model supports it. |
| Confusing event and outcome | An event may contain many outcomes. | Outcome is one result; event is a set of results. |
| Ignoring replacement in drawing problems | Replacement changes the second probability. | Ask: was the first item put back? |
| Using colour sample space \(\{R,B\}\) as equally likely when counts differ | Colour outcomes may not have equal chances. | Use counts: \(P(R)=\frac{\text{red count}}{\text{total}}\). |
| Thinking experimental probability must equal theoretical probability | Small samples vary. | More trials usually bring experimental probability closer. |

---

## Concept Map

| Concept | Connects To |
|---|---|
| Randomness | Unpredictable individual outcomes |
| Probability scale | Values from impossible \(0\) to certain \(1\) |
| Experimental probability | Relative frequency from data |
| Theoretical probability | Equally likely outcomes |
| Sample space | Complete list of possible outcomes |
| Event | Subset of sample space |
| Tree diagram | Multi-step sample spaces |
| Sampling | Estimating population behaviour |
| Law of large numbers | Long-run experimental probability |
| Gambler's fallacy | Misunderstanding independent trials |

---

## Rapid Revision Questions

### Definitions

1. What is probability?
2. What is a random experiment?
3. What is a trial?
4. What is an outcome?
5. What is a sample space?
6. What is an event?
7. What is experimental probability?
8. What is theoretical probability?
9. What is a tree diagram?
10. What is the Gambler's Fallacy?

### Calculation Practice

1. A fair coin is tossed once. Find \(P(H)\).
2. A fair die is rolled. Find \(P(\text{odd})\).
3. A fair die is rolled. Find \(P(\text{number greater than }2)\).
4. Two coins are tossed. Find \(P(\text{exactly one head})\).
5. Three coins are tossed. Find \(P(\text{at least two heads})\).
6. A bag has 5 red and 3 blue balls. Find \(P(\text{blue})\).
7. A card is drawn from letters \(MATHS\). Find \(P(\text{vowel})\).
8. A survey of 100 students finds 37 like cricket. Estimate the probability that a randomly chosen student likes cricket.

### Reasoning Practice

1. Why is \(P(E)\) always between \(0\) and \(1\)?
2. Why does a fair die have \(P(6)=1/6\)?
3. Why can experimental probability differ from theoretical probability?
4. Why is a larger sample usually better than a smaller sample?
5. Why is "tails is due after many heads" a fallacy?
6. Why must sample spaces match the question being asked?

---

## Answers to Rapid Revision Calculations

### 1. Fair Coin

$$
P(H)=\frac{1}{2}
$$

### 2. Odd Number on Die

Odd outcomes:

$$
\{1,3,5\}
$$

Probability:

$$
\frac{3}{6}=\frac{1}{2}
$$

### 3. Number Greater Than 2

Outcomes:

$$
\{3,4,5,6\}
$$

Probability:

$$
\frac{4}{6}=\frac{2}{3}
$$

### 4. Exactly One Head in Two Tosses

Sample space:

$$
\{HH,HT,TH,TT\}
$$

Event:

$$
\{HT,TH\}
$$

Probability:

$$
\frac{2}{4}=\frac{1}{2}
$$

### 5. At Least Two Heads in Three Tosses

Sample space has:

$$
8
$$

outcomes.

At least two heads:

$$
\{HHT,HTH,THH,HHH\}
$$

Probability:

$$
\frac{4}{8}=\frac{1}{2}
$$

### 6. Bag with 5 Red and 3 Blue

Total:

$$
8
$$

Probability blue:

$$
\frac{3}{8}
$$

### 7. Letters \(MATHS\)

Letters:

$$
M,\ A,\ T,\ H,\ S
$$

Vowel:

$$
A
$$

Probability:

$$
\frac{1}{5}
$$

### 8. Survey of 100 Students

Probability estimate:

$$
\frac{37}{100}=0.37=37\%
$$

---

## Final Chapter Summary

- Probability measures the likelihood of an event.
- Probability values lie between \(0\) and \(1\).
- \(0\) means impossible.
- \(1\) means certain.
- \(0.5\) means even chance.
- A random experiment has known possible outcomes but an unpredictable exact result.
- Experimental probability is based on data:

$$
P_{\text{experimental}}(E)=\frac{\text{number of times }E\text{ occurred}}{\text{total number of trials}}
$$

- Theoretical probability is based on equally likely outcomes:

$$
P(E)=\frac{n(E)}{n(S)}
$$

- A sample space is the set of all possible outcomes.
- An event is a subset of the sample space.
- Tree diagrams help list outcomes for multi-step experiments.
- In independent trials, past outcomes do not change future probabilities.
- The Gambler's Fallacy is the mistake of thinking that a random process must "balance out" immediately.
- Larger samples usually give more reliable estimates than smaller samples.
- Replacement and non-replacement change probabilities in multi-step drawing problems.

---

## Study Strategy for Learners

When solving a probability problem:

1. Identify the experiment.
2. Write the sample space if possible.
3. Identify the event.
4. Count favourable outcomes.
5. Count total outcomes.
6. Check whether outcomes are equally likely.
7. Use experimental probability if the problem gives data.
8. Use theoretical probability if the problem gives a fair equally likely model.
9. For multi-step problems, use a table or tree diagram.
10. Check that your answer lies between \(0\) and \(1\).

The best habit is to slow down at the start. Most probability mistakes happen because the sample space or event is not written clearly.

---

*Source: NCERT Class 9 - Maths, Chapter 7 raw file. Learner-facing version manually rewritten from the extracted chapter content about probability.*
