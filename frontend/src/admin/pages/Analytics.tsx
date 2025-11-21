import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Eye, MousePointer } from "lucide-react";

export default function Analytics() {
  const stats = [
    { icon: Eye, label: "Total Views", value: "12,345", change: "+18%" },
    { icon: Users, label: "Unique Visitors", value: "4,567", change: "+12%" },
    { icon: MousePointer, label: "Click Rate", value: "8.2%", change: "+2.1%" },
    { icon: TrendingUp, label: "Conversion Rate", value: "3.4%", change: "+0.8%" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="mt-2 text-muted-foreground">
          Track your portfolio performance (Coming Soon)
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="shadow-card">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-lg bg-primary/10 p-3 text-primary">
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
            <CardTitle>Popular Products</CardTitle>
            <CardDescription>Most viewed items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-subtle" />
                  <div className="flex-1">
                    <p className="font-medium">Product {i}</p>
                    <p className="text-sm text-muted-foreground">{150 * i} views</p>
                  </div>
                  <div className="text-sm font-medium text-primary">+{10 + i}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Where your visitors come from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { source: "QR Code Scans", value: "65%" },
                { source: "Direct Links", value: "25%" },
                { source: "Social Media", value: "10%" },
              ].map((source) => (
                <div key={source.source} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{source.source}</span>
                    <span className="text-muted-foreground">{source.value}</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-gradient-primary transition-all"
                      style={{ width: source.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
