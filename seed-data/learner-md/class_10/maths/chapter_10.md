# Chapter 10: Circles
### NCERT Class 10 - Maths

This learner version rewrites the raw chapter into a detailed guide on tangents to circles. It focuses on definitions, the two main theorems, proof patterns, and complete exercise solutions.

---

## Chapter at a Glance

| Item | Details |
|---|---|
| Class | 10 |
| Subject | Maths |
| Chapter | 10 |
| Chapter name | Circles |
| Main topic | Tangents to a circle |
| Main theorems | Radius is perpendicular to tangent; tangents from an external point are equal |
| Main skills | Identify tangent/secant, use right triangles, prove equality of tangent lengths |

---

## Learning Outcomes

By the end of this chapter, you should be able to:

1. distinguish a non-intersecting line, secant, and tangent;
2. define point of contact;
3. explain why a tangent is a limiting case of a secant;
4. use the theorem that radius is perpendicular to tangent at point of contact;
5. determine the number of tangents from a point inside, on, or outside a circle;
6. use equality of tangents from an external point;
7. solve numerical problems using Pythagoras theorem;
8. prove standard tangent-circle results in quadrilaterals and triangles.

---

## Key Terms

| Term | Meaning |
|---|---|
| Circle | Set of all points in a plane at a fixed distance from a fixed point |
| Centre | Fixed point of the circle |
| Radius | Segment from centre to any point on the circle |
| Secant | Line intersecting a circle at two points |
| Tangent | Line touching a circle at exactly one point |
| Point of contact | Common point of a tangent and the circle |
| External point | A point outside the circle |
| Length of tangent | Segment from external point to point of contact |
| Normal | Line containing radius through point of contact |

---

# Unit 10A: Line and Circle Positions

Given a line and a circle in the same plane, exactly three situations are possible.

| Situation | Number of common points | Name |
|---|---:|---|
| Line does not meet circle | 0 | Non-intersecting line |
| Line meets circle at two points | 2 | Secant |
| Line meets circle at one point | 1 | Tangent |

## Tangent as a Special Secant

Imagine a secant cutting a circle at two points. If the two intersection points move closer and closer until they coincide, the secant becomes a tangent.

So a tangent can be understood as a limiting case of a secant.

---

# Unit 10B: Tangent at a Point

## Theorem 10.1

The tangent at any point of a circle is perpendicular to the radius through the point of contact.

If `XY` is tangent to a circle at `P` and `O` is the centre, then:

$$
OP \perp XY
$$

## Proof Idea

Take any point `Q` on the tangent line other than `P`.

Since `Q` lies outside the circle:

$$
OQ > OP
$$

This means `OP` is the shortest distance from `O` to the tangent line.

The shortest distance from a point to a line is the perpendicular distance.

Therefore:

$$
OP \perp XY
$$

## Important Consequences

1. At any point of a circle, there is exactly one tangent.
2. The line containing the radius through the point of contact is called the normal.
3. In tangent problems, a radius to the point of contact almost always creates a right angle.

---

# Unit 10C: Number of Tangents From a Point

| Position of point | Number of tangents possible |
|---|---:|
| Inside the circle | 0 |
| On the circle | 1 |
| Outside the circle | 2 |

## Explanation

- From an inside point, every line through the point cuts the circle at two points, so no tangent is possible.
- From a point on the circle, exactly one tangent can be drawn.
- From an external point, exactly two tangents can be drawn.

---

# Unit 10D: Equal Tangents Theorem

## Theorem 10.2

The lengths of tangents drawn from an external point to a circle are equal.

If `P` is an external point and `PQ` and `PR` are tangents to a circle, then:

$$
PQ = PR
$$

## Proof

Let `O` be the centre of the circle.

Join:

$$
OP,\quad OQ,\quad OR
$$

Since a radius is perpendicular to a tangent at the point of contact:

$$
OQ \perp PQ
$$

and:

$$
OR \perp PR
$$

So triangles `OQP` and `ORP` are right triangles.

Now:

$$
OQ = OR
$$

because they are radii of the same circle.

Also:

$$
OP = OP
$$

because it is common.

Therefore:

$$
\triangle OQP \cong \triangle ORP
$$

by RHS congruence.

Hence:

$$
PQ = PR
$$

## Also Useful

The line joining the external point and the centre bisects the angle between the two tangents.

So:

$$
\angle OPQ = \angle OPR
$$

---

# Unit 10E: Solved Exercise 10.1

## Question 1: How Many Tangents Can a Circle Have?

A circle has one tangent at each point of the circle.

Since a circle has infinitely many points, it can have infinitely many tangents.

Answer:

$$
\text{Infinitely many}
$$

## Question 2: Fill in the Blanks

