import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import pdf from '../../assets/ferozalicv.pdf'; // Path verify karein

const DownloadCV = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a href={pdf} download="Feroz_Ali_CV.pdf">
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgb(6, 182, 212)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-8 py-3 rounded-full bg-slate-800 border border-cyan-500/50 text-white font-bold tracking-wide hover:bg-cyan-500 hover:border-transparent transition-all duration-300 group"
        >
          <span>Download CV</span>
          <div className="bg-white/10 p-1 rounded-full group-hover:bg-white/20 transition-colors">
            <FaDownload className="text-cyan-400 group-hover:text-white" />
          </div>
        </motion.button>
      </a>
    </motion.div>
  );
};

export default DownloadCV;