Sure! JavaScript arrays come with a **lot of built-in methods** that let you manipulate, transform, search, or iterate over arrays efficiently. I’ll give you a **comprehensive overview** with examples for each category.

---

## **1. Adding or Removing Elements**

| Method      | Description                                          | Example                                            |
| ----------- | ---------------------------------------------------- | -------------------------------------------------- |
| `push()`    | Adds one or more elements to the **end**             | `arr.push(4)`                                      |
| `pop()`     | Removes the **last** element                         | `arr.pop()`                                        |
| `unshift()` | Adds one or more elements to the **start**           | `arr.unshift(0)`                                   |
| `shift()`   | Removes the **first** element                        | `arr.shift()`                                      |
| `splice()`  | Add/remove elements at a specific index              | `arr.splice(1, 2, 9)` → remove 2 at index 1, add 9 |
| `slice()`   | Returns a **portion** of the array (non-destructive) | `arr.slice(1, 3)`                                  |

---

## **2. Iterating & Transforming**

| Method          | Description                            | Example                                   |
| --------------- | -------------------------------------- | ----------------------------------------- |
| `forEach()`     | Loop through array (no return)         | `arr.forEach(x => console.log(x))`        |
| `map()`         | Transform array & **return new array** | `arr.map(x => x * 2)`                     |
| `filter()`      | Filter elements based on a condition   | `arr.filter(x => x > 2)`                  |
| `reduce()`      | Reduce array to a single value         | `arr.reduce((sum, x) => sum + x, 0)`      |
| `reduceRight()` | Reduce array **from right to left**    | `arr.reduceRight((sum, x) => sum + x, 0)` |

---

## **3. Searching & Finding**

| Method          | Description                           | Example                        |
| --------------- | ------------------------------------- | ------------------------------ |
| `indexOf()`     | First index of an element             | `arr.indexOf(3)`               |
| `lastIndexOf()` | Last index of an element              | `arr.lastIndexOf(3)`           |
| `includes()`    | Check if element exists               | `arr.includes(2)` → true/false |
| `find()`        | Find first element matching condition | `arr.find(x => x > 2)`         |
| `findIndex()`   | Index of first element matching       | `arr.findIndex(x => x > 2)`    |

---

## **4. Sorting & Reversing**

| Method             | Description                                 | Example                    |
| ------------------ | ------------------------------------------- | -------------------------- |
| `sort()`           | Sort array **lexicographically by default** | `arr.sort()`               |
| `sort((a,b)=>a-b)` | Numeric sort ascending                      | `[3,1,2].sort((a,b)=>a-b)` |
| `reverse()`        | Reverse array                               | `arr.reverse()`            |

---

## **5. Joining & Splitting**

| Method       | Description                              | Example                                |
| ------------ | ---------------------------------------- | -------------------------------------- |
| `join()`     | Join array into string                   | `arr.join('-')` → `"1-2-3"`            |
| `toString()` | Convert array to string                  | `arr.toString()` → `"1,2,3"`           |
| `split()`    | Actually a string method to create array | `"a,b,c".split(',')` → `['a','b','c']` |

---

## **6. Other Useful Methods**

| Method            | Description                         | Example                                      |
| ----------------- | ----------------------------------- | -------------------------------------------- |
| `concat()`        | Merge arrays                        | `[1,2].concat([3,4])` → `[1,2,3,4]`          |
| `flat()`          | Flatten nested arrays               | `[1,[2,3]].flat()` → `[1,2,3]`               |
| `flatMap()`       | Map + flatten                       | `[1,2].flatMap(x => [x, x*2])` → `[1,2,2,4]` |
| `fill()`          | Fill array with a value             | `[1,2,3].fill(0)` → `[0,0,0]`                |
| `copyWithin()`    | Copy part of array to another index | `[1,2,3,4].copyWithin(1,2)` → `[1,3,4,4]`    |
| `every()`         | Check if **all** pass a test        | `[1,2,3].every(x => x>0)` → true             |
| `some()`          | Check if **any** pass a test        | `[1,2,3].some(x => x>2)` → true              |
| `Array.isArray()` | Check if a value is an array        | `Array.isArray([1,2])` → true                |

---

### **Example: Combining Methods**

```js
const arr = [1, 2, 3, 4, 5];

const result = arr
  .filter(x => x % 2 === 0)  // [2, 4]
  .map(x => x * 10)          // [20, 40]
  .reduce((sum, x) => sum + x, 0); // 60

console.log(result);
```

✅ Output: `60`

---

If you want, I can make a **visual cheat sheet of all JS array methods** showing category, syntax, and example in **one table** for super quick reference.

Do you want me to do that?
