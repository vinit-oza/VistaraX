import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Footer = () => {
  const links = {
    platform: [
      { label: 'Unit Configurator', href: '#solutions' },
      { label: 'Virtual Tours', href: '#solutions' },
      { label: 'AI Visualization', href: '#solutions' },
      { label: 'Analytics', href: '#features' },
      { label: 'Integrations', href: '#features' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
    resources: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Status', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'GDPR', href: '#' },
    ],
  };

  const offices = [
    { city: 'Dubai', address: 'DIFC, Gate Village 4', flag: '🇦🇪' },
    { city: 'London', address: 'Canary Wharf, Level 39', flag: '🇬🇧' },
    { city: 'Riyadh', address: 'King Abdullah Financial District', flag: '🇸🇦' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900 opacity-50" />
      
      {/* Geometric background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white rotate-45" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-white rotate-12" />
        <div className="absolute bottom-40 left-1/3 w-16 h-16 border border-white rotate-45" />
        <div className="absolute bottom-20 right-1/4 w-20 h-20 border border-white rotate-12" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10 px-4 lg:px-6 xl:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Top CTA section with enhanced styling */}
        <motion.div
          className="text-center py-16 lg:py-20 mb-12 lg:mb-16 border-b border-gray-800 relative"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20" />
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-white/80 backdrop-blur-sm">
              Ready to Transform?
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight mb-6 lg:mb-8 leading-tight">
            Revolutionize Your
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Property Sales
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-300 mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
            Join 120+ developers already using VistaraX to sell off-plan properties 40% faster with immersive 3D experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton
              href="#contact"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20"
            >
              Book a Demo
              <motion.svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </MagneticButton>
            
            <motion.a
              href="mailto:sales@vistarax.io"
              className="text-gray-400 hover:text-white transition-colors text-lg group"
              whileHover={{ y: -2 }}
            >
              <span className="border-b border-gray-600 group-hover:border-white transition-colors">
                sales@vistarax.io
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Enhanced Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 xl:gap-16 mb-16 lg:mb-20">
          {/* Company info section */}
          <motion.div className="col-span-1 md:col-span-2 lg:col-span-2" variants={itemVariants}>
            <motion.a 
              href="#" 
              className="inline-block mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="/Logo.png" alt="VistaraX" className="h-35 w-auto filter brightness-0 invert" />
            </motion.a>
            
            
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Global Offices
              </h4>
              {offices.map((office, index) => (
                <motion.div 
                  key={office.city} 
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer group"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <span className="text-lg">{office.flag}</span>
                  <div>
                    <span className="font-medium text-white group-hover:text-gray-200">{office.city}</span>
                    <span className="text-sm text-gray-500 ml-2">· {office.address}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Links sections */}
          {Object.entries(links).map(([category, items], categoryIndex) => (
            <motion.div 
              key={category} 
              variants={itemVariants}
              className="space-y-6"
            >
              <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-3">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h4>
              <ul className="space-y-4">
                {items.map((link, index) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-300 inline-block group relative"
                      whileHover={{ x: 8 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (index * 0.05), duration: 0.4 }}
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                      </span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom bar */}
        <motion.div
          className="py-8 border-t border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-8"
          variants={itemVariants}
        >
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            <p className="text-gray-500 text-center lg:text-left">
              © {new Date().getFullYear()} VistaraX Technologies Ltd. All rights reserved.
            </p>
            
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span 
                className="w-3 h-3 rounded-full bg-green-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
            </motion.div>
            <div className="text-gray-500 text-sm">
              Designed and Developed BY Vinit Prajapati
            </div>
          </div>
          
          {/* Social links with enhanced styling */}
          <div className="flex items-center gap-6">
            {[
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/vinitkumar-prajapati/',
                icon: (
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                ),
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com',
                icon: (
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                ),
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com',
                icon: (
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                ),
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  {social.icon}
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
