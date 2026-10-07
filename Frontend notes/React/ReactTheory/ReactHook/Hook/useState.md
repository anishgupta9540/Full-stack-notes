# `useState` in React — Detailed Explanation

`useState` is one of the most important React Hooks. It allows a **functional component to store data that can change over time** and automatically re-render the component when that data changes.

If you're learning React, understanding `useState` properly is essential.

---

## 1. What problem does `useState` solve?

Consider a simple counter:

```jsx
function Counter() {
  let count = 0;

  function increment() {
    count = count + 1;
    console.log(count);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

You might expect:

```text
0
1
2
3
```

But clicking the button won't update the number displayed on the screen.

Why?

Because changing a normal JavaScript variable does **not tell React that the component needs to render again**.

That's where `useState` comes in.

---

# 2. Basic `useState` syntax

First, import it:

```jsx
import { useState } from "react";
```

Then:

```jsx
const [count, setCount] = useState(0);
```

This gives you two things:

```text
count      → current state value
setCount   → function used to update the state
```

And:

```jsx
useState(0)
```

means:

> Start `count` with the initial value `0`.

So:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

Now when you click:

```text
0 → 1 → 2 → 3 → 4
```

React re-renders the component after the state update.

---

# 3. Understanding this line deeply

This is probably the most important line:

```jsx
const [count, setCount] = useState(0);
```

It uses **JavaScript array destructuring**.

You can think of:

```jsx
useState(0)
```

as conceptually giving React something like:

```js
[0, functionToUpdateState]
```

Then:

```jsx
const [count, setCount] = ...
```

extracts those two values.

So:

```jsx
count
```

is the current value.

And:

```jsx
setCount
```

is the function you call when you want to change it.

---

# 4. The state update flow

Suppose we have:

```jsx
const [count, setCount] = useState(0);
```

Initially:

```text
count = 0
```

Then the user clicks:

```jsx
setCount(1);
```

React schedules a state update.

React then renders the component again.

The component now sees:

```text
count = 1
```

The flow is approximately:

```text
User interaction
      ↓
setCount(...)
      ↓
React schedules update
      ↓
Component renders again
      ↓
New state value
      ↓
UI updates
```

This is the fundamental idea behind `useState`.

---

# 5. You should NOT modify state directly

Don't do this:

```jsx
count = count + 1;
```

And don't do:

```jsx
count++;
```

Instead:

```jsx
setCount(count + 1);
```

Why?

Because React needs to know that the state changed.

`setCount()` tells React:

> "The state has changed. Please update this component."

---

# 6. `useState` can store different types

A state variable doesn't have to be a number.

It can contain:

### String

```jsx
const [name, setName] = useState("");
```

Then:

```jsx
setName("John");
```

---

### Boolean

```jsx
const [isLoggedIn, setIsLoggedIn] = useState(false);
```

Then:

```jsx
setIsLoggedIn(true);
```

Or:

```jsx
setIsLoggedIn(false);
```

---

### Array

```jsx
const [todos, setTodos] = useState([]);
```

Example:

```jsx
setTodos(["Learn React", "Learn JavaScript"]);
```

---

### Object

```jsx
const [user, setUser] = useState({
  name: "John",
  age: 25
});
```

---

### Number

```jsx
const [age, setAge] = useState(25);
```

---

You can even store more complex data structures, although you should be careful about how you update them.

---

# 7. Updating state based on previous state

This is extremely important.

Suppose you have:

```jsx
const [count, setCount] = useState(0);
```

You could write:

```jsx
setCount(count + 1);
```

But when the new state depends on the previous state, the safer and preferred approach is:

```jsx
setCount(prevCount => prevCount + 1);
```

Here:

```jsx
prevCount
```

represents the previous state value.

So:

```jsx
setCount(prevCount => prevCount + 1);
```

means:

> Take the previous count and add 1.

---

# 8. Why use the functional form?

Consider:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return <button onClick={increase}>{count}</button>;
}
```

You might expect:

```text
0 → 3
```

But that's not necessarily what happens.

All three calls use the same `count` value from that render.

If `count` is `0`, they effectively request:

