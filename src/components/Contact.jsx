import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaCode, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing starts
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate database submit or Web3Forms post
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Trigger premium confetti explosion
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#3B82F6', '#06B6D4', '#8B5CF6']
      });

      // Clear Form Data
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success state after a few seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B1120] relative">
      {/* Background glow overlay */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-space bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-primaryBlue to-secondaryCyan mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Socials & Encouragement */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold font-space text-white mb-4">Let's Connect!</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 font-sans">
                I am actively seeking internship opportunities, SDE program recruitments, and technical collaborations. Whether you want to talk algorithms, system design, or have general recruitment discussions, drop me a message!
              </p>

              {/* Direct Info List */}
              <div className="space-y-4">
                {/* Email link */}
                <a 
                  href="mailto:manishdhanaraj003@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/40 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/60 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono uppercase tracking-wider">Email Address</span>
                    <strong className="text-sm text-slate-200 group-hover:text-white font-mono font-medium transition-colors">
                      manishdhanaraj003@gmail.com
                    </strong>
                  </div>
                </a>

                {/* LinkedIn Link */}
                <a 
                  href="https://www.linkedin.com/in/manish-d-8266a3325/" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/40 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/60 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0077B5]/10 border border-[#0077B5]/20 flex items-center justify-center text-[#0077B5] group-hover:scale-105 transition-transform">
                    <FaLinkedin />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono uppercase tracking-wider">LinkedIn</span>
                    <strong className="text-sm text-slate-200 group-hover:text-white transition-colors">
                      manish-d-8266a3325
                    </strong>
                  </div>
                </a>

                {/* GitHub link */}
                <a 
                  href="https://github.com/Manish03d" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/40 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/60 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                    <FaGithub />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono uppercase tracking-wider">GitHub Profile</span>
                    <strong className="text-sm text-slate-200 group-hover:text-white font-mono font-medium transition-colors">
                      github.com/Manish03d
                    </strong>
                  </div>
                </a>

                {/* LeetCode link */}
                <a 
                  href="https://leetcode.com/u/MANISH_DHANARAJ/" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/40 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/60 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:scale-105 transition-transform">
                    <FaCode />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 font-mono uppercase tracking-wider">LeetCode Handle</span>
                    <strong className="text-sm text-slate-200 group-hover:text-white font-mono font-medium transition-colors">
                      MANISH_DHANARAJ
                    </strong>
                  </div>
                </a>
              </div>
            </div>

            {/* Empty block for layout alignment on large viewports */}
            <div className="hidden lg:block h-6" />
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 md:p-8 border border-slate-850 flex flex-col"
          >
            <h3 className="text-xl font-bold font-space text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-5">
                {/* Name field */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-slate-400 font-mono uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/50 border text-slate-100 placeholder-slate-650 focus:outline-none focus:ring-1 transition-all ${
                      errors.name 
                        ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20' 
                        : 'border-slate-850 focus:border-primaryBlue focus:ring-primaryBlue/20'
                    }`}
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1 text-xs text-rose-400 mt-1 font-mono">
                      <FaExclamationCircle className="text-[10px]" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email field */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-slate-400 font-mono uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@domain.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/50 border text-slate-100 placeholder-slate-650 focus:outline-none focus:ring-1 transition-all ${
                      errors.email 
                        ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20' 
                        : 'border-slate-850 focus:border-primaryBlue focus:ring-primaryBlue/20'
                    }`}
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1 text-xs text-rose-400 mt-1 font-mono">
                      <FaExclamationCircle className="text-[10px]" />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject field */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-slate-400 font-mono uppercase tracking-wider mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Collaborative projects / Opportunities"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/50 border text-slate-100 placeholder-slate-650 focus:outline-none focus:ring-1 transition-all ${
                      errors.subject 
                        ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20' 
                        : 'border-slate-850 focus:border-primaryBlue focus:ring-primaryBlue/20'
                    }`}
                  />
                  {errors.subject && (
                    <span className="flex items-center gap-1 text-xs text-rose-400 mt-1 font-mono">
                      <FaExclamationCircle className="text-[10px]" />
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-slate-400 font-mono uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Hello Manish..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/50 border text-slate-100 placeholder-slate-650 focus:outline-none focus:ring-1 transition-all resize-none ${
                      errors.message 
                        ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20' 
                        : 'border-slate-850 focus:border-primaryBlue focus:ring-primaryBlue/20'
                    }`}
                  />
                  {errors.message && (
                    <span className="flex items-center gap-1 text-xs text-rose-400 mt-1 font-mono">
                      <FaExclamationCircle className="text-[10px]" />
                      {errors.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Submit Trigger */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-poppins font-semibold bg-gradient-to-r from-primaryBlue to-secondaryCyan hover:from-primaryBlue hover:to-secondaryCyan/90 text-white shadow-lg shadow-blue-500/15 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={14} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

        </div>

        {/* Modal Success Message */}
        <AnimatePresence>
          {submitSuccess && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#0B1120]/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="max-w-md w-full glass-card border border-cyan-500/30 p-8 rounded-2xl text-center shadow-2xl flex flex-col items-center gap-4"
              >
                <FaCheckCircle className="text-cyan-400 text-5xl animate-bounce" />
                <h3 className="text-2xl font-bold font-space text-white">Message Transmitted!</h3>
                <p className="text-slate-455 text-sm font-sans leading-relaxed">
                  Thank you! Your simulated message has been successfully captured. I will get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors text-xs font-bold font-poppins uppercase tracking-wider"
                >
                  Dismiss
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Contact;
