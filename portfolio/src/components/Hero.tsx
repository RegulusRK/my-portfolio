import { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const roles = ["a Developer", "a Designer", "a Creator", "a Coder"];
  const roleRef = useRef<HTMLSpanElement>(null);
  const roleIndex = useRef(0);

  useEffect(() => {
    const rotateRole = () => {
      if (roleRef.current) {
        roleRef.current.style.opacity = '0';
        roleRef.current.style.transform = 'rotateX(90deg)';
        
        setTimeout(() => {
          roleIndex.current = (roleIndex.current + 1) % roles.length;
          if (roleRef.current) {
            roleRef.current.textContent = roles[roleIndex.current];
            roleRef.current.style.opacity = '1';
            roleRef.current.style.transform = 'rotateX(0deg)';
          }
        }, 500);
      }
    };

    const intervalId = setInterval(rotateRole, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen flex items-center justify-center relative px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I'm{' '}
          <span className="text-blue-500">Rafael</span>
        </h1>
        <div className="h-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8">
            I'm{' '}
            <span 
              ref={roleRef} 
              className="text-blue-500 inline-block transition-all duration-500 ease-in-out transform"
              style={{ transformOrigin: 'center' }}
            >
              {roles[0]}
            </span>
          </h2>
        </div>
        <div className="mt-12">
          <button 
            onClick={scrollToNextSection}
            className="text-white animate-bounce"
            aria-label="Scroll to next section"
          >
            <ArrowDownCircle size={36} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;