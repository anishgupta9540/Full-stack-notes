//Bind Method

function Person(name) {
  this.name = name;

  setTimeout(function() {
    console.log(`Hello, ${this.name}`); // "Hello, Alice"
  }.bind(this), 1000);
}
const p = new Person('Alice');

//arrow fucntion 

function Person(name) {
  this.name = name;

  setTimeout(function() {
    console.log(`Hello, ${this.name}`); // "Hello, Alice"
  }, 1000);
}
const p = new Person('Alice');