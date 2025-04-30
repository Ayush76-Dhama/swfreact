import React, { useState, useEffect } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styled from 'styled-components';

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
  const [isDirectRoute, setIsDirectRoute] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const currentPath = window.location.pathname;
    setIsDirectRoute(currentPath === '/about');
    console.log('Current Path:', currentPath);
    console.log('isDirectRoute:', currentPath === '/about');
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

  const Action = () => {
    const sections = [
      {
        text: "SheWings Foundation drives action and advocacy for lasting health change. We collaborate with experts and leaders to improve healthcare access, from menstrual hygiene in schools to workplace mental health programs. Rooted in research and community input, our initiatives address specific challenges, ensuring impactful, tailored solutions for diverse needs."
      },
      {
        text: "SheWings Foundation drives action and advocacy for lasting health change. We collaborate with experts and leaders to improve healthcare access, from menstrual hygiene in schools to workplace mental health programs. Rooted in research and community input, our initiatives address specific challenges, ensuring impactful, tailored solutions for diverse needs."
      },
    ]
  }


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
              <div className="position-absolute bottom-0 start-0 w-100 p-4" >
                <p className="mb-0 fst-italic fs-5 text-white">Empowering women, transforming communities</p>
              </div>
            </ImageContainer>


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


      {isDirectRoute && (
        <div
          className="container-fluid py-5"
          style={{
            background: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
            objectFit: 'cover'
          }}
        >
          <div className="container py-5 text-center">
            <div className="row justify-content-center">
              <div>
                <h1 className="mb-4 text-dark">A Foundation Built on Action and Advocacy</h1>
                <p className="mb-4 text-dark">
                  SheWings Foundation isn’t just about providing information; it’s about
                  driving action and advocacy to create real, lasting change. Our work extends
                  beyond simple awareness to advocate for healthcare policies and access that
                  support individuals across all communities. We collaborate with public health
                  experts, local leaders, and policy influencers to bring attention to health
                  issues that are often underrepresented. From advocating for better menstrual
                  hygiene resources in schools to encouraging workplaces to implement mental
                  health programs, we are committed to building a system that supports holistic
                  health for all.
                </p>
              </div>

              <div>
                <p className="mb-4 text-dark">
                  One of our core strengths at SheWings Foundation is our focus on
                  understanding the unique challenges faced by the communities we serve. Every
                  program we design is rooted in careful research and community feedback. By
                  spending time with the individuals and groups we aim to support, we gain
                  insight into the specific barriers they face, allowing us to tailor our
                  initiatives effectively. Whether it’s a rural village with limited healthcare
                  access or a corporate environment where health awareness could make a
                  difference in productivity, our approach is always focused on meeting people
                  where they are and addressing their specific needs.
                </p>
              </div>

              <div>
                <p className="mb-4 text-dark">
                  Education is at the heart of everything we do at SheWings Foundation. We know
                  that knowledge empowers people to take control of their lives and make better
                  health decisions. This is why our programs emphasize more than just
                  information; we foster critical thinking, self-care practices, and
                  community-building through education. Our health sessions are designed to be
                  interactive and accessible, ensuring that everyone—from school students to
                  working professionals—gains valuable insights they can apply in their daily
                  lives.
                </p>
                <p className="mb-4 text-dark">
                  We offer resources that help individuals understand how their health impacts
                  their overall quality of life, how to identify health risks, and where to find
                  the help they need. By focusing on education, SheWings Foundation empowers
                  each participant to become an advocate for their own well-being, as well as
                  for the well-being of their family, friends, and community.
                </p>
              </div>

              <div>
                <p className="mb-4 text-dark">
                  We believe that meaningful health changes don’t happen in isolation. SheWings
                  Foundation builds supportive networks within each community we serve,
                  bringing together health professionals, educators, volunteers, and advocates
                  who share our commitment to positive change. These networks create a sense of
                  solidarity, allowing people to find guidance and support from others who are
                  on the same journey toward better health.
                </p>
                <p className="mb-4 text-dark">
                  For instance, our maternal health programs connect new and expectant mothers
                  with trained lactation consultants, counselors, and peer support groups,
                  ensuring they have a reliable support system throughout this significant phase
                  of their lives. Similarly, our cancer awareness campaigns offer a safe space
                  for individuals to share their experiences, learn from each other, and receive
                  practical support and guidance.
                </p>
              </div>

              <div>
                <p className="mb-4 text-dark">
                  SheWings Foundation invites you to join us on this journey. From volunteering
                  and participating in our programs to donating or partnering with us, there are
                  many ways to be involved. Together, we can bring health education to every
                  corner of society, helping to build a future where healthcare knowledge is a
                  shared asset, and well-being is within everyone’s reach.
                </p>
                <p className="mb-4 text-dark">
                  Explore SheWings Foundation’s programs, learn about our impact, and be part of
                  a movement dedicated to creating a healthier, informed world. Together, let’s
                  build a future where knowledge and compassion transform lives, one community
                  at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </StyledSection>
  );
};

export default AboutSection;
