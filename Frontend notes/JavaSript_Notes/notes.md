note
To create array
Object.values()
Object.keys()
Object.entries()
Object.hasOwnProperty()

To create Object
Object.assign({},array)
spread operator 
Object.from Entries()
Array.prototype.reduce()
for each and for of loops

const result=Array.from(arrayLike,mapFn,thisArg) 
const result=new Set([1,2,2,2,2,4]) it will return object to convert into array use Array.from(result)

Remove duplicate using new Set method and map it

what is new Map in js 
what is Array.from()



-----------------------------------------------------------
const users = [
  { name: "Anish", age: 25 },
  { name: "Ravi" },
  { age: 30 }
];

// Check if each user object has the "age" property
users.forEach((user, index) => {
  if (user.hasOwnProperty("age")) {
    console.log(`User ${index} has age: ${user.age}`);
  } else {
    console.log(`User ${index} does not have age`);
  }
});


User 0 has age: 25
User 1 does not have age
User 2 has age: 30
-----------------------------------------------------------
  const cards = Array.from({ length: 65 }, (_, i) => ({
    id: i,
    title: `Card ${i + 1}`
  }));



