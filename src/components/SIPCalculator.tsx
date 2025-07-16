import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Calculator, 
  TrendingUp, 
  PiggyBank, 
  Target,
  IndianRupee
} from 'lucide-react';

const SIPCalculator = () => {
  const [monthlyAmount, setMonthlyAmount] = useState<string>('5000');
  const [years, setYears] = useState<string>('10');
  const [expectedReturn, setExpectedReturn] = useState<string>('12');
  const [results, setResults] = useState({
    totalInvestment: 0,
    totalReturns: 0,
    maturityAmount: 0
  });

  // SIP calculation formula
  const calculateSIP = () => {
    const P = parseFloat(monthlyAmount) || 0;
    const n = (parseFloat(years) || 0) * 12; // Convert years to months
    const r = (parseFloat(expectedReturn) || 0) / 100 / 12; // Monthly rate

    if (P > 0 && n > 0 && r > 0) {
      // SIP formula: M = P × [{(1 + r)^n - 1} / r] × (1 + r)
      const maturityAmount = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
      const totalInvestment = P * n;
      const totalReturns = maturityAmount - totalInvestment;

      setResults({
        totalInvestment,
        totalReturns,
        maturityAmount
      });
    } else {
      setResults({
        totalInvestment: 0,
        totalReturns: 0,
        maturityAmount: 0
      });
    }
  };

  useEffect(() => {
    calculateSIP();
  }, [monthlyAmount, years, expectedReturn]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatLakhs = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    } else {
      return formatCurrency(amount);
    }
  };

  return (
    <section id="sip-calculator" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            SIP Calculator
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate your wealth creation potential with Systematic Investment Plans. 
            See how regular investing can help you achieve your financial goals.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Input */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Calculator className="h-6 w-6 mr-2 text-primary" />
                  Calculate Your SIP Returns
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="monthlyAmount">Monthly Investment Amount</Label>
                  <div className="relative">
                    <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="monthlyAmount"
                      type="number"
                      value={monthlyAmount}
                      onChange={(e) => setMonthlyAmount(e.target.value)}
                      className="pl-10"
                      placeholder="5000"
                      min="500"
                      step="500"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Minimum: ₹500</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="years">Investment Period (Years)</Label>
                  <Input
                    id="years"
                    type="number"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    placeholder="10"
                    min="1"
                    max="50"
                  />
                  <p className="text-xs text-muted-foreground">1 to 50 years</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expectedReturn">Expected Annual Return (%)</Label>
                  <Input
                    id="expectedReturn"
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(e.target.value)}
                    placeholder="12"
                    min="1"
                    max="30"
                    step="0.5"
                  />
                  <p className="text-xs text-muted-foreground">Typically 8-15% for equity funds</p>
                </div>

                <div className="pt-4">
                  <Button 
                    onClick={calculateSIP} 
                    className="w-full bg-gradient-primary shadow-elegant"
                    size="lg"
                  >
                    <Calculator className="h-4 w-4 mr-2" />
                    Recalculate
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results Display */}
            <div className="space-y-6">
              <Card className="bg-gradient-primary text-primary-foreground">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2 opacity-90">Maturity Amount</h3>
                    <div className="text-4xl font-bold mb-4">
                      {formatLakhs(results.maturityAmount)}
                    </div>
                    <p className="text-sm opacity-75">
                      After {years} years of disciplined investing
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="bg-success/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <PiggyBank className="h-6 w-6 text-success" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">Total Investment</h4>
                    <div className="text-2xl font-bold text-success">
                      {formatLakhs(results.totalInvestment)}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="h-6 w-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">Wealth Gained</h4>
                    <div className="text-2xl font-bold text-accent">
                      {formatLakhs(results.totalReturns)}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Visual Progress Bar */}
              {results.maturityAmount > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4">Investment Breakdown</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Your Investment</span>
                          <span className="font-medium">
                            {((results.totalInvestment / results.maturityAmount) * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-success h-2 rounded-full transition-all duration-300"
                            style={{
                              width: `${(results.totalInvestment / results.maturityAmount) * 100}%`
                            }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Returns Generated</span>
                          <span className="font-medium">
                            {((results.totalReturns / results.maturityAmount) * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-accent h-2 rounded-full transition-all duration-300"
                            style={{
                              width: `${(results.totalReturns / results.maturityAmount) * 100}%`
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Target className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Start Your SIP Today!</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        The power of compounding works best when you start early. 
                        Begin your wealth creation journey with as little as ₹500 per month.
                      </p>
                      <Button className="bg-gradient-primary shadow-elegant">
                        Start SIP Investment
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mt-12 p-6 bg-muted/30 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Disclaimer:</strong> This calculator provides approximate values for illustration purposes only. 
            Actual returns may vary based on market conditions and fund performance. 
            Mutual fund investments are subject to market risks. Please read all scheme related documents carefully.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SIPCalculator;