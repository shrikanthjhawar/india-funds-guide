import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shield, Users } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Financial Growth" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Grow Your Wealth with 
            <span className="text-accent"> Smart Investments</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
            Expert mutual fund distribution services to help you achieve your financial goals. 
            Start your investment journey with India's trusted wealth management partner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
              Start Investing Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Schedule Consultation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-primary-foreground/10 p-3 rounded-full mb-3">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent">₹500+ Cr</div>
              <div className="text-primary-foreground/80">Assets Under Management</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-primary-foreground/10 p-3 rounded-full mb-3">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent">10,000+</div>
              <div className="text-primary-foreground/80">Happy Investors</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-primary-foreground/10 p-3 rounded-full mb-3">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent">15+ Years</div>
              <div className="text-primary-foreground/80">Trusted Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;