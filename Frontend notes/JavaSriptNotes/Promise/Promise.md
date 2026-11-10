Promise 
promise.all()
promise.allsettled()
promise.race()
promise.any()
promise.resolve()
promise.reject()
-----------------------------------------------------------------------
// Create a new Promise
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous task with setTimeout
  setTimeout(() => {
    const success = true;  // Change to false to simulate error
    
    if (success) {
      resolve("Task completed successfully!");  // Promise fulfilled
    } else {
      reject("Task failed.");  // Promise rejected
    }
  }, 2000);  // wait 2 seconds
});

// Consume the Promise
myPromise
  .then((result) => {
    console.log(result);  // runs if the Promise is fulfilled
  })
  .catch((error) => {
    console.error(error); // runs if the Promise is rejected
  });
-------------------------------------------------------------------------------------------------
import React, { useEffect, useState } from 'react';

function App() {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [res1, res2, res3] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/posts/1'),
          fetch('https://jsonplaceholder.typicode.com/users/1'),
          fetch('https://jsonplaceholder.typicode.com/comments/1')
        ]);

        const data1 = await res1.json();
        const data2 = await res2.json();
        const data3 = await res3.json();

        setData1(data1);
        setData2(data2);
        setData3(data3);
      } catch (error) {
        console.error('Error fetching APIs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Post Title: {data1?.title}</h2>
      <h2>User Name: {data2?.name}</h2>
      <h2>Comment Body: {data3?.body}</h2>
    </div>
  );
}

export default App;
-------------------------------------------------------------------------------
Great! Let's update the code to use **`Promise.any()`** instead of `Promise.all()`.

---

### 🔍 What `Promise.any()` Does:

* It resolves **as soon as the first API that *succeeds*** returns a value.
* It **ignores rejected promises** unless *all of them fail* — in that case, it throws an `AggregateError`.

---

### ✅ Example: Using `fetch` + `Promise.any()` + `async/await`

```jsx
import React, { useEffect, useState } from 'react';

function App() {
  const [firstResponse, setFirstResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAny = async () => {
      try {
        const responses = await Promise.any([
          fetch('https://jsonplaceholder.typicode.com/posts/1'),
          fetch('https://jsonplaceholder.typicode.com/users/1'),
          fetch('https://jsonplaceholder.typicode.com/comments/1')
        ]);

        const data = await responses.json();
        setFirstResponse(data);
      } catch (error) {
        console.error('All API calls failed:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAny();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>First Successful API Response:</h2>
      <pre>{JSON.stringify(firstResponse, null, 2)}</pre>
    </div>
  );
}

export default App;
```

---

### 🧠 Notes:

* Only the **first successfully resolved API** will be used.
* The others are ignored even if they also succeed.
* If **all APIs fail**, you’ll catch an `AggregateError`.

---

Would you like a version that collects **all successful results**, or stops on the **fastest success only**?
---------------------------------------------------------------------------------------------------------------------------
Great! Here's how you can call **3 APIs using `fetch` and `async/await`** in React.

---

### ✅ Example: Call 3 APIs in **parallel** using `fetch` + `async/await`

```jsx
import React, { useEffect, useState } from 'react';

function App() {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [res1, res2, res3] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/posts/1'),
          fetch('https://jsonplaceholder.typicode.com/users/1'),
          fetch('https://jsonplaceholder.typicode.com/comments/1')
        ]);

        const data1 = await res1.json();
        const data2 = await res2.json();
        const data3 = await res3.json();

        setData1(data1);
        setData2(data2);
        setData3(data3);
      } catch (error) {
        console.error('Error fetching APIs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Post Title: {data1?.title}</h2>
      <h2>User Name: {data2?.name}</h2>
      <h2>Comment Body: {data3?.body}</h2>
    </div>
  );
}

export default App;
```

---

### 🔁 Example: Call 3 APIs **one by one** (sequentially)

