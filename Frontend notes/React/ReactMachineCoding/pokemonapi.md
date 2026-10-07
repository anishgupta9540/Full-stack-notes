Create a vanila 15 application that consumes the https://pokeapi.co/api/v2/pokemon/ API and displays a dropdown list of pokemon
When the user selects a pokemon from the dropdown, the application should make a second Alt call using the "ail" returned in the find Alt call to fetch the pokemon's details, including its abilities, and display them on the page. Once the details are tetched, they should be cached and the application should not make another API call for that pokemon again


import React, { useEffect, useState } from 'react';

function App() {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedUrl, setSelectedUrl] = useState('');
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const cache = React.useRef({}); // In-memory cache using ref

    // Fetch list of Pokémon (first 151)
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then((res) => res.json())
            .then((data) => setPokemonList(data.results))
            .catch((err) => console.error('Error fetching list:', err));
    }, []);

    // Fetch details when selection changes
    useEffect(() => {
        if (!selectedUrl) return;

        // If cached, use that
        if (cache.current[selectedUrl]) {
            setPokemonDetails(cache.current[selectedUrl]);
            return;
        }

        // Otherwise fetch from API
        fetch(selectedUrl)
            .then((res) => res.json())
            .then((data) => {
                cache.current[selectedUrl] = data; // Cache result
                setPokemonDetails(data);
            })
            .catch((err) => console.error('Error fetching details:', err));
    }, [selectedUrl]);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>Pokémon Viewer</h1>
            <label>
                Select a Pokémon:{' '}
                <select onChange={(e) => setSelectedUrl(e.target.value)} defaultValue="">
                    <option value="" disabled>
                        -- Select --
                    </option>
                    {pokemonList.map((p) => (
                        <option key={p.name} value={p.url}>
                            {capitalize(p.name)}
                        </option>
                    ))}
                </select>
            </label>

            {pokemonDetails && (
                <div style={{ marginTop: '20px' }}>
                    <h2>{capitalize(pokemonDetails.name)}</h2>
                    <p>
                        <strong>Height:</strong> {pokemonDetails.height}
                    </p>
                    <p>
                        <strong>Weight:</strong> {pokemonDetails.weight}
                    </p>
                    <p>
                        <strong>Abilities:</strong>
                    </p>
                    <ul>
                        {pokemonDetails.abilities.map((ab) => (
                            <li key={ab.ability.name}>{capitalize(ab.ability.name)}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default App;
---------------------------------------------------------------------------------------------------------------------------
Create a vanilla is application that consumes the https://lakestoreapi.com/carts/2 APT and displays a list of products in the cart. For a product in the cart, the application should make an API call to fetch the product details using the iD returned in the cart Allt and display the product title, price, and image. Note: The https://lakestoreapi.com/products/id: Apt returns details for a single product. You will need to ake an API call for each product in the cart to fetch the product details.
import React, { useEffect, useState } from 'react';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch cart on mount
    useEffect(() => {
        async function fetchCartAndProducts() {
            try {
                const cartRes = await fetch('https://fakestoreapi.com/carts/2');
                const cartData = await cartRes.json();

                const productFetches = cartData.products.map(async (item) => {
                    const res = await fetch(`https://fakestoreapi.com/products/${item.productId}`);
                    const data = await res.json();
                    return {
                        ...data,
                        quantity: item.quantity,
                    };
                });

                const productDetails = await Promise.all(productFetches);
                setProducts(productDetails);
            } catch (err) {
                console.error('Failed to fetch cart or product details:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchCartAndProducts();
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>Cart Viewer</h1>
            {loading ? (
                <p>Loading cart...</p>
            ) : (
                <div>
                    {products.map((product) => (
                        <div key={product.id} style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                            <img src={product.image} alt={product.title} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                            <div>
                                <h3>{product.title}</h3>
                                <p><strong>Price:</strong> ${product.price}</p>
                                <p><strong>Quantity:</strong> {product.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
---------------------------------------------------------------------------------------------------------------------------
machabile Skill Gap Details:

Choose hands-on ertise

Product Listing Page

Create a vanilla is application that coresumes the hitips//termap.com/products/ha AP and gaysalodas ascending ander based on price. The application should also include a shopdown to allow the user to change the sorting of the products between ascending and descending. When the ser changes the sorting onler, the applicated the purry parameter veun and hitch the producty with their new sorting ordisc

Areas To Be Probed/Competency Definition

Evaluated Proficiency Level Feedback Details

Reactja

import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);

  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Sort products when sortOrder changes
  useEffect(() => {
    sortProducts();
  }, [sortOrder]);

  // Fetch product data
  const fetchProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(sortData(data, sortOrder));
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  };

  // Sort utility
  const sortData = (data, order) => {
    return [...data].sort((a, b) =>
      order === 'asc' ? a.price - b.price : b.price - a.price
    );
  };

  // Sort current products
  const sortProducts = () => {
    setProducts((prev) => sortData(prev, sortOrder));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Product Listing</h1>
      <label>
        Sort by price:{' '}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ width: '80px', height: '80px', objectFit: 'contain' }}
              />
              <div>
                <h4>{product.title}</h4>
                <p><strong>${product.price.toFixed(2)}</strong></p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
---------------------------------------------------------------------------------------------------------------------------
Good one

import React, { useState, useEffect } from 'react';

function App() {
  const [datas, setDatas] = useState([]);
  const [selectedUrl, setSelectedUrl] = useState('');
  const [pokDetails, setPokDetails] = useState(null);

  // Fetch initial list of 151 Pokémon
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const resultData = await result.json();
      setDatas(resultData.results);
    };
    fetchData();
  }, []);

  // Fetch details for the selected Pokémon
  useEffect(() => {
    if (!selectedUrl) return;

    const fetchDetails = async () => {
      const result = await fetch(selectedUrl);
      const resultData = await result.json();
      setPokDetails(resultData);
    };
    fetchDetails();
  }, [selectedUrl]);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2>Pokémon Selector</h2>
      <label htmlFor="pokemon-select">Select Pokémon:</label>
      <select
        id="pokemon-select"
        onChange={(e) => {
          const selectedName = e.target.value;
          const selectedPokemon = datas.find((d) => d.name === selectedName);
          if (selectedPokemon) {
            setSelectedUrl(selectedPokemon.url);
          }
        }}
        defaultValue=""
      >
        <option value="" disabled>
          -- Select --
        </option>
        {datas.map((data) => (
          <option key={data.name} value={data.name}>
            {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
          </option>
        ))}
      </select>

      {pokDetails && (
        <div style={{ marginTop: '20px' }}>
          <h3>{pokDetails.name.charAt(0).toUpperCase() + pokDetails.name.slice(1)}</h3>
          <img
            src={pokDetails.sprites.front_default}
            alt={pokDetails.name}
            width="150"
          />
          <p><strong>Height:</strong> {pokDetails.height}</p>
          <p><strong>Weight:</strong> {pokDetails.weight}</p>
          <p><strong>Abilities:</strong></p>
          <ul>
            {pokDetails.abilities.map((a) => (
              <li key={a.ability.name}>{a.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
---------------------------------------------------------------------------------------------------------------------------