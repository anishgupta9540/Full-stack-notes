DeepCopy

function deepClone(obj) {
  // Check if the value is not an object (primitive types)
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Create a new array or object depending on the input
  const clone = Array.isArray(obj) ? [] : {};

  // Recursively copy properties
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

// Example usage
const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);
copy.b.c = 99;

console.log(original.b.c); // Should still be 2