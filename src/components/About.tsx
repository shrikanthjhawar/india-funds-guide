import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  Users, 
  TrendingUp, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: 'AMFI Certified',
      description: 'Authorized Mutual Fund Distributor'
    },
    {
      icon: Users,
      title: '10,000+ Clients',
      description: 'Serving investors across India'
    },
    {
      icon: TrendingUp,
      title: '15+ Years',
      description: 'Experience in wealth management'
    },
    {
      icon: Shield,
      title: '100% Transparent',
      description: 'No hidden charges or fees'
    }
  ];

  const whyChooseUs = [
    'SEBI registered and AMFI certified distributors',
    'Personalized investment strategies for every client',
    'Direct fund options available with lower expense ratios',
    'Regular portfolio monitoring and rebalancing',
    'Dedicated relationship manager for each client',
    'Online investment platform for easy tracking',
    'Tax-efficient investment planning',
    'Goal-based financial planning approach'
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Trusted 
              <span className="text-primary"> Investment Partner</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 15 years of experience in the Indian financial markets, WealthGrow 
              has been helping thousands of investors achieve their financial dreams through 
              systematic and strategic mutual fund investments.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              As SEBI registered and AMFI certified distributors, we provide completely 
              transparent and unbiased investment advice. Our goal is to make wealth 
              creation accessible to every Indian family through disciplined investing.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose WealthGrow?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {whyChooseUs.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button size="lg" className="bg-gradient-primary shadow-elegant">
              Start Your Investment Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Column - Achievements */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mission Statement */}
            <Card className="mt-8 bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  To democratize wealth creation in India by providing simple, transparent, 
                  and effective mutual fund investment solutions that help every Indian 
                  family achieve financial freedom and security.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;