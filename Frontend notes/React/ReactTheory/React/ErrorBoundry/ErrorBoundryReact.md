In React, **Error Boundaries** are special components that **catch runtime errors during rendering** and in certain lifecycle phases, so your **entire app doesn’t crash**.

Since you’re learning React fundamentals step-by-step, I’ll explain this **clearly + practically**.

---

## ❓ What is an Error Boundary?

An **Error Boundary** is a **class component** that catches **JavaScript errors** in:

* Rendering
* Lifecycle methods
* Constructors of child components

It then:

* Logs the error
* Shows a **fallback UI** instead of crashing the app

---

## 🔥 Errors Error Boundary CAN Catch

✔ Error while rendering JSX
✔ Error inside `useEffect` render phase
✔ Error in child component lifecycle
✔ Error in constructor

❌ Errors it CANNOT Catch

* Event handlers (`onClick`)
* Async code (`setTimeout`, `fetch`)
* Server-side rendering errors
* Errors inside the Error Boundary itself

---

## 🧠 How Error Boundary Catches Errors (Internally)

React wraps rendering in a **try–catch mechanism**.

When an error occurs:

1. React **stops rendering** the broken component tree
2. Calls special lifecycle methods:

   * `getDerivedStateFromError`
   * `componentDidCatch`
3. React **replaces UI** with fallback content

---

## 🧱 Error Boundary Structure

### Step 1️⃣ Create Error Boundary Component

⚠️ Error Boundaries **must be class components**

```jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Runs when error happens
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Used for logging
  componentDidCatch(error, info) {
    console.log("Error:", error);
    console.log("Error Info:", info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong 😢</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

---

## Step 2️⃣ Wrap Components with Error Boundary

```jsx
<ErrorBoundary>
  <BuggyComponent />
</ErrorBoundary>
```

---

## 🧪 Example: Buggy Component

```jsx
function BuggyComponent() {
  throw new Error("Crash!");
}
```

➡️ Without Error Boundary → App crashes
➡️ With Error Boundary → Fallback UI shown

---

## 🧠 Lifecycle Methods Explained

### 1️⃣ `getDerivedStateFromError(error)`

* Runs **before render**
* Updates state
* Used to show fallback UI

### 2️⃣ `componentDidCatch(error, info)`

* Runs **after render**
* Used for **logging errors**
* Example: Send error to Sentry / LogRocket

---

## 🚫 Why Error Boundary Doesn't Catch Event Errors?

```jsx
<button onClick={() => {
  throw new Error("Click Error");
}}>
Click Me
</button>
```

❌ Not caught because:

* Event handlers run **outside render phase**

✅ Handle manually:

```jsx
try {
  // risky code
} catch (err) {
  console.error(err);
}
```

---

## 🧠 Best Practice in Real Projects

* Wrap **pages**, not the whole app
* Keep multiple boundaries
* Log errors to monitoring tools

```jsx
<ErrorBoundary>
  <Dashboard />
</ErrorBoundary>

<ErrorBoundary>
  <Profile />
</ErrorBoundary>
```

---

## 🆕 Functional Component Error Boundary?

❌ Not supported directly
✅ Use libraries like:

* `react-error-boundary`

---

## 📌 Summary (Interview Ready)

✔ Error Boundaries catch render-time errors
✔ Prevent whole app crash
✔ Implemented using class components
✔ Uses `getDerivedStateFromError` & `componentDidCatch`
✔ Do not catch event & async errors

---

If you want, I can:

* Show **real project folder structure**
* Explain **Error Boundary vs Try–Catch**
* Give **interview questions**
* Convert this into **simple Hindi explanation**

Just tell me 👍
