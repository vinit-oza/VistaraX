import { motion } from 'framer-motion';

const AnimatedText = ({ children, className = '', delay = 0, split = false }) => {
  if (split && typeof children === 'string') {
    const words = children.split(' ');
    return (
      <span className={className}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: delay + i * 0.05,
              }}
            >
              {word}&nbsp;
            </motion.span>
          </span>
        ))}
      </span>
    );
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        className={className}
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedText;
