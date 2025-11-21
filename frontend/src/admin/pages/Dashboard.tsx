import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Eye, Package, QrCode, TrendingUp, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Dashboard() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const previewUrl = "/site/demo"; // You can make this dynamic based on user's site ID

  const stats = [
    { icon: QrCode, label: "QR Scans", value: "1,234", change: "+12%", color: "text-primary" },
    { icon: Package, label: "Products Added", value: "24", change: "+3", color: "text-accent" },
    { icon: Eye, label: "Total Views", value: "5,678", change: "+28%", color: "text-primary" },
    { icon: TrendingUp, label: "Engagement", value: "84%", change: "+5%", color: "text-accent" },
  ];

  const quickActions = [
    { title: "Brand Settings", description: "Update your logo and brand info", to: "/brand" },
    { title: "Add Products", description: "Showcase your products", to: "/products" },
    { title: "Customize Theme", description: "Make it uniquely yours", to: "/theme" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back!</h1>
        <p className="mt-2 text-muted-foreground">
          Here's what's happening with your QR Portfolio today.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="shadow-card transition-smooth hover:shadow-elevated">
            <CardContent className="flex items-center gap-4 p-6">
              <div className={`rounded-lg bg-primary/10 p-3 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <span className="text-xs font-medium text-primary">{stat.change}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((action) => (
              <Link
                key={action.title}
                to={action.to}
                className="flex items-center justify-between rounded-lg border border-border p-4 transition-smooth hover:border-primary hover:shadow-card"
              >
                <div>
                  <h4 className="font-medium">{action.title}</h4>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </div>
                <Button variant="ghost" size="sm">Go →</Button>
              </Link>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Preview Your Microsite</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              See how your public microsite looks to visitors. Preview all your content, products, and customizations.
            </p>
            <div className="flex gap-3">
              <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
                <DialogTrigger asChild>
                  <Button className="flex-1">
                    <Eye className="mr-2 h-4 w-4" />
                    Preview Microsite
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl w-full h-[90vh] p-0">
                  <DialogHeader className="px-6 pt-6 pb-4 border-b">
                    <div className="flex items-center justify-between">
                      <DialogTitle>Microsite Preview</DialogTitle>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(previewUrl, '_blank')}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Open in New Tab
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setPreviewOpen(false)}
                        >
                          Close
                        </Button>
                      </div>
                    </div>
                  </DialogHeader>
                  <div className="flex-1 overflow-hidden">
                    <iframe
                      src={previewUrl}
                      className="w-full h-full border-0"
                      title="Microsite Preview"
                      style={{ height: 'calc(90vh - 80px)' }}
                    />
                  </div>
                </DialogContent>
              </Dialog>
              <Button
                variant="outline"
                onClick={() => window.open(previewUrl, '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <p className="text-sm text-muted-foreground">Product "Summer Collection" added</p>
                <span className="ml-auto text-xs text-muted-foreground">2h ago</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <p className="text-sm text-muted-foreground">Theme colors updated</p>
                <span className="ml-auto text-xs text-muted-foreground">5h ago</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <p className="text-sm text-muted-foreground">Instagram link connected</p>
                <span className="ml-auto text-xs text-muted-foreground">1d ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
