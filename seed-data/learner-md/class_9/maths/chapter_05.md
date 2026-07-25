# Chapter 5: Circles - Chords, Arcs, and Cyclic Quadrilaterals
### NCERT Class 9 - Maths

---

## Chapter at a Glance

| Detail | Learner-Friendly Information |
|---|---|
| **Class** | 9 |
| **Subject** | Maths |
| **Chapter** | 5 |
| **Actual Chapter Focus** | Circles, chords, arcs, circumcircles, angles in circles, and cyclic quadrilaterals |
| **Source Chapter Theme** | "I'm Up and Down, and Round and Round" |
| **Raw File Header** | "Introduction to Euclid's Geometry" |
| **Textbook Pages** | 1-117 |
| **Core Skill** | Using geometry, symmetry, and congruent triangles to prove circle properties |
| **Main Exam Value** | Chord-distance calculations, angle-chasing, cyclic quadrilateral problems, and circle constructions |

> [!NOTE]
> The raw source file is `chapter_05.md` and its extraction header says "Introduction to Euclid's Geometry", but the chapter content is about **circles**. This learner-facing version follows the actual chapter content.

---

## Section Structure

| Section | Title | Main Learning Focus |
|---|---|---|
| **5.0** | Introduction | Circles in nature and the idea that all points on a circle are equally far from the centre. |
| **5.1** | Definitions | Circle, centre, radius, chord, diameter, arc, locus, and related terms. |
| **5.2** | Symmetries of a Circle | Rotational symmetry and reflection symmetry through every diameter. |
| **5.3** | How Many Circles? | Circles through two points, unique circle through three non-collinear points, circumcentre, and circumcircle. |
| **5.4** | Chords and the Angles They Subtend | Equal chords and equal central angles. |
| **5.5** | Midpoints and Perpendicular Bisectors of Chords | A radius to the midpoint of a chord is perpendicular to the chord, and the converse. |
| **5.6** | Distance of Chords from the Centre | Equal chords are equidistant from the centre; longer chords are nearer to the centre. |
| **5.7** | Angles Subtended by an Arc | The angle at the centre is twice the angle at the circle. |
| **5.8** | Concyclicity of Points | Conditions for four points to lie on one circle and properties of cyclic quadrilaterals. |

---

## Learning Outcomes

By the end of this chapter, you should be able to:

| Outcome | You Should Be Able To... |
|---|---|
| **Define circle terms** | Use centre, radius, chord, diameter, arc, locus, circumcentre, and circumcircle correctly. |
| **Use symmetry** | Explain why every diameter is a line of reflection symmetry and why a circle has complete rotational symmetry. |
| **Construct circles** | Find possible centres of circles through two points and construct the unique circle through three non-collinear points. |
| **Prove chord results** | Prove equal chord and equal central angle results using triangle congruence. |
| **Use perpendicular chord facts** | Connect chord midpoint, perpendicular from centre, and perpendicular bisector. |
| **Calculate chord length** | Use the Baudhāyana-Pythagoras theorem to find chord length, radius, or distance from centre. |
| **Compare chords** | Decide which chord is longer or closer to the centre. |
| **Solve angle problems** | Use the central angle theorem and angle in a semicircle theorem. |
| **Identify cyclic quadrilaterals** | Use opposite angle sums and equal subtended angles to test concyclicity. |
| **Write geometric proofs** | Convert a diagram into given facts, target statement, construction, theorem use, and conclusion. |

---

## Prerequisite Toolkit

Before this chapter, revise these ideas.

| Tool | What You Need Here |
|---|---|
| **Line segment** | A straight path between two endpoints. |
| **Midpoint** | Point that divides a segment into two equal parts. |
| **Perpendicular lines** | Lines meeting at \(90^\circ\). |
| **Perpendicular bisector** | A line perpendicular to a segment and passing through its midpoint. |
| **Triangle congruence** | SSS, SAS, ASA, and RHS congruence rules. |
| **Isosceles triangle property** | Equal sides have equal opposite angles. |
| **Exterior angle theorem** | An exterior angle of a triangle equals the sum of the two opposite interior angles. |
| **Baudhāyana-Pythagoras theorem** | In a right triangle, hypotenuse squared equals sum of squares of the other two sides. |

### Core Reminder: Baudhāyana-Pythagoras Theorem

If a right triangle has hypotenuse \(r\) and legs \(d\) and \(x\), then

$$
r^2=d^2+x^2
$$

So,

$$
x=\sqrt{r^2-d^2}
$$

This formula will appear repeatedly when a perpendicular from the centre meets a chord.

---

## Big Idea

A circle is not just a round drawing. It is a set of points obeying one exact rule:

> Every point on the circle is at the same distance from one fixed point.

That fixed point is the **centre**. The fixed distance is the **radius**.

Most of the chapter grows from that single idea.

Because all radii of the same circle are equal:

- triangles formed by two radii and a chord are isosceles;
- congruent triangles appear naturally;
- perpendiculars from the centre have strong midpoint properties;
- the distance of a chord from the centre controls the chord length;
- arcs and angles have fixed relationships;
- a quadrilateral inside a circle has predictable opposite angles.

---

## Key Terms

| Term | Meaning |
|---|---|
| **Circle** | The set of all points in a plane that are at a fixed distance from a fixed point. |
| **Centre** | The fixed point from which every point on the circle is equally distant. |
| **Radius** | The fixed distance from the centre to any point on the circle. Also, a segment joining the centre to a point on the circle. |
| **Chord** | A line segment whose endpoints lie on the circle. |
| **Diameter** | A chord passing through the centre. It is the longest chord. |
| **Arc** | A connected part of the circle between two endpoints. |
| **Minor arc** | The smaller arc between two points on a circle. |
| **Major arc** | The larger arc between two points on a circle. |
| **Semicircle** | Half of a circle, usually formed by a diameter. |
| **Locus** | The set of all points satisfying a given condition. |
| **Circumcircle** | The circle passing through all vertices of a triangle. |
| **Circumcentre** | The centre of the circumcircle of a triangle. |
| **Concyclic points** | Points that lie on one circle. |
| **Cyclic quadrilateral** | A quadrilateral whose four vertices lie on one circle. |
| **Subtend an angle** | To form an angle at a point by joining that point to the endpoints of a segment or arc. |

---

## 5.0 - Introduction: Circles Around Us

Human beings have noticed circular shapes since ancient times.

Examples include:

- the apparent shape of the Sun;
- the full Moon;
- ripples made when raindrops fall on water;
- cross-sections of plant stems;
- the arrangement of seeds in a sunflower;
- wheels, coins, bangles, plates, and rings;
- circular patterns in cave paintings and traditional designs.

The chapter begins with a simple observation:

> In every circle, there is a centre, and every point on the circular boundary is equally far from that centre.

This property is so important that it becomes the definition of a circle.

### Learner Activity: Finding the Centre of a Paper Circle

Suppose you have a circular piece of paper and you do not know its centre.

One practical method:

1. Fold the circle so that one part of the boundary exactly overlaps the opposite part.
2. Open it. The crease is a diameter.
3. Fold it again in a different way so that the boundary overlaps.
4. Open it. The second crease is another diameter.
5. The point where the two creases meet is the centre.

