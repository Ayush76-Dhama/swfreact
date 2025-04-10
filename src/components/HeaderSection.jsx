import React from 'react';
import { Row, Col, Container, Carousel } from 'react-bootstrap';
import styled from 'styled-components';

// Using placeholder images until actual images are added
// Replace these with your actual images when available
const slide1 = "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const slide2 = "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

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
      // background: rgba(0, 0, 0, 0.3); /* Subtle dark overlay instead of pink gradient */
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
  
  /* Hide the navigation arrows */
  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }
  
  /* Style the indicators */
  .carousel-indicators {
    margin-bottom: 1rem;
    
    button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin: 0 6px;
    //   background-color: rgba(255, 255, 255, 0.5);
      border: none;
      transition: all 0.3s ease;
      
      &:hover {
        // background-color: rgba(255, 255, 255, 0.8);
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

const HeaderSection = () => (
  <HeroSection className="text-white">
    <StyledCarousel 
      indicators={true}
      controls={false}
      interval={5000}
      pause="hover"
      touch={true}
      fade={true}
    >
      <Carousel.Item>
        <img
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>Empowering Women</h3>
          <p>Supporting women's health and wellness initiatives</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={slide2}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Community Impact</h3>
          <p>Creating lasting positive change in communities</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          src={slide3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Join Our Mission</h3>
          <p>Together we can make a difference</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </StyledCarousel>
  </HeroSection>
);

export default HeaderSection;
