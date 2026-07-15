import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaExternalLinkAlt, FaFire, FaTerminal } from 'react-icons/fa';

// Generate simulated GitHub contribution data
const generateContributionGrid = () => {
  const weeks = 28; // ~7 months
  const grid = [];
  
  // Random contribution levels (0 to 4)
  for (let w = 0; w < weeks; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      // Create a gradient pattern with some randomized blank spots
      const dayIndex = w * 7 + d;
      let level = 0;
      if (dayIndex % 8 !== 0) {
        level = Math.floor(Math.random() * 4) + 1;
      }
      week.push({
        commits: level === 0 ? 0 : Math.floor(Math.random() * 8) + 1,
        level, // 0 = none, 1 = low, 2 = mid-low, 3 = mid-high, 4 = high
      });
    }
    grid.push(week);
  }
  return grid;
};

const contributionGrid = generateContributionGrid();

const CodingProfiles = () => {
  const [hoveredCell, setHoveredCell] = useState(null);

  // Leetcode primary & secondary stats simulation
  const leetcodeProfiles = [
    {
      type: 'Primary Profile',
      username: 'MANISH_DHANARAJ',
      url: 'https://leetcode.com/u/MANISH_DHANARAJ/',
      solved: 342,
      easy: 180,
      medium: 138,
      hard: 24,
      ranking: 'Top 12%'
    },
    {
      type: 'Secondary Profile',
      username: 'manish327',
      url: 'https://leetcode.com/u/manish327/',
      solved: 165,
      easy: 95,
      medium: 62,
      hard: 8,
      ranking: 'Top 25%'
    }
  ];

  return (
    <section id="coding" className="py-24 bg-[#0B1120] relative">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

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
            Coding Journeys & Analytics
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-primaryBlue to-secondaryCyan mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* GitHub Activity Card (Left Column, Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 md:p-8 border border-slate-850 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl text-white">
                    <FaGithub />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-space text-white">GitHub Contribution Activity</h3>
                    <p className="text-xs text-slate-500 font-mono">github.com/Manish03d</p>
                  </div>
                </div>

                <a
                  href="https://github.com/Manish03d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs font-semibold text-slate-450 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Repos</span>
                  <FaExternalLinkAlt size={8} />
                </a>
              </div>

              {/* Simulated Git Graph */}
              <div className="bg-slate-950/40 border border-slate-900 p-5 rounded-xl mb-6 relative">
                <h4 className="text-xs font-semibold text-slate-400 font-space mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Active Development Pipeline
                </h4>
                
                {/* Scroll container for responsive small screens */}
                <div className="overflow-x-auto no-scrollbar pb-2">
                  <div className="flex gap-[4px] min-w-[380px] justify-between">
                    {contributionGrid.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-[4px]">
                        {week.map((day, dIdx) => {
                          // Grid cell background coloring based on levels
                          let cellBg = 'bg-slate-900'; // level 0
                          if (day.level === 1) cellBg = 'bg-emerald-900/40';
                          if (day.level === 2) cellBg = 'bg-emerald-800/60';
                          if (day.level === 3) cellBg = 'bg-emerald-600/80';
                          if (day.level === 4) cellBg = 'bg-emerald-400';

                          return (
                            <div
                              key={dIdx}
                              className={`w-[11px] h-[11px] rounded-[2px] cursor-pointer transition-all hover:scale-125 ${cellBg} ${
                                hoveredCell && hoveredCell.w === wIdx && hoveredCell.d === dIdx
                                  ? 'ring-1 ring-white scale-125'
                                  : ''
                              }`}
                              onMouseEnter={() => setHoveredCell({ w: wIdx, d: dIdx, commits: day.commits })}
                              onMouseLeave={() => setHoveredCell(null)}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated Grid Tooltip display */}
                <div className="h-6 mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-900 pt-3">
                  <span>Less</span>
                  <div className="flex gap-[3px] items-center">
                    <div className="w-[10px] h-[10px] rounded-[1px] bg-slate-900" />
                    <div className="w-[10px] h-[10px] rounded-[1px] bg-emerald-900/40" />
                    <div className="w-[10px] h-[10px] rounded-[1px] bg-emerald-800/60" />
                    <div className="w-[10px] h-[10px] rounded-[1px] bg-emerald-600/80" />
                    <div className="w-[10px] h-[10px] rounded-[1px] bg-emerald-400" />
                  </div>
                  <span>More</span>
                  
                  {/* Active hover display text */}
                  <span className="text-cyan-400 font-semibold min-w-[120px] text-right">
                    {hoveredCell ? `${hoveredCell.commits} commits on day` : 'Hover graph blocks'}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-850 pt-6">
              <div className="text-center sm:text-left">
                <span className="block text-xs text-slate-500 font-mono uppercase tracking-wider">Repositories</span>
                <strong className="text-2xl font-bold font-space text-white">12+</strong>
              </div>
              <div className="text-center sm:text-left border-x border-slate-850 px-4">
                <span className="block text-xs text-slate-500 font-mono uppercase tracking-wider">Commits YTD</span>
                <strong className="text-2xl font-bold font-space text-cyan-400">450+</strong>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-xs text-slate-500 font-mono uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1">
                  Streak <FaFire className="text-amber-500 text-[10px]" />
                </span>
                <strong className="text-2xl font-bold font-space text-amber-400">32 Days</strong>
              </div>
            </div>
          </motion.div>

          {/* LeetCode Card (Right Column, Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 glass-card rounded-2xl p-6 md:p-8 border border-slate-850 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl text-yellow-500">
                  <FaCode />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-space text-white">LeetCode Analytics</h3>
                  <p className="text-xs text-slate-500 font-mono">Problem Solving Metrics</p>
                </div>
              </div>

              {/* Profiles details */}
              <div className="space-y-5">
                {leetcodeProfiles.map((profile, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl bg-slate-950/40 border border-slate-900 hover:border-slate-850 transition-colors"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="text-[9px] font-bold font-mono text-cyan-400 uppercase tracking-widest block">
                          {profile.type}
                        </span>
                        <strong className="text-sm font-space text-white font-bold">{profile.username}</strong>
                      </div>
                      <a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white transition-all text-xs"
                      >
                        <FaExternalLinkAlt size={10} />
                      </a>
                    </div>

                    {/* Progress details */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono text-slate-450">
                        <span>Total Solved</span>
                        <span className="text-white font-bold">{profile.solved}</span>
                      </div>
                      
                      {/* Bar charts distribution */}
                      <div className="space-y-1.5">
                        {/* Easy solved */}
                        <div>
                          <div className="flex justify-between text-[10px] text-slate-500 font-mono mb-0.5">
                            <span>Easy</span>
                            <span className="text-green-400 font-semibold">{profile.easy}</span>
                          </div>
                          <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500" style={{ width: `${(profile.easy / profile.solved) * 100}%` }} />
                          </div>
                        </div>

                        {/* Medium solved */}
                        <div>
                          <div className="flex justify-between text-[10px] text-slate-500 font-mono mb-0.5">
                            <span>Medium</span>
                            <span className="text-yellow-500 font-semibold">{profile.medium}</span>
                          </div>
                          <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-500" style={{ width: `${(profile.medium / profile.solved) * 100}%` }} />
                          </div>
                        </div>

                        {/* Hard solved */}
                        <div>
                          <div className="flex justify-between text-[10px] text-slate-500 font-mono mb-0.5">
                            <span>Hard</span>
                            <span className="text-rose-500 font-semibold">{profile.hard}</span>
                          </div>
                          <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                            <div className="h-full bg-rose-500" style={{ width: `${(profile.hard / profile.solved) * 100}%` }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom summary badge */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 border-t border-slate-850 pt-6 mt-6">
              <FaTerminal className="text-cyan-400" />
              <span>Combined Solving: <strong className="text-white">500+ Algorithmic Challenges</strong></span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
