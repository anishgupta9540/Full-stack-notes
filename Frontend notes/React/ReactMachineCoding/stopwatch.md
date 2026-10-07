import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0);          // total time in ms
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;

        if (isRunning) {
            const startTime = Date.now() - time;

            interval = setInterval(() => {
                setTime(Date.now() - startTime);
            }, 10);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const start = () => setIsRunning(true);
    const stop = () => setIsRunning(false);
    const reset = () => {
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = (ms) => {
        const milliseconds = Math.floor((ms % 1000) / 10);
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / 60000) % 60);
        const hours = Math.floor(ms / 3600000);

        const pad = (unit) => unit.toString().padStart(2, '0');
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
    };

    return (
        <div style={{ fontFamily: 'monospace', textAlign: 'center' }}>
            <h1>Stopwatch</h1>
            <h2>{formatTime(time)}</h2>
            <button onClick={start} disabled={isRunning}>Start</button>
            <button onClick={stop} disabled={!isRunning}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Stopwatch;
---------------------------------------------------------------------------------------------------
import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0); // time in milliseconds
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current !== null) return; // prevent multiple intervals

    const startTime = Date.now() - time;

    intervalRef.current = setInterval(() => {
      setTime(Date.now() - startTime);
    }, 10); // update every 10ms
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  const formatTime = (ms) => {
    const milliseconds = Math.floor((ms % 1000) / 10);
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 60000) % 60);
    const hours = Math.floor(ms / 3600000);

    const pad = (unit) => unit.toString().padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
  };

  return (
    <div style={{ fontFamily: 'monospace', textAlign: 'center' }}>
      <h1>Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
