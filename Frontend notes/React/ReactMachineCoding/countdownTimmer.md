import React, { useEffect, useState } from 'react';

function App() {
  const [seconds, setSeconds] = useState(100); // starting value

  useEffect(() => {
    if (seconds <= 0) return;

    const interval = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval); // cleanup on re-render
  }, [seconds]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Countdown Timer</h1>
      <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        Countdown: {seconds > 0 ? seconds : "Time's up!"}
      </div>
    </div>
  );
}

export default App;
---------------------------------------------------------------------------------------
import React, { useState, useEffect } from 'react';

function App() {
  const launchDate = '2025-12-31T00:00:00'; // 🎯 Set your launch date/time here

  const calculateTimeLeft = () => {
    const difference = new Date(launchDate) - new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      setTimeLeft(updatedTime);
      if (!updatedTime) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      marginTop: '100px',
      fontSize: '2rem'
    }}>
      <h1>🚀 Product Launch Countdown</h1>
      {timeLeft ? (
        <div>
          <p>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </p>
        </div>
      ) : (
        <h2>🎉 Launch Time Has Arrived! 🎉</h2>
      )}
    </div>
  );
}

export default App;
