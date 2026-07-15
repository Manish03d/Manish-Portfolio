import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaArrowDown } from 'react-icons/fa';
const titles = [
  'Aspiring Software Development Engineer',
  'Java Developer',
  'DSA Enthusiast',
  'Full Stack Learner'
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect logic
  useEffect(() => {
    let timer;
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const delayBetweenWord = 2000;

    if (!isDeleting && displayedText === currentTitle) {
      // Pause at full word before deleting
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWord);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? currentTitle.substring(0, displayedText.length - 1)
            : currentTitle.substring(0, displayedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, titleIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B1120]"
    >
      {/* Premium Floating Background Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primaryBlue/10 blur-[80px]"
        />
        <motion.div 
          animate={{
            x: [0, -30, 50, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/10 w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-accentPurple/10 blur-[100px]"
        />
        <motion.div 
          animate={{
            x: [0, 20, -40, 0],
            y: [0, 30, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-secondaryCyan/5 blur-[70px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 text-center flex flex-col items-center">
        {/* Decorative Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-widest uppercase font-mono shadow-md backdrop-blur-sm"
        >
          Open to Opportunities
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-space leading-none mb-4"
        >
          I'm{' '}
          <span className="bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
            MANISH D
          </span>
        </motion.h1>

        {/* Dynamic Typing Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-8 md:h-12 flex items-center justify-center mb-8"
        >
          <p className="text-lg md:text-2xl lg:text-3xl text-slate-300 font-poppins font-medium">
            <span className="typing-cursor">{displayedText}</span>
          </p>
        </motion.div>

        {/* Description brief introduction */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-slate-400 max-w-xl text-sm md:text-base mb-10 leading-relaxed font-sans"
        >
          Electronics and Communication Engineering student at Bannari Amman Institute of Technology. Passionate about Java and Data Structures & Algorithms, building robust backend ecosystems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mb-12"
        >
          {/* View Projects Button */}
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3.5 rounded-xl font-semibold font-poppins bg-gradient-to-r from-primaryBlue to-secondaryCyan hover:from-primaryBlue hover:to-secondaryCyan/90 shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/30 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group text-white"
          >
            <span>View Projects</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          {/*
<a
  href="/resume.pdf"
  download="Manish_Dhanaraj_Resume.pdf"
  className="..."
>
  <FaFileDownload className="text-cyan-400" />
  <span>Download Resume</span>
</a>
*/}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com/Manish03d"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl glass-card hover:border-slate-650 hover:bg-slate-800/40 text-slate-400 hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 text-xl"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/manish-d-8266a3325/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl glass-card hover:border-slate-650 hover:bg-slate-800/40 text-slate-400 hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 text-xl"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/MANISH_DHANARAJ/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl glass-card hover:border-slate-650 hover:bg-slate-800/40 text-slate-400 hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 text-xl"
            title="LeetCode Profile"
          >
            <FaCode />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 cursor-pointer flex flex-col items-center gap-1.5 text-slate-500 hover:text-cyan-400 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest font-mono font-medium">Scroll Down</span>
          <FaArrowDown size={14} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
