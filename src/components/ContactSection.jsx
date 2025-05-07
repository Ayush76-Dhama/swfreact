import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Navbar from './Navbar';
import axios from 'axios';


const ContactBannerResponsive = styled.div`
  width: 100%;
  text-align: center;
  background: #fff;
  margin: 0;
  padding: 0;

  .tender-banner-img {
    width: 100%;
    max-width: 100vw;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  .desktop-only {
    display: block;
    margin-top: 39px;
  }
  .mobile-only {
    display: none;
  }
  @media (max-width: 768px) {
    .desktop-only {
      display: none;
    }
    .mobile-only {
      display: block;
      margin-top: 90px;
    }
  }
`;
const ContactWrapper = styled.div`
  padding: 4rem 0;
  background-color: #FFF5EC;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #ec1f27;
`;

const ContactDescription = styled.p`
  color: #3c4142;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const ContactCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ContactInfo = styled.div`
  margin-bottom: 1rem;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #ec1f27;
  }
  
  a {
    color: #3c4142;
    text-decoration: none;
    font-size: 1.1rem;
    
    &:hover {
      color: #e67e3b;
    }
  }
`;

const StyledForm = styled(Form)`
  .form-control {
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .btn-primary {
    background-color: #3c4142;
    border-color: #FF8C42;
    padding: 0.75rem 2rem;
    
    &:hover {
      background-color: #3c4142;
      border-color: #e67e3b;
      box-shadow: 0 4px 15px rgba(108, 92, 231, 0.3);
    }
  }
`;

const ImageSection = styled.div`
  img {
    width: auto;
    height:818px ;
    border-radius: 8px;
    margin-top:15px;
  }
`;

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post('http://localhost:3000/api/contact', formData);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Error submitting form. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <Navbar />
      <ContactBannerResponsive>
        <img
          src="/images/navbar/Contact us web.png"
          alt="Tender Banner Desktop"
          className="tender-banner-img desktop-only"
        />
        <img
          src="/images/navbar/Contact us mobile.png"
          alt="Tender Banner Mobile"
          className="tender-banner-img mobile-only"
        />
      </ContactBannerResponsive>
      <ContactWrapper>
        <Container>
          <Row>
            <Col lg={6}>
              <ContactTitle>Get in Touch</ContactTitle>
              <ContactDescription>
                We're here to assist you with any inquiries and welcome your interest in our mission and work. 
                Whether it's about collaborating, volunteering, or learning more about our programs, we're just a call or message away.
              </ContactDescription>
              
              <Row className="mb-4">
                <Col md={6}>
                  <ContactCard>
                    <ContactInfo>
                      <h3>Mail Us</h3>
                      <a href="mailto:info@shewings.com">info@shewings.com</a>
                    </ContactInfo>
                  </ContactCard>
                </Col>
                <Col md={6}>
                  <ContactCard>
                    <ContactInfo>
                      <h3>Call Us</h3>
                      <a href="tel:8800633291">8800633291</a>
                    </ContactInfo>
                  </ContactCard>
                </Col>
              </Row>
              
              <StyledForm onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger">{error}</div>}
                <Form.Control
                  type="text"
                  placeholder="Your First Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Form.Control
                  type="tel"
                  placeholder="Your Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button variant="primary" type="submit" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit'}
                </Button>
              </StyledForm>
            </Col>
            
            <Col lg={6}>
              <ImageSection>
                <img 
                  src="/images/img/contact.jpg" 
                  alt="SheWings Riders Group" 
                />
              </ImageSection>
            </Col>
          </Row>
        </Container>
      </ContactWrapper>
    </>
  );
}

export default ContactSection;
