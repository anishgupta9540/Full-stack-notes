const data = [2, 3, 4, 5, 6, 7, 8];
const target = 9;

for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
        if (data[i] + data[j] === target) {
            console.log(`Pair: (${data[i]}, ${data[j]})`);
        }
    }
}
