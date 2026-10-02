function groupBy(array, property) {
    return array.reduce((result, item) => {
        const key = item[property];
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
}


const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
];

console.log(groupBy(users, 'age'));

// Output:
// {
//   '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//   '30': [{ name: 'Bob', age: 30 }]
// }

const products = [
    { id: 1, category: 'Electronics' },
    { id: 2, category: 'Clothing' },
    { id: 3, category: 'Electronics' }
];

console.log(groupBy(products, 'category'));

// Output:
// {
//   'Electronics': [{ id: 1, category: 'Electronics' }, { id: 3, category: 'Electronics' }],
//   'Clothing': [{ id: 2, category: 'Clothing' }]
// }
-----------------------------------------------------------------------------------------------
function countByProperty(array, prop) {
    return array.reduce((accu, curr) => {
        const key = curr[prop];
        accu[key] = (accu[key] || 0) + 1;
        return accu;
    }, {});
}
const items = [
    { name: "Apple", type: "fruit" },
    { name: "Banana", type: "fruit" },
    { name: "Carrot", type: "vegetable" },
    { name: "Orange", type: "fruit" },
    { name: "Spinach", type: "vegetable" }
];

console.log(countByProperty(items, "type"));
----------------------------------------------------------------
function countByKey(data, key) {
  return data.reduce(function (accu, curr) {
    if (accu[curr[key]]) {
      accu[curr[key]] = ++accu[curr[key]];
    } else {
      accu[curr[key]] = 1;
    }
    return accu;
  }, {});
}

const data = [
  { category: 'fruit' },
  { category: 'vegetable' },
  { category: 'fruit' },
  { category: 'meat' },
  { category: 'vegetable' }
];

const output = countByCategory(data);
console.log(output);
// Output: { fruit: 2, vegetable: 2, meat: 1 }
----------------------------------------------------------------
function App(array, prop) {
    return array.reduce((accu, curr) => {
        if (!accu[curr[prop]]) {
            accu[curr[prop]] = [];
        }
        accu[curr[prop]].push(curr);
        return accu;
    }, {});
}

const products = [
    { id: 1, category: 'Electronics' },
    { id: 2, category: 'Clothing' },
    { id: 3, category: 'Electronics' }
];

const grouped = App(products, "category");

// Build count object
const counts = {};
for (let key in grouped) {
    counts[key] = grouped[key].length;
}

console.log(counts);



function App(arr, key) {
    const grouped = arr.reduce((accu, curr) => {
        if (!accu[curr[key]]) {
            accu[curr[key]] = [];
        }
        accu[curr[key]].push(curr);
        return accu;
    }, {});

    // Get counts
    const lengths = {};
    for (let group in grouped) {
        lengths[group] = grouped[group].length;
    }

    return lengths;
}

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 }
];

console.log(App(users, "age"));




guess the number => react
largest number formaed => js 


guess the number => react
largest number formaed => js 


function groupBy(arr, key) {
  return arr.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
}

imp one 
const employees = [
  { name: "Tata", skills: ["JavaScript", "React", "Node.js"] },
  { name: "Mahesh", skills: ["Java", "Spring", "Node.js", "React"] },
  { name: "Hema", skills: ["JavaScript", "React"] },
  { name: "Sundar", skills: ["Python", "Django"] },
];

const requiredSkills = ["JavaScript", "React"];

const result = employees
  .filter(employee =>
    requiredSkills.every(skill => employee.skills.includes(skill))
  )
  .map(employee => employee.name);

console.log(result); // ["Tata", "Hema"]