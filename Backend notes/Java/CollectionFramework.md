# Java Collection Framework — Detailed Study Notes

The Java Collection Framework (JCF) is one of the most important topics in Java programming. It is frequently asked in interviews and is essential for solving coding problems, managing data, and developing real-world applications.

We'll study it step by step, just like the Java annotations notes, with definitions, hierarchy, syntax, examples, outputs, differences, and interview questions.

## 1. What is the Java Collection Framework?

The Java Collection Framework is a set of interfaces, classes, and algorithms used to store, retrieve, manipulate, and process groups of objects.

For example, suppose you want to store the names of five students.

Without a collection, you might write:

Java

```
String s1 = "Ravi";
String s2 = "Priya";
String s3 = "Arun";
String s4 = "Sneha";
String s5 = "Kumar";
```

Using a collection:

Java

```
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> students = new ArrayList<>();

        students.add("Ravi");
        students.add("Priya");
        students.add("Arun");
        students.add("Sneha");
        students.add("Kumar");

        System.out.println(students);
    }
}
```

Output:

```
[Ravi, Priya, Arun, Sneha, Kumar]
```

Here, `ArrayList` stores multiple student names in a single collection object.

### Why do we need the Collection Framework?

* To store multiple objects dynamically.

* To insert, delete, search, and update elements.

* To avoid writing our own data structures from scratch.

* To sort and process data efficiently.

* To choose suitable structures for different requirements.

## 2. Collection Framework hierarchy

Understanding the hierarchy is one of the most important parts of this topic.

## Iterable

Allows iteration over elements

## Collection

Base interface for groups of elements

List

Ordered, duplicates allowed

Set

Unique elements

Queue

Processing elements

### Map — separate hierarchy

Stores key-value pairs; it does not extend Collection.

The main interfaces are:

* `List`

* `Set`

* `Queue`

* `Deque`

* `Map` (a separate hierarchy)

Common implementation classes include `ArrayList`, `LinkedList`, `HashSet`, `TreeSet`, `PriorityQueue`, `ArrayDeque`, `HashMap`, and `TreeMap`.

Important: `Collection` is an interface, not a concrete class. `Collections` is a utility class containing static methods such as `sort()`, `reverse()`, and `shuffle()`.

## 3. List interface

A `List` stores elements in a sequence and supports positional access using indexes.

### Main characteristics

* Maintains an order.

* Allows duplicate elements.

* Allows `null` in common implementations such as `ArrayList` and `LinkedList`.

* Supports index-based access.

Example:

Java

```
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();

        names.add("Ravi");
        names.add("Priya");
        names.add("Ravi");
        names.add("Arun");

        System.out.println(names);
        System.out.println(names.get(1));
        System.out.println(names.size());
    }
}
```

Output:

```
[Ravi, Priya, Ravi, Arun]
Priya
4
```

### Common List methods

| Method                | Purpose                          |
| --------------------- | -------------------------------- |
| `add(element)`        | Adds an element                  |
| `add(index, element)` | Inserts at an index              |
| `get(index)`          | Retrieves an element             |
| `set(index, element)` | Replaces an element              |
| `remove(index)`       | Removes by index                 |
| `remove(object)`      | Removes a matching element       |
| `contains(element)`   | Checks whether an element exists |
| `indexOf(element)`    | Returns the first matching index |
| `size()`              | Returns the number of elements   |
| `isEmpty()`           | Checks whether the list is empty |
| `clear()`             | Removes all elements             |

### Main List implementations

* `ArrayList`

* `LinkedList`

* `Vector`

* `Stack` (legacy; generally prefer `Deque` for stack operations)

Let's understand the two most important implementations.

### A. ArrayList

`ArrayList` is a resizable array implementation of the `List` interface.

It automatically grows when more elements are added.

Java

```
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();

        numbers.add(10);
        numbers.add(20);
        numbers.add(30);

        numbers.add(1, 15);

        System.out.println(numbers);
        System.out.println(numbers.get(2));

        numbers.set(0, 5);
        System.out.println(numbers);
    }
}
```

Output:

