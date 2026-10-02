Perfect — now you want a **clean, standard folder structure**
Let’s break your one big file into proper React project structure ✅

### 📁 Recommended folder structure

```
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── cart/
│       ├── cartSlice.js
│       └── CartComponent.jsx
│
├── App.jsx
└── index.js
```

Now here’s **ALL the code** split properly 👇

---

### **src/app/store.js**

```js
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
```

---

### **src/features/cart/cartSlice.js**

```js
// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Wireless Mouse', price: 25.99, quantity: 2, category: 'Electronics' },
    { id: 2, name: 'Bluetooth Headphones', price: 59.99, quantity: 1, category: 'Electronics' },
    { id: 3, name: 'Coffee Mug', price: 9.49, quantity: 4, category: 'Kitchenware' },
    { id: 4, name: 'Notebook', price: 3.99, quantity: 3, category: 'Stationery' },
    { id: 5, name: 'Running Shoes', price: 89.99, quantity: 1, category: 'Footwear' },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    addItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity, removeItem, addItem } = cartSlice.actions;
export default cartSlice.reducer;
```

---

### **src/features/cart/CartComponent.jsx**

```jsx
// src/features/cart/CartComponent.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from './cartSlice';

const CartComponent = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>🛒 Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id} style={{ marginBottom: '1rem' }}>
              <strong>{item.name}</strong> (${item.price}) x {item.quantity}
              <div style={{ marginTop: '0.5rem' }}>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>{' '}
                <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>{' '}
                <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalAmount}</h3>
    </div>
  );
};

export default CartComponent;
```

---

### **src/App.jsx**

```jsx
// src/App.jsx
import React from 'react';
import CartComponent from './features/cart/CartComponent';

const App = () => {
  return (
    <div>
      <CartComponent />
    </div>
  );
};

export default App;
```

---

### **src/index.js**

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

### ✅ Done — This is **clean, production-like** folder structure

Easier to manage, scale & debug!

---

### ✨ Do you want me to:

* Add **"Add Item Form"** in same structure?
* Or add **SCSS styling**?
  I can show that next if you want!
