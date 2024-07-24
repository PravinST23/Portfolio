import React from 'react';
import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from 'react-router-dom';

const navLinks = [
  { path: '/', name: 'About' },
  { path: '/skills', name: 'Skills' },
  { path: '/project', name: 'Project' },
  { path: '/education', name: 'Education' },
  { path: '/contact', name: 'Contact' }
];

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <div className="footer-content">
          <p className="nameid">Pravin Shanmugavel</p>
          <ul className="social_icon">
            <li><a href="https://discord.com/users/913290247226404925" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDiscord} /></a></li>
            <li><a href="https://github.com/PravinST23" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://www.linkedin.com/in/pravin-s-978609258/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
          </ul>
          <ul className="menu">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} activeClassName="active-link">{link.name}</NavLink>
              </li>
            ))}
          </ul>
          <p className='footerpara'>&copy;2024 Pravin Shanmugavel | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
