import React, { useState } from 'react';

const originalData = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8',
  'Item 9',
  'Item 10',
];

export default function App() {
  const [sortAcc, setSortAcc] = useState(true); // true for ascending
  const [items, setItems] = useState(originalData);

  const handleClick = () => {
    const sortedData = [...items].sort((a, b) =>
      sortAcc ? a.localeCompare(b) : b.localeCompare(a)
    );
    setItems(sortedData);
    setSortAcc(!sortAcc); // toggle sort direction
  };

  return (
    <div>
      <button onClick={handleClick}>
        {sortAcc ? 'Sort Descending' : 'Sort Ascending'}
      </button>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}