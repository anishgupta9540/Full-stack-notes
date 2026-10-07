// REACTJS SCENARIO BASED QUES & ANS

// GIVEN TWO DROPDOWNS, SELECT 2ND DROPDOWN OPTIONS BASED ON VALUE SELECTED IN 1ST DROPDOWN IN REACTJS? (LOAD STATES BASED ON COUNTRY SELECTED)
// take array of object 

Here’s a **scenario-based ReactJS question and answer** using **two dropdowns** where:

* **First dropdown** = Country
* **Second dropdown** = States
* The second dropdown options change dynamically based on the selected country.
* We'll use an **array of objects** to store the data.

---

## ✅ **Scenario**

**"How to update a second dropdown (States) based on the selected value of the first dropdown (Country) using ReactJS with an array of objects?"**

---

## ✅ **Answer with Example**

### 🧠 Step-by-step Logic:

1. You have a country-state mapping using an array of objects.
2. When a user selects a country, filter the corresponding states and update the second dropdown.
3. Use `useState` to manage selected country and available states.

---

### 🧾 **Code Example**

```jsx
import React, { useState } from 'react';

const countryStateData = [
  {
    country: 'India',
    states: ['Delhi', 'Maharashtra', 'Karnataka'],
  },
  {
    country: 'USA',
    states: ['California', 'Texas', 'Florida'],
  },
  {
    country: 'Australia',
    states: ['New South Wales', 'Victoria', 'Queensland'],
  },
];

function CountryStateSelector() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [stateOptions, setStateOptions] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);

    // Find matching country in data
    const found = countryStateData.find(item => item.country === country);
    setStateOptions(found ? found.states : []);
    setSelectedState(''); // Reset state dropdown
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <div>
      <h3>Select Country and State</h3>

      <label>Country: </label>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">--Select Country--</option>
        {countryStateData.map((item) => (
          <option key={item.country} value={item.country}>
            {item.country}
          </option>
        ))}
      </select>

      <br /><br />

      <label>State: </label>
      <select value={selectedState} onChange={handleStateChange} disabled={!selectedCountry}>
        <option value="">--Select State--</option>
        {stateOptions.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      <br /><br />

      {selectedCountry && selectedState && (
        <p>
          Selected: <strong>{selectedCountry}</strong> - <strong>{selectedState}</strong>
        </p>
      )}
    </div>
  );
}

export default CountryStateSelector;
```

---

## ✅ Output Behavior

* If you select **India**, second dropdown shows `Delhi`, `Maharashtra`, `Karnataka`.
* If you select **USA**, it shows `California`, `Texas`, `Florida`.
* If you change the country, the state list resets.

---

## ✅ ReactJS Concepts Used:

* `useState` hook
* Dynamic rendering based on selected value
* Mapping over arrays
* Controlled components (`value` and `onChange`)

---

Let me know if you want this using **TypeScript**, **Redux**, or **API-based data fetch** instead.
