import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, Heart, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for perfection in every project, delivering work that exceeds expectations.',
  },
  {
    icon: Eye,
    title: 'Innovation',
    description: 'We embrace new technologies and creative solutions to stay ahead of the curve.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do, and that passion shows in every pixel we create.',
  },
  {
    icon: Zap,
    title: 'Speed',
    description: 'We deliver projects on time without compromising on quality or attention to detail.',
  },
];

const team = [
  { role: 'Creative Director', specialty: 'Brand Strategy & Vision' },
  { role: 'Lead Developer', specialty: 'Full-Stack Development' },
  { role: 'UI/UX Designer', specialty: 'User Experience Design' },
  { role: 'Project Manager', specialty: 'Client Relations' },
];

const AboutPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const story = storyRef.current;
    const valuesDiv = valuesRef.current;
    const teamDiv = teamRef.current;

    if (!hero || !story || !valuesDiv || !teamDiv) return;

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
      story.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: story,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      valuesDiv.querySelectorAll('.value-card'),
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: valuesDiv,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      teamDiv.querySelectorAll('.team-card'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: teamDiv,
          start: 'top 80%',
        },
      }
    );

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
            About Us
          </span>
          <h1 className="hero-animate text-display-xl mb-8">
            We Are <span className="text-gradient">dev.design6</span>
          </h1>
          <p className="hero-animate text-muted-foreground text-body-lg max-w-3xl mx-auto">
            A passionate team of designers and developers dedicated to crafting 
            exceptional digital experiences that drive results.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div ref={storyRef} className="max-w-4xl mx-auto">
          <span className="inline-block text-primary text-sm uppercase tracking-widest mb-4">
            Our Story
          </span>
          <h2 className="text-display-lg mb-8">
            Building Digital <span className="text-gradient">Excellence</span>
          </h2>
          <div className="space-y-6 text-muted-foreground text-body-lg">
            <p>
              dev.design6 was founded with a simple mission: to bridge the gap between 
              stunning design and flawless development. We believe that every business 
              deserves a digital presence that not only looks beautiful but also 
              performs exceptionally.
            </p>
            <p>
              Our journey began with a small team of passionate creatives who shared 
              a vision of creating websites and applications that make a real difference. 
              Today, we've grown into a full-service digital agency, serving clients 
              across industries.
            </p>
            <p>
              What sets us apart is our commitment to understanding your unique needs 
              and delivering solutions that exceed expectations. We don't just build 
              websites – we create digital experiences that connect, engage, and convert.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-primary text-sm uppercase tracking-widest mb-4">
              Our Values
            </span>
            <h2 className="text-display-lg">
              What <span className="text-gradient">Drives</span> Us
            </h2>
          </div>
          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-primary text-sm uppercase tracking-widest mb-4">
              Our Team
            </span>
            <h2 className="text-display-lg">
              Meet The <span className="text-gradient">Experts</span>
            </h2>
          </div>
          <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="team-card p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-primary">
                    {member.role.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2 text-center">
                  {member.role}
                </h3>
                <p className="text-muted-foreground text-sm text-center">
                  {member.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;