function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Use two pointers, one at the beginning and one at the end
    let left = 0;
    let right = cleanStr.length - 1;

    // Iterate while the left pointer is less than the right pointer
    while (left < right) {
        // If the characters at the pointers don't match, it's not a palindrome
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }
        // Move the pointers towards the center
        left++;
        right--;
    }

    // If the loop completes without finding any mismatches, it's a palindrome
    return true;
}

// Examples
console.log(isPalindrome("racecar"));   // Output: true
console.log(isPalindrome("hello"));     // Output: false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("Was it a car or a cat I saw?")); // Output: true
console.log(isPalindrome(" "));         // Output: true




// A **palindrome** is a word, number, or string that reads the **same forward and backward**.

// Examples:
// 👉 `"madam"`, `"level"`, `"121"`, `"racecar"`

// ---

// ## ✅ Simple Palindrome Check in JavaScript (String)

// ```js
// function isPalindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false
// ```

// ---

// ## ✅ Palindrome with Case & Space Handling (Real-world use)

// ```js
// function isPalindrome(str) {
//   const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   const reversed = cleaned.split("").reverse().join("");
//   return cleaned === reversed;
// }

// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// ```

// ---

// ## ✅ Palindrome for Numbers

// ```js
// function isNumberPalindrome(num) {
//   const str = num.toString();
//   return str === str.split("").reverse().join("");
// }

// console.log(isNumberPalindrome(121)); // true
// console.log(isNumberPalindrome(123)); // false
// ```

// ---

// ## ✅ Using Loop (Without `reverse()` – Interview Friendly)

// ```js
// function isPalindrome(str) {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// console.log(isPalindrome("racecar")); // true
// ```

// ---

// ### 💡 Interview Tip

// * `reverse()` method → **easy**
// * Two-pointer loop → **optimized & preferred in interviews**

// If you want:

// * 🔹 **Palindrome in array**
// * 🔹 **Longest palindrome**
// * 🔹 **Explain line-by-line**

// Tell me 👍
