function getRandomColor() {
    const letter = '123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * letter.length)];
    }
    return color;
}

const letter = '0123456789ABCDEF';

console.log(letter)


const Obj = [
    { name: "anish" },
    { name: "manish" },
    { name: "chacha" },
];

function getRandomName() {
    const randomIndex = Math.floor(Math.random() * Obj.length);
    return Obj[randomIndex].name;
}

console.log(getRandomName());


