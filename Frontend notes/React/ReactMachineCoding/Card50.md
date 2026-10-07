import React, { useState, memo } from 'react';
import ReactDOM from 'react-dom/client';

// 👤 Memoized Card Component
const Card = memo(({ id, name, age, sex }) => {
  const [quantity, setQuantity] = useState(0);

  console.log(`🔁 [Card ${id}] Rendered`);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    console.log(`➕ [Card ${id}] Quantity increased to ${quantity + 1}`);
  };

  const handleDecrement = () => {
    setQuantity((prev) => prev - 1);
    console.log(`➖ [Card ${id}] Quantity decreased to ${quantity - 1}`);
  };

  const handleAddToCart = () => {
    console.log(
      `🛒 [Card ${id}] Add to cart clicked with quantity: ${quantity}`
    );
  };

  return (
    <div style={styles.card}>
      <h4>{name}</h4>
      <p>Age: {age}</p>
      <p>Sex: {sex}</p>
      <p>Quantity: {quantity}</p>

      <div style={styles.buttonGroup}>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>

      <button style={styles.cartBtn} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
});

// 📦 Main App Component
const App = () => {
  console.log('🔁 [App] Rendered');

  const people = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Person ${i + 1}`,
    age: 20 + (i % 10),
    sex: i % 2 === 0 ? 'Male' : 'Female',
  }));

  return (
    <div style={styles.container}>
      {people.map((person) => (
        <Card key={person.id} {...person} />
      ))}
    </div>
  );
};

// 💄 Styles
const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  card: {
    border: '1px solid gray',
    borderRadius: '8px',
    padding: '10px',
    width: '160px',
    backgroundColor: '#f9f9f9',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '8px 0',
  },
  cartBtn: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '6px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  },
};

export default App;
