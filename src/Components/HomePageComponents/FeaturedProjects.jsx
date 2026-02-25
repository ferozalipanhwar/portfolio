import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaBuilding, FaCarSide, FaExternalLinkAlt, FaGithub, FaQrcode, FaSeedling, FaUserFriends, FaUtensils } from 'react-icons/fa';

// Images import (Apne real screenshots yahan replace karein)
import { default as image2, default as image3, default as image4, default as image5, default as image6, default as image7, } from '../../assets/picture12.png';

// --- PROJECT DATA ---
const projects = [
  {
    title: 'Alif Akh Academy',
    description: 'A complete Learning Management System (LMS) for online education. Features include student portals, course tracking, and online testing.',
    imageUrl: image2,
    link: 'https://alifakhacademy.online',
    tags: ["MERN Stack", "LMS", "Education"],
    icon: null
  },
  {
    title: 'Autaaq',
    description: 'A cultural social media platform with a "Sindhi Touch". Connects communities with features similar to Facebook but tailored for local interaction.',
    imageUrl: image2,
    link: '#',
    tags: ["React Native", "Social Media", "Firebase"],
    icon: <FaUserFriends />
  },
  {
    title: 'EasyDocs',
    description: 'Smart attendance system using QR Codes. Students scan codes for instant attendance, streamlining classroom management.',
    imageUrl: image3,
    link: '#',
    tags: ["QR Tech", "Mobile App", "Admin Panel"],
    icon: <FaQrcode />
  },
  {
    title: 'Agriculture App',
    description: 'A digital assistant for "Kissan" (Farmers). Helps farmers communicate, check crop health, and get weather updates in local languages.',
    imageUrl: image4,
    link: '#',
    tags: ["AgriTech", "Localization", "Community"],
    icon: <FaSeedling />
  },
  {
    title: 'Share Ride',
    description: 'A carpooling and ride-sharing solution. Connects drivers with passengers to reduce travel costs and traffic congestion.',
    imageUrl: image5,
    link: '#',
    tags: ["Maps API", "Real-time", "Travel"],
    icon: <FaCarSide />
  },
  {
    title: 'Fast Food Store',
    description: 'A dynamic e-commerce app for food delivery. Features menu customization, cart management, and order tracking.',
    imageUrl: image6,
    link: '#',
    tags: ["E-commerce", "Redux", "Stripe"],
    icon: <FaUtensils />
  },
  {
    title: 'UC Complaint System',
    description: 'A municipal management system for tracking and resolving citizen complaints at the Union Council level.',
    imageUrl: image7,
    link: '#',
    tags: ["GovTech", "Management", "Reporting"],
    icon: <FaBuilding />
  },
    {
    title: 'Voice Cart',
    description: 'voice enabled e commerce website for impaired persons',
    imageUrl: image7,
    link: '#',
    tags: ["e commerce", "shop store", "digital"],
    icon: <FaBuilding />
  },
];

// --- 3D CARD COMPONENT ---
const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  // 3D Tilt Logic
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set((clientX - left) / width - 0.5);
    y.set((clientY - top) / height - 0.5);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Spotlight Effect
  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="perspective-1000">
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative flex flex-col h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
      >
        
        {/* Spotlight Border */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20" />
        </div>
        
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden transform-style-3d">
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all z-10"></div>
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
          />
          
          {/* Top Right Icon Badge */}
          {project.icon && (
             <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md p-2 rounded-lg text-cyan-400 border border-white/10 z-20 shadow-lg translate-z-20">
                {project.icon}
             </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow transform-style-3d bg-slate-900/90 backdrop-blur-sm z-10">
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors translate-z-10">
            {project.title}
          </h3>
          
          <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow translate-z-10">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6 translate-z-10">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-slate-800 text-cyan-500 border border-cyan-500/20">
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 mt-auto translate-z-20">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              Live Demo <FaExternalLinkAlt size={12}/>
            </a>
            <a 
              href="#" 
              className="p-2.5 rounded-lg bg-slate-800 text-slate-300 border border-white/10 hover:bg-slate-700 hover:text-white hover:border-white/30 transition-all"
              title="View Code"
            >
              <FaGithub size={18} />
            </a>
          </div>

        </div>

      </motion.div>
    </div>
  );
};

// --- MAIN SECTION ---
const FeaturedProjects = () => {
  return (
    <section id="projects" className="relative bg-slate-950 text-white py-24 px-6 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono tracking-widest uppercase text-sm">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Creations</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
             A showcase of my recent work, ranging from EdTech platforms to culturally localized apps.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* 'View All' Button */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-20"
        >
          <button className="group relative px-8 py-3 rounded-full bg-transparent border border-cyan-500/50 text-cyan-400 font-bold overflow-hidden hover:text-slate-950 transition-colors">
            <div className="absolute inset-0 w-full h-full bg-cyan-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10">View Github Repository</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedProjects;