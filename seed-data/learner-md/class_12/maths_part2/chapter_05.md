# Chapter 5: Three Dimensional Geometry
### NCERT Class 12 - Maths Part 2

## Chapter at a Glance

Three dimensional geometry extends coordinate geometry into space. Points have three coordinates, lines need direction information, and distances or angles are handled using vectors.

This chapter focuses on direction cosines, direction ratios, equations of lines in space, angle between two lines, and shortest distance between lines.

## Learning Outcomes

By the end of this chapter, learners should be able to:

- Understand coordinates of points in three-dimensional space.
- Define direction cosines and direction ratios of a line.
- Convert direction ratios into direction cosines.
- Find direction ratios of a line through two points.
- Write vector equation of a line.
- Write Cartesian equation of a line.
- Find angle between two lines.
- Identify parallel, intersecting, and skew lines.
- Find shortest distance between skew lines.
- Find distance between parallel lines.

## Key Terms

| Term | Meaning |
|---|---|
| Direction cosines | Cosines of angles made by a line with positive x, y, z axes. |
| Direction ratios | Any three numbers proportional to direction cosines. |
| Vector equation of line | Equation using position vector and direction vector. |
| Cartesian equation of line | Symmetric coordinate form of a line. |
| Skew lines | Lines in space that are neither parallel nor intersecting. |
| Shortest distance | Length of common perpendicular between two lines. |
| Coplanar lines | Lines lying in the same plane. |

## Quick Formula Map

| Concept | Formula |
|---|---|
| Direction cosine relation | `l^2 + m^2 + n^2 = 1` |
| DC from DR `a,b,c` | `l=a/s`, `m=b/s`, `n=c/s`, where `s=sqrt(a^2+b^2+c^2)` |
| Line through point `a` parallel to `b` | `r = a + lambda b` |
| Cartesian line | `(x-x1)/a = (y-y1)/b = (z-z1)/c` |
| Direction ratios from two points | `x2-x1`, `y2-y1`, `z2-z1` |
| Angle between lines | `cos theta = |a1a2+b1b2+c1c2|/(sqrt(a1^2+b1^2+c1^2)sqrt(a2^2+b2^2+c2^2))` |
| Shortest distance between skew lines | `|(a2-a1).(b1 x b2)|/|b1 x b2|` |
| Distance between parallel lines | `|(a2-a1) x b|/|b|` |

# Unit 5A: Points in Three Dimensions

A point in three-dimensional space is written as:

`P(x, y, z)`

where:

- `x` is distance along x-axis.
- `y` is distance along y-axis.
- `z` is distance along z-axis.

The position vector of `P(x, y, z)` is:

`r = x i + y j + z k`

# Unit 5B: Direction Cosines

If a directed line makes angles `alpha`, `beta`, and `gamma` with the positive x, y, and z axes, then its direction cosines are:

`l = cos alpha`

`m = cos beta`

`n = cos gamma`

They satisfy:

`l^2 + m^2 + n^2 = 1`

## Example

If a line makes angles `90`, `60`, and `30` degrees with the axes:

`l = cos 90 = 0`

`m = cos 60 = 1/2`

`n = cos 30 = sqrt(3)/2`

Check:

`0^2 + (1/2)^2 + (sqrt(3)/2)^2 = 1`

# Unit 5C: Direction Ratios

Direction ratios are any three numbers proportional to the direction cosines.

If direction ratios are `a`, `b`, and `c`, then direction cosines are:

`a/s`, `b/s`, `c/s`

where:

`s = sqrt(a^2 + b^2 + c^2)`

## Example

Direction ratios are `2`, `-1`, `-2`.

`s = sqrt(4 + 1 + 4) = 3`

Direction cosines are:

`2/3`, `-1/3`, `-2/3`

# Unit 5D: Direction Ratios Through Two Points

For points:

`A(x1, y1, z1)` and `B(x2, y2, z2)`

direction ratios of line `AB` are:

`x2 - x1`, `y2 - y1`, `z2 - z1`

## Example

For `A(1,2,3)` and `B(4,0,-1)`, direction ratios are:

`4-1 = 3`

`0-2 = -2`

`-1-3 = -4`

So DRs are `3, -2, -4`.

# Unit 5E: Vector Equation of a Line

A line passing through point with position vector `a` and parallel to vector `b` is:

`r = a + lambda b`

where `lambda` is a real parameter.

## Meaning

- `a` fixes one point on the line.
- `b` gives direction.
- Different values of `lambda` give different points on the line.

## Example

Line through `(1,2,3)` and parallel to `2i - j + 4k`:

`r = (i + 2j + 3k) + lambda(2i - j + 4k)`

# Unit 5F: Cartesian Equation of a Line

If a line passes through `(x1, y1, z1)` and has direction ratios `a`, `b`, `c`, then:

`(x - x1)/a = (y - y1)/b = (z - z1)/c`

## Example

Line through `(1,2,3)` with direction ratios `2, -1, 4`:

`(x - 1)/2 = (y - 2)/(-1) = (z - 3)/4`

## Note

If one direction ratio is zero, the corresponding coordinate remains constant. Handle such cases carefully instead of dividing by zero.

# Unit 5G: Line Through Two Points

Line through `A(x1, y1, z1)` and `B(x2, y2, z2)` has direction ratios:

`x2-x1`, `y2-y1`, `z2-z1`

Vector equation:

`r = a + lambda(b - a)`

Cartesian equation:

`(x-x1)/(x2-x1) = (y-y1)/(y2-y1) = (z-z1)/(z2-z1)`

## Example

