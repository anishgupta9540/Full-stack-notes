# Java Lambda Expressions – Notes

## 1. What is a Lambda Expression?

A lambda expression in Java is a short way to represent an anonymous function (a function without a name). It allows you to write the implementation of a method in a concise way.

* Introduced in Java 8.

* Mainly used with functional interfaces.

* Helps reduce boilerplate code and improve readability.

Syntax:

Java

```
(parameters) -> { body }
```

The `->` symbol is called the lambda operator.

## 2. Examples of Lambda Expressions

### Example 1: Lambda with no parameters

Java

```
Runnable r = () -> {
    System.out.println("Hello Java");
};

r.run();
```

Output:

```
Hello Java
```

### Example 2: Lambda with one parameter

Java

```
interface Message {
    void display(String msg);
}

public class Main {
    public static void main(String[] args) {
        Message m = msg -> System.out.println(msg);
        m.display("Hello World");
    }
}
```

Output:

```
Hello World
```

### Example 3: Lambda with two parameters

Java

```
interface Calculator {
    int add(int a, int b);
}

public class Main {
    public static void main(String[] args) {
        Calculator c = (a, b) -> a + b;
        System.out.println(c.add(10, 20));
    }
}
```

Output:

```
30
```

## 3. Types of Lambda Expressions

1. No parameters

Java

```
() -> System.out.println("Hi");
```

2. One parameter

Java

```
x -> System.out.println(x);
```

3. Multiple parameters

Java

```
(a, b) -> a + b;
```

4. Multiple statements

Java

```
(a, b) -> {
    int sum = a + b;
    return sum;
};
```

## 4. Functional Interface

A functional interface is an interface that contains exactly one abstract method. Lambda expressions can provide the implementation of that method.

It can also contain default methods, static methods, and methods inherited from `Object`.

Example:

Java

```
@FunctionalInterface
interface Square {
    int calculate(int n);
}

public class Main {
    public static void main(String[] args) {
        Square s = n -> n * n;
        System.out.println(s.calculate(5));
    }
}
```

Output:

```
25
```

The `@FunctionalInterface` annotation helps the compiler check that the interface satisfies the functional-interface rules.

## 5. Lambda Expression vs Anonymous Inner Class

| Lambda expression                          | Anonymous inner class                         |
| ------------------------------------------ | --------------------------------------------- |
| Shorter syntax                             | Usually more code                             |
| Uses the `->` operator                     | Uses the `new` keyword and a class body       |
| Commonly implements a functional interface | Can implement an interface or extend a class  |
| `this` refers to the enclosing object      | `this` refers to the anonymous class instance |

Example:

Using an anonymous inner class:

Java

```
Runnable r = new Runnable() {
    public void run() {
        System.out.println("Hello");
    }
};
```

Using a lambda expression:

Java

```
Runnable r = () -> System.out.println("Hello");
```

## 6. Built-in Functional Interfaces

Java provides several functional interfaces in the `java.util.function` package.

| Interface        | Purpose                                                 | Example                          |
| ---------------- | ------------------------------------------------------- | -------------------------------- |
| `Predicate<T>`   | Tests a condition; returns boolean                      | `x -> x > 10`                    |
| `Function<T, R>` | Converts a value into another value                     | `x -> x * 2`                     |
| `Consumer<T>`    | Accepts a value and performs an action                  | `x -> System.out.println(x)`     |
| `Supplier<T>`    | Supplies a value without taking input                   | `() -> "Hello"`                  |
| `Runnable`       | Executes an action without parameters or a return value | `() -> System.out.println("Hi")` |

## 7. Lambda Expressions with Collections

Lambda expressions are frequently used with collections and the Java Stream API.

Example:

Java

```
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers =
            Arrays.asList(10, 20, 30, 40);

        numbers.forEach(n -> System.out.println(n));
    }
}
```

Output:

```
10
20
30
40
```

Here, `forEach()` executes the lambda expression for every element in the list.

## 8. Advantages of Lambda Expressions

1. Reduces the amount of code.

2. Improves readability when used appropriately.

3. Supports functional programming in Java.

4. Works well with collections and streams.

5. Makes it easier to pass behavior as an argument.

6. Reduces the need for anonymous inner classes in many cases.

## 9. Important Points for Exams

* Lambda expressions were introduced in Java 8.

* The lambda operator is `->`.

* Lambda expressions are commonly used with functional interfaces.

* A functional interface has exactly one abstract method.

* Parameter types can often be inferred by the compiler.

* For a single parameter, parentheses can be omitted.

* For a single expression, braces and `return` can be omitted when appropriate.

* For multiple statements, use braces `{}` and include `return` if the method returns a value.

* Lambda expressions do not create a new enclosing scope for `this`.

## 10. Quick Revision

## Practice MCQs

1. In which Java version were lambda expressions introduced?

Java 5

Java 7

Java 8

Java 11

Correct! Lambda expressions were introduced in Java 8.

2. What is the lambda operator?

=>

->

::

==

Correct! The arrow operator separates parameters from the body.

3. How many abstract methods can a functional interface have?

Exactly one

Two

Any number

Zero only

Correct! A functional interface has one abstract method, though it may have default and static methods.

4. What does `x -> x * x` return when x is 4?

4

8

16

Error

Correct! The expression multiplies x by itself.

Score: 4/4 attempted

Reset quiz

I can also prepare short 2-mark and 5-mark exam answers, or Java lambda expression programs with outputs for practice.
