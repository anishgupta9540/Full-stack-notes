const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Charlie' },
  { id: 2, name: 'Bob' }
];
remove duplicate 
1>array.from 
2>using loop method in js 
------------------------------------------------
print star pattern in js trinangle 
------------------------------------------------
output of below code in js 
function test(value) {
    if(value)
        return value;
    value = 10;
    return
        value;
}
test(5); =>5
test();  =>undefine
------------------------------------------------
print even form an array in a single line of code 
const datas=[1, 2, 3, 4, 5, 6];
------------------------------------------------
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Charlie' },
  { id: 2, name: 'Bob' }
];

const uniqueUsers = users.filter((user, index, self) =>
  return index === self.findIndex(
    (u) => u.id === user.id && u.name === user.name
  )
);

console.log(uniqueUsers);

