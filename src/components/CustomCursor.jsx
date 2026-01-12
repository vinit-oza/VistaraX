import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if touch device
    if ('ontouchstart' in window) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('[data-hover]')
      ) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('[data-hover]')
      ) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleHoverStart);
    document.addEventListener('mouseout', handleHoverEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleHoverStart);
      document.removeEventListener('mouseout', handleHoverEnd);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Dot cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{ 
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="w-2 h-2 bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 0.5 : 1,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Ring cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{ 
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="w-6 h-6 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            boxShadow: '0 0 0 1px rgba(0,0,0,0.2)',
          }}
          animate={{
            scale: isHovering ? 1.8 : 1,
            borderWidth: isHovering ? '1px' : '2px',
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      <style>{`
        /* Default cursor remains visible */
      `}</style>
    </>
  );
};

export default CustomCursor;
