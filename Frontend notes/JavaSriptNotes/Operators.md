# JavaScript Operators — Detailed Study Guide

Operators are one of the most important concepts in JavaScript. They allow you to perform calculations, compare values, assign data, combine conditions, and control how expressions are evaluated.

This guide covers JavaScript operators from beginner to advanced level, with examples, outputs, common mistakes, and interview questions.

## 1. What is an operator in JavaScript?

An operator is a symbol or keyword that performs an operation on one or more values.

Here, `+`, `-`, and `>` are operators. The values `a` and `b` are called operands.

* Operand: The value on which an operation is performed.

* Operator: The symbol or keyword that performs the operation.

* Expression: A combination of values, variables, and operators that produces a result.

For example, in `10 + 5`, the operands are `10` and `5`, the operator is `+`, and the expression evaluates to `15`.

## 2. Types of JavaScript operators

1. Arithmetic operators

`+`, `-`, `*`, `/`, `%`, `**`, `++`, `--`

2. Assignment operators

`=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`

3. Comparison operators

`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`

4. Logical operators

`&&`, `||`, `!`, `??`

5. Bitwise operators

`&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`

6. Other important operators

Ternary `?:`, `typeof`, `in`, `instanceof`, `?.`, `delete`, `...`, `??=`

## 3. Arithmetic operators

Arithmetic operators perform mathematical operations.

| Operator | Name           | Example  | Result     |
| -------- | -------------- | -------- | ---------- |
| `+`      | Addition       | `10 + 3` | `13`       |
| `-`      | Subtraction    | `10 - 3` | `7`        |
| `*`      | Multiplication | `10 * 3` | `30`       |
| `/`      | Division       | `10 / 3` | `3.333...` |
| `%`      | Remainder      | `10 % 3` | `1`        |
| `**`     | Exponentiation | `2 ** 3` | `8`        |

### A. Addition (`+`)

The `+` operator adds numbers or concatenates strings.

Important: If string concatenation occurs, `+` can produce a string instead of a number.

Why?

* `10 + 5` produces `15`; then `15 + "2"` produces `"152"`.

* `"10" + 5` produces `"105"`; then `"105" + 2` produces `"1052"`.

### B. Subtraction, multiplication, and division

These operators generally convert numeric strings into numbers when performing arithmetic.

`NaN` means Not-a-Number. It is a special numeric value representing an invalid numeric result.

### C. Remainder (`%`)

The remainder operator returns the remainder after division.

A common use is checking whether a number is even or odd.

Note that `%` is technically the remainder operator, not the mathematical modulo operator in every case; negative operands can produce negative results.

### D. Exponentiation (`**`)

`2 ** 3` means 23=82^3 = 823=8.

### E. Increment (`++`) and decrement (`--`)

These operators increase or decrease a variable by one.

The difference between prefix and postfix is important.

Post-increment (`x++`)

The old value is used in the expression, and then `x` is incremented.

Pre-increment (`++x`)

The variable is incremented first, and the new value is used.

The same principle applies to `x--` and `--x`.

## 4. Assignment operators

Assignment operators assign values to variables or update existing values.

### A. Simple assignment (`=`)

Remember: `=` assigns a value. It does not compare two values.

### B. Compound assignment operators

| Operator | Equivalent expression | Example   |
| -------- | --------------------- | --------- |
| `+=`     | `x = x + y`           | `x += 5`  |
| `-=`     | `x = x - y`           | `x -= 5`  |
| `*=`     | `x = x * y`           | `x *= 5`  |
| `/=`     | `x = x / y`           | `x /= 5`  |
| `%=`     | `x = x % y`           | `x %= 5`  |
| `**=`    | `x = x ** y`          | `x **= 2` |

Example:

### C. Logical assignment operators

JavaScript also provides assignment operators that depend on the current value.

* `||=` assigns the right-hand value when the left-hand value is falsy.

* `??=` assigns the right-hand value only when the left-hand value is `null` or `undefined`.

* `&&=` assigns the right-hand value when the left-hand value is truthy.

These operators are useful for setting defaults and conditionally updating variables.

## 5. Comparison operators

Comparison operators compare two values and normally return a Boolean: `true` or `false`.

| Operator | Meaning               | Example     | Result  |
| -------- | --------------------- | ----------- | ------- |
| `==`     | Loose equality        | `5 == "5"`  | `true`  |
| `===`    | Strict equality       | `5 === "5"` | `false` |
| `!=`     | Loose inequality      | `5 != "5"`  | `false` |
| `!==`    | Strict inequality     | `5 !== "5"` | `true`  |
| `>`      | Greater than          | `10 > 5`    | `true`  |
| `<`      | Less than             | `10 < 5`    | `false` |
| `>=`     | Greater than or equal | `5 >= 5`    | `true`  |
| `<=`     | Less than or equal    | `4 <= 5`    | `true`  |

### A. Loose equality (`==`)

Loose equality can convert values to compatible types before comparing them.

### B. Strict equality (`===`)

Strict equality compares values without performing type coercion.

Best practice: Prefer `===` and `!==` in most application code because their behavior is more predictable.

One special case is `NaN`: even `NaN === NaN` returns `false`. Use `Number.isNaN(value)` when you need to check whether a value is `NaN`.

### C. Comparing strings

Strings are compared lexicographically, based on their character values.

The second example is surprising if you expect numeric comparison: both operands are strings, so `"10"` is compared as text, not as the number ten.

### D. Comparing objects

Objects are compared by reference, not by comparing their contents.