```jsx
setCount(1);
setCount(1);
setCount(1);
```

So the result can be:

```text
0 → 1
```

Instead, use:

```jsx
function increase() {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
}
```

Now React can process the updates sequentially:

```text
0
 ↓ +1
1
 ↓ +1
2
 ↓ +1
3
```

Result:

```text
3
```

### Rule of thumb

If the new state depends on the old state:

```jsx
setState(prev => /* calculate new value */);
```

For example:

```jsx
setCount(prev => prev + 1);
```

```jsx
setAge(prev => prev + 1);
```

```jsx
setItems(prev => [...prev, newItem]);
```

---

# 9. Updating objects with `useState`

Suppose:

```jsx
const [user, setUser] = useState({
  name: "John",
  age: 25
});
```

You should **not** do:

```jsx
user.name = "David";
```

Instead:

```jsx
setUser({
  ...user,
  name: "David"
});
```

The spread operator:

```jsx
...user
```

copies the existing properties.

So:

```jsx
setUser({
  ...user,
  name: "David"
});
```

produces:

```js
{
  name: "David",
  age: 25
}
```

---

## 10. Updating an object using previous state

Even better:

```jsx
setUser(prevUser => ({
  ...prevUser,
  name: "David"
}));
```

This is useful when the update depends on the previous state.

Example:

```jsx
function User() {
  const [user, setUser] = useState({
    name: "John",
    age: 25
  });

  function changeName() {
    setUser(prevUser => ({
      ...prevUser,
      name: "David"
    }));
  }

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.age}</p>

      <button onClick={changeName}>
        Change Name
      </button>
    </div>
  );
}
```

---

# 11. Updating arrays with `useState`

Suppose:

```jsx
const [items, setItems] = useState([]);
```

To add an item:

```jsx
setItems(prevItems => [
  ...prevItems,
  "Apple"
]);
```

Result:

```js
["Apple"]
```

Add another:

```jsx
setItems(prevItems => [
  ...prevItems,
  "Banana"
]);
```

Result:

```js
["Apple", "Banana"]
```

### Don't mutate the existing array

Avoid:

```jsx
items.push("Apple");
setItems(items);
```

Instead:

```jsx
setItems(prev => [...prev, "Apple"]);
```

This creates a new array.

---

# 12. Removing items from an array

Suppose:

```jsx
const [items, setItems] = useState([
  "Apple",
  "Banana",
  "Orange"
]);
```

To remove `"Banana"`:

```jsx
setItems(prev =>
  prev.filter(item => item !== "Banana")
);
```

Result:

```js
["Apple", "Orange"]
```

---

# 13. Updating an item inside an array

Suppose:

```jsx
const [users, setUsers] = useState([
  { id: 1, name: "John" },
  { id: 2, name: "Sarah" }
]);
```

Change Sarah's name:

```jsx
setUsers(prevUsers =>
  prevUsers.map(user =>
    user.id === 2
      ? { ...user, name: "Jessica" }
      : user
  )
);
```

This pattern is extremely common in React applications.

---

# 14. `useState` and forms

One of the most common uses of `useState` is managing form inputs.

Example:

```jsx
function Form() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <p>Hello {name}</p>
    </div>
  );
}
```

If you type:

```text
John
```

the flow is:

```text
User types "J"
      ↓
onChange runs
      ↓
setName("J")
      ↓
React re-renders
      ↓
input value = "J"
```

Then:

```text
Jo
Jon
John
```

Each state update causes React to render the updated UI.

This is called a **controlled input**.

---

# 15. Multiple pieces of state

A component can have multiple `useState` calls.

```jsx
function Profile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{isAdmin ? "Admin" : "User"}</p>
    </div>
  );
}
```

Each state has its own value and setter:

```text
name    → setName
age     → setAge
isAdmin → setIsAdmin
```

You can update them independently.

---

# 16. Lazy initial state

Sometimes calculating the initial state is expensive.

You can pass a function to `useState`:

```jsx
const [value, setValue] = useState(() => expensiveCalculation());
```

Notice:

```jsx
useState(() => expensiveCalculation())
```

instead of:

