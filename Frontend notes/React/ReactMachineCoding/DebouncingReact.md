import React, { useState, useEffect } from 'react';

const SearchBox = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (query.trim()) {
                fetchResults(query);
            } else {
                setResults([]);
                setHasSearched(false); // reset
            }

        }, 300);

        return () => clearTimeout(delayDebounce);
    }, [query]);

    const fetchResults = async (searchTerm) => {
        setIsSearching(true);
        setHasSearched(true);
        try {
            const response = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error('Fetch error:', error);
            setResults([]); // fallback to empty
        } finally {
            setIsSearching(false);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />

            {isSearching && <p>Searching...</p>}

            {!isSearching && hasSearched && results.length === 0 && (
                <p>No results found.</p>
            )}

            <ul>
                {results.map((item, index) => (
                    <li key={index}>{item.name}</li> // adjust for your data
                ))}
            </ul>
        </div>
    );
};

export default SearchBox;
----------------------------------------------------------------------------------------------------
import React, { useState, useEffect } from 'react';

function DebouncedSearch() {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');

    // Update debouncedQuery only after user stops typing for 500ms
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 900);

        // Cleanup if query changes before 500ms
        return () => clearTimeout(handler);
    }, [query]);

    // Effect to simulate search API call when debouncedQuery changes
    useEffect(() => {
        if (debouncedQuery) {
            console.log('Searching for:', debouncedQuery);
            // Place your API call here
        }
    }, [debouncedQuery]);

    return (
        <div>
            <input
                type="text"
                placeholder="Type to search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <p>Search term (debounced): {debouncedQuery}</p>
        </div>
    );
}

export default DebouncedSearch;
----------------------------------------------------------------------------------------------------
import React, { useState, useEffect } from 'react';

function App() {
  const [datas, setDatas] = useState('');
  const [debouncedData, setDebouncedData] = useState('');

  useEffect(() => {
    // Set a timer to update debouncedData after 1 second
    const handler = setTimeout(() => {
      setDebouncedData(datas);
    }, 1000);

    // Cleanup if datas changes before 1 second
    return () => {
      clearTimeout(handler);
    };
  }, [datas]);

  return (
    <div>
      <h2>Debounce Input Example</h2>
      <input
        type="text"
        value={datas}
        onChange={(e) => setDatas(e.target.value)}
        placeholder="Type here..."
      />
      <p>Debounced value: {debouncedData}</p>
    </div>
  );
}

export default App;
