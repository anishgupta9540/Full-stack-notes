/*
🧾 Requirements:
    You are given a list of users (see starter data below).
    Each row should show:
        1. Name
        2. Email
        3. Status (Active/Inactive)
        4. A button to toggle active/inactive status.
    Add a search box at the top to filter users by name.
 */
import React, { useState } from 'react';

const initialUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', active: true },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', active: false },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', active: true },
];

export default function App() {  // ✅ Use default export here for easy import in index.js
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggle = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, active: !user.active } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>User List</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: 20, padding: 5, width: 250 }}
      />

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Email</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Status</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td style={{ border: '1px solid #ddd', padding: 8 }}>{user.name}</td>
                <td style={{ border: '1px solid #ddd', padding: 8 }}>{user.email}</td>
                <td style={{ border: '1px solid #ddd', padding: 8 }}>
                  {user.active ? 'Active' : 'Inactive'}
                </td>
                <td style={{ border: '1px solid #ddd', padding: 8 }}>
                  <button onClick={() => handleToggle(user.id)}>
                    Toggle Status
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{ padding: 8, textAlign: 'center' }}>
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}


add the global search functionality and make toggle button functional with staus change to inactive and active 


---------------------------------------------------------------------------
copy of my code written


const toggleFunction = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  
  
 
  /*
🧾 Requirements:
    You are given a list of users (see starter data below).
    Each row should show:
        1. Name
        2. Email
        3. Status (Active/Inactive)
        4. A button to toggle active/inactive status.
    Add a search box at the top to filter users by name.
 */
import React, { useState, useEffect } from 'react';

const initialUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', active: true },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', active: false },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', active: true },
];

export function App() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState([]);

  const filterprod = users.filter(items => {
    return items.name.toLowerCase().includes(search.toLowerCase());
  });
  useEffect(() => {
    setFilterData(filterprod);
  }, []);

  console.log('aaaaaaaaaa', filterdata);

  const handleToggle = id => {
    console.log('111111111', id);
    const updatedata = filterdata.map(u => u.id === id);
    console.log('2222222', updatedata);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>User List</h2>

      {/* Search Box */}
      <input
        type='text'
        placeholder='Search by name...'
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: 20, padding: 5, width: 250 }}
      />

      {/* Users Table */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Email</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Status</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map(user => (
            <tr key={user.id}>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>
                {user.name}
              </td>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>
                {user.email}
              </td>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>
                {user.active ? 'Active' : 'Inactive'}
              </td>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>
                <button
                  onClick={() => {
                    handleToggle(user.id);
                  }}
                >
                  Toggle Status
                </button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan={4} style={{ padding: 8, textAlign: 'center' }}>
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

https://playcode.io/2029920
---------------------------------------------------
l2 round question 3pm
const obj = { Name : ''}
obj.Name = 'test';
console.log(obj); // 👉 { Name: 'test' }
-------------------------------------------------------
what is react query?
-------------------------------------------------------
what is interceptor explaine in details 
-------------------------------------------------------
const objOriginal = [1,2,3,4]
const obj = [...objOriginal];
obj[1] = 5;
console.log(objOriginal[1])   //2
console.log(obj[1]) //5
-------------------------------------------------------
You have a React component that tracks a user's input of numbers (integers) into a list.
 
Requirements:
 
Users can enter a number into an input box.
When the user clicks "Add Number", the number is added to a list displayed below.
The list should never contain duplicate numbers; if the number already exists in the list, it should not be added again.
Display the list of numbers sorted in ascending order.
Below the list, display the sum of all numbers in the list.
Disable the "Add Number" button if the input is empty or if the input is not a valid integer.


import React, { useState } from 'react';

export default function App() {
  const [valueData, setValueData] = useState('');
  const [result, setTResult] = useState([]);

  const handleSubmit = () => {
    // Convert to string to match input value type
    if (!result.includes(valueData)) {
      setTResult([...result, valueData]);
    }
    setValueData('');
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input
        type="number"
        placeholder="Enter value"
        value={valueData}
        onChange={(e) => setValueData(e.target.value)}
      />
      <button onClick={handleSubmit} disabled={valueData === ''}>
        Submit
      </button>

      {result.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}


