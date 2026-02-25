import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaLaptopCode, FaMobileAlt, FaRocket, FaTools } from 'react-icons/fa';
import yourImage from '../../assets/feroz.jpg'; // Path check kar lein

// ==========================================
// 1. THREE.JS BACKGROUND COMPONENTS (SAME)
// ==========================================

const CyberShape = () => {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={1.6}>
        <MeshDistortMaterial
          color="#06b6d4" attach="material" distort={0.5} speed={2}
          roughness={0.2} metalness={0.8} emissive="#0891b2" emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
};

const Electron = ({ radius = 2.5, speed = 2, color = "#a855f7", ...props }) => {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI, 0);
  });
  return (
    <group {...props}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.08]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-80">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        <group position={[3, 0, 0]}>
           <CyberShape />
           <Electron radius={2.2} speed={1.5} color="#a855f7" rotation={[0, 0, 0]} />
           <Electron radius={2.4} speed={-1.2} color="#06b6d4" rotation={[0, Math.PI / 3, 0]} />
           <Electron radius={2.6} speed={1.8} color="#ffffff" rotation={[0, -Math.PI / 3, 0]} />
        </group>
        <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};

// ==========================================
// 2. 3D TILT IMAGE CARD (BADGE REMOVED FROM HERE)
// ==========================================

const TiltImageCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseXPos = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseXPos);
    y.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-1000 w-full flex justify-center z-20 relative">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative group w-full max-w-sm rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-2 ring-1 ring-white/20 shadow-2xl cursor-pointer"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-500"></div>

        <div className="relative overflow-hidden rounded-xl bg-slate-900 h-full transform-style-3d">
          <img 
            src={yourImage} 
            alt="Feroz Ali Panhwar" 
            className="w-full h-auto object-cover pointer-events-none"
          />
          {/* Glare Effect Only */}
          <motion.div 
            style={{ background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.3) 0%, transparent 80%)` }}
            className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"
          />
          {/* BADGE REMOVED FROM HERE */}
        </div>
      </motion.div>
    </div>
  );
};

// ==========================================
// 3. MAIN COMPONENT (BADGE ADDED HERE + NEW ANIMATIONS)
// ==========================================

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  // New animation specifically for the image side (Pop-in + slide)
  const imageSideVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        x: 0, 
        transition: { type: "spring", duration: 1.2, bounce: 0.3 } 
    }
  };

  // Animation for text content
  const textSideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { type: "spring", stiffness: 50 } 
    }
  };

  return (
    <section id="about" className="relative bg-slate-950 text-white py-24 px-6 overflow-hidden">
      
      <ThreeBackground />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Triggers when 30% visible on scroll
        className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16"
      >
        
        {/* --- LEFT: IMAGE WITH SCROLL ANIMATION & 3D TILT --- */}
        <motion.div variants={imageSideVariants} className="w-full lg:w-1/2">
          <TiltImageCard />
        </motion.div>

        {/* --- RIGHT: CONTENT WITH BADGE --- */}
        <div className="w-full lg:w-1/2 space-y-8">
          
          <motion.div variants={textSideVariants}>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-10 bg-cyan-400"></span>
              <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Who I Am</span>
            </div>

            {/* --- BADGE MOVED HERE --- */}
            <div className="inline-flex items-center gap-3 bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-cyan-500/30 shadow-xl mb-6">
                <div className="bg-cyan-500/20 p-2 rounded-full">
                    <FaRocket className="text-cyan-400 text-lg" />
                </div>
                <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider leading-none">Experience</p>
                    <p className="font-bold text-white text-sm leading-none mt-1">Pro Developer</p>
                </div>
            </div>
            {/* ----------------------- */}

            <h3 className="text-5xl font-extrabold text-white leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Me.</span>
            </h3>
          </motion.div>
          
          <motion.div variants={textSideVariants} className="text-slate-400 leading-relaxed text-lg space-y-6 border-l-2 border-slate-800 pl-6">
            <p>
              Hi! I am <strong className="text-white">Feroz Ali Panhwar</strong>, 
              a dedicated <span className="text-cyan-300">Full Stack & Mobile Developer</span> from Pakistan.
            </p>
            <p>
              I specialize in building digital experiences that are not just functional but also visually stunning. 
              My code solves real-world problems with a focus on performance and scalability.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
            {[
              { Icon: FaLaptopCode, title: "Web Dev", desc: "MERN Stack", color: "cyan" },
              { Icon: FaMobileAlt, title: "Mobile", desc: "React Native", color: "purple" },
              { Icon: FaTools, title: "Logic", desc: "Problem Solving", color: "green" },
            ].map((skill, index) => (
              <motion.div 
                key={index}
                variants={textSideVariants} // Using text variant for cards too
                whileHover={{ y: -5, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                className={`p-4 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-${skill.color}-500/50 transition-all cursor-pointer group`}
              >
                <skill.Icon className={`text-3xl text-${skill.color}-500 mb-3 group-hover:scale-110 transition-transform`} />
                <h4 className="text-base font-bold text-white">{skill.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;