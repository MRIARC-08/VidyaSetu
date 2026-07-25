# Chapter 4: Determinants
### NCERT Class 12 - Maths Part 1

## Chapter at a Glance

Determinants are numbers associated with square matrices. They help decide whether a matrix is invertible, compute areas, solve systems of linear equations, and analyse transformations. In this chapter, the determinant is developed for square matrices of order 1, 2, and 3, followed by properties, minors, cofactors, adjoint, inverse, and applications.

The main skill is controlled calculation: choose the right row or column, use properties to simplify, and avoid sign mistakes in cofactors.

## Learning Outcomes

By the end of this chapter, learners should be able to:

- Define determinant of square matrices of order 1, 2, and 3.
- Evaluate determinants by expansion.
- Use properties of determinants to simplify calculations.
- Find area of a triangle using determinants.
- Compute minors and cofactors.
- Find adjoint of a matrix.
- Find inverse of a square matrix using adjoint and determinant.
- Solve systems of linear equations using inverse of a matrix.
- Identify singular and non-singular matrices.

## Key Terms

| Term | Meaning |
|---|---|
| Determinant | A scalar value associated with a square matrix. |
| `det(A)` or `|A|` | Notation for determinant of matrix `A`. |
| Singular matrix | Square matrix whose determinant is zero. |
| Non-singular matrix | Square matrix whose determinant is non-zero. |
| Minor | Determinant obtained by deleting one row and one column. |
| Cofactor | Signed minor: `C_ij = (-1)^(i+j) M_ij`. |
| Adjoint | Transpose of the cofactor matrix. |
| Inverse | Matrix `A^-1` satisfying `AA^-1 = A^-1A = I`. |

## Quick Formula Map

| Concept | Formula |
|---|---|
| Order 1 determinant | If `A = [a]`, then `|A| = a`. |
| Order 2 determinant | `|a b; c d| = ad - bc`. |
| Cofactor | `C_ij = (-1)^(i+j) M_ij`. |
| Adjoint | `adj(A) = (cofactor matrix)^T`. |
| Inverse | `A^-1 = adj(A)/|A|`, if `|A| != 0`. |
| Area of triangle | `1/2 |x1(y2-y3) + x2(y3-y1) + x3(y1-y2)|`. |
| Product rule | `det(AB) = det(A) det(B)`. |

# Unit 4A: Determinant of Order One

If `A = [a]`, then the determinant of `A` is simply:

`|A| = a`

Only square matrices have determinants. A row matrix or column matrix that is not square does not have a determinant.

# Unit 4B: Determinant of Order Two

For a `2 x 2` matrix:

```text
A = [ a  b ]
    [ c  d ]
```

the determinant is:

`|A| = ad - bc`

## Example

```text
A = [ 3  4 ]
    [ 2  5 ]
```

Then:

`|A| = 3(5) - 4(2) = 15 - 8 = 7`

## Common Trap

Do not calculate `ab - cd`. The correct formula is main diagonal product minus other diagonal product: `ad - bc`.

# Unit 4C: Determinant of Order Three

For a `3 x 3` determinant:

```text
| a  b  c |
| d  e  f |
| g  h  i |
```

Expand along the first row:

`a(ei - fh) - b(di - fg) + c(dh - eg)`

## Sign Pattern

The cofactor sign pattern is:

```text
+  -  +
-  +  -
+  -  +
```

## Example

Evaluate:

```text
| 1  2  3 |
| 0  1  4 |
| 5  6  0 |
```

Expansion along first row:

`1(1(0) - 4(6)) - 2(0(0) - 4(5)) + 3(0(6) - 1(5))`

`= 1(-24) - 2(-20) + 3(-5)`

`= -24 + 40 - 15 = 1`

# Unit 4D: Choosing the Best Row or Column

When evaluating a determinant, expand along a row or column with more zeros.

## Example

```text
| 2  0  0 |
| 3  4  5 |
| 1  6  7 |
```

Expand along the first row:

`2 |4 5; 6 7| = 2(4(7) - 5(6)) = 2(28 - 30) = -4`

This is faster than expanding along a row with no zeros.

# Unit 4E: Properties of Determinants

Properties make determinant calculation faster.

## Property 1: Transpose Does Not Change Determinant

`det(A^T) = det(A)`

## Property 2: Interchanging Two Rows or Columns Changes Sign

If two rows are interchanged, determinant changes sign. Same for columns.

## Property 3: Two Identical Rows or Columns Give Zero

If any two rows or columns are identical, determinant is zero.

## Property 4: Multiplying One Row by k Multiplies Determinant by k

