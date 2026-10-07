import React, { useState } from 'react';

const data = [
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
    {
        postId: 1,
        id: 3,
        name: 'odio adipisci rerum aut animi',
        email: 'Nikita@garfield.biz',
        body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
    },
];

function App() {
    const [showModal, setShowModal] = useState(false);
    const [checkedItems, setCheckedItems] = useState({}); // {1: true, 2: false ...}

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleCheckboxChange = (id) => {
        setCheckedItems((prev) => ({
            ...prev,
            [id]: !prev[id], // Toggle the checked state
        }));
    };

    const handleShowSelected = () => {
        const selected = data.filter((item) => checkedItems[item.id]);
        alert(
            `Selected items:\n${selected.map((item) => item.name).join('\n') || 'None'
            }`
        );
    };

    return (
        <div style={{ padding: '20px' }}>
            <button onClick={handleOpenModal}>Show Data in Modal</button>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Data (with Checkboxes)</h2>
                        <ul>
                            {data.map((item) => (
                                <li key={item.id} style={{ marginBottom: '15px' }}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={!!checkedItems[item.id]}
                                            onChange={() => handleCheckboxChange(item.id)}
                                        />{' '}
                                        <strong>{item.name}</strong>
                                    </label>
                                    <br />
                                    <strong>Email:</strong> {item.email} <br />
                                    <strong>Body:</strong> <pre>{item.body}</pre>
                                </li>
                            ))}
                        </ul>

                        <button onClick={handleShowSelected} className="action-button">
                            Show Selected Items
                        </button>
                        <button onClick={handleCloseModal} className="close-button">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
