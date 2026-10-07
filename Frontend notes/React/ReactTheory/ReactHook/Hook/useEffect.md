# `useEffect` in React — Detailed Explanation

If `useState` is about **storing data**, then `useEffect` is mainly about **doing something after React renders** or when some value changes.

A good mental model is:

> **`useEffect` lets your component synchronize with things outside of React.**

Examples include:

* Calling an API
* Updating the browser document title
* Setting up timers
* Adding event listeners
* Subscribing to WebSockets
* Working with browser APIs
* Cleaning up subscriptions/timers/listeners

---

# 1. First, why do we need `useEffect`?

Consider:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  document.title = `Count: ${count}`;

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

This may appear to work, but you're performing a **side effect during rendering**.

React rendering should ideally be about calculating what the UI should look like.

For work that needs to happen because of rendering, React provides:

```jsx
useEffect()
```

So:

```jsx
import { useEffect, useState } from "react";
```

Then:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

Now we are saying:

> After rendering, whenever `count` changes, update the document title.

---

# 2. Basic syntax

The basic structure is:

```jsx
useEffect(() => {
  // side effect
}, [dependencies]);
```

There are two important parts:

```jsx
useEffect(
  () => {
    // what should happen
  },
  [dependencies]
);
```

### First argument

```jsx
() => {
  // code
}
```

This is the **effect function**.

### Second argument

```jsx
[count]
```

This is the **dependency array**.

It tells React:

> "When should this effect run again?"

Understanding this dependency array is one of the most important parts of `useEffect`.

---

# 3. How `useEffect` works

Imagine this component:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect ran");
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

Initially:

```text
Component renders
       ↓
UI is updated
       ↓
useEffect runs
```

Then the user clicks:

```text
setCount(...)
       ↓
state changes
       ↓
component renders again
       ↓
UI updates
       ↓
useEffect runs because count changed
```

So the simplified flow is:

```text
Render
  ↓
Commit/update UI
  ↓
Effect
```

---

# 4. `useEffect` with no dependency array

Consider:

```jsx
useEffect(() => {
  console.log("Effect");
});
```

There is **no second argument**.

That means the effect runs after **every render**.

Example:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect ran");
  });

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

Initial render:

```text
Effect ran
```

Click:

```text
Effect ran
```

Click again:

```text
Effect ran
```

And so on.

### Mental model

```jsx
useEffect(() => {
  // run after every render
});
```

---

# 5. Empty dependency array `[]`

Now consider:

```jsx
useEffect(() => {
  console.log("Effect ran");
}, []);
```

The empty array means:

> This effect doesn't depend on any reactive value, so it doesn't need to re-run when those values change.

It generally runs after the component's initial mount.

For example:

```jsx
function App() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <h1>Hello</h1>;
}
```

You can think of this as:

```text
Component appears
      ↓
Effect runs
```

It will not re-run simply because the component's state changes.

### Important modern React note

In development with `<StrictMode>`, React may intentionally run an effect setup/cleanup cycle more than once to help detect bugs. So don't rely on "`[]` means exactly once" as a universal rule.

---

# 6. Dependency array with a value

Suppose:

```jsx
const [count, setCount] = useState(0);
```

Then:

```jsx
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

Now React watches:

```jsx
[count]
```

The effect runs when `count` changes.

For example:

```text
Initial render
    ↓
Effect runs

count = 1
    ↓
Effect runs

count = 2
    ↓
Effect runs

count = 3
    ↓
Effect runs
```

But if some unrelated state changes:

```jsx
const [name, setName] = useState("");
```

and you do:

```jsx
setName("John");
```

the component re-renders, but the effect depending only on:

```jsx
[count]
```

doesn't need to re-run because `count` didn't change.

---

# 7. Multiple dependencies

You can have multiple dependencies:

```jsx
useEffect(() => {
  console.log("User or product changed");
}, [userId, productId]);
```

The effect can run when:

```text
userId changes
OR
productId changes
```

For example:

```jsx
useEffect(() => {
  fetchProduct(userId, productId);
}, [userId, productId]);
```

The important idea:

> Every reactive value used by the effect generally needs to be accounted for in its dependencies.

---

# 8. The most common real-world example: API call

Suppose we want to fetch users when the component loads.

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://example.com/api/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}
```

What's happening?

### Step 1

Initial state:

```jsx
const [users, setUsers] = useState([]);
```

So:

```text
users = []
```

### Step 2

Component renders.

### Step 3

After rendering:

```jsx
useEffect(...)
```

runs.

### Step 4

API request happens.

### Step 5

Response arrives:

```jsx
setUsers(data);
```

### Step 6

State changes.

### Step 7

Component renders again.

Now:

```text
users = [user1, user2, user3...]
```

### Flow

```text
Component renders
       ↓
useEffect runs
       ↓
API request
       ↓
API response
       ↓
setUsers(data)
       ↓
State changes
       ↓
Component renders again
       ↓
Users displayed
```

This is one of the most important `useEffect` patterns.

---

# 9. `useEffect` + `useState`

These two Hooks are often used together.

For example:

```jsx
function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser().then(data => {
      setUser(data);
    });
  }, []);

  return (
    <div>
      {user ? user.name : "Loading..."}
    </div>
  );
}
```

Here:

```jsx
useState
```

answers:

> Where do I store the user?

And:

```jsx
useEffect
```

answers:

> When should I fetch the user?

So remember:

```text
useState → stores information

useEffect → synchronizes with something outside React
```

---

# 10. `useEffect` when a search term changes

This is another very common example.

```jsx
function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (search === "") {
      setResults([]);
      return;
    }

    fetch(`/api/search?q=${search}`)
      .then(response => response.json())
      .then(data => setResults(data));
  }, [search]);

  return (
    <div>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {results.map(result => (
        <p key={result.id}>{result.name}</p>
      ))}
    </div>
  );
}
```

Here:

```jsx
[search]
```

means:

> Run the effect whenever `search` changes.

So:

```text
User types "r"
    ↓
search changes
    ↓
effect runs

User types "re"
    ↓
search changes
    ↓
effect runs

User types "rea"
    ↓
search changes
    ↓
effect runs
```

In a production search UI, you'd often add **debouncing** and request cancellation so you don't send a request for every keystroke.

---

# 11. Cleanup function

This is one of the most important `useEffect` concepts.

Some effects create something that needs to be removed later.

Examples:

```text
Timer
Event listener
WebSocket connection
Subscription
```

For these, `useEffect` can return a cleanup function.

Example:

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Hello");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

Notice:

```jsx
return () => {
  clearInterval(timer);
};
```

That's the **cleanup function**.

---

# 12. Why cleanup is necessary

Without cleanup:

```jsx
useEffect(() => {
  setInterval(() => {
    console.log("Hello");
  }, 1000);
}, []);
```

You create an interval but don't remove it.

When the component is no longer needed, that timer can continue running.

With cleanup:

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Hello");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

React can clean it up.

Mental model:

```text
Component starts
      ↓
Effect setup
      ↓
Timer running
      ↓
Component is removed
      ↓
Cleanup
      ↓
Timer stopped
```

---

# 13. Event listener example

Suppose we want to listen to window resize:

```jsx
useEffect(() => {
  function handleResize() {
    console.log(window.innerWidth);
  }

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

The effect:

```jsx
window.addEventListener(...)
```

sets up the listener.

The cleanup:

```jsx
window.removeEventListener(...)
```

removes it.

This is a classic `useEffect` pattern.

---

# 14. Cleanup also happens before an effect re-runs

This is a subtle but important concept.

Suppose:

```jsx
useEffect(() => {
  console.log("setup");

  return () => {
    console.log("cleanup");
  };
}, [count]);
```

When `count` changes, conceptually:

```text
Old effect cleanup
       ↓
New effect setup
```

So:

```text
count = 0

setup

count changes to 1

cleanup
setup

count changes to 2

cleanup
setup
```

This is especially important for:

* subscriptions
* event listeners
* timers
* network connections

---

# 15. A real subscription example

Imagine:

```jsx
useEffect(() => {
  const connection = connectToChatRoom(roomId);

  connection.connect();

  return () => {
    connection.disconnect();
  };
}, [roomId]);
```

Suppose:

```text
roomId = "general"
```

React connects to:

```text
general
```

Then:

```text
roomId changes → "react"
```

React needs to:

```text
Disconnect general
        ↓
Connect react
```

The cleanup function makes that possible.

---

# 16. `useEffect` and component lifecycle

Older React tutorials often explain:

```text
componentDidMount
componentDidUpdate
componentWillUnmount
```

These are class-component lifecycle methods.

With Hooks, you can often express synchronization logic using:

```jsx
useEffect(...)
```

For example:

```jsx
useEffect(() => {
  // setup

  return () => {
    // cleanup
  };
}, [dependencies]);
```

You can mentally think:

```text
Effect setup
    ↓
Effect may re-run when dependencies change
    ↓
Cleanup old effect
    ↓
Setup new effect
    ↓
Cleanup when no longer needed
```

But `useEffect` is **not simply a direct replacement for every lifecycle method**. Its purpose is more specifically about synchronizing with external systems.

---

# 17. Very important: Don't use `useEffect` for everything

Beginners often do this:

```jsx
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [fullName, setFullName] = useState("");