```jsx
useState(expensiveCalculation())
```

The function tells React how to calculate the initial value.

For simple values, just use:

```jsx
useState(0);
```

You don't need lazy initialization everywhere.

---

# 17. State is preserved between renders

Consider:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  console.log("render");

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

Every time state changes, the function runs again.

You might think:

> If the function runs again, wouldn't `useState(0)` reset the count to 0?

No.

React remembers the state associated with that component.

Conceptually:

```text
First render
count = 0

setCount(1)

Second render
count = 1

setCount(2)

Third render
count = 2
```

The component function runs again, but React preserves the state.

---

# 18. A very important concept: rendering ≠ recreating state

This distinction is important.

When React renders:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  ...
}
```

JavaScript executes the component function again.

But React internally associates that `useState` call with stored state.

So don't think:

```text
function runs
↓
state is created from scratch
```

Think:

```text
function renders
↓
React retrieves the existing state
↓
component receives current state
```

---

# 19. State updates are scheduled

When you write:

```jsx
setCount(count + 1);

console.log(count);
```

You should not expect the `console.log` immediately afterward to show the new value.

For example:

```jsx
function increment() {
  setCount(count + 1);

  console.log(count);
}
```

If `count` was `0`, the log can still show:

```text
0
```

Why?

Because the current render's `count` value doesn't change in the middle of that render.

React schedules another render with the new state.

Conceptually:

```text
Current render:
count = 0

setCount(1)

Current render still has:
count = 0

Next render:
count = 1
```

This is a very important React concept.

---

# 20. React may batch state updates

React can group multiple state updates together to avoid unnecessary rendering.

For example:

```jsx
setFirstName("John");
setLastName("Smith");
setAge(30);
```

React can process these updates together rather than rendering after every single line.

This is called **batching**.

You generally shouldn't rely on:

```jsx
setState(...);
setState(...);
```

causing an immediate render between the calls.

---

# 21. State and re-rendering

A simplified mental model is:

```text
State changes
     ↓
React schedules render
     ↓
Component function runs
     ↓
React compares the result
     ↓
DOM is updated where necessary
```

For example:

```jsx
const [count, setCount] = useState(0);
```

Then:

```jsx
setCount(10);
```

React renders the component using:

```jsx
count = 10
```

and updates the UI accordingly.

---

# 22. What happens if you set the same value?

Suppose:

```jsx
const [count, setCount] = useState(10);
```

Then:

```jsx
setCount(10);
```

React can determine that the state hasn't meaningfully changed and avoid an unnecessary update to the UI.

This is one reason **immutability** matters when working with objects and arrays.

---

# 23. Why immutability matters

Consider:

```jsx
const [user, setUser] = useState({
  name: "John"
});
```

Don't mutate:

```jsx
user.name = "David";
```

Instead create a new object:

```jsx
setUser({
  ...user,
  name: "David"
});
```

Why?

Because React commonly relies on **reference identity** to determine whether values have changed.

These are different objects:

```js
const user1 = { name: "John" };

const user2 = { name: "John" };
```

Even though their contents are identical:

```js
user1 === user2
```

is:

```text
false
```

Creating new arrays/objects when updating state makes React's change detection work correctly and makes your code easier to reason about.

---

# 24. `useState` with a boolean — common example

A very common use is showing/hiding something.

```jsx
function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Open
      </button>

      {isOpen && (
        <div>
          <h2>Modal</h2>

          <button onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
```

Here:

```jsx
false
```

means:

```text
Modal closed
```

and:

```jsx
true
```

means:

```text
Modal open
```

---

# 25. Toggle state

You can also toggle:

```jsx
setIsOpen(prev => !prev);
```

For example:

```jsx
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(prev => !prev)}>
        Toggle
      </button>

      {isOpen && <p>Dropdown is open</p>}
    </div>
  );
}
```

This is a very common React pattern.

---

# 26. `useState` vs normal variables

### Normal variable

```jsx
let count = 0;
```

Changing it:

```jsx
count++;
```

doesn't tell React to render.

### State

```jsx
const [count, setCount] = useState(0);
```

Changing it:

```jsx
setCount(count + 1);
```

tells React that the state has changed and a new render may be needed.

So:

| Normal variable                                      | `useState`                      |
| ---------------------------------------------------- | ------------------------------- |
| `let count = 0`                                      | `useState(0)`                   |
| Changing it doesn't trigger React rendering          | Setter triggers a state update  |
| Value doesn't persist across renders in the same way | React preserves state           |
| Useful for temporary calculations                    | Useful for UI data that changes |

---

# 27. `useState` vs `useEffect`

These two Hooks are often confused.

### `useState`

Stores state:

```jsx
const [count, setCount] = useState(0);
```

Think:

> **What data does my component need to remember?**

### `useEffect`

Runs side effects after rendering:

```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

