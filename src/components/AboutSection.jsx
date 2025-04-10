import React from 'react';
import { Row, Col, Button, Image, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Section = styled.section`
  padding: 6rem 0;
  background: #fff;
`;

const ImageWrapper = styled.div`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    right: 15px;
    bottom: 15px;
    border: 2px solid #FF4B6E;
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover::before {
    top: -20px;
    left: -20px;
  }

  img {
    // width: 100%;
    // height: auto;
    // max-height: 400px;
    // object-fit: cover;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    width:471px;
    height:671px;
  }

  &:hover img {
    transform: translate(5px, 5px);
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #2D3436;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: #FF4B6E;
    margin-top: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #636E72;
  margin-bottom: 2rem;
`;

const StyledButton = styled(Button)`
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  transition: all 0.3s ease;
  background: #FF4B6E;
  border: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255,75,110,0.2);
    background: #FF758C;
  }
`;

const AboutSection = () => (
    <Section id="about">
        <Container>
            <Row className="align-items-center">
                <Col lg={6} className="mb-5 mb-lg-0">
                    <ImageWrapper>
                        <Image
                            src="/images/about.png"
                            alt="About SheWings Foundation"
                        />
                    </ImageWrapper>
                </Col>
                <Col lg={6} className="ps-lg-5">
                    <Title>About Us</Title>
                    <Description>
                        At SheWings Foundation, our mission is simple yet powerful: to create healthier,
                        happier, and empowered communities by addressing issues that impact women and their
                        families. We believe in taking action that creates lasting positive change.
                    </Description>
                    <StyledButton href="#campaigns">
                        Explore Our Campaigns
                    </StyledButton>
                </Col>
            </Row>
        </Container>
    </Section>
);

export default AboutSection;