```jsx
useEffect(() => {
  const fetchSequential = async () => {
    try {
      const res1 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data1 = await res1.json();
      setData1(data1);

      const res2 = await fetch(`https://jsonplaceholder.typicode.com/users/${data1.userId}`);
      const data2 = await res2.json();
      setData2(data2);

      const res3 = await fetch('https://jsonplaceholder.typicode.com/comments/1');
      const data3 = await res3.json();
      setData3(data3);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchSequential();
}, []);
```

---

Would you like help calling your own API endpoints or sending data with `POST` too?
-------------------------------------------------------------------------------------------------------------------
Sure! Here's how you can **call 3 APIs using `async/await`** in React **(with `useEffect`)**. I'll show you both options:

---

## ✅ Option 1: Call 3 APIs **in parallel** with `async/await` + `Promise.all`

```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllApis = async () => {
      try {
        const [response1, response2, response3] = await Promise.all([
          axios.get('https://jsonplaceholder.typicode.com/posts/1'),
          axios.get('https://jsonplaceholder.typicode.com/users/1'),
          axios.get('https://jsonplaceholder.typicode.com/comments/1')
        ]);

        setData1(response1.data);
        setData2(response2.data);
        setData3(response3.data);
      } catch (error) {
        console.error('API call error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllApis();
  }, []);

  if (loading) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>API 1 (Post): {data1?.title}</h2>
      <h2>API 2 (User): {data2?.name}</h2>
      <h2>API 3 (Comment): {data3?.body}</h2>
    </div>
  );
}

export default App;
```

---

## 🔁 Option 2: Call APIs **one after another** using `await`

Useful if the second API needs result from the first one.

```jsx
useEffect(() => {
  const fetchSequential = async () => {
    try {
      const res1 = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      setData1(res1.data);

      const res2 = await axios.get(`https://jsonplaceholder.typicode.com/users/${res1.data.userId}`);
      setData2(res2.data);

      const res3 = await axios.get('https://jsonplaceholder.typicode.com/comments/1');
      setData3(res3.data);
    } catch (error) {
      console.error('Sequential API error:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchSequential();
}, []);
```

---

Would you like a version that **posts data using POST** or that includes **loading/error messages per API**?
--------------------------------------------------------------------------------------------------------------------------
To **call 3 APIs in React JS**, you can use the `useEffect` hook with `Promise.all()` if you want to call them **simultaneously**, or chain them if they are **dependent on each other**.

---

### ✅ Example: Call 3 APIs in Parallel (Using `Promise.all`)

```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [res1, res2, res3] = await Promise.all([
          axios.get('https://api.example.com/endpoint1'),
          axios.get('https://api.example.com/endpoint2'),
          axios.get('https://api.example.com/endpoint3'),
        ]);
        setData1(res1.data);
        setData2(res2.data);
        setData3(res3.data);
      } catch (error) {
        console.error('Error fetching APIs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>API 1 Data: {JSON.stringify(data1)}</h2>
      <h2>API 2 Data: {JSON.stringify(data2)}</h2>
      <h2>API 3 Data: {JSON.stringify(data3)}</h2>
    </div>
  );
}

export default App;
```

---

### 🔁 Optional: Call APIs One by One (Sequentially)

If each API depends on the result of the previous one:

```jsx
useEffect(() => {
  const fetchSequential = async () => {
    try {
      const res1 = await axios.get('https://api.example.com/1');
      const res2 = await axios.get(`https://api.example.com/2?ref=${res1.data.id}`);
      const res3 = await axios.get(`https://api.example.com/3?ref=${res2.data.id}`);

      setData1(res1.data);
      setData2(res2.data);
      setData3(res3.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  fetchSequential();
}, []);
```

---

Let me know if you want to **mock this with free APIs** or need help **posting data (POST)** instead.
--------------------------------------------------------------------------------------------------------------------------------

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Result from promise 1");
        } else {
            reject("Promise 1 failed");
        }
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Result from promise 2");
        } else {
            reject("Promise 2 failed");
        }
    }, 1500);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Result from promise 3");
        } else {
            reject("Promise 3 failed");
        }
    }, 500);
});

// Use Promise.all
Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("All promises resolved:");
        console.log(results); // Array of resolved values
    })
    .catch((error) => {
        console.log("One of the promises failed:");
        console.log(error); // First error that occurred
    });
-----------------------------------------------------------------------
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("❌ promise1 failed"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("✅ promise2 succeeded"), 1500);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("❌ promise3 failed"), 500);
});

Promise.any([promise1, promise2, promise3])
    .then((result) => {
        console.log("First success:", result);
    })
    .catch((error) => {
        console.log("All promises failed:", error);
    });
-----------------------------------------------------------------------
