import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// INSERT_YOUR_REWRITE_HERE
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ImpactSection from './ImpactSection';

const StyledSection = styled(motion.section)`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
    z-index: 0;
  }
`;

const GradientText = styled.span`
  background: #ec1f27;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #6c5ce7 0%, #a55eea 100%);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
`;

const StyledCard = styled(Card)`
  border: 1px solid red;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  height: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(108, 92, 231, 0.1), rgba(165, 94, 234, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.12);
    
    &::before {
      opacity: 1;
    }
  }

  .card-title {
    color: #dc3545;
    font-weight: 600;
    margin-bottom: 1rem;
    text-decoration: none;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #dc3545 0%, #ff8a80 100%);
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
  }

  .card-text {
    color: #6c757d;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const FounderImage = styled.img`
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  transition: transform 0.5s ease;
  width: 100%;
  height: 500px;
  object-fit: cover;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(108, 92, 231, 0.2), rgba(165, 94, 234, 0.2));
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 20px;
  }
  
  &:hover {
    transform: scale(1.02);
    
    &::after {
      opacity: 1;
    }
  }
`;

const AnimatedContainer = styled(motion.div)`
  margin-bottom: 2rem;
`;

const ImpactPage = () => {
  return (
    <div className="bg-white text-dark">
      <StyledSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="display-3 fw-bold text-center mb-4">
              <GradientText>IMPACT</GradientText>
            </h1>
            <p className="lead fst-italic text-center mb-5 fs-3">
              Real stories, real change—see how we make a difference
            </p>
          </motion.div>

          <AnimatedContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Row className="align-items-center mb-5 g-4">
              <Col md={4}>
                <FounderImage
                  src="/images/img/about-2.jpg"
                  alt="Founder"
                  className="img-fluid"
                />
              </Col>
              <Col md={8}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="fw-bold mb-4">
                    <GradientText>Founder's Note</GradientText>
                  </h2>
                  <p className="fs-5 text-muted mb-4">
                    SheWings organization began with a simple idea: everyone deserves access to essential healthcare
                    knowledge and resources. Throughout my journey, I've seen how the lack of awareness and resources impacts
                    lives, particularly for women and underserved communities. That's why I founded SheWings—to bridge this
                    gap and create a platform for education, support, and empowerment.
                  </p>
                  <p className="fs-5 text-muted">
                    Our mission is clear: empower individuals to take charge of their health with confidence and dignity. We're
                    breaking down stigmas, fostering open conversations, and providing resources where they're needed most.
                  </p>
                </motion.div>
              </Col>
            </Row>
          </AnimatedContainer>

          <AnimatedContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-center mb-5 fw-bold">
              <GradientText>Our Core Areas of Impact</GradientText>
            </h2>
            <Row className="g-4">
              {[
                { title: 'Girl Child Education', text: 'SheWings Foundation advocates for accessible and inclusive education for girls. We focus on bridging the educational gap, offering resources and scholarships, and creating mentorship programs that empower girls.' },
                { title: 'Environment and Sustainability', text: 'SheWings supports projects in renewable energy, waste management, and climate action. We collaborate with local communities to promote eco-friendly practices.' },
                { title: "Women's Health and Hygiene", text: 'We advocate for women’s health and menstrual hygiene. We conduct awareness campaigns and provide affordable access to essential products.' },
                { title: 'Skill Development and Healthcare', text: 'We enhance employability and economic independence among women by providing vocational training and healthcare services.' },
                { title: 'Minority Affairs', text: 'SheWings champions the rights and needs of minority communities by providing platforms for marginalized voices and promoting inclusivity.' },
                { title: 'Food and Nutrition Security', text: 'We tackle food scarcity and malnutrition through meal distribution and awareness programs to improve nutritional standards.' }
              ].map((item, idx) => (
                <Col md={4} key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * idx }}
                  >
                    <StyledCard>
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.text}</Card.Text>
                      </Card.Body>
                    </StyledCard>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </AnimatedContainer>


          
       
      



          <AnimatedContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-5"
          >
            <Row className="g-4  w-100 h-100">
              {[
                {
                  title: 'Transforming Lives Through Health Education',
                  text: 'Provides workshops and awareness campaigns on self-breast exams, cervical cancer, mental health, and menstrual hygiene.'
                },
                {
                  title: 'Bridging the Gap with Essential Resources',
                  text: 'Distributes affordable health products in underserved areas, reducing absenteeism and promoting dignity.'
                },
                {
                  title: 'Building Strong, Health-Conscious Communities',
                  text: 'Works with leaders and schools to normalize critical health discussions and foster well-being.'
                },
                {
                  title: 'Stories of Change',
                  text: 'Highlights stories of transformation, resilience, and the real-life impact of SheWings initiatives.'
                }
              ].map((item, idx) => (
                <Col md={6} key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * idx }}
                  >
                    <StyledCard>
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.text}</Card.Text>
                      </Card.Body>
                    </StyledCard>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </AnimatedContainer>
        </Container>
        <ImpactSection/>
      </StyledSection>
    </div>
  );
};

export default ImpactPage;
