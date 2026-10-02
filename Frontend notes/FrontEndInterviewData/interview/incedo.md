ekta.maurya 19:06
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');

You 19:07
a
c
d
b

ekta.maurya 19:09
var a = 5;
console.log(a);

var a = 10;
console.log(a);

let b = 5;
console.log(b);

let b = 10;
console.log(b);

You 19:09
5
10
5
10

ekta.maurya 19:11
console.log(count);
let count=0;
console.log(count);
var count=0;
let arr = [1,2,3];
arr[5] = 6;
console.log(arr);
[ ] == ![ ]  || good

ekta.maurya 19:19
input = [1,2,3,[4,5,[6,7]],8,9]
output  = [1,2,3,4,5,6,7,8,9]
without using flat() and reduce()