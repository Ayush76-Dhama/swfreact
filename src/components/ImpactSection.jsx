import React from 'react';
import CountUp from 'react-countup';
 // Optional for styling

const ImpactSection = () => {
  return (
    <div className="position-relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="position-absolute w-100 h-100 object-fit-cover z-n1"
        style={{ top: 0, left: 0 }}
      >
        <source src="images/img/video/Foundation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>` `

      {/* Content */}
      <div className="container-fluid counter py-5" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
        <div className="container">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
            <h5 className="text-uppercase text-white">Our Impact</h5>
            <p className="text-white mb-0">
              Since our founding, SheWings Foundation has made a measurable impact across communities, both urban and rural. With our focus on women's health, education, and accessibility.
            </p>
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
                <div className="counter-item text-center border p-5 h-100 text-white">
                  <i className={`fas ${item.icon} fa-4x`}></i>
                  <h3 className="my-4">{item.title}</h3>
                  <div className="counter-counting">
                    <span className="text-white fs-2 fw-bold">
                      <CountUp end={item.value} duration={2.5} separator="," />
                    </span>
                    <span className="h1 fw-bold text-white"> {item.suffix}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-center">
                <a className="btn btn-primary text-white py-2 px-4" href="/impact">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
