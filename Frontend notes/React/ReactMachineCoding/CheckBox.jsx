
import React, { useState } from 'react';

const SuperHeroSelector = () => {
    const squad = {
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
                powers: [
                    "Radiation resistance",
                    "Turning tiny",
                    "Radiation blast"
                ]
            },
            {
                name: "Madame Uppercut",
                age: 39,
                secretIdentity: "Jane Wilson",
                powers: [
                    "Million tonne punch",
                    "Damage resistance",
                    "Superhuman reflexes"
                ]
            },
            {
                name: "Eternal Flame",
                age: 1000000,
                secretIdentity: "Unknown",
                powers: [
                    "Immortality",
                    "Heat Immunity",
                    "Inferno",
                    "Teleportation",
                    "Interdimensional travel"
                ]
            }
        ]
    };

    const [selectedHeroes, setSelectedHeroes] = useState([]);

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedHeroes((prev) => [...prev, value]);
        } else {
            setSelectedHeroes((prev) => prev.filter((name) => name !== value));
        }
    };

    return (
        <div>
            <h1>Select Super Heroes</h1>
            {squad.members.map((member, index) => (
                <label key={index} style={{ display: 'block', marginBottom: '8px' }}>
                    <input
                        type="checkbox"
                        value={member.name}
                        checked={selectedHeroes.includes(member.name)}
                        onChange={handleCheckboxChange}
                    />
                    {member.name}
                </label>
            ))}

            {selectedHeroes.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <strong>Selected Heroes:</strong>
                    <ul>
                        {selectedHeroes.map((name, i) => (
                            <li key={i}>{name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SuperHeroSelector;
