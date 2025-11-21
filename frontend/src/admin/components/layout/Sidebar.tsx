import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Settings,
  Layout,
  Package,
  Sparkles,
  Link as LinkIcon,
  Palette,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", to: "/" },
  { icon: Settings, label: "Brand Settings", to: "/brand" },
  { icon: Layout, label: "Page Customization", to: "/customize" },
  { icon: Package, label: "Product Manager", to: "/products" },
  { icon: Sparkles, label: "Highlights", to: "/highlights" },
  { icon: LinkIcon, label: "Social Links", to: "/social" },
  { icon: Palette, label: "Theme & Colors", to: "/theme" },
  { icon: BarChart3, label: "Analytics", to: "/analytics" },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-sidebar-border bg-sidebar">
      <div className="flex h-16 items-center border-b border-sidebar-border px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary" />
          <div>
            <h1 className="text-sm font-semibold text-sidebar-foreground">QR Portfolio</h1>
            <p className="text-xs text-sidebar-foreground/60">by Fascino AI</p>
          </div>
        </div>
      </div>

      <nav className="space-y-1 p-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-smooth",
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
