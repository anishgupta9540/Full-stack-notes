import React, { useState, useEffect } from "react";

function GuessNumberGame() {
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
    const [guess, setGuess] = useState("");
    const [message, setMessage] = useState("");
    const [attempts, setAttempts] = useState(0);

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    const handleGuess = () => {
        const numericGuess = Number(guess);
        setAttempts(prev => prev + 1);

        if (numericGuess === randomNumber) {
            setMessage(`🎉 Correct! You guessed it in ${attempts + 1} tries.`);
        } else if (numericGuess < randomNumber) {
            setMessage("📉 Too low! Try again.");
        } else {
            setMessage("📈 Too high! Try again.");
        }
    };

    const handleReset = () => {
        setRandomNumber(generateRandomNumber());
        setGuess("");
        setMessage("");
        setAttempts(0);
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: 400, margin: "auto" }}>
            <h2>Guess the Number (1–100)</h2>
            <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Enter your guess"
            />
            <button onClick={handleGuess} style={{ marginLeft: "10px" }}>
                Guess
            </button>
            <p>{message}</p>
            <button onClick={handleReset}>🔄 Restart Game</button>
        </div>
    );
}

export default GuessNumberGame;
