import React from 'react';
import styles from './HeroSection.module.css';
import image from '../../assets/Feroz.png.png';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPhp, FaPython, FaJava } from 'react-icons/fa';
import DownloadCV from '../UniversalComponents/DownloadCV';

const HeroSection = () => {
  return (
    <section className={styles.heroSection} id='home'>
      <div className={styles.content}>
      <div className={styles.heading}><h1>Hello, I'm <span className={styles.highlight}>FEROZ ALI PANHWAR</span></h1></div>  
    <div className={styles.heading2}>  <p>
          I am a Full Stack Web Developer and React Native Developer, passionate about building responsive and dynamic web applications. Welcome to my portfolio!
        </p></div>  
        <div className={styles.icons}>
          <FaReact className={styles.reactIcon} />
          <FaNodeJs className={styles.reactIcon} />
          <FaHtml5 className={styles.reactIcon}/>
          <FaCss3Alt className={styles.reactIcon}/>
          <FaJsSquare className={styles.reactIcon}/>
          <FaPhp className={styles.reactIcon}/>
          <FaPython className={styles.reactIcon}/>
          <FaJava className={styles.reactIcon}/>
        </div>
      
      <div className={styles.btns}> <a href="#projects" className={styles.button}>
          View My Work
        </a>
        <DownloadCV/></div> 
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt="FEROZ ALI PANHWAR" className={styles.image} />
      </div>
    </section>
  );
};

export default HeroSection;
