import React from 'react';
import styles from './AboutSection.module.css';
import { FaLaptopCode, FaMobileAlt, FaTools } from 'react-icons/fa';
import yourImage from '../../assets/Feroz.png.png' // Import your image here

const AboutSection = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={yourImage} alt="Feroz Ali Panhwar" className={styles.image} />
        </div>
        <div className={styles.content}>
        <div><h3>About Me</h3></div>  
          <div className={styles.text}>
            <p>
              I am <span className={styles.highlight}>FEROZ ALI PANHWAR</span>, a passionate Full Stack Web Developer and React Native Developer with a knack for creating dynamic and responsive web applications. With a solid foundation in both front-end and back-end technologies, I thrive on crafting solutions that are not only functional but also visually appealing.
            </p>
            <p>
              My journey in development began with a fascination for technology and problem-solving. I enjoy working with modern frameworks and libraries, constantly learning and adapting to new trends. Whether it’s building a mobile app with React Native or a complex web application, I am always up for a challenge.
            </p>
            <p>
              In my spare time, I love exploring new tech, contributing to open source projects, and sharing knowledge with the community. I believe in continuous growth and strive to improve my skills every day.
            </p>
          </div>
          <div className={styles.icons}>
            <div className={styles.iconContainer}>
              <FaLaptopCode className={styles.icon} />
              <p>Web Development</p>
            </div>
            <div className={styles.iconContainer}>
              <FaMobileAlt className={styles.icon} />
              <p>Mobile Development</p>
            </div>
            <div className={styles.iconContainer}>
              <FaTools className={styles.icon} />
              <p>Problem Solving</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
