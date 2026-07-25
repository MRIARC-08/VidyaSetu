# Chapter 4: Vector Algebra
### NCERT Class 12 - Maths Part 2

## Chapter at a Glance

Vector algebra studies quantities that have both magnitude and direction. Vectors are essential in geometry, physics, engineering, navigation, three-dimensional geometry, and mechanics.

This chapter covers vector representation, magnitude, unit vectors, addition, scalar multiplication, components, position vectors, section formula, dot product, projection, cross product, and geometric applications such as area.

## Learning Outcomes

By the end of this chapter, learners should be able to:

- Distinguish scalar and vector quantities.
- Represent vectors geometrically and algebraically.
- Find magnitude and unit vector.
- Add, subtract, and multiply vectors by scalars.
- Express vectors in component form using `i`, `j`, and `k`.
- Find position vectors and vectors joining two points.
- Use section formula in vector form.
- Compute dot product and use it to find angles and projections.
- Compute cross product and use it to find perpendicular vectors and areas.
- Apply vector identities carefully.

## Key Terms

| Term | Meaning |
|---|---|
| Scalar | Quantity with magnitude only. |
| Vector | Quantity with magnitude and direction. |
| Magnitude | Length of a vector. |
| Unit vector | Vector of magnitude `1`. |
| Zero vector | Vector with magnitude `0`. |
| Position vector | Vector from origin to a point. |
| Collinear vectors | Vectors parallel to the same line. |
| Equal vectors | Vectors with same magnitude and same direction. |
| Negative vector | Vector with same magnitude but opposite direction. |
| Dot product | Scalar product of two vectors. |
| Cross product | Vector product of two vectors. |
| Component along vector | Component of one vector along another. |

## Quick Formula Map

| Concept | Formula |
|---|---|
| Vector in components | `a = a1 i + a2 j + a3 k` |
| Magnitude | `|a| = sqrt(a1^2 + a2^2 + a3^2)` |
| Unit vector along `a` | `a/|a|`, if `a != 0` |
| Vector from A to B | `AB = b - a` |
| Dot product | `a.b = |a||b| cos theta` |
| Dot product in components | `a.b = a1b1 + a2b2 + a3b3` |
| Perpendicular condition | `a.b = 0` |
| Cross product magnitude | `|a x b| = |a||b| sin theta` |
| Area of parallelogram | `|a x b|` |
| Area of triangle | `(1/2)|a x b|` |

# Unit 4A: Scalars and Vectors

A scalar has magnitude only. Examples:

- Mass
- Time
- Temperature
- Distance
- Speed

A vector has both magnitude and direction. Examples:

- Displacement
- Velocity
- Acceleration
- Force

## Key Difference

Distance is scalar, but displacement is vector.

If a person walks 3 km east and 4 km west, total distance is 7 km, but displacement is 1 km west.

# Unit 4B: Geometrical Representation of Vectors

A vector is represented by a directed line segment.

If the vector starts at `A` and ends at `B`, it is written as `AB`.

- Length of segment gives magnitude.
- Arrow direction gives vector direction.

## Equal Vectors

Two vectors are equal if they have the same magnitude and same direction, even if they start at different points.

## Negative Vector

The negative of vector `a`, written `-a`, has the same magnitude as `a` but opposite direction.

# Unit 4C: Types of Vectors

## Zero Vector

Magnitude is zero. Direction is not defined.

## Unit Vector

Magnitude is one.

If `a` is a non-zero vector, the unit vector in its direction is:

`a_hat = a/|a|`

## Collinear Vectors

Vectors are collinear if they are parallel to the same line.

If `a = k b` for some scalar `k`, then `a` and `b` are collinear.

## Like and Unlike Vectors

- Like vectors have same direction.
- Unlike vectors have opposite direction.

# Unit 4D: Component Form

In three dimensions, a vector can be written as:

`a = a1 i + a2 j + a3 k`

where:

- `i` is unit vector along x-axis.
- `j` is unit vector along y-axis.
- `k` is unit vector along z-axis.

## Magnitude

For `a = a1 i + a2 j + a3 k`:

`|a| = sqrt(a1^2 + a2^2 + a3^2)`

