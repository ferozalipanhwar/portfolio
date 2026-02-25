import { PointMaterial, Points } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import * as random from 'maath/random/dist/maath-random.esm';
import { useRef, useState } from 'react';
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJava, FaJsSquare, FaNodeJs, FaPhp, FaPython, FaReact } from 'react-icons/fa';
import { SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandReactNative } from "react-icons/tb";

// --- SKILL DATA ---
const skills = [
  { name: 'React', icon: <FaReact />, color: '#61DBFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
  { name: 'React Native', icon: <TbBrandReactNative />, color: '#61DBFB' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#68A063' },
  { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#4DB33D' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38B2AC' },
  { name: 'JavaScript', icon: <FaJsSquare />, color: '#F0DB4F' },
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E44D26' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#264de4' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { name: 'Python', icon: <FaPython />, color: '#306998' },
  { name: 'Java', icon: <FaJava />, color: '#f89820' },
  { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
  { name: 'PHP', icon: <FaPhp />, color: '#8993be' },
];

// --- 3D PARTICLE CLOUD (Background) ---
const ParticleCloud = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    
    // Cursor Interaction for Background
    const x = state.mouse.x * 0.5; 
    const y = state.mouse.y * 0.5;
    ref.current.rotation.x += (y - ref.current.rotation.x) * 0.05;
    ref.current.rotation.y += (x - ref.current.rotation.y) * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#06b6d4" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

// --- NEW: 3D TILT CARD COMPONENT ---
const SkillCard = ({ skill, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth movement
  const mouseX = useSpring(x, { stiffness: 500, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 30 });

  // 1. Tilt Logic: Mouse move karega to Card Rotate karega
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  // 2. Spotlight Logic
  const spotlightX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    // Calculate normalized position (-0.5 to 0.5)
    x.set((clientX - left) / width - 0.5);
    y.set((clientY - top) / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const border = useMotionTemplate`radial-gradient(150px circle at ${spotlightX} ${spotlightY}, rgba(34, 211, 238, 0.5), transparent 80%)`;

  return (
    <div className="perspective-1000"> {/* Perspective zaroori hai 3D ke liye */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        viewport={{ once: true }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d" // Content ko pop-out karne ke liye
        }}
        className="group relative h-40 w-full rounded-xl bg-slate-900/80 backdrop-blur-sm border border-slate-800"
      >
        {/* Border Glow */}
        <motion.div
          style={{ background: border }}
          className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-10"
        />

        {/* Card Content */}
        <div 
          className="relative h-full w-full rounded-xl p-6 flex flex-col items-center justify-center gap-3 overflow-hidden"
          style={{ transform: "translateZ(20px)" }} // Card thoda utha hua lagega
        >
          
          {/* Spotlight Inside */}
          <motion.div
            style={{ background: useMotionTemplate`radial-gradient(250px circle at ${spotlightX} ${spotlightY}, rgba(34, 211, 238, 0.15), transparent 80%)` }}
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          />

          {/* Icon - POP OUT EFFECT (Z-Index increased) */}
          <div 
            className="text-5xl transition-transform duration-300 group-hover:scale-110 drop-shadow-2xl" 
            style={{ 
              color: skill.color, 
              filter: `drop-shadow(0 0 10px ${skill.color}40)`,
              transform: "translateZ(50px)" // Icon card se bahar niklega (3D)
            }}
          >
            {skill.icon}
          </div>

          {/* Text - POP OUT EFFECT */}
          <h3 
            className="font-bold text-slate-300 group-hover:text-white transition-colors"
            style={{ transform: "translateZ(30px)" }} // Text bhi thoda bahar
          >
            {skill.name}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

// --- MAIN SECTION ---
const SkillsSection = () => {
  return (
    <section id="skills" className="relative bg-slate-950 py-24 px-6 overflow-hidden">
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <ParticleCloud />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-slate-950/20 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
             <span className="h-[1px] w-8 bg-cyan-500"></span>
             <span className="text-cyan-400 font-mono tracking-widest uppercase text-sm">Tech Stack</span>
             <span className="h-[1px] w-8 bg-cyan-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            My Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Arsenal</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Technologies I use to build scalable, high-performance applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;