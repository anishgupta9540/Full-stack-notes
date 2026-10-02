const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];


let finaldata = [];

for (let i = 0; i <= array1.length - 1; i++) {
    finaldata.push(array1[i])
}

for (let i = 0; i <= array2.length - 1; i++) {
    finaldata.push(array2[i])
}

console.log(finaldata);
