import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import SIPCalculator from '@/components/SIPCalculator';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <SIPCalculator />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
