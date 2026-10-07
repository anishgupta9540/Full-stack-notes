what is virtual dom 
what is shadow dom //imp
what is dom diffing
what is hook 
	useState
	useRef
	useReducer
	useContext
	useMemo
	useContext
	useCallback
what is React Portal //imp
what is component composition 
what is error boundry //imp
lifecycle method in react //imp
use state is synchronous or asynchronous //imp
control component and uncontrol component
A Controlled Component is a form element fully managed by React state.
An Uncontrolled Component manages its own state internally using the DOM, not React state.
what is React Algorithum 
why manipulation using useRef is not recomended in react 
ref vs useState
forwardref 
useImperativeHandle //imp
what is reducer function
stateless and stateful component  
unmounting in react functional component write claean up syntex
how you can increase search engine optimization
react fiber and main goal of react fiber //imp
react reconcilation //imp
server side rendering 
react  mixing //imp
flux //imp
mapstatetoprop => It lets your component read data from the store.
mapdispatchtoprop =>This function maps dispatch actions to your component's props, so the component can send updates to the store.
lazylaoding 
-----------------------------------------------------------------------------------------------------------------------
The Shadow DOM is a web standard that allows for encapsulation of HTML, CSS, and JavaScript. It enables developers to create components with their own isolated DOM tree, meaning styles and scripts inside it don’t affect the rest of the page — and vice versa.
in simpleterm
Shadow DOM lets you create a "mini-DOM" inside an element, hidden from the main document's DOM.
-----------------------------------------------------------------------------------------------------------------------
useRef is a React Hook that lets you create a mutable reference to a DOM element or a value that persists across renders without causing re-renders.
-----------------------------------------------------------------------------------------------------------------------
useReducer is a React Hook used to manage complex state logic — especially when the next state depends on the previous one, or when you have multiple related state variables that should be updated together.
It’s an alternative to useState, but with more structure and predictability (similar to how Redux works, but local to a component).
-----------------------------------------------------------------------------------------------------------------------
Fragment 
react treat them as a light weight wrapper 
Fragments don’t improve performance
(but they don’t worsen it either)
Fragments improve DOM structure and semantics
-----------------------------------------------------------------------------------------------------------------------
what is dom diffing
🛠️ How It Works (React-style example):
You update state → e.g., clicking a button increases a counter.

React creates a new virtual DOM based on the new state.

React diffs (compares) the new virtual DOM with the previous one.

It finds what changed (e.g., only the <span>5</span> changed to <span>6</span>).

It updates only that part in the real DOM.
-----------------------------------------------------------------------------------------------------------------------
A React Portal is a way to render a component outside of its parent DOM hierarchy, while still keeping it part of the React component tree.
-----------------------------------------------------------------------------------------------------------------------
react  mixing old concept in class based componet where same logic is share among other component like in modern react we use HOC and custom hook
-----------------------------------------------------------------------------------------------------------------------
Flux is a artitecture pattern for one ways data flow 
Mostly no — not directly.

Today, we use modern alternatives built on Flux principles, such as:
| Library     | Based On Flux? | Description                            |
| ----------- | -------------- | -------------------------------------- |
| **Redux**   | ✅ Yes          | The most popular Flux-style library    |
| **Recoil**  | ❌ No           | Facebook's more flexible state library |
| **MobX**    | ❌ No           | Reactive state management              |
| **Zustand** | ❌ No           | Minimal state management library       |
-----------------------------------------------------------------------------------------------------------------------
| Function             | Purpose                      |
| -------------------- | ---------------------------- |
| `mapStateToProps`    | Reads data from Redux store  |
| `mapDispatchToProps` | Sends actions to Redux store |
-----------------------------------------------------------------------------------------------------------------------
LazyLoading
Lazy loading in React means loading components only when they are needed, rather than all at once. This helps reduce the initial bundle size and improves performance, especially in large applications.
>Improves initial load time
>Reduces JavaScript bundle size
>Makes apps feel faster for users

import React, { Suspense } from 'react';

// Lazy import of the component
const LazyComponent = React.lazy(() => import('./MyComponent'));

function App() {
  return (
    <div>
      <h1>Main App</h1>

      {/* Show fallback while loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
-----------------------------------------------------------------------------------------------------------------------
An Error Boundary is a React component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of the broken component tree.
| Term                         | Explanation                                             |
| ---------------------------- | ------------------------------------------------------- |
| **Error Boundary**           | React component that catches errors in child components |
| **getDerivedStateFromError** | Updates state when error occurs                         |
| **componentDidCatch**        | Logs error information                                  |
| **Fallback UI**              | UI shown instead of broken component                    |
-----------------------------------------------------------------------------------------------------------------------
Reconciliation is the process React uses to update the DOM efficiently when the state or props of a component change.
react algorithum = react reconcilation+ dom diff + virtual dom.
-----------------------------------------------------------------------------------------------------------------------
useImperativeHandle