import React from 'react';
import './Services.css';
import theme from '../../assets/theme.png';
import servicedata from '../../assets/services_data';
import arrow from '../../assets/arrow2.png';

const Services = () => {
  return (
    <div id="services" className="services max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="services-title relative flex flex-col items-center text-center mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">My Services</h1>
        <img src={theme} alt="Theme" className="w-24 sm:w-32 lg:w-40 mt-4 theme-img" />
      </div>
      <div className="services-container grid grid-cols-2 gap-6 sm:gap-8">
        {servicedata.map((service, index) => (
          <div key={index} className="services-format flex flex-col justify-center gap-4 p-6 sm:p-8 rounded-lg border-2 border-white hover:border-[#522a81] hover:bg-gradient-to-br hover:from-[#c40303] hover:to-[#412174] transform hover:scale-105 transition duration-400 cursor-pointer">
            <h3 className="text-lg sm:text-xl font-semibold">{service.s_no}</h3>
            <h2 className="text-xl sm:text-2xl font-bold service-title">{service.s_name}</h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-full">{service.s_desc}</p>
            <div className="services-readmore flex items-center gap-3 mt-4">
              <p className="text-sm sm:text-base">Read more</p>
              <img src={arrow} alt="Arrow icon" className="w-5 sm:w-6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;