Absolutely. In Python, a **datatype** tells Python what kind of value a variable contains and what operations can be performed on it.

For example:

```python
name = "John"  # string
age = 25  # integer
height = 5.9  # float
is_student = True  # boolean
```

Python is **dynamically typed**, which means you don't need to explicitly declare the datatype.

---

# 1. Main Python Datatypes

Python has several built-in datatypes:

| Datatype   | Example            | Description                           |
| ---------- | ------------------ | ------------------------------------- |
| `int`      | `10`               | Whole numbers                         |
| `float`    | `10.5`             | Decimal numbers                       |
| `complex`  | `2 + 3j`           | Complex numbers                       |
| `str`      | `"Hello"`          | Text                                  |
| `bool`     | `True`             | True/False                            |
| `list`     | `[1, 2, 3]`        | Ordered, changeable collection        |
| `tuple`    | `(1, 2, 3)`        | Ordered, unchangeable collection      |
| `set`      | `{1, 2, 3}`        | Unordered collection of unique values |
| `dict`     | `{"name": "John"}` | Key-value pairs                       |
| `NoneType` | `None`             | Represents no value                   |

---

# 2. `int` — Integer

`int` represents **whole numbers**, both positive and negative.

```python
age = 25
salary = 50000
temperature = -10
```

You can check the datatype using `type()`:

```python
age = 25

print(type(age))
```

Output:

```text
<class 'int'>
```

### Operations

```python
a = 10
b = 3

print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
print(a / b)  # 3.333...
print(a // b)  # 3
print(a % b)  # 1
print(a**b)  # 1000
```

Important operators:

* `/` → division
* `//` → floor division
* `%` → remainder
* `**` → power

---

# 3. `float` — Decimal Numbers

`float` represents numbers containing a decimal point.

```python
price = 99.99
height = 5.8
temperature = -2.5
```

```python
print(type(price))
```

Output:

```text
<class 'float'>
```

Example:

```python
price = 100.50
quantity = 2

total = price * quantity

print(total)
```

Output:

```text
201.0
```

---

# 4. `complex` — Complex Numbers

Python supports complex numbers.

```python
z = 2 + 3j
```

Here:

```text
2 → real part
3j → imaginary part
```

You can access them:

```python
z = 2 + 3j

print(z.real)
print(z.imag)
```

Output:

```text
2.0
3.0
```

Complex numbers are mostly used in scientific and mathematical applications.

---

# 5. `str` — String

A string is **text**.

You can create strings using:

```python
name = "John"
city = "Chennai"
message = """Hello
Welcome to Python"""
```

All of these are strings.

```python
print(type(name))
```

Output:

```text
<class 'str'>
```

### String indexing

```python
name = "Python"

print(name[0])
print(name[1])
print(name[5])
```

Output:

```text
P
y
n
```

Python indexes start from **0**.

```text
 P  y  t  h  o  n
 0  1  2  3  4  5
```

### Negative indexing

```python
name = "Python"

print(name[-1])
```

Output:

```text
n
```

`-1` means the last character.

### String slicing

```python
name = "Python"

print(name[0:3])
```

Output:

```text
Pyt
```

The general syntax is:

```python
string[start:end]
```

The `end` index is **not included**.

### Useful string methods

```python
name = "python programming"

print(name.upper())
print(name.lower())
print(name.capitalize())
print(name.title())
print(name.replace("python", "Java"))
```

---

# 6. `bool` — Boolean

Boolean has only two values:

```python
True
False
```

Example:

```python
is_logged_in = True
is_admin = False
```

Boolean values are heavily used with conditions.

```python
age = 20

print(age >= 18)
```

Output:

```text
True
```

Example:

```python
age = 15

if age >= 18:
    print("Adult")
else:
    print("Minor")
```

Output:

```text
Minor
```

Boolean operators:

```python
and
or
not
```

Example:

```python
age = 25
has_license = True

if age >= 18 and has_license:
    print("Can drive")
```

---

# 7. `list`

A list stores **multiple values**.

```python
fruits = ["apple", "banana", "orange"]
```

A list can contain different datatypes:

```python
data = ["John", 25, 5.8, True]
```

Lists are:

* Ordered
* Mutable/changeable
* Allow duplicate values

### Access elements

```python
fruits = ["apple", "banana", "orange"]

print(fruits[0])
print(fruits[1])
```

Output:

```text
apple
banana
```

### Change an element

```python
fruits[0] = "mango"

print(fruits)
```

Output:

```text
['mango', 'banana', 'orange']
```

### Add elements

```python
fruits.append("grape")
```

### Remove elements

```python
fruits.remove("banana")
```

### Length

```python
print(len(fruits))
```

