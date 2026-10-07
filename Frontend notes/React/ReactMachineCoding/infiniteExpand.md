import React, { useState } from 'react';

const NestedButton = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ marginLeft: '20px', marginTop: '10px' }}>
      <button onClick={() => setExpanded(prev => !prev)}>
        {expanded ? 'Collapse' : 'Expand'}
      </button>

      {expanded && (
        <div style={{ marginTop: '10px', borderLeft: '2px solid gray', paddingLeft: '10px' }}>
          <p>Nested level</p>
          {/* Recursive call to render another NestedButton */}
          <NestedButton />
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Infinite Nested Expand Buttons</h2>
      <NestedButton />
    </div>
  );
}