```
[10, 15, 20, 30]
20
[5, 15, 20, 30]
```

How it works: An `ArrayList` uses an internal array. When the array runs out of capacity, it allocates a larger array and copies its elements.

Typical time complexities:

| Operation                         | Time complexity        |
| --------------------------------- | ---------------------- |
| Get by index                      | O(1)O(1)O(1)           |
| Replace by index                  | O(1)O(1)O(1)           |
| Add at the end                    | O(1)O(1)O(1) amortized |
| Insert at the beginning or middle | O(n)O(n)O(n)           |
| Search by value                   | O(n)O(n)O(n)           |
| Remove from the middle            | O(n)O(n)O(n)           |

These are typical complexities, not guarantees about every individual operation.

When to use: When you need frequent reading by index, iteration, and adding elements at the end.

### B. LinkedList

`LinkedList` is a doubly linked list implementation of `List` and `Deque`.

Each node stores an element and links to its neighboring nodes.

Conceptual structure of a doubly linked list

10

20

30

Each node links to both its previous and next node.

Example:

Java

```
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<String> names = new LinkedList<>();

        names.add("Ravi");
        names.add("Priya");

        names.addFirst("Arun");
        names.addLast("Sneha");

        System.out.println(names);

        names.removeFirst();
        names.removeLast();

        System.out.println(names);
    }
}
```

Output:

```
[Arun, Ravi, Priya, Sneha]
[Ravi, Priya]
```

Typical time complexities:

* Adding or removing at either end: O(1)O(1)O(1).

* Accessing by index: O(n)O(n)O(n).

* Searching by value: O(n)O(n)O(n).

When to use: When you need frequent insertions or removals at the ends, or need both list and deque operations. For many ordinary list workloads, `ArrayList` is generally the better default because of its memory efficiency and fast indexed access.

### ArrayList vs LinkedList

| Feature                | ArrayList          | LinkedList                    |
| ---------------------- | ------------------ | ----------------------------- |
| Internal structure     | Resizable array    | Doubly linked nodes           |
| Indexed access         | Fast, O(1)O(1)O(1) | O(n)O(n)O(n)                  |
| Insert at beginning    | O(n)O(n)O(n)       | O(1)O(1)O(1)                  |
| Remove at beginning    | O(n)O(n)O(n)       | O(1)O(1)O(1)                  |
| Memory overhead        | Generally lower    | Generally higher              |
| Best default for lists | Usually yes        | For specific deque/list needs |

One important detail: inserting into the middle of a `LinkedList` is not automatically O(1)O(1)O(1). Finding the position may take O(n)O(n)O(n), even though relinking the nodes is constant-time.

## 4. Set interface

A `Set` is a collection that does not allow duplicate elements according to its equality rules.

For example, a student registration system may use a set to track unique student IDs.

### A. HashSet

`HashSet` stores unique elements using a hash table.

Characteristics:

* Does not guarantee iteration order.

* Does not allow duplicate elements.

* Allows one `null` element.

* Typically offers O(1)O(1)O(1) average-time insertion, deletion, and lookup, assuming good hash distribution.

Java

```
import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Set<String> names = new HashSet<>();

        names.add("Ravi");
        names.add("Priya");
        names.add("Ravi");
        names.add("Arun");

        System.out.println(names);
        System.out.println(names.contains("Priya"));
    }
}
```

Possible output:

```
[Ravi, Arun, Priya]
true
```

The actual order of elements can differ.

When to use: When you need uniqueness and fast membership checks but do not require sorted or insertion order.

### B. LinkedHashSet

`LinkedHashSet` maintains insertion order while preventing duplicates.

Java

```
import java.util.LinkedHashSet;

public class Main {
    public static void main(String[] args) {
        LinkedHashSet<Integer> set = new LinkedHashSet<>();

        set.add(30);
        set.add(10);
        set.add(20);
        set.add(10);

        System.out.println(set);
    }
}
```

Output:

```
[30, 10, 20]
```

Use it when you want unique values in the order they were inserted.

### C. TreeSet

`TreeSet` stores unique elements in sorted order, using natural ordering or a supplied comparator.

Java

