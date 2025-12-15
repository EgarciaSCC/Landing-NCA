import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Support from "./pages/Support";
import AdminModuleGuidePage from "./pages/AdminModuleGuidePage";
import AcademicStructureGuidePage from "./pages/AcademicStructureGuidePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/guia-modulo-administrativo" element={<AdminModuleGuidePage />} />
          <Route path="/soporte/guia-estructura-academica" element={<AcademicStructureGuidePage />} />
          {/* agregar aqui todas las rutas personalizadas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
