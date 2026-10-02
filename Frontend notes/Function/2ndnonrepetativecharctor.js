// function secondNonRepeatingChar(str) {
//     const charCount = {};

//     // First, count the occurrences of each character
//     for (let char of str) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     // Now, iterate the string again to find the 2nd non-repeating character
//     let nonRepeatingCount = 0;
//     for (let char of str) {
//         if (charCount[char] === 1) {
//             nonRepeatingCount++;
//             if (nonRepeatingCount === 2) {
//                 return char;
//             }
//         }
//     }

//     // If there is no 2nd non-repeating character
//     return null;
// }

// // Example usage:
// console.log(secondNonRepeatingChar("swiss")); // Output: "w"
// -------------------------------------------------------------------------------

function secondNonRepeatingChar(str) {
    let charCount = {};

    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let nonRepeatingChars = [];

    // Find non-repeating characters
    for (let char in charCount) {
        if (charCount[char] === 1) {
            nonRepeatingChars.push(char);
        }
    }

    // Return the 2nd non-repeating character if it exists
    return nonRepeatingChars.length >= 2 ? nonRepeatingChars[1] : null;
}

console.log(secondNonRepeatingChar("swiss"));  // "i"

// -------------------------------------------------------------------------------
// const datas="hello hello ram chacha india india";

// const data=datas.split(' ');

// const finaldata=data.reduce((accu,curr)=>{
//     accu[curr] = (accu[curr] || 0)+1;
//     return accu;
// },{});


// let nonrep=[];

// for(let fdata in finaldata){
//     if(finaldata[fdata] ===1){
//         nonrep.push(fdata)
// }
//     }
    

// console.log(nonrep[1]);