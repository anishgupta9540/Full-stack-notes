// import React, { useState, useEffect } from 'react';

// function App() {
//     const [inputValue, setInputValue] = useState('');
//     const [savedValue, setSavedValue] = useState('');

//     // Load data from localStorage on component mount
//     useEffect(() => {
//         const storedData = localStorage.getItem('myData');
//         if (storedData) {
//             setSavedValue(storedData);
//         }
//     }, []);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Save input value to localStorage
//         localStorage.setItem('myData', inputValue);

//         // Update state to reflect the new saved value
//         setSavedValue(inputValue);

//         // Optionally clear input
//         setInputValue('');
//     };

//     return (
//         <div style={{ padding: '20px' }}>
//             <h2>Save and Load with localStorage</h2>

//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={inputValue}
//                     placeholder="Enter something..."
//                     onChange={(e) => setInputValue(e.target.value)}
//                 />
//                 <button type="submit">Save</button>
//             </form>

//             <div style={{ marginTop: '20px' }}>
//                 <strong>Saved value:</strong> {savedValue || 'Nothing saved yet.'}
//             </div>
//         </div>
//     );
// }

// export default App;


import React, { useState, useEffect } from 'react';

function App() {
    const [datas, setDatas] = useState('');
    const [result, setResult] = useState([]);

    // ✅ Load data from localStorage when the component mounts
    useEffect(() => {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            setResult(JSON.parse(savedData));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (datas.trim() === '') return;

        const updatedResult = [...result, datas];
        setResult(updatedResult);
        setDatas('');

        // ✅ Save updated data to localStorage
        localStorage.setItem('formData', JSON.stringify(updatedResult));
    };

    return (
        <div>
            <h2>Form Validation</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter fname"
                    value={datas}
                    onChange={(e) => setDatas(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>

            {/* ✅ Show list of results */}
            {result.map((data, index) => (
                <div key={index}>{data}</div>
            ))}
        </div>
    );
}

export default App;
