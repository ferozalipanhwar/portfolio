import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import styles from './SkillsSlider.module.css';

function SkillsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "MongoDB",
    "Express",
    "Python",
    "Django",
    "GraphQL",
  ];

  const skillsPerView = 3; // Number of skills visible at once

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
    <div className={styles.container}>
      <div className={styles.slider}>
        {skills.slice(currentIndex, currentIndex + skillsPerView).map((skill, index) => (
          <div key={index} className={styles.skill}>
            {skill}
          </div>
        ))}
        <div
          className={`${styles.blur} ${currentIndex > 0 ? styles.visible : ''}`}
          style={{ left: 0 }}
        ></div>
        <div
          className={`${styles.blur} ${currentIndex < skills.length - skillsPerView ? styles.visible : ''}`}
          style={{ right: 0 }}
        ></div>
      </div>
      <div className={styles.controls}>
        <button onClick={handlePrev} disabled={currentIndex === 0} className={styles.arrowBtn}>
          <IoIosArrowForward className={styles.arrow} style={{ transform: 'rotate(180deg)' }} />
        </button>
        <button onClick={handleNext} disabled={currentIndex === skills.length - skillsPerView} className={styles.arrowBtn}>
          <IoIosArrowForward className={styles.arrow} />
        </button>
      </div>
    </div>
  );
}

export default SkillsSlider;
