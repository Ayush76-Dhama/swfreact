import React from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.1;
    z-index: 1;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
  z-index: 0;
`;

const ContentContainer = styled(motion.div)`
  position: relative;
  z-index: 2;
  padding: 5rem 0;
  // background: rgba(0, 0, 0, 0.7);
  // backdrop-filter: blur(10px);
`;

const SectionTitle = styled(motion.h5)`
  text-transform: uppercase;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #6c5ce7 0%, #a55eea 100%);
    border-radius: 2px;
  }
`;

const SectionDescription = styled(motion.p)`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 3rem;
`;

const CounterItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  height: 100%;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  i {
    color: #fefdee;
    margin-bottom: 1.5rem;
    font-size: 3rem;
  }
  
  h3 {
    color: #fefdee;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
  
  .counter-counting {
    span {
      color: #fefdee;
      font-size: 2.5rem;
      font-weight: 700;
      background: #fefdee;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .suffix {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.8);
      -webkit-text-fill-color: rgba(255, 255, 255, 0.8);
    }
  }
`;

const Button = styled(motion.a)`
  background: #3c4142;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  border: none;
  box-shadow: 0 4px 15px rgba(108, 92, 231, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(108, 92, 231, 0.4);
    color: white;
  }
`;

const ImpactSection = () => {
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
      <VideoBackground
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="images/img/video/Foundation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>

      <ContentContainer>
        <div className="container">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
            <SectionTitle
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Impact
            </SectionTitle>
            <SectionDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Since our founding, SheWings Foundation has made a measurable impact across communities, both urban and rural. With our focus on women's health, education, and accessibility.
            </SectionDescription>
          </div>
          <div className="row g-4">
            {[
              {
                icon: 'fa-thumbs-up',
                title: 'Reached over',
                value: 3000000,
                suffix: '+ Individuals',
              },
              {
                icon: 'fa-file-invoice-dollar',
                title: 'Distributed',
                value: 6000000,
                suffix: '+ Pads',
              },
              {
                icon: 'fa-user',
                title: 'Partnered with',
                value: 100,
                suffix: '+ Schools',
              },
              {
                icon: 'fa-heart',
                title: 'Trained',
                value: 10000,
                suffix: '+ Volunteers',
              },
            ].map((item, index) => (
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6" key={index}>
                <CounterItem
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <i className={`fas ${item.icon}`}></i>
                  <h3>{item.title}</h3>
                  <div className="counter-counting">
                    <span>
                      <CountUp end={item.value} duration={2.5} separator="," />
                    </span>
                    <span className="suffix"> {item.suffix}</span>
                  </div>
                </CounterItem>
              </div>
            ))}
            <div className="col-12">
              <motion.div 
                className="d-flex align-items-center justify-content-center mt-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button 
                  href="/impact"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Know More
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ImpactSection;
