import React, { useState, useEffect } from 'react';

export default function App() {
  const [oneStar, setOneStar] = useState(() => {
    const saved = localStorage.getItem('oneStar');
    return saved !== null ? parseInt(saved, 10) : 0;
  });
  const [twoStar, setTwoStar] = useState(() => {
    const saved = localStorage.getItem('twoStar');
    return saved !== null ? parseInt(saved, 10) : 0;
  });
  const [threeStar, setThreeStar] = useState(() => {
    const saved = localStorage.getItem('threeStar');
    return saved !== null ? parseInt(saved, 10) : 0;
  });
  const [fourStar, setFourStar] = useState(() => {
    const saved = localStorage.getItem('fourStar');
    return saved !== null ? parseInt(saved, 10) : 0;
  });
  const [fiveStar, setFiveStar] = useState(() => {
    const saved = localStorage.getItem('fiveStar');
    return saved !== null ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('oneStar', oneStar);
  }, [oneStar]);

  useEffect(() => {
    localStorage.setItem('twoStar', twoStar);
  }, [twoStar]);

  useEffect(() => {
    localStorage.setItem('threeStar', threeStar);
  }, [threeStar]);

  useEffect(() => {
    localStorage.setItem('fourStar', fourStar);
  }, [fourStar]);

  useEffect(() => {
    localStorage.setItem('fiveStar', fiveStar);
  }, [fiveStar]);

  const handleOne = () => setOneStar(prev => prev + 1);
  const handleTwo = () => setTwoStar(prev => prev + 1);
  const handleThree = () => setThreeStar(prev => prev + 1);
  const handleFour = () => setFourStar(prev => prev + 1);
  const handleFive = () => setFiveStar(prev => prev + 1);

  const handleReset = () => {
    setOneStar(0);
    setTwoStar(0);
    setThreeStar(0);
    setFourStar(0);
    setFiveStar(0);

    localStorage.removeItem('oneStar');
    localStorage.removeItem('twoStar');
    localStorage.removeItem('threeStar');
    localStorage.removeItem('fourStar');
    localStorage.removeItem('fiveStar');
  };

  const totalVotes = oneStar + twoStar + threeStar + fourStar + fiveStar;
  const totalScore =
    oneStar * 1 + twoStar * 2 + threeStar * 3 + fourStar * 4 + fiveStar * 5;

  return (
    <div>
      <h1>Rate Cinema Hall</h1>

      <div>
        <button onClick={handleOne}>1 Star</button>
        <button onClick={handleTwo}>2 Star</button>
        <button onClick={handleThree}>3 Star</button>
        <button onClick={handleFour}>4 Star</button>
        <button onClick={handleFive}>5 Star</button>
      </div>

      <div style={{ marginTop: '10px' }}>
        <button onClick={handleReset}>Reset Ratings</button>
      </div>

      <h2>Ratings Summary:</h2>
      <ul>
        <li>1 Star: {oneStar} votes</li>
        <li>2 Star: {twoStar} votes</li>
        <li>3 Star: {threeStar} votes</li>
        <li>4 Star: {fourStar} votes</li>
        <li>5 Star: {fiveStar} votes</li>
      </ul>

      <h3>Total Votes: {totalVotes}</h3>
      <h3>Total Score: {totalScore}</h3>
    </div>
  );
}
