import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, ShoppingCart, Figma, Layout, Brush } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites built with cutting-edge technologies for optimal performance.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered designs that create meaningful and memorable experiences.',
  },
  {
    icon: Figma,
    title: 'Figma Design',
    description: 'Pixel-perfect designs and interactive prototypes in Figma.',
  },
  {
    icon: Brush,
    title: 'Canva Design',
    description: 'Stunning social media graphics and marketing materials.',
  },
  {
    icon: Layout,
    title: 'Web Page Design',
    description: 'Landing pages and websites that convert visitors into customers.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Online stores that drive sales and deliver seamless shopping experiences.',
  },
];

const ServicesPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;

    if (!section || !title || !cards) return;

    gsap.fromTo(
      title.children,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      cards.querySelectorAll('.service-card'),
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cards,
          start: 'top 80%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-16">
          <span className="inline-block text-primary text-sm uppercase tracking-widest mb-4">
            What We Do
          </span>
          <h2 className="text-display-lg mb-6">
            Services That <span className="text-gradient">Drive Growth</span>
          </h2>
          <p className="text-muted-foreground text-body-lg max-w-2xl">
            From concept to launch, we deliver comprehensive digital solutions tailored to your unique needs.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300 font-semibold"
          >
            View All Services
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;