import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'coding', label: 'Profiles' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for header background blur and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      // Header background state
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy active section checking
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200; // Offset for accuracy

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 glass-navbar bg-[#0B1120]/80 shadow-lg shadow-black/20' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-2xl font-bold tracking-tight font-space flex items-center gap-2 group"
        >
          <span className="bg-gradient-to-r from-primaryBlue via-secondaryCyan to-accentPurple bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            MANISH D
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-cyan-400 border border-slate-700 font-mono scale-95 group-hover:scale-100 transition-all duration-300">
            v1.0
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative px-4 py-2 text-sm font-medium font-poppins transition-colors duration-300 ${
                activeSection === item.id 
                  ? 'text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primaryBlue to-secondaryCyan rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Social Icons (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://github.com/Manish03d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300 text-lg"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/manish-d-8266a3325/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300 text-lg"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/MANISH_DHANARAJ/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300 text-lg"
            title="LeetCode"
          >
            <FaCode />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none hover:bg-slate-800/40 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 glass-card bg-[#0B1120]/95 shadow-xl border-b border-slate-800 py-6 px-6"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`px-4 py-3 rounded-lg text-base font-medium font-poppins transition-colors ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-primaryBlue/20 to-secondaryCyan/10 text-cyan-400 border-l-2 border-primaryBlue'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/20'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex justify-center items-center gap-6 mt-6 pt-6 border-t border-slate-850">
              <a
                href="https://github.com/Manish03d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white text-xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/manish-d-8266a3325/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://leetcode.com/u/MANISH_DHANARAJ/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white text-xl"
              >
                <FaCode />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
