import HeroSection from '@/components/Home/HeroSection';
import ServicesPreview from '@/components/Home/ServicesPreview';
import AboutPreview from '@/components/Home/AboutPreview';
import MarqueeSection from '@/components/Home/MarqueeSection';
import CTASection from '@/components/Home/CTASection';
import TextReveal from '@/components/Home/TextReveal';
import HorizontalScroll from '@/components/Home/HorizontalScroll';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <TextReveal 
        text="We craft digital experiences that captivate, engage, and drive results. From stunning visuals to seamless functionality, we bring your vision to life."
      />
      <HorizontalScroll />
      <ServicesPreview />
      <AboutPreview />
      <CTASection />
    </main>
  );
};

export default Index;