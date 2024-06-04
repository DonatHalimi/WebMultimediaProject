import React, { useState, useEffect } from 'react';
import { Stage, Sprite } from '@pixi/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Slider = () => {
    const images = [
        "/src/images/slider-1.jpg",
        "/src/images/slider-2.jpg",
        "/src/images/slider-3.jpg"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [highlightedIndex, setHighlightedIndex] = useState(0);

    const goToPreviousImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
            setHighlightedIndex(currentImageIndex - 1);
        } else {
            setCurrentImageIndex(images.length - 1);
            setHighlightedIndex(images.length - 1);
        }
    };

    const goToNextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
            setHighlightedIndex(currentImageIndex + 1);
        } else {
            setCurrentImageIndex(0);
            setHighlightedIndex(0);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentImageIndex < images.length - 1) {
                setCurrentImageIndex(currentImageIndex + 1);
                setHighlightedIndex(currentImageIndex + 1);
            } else {
                setCurrentImageIndex(0);
                setHighlightedIndex(0);
            }
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentImageIndex]);

    return (
        <div className="slider-container">
            <Stage width={window.innerWidth} height={700}>
                <Sprite
                    image={images[currentImageIndex]}
                    anchor={0.5}
                    x={window.innerWidth / 2}
                    y={200}
                />
            </Stage>
            <div className="block-container">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`block ${highlightedIndex === index ? 'highlight' : ''}`}
                        style={{ animationDuration: '3s', animationDelay: `${index * 3}s` }}
                    ></div>
                ))}
            </div>
            <div className="button-container">
                <button className="previous-button" onClick={goToPreviousImage}><FaArrowLeft /></button>
                <button className="next-button" onClick={goToNextImage}><FaArrowRight /></button>
            </div>
        </div>
    );
};

export default Slider;
