import React, { useEffect } from 'react';
import styles from './Experience.module.css';

const Experience = ({ experiences }) => {
  useEffect(() => {
    const handleScroll = () => {
      const line = document.querySelector(`.${styles.line}`);
      const experienceItems = document.querySelectorAll(`.${styles.experienceItem}`);
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      let lineHeight = 0;

      experienceItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top + scrollTop;

        if (scrollTop + windowHeight - 100 > itemTop) {
          item.classList.add(styles.show);
          lineHeight = (index + 1) / experienceItems.length;
        } else {
          item.classList.remove(styles.show);
        }
      });

      line.style.height = `${lineHeight * 100}%`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.experienceContainer}>
      <div className={styles.timeline}>
        <div className={styles.line}></div>
        {experiences.map((exp, index) => (
          <div className={styles.experienceItem} key={index}>
            <h4 className={styles.title}>{exp.title}</h4>
            <p className={styles.description}>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
