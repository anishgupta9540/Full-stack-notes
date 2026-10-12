# Java Annotations — Detailed Study Notes

Java annotations are an important topic for interviews, exams, and practical Java development. Let's learn them step by step with definitions, syntax, examples, and real-world uses.

## 1. What is an annotation in Java?

An annotation in Java is metadata that provides additional information about Java code. It can be applied to classes, methods, variables, constructors, parameters, and other program elements.

Annotations usually start with the `@` symbol.

Example:

Java

```
@Override
public String toString() {
    return "Hello Java";
}
```

Here, `@Override` tells the compiler that the method is intended to override a method inherited from a parent class.

### Why do we use annotations?

* To provide information to the compiler.

* To detect programming mistakes.

* To configure frameworks such as Spring and Hibernate.

* To generate code or documentation.

* To control how annotations are retained and processed.

## 2. Types of annotations in Java

Java annotations can be studied in three main groups.

### 1. Built-in annotations

Provided by Java itself.

Examples: `@Override`, `@Deprecated`, `@SuppressWarnings`, `@FunctionalInterface`.

### 2. Meta-annotations

Annotations that configure other annotations.

Examples: `@Target`, `@Retention`, `@Documented`, `@Inherited`, `@Repeatable`.

### 3. Custom annotations

Annotations created by developers.

Example: `@MyAnnotation`.

## 3. Important built-in annotations

### A. `@Override`

Used when a subclass method overrides a method from its superclass or implements a method declared by an interface.

Java

```
class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}
```

Output:

```
Dog barks
```

Benefits:

* Helps detect spelling mistakes in method names.

* Ensures the method really overrides an inherited method.

* Makes the code easier to understand.

For example, if you write `@Override` above a method that does not override anything, the compiler reports an error.

### B. `@Deprecated`

Indicates that a class, method, or other supported program element should no longer be used, usually because a better alternative exists.

Java

```
class Calculator {
    @Deprecated
    public void oldMethod() {
        System.out.println("Old method");
    }

    public void newMethod() {
        System.out.println("New method");
    }
}
```

Using `oldMethod()` may produce a compiler warning.

You can also write:

Java

```
@Deprecated(since = "2.0", forRemoval = true)
public void oldMethod() {
    // Old implementation
}
```

* `since` specifies the version in which the element was deprecated.

* `forRemoval = true` indicates that removal is intended in a future release.

Deprecation is a warning or API status, not an automatic prohibition on use.

### C. `@SuppressWarnings`

Tells the compiler to suppress specified categories of warnings within a supported scope.

Java

```
import java.util.ArrayList;
import java.util.List;

class Example {
    @SuppressWarnings("unchecked")
    public static void main(String[] args) {
        List list = new ArrayList();
        list.add("Java");

        List<String> names = list;
        System.out.println(names);
    }
}
```

Output:

```
[Java]
```

Common warning categories include:

* `"unchecked"`

* `"deprecation"`

* `"rawtypes"`

* `"unused"` in tools that recognize it

Best practice: Suppress only the warning you understand and intend to suppress. This annotation does not fix the underlying problem.

### D. `@FunctionalInterface`

Used to indicate that an interface is intended to have exactly one abstract method.

Java

```
@FunctionalInterface
interface Greeting {
    void sayHello();
}

class Main {
    public static void main(String[] args) {
        Greeting g = () -> System.out.println("Hello Java");
        g.sayHello();
    }
}
```

Output:

```
Hello Java
```

A functional interface can also contain default methods, static methods, and methods matching public methods of `Object`, such as `toString()`.

It is commonly used with lambda expressions and the Java Stream API.

## 4. What are meta-annotations?

Meta-annotations are annotations applied to the declarations of other annotation types. They define where an annotation can be used, how long it is retained, and other properties.

The most important ones are explained below.

### A. `@Target`

Specifies the program elements on which an annotation can be applied.

Example:

Java

```
import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

@Target(ElementType.METHOD)
@interface MyAnnotation {
}
```

Now `@MyAnnotation` can be applied to methods, but not directly to classes or fields.

Common `ElementType` values:

| Element type      | Purpose                                      |
| ----------------- | -------------------------------------------- |
| `TYPE`            | Classes, interfaces, enums, annotation types |
| `METHOD`          | Methods                                      |
| `FIELD`           | Fields                                       |
| `CONSTRUCTOR`     | Constructors                                 |
| `PARAMETER`       | Method or constructor parameters             |
| `LOCAL_VARIABLE`  | Local variables                              |
| `TYPE_USE`        | Uses of a type                               |
| `ANNOTATION_TYPE` | Other annotation declarations                |

