structuredClone()
JSON.parse(JSON.stringify())
Recursive Function
Lodash _.cloneDeep //External liberary
--------------------------------------------------------------------------------------------------
const original = { name: "Alice", details: { age: 25 }, dates: [new Date()] };
const clone = structuredClone(original);
--------------------------------------------------------------------------------------------------
const original = { name: "Bob", info: { hobby: "Gaming" } };
const clone = JSON.parse(JSON.stringify(original));
--------------------------------------------------------------------------------------------------
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj; // Base case

  if (Array.isArray(obj)) return obj.map(deepClone); // Handle arrays

  const clone = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]); // Recursive step
    }
  }
  return clone;
}
--------------------------------------------------------------------------------------------------
import _ from 'lodash';
const clone = _.cloneDeep(originalObject); //
--------------------------------------------------------------------------------------------------
