import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EcosystemVisualization from '@/components/EcosystemVisualization';
import EcosystemGrid from '@/components/EcosystemGrid';
import AboutSection from '@/components/AboutSection';
import VisionSection from '@/components/VisionSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <EcosystemVisualization />
      <EcosystemGrid />
      <AboutSection />
      <VisionSection />
      <CTASection />
      <Footer />
    </main>
  );
}
