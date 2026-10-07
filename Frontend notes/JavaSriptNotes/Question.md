Ternary operator 
Template literal 
what is null in js 
Hoisting in js 
Temperoal deadzone 
call by value and call by reference 
Destructure object and array
arrow function 
short-circuiting with && || and ??
event listner and event delegation in js 
array method 
this keyword
rest and spread operator
map filter reduce 
optional chaining 
what is map object and set object 
foreach loop 
async and await in js 
fetch 
Switch case
slice and splice
Object.seal and Object.Freeze in js 
what is webworker and purpose
what is web Api 
ArrayMethod = indexOf, match, includes, find, groupedby 
shadow dom
polyfils
In how many ways object can be created in js 
ES6 feature name 
array and object method
scope and scopechain
object can be created in js 
what is prototype and prototype chain 
what is constructor 
what is dom and dom maniulation in js  
object method and object mutability
event , eventmethod, eventpropagation, event delegation, event listner
bubling , event capturing 
what is pwa
implicit coersion and explicite coersion
local session and cookies //imp
event loop
promise 
//OPPS Concept 
explaine class instance object in opps
4 pillar of opps
	abstraction 
	encapsulation 
	inheritance
	polymorphism
differ and async explaine in js
explaine web Assesibility 
-------------------------------------------------------------------------------------------
Rest and spread operator 

The rest operator collects multiple elements into a single array or object. It's commonly used in function parameters or destructuring.

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

sum(1, 2, 3); // 6

The spread operator unpacks elements from an array, object, or iterable into individual elements.
-------------------------------------------------------------------------------------------
How many ways you can create array and object in js 

Array
>Array literal // let result=[12,14,15,16];
>Array constructor // let result=new Array(1,2,3,4);
>Array.from 
>Array.of
>spread operator 

Object
>object literal
const result={
	name: 'anish',
	id: 1
}

>using new Object
const person = new Object();
person.name = "Bob";
person.age = 25;


>using constructor functions
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Person("Charlie", 28);


>es6 class syntex
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("Diana", 35);
-------------------------------------------------------------------------------------------
object method in js

Object.keys(obj) – Returns an array of keys
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // ['a', 'b']

Object.values(obj) – Returns an array of values
console.log(Object.values(obj)); // [1, 2]

Object.entries(obj) – Returns key-value pairs
console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]

Object.assign(target, source) – Copies properties
const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source); // { a: 1, b: 2 }

Object.hasOwnProperty(key) – Checks property existence
obj.hasOwnProperty('a'); // true


| Method                            | Description                             |
| --------------------------------- | --------------------------------------- |
| `Object.freeze(obj)`              | Makes object immutable                  |
| `Object.seal(obj)`                | Prevents adding/removing properties     |
| `Object.create(proto)`            | Creates object with specified prototype |
| `Object.fromEntries(entries)`     | Builds object from key-value pairs      |
| `Object.getOwnPropertyNames(obj)` | Lists all property names                |
| `Object.getPrototypeOf(obj)`      | Gets prototype of object                |

-------------------------------------------------------------------------------------------
The Shadow DOM is a web standard that lets you encapsulate a chunk of DOM and CSS so it’s isolated from the rest of the document. It’s mainly used to create Web Components that have their own private DOM and styles, preventing styles or scripts from outside from affecting the component's internals — and vice versa.

// 1. Create a regular element
const host = document.querySelector('#my-element');

// 2. Attach a shadow root to the element
const shadow = host.attachShadow({ mode: 'open' });

// 3. Add content inside the shadow root
shadow.innerHTML = `
  <style>
    p {
      color: red;
    }
  </style>
  <p>This is inside the shadow DOM!</p>
`;

<div id="my-element"></div>


Why use Shadow DOM?
Style encapsulation: Component styles won’t conflict with the page’s styles.

DOM encapsulation: Inner elements can’t be accidentally selected or styled from outside.

Reusability: Build self-contained, reusable components.
---------------------------------------------------------------------------------------------------------
DOM diffing is a technique used by modern frontend libraries (like React, Vue, etc.) to efficiently update the DOM by comparing (or diffing) two representations of the UI — usually virtual DOM trees — and applying the minimal necessary changes to the real DOM.

