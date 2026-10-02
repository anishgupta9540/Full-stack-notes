function isArmstrongNumber(num) {
    const digits = num.toString().split('');
    const power = digits.length;

    const sum = digits.reduce((acc, digit) => {
        return acc + Math.pow(Number(digit), power);
    }, 0);

    return sum === num;
}

for (let i = 1; i <= 1000; i++) {
    if (isArmstrongNumber(i)) {
        console.log(i);
    }
}
