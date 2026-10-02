function longestCommonPrefixSorting(strs) {
    if (!strs || strs.length === 0) return "";

    // Sort array alphabetically 
    strs.sort();

    const first = strs[0];
    const last = strs[strs.length - 1];
    let i = 0;

    // Only compare the first and last strings
    while (i < first.length && first[i] === last[i]) {
        i++;
    }

    return first.substring(0, i);
}

// Example usage:
console.log(longestCommonPrefixSorting(["apple", "ape", "april"])); // Output: "ap"



function longestCommonPrefix(strs) {
    // Return empty string if input array is empty
    if (!strs || strs.length === 0) return "";

    // Loop through the characters of the first string
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        // Check if this character matches the character at index i in all other strings
        for (let j = 1; j < strs.length; j++) {
            // If a string is shorter than index i, or characters do not match, return the result
            if (i === strs[j].length || strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }

    return strs[0];
}

// Example usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""
