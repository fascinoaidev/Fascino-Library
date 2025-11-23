import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div
      className="glass-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-smooth animate-fade-in group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 rounded-2xl gradient-card flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
