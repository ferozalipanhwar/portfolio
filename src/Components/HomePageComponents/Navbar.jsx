import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>PanhwarCode</div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <li><a  smooth={true} duration={500} className={styles.link} href="#home">Home</a></li>
        <li><a to="about" smooth={true} duration={500} className={styles.link} href="#about">About</a></li>
        <li><a to="projects" smooth={true} duration={500} className={styles.link} href="#projects">Projects</a></li>
        <li><a className={styles.link} href="#contact">Contact</a></li>
        <li><a className={styles.link} href="#blogs">Blogs</a></li>
      </ul>
      <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
};

export default Navbar;
