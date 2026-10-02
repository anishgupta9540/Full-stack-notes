ust
How Hoisting work in js 
Interceptor //backend concept
Error handling when you call 10 api will you write 10 try catch or use one common reusable try catch block
How bundler work 
Axios 
in backend when user dont do anything it should logout how you implement that 
react query 
2nd max
If user stay in same page without doing anything i want to logout how you will achive this.

Promise example
Hoc example 
search with debouncing for 10 sec
create promise and and show then catch
local storage save on click of save react application
common error handling for react application
context api and reduxtoolkit when we use context and redux
-------------------------------------------------------------------------
Deep copy without inbuild methid use recursion method
// Test case
const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);
copy.b.c = 99;
console.log(original.b.c); // Should still be 2
-------------------------------------------------------------------------
function deepClone(obj) {
    // If not an object or is null, return it directly (base case)
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    // Create an array or object to hold the values
    let result = Array.isArray(obj) ? [] : {};

    // Iterate over each key in the object
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key]); // Recursively clone
        }
    }

    return result;
}

// Test case
const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);
copy.b.c = 99;

console.log(original.b.c); // Should still be 2
-------------------------------------------------------------------------
import React, { useState } from 'react';

const SuperHeroDropdown = () => {
    const data = {
        squadName: "Super Hero Squad",
        homeTown: "Metro City",
        formed: 2016,
        secretBase: "Super tower",
        active: true,
        members: [
            {
                name: "Molecule Man",
                age: 29,
                secretIdentity: "Dan Jukes",
                powers: ["Radiation resistance", "Turning tiny", "Radiation blast"]
            },
            {
                name: "Madame Uppercut",
                age: 39,
                secretIdentity: "Jane Wilson",
                powers: ["Million tonne punch", "Damage resistance", "Superhuman reflexes"]
            }
        ]
    };

    const [selectedName, setSelectedName] = useState('');

    const handleSelect = (e) => {
        setSelectedName(e.target.value);
    };

    // Find the selected member by name
    const selectedMember = data.members.find(member => member.name === selectedName);
    const selectedPowers = selectedMember?.powers || [];

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h2>{data.squadName}</h2>

            <label htmlFor="hero-select">Select a hero: </label>
            <select id="hero-select" onChange={handleSelect} value={selectedName}>
                <option value="">-- Choose --</option>
                {data.members.map((member) => (
                    <option key={member.name} value={member.name}>
                        {member.name}
                    </option>
                ))}
            </select>

            {selectedPowers.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Powers of {selectedName}:</h3>
                    <ul>
                        {selectedPowers.map((power) => (
                            <li key={power}>{power}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SuperHeroDropdown;
