Perfect 👌 This is an advanced but very important TypeScript feature. Let’s go step by step and fully explain **decorators in TypeScript/TSX**.

---

# 🔹 What is a Decorator?

A **decorator** in TypeScript is a special kind of **function** that can be attached to a **class, method, property, or parameter** to add extra behavior.
It’s like a *wrapper* or *annotation* that modifies how something works.

In TSX (TypeScript + React JSX), decorators are not used very often in modern React, but they are useful in frameworks like **NestJS, Angular**, or **MobX in React**.

---

# 🔑 Rules

* Decorators start with **`@`**.
* They are functions that receive metadata about the thing they decorate.
* Must enable in `tsconfig.json`:

  ```json
  {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
  ```

---

# 🔹 Types of Decorators

TypeScript supports 5 main kinds of decorators:

1. **Class Decorators**
2. **Method Decorators**
3. **Property Decorators**
4. **Accessor Decorators**
5. **Parameter Decorators**

---

## 1. Class Decorator

Applies to a **class**.

```ts
function Logger(constructor: Function) {
  console.log("Class created:", constructor.name);
}

@Logger
class Person {
  name = "Anish";
}
```

👉 Output:

```
Class created: Person
```

Here, `@Logger` runs when the class is declared.

---

## 2. Method Decorator

Applies to a **method inside a class**.

```ts
function LogMethod(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyName} with`, args);
    return original.apply(this, args);
  };
}

class Calculator {
  @LogMethod
  add(a: number, b: number) {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3));
```

👉 Output:

```
Calling add with [ 2, 3 ]
5
```

---

## 3. Property Decorator

Applies to a **property** in a class.

```ts
function ReadOnly(target: any, propertyName: string) {
  Object.defineProperty(target, propertyName, {
    writable: false
  });
}

class Car {
  @ReadOnly
  brand: string = "Tesla";
}

const c = new Car();
c.brand = "BMW"; // ❌ will not change, still Tesla
console.log(c.brand);
```

---

## 4. Accessor Decorator

For **getters/setters**.

```ts
function Capitalize(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.set!;
  descriptor.set = function (value: string) {
    original.call(this, value.toUpperCase());
  };
}

class User {
  private _name: string = "";

  @Capitalize
  set name(value: string) {
    this._name = value;
  }

  get name() {
    return this._name;
  }
}

const u = new User();
u.name = "anish";
console.log(u.name); // "ANISH"
```

---

## 5. Parameter Decorator

For decorating **method parameters**.

```ts
function LogParameter(target: any, methodName: string, paramIndex: number) {
  console.log(`Parameter at index ${paramIndex} in method ${methodName}`);
}

class Demo {
  greet(@LogParameter message: string) {
    console.log(message);
  }
}

new Demo().greet("Hello");
```

👉 Output:

```
Parameter at index 0 in method greet
Hello
```

---

# 🔹 Decorators in React (TSX)

In **React with TypeScript**, decorators are not common in functional components, but you might see them in:

### ✅ Example: MobX + React

```tsx
import { observer } from "mobx-react";
import { makeAutoObservable } from "mobx";

class Store {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => this.count++;
}

const store = new Store();

@observer
class Counter extends React.Component {
  render() {
    return (
      <div>
        <p>Count: {store.count}</p>
        <button onClick={store.increment}>+1</button>
      </div>
    );
  }
}
```

Here, `@observer` is a **class decorator** that makes the React component auto-update when MobX store changes.

---

# 🔑 Summary

* **Decorator = function with `@` that adds extra behavior.**
* Types:

  * Class
  * Method
  * Property
  * Accessor
  * Parameter
* In React/TSX, used rarely (mainly with MobX or legacy class components).
* In Angular/NestJS, decorators are **core** (like `@Component`, `@Injectable`, etc.).

---

👉 Do you want me to also explain **how decorators compare to Higher-Order Components (HOC) in React**, since they solve a similar problem?
