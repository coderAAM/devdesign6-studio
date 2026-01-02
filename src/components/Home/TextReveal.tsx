import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
}

const TextReveal = ({ text, className = '' }: TextRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const textElement = textRef.current;
    if (!container || !textElement) return;

    const words = textElement.querySelectorAll('.reveal-word');

    gsap.set(words, { opacity: 0.1 });

    gsap.to(words, {
      opacity: 1,
      stagger: 0.05,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'bottom 40%',
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const words = text.split(' ');

  return (
    <div ref={containerRef} className={`py-24 md:py-32 ${className}`}>
      <div
        ref={textRef}
        className="max-w-6xl mx-auto px-6 md:px-12 text-display-md md:text-display-lg leading-relaxed"
      >
        {words.map((word, index) => (
          <span key={index} className="reveal-word inline-block mr-[0.3em]">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextReveal;
