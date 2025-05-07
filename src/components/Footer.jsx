import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';
import axios from 'axios';

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
  const [formData, setFormData] = useState({ email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/subscribe`, formData);
      setSuccess(true);
      setFormData({ email: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Error submitting form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
            <Form className="mt-3" onSubmit={handleSubmit}>
              {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
              {success && <Alert variant="success" className="mb-3">Thank you for subscribing!</Alert>}
              <Form.Group className="d-flex">
                <Form.Control 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email" 
                  className="rounded-0"
                  required
                />
                <Button 
                  variant="primary" 
                  className="rounded-0"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
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
              <Col xs={4} className="mb-2">
                <GalleryImage
                  src={'/images/img/gallery-1.jpg'}
                  alt={'gallery-1'}
                />
              </Col>
              <Col xs={4} className="mb-2">
                <GalleryImage
                  src={'/images/img/gallery-2.jpg'}
                  alt={'gallery-2'}
                />
              </Col>
              <Col xs={4} className="mb-2">
                <GalleryImage
                  src={'/images/img/gallery-3.jpg'}
                  alt={'gallery-3'}
                />
              </Col>
              <Col xs={4} className="mb-2">
                <GalleryImage
                  src={'/images/img/gallery-4.jpg'}
                  alt={'gallery-4'}
                />
              </Col>
              <Col xs={4} className="mb-2">
                <GalleryImage
                  src={'/images/img/gallery-5.jpg'}
                  alt={'gallery-5'}
                />
              </Col>
              <Col xs={4} className="mb-2">
                <GalleryImage
                  src={'/images/img/gallery-6.jpg'}
                  alt={'gallery-6'}
                />
              </Col>
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
