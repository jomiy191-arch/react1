import React, { useState } from 'react';
import Logo from "./images/logo.png";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__container'>

          <a href="#" className="logo">
            <img src={Logo} alt="Logo" /> Artificial Intelligence
          </a>

          <ul className={`header__list ${isOpen ? 'active' : ''}`}>
            <li className='header__item' style={{"--i":1}}><a href="#">Home</a></li>
            <li className='header__item' style={{"--i":2}}><a href="#">About</a></li>
            <li className='header__item' style={{"--i":3}}><a href="#">Services</a></li>
            <li className='header__item' style={{"--i":4}}><a href="#">Blog</a></li>
            <li className='header__item' style={{"--i":5}}><a href="#">Contact</a></li>
            <li className='header__item btn-mobile' style={{"--i":6}}>
              <a href="#">Sign In</a>
            </li>
          </ul>

          <button className='header__btn'><a href="#">Sign In</a></button>

          <div className={`burger ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header;
