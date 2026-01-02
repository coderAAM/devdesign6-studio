import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    if (!container || !overlay) return;

    const tl = gsap.timeline();

    // Animate overlay out
    tl.fromTo(
      overlay,
      { scaleY: 1, transformOrigin: 'top' },
      { scaleY: 0, duration: 0.8, ease: 'power4.inOut' }
    );

    // Fade in content
    tl.fromTo(
      container,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power2.out' },
      '-=0.3'
    );

    return () => {
      tl.kill();
    };
  }, [location.pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-primary pointer-events-none"
      />
      <div ref={containerRef}>{children}</div>
    </>
  );
};

export default PageTransition;