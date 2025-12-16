import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { DynamicFormsGuide } from "@/components/support/DynamicFormsGuide";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DynamicFormsGuidePage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      <main className="pt-24">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 py-4">
          <Link to="/support">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver al Centro de Soporte
            </Button>
          </Link>
        </div>

        <DynamicFormsGuide />
      </main>

      <Footer />
    </div>
  );
};

export default DynamicFormsGuidePage;
