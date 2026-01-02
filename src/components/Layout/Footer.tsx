import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    gsap.fromTo(
      footer.querySelectorAll('.footer-animate'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footer,
          start: 'top 90%',
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-card border-t border-border"
    >
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 footer-animate">
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-display font-bold tracking-tight">
                dev.<span className="text-gradient">design6</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-body-lg max-w-md">
              We craft exceptional digital experiences that drive growth and inspire engagement.
            </p>
          </div>

          <div className="footer-animate">
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-4">
              <Link to="/" className="footer-link inline-block">
                Home
              </Link>
              <Link to="/services" className="footer-link inline-block">
                Services
              </Link>
              <Link to="/about" className="footer-link inline-block">
                About
              </Link>
              <Link to="/contact" className="footer-link inline-block">
                Contact
              </Link>
            </nav>
          </div>

          <div className="footer-animate">
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
              Services
            </h4>
            <nav className="flex flex-col gap-4">
              <span className="footer-link inline-block cursor-default">
                Web Development
              </span>
              <span className="footer-link inline-block cursor-default">
                UI/UX Design
              </span>
              <span className="footer-link inline-block cursor-default">
                E-Commerce
              </span>
              <span className="footer-link inline-block cursor-default">
                Figma Design
              </span>
            </nav>
          </div>
        </div>

        <div className="footer-animate pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 dev.design6. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;