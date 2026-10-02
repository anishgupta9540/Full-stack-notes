function isAnagram(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

    // If the lengths are different, they cannot be anagrams
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Create character maps for both strings
    const charMap1 = buildCharMap(cleanStr1);
    const charMap2 = buildCharMap(cleanStr2);

    // Compare the character maps
    for (let char in charMap1) {
        if (charMap1[char] !== charMap2[char]) {
            return false;
        }
    }

    return true;
}

function buildCharMap(str) {
    const charMap = {};
    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

// Examples
console.log(isAnagram("listen", "silent"));       // Output: true
console.log(isAnagram("triangle", "integral"));   // Output: true
console.log(isAnagram("hello", "world"));         // Output: false
console.log(isAnagram("Astronomer", "Moon starer")); // Output: true
console.log(isAnagram("School master", "The classroom")); // Output: true
----------------------------------------------------------------------------------------
function isAnagram(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

  // Compare sorted characters
  return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
console.log(isAnagram("Dormitory", "dirty room")); // true
----------------------------------------------------------------------------------------
function isAnagram(str1, str2) {
  // First, check if lengths match
  if (str1.length !== str2.length) return false;

  // Create a character count object for str1
  const count = {};

  // Count characters in str1
  for (let i = 0; i < str1.length; i++) {
    let ch = str1[i];
    let code = ch.charCodeAt(0);

    // Convert uppercase to lowercase (A-Z: 65–90, a-z: 97–122)
    if (code >= 65 && code <= 90) {
      ch = String.fromCharCode(code + 32);
    }

    if (ch !== ' ') {
      count[ch] = (count[ch] || 0) + 1;
    }
  }

  // Subtract character counts using str2
  for (let i = 0; i < str2.length; i++) {
    let ch = str2[i];
    let code = ch.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      ch = String.fromCharCode(code + 32);
    }

    if (ch !== ' ') {
      if (!count[ch]) return false;
      count[ch]--;
    }
  }

  // Check that all counts are zero
  for (let key in count) {
    if (count[key] !== 0) return false;
  }

  return true;
}

console.log(isAnagram("Listen", "Silent"));       // true
console.log(isAnagram("Hello", "Olelh"));         // true
console.log(isAnagram("Not", "Anagram"));         // false
console.log(isAnagram("Dirty Room", "Dormitory"));// true
----------------------------------------------------------------------------------------