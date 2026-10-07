In **JavaScript**, a **polyfill** is **code that adds a feature which the browser does not support natively**.

👉 In simple words:
**Polyfill = backup code for old browsers**

---

## Why do we need a polyfill?

Different browsers support JavaScript features at different times.
If a browser **doesn’t support a modern feature**, your code may break.

A **polyfill**:

* Detects if a feature exists
* If **not**, it implements that feature manually

---

## Simple Definition

> A **polyfill** is JavaScript code that **replicates modern JS features** in older browsers.

---

## Example 1: `Array.prototype.includes()` polyfill

### Problem

Some old browsers don’t support `includes()`:

```js
[1, 2, 3].includes(2); // ❌ may fail in old browsers
```

---

### Polyfill Solution

```js
if (!Array.prototype.includes) {
  Array.prototype.includes = function (value) {
    return this.indexOf(value) !== -1;
  };
}
```

✅ Now `includes()` works everywhere.

---

## Example 2: `String.prototype.startsWith()` polyfill

```js
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (search, pos) {
    return this.substring(pos || 0, search.length) === search;
  };
}
```

---

## How polyfills work (step-by-step)

1. **Check** if feature exists
2. If ❌ not exists → **define it**
3. Browser uses your code instead

```js
if (!featureExists) {
  // write your own implementation
}
```

---

## Commonly Polyfilled Features

* `Promise`
* `fetch`
* `Array.includes`
* `Object.assign`
* `String.startsWith`
* `Math.trunc`

---

## Popular Polyfill Libraries

* **core-js**
* **polyfill.io**
* **babel-polyfill**

Example using core-js:

```js
import "core-js/features/promise";
```

---

## Important Notes

⚠️ Polyfills:

* Are **only for missing features**
* Should be loaded **before your main JS**
* Increase bundle size slightly

---

## Polyfill vs Transpiler (Quick difference)

| Polyfill              | Transpiler               |
| --------------------- | ------------------------ |
| Adds missing features | Converts new syntax      |
| Runtime solution      | Build-time solution      |
| Example: `Promise`    | Example: arrow functions |

---

If you want, I can also explain:

* Polyfill vs Babel
* How to write your **own polyfill step-by-step**
* Interview questions on polyfills

Just tell me 👍
