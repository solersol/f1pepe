import React, { useRef, useEffect, useState } from 'react';
import { bg6 } from '../assets/images'; // Replace with your actual image path

const About3 = () => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(textRef.current);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex items-start justify-start">
      {/* Full-screen background image */}
      <img 
        src={bg6} 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover z-0" 
      />

      {/* Text content */}
      <div
        ref={textRef}
        className={`absolute top-16 left-1/2 transform -translate-x-1/2 text-white p-8 rounded-lg z-10 transition-transform duration-1000 ease-in-out ${
          isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-anton text-center">WHATS $F1PEPE</h1>
        <p className="text-xl md:text-2xl mt-4  font-anton text-center">Whos the fastest to make it to 100m ? TEAM F1PEPE is coming for the gold </p>
      </div>
    </section>
  );
};

export default About3;
