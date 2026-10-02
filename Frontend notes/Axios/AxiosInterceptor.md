In **ReactJS**, interceptors are typically used with **Axios** to intercept HTTP requests and responses globally. This is helpful for adding headers (like tokens), handling errors (like 401 Unauthorized), logging, or modifying requests/responses.

---

### ✅ Steps to Use Interceptor and Call API in ReactJS

---

### **1. Install Axios**

```bash
npm install axios
```

---

### **2. Create Axios Instance (with Interceptor)**

👉 In `api.js` (or `axiosInstance.js`):

```js
import axios from "axios";

// Create instance
const axiosInstance = axios.create({
  baseURL: "https://api.example.com", // Replace with your API base URL
  timeout: 10000,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // or get from Redux/cookies
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access globally
      console.warn("Unauthorized! Redirecting to login...");
      // e.g., logout, redirect, clear storage, etc.
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
```

---

### **3. Use Axios Instance in Your Component**

👉 Example: `UserList.js`

```jsx
import React, { useEffect, useState } from "react";
import axiosInstance from "./api"; // import the instance

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/users") // will call https://api.example.com/users
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users", err));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
```

---

### ✅ Benefits of Using Axios Interceptors in React

| Feature                      | Benefit                                 |
| ---------------------------- | --------------------------------------- |
| ✅ Centralized token handling | No need to add headers in every request |
| ✅ Global error handling      | Catch 401, 500, etc. once               |
| ✅ Easy maintenance           | All config in one place                 |

---

### Want to Handle Refresh Tokens Too?

Let me know — I can show how to automatically retry a failed request after refreshing the token.

Would you like a version with refresh-token logic too?