You can specify multiple targets:

Java

```
@Target({ElementType.TYPE, ElementType.METHOD})
@interface MyAnnotation {
}
```

This annotation can be used on both types and methods.

### B. `@Retention`

Specifies how long an annotation should be retained.

The three retention policies are:

### 1. SOURCE

Source code only

The annotation is discarded by the compiler and is not retained in the compiled class file.

Java

```
@Retention(RetentionPolicy.SOURCE)
@interface DeveloperNote {}
```

### 2. CLASS

Default policy

The annotation is stored in the class file, but it is not required to be available through runtime reflection.

Java

```
@Retention(RetentionPolicy.CLASS)
@interface BuildInfo {}
```

### 3. RUNTIME

Reflection available

The annotation is stored in the class file and made available for runtime reflection.

Java

```
@Retention(RetentionPolicy.RUNTIME)
@interface Role {}
```

Important for exams: If `@Retention` is omitted, the default retention policy is `CLASS`.

### C. `@Documented`

Indicates that an annotation should be included in the generated API documentation when the annotated element is documented.

Java

```
import java.lang.annotation.Documented;

@Documented
@interface Important {
}
```

### D. `@Inherited`

Allows an annotation on a class to be inherited by its subclasses when the annotation is queried through the relevant class-reflection API.

Java

```
import java.lang.annotation.*;

@Inherited
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@interface MyInfo {
}

@MyInfo
class Parent {
}

class Child extends Parent {
}
```

Checking the child class:

Java

```
System.out.println(
    Child.class.isAnnotationPresent(MyInfo.class)
);
```

Output:

```
true
```

Important: `@Inherited` applies to class annotations, not automatically to methods, fields, or interfaces.

### E. `@Repeatable`

Allows the same annotation type to be used more than once on a single program element.

For example, you can assign multiple roles to a class.

Java

```
import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@Repeatable(Roles.class)
@interface Role {
    String value();
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@interface Roles {
    Role[] value();
}

@Role("Admin")
@Role("Editor")
class User {
}
```

The container annotation `@Roles` stores the repeated `@Role` annotations.

## 5. How to create a custom annotation

A custom annotation is an annotation that you define yourself using the `@interface` keyword.

General syntax:

Java

```
@interface AnnotationName {
    String value();
    int count() default 1;
}
```

Here:

* `@interface` declares an annotation type.

* `value()` is an annotation element.

* `count()` has a default value of `1`.

Let's build a complete example.

### Step 1: Define the annotation

Java

```
import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface MyInfo {
    String author();
    int version() default 1;
}
```

### Step 2: Apply the annotation

Java

```
class Demo {

    @MyInfo(author = "Student", version = 2)
    public void display() {
        System.out.println("Java Annotation");
    }
}
```

### Step 3: Read it using reflection

Java

```
import java.lang.reflect.Method;

public class Main {
    public static void main(String[] args) throws Exception {

        Method method =
            Demo.class.getDeclaredMethod("display");

        MyInfo info = method.getAnnotation(MyInfo.class);

        System.out.println(info.author());
        System.out.println(info.version());
    }
}
```

Output:

```
Student
2
```

This example demonstrates the complete process:

1. Define a custom annotation.

2. Apply it to a method.

3. Retain it at runtime.

4. Read its values using reflection.

Note that an annotation does not automatically execute the method or perform an action. A framework or your own code must interpret the annotation and decide what to do.

## 6. Annotation elements and default values

Annotation elements look like parameterless methods, but they define values that can be supplied when using the annotation.

Java

```
@interface StudentInfo {
    String name();
    int age();
    String course() default "Java";
}
```

Usage:

Java

```
@StudentInfo(name = "Ravi", age = 21)
class Student {
}
```

Here, `course` takes its default value of `"Java"`.

You can also supply it explicitly:

Java

```
@StudentInfo(name = "Ravi", age = 21, course = "Spring")
class Student {
}
```

Annotation elements can use supported types such as primitives, `String`, `Class`, enum types, annotation types, and arrays of those types.

For example:

Java

```
@interface Test {
    int count();
    String name();
    Class<?> type();
    String[] tags();
}
```

Annotation elements cannot have arbitrary types such as `List<String>`.

## 7. Annotation processing and reflection

There are two important ways annotations can be used.

### Compile-time processing

Annotation processors can inspect annotations while compiling and generate source code, resources, or other files.

Example: processors used by code-generation libraries.

### Runtime reflection

Java reflection can inspect annotations while a program is running, provided the annotation is retained at runtime.

Example: a framework reading `@Controller` or `@Entity` metadata.

A simple reflection example:

