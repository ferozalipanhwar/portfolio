import React, { useState } from 'react';
import styles from './SkillsSection.module.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPhp, FaPython, FaJava } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import { TbBrandReactNative } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, color: '#E44D26' },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#264de4' },
  { name: 'JavaScript', icon: <FaJsSquare />, color: '#F0DB4F' },
  { name: 'React', icon: <FaReact />, color: '#61DBFB' },
  { name: 'React Native', icon: <TbBrandReactNative />, color: '#61DBFB' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#68A063' },
  { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#4DB33D' },
  { name: 'PHP', icon: <FaPhp />, color: '#8993be' },
  { name: 'Python', icon: <FaPython />, color: '#306998' },
  { name: 'Java', icon: <FaJava />, color: '#f89820' }
];

const SkillsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skillsPerView = 4; // Number of skills visible at once

  const handleNext = () => {
    if (currentIndex < skills.length - skillsPerView) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section className={styles.skillsSection} id="skills">
     <div>  <h3>Skills</h3></div>
      <div className={styles.sliderContainer}>
        <button onClick={handlePrev} disabled={currentIndex === 0} className={styles.arrowBtn}>
          <IoIosArrowBack />
        </button>
        <div className={styles.skillsContainer}>
          {skills.slice(currentIndex, currentIndex + skillsPerView).map((skill, index) => (
            <div className={styles.skillCard} key={index} style={{ borderColor: skill.color }}>
              <div className={styles.icon} style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
        <button onClick={handleNext} disabled={currentIndex === skills.length - skillsPerView} className={styles.arrowBtn}>
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
};

export default SkillsSection;
