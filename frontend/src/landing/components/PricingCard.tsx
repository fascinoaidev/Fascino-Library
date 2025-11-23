import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  delay?: number;
}

const PricingCard = ({ name, price, features, popular = false, delay = 0 }: PricingCardProps) => {
  return (
    <div
      className={`glass-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-smooth animate-fade-in relative ${
        popular ? "ring-2 ring-primary" : ""
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="gradient-hero text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-soft">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="flex items-baseline justify-center space-x-1">
          <span className="text-5xl font-bold text-gradient">{price}</span>
          {price !== "Custom" && <span className="text-muted-foreground">/once</span>}
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={`w-full rounded-xl ${
          popular
            ? "gradient-hero text-white shadow-soft hover:shadow-glow"
            : "bg-muted text-foreground hover:bg-muted/80"
        } transition-smooth`}
      >
        Get Started
      </Button>
    </div>
  );
};

export default PricingCard;
