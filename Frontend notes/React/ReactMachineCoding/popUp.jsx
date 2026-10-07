import React, { useState } from 'react';

// Sample data
const data = [
    {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        postId: 1,
        id: 2,
        name: "quo vero reiciendis velit similique earum",
        email: "Jayne_Kuhic@sydney.com",
        body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
        postId: 1,
        id: 3,
        name: "odio adipisci rerum aut animi",
        email: "Nikita@garfield.biz",
        body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    }
];

const Popup = ({ isOpen, onClose, onSubmit }) => {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const handleCheckboxChange = (id) => {
        setSelectedCheckboxes((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const handleSubmit = () => {
        onSubmit(selectedCheckboxes);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>Select Items</h2>
                <div>
                    {data.map((item) => (
                        <div key={item.id}>
                            <input
                                type="checkbox"
                                id={item.id}
                                onChange={() => handleCheckboxChange(item.id)}
                            />
                            <label>{item.name}</label>
                        </div>
                    ))}
                </div>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

const App = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handlePopupSubmit = (selectedCheckboxes) => {
        const selectedData = data.filter((item) =>
            selectedCheckboxes.includes(item.id)
        );
        setSelectedItems(selectedData);
    };

    return (
        <div>
            <h1>Selected Items:</h1>
            <div>
                {selectedItems.length > 0 ? (
                    selectedItems.map((item) => (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <p>{item.body}</p>
                        </div>
                    ))
                ) : (
                    <p>No items selected.</p>
                )}
            </div>

            <button onClick={openPopup}>Open Popup</button>

            <Popup
                isOpen={isPopupOpen}
                onClose={closePopup}
                onSubmit={handlePopupSubmit}
            />
        </div>
    );
};

export default App;
