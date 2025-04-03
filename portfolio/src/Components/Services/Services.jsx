import React from 'react';
import './Services.css';
import theme from '../../assets/theme.png';
import servicedata from '../../assets/services_data';
import arrow from '../../assets/arrow2.png';

const Services = () => {
  return (
    <div id='services' className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme} alt="Theme" />
      </div>
      <div className="services-container">
        {servicedata.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              <p>Read more</p>
              <img src={arrow} alt="Arrow icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
