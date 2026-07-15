import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaNodeJs, 
  FaGitAlt, FaGithub, FaDatabase, FaTerminal, 
  FaLaptopCode, FaNetworkWired, FaServer, FaCogs 
} from 'react-icons/fa';
import { 
  SiC, SiCplusplus, SiMysql, SiMongodb, 
  SiIntellijidea 
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', icon: <FaJava className="text-orange-500" />, level: 'Advanced / Core' },
      { name: 'C', icon: <SiC className="text-sky-500" />, level: 'Intermediate' },
      { name: 'C++', icon: <SiCplusplus className="text-blue-500" />, level: 'Intermediate' },
      { name: 'Python', icon: <FaPython className="text-yellow-500" />, level: 'Intermediate' },
      { name: 'SQL', icon: <FaDatabase className="text-cyan-500" />, level: 'Intermediate' },
    ]
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-emerald-500" />, level: 'Prior Experience' },
      { name: 'MySQL', icon: <SiMysql className="text-[#00758F]" />, level: 'Intermediate' },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, level: 'Prior Experience' },
    ]
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-600" />, level: 'Advanced' },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-400" />, level: 'Advanced' },
    ]
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-600" />, level: 'Intermediate' },
      { name: 'GitHub', icon: <FaGithub className="text-white" />, level: 'Advanced' },
      { name: 'VS Code', icon: <VscCode className="text-sky-400" />, level: 'Advanced' },
      { name: 'IntelliJ IDEA', icon: <SiIntellijidea className="text-red-500" />, level: 'Intermediate' },
    ]
  },
  {
    title: 'Computer Science Fundamentals',
    skills: [
      { name: 'Data Structures & Algorithms', icon: <FaLaptopCode className="text-cyan-400" />, level: 'Core Strength' },
      { name: 'OOP Concepts', icon: <FaCogs className="text-purple-400" />, level: 'Core Strength' },
      { name: 'DBMS', icon: <FaServer className="text-[#10B981]" />, level: 'Intermediate' },
      { name: 'Operating Systems', icon: <FaTerminal className="text-slate-400" />, level: 'Familiar' },
      { name: 'Computer Networks', icon: <FaNetworkWired className="text-indigo-400" />, level: 'Familiar' },
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0B1120] relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

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
            Technical Skillset
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-primaryBlue to-secondaryCyan mt-4 rounded-full"
          />
        </div>

        {/* Categories Loop */}
        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-6">
              {/* Category Title */}
              <motion.h3 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="text-lg font-bold font-space text-cyan-400 tracking-wider uppercase border-l-2 border-primaryBlue pl-3"
              >
                {category.title}
              </motion.h3>

              {/* Skills Grid */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -5,
                      borderColor: 'rgba(59, 130, 246, 0.4)',
                      boxShadow: '0 12px 24px -10px rgba(59, 130, 246, 0.25)'
                    }}
                    className="glass-card flex flex-col items-center justify-center p-5 rounded-xl border border-slate-850 hover:bg-slate-900/60 transition-all duration-300 group cursor-default text-center"
                  >
                    {/* Skill Icon */}
                    <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>

                    {/* Skill Name */}
                    <h4 className="text-sm font-semibold text-slate-100 font-poppins mb-1">
                      {skill.name}
                    </h4>

                    {/* Skill Level Badge */}
                    <span className="text-[10px] font-mono text-slate-450 tracking-wide font-medium bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
