Sure! Here's a **complex JavaScript question** on **destructuring** that tests deep understanding, including **nested destructuring, renaming variables, default values, and skipping elements**:

---

### 🧠 ** Question:**

    Given the following object and array:

```js
const user = {
  name: "Alice",
  age: 28,
  address: {
    city: "Wonderland",
    zip: 12345
  },
  favorites: ["chess", "reading", "tea"],
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false
    }
  }
};
```

Write a single destructuring assignment that does the following:

1. Extract `name` and rename it to`username`.
2. Extract the `zip` from `address` and rename it to`postalCode`.
3. Extract the first and third elements from `favorites` and name them `firstFav` and`thirdFav`.
4. Extract the`theme`, and from`notifications`, extract`sms` with a default value of `true` if it doesn't exist.

Then log all extracted values.

---

### ✅ ** Expected Output(based on the original object):**

    ```js
console.log(username);    // "Alice"
console.log(postalCode);  // 12345
console.log(firstFav);    // "chess"
console.log(thirdFav);    // "tea"
console.log(theme);       // "dark"
console.log(sms);         // false
```

---

    Would you like the answer or want to try solving it yourself first ?
