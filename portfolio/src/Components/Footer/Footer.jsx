import React from 'react';
import './Footer.css';
import theme from '../../assets/theme.png';
import user from '../../assets/user.png';

const Footer = () => {
  return (
    <div className="footer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="footer-top flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
        <div className="footer-top-left flex flex-col items-center lg:items-start gap-4">
          <img src={theme} alt="Theme" className="w-16 sm:w-20 lg:w-24 rounded-full theme-img" />
          <p className="text-sm sm:text-base max-w-md text-gray-300 text-center lg:text-left">
            I am an undergraduate software engineering student with a strong passion for developing
            innovative solutions. Skilled in Java, Python, and SQL, I enjoy working on projects that
            enhance user experiences and solve real-world problems.
          </p>
        </div>
        <div className="footer-top-right flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="footer-email-input flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-3 rounded-full bg-[#32323B] hover:border-2 hover:border-white transition duration-300">
            <img src={user} alt="User" className="w-8 sm:w-10 rounded-full user-img" />
            <input
              type="email"
              placeholder="Enter your email"
              className="outline-none border-none bg-transparent text-gray-400 text-sm sm:text-base font-outfit"
            />
          </div>
          <div className="footer-subscribe px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#cc0202] to-[#2d0b53] text-white text-sm sm:text-base cursor-pointer hover:scale-105 transition duration-300">
            Subscribe
          </div>
        </div>
      </div>
      <hr className="my-8 border-gray-600" />
      <div className="footer-bottom flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
        <p className="footer-bottom-left text-sm sm:text-base text-gray-400">
          © 2025 Gayani Weerasinghe. All rights reserved.
        </p>
        <div className="footer-bottom-right flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm sm:text-base text-gray-400">
          <p className="cursor-pointer hover:text-white transition duration-300">Term of Services</p>
          <p className="cursor-pointer hover:text-white transition duration-300">Privacy Policy</p>
          <p className="cursor-pointer hover:text-white transition duration-300">Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
