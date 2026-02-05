import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaHeart, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  
  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/yourprofile", color: "hover:text-white" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/yourprofile", color: "hover:text-blue-400" },
    { icon: <FaTwitter />, href: "https://twitter.com/yourprofile", color: "hover:text-sky-400" },
    { icon: <FaInstagram />, href: "https://instagram.com/yourprofile", color: "hover:text-pink-500" },
  ];

  return (
    <footer className="bg-slate-900 pt-16 pb-8 relative overflow-hidden border-t border-slate-800">
      
      {/* --- Top Gradient Line --- */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_10px_cyan]"></div>

      {/* --- Background Glow --- */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* 1. Brand & Contact Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              Panhwar<span className="text-cyan-400">Code</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Building digital experiences with modern technologies. Let's create something amazing together.
            </p>
            
            <div className="flex flex-col gap-2 items-center md:items-start text-slate-300 text-sm mt-4">
              <a href="mailto:panhwarcode@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <FaEnvelope className="text-cyan-500" /> panhwarcode@gmail.com
              </a>
              <a href="tel:+923256749757" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <FaPhone className="text-cyan-500" /> +92 325 6749757
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="flex flex-col gap-2 text-slate-400">
              {['Home', 'About', 'Projects', 'Contact', 'Blog'].map((item, index) => (
                <a 
                  key={index} 
                  href={`#${item.toLowerCase()}`} 
                  className="hover:text-cyan-400 hover:translate-x-1 transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* 3. Social Media */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect With Me</h3>
            <p className="text-slate-400 text-sm mb-2">
              Follow my journey on social media.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`p-3 bg-slate-800 rounded-full text-slate-300 transition-all shadow-lg border border-white/5 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* --- Footer Bottom --- */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} <span className="text-slate-200 font-medium">FEROZ ALI PANHWAR</span>. All rights reserved. 
            <span className="hidden sm:inline-flex items-center gap-1 ml-2">
               | Made with <FaHeart className="text-red-500 animate-pulse" /> in Pakistan
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;