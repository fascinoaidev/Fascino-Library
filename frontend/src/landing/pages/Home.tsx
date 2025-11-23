import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Image, Video, ShoppingBag, QrCode, Heart, Zap } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 lg:px-8 gradient-soft">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-sm font-medium shadow-soft">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Where stories come alive</span>
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Turn Your Story Into a{" "}
              <span className="text-gradient">Beautiful Digital Space</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
              Fascino Library turns your story into a beautiful digital space — a place where
              memories breathe, products shine, and every QR code feels alive.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild className="gradient-hero text-white shadow-soft hover:shadow-glow transition-smooth px-8 py-6 text-lg rounded-xl">
                <Link to="/login">Create Your Microsite</Link>
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg rounded-xl border-2 hover:border-primary transition-smooth">
                See How It Works
              </Button>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="mt-20 max-w-5xl mx-auto animate-fade-in-delay">
            <div className="aspect-video rounded-3xl glass-card shadow-card overflow-hidden">
              <div className="w-full h-full gradient-card flex items-center justify-center">
                <Sparkles className="w-24 h-24 text-primary animate-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Fascino Library */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">What is Fascino Library?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We create stunning digital microsites that bring your brand to life. Share your story,
              showcase your products, and connect with your audience through beautiful QR-enabled
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-8 shadow-card">
              <Heart className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Emotional Connection</h3>
              <p className="text-muted-foreground">
                Every microsite is crafted to evoke emotion and create lasting impressions with your
                audience.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-8 shadow-card">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Instant Access</h3>
              <p className="text-muted-foreground">
                One scan, infinite possibilities. Your entire story accessible in seconds through QR
                codes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 lg:px-8 gradient-soft">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Features That <span className="text-gradient">Shine</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to create a stunning digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Image}
              title="Beautiful Photo Galleries"
              description="Showcase your memories in stunning, responsive galleries that capture every moment."
              delay={0}
            />
            <FeatureCard
              icon={Video}
              title="Video Highlights"
              description="Bring your story to life with seamless video integration and playback."
              delay={100}
            />
            <FeatureCard
              icon={ShoppingBag}
              title="Product Showcase"
              description="Display your products beautifully with detailed descriptions and pricing."
              delay={200}
            />
            <FeatureCard
              icon={QrCode}
              title="QR Code Integration"
              description="Connect physical and digital worlds with smart QR codes that work everywhere."
              delay={300}
            />
            <FeatureCard
              icon={Sparkles}
              title="Custom Branding"
              description="Make it yours with custom colors, fonts, and layouts that match your style."
              delay={400}
            />
            <FeatureCard
              icon={Heart}
              title="Social Links"
              description="Connect all your social profiles in one beautiful, easy-to-access place."
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">See It In Action</h2>
            <p className="text-xl text-muted-foreground">
              Explore beautiful microsites created with Fascino Library
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="aspect-square rounded-3xl glass-card shadow-card overflow-hidden group cursor-pointer"
              >
                <div className="w-full h-full gradient-card flex items-center justify-center group-hover:scale-105 transition-smooth">
                  <Sparkles className="w-16 h-16 text-primary group-hover:animate-float" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="gradient-hero text-white shadow-soft hover:shadow-glow transition-smooth px-8 py-6 text-lg rounded-xl">
              View All Examples
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8 gradient-soft">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8 glass-card rounded-3xl p-12 shadow-card">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Share Your Story?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of creators who trust Fascino Library to bring their stories to life.
            </p>
            <Button className="gradient-hero text-white shadow-soft hover:shadow-glow transition-smooth px-8 py-6 text-lg rounded-xl">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
