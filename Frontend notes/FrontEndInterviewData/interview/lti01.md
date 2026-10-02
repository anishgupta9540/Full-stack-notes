using yarn commpand how will you check what are all the packages install in our react application
using yarm how to clean up unused or old version of packages in react app
will you delete package.json and packages.lock.json from your react application


build one app;lication with one slect tab with (odd,fibonacci series) and one input field no button for submit  
(useEffect we need to use)
-------------------------------------------------------------------------------------
let finalresult=[];

for(let i=0;i<=data.length-1;i++){
    console.log(data[i]);
    for(j=data[i];j<=data.length;j++){
        let ch="aeiou";
        console.log(data [i] [j]);
        const result=data[j].includes(ch);
    };
    finalresult.push(result);
};
-------------------------------------------------------------------------------------
import React from 'react';
// import "./style.css";
import { useState } from 'react';

//create userform
//two field 1>nnumber field 2>drop dopwn field(odd,fibonacci)

const users = ['odd', 'fibonacci'];

export default function App() {
  const [datas, setDatas] = useState();
  const [result, setResult] = useState([]);
  const [valueData, setValueData] = useState([]);
  const [finalresult, setFinalresult] = useState([]);

  // console.log('valueData', valueData);
  // console.log('datas', valueData);

  console.log(finalresult);

  function fibdata(datas) {
    const fib = [1, 2];
    for (let i = 2; i < datas; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }

  // console.log(fibdata(10));

  const handleSubmit = () => {
    setResult([...result, datas]);
    if (valueData === 'odd') {
      const odddata = Number(result) % 2 !== 0;
      setFinalresult('this is even number');
    } else if (valueData === 'fibonacci') {
      const finresult = fibdata(datas);
      setFinalresult(finresult);
    }
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input
        type="number"
        value={datas}
        onChange={(e) => setDatas(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <select value={valueData} onChange={(e) => setValueData(e.target.value)}>
        <option>--select---</option>
        {users.map((items, index) => {
          return <option key={index}>{items}</option>;
        })}
      </select>
    </div>
  );
}
------------------
const data = ["anish", "basketball", "baseball"];

const consonantsOnly = data.map(word => {
  return word
    .split('')
    .filter(char => !"aeiou".includes(char.toLowerCase()))
    .join('');
});

console.log(consonantsOnly);
-------------------------------------------------------------------------
alternate without es6 feature
const data = ["anish", "basketball", "baseball"];

const vowels = "aeiouAEIOU";

for (let i = 0; i < data.length; i++) {
    let word = data[i];
    let onlyVowels = "";
    let remainingChars = "";

    for (let j = 0; j < word.length; j++) {
        let ch = word[j];
        if (vowels.includes(ch)) {
            onlyVowels += ch;
        } else {
            remainingChars += ch;
        }
    }

    console.log(`Original: ${word}`);
    console.log(`Vowels: ${onlyVowels}`);
    console.log(`Remaining: ${remainingChars}`);
    console.log('--------------------');
}
---------------------------------------------------------------------
probnlem based on vovel



Here are **10 JavaScript problems** based on extracting or working with **vowels from an array of strings**. These are great for beginners to practice loops, string methods, arrays, and ES6 features:

---

### **1. Extract Vowels from Each Word**

**Problem**: Given an array of words, return an array of arrays containing only the vowels from each word.
**Example**: `["apple", "grape"]` → `[["a", "e"], ["a", "e"]]`

---

### **2. Count Total Vowels in the Array**

**Problem**: Count how many total vowels are present in all the words combined.
**Example**: `["apple", "grape"]` → `4`

---

### **3. Remove Vowels from Each Word**

**Problem**: Return a new array where each word has all vowels removed.
**Example**: `["apple", "grape"]` → `["ppl", "grp"]`

---

### **4. Words with More Than 2 Vowels**

**Problem**: Return words that have more than 2 vowels.
**Example**: `["apple", "banana", "sky"]` → `["apple", "banana"]`

---

### **5. Find Words Starting and Ending with Vowels**

**Problem**: Return the words that start and end with a vowel.
**Example**: `["apple", "orange", "grape"]` → `["apple", "orange"]`

---

### **6. Replace Vowels with `*`**

**Problem**: Replace all vowels in each word with `*`.
**Example**: `["apple", "grape"]` → `["*ppl*", "gr*p*"]`

---

### **7. Return First Vowel from Each Word**

**Problem**: Return the first vowel found in each word (if any).
**Example**: `["apple", "grape", "sky"]` → `["a", "a", null]`

---

### **8. Words with Only Vowels**

**Problem**: Return words that consist of only vowels.
**Example**: `["aeiou", "apple", "oo"]` → `["aeiou", "oo"]`

---

### **9. Sort Words by Number of Vowels**

**Problem**: Sort the array of words by how many vowels each word contains (descending).
**Example**: `["apple", "banana", "kiwi"]` → `["banana", "apple", "kiwi"]`

---

### **10. Group Words by Vowel Count**

**Problem**: Group the words based on how many vowels they have.
**Example**:
Input: `["apple", "grape", "banana"]`
Output:

```js
{
  2: ["apple", "grape"],
  3: ["banana"]
}
```

---

Let me know which ones you'd like implemented in ES6 or explained in depth!