Why does this work?

Each fold line is a line of symmetry of the circle. Every line of symmetry of a circle passes through the centre. Therefore, the intersection of two different fold lines gives the centre.

---

## 5.1 - Definitions

### Circle as a Set of Points

A circle is the set of all points in a plane that are equidistant from a fixed point in that plane.

If the fixed point is \(O\) and the fixed distance is \(r\), then the circle consists of all points \(P\) such that

$$
OP=r
$$

Here:

- \(O\) is the centre;
- \(r\) is the radius;
- \(P\) is any point on the circle.

### Locus Meaning

The word **locus** means a set of points satisfying a condition.

So a circle can also be described as:

> The locus of all points in a plane that are at a fixed distance from a fixed point.

### Radius

A radius can mean:

- the distance from the centre to the circle;
- the line segment joining the centre to a point on the circle.

If \(A\), \(B\), and \(C\) lie on a circle with centre \(O\), then

$$
OA=OB=OC
$$

because all three are radii of the same circle.

### Chord

A chord is a line segment joining any two points on a circle.

If \(A\) and \(B\) are points on a circle, then \(AB\) is a chord.

Important:

- A chord need not pass through the centre.
- Many different chords can be drawn in the same circle.
- A chord becomes longer when it moves closer to the centre.

### Diameter

A diameter is a chord passing through the centre.

If \(AB\) is a diameter and \(O\) is the centre, then \(O\) lies on \(AB\), and

$$
AB=2r
$$

The diameter is the longest chord of a circle.

### Central Angle

When a chord \(AB\) is joined to the centre \(O\), the angle \(\angle AOB\) is called the angle subtended by chord \(AB\) at the centre.

The chord \(AB\) and the central angle \(\angle AOB\) are strongly connected:

- equal chords give equal central angles;
- equal central angles give equal chords.

### Quick Check

| Question | Answer |
|---|---|
| Is every diameter a chord? | Yes. Its endpoints lie on the circle. |
| Is every chord a diameter? | No. Only chords through the centre are diameters. |
| Are all radii of a circle equal? | Yes. This follows from the definition of a circle. |
| Can a radius be longer than a diameter? | No. A diameter is twice the radius. |
| Can a chord have length \(0\)? | In ordinary geometry, a chord has two distinct endpoints, so no. But as a limiting idea, a chord pushed to the boundary becomes very small. |

---

## 5.2 - Symmetries of a Circle

Circles are highly symmetrical.

### Rotational Symmetry

A figure has rotational symmetry if it looks the same after being rotated about a point.

A circle has **complete rotational symmetry**.

This means:

- rotate a circle by \(1^\circ\), it looks the same;
- rotate it by \(43^\circ\), it looks the same;
- rotate it by \(180^\circ\), it looks the same;
- rotate it by any angle, it still looks the same.

The centre of rotation is the centre of the circle.

### Reflection Symmetry

A figure has reflection symmetry if it can be folded along a line so that the two halves match exactly.

For a circle:

- every diameter is a line of reflection symmetry;
- every line of reflection symmetry passes through the centre.

So a circle has infinitely many lines of reflection symmetry.

### Comparison with Regular Polygons

| Figure | Rotational Symmetry | Lines of Reflection Symmetry |
|---|---|---|
| Square | \(90^\circ, 180^\circ, 270^\circ, 360^\circ\) | 4 |
| Regular pentagon | Multiples of \(72^\circ\) | 5 |
| Regular hexagon | Multiples of \(60^\circ\) | 6 |
| Circle | Every angle | Infinitely many |

### Important Consequence

Because of symmetry:

- if one chord can be rotated into another chord, the two chords are equal;
- if one point on the boundary is rotated, it still lies on the same circle;
- any diameter divides the circle into two equal semicircles.

---

## 5.3 - How Many Circles?

This section asks two important questions:

1. How many circles can pass through two given points?
2. How many circles can pass through three given points?

The answers are very different.

---

### 5.3.1 - Circles Through Two Points

Suppose \(A\) and \(B\) are two fixed points.

If a circle passes through \(A\) and \(B\), its centre \(O\) must satisfy:

$$
OA=OB
$$

So \(O\) must be equidistant from \(A\) and \(B\).

The locus of points equidistant from \(A\) and \(B\) is the perpendicular bisector of \(AB\).

Therefore:

> The centre of every circle passing through \(A\) and \(B\) lies on the perpendicular bisector of \(AB\).

Also:

> Every point on the perpendicular bisector of \(AB\) can be used as the centre of a circle passing through \(A\) and \(B\).

So there are infinitely many circles through two fixed points.

### Smallest Circle Through Two Points

The smallest possible circle through \(A\) and \(B\) has \(AB\) as its diameter.

If \(AB=d\), then the smallest radius is

$$
\frac{d}{2}
$$

The centre is the midpoint of \(AB\).

### Largest Circle Through Two Points

There is no largest circle through two fixed points.

As the centre moves farther and farther away along the perpendicular bisector of \(AB\), the radius keeps increasing.

### Visual Meaning

If the centre is close to \(AB\), the circle bends sharply between \(A\) and \(B\).

If the centre is far away, the circle looks less curved near \(A\) and \(B\).

This is why a very large circle can look almost like a straight line in a small region.

---

### 5.3.2 - Circles Through Three Points

Now suppose \(A\), \(B\), and \(C\) are three distinct points.

There are two cases.

### Case 1: The Points Are Collinear

If \(A\), \(B\), and \(C\) lie on one straight line, no circle can pass through all three.

Reason:

- a line can cut a circle at at most two points;
- if three distinct points on one line were on a circle, the same line would meet the circle in three points, which is impossible.

Another way:

- the centre would need to be equidistant from \(A\), \(B\), and \(C\);
- it would lie on the perpendicular bisectors of \(AB\) and \(BC\);
- for collinear points, those perpendicular bisectors are parallel and do not meet.

So there is no centre.

### Case 2: The Points Are Non-Collinear

If \(A\), \(B\), and \(C\) are not collinear, exactly one circle passes through them.

This is one of the most important results in the chapter.

### Theorem 1

There is a unique circle passing through three non-collinear points.

### Proof Idea

Let \(A\), \(B\), and \(C\) be non-collinear.

If a circle passes through them and has centre \(O\), then:

$$
OA=OB=OC
$$

Since \(OA=OB\), point \(O\) lies on the perpendicular bisector of \(AB\).

Since \(OA=OC\), point \(O\) lies on the perpendicular bisector of \(AC\).

The perpendicular bisectors of \(AB\) and \(AC\) meet at exactly one point because \(A\), \(B\), and \(C\) are non-collinear.

That intersection point is the only possible centre \(O\).

Using \(O\) as centre and \(OA\) as radius gives a circle through \(A\), \(B\), and \(C\).

Therefore, exactly one such circle exists.

### Circumcircle and Circumcentre

For triangle \(ABC\):

- the circle through \(A\), \(B\), and \(C\) is called the **circumcircle**;
- the centre of that circle is called the **circumcentre**;
- the triangle is said to be **inscribed** in the circle;
- the circle is said to **circumscribe** the triangle.

### How to Construct the Circumcircle of a Triangle

1. Draw triangle \(ABC\).
2. Construct the perpendicular bisector of \(AB\).
3. Construct the perpendicular bisector of \(AC\) or \(BC\).
4. Mark their intersection as \(O\).
5. Draw a circle with centre \(O\) and radius \(OA\).
6. The circle will pass through \(A\), \(B\), and \(C\).

### Position of the Circumcentre

| Type of Triangle | Position of Circumcentre |
|---|---|
| Acute-angled triangle | Inside the triangle |
| Right-angled triangle | Midpoint of the hypotenuse |
| Obtuse-angled triangle | Outside the triangle |

### Why the Right Triangle Case Is Special

If \(ABC\) is right-angled at \(C\), then the midpoint \(O\) of hypotenuse \(AB\) is equidistant from \(A\), \(B\), and \(C\).

So \(O\) is the circumcentre.

This also leads to a later result:

> The angle in a semicircle is \(90^\circ\).

---

## Exercise Set 5.1 - Guided Format

| Question | What You Need To Do | Key Idea |
|---|---|---|
| 1 | Draw \(\triangle ABC\) with \(AB=5\text{ cm}\), \(\angle A=70^\circ\), \(\angle B=60^\circ\). Draw its circumcircle. | Construct triangle, draw perpendicular bisectors, locate circumcentre. The triangle is acute, so centre should be inside. |
| 2 | Draw \(\triangle ABC\) with \(AB=5\text{ cm}\), \(\angle A=100^\circ\), \(AC=4\text{ cm}\). Draw circumcircle. | The triangle has an obtuse angle, so the circumcentre should be outside. |
| 3 | Draw \(\triangle ABC\), \(AB=6\text{ cm}\), \(BC=7\text{ cm}\), \(CA=7\text{ cm}\). Draw circumcircle and measure \(OA, OB, OC\). | All three should be equal because they are radii of the circumcircle. |
| 4 | Find the least possible radius of a circle through two points \(A\) and \(B\). | Smallest circle has \(AB\) as diameter, so radius is \(\frac{AB}{2}\). |

### Think, Draw, and Infer

| Prompt | Learner Guidance |
|---|---|
| Three collinear points \(A\), \(B\), \(C\) | Their perpendicular bisectors do not meet at one common point, so no circle passes through all three. |
| Can a line cut a circle in three distinct points? | No. A line can intersect a circle in at most two points. |
| Can congruent triangles share the same circumcircle? | Yes. Rotations or reflections of a triangle on the same circle can create congruent triangles with the same circumcircle. |

---

## 5.4 - Chords and the Angles They Subtend

This section studies the relation between:

- the length of a chord;
- the angle it subtends at the centre.

### Theorem 2

Equal chords of a circle subtend equal angles at the centre.

### Meaning

Suppose \(AB\) and \(DE\) are chords of the same circle with centre \(O\).

If

$$
AB=DE
$$

then

$$
\angle AOB=\angle DOE
$$

### Proof

In triangles \(OAB\) and \(ODE\):

$$
OA=OD
$$

because both are radii.

$$
OB=OE
$$

because both are radii.

Also,

$$
AB=DE
$$

given.

So by SSS congruence,

$$
\triangle OAB \cong \triangle ODE
$$

Therefore, corresponding angles are equal:

$$
\angle AOB=\angle DOE
$$

### Theorem 3

Chords of a circle that subtend equal angles at the centre are equal.

### Meaning

If

$$
\angle AOB=\angle DOE
$$

then

$$
AB=DE
$$

### Proof

In triangles \(OAB\) and \(ODE\):

$$
OA=OD
$$

because both are radii.

$$
OB=OE
$$

because both are radii.

And

$$
\angle AOB=\angle DOE
$$

given.

So by SAS congruence,

$$
\triangle OAB \cong \triangle ODE
$$

Therefore, corresponding sides are equal:

$$
AB=DE
$$

### Important Pair of Results

Theorem 2 and Theorem 3 form a converse pair.

| Given | Conclusion |
|---|---|
| Equal chords | Equal angles at centre |
| Equal angles at centre | Equal chords |

### Worked Example 1

In a circle with centre \(O\), chords \(AB\) and \(CD\) are equal. If \(\angle AOB=48^\circ\), find \(\angle COD\).

Since equal chords subtend equal angles at the centre,

$$
\angle COD=48^\circ
$$

### Worked Example 2

In a circle with centre \(O\), \(\angle AOB=\angle COD\). If \(CD=9\text{ cm}\), find \(AB\).

Since equal central angles stand on equal chords,

$$
AB=CD=9\text{ cm}
$$

---

## Exercise Set 5.2 - Guided Format

| Question | What You Need To Show | Key Idea |
|---|---|---|
| 1 | The triangle formed by a chord and the centre is isosceles. | If \(AB\) is a chord and \(O\) is centre, then \(OA=OB\). |
| 2 | Two such isosceles triangles with equal base length are congruent. | Use SSS: two radii and equal chord/base. |

### Model Proof for Question 1

Let \(AB\) be a chord of a circle with centre \(O\).

Join \(OA\) and \(OB\).

Since \(A\) and \(B\) lie on the circle:

$$
OA=OB
$$

Therefore, \(\triangle OAB\) has two equal sides.

So \(\triangle OAB\) is isosceles.

---

## 5.5 - Midpoints and Perpendicular Bisectors of Chords

This section connects:

- centre;
- chord;
- midpoint of chord;
- perpendicular from centre.

### Theorem 4

The line joining the centre of a circle and the midpoint of a chord is perpendicular to the chord.

### Meaning

Let \(AB\) be a chord of a circle with centre \(O\).

Let \(M\) be the midpoint of \(AB\).

Then

$$
OM\perp AB
$$

### Proof

In triangles \(OMA\) and \(OMB\):

$$
OA=OB
$$

because both are radii.

$$
AM=BM
$$

because \(M\) is the midpoint of \(AB\).

$$
OM=OM
$$

common side.

So by SSS congruence,

$$
\triangle OMA \cong \triangle OMB
$$

Therefore,

$$
\angle OMA=\angle OMB
$$

But \(\angle OMA\) and \(\angle OMB\) form a linear pair, so their sum is \(180^\circ\).

Two equal angles whose sum is \(180^\circ\) must each be \(90^\circ\).

Therefore,

$$
OM\perp AB
$$

### Theorem 5

The perpendicular from the centre of a circle to a chord bisects the chord.

### Meaning

Let \(AB\) be a chord and let \(OM\perp AB\), where \(O\) is the centre and \(M\) lies on \(AB\).

Then

$$
AM=BM
$$

### Proof

In right triangles \(OMA\) and \(OMB\):

$$
OA=OB
$$

because both are radii.

$$
OM=OM
$$

common side.

And

$$
\angle OMA=\angle OMB=90^\circ
$$

So by RHS congruence,

$$
\triangle OMA \cong \triangle OMB
$$

Therefore,

$$
AM=BM
$$

### Combined Statement

For a chord \(AB\) of a circle with centre \(O\):

| If You Know | You Can Conclude |
|---|---|
| \(M\) is midpoint of \(AB\) | \(OM\perp AB\) |
| \(OM\perp AB\) | \(M\) is midpoint of \(AB\) |

