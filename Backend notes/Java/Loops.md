# Java Loops – Quick Notes

A loop in Java is used to execute a block of code repeatedly as long as a specified condition is true.

## 1. Types of loops in Java

Java has four commonly used looping statements:

* `for` loop

* `while` loop

* `do-while` loop

* Enhanced `for` loop (for-each)

## 2. `for` loop

Used when you know how many times you want to execute a block of code.

Syntax:

Java

```
for (initialization; condition; update) {
    // code to execute
}
```

Example:

Java

```
class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
    }
}
```

Output:

```
1
2
3
4
5
```

* Initialization: `int i = 1`

* Condition: `i <= 5`

* Update: `i++` (increases `i` by 1)

## 3. `while` loop

Used when the number of repetitions may not be known in advance. The condition is checked before each iteration.

Syntax:

Java

```
while (condition) {
    // code to execute
}
```

Example:

Java

```
int i = 1;

while (i <= 5) {
    System.out.println(i);
    i++;
}
```

Output:

```
1
2
3
4
5
```

Note: If the condition is false initially, the loop body will not execute.

## 4. `do-while` loop

Executes the code at least once because the condition is checked after the loop body.

Syntax:

Java

```
do {
    // code to execute
} while (condition);
```

Example:

Java

```
int i = 1;

do {
    System.out.println(i);
    i++;
} while (i <= 5);
```

Output:

```
1
2
3
4
5
```

Important: A semicolon (`;`) is required after the `while` condition.

## 5. Enhanced `for` loop (for-each)

Used to access elements of an array or a collection without manually managing an index.

Example:

Java

```
int[] numbers = {10, 20, 30, 40};

for (int num : numbers) {
    System.out.println(num);
}
```

Output:

```
10
20
30
40
```

Here, `num` takes each element from the `numbers` array in sequence.

## 6. Difference between loops

| Feature            | `for`                 | `while`                    | `do-while`                       |
| ------------------ | --------------------- | -------------------------- | -------------------------------- |
| Condition checked  | Before                | Before                     | After                            |
| Minimum executions | 0                     | 0                          | 1                                |
| Best used when     | Repetitions are known | Condition-based repetition | At least one execution is needed |

## 7. Loop control statements

### `break`

Terminates the loop immediately.

Java

```
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    System.out.println(i);
}
```

Output: `1 2`

### `continue`

Skips the current iteration and moves to the next iteration.

Java

```
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    System.out.println(i);
}
```

Output: `1 2 4 5`

## 8. Nested loops

A loop inside another loop is called a nested loop.

Example: Print a rectangle of stars.

Java

```
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 4; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
```

Output:

```
* * * *
* * * *
* * * *
```

The outer loop controls the rows, and the inner loop controls the columns.

## 9. Important points to remember

* A loop repeats code while its condition is true.

* `i++` increments a variable by 1.

* `i--` decrements a variable by 1.

* An infinite loop continues indefinitely if its termination condition is never reached.

* A loop counter tracks the number of iterations.

* A nested loop contains another loop.

* Use braces `{}` to group statements in a loop body.

## 10. Practice questions

Try these beginner exercises:

1. Print numbers from 1 to 10.

Show answer

2. Print even numbers from 2 to 20.

Show answer

3. Calculate the sum of numbers from 1 to 5.

Show answer

4. Print a multiplication table of 5.

Show answer

Exam tip: Remember the main difference: `for` and `while` check the condition before execution, whereas `do-while` checks it afterward.
