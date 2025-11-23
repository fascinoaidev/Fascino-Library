import { LucideIcon } from "lucide-react";

interface StepCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const StepCard = ({ number, icon: Icon, title, description, delay = 0 }: StepCardProps) => {
  return (
    <div
      className="relative glass-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-smooth animate-fade-in group"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Step Number */}
      <div className="absolute -top-6 left-8">
        <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center shadow-soft text-white font-bold text-lg">
          {number}
        </div>
      </div>

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl gradient-card flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-smooth">
        <Icon className="w-8 h-8 text-primary" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default StepCard;