The first two object literals create different objects. In the second example, both variables reference the same object.

## 6. Logical operators

Logical operators combine conditions and can also select values.

### A. AND (`&&`)

Returns the first falsy operand, or the last operand if all operands are truthy.

Example:

Both conditions must be truthy for the `if` body to execute.

### B. OR (`||`)

Returns the first truthy operand, or the last operand if none is truthy.

Example:

This is useful for fallback values, but remember that `||` treats `0`, `false`, and `""` as values that should trigger the fallback.

### C. NOT (`!`)

Converts a value to a Boolean and then negates it.

Double NOT (`!!`) converts a value to its Boolean equivalent.

### D. Short-circuit evaluation

Logical operators may skip evaluating the right-hand operand.

Because `x` is falsy, `x && ...` stops immediately. The `console.log("Hello")` call never happens.

With OR:

Since `username` is truthy, the right-hand side is skipped.

This behavior is called short-circuit evaluation.

## 7. Truthy and falsy values

JavaScript converts values to Boolean when a Boolean condition is required.

Falsy values include:

* `false`

* `0`, `-0`, `0n`

* `""` (empty string)

* `null`

* `undefined`

* `NaN`

Almost everything else is truthy, including empty arrays and empty objects.

A common mistake:

Output: `Runs`, because an empty array is truthy in JavaScript.

## 8. Nullish coalescing (`??`)

The nullish coalescing operator returns the right-hand operand only when the left-hand operand is `null` or `undefined`.

### Difference between `||` and `??`

| Expression | Result | |---|---| | `0 || 100` | `100` | | `0 ?? 100` | `0` | | `false || true` | `true` | | `false ?? true` | `false` | | `"" || "Guest"` | `"Guest"` | | `"" ?? "Guest"` | `""` | | `null ?? "Guest"` | `"Guest"` |

Use `||` when you want a fallback for any falsy value. Use `??` when you only want a fallback for missing or null values.

Important: JavaScript does not allow unparenthesized mixing of `??` with `&&` or `||`.

## 9. Ternary operator (`?:`)

The ternary operator is a concise alternative to a simple `if...else` expression.

Syntax:

Example:

Equivalent `if...else`:

You can use a ternary operator directly in a function or template:

Avoid deeply nested ternary expressions because they can become difficult to read.

## 10. Type operators

### A. `typeof`

The `typeof` operator returns a string describing the type of a value.

Two important surprises:

These are established JavaScript behaviors. To check for arrays, use `Array.isArray()`:

### B. `instanceof`

Checks whether a constructor's prototype appears in an object's prototype chain.

`instanceof` is mainly used with objects and constructors. It can produce different results across separate JavaScript realms, such as different browser frames.

### C. `in`

Checks whether a property exists on an object or anywhere in its prototype chain.

It checks property existence, not whether the property value is truthy.

For arrays, `in` checks whether an index exists, not whether an array contains a particular value.

Use `numbers.includes(20)` to check whether an array contains the value `20`.

## 11. Bitwise operators

Bitwise operators work on the binary representation of numbers. For ordinary JavaScript `Number` values, bitwise operations generally convert them to 32-bit integers.

Consider:

| Operator          | Name                         | Example               | Result |
| ----------------- | ---------------------------- | --------------------- | ------ |
| `&`               | AND                          | `5 & 3`               | `1`    |
| <code>\\\|</code> | OR                           | <code>5 \\\| 3</code> | `7`    |
| `^`               | XOR                          | `5 ^ 3`               | `6`    |
| `~`               | NOT                          | `~5`                  | `-6`   |
| `<<`              | Left shift                   | `5 << 1`              | `10`   |
| `>>`              | Sign-propagating right shift | `5 >> 1`              | `2`    |
| `>>>`             | Zero-fill right shift        | `5 >>> 1`             | `2`    |

### How bitwise AND works

A bit is set in the result only when both corresponding bits are set.

### How bitwise OR works

A bit is set when either corresponding bit is set.

### How XOR works

XOR returns a set bit when the corresponding bits differ.

### How bitwise NOT works

For 32-bit signed integers, `~x` is equivalent to `-(x + 1)`.

Bitwise operators are useful for flags, low-level data manipulation, and certain algorithms. Most everyday web application logic does not require them.

## 12. Optional chaining (`?.`)

Optional chaining safely accesses a property or calls a method when an intermediate value might be `null` or `undefined`.

Without optional chaining:

With optional chaining:

You can also chain property access:

Optional method calls:

Optional array access:

Important: Optional chaining only protects the part of the chain where it is used. It does not make every possible operation safe.

It also cannot be used as an assignment target:

## 13. The `delete` operator

The `delete` operator attempts to remove an object's own property.

Deleting a property does not delete the variable itself.

Use `delete` mainly for object properties, not for removing array elements.

The array still has three positions, but index `1` is now a hole. To remove an element and shift subsequent elements, use `splice()` instead.

## 14. Spread (`...`) and rest (`...`) syntax

The same three-dot syntax is used for two related purposes. These are commonly called operators, although they are formally spread and rest syntax.

### A. Spread syntax

Spread expands an iterable or an object's enumerable own properties in a suitable context.

Copy an array:

Copy and update an object:

These copies are shallow copies. Nested objects are still shared references unless you copy them separately.

### B. Rest syntax

Rest collects remaining values into an array or object.

Rest in array destructuring:

Rest in object destructuring:

Remember: Spread expands values; rest collects values.

## 15. The `void` operator

The `
