<!-- company capgemeni
Goal:
Component 1 (ResultComponent): Show the result of addition.
Component 2 (InputComponent): Take two input values.
Component 3 (ButtonComponent): Button to trigger addition.
Main Component (App): Combines all the above -->

import React, { useState } from 'react';

// Component 1: Show the result
const ResultComponent = ({ result }) => {
  return (
    <div>
      <h2>Result: {result}</h2>
    </div>
  );
};

// Component 2: Take input values
const InputComponent = ({ value1, value2, onChange1, onChange2 }) => {
  return (
    <div>
      <input
        type="number"
        value={value1}
        onChange={onChange1}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={value2}
        onChange={onChange2}
        placeholder="Enter second number"
      />
    </div>
  );
};

// Component 3: Button to perform addition
const ButtonComponent = ({ onClick }) => {
  return <button onClick={onClick}>Add</button>;
};

// Main App Component
const App = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    const sum = Number(value1) + Number(value2);
    setResult(sum);
  };

  return (
    <div>
      <ResultComponent result={result} />
      <InputComponent
        value1={value1}
        value2={value2}
        onChange1={(e) => setValue1(e.target.value)}
        onChange2={(e) => setValue2(e.target.value)}
      />
      <ButtonComponent onClick={handleAddition} />
    </div>
  );
};

export default App;