Java

```
import java.lang.annotation.*;
import java.lang.reflect.Method;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface RunMe {
}

class Task {
    @RunMe
    public void execute() {
        System.out.println("Task executed");
    }

    public void skip() {
        System.out.println("Skipped");
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        Task task = new Task();

        for (Method method : Task.class.getDeclaredMethods()) {
            if (method.isAnnotationPresent(RunMe.class)) {
                method.invoke(task);
            }
        }
    }
}
```

Output:

```
Task executed
```

The program searches for methods annotated with `@RunMe` and invokes those methods. This is a simplified example of the idea behind some test frameworks.

## 8. Real-world uses of Java annotations

![Ante-P92](https://images.openai.com/static-rsc-4/n-mBu3U30WsiuzN64oo5t9XKhiGoka0v_GsmiBEvT9SuACoq3ZVfEsiSRLBwDby85omltnqvXBFXHrdk64yqAuXcDXLycCoD6xTbaQtk422UFDTotxrah-JAhEwpRSQhCBNXZmgLvfMvqAqntTUWxyM7WWixSiiviEpk_BlsCcE?purpose=inline)

Add to Favorites

Spring Framework

`@Component`, `@Service`, `@Repository`, `@Controller`, and `@Autowired` help configure and wire application components.

![Hibernate Original Wordmark PNG Logo — Download Free Transparent Logo](https://images.openai.com/static-rsc-4/ySUzSvNlNkdy_P9D3E0gsb6srQcH_W3kf6tb472DWebQhTldTCad_yun8SVfJJVrnjlKbbl_t1cp-l6ng747YkR2uSaE3gr_-608jtVzRACiUCYFtnlFjcPrp_1s0WztfGmmak4KkAy4t9M1gT5nqQQkz6v5eKJl4NmZPd1WG08?purpose=inline)

Add to Favorites

Hibernate and Jakarta Persistence

`@Entity`, `@Id`, and `@Column` provide object-relational mapping metadata.

![JUnit](https://images.openai.com/static-rsc-4/0DRF3XmKeGmupqgQp1Bmh01FOqnKMjRtpGok13k8VgO8n7_0HI266ywfd-Z1yQo2gqqjMbxxkWSMBi442jEKDSAPFvuz99NZlqmJw37RrpqnmIHs0ukpzbVA8LHDlMlYjYzYKwP6hpBy0gT1BMlRzTCDr8X0SKf9OV1WTa7NuXw?purpose=inline)

Add to Favorites

JUnit

`@Test` identifies test methods, while annotations such as `@BeforeEach` help define test lifecycle behavior.

These are framework annotations rather than all being built into the Java language. Their behavior depends on the framework or library that defines and processes them.

## 9. Difference between annotations and comments

| Annotations                              | Comments                                                 |
| ---------------------------------------- | -------------------------------------------------------- |
| Start with `@`                           | Often use `//`, `/* */`, or `/** */`                     |
| Provide structured metadata              | Primarily provide explanations for people                |
| Can be processed by tools and frameworks | Usually ignored by the Java compiler as program metadata |
| Can influence framework behavior         | Do not directly configure frameworks                     |

For example:

Java

```
@Override
void display() {
    // Displays the message
}
```

`@Override` has compiler-recognized meaning, whereas the comment explains the code to the reader.

## 10. Common interview questions

1. What is an annotation in Java?

2. What is the difference between @Override and @Overload?

3. What is the default retention policy?

4. Can we create our own annotations?

5. Does an annotation execute code automatically?

No. Its metadata must be interpreted by the compiler, an annotation processor, a framework, or your own program.

6. Can an annotation have default values?

7. What does @Inherited do?

8. What is reflection?

## 11. Quick revision summary

| Annotation             | Main purpose                                          |
| ---------------------- | ----------------------------------------------------- |
| `@Override`            | Check method overriding                               |
| `@Deprecated`          | Mark an API as discouraged for use                    |
| `@SuppressWarnings`    | Suppress specified compiler warnings                  |
| `@FunctionalInterface` | Indicate a functional interface                       |
| `@Target`              | Specify where an annotation can be used               |
| `@Retention`           | Specify how long it is retained                       |
| `@Documented`          | Include the annotation in generated API documentation |
| `@Inherited`           | Allow class annotations to be inherited               |
| `@Repeatable`          | Allow repeated uses of an annotation                  |

Study tip: Learn `@Override`, `@Deprecated`, and `@SuppressWarnings` first. Then focus on `@Target`, `@Retention`, custom annotations, and reflection. These concepts form the foundation for understanding annotations in frameworks such as Spring and Hibernate.