### Part I

A tangent to a circle intersects it in:

$$
1
$$

point.

### Part II

A line intersecting a circle in two points is called a:

$$
\text{secant}
$$

### Part III

A circle can have:

$$
2
$$

parallel tangents at the most.

### Part IV

The common point of a tangent to a circle and the circle is called:

$$
\text{point of contact}
$$

## Question 3: Length of Tangent `PQ`

Given:

- radius `OP = 5 cm`;
- `OQ = 12 cm`;
- `PQ` is tangent at `P`.

Since radius is perpendicular to tangent:

$$
OP \perp PQ
$$

So triangle `OPQ` is right-angled at `P`.

Use Pythagoras theorem:

$$
OQ^2 = OP^2 + PQ^2
$$

Substitute:

$$
12^2 = 5^2 + PQ^2
$$

$$
144 = 25 + PQ^2
$$

$$
PQ^2 = 119
$$

Therefore:

$$
PQ = \sqrt{119}\text{ cm}
$$

Correct option:

$$
\sqrt{119}\text{ cm}
$$

## Question 4: Draw a Circle and Parallel Lines

Construction description:

1. Draw any circle.
2. Draw a line cutting the circle at two points. This is a secant.
3. Draw a line parallel to it that just touches the circle at one point. This is a tangent.

Key idea:

Parallel lines at different distances from the centre can be:

- secants if their distance from the centre is less than the radius;
- tangents if their distance from the centre is equal to the radius;
- non-intersecting lines if their distance from the centre is greater than the radius.

---

# Unit 10F: Solved Exercise 10.2

## Question 1: Radius From Tangent Length and Centre Distance

From a point `Q`, tangent length is:

$$
24\text{ cm}
$$

Distance from centre:

$$
OQ = 25\text{ cm}
$$

Let radius be `r`.

Since radius to tangent is perpendicular, triangle `OQP` is right-angled at `P`.

Use:

$$
OQ^2 = OP^2 + PQ^2
$$

Substitute:

$$
25^2 = r^2 + 24^2
$$

$$
625 = r^2 + 576
$$

$$
r^2 = 49
$$

$$
r = 7
$$

Correct option:

$$
7\text{ cm}
$$

## Question 2: Find `angle PTQ`

Given:

$$
\angle POQ = 110^\circ
$$

`TP` and `TQ` are tangents.

Therefore:

$$
OP \perp TP
$$

and:

$$
OQ \perp TQ
$$

So:

$$
\angle OPT = 90^\circ
$$

and:

$$
\angle OQT = 90^\circ
$$

In quadrilateral `OPTQ`, angle sum is `360^\circ`.

Therefore:

$$
\angle PTQ = 360^\circ - 90^\circ - 90^\circ - 110^\circ
$$

$$
\angle PTQ = 70^\circ
$$

Correct option:

$$
70^\circ
$$

## Question 3: Find `angle POA`

Tangents `PA` and `PB` from point `P` are inclined at:

$$
80^\circ
$$

So:

$$
\angle APB = 80^\circ
$$

Since radii are perpendicular to tangents:

$$
\angle OAP = 90^\circ
$$

and:

$$
\angle OBP = 90^\circ
$$

In quadrilateral `AOBP`:

$$
\angle AOB + \angle APB + 90^\circ + 90^\circ = 360^\circ
$$

So:

$$
\angle AOB + 80^\circ + 180^\circ = 360^\circ
$$

$$
\angle AOB = 100^\circ
$$

Now `OP` bisects the angle between `OA` and `OB` because triangles `OAP` and `OBP` are congruent.

Therefore:

$$
\angle POA = \frac{100^\circ}{2}
$$

$$
\angle POA = 50^\circ
$$

Correct option:

$$
50^\circ
$$

## Question 4: Tangents at Ends of a Diameter Are Parallel

Let `AB` be a diameter of a circle with centre `O`.

Let tangents at `A` and `B` be `l` and `m`.

Since tangent is perpendicular to radius:

$$
l \perp OA
$$

and:

$$
m \perp OB
$$

But `OA` and `OB` lie on the same straight line `AB`.

Therefore, both tangents are perpendicular to the same line.

So:

$$
l \parallel m
$$

Hence, tangents drawn at the ends of a diameter are parallel.

## Question 5: Perpendicular at Point of Contact Passes Through Centre

Let a tangent touch the circle at `P`.

Let `O` be the centre.

By Theorem 10.1:

$$
OP \perp \text{tangent at }P
$$

The perpendicular to a line at a given point is unique.

Therefore, the perpendicular drawn at the point of contact must be the same line as `OP`.

Hence, it passes through the centre.

## Question 6: Find Radius

Distance of point `A` from centre:

$$
OA = 5\text{ cm}
$$

Length of tangent:

$$
AP = 4\text{ cm}
$$

Let radius be:

$$
OP = r
$$

Since:

$$
OP \perp AP
$$

triangle `OAP` is right-angled at `P`.

Use:

$$
OA^2 = OP^2 + AP^2
$$

Substitute:

$$
5^2 = r^2 + 4^2
$$

$$
25 = r^2 + 16
$$

$$
r^2 = 9
$$

$$
r = 3
$$

Answer:

$$
3\text{ cm}
$$

## Question 7: Chord of Larger Circle Touching Smaller Circle

Two concentric circles have radii:

$$
5\text{ cm}
$$

and:

$$
3\text{ cm}
$$

A chord of the larger circle touches the smaller circle.

Since it touches the smaller circle, the perpendicular distance from the common centre to the chord is:

$$
3\text{ cm}
$$

Let half of the chord be `x`.

In the right triangle formed:

$$
x^2 + 3^2 = 5^2
$$

$$
x^2 + 9 = 25
$$

$$
x^2 = 16
$$

$$
x = 4
$$

Therefore, chord length:

$$
2x = 8
$$

Answer:

$$
8\text{ cm}
$$

## Question 8: Circumscribed Quadrilateral

Prove:

$$
AB + CD = AD + BC
$$

Let the circle touch:

- `AB` at `P`;
- `BC` at `Q`;
- `CD` at `R`;
- `DA` at `S`.

Tangents from the same external point are equal.

From `A`:

$$
AP = AS
$$

From `B`:

$$
BP = BQ
$$

From `C`:

$$
CQ = CR
$$

From `D`:

$$
DR = DS
$$

Now:

$$
AB = AP + PB
$$

and:

$$
CD = CR + RD
$$

So:

$$
AB + CD = AP + PB + CR + RD
$$

Use equal tangents:

$$
= AS + BQ + CQ + DS
$$

Rearrange:

$$
= (AS + DS) + (BQ + CQ)
$$

Therefore:

$$
AB + CD = AD + BC
$$

Hence proved.

## Question 9: Prove `angle AOB = 90^\circ`

Two parallel tangents touch a circle, and a third tangent intersects them at `A` and `B`. Let the third tangent touch the circle at `C`.

From point `A`, the two tangent segments to the circle are equal. Therefore, `AO` bisects the angle between the two tangents from `A`.

From point `B`, the two tangent segments to the circle are equal. Therefore, `BO` bisects the angle between the two tangents from `B`.

Because the two outer tangents are parallel, the interior angles made with the third tangent are supplementary.

Let those two angles be:

$$
\alpha
$$

and:

$$
180^\circ-\alpha
$$

Since `AO` and `BO` bisect them, the angle between `AO` and the third tangent is:

$$
\frac{\alpha}{2}
$$

and the angle between `BO` and the third tangent is:

$$
\frac{180^\circ-\alpha}{2}
$$

Therefore:

$$
\angle AOB =
\frac{\alpha}{2}
+
\frac{180^\circ-\alpha}{2}
$$

$$
\angle AOB = 90^\circ
$$

Hence proved.

## Question 10: Angle Between Two Tangents

Prove that the angle between two tangents from an external point is supplementary to the angle subtended at the centre by the segment joining the points of contact.

Let `PA` and `PB` be tangents from external point `P`.

Join:

$$
OA,\quad OB
$$

Since radii are perpendicular to tangents:

$$
\angle OAP = 90^\circ
$$

and:

$$
\angle OBP = 90^\circ
$$

In quadrilateral `AOBP`:

$$
\angle AOB + \angle APB + 90^\circ + 90^\circ = 360^\circ
$$

So:

$$
\angle AOB + \angle APB = 180^\circ
$$

Hence, the two angles are supplementary.

## Question 11: Parallelogram Circumscribing a Circle Is a Rhombus

Let parallelogram `ABCD` circumscribe a circle.

For any circumscribed quadrilateral:

$$
AB + CD = AD + BC
$$

Since `ABCD` is a parallelogram:

$$
AB = CD
$$

and:

$$
AD = BC
$$

Substitute into:

$$
AB + CD = AD + BC
$$

We get:

$$
AB + AB = AD + AD
$$

So:

$$
2AB = 2AD
$$

Therefore:

$$
AB = AD
$$

A parallelogram with adjacent sides equal is a rhombus.

Hence proved.

## Question 12: Triangle Circumscribing a Circle

A triangle `ABC` circumscribes a circle of radius `4 cm`.

On side `BC`, the point of contact `D` divides it as:

$$
BD = 8\text{ cm}
$$

and:

$$
DC = 6\text{ cm}
$$

So:

$$
BC = 14\text{ cm}
$$

Let the circle touch `AB` at `F` and `AC` at `E`.

Tangents from `B` are equal:

$$
BF = BD = 8
$$

Tangents from `C` are equal:

$$
CE = CD = 6
$$

Tangents from `A` are equal. Let:

$$
AF = AE = x
$$

Then:

$$
AB = x+8
$$

and:

$$
AC = x+6
$$

Semiperimeter:

$$
s=\frac{AB+BC+AC}{2}
$$

$$
s=\frac{(x+8)+14+(x+6)}{2}
$$

$$
s=x+14
$$

Area using inradius:

$$
\text{Area}=rs
$$

Since `r = 4`:

$$
\text{Area}=4(x+14)
$$

Now use Heron's formula.

Here:

$$
s=x+14
$$

$$
s-BC=x
$$

$$
s-AC=8
$$

$$
s-AB=6
$$

So:

$$
\text{Area}^2=s(s-a)(s-b)(s-c)
$$

$$
\text{Area}^2=(x+14)\cdot x\cdot 8\cdot 6
$$

$$
\text{Area}^2=48x(x+14)
$$

But:

$$
\text{Area}=4(x+14)
$$

So:

$$
16(x+14)^2=48x(x+14)
$$

Divide by:

$$
16(x+14)
$$

We get:

$$
x+14=3x
$$

$$
2x=14
$$

$$
x=7
$$

Therefore:

$$
AB=x+8=15
$$

and:

$$
AC=x+6=13
$$

Answer:

$$
AB=15\text{ cm},\quad AC=13\text{ cm}
$$

## Question 13: Opposite Sides Subtend Supplementary Angles at Centre

Let quadrilateral `ABCD` circumscribe a circle with centre `O`.

Since tangents from an external point are equal, the line joining the centre to each vertex bisects the angle between the two tangents from that vertex.

Therefore:

$$
\angle OAB=\frac{1}{2}\angle DAB
$$

and:

$$
\angle OBA=\frac{1}{2}\angle ABC
$$

In triangle `AOB`:

$$
\angle AOB = 180^\circ-\frac{1}{2}(\angle DAB+\angle ABC)
$$

Similarly, in triangle `COD`:

$$
\angle COD = 180^\circ-\frac{1}{2}(\angle BCD+\angle CDA)
$$

Add both:

$$
\angle AOB+\angle COD
$$

$$
=360^\circ-\frac{1}{2}(\angle DAB+\angle ABC+\angle BCD+\angle CDA)
$$

The sum of angles of quadrilateral `ABCD` is:

$$
360^\circ
$$

So:

$$
\angle AOB+\angle COD
=360^\circ-\frac{1}{2}(360^\circ)
$$

$$
=180^\circ
$$

Thus, opposite sides `AB` and `CD` subtend supplementary angles at the centre.

Similarly:

$$
\angle BOC+\angle DOA=180^\circ
$$

Hence proved.

---

# Unit 10G: Theorem Bank

## Tangent-Radius Theorem

$$
\text{Radius through point of contact} \perp \text{tangent}
$$

## Equal Tangents Theorem

Tangents drawn from an external point to a circle are equal:

$$
PA=PB
$$

## Tangential Quadrilateral Property

If a quadrilateral circumscribes a circle, then:

$$
AB+CD=AD+BC
$$

---

# Unit 10H: Common Mistakes and Corrections

| Mistake | Why it is wrong | Correct habit |
|---|---|---|
| Treating a tangent like a secant | Tangent has only one common point with the circle | Count intersection points |
| Forgetting the right angle at point of contact | Radius and tangent are perpendicular | Join centre to contact point |
| Assuming tangents from different external points are equal | Only tangents from the same external point are equal | Group equal tangents vertex-wise |
| Using diameter instead of radius in Pythagoras | Right triangle uses radius to point of contact | Mark radius clearly |
| Missing the angle bisector result | Centre lies on bisector of angle between tangents | Use congruent right triangles |
| Forgetting `AB+CD=AD+BC` for tangential quadrilateral | It is a direct result of equal tangent lengths | Label contact points and write equal pairs |

---

# Final One-Page Summary

1. A tangent touches a circle at exactly one point.
2. A secant intersects a circle at two points.
3. The common point of a tangent and circle is the point of contact.
4. A circle has infinitely many tangents.
5. From a point inside a circle, no tangent can be drawn.
6. From a point on a circle, exactly one tangent can be drawn.
7. From an external point, exactly two tangents can be drawn.
8. Radius through the point of contact is perpendicular to the tangent.
9. Tangents from the same external point are equal.
10. In a circumscribed quadrilateral:

$$
AB+CD=AD+BC
$$

