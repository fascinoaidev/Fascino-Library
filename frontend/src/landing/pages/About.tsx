import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 lg:px-8 gradient-soft">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-sm font-medium shadow-soft">
                <Heart className="w-4 h-4 text-accent" />
                <span>Our Story</span>
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Made With <span className="text-gradient">Love</span> for Your Stories
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every story deserves to be told beautifully. That's why we created Fascino Library.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-12 shadow-card space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Our Journey</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fascino Library was born from a simple belief: every brand, every creator, every
                  story deserves to be shared in the most beautiful way possible.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We saw a world where QR codes were just functional tools, and we imagined
                  something different. What if scanning a code could transport you into a world of
                  emotion, beauty, and connection? What if your products could tell their story in a
                  way that truly resonates?
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  That's when Fascino Library came to life — a platform that turns ordinary digital
                  spaces into extraordinary experiences. Where memories breathe, products shine, and
                  every interaction feels personal and meaningful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 lg:px-8 gradient-soft">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Our Mission & Values</h2>
            <p className="text-xl text-muted-foreground">
              What drives us every day to create something special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card rounded-3xl p-8 shadow-card text-center group hover:shadow-glow transition-smooth">
              <div className="w-16 h-16 rounded-2xl gradient-card flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emotional Connection</h3>
              <p className="text-muted-foreground">
                We believe in creating experiences that touch hearts and create lasting impressions.
                Every design choice is made with emotion in mind.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 shadow-card text-center group hover:shadow-glow transition-smooth">
              <div className="w-16 h-16 rounded-2xl gradient-card flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Beautiful Simplicity</h3>
              <p className="text-muted-foreground">
                Complexity hidden behind elegance. We make the technical feel magical and the
                complicated feel effortless.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 shadow-card text-center group hover:shadow-glow transition-smooth">
              <div className="w-16 h-16 rounded-2xl gradient-card flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-muted-foreground">
                Your success is our success. We're not just building websites; we're helping you
                build meaningful connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-12 shadow-card space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center shadow-soft">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a world where every brand, big or small, has the power to create
                stunning digital experiences. Where technology doesn't get in the way but instead
                amplifies human connection and storytelling.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fascino Library is more than a platform — it's a movement towards more beautiful,
                more emotional, more human digital experiences. Join us in making the internet a
                more beautiful place, one microsite at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8 gradient-soft">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8 glass-card rounded-3xl p-12 shadow-card">
            <h2 className="text-4xl md:text-5xl font-bold">Let's Create Something Beautiful</h2>
            <p className="text-xl text-muted-foreground">
              Your story is waiting to be told. We're here to help you tell it in the most beautiful
              way possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="gradient-hero text-white shadow-soft hover:shadow-glow transition-smooth px-8 py-6 text-lg rounded-xl">
                Start Your Journey
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg rounded-xl border-2 hover:border-primary transition-smooth">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