Line through `A(1,2,3)` and `B(4,0,-1)`:

DRs: `3, -2, -4`

Cartesian equation:

`(x-1)/3 = (y-2)/(-2) = (z-3)/(-4)`

# Unit 5H: Angle Between Two Lines

If two lines have direction ratios:

`a1, b1, c1`

and

`a2, b2, c2`

then:

`cos theta = |a1a2 + b1b2 + c1c2|/(sqrt(a1^2+b1^2+c1^2) sqrt(a2^2+b2^2+c2^2))`

## Why Absolute Value Is Used

The acute angle between lines is usually taken. Absolute value ensures the cosine is non-negative.

## Example

Find angle between direction ratios `1,1,0` and `1,-1,0`.

Dot product:

`1(1) + 1(-1) + 0(0) = 0`

So `cos theta = 0`, hence `theta = pi/2`.

The lines are perpendicular.

# Unit 5I: Parallel and Perpendicular Lines

## Parallel Lines

Lines are parallel if their direction ratios are proportional.

Example:

`2,4,6` and `1,2,3` are parallel.

## Perpendicular Lines

Lines are perpendicular if dot product of their direction vectors is zero.

For DRs:

`a1a2 + b1b2 + c1c2 = 0`

# Unit 5J: Skew Lines

In three dimensions, two lines may be:

- Intersecting.
- Parallel.
- Skew.

Skew lines do not intersect and are not parallel. They lie in different planes.

## Coplanarity Test

For lines:

`r = a1 + lambda b1`

`r = a2 + mu b2`

They are coplanar if:

`(a2 - a1).(b1 x b2) = 0`

If not zero, the lines are skew.

# Unit 5K: Shortest Distance Between Skew Lines

For skew lines:

`r = a1 + lambda b1`

`r = a2 + mu b2`

Shortest distance is:

`d = |(a2-a1).(b1 x b2)|/|b1 x b2|`

## Meaning

The vector `b1 x b2` is perpendicular to both lines. The shortest distance is the projection of the vector joining one point on each line onto this perpendicular direction.

# Unit 5L: Distance Between Parallel Lines

If two lines are parallel with common direction vector `b`, and points on them have position vectors `a1` and `a2`, then distance is:

`d = |(a2-a1) x b|/|b|`

## Why This Works

The cross product gives area of a parallelogram with base `|b|` and height equal to the distance between lines.

# Unit 5M: Worked Examples

## Example 1: Direction Cosines

Find direction cosines for direction ratios `1,2,2`.

`s = sqrt(1^2 + 2^2 + 2^2) = 3`

Direction cosines:

`1/3`, `2/3`, `2/3`

## Example 2: Equation of a Line

Find line through `(2,-1,3)` with direction ratios `4,0,-2`.

Vector equation:

`r = (2i - j + 3k) + lambda(4i - 2k)`

Cartesian form:

`(x-2)/4 = (z-3)/(-2)` and `y = -1`

## Example 3: Shortest Distance

For lines:

`r = i + j + lambda(i + 2j + k)`

`r = 2i - j + k + mu(2i + j - k)`

Use:

`d = |(a2-a1).(b1 x b2)|/|b1 x b2|`

Compute carefully using vector algebra.

# Unit 5N: Answer-Writing Framework

## To find equation of a line

Write in this order:

1. Identify point on line.
2. Identify direction vector or direction ratios.
3. Write vector form `r = a + lambda b`.
4. Convert to Cartesian form if needed.

## To find angle between lines

Write in this order:

1. Extract direction ratios of both lines.
2. Apply dot product formula.
3. Use absolute value if acute angle is required.
4. Find angle.

## To find shortest distance between skew lines

Write in this order:

1. Write both lines in vector form.
2. Identify `a1`, `a2`, `b1`, `b2`.
3. Find `b1 x b2`.
4. Find `(a2-a1).(b1 x b2)`.
5. Substitute in shortest distance formula.

# Unit 5O: Common Mistakes and Corrections

| Mistake | Correction |
|---|---|
| Confusing direction cosines and direction ratios | Direction cosines satisfy `l^2+m^2+n^2=1`; direction ratios are proportional. |
| Forgetting to normalise direction ratios | Divide by `sqrt(a^2+b^2+c^2)`. |
| Dividing by zero in Cartesian line equation | If direction ratio is zero, that coordinate is constant. |
| Using point coordinates as direction ratios | Direction ratios between two points are differences of coordinates. |
| Treating all non-parallel lines as intersecting | In 3D, non-parallel lines may be skew. |
| Forgetting absolute value in shortest distance | Distance is non-negative. |

## Practice Set

1. Find direction cosines for direction ratios `2,-1,2`.
2. Find direction ratios of line through `(1,2,3)` and `(4,-2,5)`.
3. Write vector equation of line through `(0,1,2)` parallel to `i+j-k`.
4. Write Cartesian equation of a line through `(3,0,-1)` with DRs `2,3,4`.
5. Find angle between lines with DRs `1,2,2` and `2,1,-2`.
6. Check whether two lines are parallel using direction ratios.
7. Explain what skew lines are.
8. State formula for shortest distance between skew lines.
9. State formula for distance between parallel lines.
10. Explain why direction cosines satisfy `l^2+m^2+n^2=1`.

## Final Revision

Remember these points:

- Direction cosines are normalised direction ratios.
- A line in 3D needs a point and a direction.
- Vector equation is usually easiest to set up.
- Cartesian equation uses direction ratios.
- Angle between lines comes from dot product.
- Shortest distance between skew lines uses scalar triple product.
