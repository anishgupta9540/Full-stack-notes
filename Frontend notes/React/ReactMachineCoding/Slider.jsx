import React, { useEffect, useState } from "react";

const Slider = () => {
    const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 2000); // 2 seconds

        return () => clearInterval(interval);
    }, []);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div style={{ width: "300px", height: "200px", border: "1px solid black", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontSize: "24px", position: "relative" }}>
            <div>{slides[currentIndex]}</div>

            <div style={{ marginTop: "20px" }}>
                <button onClick={goToPrev} style={{ marginRight: "10px" }}>Previous</button>
                <button onClick={goToNext}>Next</button>
            </div>
        </div>
    );
};

export default Slider;
