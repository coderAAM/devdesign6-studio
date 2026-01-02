import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import agencyVideo from '@/assets/agency-showreel.mp4';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (!hero || !title || !subtitle || !cta) return;

    const tl = gsap.timeline({ delay: 1 });

    // Split title animation
    tl.fromTo(
      title.querySelectorAll('.word'),
      { y: 100, opacity: 0, rotationX: -90 },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
      }
    );

    tl.fromTo(
      subtitle,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    );

    tl.fromTo(
      cta,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.3'
    );

    // Parallax scroll effect
    gsap.to(hero, {
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: 200,
      opacity: 0.5,
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={agencyVideo} type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 ref={titleRef} className="text-display-xl mb-8">
          <span className="word inline-block overflow-hidden">
            <span className="inline-block">We</span>
          </span>{' '}
          <span className="word inline-block overflow-hidden">
            <span className="inline-block text-gradient">Design</span>
          </span>{' '}
          <span className="word inline-block overflow-hidden">
            <span className="inline-block">&</span>
          </span>
          <br />
          <span className="word inline-block overflow-hidden">
            <span className="inline-block text-gradient">Build</span>
          </span>{' '}
          <span className="word inline-block overflow-hidden">
            <span className="inline-block">Digital</span>
          </span>
          <br />
          <span className="word inline-block overflow-hidden">
            <span className="inline-block">Experiences</span>
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Award-winning digital agency specializing in web development, UI/UX design, 
          and e-commerce solutions that transform businesses.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="magnetic-button inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:glow-primary transition-all duration-300"
          >
            Start Your Project
          </a>
          <a
            href="/services"
            className="magnetic-button inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-foreground font-semibold rounded-full hover:bg-foreground/5 transition-all duration-300"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-sm uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;