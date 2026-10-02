function generateAlphanumericOTP(length = 6) {
    let otp = '';
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < length; i++) {
        otp += chars[Math.floor(Math.random() * chars.length)];
    }

    return otp;
}

// Example usage:
const otp = generateAlphanumericOTP();
console.log('Your OTP is:', otp);
----------------------------------------------------------------------
function generateOTP(length = 6) {
    let otp = '';
    const digits = '0123456789';

    for (let i = 0; i < length; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }

    return otp;
}

// Example usage:
const otp = generateOTP();
console.log('Your OTP is:', otp);
----------------------------------------------------------------------
