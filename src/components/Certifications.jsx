import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaExternalLinkAlt, FaAward } from 'react-icons/fa';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-[#0B1120] relative overflow-hidden">
      {/* Light gradient highlight for background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

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
            Professional Certifications
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-primaryBlue to-secondaryCyan mt-4 rounded-full"
          />
        </div>

        {/* Premium Certification Card Grid */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl border border-slate-850 hover:border-slate-800 p-8 md:p-10 relative overflow-hidden group transition-all duration-300 shadow-xl"
          >
            {/* Cloud icon background vector watermark */}
            <div className="absolute right-[-20px] bottom-[-20px] text-slate-800/10 text-9xl pointer-events-none group-hover:scale-105 transition-transform duration-500">
              <FaCloud />
            </div>

            {/* Glowing Accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-[#06B6D4] to-indigo-500" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              {/* Left Column: Icon and Info */}
              <div className="flex items-start gap-5">
                {/* Visual Cloud Badge */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400/10 to-blue-500/15 border border-sky-400/20 flex flex-col items-center justify-center text-sky-400 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <FaCloud className="text-3xl" />
                </div>

                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20 uppercase mb-2">
                    Official Salesforce Credential
                  </span>
                  <h3 className="text-2xl font-bold font-space text-white group-hover:text-cyan-400 transition-colors mb-1.5">
                    Salesforce Certified Associate
                  </h3>
                  <p className="text-slate-400 text-sm font-sans mb-3">
                    Validated technical proficiency in ecosystem architecture, relational database concepts, customer success workflows, and developer customization frameworks.
                  </p>
                  
                  {/* Verification Info */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-mono">
                    <span>Provider: <strong className="text-slate-400">Salesforce</strong></span>
                    <span>•</span>
                    <span>Status: <strong className="text-green-500 font-bold uppercase tracking-wider">Active</strong></span>
                  </div>
                </div>
              </div>

              {/* Right Column: Verify CTA */}
              <div className="w-full md:w-auto self-stretch md:self-center flex items-end md:items-center">
                <a
                  href="https://trailhead.salesforce.com/credentials/verification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 font-poppins text-xs font-bold whitespace-nowrap group/btn shadow-md"
                >
                  <FaAward className="text-cyan-400 text-sm" />
                  <span>Verify Credential</span>
                  <FaExternalLinkAlt size={10} className="text-slate-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
