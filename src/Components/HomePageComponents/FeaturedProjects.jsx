import React from 'react';
import styles from './FeaturedProjects.module.css';
import image1 from '../../assets/image2.png'
import image2 from '../../assets/image3.png'
import image3 from '../../assets/imamge3.png'
const projects = [
  {
    title: 'Project One',
    description: 'An innovative web application that offers unique features and a seamless user experience.',
    imageUrl: image1,
    Link : 'https://example.com/project-one'
  },
  {
    title: 'Project Two',
    description: 'A e commerce website for imapaired peraon voice Enabled VOICECART',
    imageUrl: image2,
    link: 'https://example.com/project-two'
  },
  {
    title: 'Project Three',
    description: 'An elegant e-commerce platform with modern design and powerful features for online shopping.',
    imageUrl: image3,
    link: 'https://example.com/project-three'
  },
  // Add more projects as needed
];

const FeaturedProjects = () => {
  return (
    <section className={styles.featuredProjects} id="projects">
      <h2>Featured Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <img src={project.imageUrl} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">View More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
