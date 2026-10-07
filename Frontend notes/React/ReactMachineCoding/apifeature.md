import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [resetdata, setResetData] = useState([]);
  const [sortIdAsc, setSortIdAsc] = useState(true);
  const [sortEmailAsc, setSortEmailAsc] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const result = await response.json();
        setDatas(result);
        setResetData(result);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchdata();
  }, []);

  const handleReset = () => {
    setSearch('');
    setDatas(resetdata);
  };

  const handleSortById = () => {
    const sorted = [...datas].sort((a, b) => (sortIdAsc ? a.id - b.id : b.id - a.id));
    setDatas(sorted);
    setSortIdAsc(!sortIdAsc);
  };

  const handleSortByEmail = () => {
    const sorted = [...datas].sort((a, b) =>
      sortEmailAsc
        ? a.email.localeCompare(b.email)
        : b.email.localeCompare(a.email)
    );
    setDatas(sorted);
    setSortEmailAsc(!sortEmailAsc);
  };

  const filteredData = datas.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toString().includes(search)
    );
  });

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <button onClick={handleSortById}>Sort by ID ({sortIdAsc ? 'Asc' : 'Desc'})</button>
      <button onClick={handleSortByEmail}>
        Sort by Email ({sortEmailAsc ? 'A-Z' : 'Z-A'})
      </button>
      <br />
      <input
        type="text"
        placeholder="Search by ID or Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleReset}>Reset</button>

      {loading ? (
        <div>Loading...</div>
      ) : filteredData.length === 0 ? (
        <div>No results found</div>
      ) : (
        filteredData.map((data) => {
          const bgcolor = data.id % 2 === 0 ? '#808080' : 'green';
          return (
            <div
              key={data.id}
              style={{ backgroundColor: bgcolor, padding: '15px', color: '#fff' }}
            >
              <strong>ID:</strong> {data.id} <br />
              <strong>Name:</strong> {data.name} <br />
              <strong>Email:</strong> {data.email}
            </div>
          );
        })
      )}
    </div>
  );
}