Lists are very important in Python programming.

---

# 8. `tuple`

A tuple is similar to a list, but it **cannot be changed after creation**.

```python
coordinates = (10, 20)
```

Access:

```python
print(coordinates[0])
```

Output:

```text
10
```

But this is not allowed:

```python
coordinates[0] = 50
```

You will get an error because tuples are **immutable**.

### List vs Tuple

```python
my_list = [1, 2, 3]
my_tuple = (1, 2, 3)
```

| List                           | Tuple               |
| ------------------------------ | ------------------- |
| `[]`                           | `()`                |
| Mutable                        | Immutable           |
| Can change                     | Cannot change       |
| Usually used for changing data | Good for fixed data |

---

# 9. `set`

A set stores **unique values**.

```python
numbers = {1, 2, 3, 4}
```

Duplicates are automatically removed:

```python
numbers = {1, 2, 2, 3, 3, 4}

print(numbers)
```

Output:

```text
{1, 2, 3, 4}
```

Sets are useful when you need to remove duplicates.

```python
numbers = [1, 2, 2, 3, 3, 4]

unique_numbers = set(numbers)

print(unique_numbers)
```

Output:

```text
{1, 2, 3, 4}
```

You can also perform mathematical set operations:

```python
a = {1, 2, 3}
b = {3, 4, 5}

print(a | b)  # union
print(a & b)  # intersection
```

---

# 10. `dict` — Dictionary

A dictionary stores data as **key-value pairs**.

```python
person = {"name": "John", "age": 25, "city": "Chennai"}
```

Think of it like:

```text
key       value
----------------
name      John
age       25
city      Chennai
```

Access a value:

```python
print(person["name"])
```

Output:

```text
John
```

Change a value:

```python
person["age"] = 26
```

Add a new value:

```python
person["job"] = "Developer"
```

Get all keys:

```python
print(person.keys())
```

Get all values:

```python
print(person.values())
```

Dictionary is **extremely important when working with APIs and FastAPI**.

For example, a typical API response can look like:

```python
{"id": 101, "name": "John", "email": "john@example.com"}
```

This is a Python dictionary.

---

# 11. `None`

`None` represents **no value**.

```python
result = None
```

Check it:

```python
print(type(result))
```

Output:

```text
<class 'NoneType'>
```

Example:

```python
user = None

if user is None:
    print("User not found")
```

`None` is different from:

```python
0
```

and:

```python
False
```

and:

```python
""
```

It specifically means **absence of a value**.

---

# 12. Mutable vs Immutable

This is a very important Python concept.

### Mutable

Can be changed after creation.

Examples:

```python
list
dict
set
```

Example:

```python
numbers = [1, 2, 3]

numbers.append(4)

print(numbers)
```

The original list changed.

### Immutable

Cannot be changed after creation.

Examples:

```python
int
float
bool
str
tuple
```

For example:

```python
name = "John"

name = "David"
```

Python doesn't modify the existing `"John"` string. Instead, `name` is made to reference another string object.

---

# 13. Checking Datatypes

Use `type()`:

```python
x = 100

print(type(x))
```

You can also use `isinstance()`:

```python
x = 100

print(isinstance(x, int))
```

Output:

```text
True
```

This is often useful when you need to check whether a value belongs to a particular type.

---

# 14. Type Conversion

Python allows you to convert between compatible datatypes.

### String → Integer

```python
age = "25"

age = int(age)

print(age)
print(type(age))
```

Now:

```text
25
<class 'int'>
```

### Integer → String

```python
age = 25

age = str(age)
```

### Integer → Float

```python
x = 10

y = float(x)

print(y)
```

Output:

```text
10.0
```

### Float → Integer

```python
x = 10.8

y = int(x)

print(y)
```

Output:

```text
10
```

Notice that `int()` **does not round** the number. It removes the decimal portion.

---

# 15. A Practical Example

Suppose you're creating a user for a FastAPI application:

```python
user = {
    "id": 101,
    "name": "John",
    "age": 25,
    "salary": 50000.50,
    "is_active": True,
    "skills": ["Python", "FastAPI", "SQL"],
}
```

Here we have multiple datatypes:

```text
id         → int
name       → str
age        → int
salary     → float
is_active  → bool
skills     → list
```

The whole `user` object is a:

```python
dict
```

This combination of datatypes is very common when building **FastAPI backends**.

---

## The most important ones to learn first

If you're learning Python for **FastAPI/backend development**, focus on these in this order:

```text
1. int
2. float
3. str
4. bool
5. list
6. tuple
7. set
8. dict
9. None
```

Then learn how these work with **functions, loops, conditions, classes, and type hints**. Those concepts will make FastAPI much easier to understand.
