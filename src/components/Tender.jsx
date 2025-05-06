import React from 'react';
import './Tender.css'; // Optional: for any custom styles
import styled from 'styled-components';
import Navbar from './Navbar';

const TenderBannerResponsive = styled.div`
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

const Tender = () => {
  return (
    <>
      <Navbar />
      <TenderBannerResponsive>
        <img
          src="/images/navbar/Tender.png"
          alt="Tender Banner Desktop"
          className="tender-banner-img desktop-only"
        />
        <img
          src="/images/navbar/TenderM.png"
          alt="Tender Banner Mobile"
          className="tender-banner-img mobile-only"
        />
      </TenderBannerResponsive>
      <div className="tender-container">
        <div className="container">
          <div className="tender-header">
            Bids Are Invited For RO Water Treatment System 250 LPH Filtration Capacity
          </div>

          {/* Description Section */}
          <div className="tender-section">
            <h3 className="section-title">Description</h3>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>RO-250 LPH (RO+UV+UF+TDS Controller)</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      Supply, Installation & Commissioning, Testing, Training and after Sale Maintenance services on
                      site till one year
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      1 Yr Warranty for manufacturing defect including repair & maintenance or replacement of any
                      electrical parts & all Pumps with all consumables (As per schedule of contract sign with Company)
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td><strong>Technical specification of Industrial RO Water Purifier</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical Specifications Section */}
          <div className="tender-section">
            <h3 className="section-title">Technical Specifications</h3>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Parameters</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Application</td>
                    <td>Suitable for Purification of Brackish water, Tap water/Municipal Water Etc.</td>
                  </tr>
                  <tr>
                    <td>Purification Technology</td>
                    <td>Online RO+UV+UF+TDS Controller</td>
                  </tr>
                  <tr>
                    <td>Body Material</td>
                    <td>SS stainless Steel Skid (Heavy)</td>
                  </tr>
                  <tr>
                    <td>Purification Production Rate</td>
                    <td>Up to 250 LPH @ Input TDS 2500 PPM</td>
                  </tr>
                  <tr>
                    <td>Filter Cartridge Type</td>
                    <td>Dual media Filter-Five stage, Jumbo Filter 20", RO+UV+UF+TDS Controller with sterilization Filtration system.</td>
                  </tr>
                  <tr>
                    <td>Membrane Type</td>
                    <td>4040 Brackish Water (High Recovery)</td>
                  </tr>
                  <tr>
                    <td>Inlet Water Pressure/Temp (Min)</td>
                    <td>0.5 Kg/cm² (7.1 PSI /10°C)</td>
                  </tr>
                  <tr>
                    <td>Inlet Water Pressure/Temp (Max)</td>
                    <td>3.5 Kg/cm² (49.5 PSI /35°C)</td>
                  </tr>
                  <tr>
                    <td>UV Lamp Power Consumption</td>
                    <td>12-16 Watt for sanitization work</td>
                  </tr>
                  <tr>
                    <td>Storage Tank Capacity</td>
                    <td>Food Grade SS-304 Tank 200 Ltr. With Two Outlet taps</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tender Calendar Section */}
          <div className="tender-section">
            <h3 className="section-title">Tender Calendar Dates</h3>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Date and Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bid Submission Start Date</td>
                    <td>24-02-2025 1:00 pm</td>
                  </tr>
                  <tr>
                    <td>Bid Closing Date</td>
                    <td>03-03-2025 2:00 pm</td>
                  </tr>
                  <tr>
                    <td>Bid Opening & Evaluation</td>
                    <td>24-02-2025 1:00 pm</td>
                  </tr>
                  <tr>
                    <td>Visit For Registration</td>
                    <td>BS-161, Sector 70, Noida-201301</td>
                  </tr>
                  <tr>
                    <td>Contact For Registration</td>
                    <td>8800633291</td>
                  </tr>
                  <tr>
                    <td>Bank Account Name</td>
                    <td>SheWings Foundation</td>
                  </tr>
                  <tr>
                    <td>Bank A/C Number</td>
                    <td>628405018293</td>
                  </tr>
                  <tr>
                    <td>Bank Name</td>
                    <td>ICICI Bank</td>
                  </tr>
                  <tr>
                    <td>IFSC Code</td>
                    <td>ICIC0006284</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mb-5">
            <a href="#" className="details-btn">Click for More Details</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tender;
