const employees = [
  { id: 1, name: 'Alice', department: 'Sales', role: 'Manager' },
  { id: 2, name: 'Bob', department: 'Sales', role: 'Salesperson' },
  { id: 3, name: 'Charlie', department: 'HR', role: 'Recruiter' },
  { id: 4, name: 'David', department: 'Sales', role: 'Salesperson' },
  { id: 5, name: 'Eve', department: 'HR', role: 'Manager' },
  { id: 5, name: 'Eve', department: 'HR', role: 'Manager' },
  { id: 5, name: 'Eve', department: 'HR', role: 'Manager' },
  { id: 6, name: 'Frank', department: 'IT', role: 'Developer' },
  { id: 7, name: 'Grace', department: 'IT', role: 'System Admin' },
  { id: 8, name: 'Hannah', department: 'Sales', role: 'Salesperson' }
];

// Remove exact duplicate objects
const uniqueEmployees = Array.from(
  new Map(employees.map(emp => [JSON.stringify(emp), emp])).values()
);

console.log(uniqueEmployees);
-----------------------------------------------------------------------------------------------
Alternate
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Charlie' },
  { id: 2, name: 'Bob' }
];

const uniqueUsers = users.filter((user, index, self) =>
  index === self.findIndex(
    (u) => u.id === user.id && u.name === user.name
  )
);

console.log(uniqueUsers);
-----------------------------------------------------------------------------------------------
Alternate (complex)/
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Charlie' },
  { id: 2, name: 'Bob' }
];

const uniqueUsers = [];
const seen = [];

for (let i = 0; i < users.length; i++) {
  const key = `${users[i].id}-${users[i].name}`;

  if (!seen.includes(key)) {
    seen.push(key);
    uniqueUsers.push(users[i]);
  }
}

console.log(uniqueUsers);
---------------------------------------------
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Charlie' },
  { id: 2, name: 'Bob' }
];

const uniqueUsers = Array.from(
  new Map(users.map(user => [user.id + user.name, user])).values()
);

console.log(uniqueUsers);
-----------------------------------------------------
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Charlie' },
  { id: 2, name: 'Bob' }
];

const uniqueUsers = [];

for (let i = 0; i < users.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < uniqueUsers.length; j++) {
    if (
      users[i].id === uniqueUsers[j].id &&
      users[i].name === uniqueUsers[j].name
    ) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    uniqueUsers.push(users[i]);
  }
}

console.log(uniqueUsers);
-----------------------------------------------------
one more best question based on an array in js 

const data = [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' },
    { category: 'vegetable', name: 'carrot' },
    { category: 'fruit', name: 'orange' },
    { category: 'vegetable', name: 'spinach' },
];

const output=data.reduce(function(accu,curr){
    if(accu[curr.category]){
        accu[curr.category]=++accu[curr.category];
    }else{
        accu[curr.category]=1;
    };
    return accu;
},{});

console.log(output);

