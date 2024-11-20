import React, { useState } from 'react';
import './styles/carousel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!images || images.length === 0) {
    return <div className="no-images">No images to display</div>;
  }

  return (
    <div className="carousel-container">
      <div className="carousel-image-wrapper">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={Slide ${index + 1}}
            className={carousel-image ${index === currentIndex ? 'active' : ''}}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide} 
        className="carousel-nav-button carousel-nav-prev"
      >
        ←
      </button>
      <button 
        onClick={nextSlide} 
        className="carousel-nav-button carousel-nav-next"
      >
        →
      </button>

      {/* Indicator Dots */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`carousel-indicator ${
              index === currentIndex ? 'active' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Example usage
const App = () => {
  const sampleImages = [
    "/api/placeholder/600/400",
    "/api/placeholder/600/401",
    "/api/placeholder/600/402"
  ];

  return (
    <div>
      <ImageCarousel images={sampleImages} />
    </div>
  );
};

export default App;