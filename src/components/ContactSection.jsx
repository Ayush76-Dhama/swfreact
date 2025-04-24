import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const ContactCard = styled(Card)`
  height: 100%;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ContactIcon = styled.div`
  font-size: 2rem;
  color: #FF4B6E;
  margin-bottom: 1rem;
`;

const StyledForm = styled(Form)`
  .form-control {
    border-radius: 0.5rem;
    padding: 0.75rem;
    margin-bottom: 1rem;
  }
  
  .btn-primary {
    background-color: #FF4B6E;
    border-color: #FF4B6E;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    
    &:hover {
      background-color: #e03d5d;
      border-color: #e03d5d;
    }
  }
`;

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <Container className="py-5">
      <ContactTitle>Contact Us</ContactTitle>
      <Row className="mb-5">
        <Col md={3} sm={6} className="mb-4">
          <ContactCard className="text-center p-4">
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <Card.Title>Our Location</Card.Title>
            <Card.Text>
              123 Main Street, City Name<br />
              State, Country - 12345
            </Card.Text>
          </ContactCard>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <ContactCard className="text-center p-4">
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            <Card.Title>Phone Number</Card.Title>
            <Card.Text>
              +1 (123) 456-7890<br />
              +1 (123) 456-7891
            </Card.Text>
          </ContactCard>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <ContactCard className="text-center p-4">
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <Card.Title>Email Address</Card.Title>
            <Card.Text>
              info@shewings.com<br />
              support@shewings.com
            </Card.Text>
          </ContactCard>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <ContactCard className="text-center p-4">
            <ContactIcon>
              <FaClock />
            </ContactIcon>
            <Card.Title>Working Hours</Card.Title>
            <Card.Text>
              Monday - Friday: 9am - 5pm<br />
              Saturday: 10am - 2pm
            </Card.Text>
          </ContactCard>
        </Col>
      </Row>
      
      <Row>
        <Col lg={6} className="mb-4">
          <ContactCard className="p-4">
            <Card.Title className="mb-4">Send Us a Message</Card.Title>
            <StyledForm onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </StyledForm>
          </ContactCard>
        </Col>
        <Col lg={6} className="mb-4">
          <ContactCard className="p-4">
            <Card.Title className="mb-4">Find Us on Map</Card.Title>
            <div style={{ height: '400px', backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p>Map will be displayed here</p>
            </div>
          </ContactCard>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactSection;
