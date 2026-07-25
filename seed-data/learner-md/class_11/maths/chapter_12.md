# Chapter 12 - Limits And Derivatives

Class 11 Maths learner notes

## 1. Big Picture

Calculus studies change.

This chapter introduces two foundational ideas of calculus:

- limits;
- derivatives.

A limit describes what value a function approaches.

A derivative describes the rate at which a function changes.

The two ideas are linked. A derivative is defined using a limit.

## 2. Learning Goals

By the end of this chapter, a learner should be able to:

- understand average rate of change;
- understand instantaneous rate of change;
- interpret derivative as slope of tangent;
- understand left-hand and right-hand limits;
- decide when a limit exists;
- apply algebra of limits;
- evaluate polynomial and rational limits;
- use standard trigonometric limits;
- define derivative from first principle;
- find derivatives of simple functions from first principle;
- apply sum, difference, product, and quotient rules;
- differentiate powers, polynomials, and basic trigonometric functions.

## 3. Why Limits Are Needed

Many mathematical questions ask:

> What happens when a variable gets very close to a value?

The variable may not actually equal that value.

Example:

For:

$$
f(x)=\frac{x^2-4}{x-2}
$$

the function is not defined at:

$$
x=2
$$

because the denominator becomes 0.

But for `x` close to 2:

$$
\frac{x^2-4}{x-2}
=\frac{(x-2)(x+2)}{x-2}
=x+2
$$

for:

$$
x\ne2
$$

So as `x` gets close to 2, the function gets close to:

$$
4
$$

This is a limit.

## 4. Average Rate Of Change

Suppose a body falls from a height and the distance covered after `t` seconds is:

$$
s=4.9t^2
$$

The average velocity from time `t_1` to time `t_2` is:

$$
\frac{s(t_2)-s(t_1)}{t_2-t_1}
$$

This is average rate of change.

### 4.1 Example: Average Velocity From 0 To 2 Seconds

Distance function:

$$
s(t)=4.9t^2
$$

At:

$$
t=0
$$

$$
s(0)=0
$$

At:

$$
t=2
$$

$$
s(2)=4.9(2)^2=19.6
$$

Average velocity:

$$
\frac{19.6-0}{2-0}=9.8
$$

So the average velocity over the first 2 seconds is:

$$
9.8\text{ m/s}
$$

### 4.2 Example: Average Velocity From 1 To 2 Seconds

$$
s(1)=4.9
$$

$$
s(2)=19.6
$$

Average velocity:

$$
\frac{19.6-4.9}{2-1}=14.7
$$

As the interval gets smaller around `t=2`, the average velocity approaches the instantaneous velocity.

## 5. Instantaneous Rate Of Change

Instantaneous velocity at `t=2` means the rate of change exactly at `t=2`.

It is not found by using a long time interval.

Instead, use a very small interval:

$$
h
$$

Average velocity from `2` to `2+h`:

$$
\frac{s(2+h)-s(2)}{h}
$$

The instantaneous velocity is the limiting value as:

$$
h\to0
$$

For:

$$
s(t)=4.9t^2
$$

we get:

$$
\frac{s(2+h)-s(2)}{h}
=\frac{4.9(2+h)^2-4.9(2)^2}{h}
$$

Expand:

$$
4.9(2+h)^2=4.9(4+4h+h^2)
$$

So:

$$
\frac{s(2+h)-s(2)}{h}
=\frac{19.6+19.6h+4.9h^2-19.6}{h}
$$

$$
=19.6+4.9h
$$

Let:

$$
h\to0
$$

Then:

$$
19.6+4.9h\to19.6
$$

So the instantaneous velocity at `t=2` is:

$$
19.6\text{ m/s}
$$

## 6. Derivative As Slope Of Tangent

For a curve:

$$
y=f(x)
$$

take two nearby points:

$$
P=(a,f(a))
$$

and:

$$
Q=(a+h,f(a+h))
$$

The slope of the chord `PQ` is:

$$
\frac{f(a+h)-f(a)}{h}
$$

As:

$$
h\to0
$$

the point `Q` moves toward `P`, and the chord approaches the tangent line at `P`.

So the derivative at `a` is the slope of the tangent at:

$$
(a,f(a))
$$

## 7. Limit: Informal Meaning

We write:

$$
\lim_{x\to a}f(x)=L
$$

This means:

> as `x` gets close to `a`, the value of `f(x)` gets close to `L`.

Important:

The value of `f(a)` may or may not equal the limit.

The function may even be undefined at `a`, but the limit may still exist.

## 8. Left-Hand And Right-Hand Limits

There are two ways for `x` to approach `a`.

It can approach from values less than `a`.

This gives the left-hand limit:

$$
\lim_{x\to a^-}f(x)
$$

It can approach from values greater than `a`.

This gives the right-hand limit:

$$
\lim_{x\to a^+}f(x)
$$

The two-sided limit exists if and only if both one-sided limits exist and are equal.

That is:

$$
\lim_{x\to a}f(x)=L
$$

if:

$$
\lim_{x\to a^-}f(x)=L
$$

and:

$$
\lim_{x\to a^+}f(x)=L
$$

## 9. Example: Limit Exists

Let:

$$
f(x)=x+10
$$

Find:

$$
\lim_{x\to5}f(x)
$$

As `x` approaches 5 from the left, `x+10` approaches 15.

As `x` approaches 5 from the right, `x+10` approaches 15.

Therefore:

$$
\lim_{x\to5}(x+10)=15
$$

## 10. Example: Limit Does Not Exist

Let:

$$
f(x)=
\begin{cases}
1, & x\le0\\
2, & x>0
\end{cases}
$$

Left-hand limit at 0:

$$
\lim_{x\to0^-}f(x)=1
$$

Right-hand limit at 0:

$$
\lim_{x\to0^+}f(x)=2
$$

Since these are not equal:

$$
\lim_{x\to0}f(x)
$$

does not exist.

## 11. Function Value Versus Limit

A function value and a limit are different ideas.

Example:

$$
f(x)=
\begin{cases}
x+2, & x\ne1\\
0, & x=1
\end{cases}
$$

At:

$$
x=1
$$

the function value is:

$$
f(1)=0
$$

But as `x` approaches 1:

$$
x+2\to3
$$

So:

$$
\lim_{x\to1}f(x)=3
$$

Thus:

$$
\lim_{x\to1}f(x)\ne f(1)
$$

## 12. Algebra Of Limits

Suppose:

$$
\lim_{x\to a}f(x)
$$

and:

$$
\lim_{x\to a}g(x)
$$

both exist.

Then:

### 12.1 Sum Rule

$$
\lim_{x\to a}[f(x)+g(x)]
=\lim_{x\to a}f(x)+\lim_{x\to a}g(x)
$$

### 12.2 Difference Rule

$$
\lim_{x\to a}[f(x)-g(x)]
=\lim_{x\to a}f(x)-\lim_{x\to a}g(x)
$$

### 12.3 Product Rule

$$
\lim_{x\to a}[f(x)g(x)]
=\left(\lim_{x\to a}f(x)\right)\left(\lim_{x\to a}g(x)\right)
$$

### 12.4 Quotient Rule

If:

$$
\lim_{x\to a}g(x)\ne0
$$

then:

$$
\lim_{x\to a}\frac{f(x)}{g(x)}
=
\frac{\lim_{x\to a}f(x)}{\lim_{x\to a}g(x)}
$$

## 13. Limits Of Polynomial Functions

If:

$$
f(x)
$$

is a polynomial, then:

$$
\lim_{x\to a}f(x)=f(a)
$$

### 13.1 Example

Find:

$$
\lim_{x\to1}(x^3-x^2+1)
$$

Since it is a polynomial, substitute:

$$
1^3-1^2+1=1
$$

So:

$$
\lim_{x\to1}(x^3-x^2+1)=1
$$

### 13.2 Example

Find:

$$
\lim_{x\to3}x(x+1)
$$

Substitute:

$$
3(3+1)=12
$$

So:

$$
\lim_{x\to3}x(x+1)=12
$$

### 13.3 Example

Find:

$$
\lim_{x\to-1}(1+x+x^2+\cdots+x^{10})
$$

Substitute:

$$
1+(-1)+(-1)^2+\cdots+(-1)^{10}
$$

There are 11 terms, alternating:

$$
1-1+1-1+\cdots+1
$$

The sum is:

$$
1
$$

## 14. Limits Of Rational Functions

A rational function has the form:

$$
\frac{g(x)}{h(x)}
$$

where `g` and `h` are polynomials.

If:

$$
h(a)\ne0
$$

