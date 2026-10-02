function isValidPassword(password) {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
        return "Password must be at least 8 characters long.";
    }
    if (!hasUppercase) {
        return "Password must include at least one uppercase letter.";
    }
    if (!hasLowercase) {
        return "Password must include at least one lowercase letter.";
    }
    if (!hasDigit) {
        return "Password must include at least one digit.";
    }
    if (!hasSpecialChar) {
        return "Password must include at least one special character.";
    }

    return "Valid password ✅";
}

const password = "Abc123@#";
const result = isValidPassword(password);
console.log(result);


