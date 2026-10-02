// App.js
import React, { useState, useEffect } from 'react';

function useApiFetch(url, queryParams = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const queryString = new URLSearchParams(queryParams).toString();
                const fullUrl = queryString ? `${url}?${queryString}` : url;

                const response = await fetch(fullUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, JSON.stringify(queryParams)]);

    return { data, loading, error };
}

function App() {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    const queryParams = { userId: "10" };

    const { data, loading, error } = useApiFetch(apiUrl, queryParams);

    if (loading) {
        return (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ color: 'red', textAlign: 'center', marginTop: '2rem' }}>
                Error: {error}
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
            <h1 style={{ textAlign: 'center' }}>Posts</h1>
            {data && data.map((post) => (
                <div key={post.id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '1rem', marginBottom: '1rem' }}>
                    <h2 style={{ marginBottom: '0.5rem' }}>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
