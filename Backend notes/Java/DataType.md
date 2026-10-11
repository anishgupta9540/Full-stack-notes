In Java, a data type specifies what kind of value a variable can store, such as an integer, decimal number, character, or text.

Java data types are divided into two main categories.

## 1. Primitive Data Types

Java has 8 primitive data types.

| Data type | Size                  | Example                  | Used for                     |
| --------- | --------------------- | ------------------------ | ---------------------------- |
| `byte`    | 8 bits                | `byte a = 10;`           | Small integers               |
| `short`   | 16 bits               | `short a = 1000;`        | Small-range integers         |
| `int`     | 32 bits               | `int age = 25;`          | Whole numbers                |
| `long`    | 64 bits               | `long n = 100000L;`      | Large whole numbers          |
| `float`   | 32 bits               | `float x = 5.5f;`        | Decimal numbers              |
| `double`  | 64 bits               | `double x = 25.75;`      | More precise decimal numbers |
| `char`    | 16 bits               | `char grade = 'A';`      | A single character           |
| `boolean` | JVM-dependent storage | `boolean isJava = true;` | `true` or `false`            |

Note: `boolean` can store only `true` or `false`. Java does not specify a fixed storage size for it.

## 2. Non-Primitive (Reference) Data Types

These represent objects or references to objects.

* String — stores text.

* Array — stores multiple values of a type.

* Class — defines objects and their properties.

* Interface — defines a contract that classes can implement.

* Enum — represents a fixed set of constants.

Example:

Java

```
String name = "Rahul";

int[] numbers = {10, 20, 30};

class Student {
    int age;
}
```

## 3. Simple Java Program

Java

```
public class Main {
    public static void main(String[] args) {
        int age = 20;
        double salary = 25000.50;
        char grade = 'A';
        boolean isStudent = true;
        String name = "Rahul";

        System.out.println(age);
        System.out.println(salary);
        System.out.println(grade);
        System.out.println(isStudent);
        System.out.println(name);
    }
}
```

Output:

```
20
25000.5
A
true
Rahul
```

## 4. Important points to remember

* `int` is commonly used for whole numbers.

* `double` is commonly used for decimal numbers.

* `char` uses single quotes: `'A'`.

* `String` uses double quotes: `"Hello"`.

* `float` values usually need an `f` suffix: `3.14f`.

* `long` values can use an `L` suffix: `100000L`.

Interview tip: Remember that Java has 8 primitive data types: `byte`, `short`, `int`, `long`, `float`, `double`, `char`, and `boolean`.

Would you like to learn next about primitive vs. non-primitive data types with examples and interview questions?
