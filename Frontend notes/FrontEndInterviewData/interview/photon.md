photon l1
Write a generic groupBy function in TypeScript that groups an array of objects by a specified key.
The function should accept:
An array of objects of type T
A key K which is a key of T
It should return an object where:
Each key is a value of T[K]
Each value is an array of objects from the original array that share that key
>
function groupBy<T, K extends keyof T>(array: T[], key: K): Record<string, T[]> {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]); // convert to string to use as object key
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
}
type Person = {
  name: string;
  age: number;
  city: string;
};

const people: Person[] = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 25, city: "London" },
  { name: "Charlie", age: 30, city: "New York" },
  { name: "David", age: 25, city: "Paris" },
];

const groupedByAge = groupBy(people, "age");
console.log(groupedByAge);
/*
{
  "25": [
    { name: "Bob", age: 25, city: "London" },
    { name: "David", age: 25, city: "Paris" }
  ],
  "30": [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Charlie", age: 30, city: "New York" }
  ]
}
*/

what is enum
what is pipe in node