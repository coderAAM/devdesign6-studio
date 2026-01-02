import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@devdesign6.com',
    description: 'We\'ll respond within 24 hours',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+92 300 1234567',
    description: 'Mon-Fri from 9am to 6pm',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Lahore, Pakistan',
    description: 'Schedule a meeting',
  },
];

const ContactPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    const hero = heroRef.current;
    const form = formRef.current;
    const info = infoRef.current;

    if (!hero || !form || !info) return;

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

    gsap.fromTo(
      form,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: form,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      info.querySelectorAll('.info-card'),
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: info,
          start: 'top 80%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto text-center">
          <span className="hero-animate inline-block text-primary text-sm uppercase tracking-widest mb-4">
            Contact Us
          </span>
          <h1 className="hero-animate text-display-xl mb-8">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="hero-animate text-muted-foreground text-body-lg max-w-3xl mx-auto">
            Ready to start your project? Get in touch and let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm uppercase tracking-widest text-muted-foreground mb-3">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-card border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm uppercase tracking-widest text-muted-foreground mb-3">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-card border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm uppercase tracking-widest text-muted-foreground mb-3">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-card border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 appearance-none cursor-pointer"
              >
                <option value="">Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="figma-design">Figma Design</option>
                <option value="canva-design">Canva Design</option>
                <option value="web-page-design">Web Page Design</option>
                <option value="e-commerce">E-Commerce</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm uppercase tracking-widest text-muted-foreground mb-3">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-4 bg-card border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto magnetic-button inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-semibold rounded-full hover:glow-primary transition-all duration-300 text-lg"
            >
              Send Message
              <Send className="w-5 h-5" />
            </button>
          </form>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-6">
            <div className="mb-8">
              <h2 className="text-display-md mb-4">Get In Touch</h2>
              <p className="text-muted-foreground text-body-lg">
                We'd love to hear from you. Fill out the form or reach out directly through any of the channels below.
              </p>
            </div>
            
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="info-card flex items-start gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">{info.title}</h3>
                  <p className="text-foreground font-medium mb-1">{info.value}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {['Instagram', 'Twitter', 'LinkedIn', 'Dribbble'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-4 py-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;