import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Save, RotateCcw } from "lucide-react";
import { toast } from "sonner";

export default function PageCustomization() {
  const [sections, setSections] = useState({
    highlights: true,
    products: true,
    gallery: false,
    about: true,
    social: true,
  });

  const toggleSection = (key: keyof typeof sections) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    toast.success("Layout saved successfully!");
  };

  const handleReset = () => {
    setSections({
      highlights: true,
      products: true,
      gallery: false,
      about: true,
      social: true,
    });
    toast.info("Layout reset to default");
  };

  const sectionsList = [
    { key: "highlights" as const, label: "Highlights", description: "Video highlights showcase" },
    { key: "products" as const, label: "Product Showcase", description: "Display your products" },
    { key: "gallery" as const, label: "Photo Gallery", description: "Image gallery section" },
    { key: "about" as const, label: "About", description: "About section with bio" },
    { key: "social" as const, label: "Social Links", description: "Social media links" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Page Customization</h1>
        <p className="mt-2 text-muted-foreground">
          Choose which sections to display on your portfolio
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Page Sections</CardTitle>
            <CardDescription>Toggle sections on/off to customize your layout</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {sectionsList.map((section) => (
              <div
                key={section.key}
                className="flex items-center justify-between rounded-lg border border-border p-4 transition-smooth hover:border-primary"
              >
                <div className="flex-1">
                  <Label htmlFor={section.key} className="text-base font-medium cursor-pointer">
                    {section.label}
                  </Label>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </div>
                <Switch
                  id={section.key}
                  checked={sections[section.key]}
                  onCheckedChange={() => toggleSection(section.key)}
                />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Live Preview</CardTitle>
            <CardDescription>See how your page structure will look</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 rounded-lg border border-border bg-gradient-subtle p-6">
              <div className="rounded bg-primary/10 p-3 text-center text-sm font-medium">
                Header / Brand
              </div>
              {sections.highlights && (
                <div className="rounded bg-accent/10 p-3 text-center text-sm font-medium">
                  Highlights
                </div>
              )}
              {sections.products && (
                <div className="rounded bg-primary/10 p-3 text-center text-sm font-medium">
                  Product Showcase
                </div>
              )}
              {sections.gallery && (
                <div className="rounded bg-accent/10 p-3 text-center text-sm font-medium">
                  Photo Gallery
                </div>
              )}
              {sections.about && (
                <div className="rounded bg-primary/10 p-3 text-center text-sm font-medium">
                  About
                </div>
              )}
              {sections.social && (
                <div className="rounded bg-accent/10 p-3 text-center text-sm font-medium">
                  Social Links
                </div>
              )}
              <div className="rounded bg-muted p-3 text-center text-sm font-medium">
                Footer
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-3">
        <Button onClick={handleSave} className="gap-2">
          <Save className="h-4 w-4" />
          Save Layout
        </Button>
        <Button variant="outline" onClick={handleReset} className="gap-2">
          <RotateCcw className="h-4 w-4" />
          Restore Default
        </Button>
      </div>
    </div>
  );
}
