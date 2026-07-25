# Chapter 6: Measuring Space - Perimeter and Area
### NCERT Class 9 - Maths

---

## Chapter at a Glance

| Detail | Learner-Friendly Information |
|---|---|
| **Class** | 9 |
| **Subject** | Maths |
| **Chapter** | 6 |
| **Actual Chapter Title** | Measuring Space: Perimeter and Area |
| **Raw File Header** | "Lines and Angles" |
| **Textbook Pages** | 1-154 |
| **Core Theme** | Measuring boundary length and enclosed space for polygons, circles, arcs, sectors, and related shapes. |
| **Main Skill** | Choosing the correct perimeter or area formula, understanding why it works, and using it in multi-step geometry problems. |

> [!NOTE]
> The raw source file is `chapter_06.md` and its extraction header says "Lines and Angles", but the actual chapter content is **Measuring Space: Perimeter and Area**. This learner-facing version follows the actual chapter content.

---

## Section Structure

| Section | Title | Main Learning Focus |
|---|---|---|
| **6.0** | Introduction | Why perimeter and area matter in real situations such as race tracks. |
| **6.1** | Perimeter of a Shape | Meaning of perimeter and known perimeter formulas. |
| **6.2** | Perimeter of a Circle - The \(C/D\) Ratio | Circumference, diameter, and the constant \(\pi\). |
| **6.3** | \(\pi\) Is Irrational | Why \(\pi\) is not exactly equal to \(22/7\) or any fraction. |
| **6.4** | Length of an Arc of a Circle | Arc length as a fraction of circumference. |
| **6.5** | Problems, Puzzles, and Paradoxes on Perimeter | Circular perimeter puzzles and path-length comparisons. |
| **6.6** | Area of a Rectangle | Unit squares and rectangular area. |
| **6.7** | Area of a Parallelogram | Base-height formula and why side lengths alone are not enough. |
| **6.8** | Area of a Triangle | Half base times height; medians and equal areas. |
| **6.8.1** | Heron's Formula | Area of a triangle using only its three side lengths. |
| **6.9** | Squaring a Rectangle | Constructing a square equal in area to a given rectangle. |
| **6.10** | Area of a Circle | Historical and visual explanations of \(A=\pi r^2\). |
| **6.10.1** | Area of a Sector of a Circle | Sector area and segment area. |

---

## Learning Outcomes

By the end of this chapter, you should be able to:

| Outcome | You Should Be Able To... |
|---|---|
| **Explain perimeter** | Describe perimeter as total boundary length. |
| **Use circumference** | Calculate circumference from radius or diameter using \(C=2\pi r=\pi d\). |
| **Understand \(\pi\)** | Explain that \(\pi\) is a fixed ratio, irrational, and only approximated by fractions like \(22/7\). |
| **Calculate arc length** | Find the length of an arc using the central angle. |
| **Solve perimeter puzzles** | Break curved boundaries into arcs and compare paths algebraically. |
| **Use area formulas** | Apply rectangle, parallelogram, triangle, circle, and sector area formulas. |
| **Use Heron's formula** | Find the area of a triangle when all three sides are known. |
| **Use Brahmagupta's formula** | Understand the area formula for cyclic quadrilaterals and how it generalises Heron's formula. |
| **Handle sectors and segments** | Find sector area and segment area by subtracting triangle area from sector area. |
| **Connect formulas** | See special cases, generalisations, and geometric proofs behind formulas. |

---

## Prerequisite Toolkit

| Tool | Why It Matters Here |
|---|---|
| **Fractions and ratios** | Arc length and sector area are fractions of the whole circle. |
| **Square roots** | Heron's formula and Pythagoras-based area problems use square roots. |
| **Baudhāyana-Pythagoras theorem** | Used for heights, diagonals, radii, and special triangles. |
| **Algebraic identities** | Used in Heron's formula checks, squaring a rectangle, and special cases. |
| **Similarity and scale** | Helps understand why perimeter scales by length and area scales by square of length. |
| **Circle basics** | Radius, diameter, circumference, arc, sector, and segment are all used. |

### Core Reminder: Scale

If every length of a shape is multiplied by \(k\), then:

- its perimeter is multiplied by \(k\);
- its area is multiplied by \(k^2\).

Example:

If a rectangle \(3\times 5\) is enlarged by factor \(2\), it becomes \(6\times 10\).

Original area:

$$
3\times 5=15
$$

New area:

$$
6\times 10=60
$$

And:

$$
60=4\times 15=2^2\times 15
$$

---

## Big Idea

This chapter has two central questions.

1. How much boundary does a shape have?
2. How much space does it enclose?

The first question is about **perimeter**.

The second question is about **area**.

The chapter begins with familiar straight-edged shapes, moves into circles and \(\pi\), then returns to area formulas for triangles, cyclic quadrilaterals, circles, sectors, and segments.

The deeper lesson is that formulas are not random. Most formulas come from:

- cutting and rearranging shapes;
- comparing a part to a whole;
- using symmetry;
- using right triangles;
- turning a curved problem into a limit of straight-edged problems.

---

## Key Terms

| Term | Meaning |
|---|---|
| **Perimeter** | Total length around the boundary of a shape. |
| **Circumference** | Perimeter of a circle. |
| **Diameter** | A chord through the centre of a circle; equal to \(2r\). |
| **Radius** | Distance from centre of a circle to its boundary. |
| **\(\pi\)** | Constant ratio of circumference to diameter for every circle. |
| **Arc** | A connected part of a circle's boundary. |
| **Central angle** | Angle made at the centre by joining the centre to two boundary points. |
| **Sector** | Region enclosed by two radii and the arc between them. |
| **Segment of a circle** | Region enclosed by a chord and the corresponding arc. |
| **Area** | Amount of two-dimensional space occupied by a region. |
| **Base** | Chosen side of a shape, usually used with height. |
| **Height** | Perpendicular distance from base to opposite side or vertex. |
| **Semi-perimeter** | Half the perimeter of a shape. |
| **Cyclic quadrilateral** | A quadrilateral whose vertices lie on one circle. |
| **Generalisation** | A broader result from which a smaller result appears as a special case. |
| **Special case** | A result obtained from a general result by adding extra conditions. |

---

## 6.0 - Introduction: Why Race Tracks Need Staggers

In a \(4\times 100\text{ m}\) relay race, runners do not all start from the same line.

The athletes in the outer lanes begin ahead of those in the inner lanes.

This forward shift is called the **stagger**.

Why is it needed?

On the straight parts of the track, every lane has the same length.

On the curved parts, outer lanes have larger radii. A larger radius means a larger circumference. So a runner in an outer lane would run farther on the curves if the starting positions were not adjusted.

The stagger corrects this difference.

To calculate the stagger, we need formulas for:

- circumference of a circle;
- arc length;
- perimeter of curved shapes.

This real situation motivates the chapter.

---

## 6.1 - Perimeter of a Shape

The perimeter of a shape is the total length around its boundary.