If all elements of one row are multiplied by `k`, the determinant is multiplied by `k`.

If every element of an `n x n` determinant is multiplied by `k`, the determinant becomes `k^n` times the original determinant.

## Property 5: Common Factor Can Be Taken Out

If every element of a row or column has a common factor, take it outside the determinant.

## Property 6: Row Replacement Does Not Change Determinant

Adding a multiple of one row to another row does not change the determinant.

Example:

`R2 -> R2 + kR1`

does not change determinant.

Same rule applies to columns.

## Property 7: Product Rule

If `A` and `B` are square matrices of the same order:

`det(AB) = det(A) det(B)`

# Unit 4F: Area of a Triangle

If the vertices of a triangle are `(x1, y1)`, `(x2, y2)`, and `(x3, y3)`, then its area is:

`Area = 1/2 |x1(y2-y3) + x2(y3-y1) + x3(y1-y2)|`

The absolute value is used because area cannot be negative.

## Determinant Form

```text
Area = 1/2 | x1  y1  1 |
           | x2  y2  1 |
           | x3  y3  1 |
```

## Collinearity Test

If the area is zero, the three points are collinear.

## Example

Find the area of the triangle with vertices `(1,2)`, `(3,4)`, and `(5,1)`.

Using the formula:

`Area = 1/2 |1(4-1) + 3(1-2) + 5(2-4)|`

`= 1/2 |3 - 3 - 10|`

`= 1/2 | -10 | = 5`

So the area is `5` square units.

# Unit 4G: Minors

The minor `M_ij` of an element `a_ij` is the determinant obtained by deleting the `i`th row and `j`th column.

## Example

For

```text
A = [ 1  2  3 ]
    [ 4  5  6 ]
    [ 7  8  9 ]
```

Minor of element `5` is obtained by deleting row 2 and column 2:

```text
M_22 = | 1  3 |
       | 7  9 |
```

So:

`M_22 = 1(9) - 3(7) = -12`

# Unit 4H: Cofactors

The cofactor of element `a_ij` is:

`C_ij = (-1)^(i+j) M_ij`

## Sign Pattern

```text
+  -  +
-  +  -
+  -  +
```

## Example

If `M_22 = -12`, then:

`C_22 = (-1)^(2+2) M_22 = (+1)(-12) = -12`

If `M_12 = 6`, then:

`C_12 = (-1)^(1+2) M_12 = -6`

## Common Trap

Minor and cofactor are not always the same. Cofactor includes the sign factor.

# Unit 4I: Expansion Using Cofactors

The determinant of a square matrix can be expanded along any row or column by multiplying each element by its cofactor and adding.

For row `i`:

`det(A) = a_i1 C_i1 + a_i2 C_i2 + ... + a_in C_in`

For column `j`:

`det(A) = a_1j C_1j + a_2j C_2j + ... + a_nj C_nj`

Choose the row or column with zeros to save time.

# Unit 4J: Adjoint of a Matrix

The adjoint of a square matrix `A`, written `adj(A)`, is the transpose of the cofactor matrix.

## Steps To Find Adjoint

1. Find all cofactors of `A`.
2. Arrange them in the cofactor matrix.
3. Transpose the cofactor matrix.

## Example for a `2 x 2` Matrix

For:

```text
A = [ a  b ]
    [ c  d ]
```

The adjoint is:

```text
adj(A) = [  d -b ]
         [ -c  a ]
```

# Unit 4K: Inverse of a Matrix Using Determinants

A square matrix `A` is invertible if and only if `det(A) != 0`.

If `det(A) != 0`, then:

`A^-1 = adj(A)/det(A)`

If `det(A) = 0`, the matrix is singular and inverse does not exist.

## Example

Find inverse of:

```text
A = [ 2  1 ]
    [ 5  3 ]
```

First:

`det(A) = 2(3) - 1(5) = 1`

Adjoint:

```text
adj(A) = [ 3 -1 ]
         [-5  2 ]
```

Therefore:

```text
A^-1 = [ 3 -1 ]
       [-5  2 ]
```

# Unit 4L: Singular and Non-Singular Matrices

## Singular Matrix

A square matrix is singular if its determinant is zero.

Singular matrices do not have inverses.

## Non-Singular Matrix

A square matrix is non-singular if its determinant is non-zero.

Non-singular matrices have inverses.

## Quick Test

For a `2 x 2` matrix:

```text
A = [ a  b ]
    [ c  d ]
```

If `ad - bc = 0`, inverse does not exist.

# Unit 4M: Solving Linear Equations by Matrix Method

A system of linear equations can be written as:

