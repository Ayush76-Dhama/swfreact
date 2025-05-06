import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Navbar';
import styled from 'styled-components';


const DonationBannerResponsive = styled.div`
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
    margin-top: 41px;
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

function Donation() {
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    phone: '',
    pan: '',
    address: '',
    amount: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    window.location.href = '/payment';
  };

  return (
    <>
      <Navbar />
      <DonationBannerResponsive>
        <img
          src="/images/navbar/Donation Banner Website.png"
          alt="Tender Banner Desktop"
          className="tender-banner-img desktop-only"
        />
        <img
          src="/images/navbar/Donation Banner Mobile.png"
          alt="Tender Banner Mobile"
          className="tender-banner-img mobile-only"
        />
      </DonationBannerResponsive>
      <div className="min-vh-100 py-5" style={{ 
        backgroundColor: '#f8f9fa',
        backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3" style={{color: '#ec1f27'}}>Make a Donation</h1>
            <p className="lead" style={{color: '#3c4142'}}>Your contribution can make a real difference</p>
          </div>

          <div className="row g-4">
            {/* Donation Form Column */}
            <div className="col-lg-7">
              <div className="card border-0 shadow-lg rounded-4 h-100" style={{
                transition: 'transform 0.3s ease',
                ':hover': {
                  transform: 'translateY(-5px)'
                }
              }}>
                <div className="card-body p-4 p-md-5">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            name="firstname"
                            placeholder="Full Name"
                            value={formData.firstname}
                            onChange={handleChange}
                            required
                            style={{borderRadius: '10px'}}
                          />
                          <label htmlFor="firstname" style={{color: '#3c4142'}}>Full Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{borderRadius: '10px'}}
                          />
                          <label htmlFor="email" style={{color: '#3c4142'}}>Email Address</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            style={{borderRadius: '10px'}}
                          />
                          <label htmlFor="phone" style={{color: '#3c4142'}}>Phone Number</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="pan"
                            name="pan"
                            placeholder="PAN Number"
                            value={formData.pan}
                            onChange={handleChange}
                            required
                            style={{borderRadius: '10px'}}
                          />
                          <label htmlFor="pan" style={{color: '#3c4142'}}>PAN Number</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            style={{borderRadius: '10px'}}
                          />
                          <label htmlFor="address" style={{color: '#3c4142'}}>Address</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-4">
                          <input
                            type="number"
                            className="form-control"
                            id="amount"
                            name="amount"
                            placeholder="Amount"
                            value={formData.amount}
                            onChange={handleChange}
                            required
                            min="1"
                            style={{borderRadius: '10px'}}
                          />
                          <label htmlFor="amount" style={{color: '#3c4142'}}>Amount (₹)</label>
                        </div>
                      </div>
                    </div>
                    <button 
                      type="submit" 
                      className="btn btn-lg w-100 py-3 rounded-3" 
                      style={{
                        backgroundColor: '#3c4142',
                        color: 'white',
                        transition: 'all 0.3s ease',
                        border: 'none',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#ec1f27';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#3c4142';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      <i className="bi bi-heart-fill me-2"></i>
                      Donate Now
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Bank Details Column */}
            <div className="col-lg-5">
              <div className="card border-0 shadow-lg rounded-4 h-100" style={{
                transition: 'transform 0.3s ease',
                ':hover': {
                  transform: 'translateY(-5px)'
                }
              }}>
                <div className="card-body p-4">
                  <div 
                    className="d-flex align-items-center mb-3" 
                    style={{ 
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setShowBankDetails(!showBankDetails)}
                  >
                    <i className={`bi ${showBankDetails ? 'bi-arrow-up-circle-fill' : 'bi-arrow-down-circle-fill'} me-2 fs-4`} style={{color: '#ec1f27'}}></i>
                    <h4 className="mb-0" style={{color: '#3c4142'}}>Bank Transfer Details</h4>
                  </div>
                  <hr style={{borderColor: '#ec1f27', opacity: '0.2'}} />
                  
                  {showBankDetails && (
                    <div className="bank-details">
                      <div className="row g-3">
                        {[
                          { label: 'Beneficiary Name', value: 'SheWings Foundation' },
                          { label: 'Bank Name', value: 'ICICI Bank' },
                          { label: 'Account Number', value: '628405018293' },
                          { label: 'Account Type', value: 'Corporate account' },
                          { label: 'IFSC Code', value: 'ICIC0006284' },
                          { label: 'PAN Card', value: 'AAZCS9819F' }
                        ].map((item, index) => (
                          <div className="col-12" key={index}>
                            <div className="p-3 rounded-3" style={{
                              backgroundColor: '#f8f9fa',
                              border: '1px solid rgba(236, 31, 39, 0.1)',
                              transition: 'all 0.3s ease'
                            }}>
                              <small className="text-muted d-block" style={{color: '#3c4142'}}>{item.label}</small>
                              <strong style={{color: '#3c4142'}}>{item.value}</strong>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donation;