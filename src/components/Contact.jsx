import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedText from './AnimatedText';
import MagneticButton from './MagneticButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    units: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: '-100px' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const benefits = [
    {
      title: '30-minute personalized demo',
      description: 'See VistaraX configured for your specific project type and market.',
    },
    {
      title: 'ROI assessment',
      description: 'Get a custom analysis of potential time and cost savings.',
    },
    {
      title: 'Implementation roadmap',
      description: 'Understand exactly what it takes to go live.',
    },
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 xl:py-40 px-4 lg:px-6 xl:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">
          <div>
            <motion.p
              className="text-sm font-medium text-gray-500 uppercase tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Get Started
            </motion.p>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
              <AnimatedText>See VistaraX in action</AnimatedText>
              <AnimatedText delay={0.1} className="text-gray-400">for your next project</AnimatedText>
            </h2>
            <motion.p
              className="mt-6 text-base lg:text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Book a demo with our team. We'll show you how developers like Emaar, 
              Sobha, and Aldar use VistaraX to sell off-plan properties faster.
            </motion.p>

            {/* Benefits list */}
            <motion.div
              className="mt-10 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact info */}
            <motion.div
              className="mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-sm text-gray-500 mb-4">Prefer to reach out directly?</p>
              <div className="space-y-3">
                <a href="mailto:sales@vistarax.io" className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  sales@vistarax.io
                </a>
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Dubai, UAE · London, UK · Riyadh, KSA
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            ref={formRef}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-2xl lg:rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
              {/* Animated background gradient */}
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-gray-100 to-transparent blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.3, 0.5],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {submitted ? (
                <motion.div
                  className="text-center py-12 relative z-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  >
                    <motion.svg
                      className="w-10 h-10 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-gray-900">Thanks, {formData.name.split(' ')[0]}!</h3>
                  <p className="mt-2 text-gray-600">We'll reach out within one business day to schedule your demo.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5 relative z-10">
                  <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
                    <motion.div
                      custom={0}
                      variants={inputVariants}
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="Ahmed Hassan"
                      />
                    </motion.div>

                    <motion.div
                      custom={1}
                      variants={inputVariants}
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="ahmed@company.com"
                      />
                    </motion.div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
                    <motion.div
                      custom={2}
                      variants={inputVariants}
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                    >
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="Your company"
                      />
                    </motion.div>

                    <motion.div
                      custom={3}
                      variants={inputVariants}
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                    >
                      <label htmlFor="units" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Size
                      </label>
                      <select
                        id="units"
                        name="units"
                        value={formData.units}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('units')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                      >
                        <option value="">Select unit count</option>
                        <option value="1-50">1-50 units</option>
                        <option value="51-200">51-200 units</option>
                        <option value="201-500">201-500 units</option>
                        <option value="500+">500+ units</option>
                      </select>
                    </motion.div>
                  </div>

                  <motion.div
                    custom={4}
                    variants={inputVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your project (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                      placeholder="E.g., We're launching a 300-unit tower in Dubai Marina Q2 2026..."
                    />
                  </motion.div>

                  <motion.div
                    custom={5}
                    variants={inputVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                  >
                    <MagneticButton
                      onClick={() => {}}
                      className="w-full px-6 py-4 text-base font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Book Your Demo
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </span>
                    </MagneticButton>
                  </motion.div>

                  <motion.p
                    className="text-xs text-gray-500 text-center"
                    custom={6}
                    variants={inputVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                  >
                    No commitment required. We'll never share your information.
                  </motion.p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
