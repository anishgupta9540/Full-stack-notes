const foodItems = [
  { id: 1, name: "Paneer Butter Masala", type: "veg" },
  { id: 2, name: "Chicken Biryani", type: "non-veg" },
  { id: 3, name: "Dal Tadka", type: "veg" },
  { id: 4, name: "Fish Curry", type: "non-veg" },
  { id: 5, name: "Veg Pulao", type: "veg" },
  { id: 6, name: "Mutton Rogan Josh", type: "non-veg" },
  { id: 7, name: "Chole Bhature", type: "veg" },
  { id: 8, name: "Egg Curry", type: "non-veg" },
  { id: 9, name: "Aloo Paratha", type: "veg" },
  { id: 10, name: "Butter Chicken", type: "non-veg" }
];


import React, { useState } from 'react';

const foodItems = [
  { id: 1, name: 'Paneer Butter Masala', type: 'veg' },
  { id: 2, name: 'Chicken Biryani', type: 'non-veg' },
  { id: 3, name: 'Dal Tadka', type: 'veg' },
  { id: 4, name: 'Fish Curry', type: 'non-veg' },
  { id: 5, name: 'Veg Pulao', type: 'veg' },
  { id: 6, name: 'Mutton Rogan Josh', type: 'non-veg' },
  { id: 7, name: 'Chole Bhature', type: 'veg' },
  { id: 8, name: 'Egg Curry', type: 'non-veg' },
  { id: 9, name: 'Aloo Paratha', type: 'veg' },
  { id: 10, name: 'Butter Chicken', type: 'non-veg' },
];

export default function App() {
  const [datas, setDatas] = useState([...foodItems]);
  const [toggle, setToggle] = useState(true); // true = veg, false = non-veg

  const handleClick = () => {
    const newToggle = !toggle;
    setToggle(newToggle);

    const filteredData = foodItems.filter(
      (item) => item.type === (newToggle ? 'veg' : 'non-veg')
    );

    setDatas(filteredData);
  };

  const handleReset = () => {
    setDatas([...foodItems]);
  };

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleClick}>
        Show {toggle ? 'Non-Veg' : 'Veg'}
      </button>

      <hr />

      {datas.map((data) => (
        <div key={data.id}>
          <strong>{data.name}</strong> - {data.type}
          <br />
        </div>
      ))}
    </div>
  );
}





veg/non veg data4




import React, { useState } from 'react';

const foodItems = [
  { id: 1, name: 'Paneer Butter Masala', type: 'veg' },
  { id: 2, name: 'Chicken Biryani', type: 'non-veg' },
  { id: 3, name: 'Dal Tadka', type: 'veg' },
  { id: 4, name: 'Fish Curry', type: 'non-veg' },
  { id: 5, name: 'Veg Pulao', type: 'veg' },
  { id: 6, name: 'Mutton Rogan Josh', type: 'non-veg' },
  { id: 7, name: 'Chole Bhature', type: 'veg' },
  { id: 8, name: 'Egg Curry', type: 'non-veg' },
  { id: 9, name: 'Aloo Paratha', type: 'veg' },
  { id: 10, name: 'Butter Chicken', type: 'non-veg' },
];

export default function App() {
  const [datas, setDatas] = useState([...foodItems]);
  const [toggleData, setToggleData] = useState(true);

  const handleToggle = () => {
    const newToggle = !toggleData;
    setToggleData(newToggle);
    const filterdata = foodItems.filter((item) => {
      return item.type === (newToggle ? 'veg' : 'non-veg');
    });
    setDatas(filterdata);
  };

  return (
    <div>
      <button onClick={handleToggle}>{toggleData ? 'veg' : 'non-veg'}</button>
      <h1>Food Menu</h1>
      {datas.map((item) => (
        <div key={item.id}>
          <strong>{item.name}</strong> - {item.type}
        </div>
      ))}
    </div>
  );
}

