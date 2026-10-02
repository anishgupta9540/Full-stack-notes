const numbers = [12, 23, 45, 67, 876, 44, 23];

let fmax = -Infinity;
let smax = -Infinity;

for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] > fmax) {
        smax = fmax; // The previous first max becomes the second max
        fmax = numbers[i]; // Current number is the new first max
    } else if (numbers[i] > smax && numbers[i] !== fmax) {
        smax = numbers[i]; // Current number is the new second max
    }
}

console.log("Second highest number:", smax);