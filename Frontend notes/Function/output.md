console.log(indefine + 5);
//NaN
console.log(null + 5);
//5
console.log(tyoeOf(null));
//object
console.log('6' / 2);
//string will convert into number in arthmatic operation => 3
console.log('6' * 2);
//12
------------------------------------------------------------------
1>console.log(!!false)   false
2>console.log("2">"10")   true
3>console.log(2>"10")     false
------------------------------------------------------------------
4>if([]){
console.log(true);
}
//true
------------------------------------------------------------------
console.log(!!''); 
//false
------------------------------------------------------------------
console.log(!!{});
//true
------------------------------------------------------------------
console.log(!![]);
//true
------------------------------------------------------------------
const datas=[1,,2];
const result=datas.map(data=>data*2);
console.log(result);
//[2,undefine,4]
------------------------------------------------------------------
x = 10; 
console.log(x++); // 10 
console.log(++x); // 12 
console.log((x++) + (++x)); // 26 
console.log((x--) - (--x)); // 2
------------------------------------------------------------------
console.log([] == []);
//false
------------------------------------------------------------------
console.log({} == {});
//false
------------------------------------------------------------------
console.log(1+'2'+2+'1');
//1221
------------------------------------------------------------------
console.log(typeof([]) === typeof([]));
//true
------------------------------------------------------------------
console.log(typeof({}) === typeof({}));
//true
------------------------------------------------------------------
let x = 0.1 + 0.2;
let y = 0.3;
console.log(x == y);
//false
------------------------------------------------------------------
console.log([..."Lydia"]);
//[ "L", "y", "d", "i", "a" ]
------------------------------------------------------------------
function() {this}33
undefine with anonymous function attached with button
------------------------------------------------------------------
let x=10;
let output=typeof(x+"5");
console.log(output);
------------------------------------------------------------------
let obj = {
    "1" : "a",
    "1" : "b",
    [1] : "c"
};
console.log(obj["1"]);
-----------------------------------------------------------------------
const obj = {
  value: 100,
  regularFunc: function() {
    console.log('regularFunc:', this.value); // A

    const arrowFunc = () => {
      console.log('arrowFunc:', this.value); // B
    };

    function innerRegularFunc() {
      console.log('innerRegularFunc:', this.value); // C
    }

    arrowFunc();
    innerRegularFunc();
  }
};

obj.regularFunc();
------------------------------------------------------------------
console.log("5" + 3);      // 53
console.log("5" - 3);      // 2
console.log(Boolean(""));  // false
console.log(!!0);          // false
console.log([] == false);  // true
console.log(!!"Hello");    // true
console.log([] == {})      // false
console.log({} == [])      // false
console.log([4]+[5]);      // 45 
console.log([]+[]);        // ""
console.log([]+1);         //"1"
console.log(isNaN('abc')); //true
console.log(Number.isNaN('abc')); //false
------------------------------------------------------------------
what is the output of this code 
console.log([1,2,3] + [1,3,4]); // "1,2,31,3,4"
------------------------------------------------------------------
let x=[1,2,3];
x[10]=10;

console.log(x[6]); //undefine
console.log(x.length); //11
------------------------------------------------------------------
let arr = [1, 2, 3];
let ref = arr;

arr.length = 0;

console.log(arr); // []
console.log(ref); // [] — still refers to the same (now empty) array
------------------------------------------------------------------

