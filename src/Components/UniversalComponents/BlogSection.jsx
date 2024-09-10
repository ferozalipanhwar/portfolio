import React from 'react';

import styles from './BlogSection.module.css';
import BlogCard from './BlogCard';
import image2 from '../../assets/picture12.png';

const BlogSection = () => {
  const blogs = [
    {
      title: "Mastering the MERN Stack: A Beginner's Guide",
      date: "September 1, 2024",
      excerpt: "Explore the fundamentals of the MERN stack (MongoDB, Express, React, Node.js) and learn how to build powerful full-stack applications.",
      image: image2, // Replace with the actual path to your image
      link: "/blogs/mastering-mern-stack"
    },
    {
      title: "Building Cross-Platform Apps with React Native",
      date: "August 15, 2024",
      excerpt: "Learn how to create high-performance mobile applications using React Native. This tutorial covers everything from setup to deployment.",
      image: image2, 
      link: "/blogs/cross-platform-react-native"
    },
    {
      title: "Java vs. Python: Choosing the Right Language for Your Project",
      date: "July 25, 2024",
      excerpt: "Java and Python are two of the most popular programming languages. This blog discusses their strengths, weaknesses, and when to use each.",
      image:image2, 
      link: "/blogs/java-vs-python"
    },
    {
      title: "Creating a Real-Time Chat Application with MERN",
      date: "June 30, 2024",
      excerpt: "Step-by-step guide on how to develop a real-time chat application using the MERN stack, complete with user authentication and WebSocket integration.",
      image: image2, 
      link: "/blogs/mern-chat-application"
    },
    {
      title: "Best Practices for Writing Clean and Maintainable JavaScript Code",
      date: "May 20, 2024",
      excerpt: "Writing clean, maintainable JavaScript code is crucial for long-term project success. Here are some best practices that every developer should know.",
      image: image2, 
      link: "/blogs/clean-javascript-code"
    },
    {
      title: "Why Python is a Top Choice for Web Development",
      date: "April 10, 2024",
      excerpt: "Discover the advantages of using Python for web development, including its powerful frameworks like Django and Flask.",
      image: image2, 
      link: "/blogs/python-for-web-development"
    }
  ];
  

  return (
    <div className={styles.blogSection}>
      <h2 className={styles.sectionTitle}>Blogs</h2>
      <p className={styles.sectionIntro}>Explore my latest articles on web development, React, and more.</p>
      <div className={styles.blogGrid}>
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
