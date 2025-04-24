import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const FlipBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FlipBox = styled.div`
  width: 300px;
  height: 400px;
  perspective: 1000px;
`;

const FlipBoxInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  
  ${FlipBox}:hover & {
    transform: rotateY(180deg);
  }
`;

const FlipBoxFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const FlipBoxBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const FlipBoxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FlipBoxTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 15px;
  font-weight: 600;
`;

const FlipBoxText = styled.p`
  color: #333;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const ImpactSection = () => {
  const impactItems = [
    {
      id: 1,
      image: 'images/img/service-5.jpg',
      title: 'Healthcare Awareness and Education',
      description: 'Our programs span topics that directly affect women\'s health, including menstrual hygiene, breastfeeding, reproductive health, and cancer awareness. We organize sessions for diverse groups—from students and professionals to communities and rural populations—ensuring everyone has access to the information and resources needed to take charge of their health.'
    },
    {
      id: 2,
      image: 'images/img/service-9.jpg',
      title: 'Lactation and Maternal Health Support',
      description: 'We understand the challenges that new mothers face, especially working women who juggle responsibilities and need tailored support to balance work and family life. Our lactation programs and maternal health support offer resources, counseling, and essential information to help mothers nurture their children with confidence.'
    },
    {
      id: 3,
      image: 'images/img/service-8.jpg',
      title: 'Accessible Healthcare Products',
      description: 'Access to safe, sustainable, and affordable health products is key to maintaining well-being. That\'s why we developed the SheWings product line, designed with high-quality, eco-friendly materials to ensure comfort and safety. Our 100% cotton sanitary pads and personal care products meet the highest standards.'
    },
    {
      id: 4,
      image: 'images/img/service-11.jpg',
      title: 'National Pollution Control Day',
      description: 'National Pollution Control Day is observed annually to raise awareness about the pressing need to address pollution and its devastating impact on our environment and health. This day commemorates the lives lost in the tragic Bhopal Gas Tragedy of 1984, reminding us of the consequences of industrial negligence.'
    }
  ];

  return (
    <Container className="py-5">
      <SectionTitle>Our Impact</SectionTitle>
      <FlipBoxContainer>
        {impactItems.map(item => (
          <FlipBox key={item.id}>
            <FlipBoxInner>
              <FlipBoxFront>
                <FlipBoxImage src={item.image} alt={item.title} />
                <FlipBoxTitle>{item.title}</FlipBoxTitle>
              </FlipBoxFront>
              <FlipBoxBack>
                <FlipBoxText>{item.description}</FlipBoxText>
              </FlipBoxBack>
            </FlipBoxInner>
          </FlipBox>
        ))}
      </FlipBoxContainer>
    </Container>
  );
};

export default ImpactSection;
