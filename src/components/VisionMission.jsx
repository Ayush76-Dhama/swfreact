import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./VisionMission.css";
import styled from 'styled-components';

const VMBannerResponsive = styled.div`
  width: 100%;
  text-align: center;
  background: #fff;
  margin: 0;
  padding: 0;

  .vm-banner-img {
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

const Mission = () => {
  return (
    <>
      <Navbar />
      <VMBannerResponsive>
        <img
          src="/images/navbar/V&M web.png"
          alt="Vision & Mission Banner Desktop"
          className="vm-banner-img desktop-only"
        />
        <img
          src="/images/navbar/V&M mobile.png"
          alt="Vision & Mission Banner Mobile"
          className="vm-banner-img mobile-only"
        />
      </VMBannerResponsive>
      <div className="vision-mission-container">
        <div className="container-fluid py-5">
          <div className="container py-5 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="container mt-4"
            >
              <div className="row justify-content-center gap-4">
                {/* Vision Box */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="col-md-5 p-4 d-flex flex-column align-items-center vision-box"
                >
                  <div className="service-item text-center">
                    <div className="service-link">
                      <h3 className="section-title">Vision</h3>
                    </div>
                  </div>
                  <p className="mt-3 text-justify">
                    At SheWings Foundation, we envision a world where every person—regardless of gender,
                    economic background, or social status—has access to essential health knowledge,
                    resources, and support. Our long-term vision is to foster an inclusive, informed, and
                    empowered society in which healthcare is not a privilege but a universal right.
                  </p>
                </motion.div>

                {/* Mission Box */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="col-md-5 p-4 d-flex flex-column align-items-center mission-box"
                >
                  <div className="service-item text-center">
                    <div className="service-link">
                      <h3 className="section-title">Mission</h3>
                    </div>
                  </div>
                  <p className="mt-3 text-justify">
                    At SheWings Foundation, our mission is to empower individuals and communities with the
                    knowledge and resources needed for a healthier life. We strive to eliminate stigmas
                    surrounding women's health issues and ensure that health education is accessible to all,
                    from young adults to seniors, in both urban and rural areas.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="commitment-section">
          <div className="container py-5">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="row justify-content-center"
            >
              <div className="container mt-4">
                <div className="row justify-content-center mt-4">
                  <div className="col-md-10 p-4 commitment-box">
                    <h3 className="section-title">Our Commitment for the Future</h3>
                    <p className="text-justify">
                      Our mission is more than a statement—it's a lifelong commitment to creating a world
                      where health knowledge and resources are available to all. As we grow, we remain
                      dedicated to evolving our programs to meet the needs of diverse communities and respond
                      to changing health landscapes. We will continue to invest in innovative solutions,
                      sustainable resources, and partnerships that extend our mission's reach. SheWings
                      Foundation invites you to join us in our mission. Together, we can create a future where
                      health, dignity, and empowerment are a reality for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Core Pillars Section */}
        <div className="pillars-section">
          <div className="container py-5 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="section-heading"
            >
              Our Core Pillars
            </motion.h2>
            <div className="row justify-content-center">
              <div className="container mt-4">
                <div className="row justify-content-center gap-4">
                  {/* Health Education */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="col-md-5 p-4 d-flex flex-column align-items-center pillar-box"
                  >
                    <div className="service-item text-center">
                      <div className="service-link">
                        <h3 className="section-title">Health Education</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-justify">
                      Education is at the heart of what we do. Our workshops, seminars, and campaigns focus on
                      essential topics such as menstrual hygiene, reproductive health, cancer awareness,
                      mental health, and maternal wellness. We work with schools, workplaces, and community
                      centers to provide health education that is accurate, practical, and engaging.
                    </p>
                  </motion.div>

                  {/* Resource Accessibility */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="col-md-5 p-4 d-flex flex-column align-items-center pillar-box"
                  >
                    <div className="service-item text-center">
                      <div className="service-link">
                        <h3 className="section-title">Resource Accessibility</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-justify">
                      Access to quality health resources is vital for personal well-being. SheWings Foundation
                      is committed to bridging the gap by providing sustainable, affordable personal care
                      products and resources in underserved communities.
                    </p>
                  </motion.div>

                  {/* Community Advocacy */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="col-md-5 p-4 d-flex flex-column align-items-center pillar-box"
                  >
                    <div className="service-item text-center">
                      <div className="service-link">
                        <h3 className="section-title">Community Advocacy and Partnerships</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-justify">
                      We believe that change happens when communities come together. SheWings Foundation
                      collaborates with local leaders, schools, healthcare providers, and corporate partners
                      to extend our reach and maximize impact.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
