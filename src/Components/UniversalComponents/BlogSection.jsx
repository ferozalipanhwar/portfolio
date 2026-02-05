import { motion } from 'framer-motion';
import image2 from '../../assets/picture12.png'; // Image path wahi rakha hai
import BlogCard from './BlogCard';

const BlogSection = () => {
  const blogs = [
    {
      title: "Mastering the MERN Stack: A Beginner's Guide",
      date: "September 1, 2024",
      excerpt: "Explore the fundamentals of the MERN stack (MongoDB, Express, React, Node.js) and learn how to build powerful full-stack applications.",
      image: image2,
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
      title: "Java vs. Python: Choosing the Right Language",
      date: "July 25, 2024",
      excerpt: "Java and Python are two of the most popular programming languages. This blog discusses their strengths, weaknesses, and when to use each.",
      image: image2,
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
      title: "Writing Clean and Maintainable JavaScript Code",
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

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 } // Cards 0.2s ke gap par aayenge
    }
  };

  return (
    <section id="blogs" className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden">
      
      {/* --- Background Decor --- */}
      {/* Background mein light blobs taaki section khali na lage */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono tracking-widest uppercase text-sm">Latest Articles</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Blogs</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            Explore my latest thoughts on web development, React ecosystem, and coding best practices.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* --- Blog Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog, index) => (
            // BlogCard component humne pichle step mein banaya tha
            <BlogCard key={index} blog={blog} />
          ))}
        </motion.div>

        {/* --- View More Button --- */}
        <div className="text-center mt-16">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-slate-800 border border-cyan-500/30 text-white font-semibold hover:bg-cyan-500 hover:border-transparent transition-all shadow-lg hover:shadow-cyan-500/25"
          >
            Visit My Medium / Blog Page
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;