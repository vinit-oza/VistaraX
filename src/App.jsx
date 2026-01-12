import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solutions from './components/Solutions';
import Features from './components/Features';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { TestimonialProvider } from './hooks/useTestimonialTimer';

const App = () => {
  return (
    <TestimonialProvider>
      <CustomCursor />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Problem />
          <Solutions />
          <Features />
          <WhyUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </TestimonialProvider>
  );
};

export default App;