Imagine a tiny insect walking exactly along the border of a shape until it returns to the starting point. The total distance it walks is the perimeter.

### Perimeter of Familiar Shapes

| Shape | Given | Perimeter |
|---|---|---|
| Square | side \(a\) | \(4a\) |
| Equilateral triangle | side \(a\) | \(3a\) |
| Rectangle | length \(a\), breadth \(b\) | \(2(a+b)\) |
| Regular \(n\)-gon | side \(a\) | \(na\) |

### Square as a Special Rectangle

A square is a rectangle with equal length and breadth.

Rectangle perimeter:

$$
2(a+b)
$$

If \(a=b\), then:

$$
2(a+a)=4a
$$

So the square formula is a special case of the rectangle formula.

### Perimeter Ratios

For a square:

$$
\frac{\text{perimeter}}{\text{side}}=\frac{4a}{a}=4
$$

For an equilateral triangle:

$$
\frac{\text{perimeter}}{\text{side}}=\frac{3a}{a}=3
$$

In both cases, the ratio is fixed for all sizes of that shape.

This prepares us for the circle question:

> Is the ratio of circumference to diameter fixed for all circles?

The answer is yes.

---

## 6.2 - Perimeter of a Circle: The \(C/D\) Ratio

The perimeter of a circle is called its **circumference**.

Let:

- \(C\) be the circumference;
- \(D\) be the diameter;
- \(r\) be the radius.

The ratio

$$
\frac{C}{D}
$$

is the same for every circle.

This constant ratio is called \(\pi\).

So:

$$
\frac{C}{D}=\pi
$$

Therefore:

$$
C=\pi D
$$

Since:

$$
D=2r
$$

we also get:

$$
C=2\pi r
$$

### Meaning of \(\pi\)

\(\pi\) tells us how many diameters fit around a circle.

The answer is a little more than 3.

Numerically:

$$
\pi\approx 3.14159265\ldots
$$

Common approximations:

$$
\pi\approx 3.14
$$

and

$$
\pi\approx \frac{22}{7}
$$

Important:

$$
\pi\ne \frac{22}{7}
$$

\(\frac{22}{7}\) is only an approximation.

### Home Measurement Activity

To estimate \(\pi\):

1. Take a circular object such as a reel, lid, or bangle.
2. Measure its diameter \(D\).
3. Wrap a thin thread around it many times, say 20 times.
4. Measure the total thread length \(L\).
5. One circumference is approximately \(L/20\).
6. Estimate:

$$
\frac{C}{D}\approx \frac{L}{20D}
$$

The value should be between \(3.1\) and \(3.2\) if measured carefully.

### Why \(\pi>3\)

In a circle of radius \(1\), an inscribed regular hexagon has side length \(1\).

Its perimeter is:

$$
6
$$

The circle lies outside the hexagon, so the circumference is greater than \(6\).

But the diameter is:

$$
2
$$

Therefore:

$$
\pi=\frac{C}{D}>\frac{6}{2}=3
$$

So \(\pi>3\).

### Historical Notes on \(\pi\)

Different civilizations approximated \(\pi\) with increasing accuracy.

| Mathematician / Culture | Approximation or Contribution |
|---|---|
| Mesopotamian mathematicians | Used values a little greater than \(3\), such as \(3.125\). |
| Archimedes | Bounded \(\pi\) using inscribed and circumscribed polygons. |
| Ptolemy | Used a very close astronomical approximation. |
| Liu Hui and Zu Chongzhi | Used polygon methods; Zu Chongzhi found \(355/113\), an excellent approximation. |
| Aryabhata | Used \(\pi\approx 3.1416\) and treated it as approximate. |
| Brahmagupta | Used \(\sqrt{10}\) as a useful approximation in some contexts. |
| Madhava | Developed an infinite series for \(\pi\). |
| Ramanujan and the Chudnovsky brothers | Developed very fast methods to calculate digits of \(\pi\). |

### Madhava's Series

One famous infinite series for \(\pi\) is:

$$
\frac{\pi}{4}=1-\frac{1}{3}+\frac{1}{5}-\frac{1}{7}+\cdots
$$

So:

$$
\pi=4\left(1-\frac{1}{3}+\frac{1}{5}-\frac{1}{7}+\cdots\right)
$$

This is not meant for quick school calculations, but it shows a powerful idea:

> \(\pi\) can be approached by an infinite process.

---

## 6.3 - \(\pi\) Is Irrational

A rational number can be written as:

$$
\frac{a}{b}
$$

where \(a\) and \(b\) are integers and \(b\ne 0\).

Examples:

$$
\frac{1}{2},\quad -\frac{7}{11},\quad 1.4,\quad 0.3333\ldots
$$

An irrational number cannot be written as a ratio of two integers.

Examples:

$$
\sqrt{2},\quad \pi
$$

\(\pi\) is irrational.

This means:

- its decimal expansion never ends;
- its decimal expansion does not repeat in a fixed pattern;
- no fraction is exactly equal to \(\pi\).

### Important Distinction

We can write:

$$
\pi\approx \frac{22}{7}
$$

but not:

$$
\pi=\frac{22}{7}
$$

Similarly:

$$
\pi\approx 3.14
$$

but:

$$
\pi\ne 3.14
$$

### Better Fraction

A much better approximation is:

$$
\pi\approx \frac{355}{113}
$$

But even this is not exact.

### Memory Trick

The sentence:

> How I wish I could recollect pi

has word lengths:

$$
3,\ 1,\ 4,\ 1,\ 5,\ 9,\ 2
$$

So it remembers:

$$
3.141592
$$

---

## 6.4 - Length of an Arc of a Circle

An arc is a part of the circumference of a circle.

If the full circumference is:

$$
2\pi r
$$

then a part of the circumference is found as the same fraction of \(2\pi r\).

### Semicircle

A semicircular arc is half of the circumference.

Arc length:

$$
\frac{1}{2}\times 2\pi r=\pi r
$$

### Quarter Circle

A quarter circular arc is one-fourth of the circumference.

Arc length:

$$
\frac{1}{4}\times 2\pi r=\frac{\pi r}{2}
$$

### General Arc Length Formula

If an arc subtends a central angle of \(\theta^\circ\), then it is:

$$
\frac{\theta}{360}
$$

of the full circle.

Therefore, arc length \(l\) is:

$$
l=2\pi r\times \frac{\theta}{360}
$$

### Arc Length Examples

| Radius | Central Angle | Arc Length |
|---|---|---|
| \(r\) | \(180^\circ\) | \(\pi r\) |
| \(r\) | \(90^\circ\) | \(\frac{\pi r}{2}\) |
| \(r\) | \(60^\circ\) | \(\frac{\pi r}{3}\) |
| \(r\) | \(120^\circ\) | \(\frac{2\pi r}{3}\) |
| \(r\) | \(270^\circ\) | \(\frac{3\pi r}{2}\) |

### Athletics Track Application

A standard running track has:

