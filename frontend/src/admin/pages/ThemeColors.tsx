import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Save } from "lucide-react";
import { toast } from "sonner";

export default function ThemeColors() {
  const [theme, setTheme] = useState({
    primaryColor: "#3B82F6",
    accentColor: "#A855F7",
    textColor: "#1F2937",
    font: "Inter",
    darkMode: false,
  });

  const handleSave = () => {
    toast.success("Theme settings saved!");
  };

  const fonts = ["Inter", "Poppins", "Roboto", "Montserrat"];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Theme & Colors</h1>
        <p className="mt-2 text-muted-foreground">
          Customize the look and feel of your portfolio
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Color Scheme</CardTitle>
              <CardDescription>Choose your brand colors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="primaryColor">Primary Color</Label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    id="primaryColor"
                    value={theme.primaryColor}
                    onChange={(e) => setTheme({ ...theme, primaryColor: e.target.value })}
                    className="h-10 w-20 cursor-pointer rounded-md border border-border"
                  />
                  <div className="flex-1 rounded-md border border-border bg-muted px-3 py-2 text-sm">
                    {theme.primaryColor}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accentColor">Accent Color</Label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    id="accentColor"
                    value={theme.accentColor}
                    onChange={(e) => setTheme({ ...theme, accentColor: e.target.value })}
                    className="h-10 w-20 cursor-pointer rounded-md border border-border"
                  />
                  <div className="flex-1 rounded-md border border-border bg-muted px-3 py-2 text-sm">
                    {theme.accentColor}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="textColor">Text Color</Label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    id="textColor"
                    value={theme.textColor}
                    onChange={(e) => setTheme({ ...theme, textColor: e.target.value })}
                    className="h-10 w-20 cursor-pointer rounded-md border border-border"
                  />
                  <div className="flex-1 rounded-md border border-border bg-muted px-3 py-2 text-sm">
                    {theme.textColor}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Typography</CardTitle>
              <CardDescription>Select your preferred font</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="font">Font Family</Label>
                <Select value={theme.font} onValueChange={(value) => setTheme({ ...theme, font: value })}>
                  <SelectTrigger id="font">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {fonts.map((font) => (
                      <SelectItem key={font} value={font}>
                        {font}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div>
                  <Label htmlFor="darkMode">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Enable dark theme</p>
                </div>
                <Switch
                  id="darkMode"
                  checked={theme.darkMode}
                  onCheckedChange={(checked) => setTheme({ ...theme, darkMode: checked })}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Live Preview</CardTitle>
            <CardDescription>See your theme in action</CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className="rounded-lg border p-8"
              style={{
                backgroundColor: theme.darkMode ? "#1F2937" : "#FFFFFF",
                color: theme.darkMode ? "#F9FAFB" : theme.textColor,
                fontFamily: theme.font,
              }}
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-bold" style={{ color: theme.primaryColor }}>
                  Your Brand Name
                </h2>
                <p className="text-sm">
                  This is how your portfolio will look with the selected theme settings.
                </p>
                <div className="flex gap-2">
                  <button
                    className="rounded-lg px-4 py-2 text-sm font-medium text-white"
                    style={{ backgroundColor: theme.primaryColor }}
                  >
                    Primary Button
                  </button>
                  <button
                    className="rounded-lg px-4 py-2 text-sm font-medium text-white"
                    style={{ backgroundColor: theme.accentColor }}
                  >
                    Accent Button
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button onClick={handleSave} className="gap-2">
        <Save className="h-4 w-4" />
        Save Theme
      </Button>
    </div>
  );
}
