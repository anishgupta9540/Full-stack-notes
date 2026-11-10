In **TypeScript (TS)**, a **datatype** means the kind of value a variable, function, or object can hold. TypeScript is a **typed superset of JavaScript**, so it adds these type-checking features on top of normal JS.

---

## 🔹 Categories of Data Types in TypeScript

### 1. **Primitive Types (Basic types)**

These are the simplest data types.

```ts
let age: number = 25;          // number type
let username: string = "Anish"; // string type
let isLoggedIn: boolean = true; // boolean type
let notDefined: undefined;      // undefined type
let empty: null = null;         // null type
let anyValue: any = "Hello";    // any type (can be anything)
```

---

### 2. **Special Types**

* **any** → Disables type checking (use carefully).
* **unknown** → Similar to `any`, but safer (forces type checking before use).
* **never** → Represents values that never occur (e.g., error-throwing functions).

```ts
let random: any = 5; 
random = "Hi";  // allowed

let safe: unknown = "Test"; 
// console.log(safe.toUpperCase()); ❌ Error (must check first)

function throwError(): never {
  throw new Error("Something went wrong");
}
```

---

### 3. **Arrays & Tuples**

```ts
let numbers: number[] = [1, 2, 3, 4];
let names: Array<string> = ["Ram", "Shyam", "Sita"]; // alternative syntax

// Tuple → fixed length & types
let person: [string, number] = ["Anish", 21];
```

---

### 4. **Objects**

```ts
let user: { name: string; age: number } = {
  name: "Anish",
  age: 22,
};
```

---

### 5. **Enums (Enumeration)**

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
```

---

### 6. **Union & Intersection Types**

```ts
let id: string | number; // union (can be string OR number)
id = 101;
id = "XYZ";

type Person = { name: string };
type Employee = { id: number };
type Staff = Person & Employee; // intersection (must have both)

let staff: Staff = { name: "Anish", id: 1 };
```

---

### 7. **Type Aliases & Interfaces**

```ts
type User = {
  name: string;
  age: number;
};

interface Employee {
  id: number;
  dept: string;
}

let emp: Employee = { id: 101, dept: "IT" };
```

---

### 8. **Functions**

```ts
function add(a: number, b: number): number {
  return a + b;
}

// void = no return value
function logMessage(msg: string): void {
  console.log(msg);
}
```

---

✅ **Summary Table**

| Category             | Example                         |
| -------------------- | ------------------------------- |
| Primitive            | `string`, `number`, `boolean`   |
| Special              | `any`, `unknown`, `never`       |
| Arrays/Tuples        | `number[]`, `[string, number]`  |
| Objects              | `{ name: string; age: number }` |
| Enums                | `enum Direction { Up, Down }`   |
| Union/Intersection   | `string \| number`, `A & B`     |
| Type Alias/Interface | `type`, `interface`             |
| Functions            | `(): number`, `(): void`        |

---

👉 Do you want me to also show you **how these datatypes look when compiled from TS → JS** (so you can see what TypeScript removes/keeps)?