- two straight sections;
- two semicircular curved sections.

The two semicircles together make one full circle.

If the runner's curved path has radius \(36.8\text{ m}\), then curved distance is:

$$
2\pi(36.8)
$$

Using \(\pi\approx 3.1416\):

$$
2\times 3.1416\times 36.8=231.22\text{ m}
$$

If the two straight parts total \(168.78\text{ m}\), then total distance is:

$$
168.78+231.22=400\text{ m}
$$

This explains how a \(400\text{ m}\) track is designed.

### Lane Stagger Idea

If each lane is \(1.22\text{ m}\) wider than the previous one, then the radius of the curved path increases by approximately \(1.22\text{ m}\).

The extra distance over one full circular part is:

$$
2\pi(1.22)
$$

Using \(\pi\approx 3.1416\):

$$
2\times 3.1416\times 1.22\approx 7.67\text{ m}
$$

So adjacent lanes need a stagger of about \(7.67\text{ m}\) for one full lap, depending on the exact race and track design.

---

## 6.5 - Problems, Puzzles, and Paradoxes on Perimeter

Curved perimeter problems become simpler when we identify which fraction of a circle each arc represents.

### Example 1: Two Equal Circles Passing Through Each Other's Centres

Two congruent circles each pass through the centre of the other.

Let each radius be \(r\).

The centres and either intersection point form an equilateral triangle because all three connecting distances are \(r\).

So the angle at each centre between the two intersection points is:

$$
120^\circ
$$

The visible outer arc on each circle is therefore:

$$
360^\circ-120^\circ=240^\circ
$$

That is:

$$
\frac{240}{360}=\frac{2}{3}
$$

of the circumference.

Length of one visible arc:

$$
\frac{2}{3}\times 2\pi r=\frac{4\pi r}{3}
$$

There are two such arcs, so total perimeter is:

$$
2\times \frac{4\pi r}{3}=\frac{8\pi r}{3}
$$

### Example 2: One Semicircle or Many Semicircles?

Suppose two paths connect \(P\) and \(Q\):

- Path 1 is one large semicircle.
- Path 2 is made of three smaller semicircles placed end to end along the same base.

Let the large semicircle have radius \(a\).

Let the smaller semicircles have radii \(b\), \(c\), and \(d\).

Length of large semicircle:

$$
\pi a
$$

Length of smaller semicircles together:

$$
\pi b+\pi c+\pi d=\pi(b+c+d)
$$

The total diameter of the small semicircles equals the large diameter:

$$
2b+2c+2d=2a
$$

So:

$$
b+c+d=a
$$

Therefore:

$$
\pi(b+c+d)=\pi a
$$

The two paths have equal length.

### Lesson from the Puzzle

Curved paths can look longer or shorter than each other, but algebra can reveal equality.

For semicircle chains, the arc length depends directly on the diameter sum.

---

## Exercise Set 6.1 - Guided Format

Unless stated otherwise, use:

$$
\pi\approx \frac{22}{7}
$$

| Question | Learner Task | Main Formula or Idea |
|---|---|---|
| 1 | Circumference \(44\text{ cm}\). Find radius. | \(C=2\pi r\). |
| 2 | Find circumferences for radii \(7\text{ cm}\), \(10\text{ cm}\), \(12\text{ cm}\). | \(C=2\pi r\). |
| 3 | Find arc lengths for given radii and central angles. | \(l=2\pi r\cdot \frac{\theta}{360}\). |
| 4 | Find perimeter of a sector with radius \(14\text{ cm}\), angle \(75^\circ\). | Sector perimeter \(=2r+\) arc length. |
| 5 | Find perimeters of composite shapes made of arcs. | Break boundary into straight parts and circular arcs. |
| 6 | Tyre diameter \(56\text{ cm}\): distance per revolution and revolutions in \(10\text{ km}\). | One revolution covers one circumference. |
| 7 | Find total perimeter of flower petals. | Identify each petal boundary as arcs of circles. |
| 8 | Ratio of circle perimeters is \(5:4\). Find ratio of radii. | Since \(C=2\pi r\), radii ratio is also \(5:4\). |

### Worked Solution: Exercise 6.1, Question 1

Given:

$$
C=44\text{ cm}
$$

Use:

$$
C=2\pi r
$$

With \(\pi=\frac{22}{7}\):

$$
44=2\times \frac{22}{7}\times r
$$

$$
44=\frac{44}{7}r
$$

$$
r=7
$$

Answer:

$$
7\text{ cm}
$$

### Worked Solution: Exercise 6.1, Question 4

Radius:

$$
r=14\text{ cm}
$$

Angle:

$$
\theta=75^\circ
$$

Arc length:

$$
l=2\pi r\times \frac{\theta}{360}
$$

$$
l=2\times \frac{22}{7}\times 14\times \frac{75}{360}
$$

$$
l=88\times \frac{75}{360}
$$

$$
l=\frac{55}{3}\text{ cm}
$$

Sector perimeter:

$$
2r+l=28+\frac{55}{3}
$$

$$
=\frac{84+55}{3}=\frac{139}{3}\text{ cm}
$$

Answer:

$$
\frac{139}{3}\text{ cm}
$$

---

## 6.6 - Area of a Rectangle

Area measures the amount of space occupied by a two-dimensional region.

The standard area unit is a \(1\times 1\) square.

If a rectangle has:

- length \(a\);
- breadth \(b\);

then it contains \(a\) groups of \(b\) unit squares, or \(b\) groups of \(a\) unit squares.

So:

$$
\text{Area}=ab
$$

### Rectangle Area

$$
A=ab
$$

### Square Area

A square is a rectangle with \(a=b\).

So:

$$
A=a^2
$$

### Units

If lengths are in centimetres, area is in square centimetres:

$$
\text{cm}^2
$$

If lengths are in metres, area is in square metres:

$$
\text{m}^2
$$

---

## 6.7 - Area of a Parallelogram

A parallelogram can be cut and rearranged into a rectangle with the same base and height.

Therefore:

$$
\text{Area of parallelogram}=\text{base}\times \text{height}
$$

If base is \(b\) and height is \(h\), then:

$$
A=bh
$$

### Important Meaning of Height

Height is not usually the slant side.

Height means perpendicular distance between the base and the opposite side.

### Why Side Lengths Are Not Enough

Two parallelograms can have the same side lengths but different angles.

As the angle changes:

- the base can stay the same;
- the side length can stay the same;
- the height changes;
- the area changes.

So the area of a parallelogram cannot be found from its side lengths alone.

You need the height or another equivalent piece of information.

### Thin Parallelogram Issue

If a parallelogram is very slanted, the perpendicular from the top vertex may fall outside the base segment.

The formula still works because the height is the perpendicular distance between the parallel sides, not necessarily a segment drawn inside the parallelogram.

---

## 6.8 - Area of a Triangle

A triangle can be seen as half of a parallelogram.

Two congruent copies of a triangle can be arranged to form a parallelogram.

