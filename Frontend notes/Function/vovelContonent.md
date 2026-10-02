const data = "hello my name is chahca";

// Convert to lowercase and remove non-alphabetic characters
const cleaned = data.toLowerCase().replace(/[^a-z]/g, '');

let vowels = 0;
let consonants = 0;

for (let char of cleaned) {
  if ('aeiou'.includes(char)) {
    vowels++;
  } else {
    consonants++;
  }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
--------------------------------------------------------------------------
without inbuild method 

const data = "hello my name is chahca";

// Define vowel characters
const vowelChars = ['a', 'e', 'i', 'o', 'u'];
let vowels = 0;
let consonants = 0;

// Loop through each character
for (let i = 0; i < data.length; i++) {
  let ch = data[i];

  // Convert uppercase to lowercase manually
  if (ch >= 'A' && ch <= 'Z') {
    ch = String.fromCharCode(ch.charCodeAt(0) + 32); // A-Z to a-z
  }

  // Check if character is a lowercase alphabet letter
  if (ch >= 'a' && ch <= 'z') {
    // Check if it's a vowel
    let isVowel = false;
    for (let j = 0; j < vowelChars.length; j++) {
      if (ch === vowelChars[j]) {
        isVowel = true;
        break;
      }
    }

    if (isVowel) {
      vowels++;
    } else {
      consonants++;
    }
  }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
------------------------------------------
const input = "Hello my name is Chacha";

// Convert to lowercase and remove non-alphabet characters
const cleanInput = input.toLowerCase().replace(/[^a-z]/g, '');

// Define vowels
const vowelsList = ['a', 'e', 'i', 'o', 'u'];

// Arrays to hold vowels and consonants
let vowels = [];
let consonants = [];

for (let char of cleanInput) {
  if (vowelsList.includes(char)) {
    vowels.push(char);
  } else {
    consonants.push(char);
  }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
----------------------------------------------------------
const datas = "my name is chacha";

let result = "";

for (let i = 0; i < datas.length; i++) {
  let ch = datas[i];

  // Compare manually with each vowel
  if (
    ch === 'a' ||
    ch === 'e' ||
    ch === 'i' ||
    ch === 'o' ||
    ch === 'u'
  ) {
    result += ch;
  }
}

console.log("Vowels:", result);  // Output: "aeiaaa"
----------------------------------------------------------
const data = ["anish", "basketball", "baseball"];

const consonantsOnly = data.map(word => {
  return word
    .split('')
    .filter(char => !"aeiou".includes(char.toLowerCase()))
    .join('');
});

console.log(consonantsOnly);
