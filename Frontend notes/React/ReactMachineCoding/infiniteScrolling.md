import React, { useState, useEffect } from 'react';

const InfiniteScrollComments = () => {
    const [comments, setComments] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const LIMIT = 20;

    useEffect(() => {
        fetchComments();
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop + 100 >=
                document.documentElement.scrollHeight &&
                !isLoading &&
                hasMore
            ) {
                setPage((prev) => prev + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading, hasMore]);

    const fetchComments = async () => {
        setIsLoading(true);
        try {
            const start = (page - 1) * LIMIT;
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/comments?_start=${start}&_limit=${LIMIT}`
            );
            if (!response.ok) throw new Error('Failed to fetch');

            const data = await response.json();

            setComments((prev) => [...prev, ...data]);

            if (data.length < LIMIT) {
                setHasMore(false); // no more pages
            }
        } catch (error) {
            console.error('Error fetching comments:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ padding: '1rem' }}>
            <h2>Infinite Scroll Comments</h2>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id} style={{ marginBottom: '1rem' }}>
                        <strong>{comment.name}</strong>
                        <br />
                        <em>{comment.email}</em>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>

            {isLoading && <p>Loading more comments...</p>}
            {!hasMore && <p>No more comments to load.</p>}
        </div>
    );
};

export default InfiniteScrollComments;
