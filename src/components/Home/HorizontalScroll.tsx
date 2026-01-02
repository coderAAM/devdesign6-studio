import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 2,
    title: 'Brand Identity Design',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    category: 'Figma Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 4,
    title: 'Marketing Campaign',
    category: 'Canva Design',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
  },
  {
    id: 5,
    title: 'Corporate Website',
    category: 'Web Page Design',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
  },
];

const HorizontalScroll = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const title = titleRef.current;
    if (!section || !container || !title) return;

    // Title reveal animation
    gsap.fromTo(
      title.querySelectorAll('.char'),
      { y: 100, opacity: 0, rotateX: -90 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        stagger: 0.03,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
        },
      }
    );

    // Horizontal scroll
    const scrollWidth = container.scrollWidth - window.innerWidth;

    gsap.to(container, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    // Project cards animation
    const cards = container.querySelectorAll('.project-card');
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { scale: 0.9, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            containerAnimation: gsap.to(container, { x: -scrollWidth }),
            start: 'left 80%',
            end: 'left 30%',
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const titleText = 'Featured Work';
  const chars = titleText.split('');

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background">
      {/* Section Header */}
      <div className="absolute top-0 left-0 right-0 z-10 pt-16 md:pt-24 px-6 md:px-12">
        <div ref={titleRef} className="max-w-7xl mx-auto">
          <span className="inline-block text-primary text-sm uppercase tracking-widest mb-4">
            Portfolio
          </span>
          <h2 className="text-display-lg overflow-hidden">
            {chars.map((char, index) => (
              <span
                key={index}
                className="char inline-block"
                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className="flex items-center gap-8 md:gap-12 pl-6 md:pl-12 pt-48 pb-24 pr-24"
        style={{ width: 'fit-content' }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-card group relative flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] rounded-3xl overflow-hidden cursor-pointer"
          >
            {/* Project Image */}
            <div className="absolute inset-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>

            {/* Project Info */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="inline-block text-primary text-sm uppercase tracking-widest mb-3">
                {project.category}
              </span>
              <h3 className="text-2xl md:text-4xl font-display font-bold mb-4">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                <span className="font-medium">View Project</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>

            {/* Project Number */}
            <div className="absolute top-8 right-8 text-8xl font-display font-bold text-foreground/5 group-hover:text-primary/10 transition-colors duration-500">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>
        ))}

        {/* CTA Card */}
        <div className="project-card flex-shrink-0 w-[85vw] md:w-[40vw] lg:w-[30vw] h-[60vh] rounded-3xl overflow-hidden flex items-center justify-center border border-border hover:border-primary/50 transition-colors duration-500 cursor-pointer group">
          <div className="text-center p-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Let's Create <span className="text-gradient">Together</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Have a project in mind? Let's make it happen.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:glow-primary transition-all duration-300"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 text-muted-foreground">
        <span className="text-sm uppercase tracking-widest">Scroll</span>
        <ArrowRight className="w-4 h-4 animate-pulse" />
      </div>
    </section>
  );
};

export default HorizontalScroll;