If the triangle has base \(b\) and height \(h\), the parallelogram has area:

$$
bh
$$

So one triangle has half that area:

$$
A=\frac{1}{2}bh
$$

### Triangle Area Formula

$$
\text{Area of triangle}=\frac{1}{2}\times \text{base}\times \text{height}
$$

### Height Can Fall Outside

For an obtuse triangle, the perpendicular height may fall outside the triangle.

The formula still works because height is measured perpendicular to the line containing the base.

### Median Divides a Triangle into Two Equal Areas

A median joins a vertex to the midpoint of the opposite side.

Let \(AD\) be a median of \(\triangle ABC\), so \(D\) is midpoint of \(BC\).

Then:

$$
BD=DC
$$

Triangles \(ABD\) and \(ACD\) have:

- equal bases \(BD\) and \(DC\);
- the same height from \(A\) to line \(BC\).

So their areas are equal.

### Theorem

A median of a triangle divides it into two triangles of equal area.

### Important Point

The two triangles made by a median need not be congruent.

Equal area does not mean same shape.

---

## 6.8.1 - Heron's Formula

The formula:

$$
A=\frac{1}{2}bh
$$

needs a base and the corresponding height.

But sometimes only the three side lengths are known.

Heron's formula finds the area of a triangle using only its side lengths.

### Heron's Formula

Let the side lengths of a triangle be:

$$
a,\ b,\ c
$$

Let the semi-perimeter be:

$$
s=\frac{a+b+c}{2}
$$

Then the area is:

$$
A=\sqrt{s(s-a)(s-b)(s-c)}
$$

### Why Semi-Perimeter?

The semi-perimeter \(s\) is half the perimeter.

It appears naturally in the algebraic proof of the formula.

For Class 9 use, the main task is to apply it accurately.

### Example 3: Equilateral Triangle of Side \(a\)

For an equilateral triangle:

$$
a=b=c
$$

Semi-perimeter:

$$
s=\frac{a+a+a}{2}=\frac{3a}{2}
$$

Then:

$$
s-a=\frac{3a}{2}-a=\frac{a}{2}
$$

So:

$$
A=\sqrt{\frac{3a}{2}\cdot \frac{a}{2}\cdot \frac{a}{2}\cdot \frac{a}{2}}
$$

$$
A=\sqrt{\frac{3a^4}{16}}
$$

$$
A=\frac{\sqrt3}{4}a^2
$$

This matches the standard formula for an equilateral triangle.

### Example 4: Isosceles Triangle with Equal Sides \(a\) and Base \(2b\)

Side lengths are:

$$
a,\ a,\ 2b
$$

Semi-perimeter:

$$
s=\frac{a+a+2b}{2}=a+b
$$

Then:

$$
s-a=b
$$

$$
s-2b=a-b
$$

Heron's formula:

$$
A=\sqrt{(a+b)b\cdot b(a-b)}
$$

$$
A=\sqrt{b^2(a+b)(a-b)}
$$

$$
A=b\sqrt{a^2-b^2}
$$

This agrees with the height method because the height is:

$$
\sqrt{a^2-b^2}
$$

and the base is \(2b\), so:

$$
A=\frac{1}{2}(2b)\sqrt{a^2-b^2}=b\sqrt{a^2-b^2}
$$

### Example 5: Triangle with Sides 3, 4, and 5

Semi-perimeter:

$$
s=\frac{3+4+5}{2}=6
$$

Area:

$$
A=\sqrt{6(6-3)(6-4)(6-5)}
$$

$$
A=\sqrt{6\cdot 3\cdot 2\cdot 1}
$$

$$
A=\sqrt{36}=6
$$

This matches the right triangle area:

$$
\frac{1}{2}\times 3\times 4=6
$$

### Formulas Involving Incircle and Circumcircle

For a triangle with sides \(a\), \(b\), \(c\):

If \(R\) is circumradius, then:

$$
A=\frac{abc}{4R}
$$

If \(r\) is inradius and \(s\) is semi-perimeter, then:

$$
A=rs
$$

These formulas are introduced for awareness. Their proofs require later geometry.

---

## Brahmagupta's Formula for a Cyclic Quadrilateral

A cyclic quadrilateral is a quadrilateral whose four vertices lie on a circle.

For a general quadrilateral, side lengths alone are not enough to determine area.

Example:

A rhombus with side \(3\) can be thin, square-like, or wide, and all can have different areas.

But if the quadrilateral is cyclic, side lengths are enough.

### Brahmagupta's Formula

Let the side lengths of a cyclic quadrilateral be:

$$
a,\ b,\ c,\ d
$$

Let the semi-perimeter be:

$$
s=\frac{a+b+c+d}{2}
$$

Then the area is:

$$
A=\sqrt{(s-a)(s-b)(s-c)(s-d)}
$$

### Example 6: Rectangle

A rectangle with side lengths \(a\) and \(b\) is cyclic.

Its four sides are:

$$
a,\ b,\ a,\ b
$$

Semi-perimeter:

$$
s=\frac{a+b+a+b}{2}=a+b
$$

Now:

$$
s-a=b
$$

$$
s-b=a
$$

So:

$$
A=\sqrt{b\cdot a\cdot b\cdot a}
$$

$$
A=\sqrt{a^2b^2}=ab
$$

This matches the rectangle area formula.

### Example 7: Isosceles Trapezium

An isosceles trapezium is cyclic.

Let its parallel sides be:

$$
2a,\ 2b
$$

and equal non-parallel sides be:

$$
c,\ c
$$

Semi-perimeter:

$$
s=\frac{2a+2b+c+c}{2}=a+b+c
$$

Brahmagupta's formula gives:

$$
A=\sqrt{(s-2a)(s-2b)(s-c)(s-c)}
$$

Substitute:

$$
A=\sqrt{(b+c-a)(a+c-b)(a+b)^2}
$$

So:

$$
A=(a+b)\sqrt{c^2-(b-a)^2}
$$

This matches the trapezium formula:

$$
A=\frac{1}{2}(\text{sum of parallel sides})\times \text{height}
$$

because the height is:

$$
\sqrt{c^2-(b-a)^2}
$$

### Heron's Formula as a Special Case

Heron's formula is a special case of Brahmagupta's formula.

A triangle can be thought of as a cyclic quadrilateral whose fourth side has length \(0\).

Let:

$$
d=0
$$

Then:

$$
s=\frac{a+b+c+0}{2}
$$

Brahmagupta's formula becomes:

$$
A=\sqrt{(s-a)(s-b)(s-c)(s-0)}
$$

which is:

$$
A=\sqrt{s(s-a)(s-b)(s-c)}
$$

This is Heron's formula.

So Heron's formula is a special case, and Brahmagupta's formula is a generalisation.

---

## Special Cases and Generalisations

Mathematics often grows by seeing one formula inside a bigger formula.

### Example 1: Square and Rectangle

Rectangle area:

$$
A=ab
$$

