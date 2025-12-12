import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LogoNCA from "@/assets/Logo-NCA.png";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Módulos", href: "#modules" },
  { name: "Beneficios", href: "#benefits" },
  { name: "Contacto", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para hacer scroll suave a la sección #contact
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-lg bg-transparent py-5"
          : "bg-background/70 bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="relative w-50 h-10 flex items-center justify-center">
              <img
                src={LogoNCA}
                alt="Logo NCA"
                className="w-full h-full object-contain"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="hero"
              size="sm"
              onClick={() => {
                // Scroll suave a la sección de contacto
                scrollToContact();
              }}
            >
              Solicitar Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu -*/}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/70 background-menu-mobile bg-transparent py-5 border-b border-border shadow-lg"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium text-color-menu-mobile text-lg py-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button
                variant="hero"
                className="mt-4"
                onClick={() => {
                  // Cerrar menú móvil y hacer scroll al contacto
                  setIsMobileMenuOpen(false);
                  // Pequeña espera para que el menú cierre (opcional), luego scrollear
                  setTimeout(() => scrollToContact(), 10);
                }}
              >
                Solicitar Demo
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
