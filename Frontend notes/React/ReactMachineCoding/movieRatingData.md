rating cinemahall as user give rating 1,2,3,4,5 and i want to know howmany people give 1 rating 2,3,4,5 rating and alos know toal rating score in reactjs

import React, { useState } from 'react';

export default function App() {
  const [oneStar, setOneStar] = useState(0);
  const [twoStar, setTwoStar] = useState(0);
  const [threeStar, setThreeStar] = useState(0);
  const [fourStar, setFourStar] = useState(0);
  const [fiveStar, setFiveStar] = useState(0);

  const handleOne = () => setOneStar(prev => prev + 1);
  const handleTwo = () => setTwoStar(prev => prev + 1);
  const handleThree = () => setThreeStar(prev => prev + 1);
  const handleFour = () => setFourStar(prev => prev + 1);
  const handleFive = () => setFiveStar(prev => prev + 1);

  const totalVotes = oneStar + twoStar + threeStar + fourStar + fiveStar;
  const totalScore =
    oneStar * 1 +
    twoStar * 2 +
    threeStar * 3 +
    fourStar * 4 +
    fiveStar * 5;

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

-------------------------------------------



import React, { useState } from 'react';

export default function App() {
  // Store how many users gave 1 to 5 stars
  const [ratings, setRatings] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  });

  const handleRating = (value) => {
    setRatings((prev) => ({
      ...prev,
      [value]: prev[value] + 1
    }));
  };

  const getTotalRatings = () => {
    return Object.values(ratings).reduce((acc, count) => acc + count, 0);
  };

  const getTotalScore = () => {
    return Object.entries(ratings).reduce((acc, [rating, count]) => acc + rating * count, 0);
  };

  return (
    <div>
      <h1>Rate Cinema Hall</h1>

      <div>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button key={rating} onClick={() => handleRating(rating)}>
            {rating} Star
          </button>
        ))}
      </div>

      <h2>Ratings Summary:</h2>
      <ul>
        {Object.entries(ratings).map(([rating, count]) => (
          <li key={rating}>
            {rating} Star: {count} {count === 1 ? 'vote' : 'votes'}
          </li>
        ))}
      </ul>

      <h3>Total Votes: {getTotalRatings()}</h3>
      <h3>Total Score: {getTotalScore()}</h3>
    </div>
  );
}



import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const [oneStar, setOneStar] = useState(0);
  const [twoStar, setTwoStar] = useState(0);
  const isFirstRender = useRef(true); // Track first render

  // Load data from localStorage on first render
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('rating'));
    if (savedData) {
      setOneStar(savedData.oneStar || 0);
      setTwoStar(savedData.twoStar || 0);
    }
  }, []);

  // Save data to localStorage when votes change (after initial render)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const rating = { oneStar, twoStar };
    localStorage.setItem('rating', JSON.stringify(rating));
  }, [oneStar, twoStar]);

  const handleOne = () => setOneStar((prev) => prev + 1);
  const handleTwo = () => setTwoStar((prev) => prev + 1);

  const totalVotes = oneStar + twoStar;
  const totalScore = oneStar * 1 + twoStar * 2;

  return (
    <div>
      <h1>Rate Cinema Hall</h1>

      <div>
        <button onClick={handleOne}>1 Star</button>
        <button onClick={handleTwo}>2 Star</button>
      </div>

      <h2>Ratings Summary:</h2>
      <ul>
        <li>1 Star: {oneStar} votes</li>
        <li>2 Star: {twoStar} votes</li>
      </ul>

      <h3>Total Votes: {totalVotes}</h3>
      <h3>Total Score: {totalScore}</h3>
    </div>
  );
}

