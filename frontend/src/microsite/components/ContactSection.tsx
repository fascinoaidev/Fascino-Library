import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

export const ContactSection = ({ contactInfo }: ContactSectionProps) => {
  return (
    <div className="w-full animate-fade-up" style={{ animationDelay: "0.6s" }}>
      <h2 className="text-xl font-semibold text-foreground mb-6">Get In Touch</h2>
      <Card className="p-8 rounded-2xl shadow-soft">
        <div className="space-y-6">
          {contactInfo.email && (
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground mb-1">Email</h4>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          )}

          {contactInfo.phone && (
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground mb-1">Phone</h4>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          )}

          {contactInfo.address && (
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground mb-1">Address</h4>
                <p className="text-muted-foreground">{contactInfo.address}</p>
              </div>
            </div>
          )}

          <Button className="w-full mt-4 rounded-full gradient-primary text-white shadow-medium hover:shadow-strong transition-smooth">
            Send Message
          </Button>
        </div>
      </Card>
    </div>
  );
};
