import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, ShoppingCart, Figma, Layout, Brush, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js. We create fast, secure, and scalable solutions.',
    features: ['Custom Web Applications', 'API Development', 'Performance Optimization', 'Responsive Design'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that creates meaningful experiences. We focus on usability, accessibility, and visual appeal to engage your audience.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
  },
  {
    icon: Figma,
    title: 'Figma Design',
    description: 'Pixel-perfect designs and interactive prototypes in Figma. We deliver design systems and components that scale with your business.',
    features: ['Design Systems', 'Component Libraries', 'Interactive Prototypes', 'Collaborative Workflows'],
  },
  {
    icon: Brush,
    title: 'Canva Design',
    description: 'Eye-catching social media graphics, presentations, and marketing materials. Quick turnaround for all your visual content needs.',
    features: ['Social Media Graphics', 'Presentations', 'Marketing Materials', 'Brand Assets'],
  },
  {
    icon: Layout,
    title: 'Web Page Design',
    description: 'Landing pages and websites optimized for conversion. We design pages that capture attention and drive action.',
    features: ['Landing Pages', 'Conversion Optimization', 'A/B Testing', 'Analytics Integration'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Complete online store solutions with seamless checkout experiences. We build stores that sell and scale.',
    features: ['Shopify Development', 'WooCommerce', 'Payment Integration', 'Inventory Management'],
  },
];

const ServicesPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const servicesDiv = servicesRef.current;

    if (!hero || !servicesDiv) return;

    gsap.fromTo(
      hero.querySelectorAll('.hero-animate'),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.8,
      }
    );

    const cards = servicesDiv.querySelectorAll('.service-detail-card');
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto text-center">
          <span className="hero-animate inline-block text-primary text-sm uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h1 className="hero-animate text-display-xl mb-8">
            What We <span className="text-gradient">Offer</span>
          </h1>
          <p className="hero-animate text-muted-foreground text-body-lg max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. From design to development, 
            we deliver excellence at every step.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="section-padding bg-background">
        <div className="max-w-7xl mx-auto space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-detail-card group grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-display-md">{service.title}</h2>
                <p className="text-muted-foreground text-body-lg">
                  {service.description}
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300 font-semibold"
                >
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-widest text-muted-foreground">
                  What's Included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display-md text-primary-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/80 text-body-lg mb-8">
            Let's discuss how we can help bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-primary-foreground text-primary font-semibold rounded-full hover:bg-primary-foreground/90 transition-all duration-300 text-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;