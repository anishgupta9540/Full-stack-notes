In **React + TypeScript (TSX)**, both **`type`** and **`interface`** are used to define the **shape of props, state, objects, functions, etc.**
They look similar, but they have **important differences**.

I’ll explain **clearly + with React examples** 👇

---

## 1️⃣ What is `interface`?

`interface` is mainly used to define **object shapes** and is very common in **React props & state**.

### ✅ Example: React Props using `interface`

```tsx
interface UserProps {
  name: string;
  age: number;
  isAdmin?: boolean; // optional
}

const User: React.FC<UserProps> = ({ name, age, isAdmin }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {isAdmin && <p>Admin User</p>}
    </div>
  );
};
```

---

## 2️⃣ What is `type`?

`type` is more **powerful and flexible**.
It can define:

* objects
* unions
* intersections
* function types
* tuples
* primitives

### ✅ Example: React Props using `type`

```tsx
type UserProps = {
  name: string;
  age: number;
  isAdmin?: boolean;
};

const User: React.FC<UserProps> = ({ name, age, isAdmin }) => {
  return <h2>{name}</h2>;
};
```

👉 Looks same as `interface`, but power differs.

---

## 3️⃣ Key Differences (Very Important ⭐)

| Feature                       | `interface`   | `type`        |       |
| ----------------------------- | ------------- | ------------- | ----- |
| Used for objects              | ✅ Yes         | ✅ Yes         |       |
| Can define union (`           | `)            | ❌ No          | ✅ Yes |
| Can define intersection (`&`) | ❌ No          | ✅ Yes         |       |
| Declaration merging           | ✅ Yes         | ❌ No          |       |
| Extending                     | `extends`     | `&`           |       |
| Functions & primitives        | ❌ No          | ✅ Yes         |       |
| Preferred for React props     | ✅ Very common | ✅ Also common |       |

---

## 4️⃣ Declaration Merging (Big Difference)

### 🔹 Interface supports merging

```ts
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const user: Person = {
  name: "Anish",
  age: 25
};
```

✅ TypeScript **automatically merges** both interfaces.

---

### 🔹 Type does NOT support merging ❌

```ts
type Person = {
  name: string;
};

// ❌ Error: Duplicate identifier
type Person = {
  age: number;
};
```

---

## 5️⃣ Extending: `interface` vs `type`

### 🔹 Interface extends interface

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
```

---

### 🔹 Type uses intersection (`&`)

```ts
type Animal = {
  name: string;
};

type Dog = Animal & {
  breed: string;
};
```

---

## 6️⃣ Union Types (Only possible with `type`)

Very common in React ⚛️

### ✅ Example: Button variants

```ts
type ButtonVariant = "primary" | "secondary" | "danger";

type ButtonProps = {
  variant: ButtonVariant;
  text: string;
};
```

❌ This is **NOT possible with interface**

---

## 7️⃣ Function Types (Better with `type`)

```ts
type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
```

---

## 8️⃣ Which should YOU use in React TSX? 🤔

### ✅ Best Practice (Industry Style)

✔ **Use `interface` when:**

* Defining **React props**
* Defining **component state**
* Working with **object shapes**
* You expect **extension or merging**

✔ **Use `type` when:**

* You need **union types**
* You need **function types**
* You need **complex types**
* Working with **Redux / API responses**

---

## 9️⃣ Real Project Recommendation 🚀

```ts
// Props → interface
interface LoginProps {
  email: string;
  password: string;
}

// Utility types → type
type ApiStatus = "idle" | "loading" | "success" | "error";
```

---

## 🔑 Final One-Line Difference

> **`interface` = best for objects & React props**
> **`type` = best for unions, functions & complex logic**

If you want, I can also:

* explain this in **very simple Hindi 🇮🇳**
* show **Redux + interface/type usage**
* show **real interview questions**

Just tell me 👍
