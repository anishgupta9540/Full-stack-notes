import React, { useState } from 'react';

const DragDrop = () => {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
    const [draggedItemIndex, setDraggedItemIndex] = useState(null);

    const handleDragStart = (index) => {
        setDraggedItemIndex(index);
    };

    const handleDragOver = (e) => {
        e.preventDefault(); // Allows drop
    };

    const handleDrop = (index) => {
        if (draggedItemIndex === null || draggedItemIndex === index) return;

        const updatedItems = [...items];
        const [draggedItem] = updatedItems.splice(draggedItemIndex, 1);
        updatedItems.splice(index, 0, draggedItem);

        setItems(updatedItems);
        setDraggedItemIndex(null);
    };

    return (
        <div style={{ padding: 20, maxWidth: 400, margin: 'auto' }}>
            <h2>Drag and Drop (React + JS)</h2>
            {items.map((item, index) => (
                <div
                    key={index}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop(index)}
                    style={{
                        padding: 12,
                        marginBottom: 8,
                        backgroundColor: '#f4f4f4',
                        border: '1px solid #ccc',
                        borderRadius: 4,
                        cursor: 'grab',
                        opacity: draggedItemIndex === index ? 0.5 : 1,
                    }}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default DragDrop;
