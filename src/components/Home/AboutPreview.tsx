import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '5+', label: 'Years Experience' },
  { value: '24/7', label: 'Support Available' },
];

const AboutPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const statsDiv = statsRef.current;

    if (!section || !content || !statsDiv) return;

    gsap.fromTo(
      content.children,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: content,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      statsDiv.querySelectorAll('.stat-item'),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: statsDiv,
          start: 'top 85%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={contentRef}>
            <span className="inline-block text-primary text-sm uppercase tracking-widest mb-4">
              About Us
            </span>
            <h2 className="text-display-lg mb-6">
              We're a <span className="text-gradient">Creative</span> Digital Agency
            </h2>
            <p className="text-muted-foreground text-body-lg mb-6">
              At dev.design6, we believe in the power of exceptional design and flawless execution. 
              Our team of passionate designers and developers work together to create digital 
              experiences that not only look stunning but also deliver real results.
            </p>
            <p className="text-muted-foreground text-body-lg mb-8">
              We combine creativity with technology to build websites and applications 
              that help businesses grow and succeed in the digital world.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300 font-semibold"
            >
              Learn More About Us
              <span>→</span>
            </Link>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-item p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors duration-300"
              >
                <span className="block text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </span>
                <span className="text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;