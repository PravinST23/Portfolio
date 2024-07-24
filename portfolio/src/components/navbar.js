import React, { useState } from "react";
import DeblurIcon from "@mui/icons-material/Deblur";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavItems = ({ toggleMenu, isOpen }) => {
  return (
    <ul className={`nav-items ${isOpen ? "show" : ""}`}>
      <li onClick={toggleMenu}>
        <NavLink to="/" exact activeClassName="active-link">
          About
        </NavLink>
      </li>
      <li onClick={toggleMenu}>
        <NavLink to="/skills" activeClassName="active-link">
          Skills
        </NavLink>
      </li>
      <li onClick={toggleMenu}>
        <NavLink to="/project" activeClassName="active-link">
          Project
        </NavLink>
      </li>
      <li onClick={toggleMenu}>
        <NavLink to="/education" activeClassName="active-link">
          Education
        </NavLink>
      </li>
      <li onClick={toggleMenu}>
        <NavLink to="/contact" activeClassName="active-link">
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-logo">
          <div className="logohome">
            <h3>
              <DeblurIcon className="_logo" />
            </h3>
            <p>Pravin Shanmugavel</p>
          </div>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        <div className={`nav-items-container ${isOpen ? "show" : ""}`}>
          <NavItems toggleMenu={toggleMenu} isOpen={isOpen} />
        </div>
        <hr className="horizontal-line" />
      </div>
    </div>
  );
};

export default Navbar;
