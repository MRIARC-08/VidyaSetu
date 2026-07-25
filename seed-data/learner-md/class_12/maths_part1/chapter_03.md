# Chapter 3: Matrices
### NCERT Class 12 - Maths Part 1

## Chapter at a Glance

Matrices give a compact way to arrange numbers, variables, or data in rows and columns. They are used to represent systems of equations, transformations, tables, networks, economics data, computer graphics, and many applied problems.

This chapter develops the language and algebra of matrices: order, types, equality, addition, scalar multiplication, matrix multiplication, transpose, symmetric and skew symmetric matrices, and invertible matrices.

## Learning Outcomes

By the end of this chapter, learners should be able to:

- Define a matrix and identify its order.
- Classify matrices as row, column, square, diagonal, scalar, identity, zero, triangular, symmetric, or skew symmetric.
- Check equality of matrices.
- Add and subtract matrices of the same order.
- Multiply a matrix by a scalar.
- Multiply two matrices when multiplication is defined.
- Use properties of matrix addition and multiplication.
- Find transpose of a matrix.
- Test whether a matrix is symmetric or skew symmetric.
- Express a square matrix as the sum of symmetric and skew symmetric matrices.
- Understand invertible matrices and their basic properties.

## Key Terms

| Term | Meaning |
|---|---|
| Matrix | Rectangular arrangement of elements in rows and columns. |
| Element | Entry of a matrix, often written as `a_ij`. |
| Order | Number of rows x number of columns. |
| Row matrix | Matrix with one row. |
| Column matrix | Matrix with one column. |
| Square matrix | Matrix with equal number of rows and columns. |
| Diagonal matrix | Square matrix whose non-diagonal elements are zero. |
| Scalar matrix | Diagonal matrix whose diagonal entries are equal. |
| Identity matrix | Scalar matrix with all diagonal entries equal to `1`. |
| Zero matrix | Matrix whose every entry is `0`. |
| Transpose | Matrix obtained by interchanging rows and columns. |
| Symmetric matrix | Square matrix satisfying `A^T = A`. |
| Skew symmetric matrix | Square matrix satisfying `A^T = -A`. |
| Invertible matrix | Square matrix `A` for which a matrix `B` exists such that `AB = BA = I`. |

## Quick Formula Map

| Operation | Rule |
|---|---|
| Addition | Possible only for matrices of same order. |
| Scalar multiplication | Multiply every entry by the scalar. |
| Matrix multiplication | If `A` is `m x n` and `B` is `n x p`, then `AB` is `m x p`. |
| Entry of product | `(AB)_ij = sum a_ik b_kj` for `k = 1` to `n`. |
| Transpose of sum | `(A + B)^T = A^T + B^T`. |
| Transpose of product | `(AB)^T = B^T A^T`. |
| Symmetric part | `(A + A^T)/2`. |
| Skew symmetric part | `(A - A^T)/2`. |
| Inverse of product | `(AB)^-1 = B^-1 A^-1`, when inverses exist. |

# Unit 3A: What Is a Matrix?

A matrix is a rectangular arrangement of numbers or symbols in rows and columns.

Example:

```text
A = [ 2  5  7 ]
    [ 1  0 -3 ]
```

This matrix has 2 rows and 3 columns, so its order is `2 x 3`.

## General Form

A matrix with `m` rows and `n` columns is called an `m x n` matrix. Its element in the `i`th row and `j`th column is written as `a_ij`.

## Why Order Matters

Most matrix operations depend on order. Before adding or multiplying matrices, always check the order.

# Unit 3B: Order of a Matrix

If a matrix has `m` rows and `n` columns, its order is `m x n`.

## Example

```text
B = [ 1 ]
    [ 4 ]
    [ 9 ]
```

`B` has 3 rows and 1 column, so its order is `3 x 1`.

## Possible Orders from Number of Elements

If a matrix has 12 elements, possible orders are:

- `1 x 12`
- `2 x 6`
- `3 x 4`
- `4 x 3`
- `6 x 2`
- `12 x 1`

The product of rows and columns must equal the total number of elements.

# Unit 3C: Types of Matrices

## Row Matrix

A matrix with one row is a row matrix.

Example: `[2  -1  5]`

## Column Matrix

A matrix with one column is a column matrix.

```text
[ 3 ]
[ 0 ]
[ 8 ]
```

## Square Matrix

A matrix with equal number of rows and columns is square.

Examples: `2 x 2`, `3 x 3`, `4 x 4`.

## Diagonal Matrix

A square matrix is diagonal if all non-diagonal entries are zero.

```text
[ 2  0  0 ]
[ 0 -1  0 ]
[ 0  0  5 ]
```

## Scalar Matrix

A diagonal matrix is scalar if all diagonal entries are equal.

```text
[ 4  0  0 ]
[ 0  4  0 ]
[ 0  0  4 ]
```

## Identity Matrix

