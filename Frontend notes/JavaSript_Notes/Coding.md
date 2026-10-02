find Odd/even and also find between 1 to 100 and also find alternate odd and even in the given range
----------------------------------------------------------------------------------------------
Prime number and alternate Prime number between 1 to 100
----------------------------------------------------------------------------------------------
Count all char

const datas="hello my name is chacha";
const result=datas.split("").reduce((accu,curr)=>{
    accu[curr] = (accu[curr] || 0)+1;
    return accu;
},{});
console.log(result);
----------------------------------------------------------------------------------------------
Count targeted words

const datas = "hello I love my country country country";
const target = "country";
const finaldata = datas.split(" ").reduce((accu, curr) => {
    if (curr === target) {
        accu.push(curr);
    }
    return accu;
}, []); // Changed from {} to []

console.log(finaldata); // ["country", "country", "country"]
----------------------------------------------------------------------------------------------
extract duplicate    //Good question

const datas = "hello hello chacha chacha is india";
const counter = datas.split(" ").reduce((accu, curr) => {
    accu[curr] = (accu[curr] || 0) + 1;
    return accu;
}, {});

let result = [];
for (let item in counter) {
    if (counter[item] > 1) {
        result.push(item);
    }
}
console.log(result); // ["hello", "chacha"]
----------------------------------------------------------------------------------------------
make 1st char alphabate of string

const datas = "hello my name is chacha";
const result = datas.split(" ").map((word) => 
  word[0].toUpperCase() + word.slice(1)
);
console.log(result);
----------------------------------------------------------------------------------------------
extract vovel and count each vovel and also count total vovel //good

const datas="hello my name is anish";
const target=/[aeiou]/g;
const result=datas.match(target);
console.log(result);

//for counting 
const counter=result.reduce((accu,curr)=>{
    accu[curr] = (accu[curr] ||0)+1;
    return accu;
},{});
console.log(counter);
----------------------------------------------------------------------------------------------
extract the word with contains vovel from string

const datas = "hello my name is chacha and anish";
// Define the vowels
const vowels = "aeiouAEIOU";
// Split sentence into words
const words = datas.split(" ");
// Map through each word and count vowels
const vowelCounts = words.map(word => {
  const count = [...word].filter(char => vowels.includes(char)).length;
  return { word, vowelCount: count };
});
// Display the result
console.log(vowelCounts);
----------------------------------------------------------------------------------------------
extract the words which contains 2 vovel from string
----------------------------------------------------------------------------------------------
count only vovel from string
----------------------------------------------------------------------------------------------
count vovel and also count non repeted vovel
1st highest number 
2nd highest number 
3rd highest number
----------------------------------------------------------------------------------------------
Palindrome of words
function isPalindrome(str) {
    // Normalize string: remove spaces and convert to lowercase
    const cleaned = str.replace(/\s/g, '').toLowerCase();
    // Reverse the string
    const reversed = cleaned.split('').reverse().join('');
    
    return cleaned === reversed;
}
// Example usage
console.log(isPalindrome("madam"));        // true
console.log(isPalindrome("nurses run"));   // true
console.log(isPalindrome("hello"));        // false
----------------------------------------------------------------------------------------------
Anagram
function isAnagram(str1, str2) {
    const normalize = str => str.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
// Example usage
console.log(isAnagram("listen", "silent"));    // true
console.log(isAnagram("hello", "world"));      // false
----------------------------------------------------------------------------------------------
Armstrong number
function isArmstrong(num) {
    const digits = num.toString().split('');
    const power = digits.length;

    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);

    return sum === num;
}

