// const nestedArray = [1, [2, 3], [4, [5, 6]], 7];

// const flatArray = nestedArray.reduce((acc, curr) => {
//   return acc.concat(Array.isArray(curr) ? curr : [curr]);
// }, []);

// console.log(flatArray);  // [1, 2, 3, 4, [5, 6], 7]


const nestedArray = [1, [2, 3], [4, [5, 6]], 7];

function flattenArray(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            // If item is an array, recursively flatten it
            result = result.concat(flattenArray(item));
        } else {
            // If it's not an array, just add it
            result.push(item);
        }
    }

    return result;
}

const flatArray = flattenArray(nestedArray);
console.log(flatArray);  // [1, 2, 3, 4, 5, 6, 7]





// flate nested [[[]]] to [] //Good question

// const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
// function flattenArray(arr) {
//     let result = [];

//     for (let item of arr) {
//         if (Array.isArray(item)) {
//             // If item is an array, recursively flatten it
//             result = result.concat(flattenArray(item));
//         } else {
//             // If it's not an array, just add it
//             result.push(item);
//         }
//     }
//     return result;
// }
// const flatArray = flattenArray(nestedArray);
// console.log(flatArray);  // [1, 2, 3, 4, 5, 6, 7]
