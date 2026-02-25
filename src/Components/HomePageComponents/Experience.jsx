import { Cylinder, Float, MeshDistortMaterial } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

// --- DATA ---
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

// --- 3D COMPONENT: GLOWING CORE TUBE ---
const GlowingCore = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Tube gently pulsates
    meshRef.current.scale.x = 1 + Math.sin(t * 2) * 0.1;
    meshRef.current.scale.z = 1 + Math.sin(t * 2) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
       <Cylinder ref={meshRef} args={[0.1, 0.1, 12, 32]} rotation={[0, 0, 0]} position={[0, -2, 0]}>
         <MeshDistortMaterial 
            color="#06b6d4" 
            emissive="#06b6d4" 
            emissiveIntensity={2} 
            distort={0.3} 
            speed={2} 
            transparent 
            opacity={0.8}
         />
       </Cylinder>
    </Float>
  );
};

// --- CARD COMPONENT ---
const ExperienceCard = ({ exp, index }) => {
  const isLeft = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50, rotateY: isLeft ? -15 : 15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      className={`relative flex items-center justify-between w-full mb-16 ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      
      {/* 1. CONTENT CARD */}
      <div className={`w-[85%] sm:w-[45%] z-10 ${isLeft ? "text-right" : "text-left"}`}>
        <div className="relative group perspective-1000">
          {/* Card Bg with Neon Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="relative bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl hover:transform hover:scale-[1.02] transition-all duration-300">
            
            {/* Header: Date & Role */}
            <div className={`flex flex-col gap-1 mb-3 ${isLeft ? "items-end" : "items-start"}`}>
                <span className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-500/30">
                   <FaCalendarAlt /> {exp.date}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exp.title}
                </h3>
            </div>

            <h4 className={`text-md font-semibold text-slate-400 mb-4 flex items-center gap-2 ${isLeft ? "justify-end" : "justify-start"}`}>
              <FaBriefcase className="text-blue-500" /> 
              {exp.company}
            </h4>

            <p className="text-slate-400 text-sm leading-relaxed">
              {exp.description}
            </p>

            {/* Decoration Arrow */}
            <div className={`absolute top-8 w-4 h-4 bg-slate-900 border-t border-l border-white/10 rotate-45 ${
                isLeft ? "-right-2.5 border-r border-b-0 border-l-0 border-t-0" : "-left-2.5"
            }`}></div>
          </div>
        </div>
      </div>

      {/* 2. CENTER CORE CONNECTOR (The Dot) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_cyan] z-20 relative"
        >
            <div className="absolute inset-0 w-full h-full rounded-full bg-cyan-400 animate-ping opacity-75"></div>
        </motion.div>
      </div>

      {/* 3. HOLOGRAPHIC BEAM (Connecting Line) */}
      <div className={`absolute top-1/2 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent w-[50%] -z-0 opacity-50 ${
          isLeft ? "right-[50%] origin-right" : "left-[50%] origin-left"
      }`}></div>

      {/* Spacer for Flex Layout */}
      <div className="w-[45%] hidden sm:block"></div>
      
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const Experience = ({ experiences }) => {
  const containerRef = useRef(null);
  const data = experiences || defaultExperiences;
  
  // Progress Bar Animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="bg-slate-950 text-white py-24 relative overflow-hidden">
      
      {/* --- BACKGROUND 3D TUBE (Visual Only) --- */}
      {/* We fake the 3D tube height by stretching the canvas */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-20 h-full z-0 opacity-50 hidden md:block pointer-events-none">
         <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <GlowingCore />
         </Canvas>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10" ref={containerRef}>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
             <span className="h-[1px] w-8 bg-cyan-500"></span>
             <span className="text-cyan-400 font-mono tracking-widest uppercase text-sm">Career Path</span>
             <span className="h-[1px] w-8 bg-cyan-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mt-2">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* --- CENTRAL PROGRESS LINE (SVG) --- */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 transform -translate-x-1/2 -z-10">
             <motion.div 
               style={{ scaleY }} 
               className="absolute top-0 w-full bg-cyan-500 origin-top shadow-[0_0_20px_cyan]"
             />
          </div>

          {/* Cards Wrapper */}
          <div className="flex flex-col pl-8 sm:pl-0">
             {data.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} index={index} />
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;