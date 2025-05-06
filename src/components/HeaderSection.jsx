import React from 'react';
import { Row, Col, Container, Carousel, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Join from './Joinus';

// Using different placeholder images for each slide
// Replace these with your actual images when available
const slide1 = "/images/navbar/Slider-1.png";
const slide2 = "/images/navbar/Slider-2.png";
// const slide3 = "/images/navbar/Slider-1.png";


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
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    
    /* Very small devices (small phones, less than 576px) */
    @media (max-width: 575px) {
      height: 60vh;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
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
    width: 100%;
    
    @media (max-width: 767px) {
      padding: 0 10px;
      bottom: 40%;
    }
    
    @media (max-width: 575px) {
      bottom: 30%;
      padding: 0 5px;
    }
    
    h3 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      font-weight: 700;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      
      @media (max-width: 1199px) {
        font-size: 3rem;
      }
      
      @media (max-width: 991px) {
        font-size: 2.5rem;
      }
      
      @media (max-width: 767px) {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      
      @media (max-width: 575px) {
        font-size: 1.5rem;
        margin-bottom: 0.75rem;
      }
    }
    
    p {
      font-size: 1.5rem;
      line-height: 1.5;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
      margin-bottom: 2rem;
      
      @media (max-width: 1199px) {
        font-size: 1.3rem;
      }
      
      @media (max-width: 991px) {
        font-size: 1.2rem;
      }
      
      @media (max-width: 767px) {
        font-size: 1rem;
        margin-bottom: 1.5rem;
      }
      
      @media (max-width: 575px) {
        font-size: 0.9rem;
        margin-bottom: 1rem;
      }
    }
  }
  
  .carousel-control-prev,
  .carousel-control-next {
    width: 5%;
    opacity: 0.7;
    transition: opacity 0.3s ease;
    
    @media (max-width: 767px) {
      width: 10%;
    }
    
    &:hover {
      opacity: 1;
    }
    
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      width: 30px;
      height: 30px;
      
      @media (max-width: 767px) {
        width: 20px;
        height: 20px;
      }
    }
  }
  
  .carousel-indicators {
    margin-bottom: 1rem;
    
    @media (max-width: 767px) {
      margin-bottom: 0.5rem;
    }
    
    button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin: 0 6px;
      background-color: rgba(255, 255, 255, 0.5);
      border: none;
      transition: all 0.3s ease;
      
      @media (max-width: 767px) {
        width: 8px;
        height: 8px;
        margin: 0 4px;
      }
      
      &:hover {
        background-color: rgba(255, 255, 255, 0.8);
      }
      
      &.active {
        background-color: #fff;
        transform: scale(1.2);
      }
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
  }
  
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    button, a {
      width: 100%;
      max-width: 250px;
      margin: 0.25rem 0;
    }
  }
`;

const HeroButton = styled(Button)`
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  @media (max-width: 767px) {
    padding: 0.5rem 1.25rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 575px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
  
  &:hover {
    background-color: #e03d5d;
    border-color: #e03d5d;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &.btn-outline-light {
    &:hover {
      color: white;
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

          <ButtonContainer>
            {/* <HeroButton>{Join}</HeroButton> */}
            <Join />
            {/* <HeroButton as={Link} to="/contact" variant="outline-light">Contact Us</HeroButton> */}
          </ButtonContainer>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={slide2}
          alt="Community Impact"
        />
        <Carousel.Caption>

          <ButtonContainer>
            <Join />
          </ButtonContainer>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          src={slide3}
          alt="Join Our Mission"
        /> */}
        <Carousel.Caption>
          {/* <h3>Join Our Mission</h3>
          <p>Together we can make a difference</p> */}
          <ButtonContainer>
            <Join />
            {/* <HeroButton as={Link} to="/contact" variant="outline-light">Get Involved</HeroButton> */}
          </ButtonContainer>

        </Carousel.Caption>
      </Carousel.Item>
    </StyledCarousel>
  </HeroSection>
);

export default HeaderSection;
