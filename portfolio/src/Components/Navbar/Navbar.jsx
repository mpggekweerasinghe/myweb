import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/theme.png';
import underline from '../../assets/underline.png';
import menue from '../../assets/menue.png';
import menuclose from '../../assets/menuclose.png';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <img src={menue} alt="" />
      <ul className="nav-menu">
        <img src={menuclose} alt="" className="nav-mob-close" />
        <li onClick={() => setMenu("home")}>
          <a href="#home">Home</a> {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li onClick={() => setMenu("about")}>
          <a href="#about">About Me</a> {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li onClick={() => setMenu("services")}>
          <a href="#services">Services</a> {menu === "services" && <img src={underline} alt="underline" />}
        </li>
        <li onClick={() => setMenu("work")}>
          <a href="#work">Portfolio</a> {menu === "work" && <img src={underline} alt="underline" />}
        </li>
        <li onClick={() => setMenu("contact")}>
          <a href="#contact">Contact</a> {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>
      <div className="nav-connect"><a href="#contact">Connect with me</a></div>
    </div>
  );
};

export default Navbar;

