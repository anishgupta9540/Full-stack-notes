https://jsonplaceholder.typicode.com/users
   Create a table with columns row number,  name, userName, email
   add a input text field on top-right of table to filter records by name/userName, Email.
   If input field is empty, it will display all records. 
   Add clear all button to clear filter.
   note: use proper naming convention. App should be scalable and code should be optimal and     
   easily understandable.
---------------------------------------------------------------------------------------------------------------------------
Absolute and relative and normal what is the diff 
If we apply border to button but in is wrap in div as div is block element why it is not taking all line 
---------------------------------------------------------------------------------------------------------------------------
import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const responsereslt = await response.json();
      setDatas(responsereslt);
      console.log(responsereslt);
    };
    fetchdata();
  }, []);

  const filterdata = datas.filter((data) => {
    return data.name.toLowerCase().includes(search.toLowerCase());
  });

  console.log('filterdata', filterdata);

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>Reset</button>
      {/* <table>
        <tr>
          <th style={{ border: '2px solid black' }}>Name</th>
          <th style={{ border: '2px solid black' }}>username</th>
          <th style={{ border: '2px solid black' }}>Email</th>
        </tr>
        <tbody>
          {(filterdata.length === 0 ? datas : filterdata).map((data) => {
            return (
              <tr key={data.id} style={{ border: '2px solid black' }}>
                <td>{data.name}</td> <td>{data.username}</td>
                <td>{data.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
      <div className="border">
        <button className="button">Button</button>
      </div>
    </div>
  );
}


/* h1,
p {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
 */

.button {
  position: absolute;
  top: 120px;
  border: 2px solid red;
}

.border {
  /* position: relative; */
  border: 2px solid black;
}
---------------------------------------------------------------------------------------------------------------------------
14-06-2025 (subramaniam)  digital business

MOvie Rating application
