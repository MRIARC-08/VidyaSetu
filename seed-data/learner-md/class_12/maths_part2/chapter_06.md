# Chapter 6: Linear Programming
### NCERT Class 12 - Maths Part 2

## Chapter at a Glance

Linear Programming is a method for maximising or minimising a linear objective function subject to linear constraints. It is used in production planning, diet problems, transportation, resource allocation, and business decision-making.

In Class 12, linear programming problems are solved graphically for two variables. The key skill is translating a word problem into inequalities, drawing the feasible region, and checking corner points.

## Learning Outcomes

By the end of this chapter, learners should be able to:

- Define a linear programming problem.
- Identify decision variables.
- Form an objective function.
- Convert restrictions into linear inequalities.
- Graph half-planes.
- Find feasible region.
- Identify corner points.
- Use the corner-point method.
- Decide maximum or minimum value.
- Recognise bounded and unbounded feasible regions.

## Key Terms

| Term | Meaning |
|---|---|
| Linear programming | Optimising a linear function subject to linear constraints. |
| Decision variables | Unknown quantities to be decided. |
| Objective function | Function to maximise or minimise. |
| Constraints | Conditions written as linear equations or inequalities. |
| Non-negative restrictions | Conditions such as `x >= 0`, `y >= 0`. |
| Feasible region | Set of points satisfying all constraints. |
| Feasible solution | Any point in the feasible region. |
| Corner point | Vertex of the feasible region. |
| Optimal solution | Feasible point giving maximum or minimum value. |
| Bounded region | Feasible region enclosed within finite boundaries. |
| Unbounded region | Feasible region extending indefinitely. |

## Quick Formula Map

| Part | Description |
|---|---|
| Objective function | `Z = ax + by` |
| Constraint form | `a1x + b1y <= c1`, or `>=`, or `=` |
| Non-negative restrictions | `x >= 0`, `y >= 0` |
| Corner-point method | Evaluate `Z` at each corner point. |
| Maximum | Largest value of `Z` among checked feasible corners. |
| Minimum | Smallest value of `Z` among checked feasible corners. |

# Unit 6A: What Is Linear Programming?

A linear programming problem has:

1. A linear objective function.
2. Linear constraints.
3. Non-negative restrictions.
4. A goal: maximise or minimise.

## Example

Maximise:

`Z = 3x + 2y`

subject to:

`x + y <= 4`

`x <= 3`

`y <= 2`

`x >= 0`, `y >= 0`

# Unit 6B: Decision Variables

Decision variables represent quantities to be found.

Examples:

- `x` = number of product A units.
- `y` = number of product B units.
- `x` = kg of food item 1.
- `y` = kg of food item 2.

## Rule

Define variables clearly before forming equations. This prevents confusion in word problems.

# Unit 6C: Objective Function

The objective function is the expression to be maximised or minimised.

Examples:

- Profit: `Z = 50x + 80y`
- Cost: `Z = 20x + 30y`
- Time: `Z = 2x + 5y`

The objective function must be linear in Class 12 problems.

# Unit 6D: Constraints

Constraints represent restrictions on resources, capacity, demand, or conditions.

Examples:

- Labour hours: `2x + 3y <= 60`
- Material: `x + 2y <= 40`
- Minimum requirement: `x + y >= 10`
- Availability: `x <= 20`

## Non-Negative Restrictions

Most real quantities cannot be negative:

`x >= 0`, `y >= 0`

Do not forget these. They are part of the constraints.

# Unit 6E: Graphing Inequalities

To graph a linear inequality:

1. Draw the corresponding line by replacing inequality with equality.
2. Choose a test point not on the line, usually `(0,0)`.
3. Substitute the test point.
4. Shade the side that satisfies the inequality.

## Example

For `x + y <= 4`:

Boundary line: `x + y = 4`.

Test `(0,0)`:

`0 + 0 <= 4`, true.

So shade the side containing the origin.

# Unit 6F: Feasible Region

The feasible region is the common shaded region satisfying all constraints.

Every point in this region is a feasible solution.

## Feasible Region Can Be

- Bounded.
- Unbounded.
- Empty.

