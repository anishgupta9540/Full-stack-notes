function uniqueDuplicates(str) {
    const charCount = {};
    const duplicates = new Set();

    // Count occurrences
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Collect characters that appear more than once
    for (let char in charCount) {
        if (charCount[char] > 1) {
            duplicates.add(char);
        }
    }

    // Return duplicates as an array (or [...duplicates])
    return Array.from(duplicates);
}

// Example usage:
console.log(uniqueDuplicates("swiss")); // Output: ['s']
console.log(uniqueDuplicates("programming")); // Output: ['r', 'g', 'm']


//NOTE
// we can also solve above problem with counter method 
