react 
timmer with start pause reset and stop button
when you contextapi and redutoolkit in application
Diff between react.memo and higherordercomponent in reactjs
-------------------------------------------------------
jest
unittest for any application write how can achive it
-------------------------------------------------------
js
currying function
factory function
without inheritance acces other object can you write in js
exmaple for prototype to acess other object in js 
without using map can you build your own map
-------------------------------------------------------
suppose we have three api call 
one fulfil in 0.8ms
other get rejected 
third one passed in 0.2millisecond
I want to use data of thirdone which passed how you can achive it

ans => Promise.any 
-------------------------------------------------------
js coding question
let arr=[];

function App(strdata){
    arr.push(1);
    console.log(strdata);
}

App(strdata);
console.log(arr)
-------------------------------------------------------
tsx
type and interference 
any and unknown
-------------------------------------------------------
css
grid flex
em rem ex diff among them


Function with multiple arguments is transformed into a series of functions that each take one argument.
 
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}

curriedAdd(2)(3); // 5
------------------------------------------------------------------
A factory function is any function that returns a new object. It’s an alternative to using classes or constructor functions for creating multiple similar objects.
for eaxmple

function createUser(name, age) {
  return {
    name: name,
    age: age,
    greet() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
  };
}

const user1 = createUser('Alice', 25);
const user2 = createUser('Bob', 30);

user1.greet(); // Hi, I'm Alice and I'm 25 years old.
user2.greet(); // Hi, I'm Bob and I'm 30 years old.
------------------------------------------------------------------
what is symbol in js 
A symbol is a primitive data type introduce in ECMA6. It is used to create unique and immutable identifiers
for example

const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1 === sym2); // false
console.log(sym1 == sym2); // false
------------------------------------------------------------------
const data = [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' },
    { category: 'vegetable', name: 'carrot' },
    { category: 'fruit', name: 'orange' },
    { category: 'vegetable', name: 'spinach' },
];

const result=data.reduce((accu,curr)=>{
    let dept=curr.category;
    if(!accu[dept]){
        accu[dept]=[];
    };
    accu[dept].push(curr.name);
    return accu;
},{});

console.log(result);