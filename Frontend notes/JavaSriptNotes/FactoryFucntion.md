In JavaScript, a **factory function** is a **function that returns a new object**. It's an alternative to using classes or constructors for creating objects. Factory functions are often used to create multiple similar objects without using the `new` keyword.

---

## 🔧 Basic Syntax

```js
function createUser(name, age) {
  return {
    name,
    age,
    sayHello() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
  };
}

const user1 = createUser("Alice", 25);
const user2 = createUser("Bob", 30);

user1.sayHello(); // Hi, I'm Alice and I'm 25 years old.
user2.sayHello(); // Hi, I'm Bob and I'm 30 years old.
```

---

## ✅ Key Features

| Feature              | Description                                          |
| -------------------- | ---------------------------------------------------- |
| **No `new` keyword** | You call a factory function like a normal function.  |
| **Encapsulation**    | You can use closures to keep data private.           |
| **Flexible**         | Easier to mix behavior and data compared to classes. |
| **Reusable**         | Can create many similar objects easily.              |

---

## 🔐 Private Variables Using Closures

```js
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
      } else {
        console.log("Insufficient funds");
      }
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
console.log(account.balance); // undefined (private)
```

---

## 🆚 Factory Function vs Constructor vs Class

| Feature           | Factory Function          | Constructor Function | Class                           |
| ----------------- | ------------------------- | -------------------- | ------------------------------- |
| Syntax            | Simple function           | Uses `this` + `new`  | Class syntax                    |
| `new` required?   | ❌ No                      | ✅ Yes                | ✅ Yes                           |
| Private variables | ✅ With closures           | ❌ (without tricks)   | ✅ (with `#private` or closures) |
| Inheritance       | Manual or via composition | Prototype-based      | Prototype-based with `extends`  |

---

## ⚙️ Shared Methods (Optimization)

If you define methods inside the factory, every object gets a **new copy** of those methods, which consumes more memory.

### Better: Use shared methods with `Object.create`

```js
const userMethods = {
  sayHello() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

function createUser(name) {
  const user = Object.create(userMethods);
  user.name = name;
  return user;
}

const user1 = createUser("Alice");
const user2 = createUser("Bob");

user1.sayHello(); // Hi, I'm Alice
```

---

## ✅ When to Use Factory Functions

* You want simple object creation without using `class`.
* You need private variables.
* You prefer composition over inheritance.
* You want to avoid `this` and `new`.

---

Let me know if you want to compare this with classes using real examples, or if you'd like an exercise to practice!
