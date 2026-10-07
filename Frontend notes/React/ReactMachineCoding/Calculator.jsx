import React, { useState } from 'react';

const datas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function App() {
  const [input, setInput] = useState('');

  const handleClear = () => {
    setInput('');
  };

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (err) {
      setInput('Error');
    }
  };

  return (
    <div>
      <div>Result: {input}</div>
      <button onClick={handleClear}>Clear</button>
      <button onClick={() => handleClick('.')}>.</button>
      <button onClick={() => handleClick('+')}>+</button>
      <button onClick={() => handleClick('-')}>-</button>
      <button onClick={() => handleClick('*')}>*</button>
      <button onClick={() => handleClick('%')}>%</button>
      <button onClick={handleEqual}>=</button>
      <div>
        {datas.map((data) => (
          <button key={data} onClick={() => handleClick(data)}>
            {data}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;

