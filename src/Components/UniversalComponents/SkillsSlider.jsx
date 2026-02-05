import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SkillsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const skills = [
    "JavaScript", "React", "Node.js", "CSS", "HTML", 
    "MongoDB", "Express", "Python", "Django", "GraphQL"
  ];

  const skillsPerView = 3; 

  const handleNext = () => {
    if (currentIndex < skills.length - skillsPerView) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <div className="flex items-center justify-between gap-4 bg-slate-900/50 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
        
        {/* Left Arrow */}
        <button 
          onClick={handlePrev} 
          disabled={currentIndex === 0} 
          className="p-3 rounded-full bg-slate-800 text-cyan-400 hover:bg-cyan-500 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <IoIosArrowBack size={20} />
        </button>

        {/* Skills Container */}
        <div className="flex-1 overflow-hidden relative h-16 flex items-center justify-center">
          <motion.div 
            className="flex gap-4 absolute w-full justify-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            // Key change hone par re-render hoga (for simple slide effect)
            key={currentIndex} 
          >
            {skills.slice(currentIndex, currentIndex + skillsPerView).map((skill, index) => (
              <motion.div
                key={`${skill}-${index}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-2 bg-gradient-to-r from-slate-800 to-slate-900 border border-cyan-500/30 rounded-lg text-white font-medium shadow-[0_0_10px_rgba(6,182,212,0.1)] whitespace-nowrap"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={handleNext} 
          disabled={currentIndex >= skills.length - skillsPerView} 
          className="p-3 rounded-full bg-slate-800 text-cyan-400 hover:bg-cyan-500 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <IoIosArrowForward size={20} />
        </button>

      </div>
    </div>
  );
}

export default SkillsSlider;