```
import java.util.TreeSet;

public class Main {
    public static void main(String[] args) {
        TreeSet<Integer> numbers = new TreeSet<>();

        numbers.add(40);
        numbers.add(10);
        numbers.add(30);
        numbers.add(10);
        numbers.add(20);

        System.out.println(numbers);
    }
}
```

Output:

```
[10, 20, 30, 40]
```

Typical operations such as `add()`, `remove()`, and `contains()` take O(log⁡n)O(\log n)O(logn).

`TreeSet` normally does not accept `null` when using natural ordering.

### HashSet vs LinkedHashSet vs TreeSet

| Feature                      | HashSet              | LinkedHashSet             | TreeSet                           |
| ---------------------------- | -------------------- | ------------------------- | --------------------------------- |
| Duplicates                   | No                   | No                        | No                                |
| Order                        | Not guaranteed       | Insertion order           | Sorted order                      |
| Typical basic-operation cost | O(1)O(1)O(1) average | O(1)O(1)O(1) average      | O(log⁡n)O(\log n)O(logn)          |
| Null support                 | One `null`           | One `null`                | Normally no with natural ordering |
| Internal structure           | Hash table           | Hash table + linked order | Balanced search tree              |

## 5. Queue interface

A `Queue` is used to hold elements before processing.

A common queue follows FIFO — First In, First Out. The element added first is normally the first removed.

Examples include print queues, task processing, and request handling.

### A. PriorityQueue

`PriorityQueue` processes elements according to priority rather than insertion order.

By default, the smallest element has the highest priority.

Java

```
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) {
        PriorityQueue<Integer> queue = new PriorityQueue<>();

        queue.offer(30);
        queue.offer(10);
        queue.offer(20);

        System.out.println(queue.peek());

        while (!queue.isEmpty()) {
            System.out.println(queue.poll());
        }
    }
}
```

Output:

```
10
10
20
30
```

Important methods:

* `offer(element)` — adds an element.

* `peek()` — retrieves the head without removing it.

* `poll()` — retrieves and removes the head.

* `isEmpty()` — checks whether the queue is empty.

Important: Printing a `PriorityQueue` directly does not guarantee that all its elements appear in sorted order. Repeatedly calling `poll()` retrieves them in priority order.

### B. ArrayDeque

`ArrayDeque` is a resizable-array implementation of `Deque`, a double-ended queue.

It supports inserting and removing elements at both ends and is usually a good choice for implementing a stack or ordinary queue.

Java

```
import java.util.ArrayDeque;
import java.util.Deque;

public class Main {
    public static void main(String[] args) {
        Deque<Integer> deque = new ArrayDeque<>();

        deque.addFirst(20);
        deque.addFirst(10);
        deque.addLast(30);

        System.out.println(deque);

        System.out.println(deque.removeFirst());
        System.out.println(deque.removeLast());
    }
}
```

Output:

```
[10, 20, 30]
10
30
```

`ArrayDeque` does not permit `null` elements.

### Queue method differences

| Operation    | Throws exception on failure | Special return value                         |
| ------------ | --------------------------- | -------------------------------------------- |
| Insert       | `add()`                     | `offer()` returns `false` if insertion fails |
| Examine head | `element()`                 | `peek()` returns `null` if empty             |
| Remove head  | `remove()`                  | `poll()` returns `null` if empty             |

These differences make `offer()`, `peek()`, and `poll()` useful when an empty queue is a normal possibility.

## 6. Map interface

A `Map` stores data as key-value pairs.

For example:

* Key: student ID

* Value: student name

A map cannot contain duplicate keys. If a key is added again, its value is replaced.

Important: `Map` is not a subtype of `Collection`, although it is part of the Java Collections Framework.

### A. HashMap

`HashMap` stores key-value pairs using a hash table.

Characteristics:

* Does not guarantee iteration order.

* Allows one `null` key.

* Allows multiple `null` values.

* Replacing an existing key updates its associated value.

* Typical `get()` and `put()` operations are O(1)O(1)O(1) on average.

Java

