import React from 'react';
import './Ayu.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const FlipBox = () => {
  return (
    <div className="flip-box-container">
      {/* First Flip Box */}
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img
              src="images/img/service-5.jpg"
              alt="Healthcare"
              className="img-fluid"
            />
            <div className="card-btn">
              <button type="button" className="btn1 px-2 py-2 m-2 w-2">
                Healthcare Awareness and Education
              </button>
            </div>
          </div>
          <div className="flip-box-back">
            <div className="flip-box-front">
              <p className='Our'>
                Our programs span topics that directly affect women's health, including menstrual hygiene, breastfeeding, reproductive health, and cancer awareness. We organize sessions for diverse groups—from students and professionals to communities and rural populations—ensuring everyone has access to the information and resources needed to take charge of their health. Working closely with healthcare.
              </p>
              {/* <div className="read_more_btn">
                <a href="mobile-app-development.php">
                  <button type="button" className="btn btn-secondary">
                    Read More
                  </button>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Second Flip Box */}
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img
              src="images/img/service-9.jpg"
              alt="Maternal Health"
              className="img-fluid"
            />
            <div className="card-btn">
              <button type="button" className="btn1 px-2 py-2 m-2 w-2">
                Lactation and Maternal Health Support
              </button>
            </div>
          </div>
          <div className="flip-box-back">
            <div className="flip-box-front">
              <p className='Our'>
              We understand the challenges that new mothers face, especially working women who juggle responsibilities and need tailored support tobalance work and family life Our lactation programs and maternal health support offer resources,counseling, and essential information to help mothers nurture their children with confidence. By encouraging breastfeeding and providing guidance.</p>
              {/* <div className="read_more_btn">
                <a href="maternal-health.php">
                  <button type="button" className="btn btn-secondary">
                    Read More
                  </button>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Third Flip Box */}
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img
              src="images/img/service-8.jpg"
              alt="Healthcare Products"
              className="img-fluid"
            />
            <div className="card-btn">
              <button type="button" className="btn1 px-2 py-2 m-2 w-2">
                Accessible Healthcare Products
              </button>
            </div>
          </div>
          <div className="flip-box-back">
            <div className="flip-box-front">
              <p className='Our'>
              Access to safe, sustainable, and affordable health products is key to maintaining well-being. That's why we developed the SheWings product line, designed with high-quality,eco-friendly materials to ensure comfort and safety Our 100% cotton sanitary pads and personal care products meet the highest standards, ensuring every woman has access to essentials that support their health and dignity.
              </p>
              {/* <div className="read_more_btn">
                <a href="healthcare-products.php">
                  <button type="button" className="btn btn-secondary">
                    Read More
                  </button>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Flip Box */}
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img
              src="images/img/service-11.jpg"
              alt="Pollution Control"
              className="img-fluid"
            />
            <div className="card-btn">
              <button type="button" className="btn1 px-2 py-2 m-2 w-2">
                National Pollution Control Day
              </button>
            </div>
          </div>
          <div className="flip-box-back">
            <div className="flip-box-front">
              <p className='Our'>
              National Pollution Control Day is observed annually to raise awareness about the pressing need to address pollution and its devastating impact on our environment and health. This day commemorates the lives lost in the tragic Bhopal Gas Tragedy of 1984, reminding us of the consequences of industrial negligence. The theme for this day focuses on promoting sustainable practices, reducing environmental hazards.
              </p>
              {/* <div className="read_more_btn">
                <a href="pollution-control.php">
                  <button type="button" className="btn btn-secondary">
                    Read More
                  </button>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipBox;
