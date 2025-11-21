import { Sparkles } from "lucide-react";

interface HeaderProps {
  brandName: string;
  brandTagline: string;
  logoUrl?: string;
}

export const Header = ({ brandName, brandTagline, logoUrl }: HeaderProps) => {
  return (
    <header className="w-full py-8 px-4 text-center animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={brandName}
            className="h-16 w-auto mx-auto mb-4 object-contain"
          />
        ) : (
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl gradient-primary mb-4 shadow-medium">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">
          {brandName}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{brandTagline}</p>
      </div>
    </header>
  );
};