`AX = B`

where:

- `A` is the coefficient matrix.
- `X` is the column matrix of variables.
- `B` is the column matrix of constants.

If `A` is invertible:

`X = A^-1 B`

## Example

Solve:

`2x + y = 5`

`x + y = 3`

Write:

```text
A = [ 2  1 ]      X = [ x ]      B = [ 5 ]
    [ 1  1 ]          [ y ]          [ 3 ]
```

`det(A) = 2(1) - 1(1) = 1`

```text
A^-1 = [ 1 -1 ]
       [-1  2 ]
```

Now:

```text
X = A^-1B
  = [ 1 -1 ] [ 5 ]
    [-1  2 ] [ 3 ]

X = [ 2 ]
    [ 1 ]
```

So `x = 2`, `y = 1`.

# Unit 4N: Consistency of Linear Equations

For `AX = B`:

- If `det(A) != 0`, there is a unique solution.
- If `det(A) = 0`, the system may have no solution or infinitely many solutions, and the inverse method cannot be used.

In this chapter, the inverse method is used only when the coefficient matrix is non-singular.

# Unit 4O: Worked Examples

## Example 1: Use a Determinant Property

Evaluate:

```text
| 1  2  3 |
| 1  2  3 |
| 4  5  6 |
```

Rows 1 and 2 are identical. Therefore determinant is `0`.

## Example 2: Area and Collinearity

Check whether points `(1,1)`, `(2,2)`, and `(3,3)` are collinear.

Area:

`1/2 |1(2-3) + 2(3-1) + 3(1-2)|`

`= 1/2 |-1 + 4 - 3|`

`= 0`

Therefore, points are collinear.

## Example 3: Cofactor Sign

If `M_23 = 7`, then:

`C_23 = (-1)^(2+3) M_23 = -7`

Because `2 + 3 = 5`, the sign is negative.

# Unit 4P: Answer-Writing Framework

## To evaluate a determinant

Write in this order:

1. Look for zeros, common factors, or repeated rows.
2. Use determinant properties if they simplify the determinant.
3. Choose the easiest row or column.
4. Expand carefully with signs.
5. State the final value.

## To find area of a triangle

Write in this order:

1. Write the three vertices.
2. Substitute in the determinant area formula.
3. Evaluate the determinant.
4. Take absolute value.
5. Multiply by `1/2`.

## To find inverse using adjoint

Write in this order:

1. Find `det(A)`.
2. If determinant is zero, inverse does not exist.
3. Find cofactor matrix.
4. Transpose it to get `adj(A)`.
5. Use `A^-1 = adj(A)/det(A)`.

## To solve equations by matrix method

Write in this order:

1. Write equations as `AX = B`.
2. Find `det(A)`.
3. If `det(A) != 0`, find `A^-1`.
4. Compute `X = A^-1B`.
5. Read values of variables.

# Unit 4Q: Common Mistakes and Corrections

| Mistake | Correction |
|---|---|
| Taking determinant of a non-square matrix | Determinants exist only for square matrices. |
| Using `ab - cd` for `2 x 2` determinant | Correct formula is `ad - bc`. |
| Forgetting sign changes in cofactor expansion | Use the sign pattern carefully. |
| Confusing minor and cofactor | Cofactor is signed minor. |
| Forgetting transpose in adjoint | Adjoint is transpose of the cofactor matrix. |
| Saying inverse exists when determinant is zero | If determinant is zero, inverse does not exist. |
| Ignoring absolute value in area formula | Area must be non-negative. |

## Practice Set

1. Evaluate `|3 4; 2 7|`.
2. Evaluate a `3 x 3` determinant by expanding along a row with a zero.
3. Show that a determinant with two identical rows is zero.
4. Use row replacement to simplify a determinant.
5. Find the area of the triangle with vertices `(0,0)`, `(4,0)`, and `(0,3)`.
6. Check whether `(1,2)`, `(2,4)`, and `(3,6)` are collinear.
7. Find minors and cofactors of all elements of a `2 x 2` matrix.
8. Find adjoint of `[[1,2],[3,4]]`.
9. Find inverse of `[[2,1],[5,3]]`.
10. Solve two linear equations in two variables using matrix method.

## Final Revision

Remember these points:

- Determinants are defined only for square matrices.
- `2 x 2` determinant is `ad - bc`.
- Properties of determinants save time and reduce errors.
- Cofactor equals signed minor.
- Adjoint is transpose of the cofactor matrix.
- `A^-1 = adj(A)/det(A)` only when `det(A) != 0`.
- Determinants can find triangle area and solve linear systems.
