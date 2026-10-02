function extractAmountsAndTotal(data) {
  const amounts = data.products.map(product => product.amount);
  const total = amounts.reduce((sum, amt) => sum + amt, 0);
  return { amounts, total };
}

// Example usage:
const jsonData = {
  "products": [
    { "id": 1, "name": "Product A", "quantity": 10, "amount": 100.00 },
    { "id": 2, "name": "Product B", "quantity": 20, "amount": 200.00 },
    { "id": 3, "name": "Product C", "quantity": 30, "amount": 300.00 }
  ]
};

const result = extractAmountsAndTotal(jsonData);
console.log(result);

Output:
{
  amounts: [100, 200, 300],
  total: 600
}
----------------------------------------------------------------------------------------