import emailjs from 'emailjs-com';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaCheckCircle, FaCommentAlt, FaEnvelope, FaPaperPlane, FaSpinner, FaTimesCircle, FaUser } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error', ''
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setShowPopup(false);

    // Aapki IDs as it is use ki gayi hain
    emailjs.sendForm('service_wbvh3zt', 'template_gj1jiek', e.target, 'EfoJKAnY7XtcCt6It')
      .then((result) => {
        console.log('Email sent:', result.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Form clear
        setShowPopup(true);
      }, (error) => {
        console.log('Error:', error.text);
        setStatus('error');
        setShowPopup(true);
      });
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="contact" className="relative min-h-screen bg-slate-900 text-white py-20 px-6 flex items-center overflow-hidden">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <span className="text-cyan-400 font-mono tracking-widest text-sm uppercase">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-2 leading-tight">
              Let's Work <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Together!</span>
            </h2>
          </div>
          
          <p className="text-slate-400 text-lg leading-relaxed max-w-md">
            Have a project in mind or just want to say hi? 
            Fill out the form, and I'll get back to you as soon as possible.
          </p>

          <div className="flex gap-4 pt-4">
             {/* Decorative lines or extra contact info could go here */}
             <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: FORM --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Form Card */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
            
            {/* Border Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <FaUser className="text-cyan-400" /> Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <FaEnvelope className="text-cyan-400" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <FaCommentAlt className="text-cyan-400" /> Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <FaSpinner className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>

      </div>

      {/* --- POPUP NOTIFICATION (Toast Style) --- */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-10 right-6 md:right-10 z-50"
          >
            <div className={`p-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10 backdrop-blur-md ${
              status === 'success' ? 'bg-slate-800/90 text-white' : 'bg-red-900/90 text-white'
            }`}>
              
              <div className={`p-3 rounded-full ${status === 'success' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                {status === 'success' ? (
                  <FaCheckCircle className="text-2xl text-green-400" />
                ) : (
                  <FaTimesCircle className="text-2xl text-red-400" />
                )}
              </div>
              
              <div>
                <h4 className="font-bold text-lg">
                  {status === 'success' ? 'Message Sent!' : 'Error!'}
                </h4>
                <p className="text-sm text-slate-300">
                  {status === 'success' 
                    ? "Thanks for reaching out. I'll get back to you soon." 
                    : "Something went wrong. Please try again later."}
                </p>
              </div>

              <button 
                onClick={() => setShowPopup(false)}
                className="ml-4 text-slate-400 hover:text-white transition-colors"
              >
                <FaTimesCircle size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ContactForm;