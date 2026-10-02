function getRandomName() {
const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Ethan', 'Fiona', 'George', 'Hannah'];
const randomIndex = Math.floor(Math.random() \* names.length);
return names[randomIndex];
}

// Example usage:
console.log(getRandomName()); // Outputs a random name

---

function generateRandomName(length = 6) {
const letters = "abcdefghijklmnopqrstuvwxyz";
let name = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        const letter = letters[randomIndex];
        name += i === 0 ? letter.toUpperCase() : letter; // First letter uppercase
    }

    return name;

}

// Example usage:
console.log(generateRandomName()); // Output: "Liratu" or "Zomeki"

---

function getRandomNumber(min, max) {
return Math.floor(Math.random() \* (max - min + 1)) + min;
}

// Example usage:
console.log(getRandomNumber(1, 100)); // Random number between 1 and 100

---

function generateNumericOTP(length = 6) {
let otp = "";
for (let i = 0; i < length; i++) {
otp += Math.floor(Math.random() \* 10); // digits 0-9
}
return otp;
}

## console.log(generateNumericOTP()); // Example output: "384920"

//random number generator
//random name generator
//random otp generator
