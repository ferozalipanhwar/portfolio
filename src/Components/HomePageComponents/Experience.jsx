import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = ({ experiences }) => {
  const ref = useRef(null);
  
  // Scroll progress track karne ke liye hook
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  // Default data agar props na aayen (Testing ke liye)
  const defaultExperiences = [
    {
      title: "Senior React Developer",
      company: "Tech Solutions Inc.",
      date: "2023 - Present",
      description: "Leading the frontend team, building scalable web apps using React, Next.js, and Tailwind CSS."
    },
    {
      title: "Full Stack Developer",
      company: "Creative Agency",
      date: "2021 - 2023",
      description: "Developed full-stack solutions using MERN stack. Optimized database queries and improved API response times by 40%."
    },
    {
      title: "Junior Web Developer",
      company: "Startup Hub",
      date: "2020 - 2021",
      description: "Collaborated with designers to implement responsive UI/UX. Fixed bugs and maintained legacy codebases."
    }
  ];

  const data = experiences || defaultExperiences;

  return (
    <section id="experience" className="bg-slate-900 text-white py-20 px-4 sm:px-8 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono tracking-widest uppercase text-sm">Career Path</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div ref={ref} className="relative pl-8 sm:pl-0">
          
          {/* --- VERTICAL ANIMATED LINE --- */}
          {/* Desktop Center Line / Mobile Left Line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 transform -translate-x-1/2">
            <motion.div 
              style={{ scaleY: scrollYProgress }} 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 origin-top h-full shadow-[0_0_10px_cyan]"
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-12">
            {data.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// Separate Component for Animation Logic
const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col sm:flex-row items-center justify-between ${
        index % 2 === 0 ? "sm:flex-row-reverse" : ""
      }`}
    >
      
      {/* Timeline Dot (Center Point) */}
      <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-slate-900 border-2 border-cyan-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
      </div>

      {/* Empty Space for layout balance */}
      <div className="hidden sm:block w-5/12"></div>

      {/* Content Card */}
      <motion.div 
        whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
        className={`w-full sm:w-5/12 pl-12 sm:pl-0 ${
          index % 2 === 0 ? "sm:text-right" : "sm:text-left"
        }`}
      >
        <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all shadow-lg group">
          
          <div className={`flex items-center gap-2 mb-2 text-cyan-400 font-mono text-sm ${
             index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
          }`}>
            <FaCalendarAlt /> 
            <span>{exp.date || "2020 - Present"}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
            {exp.title}
          </h3>
          
          <h4 className="text-md font-semibold text-slate-400 mb-3 flex items-center gap-2 sm:inline-flex">
            <FaBriefcase className="inline" /> 
            {exp.company || "Company Name"}
          </h4>
          
          <p className="text-slate-400 text-sm leading-relaxed">
            {exp.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;