useEffect(() => {
  setFullName(`${firstName} ${lastName}`);
}, [firstName, lastName]);
```

This is often unnecessary.

You can simply calculate:

```jsx
const fullName = `${firstName} ${lastName}`;
```

Why?

Because `fullName` is **derived data**.

You don't need another piece of state and an effect to calculate it.

Think:

```text
If you can calculate something during rendering,
you often don't need useEffect.
```

---

# 18. Bad use of `useEffect`

For example:

```jsx
const [count, setCount] = useState(0);
const [double, setDouble] = useState(0);

useEffect(() => {
  setDouble(count * 2);
}, [count]);
```

Usually unnecessary.

Instead:

```jsx
const [count, setCount] = useState(0);

const double = count * 2;
```

Much simpler.

You only need state for information that should be independently remembered.

---

# 19. `useEffect` is not for event handling

Suppose a user clicks a button and you want to send a message.

Don't do something unnecessarily complicated like:

```jsx
const [clicked, setClicked] = useState(false);

useEffect(() => {
  if (clicked) {
    sendMessage();
  }
}, [clicked]);
```

Instead:

```jsx
<button onClick={sendMessage}>
  Send
</button>
```

The click itself is an **event**.

Handle the event in the event handler.

`useEffect` is more appropriate when something needs to synchronize with an external system because of rendering/state/prop changes.

---

# 20. Dependency array — the most confusing part

Consider:

```jsx
useEffect(() => {
  console.log(count);
}, [count]);
```

The effect uses:

```jsx
count
```

So `count` appears in:

```jsx
[count]
```

Think:

```text
Effect uses count
       ↓
count can affect the effect
       ↓
count belongs in dependencies
```

Another example:

```jsx
useEffect(() => {
  console.log(user.name);
  console.log(user.age);
}, [user]);
```

The effect depends on:

```text
user
```

So:

```jsx
[user]
```

is the dependency.

---

# 21. What does React compare?

React compares dependencies between renders.

Conceptually:

```text
Previous dependencies
        ↓
Compare with
        ↓
New dependencies
```

For primitive values like:

```js
number
string
boolean
```

this is straightforward.

For objects and arrays, React compares their **references**, not their contents deeply.

For example:

```js
const user = {
  name: "John"
};
```

If a new object is created:

```js
const newUser = {
  name: "John"
};
```

then:

```js
user === newUser
```

is:

```text
false
```

So an effect depending on the object can re-run when its reference changes.

---

# 22. Infinite loops with `useEffect`

This is a common beginner mistake.

For example:

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  setCount(count + 1);
}, [count]);
```

What's happening?

```text
count changes
   ↓
effect runs
   ↓
setCount(...)
   ↓
count changes
   ↓
effect runs
   ↓
setCount(...)
   ↓
...
```

That's an infinite update loop.

So be careful when an effect updates a state variable that is also one of the effect's dependencies.

---

# 23. Fetching data and cleanup

For asynchronous requests, there is another important consideration.

Imagine:

```jsx
useEffect(() => {
  fetch(`/api/users/${userId}`)
    .then(response => response.json())
    .then(data => {
      setUser(data);
    });
}, [userId]);
```

If `userId` changes quickly, multiple requests could be in flight.

A more robust approach can use `AbortController`:

```jsx
useEffect(() => {
  const controller = new AbortController();

  async function loadUser() {
    try {
      const response = await fetch(
        `/api/users/${userId}`,
        { signal: controller.signal }
      );

      const data = await response.json();

      setUser(data);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error(error);
      }
    }
  }

  loadUser();

  return () => {
    controller.abort();
  };
}, [userId]);
```

Now when `userId` changes or the component is removed:

```text
Previous request
      ↓
abort
```

This avoids unnecessary work and helps prevent stale requests from updating the UI.

---

# 24. `useEffect` with props

`useEffect` isn't only for state.

Suppose:

```jsx
function User({ userId }) {
  useEffect(() => {
    console.log("User ID changed:", userId);
  }, [userId]);

  return <div>{userId}</div>;
}
```

The effect runs when:

```text
userId changes
```

So dependencies can include:

```text
state
props
values calculated from props/state
```

---

# 25. A complete example

Let's create a component that fetches a user based on an ID.

```jsx
import { useEffect, useState } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUser() {
      try {
        setLoading(true);

        const response = await fetch(
          `/api/users/${userId}`,
          {
            signal: controller.signal
          }
        );

        const data = await response.json();

        setUser(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUser();

    return () => {
      controller.abort();
    };
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
```

Let's break it down.

### State

```jsx
const [user, setUser] = useState(null);
```

Stores the API result.

```jsx
const [loading, setLoading] = useState(true);
```