### Important Caution

The perpendicular bisector of a chord passes through the centre of the circle.

But a random perpendicular to a chord does not necessarily pass through the centre.

The line must both:

- be perpendicular to the chord;
- pass through the midpoint of the chord.

---

## Exercise Set 5.3 - Guided Format

| Question | What You Need To Do | Key Idea |
|---|---|---|
| 1 | Explain why the perpendicular from centre to chord bisects the chord. | Use RHS congruence in the two right triangles. |
| 2 | An isosceles triangle \(ABC\) is inscribed in a circle, \(AB=AC\). Show altitude from \(A\) to \(BC\) passes through centre. | Since \(AB=AC\), equal chords subtend equal geometry; the altitude also bisects \(BC\), so it is perpendicular bisector of chord \(BC\). |
| 3 | Parallel chords of lengths \(6\text{ cm}\) and \(8\text{ cm}\) are on opposite sides of centre; radius \(5\text{ cm}\). Find distance between midpoints. | Use right triangles formed by radius, half-chord, and perpendicular distance. |

### Worked Solution for Exercise 5.3, Question 3

Radius:

$$
r=5\text{ cm}
$$

For the chord of length \(6\text{ cm}\), half-chord is:

$$
3\text{ cm}
$$

Distance from centre:

$$
\sqrt{5^2-3^2}=\sqrt{25-9}=\sqrt{16}=4\text{ cm}
$$

For the chord of length \(8\text{ cm}\), half-chord is:

$$
4\text{ cm}
$$

Distance from centre:

$$
\sqrt{5^2-4^2}=\sqrt{25-16}=\sqrt{9}=3\text{ cm}
$$

The chords are on opposite sides of the centre, so the distance between their midpoints is:

$$
4+3=7\text{ cm}
$$

Answer:

$$
7\text{ cm}
$$

---

## 5.6 - Distance of Chords from the Centre

The distance from a point to a line is measured along the perpendicular.

So the distance from the centre \(O\) to a chord \(AB\) means:

> the length of the perpendicular from \(O\) to \(AB\).

If \(OM\perp AB\), then \(OM\) is the distance from the centre to the chord.

By Theorem 5, \(M\) is also the midpoint of \(AB\).

This creates a right triangle:

- hypotenuse: radius \(OA\);
- one leg: distance \(OM\);
- other leg: half-chord \(AM\).

### The Most Useful Chord Formula

Let:

- radius \(=r\);
- perpendicular distance from centre to chord \(=d\);
- chord length \(=L\).

Then half the chord has length:

$$
\frac{L}{2}
$$

Using the right triangle:

$$
r^2=d^2+\left(\frac{L}{2}\right)^2
$$

So:

$$
\left(\frac{L}{2}\right)^2=r^2-d^2
$$

Therefore:

$$
L=2\sqrt{r^2-d^2}
$$

This is one of the most important calculation tools in the chapter.

---

### Theorem 6

Chords of a circle having the same length are all at the same distance from the centre.

### Meaning

If \(AB\) and \(CD\) are equal chords of the same circle, and perpendiculars from centre \(O\) meet them at \(M\) and \(N\), then:

$$
OM=ON
$$

### Proof Using Right Triangles

Let

$$
AB=CD
$$

Since perpendiculars from centre to chords bisect them:

$$
AM=\frac{AB}{2}
$$

and

$$
CN=\frac{CD}{2}
$$

So,

$$
AM=CN
$$

Also:

$$
OA=OC
$$

because both are radii.

In right triangles \(OMA\) and \(ONC\):

- hypotenuse \(OA=OC\);
- leg \(AM=CN\);
- both are right triangles.

By RHS congruence,

$$
\triangle OMA \cong \triangle ONC
$$

Therefore,

$$
OM=ON
$$

So equal chords are equidistant from the centre.

---

### Theorem 7

Chords of a circle that are equidistant from the centre have equal length.

### Meaning

If two chords are at the same perpendicular distance from the centre, then the chords have equal length.

If

$$
OM=ON
$$

then

$$
AB=CD
$$

### Proof Idea

Again use right triangles.

In right triangles \(OMA\) and \(ONC\):

- \(OA=OC\), because both are radii;
- \(OM=ON\), because distances are equal;
- both are right triangles.

By RHS congruence:

$$
\triangle OMA \cong \triangle ONC
$$

So:

$$
AM=CN
$$

Since \(M\) and \(N\) are midpoints of the chords:

$$
AB=2AM
$$

and

$$
CD=2CN
$$

Therefore:

$$
AB=CD
$$

### Theorem 6 and Theorem 7 Together

| Given | Conclusion |
|---|---|
| Equal chords | Equal distance from centre |
| Equal distance from centre | Equal chords |

---

## 5.6.1 - Which Unequal Chord Is Farther from the Centre?

When two chords are not equal, the longer chord is closer to the centre.

This may feel natural if you imagine sliding a chord across a circle:

- near the centre, the chord is long;
- near the boundary, the chord is short;
- at the boundary, the chord shrinks toward a single point.

### Theorem 8

Let \(AB\) and \(DE\) be two chords of a circle with centre \(O\).

If

$$
AB>DE
$$

then the distance from \(O\) to \(AB\) is less than the distance from \(O\) to \(DE\).

In short:

> Longer chord means smaller distance from centre.

### Proof Using Baudhāyana-Pythagoras

Let \(OM\perp AB\) and \(ON\perp DE\).

Then \(M\) and \(N\) are midpoints of the chords.

Since \(AB>DE\), their halves also satisfy:

$$
AM>DN
$$

Using right triangle \(OMA\):

$$
OA^2=OM^2+AM^2
$$

Using right triangle \(OND\):

$$
OD^2=ON^2+DN^2
$$

Since \(OA=OD\), both are radii.

So:

$$
OM^2+AM^2=ON^2+DN^2
$$

But

$$
AM^2>DN^2
$$

Therefore \(OM^2\) must be smaller than \(ON^2\).

Hence:

$$
OM<ON
$$

So the longer chord \(AB\) is closer to the centre.

### Diameter as the Longest Chord

The chord nearest to the centre is the chord whose distance from the centre is \(0\).

That chord passes through the centre.

Therefore, it is a diameter.

So the diameter is the greatest chord of a circle.

---

## Exercise Set 5.4 - Guided Format

| Question | What You Need To Do | Key Idea |
|---|---|---|
| 1 | Use Baudhāyana-Pythagoras to prove equal chords are equidistant from centre. | In both right triangles, hypotenuse \(r\) is equal and half-chords are equal. |
| 2 | If perpendicular distances from centre to two chords are equal, show chords are equal. | Use RHS congruence or the chord formula. |
| 3 | Solve Question 2 using Baudhāyana-Pythagoras. | Equal \(r\) and equal \(d\) imply equal half-chords. |

---

## Exercise Set 5.5 - Guided Format

| Question | Learner Task | Key Idea |
|---|---|---|
| 1 | Radius \(7\text{ cm}\), perpendicular distance \(6\text{ cm}\). Find chord length. | Use \(L=2\sqrt{r^2-d^2}\). |
| 2 | Explain why chord length is \(2\sqrt{r^2-d^2}\). | Drop perpendicular from centre; it bisects chord; apply Baudhāyana-Pythagoras. |
| 3 | If distance of \(AB\) from centre is twice distance of \(CD\), can we conclude \(CD=2AB\)? | No. Chord length depends on square roots, not direct proportion. |

