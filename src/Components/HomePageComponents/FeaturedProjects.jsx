import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

// Images import karein (Path verify kar lein)
import image1 from '../../assets/image2.png';
import image2 from '../../assets/image3.png';
// Typo fix: 'imamge3' -> 'image3' (File name check karein)
import image3 from '../../assets/image3.png';

const projects = [
  {
    title: 'Project One',
    description: 'An innovative web application that offers unique features and a seamless user experience.',
    imageUrl: image1,
    link: 'https://example.com/project-one',
    tags: ["React", "Tailwind", "Node.js"] // New: UI ko bhara dikhane ke liye
  },
  {
    title: 'VoiceCart',
    description: 'A e-commerce website for visually impaired persons featuring Voice Enabled navigation.',
    imageUrl: image2,
    link: 'https://example.com/project-two',
    tags: ["Voice API", "React", "Express"]
  },
  {
    title: 'E-Shop Pro',
    description: 'An elegant e-commerce platform with modern design and powerful features for online shopping.',
    imageUrl: image3,
    link: 'https://example.com/project-three',
    tags: ["Next.js", "Stripe", "MongoDB"]
  },
];

const FeaturedProjects = () => {

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-mono tracking-widest uppercase text-sm">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="group relative bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                
                {/* Overlay Button (Only visible on Hover) */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition transform hover:scale-110 shadow-lg"
                    title="View Live"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  {/* Agar Github link hoti toh yahan daal sakte thay */}
                  <button className="p-3 bg-slate-700 text-white rounded-full hover:bg-slate-600 transition transform hover:scale-110 shadow-lg" title="View Code">
                    <FaGithub />
                  </button>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags && project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Link (Mobile Friendly) */}
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                >
                  View Details <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
              
              {/* Decorative Gradient Line at Bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            </motion.div>
          ))}
        </motion.div>

        {/* 'View All' Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 rounded-full border border-cyan-500/30 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all hover:shadow-[0_0_20px_cyan]">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;