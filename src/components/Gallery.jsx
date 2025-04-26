import React, { useState, useEffect, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const GalleryTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 2rem;
  
  &:hover {
    .slider-controls {
      opacity: 1;
    }
  }
`;

const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  gap: 1.5rem;
  padding: 1rem 0;
`;

const SliderItem = styled.div`
  min-width: 400px;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SliderControls = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  &.slider-controls {
    opacity: 0;
    &:hover {
      opacity: 1;
    }
  }
`;

const SliderButton = styled.button`
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  font-size: 1.2rem;
  
  &:hover {
    background: white;
    transform: scale(1.1);
  }
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 1.5rem;
`;

const SliderDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? '#333' : '#ccc'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #333;
  }
`;

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const galleryItems = [
    { id: 1, image: '/images/img/Events/IMG_9329.jpg', title: 'Special Event' },
    { id: 2, image: '/images/img/gallery-6.jpg', title: 'Gallery Showcase' },
    { id: 3, image: '/images/img/gallery-7.jpg', title: 'Featured Work' },
    { id: 4, image: '/images/img/gallery-10.jpg', title: 'Creative Display' },
    { id: 5, image: '/images/img/Events/IMG_9369.jpg', title: 'Event Highlights' },
    { id: 6, image: '/images/img/Events/IMG_9403.jpg', title: 'Special Moments' },
  ];

  const itemsPerView = 3;
  const maxIndex = galleryItems.length - itemsPerView;

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % (maxIndex + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + (maxIndex + 1)) % (maxIndex + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <Container className="py-5">
      <GalleryTitle>Our Gallery</GalleryTitle>
      <SliderContainer 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <SliderTrack style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}>
          {galleryItems.map((item) => (
            <SliderItem key={item.id}>
              <img src={item.image} alt={item.title} />
            </SliderItem>
          ))}
        </SliderTrack>
        <SliderControls className="slider-controls">
          <SliderButton onClick={prevSlide}>←</SliderButton>
          <SliderButton onClick={nextSlide}>→</SliderButton>
        </SliderControls>
        <SliderDots>
          {[...Array(maxIndex + 1)].map((_, index) => (
            <SliderDot
              key={index}
              active={index === currentIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </SliderDots>
      </SliderContainer>
    </Container>
  );
}

export default Gallery;