### Worked Solution for Exercise 5.5, Question 1

Given:

$$
r=7\text{ cm}
$$

and

$$
d=6\text{ cm}
$$

Chord length:

$$
L=2\sqrt{r^2-d^2}
$$

Substitute:

$$
L=2\sqrt{7^2-6^2}
$$

$$
L=2\sqrt{49-36}
$$

$$
L=2\sqrt{13}
$$

Answer:

$$
2\sqrt{13}\text{ cm}
$$

### Why Question 3 Is Not Direct Proportion

Let \(r=10\).

If one chord is at distance \(2\) from the centre:

$$
L_1=2\sqrt{10^2-2^2}=2\sqrt{96}
$$

If another chord is at distance \(4\), which is twice \(2\):

$$
L_2=2\sqrt{10^2-4^2}=2\sqrt{84}
$$

\(L_2\) is not half of \(L_1\), and \(L_1\) is not twice \(L_2\).

So chord length and distance from centre are not directly proportional.

---

## 5.7 - Angles Subtended by an Arc

An arc is a connected part of a circle.

Two points \(A\) and \(B\) on a circle divide the circle into two arcs:

- the smaller arc, called the **minor arc**;
- the larger arc, called the **major arc**.

If the two arcs are equal, each is a semicircle.

### Angle Subtended by an Arc at the Centre

Suppose \(O\) is the centre and \(A\), \(B\) are endpoints of an arc.

The angle subtended by the arc at the centre is the angle swept by \(OA\) as it turns to \(OB\) along that arc.

For a minor arc, this is usually the smaller central angle.

For a major arc, this is usually the reflex central angle.

### Minor Arc and Major Arc

| Central Angle | Type of Arc |
|---|---|
| Less than \(180^\circ\) | Minor arc |
| Equal to \(180^\circ\) | Semicircle |
| Greater than \(180^\circ\) | Major arc |

### Angle Subtended by an Arc at a Point on the Circle

Let \(A\) and \(B\) be endpoints of an arc.

If \(P\) is a point on the circle outside that arc, then \(\angle APB\) is the angle subtended by the arc at \(P\).

The surprising fact:

> The angle is the same for every point \(P\) on the circle outside that arc.

This leads to the main theorem.

---

## 5.7.1 - Central Angle and Angle at the Circle

### Theorem 9

The angle subtended by an arc at the centre of the circle is double the angle subtended by the same arc at any point on the circle outside the arc.

### Meaning

Let \(A\) and \(B\) be endpoints of an arc, \(O\) the centre, and \(P\) a point on the remaining part of the circle.

Then:

$$
\angle AOB=2\angle APB
$$

when both angles stand on the same arc.

### Equivalent Form

The angle at the circle is half the corresponding angle at the centre:

$$
\angle APB=\frac{1}{2}\angle AOB
$$

### Proof Idea

The textbook proof uses:

- joining the centre to the point on the circle;
- forming isosceles triangles from equal radii;
- using the exterior angle theorem.

The key reason the proof works is:

$$
OA=OP=OB
$$

because all are radii.

Equal radii create isosceles triangles, and isosceles triangles create equal base angles.

Those equal base angles combine to show that the central angle is twice the angle at the circle.

### Angles in the Same Segment

If points \(P\) and \(Q\) lie on the same arc segment outside chord \(AB\), then:

$$
\angle APB=\angle AQB
$$

Why?

Both are half of the same central angle.

This is often stated as:

> Angles in the same segment of a circle are equal.

### Corollary: Angle in a Semicircle

The angle subtended by a diameter at any point on the circle is \(90^\circ\).

### Proof

Let \(AB\) be a diameter and \(P\) any point on the circle.

The arc from \(A\) to \(B\) not containing \(P\) is a semicircle.

It subtends a straight angle at the centre:

$$
180^\circ
$$

By Theorem 9:

$$
\angle APB=\frac{1}{2}\times 180^\circ
$$

Therefore:

$$
\angle APB=90^\circ
$$

This result is very useful in geometry problems.

### Common Use

If \(AB\) is a diameter and \(P\) lies on the circle, then triangle \(APB\) is right-angled at \(P\).

So:

$$
AP^2+PB^2=AB^2
$$

by the Baudhāyana-Pythagoras theorem.

---

## Exercise Set 5.6 - Guided Format

| Question | Learner Task | Key Idea |
|---|---|---|
| 1 | Centre angle \(AOB=60^\circ\), radius \(12\text{ cm}\). Find chord \(AB\). | Triangle \(AOB\) has \(OA=OB=12\) and included angle \(60^\circ\), so it is equilateral. |
| 2(i) | Can points \(X,Y\) on same side of \(AB\) give different \(\angle AXB\) and \(\angle AYB\)? | If both are on the same arc segment of the same circle, no. |
| 2(ii) | If \(\angle AXB=\angle AYB\), must \(X,Y\) lie on same side? | Be careful: equality of angles alone needs context. |
| 2(iii) | If \(\angle AXB=\angle AYB\) and \(X,Y\) are not on the circle, does the circle through \(A,B,X\) pass through \(Y\)? | Use concyclicity theorem if \(X,Y\) are on the same side of \(AB\). |
| 3 | Find \(x\) in a given circle figure. | Use angles in same segment or cyclic quadrilateral angle sum depending on figure. |

### Worked Solution for Exercise 5.6, Question 1

Given:

$$
OA=OB=12\text{ cm}
$$

and

$$
\angle AOB=60^\circ
$$

Triangle \(AOB\) has two equal sides \(OA\) and \(OB\), so it is isosceles.

The angle between the equal sides is \(60^\circ\).

Therefore, the remaining two angles are also \(60^\circ\), making the triangle equilateral.

Hence:

$$
AB=12\text{ cm}
$$

---

## 5.8 - Concyclicity of Points

Points are called **concyclic** if they lie on the same circle.

This section asks:

> How can we know whether four points lie on one circle?

The chapter gives a powerful test.

### Theorem 10

If a line segment \(AB\) subtends equal angles at two other points \(C\) and \(D\), and \(C\) and \(D\) lie on the same side of \(AB\), then \(A\), \(B\), \(C\), and \(D\) lie on one circle.

### Meaning

If:

$$
\angle ACB=\angle ADB
$$

and \(C\), \(D\) are on the same side of \(AB\), then the four points \(A\), \(B\), \(C\), \(D\) are concyclic.

### Why This Makes Sense

In a circle, angles in the same segment are equal.

Theorem 10 is the converse idea:

> If two equal angles stand on the same segment \(AB\), then the points forming those angles lie on the same circle through \(A\) and \(B\).

### Proof Idea

1. Through non-collinear points \(A\), \(B\), and \(C\), draw the unique circle.
2. Suppose \(D\) is not on that circle.
3. If \(D\) is outside the circle, joining lines creates an exterior angle contradiction.
4. If \(D\) is inside the circle, a similar contradiction occurs.
5. Therefore, \(D\) must lie on the circle.

