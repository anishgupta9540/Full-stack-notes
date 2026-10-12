In Java, access modifiers are keywords that define the visibility of classes, methods, variables, and constructors.

Java has 4 access levels:

## 1. Types of access modifiers

| Access modifier      | Same class | Same package | Subclass in another package | Other packages |
| -------------------- | ---------- | ------------ | --------------------------- | -------------- |
| `private`            | Yes        | No           | No                          | No             |
| default (no keyword) | Yes        | Yes          | No*                         | No             |
| `protected`          | Yes        | Yes          | Yes*                        | No             |
| `public`             | Yes        | Yes          | Yes                         | Yes            |

`*` Default access is available only within the same package. `protected` access across packages is available to subclasses under Java's inheritance rules.

## 2. Examples

### `private`

Accessible only within the same class.

Java

```
class Student {
    private int age = 20;

    void display() {
        System.out.println(age); // Allowed
    }
}
```

### Default (no modifier)

Accessible within the same package.

Java

```
class Student {
    int age = 20; // Default access
}
```

### `protected`

Accessible within the same package and through inheritance in other packages.

Java

```
class Animal {
    protected void sound() {
        System.out.println("Animal sound");
    }
}
```

### `public`

Accessible from anywhere, provided the class or member is otherwise accessible.

Java

```
public class Student {
    public void display() {
        System.out.println("Hello Java");
    }
}
```

## 3. Easy way to remember

* `private` — only inside the class.

* default — inside the package.

* `protected` — inside the package and accessible to subclasses outside it.

* `public` — accessible from anywhere.

Important: A top-level Java class can use `public` or default access, but not `private` or `protected`. Nested classes can use all four access modifiers.
