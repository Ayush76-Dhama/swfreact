import React, { useState, useEffect } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';

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

  // Create motion components to ensure the import is used
  const MotionDiv = motion.div;
  const MotionSection = motion.section;

  return (
    <MotionSection 
      className="container-fluid about py-5 position-relative overflow-hidden" 
      aria-label="About SheWings"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Modern background with gradient and pattern */}
      <div className="position-absolute top-0 start-0 w-100 h-100" 
        style={{ 
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,240,255,0.9) 100%)',
          zIndex: -2 
        }}
      ></div>
      <div className="position-absolute top-0 start-0 w-100 h-100" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(0,0,0,0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(0,0,0,0.05) 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          zIndex: -1 
        }}
      ></div>
      
      <div className="container py-5">
        <MotionDiv 
          className="row g-5"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          <MotionDiv className="col-xl-5" variants={fadeInUp}>
            <div className="h-100 position-relative rounded-4 overflow-hidden shadow-lg" 
              style={{ 
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                transform: 'perspective(1000px) rotateY(-5deg)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg)'}
            >
              {!imageLoaded && (
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-light d-flex align-items-center justify-content-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
              <img
                src="/images/img/about-3.jpg"
                className={`img-fluid h-100 w-100 object-fit-cover ${!imageLoaded ? 'invisible' : ''}`}
                style={{
                  width: '500px',
                  height: '400px',
                  maxWidth: '100%'
                }}
                width="500"
                height="400"
                alt="About SheWings Foundation team and mission"
                onLoad={handleImageLoad}
                loading="lazy"
              />
              <div className="position-absolute bottom-0 start-0 w-100 p-4" 
                style={{ 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                  color: 'white'
                }}
              >
                <p className="mb-0 fst-italic fs-5">Empowering women, transforming communities</p>
              </div>
            </div>
          </MotionDiv>
          <MotionDiv className="col-xl-7" variants={fadeInUp}>
            <div className="ps-xl-5">
              <div className="d-flex align-items-center mb-3">
                <div className="me-3" style={{ width: '40px', height: '3px', backgroundColor: '#6c5ce7' }}></div>
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
                At SheWings Foundation, our mission is simple yet powerful, to create healthier, happier, and empowered communities by addressing issues that impact women and their families. We believe in the strength of community, the power of knowledge, and the potential of every individual to bring about positive change. Through education, support, and sustainable initiatives, we're transforming lives and building a world where everyone can thrive.
              </p>

              <div className="tab-class p-4 rounded-4" 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                  <Nav variant="pills" className="d-flex justify-content-center gap-3 mb-4">
                    <Nav.Item>
                      <Nav.Link 
                        eventKey="tab-1" 
                        className={`d-flex py-2 text-center rounded-pill ${activeKey === 'tab-1' ? 'bg-primary text-white' : 'bg-light text-dark'}`}
                        role="tab"
                        aria-selected={activeKey === 'tab-1'}
                        style={{ 
                          transition: 'all 0.3s ease',
                          boxShadow: activeKey === 'tab-1' ? '0 4px 15px rgba(108, 92, 231, 0.3)' : 'none'
                        }}
                      >
                        <span className="px-4">About</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link 
                        eventKey="tab-4" 
                        className={`d-flex py-2 text-center rounded-pill ${activeKey === 'tab-4' ? 'bg-primary text-white' : 'bg-light text-dark'}`}
                        role="tab"
                        aria-selected={activeKey === 'tab-4'}
                        style={{ 
                          transition: 'all 0.3s ease',
                          boxShadow: activeKey === 'tab-4' ? '0 4px 15px rgba(108, 92, 231, 0.3)' : 'none'
                        }}
                      >
                        <span className="px-4">Story</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tab-1">
                      <div className="text-start my-auto">
                        <h5 className="text-uppercase mb-3 mt-3 fw-bold">About SheWings Foundation</h5>
                        <p className="mb-4 text-muted">
                          At SheWings Foundation, we believe that access to health education and essential resources should be a universal right. Our foundation was created to address the deep-rooted lack of healthcare awareness, especially in areas where conversations around menstrual health, reproductive health, and maternal wellness are often limited or stigmatized.
                        </p>
                        <a 
                          className="btn py-2 px-4 rounded-pill" 
                          href="/about-us"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ 
                            background: 'linear-gradient(90deg, #6c5ce7 0%, #a55eea 100%)',
                            color: 'white',
                            boxShadow: '0 4px 15px rgba(108, 92, 231, 0.3)',
                            transition: 'all 0.3s ease',
                            border: 'none'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                          Read More
                        </a>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab-4">
                      <div className="text-start my-auto">
                        <h5 className="text-uppercase mb-3 mt-3 fw-bold">Our Campaigns</h5>
                        <ul className="list-unstyled">
                          <li className="mb-3">
                            <a
                              href="https://zeenews.india.com/..."
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none text-dark d-flex align-items-center"
                              style={{ 
                                transition: 'all 0.3s ease',
                                padding: '8px 12px',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(255, 255, 255, 0.5)'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(108, 92, 231, 0.1)';
                                e.currentTarget.style.transform = 'translateX(5px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                                e.currentTarget.style.transform = 'translateX(0)';
                              }}
                            >
                              <span className="me-2" style={{ color: '#6c5ce7' }}>→</span>
                              <span>Woman Health Awareness Programme</span>
                            </a>
                          </li>
                          <li className="mb-3">
                            <a 
                              href="https://newsroompost.com/lifestyle/donateoldbrapanty-is-trending-as-wo…s-are-donating-old-dry-cleaned-ugs-here-is-how-you-can-donate/586298.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none text-dark d-flex align-items-center"
                              style={{ 
                                transition: 'all 0.3s ease',
                                padding: '8px 12px',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(255, 255, 255, 0.5)'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(108, 92, 231, 0.1)';
                                e.currentTarget.style.transform = 'translateX(5px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                                e.currentTarget.style.transform = 'translateX(0)';
                              }}
                            >
                              <span className="me-2" style={{ color: '#6c5ce7' }}>→</span>
                              <span>#DonateOldBraPanty</span>
                            </a>
                          </li>
                          <li className="mb-3">
                            <a 
                              href="https://newsroompost.com/lifestyle/donateoldbrapanty-is-trending-as-wo…s-are-donating-old-dry-cleaned-ugs-here-is-how-you-can-donate/586298.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none text-dark d-flex align-items-center"
                              style={{ 
                                transition: 'all 0.3s ease',
                                padding: '8px 12px',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(255, 255, 255, 0.5)'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(108, 92, 231, 0.1)';
                                e.currentTarget.style.transform = 'translateX(5px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                                e.currentTarget.style.transform = 'translateX(0)';
                              }}
                            >
                              <span className="me-2" style={{ color: '#6c5ce7' }}>→</span>
                              <span>#RedDotCampaign</span>
                            </a>
                          </li>
                          <li className="mb-3">
                            <a 
                              href="https://newsroompost.com/lifestyle/donateoldbrapanty-is-trending-as-wo…s-are-donating-old-dry-cleaned-ugs-here-is-how-you-can-donate/586298.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none text-dark d-flex align-items-center"
                              style={{ 
                                transition: 'all 0.3s ease',
                                padding: '8px 12px',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(255, 255, 255, 0.5)'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(108, 92, 231, 0.1)';
                                e.currentTarget.style.transform = 'translateX(5px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                                e.currentTarget.style.transform = 'translateX(0)';
                              }}
                            >
                              <span className="me-2" style={{ color: '#6c5ce7' }}>→</span>
                              <span>#YesIBleed</span>
                            </a>
                          </li>
                          <li className="mb-3">
                            <a 
                              href="https://newsroompost.com/lifestyle/donateoldbrapanty-is-trending-as-wo…s-are-donating-old-dry-cleaned-ugs-here-is-how-you-can-donate/586298.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none text-dark d-flex align-items-center"
                              style={{ 
                                transition: 'all 0.3s ease',
                                padding: '8px 12px',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(255, 255, 255, 0.5)'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(108, 92, 231, 0.1)';
                                e.currentTarget.style.transform = 'translateX(5px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                                e.currentTarget.style.transform = 'translateX(0)';
                              }}
                            >
                              <span className="me-2" style={{ color: '#6c5ce7' }}>→</span>
                              <span>#FeedTheFuture</span>
                            </a>
                          </li>
                          <li className="mt-4">
                            <a
                              href="https://www.youtube.com/watch?v=jnxrBBCg8Kg"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn py-2 px-4 rounded-pill d-inline-flex align-items-center"
                              style={{ 
                                background: 'linear-gradient(90deg, #6c5ce7 0%, #a55eea 100%)',
                                color: 'white',
                                boxShadow: '0 4px 15px rgba(108, 92, 231, 0.3)',
                                transition: 'all 0.3s ease',
                                border: 'none'
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                              <span className="me-2">▶</span>
                              <span>Watch Video</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  );
};

export default AboutSection;
