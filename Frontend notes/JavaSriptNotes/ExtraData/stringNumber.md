Other ways to convert string to number:

| Method          | Example              | Result                              |
| --------------- | -------------------- | ----------------------------------- |
| `+value`        | `+("123")`           | `123`                               |
| `Number(value)` | `Number("123")`      | `123`                               |
| `parseInt()`    | `parseInt("123")`    | `123`                               |
| `parseFloat()`  | `parseFloat("12.3")` | `12.3`                              |
| `~~value`       | `~~"123"`            | `123` (integer only, fast, bitwise) |

function isPrime(number){
    if(number<2){
        return false;
    };
    
    for(let i=2;i<Math.sqrt(number);i++){
        if(number%i===0){
            return false;
        };
    };
    return true;
};

let primecount=0;
for(let i=0;i<=100;i++){
    if(isPrime(i)){
        primecount++;
        if(primecount%2===0){
            console.log(i);
        };
    };
};
    


str.padStart(targetLength, padString)
let str = "45";
let padded = str.padStart(5, "0");
console.log(padded); // Output: "00045"
