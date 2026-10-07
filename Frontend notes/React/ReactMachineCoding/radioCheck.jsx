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

  const [selectedHero, setSelectedHero] = useState('');

  const handleChange = (e) => {
    setSelectedHero(e.target.value);
  };

  return (
    <div>
      <h1>Select a Super Hero</h1>
      {squad.members.map((member, index) => (
        <label key={index}>
          <input
            type="radio"
            name="hero"
            value={member.name}
            checked={selectedHero === member.name}
            onChange={handleChange}
          />
          {member.name}
        </label>
      ))}

      {selectedHero && (
        <div style={{ marginTop: '20px' }}>
          <strong>Selected Hero:</strong> {selectedHero}
        </div>
      )}
    </div>
  );
};

export default SuperHeroSelector;