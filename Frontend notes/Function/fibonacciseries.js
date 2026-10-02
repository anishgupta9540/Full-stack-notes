function App(number) {
    let fib = [1, 2];
    for (let i = 2; i < number; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}


console.log(App(5));


// function App(number){
//     let fib=[0,1];
//     for(let i=2;i<=number;i++){
//         fib[i]=fib[i-1]+fib[i-2];
//     };
//     return fib;
// };


// console.log(App(10));