If it is empty, no feasible solution exists.

# Unit 6G: Corner-Point Method

For a linear programming problem, if an optimum exists, it occurs at a corner point of the feasible region.

## Steps

1. Draw all constraint lines.
2. Identify feasible region.
3. Find all corner points.
4. Evaluate objective function at each corner.
5. Choose maximum or minimum value as required.

# Unit 6H: Worked Example

Maximise:

`Z = 3x + 2y`

subject to:

`x + y <= 4`

`x <= 3`

`y <= 2`

`x >= 0`, `y >= 0`

## Corner Points

The feasible region has corner points:

`(0,0)`, `(3,0)`, `(3,1)`, `(2,2)`, `(0,2)`

Evaluate:

| Point | `Z = 3x + 2y` |
|---|---|
| `(0,0)` | `0` |
| `(3,0)` | `9` |
| `(3,1)` | `11` |
| `(2,2)` | `10` |
| `(0,2)` | `4` |

Maximum value is `11` at `(3,1)`.

# Unit 6I: Minimum Problems

Minimum problems are solved the same way.

## Example Pattern

Minimise:

`Z = ax + by`

subject to constraints.

Evaluate `Z` at every feasible corner point. The smallest value gives the minimum.

## Important Warning

For unbounded feasible regions, a minimum or maximum may not exist. You must check direction of optimisation.

# Unit 6J: Unbounded Feasible Region

An unbounded feasible region extends infinitely.

An unbounded region can still have an optimum in some cases.

## How To Handle

After finding a candidate optimum at a corner point, check whether the objective function can improve indefinitely in the unbounded direction.

If yes, optimum does not exist.

If no, the corner value is the optimum.

# Unit 6K: Word Problems

Linear programming word problems usually involve:

- Production.
- Diet planning.
- Investment.
- Transportation.
- Manufacturing constraints.
- Labour and material limits.

## Standard Translation Method

1. Define variables.
2. Identify objective: profit, cost, time, etc.
3. Convert each restriction into inequality.
4. Add non-negative restrictions.
5. Solve graphically.
6. Interpret final point in words.

# Unit 6L: Answer-Writing Framework

## To solve an LPP graphically

Write in this order:

1. Define decision variables.
2. Write objective function.
3. Write constraints.
4. Add `x >= 0`, `y >= 0`.
5. Draw feasible region.
6. Find corner points.
7. Evaluate objective function at corners.
8. State optimum value and where it occurs.

## To convert a word problem into LPP

Write in this order:

1. Read what must be decided.
2. Let those quantities be `x` and `y`.
3. Write the expression to maximise or minimise.
4. Translate each resource restriction.
5. Include non-negative restrictions.
6. Solve using graph.

# Unit 6M: Common Mistakes and Corrections

| Mistake | Correction |
|---|---|
| Not defining variables | Always state what `x` and `y` mean. |
| Forgetting non-negative restrictions | Add `x >= 0`, `y >= 0`. |
| Shading wrong half-plane | Test a point such as `(0,0)`. |
| Evaluating objective at random points | Evaluate only corner points. |
| Confusing maximum and minimum | Check whether largest or smallest value is required. |
| Ignoring unboundedness | Verify whether optimum actually exists. |
| Giving point without context | State what the point means in the word problem. |

## Practice Set

1. Maximise `Z = 2x + 3y` subject to `x + y <= 5`, `x <= 3`, `y <= 4`, `x,y >= 0`.
2. Minimise `Z = 3x + 2y` subject to `x + y >= 4`, `x >= 0`, `y >= 0`, and another suitable bound.
3. Convert a production problem with two products and two resource limits into an LPP.
4. Explain why optimum occurs at a corner point.
5. Give an example of an unbounded feasible region.
6. Explain how to decide the correct half-plane of an inequality.

## Final Revision

Remember these points:

- Linear programming optimises a linear function under linear constraints.
- Define variables first.
- Constraints form a feasible region.
- The optimum occurs at a corner point if it exists.
- Always check all corner points.
- Non-negative restrictions are essential.
- In word problems, final answer must be interpreted in context.
