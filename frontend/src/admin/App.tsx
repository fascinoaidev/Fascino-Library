import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import BrandSettings from "./pages/BrandSettings";
import PageCustomization from "./pages/PageCustomization";
import ProductManager from "./pages/ProductManager";
import Highlights from "./pages/Highlights";
import SocialLinks from "./pages/SocialLinks";
import ThemeColors from "./pages/ThemeColors";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