// Example usage
console.log(isArmstrong(153));   // true
console.log(isArmstrong(370));   // true
console.log(isArmstrong(9474));  // true
console.log(isArmstrong(123));   // false
----------------------------------------------------------------------------------------------
fibonacci series
function App(number) {
    const fib = [1, 2];
    for (let i = 2; i < number; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
console.log(App(8));  // Output: [1, 2, 3, 5, 8, 13, 21, 34]
----------------------------------------------------------------------------------------------
I love Apple reverse Apple words
I love Apple reverse line and also reverse alternate words
----------------------------------------------------------------------------------------------
find longest word from string //Imp

const datas = "hello my name is chacha";
let data = datas.split(' ');
const maxlength = Math.max(...data.map((datalength) => datalength.length));
const result = data.filter((finalres) => finalres.length === maxlength);
console.log(result);
----------------------------------------------------------------------------------------------
counter word and counter character
remove vovel and count vovel from sentence
find unique number from an array
find unique duplicate number from an array
find missing letter 
function for date and currency formate 
random name generator 
random message generator 
make a counter in js 
function for sum eg sum(1,2,3,4,...);
password strength generator 
shuffle array
find missing number 
3rd largest words from string 
----------------------------------------------------------
const data=[2,3,4,5,6,7,8];
find pair whose sum is 9 in pairs 
----------------------------------------------------------
const data=[414,543,2444,44,478,4,24];
extract words with starting with 4
extract word which is ending with 4 and find their avg
----------------------------------------------------------
const country=['India','itly','Russia'];
find max country and reverse 
----------------------------------------------------------
create a function that has two parameter 
input: 
1>array that represent the price of the item
2>Total budget price 
----------------------------------------------------------
input: welcomes
output: W$e$L$c$O$m$E

const input = "welcomes";

// Take only the first 7 characters
const sliced = input.slice(0, 7);

const result = sliced
  .split('')
  .map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
  .join('$');

console.log(result); // Output: W$e$L$c$O$m$E

const input = "welcomes";

// Take only the first 7 characters
const sliced = input.slice(0, 7);

// Convert each character to uppercase and join with "$"
const result = sliced
  .split('')
  .map(char => char.toUpperCase())
  .join('$');

console.log(result); // Output: W$E$L$C$O$M$E
----------------------------------------------------------
const data='swiss';
find 2nd non repetative charctor 
----------------------------------------------------------
input: [111,114,214,3214,222,333]
output: extract end with 4
----------------------------------------------------------
Reverse String 
input: hello india
output: india hello
----------------------------------------------------------
const employees = [
  { id: 1, name: 'Alice', department: 'Sales', role: 'Manager' },
  { id: 2, name: 'Bob', department: 'Sales', role: 'Salesperson' },
  { id: 3, name: 'Charlie', department: 'HR', role: 'Recruiter' },
  { id: 4, name: 'David', department: 'Sales', role: 'Salesperson' },
  { id: 5, name: 'Eve', department: 'HR', role: 'Manager' },
  { id: 6, name: 'Frank', department: 'IT', role: 'Developer' },
  { id: 7, name: 'Grace', department: 'IT', role: 'System Admin' },
  { id: 8, name: 'Hannah', department: 'Sales', role: 'Salesperson' }
];
find with deparment 
remove duplciate 
----------------
const groupedByDepartment = employees.reduce((acc, employee) => {
  const { department } = employee;
  if (!acc[department]) {
    acc[department] = [];
  }
  acc[department].push(employee);
  return acc;
}, {});
console.log(groupedByDepartment);
----------------
const uniqueByDepartment = [];
const seenDepartments = new Set();

for (const emp of employees) {
  if (!seenDepartments.has(emp.department)) {
    uniqueByDepartment.push(emp);
    seenDepartments.add(emp.department);
  }
}

console.log(uniqueByDepartment);
----------------
Methos2
const uniqueByDepartment = employees.reduce((acc, emp) => {
  if (!acc.some(e => e.department === emp.department)) {
    acc.push(emp);
  }
  return acc;
}, []);

console.log(uniqueByDepartment);
-----------------------------------------------------------------------------------------------
const data="I Love My India";
output = ILMI

const data = "I Love My India";
let output = "";

// First letter is always the start of a word
output += data[0];

for (let i = 1; i < data.length; i++) {
  // If the current character is a space,
  // then the next character is the start of a new word
  if (data[i] === ' ' && data[i + 1] !== ' ') {
    output += data[i + 1];
  }
}

console.log(output); // Output: ILMI

Alternate

const data = "I Love My India";

const output = data
  .split(" ")         // Split the string into words
  .map(word => word[0]) // Take the first character of each word
  .join("");           // Join them together

console.log(output); // Output: ILMI
-----------------------------------------------------------------------------------------------
Flat object 

function flattenObject(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

// Example:
const user = {
  name: 'John',
  address: {
    city: 'New York',
    zip: 10001
  }
};

const flatUser = flattenObject(user);
console.log(flatUser);
// Output: { 'name': 'John', 'address.city': 'New York', 'address.zip': 10001 }