then:

$$
\lim_{x\to a}\frac{g(x)}{h(x)}
=\frac{g(a)}{h(a)}
$$

If direct substitution gives:

$$
\frac{0}{0}
$$

then factor and cancel the common factor if possible.

### 14.1 Example: Direct Substitution Works

Find:

$$
\lim_{x\to1}\frac{x+1}{x+100}
$$

Substitute:

$$
\frac{1+1}{1+100}=\frac{2}{101}
$$

### 14.2 Example: Factor And Cancel

Find:

$$
\lim_{x\to2}\frac{x^2-4}{x-2}
$$

Factor:

$$
x^2-4=(x-2)(x+2)
$$

So for `x\ne2`:

$$
\frac{x^2-4}{x-2}=x+2
$$

Therefore:

$$
\lim_{x\to2}\frac{x^2-4}{x-2}
=\lim_{x\to2}(x+2)=4
$$

### 14.3 Example: Cubic Difference

Find:

$$
\lim_{x\to2}\frac{x^3-8}{x-2}
$$

Use:

$$
x^3-8=(x-2)(x^2+2x+4)
$$

So:

$$
\lim_{x\to2}\frac{x^3-8}{x-2}
=\lim_{x\to2}(x^2+2x+4)
$$

$$
=4+4+4=12
$$

## 15. Important Algebraic Limit

For positive integer `n`:

$$
\lim_{x\to a}\frac{x^n-a^n}{x-a}=na^{n-1}
$$

This comes from:

$$
x^n-a^n=(x-a)(x^{n-1}+x^{n-2}a+x^{n-3}a^2+\cdots+a^{n-1})
$$

### 15.1 Example

Find:

$$
\lim_{x\to1}\frac{x^{15}-1}{x^{10}-1}
$$

Write:

$$
\frac{x^{15}-1}{x^{10}-1}
=
\frac{\frac{x^{15}-1}{x-1}}{\frac{x^{10}-1}{x-1}}
$$

Using the standard limit:

$$
\lim_{x\to1}\frac{x^{15}-1}{x-1}=15
$$

and:

$$
\lim_{x\to1}\frac{x^{10}-1}{x-1}=10
$$

Therefore:

$$
\lim_{x\to1}\frac{x^{15}-1}{x^{10}-1}
=\frac{15}{10}=\frac{3}{2}
$$

## 16. Trigonometric Limits

Angles must be measured in radians.

The most important standard limit is:

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

Another standard limit is:

$$
\lim_{x\to0}\frac{1-\cos x}{x}=0
$$

Also:

$$
\lim_{x\to0}\frac{\tan x}{x}=1
$$

because:

$$
\tan x=\frac{\sin x}{\cos x}
$$

and:

$$
\lim_{x\to0}\cos x=1
$$

### 16.1 Sandwich Theorem Idea

If:

$$
f(x)\le g(x)\le h(x)
$$

near `a`, and:

$$
\lim_{x\to a}f(x)=L=\lim_{x\to a}h(x)
$$

then:

$$
\lim_{x\to a}g(x)=L
$$

This is called the sandwich theorem.

It is used to justify:

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

## 17. Trigonometric Limit Examples

### 17.1 Example

Find:

$$
\lim_{x\to0}\frac{\sin4x}{\sin2x}
$$

Rewrite:

$$
\frac{\sin4x}{\sin2x}
=
\frac{\sin4x}{4x}\cdot\frac{2x}{\sin2x}\cdot2
$$

Now:

$$
\lim_{x\to0}\frac{\sin4x}{4x}=1
$$

and:

$$
\lim_{x\to0}\frac{2x}{\sin2x}=1
$$

Therefore:

$$
\lim_{x\to0}\frac{\sin4x}{\sin2x}=2
$$

### 17.2 Example

Find:

$$
\lim_{x\to0}\frac{\tan x}{x}
$$

Use:

$$
\frac{\tan x}{x}
=\frac{\sin x}{x}\cdot\frac{1}{\cos x}
$$

Then:

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

and:

$$
\lim_{x\to0}\frac{1}{\cos x}=1
$$

So:

$$
\lim_{x\to0}\frac{\tan x}{x}=1
$$

### 17.3 Example

Find:

$$
\lim_{x\to0}(\cosec x-\cot x)
$$

Use:

