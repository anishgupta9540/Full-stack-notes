// import React, { useState } from 'react';

// const ProductList = () => {
//     const products = [
//         { id: 1, name: 'Product A', rating: 4 },
//         { id: 2, name: 'Product B', rating: 3 },
//         { id: 3, name: 'Product C', rating: 2 },
//         { id: 4, name: 'Product D', rating: 1 },
//         { id: 5, name: 'Product E', rating: 4 },
//     ];

//     const [selectedRating, setSelectedRating] = useState('All');

//     const handleRatingChange = (e) => {
//         setSelectedRating(e.target.value);
//     };

//     const filteredProducts =
//         selectedRating === 'All'
//             ? products
//             : products.filter(
//                 (product) => product.rating === parseInt(selectedRating)
//             );

//     const ratings = ['All', 4, 3, 2, 1];

//     return (
//         <div>
//             <h2>Product List</h2>

//             <label htmlFor="rating">Filter by Rating: </label>
//             <select id="rating" value={selectedRating} onChange={handleRatingChange}>
//                 {ratings.map((rating) => (
//                     <option key={rating} value={rating}>
//                         {rating === 'All' ? 'All' : `${rating} Star${rating > 1 ? 's' : ''}`}
//                     </option>
//                 ))}
//             </select>

//             <ul>
//                 {filteredProducts.map((product) => (
//                     <li key={product.id}>
//                         {product.name} - {product.rating} Stars
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ProductList;

import React, { useState } from 'react';

const users = {
    squadName: 'Super Hero Squad',
    homeTown: 'Metro City',
    formed: 2016,
    secretBase: 'Super tower',
    active: true,
    members: [
        {
            name: 'Molecule Man',
            age: 29,
            secretIdentity: 'Dan Jukes',
            powers: ['Radiation resistance', 'Turning tiny', 'Radiation blast'],
        },
        {
            name: 'Madame Uppercut',
            age: 39,
            secretIdentity: 'Jane Wilson',
            powers: [
                'Million tonne punch',
                'Damage resistance',
                'Superhuman reflexes',
            ],
        },
        {
            name: 'Eternal Flame',
            age: 1000000,
            secretIdentity: 'Unknown',
            powers: [
                'Immortality',
                'Heat Immunity',
                'Inferno',
                'Teleportation',
                'Interdimensional travel',
            ],
        },
    ],
};

function App() {
    const [selectedName, setSelectedName] = useState('');

    const filteredMember = users.members.find(
        (member) => member.name === selectedName
    );

    return (
        <div>
            <h2>Drop Down</h2>
            <select
                value={selectedName}
                onChange={(e) => setSelectedName(e.target.value)}
            >
                <option value="">----select----</option>
                {users.members.map((item) => (
                    <option key={item.name} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>

            {filteredMember && (
                <div>
                    <h3>Powers:</h3>
                    <ul>
                        {filteredMember.powers.map((power, index) => (
                            <li key={index}>{power}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default App;
