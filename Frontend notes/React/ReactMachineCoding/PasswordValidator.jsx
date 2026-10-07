password in rectjs 
import React, { useState } from 'react';

export default function App() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const validatePassword = (password) => {
    const passlength = 8;
    const uppercase = /[A-Z]/.test(password); // FIXED: was /[^A-Z]/
    const lowercase = /[a-z]/.test(password); // FIXED: was /[^a-z]/
    const specialChar = /[!@#$%^&*()]/.test(password);
    const digit = /[0-9]/.test(password);

    if (password.length < passlength) {
      return "Enter at least 8 characters";
    }
    if (!digit) {
      return "Include at least one digit";
    }
    if (!uppercase) {
      return "Include at least one uppercase letter";
    }
    if (!lowercase) {
      return "Include at least one lowercase letter";
    }
    if (!specialChar) {
      return "Include at least one special character (!@#$%^&*())";
    }

    return "Valid password";
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setMessage(validatePassword(newPassword));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Password Validator</h2>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <p style={{ color: message === "Valid password" ? "green" : "red" }}>
        {message}
      </p>
    </div>
  );
}