$$
\cosec x-\cot x=\frac{1}{\sin x}-\frac{\cos x}{\sin x}
$$

$$
=\frac{1-\cos x}{\sin x}
$$

Now:

$$
\frac{1-\cos x}{\sin x}
=
\frac{1-\cos x}{x}\cdot\frac{x}{\sin x}
$$

The first factor tends to 0 and the second tends to 1.

Therefore:

$$
\lim_{x\to0}(\cosec x-\cot x)=0
$$

## 18. Derivative At A Point

Let `f` be a function and `a` be a point in its domain.

The derivative of `f` at `a` is:

$$
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}
$$

provided this limit exists.

It measures the instantaneous rate of change of `f` at `a`.

It also gives the slope of the tangent to:

$$
y=f(x)
$$

at:

$$
x=a
$$

## 19. Derivative Function

The derivative function is:

$$
f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}
$$

wherever the limit exists.

Other notations:

$$
\frac{d}{dx}f(x)
$$

and, if `y=f(x)`:

$$
\frac{dy}{dx}
$$

## 20. Derivatives From First Principle

### 20.1 Example: Derivative Of `3x` At `x=2`

Let:

$$
f(x)=3x
$$

Then:

$$
f'(2)=\lim_{h\to0}\frac{f(2+h)-f(2)}{h}
$$

Now:

$$
f(2+h)=3(2+h)=6+3h
$$

and:

$$
f(2)=6
$$

So:

$$
f'(2)=\lim_{h\to0}\frac{6+3h-6}{h}
$$

$$
=\lim_{h\to0}3=3
$$

### 20.2 Example: Derivative Of `2x^2+3x-5` At `x=-1`

Let:

$$
f(x)=2x^2+3x-5
$$

Using the derivative rule:

$$
f'(x)=4x+3
$$

At:

$$
x=-1
$$

$$
f'(-1)=4(-1)+3=-1
$$

At:

$$
x=0
$$

$$
f'(0)=3
$$

Therefore:

$$
f'(0)+3f'(-1)=3+3(-1)=0
$$

### 20.3 Example: Derivative Of `sin x` At `x=0`

Let:

$$
f(x)=\sin x
$$

Then:

$$
f'(0)=\lim_{h\to0}\frac{\sin(0+h)-\sin0}{h}
$$

$$
=\lim_{h\to0}\frac{\sin h}{h}
$$

Therefore:

$$
f'(0)=1
$$

### 20.4 Example: Derivative Of A Constant

Let:

$$
f(x)=3
$$

Then:

$$
f'(x)=\lim_{h\to0}\frac{3-3}{h}
$$

$$
=0
$$

So the derivative of a constant function is 0.

### 20.5 Example: Derivative Of `x^2`

Let:

$$
f(x)=x^2
$$

Then:

$$
f'(x)=\lim_{h\to0}\frac{(x+h)^2-x^2}{h}
$$

Expand:

$$
(x+h)^2=x^2+2xh+h^2
$$

So:

$$
f'(x)=\lim_{h\to0}\frac{2xh+h^2}{h}
$$

$$
=\lim_{h\to0}(2x+h)=2x
$$

### 20.6 Example: Derivative Of `1/x`

Let:

$$
f(x)=\frac{1}{x}
$$

where:

$$
x\ne0
$$

Then:

$$
f'(x)=\lim_{h\to0}\frac{\frac{1}{x+h}-\frac{1}{x}}{h}
$$

Combine fractions:

$$
\frac{1}{x+h}-\frac{1}{x}
=\frac{x-(x+h)}{x(x+h)}
=\frac{-h}{x(x+h)}
$$

So:

$$
f'(x)=\lim_{h\to0}\frac{-h}{h x(x+h)}
$$

$$
=\lim_{h\to0}\frac{-1}{x(x+h)}
$$

Therefore:

$$
f'(x)=-\frac{1}{x^2}
$$

## 21. Algebra Of Derivatives

Let `u` and `v` be differentiable functions of `x`.

### 21.1 Sum Rule

$$
\frac{d}{dx}(u+v)=u'+v'
$$

### 21.2 Difference Rule

$$
\frac{d}{dx}(u-v)=u'-v'
$$

### 21.3 Constant Multiple Rule

If `c` is constant:

$$
\frac{d}{dx}(cu)=cu'
$$

### 21.4 Product Rule

