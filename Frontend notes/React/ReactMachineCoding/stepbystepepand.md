import React, { useState } from 'react';

const ExpandList = () => {
  // Full list of data
  const data = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4',
    'Item 5', 'Item 6', 'Item 7', 'Item 8',
    'Item 9', 'Item 10'
  ];

  // State: how many items to show
  const [visibleCount, setVisibleCount] = useState(3);

  // Function to handle expand
  const handleExpand = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <div>
      <h2>Expandable List</h2>
      <ul>
        {data.slice(0, visibleCount).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {visibleCount < data.length && (
        <button onClick={handleExpand}>Show More</button>
      )}
    </div>
  );
};

export default ExpandList;


step by step expand 
import React, { useState } from "react";

function ExpandSteps() {
  const [step, setStep] = useState(0);

  const handleExpand = () => {
    setStep(prev => prev + 1);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Step-by-Step Expand</h2>

      {step >= 1 && <div>Step 1: Welcome to the app!</div>}
      {step >= 2 && <div>Step 2: Here's some more info.</div>}
      {step >= 3 && <div>Step 3: You're almost done.</div>}
      {step >= 4 && <div>Step 4: That's it. Thanks!</div>}

      {step < 4 && (
        <button onClick={handleExpand} style={{ marginTop: "1rem" }}>
          Show More
        </button>
      )}
    </div>
  );
}

export default ExpandSteps;

