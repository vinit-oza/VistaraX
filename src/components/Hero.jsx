import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const lettersRef = useRef(null);
  const imgHolderRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set('.hero-letters', { 
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 100
      });

      gsap.set('.hero-img-holder', {
        clipPath: 'polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%)',
        rotation: 30
      });

      gsap.set('.hero-img-holder img', {
        scale: 2
      });

      // Create timeline for the hero animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          pin: true,
          pinSpacing: true,
          onComplete: () => {
            // Clean up fixed positioning after animation
            gsap.set('.hero-letters', { position: 'absolute' });
          }
        }
      });

      // Animate letters with synchronized timing
      tl.to('.hero-letters .letters:first-child', {
        x: () => -window.innerWidth * 1.2,
        scale: 4,
        opacity: 0.8,
        ease: 'power2.inOut'
      }, 0)
      .to('.hero-letters .letters:last-child', {
        x: () => window.innerWidth * 1.2,
        scale: 4,
        opacity: 0.8,
        ease: 'power2.inOut'
      }, 0) // Same timing as first group
      // Animate image reveal
      .to('.hero-img-holder', {
        rotation: 0,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: 'power2.inOut'
      }, 0)
      .to('.hero-img-holder img', {
        scale: 1,
        ease: 'power2.inOut'
      }, 0);

    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Animation Section */}
      <section ref={heroRef} className="hero-animation-section">
        {/* Animated Letters */}
        <div ref={lettersRef} className="hero-letters">
          <div className="letters">
            <div>V</div>
            <div>I</div>
            <div>S</div>
            <div>T</div>
          </div>
          <div className="letters">
            <div>A</div>
            <div>R</div>
            <div>A</div>
            <div>X</div>
          </div>
        </div>

        {/* Image with clip-path animation */}
        <div ref={imgHolderRef} className="hero-img-holder">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Modern Skyscrapers and Real Estate Technology" />
        </div>
      </section>

      {/* Content Section - appears after animation */}
      <section ref={contentRef} className="hero-content-section">
        <div className="hero-content-container">
          <div className="hero-content-grid">
            {/* Main Content */}
            <div className="hero-main-content">
              <div className="hero-badge">
                <span>PropTech Innovation</span>
              </div>
              
              <h1 className="hero-title">
                Transform Off-Plan Sales
              </h1>
              
              <p className="hero-subtitle">
                Revolutionary platform enabling developers to sell unbuilt properties through 
                immersive 3D experiences and real-time booking systems.
              </p>
              
              <div className="hero-cta-group">
                <a href="#contact" className="btn-primary">
                  Schedule Demo
                </a>
                <a href="#solutions" className="btn-secondary">
                  View Platform
                </a>
              </div>
            </div>

            {/* Stats Section */}
            <div className="hero-stats-section">
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-value">40%</div>
                  <div className="stat-description">Faster sales cycles</div>
                </div>
                
                <div className="stat-divider"></div>
                
                <div className="stat-item">
                  <div className="stat-value">3x</div>
                  <div className="stat-description">Higher conversion</div>
                </div>
                
                <div className="stat-divider"></div>
                
                <div className="stat-item">
                  <div className="stat-value">24/7</div>
                  <div className="stat-description">Global access</div>
                </div>
              </div>
              
              <div className="hero-description">
                <p>
                  From Dubai's skyline to global markets, VistaraX empowers developers with 
                  cutting-edge technology to showcase and manage off-plan properties before construction begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;