$$
\frac{d}{dx}(uv)=u'v+uv'
$$

### 21.5 Quotient Rule

If:

$$
v\ne0
$$

then:

$$
\frac{d}{dx}\left(\frac{u}{v}\right)
=\frac{u'v-uv'}{v^2}
$$

## 22. Standard Derivatives

### 22.1 Constant

$$
\frac{d}{dx}(c)=0
$$

### 22.2 Identity Function

$$
\frac{d}{dx}(x)=1
$$

### 22.3 Power Rule

For positive integer `n`:

$$
\frac{d}{dx}(x^n)=nx^{n-1}
$$

This rule also works for many other real powers wherever the function is defined.

### 22.4 Sine

$$
\frac{d}{dx}(\sin x)=\cos x
$$

### 22.5 Cosine

$$
\frac{d}{dx}(\cos x)=-\sin x
$$

### 22.6 Tangent

$$
\frac{d}{dx}(\tan x)=\sec^2 x
$$

### 22.7 Cotangent

$$
\frac{d}{dx}(\cot x)=-\cosec^2 x
$$

### 22.8 Secant

$$
\frac{d}{dx}(\sec x)=\sec x\tan x
$$

### 22.9 Cosecant

$$
\frac{d}{dx}(\cosec x)=-\cosec x\cot x
$$

## 23. Polynomial Derivatives

For:

