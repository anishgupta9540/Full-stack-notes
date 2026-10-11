# Java Conditional Statements – Notes

## 1. What is a Conditional Statement?

A conditional statement in Java is used to make decisions in a program based on whether a condition is `true` or `false`.

For example, if a student's mark is 35 or more, the student passes; otherwise, the student fails.

## 2. Types of Conditional Statements

Java has four main types of conditional statements:

* `if` statement

* `if-else` statement

* `if-else-if` ladder

* Nested `if` statement

Java also provides the `switch` statement for selecting between multiple cases.

## 3. The `if` Statement

The `if` statement executes a block of code only when the condition is true.

Syntax:

Java

```
if (condition) {
    // Code to execute
}
```

Example:

Java

```
int age = 20;

if (age >= 18) {
    System.out.println("Eligible to vote");
}
```

Output:

```
Eligible to vote
```

## 4. The `if-else` Statement

The `if-else` statement executes one block if the condition is true and another block if it is false.

Syntax:

Java

```
if (condition) {
    // If condition is true
} else {
    // If condition is false
}
```

Example:

Java

```
int number = 7;

if (number % 2 == 0) {
    System.out.println("Even number");
} else {
    System.out.println("Odd number");
}
```

Output:

```
Odd number
```

## 5. The `if-else-if` Ladder

It is used to check multiple conditions one by one. The first true condition's block is executed, and the remaining conditions are skipped.

Syntax:

Java

```
if (condition1) {
    // Code 1
} else if (condition2) {
    // Code 2
} else if (condition3) {
    // Code 3
} else {
    // Default code
}
```

Example:

Java

```
int mark = 85;

if (mark >= 90) {
    System.out.println("Grade A");
} else if (mark >= 75) {
    System.out.println("Grade B");
} else if (mark >= 50) {
    System.out.println("Grade C");
} else {
    System.out.println("Fail");
}
```

Output:

```
Grade B
```

## 6. Nested `if` Statement

An `if` statement placed inside another `if` statement is called a nested `if`.

Example:

Java

```
int age = 20;
boolean hasID = true;

if (age >= 18) {
    if (hasID) {
        System.out.println("Entry allowed");
    }
}
```

Output:

```
Entry allowed
```

## 7. The `switch` Statement

The `switch` statement selects one block of code from multiple possible cases.

Syntax:

Java

```
switch (expression) {
    case value1:
        // Code
        break;

    case value2:
        // Code
        break;

    default:
        // Default code
}
```

Example:

Java

```
int day = 2;

switch (day) {
    case 1:
        System.out.println("Monday");
        break;

    case 2:
        System.out.println("Tuesday");
        break;

    default:
        System.out.println("Invalid day");
}
```

Output:

```
Tuesday
```

Note: The `break` statement prevents execution from continuing into the next case. The `default` block runs when no case matches.

## 8. Comparison Operators Used in Conditions

| Operator | Meaning                  | Example  |
| -------- | ------------------------ | -------- |
| `==`     | Equal to                 | `a == b` |
| `!=`     | Not equal to             | `a != b` |
| `>`      | Greater than             | `a > b`  |
| `<`      | Less than                | `a < b`  |
| `>=`     | Greater than or equal to | `a >= b` |
| `<=`     | Less than or equal to    | `a <= b` |

## 9. Logical Operators

Logical operators combine or reverse conditions.

| Operator | Meaning | Example | |---|---|---| | `&&` | Logical AND | `age >= 18 && age <= 60` | | `||` | Logical OR | `a == 0 || b == 0` | | `!` | Logical NOT | `!(a > b)` |

* `&&` returns true when both conditions are true.

* `||` returns true when at least one condition is true.

* `!` reverses a Boolean value.

## 10. The Ternary Operator

The ternary operator is a short form of `if-else`. It uses `?` and `:`.

Syntax:

Java

```
variable = (condition) ? value1 : value2;
```

Example:

Java

```
int age = 17;

String result = (age >= 18) ? "Adult" : "Minor";

System.out.println(result);
```

Output:

```
Minor
```

## 11. Difference Between Conditional Statements

| Statement    | Purpose                                     |
| ------------ | ------------------------------------------- |
| `if`         | Checks one condition                        |
| `if-else`    | Chooses between two alternatives            |
| `if-else-if` | Checks multiple conditions                  |
| Nested `if`  | Checks a condition inside another condition |
| `switch`     | Selects from multiple cases                 |
| Ternary `?:` | Short form of `if-else` for expressions     |

## 12. Important Points to Remember

1. Conditions in Java `if` statements must evaluate to a `boolean` value (`true` or `false`).

2. Use `==` to compare primitive values; a single `=` assigns a value.

3. Curly braces `{}` define a block of statements. They can be omitted for a single statement, but using them is recommended.

4. The `else` block is optional.

5. In an `if-else-if` ladder, only the first matching branch executes.

6. The `default` case in a `switch` statement is optional.

7. Java is case-sensitive, so write `if`, not `IF`.

## Quick Practice Questions

1. Which statement is used to check multiple conditions?

if

if-else-if ladder

break

2. Which operator means logical AND?

||

!

&&

3. What is the output of `if (5 &gt; 3) System.out.println("Yes");`?

No output

Yes

Error

4. Which keyword is used for the default branch of a switch?

else

default

case

Reset practice

I can also prepare short exam notes, handwritten-style notes, or Java conditional statement programs with outputs.
