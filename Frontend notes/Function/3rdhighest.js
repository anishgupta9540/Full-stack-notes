const numbers = [12, 23, 45, 67, 876, 44, 23, 500];

let fmax = -Infinity;
let smax = -Infinity;
let tmax = -Infinity;

for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] > fmax) {
        tmax = smax; // Previous second max becomes the third max
        smax = fmax; // Previous first max becomes the second max
        fmax = numbers[i]; // Current number is the new first max
    } else if (numbers[i] > smax && numbers[i] !== fmax) {
        tmax = smax; // Previous second max becomes the third max
        smax = numbers[i]; // Current number is the new second max
    } else if (numbers[i] > tmax && numbers[i] !== fmax && numbers[i] !== smax) {
        tmax = numbers[i]; // Current number is the new third max
    }
}

console.log("Third highest number:", tmax);