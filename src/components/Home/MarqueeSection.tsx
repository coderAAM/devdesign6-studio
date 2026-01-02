const MarqueeSection = () => {
  const items = [
    'Web Development',
    '•',
    'UI/UX Design',
    '•',
    'Figma Design',
    '•',
    'Canva Design',
    '•',
    'E-Commerce',
    '•',
    'Web Page Design',
    '•',
  ];

  return (
    <section className="py-12 bg-primary overflow-hidden">
      <div className="relative">
        <div className="marquee whitespace-nowrap">
          {[...items, ...items].map((item, index) => (
            <span
              key={index}
              className="text-2xl md:text-4xl font-display font-bold text-primary-foreground px-4"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;