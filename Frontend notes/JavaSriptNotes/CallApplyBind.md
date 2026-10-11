# JavaScript `call()`, `apply()`, and `bind()` Explained

In JavaScript, `call()`, `apply()`, and `bind()` are methods used to control the value of `this` inside a function.

The main difference is how they pass arguments and whether they execute the function immediately.

| Method    | Executes immediately? | How arguments are passed             |
| --------- | --------------------- | ------------------------------------ |
| `call()`  | Yes                   | Individually                         |
| `apply()` | Yes                   | As an array                          |
| `bind()`  | No                    | Individually; returns a new function |

## 1. First, understand `this`

JavaScript

```
const person = {
  name: "Arun"
};

function greet() {
  console.log(this.name);
}

greet.call(person);
```

Output:

```
Arun
```

Here, `call(person)` makes `this` refer to `person` when `greet()` executes.

Without `call()`, `this.name` depends on how the function is called and the execution environment.

## 2. `call()` in JavaScript

The `call()` method invokes a function immediately, with a specified `this` value and arguments passed individually.

Syntax:

JavaScript

```
functionName.call(thisValue, arg1, arg2, ...);
```

Example:

JavaScript

```
const person = {
  name: "Arun"
};

function introduce(age, city) {
  console.log(
    `My name is ${this.name}, age ${age}, from ${city}`
  );
}

introduce.call(person, 25, "Chennai");
```

Output:

```
My name is Arun, age 25, from Chennai
```

How it works:

* `person` becomes `this`.

* `25` is the first argument.

* `"Chennai"` is the second argument.

* The function executes immediately.

## 3. `apply()` in JavaScript

The `apply()` method works like `call()`, but passes the function arguments as an array (or another array-like object).

Syntax:

JavaScript

```
functionName.apply(thisValue, [arg1, arg2, ...]);
```

Example:

JavaScript

```
const person = {
  name: "Arun"
};

function introduce(age, city) {
  console.log(
    `My name is ${this.name}, age ${age}, from ${city}`
  );
}

introduce.apply(person, [25, "Chennai"]);
```

Output:

```
My name is Arun, age 25, from Chennai
```

Notice the difference:

JavaScript

```
// call()
introduce.call(person, 25, "Chennai");

// apply()
introduce.apply(person, [25, "Chennai"]);
```

Interview tip: `call()` uses comma-separated arguments; `apply()` uses an array of arguments.

## 4. `bind()` in JavaScript

The `bind()` method creates and returns a new function with a specified `this` value. It does not execute the function immediately.

Example:

JavaScript

```
const person = {
  name: "Arun"
};

function greet(city) {
  console.log(`Hello, I am ${this.name} from ${city}`);
}

const boundGreet = greet.bind(person);

boundGreet("Chennai");
```

Output:

```
Hello, I am Arun from Chennai
```

Step by step:

1. `greet.bind(person)` creates a new function.

2. That new function remembers `person` as its `this` value.

3. `boundGreet("Chennai")` executes the function.

You can also pre-fill arguments with `bind()`:

JavaScript

```
function add(a, b) {
  return a + b;
}

const addTen = add.bind(null, 10);

console.log(addTen(5)); // 15
```

Here, `10` is pre-filled as the first argument, so `addTen(5)` is equivalent to `add(10, 5)`.

## 5. Visual comparison

`call()`

Runs now · Arguments individually

`fn.call(obj, 1, 2)`

`apply()`

Runs now · Arguments in an array

`fn.apply(obj, [1, 2])`

`bind()`

Returns a new function · Runs when called later

`const newFn = fn.bind(obj, 1, 2)`

## 6. Common interview question: Method borrowing

Suppose two objects have different properties, but only one has a method.

JavaScript

```
const person1 = {
  name: "Arun",
  greet: function () {
    console.log("Hello " + this.name);
  }
};

const person2 = {
  name: "Priya"
};

person1.greet.call(person2);
```

Output:

```
Hello Priya
```

Why? We borrowed the `greet()` method from `person1` and executed it with `person2` as `this`.

This technique is called method borrowing.

## 7. Advanced interview question: What is the output?

JavaScript

```
const user = {
  name: "Arun"
};

function showName(city) {
  console.log(this.name, city);
}

const fn = showName.bind(user, "Chennai");

fn.call({ name: "Priya" }, "Mumbai");
```

Think about the answer before revealing it.

Hint: Remember that `bind()` creates a function with a fixed `this` value.

Reveal answer

## 8. Practice question

What is the output?

JavaScript

```
const obj = { x: 10 };

function test(a, b) {
  console.log(this.x + a + b);
}

test.apply(obj, [5, 15]);
```

10

30

30 (because apply ignores arguments)

30? Wait, calculate again

Check answer

### Final interview summary

Remember this simple rule:

* Call → comma-separated arguments.

* Apply → arguments in an array.

* Bind → returns a new function with `this` bound.

One important detail: arrow functions do not have their own `this`, so `call()`, `apply()`, and `bind()` cannot change an arrow function's `this` value.
