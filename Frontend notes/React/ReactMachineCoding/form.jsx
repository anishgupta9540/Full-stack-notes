import React, { useState } from 'react';

function App() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [result, setResult] = useState([]);
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            setResult([...result, { fname, lname }]);
            setFname('');
            setLname('');
            setError({});
        } else {
            setError(validationErrors);
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!fname.trim()) {
            errors.fname = 'First name is required';
        }
        if (!lname.trim()) {
            errors.lname = 'Last name is required';
        }
        if (fname.length < 3) {
            errors.fname = 'First name should be at least 3 characters long';
        }
        if (lname.length < 3) {
            errors.lname = 'Last name should be at least 3 characters long';
        }
        return errors;
    };

    return (
        <div>
            <h2>Hello</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    placeholder="Enter first name"
                />
                {error.fname && <div style={{ color: 'red' }}>{error.fname}</div>}
                <input
                    type="text"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    placeholder="Enter last name"
                />
                {error.lname && <div style={{ color: 'red' }}>{error.lname}</div>}
                <button type="submit">Submit</button>
            </form>
            {result.map((datavalue, index) => {
                return (
                    <div key={index}>
                        {datavalue.fname} {datavalue.lname}
                    </div>
                );
            })}
        </div>
    );
}

export default App;
