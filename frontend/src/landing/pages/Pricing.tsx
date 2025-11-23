import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import { Sparkles } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "₹1,100",
      features: [
        "Beautiful photo galleries",
        "Video integration",
        "Social media links",
        "QR code generation",
        "Mobile responsive design",
        "Basic customization",
      ],
    },
    {
      name: "Pro",
      price: "₹3,100",
      features: [
        "Everything in Basic",
        "Product showcase",
        "Advanced customization",
        "Highlight sections",
        "Priority support",
        "Custom branding",
        "Analytics dashboard",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "Custom",
      features: [
        "Everything in Pro",
        "Payment gateway integration",
        "Real-time QR analytics",
        "Advanced features",
        "Dedicated support",
        "Custom development",
        "White-label options",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 lg:px-8 gradient-soft">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-sm font-medium shadow-soft">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Simple, transparent pricing</span>
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Choose Your <span className="text-gradient">Perfect Plan</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start small or go big. Every plan is designed to help you create beautiful digital
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.name}
                name={plan.name}
                price={plan.price}
                features={plan.features}
                popular={plan.popular}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 lg:px-8 gradient-soft">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="glass-card rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-semibold mb-3">Can I upgrade or downgrade later?</h3>
              <p className="text-muted-foreground">
                Yes! You can upgrade or switch plans at any time. We'll work with you to make the
                transition smooth.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-semibold mb-3">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, debit cards, UPI, and bank transfers for Premium
                plans.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-semibold mb-3">Is there a setup fee?</h3>
              <p className="text-muted-foreground">
                No setup fees! The price you see is the price you pay. One-time payment for Basic
                and Pro plans.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-semibold mb-3">What's included in custom pricing?</h3>
              <p className="text-muted-foreground">
                Premium plans are tailored to your needs. Contact us to discuss your requirements
                and get a custom quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
