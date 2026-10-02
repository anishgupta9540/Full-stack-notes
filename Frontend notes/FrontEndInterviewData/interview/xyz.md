crausal in reactjs
fibonacci series print in ui

import React, { useState } from 'react';

function App() {
  const [datas, setDatas] = useState('');
  const [number, setNumber] = useState([]);

  const handleSubmit = () => {
    const num = parseInt(datas, 10);
    if (!isNaN(num)) {
      setNumber(fibdata(num));
    } else {
      setNumber(['Please enter a valid number']);
    }
  };

  const fibdata = (n) => {
    if (n <= 0) return [];
    if (n === 1) return [1];
    const fib = [1, 2];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter number"
        value={datas}
        onChange={(e) => setDatas(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        {Array.isArray(number)
          ? number.map((n, index) => <div key={index}>{n}</div>)
          : <div>{number}</div>}
      </div>
    </div>
  );
}

export default App;
