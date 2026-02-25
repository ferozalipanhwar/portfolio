import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaBars, FaBlog, FaCode, FaEnvelope, FaHome, FaImage, FaProjectDiagram, FaTimes, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detect karke background change karne ke liye logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
const navLinks = [
  { name: 'Home', href: '#home', icon: <FaHome /> },
  { name: 'About', href: '#about', icon: <FaUser /> },
  { name: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
  { name: 'Contact', href: '#contact', icon: <FaEnvelope /> },
  { name: 'Blogs', href: '#blogs', icon: <FaBlog /> },
  { name: 'Gallery', href: '/portfolio/gallery', icon: <FaImage /> }  
];

  return (
    <>
     <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    // Yahan "top-0 left-0" add kiya hai 👇
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
        ? 'bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20 py-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]' 
        : 'bg-transparent py-6'
    }`}
>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* --- LOGO WITH NEON GLOW --- */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
              <FaCode className="text-white text-xl" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-cyan-400 tracking-wide drop-shadow-sm">
              Panhwar<span className="text-cyan-400">Code</span>
            </span>
          </a>

          {/* --- DESKTOP MENU --- */}
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, index) => (
              <motion.li 
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={link.href} 
                  className="relative text-slate-300 font-medium hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  {/* Hover Underline Effect */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_cyan]"></span>
                  {link.name}
                </a>
              </motion.li>
            ))}
            
            {/* Call to Action Button */}
            <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(34, 211, 238)" }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg border border-white/10"
             
            > Hire Me
             
            </motion.button></a>
          </ul>

          {/* --- MOBILE HAMBURGER ICON --- */}
          <div className="md:hidden z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white focus:outline-none p-2"
            >
              {isOpen ? <FaTimes className="text-2xl text-cyan-400" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- MOBILE FULLSCREEN MENU (SLIDE IN) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            <ul className="space-y-8 text-center">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <a 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors flex items-center justify-center gap-3"
                  >
                    <span className="text-cyan-500 text-2xl">{link.icon}</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            {/* Background Decorative Blobs for Mobile */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;