If \(a=b\), then:

$$
A=a^2
$$

So the square area formula is a special case of the rectangle area formula.

### Example 2: Isosceles Right Triangle

For any right triangle:

$$
a^2+b^2=c^2
$$

If the triangle is isosceles, then:

$$
a=b
$$

So:

$$
c^2=a^2+a^2=2a^2
$$

Therefore:

$$
c=a\sqrt2
$$

This is a special case of the Baudhāyana-Pythagoras theorem.

### Example 3: Algebraic Identities

The identity:

$$
(a+b)^2=a^2+2ab+b^2
$$

is a special case of:

$$
(a+b+c)^2=a^2+b^2+c^2+2ab+2bc+2ca
$$

by putting:

$$
c=0
$$

---

## 6.9 - Squaring a Rectangle

In ancient mathematics, to **square a shape** meant:

> Construct a square with the same area as the given shape.

To square a rectangle with side lengths \(a\) and \(b\), we need a square of area:

$$
ab
$$

So its side length must be:

$$
\sqrt{ab}
$$

Baudhāyana's geometric construction achieves this using a rectangle, a midpoint, an arc, and a square.

### Algebra Behind the Construction

The construction uses the identity:

$$
\left(\frac{a+b}{2}\right)^2-\left(\frac{a-b}{2}\right)^2=ab
$$

Let us verify:

$$
\left(\frac{a+b}{2}\right)^2=\frac{a^2+2ab+b^2}{4}
$$

and

$$
\left(\frac{a-b}{2}\right)^2=\frac{a^2-2ab+b^2}{4}
$$

Subtract:

$$
\frac{a^2+2ab+b^2}{4}-\frac{a^2-2ab+b^2}{4}
$$

$$
=\frac{4ab}{4}
$$

$$
=ab
$$

The geometric construction builds a right triangle whose squared side length is this difference of squares. That side becomes the side of the required square.

### Why This Is Important

This is a bridge between:

- geometry;
- algebraic identities;
- square roots;
- area construction.

It shows that ancient mathematicians used geometry to perform what we now express algebraically.

### Think Further: Squaring a Triangle

To square a triangle:

1. Convert the triangle into an equal-area rectangle.
2. Then use the rectangle-squaring method.

Since triangle area is:

$$
\frac{1}{2}bh
$$

one equal-area rectangle could have sides:

$$
b
$$

and

$$
\frac{h}{2}
$$

Then square that rectangle.

---

## Exercise Set 6.2 - Guided Format

| Question | Learner Task | Main Formula or Strategy |
|---|---|---|
| 1 | Find area of \(\triangle ADE\) from a figure. | Identify base and height from given dimensions. |
| 2 | Isosceles trapezium with parallel sides \(40\text{ cm}\), \(20\text{ cm}\), non-parallel sides \(26\text{ cm}\). Find area. | Drop perpendiculars; use Pythagoras for height; then trapezium area. |
| 3 | Triangle sides \(8\text{ cm}\), \(11\text{ cm}\), perimeter \(32\text{ cm}\). Find area. | Third side \(=13\text{ cm}\); use Heron's formula. |
| 4 | Triangle side ratio \(3:5:7\), perimeter given. Find area. | Convert ratio into actual sides; use Heron's formula. |
| 5 | Rhombus area \(128\text{ cm}^2\); one diagonal twice the other. Find shorter diagonal. | Area \(=\frac{1}{2}d_1d_2\). |
| 6 | \(ABCD\) parallelogram, \(P,Q\) on \(AB\). Compare areas of \(\triangle PCD\) and \(\triangle QCD\). | Same base \(CD\), same height between parallel lines. |
| 7 | \(O\) on diagonal \(PR\) of parallelogram \(PQRS\). Prove areas of \(\triangle PSO\) and \(\triangle PQO\) are equal. | Use equal-area halves and triangles on same base/height. |
| 8 | Midpoints of a quadrilateral joined in order. Show formed parallelogram has half the area. | Use triangle midpoints and area decomposition. |
| 9 | Median \(AD\), point \(P\) on median. Show \(\text{area}(\triangle ABP)=\text{area}(\triangle ACP)\). | Triangles \(BDP\) and \(CDP\) have equal bases and same height. |
| 10 | Point \(P\) inside square; compare red and green triangular regions. | Use pairs of triangles with bases on opposite sides and complementary heights. |
| 11 | Prove \(\text{Area}(\triangle BPQ)=\frac12\text{Area}(\triangle ABC)\). | Use midpoint and parallel-line area relations. |

### Worked Solution: Exercise 6.2, Question 2

Parallel sides:

$$
40\text{ cm},\quad 20\text{ cm}
$$

Equal non-parallel sides:

$$
26\text{ cm},\quad 26\text{ cm}
$$

For an isosceles trapezium, the difference of bases is:

$$
40-20=20
$$

Half of this difference is:

$$
10
$$

This forms a right triangle with hypotenuse \(26\) and one leg \(10\).

Height:

$$
h=\sqrt{26^2-10^2}
$$

$$
h=\sqrt{676-100}
$$

$$
h=\sqrt{576}=24
$$

Area of trapezium:

$$
A=\frac{1}{2}(40+20)\times 24
$$

$$
A=30\times 24
$$

$$
A=720
$$

Answer:

$$
720\text{ cm}^2
$$

### Worked Solution: Exercise 6.2, Question 5

Let shorter diagonal be \(x\).

Longer diagonal:

$$
2x
$$

Area of rhombus:

$$
A=\frac{1}{2}d_1d_2
$$

Given:

$$
128=\frac{1}{2}\times x\times 2x
$$

So:

$$
128=x^2
$$

Therefore:

$$
x=\sqrt{128}=8\sqrt2
$$

Answer:

$$
8\sqrt2\text{ cm}
$$

---

## 6.10 - Area of a Circle

The area of a circle is:

$$
A=\pi r^2
$$

This formula is one of the most important in geometry.

### Why Area Should Depend on \(r^2\)

If the radius of a circle doubles, every length doubles.

Area scales by the square of the scale factor.

So the area must be proportional to:

$$
r^2
$$

That means:

$$
A=kr^2
$$

for some constant \(k\).

The surprising fact is:

$$
k=\pi
$$

So:

$$
A=\pi r^2
$$

### Archimedes' Idea

Archimedes expressed the area of a circle as the area of a right triangle with:

- one side equal to the radius \(r\);
- the other side equal to the circumference \(C\).

Area of that triangle:

$$
\frac{1}{2}\times r\times C
$$

Since:

$$
C=2\pi r
$$

we get:

$$
A=\frac{1}{2}\times r\times 2\pi r
$$

$$
A=\pi r^2
$$

### Visual Rearrangement Idea

Cut a circle into many thin sectors.

Rearrange the sectors alternately up and down.

The shape begins to look like a parallelogram:

- height \(\approx r\);
- base \(\approx\) half the circumference.

Half the circumference is:

