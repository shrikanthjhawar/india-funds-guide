import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageSquare,
  Calendar
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Office',
      details: ['123 Business Center, Bandra Kurla Complex', 'Mumbai, Maharashtra 400051', 'India'],
      color: 'bg-primary'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 98765 43211', 'Mon - Sat: 9:00 AM - 6:00 PM'],
      color: 'bg-accent'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@wealthgrow.com', 'support@wealthgrow.com', 'We respond within 24 hours'],
      color: 'bg-success'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed'],
      color: 'bg-primary'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your investment journey? Contact our expert advisors today 
            for a free consultation and personalized investment strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className={`${info.color} w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-primary" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="investmentAmount">Investment Amount (₹)</Label>
                  <Input id="investmentAmount" placeholder="How much do you plan to invest?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your investment goals and any questions you have..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-gradient-primary shadow-elegant">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Call
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground text-center pt-4 border-t border-border">
                  <p>By submitting this form, you agree to our privacy policy and terms of service.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;