## Example

If `a = 2i - 3j + 6k`, then:

`|a| = sqrt(2^2 + (-3)^2 + 6^2)`

`= sqrt(4 + 9 + 36) = 7`

# Unit 4E: Unit Vector

To find a unit vector in the direction of `a`, divide by its magnitude.

## Example

Let `a = 3i + 4j`.

`|a| = sqrt(3^2 + 4^2) = 5`

Unit vector:

`a/|a| = (3/5)i + (4/5)j`

## Common Trap

A unit vector is not found by making each component equal to `1`. It is found by dividing the whole vector by its magnitude.

# Unit 4F: Addition and Subtraction of Vectors

For:

`a = a1 i + a2 j + a3 k`

`b = b1 i + b2 j + b3 k`

Addition:

`a + b = (a1+b1)i + (a2+b2)j + (a3+b3)k`

Subtraction:

`a - b = (a1-b1)i + (a2-b2)j + (a3-b3)k`

## Example

If `a = 2i + j - 3k` and `b = i - 4j + 5k`, then:

`a + b = 3i - 3j + 2k`

`a - b = i + 5j - 8k`

# Unit 4G: Scalar Multiplication

If `a = a1 i + a2 j + a3 k`, then:

`ka = ka1 i + ka2 j + ka3 k`

Multiplication by a positive scalar keeps direction same. Multiplication by a negative scalar reverses direction.

## Example

If `a = 2i - j + 4k`, then:

`3a = 6i - 3j + 12k`

`-a = -2i + j - 4k`

# Unit 4H: Position Vector and Joining Vector

The position vector of point `P(x, y, z)` is:

`OP = x i + y j + z k`

If points `A` and `B` have position vectors `a` and `b`, then:

`AB = b - a`

## Example

Let `A(2,3,0)` and `B(-1,-2,-4)`.

`AB = (-1-2)i + (-2-3)j + (-4-0)k`

`AB = -3i - 5j - 4k`

# Unit 4I: Section Formula in Vector Form

If point `P` divides the line segment joining points with position vectors `a` and `b` in the ratio `m:n` internally, then:

`p = (n a + m b)/(m+n)`

## External Division

For external division in ratio `m:n`:

`p = (m b - n a)/(m-n)`

depending on orientation. Use diagrams carefully.

## Midpoint

The midpoint of `A` and `B` has position vector:

`(a + b)/2`

# Unit 4J: Dot Product

The dot product of two vectors is a scalar.

`a.b = |a||b| cos theta`

where `theta` is the angle between vectors.

In components:

`a.b = a1b1 + a2b2 + a3b3`

## Uses

Dot product helps find:

- Angle between vectors.
- Perpendicularity.
- Component along another vector.
- Work done in physics.

# Unit 4K: Angle Between Vectors

From dot product:

`cos theta = (a.b)/(|a||b|)`

## Example

Let `a = i + j` and `b = i - j`.

`a.b = 1(1) + 1(-1) = 0`

Therefore `cos theta = 0`, so `theta = pi/2`.

The vectors are perpendicular.

# Unit 4L: Component of One Vector Along Another

Scalar projection of `a` on `b` is:

`(a.b)/|b|`

Vector projection of `a` on `b` is:

`[(a.b)/|b|^2] b`

## Example

Let `a = 2i + 3j` and `b = i`.

`a.b = 2`

`|b| = 1`

Scalar projection of `a` on `b` is `2`.

# Unit 4M: Cross Product

The cross product of two vectors is a vector.

`|a x b| = |a||b| sin theta`

The direction of `a x b` is perpendicular to both `a` and `b`, given by the right-hand rule.

## Component Formula

For:

`a = a1 i + a2 j + a3 k`

`b = b1 i + b2 j + b3 k`

```text
a x b = | i   j   k  |
        | a1  a2  a3 |
        | b1  b2  b3 |
```

Expanded:

`a x b = (a2b3-a3b2)i - (a1b3-a3b1)j + (a1b2-a2b1)k`

# Unit 4N: Properties of Cross Product

Important properties:

