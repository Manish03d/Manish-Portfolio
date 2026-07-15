import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const GlowCursor = () => {
  const [isMobile, setIsMobile] = useState(true);

  // Check if device is mobile or has touch capabilities
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(
        window.innerWidth < 768 || 
        navigator.maxTouchPoints > 0 || 
        'ontouchstart' in window
      );
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply spring physics for a smooth organic follow effect
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      // Offset by half of the glow diameter (350px / 2 = 175)
      mouseX.set(e.clientX - 175);
      mouseY.set(e.clientY - 175);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        left: cursorX,
        top: cursorY,
        width: 350,
        height: 350,
      }}
    >
      <div 
        className="w-full h-full rounded-full opacity-[0.15] blur-[80px]"
        style={{
          background: 'radial-gradient(circle, #3B82F6 0%, #06B6D4 40%, #8B5CF6 80%, transparent 100%)',
        }}
      />
    </motion.div>
  );
};

export default GlowCursor;
