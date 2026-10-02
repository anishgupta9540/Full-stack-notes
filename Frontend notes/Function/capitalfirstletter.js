// const data = "hello my name is india";

// const result = data.split(' ').map((value, i) => {
//     return value[0].toUpperCase() + value.slice(1).toLowerCase();
// });


// console.log(result);
// --------------------------------------------------------------------------------------------
const data = "hello my name is india";
const words = data.split(' ');

let result = '';

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const capitalized = word[0].toUpperCase() + word.slice(1).toLowerCase();

    result += capitalized;

    // Add space if it's not the last word
    if (i !== words.length - 1) {
        result += ' ';
    }
}

console.log(result);
