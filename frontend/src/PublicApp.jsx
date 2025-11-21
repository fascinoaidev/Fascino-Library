import { Toaster } from "./microsite/components/ui/toaster";
import { Toaster as Sonner } from "./microsite/components/ui/sonner";
import { TooltipProvider } from "./microsite/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./microsite/pages/Index";

const queryClient = new QueryClient();

// Wrapper that renders microsite app content
// For /site/:id, always show the Index page
export default function PublicApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Index />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
