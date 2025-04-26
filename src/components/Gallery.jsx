import React, { useState, useEffect, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const GallerySection = styled.section`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
    z-index: 0;
  }
`;

const GalleryTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 3rem;
  color: #2d3436;
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #6c5ce7 0%, #a55eea 100%);
    border-radius: 2px;
  }
`;

const SliderContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 3rem;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  &:hover {
    .slider-controls {
      opacity: 1;
      transform: translateY(-50%) scale(1);
    }
  }
`;

const SliderTrack = styled(motion.div)`
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  gap: 2rem;
  padding: 1.5rem 0;
`;

const SliderItem = styled(motion.div)`
  min-width: 400px;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    
    &::after {
      opacity: 1;
    }
    
    .item-title {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ItemTitle = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  color: white;
  z-index: 2;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  
  h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const SliderControls = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%) scale(0.9);
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
  
  button {
    pointer-events: auto;
  }
`;

const SliderButton = styled(motion.button)`
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  font-size: 1.2rem;
  color: #2d3436;
  
  &:hover {
    background: white;
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const SliderDots = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 2rem;
`;

const SliderDot = styled(motion.div)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? '#6c5ce7' : '#dfe6e9'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#a55eea' : '#6c5ce7'};
    transform: scale(1.2);
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
      interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <GallerySection>
      <Container>
        <GalleryTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Gallery
        </GalleryTitle>
        <SliderContainer 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <SliderTrack style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}>
            {galleryItems.map((item) => (
              <SliderItem 
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <img src={item.image} alt={item.title} />
                <ItemTitle className="item-title">
                  <h3>{item.title}</h3>
                </ItemTitle>
              </SliderItem>
            ))}
          </SliderTrack>
          <SliderControls className="slider-controls">
            <SliderButton 
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ←
            </SliderButton>
            <SliderButton 
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              →
            </SliderButton>
          </SliderControls>
          <SliderDots>
            {[...Array(maxIndex + 1)].map((_, index) => (
              <SliderDot
                key={index}
                active={index === currentIndex}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </SliderDots>
        </SliderContainer>
      </Container>
    </GallerySection>
  );
}

export default Gallery;
