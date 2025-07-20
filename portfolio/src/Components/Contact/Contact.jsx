import React from 'react';
import './Contact.css';
import theme from '../../assets/theme.png';
import mail from '../../assets/mail.png';
import location from '../../assets/location.png';
import call from '../../assets/call.png';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b07b018a-f7d9-4f82-8bae-4998beea4cf4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="contact-title relative flex flex-col items-center text-center mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Get in touch</h1>
        <img src={theme} alt="Theme" className="w-24 sm:w-32 lg:w-40 mt-4 theme-img" />
      </div>
      <div className="contact-section flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="contact-left flex flex-col gap-6 items-center lg:items-start">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold contact-title-text">
            Let's talk
          </h1>
          <p className="text-sm sm:text-base max-w-md text-gray-300 text-center lg:text-left">
            Feel free to reach out if you're interested in any of my services! I'm always ready to
            collaborate and bring your ideas to life with my expertise.
          </p>
          <div className="contact-details flex flex-col gap-4 text-gray-300 text-sm sm:text-base">
            <div className="contact-detail flex items-center gap-4">
              <img src={mail} alt="Email" className="w-6 sm:w-8 contact-icon" />
              <p>gayaniweerasinghe@gmail.com</p>
            </div>
            <div className="contact-detail flex items-center gap-4">
              <img src={call} alt="Phone" className="w-6 sm:w-8 contact-icon" />
              <p>+94715330202</p>
            </div>
            <div className="contact-detail flex items-center gap-4">
              <img src={location} alt="Location" className="w-6 sm:w-8 contact-icon" />
              <p>Matale, Sri Lanka</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right flex flex-col gap-4 w-full max-w-lg">
          <label htmlFor="name" className="text-gray-300 text-sm sm:text-base font-medium">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="w-full px-4 py-2 sm:py-3 rounded-md bg-[#32323c] text-gray-400 text-sm sm:text-base font-outfit"
          />
          <label htmlFor="email" className="text-gray-300 text-sm sm:text-base font-medium">
            Your Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="w-full px-4 py-2 sm:py-3 rounded-md bg-[#32323c] text-gray-400 text-sm sm:text-base font-outfit"
          />
          <label htmlFor="message" className="text-gray-300 text-sm sm:text-base font-medium">
            Write your message here
          </label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            className="w-full px-4 py-3 rounded-md bg-[#32323c] text-gray-400 text-sm sm:text-base font-outfit"
          ></textarea>
          <button
            type="submit"
            className="contact-submit px-6 py-3 rounded-full bg-gradient-to-r from-[#cc0202] to-[#2d0b53] text-white text-sm sm:text-base font-medium hover:scale-105 transition duration-300"
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;