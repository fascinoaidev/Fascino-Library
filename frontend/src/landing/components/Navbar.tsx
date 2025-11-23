import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center shadow-soft transition-smooth group-hover:shadow-glow">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-2xl font-bold">Fascino Library</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-smooth">
              Home
            </Link>
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-smooth">
              How It Works
            </Link>
            <Link to="/pricing" className="text-foreground hover:text-primary transition-smooth">
              Pricing
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-smooth">
              About
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="gradient-hero text-white shadow-soft hover:shadow-glow transition-smooth">
              <Link to="/login">Create Your Microsite</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 animate-fade-in">
            <Link
              to="/"
              className="block py-2 text-foreground hover:text-primary transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/how-it-works"
              className="block py-2 text-foreground hover:text-primary transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/pricing"
              className="block py-2 text-foreground hover:text-primary transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="block py-2 text-foreground hover:text-primary transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Button asChild className="w-full gradient-hero text-white shadow-soft">
              <Link to="/login">Create Your Microsite</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
