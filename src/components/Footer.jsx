import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  padding: 60px 0 20px;
  
  @media (max-width: 768px) {
    padding: 40px 0 20px;
  }
`;

const FooterTitle = styled.h5`
  font-weight: 600;
  margin-bottom: 30px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 40px;
    height: 2px;
    background-color: #FF4B6E;
  }
`;

const FooterLink = styled.a`
  color: #ccc;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #FF4B6E;
    transform: translateX(5px);
  }
`;

const SocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  margin-right: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #FF4B6E;
    color: #fff;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  margin-top: 40px;
  text-align: center;
  color: #aaa;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <FooterTitle>About SheWings</FooterTitle>
            <p className="text-muted">
              SheWings Foundation is dedicated to empowering women's health and wellness through education, support, and community initiatives.
            </p>
            <div className="mt-3">
              <SocialIcon href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </SocialIcon>
              <SocialIcon href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </SocialIcon>
              <SocialIcon href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </SocialIcon>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink href="#about">About Us</FooterLink>
            <FooterLink href="#campaigns">Campaigns</FooterLink>
            <FooterLink href="#impact">Our Impact</FooterLink>
            <FooterLink href="#contact">Contact Us</FooterLink>
          </Col>
          
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <FooterTitle>Contact Info</FooterTitle>
            <p className="text-muted mb-2">
              <i className="fas fa-map-marker-alt me-2"></i> 123 Foundation Street, City
            </p>
            <p className="text-muted mb-2">
              <i className="fas fa-phone me-2"></i> +1 234 567 890
            </p>
            <p className="text-muted mb-2">
              <i className="fas fa-envelope me-2"></i> info@shewings.org
            </p>
          </Col>
          
          <Col lg={3} md={6}>
            <FooterTitle>Newsletter</FooterTitle>
            <p className="text-muted mb-3">Subscribe to our newsletter for updates and news.</p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your email" 
                aria-label="Your email" 
              />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </Col>
        </Row>
        
        <Copyright>
          <p>&copy; {new Date().getFullYear()} SheWings Foundation. All rights reserved.</p>
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
