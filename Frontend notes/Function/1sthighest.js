const numbers = [12, 23, 435, 56, 33, 45, 67];

let max = numbers[0];

for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] > max) {
        max = numbers[i]
    }
}

console.log(max);
