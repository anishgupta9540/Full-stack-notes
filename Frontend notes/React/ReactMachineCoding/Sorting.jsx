import React, { useState } from 'react';

const initialComments = [
    {
        postId: 1,
        id: 1,
        name: 'id labore ex et quam laborum',
        email: 'Eliseo@gardner.biz',
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
    },
    {
        postId: 1,
        id: 2,
        name: 'quo vero reiciendis velit similique earum',
        email: 'Jayne_Kuhic@sydney.com',
        body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
    },
];

function CommentsList() {
    const [comments, setComments] = useState(initialComments);

    const sortById = () => {
        const sorted = [...comments].sort((a, b) => a.id - b.id);
        setComments(sorted);
    };

    const sortByName = () => {
        const sorted = [...comments].sort((a, b) => a.name.localeCompare(b.name));
        setComments(sorted);
    };

    const sortByEmail = () => {
        const sorted = [...comments].sort((a, b) => a.email.localeCompare(b.email));
        setComments(sorted);
    };

    const sortByBody = () => {
        const sorted = [...comments].sort((a, b) => a.body.localeCompare(b.body));
        setComments(sorted);
    };


    return (
        <div style={{ padding: '20px' }}>
            <h2>Comments</h2>
            <div style={{ marginBottom: '10px' }}>
                <button onClick={sortById}>Sort by ID</button>{' '}
                <button onClick={sortByName}>Sort by Name</button>{' '}
                <button onClick={sortByEmail}>Sort by Email</button>{' '}
                <button onClick={sortByBody}>Sort by Body</button>
            </div>
            <ul>
                {comments.map((comment) => (
                    <li
                        key={comment.id}
                        style={{
                            marginBottom: '15px',
                            borderBottom: '1px solid #ccc',
                            paddingBottom: '10px',
                        }}
                    >
                        <p>
                            <strong>ID:</strong> {comment.id}
                        </p>
                        <p>
                            <strong>Name:</strong> {comment.name}
                        </p>
                        <p>
                            <strong>Email:</strong> {comment.email}
                        </p>
                        <p>
                            <strong>Body:</strong> {comment.body}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CommentsList;
