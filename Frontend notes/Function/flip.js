// let data1 = "hello";
// let data2 = "india";

// let temp = data1;
// data1 = data2;
// data2 = temp;

// console.log(data1);
// console.log(data2);


// also solved by using destructuring 

let data1 = "hello";
let data2 = "india";

[data1, data2] = [data2, data1];

console.log(data1);
console.log(data2);