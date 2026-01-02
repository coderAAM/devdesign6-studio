import HeroSection from '@/components/Home/HeroSection';
import ServicesPreview from '@/components/Home/ServicesPreview';
import AboutPreview from '@/components/Home/AboutPreview';
import MarqueeSection from '@/components/Home/MarqueeSection';
import CTASection from '@/components/Home/CTASection';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <ServicesPreview />
      <AboutPreview />
      <CTASection />
    </main>
  );
};

export default Index;