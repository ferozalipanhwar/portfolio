import React from 'react';
import styles from './BlogCard.module.css';

const BlogCard = ({ blog }) => {
  return (
    <div className={styles.card} id='blogs'>
      <img src={blog.image} alt={blog.title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{blog.title}</h3>
        <p className={styles.cardDate}>{blog.date}</p>
        <p className={styles.cardExcerpt}>{blog.excerpt}</p>
        <a href={blog.link} className={styles.readMore}>Read More</a>
      </div>
    </div>
  );
};

export default BlogCard;
