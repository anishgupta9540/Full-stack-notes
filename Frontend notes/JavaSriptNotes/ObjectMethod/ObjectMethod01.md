If you mean **JavaScript `Object` methods**, here are the most commonly used ones:

### Common `Object` methods

| Method                         | Purpose                                         | Example                                  |
| ------------------------------ | ----------------------------------------------- | ---------------------------------------- |
| `Object.keys()`                | Returns an array of property names              | `Object.keys(obj)`                       |
| `Object.values()`              | Returns an array of property values             | `Object.values(obj)`                     |
| `Object.entries()`             | Returns key-value pairs                         | `Object.entries(obj)`                    |
| `Object.assign()`              | Copies properties from one object to another    | `Object.assign(a, b)`                    |
| `Object.create()`              | Creates a new object with a specified prototype | `Object.create(proto)`                   |
| `Object.freeze()`              | Prevents changes to an object                   | `Object.freeze(obj)`                     |
| `Object.seal()`                | Prevents adding/deleting properties             | `Object.seal(obj)`                       |
| `Object.hasOwn()`              | Checks whether an object has its own property   | `Object.hasOwn(obj, "name")`             |
| `Object.fromEntries()`         | Converts key-value pairs into an object         | `Object.fromEntries(arr)`                |
| `Object.getOwnPropertyNames()` | Gets all own property names                     | `Object.getOwnPropertyNames(obj)`        |
| `Object.getPrototypeOf()`      | Gets an object's prototype                      | `Object.getPrototypeOf(obj)`             |
| `Object.setPrototypeOf()`      | Sets an object's prototype                      | `Object.setPrototypeOf(obj, proto)`      |
| `Object.is()`                  | Compares two values                             | `Object.is(a, b)`                        |
| `Object.defineProperty()`      | Adds/changes a property with descriptors        | `Object.defineProperty(obj, "x", {...})` |

### Example

```js
const user = {
  name: "John",
  age: 25,
  city: "Chennai"
};

console.log(Object.keys(user));
// ["name", "age", "city"]

console.log(Object.values(user));
// ["John", 25, "Chennai"]

console.log(Object.entries(user));
// [["name", "John"], ["age", 25], ["city", "Chennai"]]

console.log(Object.hasOwn(user, "name"));
// true
```

### Important distinction

There are also **object instance methods**, such as:

```js
const user = {
  name: "John"
};

console.log(user.hasOwnProperty("name"));
console.log(user.toString());
```

If you're learning JavaScript for interviews, the **most important Object methods to know first** are `keys()`, `values()`, `entries()`, `assign()`, `fromEntries()`, `hasOwn()`, `freeze()`, and `create()`.
