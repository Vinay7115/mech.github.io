import React, { useState } from "react";
// import './NavBar.css'; // Assuming you have a CSS file for styles

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div id="home">
      <nav>
        <img src="logo.jpeg" className="logo" alt="Company Logo" />
        <ul id="sidemenu" style={{ right: menuOpen ? "0" : "-200px" }}>
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Events</a>
          </li>{" "}
          {/* Corrected the spelling */}
          <li>
            <a href="#member">Members</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <i id="cross" className="fa-solid fa-xmark" onClick={closeMenu}></i>
        </ul>
        <i id="menu" className="fa-solid fa-bars" onClick={openMenu}></i>
      </nav>
    </div>
  );
};

export default NavBar;
