import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useMotionValue } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { useTestimonialTimer } from '../hooks/useTestimonialTimer';

const AnimatedCounter = ({ value, suffix = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    const numericValue = parseFloat(value);
    const duration = 2000;
    const startTime = Date.now() + delay * 1000;
    
    const animate = () => {
      const now = Date.now();
      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }
      
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      
      setDisplayValue(eased * numericValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, value, delay]);

  const formattedValue = value.includes('.') 
    ? displayValue.toFixed(1) 
    : Math.round(displayValue);

  return (
    <span ref={ref} className="tabular-nums">
      {formattedValue}{suffix}
    </span>
  );
};

const GlowingCard = ({ metric, index }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      
      {/* Card */}
      <div className="relative h-full bg-neutral-900 rounded-2xl border border-white/10 p-5 lg:p-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon and stat row */}
        <div className="flex items-center justify-between mb-3">
          <motion.div 
            className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {metric.icon}
          </motion.div>
          <span className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
            <AnimatedCounter value={metric.stat} suffix={metric.suffix} delay={0.2 + index * 0.1} />
          </span>
        </div>
        
        {/* Label */}
        <h3 className="text-base font-semibold text-white mb-1">{metric.label}</h3>
        
        {/* Description */}
        <p className="text-gray-500 text-xs leading-relaxed">{metric.description}</p>
      </div>
    </motion.div>
  );
};

const TestimonialSlider = () => {
  const {
    testimonials,
    activeIndex,
    progress,
    goToIndex,
    goNext,
    goPrev,
  } = useTestimonialTimer();

  const currentTestimonial = testimonials[activeIndex];

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Main testimonial card */}
      <div className="relative bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Image side */}
          <div className="relative h-64 lg:h-auto lg:min-h-[400px] overflow-hidden">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: i === activeIndex ? 1 : 0,
                  scale: i === activeIndex ? 1 : 1.1,
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={t.image}
                  alt={t.project}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/50 to-transparent lg:bg-gradient-to-t lg:from-neutral-900 lg:via-transparent lg:to-transparent" />
              </motion.div>
            ))}
            
            {/* Project info overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <motion.span
                    className="w-2 h-2 rounded-full bg-green-400"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs font-medium text-white/80">{currentTestimonial.status}</span>
                </div>
                <p className="text-white/60 text-sm">{currentTestimonial.location}</p>
                <p className="text-white text-xl font-semibold">{currentTestimonial.project}</p>
              </motion.div>
            </div>
          </div>
          
          {/* Content side */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            {/* Quote icon */}
            <svg className="w-12 h-12 text-white/10 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            {/* Quote text with animation */}
            <div className="relative min-h-[120px] mb-8">
              {testimonials.map((t, i) => (
                <motion.p
                  key={i}
                  className="text-lg lg:text-xl text-gray-300 leading-relaxed absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: i === activeIndex ? 1 : 0,
                    y: i === activeIndex ? 0 : 20,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  "{t.quote}"
                </motion.p>
              ))}
            </div>
            
            {/* Author info */}
            <div className="flex items-center gap-4">
              <div className="relative">
                {testimonials.map((t, i) => (
                  <motion.img
                    key={i}
                    src={t.avatar}
                    alt={t.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/20 absolute inset-0"
                    initial={false}
                    animate={{
                      opacity: i === activeIndex ? 1 : 0,
                      scale: i === activeIndex ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                ))}
                <div className="w-14 h-14" /> {/* Spacer */}
              </div>
              <div>
                <motion.p
                  key={`name-${activeIndex}`}
                  className="font-semibold text-white"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {currentTestimonial.author}
                </motion.p>
                <motion.p
                  key={`role-${activeIndex}`}
                  className="text-sm text-gray-500"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {currentTestimonial.role}, {currentTestimonial.company}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
          <div
            className="h-full bg-white/30 transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goToIndex(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-8 bg-white' : 'w-4 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        
        <div className="flex gap-2">
          <motion.button
            onClick={goPrev}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            onClick={goNext}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const WhyUs = () => {
  const containerRef = useRef(null);
  const { testimonials } = useTestimonialTimer();

  const metrics = [
    {
      stat: '34',
      suffix: '%',
      label: 'Faster Sales Cycle',
      description: 'Average reduction in time to close across our entire client portfolio.',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      stat: '2.8',
      suffix: 'x',
      label: 'More Qualified Leads',
      description: 'Buyers engaging with virtual tours are nearly 3x more likely to book visits.',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      stat: '89',
      suffix: '%',
      label: 'Lower Render Costs',
      description: 'AI-generated visuals replace traditional CGI at a fraction of the cost.',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-us" ref={containerRef} className="relative py-16 lg:py-24 xl:py-32 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="results-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#results-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 xl:mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white/60 font-medium">Proven Results</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight mb-4 lg:mb-6">
            <AnimatedText>Measurable impact on</AnimatedText>
            <br />
            <AnimatedText delay={0.1} className="text-white/40">your bottom line</AnimatedText>
          </h2>
          
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-white/50 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We've helped developers across the UAE, Saudi Arabia, and Europe 
            sell over $2.3 billion in off-plan inventory.
          </motion.p>
        </div>

        {/* Metrics cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 xl:gap-6 mb-12 lg:mb-16">
          {metrics.map((metric, index) => (
            <GlowingCard key={index} metric={metric} index={index} />
          ))}
        </div>

        {/* Testimonials */}
        <TestimonialSlider />

        {/* Trust badges */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <img
                  key={i}
                  src={t.avatar}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-black object-cover"
                />
              ))}
            </div>
            <span className="text-sm text-white/50">
              <span className="text-white font-semibold">120+</span> developers trust us
            </span>
          </div>
          
          <div className="h-8 w-px bg-white/10 hidden lg:block" />
          
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm text-white/50">
              <span className="text-white font-semibold">4.9/5</span> average rating
            </span>
          </div>
          
          <div className="h-8 w-px bg-white/10 hidden lg:block" />
          
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm text-white/50">
              <span className="text-white font-semibold">SOC 2</span> compliant
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
