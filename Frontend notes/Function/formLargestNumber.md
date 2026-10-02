function formLargestNumber(arr) {
  if (!arr || arr.length === 0) return "";

  // Convert all numbers to strings
  const strArr = arr.map(String);

  // Custom sort: compare combined values
  strArr.sort((a, b) => (b + a).localeCompare(a + b));

  // Join the sorted array
  const result = strArr.join("");

  // Handle all zero case
  return result[0] === "0" ? "0" : result;
}

const input = [3, 30, 34, 5, 9];
console.log(formLargestNumber(input)); // Output: "9534330"

module.exports = formLargestNumber;