```
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<Integer, String> students = new HashMap<>();

        students.put(101, "Ravi");
        students.put(102, "Priya");
        students.put(103, "Arun");

        System.out.println(students.get(102));

        students.put(102, "Sneha");

        System.out.println(students);
        System.out.println(students.containsKey(101));
    }
}
```

Output:

```
Priya
{101=Ravi, 102=Sneha, 103=Arun}
true
```

The map's printed order is not guaranteed.

### Important HashMap methods

| Method                            | Purpose                                  |
| --------------------------------- | ---------------------------------------- |
| `put(key, value)`                 | Adds or updates a mapping                |
| `get(key)`                        | Retrieves a value                        |
| `getOrDefault(key, defaultValue)` | Returns a default when no mapping exists |
| `containsKey(key)`                | Checks whether a key exists              |
| `containsValue(value)`            | Checks whether a value exists            |
| `remove(key)`                     | Removes a mapping                        |
| `keySet()`                        | Returns a set of keys                    |
| `values()`                        | Returns a collection of values           |
| `entrySet()`                      | Returns a set of key-value entries       |

### B. LinkedHashMap

`LinkedHashMap` maintains a predictable iteration order, normally insertion order.

Java

```
import java.util.LinkedHashMap;

public class Main {
    public static void main(String[] args) {
        LinkedHashMap<Integer, String> map = new LinkedHashMap<>();

        map.put(3, "Three");
        map.put(1, "One");
        map.put(2, "Two");

        System.out.println(map);
    }
}
```

Output:

```
{3=Three, 1=One, 2=Two}
```

It can also be configured for access order, which is useful when implementing certain LRU caches.

### C. TreeMap

`TreeMap` stores keys in sorted order.

Java

```
import java.util.TreeMap;

public class Main {
    public static void main(String[] args) {
        TreeMap<Integer, String> map = new TreeMap<>();

        map.put(30, "Arun");
        map.put(10, "Ravi");
        map.put(20, "Priya");

        System.out.println(map);
    }
}
```

Output:

```
{10=Ravi, 20=Priya, 30=Arun}
```

Typical lookup, insertion, and deletion operations take O(log⁡n)O(\log n)O(logn). Natural ordering does not permit `null` keys.

### HashMap vs LinkedHashMap vs TreeMap

| Feature        | HashMap               | LinkedHashMap               | TreeMap                            |
| -------------- | --------------------- | --------------------------- | ---------------------------------- |
| Key order      | Not guaranteed        | Insertion order by default  | Sorted                             |
| Typical lookup | O(1)O(1)O(1) average  | O(1)O(1)O(1) average        | O(log⁡n)O(\log n)O(logn)           |
| Null keys      | One                   | One                         | Normally not with natural ordering |
| Main use       | Fast key-value lookup | Predictable iteration order | Sorted keys and range queries      |

## 7. Difference between Collection and Collections

This is a common Java interview question.

| `Collection`                                   | `Collections`                                                |
| ---------------------------------------------- | ------------------------------------------------------------ |
| An interface                                   | A utility class                                              |
| Represents a group of elements                 | Provides static utility methods                              |
| Parent interface of `List`, `Set`, and `Queue` | Contains methods for sorting, reversing, shuffling, and more |
| Implemented by collection classes              | Used to operate on collections                               |

Example:

Java

```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers =
            new ArrayList<>(Arrays.asList(30, 10, 20));

        Collections.sort(numbers);
        System.out.println(numbers);

        Collections.reverse(numbers);
        System.out.println(numbers);
    }
}
```

Output:

```
[10, 20, 30]
[30, 20, 10]
```

In newer Java versions, `List.of()` is another convenient way to create an unmodifiable list, while `Arrays.asList()` creates a fixed-size list backed by an array.

## 8. Ways to iterate through a collection

Iteration means visiting elements one by one.

### A. Enhanced for loop

Java

```
List<String> names = List.of("Ravi", "Priya", "Arun");

for (String name : names) {
    System.out.println(name);
}
```

### B. Iterator

Java

```
List<Integer> numbers =
    new ArrayList<>(List.of(10, 20, 30));

Iterator<Integer> iterator = numbers.iterator();

while (iterator.hasNext()) {
    System.out.println(iterator.next());
}
```

