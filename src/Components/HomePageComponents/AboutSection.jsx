import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaRocket, FaTools } from 'react-icons/fa';
import yourImage from '../../assets/Feroz.png.png'; // Path check kar lein

const AboutSection = () => {
  
  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 } // Har element 0.2s ke baad aayega
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 50 } 
    }
  };

  return (
    <section id="about" className="relative bg-slate-900 text-white py-20 px-6 overflow-hidden">
      
      {/* --- BACKGROUND DECORATION (Subtle Glows) --- */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Animation sirf ek baar chalegi
        className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
      >
        
        {/* --- IMAGE SECTION (Left on Desktop) --- */}
        <motion.div 
          variants={itemVariants}
          className="w-full lg:w-1/2 flex justify-center perspective-1000"
        >
          <div className="relative group w-full max-w-sm">
            {/* Spinning Gradient Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Main Image Card */}
            <div className="relative rounded-2xl bg-slate-900 p-2 ring-1 ring-white/10">
              <img 
                src={yourImage} 
                alt="Feroz Ali Panhwar" 
                className="rounded-xl w-full h-auto object-cover shadow-2xl filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-[1.01]"
              />
              
              {/* Floating 'Experience' Badge */}
              <div className="absolute -bottom-6 -right-6 bg-slate-800 p-4 rounded-xl border border-cyan-500/30 shadow-xl hidden sm:flex items-center gap-3 animate-bounce-slow z-20">
                <div className="bg-cyan-500/20 p-2 rounded-full">
                  <FaRocket className="text-cyan-400 text-xl" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Experience</p>
                  <p className="font-bold text-white">Pro Developer</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- CONTENT SECTION (Right on Desktop) --- */}
        <div className="w-full lg:w-1/2 space-y-8">
          
          {/* Header Text */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-4 mb-2">
              <span className="h-[2px] w-12 bg-cyan-400"></span>
              <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">Know Who I Am</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Me</span>
            </h3>
          </motion.div>
          
          {/* Paragraphs */}
          <motion.div variants={itemVariants} className="text-slate-300 leading-relaxed text-lg space-y-4">
            <p>
              Hi there! I am <span className="text-white font-semibold">Feroz Ali Panhwar</span>, 
              a passionate <span className="text-cyan-300 border-b border-cyan-500/30">Full Stack & Mobile App Developer</span> based in Pakistan.
            </p>
            <p>
              My coding journey revolves around creating sleek, responsive, and high-performance applications. 
              I don't just write code; I <span className="italic text-white">solve problems</span> and create value. 
              Whether it's a complex backend architecture or a pixel-perfect frontend, I love bringing ideas to life.
            </p>
          </motion.div>

          {/* --- INTERACTIVE SKILL CARDS --- */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4"
          >
            {/* Card 1: Web Dev */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="p-6 bg-slate-800/50 rounded-2xl border border-white/5 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group cursor-pointer shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <FaLaptopCode className="text-2xl text-cyan-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">Web Dev</h4>
              <p className="text-sm text-slate-400">MERN Stack & Modern UI</p>
            </motion.div>

            {/* Card 2: Mobile Dev */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="p-6 bg-slate-800/50 rounded-2xl border border-white/5 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group cursor-pointer shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                <FaMobileAlt className="text-2xl text-purple-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">App Dev</h4>
              <p className="text-sm text-slate-400">React Native & iOS/Android</p>
            </motion.div>

            {/* Card 3: Problem Solving */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="p-6 bg-slate-800/50 rounded-2xl border border-white/5 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group cursor-pointer shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <FaTools className="text-2xl text-green-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">Solving</h4>
              <p className="text-sm text-slate-400">DSA & Logic Building</p>
            </motion.div>

          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default AboutSection;