So \(A\), \(B\), \(C\), and \(D\) are concyclic.

---

## Cyclic Quadrilaterals

A quadrilateral whose four vertices lie on a circle is called a cyclic quadrilateral.

If \(ABCD\) is cyclic, then \(A\), \(B\), \(C\), and \(D\) lie on one circle.

### Theorem 11

The sum of two opposite angles of a cyclic quadrilateral is \(180^\circ\).

### Meaning

If \(ABCD\) is cyclic, then:

$$
\angle A+\angle C=180^\circ
$$

and

$$
\angle B+\angle D=180^\circ
$$

### Proof Idea

In a cyclic quadrilateral:

- \(\angle A\) is half the measure of the arc \(BCD\);
- \(\angle C\) is half the measure of the arc \(DAB\);
- the two arcs together complete the full circle;
- full angle around the centre is \(360^\circ\).

So:

$$
\angle A+\angle C=\frac{1}{2}\times 360^\circ=180^\circ
$$

Similarly:

$$
\angle B+\angle D=180^\circ
$$

### Theorem 12

If a pair of opposite angles of a quadrilateral add up to \(180^\circ\), then the quadrilateral is cyclic.

### Meaning

If in quadrilateral \(ABCD\):

$$
\angle A+\angle C=180^\circ
$$

then \(ABCD\) is cyclic.

Similarly, if:

$$
\angle B+\angle D=180^\circ
$$

then \(ABCD\) is cyclic.

### Theorem 11 and Theorem 12 Together

| Given | Conclusion |
|---|---|
| Quadrilateral is cyclic | Opposite angles are supplementary |
| Opposite angles are supplementary | Quadrilateral is cyclic |

### Worked Example 1

A cyclic quadrilateral has \(\angle A=75^\circ\). Find \(\angle C\).

Opposite angles in a cyclic quadrilateral add to \(180^\circ\).

$$
\angle A+\angle C=180^\circ
$$

$$
75^\circ+\angle C=180^\circ
$$

$$
\angle C=105^\circ
$$

### Worked Example 2

Can a cyclic quadrilateral have angles \(80^\circ\), \(110^\circ\), \(100^\circ\), and \(70^\circ\) in order?

Check opposite pairs:

$$
80^\circ+100^\circ=180^\circ
$$

and

$$
110^\circ+70^\circ=180^\circ
$$

Yes, such a cyclic quadrilateral can exist.

### Worked Example 3

In a quadrilateral \(PQRS\), \(\angle P=(2x+10)^\circ\) and \(\angle R=(3x-20)^\circ\). If \(PQRS\) is cyclic, find \(x\).

Opposite angles are supplementary:

$$
(2x+10)+(3x-20)=180
$$

$$
5x-10=180
$$

$$
5x=190
$$

$$
x=38
$$

Then:

$$
\angle P=2(38)+10=86^\circ
$$

and

$$
\angle R=3(38)-20=94^\circ
$$

Check:

$$
86^\circ+94^\circ=180^\circ
$$

---

## End-of-Chapter Exercises - Structured Learner Guide

### A. Chord Length, Radius, and Distance

| Original Question | Skill Needed | Guide |
|---|---|---|
| 1. A chord is \(5\text{ cm}\) away from centre, radius \(13\text{ cm}\). Find chord length. | Chord formula | Use \(L=2\sqrt{13^2-5^2}\). |
| 3. Diameter \(26\text{ cm}\), chord \(24\text{ cm}\). Find distance from centre. | Reverse chord formula | Radius \(13\), half-chord \(12\), distance \(=\sqrt{13^2-12^2}\). |
| 4. Radius \(15\text{ cm}\), distance \(9\text{ cm}\). Find chord length. | Chord formula | Use \(L=2\sqrt{15^2-9^2}\). |
| 9. Chord length \(16\text{ cm}\), distance \(6\text{ cm}\). Find radius. | Right triangle | Half-chord \(8\); radius \(=\sqrt{6^2+8^2}\). |
| 18. Parallel chords \(10\text{ cm}\) and \(24\text{ cm}\) on same side of centre, distance between them \(7\text{ cm}\). Find radius. | Two right triangles | Let distances from centre be \(d_1,d_2\); use same radius and distance difference \(7\). |
| 19. Regular hexagon inscribed in circle radius \(r\). Find side and distance of side from centre. | Central angle \(60^\circ\) | Each side equals radius; distance to side is altitude of equilateral triangle. |

### B. Angle in a Circle

| Original Question | Skill Needed | Guide |
|---|---|---|
| 2. Arc subtends \(70^\circ\) at centre. Find angle at circle. | Theorem 9 | Angle at circle \(=\frac{1}{2}\times 70^\circ\). |
| 6. \(AB\) is diameter and \(C\) is on circumference. Find \(\angle ACB\). | Angle in semicircle | Answer \(90^\circ\). |
| 20. In cyclic quadrilateral \(MNOP\), \(MN\) is diameter. Discuss \(\angle MOP\) and \(\angle MNP\). | Angle in semicircle plus cyclic angles | Any angle subtended by diameter is \(90^\circ\), depending on which points lie on the relevant arc. |
| 24. Use a figure to justify angle in semicircle. | Central angle theorem | Diameter subtends \(180^\circ\) at centre, so angle at circle is \(90^\circ\). |

### C. Cyclic Quadrilateral Problems

| Original Question | Skill Needed | Guide |
|---|---|---|
| 7. \(ABCD\) cyclic, \(\angle A=75^\circ\), \(\angle B=110^\circ\). Find \(\angle C,\angle D\). | Opposite angle sum | \(\angle C=105^\circ\), \(\angle D=70^\circ\). |
| 8. \(\angle P=(2x+10)^\circ\), \(\angle R=(3x-20)^\circ\). | Algebra plus cyclic angles | Set their sum equal to \(180^\circ\). |
| 10. Cyclic quadrilateral has sides \(5,5,12,12\). Find area. | Split into two congruent triangles or use known cyclic shape | Treat as kite-like cyclic quadrilateral; draw diagonal between equal-side junctions. |
| 11. Find whether circumcentre lies inside or outside cyclic quadrilateral. | Angle and arc reasoning | Look at whether the quadrilateral contains a diameter-like diagonal or has obtuse angles. |
| 14. Show rectangle is the only parallelogram that can be inscribed in a circle. | Cyclic quadrilateral + parallelogram | Opposite angles in parallelogram are equal; opposite angles in cyclic quadrilateral add to \(180^\circ\); so each is \(90^\circ\). |
| 15. If rectangle is inscribed in a circle, diagonals intersect at centre. | Equal diagonals and circumcentre | Diagonal endpoints are opposite points on the circle; intersection is equidistant from all vertices. |
| 21. Exterior angle of cyclic quadrilateral equals interior opposite angle. | Linear pair and opposite angle sum | Exterior angle \(=180^\circ-\) adjacent interior angle \(=\) opposite interior angle. |
| 26. Justify opposite angles of cyclic quadrilateral sum to \(180^\circ\). | Arc theorem | Opposite angles are half of arcs that together make \(360^\circ\). |

### D. Proof-Based Chord Questions

