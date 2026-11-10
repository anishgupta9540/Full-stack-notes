Generic function
A generic function in TypeScript (TSX) is a function that can work with multiple types, instead of being restricted to a single type. This helps make the function more flexible and reusable, while still maintaining type safety.

function identity<T>(value: T): T {
  return value;
}

// Usage
const num = identity<number>(10);    // num is type number
const str = identity("hello");       // TypeScript infers T as string