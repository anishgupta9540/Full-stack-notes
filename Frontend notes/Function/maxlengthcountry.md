const country = ['India', 'itly', 'Russia'];
let maxCountry = country[0];
for (let i = 1; i < country.length; i++) {
    if (country[i].length > maxCountry.length) {
        maxCountry = country[i];
    }
}
console.log(maxCountry);
------------------------------------------------------------------
const country = ['India', 'Italy', 'Russia'];
const maxCountry = country.reduce((max, current) => {
    return current.length > max.length ? current : max;
});

console.log(maxCountry); // Output: 'Russia'
------------------------------------------------------------------
const datas = "hello my name is chacha";
let data = datas.split(' ');
const maxlength = Math.max(...data.map((datalength) => datalength.length));
const result = data.filter((finalres) => finalres.length === maxlength);
console.log(result);
------------------------------------------------------------------