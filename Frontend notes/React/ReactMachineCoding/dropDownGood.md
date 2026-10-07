import React, { useState } from 'react';

const profitData = {
  A: { Q1: 120000, Q2: 135000, Q3: 150000, Q4: 160000 },
  B: { Q1: 95000, Q2: 105000, Q3: 110000, Q4: 120000 },
  C: { Q1: 80000, Q2: 85000, Q3: 90000, Q4: 95000 },
};

export default function App() {
  const [company, setCompany] = useState('');
  const [duration, setDuration] = useState('');
  const [profit, setProfit] = useState(null);

  const handleSubmit = () => {
    if (!company || !duration) {
      alert('Please select both company and duration');
      return;
    }

    const data = profitData[company];
    let total = 0;

    switch (duration) {
      case 'Quarter':
        total = data.Q1;
        break;
      case 'Half-Year':
        total = data.Q1 + data.Q2;
        break;
      case '9 Months':
        total = data.Q1 + data.Q2 + data.Q3;
        break;
      case 'Full Year':
        total = data.Q1 + data.Q2 + data.Q3 + data.Q4;
        break;
      default:
        total = 0;
    }

    setProfit(total);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Company Profit Report</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>Select Company: </label>
        <select value={company} onChange={(e) => setCompany(e.target.value)}>
          <option value="">--Choose Company--</option>
          <option value="A">Company A</option>
          <option value="B">Company B</option>
          <option value="C">Company C</option>
        </select>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Select Duration: </label>
        <select value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="">--Choose Duration--</option>
          <option value="Quarter">Quarter</option>
          <option value="Half-Year">Half-Year</option>
          <option value="9 Months">9 Months</option>
          <option value="Full Year">Full Year</option>
        </select>
      </div>

      <button onClick={handleSubmit}>Submit</button>

      {profit !== null && (
        <div style={{ marginTop: '20px' }}>
          <h3>
            Profit for Company {company} ({duration}): ${profit.toLocaleString()}
          </h3>
        </div>
      )}
    </div>
  );
}
