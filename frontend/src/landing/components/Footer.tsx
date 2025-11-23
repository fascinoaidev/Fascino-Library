import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-soft border-t">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center shadow-soft">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-xl font-bold">Fascino Library</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Turning stories into beautiful digital spaces
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Home
              </Link>
              <Link to="/how-it-works" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                How It Works
              </Link>
              <Link to="/pricing" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Pricing
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                About
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                FAQ
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Instagram
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Twitter
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                LinkedIn
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Fascino Library. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span>for your stories</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