An `Iterator` provides `hasNext()`, `next()`, and optionally `remove()`.

To remove elements safely while iterating, you can use `iterator.remove()` where supported.

### C. ListIterator

`ListIterator` is available for lists and supports forward and backward traversal, as well as supported add, set, and remove operations.

Java

```
List<String> names =
    new ArrayList<>(List.of("Ravi", "Priya", "Arun"));

ListIterator<String> it = names.listIterator(names.size());

while (it.hasPrevious()) {
    System.out.println(it.previous());
}
```

Output:

```
Arun
Priya
Ravi
```

### D. forEach with lambda expressions

Java

```
List<String> names = List.of("Ravi", "Priya", "Arun");

names.forEach(name -> System.out.println(name));
```

This style is concise and commonly used in modern Java.

## 9. Sorting in Java Collections

Java provides two important interfaces for defining object ordering: `Comparable` and `Comparator`.

### A. Comparable

`Comparable` defines a class's natural ordering through the `compareTo()` method.

Example: sort students by their age.

Java

```
import java.util.*;

class Student implements Comparable<Student> {
    String name;
    int age;

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public int compareTo(Student other) {
        return Integer.compare(this.age, other.age);
    }

    @Override
    public String toString() {
        return name + " - " + age;
    }
}

public class Main {
    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();

        students.add(new Student("Ravi", 22));
        students.add(new Student("Priya", 20));
        students.add(new Student("Arun", 24));

        Collections.sort(students);

        System.out.println(students);
    }
}
```

Output:

```
[Priya - 20, Ravi - 22, Arun - 24]
```

Here, `compareTo()` defines the default order as ascending age.

### B. Comparator

`Comparator` defines an ordering separately from the class itself. You can create different orderings for the same type.

Java

```
students.sort(Comparator.comparing(student -> student.name));
```

This sorts students by name.

To sort by descending age:

Java

```
students.sort(
    Comparator.comparingInt((Student s) -> s.age).reversed()
);
```

### Comparable vs Comparator

| Comparable                              | Comparator                            |
| --------------------------------------- | ------------------------------------- |
| Defines natural ordering                | Defines a separate ordering           |
| Uses `compareTo()`                      | Uses `compare()`                      |
| Implemented by the class being compared | Can be defined externally             |
| Usually one natural ordering            | Multiple orderings are easy to create |

For strings, integers, and many standard Java types, natural ordering is already defined.

## 10. Generics in the Collection Framework

Generics allow collections to specify the type of elements they can store.

Without generics:

Java

```
ArrayList list = new ArrayList();

list.add("Java");
list.add(100);
```

This allows different types and may lead to runtime errors when casting elements.

With generics:

Java

```
ArrayList<String> list = new ArrayList<>();

list.add("Java");
list.add("Spring");

// list.add(100); // Compilation error
```

### Why are generics important?

* Provide compile-time type safety.

* Reduce explicit casting.

* Make code easier to read and maintain.

* Help prevent certain runtime type errors.

Example:

Java

```
List<Integer> numbers = new ArrayList<>();

numbers.add(10);
numbers.add(20);

int value = numbers.get(0);
System.out.println(value);
```

Output:

```
10
```

Notice that collections of primitive values use wrapper classes such as `Integer`, `Double`, and `Character`. Java generics cannot use primitive types directly.

## 11. How HashMap and HashSet work internally

This topic is particularly important for interviews.

### How HashMap works

Suppose you write:

Java

```
Map<Integer, String> map = new HashMap<>();

map.put(101, "Ravi");
map.put(102, "Priya");

System.out.println(map.get(101));
```

Conceptually, the process is:

1. Calculate the key's hash

The hash helps determine where to look.

2. Find the relevant bucket

The hash table maps the hash to a bucket.

3. Handle collisions

Multiple keys can map to the same bucket.

4. Compare keys

Equality checks identify the matching key.

A collision happens when different keys map to the same bucket. Java's `HashMap` handles collisions using bucket structures and may use balanced trees for heavily populated buckets under suitable conditions.

