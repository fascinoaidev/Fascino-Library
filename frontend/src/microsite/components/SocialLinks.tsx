import { Instagram, Linkedin, Youtube, Twitter, Globe, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface SocialLink {
  platform: string;
  url: string;
  icon: "instagram" | "linkedin" | "youtube" | "twitter" | "website" | "email";
}

interface SocialLinksProps {
  links: SocialLink[];
}

const iconMap = {
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  twitter: Twitter,
  website: Globe,
  email: Mail,
};

export const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div className="w-full animate-fade-up" style={{ animationDelay: "0.4s" }}>
      <h2 className="text-xl font-semibold text-foreground mb-6">Connect With Us</h2>
      <Card className="p-6 rounded-2xl shadow-soft">
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link, index) => {
            const Icon = iconMap[link.icon];
            return (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="h-14 w-14 rounded-full shadow-soft hover:shadow-medium hover:scale-110 transition-bounce"
                asChild
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                >
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
            );
          })}
        </div>
      </Card>
    </div>
  );
};
