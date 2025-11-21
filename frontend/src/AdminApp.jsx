import { Routes, Route } from "react-router-dom";
import { Toaster } from "./admin/components/ui/toaster";
import { Toaster as Sonner } from "./admin/components/ui/sonner";
import { TooltipProvider } from "./admin/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DashboardLayout } from "./admin/components/layout/DashboardLayout";
import Dashboard from "./admin/pages/Dashboard";
import BrandSettings from "./admin/pages/BrandSettings";
import PageCustomization from "./admin/pages/PageCustomization";
import ProductManager from "./admin/pages/ProductManager";
import Highlights from "./admin/pages/Highlights";
import SocialLinks from "./admin/pages/SocialLinks";
import ThemeColors from "./admin/pages/ThemeColors";
import Analytics from "./admin/pages/Analytics";
import NotFound from "./admin/pages/NotFound";
import { AdminNavigationProvider } from "./AdminNavigationProvider";

const queryClient = new QueryClient();

// Wrapper that renders admin app content without BrowserRouter
// Uses parent router instead
export default function AdminApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AdminNavigationProvider>
          <Routes>
            <Route path="/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
            <Route path="/brand" element={<DashboardLayout><BrandSettings /></DashboardLayout>} />
            <Route path="/customize" element={<DashboardLayout><PageCustomization /></DashboardLayout>} />
            <Route path="/products" element={<DashboardLayout><ProductManager /></DashboardLayout>} />
            <Route path="/highlights" element={<DashboardLayout><Highlights /></DashboardLayout>} />
            <Route path="/social" element={<DashboardLayout><SocialLinks /></DashboardLayout>} />
            <Route path="/theme" element={<DashboardLayout><ThemeColors /></DashboardLayout>} />
            <Route path="/analytics" element={<DashboardLayout><Analytics /></DashboardLayout>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AdminNavigationProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
