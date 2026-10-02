interface and type difference among them 
define array and object in typescript 
what are the basic type of typescript
diff between union and intersection
what is Enum
Generic function
Decorator
-----------------------------------------------------------------------------------------------------------------------------------------------------------
Enum
An enum (short for enumeration) is used to define a collection of related values that can be numeric or string-based.
-----------------------------------------------------------------------------------------------------------------------------------------------------------
Here's a **tabular comparison** of `interface` vs `type` in **TypeScript**:

| Feature                     | `interface`                               | `type`                                       |                          |
| --------------------------- | ----------------------------------------- | -------------------------------------------- | ------------------------ |
| **Usage**                   | Describes the **shape** of an object      | Can describe object shapes **and more**      |                          |
| **Extending**               | Can **extend** other interfaces or types  | Can **extend** interfaces or types using `&` |                          |
| **Declaration Merging**     | ✅ Supported                               | ❌ Not supported                              |                          |
| **Syntax**                  | `interface Person { name: string }`       | `type Person = { name: string }`             |                          |
| **Union & Intersection**    | ❌ Can’t define unions                     | ✅ Supports union (\`                         | `) & intersection (`&\`) |
| **Primitive Types**         | ❌ Can't define primitive aliases          | ✅ Can define primitive, tuple, union types   |                          |
| **Mapped Types**            | ❌ Not supported                           | ✅ Supported                                  |                          |
| **Implementation by Class** | ✅ Can be implemented by classes           | ✅ Can be used, but not directly implemented  |                          |
| **Reopening / Merging**     | ✅ Can be declared multiple times (merged) | ❌ Cannot be reopened or merged               |                          |
| **Better For**              | Object-oriented, extensible structures    | Complex type definitions and unions          |                          |
---
### ✅ Summary:

* Use `**interface**` when you're modeling the **shape of objects**, especially in **OOP**.
* Use `**type**` when you need **unions, primitives**, or **more flexible combinations**.

Let me know if you'd like visual examples too!
-----------------------------------------------------------------------------------------------------------------------------------------------------------
what are the basic type of typescript
number
string
boolean
array
tuple
enum
any 
unknown
void 
null 
undefine 
never
object
-----------------------------------------------------------------------------------------------------------------------------------------------------------
union example and intersection

// Union
type A = { name: string };
type B = { age: number };
type U = A | B;

const person1: U = { name: "Alice" }; // ✅
const person2: U = { age: 30 };       // ✅

// Intersection
type I = A & B;

const person3: I = { name: "Bob", age: 25 }; // ✅
const person4: I = { name: "Eve" };          // ❌ Missing age
-------------------------------------------------------------------------------------------
interface User {
  id: number;
  name: string;
  email: string;
}

const user1: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};
-------------------------------------------------------------------------------------------
type User = {
  id: number;
  name: string;
  email: string;
};

const user1: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};
-------------------------------------------------------------------------------------------
generic function

function identity<T>(arg: T): T {
  return arg;
}

let myNumber = identity<number>(5);
let myString = identity<string>("hello");
let myBool = identity(true); // Type inference

