import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="home" className="navbar-logo">
          Portfolio
        </Link>

        <div className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
          <Link
            to="home"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="projects"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="skills"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="blog"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="contact"
            className="nav-link nav-link-cta"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