$$
\frac{1}{2}\times 2\pi r=\pi r
$$

Area of parallelogram:

$$
\text{base}\times \text{height}
$$

So:

$$
A=\pi r\times r=\pi r^2
$$

As the sectors become thinner and more numerous, the approximation becomes exact in the limiting sense.

### Ancient Approximations

Before the formula \(A=\pi r^2\) was known in its modern form, ancient mathematicians used area estimates based on circumference or diameter.

These approximations were useful for practical needs such as:

- storing grain in circular structures;
- measuring land;
- building circular platforms;
- planning settlements;
- taxation and construction.

The modern formula is exact because it uses the same \(\pi\) that connects circumference and diameter.

---

## 6.10.1 - Area of a Sector of a Circle

A sector is the region bounded by:

- two radii;
- the arc between their endpoints.

It is like a slice of a circular disc.

### Semicircular Sector

A semicircle has central angle \(180^\circ\).

Area:

$$
\frac{180}{360}\times \pi r^2=\frac{1}{2}\pi r^2
$$

### Quadrant

A quadrant has central angle \(90^\circ\).

Area:

$$
\frac{90}{360}\times \pi r^2=\frac{1}{4}\pi r^2
$$

### General Sector Area Formula

If a sector has central angle \(\theta^\circ\), then:

$$
\text{Area of sector}=\pi r^2\times \frac{\theta}{360}
$$

### Arc Length and Sector Area Compared

| Quantity | Formula |
|---|---|
| Arc length | \(l=2\pi r\times \frac{\theta}{360}\) |
| Sector area | \(A=\pi r^2\times \frac{\theta}{360}\) |

Both use the same fraction:

$$
\frac{\theta}{360}
$$

because both are the corresponding fraction of the full circle.

### Segment of a Circle

A segment is the region bounded by:

- an arc;
- the chord joining the endpoints of the arc.

For a minor segment:

$$
\text{segment area}=\text{sector area}-\text{triangle area}
$$

The triangle is formed by the two radii and the chord.

---

## Exercise Set 6.3 - Guided Format

Unless stated otherwise, use:

$$
\pi\approx \frac{22}{7}
$$

| Question | Learner Task | Main Formula or Strategy |
|---|---|---|
| 1 | Sector radius \(7\text{ cm}\), angle \(60^\circ\). Find area. | \(A=\pi r^2\frac{\theta}{360}\). |
| 2 | Find area of quadrant when circumference is \(44\text{ cm}\). | Find radius first using \(C=2\pi r\), then quadrant area. |
| 3 | Minute hand length \(7\text{ cm}\); area swept in \(10\) minutes. | \(10\) minutes is \(60^\circ\), one-sixth of a full circle. |
| 4 | Chord radius \(10\text{ cm}\), angle \(90^\circ\). Find minor and major sector areas. | Use sector area for \(90^\circ\) and \(270^\circ\). |
| 5 | Radius \(15\text{ cm}\), chord subtends \(60^\circ\). Find minor and major segments. | Minor segment \(=\) sector \(-\) equilateral triangle. |
| 6 | Two wipers length \(28\text{ cm}\), each sweeps \(120^\circ\). Find total cleaned area. | Twice the sector area. |
| 7 | Radius \(r\), angle \(60^\circ\). Prove minor segment formula. | Sector of \(60^\circ\) minus equilateral triangle of side \(r\). |
| 8 | Equilateral triangle inscribed in circle radius \(r\). Ratio of triangle area to circle area. | Use side of inscribed equilateral triangle or split into 3 triangles. |
| 9 | Square inscribed in circle radius \(r\). Ratio of square area to circle area. | Diagonal of square is \(2r\). |
| 10 | Hexagon inscribed in circle radius \(r\). Ratio of hexagon area to circle area. | Split into 6 equilateral triangles of side \(r\). |

### Worked Solution: Exercise 6.3, Question 1

Radius:

$$
r=7\text{ cm}
$$

Angle:

$$
\theta=60^\circ
$$

Sector area:

$$
A=\pi r^2\times \frac{\theta}{360}
$$

$$
A=\frac{22}{7}\times 7^2\times \frac{60}{360}
$$

$$
A=154\times \frac{1}{6}
$$

$$
A=\frac{77}{3}
$$

Answer:

$$
\frac{77}{3}\text{ cm}^2
$$

### Worked Solution: Exercise 6.3, Question 2

Circumference:

$$
C=44\text{ cm}
$$

Use:

$$
C=2\pi r
$$

With \(\pi=\frac{22}{7}\):

$$
44=2\times \frac{22}{7}\times r
$$

So:

$$
r=7\text{ cm}
$$

Area of circle:

$$
\pi r^2=\frac{22}{7}\times 7^2=154\text{ cm}^2
$$

Quadrant area:

$$
\frac{154}{4}=38.5\text{ cm}^2
$$

Answer:

$$
38.5\text{ cm}^2
$$

### Worked Solution: Exercise 6.3, Question 3

A minute hand makes a full \(360^\circ\) turn in \(60\) minutes.

In \(10\) minutes, it turns:

$$
\frac{10}{60}\times 360^\circ=60^\circ
$$

Radius:

$$
r=7\text{ cm}
$$

Area swept:

$$
A=\pi r^2\times \frac{60}{360}
$$

$$
A=\frac{22}{7}\times 49\times \frac{1}{6}
$$

$$
A=\frac{77}{3}\text{ cm}^2
$$

---

## End-of-Chapter Exercises - Structured Learner Guide

### A. Algebra and Area Models

| Original Question | Skill Needed | Guide |
|---|---|---|
| 1 | Draw area models for \((a+b)(a-b)=a^2-b^2\) and \((a+b+c)^2\). | Split rectangles/squares into smaller rectangles with labelled sides. |
| 10 | Two rectangles have same area and same perimeter. Are they congruent? | Let sides be \(a,b\). Same sum and product force same side lengths, up to order. |
| 15 | Compare areas of scaled rectangles and triangles. | If side lengths are multiplied by \(2\), area is multiplied by \(4\); by \(3\), area is multiplied by \(9\). |

### B. Triangle and Quadrilateral Area

| Original Question | Skill Needed | Guide |
|---|---|---|
| 2 | Isosceles triangle perimeter \(40\), equal sides \(15\). Find area. | Base \(=10\); height from Pythagoras; area \(=\frac12 bh\). |
| 3 | Isosceles triangle base \(10\), area \(60\). Find equal sides. | Height \(=12\); half-base \(=5\); equal side \(=\sqrt{12^2+5^2}\). |
| 4 | Right triangle area \(54\), one leg \(12\). Find perimeter. | Other leg from area; hypotenuse from Pythagoras. |
| 5 | Triangle sides ratio \(2:3:4\), perimeter \(45\). Find area. | Sides \(10,15,20\); use Heron's formula. |
| 6 | Triangle sides \(7,24,25\). Find area two ways. | Right triangle area and Heron's formula. |
| 11-13 | Prove trapezium area formula in different ways. | Use parallelogram construction or split into triangles. |
| 14 | Area of kite is half product of diagonals. | Diagonals split kite into right/paired triangles. |
| 20 | Equal areas in triangles with trisection points. | Use same height and proportional bases. |
| 26 | Rectangle with triangles marked \(A,B,C\). Find area relation. | Use algebraic relations between triangle areas and shared heights. |

