import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaCode, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-slate-900 bg-[#070b16]/60 backdrop-blur-md py-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left column: brand details */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <p className="text-sm font-space text-white font-bold tracking-tight">
            MANISH DHANARAJ
          </p>
          <p className="text-xs text-slate-500 font-mono">
            Aspiring Software Development Engineer | B.E. ECE Student
          </p>
        </div>

        {/* Middle column: Made with Love */}
        <div className="flex items-center gap-1.5 text-xs text-slate-455">
          <span>Made with</span>
          <FaHeart className="text-rose-500 animate-pulse" />
          <span>by</span>
          <strong className="text-slate-200 hover:text-cyan-400 transition-colors">Manish D</strong>
          <span className="text-slate-600">|</span>
          <span>&copy; {currentYear}</span>
        </div>

        {/* Right column: Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 mr-2">
            <a
              href="https://github.com/Manish03d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors text-base"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/manish-d-8266a3325/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors text-base"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/MANISH_DHANARAJ/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors text-base"
              title="LeetCode"
            >
              <FaCode />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-cyan-400 hover:scale-105 transition-all duration-300 shadow-md"
            title="Back to Top"
          >
            <FaArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
