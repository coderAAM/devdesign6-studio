import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const logo = logoRef.current;
    const progress = progressRef.current;

    if (!container || !logo || !progress) return;

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Counter animation
    const counterAnimation = { value: 0 };
    tl.to(counterAnimation, {
      value: 100,
      duration: 2,
      ease: 'power2.inOut',
      onUpdate: () => {
        setCounter(Math.round(counterAnimation.value));
      },
    });

    // Progress bar animation
    tl.to(
      progress,
      {
        scaleX: 1,
        duration: 2,
        ease: 'power2.inOut',
      },
      0
    );

    // Logo reveal animation
    tl.fromTo(
      logo.querySelectorAll('.logo-char'),
      { y: 100, opacity: 0, rotateX: -90 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power4.out',
      },
      0.3
    );

    // Logo glow effect
    tl.to(
      logo,
      {
        textShadow: '0 0 40px hsl(199 100% 50% / 0.5)',
        duration: 0.5,
        ease: 'power2.out',
      },
      1.5
    );

    // Exit animation
    tl.to(
      logo,
      {
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.in',
      },
      2.2
    );

    tl.to(
      counterRef.current,
      {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: 'power3.in',
      },
      2.2
    );

    tl.to(
      container,
      {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
      },
      2.4
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  const logoText = 'dev.design6';
  const chars = logoText.split('');

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Logo */}
      <div
        ref={logoRef}
        className="relative text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight perspective preserve-3d"
      >
        {chars.map((char, index) => (
          <span
            key={index}
            className={`logo-char inline-block ${
              char === '.' || index >= 4 ? 'text-gradient' : 'text-foreground'
            }`}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-48 md:w-64">
        <div className="h-[2px] bg-border rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-primary to-accent origin-left scale-x-0"
          />
        </div>
      </div>

      {/* Counter */}
      <span
        ref={counterRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-sm font-mono text-muted-foreground tracking-widest"
      >
        {counter}%
      </span>
    </div>
  );
};

export default Preloader;
