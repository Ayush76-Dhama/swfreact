import React, { useState, useEffect } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import FBuilt from './FBuilt';



const StyledSection = styled(motion.section)`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;
  
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

const ImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  height: 405px;
  margin-bottom: 1.9rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const TabContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border: 1px solid rgba(255,255,255,0.2);
`;

const StyledNav = styled(Nav)`
  .nav-link {
    border-radius: 50px;
    padding: 0.8rem 2rem;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &.active {
      background: linear-gradient(90deg, #6c5ce7 0%, #a55eea 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(108, 92, 231, 0.3);
    }
    
    &:not(.active) {
      background: #f8f9fa;
      color: #495057;
      
      &:hover {
        background: #e9ecef;
      }
    }
  }
`;

const AboutSection = () => {
  const [activeKey, setActiveKey] = useState('tab-1');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <StyledSection 
      className="container-fluid py-5" 
      aria-label="About SheWings"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container py-5">
        <motion.div 
          className="row g-5"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          <motion.div className="col-xl-5" variants={fadeInUp}>
            <ImageContainer>
              {!imageLoaded && (
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-light d-flex align-items-center justify-content-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
              <img
                src="/images/img/about-3.jpg"
                className={!imageLoaded ? 'invisible' : ''}
                alt="About SheWings Foundation team and mission"
                onLoad={handleImageLoad}
                loading="lazy"
              />
              <div className="position-absolute bottom-0 start-0 w-100 p-4" style={{ zIndex: 2 }}>
                <p className="mb-0 fst-italic fs-5 text-white">Empowering women, transforming communities</p>
              </div>
            </ImageContainer>
            
            
            <ImageContainer>
              {!imageLoaded && (
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-light d-flex align-items-center justify-content-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
              <img
                src="/images/img/about-3.jpg"
                className={!imageLoaded ? 'invisible' : ''}
                alt="About SheWings Foundation team and mission"
                onLoad={handleImageLoad}
                loading="lazy"
              />
              <div className="position-absolute bottom-0 start-0 w-100 p-4" style={{ zIndex: 2 }}>
                <p className="mb-0 fst-italic fs-5 text-white">Empowering women, transforming communities</p>
              </div>
            </ImageContainer>
            
            {/* Paragraph after images */}
    

              <FBuilt />

            {/* Additional content after images */}
            <motion.div 
              className="mt-4 p-4 rounded-3"
              style={{ 
                background: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
              variants={fadeInUp}
            >
              <h5 className="fw-bold mb-3" style={{ color: '#6c5ce7' }}>Our Impact</h5>
              <div className="d-flex justify-content-between mb-3">
                <div className="text-center">
                  <h3 className="fw-bold" style={{ 
                    background: 'linear-gradient(90deg, #6c5ce7 0%, #a55eea 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>10K+</h3>
                  <p className="text-muted mb-0">Women Empowered</p>
                </div>
                <div className="text-center">
                  <h3 className="fw-bold" style={{ 
                    background: 'linear-gradient(90deg, #6c5ce7 0%, #a55eea 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>50+</h3>
                  <p className="text-muted mb-0">Communities</p>
                </div>
                <div className="text-center">
                  <h3 className="fw-bold" style={{ 
                    background: 'linear-gradient(90deg, #6c5ce7 0%, #a55eea 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>100+</h3>
                  <p className="text-muted mb-0">Events</p>
                </div>
              </div>
              <div className="text-center mt-3">
                <motion.a 
                  className="btn py-2 px-4 rounded-pill" 
                  href="/impact"
                  style={{ 
                    background: 'linear-gradient(90deg, #6c5ce7 0%, #a55eea 100%)',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(108, 92, 231, 0.3)',
                    border: 'none'
                  }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Our Impact
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div className="col-xl-7" variants={fadeInUp}>
            <ContentContainer className="ps-xl-5">
              <div className="d-flex align-items-center mb-3">
                <div className="me-3" style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, #6c5ce7 0%, #a55eea 100%)' }}></div>
                <h5 className="text-uppercase fw-bold mb-0" style={{ color: '#000000', letterSpacing: '2px' }}>About Us</h5>
              </div>
              <h1 className="mb-4 display-4 fw-bold" style={{ 
                background: 'linear-gradient(90deg, #6c5ce7 0%, #a55eea 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                About SheWings Foundation
              </h1>
              <p className="fs-5 mb-4 text-muted">
                At SheWings Foundation, our mission is simple yet powerful, to create healthier, happier, and empowered communities by addressing issues that impact women and their families. We believe in the strength of community, the power of knowledge, and the potential of every individual to bring about positive change.
              </p>

              <TabContainer>
                <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                  <StyledNav variant="pills" className="d-flex justify-content-center gap-3 mb-4">
                    <Nav.Item>
                      <Nav.Link eventKey="tab-1">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-4">Story</Nav.Link>
                    </Nav.Item>
                  </StyledNav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tab-1">
                      <div className="text-start my-auto">
                        <h5 className="text-uppercase mb-3 mt-3 fw-bold">About SheWings Foundation</h5>
                        <p className="mb-4 text-muted">
                          At SheWings Foundation, we believe that access to health education and essential resources should be a universal right. Our foundation was created to address the deep-rooted lack of healthcare awareness, especially in areas where conversations around menstrual health, reproductive health, and maternal wellness are often limited or stigmatized.
                        </p>
                        <motion.a 
                          className="btn py-2 px-4 rounded-pill" 
                          href="/about-us"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ 
                            background: 'linear-gradient(90deg, #6c5ce7 0%, #a55eea 100%)',
                            color: 'white',
                            boxShadow: '0 4px 15px rgba(108, 92, 231, 0.3)',
                            border: 'none'
                          }}
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Read More
                        </motion.a>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab-4">
                      <div className="text-start my-auto">
                        <h5 className="text-uppercase mb-3 mt-3 fw-bold">Our Campaigns</h5>
                        <ul className="list-unstyled">
                          {[
                            { title: 'Woman Health Awareness Programme', link: 'https://zeenews.india.com/...' },
                            { title: '#DonateOldBraPanty', link: 'https://newsroompost.com/...' },
                            { title: '#RedDotCampaign', link: 'https://newsroompost.com/...' },
                            { title: '#YesIBleed', link: 'https://newsroompost.com/...' },
                            { title: '#FeedTheFuture', link: 'https://newsroompost.com/...' }
                          ].map((item, index) => (
                            <motion.li 
                              key={index} 
                              className="mb-3"
                              whileHover={{ x: 5 }}
                            >
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none text-dark d-flex align-items-center p-2 rounded"
                                style={{ 
                                  transition: 'all 0.3s ease',
                                  backgroundColor: 'rgba(255, 255, 255, 0.5)'
                                }}
                              >
                                <span className="me-2" style={{ color: '#6c5ce7' }}>→</span>
                                <span>{item.title}</span>
                              </a>
                            </motion.li>
                          ))}
                          <motion.li 
                            className="mt-4"
                            whileHover={{ y: -3 }}
                          >
                            <a
                              href="https://www.youtube.com/watch?v=jnxrBBCg8Kg"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn py-2 px-4 rounded-pill d-inline-flex align-items-center"
                              style={{ 
                                background: 'linear-gradient(90deg, #6c5ce7 0%, #a55eea 100%)',
                                color: 'white',
                                boxShadow: '0 4px 15px rgba(108, 92, 231, 0.3)',
                                border: 'none'
                              }}
                            >
                              <span className="me-2">▶</span>
                              <span>Watch Video</span>
                            </a>
                          </motion.li>
                        </ul>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </TabContainer>
            </ContentContainer>
          </motion.div>
        </motion.div>
      </div>
    </StyledSection>
  );
};

export default AboutSection;
