import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StepCard from "@/components/StepCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { QrCode, Sparkles, ShoppingBag, MessageCircle, Play } from "lucide-react";

const HowItWorks = () => {
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
                <span>Simple & Intuitive</span>
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              How <span className="text-gradient">Fascino Library</span> Works
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From scan to purchase in four simple steps. See how easy it is to connect with your
              audience.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <StepCard
              number="1"
              icon={QrCode}
              title="Scan QR Code"
              description="Your customer scans the unique QR code on your product, packaging, or marketing material with any smartphone camera."
              delay={0}
            />

            <StepCard
              number="2"
              icon={Sparkles}
              title="Microsite Opens"
              description="A beautiful, branded microsite instantly opens in their browser — no app downloads needed. Your story comes alive."
              delay={100}
            />

            <StepCard
              number="3"
              icon={ShoppingBag}
              title="Explore & Discover"
              description="They browse stunning photos, watch videos, explore your products, and discover everything that makes your brand special."
              delay={200}
            />

            <StepCard
              number="4"
              icon={MessageCircle}
              title="Connect & Buy"
              description="With one tap, they can contact you, make a purchase, or follow your social media. Instant connection, seamless experience."
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 lg:px-8 gradient-soft">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">See It In Action</h2>
            <p className="text-xl text-muted-foreground">
              Watch how Fascino Library transforms the customer experience
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-3xl glass-card shadow-card overflow-hidden group cursor-pointer">
              <div className="w-full h-full gradient-card flex flex-col items-center justify-center group-hover:scale-105 transition-smooth">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
                <p className="text-white text-lg font-medium">Watch Demo Video</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose <span className="text-gradient">Fascino Library</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card rounded-3xl p-8 shadow-card text-center">
              <div className="w-16 h-16 rounded-2xl gradient-card flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">No App Required</h3>
              <p className="text-muted-foreground">
                Works instantly on any device. Your customers just scan and go.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 shadow-card text-center">
              <div className="w-16 h-16 rounded-2xl gradient-card flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Beautiful Design</h3>
              <p className="text-muted-foreground">
                Every microsite is crafted to look stunning and professional.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 shadow-card text-center">
              <div className="w-16 h-16 rounded-2xl gradient-card flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real Results</h3>
              <p className="text-muted-foreground">
                Track analytics and see how your customers engage with your content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8 gradient-soft">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8 glass-card rounded-3xl p-12 shadow-card">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground">
              Create your beautiful microsite today and start connecting with your audience in a
              whole new way.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="gradient-hero text-white shadow-soft hover:shadow-glow transition-smooth px-8 py-6 text-lg rounded-xl">
                <Link to="/login">Create Your Microsite</Link>
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg rounded-xl border-2 hover:border-primary transition-smooth">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
