
import React from 'react';
import { useState, createContext } from 'react';

export default function App() {
  const dataContext = createContext();

  const dataProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const handleStart = () => {
      setCount((prev) => prev + 1);
    };
  };

  return (
    <context.Provider value={(handleStart, count)}>{children}</context.Provider>
  );
}

------------------------------------------
in below code i stuck in clean up part they ask for clean for twi ruuning state

import React from 'react';
// import "./style.css";
import { useState, useRef, useEffect } from 'react';

export default function App() {
  const [timeCount, setTimeCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const refInfo = useRef();

  const hadnleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
    refInfo.current = setInterval(() => {
      setTimeCount((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    return () => clearInterval(refInfo.current);
	setTimeCount(0);
	setIsRunning(false);
  }, []);

  return (
    <div>
      <h1>timer {timeCount}</h1>
      <button onClick={hadnleStart}>Start</button>
    </div>
  );
}
------------------------------------------
How you do login authentication 
context api
clean up while unmounting 
useLayout Effect and useEffect 
counter application 
Give small example for useState and useRef
interceptor in js 
how you can handle custom hook inside calleevent in react app
how you perform cachec in front end 

what is interceptor 
hoc is used for protected routes 
hoc is the old pattern for authentication now a days people use protected routes for authentication in reactjs 
alternate for hoc is custom hook
Apart from webpack and vite any other ways to build react application
create react applciation with particular version 

| Tool      | Use Case                | SSR Support        | Speed         | Recommended For        |
| --------- | ----------------------- | ------------------ | ------------- | ---------------------- |
| CRA       | Beginners/simple apps   | ❌                  | 🟡 Medium     | Learning, small apps   |
| Vite      | General use             | ⚠️\* (via plugins) | 🟢 Fast       | Most projects today    |
| Next.js   | Full-stack apps         | ✅                  | 🟢 Fast       | Production web apps    |
| Parcel    | Simple or medium apps   | ❌                  | 🟢 Fast       | Beginners, prototyping |
| Rollup    | Libraries               | ❌                  | 🟢 Fast       | NPM packages           |
| ESBuild   | Custom tooling          | ❌                  | 🟢 Super Fast | Advanced builds        |
| Turbopack | Future builds (Next.js) | ✅                  | 🟢 Fast       | Early adopters         |



| Type                  | Purpose                            | Persistent? |
| --------------------- | ---------------------------------- | ----------- |
| LocalStorage          | Settings, small JSON, tokens       | Yes         |
| SessionStorage        | Same as above, tab-specific        | No          |
| In-memory (JS object) | Temporary caching within a session | No          |
| React Query / SWR     | Smart API caching                  | No (memory) |
| Browser Cache / CDN   | Static assets (JS, CSS, images)    | Yes         |
| Service Workers       | Offline-first apps (PWA)           | Yes         |


