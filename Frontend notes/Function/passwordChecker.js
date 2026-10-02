function checkPasswordStrength(password) {
    let strength = 0;

    // Conditions to increase strength
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const lengthCheck = password.length >= 8;

    // Count how many character types are present
    const typesCount = [hasLower, hasUpper, hasNumber, hasSymbol].filter(Boolean).length;

    if (lengthCheck) strength += 1;
    if (typesCount >= 2) strength += 1;
    if (typesCount >= 3) strength += 1;
    if (typesCount === 4) strength += 1;
    if (password.length >= 12) strength += 1; // Bonus for long passwords

    // Determine strength label
    let strengthLabel = '';
    switch (strength) {
        case 0:
        case 1:
            strengthLabel = 'Very Weak';
            break;
        case 2:
            strengthLabel = 'Weak';
            break;
        case 3:
            strengthLabel = 'Moderate';
            break;
        case 4:
            strengthLabel = 'Strong';
            break;
        case 5:
            strengthLabel = 'Very Strong';
            break;
    }

    return strengthLabel;
}

// Example usage:
console.log(checkPasswordStrength('abc'));             // Very Weak
console.log(checkPasswordStrength('abcD123'));         // Moderate
console.log(checkPasswordStrength('abcD123!@#'));      // Strong
console.log(checkPasswordStrength('abcD123!@#xyz'));   // Very Strong
