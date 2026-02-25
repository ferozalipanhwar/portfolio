import { motion } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop",
    title: "Workspace Setup",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    title: "Coding in Action",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    title: "Code Review",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    title: "Late Night Sprints",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    title: "Team Collaboration",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    title: "Creative Desk",
  },
];

const GalleryPage = () => {
  return (
    <section id="gallery" className="relative min-h-screen w-full bg-slate-900 overflow-hidden py-24 px-6">
      
      {/* --- 3D BACKGROUND GLOWS (Matching your HeroSection) --- */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADING --- */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-cyan-400 text-lg font-mono tracking-widest mb-2 uppercase">
            MY PORTFOLIO
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4">
            Creative Gallery
          </h3>
          <p className="text-slate-300 mt-4 max-w-xl mx-auto text-lg">
            A visual collection of my workspaces, coding sessions, and development environment.
          </p>
        </motion.div>

        {/* --- GRID --- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
              className="relative overflow-hidden rounded-2xl group bg-slate-800/50 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-90 transition duration-500 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                  <h3 className="text-xl font-bold text-cyan-400">
                    {image.title}
                  </h3>
                  <div className="h-1 w-10 bg-gradient-to-r from-cyan-500 to-blue-600 mt-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 delay-100"></div>
                </div>
              </div>

              {/* Neon Border Glow Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-cyan-500/0 group-hover:border-cyan-400/50 transition duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GalleryPage;