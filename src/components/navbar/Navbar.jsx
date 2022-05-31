import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'; 

const Menu = () => {
  <>
   <p><a href="#home">Home</a></p>
   <p><a href="#whatPortfolio">Portfolio</a></p>
   <p><a href="#possibility">Open Ai</a></p>
   <p><a href="#features">Case Studies</a></p>
   <p><a href="#blog">Library</a></p>
  </>
};

// BEM -> Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="whatPortfolio__navbar">
      <div className="whatPortfolio__navbar-links">
        <div className="whatPortfolio__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="whatPortfolio__navbar-links_container">
        <p><a href="#home">Home</a></p>
        <p><a href="#whatPortfolio">Portfolio</a></p>
        <p><a href="#possibility">Open Ai</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="whatPortfolio__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="whatPortfolio__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
      {toggleMenu && (
        <div className="whatPortfolio__navbar-menu_container scale-up-center">
          <div className="whatPortfolio__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#whatPortfolio">Portfolio</a></p>
            <p><a href="#possibility">Open Ai</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
              <div className="whatPortfolio__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Navbar;