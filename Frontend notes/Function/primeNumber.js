function prime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % 2 === 0) {
            return false;
        }
    }
    return true
}

console.log(prime(11));
console.log(prime(12));

//Prime number between 1 to 100
for (let i = 0; i <= 100; i++) {
    if (prime(i)) {
        console.log(i);
    }
}

//Alternate Prime number between 1 to 100
let count = 0;
for (let i = 1; i <= 100; i++) {
    if (prime(i)) {
        if (count % 2 === 0) {
            console.log(i);
        }
        count++;
    }
}