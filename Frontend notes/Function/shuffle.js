const datas = [1, 2, 3, 4, 5];

for (let i = datas.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [datas[i], datas[j]] = [datas[j], datas[i]];
}

console.log(datas); // Random output like [5,3,4,2,1]