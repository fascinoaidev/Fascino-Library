import { Card } from "@/components/ui/card";

interface AboutSectionProps {
  title: string;
  description: string;
  mission?: string;
}

export const AboutSection = ({ title, description, mission }: AboutSectionProps) => {
  return (
    <div className="w-full animate-fade-up" style={{ animationDelay: "0.5s" }}>
      <h2 className="text-xl font-semibold text-foreground mb-6">About Us</h2>
      <Card className="p-8 rounded-2xl shadow-soft gradient-subtle">
        <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
        {mission && (
          <div className="pt-6 border-t border-border">
            <h4 className="text-lg font-semibold text-foreground mb-3">Our Mission</h4>
            <p className="text-muted-foreground leading-relaxed">{mission}</p>
          </div>
        )}
      </Card>
    </div>
  );
};
