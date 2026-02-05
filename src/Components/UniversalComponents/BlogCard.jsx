import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      className="group relative bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 h-full flex flex-col"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* --- Image Container --- */}
      <div className="relative h-52 overflow-hidden">
        {/* Dark Gradient Overlay for text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
        />
        
        {/* Floating Date Badge */}
        <div className="absolute top-4 left-4 z-20 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-2 text-xs text-cyan-400 font-bold shadow-lg">
           <FaCalendarAlt /> {blog.date}
        </div>
      </div>

      {/* --- Content Area --- */}
      <div className="p-6 flex flex-col flex-grow relative z-20">
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
            {blog.title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
            {blog.excerpt}
        </p>
        
        {/* Animated Link */}
        <a 
            href={blog.link} 
            className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:text-white transition-colors group/link mt-auto"
        >
            Read More 
            <FaArrowRight className="transform group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* --- Bottom Glow Line Animation --- */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    
    </motion.div>
  );
};

export default BlogCard;