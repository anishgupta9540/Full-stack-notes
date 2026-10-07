### 🔹 What is a **Currying Function** in JavaScript?

**Currying** is a technique where a function that normally takes **multiple arguments** is transformed into a **sequence of functions**, each taking **one argument at a time**.

---

### 👉 Normal function (not curried)

```js
function add(a, b, c) {
  return a + b + c;
}

add(1, 2, 3); // 6
```

---

### 👉 Curried version

```js
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

add(1)(2)(3); // 6
```

✔️ Each function takes **one argument**
✔️ Returns another function until all arguments are provided

---

## 🔹 Why Currying is Useful?

### 1️⃣ **Reusability**

```js
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);
double(5); // 10
double(10); // 20
```

---

### 2️⃣ **Cleaner & Functional Code**

Useful in **React**, **Redux**, and **functional programming**

```js
const withTax = tax => price => price + price * tax;

const gst = withTax(0.18);
gst(1000); // 1180
```

---

### 3️⃣ **Partial Application**

You can fix some arguments and reuse the function later.

---

## 🔹 Currying using Arrow Functions

```js
const add = a => b => c => a + b + c;

add(1)(2)(3); // 6
```

---

## 🔹 Real Interview Example

```js
function sum(a) {
  return function (b) {
    if (b !== undefined) {
      return sum(a + b);
    }
    return a;
  };
}

sum(1)(2)(3)(4)(); // 10
```

---

## 🔹 Difference: Normal vs Currying

| Normal Function  | Curried Function  |
| ---------------- | ----------------- |
| `add(a, b)`      | `add(a)(b)`       |
| All args at once | One arg at a time |
| Less reusable    | Highly reusable   |

---

### 🧠 Simple Definition (Interview Ready)

> **Currying is a JavaScript technique where a function with multiple arguments is converted into a chain of functions, each taking a single argument.**

---

If you want, I can also explain:

* Currying vs Partial Application
* Real React example
* How currying works internally

Just tell me 👍
