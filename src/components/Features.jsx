import { useRef, memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedText from './AnimatedText';

const features = [
  {
    title: 'Salesforce & HubSpot Integration',
    description: 'Seamless two-way sync with your CRM. Leads and reservations flow automatically.',
    badge: 'Integration',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
    features: ['Real-time data sync', 'Automated lead scoring', 'Custom field mapping'],
  },
  {
    title: 'Global Multi-Language Support',
    description: 'Present properties in Arabic, English, Mandarin, and 12+ languages with auto-detection.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80',
    features: ['16+ languages', 'Auto-detection', 'Cultural localization'],
  },
  {
    title: 'Offline Sales Mode',
    description: 'Continue selling without internet. All data syncs automatically when back online.',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80',
    features: ['Works offline', 'Auto-sync', 'Local storage'],
  },
  {
    title: 'Advanced Analytics Dashboard',
    description: 'Deep insights into buyer behavior and sales team effectiveness with real-time data.',
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    features: ['Real-time analytics', 'Custom reporting', 'Performance tracking'],
  },
  {
    title: 'Broker Portal & Commission',
    description: 'Give agents controlled access. Track performance and automate commissions.',
    badge: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
    features: ['Agent access control', 'Commission automation', 'Leaderboards'],
  },
  {
    title: 'E-Signature & Digital KYC',
    description: 'Collect documents, verify identity, and get contracts signed digitally.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    features: ['Digital signatures', 'ID verification', 'Document management'],
  },
];

const FeatureCard = memo(function FeatureCard({ i, feature, progress, targetScale }) {
  const scale = useTransform(progress, [i / features.length, 1], [1, targetScale]);

  return (
    <div className="sticky top-0 flex items-center justify-center h-screen">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 35}px)` }}
        className="relative origin-top w-full max-w-6xl mx-auto"
      >
        <div className="group relative overflow-hidden rounded-2xl lg:rounded-3xl bg-neutral-950 border border-white/10 hover:border-white/20 transition-colors duration-300 shadow-2xl mx-2 lg:mx-0">
          <div className="grid lg:grid-cols-2 h-[380px] sm:h-[420px] lg:h-[460px]">
            {/* Content */}
            <div className={`p-6 lg:p-8 xl:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">0{i + 1}</span>
                </div>
                {feature.badge && (
                  <span className="px-3 py-1 bg-white text-black text-xs font-bold rounded-full">
                    {feature.badge}
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-5">
                {feature.description}
              </p>

              <ul className="space-y-2">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-500 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className={`relative hidden lg:block ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <img 
                src={feature.image} 
                alt={feature.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className={`absolute inset-0 ${i % 2 === 1 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-neutral-950 via-neutral-950/50 to-transparent`} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

const Features = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="features" ref={container} className="relative bg-black">
      {/* Header */}
      <div className="relative z-10 pt-16 lg:pt-24 xl:pt-32 pb-6 lg:pb-8 text-center px-4 lg:px-6">
        <motion.p
          className="text-sm font-bold text-white/60 uppercase tracking-[0.2em] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Enterprise Capabilities
        </motion.p>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight mb-4 lg:mb-6">
          <AnimatedText>Built for enterprise</AnimatedText>
          <br />
          <AnimatedText delay={0.1} className="text-white/60">real estate operations</AnimatedText>
        </h2>
        
        <motion.p
          className="text-base lg:text-lg text-white/50 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Seamlessly integrates with your existing stack. Deploy in weeks, not months.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="relative px-4 lg:px-6">
        {features.map((feature, i) => (
          <FeatureCard
            key={i}
            i={i}
            feature={feature}
            progress={scrollYProgress}
            targetScale={1 - (features.length - i) * 0.03}
          />
        ))}
      </div>

      {/* Integrations */}
      <div className="relative z-10 py-16 border-t border-white/10 px-6 max-w-5xl mx-auto">
        <p className="text-sm text-white/40 text-center mb-10 uppercase tracking-wider">
          Integrates with your tools
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {/* Salesforce */}
          <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
            <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7">
                <path fill="#00A1E0" d="M10.05 7.07c.7-.75 1.67-1.22 2.76-1.22 1.4 0 2.63.76 3.33 1.87.6-.26 1.25-.4 1.94-.4 2.73 0 4.95 2.24 4.95 5s-2.22 5-4.95 5c-.35 0-.7-.04-1.03-.11-.6 1.05-1.73 1.76-3.03 1.76-.65 0-1.25-.17-1.77-.47-.6 1.15-1.8 1.94-3.18 1.94-1.44 0-2.68-.85-3.25-2.08-.25.05-.5.05-.75.05-2.38 0-4.32-1.95-4.32-4.35 0-1.8 1.1-3.35 2.65-4-.05-.3-.1-.6-.1-.9 0-2.3 1.85-4.15 4.13-4.15 1.45 0 2.73.75 3.47 1.88"/>
              </svg>
            </div>
            <span className="text-xs text-white/40">Salesforce</span>
          </motion.div>

          {/* HubSpot */}
          <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
            <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7">
                <path fill="#FF7A59" d="M18.16 10.1V7.4c.77-.35 1.3-1.1 1.3-2 0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17c0 .9.53 1.65 1.3 2v2.7c-1.05.2-2 .7-2.75 1.4l-7.3-5.7c.05-.2.1-.4.1-.6 0-1.3-1.05-2.35-2.35-2.35S1.77 3.9 1.77 5.2s1.05 2.35 2.35 2.35c.45 0 .9-.15 1.25-.35l7.15 5.6c-.5.8-.8 1.75-.8 2.75 0 2.9 2.35 5.25 5.25 5.25s5.25-2.35 5.25-5.25c0-2.55-1.8-4.65-4.2-5.15zm-.87 7.5c-1.3 0-2.35-1.05-2.35-2.35s1.05-2.35 2.35-2.35 2.35 1.05 2.35 2.35-1.05 2.35-2.35 2.35z"/>
              </svg>
            </div>
            <span className="text-xs text-white/40">HubSpot</span>
          </motion.div>

          {/* Yardi */}
          <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
            <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7">
                <path fill="#1E88E5" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5l6.5 3.25L12 11 5.5 7.75 12 4.5zM4 8.85l7 3.5v6.8l-7-3.5v-6.8zm16 0v6.8l-7 3.5v-6.8l7-3.5z"/>
              </svg>
            </div>
            <span className="text-xs text-white/40">Yardi</span>
          </motion.div>

          {/* SAP */}
          <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
            <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7">
                <path fill="#0FAAFF" d="M2 6h20v12H2V6zm3 3h2l1 4 1-4h2v6h-1.5v-4l-1 4h-1l-1-4v4H5V9zm9 0h3c1 0 1.5.75 1.5 1.75S18 12.5 17 12.5h-1.5V15H14V9zm1.5 2.5h1c.25 0 .5-.25.5-.75s-.25-.75-.5-.75h-1v1.5z"/>
              </svg>
            </div>
            <span className="text-xs text-white/40">SAP</span>
          </motion.div>

          {/* Oracle */}
          <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
            <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7">
                <path fill="#F80000" d="M7 8c-2.2 0-4 1.8-4 4s1.8 4 4 4h10c2.2 0 4-1.8 4-4s-1.8-4-4-4H7zm0 2h10c1.1 0 2 .9 2 2s-.9 2-2 2H7c-1.1 0-2-.9-2-2s.9-2 2-2z"/>
              </svg>
            </div>
            <span className="text-xs text-white/40">Oracle</span>
          </motion.div>

          {/* Microsoft */}
          <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
            <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                <path fill="#F25022" d="M3 3h8v8H3z"/>
                <path fill="#7FBA00" d="M13 3h8v8h-8z"/>
                <path fill="#00A4EF" d="M3 13h8v8H3z"/>
                <path fill="#FFB900" d="M13 13h8v8h-8z"/>
              </svg>
            </div>
            <span className="text-xs text-white/40">Microsoft</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
