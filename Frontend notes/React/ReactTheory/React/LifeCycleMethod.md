## React Lifecycle Methods (Easy Explanation)

In React, **lifecycle methods** are special methods that run at **different stages of a component’s life**.

A component’s life has **3 main phases**:

---

## 1️⃣ Mounting (Component is created & added to DOM)

These methods run **when the component appears on the screen**.

![Image](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.png)

![Image](https://dotnettrickscloud.blob.core.windows.net/article/react/3720230920232432.webp)

### 🔹 Methods (Class Components)

1. **constructor()**

* Runs first
* Used to initialize state

```js
constructor(props) {
  super(props);
  this.state = { count: 0 };
}
```

2. **render()**

* Required method
* Returns JSX (UI)

```js
render() {
  return <h1>Hello</h1>;
}
```

3. **componentDidMount()**

* Runs after component is added to DOM
* Best for API calls, subscriptions

```js
componentDidMount() {
  console.log("Component Mounted");
}
```

---

## 2️⃣ Updating (Component re-renders)

Runs when **props or state changes**.

![Image](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.png)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/0%2AZHIkeVMlylc9m0tl.png)

### 🔹 Methods

1. **shouldComponentUpdate(nextProps, nextState)**

* Controls re-rendering
* Returns `true` or `false`

```js
shouldComponentUpdate() {
  return true;
}
```

2. **componentDidUpdate(prevProps, prevState)**

* Runs after update
* Used for API calls on change

```js
componentDidUpdate(prevProps) {
  if (prevProps.id !== this.props.id) {
    console.log("Props changed");
  }
}
```

---

## 3️⃣ Unmounting (Component removed from DOM)

Runs **when component is destroyed**.

![Image](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.png)

![Image](https://cdn-media-1.freecodecamp.org/images/1%2A_drMYY_IEgboMS4RhvC-lQ.png)

### 🔹 Method

1. **componentWillUnmount()**

* Cleanup (timers, subscriptions)

```js
componentWillUnmount() {
  console.log("Component Removed");
}
```

---

## ⚠️ Deprecated Lifecycle Methods

❌ Avoid using these:

* `componentWillMount`
* `componentWillReceiveProps`
* `componentWillUpdate`

---

## 🔄 Lifecycle in Functional Components (IMPORTANT 🔥)

React now mainly uses **Functional Components + Hooks**.

### 🧠 `useEffect()` replaces lifecycle methods

```js
import { useEffect } from "react";

useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Unmounted");
  };
}, []);
```

### Mapping:

| Class Lifecycle      | Hook                                   |
| -------------------- | -------------------------------------- |
| componentDidMount    | `useEffect(() => {}, [])`              |
| componentDidUpdate   | `useEffect(() => {}, [dep])`           |
| componentWillUnmount | `useEffect(() => { return () => {} })` |

---

## ✅ Quick Summary

* **Mounting** → constructor → render → componentDidMount
* **Updating** → render → componentDidUpdate
* **Unmounting** → componentWillUnmount
* **Hooks** → `useEffect()`

---

If you want, I can:
✔ explain **with a real project example**
✔ explain **only hooks lifecycle**
✔ give **interview questions**

Just tell me 😊
