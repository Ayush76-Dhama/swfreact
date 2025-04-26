import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import 'bootstrap/dist/css/bootstrap.min.css';

const SectionContainer = styled(motion.div)`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;
  padding: 5rem 0;
  
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

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #6c5ce7 0%, #a55eea 100%);
    border-radius: 2px;
  }
`;

const FlipBoxContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
`;

const FlipBox = styled(motion.div)`
  width: 100%;
  height: 400px;
  perspective: 1000px;
`;

const FlipBoxInner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
  
  ${FlipBox}:hover & {
    transform: rotateY(180deg);
  }
`;

const FlipBoxFront = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
    z-index: 1;
  }
`;

const FlipBoxBack = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const FlipBoxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${FlipBox}:hover & {
    transform: scale(1.05);
  }
`;

const FlipBoxTitle = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  padding: 1.5rem;
  font-weight: 600;
  font-size: 1.2rem;
  z-index: 2;
`;

const FlipBoxText = styled(motion.p)`
  color: #333;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <SectionContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Impact
        </SectionTitle>
        <FlipBoxContainer>
          {impactItems.map(item => (
            <FlipBox
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
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
    </SectionContainer>
  );
};

export default ImpactSection;
