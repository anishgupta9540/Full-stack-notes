import React from 'react';
import { useState } from 'react';

function App() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [result, setResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateresult = [...result, { fname, lname }];
    setResult(updateresult);
    setFname('');
    setLname('');
  };

  const handleDelete = (id) => {
    const updatedata = result.filter((prodata, index) => index !== id);
    setResult(updatedata);
  };

  console.log(result);
  return (
    <div>
      <h2>ToDo Application</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={fname}
          placeholder="enter fname"
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          type="text"
          value={lname}
          placeholder="enter Lname"
          onChange={(e) => setLname(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {result.map((items, index) => {
        return (
          <div key={index}>
            {items.fname}
            {items.lname}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
---------------------------------------------------------------------------------------------

import React, { useState } from 'react';

function App() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [result, setResult] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // Update the existing entry
      const updated = [...result];
      updated[editIndex] = { fname, lname };
      setResult(updated);
      setEditIndex(null);
    } else {
      // Add new entry
      const updateresult = [...result, { fname, lname }];
      setResult(updateresult);
    }

    setFname('');
    setLname('');
  };

  const handleDelete = (id) => {
    const updatedata = result.filter((_, index) => index !== id);
    setResult(updatedata);
    if (editIndex === id) {
      setEditIndex(null);
      setFname('');
      setLname('');
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFname(result[index].fname);
    setLname(result[index].lname);
  };

  return (
    <div>
      <h2>ToDo Application</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={fname}
          placeholder="Enter First Name"
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          type="text"
          value={lname}
          placeholder="Enter Last Name"
          onChange={(e) => setLname(e.target.value)}
        />
        <button type="submit">{editIndex !== null ? 'Update' : 'Submit'}</button>
      </form>

      {result.map((item, index) => (
        <div key={index}>
          {item.fname} {item.lname}
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
