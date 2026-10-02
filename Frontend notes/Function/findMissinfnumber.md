function findMissingNumber(arr) {
  const n = arr.length + 1; // because one number is missing
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// Example
const nums = [1, 2, 4, 5, 6]; // Missing 3
console.log(findMissingNumber(nums)); // Output: 3
------------------------------------------------------------------------
const datas = [1, 2, 5, 7, 9];

const min = Math.min(...datas);
const max = Math.max(...datas);

const missing = [];

for (let i = min; i <= max; i++) {
  if (!datas.includes(i)) {
    missing.push(i);
  }
}

console.log(missing); // [3, 4, 6, 8]

