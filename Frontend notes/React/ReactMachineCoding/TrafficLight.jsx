import React, { useEffect, useState } from 'react';

const RED_DURATION = 4000;
const YELLOW_DURATION = 500;
const GREEN_DURATION = 3000;

function App() {
    const [activeLight, setActiveLight] = useState('red');

    useEffect(() => {
        let timer;

        const nextLight = () => {
            setActiveLight(prev => {
                if (prev === 'red') return 'green';
                if (prev === 'green') return 'yellow';
                return 'red';
            });
        };

        const duration =
            activeLight === 'red'
                ? RED_DURATION
                : activeLight === 'yellow'
                    ? YELLOW_DURATION
                    : GREEN_DURATION;

        timer = setTimeout(nextLight, duration);

        return () => clearTimeout(timer);
    }, [activeLight]);

    return (
        <div style={{
            padding: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#222'
        }}>
            <div style={{
                width: '100px',
                background: '#333',
                padding: '20px',
                borderRadius: '20px',
                boxShadow: 'inset 0 0 10px #000',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
            }}>
                {['red', 'yellow', 'green'].map(color => (
                    <div
                        key={color}
                        style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: activeLight === color ? color : '#222',
                            boxShadow: activeLight === color ? `0 0 20px ${color}` : 'inset 0 0 5px #000',
                            transition: 'background 0.3s, box-shadow 0.3s',
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default App;
