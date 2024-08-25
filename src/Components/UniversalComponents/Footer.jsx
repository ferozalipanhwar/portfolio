import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
          <h3>Contact Me</h3>
          <p>panhwerCode@gmail.com</p>
          <p>Phone: 923256749757</p>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <a href="/" className={styles.link}>Main</a>
        <a href="#about" className={styles.link}>About</a>
        <a href="#contact" className={styles.link}>Contact</a>
        <a href="#projects" className={styles.link}>Projects</a>
        <a href="/blog" className={styles.link}>Blog</a>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} FEROZ ALI PANHWAR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
