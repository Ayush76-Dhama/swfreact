import React from "react";
import "./OurSupporters.css";
import Navbar from "./Navbar";
import styled from "styled-components";

const OurSupportersBannerResponsive = styled.div`
  width: 100%;
  text-align: center;
  background: #fff;
  margin: 0;
  padding: 0;

  .tender-banner-img {
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

const images = [
  "/images/img/supporters/s.png",
  "/images/img/supporters/s1.jpg",
  "/images/img/supporters/s2.jpeg",
  "/images/img/supporters/s3.png",
  "/images/img/supporters/s4.jpg",
  "/images/img/supporters/s5.png",
  "/images/img/supporters/s6.png",
  "/images/img/supporters/s7.jpg",
];

const OurSupporters = () => {
  return (
    <>
      <Navbar />
      <OurSupportersBannerResponsive>
        <img
          src="/images/navbar/support web.png"
          alt="Tender Banner Desktop"
          className="tender-banner-img desktop-only"
        />
        <img
          src="/images/navbar/support mobile.png"
          alt="Tender Banner Mobile"
          className="tender-banner-img mobile-only"
        />
      </OurSupportersBannerResponsive>
      <br />
      <div className="supporters-container">
        {/* <h2 className="section-title">Our Supporters</h2> */}
        <div className="gallery-container d-flex justify-content-center align-items-center">
          <div className="box">
            {images.map((src, index) => (
              <span key={index} style={{ "--i": index + 1 }}>
                <img src={src} alt={`supporter-${index}`} />
              </span>
            ))}
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default OurSupporters;
