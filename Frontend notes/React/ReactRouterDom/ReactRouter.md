useNavigate
useParams v6 => before using usehistory
useLocation => To access the current location object
useSearchparams 
useMatch
useRoutes
usehistory 
activeclassname
navlink and link
hash router and browser router 
queryparam (general concept in url) and usesSearchparam
route and switch
---------------------------------------------------------------------------------------------
switch
In React Router v5, Switch rendered the first matching route.
It's replaced by Routes in v6.
---------------------------------------------------------------------------------------------
routes
A container for all your <Route /> components.
Replaces the old <Switch /> from React Router v5.
---------------------------------------------------------------------------------------------
route
Defines a single route path and the component to render.
---------------------------------------------------------------------------------------------
browserroutes 
A wrapper component that enables routing using the HTML5 History API.
It's the main provider that allows all route components to work.
---------------------------------------------------------------------------------------------
| Term            | Used In Version | Purpose                             |
| --------------- | --------------- | ----------------------------------- |
| `BrowserRouter` | v5 & v6         | Enables routing using History API   |
| `Routes`        | ✅ v6 (New)      | Replaces `Switch`, holds all routes |
| `Route`         | v5 & v6         | Maps path to component              |
| `Switch`        | ❌ v5 (Old)      | Renders first matching route        |
---------------------------------------------------------------------------------------------
hash router and browser router 
| Feature               | `BrowserRouter`        | `HashRouter`           |
| --------------------- | ---------------------- | ---------------------- |
| URL format            | `/about`               | `/#/about`             |
| Uses History API      | ✅ Yes                  | ❌ No                   |
| SEO Friendly          | ✅ Yes                  | ❌ No                   |
| Server Config Needed  | ✅ Yes (fallback route) | ❌ No                   |
| Use for SPAs          | ✅ Preferred            | ✅ Alternative          |
| Works on GitHub Pages | ❌ Needs setup          | ✅ Works out of the box |
---------------------------------------------------------------------------------------------
note
Uses the HTML5 History API (pushState, replaceState) to manage URL navigation.
cons
Needs server configuration to handle client-side routing. 
---------------------------------------------------------------------------------------------
useparam => Hook ; home/:id
useParams is a hook in React Router that allows you to access route parameters from the current URL.
To access the URL parameters of the current route.
queryparam => filter sort search pagination passing data without changing route
routeparam => for identifying a unique page or resource
---------------------------------------------------------------------------------------------
Query parameters, also known as URL parameters or search parameters, are key-value pairs appended to the end of a URL after a question mark (?). They are used to pass additional information to a web server or application. In React applications, query parameters can be accessed and manipulated using the useSearchParams hook provided by react-router-dom..
---------------------------------------------------------------------------------------------
note
Query parameters exist in React just like they do in regular JavaScript, and you can access them using React Router's useSearchParams hook or manipulate them directly using window.location and URLSearchParams
---------------------------------------------------------------------------------------------
The useLocation hook from React Router DOM provides access to the current location object. This object contains information about the URL, such as the pathname, search parameters, and state. It is useful for triggering side effects or updating the UI based on changes to the URL.
import { useLocation } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();

  // Access properties of the location object
  const pathname = location.pathname;
  const searchParams = new URLSearchParams(location.search);
  const state = location.state;

  // Example usage:
  useEffect(() => {
    // Perform actions based on the current pathname
    if (pathname === '/about') {
      // Do something when the path is /about
    }
    // Update the UI based on search parameters
    const myParam = searchParams.get('myParam');
    if (myParam) {
      // Do something with the parameter
    }

  }, [location]); // The effect runs whenever the location changes

  return (
    <div>
      <p>Current path: {pathname}</p>
      {/* Display other information as needed */}
    </div>
  );
}
---------------------------------------------------------------------------------------------
useLocation is a hook from React Router (react-router-dom) that gives you access to the current location object — which tells you everything about the current URL (like the pathname, search query, and hash).
Think of it as a way to read the browser's current URL info inside your component — without manually reading window.location.
-----------------------------------------------------------------------------------------------------------------------
Query parameters exist in React just like they do in regular JavaScript, and you can access them using React Router's useSearchParams hook or manipulate them directly using window.location and URLSearchParams.
-----------------------------------------------------------------------------------------------------------------------
The useSearchParams hook, provided by React Router, enables functional components to read and modify the query string parameters in the current URL. It returns an array containing two elements: the current URLSearchParams object and a function to update these parameters, setSearchParams. 
-----------------------------------------------------------------------------------------------------------------------
Here's a clear **tabular comparison** between `Link` and `NavLink` in **React Router**:

| Feature                   | `Link`                         | `NavLink`                                           |
| ------------------------- | ------------------------------ | --------------------------------------------------- |
| **Purpose**               | Basic navigation               | Navigation with active state detection              |
| **Route awareness**       | ❌ Not aware of current route   | ✅ Knows if the link matches current route           |
| **Active class**          | ❌ Not applied                  | ✅ Applies `active` class automatically              |
| **Custom active style**   | ❌ Not supported                | ✅ Can apply custom class or style with `isActive`   |
| **Use case**              | Simple links (e.g., "Go Home") | Navigation menus, tabs, or highlighting active page |
| **API Example**           | `<Link to="/about" />`         | `<NavLink to="/about" />`                           |
| **Styling conditionally** | ❌ Not supported directly       | ✅ Yes, using `className` or `style` functions       |

---

Let me know if you’d like a working example with both in a navbar UI.
-----------------------------------------------------------------------------------------------------------------------
Great question! While `useMatch` and `useParams` seem similar, they are **not the same**. Here’s a detailed comparison:

---

### 📍 `useParams` vs `useMatch` in React Router

| Feature              | `useParams`                                         | `useMatch`                                                   |
| -------------------- | --------------------------------------------------- | ------------------------------------------------------------ |
| ✅ **Purpose**        | Get route parameters \*\*from a matched `<Route>`   | Manually **check if a path matches** the current URL         |
| ✅ **Where to use**   | Only **inside a component** rendered by a `<Route>` | **Anywhere**, even outside of route components               |
| 🔄 **Auto-matching** | ✅ Automatically uses the current route match        | ❌ You provide a path to match against                        |
| 🧾 **Returns**       | Just the route `params`                             | Full match object: `{ params, pathname, pattern }` or `null` |
| 📌 **Example path**  | Defined in route: `<Route path="/post/:id" />`      | Used manually: `useMatch("/post/:id")`                       |

---

### 🔤 Code Examples

#### ✅ `useParams` Example

```jsx
import { useParams } from "react-router-dom";

function PostPage() {
  const { id } = useParams(); // get id from route
  return <h1>Post ID: {id}</h1>;
}
```

Only works **inside a route** like:

```jsx
<Route path="/post/:id" element={<PostPage />} />
```

---

#### ✅ `useMatch` Example

```jsx
import { useMatch } from "react-router-dom";

function Sidebar() {
  const match = useMatch("/post/:id");

  return (
    <div>
      {match ? (
        <p>On Post page with ID: {match.params.id}</p>
      ) : (
        <p>Not on post page</p>
      )}
    </div>
  );
}
```

This works **anywhere**, even if `Sidebar` is not rendered via a `<Route>`.

---

### 🧠 Summary

* Use **`useParams`** when you're inside a route and just want to get the route parameters.
* Use **`useMatch`** when you want to **check if the current URL matches a pattern**, and possibly get the params too — useful in layout components, sidebars, navs, etc.

---

Would you like a side-by-side working example with both hooks?
-----------------------------------------------------------------------------------------------------------------------
