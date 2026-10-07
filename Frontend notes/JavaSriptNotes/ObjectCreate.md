object literal 
const obj={name:"Anish", age:25}
-------------------------------------------
new Object
const obj=new Object();
obj.name="anish";
obj.age=25;
-------------------------------------------
using constructor function
function Person(name,age){
this.name=name;
this.age=age;
}
const obj = new Person('Anish',25);
-------------------------------------------
es6 class 
class Person{
constructor(name,age){
this.name=name;
this.age=age;
}
}
const obj=new Person('Anish',25);
-------------------------------------------
Object.create()
const proto = { greet() { console.log('Hello'); } };
const obj = Object.create(proto);
obj.name = 'Anish';
-------------------------------------------
using Factory Function
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hi, I am ${this.name}`);
    }
  };
}
const obj = createPerson('Anish', 25);
-------------------------------------------

In **JavaScript**, objects can be created in **multiple ways**. Let’s go step by step — from simplest to advanced — so you can clearly see **all the possible ways** objects can be created.

---

## 🔹 1. **Using Object Literal (Most Common)**

```js
const obj = { name: "Anish", age: 22 };
```

👉 Easiest and most widely used way.

---

## 🔹 2. **Using `new Object()`**

```js
const obj = new Object();
obj.name = "Anish";
obj.age = 22;
```

👉 Creates an empty object and then you add properties.

---

## 🔹 3. **Using Constructor Function**

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Anish", 22);
```

👉 Before ES6 classes, constructor functions were popular.

---

## 🔹 4. **Using ES6 Class**

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person1 = new Person("Anish", 22);
```

👉 Cleaner syntax compared to constructor function.

---

## 🔹 5. **Using `Object.create()`**

```js
const proto = { greet() { return "Hello"; } };
const obj = Object.create(proto);
obj.name = "Anish";
```

👉 Creates a new object with the given prototype.

---

## 🔹 6. **Using `Object.assign()`**

```js
const obj = Object.assign({}, { name: "Anish", age: 22 });
```

👉 Clones or merges properties into a new object.

---

## 🔹 7. **Using Factory Function**

```js
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      return `Hi, I am ${this.name}`;
    }
  };
}
const person1 = createPerson("Anish", 22);
```

👉 A function that returns a new object.

---

## 🔹 8. **Using Singleton with `new function()`**

```js
const obj = new function() {
  this.name = "Anish";
  this.age = 22;
};
```

👉 Rarely used, but possible.

---

## 🔹 9. **Using JSON**

```js
const obj = JSON.parse('{"name":"Anish","age":22}');
```

👉 Useful when data comes from APIs.

---

## 🔹 10. **Using `Object.fromEntries()`**

```js
const entries = [["name", "Anish"], ["age", 22]];
const obj = Object.fromEntries(entries);
```

👉 Converts key-value pairs into an object.

---

✅ **Summary:**
Objects can be created in **10 main ways**:

1. Object Literal
2. `new Object()`
3. Constructor Function
4. Class
5. `Object.create()`
6. `Object.assign()`
7. Factory Function
8. Singleton (`new function()`)
9. JSON (`JSON.parse`)
10. `Object.fromEntries()`

---

Do you want me to also explain **how they differ internally (prototype chain, performance, use cases)**, or should I just keep it at this list?