Stores whether we're loading.

### Effect

```jsx
useEffect(() => {
   ...
}, [userId]);
```

Means:

> Whenever this component needs to synchronize with a different `userId`, run the effect.

### Cleanup

```jsx
return () => {
  controller.abort();
};
```

Cancels the previous request.

---

# 26. The three dependency patterns

You should know these three very well.

### Pattern 1 — No dependency array

```jsx
useEffect(() => {
  // ...
});
```

Meaning:

```text
After every render
```

---

### Pattern 2 — Empty dependency array

```jsx
useEffect(() => {
  // ...
}, []);
```

Meaning:

```text
After the component is initially committed,
and in development Strict Mode you may see an extra
setup/cleanup cycle.
```

---

### Pattern 3 — Dependencies

```jsx
useEffect(() => {
  // ...
}, [count, userId]);
```

Meaning:

```text
Run after the initial commit,
and again when count or userId changes.
```

---

# 27. `useEffect` cleanup pattern

Memorize this structure:

```jsx
useEffect(() => {
  // Setup

  return () => {
    // Cleanup
  };
}, [dependencies]);
```

For a timer:

```jsx
useEffect(() => {
  const timer = setInterval(doSomething, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

For an event listener:

```jsx
useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

For a subscription:

```jsx
useEffect(() => {
  const subscription = subscribe();

  return () => {
    subscription.unsubscribe();
  };
}, []);
```

---

# 28. `useState` vs `useEffect`

This is probably the easiest way to remember the difference.

| Hook                         | Main purpose                       |
| ---------------------------- | ---------------------------------- |
| `useState`                   | Store information                  |
| `useEffect`                  | Synchronize with external systems  |
| `useState` setter            | Request state update               |
| `useEffect` dependency array | Decide when effect should re-run   |
| Effect cleanup               | Stop/undo previous synchronization |

Example:

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

Here:

```text
useState
   ↓
remembers count

setCount
   ↓
changes count

React renders
   ↓
useEffect runs because count changed

useEffect
   ↓
updates browser title
```

---

# 29. The most important mental model

Don't think:

> "`useEffect` means run this code after the component renders."

That's useful initially, but incomplete.

A better mental model is:

> **"When my component is rendered, I may need to synchronize something outside React with the current state/props. `useEffect` is where that synchronization happens."**

Examples:

```text
React state
    ↓
Synchronize
    ↓
Browser API
```

```text
React state
    ↓
Synchronize
    ↓
API request
```

```text
React props
    ↓
Synchronize
    ↓
WebSocket
```

```text
React state
    ↓
Synchronize
    ↓
Event listener
```

---

# 30. What you should memorize

If you're learning React, remember these patterns:

### Basic

```jsx
useEffect(() => {
  // effect
}, []);
```

### When a value changes

```jsx
useEffect(() => {
  // effect
}, [value]);
```

### Multiple dependencies

```jsx
useEffect(() => {
  // effect
}, [value1, value2]);
```

### Cleanup

```jsx
useEffect(() => {
  // setup

  return () => {
    // cleanup
  };
}, []);
```

### Fetching

```jsx
useEffect(() => {
  fetchData();
}, []);
```

### Previous subscription cleanup

```jsx
useEffect(() => {
  const subscription = subscribe();

  return () => {
    subscription.unsubscribe();
  };
}, [id]);
```

---

# 31. One final example tying everything together

```jsx
import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect: count is", count);

    document.title = `Count: ${count}`;

    return () => {
      console.log("Cleanup for count:", count);
    };
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(prev => prev + 1)}>
        Increase
      </button>
    </div>
  );
}
```

The lifecycle is approximately:

```text
                    ┌──────────────────┐
                    │ Component renders│
                    └────────┬─────────┘
                             ↓
                    ┌──────────────────┐
                    │   UI committed   │
                    └────────┬─────────┘
                             ↓
                    ┌──────────────────┐
                    │    useEffect     │
                    └────────┬─────────┘
                             ↓
                    document.title updated
                             │
                             │
                     User clicks button
                             ↓
                    setCount(prev => prev + 1)
                             ↓
                    ┌──────────────────┐
                    │   State changes  │
                    └────────┬─────────┘
                             ↓
                    ┌──────────────────┐
                    │ Component renders│
                    └────────┬─────────┘
                             ↓
                    Cleanup old effect
                             ↓
                    New effect runs
```

### The key difference from `useState`

Think of it this way:

```text
useState
   ↓
"What should React remember?"

useEffect
   ↓
"What should React synchronize with
 the outside world after rendering?"
```

Once `useState` and `useEffect` are clear, the next React Hooks that become much easier are **`useRef`, `useMemo`, `useCallback`, and `useContext`**.
