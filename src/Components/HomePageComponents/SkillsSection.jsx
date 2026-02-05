import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaCss3Alt, FaHtml5, FaJava, FaJsSquare, FaNodeJs, FaPhp, FaPython, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { TbBrandReactNative } from "react-icons/tb";

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E44D26', shadow: 'shadow-orange-500/50' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#264de4', shadow: 'shadow-blue-500/50' },
  { name: 'JavaScript', icon: <FaJsSquare />, color: '#F0DB4F', shadow: 'shadow-yellow-500/50' },
  { name: 'React', icon: <FaReact />, color: '#61DBFB', shadow: 'shadow-cyan-400/50' },
  { name: 'React Native', icon: <TbBrandReactNative />, color: '#61DBFB', shadow: 'shadow-cyan-400/50' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#68A063', shadow: 'shadow-green-500/50' },
  { name: 'Express.js', icon: <SiExpress />, color: '#ffffff', shadow: 'shadow-white/30' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#4DB33D', shadow: 'shadow-green-400/50' },
  { name: 'PHP', icon: <FaPhp />, color: '#8993be', shadow: 'shadow-indigo-400/50' },
  { name: 'Python', icon: <FaPython />, color: '#306998', shadow: 'shadow-blue-400/50' },
  { name: 'Java', icon: <FaJava />, color: '#f89820', shadow: 'shadow-orange-400/50' }
];

const SkillsSection = () => {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);

  // Carousel width calculate karna dragging ke liye
  useEffect(() => {
    if(carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  // Button se scroll karne ka logic
  const scroll = (direction) => {
    if(carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-cyan-500/5 rotate-12 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono tracking-widest uppercase text-sm">Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Skills</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Slider Container with Buttons */}
        <div className="relative group">
          
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-slate-800/80 p-3 rounded-full text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all shadow-lg backdrop-blur-sm -ml-4 md:-ml-8 hidden md:block"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Draggable Carousel */}
          <motion.div 
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={carouselRef}
          >
            <motion.div 
              drag="x" 
              dragConstraints={{ right: 0, left: -width }}
              whileTap={{ cursor: "grabbing" }}
              className="flex gap-6 py-10 px-4" // Padding increased for hover glow space
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="min-w-[140px] md:min-w-[180px] h-[180px] bg-slate-800/50 backdrop-blur-xl border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-4 relative group/card hover:-translate-y-2 transition-transform duration-300"
                >
                  {/* Hover Glow Effect based on Skill Color */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-transparent to-${skill.color}/10 border border-${skill.color}/30 box-shadow-custom`}></div>
                  
                  {/* Icon */}
                  <div 
                    className="text-5xl md:text-6xl drop-shadow-lg transition-transform duration-300 group-hover/card:scale-110" 
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  
                  {/* Name */}
                  <h3 className="font-bold text-lg text-slate-200 z-10">{skill.name}</h3>

                  {/* Bottom Color Bar */}
                  <div 
                    className="absolute bottom-0 left-0 w-full h-1 rounded-b-2xl transition-all duration-300 opacity-50 group-hover/card:opacity-100"
                    style={{ backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}` }}
                  ></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-slate-800/80 p-3 rounded-full text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all shadow-lg backdrop-blur-sm -mr-4 md:-mr-8 hidden md:block"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Hint Text for Mobile */}
        <p className="text-center text-slate-500 text-sm mt-4 md:hidden flex items-center justify-center gap-2 animate-pulse">
          <span>&larr;</span> Swipe to explore <span>&rarr;</span>
        </p>

      </div>
    </section>
  );
};

export default SkillsSection;