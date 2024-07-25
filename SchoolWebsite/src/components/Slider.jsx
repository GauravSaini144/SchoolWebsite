import React, { useState, useEffect } from 'react';
import "./Slider.css"
const Slider = ({slides}) => {

  const [currentSlide, setCurrentSlide] = useState(0);
 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="carousel w-full mx-auto Slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full 
            ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 hidden'
          }
          `}
        >
          <img src={slide} className="w-full" loading='lazy' alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};



export default Slider;
