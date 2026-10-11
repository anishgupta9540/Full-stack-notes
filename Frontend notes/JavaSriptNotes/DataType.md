In JavaScript, data types define the kind of value a variable can store. JavaScript has 8 main data types, divided into two categories: primitive and non-primitive.

## 1. Primitive data types

There are 7 primitive data types in JavaScript.

| Data type   | Description                                | Example                            |
| ----------- | ------------------------------------------ | ---------------------------------- |
| `String`    | Text                                       | `let name = "John";`               |
| `Number`    | Integers and decimals                      | `let age = 25;`                    |
| `BigInt`    | Very large integers                        | `let num = 12345678901234567890n;` |
| `Boolean`   | True or false                              | `let isActive = true;`             |
| `Undefined` | Variable declared but not assigned a value | `let x;`                           |
| `Null`      | Intentional absence of a value             | `let data = null;`                 |
| `Symbol`    | Creates a unique identifier                | `let id = Symbol("id");`           |

## 2. Non-primitive data type

Object is the non-primitive data type. It can store collections of data and more complex structures.

JavaScript

```
// Object
let person = {
  name: "John",
  age: 25
};

// Array
let fruits = ["Apple", "Mango", "Orange"];

// Function
function greet() {
  console.log("Hello!");
}
```

Arrays and functions are also objects in JavaScript, although they have their own specialized behavior.

## 3. How to check a data type

Use the `typeof` operator.

JavaScript

```
console.log(typeof "Hello");     // "string"
console.log(typeof 25);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof 10n);         // "bigint"
console.log(typeof Symbol());    // "symbol"
console.log(typeof {});          // "object"
console.log(typeof function(){}); // "function"
```

Important JavaScript exceptions:

JavaScript

```
console.log(typeof null);  // "object" (historical quirk)
console.log(typeof []);    // "object"
```

To check whether a value is an array, use:

JavaScript

```
console.log(Array.isArray([])); // true
```

## 4. Quick way to remember

### JavaScript data types summary

7 Primitive

String, Number, BigInt, Boolean, Undefined, Null, Symbol

Object

Objects, arrays, and functions

Interview tip: JavaScript is a dynamically typed language, meaning a variable can hold values of different types at different times.

JavaScript

```
let value = 10;       // Number
value = "Hello";      // String
value = true;         // Boolean
```

I can also explain JavaScript data types with simple real-world examples, interview questions, and practice programs.