An identity matrix is a scalar matrix with diagonal entries equal to `1`.

```text
I = [ 1  0 ]
    [ 0  1 ]
```

For a compatible matrix `A`, `AI = IA = A`.

## Zero Matrix

Every entry is zero.

```text
O = [ 0  0 ]
    [ 0  0 ]
```

# Unit 3D: Equality of Matrices

Two matrices are equal if:

1. They have the same order.
2. Their corresponding entries are equal.

## Example

If

```text
[ x  2 ] = [ 5  2 ]
[ 3  y ]   [ 3 -1 ]
```

then `x = 5` and `y = -1`.

## Common Trap

Matrices with the same elements but arranged differently are not equal.

# Unit 3E: Addition and Subtraction of Matrices

Matrices can be added or subtracted only when they have the same order.

If `A = [a_ij]` and `B = [b_ij]`, then:

`A + B = [a_ij + b_ij]`

## Example

```text
A = [ 1  3 ]      B = [ 4 -1 ]
    [ 2  0 ]          [ 5  6 ]
```

Then:

```text
A + B = [ 5  2 ]
        [ 7  6 ]
```

## Properties of Addition

For matrices of the same order:

- `A + B = B + A`
- `(A + B) + C = A + (B + C)`
- `A + O = A`
- `A + (-A) = O`

# Unit 3F: Scalar Multiplication

To multiply a matrix by a scalar, multiply every entry by that scalar.

## Example

If

```text
A = [ 2 -3 ]
    [ 0  4 ]
```

then

```text
3A = [ 6 -9 ]
     [ 0 12 ]
```

## Properties

- `k(A + B) = kA + kB`
- `(k + l)A = kA + lA`
- `k(lA) = (kl)A`
- `1A = A`

# Unit 3G: Matrix Multiplication

Matrix multiplication is possible only when the number of columns of the first matrix equals the number of rows of the second matrix.

If `A` is `m x n` and `B` is `n x p`, then `AB` is defined and has order `m x p`.

## Entry Rule

The entry in row `i`, column `j` of `AB` is obtained by multiplying row `i` of `A` with column `j` of `B` and adding:

`(AB)_ij = a_i1 b_1j + a_i2 b_2j + ... + a_in b_nj`

## Example

```text
A = [ 1  2 ]      B = [ 3 ]
    [ 4  5 ]          [ 6 ]
```

`A` is `2 x 2` and `B` is `2 x 1`, so `AB` is `2 x 1`.

```text
AB = [ 1(3) + 2(6) ]
     [ 4(3) + 5(6) ]

AB = [ 15 ]
     [ 42 ]
```

# Unit 3H: Properties of Matrix Multiplication

Matrix multiplication has some familiar properties and some unfamiliar ones.

## True Properties

When products are defined:

- `(AB)C = A(BC)`
- `A(B + C) = AB + AC`
- `(A + B)C = AC + BC`
- `k(AB) = (kA)B = A(kB)`

## Not Always True

In general:

`AB != BA`

Matrix multiplication is not commutative.

Also, `AB = O` does not always imply `A = O` or `B = O`.

## Common Trap

Even when both `AB` and `BA` are defined, they may have different orders or different entries.

# Unit 3I: Transpose of a Matrix

The transpose of a matrix `A`, written `A^T`, is obtained by interchanging rows and columns.

## Example

```text
A = [ 1  2  3 ]
    [ 4  5  6 ]
```

Then:

```text
A^T = [ 1  4 ]
      [ 2  5 ]
      [ 3  6 ]
```

## Properties of Transpose

- `(A^T)^T = A`
- `(A + B)^T = A^T + B^T`
- `(kA)^T = kA^T`
- `(AB)^T = B^T A^T`

The last rule is important: transpose reverses the order of multiplication.

# Unit 3J: Symmetric Matrices

A square matrix `A` is symmetric if:

`A^T = A`

This means entries mirror across the main diagonal.

## Example

```text
A = [ 2  5  7 ]
    [ 5  1 -3 ]
    [ 7 -3  4 ]
```

This matrix is symmetric because `a_ij = a_ji`.

# Unit 3K: Skew Symmetric Matrices

A square matrix `A` is skew symmetric if:

`A^T = -A`

This means `a_ij = -a_ji`.

## Important Result

Every diagonal element of a skew symmetric matrix is zero.

Reason:

For diagonal entries, `a_ii = -a_ii`, so `2a_ii = 0`, hence `a_ii = 0`.

## Example

```text
A = [ 0  3 -2 ]
    [-3  0  5 ]
    [ 2 -5  0 ]
```

This is skew symmetric.

# Unit 3L: Decomposing a Square Matrix

Every square matrix `A` can be written as the sum of a symmetric matrix and a skew symmetric matrix:

`A = (A + A^T)/2 + (A - A^T)/2`

Here:

- `(A + A^T)/2` is symmetric.
- `(A - A^T)/2` is skew symmetric.

## Example

Let

