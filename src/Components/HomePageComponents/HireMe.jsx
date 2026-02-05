import { motion } from 'framer-motion';
import { FaCheckCircle, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';

const HireMe = () => {
  return (
    <section className="py-20 px-6 bg-slate-900 relative overflow-hidden">
      
      {/* --- Background Glows --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-cyan-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 md:p-12 text-center md:text-left shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col md:flex-row items-center justify-between gap-8 group"
        >
          
          {/* --- Left Side: Text & Status --- */}
          <div className="space-y-4 max-w-2xl">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold tracking-wide shadow-[0_0_10px_rgba(34,197,94,0.2)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Available for Freelance Projects
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Have a Project in Mind? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Let's Build Something Amazing!
              </span>
            </h2>
            
            <p className="text-slate-400 text-lg">
              I specialize in building high-performance web & mobile applications. 
              From concept to deployment, I've got you covered.
            </p>

            {/* Feature Ticks */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-300 pt-2">
              <span className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400" /> Fast Delivery</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400" /> Clean Code</span>
              <span className="flex items-center gap-2"><FaCheckCircle className="text-cyan-400" /> 24/7 Support</span>
            </div>
          </div>

          {/* --- Right Side: Buttons --- */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            
            {/* Email Button */}
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <FaPaperPlane /> Hire Me Now
            </motion.a>

            {/* WhatsApp/Chat Button */}
            <motion.a 
              href="https://wa.me/923256749757" // Apna number yahan dalein
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-slate-800 border border-white/10 text-white font-bold text-lg hover:bg-slate-700 hover:border-green-500/50 transition-all flex items-center justify-center gap-2 whitespace-nowrap group/wa"
            >
              <FaWhatsapp className="text-green-400 group-hover/wa:scale-110 transition-transform" /> Chat on WhatsApp
            </motion.a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HireMe;