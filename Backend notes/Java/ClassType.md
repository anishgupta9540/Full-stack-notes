# All Types of Classes in Java – Notes

In Java, a class is a blueprint or template used to create objects. It defines variables (data) and methods (behavior).

Example:

Java

```
class Student {
    int rollNo = 10;

    void display() {
        System.out.println(rollNo);
    }
}
```

## 1. Main types of classes in Java

Java classes can be categorized in different ways depending on their structure and purpose.

1. Concrete class

A normal class whose objects can be created.

Java

```
class Student {
    void show() {
        System.out.println("Hello");
    }
}
```

Object creation: `Student s = new Student();`

2. Abstract class

Declared with the `abstract` keyword. It cannot be instantiated directly and can contain abstract and concrete methods.

Java

```
abstract class Animal {
    abstract void sound();

    void sleep() {
        System.out.println("Sleeping");
    }
}
```

3. Final class

Declared with `final`. It cannot be extended (inherited by another class).

Java

```
final class Demo {
    void show() {
        System.out.println("Hi");
    }
}
```

Example from Java: `String`.

4. Static nested class

A class declared `static` inside another class.

Java

```
class Outer {
    static class Inner {
        void show() {
            System.out.println("Inner");
        }
    }
}
```

It can be instantiated as `Outer.Inner obj = new Outer.Inner();`.

## 2. Classes based on where they are declared

### 5. Top-level class

A class declared directly in a Java source file, outside other classes.

Java

```
class Student {
    void show() {
        System.out.println("Student");
    }
}
```

A top-level class can be `public` or have package-private access. It cannot be declared `static`, `private`, or `protected`.

### 6. Inner class (non-static member class)

A class declared inside another class without `static`.

Java

```
class Outer {
    class Inner {
        void display() {
            System.out.println("Inner class");
        }
    }

    public static void main(String[] args) {
        Outer o = new Outer();
        Outer.Inner i = o.new Inner();
        i.display();
    }
}
```

Output:

```
Inner class
```

Important: An inner class object is associated with an instance of the outer class.

### 7. Local inner class

A class declared inside a method or a block.

Java

```
class Demo {
    void show() {
        class Local {
            void display() {
                System.out.println("Local class");
            }
        }

        Local l = new Local();
        l.display();
    }

    public static void main(String[] args) {
        new Demo().show();
    }
}
```

### 8. Anonymous inner class

A class declared and instantiated in one expression without giving it a name. It is often used to override a method for a one-time implementation.

Java

```
class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Demo {
    public static void main(String[] args) {
        Animal a = new Animal() {
            @Override
            void sound() {
                System.out.println("Dog barks");
            }
        };

        a.sound();
    }
}
```

Output:

```
Dog barks
```

## 3. Other important class categories

### 9. Nested class

A class declared inside another class. Nested classes include static nested classes and non-static inner classes.

Java

```
class Outer {
    class Inner { }
    static class Nested { }
}
```

### 10. POJO class

POJO stands for Plain Old Java Object. It is a simple Java class that is not required to extend a special framework class or implement a particular framework interface.

Java

```
class Student {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

### 11. Singleton class

A class designed to provide only one instance through its intended access mechanism.

Java

```
class Singleton {
    private static final Singleton INSTANCE = new Singleton();

    private Singleton() { }

    public static Singleton getInstance() {
        return INSTANCE;
    }
}
```

Usage: `Singleton s = Singleton.getInstance();`

### 12. Immutable class

A class whose object state cannot be changed after the object is created.

Java

```
final class Person {
    private final String name;

    Person(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
```

The `String` class is a common example of an immutable class.

### 13. Enum class

An `enum` defines a fixed set of named constants. Although it uses class-like syntax, an enum is a special Java type.

Java

```
enum Day {
    MONDAY, TUESDAY, WEDNESDAY
}
```

Usage:

Java

```
Day d = Day.MONDAY;
System.out.println(d);
```

Output:

```
MONDAY
```

### 14. Record class

A record is a concise way to declare a class primarily intended to hold data. Records automatically provide components, accessors, and methods such as `equals()`, `hashCode()`, and `toString()`.

Java

```
record Student(String name, int age) { }
```

Usage:

Java

```
Student s = new Student("Arun", 20);
System.out.println(s.name());
```

Output:

```
Arun
```

Records were introduced in Java 16 as a permanent feature.

## 4. Quick revision table

| Class type          | Main purpose                           |
| ------------------- | -------------------------------------- |
| Concrete class      | Creates objects                        |
| Abstract class      | Provides a base for subclasses         |
| Final class         | Prevents inheritance                   |
| Top-level class     | Declared outside another class         |
| Inner class         | Non-static class inside another class  |
| Static nested class | Nested class declared with `static`    |
| Local class         | Declared inside a method or block      |
| Anonymous class     | Unnamed, one-time class implementation |
| POJO class          | Simple Java object                     |
| Singleton class     | Controls access to a single instance   |
| Immutable class     | Prevents changes to object state       |
| Enum                | Defines a fixed set of constants       |
| Record              | Represents data concisely              |

Exam tip: If your question is about the types of nested or inner classes, focus especially on member inner class, static nested class, local inner class, and anonymous inner class. If the question asks for general class types, include concrete and abstract classes as well.
