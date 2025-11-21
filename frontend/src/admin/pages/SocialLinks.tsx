import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Instagram, Linkedin, Youtube, MessageCircle, Globe, Save } from "lucide-react";
import { toast } from "sonner";

export default function SocialLinks() {
  const [links, setLinks] = useState({
    instagram: "",
    linkedin: "",
    youtube: "",
    whatsapp: "",
    website: "",
  });

  const handleSave = () => {
    toast.success("Social links saved successfully!");
  };

  const socialPlatforms = [
    { key: "instagram" as const, label: "Instagram", icon: Instagram, placeholder: "instagram.com/username" },
    { key: "linkedin" as const, label: "LinkedIn", icon: Linkedin, placeholder: "linkedin.com/in/username" },
    { key: "youtube" as const, label: "YouTube", icon: Youtube, placeholder: "youtube.com/@username" },
    { key: "whatsapp" as const, label: "WhatsApp", icon: MessageCircle, placeholder: "+1234567890" },
    { key: "website" as const, label: "Website", icon: Globe, placeholder: "www.example.com" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Social Links</h1>
        <p className="mt-2 text-muted-foreground">
          Connect your social media profiles
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Social Media Accounts</CardTitle>
            <CardDescription>Add links to your social profiles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {socialPlatforms.map((platform) => (
              <div key={platform.key} className="space-y-2">
                <Label htmlFor={platform.key} className="flex items-center gap-2">
                  <platform.icon className="h-4 w-4" />
                  {platform.label}
                </Label>
                <Input
                  id={platform.key}
                  value={links[platform.key]}
                  onChange={(e) => setLinks({ ...links, [platform.key]: e.target.value })}
                  placeholder={platform.placeholder}
                />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Preview</CardTitle>
            <CardDescription>How your social links will appear</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border border-border bg-gradient-subtle p-6">
              <div className="space-y-3">
                <h3 className="text-center font-semibold mb-4">Connect With Me</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {socialPlatforms.map((platform) => (
                    links[platform.key] && (
                      <div
                        key={platform.key}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"
                      >
                        <platform.icon className="h-5 w-5" />
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button onClick={handleSave} className="gap-2">
        <Save className="h-4 w-4" />
        Save Links
      </Button>
    </div>
  );
}
