# Java Methods – Notes

## 1. What is a Method in Java?

A method in Java is a block of code that performs a specific task. We can call a method whenever we need to execute that code.

Advantages of methods:

* Code reusability

* Reduces code duplication

* Makes programs easier to read and maintain

* Breaks a large program into smaller parts

## 2. Syntax of a Method

Java

```
returnType methodName(parameters) {
    // statements
    return value;
}
```

Example:

Java

```
class Demo {
    static void display() {
        System.out.println("Hello Java");
    }

    public static void main(String[] args) {
        display();
    }
}
```

Output:

```
Hello Java
```

## 3. Types of Methods in Java

1. Static method

A method declared using the `static` keyword. It can be called using the class name without creating an object.

Java

```
static void show() {
    System.out.println("Hello");
}
```

2. Non-static method (Instance method)

A method declared without the `static` keyword. It is called using an object of the class.

Java

```
void show() {
    System.out.println("Hello");
}
```

## 4. Static Method vs Non-static Method

| Static method                                                      | Non-static method                                    |
| ------------------------------------------------------------------ | ---------------------------------------------------- |
| Uses the `static` keyword                                          | Does not use `static`                                |
| Belongs to the class                                               | Belongs to an object (instance)                      |
| Can be called directly within the same class from a static context | Requires an object when called from a static context |
| Cannot directly access instance variables                          | Can directly access instance variables               |
| Example: `static void display()`                                   | Example: `void display()`                            |

# Special Notes: Non-static Methods in Java

## 1. What is a non-static method?

A non-static method is a method that belongs to an object of a class. To call it from the `main()` method, we generally create an object using the `new` keyword.

### Example program

Java

```
class Student {

    void display() {
        System.out.println("Hello Student");
    }

    public static void main(String[] args) {
        Student s = new Student();
        s.display();
    }
}
```

Output:

```
Hello Student
```

### Explanation

1. `class Student` — creates a class named `Student`.

2. `void display()` — declares a non-static method.

3. `Student s = new Student();` — creates an object and stores its reference in `s`.

4. `s.display();` — calls the non-static method using the object.

## 2. How to call a non-static method

Create an object

`Student s = new Student();`

Call the method

`s.display();`

Method executes

`Hello Student`

## 3. Non-static method with a variable

Java

```
class Employee {
    int salary = 25000;

    void showSalary() {
        System.out.println(salary);
    }

    public static void main(String[] args) {
        Employee e = new Employee();
        e.showSalary();
    }
}
```

Output:

```
25000
```

Important: A non-static method can directly access non-static variables of the same class.

## 4. Calling a non-static method from a static method

You cannot directly call a non-static method from `main()` without an object.

Incorrect:

Java

```
class Demo {
    void display() {
        System.out.println("Hello");
    }

    public static void main(String[] args) {
        display(); // Error
    }
}
```

Correct:

Java

```
class Demo {
    void display() {
        System.out.println("Hello");
    }

    public static void main(String[] args) {
        Demo d = new Demo();
        d.display();
    }
}
```

Remember: `main()` is static, so create an object to call an instance method from it.

## 5. Non-static method with parameters

Java

```
class Calculator {
    void add(int a, int b) {
        System.out.println(a + b);
    }

    public static void main(String[] args) {
        Calculator c = new Calculator();
        c.add(10, 20);
    }
}
```

Output:

```
30
```

Here, `a` and `b` are parameters, while `10` and `20` are arguments.

## 6. Non-static method with a return value

Java

```
class Calculator {
    int square(int n) {
        return n * n;
    }

    public static void main(String[] args) {
        Calculator c = new Calculator();
        int result = c.square(5);
        System.out.println(result);
    }
}
```

Output:

```
25
```

* `int` is the return type.

* `n` is the parameter.

* `return n * n;` sends the result back to the caller.

* `c.square(5)` calls the method using an object.

## 7. Important points to remember

* `void` means the method does not return a value.

* A method can have parameters or no parameters.

* A method can return a value using `return`.

* A non-static method can access both static and non-static members of its class.

* A static method can directly access static members, but it needs an object to access instance members.

* Each object has its own instance variables.

## Quick practice

Question: What is the output of this program?

Java

```
class Test {
    int x = 10;

    void show() {
        System.out.println(x);
    }

    public static void main(String[] args) {
        Test t = new Test();
        t.show();
    }
}
```

0

10

Compilation error

No output

Check answer
