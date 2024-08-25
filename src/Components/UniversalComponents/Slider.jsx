import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import styles from './Slider.module.css';

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    { name: 'Voice Cart', image: '', description: 'Description for Voice Cart' },
    { name: 'Machine Learning Projects', image: '', description: 'Description for Machine Learning' },
    { name: 'SMS System', image: '', description: 'Description for SMS System' },
    { name: 'E-learning System', image: '', description: 'Description for E-learning System' },
  ];

  const projectsPerView = 3; // Number of projects visible at once

  const handleNext = () => {
    if (currentIndex < projects.length - projectsPerView) {
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
      <div className={styles.sliderWrapper}>
        <div className={styles.slider} style={{ transform: `translateX(-${currentIndex * (100 / projectsPerView)}%)` }}>
          {projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <h3>{project.name}</h3>
              <img className={styles.projectImage} src={project.image} alt={project.name} />
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        <button onClick={handlePrev} disabled={currentIndex === 0} className={`${styles.arrowBtn} ${styles.prev}`}>
          <IoIosArrowBack />
        </button>
        <button onClick={handleNext} disabled={currentIndex >= projects.length - projectsPerView} className={`${styles.arrowBtn} ${styles.next}`}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default Slider;
