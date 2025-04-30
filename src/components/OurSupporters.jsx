import React from "react";
import "./OurSupporters.css";
import Navbar from "./Navbar";

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
      <br />
      <div className="supporters-container">
        <h2 className="section-title">Our Supporters</h2>
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
