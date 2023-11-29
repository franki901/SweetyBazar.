import React, { useState, useEffect } from "react";
import "./Banner.css";

const Banner = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Cambia de imagen cada 10 segundos

    return () => clearInterval(interval);
  }, [images]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="banner-container">
      <div className="banner">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex}`}
          className="banner-image"
        />

        <div className="click-area-left" onClick={prevImage}></div>
        <div className="click-area-right" onClick={nextImage}></div>
      </div>
    </div>
  );
};

export default Banner;