### The relationship between `equals()` and `hashCode()`

For custom objects used as keys in `HashMap` or elements in `HashSet`, remember these rules:

1. If two objects are equal according to `equals()`, they must have the same `hashCode()`.

2. Two objects with the same hash code do not necessarily equal each other.

3. If you override `equals()`, you should also override `hashCode()` consistently.

For example:

Java

```
import java.util.Objects;

class Employee {
    int id;

    Employee(int id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof Employee)) return false;

        Employee other = (Employee) obj;
        return id == other.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
```

Now two `Employee` objects with the same ID are equal, and their hash codes agree.

If you fail to implement these methods consistently, a `HashSet` might retain objects that you intended to treat as duplicates, or a `HashMap` lookup may fail to find a logically equivalent key.

Best practice: Prefer immutable fields for keys, especially fields that participate in `equals()` and `hashCode()`.

## 12. Fail-fast behavior and ConcurrentModificationException

Many standard collection iterators are fail-fast: they may throw `ConcurrentModificationException` if a collection is structurally modified outside the iterator during iteration.

Example of a problematic pattern:

Java

```
List<Integer> numbers =
    new ArrayList<>(List.of(10, 20, 30));

for (Integer n : numbers) {
    if (n == 20) {
        numbers.remove(n);
    }
}
```

This commonly results in `ConcurrentModificationException`, although fail-fast behavior is best-effort and should not be relied upon as a correctness guarantee.

### Correct approach: use Iterator.remove()

Java

```
List<Integer> numbers =
    new ArrayList<>(List.of(10, 20, 30));

Iterator<Integer> it = numbers.iterator();

while (it.hasNext()) {
    if (it.next() == 20) {
        it.remove();
    }
}

System.out.println(numbers);
```

Output:

```
[10, 30]
```

For lists, another simple option is:

Java

```
numbers.removeIf(n -> n == 20);
```

Concurrent collections have their own iteration behavior and may be more appropriate for multithreaded applications.

## 13. Thread safety in collections

Most common implementations, including `ArrayList`, `HashSet`, and `HashMap`, are not synchronized by default.

For concurrent applications, Java provides several choices.

| Collection  | Thread-safety option                                       |
| ----------- | ---------------------------------------------------------- |
| `ArrayList` | `Collections.synchronizedList()` or `CopyOnWriteArrayList` |
| `HashMap`   | `ConcurrentHashMap`                                        |
| Queue       | `ConcurrentLinkedQueue` or a suitable `BlockingQueue`      |
| Set         | `CopyOnWriteArraySet` or `ConcurrentHashMap.newKeySet()`   |

Example:

Java

```
import java.util.concurrent.ConcurrentHashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<Integer, String> map = new ConcurrentHashMap<>();

        map.put(1, "Java");
        map.put(2, "Spring");

        System.out.println(map.get(1));
    }
}
```

Output:

```
Java
```

`ConcurrentHashMap` supports concurrent access without synchronizing every operation on the entire map. It also does not allow `null` keys or values.

Important: A thread-safe collection does not automatically make every multi-step operation atomic. Compound operations may still require appropriate atomic methods, synchronization, or other coordination.

## 14. Immutable and unmodifiable collections

Sometimes you want to prevent a collection from being modified.

### Using `List.of()`

Java

```
List<String> names = List.of("Ravi", "Priya");

System.out.println(names);

// names.add("Arun"); // UnsupportedOperationException
```

`List.of()` creates an unmodifiable list and rejects `null` elements.

### Using `Collections.unmodifiableList()`

Java

```
List<String> original = new ArrayList<>();
original.add("Java");

List<String> view = Collections.unmodifiableList(original);

original.add("Spring");

System.out.println(view);
```

Output:

```
[Java, Spring]
```

Why? Because `view` is an unmodifiable view of the original list. Changes made directly to `original` are still visible through that view.

This is different from creating an independent immutable snapshot. Unmodifiable means modifications through that particular reference are prohibited; it does not necessarily mean the underlying data cannot change elsewhere.

## 15. Time complexity of important collections

