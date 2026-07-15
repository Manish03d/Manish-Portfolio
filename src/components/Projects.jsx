import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaHammer } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Flipper',
    badge: 'Currently Developing',
    description: 'A real-time full-stack web application. Flipper focuses on clean backend API architectures, highly scalable express microservices, responsive frontend layouts, and highly optimized reactive data state flows.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
    github: 'https://github.com/Manish03d/flipper', // Assuming standard structure
    demo: 'https://filppers.vercel.app/',
    status: 'In Development',
    mockupColor: 'from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]',
    mockupPattern: (
      <div className="absolute inset-0 flex flex-col justify-between p-4 font-mono text-[9px] text-cyan-400/30 overflow-hidden select-none">
        <div>const app = express();</div>
        <div>app.use(express.json());</div>
        <div>io.on('connection', (socket) =&gt; &#123;</div>
        <div className="pl-4">socket.emit('sync_state', currentData);</div>
        <div>&#125;);</div>
        <div>router.route('/api/v1/flipper').post(dbController);</div>
        <div className="text-right text-rose-500/20">MongoDB Connect [SUCCESS]</div>
      </div>
    )
  },
  {
    id: 2,
    title: 'Developer Portfolio',
    badge: 'Currently Developing',
    description: 'A premium developer portfolio showcasing coding profiles, projects, skills, certifications, and active journey milestones. Designed with a custom glassmorphism visual system, cursor glow, and sleek micro-interactions.',
    techStack: ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'React Icons'],
    github: 'https://github.com/Manish03d/First-project--portfolio', // Current repo name style
    demo: '#',
    status: 'In Development',
    mockupColor: 'from-[#8B5CF6] via-purple-600 to-pink-500',
    mockupPattern: (
      <div className="absolute inset-0 flex flex-col justify-between p-4 font-mono text-[9px] text-purple-400/30 overflow-hidden select-none">
        <div>&lt;motion.div className="glass-card"&gt;</div>
        <div className="pl-4">&lt;Navbar activeSection=&#123;section&#125; /&gt;</div>
        <div className="pl-4">&lt;Hero name="Manish Dhanaraj" /&gt;</div>
        <div className="pl-4">&lt;GlowCursor /&gt;</div>
        <div>&lt;/motion.div&gt;</div>
        <div className="text-right text-cyan-500/20">Tailwind Build Complete</div>
        <div className="text-right text-green-500/20">Lighthouse Score: 99/100</div>
      </div>
    )
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#0B1120] relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

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
            Featured Engineering Projects
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-primaryBlue to-secondaryCyan mt-4 rounded-full"
          />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden border border-slate-850 hover:border-slate-800 flex flex-col group transition-all duration-300 relative"
            >
              {/* Card Header Illustration / Mockup */}
              <div className="h-48 md:h-56 w-full relative overflow-hidden bg-slate-950/60 border-b border-slate-850 flex items-center justify-center">
                {/* Background Gradient Mesh */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.mockupColor} opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-500`} />
                
                {/* Visual grid overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 0)', backgroundSize: '16px 16px' }} />

                {/* CSS Visual Code Block */}
                {project.mockupPattern}

                {/* Styled SDE Code Bracket Icon */}
                <div className="z-10 w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-cyan-400/40 transition-all duration-300">
                  <span className="text-xl font-bold font-mono bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">&lt;/&gt;</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Status Badge */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/25 pulse-border uppercase">
                      <FaHammer className="text-[9px] animate-pulse" />
                      {project.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-mono font-medium">#0{project.id}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl md:text-2xl font-bold font-space text-white group-hover:text-cyan-400 transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>

                  {/* Tech Stack tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-350 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Buttons */}
                <div className="flex items-center gap-4 border-t border-slate-850 pt-6">
                  {/* GitHub Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-850 hover:border-slate-700 text-slate-300 hover:text-white transition-all duration-300 font-poppins text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <FaGithub />
                    <span>Repository</span>
                  </a>

                  {/* Live Demo Button */}
                  <a
                    href={project.demo}
                    className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-primaryBlue/20 to-secondaryCyan/20 hover:from-primaryBlue hover:to-secondaryCyan text-cyan-400 hover:text-white border border-cyan-500/20 hover:border-transparent transition-all duration-300 font-poppins text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
                  >
                    <FaExternalLinkAlt size={12} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
