import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { AdminModuleGuide } from "@/components/support/AdminModuleGuide";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AdminModuleGuidePage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <Link to="/support">
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Volver a Soporte
            </Button>
          </Link>
        </div>

        <AdminModuleGuide />
      </main>

      <Footer />
    </div>
  );
};

export default AdminModuleGuidePage;