Instead of re-rendering everything, DOM diffing figures out what actually changed and updates only those parts. This is crucial because direct DOM manipulation is relatively slow.
---------------------------------------------------------------------------------------------------------
Diff between dom diffing and virtual dom

Virtual DOM = The photo of your whiteboard

DOM diffing = Comparing two photos to see what changed

Real DOM = The actual whiteboard people see
---------------------------------------------------------------------------------------------------------
lexical scope
Lexical scope in JavaScript means that the accessibility of variables is determined by the physical placement of the code in the source file — i.e., where variables and blocks of code are written defines what variables are available where.

In simpler terms:
A function can access variables defined in its own scope and in any outer (parent) scopes where it is defined.
what is scope
---------------------------------------------------------------------------------------------------------
Scope defines where variables, functions, and objects are accessible in your code.
---------------------------------------------------------------------------------------------------------
reduce() is an array method that reduces an array to a single value by applying a function on each element, one at a time, carrying forward an accumulator.
---------------------------------------------------------------------------------------------------------
call apply bind 

They all are method available on function and they let you control what this is reffer to when the function is called 

call immeditely  invoke function 
apply also immedietly invoke function 
bind does not invke function immediately 
>return a new function with this bound 

| Method  | Executes function?  | How to pass arguments? | Returns? |
| ------- | ------------------- | ---------------------- | -------- |
| `call`  | Yes                 | One by one             | Result   |
| `apply` | Yes                 | Array                  | Result   |
| `bind`  | No (creates new fn) | One by one (or preset) | New func |
---------------------------------------------------------------------------------------------------------
this keyword in js 
this keyword in arrowfunction 
this keyword in call apply bind 
---------------------------------------------------------------------------------------------------------
dom diffing is a concept of updating real dom after comparision of virtual dom
---------------------------------------------------------------------------------------------------------
Event
An event is an action or occurrence that happens in the browser, which the JavaScript code can respond to.
In short: An event is what happens.

click – when a user clicks on an element
input – when a user types into a text box
submit – when a form is submitted
load – when a page or image finishes loading

// Example: Click event
<button onclick="alert('Clicked!')">Click me</button>
---------------------------------------------------------------------------------------------------------
Event Listener
An event listener is a function that waits for a specific event to happen on a specific element and then runs a function when it occurs.
In short: An event listener is how you react to an event.

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  alert("Button clicked!");
});
---------------------------------------------------------------------------------------------------------
Event Propagation
Event propagation describes the way events flow through the DOM tree. There are two main phases:

a. Capturing phase (also called capture or trickle down)
The event starts from the top/root (document) and goes down to the target element.

b. Bubbling phase
The event starts from the target and goes up the DOM tree back to the top.

By default, events are handled during the bubbling phase.

<div id="parent">
  <button id="child">Click me</button>
</div>

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

Child clicked
Parent clicked
Because the event bubbles up from child → parent.
---------------------------------------------------------------------------------------------------------
Controlling Propagation

event.stopPropagation()
Stops the event from continuing to bubble or capture.

child.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Only child clicked");
});

Using capture mode
To listen during the capturing phase, pass true as the third argument:
parent.addEventListener("click", () => {
  console.log("Parent capture");
}, true); // capture mode
---------------------------------------------------------------------------------------------------------

| Term                  | What it is                                         |
| --------------------- | -------------------------------------------------- |
| **Event**             | An action (like a click, submit, input, etc.)      |
| **Event Listener**    | Code that runs when the event happens              |
| **Event Propagation** | The flow of the event: from top → target → back up |

---------------------------------------------------------------------------------------------------------
What is Event Delegation in JavaScript?

Event delegation is a technique where you attach a single event listener to a parent element instead of adding listeners to each individual child element.

It takes advantage of event bubbling, where an event that occurs on a child element bubbles up to its ancestors (like the parent or even the document).

Why use event delegation?
✅ Better performance (fewer event listeners)

✅ Useful when elements are added dynamically

✅ Easier to manage events in one place


