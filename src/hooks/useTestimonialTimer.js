import { createContext, useContext, useState, useEffect, useRef, createElement } from 'react';

const testimonials = [
  {
    quote: "VistaraX transformed how we sell off-plan. Our Dubai Creek Harbour project sold 40% faster than projected.",
    author: "Sarah Al-Rashid",
    role: "VP of Sales",
    company: "Emaar Properties",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    project: "Dubai Creek Harbour",
    location: "Dubai, UAE",
    status: "Sold Out"
  },
  {
    quote: "The virtual walkthrough feature increased our conversion rate by 28%. Buyers can experience properties remotely.",
    author: "Mohammed Al-Fayed",
    role: "Chief Commercial Officer",
    company: "Sobha Realty",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    project: "Sobha Hartland",
    location: "Dubai, UAE",
    status: "85% Sold"
  },
  {
    quote: "We reduced our CGI budget by 70% with AI visualization. It's a game-changer for pre-sales.",
    author: "Elena Kowalski",
    role: "Marketing Director",
    company: "Aldar Properties",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    project: "Yas Bay Residences",
    location: "Abu Dhabi, UAE",
    status: "Now Selling"
  },
  {
    quote: "Integration with our Salesforce CRM was seamless. Real-time inventory at our fingertips.",
    author: "James Chen",
    role: "Head of Digital",
    company: "Damac Properties",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    project: "Damac Hills 2",
    location: "Dubai, UAE",
    status: "Phase 2 Open"
  }
];

const TestimonialContext = createContext(null);

export function TestimonialProvider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  useEffect(function() {
    var startTime = Date.now();
    var len = testimonials.length;

    intervalRef.current = setInterval(function() {
      var elapsed = Date.now() - startTime;
      var newProgress = (elapsed / 5000) * 100;

      if (newProgress >= 100) {
        setProgress(0);
        setActiveIndex(function(prev) {
          return (prev + 1) % len;
        });
      } else {
        setProgress(newProgress);
      }
    }, 16);

    return function() {
      clearInterval(intervalRef.current);
    };
  }, [activeIndex]);

  function goToIndex(index) {
    setProgress(0);
    setActiveIndex(index);
  }

  function goNext() {
    setProgress(0);
    setActiveIndex(function(prev) {
      return (prev + 1) % testimonials.length;
    });
  }

  function goPrev() {
    setProgress(0);
    setActiveIndex(function(prev) {
      return (prev - 1 + testimonials.length) % testimonials.length;
    });
  }

  var contextValue = {
    testimonials: testimonials,
    activeIndex: activeIndex,
    progress: progress,
    goToIndex: goToIndex,
    goNext: goNext,
    goPrev: goPrev
  };

  return createElement(
    TestimonialContext.Provider,
    { value: contextValue },
    props.children
  );
}

export function useTestimonialTimer() {
  var context = useContext(TestimonialContext);
  if (!context) {
    throw new Error('useTestimonialTimer must be used within TestimonialProvider');
  }
  return context;
}