$$
f(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0
$$

the derivative is:

$$
f'(x)=na_nx^{n-1}+(n-1)a_{n-1}x^{n-2}+\cdots+a_1
$$

### 23.1 Example

Differentiate:

$$
6x^{100}-x^{55}+x
$$

Use the power rule:

$$
\frac{d}{dx}(6x^{100})=600x^{99}
$$

$$
\frac{d}{dx}(-x^{55})=-55x^{54}
$$

$$
\frac{d}{dx}(x)=1
$$

Therefore:

$$
\frac{d}{dx}(6x^{100}-x^{55}+x)=600x^{99}-55x^{54}+1
$$

### 23.2 Example

Find the derivative of:

$$
f(x)=1+x+x^2+x^3+\cdots+x^{50}
$$

at:

$$
x=1
$$

Derivative:

$$
f'(x)=1+2x+3x^2+\cdots+50x^{49}
$$

At:

$$
x=1
$$

$$
f'(1)=1+2+3+\cdots+50
$$

Use:

$$
1+2+\cdots+50=\frac{50\cdot51}{2}
$$

So:

$$
f'(1)=1275
$$

## 24. Quotient Rule Examples

### 24.1 Example

Differentiate:

$$
f(x)=\frac{x+1}{x}
$$

Let:

$$
u=x+1,\quad v=x
$$

Then:

$$
u'=1,\quad v'=1
$$

Use quotient rule:

$$
f'(x)=\frac{u'v-uv'}{v^2}
$$

$$
=\frac{1\cdot x-(x+1)\cdot1}{x^2}
$$

$$
=\frac{x-x-1}{x^2}
$$

Therefore:

$$
f'(x)=-\frac{1}{x^2}
$$

### 24.2 Example

Differentiate:

$$
\cot x
$$

Write:

$$
\cot x=\frac{\cos x}{\sin x}
$$

Let:

$$
u=\cos x,\quad v=\sin x
$$

Then:

$$
u'=-\sin x,\quad v'=\cos x
$$

Use quotient rule:

$$
\frac{d}{dx}(\cot x)
=\frac{(-\sin x)(\sin x)-(\cos x)(\cos x)}{\sin^2x}
$$

$$
=-\frac{\sin^2x+\cos^2x}{\sin^2x}
$$

Since:

$$
\sin^2x+\cos^2x=1
$$

we get:

$$
\frac{d}{dx}(\cot x)=-\cosec^2x
$$

## 25. Trigonometric Derivative Examples

### 25.1 Example: Derivative Of `sin x`

From first principle:

$$
\frac{d}{dx}(\sin x)=\cos x
$$

This is a standard derivative.

### 25.2 Example: Derivative Of `tan x`

Write:

$$
\tan x=\frac{\sin x}{\cos x}
$$

Use quotient rule.

Let:

$$
u=\sin x,\quad v=\cos x
$$

Then:

$$
u'=\cos x,\quad v'=-\sin x
$$

So:

$$
\frac{d}{dx}(\tan x)
=\frac{(\cos x)(\cos x)-(\sin x)(-\sin x)}{\cos^2x}
$$

$$
=\frac{\cos^2x+\sin^2x}{\cos^2x}
$$

$$
=\sec^2x
$$

### 25.3 Example: Derivative Of `sin^2x`

Write:

$$
\sin^2x=(\sin x)(\sin x)
$$

Use product rule:

$$
\frac{d}{dx}(\sin^2x)
=\cos x\sin x+\sin x\cos x
$$

$$
=2\sin x\cos x
$$

Using:

$$
\sin2x=2\sin x\cos x
$$

we get:

$$
\frac{d}{dx}(\sin^2x)=\sin2x
$$

## 26. Common Mistakes

### Mistake 1: Thinking Limit Must Equal Function Value

The limit at `a` may exist even if `f(a)` is undefined.

The limit may also differ from `f(a)`.

### Mistake 2: Ignoring One-Sided Limits

For piecewise functions, always check left-hand and right-hand limits separately.

### Mistake 3: Cancelling At The Forbidden Point

In:

$$
\frac{x^2-4}{x-2}
$$

you may cancel `x-2` only while considering:

$$
x\ne2
$$

This is acceptable for limits as `x` approaches 2, but it does not define the original function at 2.

### Mistake 4: Using Trigonometric Limits In Degrees

The standard limit:

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

requires radians.

### Mistake 5: Confusing Product Rule

Derivative of:

$$
uv
$$

is not:

$$
u'v'
$$

Correct:

$$
(uv)'=u'v+uv'
$$

### Mistake 6: Confusing Quotient Rule Order

Correct:

$$
\left(\frac{u}{v}\right)'=\frac{u'v-uv'}{v^2}
$$

The order in the numerator matters.

## 27. Practice Set A: Limits

### Question A1

Evaluate:

$$
\lim_{x\to3}(x+3)
$$

Answer:

$$
6
$$

### Question A2

Evaluate:

$$
\lim_{x\to4}(2x^3+x-2)
$$

Answer:

Substitute:

$$
2(4)^3+4-2=128+2=130
$$

### Question A3

Evaluate:

$$
\lim_{x\to2}\frac{x^2-4}{x-2}
$$

Answer:

$$
4
$$

### Question A4

Evaluate:

$$
\lim_{x\to1}\frac{x^3-1}{x-1}
$$

Answer:

$$
x^3-1=(x-1)(x^2+x+1)
$$

So:

$$
\lim_{x\to1}\frac{x^3-1}{x-1}=3
$$

### Question A5

Evaluate:

$$
\lim_{x\to0}\frac{\sin5x}{x}
$$

Answer:

$$
\frac{\sin5x}{x}
=5\cdot\frac{\sin5x}{5x}
$$

So:

$$
\lim_{x\to0}\frac{\sin5x}{x}=5
$$

## 28. Practice Set B: One-Sided Limits

### Question B1

Let:

$$
f(x)=
\begin{cases}
x-2, & x<0\\
x+2, & x>0
\end{cases}
$$

Find whether:

$$
\lim_{x\to0}f(x)
$$

exists.

Answer:

Left-hand limit:

$$
\lim_{x\to0^-}(x-2)=-2
$$

Right-hand limit:

$$
\lim_{x\to0^+}(x+2)=2
$$

They are unequal, so the limit does not exist.

### Question B2

Let:

$$
f(x)=|x-5|
$$

Find:

$$
\lim_{x\to5}f(x)
$$

Answer:

From both sides, `|x-5|` tends to 0.

So:

$$
\lim_{x\to5}|x-5|=0
$$

## 29. Practice Set C: Derivatives

### Question C1

Find the derivative of:

$$
x^2-2
$$

at:

$$
x=10
$$

Answer:

Derivative:

$$
2x
$$

At `x=10`:

$$
20
$$

### Question C2

Find the derivative of:

$$
x
$$

at:

$$
x=1
$$

Answer:

Derivative of `x` is 1.

So the answer is:

$$
1
$$

### Question C3

Find the derivative of:

$$
99x
$$

at:

$$
x=100
$$

Answer:

Derivative of `99x` is:

$$
99
$$

So the value at `x=100` is:

$$
99
$$

### Question C4

Differentiate:

$$
2x^3-4x
$$

Answer:

$$
6x^2-4
$$

### Question C5

Differentiate:

$$
5\sin x-6\cos x+7
$$

Answer:

$$
5\cos x+6\sin x
$$

### Question C6

Differentiate:

$$
2\tan x-7\sec x
$$

Answer:

$$
2\sec^2x-7\sec x\tan x
$$

## 30. Practice Set D: Product And Quotient

### Question D1

Differentiate:

$$
x\sin x
$$

Answer:

Use product rule:

$$
\frac{d}{dx}(x\sin x)=1\cdot\sin x+x\cos x
$$

So:

$$
\sin x+x\cos x
$$

### Question D2

Differentiate:

$$
\frac{\sin x}{x}
$$

Answer:

Use quotient rule:

$$
u=\sin x,\quad v=x
$$

Then:

$$
u'=\cos x,\quad v'=1
$$

So:

$$
\frac{d}{dx}\left(\frac{\sin x}{x}\right)
=\frac{x\cos x-\sin x}{x^2}
$$

### Question D3

Differentiate:

$$
\frac{5x-\cos x}{\sin x}
$$

Answer:

Let:

$$
u=5x-\cos x,\quad v=\sin x
$$

Then:

$$
u'=5+\sin x,\quad v'=\cos x
$$

Use quotient rule:

$$
\frac{u'v-uv'}{v^2}
$$

So:

$$
\frac{(5+\sin x)\sin x-(5x-\cos x)\cos x}{\sin^2x}
$$

## 31. Formula Sheet

### Limit Notation

$$
\lim_{x\to a}f(x)=L
$$

### One-Sided Limits

$$
\lim_{x\to a^-}f(x)
$$

$$
\lim_{x\to a^+}f(x)
$$

### Polynomial Limit

$$
\lim_{x\to a}f(x)=f(a)
$$

for polynomial `f`.

### Algebraic Standard Limit

$$
\lim_{x\to a}\frac{x^n-a^n}{x-a}=na^{n-1}
$$

### Trigonometric Standard Limits

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

$$
\lim_{x\to0}\frac{1-\cos x}{x}=0
$$

$$
\lim_{x\to0}\frac{\tan x}{x}=1
$$

### Derivative At A Point

$$
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}
$$

