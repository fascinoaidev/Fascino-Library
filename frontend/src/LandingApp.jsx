import { useLocation } from "react-router-dom";
import { Toaster } from "./landing/components/ui/toaster";
import { Toaster as Sonner } from "./landing/components/ui/sonner";
import { TooltipProvider } from "./landing/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./landing/pages/Index";
import Pricing from "./landing/pages/Pricing";
import HowItWorks from "./landing/pages/HowItWorks";
import About from "./landing/pages/About";
import NotFound from "./landing/pages/NotFound";

const queryClient = new QueryClient();

// Wrapper that renders landing app content based on current route
// Uses parent router instead
export default function LandingApp() {
  const location = useLocation();
  
  let PageComponent = Index;
  
  if (location.pathname === "/pricing") {
    PageComponent = Pricing;
  } else if (location.pathname === "/how-it-works") {
    PageComponent = HowItWorks;
  } else if (location.pathname === "/about") {
    PageComponent = About;
  } else if (location.pathname !== "/") {
    PageComponent = NotFound;
  }
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <PageComponent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