This table is useful for choosing the right collection during coding interviews.

| Operation       | ArrayList      | HashSet       | TreeSet                  | HashMap       |
| --------------- | -------------- | ------------- | ------------------------ | ------------- |
| Search / lookup | O(n)O(n)O(n)   | O(1)O(1)O(1)* | —                        | O(1)O(1)O(1)* |
| Access by index | O(1)O(1)O(1)   | Not supported | Not supported            | Not supported |
| Insert          | O(1)O(1)O(1)*  | O(1)O(1)O(1)* | O(log⁡n)O(\log n)O(logn) | O(1)O(1)O(1)* |
| Delete          | O(n)O(n)O(n)** | O(1)O(1)O(1)* | O(log⁡n)O(\log n)O(logn) | O(1)O(1)O(1)* |

* Average or amortized complexity where applicable, assuming typical conditions. **For ArrayList, deleting an element by index or value can require shifting elements. TreeSet and HashMap provide different lookup mechanisms.

A few additional points:

* `LinkedList` supports constant-time insertion or removal at the ends.

* `PriorityQueue` offers O(1)O(1)O(1) head inspection and O(log⁡n)O(\log n)O(logn) insertion and head removal.

* `TreeMap` provides O(log⁡n)O(\log n)O(logn) basic lookup and update operations.

## 16. How to choose the right collection

Use the following decision guide when writing Java programs.

## Collection selector

Choose your requirements to see a suitable starting point.

1. What are you storing?

Individual elements

Key-value pairs

2. Are duplicates allowed?

Yes, duplicates are allowed

No, only unique elements

3. What ordering do you need?

Insertion order

Sorted order

No particular order

SUGGESTED COLLECTION

## ArrayList

Keeps elements in list order and allows duplicates.

## 17. Common Java Collection Framework interview questions

1. What is the Java Collection Framework?

2. What is the difference between List and Set?

3. What is the difference between ArrayList and LinkedList?

4. What is the difference between HashMap and Hashtable?

5. Can a HashMap have duplicate keys?

6. Can a Set contain duplicate elements?

7. What is the difference between HashSet and TreeSet?

8. What is the difference between Iterator and ListIterator?

9. What is ConcurrentModificationException?

10. What is the difference between Comparable and Comparator?

11. Why override equals() and hashCode() together?

12. Does Map extend Collection?

13. What is the difference between Queue and Deque?

14. What is the difference between Collection and Collections?

## 18. Practice programs

Practice these programs to understand collections beyond definitions.

### Your practice checklist

0 of 6

Remove duplicate integers from a list

Try HashSet or LinkedHashSet if you want to preserve insertion order.

Find the frequency of each character in a string

Use HashMap<Character, Integer> and update counts with getOrDefault().

Sort a list of employees by salary

Use Comparator.comparingDouble() or comparingInt(), depending on the salary type.

Find the second-largest distinct number

Try TreeSet with reverse order, or track the two largest distinct values in one pass.

Implement a stack using Java collections

Use Deque<Integer> with ArrayDeque<Integer>, then use push(), pop(), and peek().

Find the first non-repeating character

Use LinkedHashMap<Character, Integer> to preserve character insertion order and count occurrences.

## 19. Final revision summary

Before an exam or interview, make sure you can explain these points without looking at your notes:

1. The Collection Framework hierarchy and the separate `Map` interface.

2. `ArrayList` vs `LinkedList`.

3. `HashSet` vs `LinkedHashSet` vs `TreeSet`.

4. `HashMap` vs `LinkedHashMap` vs `TreeMap`.

5. `Collection` vs `Collections`.

6. `Comparable` vs `Comparator`.

7. `equals()` and `hashCode()`.

8. Iterators, fail-fast behavior, and concurrent collections.

9. Generics, sorting, and time complexity.

10. Practical coding problems using lists, sets, queues, and maps.

Recommended study order: First master `ArrayList`, `HashSet`, and `HashMap`. Next learn sorting and iteration. Finally, study internal implementation details, concurrency, and time complexity.

I can also prepare a Java Collection Framework interview question bank with answers, output-based questions, and coding problems for practice.
