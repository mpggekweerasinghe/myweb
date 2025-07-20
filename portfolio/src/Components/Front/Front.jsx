import React from 'react';
import './Front.css';
import dp from '../../assets/dp.png';
import cv from '../../assets/cv.pdf'; 

const Front = () => {
  return (
    <div id="home" className="front max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
      <img src={dp} alt="Profile" className="w-32 sm:w-40 lg:w-48 rounded-full mb-6 profile-img" />
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        <span>"I'm Gayani Weerasinghe, Welcome to my portfolio!"</span>
      </h1>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-300 mb-4">
        Front-end Developer | Backend Developer | UI/UX Designer
      </h3>
      <p className="text-sm sm:text-base max-w-2xl text-gray-400 mb-6">
        I’m an undergraduate Software Engineering student with a passion for building seamless digital
        experiences. I specialize in both frontend and backend development, creating innovative web and
        mobile applications. Constantly exploring new technologies, I strive to craft efficient,
        user-friendly, and scalable solutions.
      </p>
      <div className="front-action flex flex-col sm:flex-row gap-4">
        <a href="#contact" className="front-connect px-6 py-3 rounded-full bg-gradient-to-r from-[#cc0202] to-[#2d0b53] text-white text-sm sm:text-base font-medium hover:scale-105 transition duration-300">
          Connect with me
        </a>
        <a href={cv} download="Gayani_Weerasinghe_CV.pdf" className="front-resume px-6 py-3 rounded-full border-2 border-white text-white text-sm sm:text-base font-medium hover:bg-gradient-to-r hover:from-[#cc0202] hover:to-[#2d0b53] hover:border-none transition duration-300">
          My resume
        </a>
      </div>
    </div>
  );
};

export default Front;
