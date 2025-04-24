import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';

const StyledFooter = styled.footer`
  background-color: #212529;
  color: white;
  padding: 5rem 0 3rem;
`;

const FooterTitle = styled.h5`
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
  display: block;
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
    text-decoration: none;
  }
`;

const SocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 50%;
  margin-right: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const ScrollTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 999;
  
  &:hover {
    background-color: #e03d5d;
    transform: translateY(-3px);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Row>
          {/* Newsletter */}
          <Col md={3} sm={6} className="mb-4">
            <FooterTitle>Newsletter</FooterTitle>
            <p>
              Subscribe to our newsletter to receive updates about our initiatives and events.
            </p>
            <Form className="mt-3">
              <Form.Group className="d-flex">
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  className="rounded-0"
                />
                <Button 
                  variant="primary" 
                  className="rounded-0"
                >
                  Subscribe
                </Button>
              </Form.Group>
            </Form>
            <div className="mt-3">
              <SocialIcon href="#"><FaFacebookF /></SocialIcon>
              <SocialIcon href="#"><FaTwitter /></SocialIcon>
              <SocialIcon href="#"><FaInstagram /></SocialIcon>
              <SocialIcon href="#"><FaLinkedinIn /></SocialIcon>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={3} sm={6} className="mb-4">
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/impact">Our Impact</FooterLink>
            <FooterLink to="/vision-mission">Vision & Mission</FooterLink>
            <FooterLink to="/campaigns">Campaigns</FooterLink>
            <FooterLink to="/gallery">Gallery</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
          </Col>

          {/* Policies */}
          <Col md={3} sm={6} className="mb-4">
            <FooterTitle>Policies</FooterTitle>
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink to="/terms-conditions">Terms & Conditions</FooterLink>
            <FooterLink to="/disclaimer">Disclaimer</FooterLink>
            <FooterLink to="/refund-policy">Refund Policy</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
          </Col>

          {/* Gallery */}
          <Col md={3} sm={6} className="mb-4">
            <FooterTitle>Our Gallery</FooterTitle>
            <Row>
              {[...Array(6)].map((_, idx) => (
                <Col xs={4} key={idx} className="mb-2">
                  <GalleryImage
                    src={`https://via.placeholder.com/80?text=Img+${idx + 1}`}
                    alt={`gallery-${idx + 1}`}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <div className="text-center">
          <p className="mb-0">
            <span className="text-primary fw-bold">SheWings Foundation</span> &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </Container>

      {/* Scroll to top button */}
      <ScrollTopButton
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </ScrollTopButton>
    </StyledFooter>
  );
};

export default Footer;