- `a x b = -(b x a)`
- `a x a = 0`
- If `a` and `b` are parallel, then `a x b = 0`
- `i x j = k`
- `j x k = i`
- `k x i = j`
- `j x i = -k`
- `k x j = -i`
- `i x k = -j`

## Common Trap

Cross product is not commutative. Reversing order changes sign.

# Unit 4O: Area Using Cross Product

If two adjacent sides of a parallelogram are represented by vectors `a` and `b`, then:

`Area of parallelogram = |a x b|`

Area of triangle formed by the same two vectors:

`Area of triangle = (1/2)|a x b|`

## Example

Let `a = i + 2j` and `b = 3i + j`.

In two dimensions, cross product magnitude is:

`|a1b2 - a2b1| = |1(1) - 2(3)| = |-5| = 5`

Area of parallelogram is `5`.

Area of triangle is `5/2`.

# Unit 4P: Scalar Triple Product

The scalar triple product of vectors `a`, `b`, and `c` is:

`a.(b x c)`

It gives the signed volume of the parallelepiped formed by the three vectors.

Volume:

`|a.(b x c)|`

If `a.(b x c) = 0`, then the three vectors are coplanar.

# Unit 4Q: Worked Examples

## Example 1: Unit Vector

Find a unit vector in direction of `a = 2i - j + 2k`.

Magnitude:

`|a| = sqrt(4 + 1 + 4) = 3`

Unit vector:

`(2/3)i - (1/3)j + (2/3)k`

## Example 2: Angle Between Vectors

Let `a = 2i + j + 2k` and `b = i + 2j - 2k`.

`a.b = 2(1) + 1(2) + 2(-2) = 0`

So the vectors are perpendicular.

## Example 3: Cross Product

Let `a = i + j + k` and `b = i - j + k`.

```text
a x b = | i  j  k |
        | 1  1  1 |
        | 1 -1  1 |
```

`a x b = 2i + 0j - 2k`

So:

`a x b = 2i - 2k`

# Unit 4R: Answer-Writing Framework

## To find magnitude and unit vector

Write in this order:

1. Write vector in component form.
2. Find magnitude using square root formula.
3. Divide vector by magnitude.
4. State unit vector.

## To find angle between vectors

Write in this order:

1. Compute dot product.
2. Compute magnitudes.
3. Use `cos theta = (a.b)/(|a||b|)`.
4. Find `theta`.

## To find area using cross product

Write in this order:

1. Form side vectors.
2. Find cross product.
3. Find magnitude of cross product.
4. Use full value for parallelogram or half for triangle.

## To prove vectors are collinear

Write in this order:

1. Write both vectors in component form.
2. Check whether one is a scalar multiple of the other.
3. If yes, conclude collinear.

# Unit 4S: Common Mistakes and Corrections

| Mistake | Correction |
|---|---|
| Treating vector like scalar | Direction matters. |
| Forgetting square root in magnitude | Magnitude is square root of sum of squares. |
| Confusing dot and cross product | Dot gives scalar; cross gives vector. |
| Saying `a x b = b x a` | Correct relation is `a x b = -b x a`. |
| Using dot product for area | Area uses cross product. |
| Forgetting half for triangle area | Triangle area is half parallelogram area. |
| Ignoring absolute value in volume | Volume is non-negative. |

## Practice Set

1. Find magnitude of `3i - 4j + 12k`.
2. Find unit vector in direction `2i + 3j + 6k`.
3. Find vector from `A(1,2,3)` to `B(4,0,-1)`.
4. Find midpoint of points with position vectors `a` and `b`.
5. Find angle between `i+j` and `i-j`.
6. Check whether `2i+4j+6k` and `i+2j+3k` are collinear.
7. Find projection of `2i+3j+k` on `i+j+k`.
8. Find cross product of `i+2j+3k` and `2i-j+k`.
9. Find area of triangle with adjacent side vectors `a` and `b`.
10. State the condition for coplanarity using scalar triple product.

## Final Revision

Remember these points:

- Vectors have magnitude and direction.
- Component form makes calculations systematic.
- Unit vector is vector divided by its magnitude.
- Dot product gives angle and projection.
- Cross product gives perpendicular vector and area.
- Scalar triple product gives volume and coplanarity condition.
