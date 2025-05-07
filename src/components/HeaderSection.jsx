import React from 'react';
import { Row, Col, Container, Carousel, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Join from './Joinus';

// Using different placeholder images for each slide
// Replace these with your actual images when available
// Removed unused slide1 and slide2 variables


const HeroSection = styled(Row)`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  width: 100%;
  
  /* Large devices (desktops, 1200px and up) */
  @media (min-width: 1200px) {
    min-height: 100vh;
  }
  
  /* Medium devices (tablets, 992px to 1199px) */
  @media (max-width: 1199px) {
    min-height: 90vh;
  }
  
  /* Small devices (landscape phones, 768px to 991px) */
  @media (max-width: 991px) {
    min-height: 80vh;
  }
  
  /* Extra small devices (portrait phones, 576px to 767px) */
  @media (max-width: 767px) {
    min-height: 70vh;
  }
  
  /* Very small devices (small phones, less than 576px) */
  @media (max-width: 575px) {
    min-height: 60vh;
  }
`;

const StyledCarousel = styled(Carousel)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  .carousel-item {
    height: 100vh;
    @media (max-width: 1199px) { height: 90vh; }
    @media (max-width: 991px) { height: 80vh; }
    @media (max-width: 767px) { height: 60vh; }
    @media (max-width: 575px) { height: 50vh; }
  }

  .desktop-only, .mobile-only {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 767px) {
    .mobile-only {
      object-fit: contain;
      background: #fff;
    }
  }

  .carousel-caption {
    bottom: 10%;
    transform: none;
    padding: 0 10px;
    @media (max-width: 767px) {
      bottom: 5%;
      padding: 0 5px;
    }
    h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
      @media (max-width: 767px) {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }
    }
    p {
      font-size: 1rem;
      margin-bottom: 1rem;
      @media (max-width: 767px) {
        font-size: 0.85rem;
        margin-bottom: 0.5rem;
      }
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 5%;
    opacity: 0.7;
    transition: opacity 0.3s ease;
    @media (max-width: 767px) { width: 10%; }
    &:hover { opacity: 1; }
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      width: 30px;
      height: 30px;
      @media (max-width: 767px) { width: 20px; height: 20px; }
    }
  }

  .carousel-indicators {
    margin-bottom: 1rem;
    @media (max-width: 767px) { margin-bottom: 0.5rem; }
    button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin: 0 6px;
      background-color: rgba(255, 255, 255, 0.5);
      border: none;
      transition: all 0.3s ease;
      @media (max-width: 767px) { width: 8px; height: 8px; margin: 0 4px; }
      &:hover { background-color: rgba(255, 255, 255, 0.8); }
      &.active { background-color: #fff; transform: scale(1.2); }
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 767px) {
    gap: 0.5rem;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroButton = styled(Button)`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  @media (max-width: 767px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

const HeaderSection = () => (
  <HeroSection className="text-white">
    <StyledCarousel
      indicators={true}
      controls={true}
      interval={5000}
      pause="hover"
      touch={true}
      fade={true}
    >
      <Carousel.Item>
        <>
          <img
            src="/images/navbar/Slider-1.png"
            alt="Empowering Women"
            className="desktop-only"
          />
          <img
            src="/images/navbar/Slider-1M.png"
            alt="Empowering Women Mobile"
            className="mobile-only"
          />
        </>
        <Carousel.Caption>
          <ButtonContainer>
            <Join />
          </ButtonContainer>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <>
          <img
            src="/images/navbar/Slider-2.png"
            alt="Community Impact"
            className="desktop-only"
          />
          <img
            src="/images/navbar/Slider-2M.png"
            alt="Community Impact Mobile"
            className="mobile-only"
          />
        </>
        <Carousel.Caption>
          <ButtonContainer>
            <Join />
          </ButtonContainer>
        </Carousel.Caption>
      </Carousel.Item>
    </StyledCarousel>
  </HeroSection>
);

export default HeaderSection;