Think:

> **What external effect should happen because something changed/rendered?**

So:

```text
useState → stores information
useEffect → performs side effects
```

---

# 28. Rules of `useState`

There are important Rules of Hooks.

## Rule 1: Call Hooks at the top level

Correct:

```jsx
function Component() {
  const [count, setCount] = useState(0);

  if (count > 5) {
    // ...
  }

  return <div>{count}</div>;
}
```

Incorrect:

```jsx
function Component() {
  if (something) {
    const [count, setCount] = useState(0);
  }
}
```

Don't call Hooks inside:

```text
if
for
while
nested functions
```

---

## Rule 2: Call Hooks from React functions

Usually:

```jsx
function MyComponent() {
  const [count, setCount] = useState(0);

  return <div>{count}</div>;
}
```

or from custom Hooks.

Don't randomly call:

```jsx
function normalFunction() {
  const [count, setCount] = useState(0);
}
```

---

# 29. A complete practical example

Let's build a small todo application:

```jsx
import { useState } from "react";

function TodoApp() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (input.trim() === "") {
      return;
    }

    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: Date.now(),
        text: input
      }
    ]);

    setInput("");
  }

  function deleteTodo(id) {
    setTodos(prevTodos =>
      prevTodos.filter(todo => todo.id !== id)
    );
  }

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <button onClick={addTodo}>
        Add
      </button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}

            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

This small application demonstrates several important `useState` concepts:

```jsx
const [input, setInput] = useState("");
```

String state.

```jsx
const [todos, setTodos] = useState([]);
```

Array state.

```jsx
setInput("");
```

Updating a string.

```jsx
setTodos(prevTodos => [
  ...prevTodos,
  newTodo
]);
```

Adding to an array without mutating it.

```jsx
setTodos(prevTodos =>
  prevTodos.filter(...)
);
```

Removing from an array without mutating it.

---

# 30. The most important patterns to memorize

### Number

```jsx
const [count, setCount] = useState(0);

setCount(10);
```

### Previous number

```jsx
setCount(prev => prev + 1);
```

### Boolean

```jsx
const [open, setOpen] = useState(false);

setOpen(true);
```

### Toggle boolean

```jsx
setOpen(prev => !prev);
```

### String

```jsx
const [name, setName] = useState("");

setName("John");
```

### Add to array

```jsx
setItems(prev => [...prev, newItem]);
```

### Remove from array

```jsx
setItems(prev =>
  prev.filter(item => item.id !== id)
);
```

### Update object

```jsx
setUser(prev => ({
  ...prev,
  name: "John"
}));
```

### Update object inside array

```jsx
setUsers(prev =>
  prev.map(user =>
    user.id === id
      ? { ...user, name: "John" }
      : user
  )
);
```

---

# 31. The mental model I recommend

When you see:

```jsx
const [value, setValue] = useState(initialValue);
```

read it as:

> **"React, please remember this value for this component. Give me the current value as `value`, and give me `setValue` so I can request a new value."**

For example:

```jsx
const [count, setCount] = useState(0);
```

means:

```text
React remembers → count

Initial value → 0

To request a change → setCount(...)
```

And:

```jsx
setCount(prev => prev + 1);
```

means:

```text
Take the state React currently remembers
            ↓
add 1
            ↓
store the new state
            ↓
render the component again
```

If you understand **state persistence, setter functions, functional updates, immutability, and re-rendering**, you've understood the core of `useState`.
