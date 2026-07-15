import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCodeBranch, FaBullseye, FaBookOpen } from 'react-icons/fa';

const journeyMilestones = [
  {
    icon: <FaCodeBranch className="text-cyan-400" />,
    title: 'The Spark of Curiosity',
    period: '2024',
    description: 'Began programming out of genuine curiosity. Started mastering Java, understanding object-oriented design, and learning the fundamentals of memory and compile cycles.'
  },
  {
    icon: <FaBookOpen className="text-blue-400" />,
    title: 'Data Structures & Algorithms',
    period: '2025',
    description: 'Deep-dived into algorithmic problem solving. Practiced DSA patterns (graphs, trees, dynamic programming) on LeetCode to build robust problem-solving frameworks.'
  },
  {
    icon: <FaGraduationCap className="text-purple-400" />,
    title: 'Full Stack Integration',
    period: '2026 (Current)',
    description: 'Acquiring full-stack capabilities (React, Node.js, Express, MongoDB) to bridge programmatic logic with clean, interactive user interfaces.'
  },
  {
    icon: <FaBullseye className="text-rose-400" />,
    title: 'The Goal: Scalable Systems SDE',
    period: '2028 & Beyond',
    description: 'Graduating from Bannari Amman Institute of Technology (ECE). Aiming to join a top-tier tech environment as an SDE, focusing on backend efficiency and system architecture.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-space bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
          >
            My Story & Journey
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-primaryBlue to-secondaryCyan mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Card (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card rounded-2xl p-8 border border-slate-800"
          >
            <h3 className="text-xl font-bold font-space text-white mb-4">Who I Am</h3>
            <p className="text-slate-350 text-sm md:text-base leading-relaxed mb-6 font-sans">
              I am a third-year Electronics and Communication Engineering student at <strong>Bannari Amman Institute of Technology</strong> with a strong passion for software development.
            </p>
            <p className="text-slate-350 text-sm md:text-base leading-relaxed mb-6 font-sans">
              What started as curiosity has turned into a committed journey of mastering <strong>Java</strong>, building solid <strong>Data Structures & Algorithms</strong> foundations, and constructing full-stack systems.
            </p>
            
            <div className="space-y-4 border-t border-slate-800 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <FaGraduationCap />
                </div>
                <div>
                  <h4 className="text-xs text-slate-500 font-mono uppercase tracking-wider">Education</h4>
                  <p className="text-sm font-semibold text-white">B.E. Electronics & Communication Engineering</p>
                  <p className="text-xs text-slate-400">Bannari Amman Institute of Technology (2024 - 2028)</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <FaBookOpen />
                </div>
                <div>
                  <h4 className="text-xs text-slate-500 font-mono uppercase tracking-wider">Current Focus</h4>
                  <p className="text-sm font-semibold text-white">Backend Systems & Algorithmic Problem Solving</p>
                  <p className="text-xs text-slate-400">Java, Data Structures (OOP, DBMS, OS)</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <FaBullseye />
                </div>
                <div>
                  <h4 className="text-xs text-slate-500 font-mono uppercase tracking-wider">Career Aspiration</h4>
                  <p className="text-sm font-semibold text-white">Software Development Engineer (SDE)</p>
                  <p className="text-xs text-slate-400">Specializing in scalable distributed system components</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline Milestones (Right) */}
          <div className="lg:col-span-7 relative pl-4 sm:pl-8 py-2">
            {/* Middle Vertical Line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primaryBlue via-secondaryCyan to-transparent" />

            <div className="space-y-10">
              {journeyMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-8 sm:pl-10 group"
                >
                  {/* Outer glowing point */}
                  <div className="absolute left-[-21px] sm:left-[-13px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-slate-800 flex items-center justify-center group-hover:border-cyan-400 transition-colors duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-650 group-hover:bg-cyan-400 transition-colors duration-300" />
                  </div>

                  <div className="glass-card glass-card-hover rounded-xl p-6 border border-slate-850">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-base">
                          {milestone.icon}
                        </div>
                        <h4 className="text-lg font-bold font-space text-white group-hover:text-cyan-400 transition-colors">
                          {milestone.title}
                        </h4>
                      </div>
                      <span className="self-start sm:self-center px-3 py-1 text-xs font-semibold font-mono rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                        {milestone.period}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed font-sans">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
