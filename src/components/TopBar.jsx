import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const TopBarWrapper = styled.div`
  background-color: #ec1f27;
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
    
    svg {
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
                <FontAwesomeIcon icon={faEnvelope} />
                info@shewings.org
              </a>
              <a href="tel:+919876543210">
                <FontAwesomeIcon icon={faPhone} />
                +91 8938827779
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                New Delhi, India
              </a>
            </ContactInfo>
          </Col>
          <Col md={4}>
            <SocialLinks>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </SocialLinks>
          </Col>
        </Row>
      </Container>
    </TopBarWrapper>
  );
};

export default TopBar; 