### C. Circle Perimeter and Area

| Original Question | Skill Needed | Guide |
|---|---|---|
| 7 | Bicycle wheel diameter \(60\text{ cm}\), 100 rotations. | Distance \(=100\times \pi d\). |
| 8 | Quadrant area from circumference \(66\text{ cm}\). | Find radius, then one-fourth circle area. |
| 9 | Car wheel radius \(28\text{ cm}\), one turn and \(1\text{ km}\). | One turn covers circumference \(2\pi r\). |
| 16-18 | Areas covered by circles fitted in rectangles/squares. | Compare total circle area with containing rectangle area. |
| 21 | Quarter circle and semicircles create equal shaded areas. | Express each shaded area as combinations of same sectors/triangles. |
| 22 | Four semicircles inside square form four-petalled flower. | Use symmetry and sector/segment addition. |
| 23 | Annular region from chord tangent to inner circle. | Use right triangle relation between radii and half-chord. |
| 24 | Semicircles on right triangle sides. | Area relation follows from Pythagoras. |
| 25 | Two circles through each other's centres. | Use sector areas minus equilateral triangles. |
| 27 | Equal shaded regions made from quarter circle, semicircle, triangle. | Decompose both shaded regions into common pieces. |

---

## Detailed Worked Examples

### Example 1: Bicycle Wheel Distance

A bicycle wheel has diameter \(60\text{ cm}\). How far does it travel in \(100\) rotations?

Distance in one rotation is the circumference:

$$
C=\pi d
$$

Using \(\pi=\frac{22}{7}\):

$$
C=\frac{22}{7}\times 60=\frac{1320}{7}\text{ cm}
$$

For \(100\) rotations:

$$
\frac{1320}{7}\times 100=\frac{132000}{7}\text{ cm}
$$

In metres:

$$
\frac{132000}{700}=\frac{1320}{7}\text{ m}
$$

Approximate value:

$$
188.57\text{ m}
$$

### Example 2: Isosceles Triangle from Perimeter

An isosceles triangle has perimeter \(40\text{ cm}\), and equal sides \(15\text{ cm}\) each. Find its area.

Base:

$$
40-15-15=10\text{ cm}
$$

The altitude bisects the base, so half-base is:

$$
5\text{ cm}
$$

Height:

$$
h=\sqrt{15^2-5^2}
$$

$$
h=\sqrt{225-25}
$$

$$
h=\sqrt{200}=10\sqrt2
$$

Area:

$$
A=\frac{1}{2}\times 10\times 10\sqrt2
$$

$$
A=50\sqrt2
$$

Answer:

$$
50\sqrt2\text{ cm}^2
$$

### Example 3: Right Triangle from Area

The area of a right triangle is \(54\text{ cm}^2\). One leg is \(12\text{ cm}\). Find its perimeter.

Let the other leg be \(x\).

Area:

$$
54=\frac{1}{2}\times 12\times x
$$

$$
54=6x
$$

$$
x=9
$$

Hypotenuse:

$$
\sqrt{12^2+9^2}=\sqrt{144+81}=\sqrt{225}=15
$$

Perimeter:

$$
12+9+15=36
$$

Answer:

$$
36\text{ cm}
$$

### Example 4: Triangle with Ratio of Sides

The sides of a triangle are in ratio \(2:3:4\), and its perimeter is \(45\text{ cm}\). Find its area.

Let sides be:

$$
2x,\ 3x,\ 4x
$$

Then:

$$
2x+3x+4x=45
$$

$$
9x=45
$$

$$
x=5
$$

So sides are:

$$
10,\ 15,\ 20
$$

Semi-perimeter:

$$
s=\frac{10+15+20}{2}=22.5
$$

Heron's formula:

$$
A=\sqrt{22.5(22.5-10)(22.5-15)(22.5-20)}
$$

$$
A=\sqrt{22.5\cdot 12.5\cdot 7.5\cdot 2.5}
$$

This can be simplified:

$$
A=\frac{75\sqrt7}{4}
$$

Answer:

$$
\frac{75\sqrt7}{4}\text{ cm}^2
$$

### Example 5: Area of Minor Segment for \(60^\circ\)

A chord of a circle of radius \(r\) subtends \(60^\circ\) at the centre. Find the area of the minor segment.

Minor segment:

$$
\text{sector area}-\text{triangle area}
$$

Sector area:

$$
\pi r^2\times \frac{60}{360}=\frac{\pi r^2}{6}
$$

The triangle formed by the two radii and the chord has sides \(r,r,r\), so it is equilateral.

Triangle area:

$$
\frac{\sqrt3}{4}r^2
$$

Minor segment area:

$$
\frac{\pi r^2}{6}-\frac{\sqrt3}{4}r^2
$$

$$
=r^2\left(\frac{\pi}{6}-\frac{\sqrt3}{4}\right)
$$

---

## Formula Sheet

### Perimeter

Square:

$$
P=4a
$$

Rectangle:

$$
P=2(a+b)
$$

Circle circumference:

$$
C=2\pi r=\pi d
$$

Arc length:

$$
l=2\pi r\times \frac{\theta}{360}
$$

Sector perimeter:

$$
P_{\text{sector}}=2r+2\pi r\times \frac{\theta}{360}
$$

### Area

Rectangle:

$$
A=ab
$$

Square:

$$
A=a^2
$$

Parallelogram:

$$
A=bh
$$

Triangle:

$$
A=\frac{1}{2}bh
$$

Circle:

$$
A=\pi r^2
$$

Sector:

$$
A=\pi r^2\times \frac{\theta}{360}
$$

Trapezium:

$$
A=\frac{1}{2}(a+b)h
$$

Kite:

$$
A=\frac{1}{2}d_1d_2
$$

Rhombus:

$$
A=\frac{1}{2}d_1d_2
$$

### Heron's Formula

Semi-perimeter:

$$
s=\frac{a+b+c}{2}
$$

Area:

$$
A=\sqrt{s(s-a)(s-b)(s-c)}
$$

### Brahmagupta's Formula

For a cyclic quadrilateral:

$$
s=\frac{a+b+c+d}{2}
$$

Area:

$$
A=\sqrt{(s-a)(s-b)(s-c)(s-d)}
$$

---

## Common Mistakes and Corrections

