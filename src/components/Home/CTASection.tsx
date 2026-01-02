import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelectorAll('.cta-animate'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="cta-animate text-display-lg mb-6">
          Ready to <span className="text-gradient">Transform</span> Your Digital Presence?
        </h2>
        <p className="cta-animate text-muted-foreground text-body-lg mb-10 max-w-2xl mx-auto">
          Let's collaborate to create something extraordinary. Start your project today 
          and watch your vision come to life.
        </p>
        <div className="cta-animate flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="magnetic-button inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground font-semibold rounded-full hover:glow-primary transition-all duration-300 text-lg"
          >
            Get Started Today
          </Link>
          <Link
            to="/services"
            className="magnetic-button inline-flex items-center justify-center px-10 py-5 border border-foreground/20 text-foreground font-semibold rounded-full hover:bg-foreground/5 transition-all duration-300 text-lg"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;