import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

export const Footer = ({ a1, a2, a3, a4, href1, href2, href3, href4 }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h2>Contact Me</h2>
          <span className="redirect">
            <FontAwesomeIcon icon={faEnvelope} />{' '}
            <a href="mailto:baize.mylan47@gmail.com">baize.mylan47@gmail.com</a>
          </span>
          <span className="redirect">
            <FontAwesomeIcon icon={faPhone} />{' '}
            <a href="tel:+33780859346">+33780859346</a>
          </span>
        </div>
        <div className="footer-section socials">
          <h2>Follow Me</h2>
          <a
            href="https://www.linkedin.com/in/mylan-baize-142027277/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/mylan_html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/mylan_rbx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href={href1}>{a1}</a>
            </li>
            <li>
              <a href={href2}>{a2}</a>
            </li>
            <li>
              <a href={href3}>{a3}</a>
            </li>
            <li>
              <a href={href4}>{a4}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Mylan Portfolio | Designed by Me
      </div>
    </footer>
  )
}

export default Footer
