# JavaScript Destructuring Explained

Destructuring in JavaScript is a feature that lets you extract values from arrays or properties from objects and store them in variables easily.

Instead of accessing each value one by one, you can get multiple values in a single statement.

There are two main types:

1. Array destructuring

2. Object destructuring

Let's learn step by step with interview examples.

## 1. Array destructuring

Normally, you access array values using indexes.

JavaScript

```
const colors = ["Red", "Green", "Blue"];

const first = colors[0];
const second = colors[1];

console.log(first);  // Red
console.log(second); // Green
```

Using destructuring:

JavaScript

```
const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;

console.log(first);  // Red
console.log(second); // Green
console.log(third);  // Blue
```

How it works

first

## Red

second

## Green

third

## Blue

Array destructuring matches values by position, not by name.

### Skip values in an array

JavaScript

```
const numbers = [10, 20, 30];

const [first, , third] = numbers;

console.log(first); // 10
console.log(third); // 30
```

The empty space skips the second value (`20`).

### Default values

JavaScript

```
const numbers = [10];

const [a, b = 50] = numbers;

console.log(a); // 10
console.log(b); // 50
```

Because the second array element is missing, `b` receives the default value `50`.

## 2. Object destructuring

Object destructuring extracts values using property names, rather than positions.

Without destructuring:

JavaScript

```
const employee = {
  name: "Arun",
  age: 25,
  city: "Chennai"
};

const name = employee.name;
const age = employee.age;

console.log(name); // Arun
console.log(age);  // 25
```

With destructuring:

JavaScript

```
const employee = {
  name: "Arun",
  age: 25,
  city: "Chennai"
};

const { name, age, city } = employee;

console.log(name); // Arun
console.log(age);  // 25
console.log(city); // Chennai
```

The syntax is:

JavaScript

```
const { propertyName } = object;
```

Important difference:

* Arrays use position: `[first, second]`

* Objects use property names: `{ name, age }`

## 3. Renaming properties

Suppose you want to extract the `name` property but store it in a variable called `employeeName`.

JavaScript

```
const employee = {
  name: "Arun",
  age: 25
};

const { name: employeeName } = employee;

console.log(employeeName); // Arun
```

Here, `name` is the object property, and `employeeName` is the new variable.

The syntax is:

JavaScript

```
const { originalProperty: newVariable } = object;
```

This is especially useful when two nested objects contain a property with the same name.

## 4. Nested object destructuring

Nested destructuring means extracting properties from an object inside another object.

Consider this example:

JavaScript

```
const employee = {
  id: 101,
  personal: {
    name: "Arun",
    age: 25
  },
  company: {
    name: "TCS",
    location: "Chennai"
  }
};
```

The structure looks like this:

employee

id

101

personal

name: Arun

age: 25

company

name: TCS

location: Chennai

To extract the personal name, age, and company location:

JavaScript

```
const {
  personal: { name, age },
  company: { location }
} = employee;

console.log(name);     // Arun
console.log(age);      // 25
console.log(location); // Chennai
```

### Why does this work?

* `personal: { name, age }` extracts properties from the `personal` object.

* `company: { location }` extracts `location` from the `company` object.

Notice that `personal` and `company` are not declared as separate variables by this pattern. We are extracting their inner properties.

### What if both objects have a `name` property?

Rename one or both properties:

JavaScript

```
const {
  personal: { name: personName },
  company: { name: companyName }
} = employee;

console.log(personName);  // Arun
console.log(companyName); // TCS
```

You cannot declare both extracted properties as the same variable `name` in the same scope.

## 5. Destructuring with default values

If a property is missing, you can provide a default value.

JavaScript

```
const user = {
  name: "Priya"
};

const { name, age = 18 } = user;

console.log(name); // Priya
console.log(age);  // 18
```

The default applies when the property is `undefined`. It does not apply when the property is `null`.

For nested objects, you can also provide defaults:

JavaScript

```
const user = {
  name: "Priya"
};

const {
  address: { city } = {}
} = user;

console.log(city); // undefined
```

The `= {}` prevents an error when `address` is missing.

## 6. Destructuring in function parameters

This is frequently used in React and JavaScript interviews.

Without destructuring:

JavaScript

```
function greet(user) {
  console.log(user.name);
  console.log(user.age);
}

greet({ name: "Arun", age: 25 });
```

With destructuring:

JavaScript

```
function greet({ name, age }) {
  console.log(name);
  console.log(age);
}

greet({ name: "Arun", age: 25 });
```

Output:

```
Arun
25
```

The function extracts `name` and `age` directly from the object passed to it.

## 7. Quick interview revision

| Feature            | Syntax                           | Purpose                                          |
| ------------------ | -------------------------------- | ------------------------------------------------ |
| Array              | `const [a, b] = arr`             | Extract by position                              |
| Object             | `const { name } = obj`           | Extract by property name                         |
| Rename             | `const { name: n } = obj`        | Store a property under a different variable name |
| Default            | `const { age = 18 } = obj`       | Provide a fallback value                         |
| Nested             | `const { user: { name } } = obj` | Extract a nested property                        |
| Function parameter | `function fn({ name }) {}`       | Extract properties directly in a function        |

## 8. Test yourself

1. What is the output?

const \(a, b\) = \(5, 10\); console.log(b);

5

10

undefined

Check answer

2. What is the output?

const user = { name: "Sam", age: 20 }; const { name: n } = user; console.log(n);

name

Sam

undefined

Check answer

3. What is the output?

const obj = { user: { name: "Anu" } }; const { user: { name } } = obj; console.log(name);

Anu

user

TypeError

Check answer

4. What happens here?

const obj = { a: 1 }; const { b = 10 } = obj; console.log(b);

undefined

1

10

Check answer

Best interview tip: First understand whether the data is an array or an object. Then remember that arrays use positions, objects use property names, and nested destructuring follows the object's structure.
----------------------------------------------------------------------------------
Good question

const employee = {
  id: 101,
  personal: {
    name: "Arun",
    age: 25
  },
  company: {
    name: "TCS",
    location: "Chennai"
  }
};

const {
  personal: { name, age },
  company: { name: companyName, location }
} = employee;

console.log(name);        // Arun
console.log(age);         // 25
console.log(companyName); // TCS
console.log(location);    // Chennai