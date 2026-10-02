const data = [10, 20, 30, 40, 40, 40, 50];
const finaldata = [];

for (let i = 0; i < data.length - 1; i++) {
    if (!finaldata.includes(data[i])) {
        finaldata.push(data[i])
    }
}
console.log(finaldata);
-----------------------------------------------------------------
const data = [10, 20, 30, 40, 40, 40, 50];

let uniqueData = [];

for (let i = 0; i < data.length; i++) {
    let isDuplicate = false;

    // Check if data[i] already exists in uniqueData
    for (let j = 0; j < uniqueData.length; j++) {
        if (data[i] === uniqueData[j]) {
            isDuplicate = true;
            break;
        }
    }

    // If not duplicate, push it
    if (!isDuplicate) {
        uniqueData.push(data[i]);
    }
}

console.log(uniqueData);
-----------------------------------------------------------------
//use filter method also for above question

const data = [10, 20, 30, 40, 40, 40, 50];

const result=data.filter((item,index,array)=>array.indexOf(item) === index);

console.log(result);
-----------------------------------------------------------------------------------------------
extract duplicate    //Good question
Approach: Use a frequency map

const data = [1, 1, 1, 1, 2, 2, 2, 3, 4, 4];

let countresult = {};
let final = [];

for (let countdata of data) {
    countresult[countdata] = (countresult[countdata] || 0) + 1;
}

for (let finaldata in countresult) {
    if (countresult[finaldata] > 1) {
        final.push(Number(finaldata)); // convert back to number if needed
    }
}

console.log(final);

Alternative (Using filter + indexOf/lastIndexOf) – unique duplicates only:
const data = [1, 1, 1, 1, 2, 2, 2, 3, 4, 4];

const duplicates = [...new Set(
  data.filter((item, index, arr) => arr.indexOf(item) !== index)
)];

console.log(duplicates);  // Output: [1, 2, 4]