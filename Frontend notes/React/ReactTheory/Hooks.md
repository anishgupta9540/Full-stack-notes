Here's a comprehensive list of **all built-in hooks in React** as of React **18+**, grouped by category for clarity:

---

### 🔹 **Basic Hooks**

These are the most commonly used and foundational React hooks.

| Hook         | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| `useState`   | Adds local state to functional components.                      |
| `useEffect`  | Runs side effects after rendering (e.g., fetch, DOM updates).   |
| `useContext` | Allows consuming React context values in functional components. |

---

### 🔹 **Additional Hooks**

These give more control over component behavior and performance.

| Hook                  | Description                                                               |
| --------------------- | ------------------------------------------------------------------------- |
| `useReducer`          | Alternative to `useState` for complex state logic.                        |
| `useCallback`         | Memoizes a function so it's only recreated when dependencies change.      |
| `useMemo`             | Memoizes a value for performance optimization.                            |
| `useRef`              | Provides a mutable reference that persists across renders.                |
| `useImperativeHandle` | Customizes the instance value exposed when using `ref` with `forwardRef`. |
| `useLayoutEffect`     | Like `useEffect`, but fires synchronously after all DOM mutations.        |
| `useDebugValue`       | Displays a label for custom hooks in React DevTools.                      |

---

### 🔹 **Hooks for Concurrent Mode (Advanced)**

Used with advanced features or libraries.

| Hook                   | Description                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------- |
| `useTransition`        | Allows marking state updates as non-urgent (for concurrent UI).                    |
| `useDeferredValue`     | Defers a value update to improve responsiveness.                                   |
| `useId`                | Generates unique IDs for accessibility or server rendering.                        |
| `useSyncExternalStore` | Used for reading external stores with consistent behavior in concurrent rendering. |
| `useInsertionEffect`   | Used for injecting styles into the DOM before layout (rarely needed).              |

---

### 🔹 **New Hooks (React 18+)**

These were introduced in React 18.

| Hook                   | Description                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| `useId`                | Creates unique IDs that are consistent between server and client.                              |
| `useSyncExternalStore` | Helps with subscribing to external stores.                                                     |
| `useInsertionEffect`   | Similar to `useLayoutEffect`, but runs before the DOM is painted—useful for styling libraries. |

---

### 🧪 **Experimental / Future Hooks** (Optional, for research purposes)

These are not widely used or might be unstable.

| Hook                                            | Description                                         |
| ----------------------------------------------- | --------------------------------------------------- |
| `useEvent` (experimental)                       | Used for stable event handler references.           |
| `useFormStatus` / `useFormState` (experimental) | For managing form state in React Server Components. |

---

Would you like a visual diagram of hook relationships, or a list of **custom hook** patterns next?
