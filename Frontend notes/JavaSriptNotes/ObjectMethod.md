Absolutely! JavaScript objects also come with a set of **built-in methods** to inspect, manipulate, and iterate over them. Here’s a detailed overview with examples.

---

## **1. Getting Keys, Values, and Entries**

| Method                | Description                             | Example                                             |
| --------------------- | --------------------------------------- | --------------------------------------------------- |
| `Object.keys(obj)`    | Returns an array of **property names**  | `Object.keys({a:1, b:2})` → `['a','b']`             |
| `Object.values(obj)`  | Returns an array of **property values** | `Object.values({a:1, b:2})` → `[1,2]`               |
| `Object.entries(obj)` | Returns array of `[key, value]` pairs   | `Object.entries({a:1, b:2})` → `[['a',1], ['b',2]]` |

---

## **2. Adding or Modifying Properties**

| Method                                         | Description                           | Example                                                    |
| ---------------------------------------------- | ------------------------------------- | ---------------------------------------------------------- |
| `Object.assign(target, source)`                | Copy properties from source to target | `Object.assign({a:1}, {b:2})` → `{a:1,b:2}`                |
| `Object.defineProperty(obj, prop, descriptor)` | Define a property with descriptor     | `Object.defineProperty(obj,'c',{value:3, writable:false})` |
| `Object.defineProperties(obj, descriptors)`    | Define multiple properties            | `Object.defineProperties(obj,{d:{value:4}})`               |

---

## **3. Freezing, Sealing, and Checking Extensibility**

| Method                          | Description                                                | Example                                 |
| ------------------------------- | ---------------------------------------------------------- | --------------------------------------- |
| `Object.freeze(obj)`            | Makes object **immutable** (cannot add, delete, or modify) | `Object.freeze(obj)`                    |
| `Object.isFrozen(obj)`          | Checks if object is frozen                                 | `Object.isFrozen(obj)` → true/false     |
| `Object.seal(obj)`              | Prevent adding/deleting props, but **can modify existing** | `Object.seal(obj)`                      |
| `Object.isSealed(obj)`          | Checks if object is sealed                                 | `Object.isSealed(obj)` → true/false     |
| `Object.preventExtensions(obj)` | Prevent adding new properties                              | `Object.preventExtensions(obj)`         |
| `Object.isExtensible(obj)`      | Check if new props can be added                            | `Object.isExtensible(obj)` → true/false |

---

## **4. Comparing Objects**

| Method                      | Description                             | Example                                                 |
| --------------------------- | --------------------------------------- | ------------------------------------------------------- |
| `Object.is(value1, value2)` | Compare if values are **exactly equal** | `Object.is(NaN, NaN)` → true, `Object.is(0,-0)` → false |

---

## **5. Getting Property Descriptors**

| Method                                       | Description                                       | Example                                     |
| -------------------------------------------- | ------------------------------------------------- | ------------------------------------------- |
| `Object.getOwnPropertyDescriptor(obj, prop)` | Get descriptor of a property                      | `Object.getOwnPropertyDescriptor(obj, 'a')` |
| `Object.getOwnPropertyDescriptors(obj)`      | Get descriptors of all properties                 | `Object.getOwnPropertyDescriptors(obj)`     |
| `Object.getOwnPropertyNames(obj)`            | Get all property names (including non-enumerable) | `Object.getOwnPropertyNames(obj)`           |
| `Object.getOwnPropertySymbols(obj)`          | Get all symbol properties                         | `Object.getOwnPropertySymbols(obj)`         |

---

## **6. Creating Objects**

| Method                             | Description                                | Example                                               |
| ---------------------------------- | ------------------------------------------ | ----------------------------------------------------- |
| `Object.create(proto, properties)` | Create a new object with a prototype       | `Object.create(Object.prototype, {a:{value:1}})`      |
| `Object.fromEntries(array)`        | Convert array of key-value pairs to object | `Object.fromEntries([['a',1],['b',2]])` → `{a:1,b:2}` |

---

### **Example: Combining Object Methods**

```js
const obj = { a: 1, b: 2, c: 3 };

// Get keys and values
console.log(Object.keys(obj));   // ['a','b','c']
console.log(Object.values(obj)); // [1,2,3]

// Transform object: double all values
const doubled = Object.fromEntries(
  Object.entries(obj).map(([k, v]) => [k, v * 2])
);
console.log(doubled); // { a: 2, b: 4, c: 6 }

// Freeze object
Object.freeze(obj);
obj.a = 10; // Ignored
console.log(obj.a); // 1
```

---

If you want, I can make a **visual cheat sheet for all JS object methods**, just like I did for arrays, so you can **quickly memorize them**.

Do you want me to make that?