| Original Question | Skill Needed | Guide |
|---|---|---|
| 5. Prove perpendicular bisector of chord passes through centre. | Equidistant points | Centre is equidistant from chord endpoints, so it lies on their perpendicular bisector. |
| 12. Equal intersecting chords are divided into corresponding equal segments. | Congruent triangles or chord symmetry | Use equality of chords and angles formed at intersection. |
| 13. Draw a circle where chord \(6\text{ cm}\) is \(3\text{ cm}\) from centre. | Right triangle construction | Half-chord \(3\), distance \(3\), radius \(3\sqrt2\). |
| 16. Midpoints of all chords of fixed length form what shape? | Equal distance from centre | They form a circle concentric with original circle. |
| 17. If chords \(AB\) and \(AC\) are congruent, centre lies on angle bisector of \(\angle BAC\). | Equal chords and congruent triangles | Centre is equidistant in a symmetric way from \(B\) and \(C\). |
| 22. No chord is longer than diameter. | Distance from centre | Diameter has distance \(0\) from centre and is longest. |
| 23. Shortest chord through interior point \(A\) is perpendicular to \(OA\). | Chord-distance relation | For chords through \(A\), distance from centre is maximum when chord is perpendicular to \(OA\). |
| 25. Chords perpendicular to diameter; prove segment joining midpoints is perpendicular to diameter. | Midpoint theorem for chords | Midpoints lie on perpendiculars from centre to those chords, creating a line parallel/perpendicular relation. |

---

## Detailed Worked Examples

### Example 1: Find Chord Length from Radius and Distance

A circle has radius \(13\text{ cm}\). A chord is \(5\text{ cm}\) from the centre. Find the chord length.

Let chord length be \(L\).

Using:

$$
L=2\sqrt{r^2-d^2}
$$

Substitute:

$$
L=2\sqrt{13^2-5^2}
$$

$$
L=2\sqrt{169-25}
$$

$$
L=2\sqrt{144}
$$

$$
L=24
$$

Answer:

$$
24\text{ cm}
$$

### Example 2: Find Distance from Centre to Chord

The diameter of a circle is \(26\text{ cm}\). A chord has length \(24\text{ cm}\). Find its distance from the centre.

Radius:

$$
r=\frac{26}{2}=13\text{ cm}
$$

Half-chord:

$$
\frac{24}{2}=12\text{ cm}
$$

Let distance from centre be \(d\).

Using right triangle:

$$
13^2=d^2+12^2
$$

$$
169=d^2+144
$$

$$
d^2=25
$$

$$
d=5
$$

Answer:

$$
5\text{ cm}
$$

### Example 3: Find Radius from Chord and Distance

A chord of length \(16\text{ cm}\) is \(6\text{ cm}\) from the centre. Find the radius.

Half-chord:

$$
8\text{ cm}
$$

Distance:

$$
6\text{ cm}
$$

Radius is the hypotenuse:

$$
r^2=6^2+8^2
$$

$$
r^2=36+64
$$

$$
r^2=100
$$

$$
r=10
$$

Answer:

$$
10\text{ cm}
$$

### Example 4: Cyclic Quadrilateral Algebra

In a cyclic quadrilateral \(ABCD\), \(\angle A=(3x+5)^\circ\) and \(\angle C=(2x+25)^\circ\). Find \(x\).

Opposite angles of a cyclic quadrilateral add to \(180^\circ\):

$$
(3x+5)+(2x+25)=180
$$

$$
5x+30=180
$$

$$
5x=150
$$

$$
x=30
$$

So:

$$
\angle A=3(30)+5=95^\circ
$$

and

$$
\angle C=2(30)+25=85^\circ
$$

Check:

$$
95^\circ+85^\circ=180^\circ
$$

### Example 5: Proving a Rectangle Is Cyclic

Every rectangle is cyclic.

Proof:

In a rectangle:

$$
\angle A=\angle B=\angle C=\angle D=90^\circ
$$

So:

$$
\angle A+\angle C=90^\circ+90^\circ=180^\circ
$$

Therefore, by the converse cyclic quadrilateral theorem, the rectangle is cyclic.

### Example 6: Why a Non-Rectangle Parallelogram Is Not Cyclic

In a parallelogram:

$$
\angle A=\angle C
$$

If it is cyclic, then:

$$
\angle A+\angle C=180^\circ
$$

Since \(\angle A=\angle C\):

$$
2\angle A=180^\circ
$$

So:

$$
\angle A=90^\circ
$$

Thus all angles are \(90^\circ\), meaning the parallelogram is a rectangle.

Therefore, the only parallelograms that are cyclic are rectangles.

---

## Proof Writing Templates

### Template 1: Proving Equal Chords Give Equal Angles

1. Identify the centre \(O\).
2. Join \(O\) to the endpoints of both chords.
3. State that all radii are equal.
4. Use the given equality of chords.
5. Apply SSS congruence.
6. Conclude the corresponding central angles are equal.

### Template 2: Proving Equal Angles Give Equal Chords

1. Identify the two central angles.
2. Join the centre to the chord endpoints.
3. State that the two pairs of radii are equal.
4. Use the given equal included angles.
5. Apply SAS congruence.
6. Conclude the corresponding chords are equal.

### Template 3: Proving a Perpendicular Bisects a Chord

1. Let \(OM\perp AB\), where \(O\) is the centre.
2. Join \(OA\) and \(OB\).
3. State \(OA=OB\).
4. Use RHS congruence in \(\triangle OMA\) and \(\triangle OMB\).
5. Conclude \(AM=BM\).

### Template 4: Proving Points Are Concyclic

Use any one of these:

| Given Situation | Conclude Concyclic Because |
|---|---|
| Two equal angles stand on same segment \(AB\) and points lie same side of \(AB\) | Converse of angles in same segment |
| Opposite angles of a quadrilateral add to \(180^\circ\) | Converse cyclic quadrilateral theorem |
| Four vertices are all at equal distance from one point | They lie on a circle with that point as centre |

---

## Common Mistakes and Corrections

| Mistake | Why It Is Wrong | Correct Thinking |
|---|---|---|
| Saying every chord is a diameter | A chord need not pass through the centre. | A diameter is a special chord through the centre. |
| Measuring distance from centre to chord along a slant line | Distance from a point to a line is perpendicular distance. | Always drop a perpendicular from centre to chord. |
| Forgetting that perpendicular from centre bisects chord | This causes wrong half-chord values. | Use half the chord in the right triangle. |
| Using full chord in Pythagoras triangle | The right triangle contains half the chord, not the full chord. | Use \(L/2\), not \(L\). |
| Thinking chord length is directly proportional to distance from centre | Formula has square root: \(L=2\sqrt{r^2-d^2}\). | Greater distance means shorter chord, but not linearly. |
| Confusing angle at centre and angle at circle | Angle at centre is double the angle at the circle for the same arc. | Centre angle \(=2\times\) circle angle. |
| Saying all quadrilaterals are cyclic | Only some quadrilaterals have vertices on one circle. | Use opposite angle sum or equal-angle tests. |
| Forgetting "same side" condition in concyclicity theorem | Equal angles on opposite sides may describe different circle positions. | Check the diagram and side condition. |
| Treating major and minor arcs as the same | They subtend different central angles. | Identify which arc the angle stands on. |

