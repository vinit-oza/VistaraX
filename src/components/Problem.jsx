import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedText from './AnimatedText';

const Problem = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const painPoints = [
    {
      number: '01',
      title: "Buyers can't visualize unbuilt properties",
      description: "Floor plans and static renders don't convey space, light, or views. Buyers hesitate to commit AED 2-10M on something they can't experience.",
      stat: '67%',
      statLabel: 'of buyers delay decisions due to visualization gaps',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Sales teams waste time on manual processes',
      description: 'Checking availability across spreadsheets, generating quotes manually, and coordinating with back-office for every inquiry slows down closings.',
      stat: '4.2 hrs',
      statLabel: 'average time spent per qualified lead',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Renders take weeks and cost thousands',
      description: 'Every design change means waiting 2-3 weeks for updated CGIs. At $500-2,000 per render, showing multiple finish options becomes prohibitively expensive.',
      stat: '$18K',
      statLabel: 'average render cost per project phase',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={containerRef} className="py-16 lg:py-24 xl:py-40 px-4 lg:px-6 xl:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full opacity-30"
        style={{ y }}
      >
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-gray-200 to-transparent blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <motion.p
            className="text-sm font-medium text-gray-500 uppercase tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Problem
          </motion.p>
          <h2 className="mt-4 text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
            <AnimatedText delay={0.1}>
              Off-plan sales are stuck
            </AnimatedText>
            <AnimatedText delay={0.2} className="text-gray-400">
              in the pre-digital era
            </AnimatedText>
          </h2>
          <motion.p
            className="mt-6 text-base lg:text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            While buyers research properties online and expect instant information, 
            most developers still rely on PDFs, phone calls, and physical sales centers 
            that can't keep up with demand.
          </motion.p>
        </div>

        <div className="mt-12 lg:mt-20 xl:mt-28">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              className="group relative py-6 lg:py-10 xl:py-14 border-t border-gray-200 first:border-t-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 xl:gap-12 items-start">
                <div className="lg:col-span-1">
                  <motion.span
                    className="text-4xl lg:text-6xl xl:text-7xl font-light text-gray-200 group-hover:text-gray-300 transition-colors duration-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    {point.number}
                  </motion.span>
                </div>
                
                <div className="lg:col-span-5">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {point.icon}
                    </motion.div>
                    <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold text-gray-900 leading-tight">
                      {point.title}
                    </h3>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="lg:col-span-2 lg:text-right">
                  <p className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-900">{point.stat}</p>
                  <p className="text-sm text-gray-500 mt-1">{point.statLabel}</p>
                </div>
              </div>

              {/* Hover line animation */}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-gray-900"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