### Derivative Function

$$
f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}
$$

### Sum And Difference Rules

$$
(u\pm v)'=u'\pm v'
$$

### Product Rule

$$
(uv)'=u'v+uv'
$$

### Quotient Rule

$$
\left(\frac{u}{v}\right)'=\frac{u'v-uv'}{v^2}
$$

### Power Rule

$$
\frac{d}{dx}(x^n)=nx^{n-1}
$$

### Standard Trigonometric Derivatives

$$
\frac{d}{dx}(\sin x)=\cos x
$$

$$
\frac{d}{dx}(\cos x)=-\sin x
$$

$$
\frac{d}{dx}(\tan x)=\sec^2x
$$

$$
\frac{d}{dx}(\cot x)=-\cosec^2x
$$

$$
\frac{d}{dx}(\sec x)=\sec x\tan x
$$

$$
\frac{d}{dx}(\cosec x)=-\cosec x\cot x
$$

## 32. Final Learner Check

A learner is ready to move on if they can answer these:

1. What does a limit measure?
2. Why can a limit exist even if the function is not defined at that point?
3. When does a two-sided limit fail to exist?
4. Why must trigonometric limits use radians?
5. What is the standard limit for `sin x / x` as `x` tends to 0?
6. What is the derivative from first principle?
7. How is derivative connected to slope of tangent?
8. What is the derivative of `x^n`?
9. What is the product rule?
10. What is the quotient rule?

## 33. One-Page Review

- A limit is the value a function approaches.
- Left-hand and right-hand limits must agree for the limit to exist.
- A function value and a limit at the same point may be different.
- Polynomial limits are evaluated by substitution.
- Rational limits may need factorisation and cancellation.
- `lim sin x / x = 1` as `x` tends to 0, in radians.
- A derivative is an instantaneous rate of change.
- The derivative at a point is defined using a limit.
- Geometrically, derivative is slope of tangent.
- `(x^n)'=nx^{n-1}`.
- `(sin x)'=cos x`.
- `(cos x)'=-sin x`.
- Product rule: `(uv)'=u'v+uv'`.
- Quotient rule: `(u/v)'=(u'v-uv')/v^2`.
