import React, { createContext, useState, useContext } from "react";
import ReactDOM from "react-dom/client";

// 1. Create UserContext
const UserContext = createContext();

// 2. Create UserProvider
const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// 3. Navbar Component
const Navbar = () => {
  const { isLoggedIn, login, logout } = useContext(UserContext);

  return (
    <nav style={{ padding: "10px", background: "#f0f0f0" }}>
      <h2>App</h2>
      {isLoggedIn ? (
        <>
          <span>Welcome, User!</span>
          <button onClick={logout} style={{ marginLeft: "10px" }}>
            Logout
          </button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </nav>
  );
};

// 4. Dashboard Component
const Dashboard = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div style={{ padding: "20px" }}>
      {isLoggedIn ? (
        <h3>This is your dashboard</h3>
      ) : (
        <h3>Please login to access your dashboard</h3>
      )}
    </div>
  );
};

// 5. App Component
const App = () => {
  return (
    <UserProvider>
      <Navbar />
      <Dashboard />
    </UserProvider>
  );
};

// 6. Render to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
