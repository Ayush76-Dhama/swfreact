import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const TopBarWrapper = styled.div`
  background-color: #FF4B6E;
  color: white;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  
  @media (max-width: 767px) {
    display: none;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      color: rgba(255, 255, 255, 0.8);
      transform: translateY(-1px);
    }
    
    i {
      font-size: 0.9rem;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  
  a {
    color: white;
    text-decoration: none;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
      background-color: white;
      color: #FF4B6E;
      transform: translateY(-2px);
    }
  }
`;

const TopBar = () => {
  return (
    <TopBarWrapper>
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <ContactInfo>
              <a href="mailto:info@shewings.org">
                <i className="fas fa-envelope"></i>
                info@shewings.org
              </a>
              <a href="tel:+919876543210">
                <i className="fas fa-phone"></i>
                +91 98765 43210
              </a>
              <a href="#">
                <i className="fas fa-map-marker-alt"></i>
                New Delhi, India
              </a>
            </ContactInfo>
          </Col>
          <Col md={4}>
            <SocialLinks>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </SocialLinks>
          </Col>
        </Row>
      </Container>
    </TopBarWrapper>
  );
};

export default TopBar; 