---

## Master Formula Sheet

### Circle Basics

Diameter:

$$
d=2r
$$

Radius:

$$
r=\frac{d}{2}
$$

### Chord Formula

If \(L\) is chord length, \(r\) is radius, and \(d\) is perpendicular distance from centre:

$$
L=2\sqrt{r^2-d^2}
$$

### Distance from Centre to Chord

If \(L\) and \(r\) are known:

$$
d=\sqrt{r^2-\left(\frac{L}{2}\right)^2}
$$

### Radius from Chord and Distance

If chord length \(L\) and distance \(d\) are known:

$$
r=\sqrt{d^2+\left(\frac{L}{2}\right)^2}
$$

### Arc Angle Theorem

For the same arc:

$$
\text{Angle at centre}=2\times \text{angle at circle}
$$

or

$$
\text{Angle at circle}=\frac{1}{2}\times \text{angle at centre}
$$

### Cyclic Quadrilateral

For cyclic quadrilateral \(ABCD\):

$$
\angle A+\angle C=180^\circ
$$

and

$$
\angle B+\angle D=180^\circ
$$

---

## Theorem Summary

| Theorem | Statement | Main Proof Tool |
|---|---|---|
| **1** | Exactly one circle passes through three non-collinear points. | Perpendicular bisectors meet at one point. |
| **2** | Equal chords subtend equal angles at centre. | SSS congruence. |
| **3** | Equal central angles stand on equal chords. | SAS congruence. |
| **4** | Line from centre to midpoint of chord is perpendicular to chord. | Congruence and linear pair. |
| **5** | Perpendicular from centre to chord bisects chord. | RHS congruence. |
| **6** | Equal chords are equidistant from centre. | RHS congruence or Pythagoras. |
| **7** | Chords equidistant from centre are equal. | RHS congruence or Pythagoras. |
| **8** | Longer chord is nearer to centre. | Pythagoras comparison. |
| **9** | Angle at centre is double angle at circle for same arc. | Isosceles triangles and exterior angle theorem. |
| **10** | Equal angles subtended by same segment imply concyclicity. | Contradiction using circle through three points. |
| **11** | Opposite angles of cyclic quadrilateral add to \(180^\circ\). | Arc angle theorem. |
| **12** | If opposite angles of a quadrilateral add to \(180^\circ\), it is cyclic. | Converse cyclic theorem. |

---

## Rapid Revision Questions

### Definitions

1. What is a circle?
2. What is the difference between radius and diameter?
3. What is a chord?
4. Why is a diameter a chord?
5. What does locus mean?
6. What are concyclic points?
7. What is a cyclic quadrilateral?

### Concepts

1. Why do infinitely many circles pass through two fixed points?
2. Why is there only one circle through three non-collinear points?
3. Why is there no circle through three collinear points?
4. Why is the diameter the longest chord?
5. Why are equal chords equidistant from the centre?
6. Why is a chord closer to the centre longer?
7. Why is the angle in a semicircle \(90^\circ\)?

### Calculations

1. Find chord length when \(r=10\) and \(d=6\).
2. Find distance from centre when \(r=17\) and chord length \(=30\).
3. Find radius when chord length \(=12\) and distance from centre \(=8\).
4. A cyclic quadrilateral has one angle \(115^\circ\). Find the opposite angle.
5. An arc subtends \(120^\circ\) at the centre. Find the angle it subtends at the circle.

### Proof Practice

1. Prove equal chords subtend equal angles at the centre.
2. Prove the perpendicular from centre to chord bisects the chord.
3. Prove the perpendicular bisector of a chord passes through the centre.
4. Prove opposite angles of a cyclic quadrilateral are supplementary.
5. Prove a rectangle is cyclic.

---

## Answers to Rapid Revision Calculations

### 1. \(r=10\), \(d=6\)

$$
L=2\sqrt{10^2-6^2}=2\sqrt{100-36}=2\sqrt{64}=16
$$

Answer:

$$
16
$$

### 2. \(r=17\), chord \(=30\)

Half-chord:

$$
15
$$

Distance:

$$
d=\sqrt{17^2-15^2}=\sqrt{289-225}=\sqrt{64}=8
$$

Answer:

$$
8
$$

### 3. Chord \(=12\), distance \(=8\)

Half-chord:

$$
6
$$

Radius:

$$
r=\sqrt{8^2+6^2}=\sqrt{64+36}=\sqrt{100}=10
$$

Answer:

$$
10
$$

### 4. Opposite angle to \(115^\circ\)

$$
180^\circ-115^\circ=65^\circ
$$

Answer:

$$
65^\circ
$$

### 5. Arc subtends \(120^\circ\) at centre

Angle at circle:

$$
\frac{120^\circ}{2}=60^\circ
$$

Answer:

$$
60^\circ
$$

---

## Final Chapter Summary

- A circle is the locus of all points in a plane that are at a fixed distance from a fixed point.
- The fixed point is the centre; the fixed distance is the radius.
- A chord joins two points on a circle.
- A diameter is a chord through the centre and is the longest chord.
- A circle has complete rotational symmetry and infinitely many lines of reflection symmetry.
- Infinitely many circles pass through two fixed points; their centres lie on the perpendicular bisector of the segment joining the points.
- Exactly one circle passes through three non-collinear points.
- The circle through the vertices of a triangle is its circumcircle.
- The centre of the circumcircle is the circumcentre.
- Equal chords subtend equal angles at the centre.
- Equal central angles stand on equal chords.
- The line from the centre to the midpoint of a chord is perpendicular to the chord.
- The perpendicular from the centre to a chord bisects the chord.
- Equal chords are equidistant from the centre.
- Chords equidistant from the centre are equal.
- The longer chord is nearer to the centre.
- For a chord of length \(L\), radius \(r\), and distance \(d\) from centre:

$$
L=2\sqrt{r^2-d^2}
$$

- An arc subtends an angle at the centre that is double the angle it subtends at the circle.
- Angles in the same segment of a circle are equal.
- The angle in a semicircle is \(90^\circ\).
- Four points are concyclic if they lie on the same circle.
- If a segment subtends equal angles at two points on the same side, then the four points are concyclic.
- Opposite angles of a cyclic quadrilateral add to \(180^\circ\).
- If opposite angles of a quadrilateral add to \(180^\circ\), then the quadrilateral is cyclic.

---

## Study Strategy for Learners

For this chapter, do not memorise theorems as isolated statements. Instead, connect every theorem to one of these three ideas:

1. **All radii of a circle are equal.**
2. **The perpendicular from the centre to a chord creates a right triangle and bisects the chord.**
3. **The angle at the centre is twice the angle at the circle for the same arc.**

Most problems become manageable when you identify which of these three ideas is being used.

When solving:

1. Mark the centre.
2. Join the centre to useful points on the circle.
3. Draw perpendiculars to chords when length or distance is involved.
4. Use half-chords, not full chords, inside right triangles.
5. Look for equal arcs, equal chords, or equal angles.
6. In quadrilaterals, immediately check whether opposite angles add to \(180^\circ\).

---

*Source: NCERT Class 9 - Maths, Chapter 5 raw file. Learner-facing version manually rewritten from the extracted chapter content about circles.*
