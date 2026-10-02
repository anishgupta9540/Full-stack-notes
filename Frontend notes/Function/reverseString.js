// const data = "hello";

// let result = '';

// for (let i = data.length - 1; i >= 0; i--) {
//     result += data[i];
// }

// console.log(result);

// ---------------------------------------
//reverse sentence 
// const data = "hello india is my country";

// const words = data.split(' ');

// ---------------------------------------
// // Swap first and last, moving inward
// let start = 0;
// let end = words.length - 1;

// while (start < end) {
//     // Swap words[start] and words[end]
//     const temp = words[start];
//     words[start] = words[end];
//     words[end] = temp;

//     start++;
//     end--;
// }

// const reversedWords = words.join(' ');
// console.log(reversedWords);



const data = "hello india is my country";
const words = data.split(' ');

let reversedWords = '';
for (let i = words.length - 1; i >= 0; i--) {
    reversedWords += words[i];
    if (i !== 0) {
        reversedWords += ' ';
    }
}

console.log(reversedWords);


