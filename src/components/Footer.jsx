import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="__footer container">
        <h1>Easy Web Learner</h1>
        <p>
          Easy Web Learner, born October 2023, decodes web development
          mysteries. Explore frontend projects, articles, and easy learning.
          Happy coding!
        </p>
        <div className="social__icon">
          <Link to="https://fb.com" target="_blank">
            <FaFacebook />
          </Link>
          <Link to="https://fb.com" target="_blank">
            <BsTwitterX />
          </Link>
          <Link to="https://fb.com" target="_blank">
            <FaYoutube />
          </Link>
          <Link to="https://fb.com" target="_blank">
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <div className="__copyright">
        <div className="footer__main">
        <p>&copy; {currentYear} Easy Web Learner. All Rights Reserved.</p>
        <div className="__deatils__link">
          <Link to="/about-us" >About Us</Link>
          <Link to="/terms-conditions" >Terms & Conditions</Link>
          <Link to="/privacy-policy" >Privacy Policy</Link>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
