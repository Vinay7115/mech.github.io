import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <ul className="socialicon3">
          <li>
            <a href="/">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Events</a>
          </li>
          <li>
            <a href="#member">Members</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <p>© 2024 Mekanika. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
