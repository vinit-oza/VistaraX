import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedText from './AnimatedText';

const Solutions = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const solutions = [
    {
      id: 1,
      title: 'Interactive Unit Configurator',
      description: 'Let buyers explore every unit in your development. Filter by floor, view, size, and price. Show real-time availability synced with your CRM.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      features: ['Real-time inventory sync', 'Dynamic pricing engine', 'Payment plan calculator'],
    },
    {
      id: 2,
      title: 'Virtual Property Walkthroughs',
      description: 'Give buyers a true sense of space with photorealistic 3D tours. Walk through apartments and explore amenities from any device.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      features: ['Browser-based, no downloads', 'Mobile & VR compatible', 'Guided or self-paced tours'],
    },
    {
      id: 3,
      title: 'AI Visualization Engine',
      description: 'Generate photorealistic renders in minutes, not weeks. Show buyers different finishes and furniture layouts instantly.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      features: ['< 5 min render time', 'Multiple finish options', 'Day/night visualization'],
    },
    {
      id: 4,
      title: 'Sales Analytics Dashboard',
      description: 'Track buyer engagement, unit popularity, and sales team performance. Make data-driven decisions with real-time insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      features: ['Real-time metrics', 'Conversion tracking', 'Team performance'],
    },
    {
      id: 5,
      title: 'Digital Document Signing',
      description: 'Close deals faster with integrated e-signatures, KYC verification, and automated document generation.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
      features: ['E-signature integration', 'KYC compliance', 'Auto PDF generation'],
    },
  ];

  return (
    <section id="solutions" ref={containerRef} className="relative h-[300vh] sm:h-[350vh] lg:h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="h-full flex flex-col justify-center px-4 lg:px-6 xl:px-8">
          <div className="max-w-7xl mx-auto w-full mb-8">
            <motion.p
              className="text-sm font-medium text-gray-500 uppercase tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Platform
            </motion.p>
            <div className="flex items-end justify-between mt-3">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-900 tracking-tight">
                <AnimatedText>One platform for</AnimatedText>
                <AnimatedText delay={0.1} className="text-gray-400">the entire sales journey</AnimatedText>
              </h2>
              
              {/* Progress indicator */}
              <div className="hidden lg:block w-32 xl:w-48">
                <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gray-900 rounded-full"
                    style={{ width: progressWidth }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden flex-1 flex items-center">
            <motion.div
              className="flex gap-6"
              style={{ x }}
            >
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  className="flex-shrink-0 w-[85vw] sm:w-[70vw] lg:w-[32vw] max-w-md"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="h-[30vh] sm:h-[35vh] lg:h-[40vh] mb-4 relative rounded-2xl overflow-hidden group">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Feature tags */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-1.5">
                        {solution.features.map((feature, i) => (
                          <motion.span
                            key={i}
                            className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-900"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-medium text-gray-400">0{solution.id}</span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
