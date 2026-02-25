import { motion } from 'framer-motion';
import { FaCss3Alt, FaHtml5, FaJava, FaJsSquare, FaNodeJs, FaPhp, FaPython, FaReact } from 'react-icons/fa';
import image from '../../assets/feroz.jpg';
import DownloadCV from '../UniversalComponents/DownloadCV';

const HeroSection = () => {
  
  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const iconVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 1 + (i * 0.1), type: "spring", stiffness: 100 }
    })
  };

  const techStack = [
    { icon: <FaReact />, color: "text-cyan-400", name: "React" },
    { icon: <FaNodeJs />, color: "text-green-500", name: "Node.js" },
    { icon: <FaHtml5 />, color: "text-orange-500", name: "HTML5" },
    { icon: <FaCss3Alt />, color: "text-blue-500", name: "CSS3" },
    { icon: <FaJsSquare />, color: "text-yellow-400", name: "JavaScript" },
    { icon: <FaPhp />, color: "text-indigo-400", name: "PHP" },
    { icon: <FaPython />, color: "text-blue-300", name: "Python" },
    { icon: <FaJava />, color: "text-red-500", name: "Java" },
  ];

  return (
    // FIX: "pt-32" (mobile) aur "lg:pt-40" (desktop) add kiya taaki content header ke neeche na aaye
    <section id="home" className="relative min-h-screen w-full bg-slate-900 overflow-hidden flex items-center justify-center pt-32 lg:pt-40 pb-20">
      
      {/* --- 3D BACKGROUND GLOWS --- */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* --- LEFT CONTENT (TEXT) --- */}
        {/* mt-25 hata diya kyunki wo valid tailwind class nahi thi, spacing flex-gap se manage ho rahi hai */}
        <div className="flex flex-col gap-6 order-2 lg:order-1 text-center lg:text-left">
          
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={textVariant}
          >
            <h2 className="text-cyan-400 text-lg font-mono tracking-widest mb-2">
              HELLO WORLD
            </h2>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">FEROZ ALI PANHWAR</span>
            </h1>
            <p className="mt-4 text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A passionate <span className="text-white font-semibold">Full Stack & React Native Developer</span>. 
              I build pixel-perfect, interactive, and responsive digital experiences. 
              Welcome to my digital playground!
            </p>
          </motion.div>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={iconVariant}
                whileHover={{ y: -5, scale: 1.1 }}
                className={`p-3 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl text-3xl ${tech.color} shadow-lg cursor-pointer hover:shadow-cyan-500/20 transition-colors`}
                title={tech.name}
              >
                {tech.icon}
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6"
          >
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all duration-300 text-center"
            >
              View My Work
            </a>
            
            <div className="transform hover:-translate-y-1 transition-all duration-300">
               <DownloadCV />
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT CONTENT (IMAGE) --- */}
        <div className="order-1 lg:order-2 flex justify-center relative">
          
          {/* Abstract Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute inset-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] border border-dashed border-cyan-500/30 rounded-full m-auto"
          ></motion.div>

          {/* Floating Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
            transition={{ 
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" } 
            }}
            className="relative z-10"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-b from-cyan-400 to-blue-600/0">
              <img 
                src={image} 
                alt="Feroz Ali Panhwar" 
                className="w-full h-full object-cover rounded-full border-4 border-slate-900 bg-slate-800" 
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;