| Mistake | Why It Is Wrong | Correct Thinking |
|---|---|---|
| Using \(2\pi r\) for area | \(2\pi r\) is circumference, not area. | Area of circle is \(\pi r^2\). |
| Using \(\pi r^2\) for circumference | \(\pi r^2\) measures square units, not length units. | Circumference is \(2\pi r\). |
| Treating \(22/7\) as exactly \(\pi\) | \(\pi\) is irrational. | Write \(\pi\approx 22/7\), not equality. |
| Forgetting the \(\theta/360\) factor | Arc/sector is only part of a circle. | Multiply full circumference or area by \(\theta/360\). |
| Using slant side as height | Height must be perpendicular. | Always locate the perpendicular height. |
| Using Heron's formula without checking sides | Side lengths must form a valid triangle. | Check triangle inequality if needed. |
| Forgetting square units for area | Area counts unit squares. | Use \(\text{cm}^2\), \(\text{m}^2\), etc. |
| Confusing sector and segment | Sector uses two radii and arc; segment uses chord and arc. | Segment area often equals sector area minus triangle area. |
| Assuming side lengths determine parallelogram area | Angle can change while side lengths stay fixed. | Need height or an equivalent measurement. |
| Applying Brahmagupta to any quadrilateral | It applies to cyclic quadrilaterals. | Confirm cyclic condition first. |

---

## Concept Map

| Concept | Leads To |
|---|---|
| Perimeter | Circumference and arc length |
| Fixed \(C/D\) ratio | Definition of \(\pi\) |
| \(\pi\) | Circle circumference and circle area |
| Fraction of full circle | Arc length and sector area |
| Rectangle area | Parallelogram, triangle, trapezium, and area models |
| Triangle area | Median equal-area theorem and Heron's formula |
| Heron's formula | Brahmagupta's formula as a generalisation |
| Circle area | Sector and segment area |
| Pythagoras | Heights, diagonals, and many area calculations |

---

## Rapid Revision Questions

### Definitions

1. What is perimeter?
2. What is circumference?
3. What is \(\pi\)?
4. What is an arc?
5. What is a sector?
6. What is a segment of a circle?
7. What is semi-perimeter?
8. What is a cyclic quadrilateral?

### Formula Practice

1. Find the circumference of a circle of radius \(14\text{ cm}\).
2. Find the radius of a circle whose circumference is \(88\text{ cm}\).
3. Find arc length when \(r=21\text{ cm}\) and \(\theta=60^\circ\).
4. Find area of a circle of radius \(7\text{ cm}\).
5. Find sector area when \(r=14\text{ cm}\) and \(\theta=90^\circ\).
6. Find area of a triangle with base \(12\text{ cm}\) and height \(9\text{ cm}\).
7. Use Heron's formula for a triangle with sides \(13,14,15\).
8. Find the area of a trapezium with parallel sides \(10,18\) and height \(7\).

### Proof and Reasoning

1. Why is the area of a triangle half the area of a parallelogram with same base and height?
2. Why does a median divide a triangle into two equal areas?
3. Why can two parallelograms with same side lengths have different areas?
4. Why is a sector area a fraction of the circle area?
5. Why is Heron's formula a special case of Brahmagupta's formula?
6. Why does doubling all lengths multiply area by \(4\)?

---

## Answers to Rapid Revision Formula Practice

### 1. Circumference, \(r=14\text{ cm}\)

$$
C=2\pi r=2\times \frac{22}{7}\times 14=88\text{ cm}
$$

### 2. Radius, \(C=88\text{ cm}\)

$$
88=2\times \frac{22}{7}\times r
$$

$$
r=14\text{ cm}
$$

### 3. Arc length, \(r=21\text{ cm}\), \(\theta=60^\circ\)

$$
l=2\pi r\times \frac{60}{360}
$$

$$
l=2\times \frac{22}{7}\times 21\times \frac{1}{6}
$$

$$
l=22\text{ cm}
$$

### 4. Area of circle, \(r=7\text{ cm}\)

$$
A=\pi r^2=\frac{22}{7}\times 49=154\text{ cm}^2
$$

### 5. Sector area, \(r=14\text{ cm}\), \(\theta=90^\circ\)

$$
A=\pi r^2\times \frac{90}{360}
$$

$$
A=\frac{22}{7}\times 196\times \frac{1}{4}
$$

$$
A=154\text{ cm}^2
$$

### 6. Triangle area, base \(12\), height \(9\)

$$
A=\frac{1}{2}\times 12\times 9=54\text{ cm}^2
$$

### 7. Heron's formula, sides \(13,14,15\)

Semi-perimeter:

$$
s=\frac{13+14+15}{2}=21
$$

Area:

$$
A=\sqrt{21(21-13)(21-14)(21-15)}
$$

$$
A=\sqrt{21\cdot 8\cdot 7\cdot 6}
$$

$$
A=\sqrt{7056}=84
$$

Answer:

$$
84\text{ square units}
$$

### 8. Trapezium area

$$
A=\frac{1}{2}(10+18)\times 7
$$

$$
A=14\times 7
$$

$$
A=98
$$

---

## Final Chapter Summary

- Perimeter is the total boundary length of a shape.
- Circumference is the perimeter of a circle.
- The ratio \(C/D\) is the same for every circle and is called \(\pi\).
- Circumference formulas:

$$
C=\pi d=2\pi r
$$

- \(\pi\) is irrational, so \(22/7\) and \(3.14\) are approximations, not exact values.
- Arc length is a fraction of the full circumference:

$$
l=2\pi r\times \frac{\theta}{360}
$$

- Area measures two-dimensional space in square units.
- Rectangle area:

$$
A=ab
$$

- Parallelogram area:

$$
A=bh
$$

- Triangle area:

$$
A=\frac{1}{2}bh
$$

- A median divides a triangle into two equal-area triangles.
- Heron's formula finds triangle area from side lengths:

$$
A=\sqrt{s(s-a)(s-b)(s-c)}
$$

- Brahmagupta's formula finds the area of a cyclic quadrilateral from side lengths:

$$
A=\sqrt{(s-a)(s-b)(s-c)(s-d)}
$$

- Heron's formula is a special case of Brahmagupta's formula.
- Area of a circle:

$$
A=\pi r^2
$$

- Sector area:

$$
A=\pi r^2\times \frac{\theta}{360}
$$

- Segment area is often found by subtracting triangle area from sector area.
- Many area formulas can be understood by cutting, rearranging, and comparing shapes.

---

## Study Strategy for Learners

For this chapter, organise problems by shape first.

1. If the boundary is circular, think circumference or arc length.
2. If the region is circular, think circle area, sector area, or segment area.
3. If a triangle has base and height, use \(\frac12 bh\).
4. If a triangle gives three side lengths, use Heron's formula.
5. If a quadrilateral is cyclic and all sides are known, consider Brahmagupta's formula.
6. If a formula involves \(\theta\), check whether the question asks for length or area.
7. Always write units: length units for perimeter and square units for area.

The most common success habit is to draw a clean diagram, mark the radius, height, base, angle, and known lengths, then choose the formula.

---

*Source: NCERT Class 9 - Maths, Chapter 6 raw file. Learner-facing version manually rewritten from the extracted chapter content about perimeter and area.*
