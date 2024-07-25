import React from 'react';
import "./Slider2.css"
const Slider2 = ({images}) => {
  
  return (
    <div className="carousel carousel-center rounded-box Slider2">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className="carousel-item m-1"
        >
          <img src={imageUrl} alt="Img" loading='lazy'  />
        </div>
      ))}
    </div>
  );
};

export default Slider2;