```text
A = [ 1  4 ]
    [ 2  3 ]
```

Then:

```text
A^T = [ 1  2 ]
      [ 4  3 ]
```

Symmetric part:

```text
(A + A^T)/2 = [ 1  3 ]
              [ 3  3 ]
```

Skew symmetric part:

```text
(A - A^T)/2 = [ 0  1 ]
              [-1  0 ]
```

# Unit 3M: Invertible Matrices

A square matrix `A` is invertible if there exists a square matrix `B` of the same order such that:

`AB = BA = I`

Then `B` is called the inverse of `A` and is written `A^-1`.

## Important Facts

- Only square matrices can be invertible.
- The inverse, if it exists, is unique.
- If `A` is invertible, then `(A^-1)^-1 = A`.
- If `A` and `B` are invertible, then `(AB)^-1 = B^-1 A^-1`.
- If `A` is invertible, then `(A^T)^-1 = (A^-1)^T`.

## Two-by-Two Inverse Formula

For

```text
A = [ a  b ]
    [ c  d ]
```

If `ad - bc != 0`, then:

```text
A^-1 = 1/(ad - bc) [  d -b ]
                    [ -c  a ]
```

# Unit 3N: Worked Examples

## Example 1: Check Multiplication Order

If `A` is `3 x 2` and `B` is `2 x 4`, then `AB` is defined and has order `3 x 4`.

But `BA` is not defined because `B` has 4 columns and `A` has 3 rows, and `4 != 3`.

## Example 2: Find Matrix Product

```text
A = [ 1  0 ]
    [ 2  3 ]

B = [ 4  5 ]
    [ 6  7 ]
```

Then:

```text
AB = [ 1(4)+0(6)   1(5)+0(7) ]
     [ 2(4)+3(6)   2(5)+3(7) ]

AB = [ 4   5 ]
     [26  31 ]
```

## Example 3: Test Symmetry

```text
A = [ 1  2 ]
    [ 2  5 ]
```

Since `A^T = A`, the matrix is symmetric.

## Example 4: Find Inverse

```text
A = [ 2  1 ]
    [ 5  3 ]
```

Here `ad - bc = 2(3) - 1(5) = 1`.

So:

```text
A^-1 = [ 3 -1 ]
       [-5  2 ]
```

# Unit 3O: Answer-Writing Framework

## To multiply matrices

Write in this order:

1. State the orders of both matrices.
2. Confirm multiplication is defined.
3. State the order of the product.
4. Compute each entry by row-column multiplication.
5. Present the final matrix.

## To prove a matrix is symmetric

Write in this order:

1. Find `A^T`.
2. Compare `A^T` with `A`.
3. If equal, conclude symmetric.

## To prove a matrix is skew symmetric

Write in this order:

1. Find `A^T`.
2. Find `-A`.
3. Compare them.
4. If equal, conclude skew symmetric.

## To find inverse of a `2 x 2` matrix

Write in this order:

1. Identify `a`, `b`, `c`, `d`.
2. Compute `ad - bc`.
3. If it is zero, inverse does not exist.
4. If non-zero, apply formula.
5. Optionally verify by multiplying with `A`.

# Unit 3P: Common Mistakes and Corrections

| Mistake | Correction |
|---|---|
| Adding matrices of different orders | Addition needs same order. |
| Multiplying entry-wise for matrix product | Use row-column multiplication. |
| Assuming `AB = BA` | Matrix multiplication is generally not commutative. |
| Forgetting order reversal in transpose | `(AB)^T = B^T A^T`. |
| Calling a non-square matrix symmetric | Symmetric and skew symmetric matrices must be square. |
| Forgetting diagonal zeros in skew symmetric matrices | All diagonal entries must be zero. |
| Saying every square matrix is invertible | A square matrix may fail to have an inverse. |

## Practice Set

1. Find the order of a matrix with 4 rows and 7 columns.
2. List all possible orders of a matrix with 18 elements.
3. Add two `2 x 2` matrices of your choice and verify commutativity.
4. Find `AB` for `A = [[1,2],[3,4]]` and `B = [[0,1],[5,2]]`.
5. Check whether `AB = BA` for the matrices in question 4.
6. Find the transpose of a `2 x 3` matrix.
7. Test whether `[[2,3],[3,5]]` is symmetric.
8. Test whether `[[0,4],[-4,0]]` is skew symmetric.
9. Express `[[1,4],[2,3]]` as a sum of symmetric and skew symmetric matrices.
10. Find the inverse of `[[1,2],[3,7]]`, if it exists.

## Final Revision

Remember these points:

- Matrix order controls what operations are possible.
- Addition needs same order; multiplication needs matching inner dimensions.
- Matrix multiplication is not usually commutative.
- Transpose reverses rows and columns and reverses product order.
- Symmetric means `A^T = A`; skew symmetric means `A^T = -A`.
- Invertible matrices must be square, and inverse is unique when it exists.
