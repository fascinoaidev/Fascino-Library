import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Save, Eye } from "lucide-react";
import { toast } from "sonner";

export default function BrandSettings() {
  const [brandName, setBrandName] = useState("My Brand");
  const [tagline, setTagline] = useState("Your tagline here");
  const [bio, setBio] = useState("");

  const handleSave = () => {
    toast.success("Brand settings saved successfully!");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Brand Settings</h1>
        <p className="mt-2 text-muted-foreground">
          Customize your brand identity and appearance
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Brand Logo</CardTitle>
              <CardDescription>Upload your brand logo (recommended: 512x512px)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-40 w-40 items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted">
                  <Upload className="h-8 w-8 text-muted-foreground" />
                </div>
                <Button variant="outline" className="w-full">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Logo
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Brand Information</CardTitle>
              <CardDescription>Basic details about your brand</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="brandName">Brand Name</Label>
                <Input
                  id="brandName"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="Enter your brand name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tagline">Tagline</Label>
                <Input
                  id="tagline"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  placeholder="Your brand tagline"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Short Bio</Label>
                <Textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell people about your brand..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Banner Media</CardTitle>
              <CardDescription>Upload a banner image or video</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted">
                  <Upload className="h-6 w-6 text-muted-foreground" />
                </div>
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Banner
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>See how your brand will appear</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border border-border bg-gradient-subtle p-8">
                <div className="space-y-4 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-12 w-12 rounded-full bg-gradient-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{brandName}</h3>
                    <p className="text-sm text-muted-foreground">{tagline}</p>
                  </div>
                  {bio && (
                    <p className="text-sm text-muted-foreground">{bio}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex gap-3">
        <Button onClick={handleSave} className="gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
        <Button variant="outline" className="gap-2">
          <Eye className="h-4 w-4" />
          Preview Site
        </Button>
      </div>
    </div>
  );
}