| Feature              | Description                                       |
| -------------------- | ------------------------------------------------- |
| **Event Delegation** | One listener on a common ancestor handles events  |
| **Uses**             | Dynamic elements, better performance              |
| **How it works**     | Uses **event bubbling** and checks `event.target` |
---------------------------------------------------------------------------------------------------------

A **Web Worker** is a JavaScript feature that allows you to run scripts in the **background**, separate from the main browser thread. This helps prevent UI freezes or lag when you're doing **heavy computations** or **long-running tasks**, like:

* Parsing large JSON files
* Performing complex calculations
* Fetching and processing data
* Encoding/decoding media
* Handling animations or real-time updates
---
### ✅ Purpose of a Web Worker

1. **Improve performance & responsiveness**
   By offloading tasks to a separate thread, your app's main UI thread stays responsive.
2. **Avoid blocking the UI**
   JavaScript is single-threaded by default. Long-running code on the main thread (like loops or data processing) blocks user interactions like clicking or typing. Web Workers solve this.
3. **Parallel execution**
   While Web Workers don’t share variables with the main thread, they communicate using **messages** (via `postMessage`). This enables parallelism without race conditions.

---

### 🛠️ Example

**main.js** (main thread):

```js
const worker = new Worker("worker.js");

worker.postMessage("Start processing");

worker.onmessage = function (event) {
  console.log("Received from worker:", event.data);
};
```

**worker.js** (worker thread):

```js
onmessage = function (event) {
  // Heavy task
  let result = 0;
  for (let i = 0; i < 1e9; i++) {
    result += i;
  }
  postMessage(result);
};
```

---

### ⚠️ Limitations
* No direct access to DOM or window
* Communicates only via `postMessage()`
* Can’t access some APIs like `localStorage`
---
Let me know if you want to see how to use Web Workers in a React or TypeScript project!
---------------------------------------------------------------------------------------------------------
es6
let and const
arrow function
template literal
destructuring 
rest spread
default parameter
object literal
classes
promise
module(import/export)
for of loop
map and set
---------------------------------------------------------------------------------------------------------
In JavaScript, there are several ways to create objects. Here are some common methods:

Object Literal: let obj = { key: 'value' };

Constructor Function: let obj = new Object();

Factory Function: function createObj() { return { key: 'value' }; } let obj = createObj();

Class: class MyClass { constructor() { this.key = 'value'; } } let obj = new MyClass();

Object.create(): let obj = Object.create(null);

Using the new keyword with a custom constructor: function Person(name) { this.name = name; } let obj = new Person('John');

<!-- array literal 
array from 
array of 
spread operator  -->
---------------------------------------------------------------------------------------------------------
Here's a simple and clear example of **deep copy** in JavaScript using `structuredClone()` (modern way) and `JSON.parse(JSON.stringify(...))` (older way):

---

### ✅ Example: Deep Copy with `structuredClone()` (Modern & Recommended)

```javascript
const original = {
  name: "Alice",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

const copy = structuredClone(original);

// Modify the copy
copy.address.city = "Mumbai";

console.log(original.address.city); // ➜ "Delhi" (not affected)
console.log(copy.address.city);     // ➜ "Mumbai"
```

> ✅ `structuredClone()` is available in modern browsers and Node.js 17+.

---

### ✅ Example: Deep Copy with `JSON.parse(JSON.stringify(...))`

```javascript
const original = {
  name: "Bob",
  address: {
    city: "Kolkata",
    pin: 700001
  }
};

const copy = JSON.parse(JSON.stringify(original));

copy.address.city = "Chennai";

console.log(original.address.city); // ➜ "Kolkata"
console.log(copy.address.city);     // ➜ "Chennai"
```

> ⚠️ `JSON.parse(JSON.stringify(...))` **does not support** functions, `undefined`, `Date`, or circular references.

---

### 🧠 When to use:

* Use `structuredClone()` if available — it handles more complex data.
* Use `JSON.parse(JSON.stringify(...))` for plain objects and simple data.

Let me know if you want a custom deep copy function or to use libraries like Lodash (`_.cloneDeep`) too!
---------------------------------------------------------------------------------------------------------

