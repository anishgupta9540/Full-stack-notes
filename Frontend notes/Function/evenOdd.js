function evenOdd(number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(evenOdd(2));
console.log(evenOdd(3));


let evenNumber = [];

for (let i = 0; i <= 100; i++) {
    if (evenOdd([i])) {
        evenNumber.push(i)
    }
}

console.log(evenNumber)