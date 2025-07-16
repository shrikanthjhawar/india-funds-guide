import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  PiggyBank, 
  Target, 
  TrendingUp, 
  Calculator,
  Shield,
  Users,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: PiggyBank,
      title: 'SIP Investments',
      description: 'Systematic Investment Plans to help you invest regularly and build wealth over time.',
      features: ['Start with ₹500/month', 'Auto-debit facility', 'Flexible tenure'],
      color: 'bg-primary'
    },
    {
      icon: Target,
      title: 'Goal-Based Planning',
      description: 'Customized investment strategies aligned with your specific financial goals.',
      features: ['Retirement planning', 'Child education', 'Dream home purchase'],
      color: 'bg-accent'
    },
    {
      icon: TrendingUp,
      title: 'Lump Sum Investment',
      description: 'Make one-time investments in carefully selected mutual fund schemes.',
      features: ['High-growth potential', 'Diversified portfolio', 'Expert fund selection'],
      color: 'bg-success'
    },
    {
      icon: Calculator,
      title: 'Portfolio Review',
      description: 'Regular monitoring and rebalancing of your investment portfolio.',
      features: ['Quarterly reviews', 'Performance analysis', 'Rebalancing advice'],
      color: 'bg-primary'
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Comprehensive risk profiling to match investments with your risk appetite.',
      features: ['Risk tolerance analysis', 'Asset allocation', 'Suitable fund selection'],
      color: 'bg-accent'
    },
    {
      icon: Users,
      title: 'Family Wealth Management',
      description: 'Holistic financial planning for your entire family\'s financial future.',
      features: ['Multi-generational planning', 'Tax optimization', 'Estate planning'],
      color: 'bg-success'
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Investment Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive mutual fund solutions tailored to help you achieve your financial objectives 
            with expert guidance and personalized strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-elegant transition-all duration-300 border-border/50">
              <CardHeader>
                <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary shadow-elegant">
            Get Personalized Investment Plan
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;