import React from 'react';
import { Row, Col, Container, Carousel, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Using different placeholder images for each slide
// Replace these with your actual images when available
const slide1 = "images/img/navbar/Slider-1.png";
const slide2 = "images/img/navbar/Slider-2.png";
const slide3 = "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

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
    
    /* Large devices (desktops, 1200px and up) */
    @media (min-width: 1200px) {
      height: 100vh;
    }
    
    /* Medium devices (tablets, 992px to 1199px) */
    @media (max-width: 1199px) {
      height: 90vh;
    }
    
    /* Small devices (landscape phones, 768px to 991px) */
    @media (max-width: 991px) {
      height: 80vh;
    }
    
    /* Extra small devices (portrait phones, 576px to 767px) */
    @media (max-width: 767px) {
      height: 70vh;
    }
    
    /* Very small devices (small phones, less than 576px) */
    @media (max-width: 575px) {
      height: 60vh;
    }
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4); /* Dark overlay for better text visibility */
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .carousel-caption {
    bottom: 50%;
    transform: translateY(50%);
    z-index: 2;
    padding: 0 15px;
    max-width: 800px;
    margin: 0 auto;
    
    h3 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      font-weight: 700;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      
      /* Large devices (desktops, 1200px and up) */
      @media (min-width: 1200px) {
        font-size: 3.5rem;
      }
      
      /* Medium devices (tablets, 992px to 1199px) */
      @media (max-width: 1199px) {
        font-size: 3rem;
      }
      
      /* Small devices (landscape phones, 768px to 991px) */
      @media (max-width: 991px) {
        font-size: 2.5rem;
      }
      
      /* Extra small devices (portrait phones, 576px to 767px) */
      @media (max-width: 767px) {
        font-size: 2rem;
      }
      
      /* Very small devices (small phones, less than 576px) */
      @media (max-width: 575px) {
        font-size: 1.5rem;
      }
    }
    
    p {
      font-size: 1.5rem;
      line-height: 1.5;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
      margin-bottom: 2rem;
      
      /* Large devices (desktops, 1200px and up) */
      @media (min-width: 1200px) {
        font-size: 1.5rem;
      }
      
      /* Medium devices (tablets, 992px to 1199px) */
      @media (max-width: 1199px) {
        font-size: 1.3rem;
      }
      
      /* Small devices (landscape phones, 768px to 991px) */
      @media (max-width: 991px) {
        font-size: 1.2rem;
      }
      
      /* Extra small devices (portrait phones, 576px to 767px) */
      @media (max-width: 767px) {
        font-size: 1rem;
      }
      
      /* Very small devices (small phones, less than 576px) */
      @media (max-width: 575px) {
        font-size: 0.9rem;
      }
    }
  }
  
  /* Style the navigation arrows */
  .carousel-control-prev,
  .carousel-control-next {
    width: 5%;
    opacity: 0.7;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 1;
    }
    
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      width: 30px;
      height: 30px;
    }
  }
  
  /* Style the indicators */
  .carousel-indicators {
    margin-bottom: 1rem;
    
    button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin: 0 6px;
      background-color: rgba(255, 255, 255, 0.5);
      border: none;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: rgba(255, 255, 255, 0.8);
      }
      
      &.active {
        background-color: #fff;
        transform: scale(1.2);
      }
    }
    
    /* Adjust indicator position for smaller screens */
    @media (max-width: 767px) {
      margin-bottom: 0.5rem;
      
      button {
        width: 10px;
        height: 10px;
        margin: 0 4px;
      }
    }
  }
`;

const HeroButton = styled(Button)`
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  margin-right: 1rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e03d5d;
    border-color: #e03d5d;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &.btn-outline-light {
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    
    ${HeroButton} {
      margin-right: 0;
      width: 100%;
      max-width: 250px;
    }
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
        <img
          src={slide1}
          alt="Empowering Women"
        />
        <Carousel.Caption>
          <h3>Empowering Women</h3>
          <p>Supporting women's health and wellness initiatives</p>
          <ButtonContainer>
            <HeroButton as={Link} to="/about">Learn More</HeroButton>
            <HeroButton as={Link} to="/contact" variant="outline-light">Contact Us</HeroButton>
          </ButtonContainer>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={slide2}
          alt="Community Impact"
        />
        <Carousel.Caption>
          <h3>Community Impact</h3>
          <p>Creating lasting positive change in communities</p>
          <ButtonContainer>
            <HeroButton as={Link} to="/impact">Our Impact</HeroButton>
            <HeroButton as={Link} to="/campaigns" variant="outline-light">Our Campaigns</HeroButton>
          </ButtonContainer>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={slide3}
          alt="Join Our Mission"
        />
        <Carousel.Caption>
          <h3>Join Our Mission</h3>
          <p>Together we can make a difference</p>
          <ButtonContainer>
            <HeroButton as={Link} to="/donate">Donate Now</HeroButton>
            <HeroButton as={Link} to="/contact" variant="outline-light">Get Involved</HeroButton>
          </ButtonContainer>
        </Carousel.Caption>
      </Carousel.Item>
    </StyledCarousel>
  </HeroSection>
);

export default HeaderSection;
