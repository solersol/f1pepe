// import React, { useRef, useEffect, useState } from 'react';
// import { bg6 } from '../assets/images'; // Replace with your actual image path

// const About3 = () => {
//   const textRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(textRef.current);
//         }
//       },
//       { threshold: 0.1 } // Trigger when 10% of the element is visible
//     );

//     if (textRef.current) {
//       observer.observe(textRef.current);
//     }

//     return () => {
//       if (textRef.current) {
//         observer.unobserve(textRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section className="relative w-full h-screen flex items-start justify-start">
//       {/* Full-screen background image */}
//       <img 
//         src={bg6} 
//         alt="Background" 
//         className="absolute inset-0 w-full h-full object-cover z-0" 
//       />

//       {/* Text content */}
//       <div
//         ref={textRef}
//         className={`absolute top-16 left-1/2 transform -translate-x-1/2 text-white p-8 rounded-lg z-10 transition-transform duration-1000 ease-in-out ${
//           isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10'
//         }`}
//       >
//         <h1 className="text-4xl md:text-5xl font-anton text-center">WHATS $F1PEPE</h1>
//         <p className="text-xl md:text-2xl mt-4  w-80 font-anton text-center">Whos the fastest to make it to 100m ? TEAM F1PEPE is coming for the gold lets build the best community in crypto join now or regret forever </p>
//         <a href="https://t.me/MylosMagicShow">
//           <button className="bg-[#2e1515] text-[#fcffd3] px-6 py-3 rounded-full text-xl font-comic flex items-center justify-center  hover:bg-[#f0ff00]">
//             JOIN $MYLO
//           </button>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default About3;

import React, { useRef, useEffect, useState } from 'react';
import { bg6 } from '../assets/images'; // Replace with your actual image path

const About3 = () => {
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(contentRef.current);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Full-screen background image */}
      <img 
        src={bg6} 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover z-0" 
      />

      {/* Text content */}
      <div
        ref={contentRef}
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-8 pb-96 rounded-lg z-10 transition-transform duration-1000 ease-in-out ${
          isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-anton text-center mb-6">WHATS $F1PEPE</h1>
        <p className="text-xl md:text-2xl mb-6 font-anton text-center">Whos the fastest to make it to 100m ? TEAM F1PEPE is coming for the gold lets build the best community in crypto join now or regret forever</p>
        <a href="https://t.me/">
          <button className="bg-[#2e1515] text-[#fcffd3] px-12 py-5 rounded-full text-xl font-anton flex items-center justify-center mx-auto hover:bg-[#f0ff00] transition-transform duration-1000 ease-in-out">
            JOIN $F1PEPE
          </button>
        </a>
      </div>
    </section>
  );
};

export default About3;

