import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, X, Youtube } from "lucide-react";
import LogoNCA from "@/assets/Logo-NCA.png";
import LogoSCC from "@/assets/Logo-SCC.png";

const footerLinks = {
  producto: [
    { name: "Admisiones", href: "#admisiones" },
    { name: "Pagos", href: "#pagos" },
    { name: "Rutas", href: "#rutas" },
    { name: "ComboCard", href: "#combocard" },
    { name: "BoardV", href: "#boardv" },
  ],
  empresa: [
    { name: "Nosotros", href: "#contact" },
    { name: "Clientes", href: "#contact" },
    { name: "Blog", href: "#contact" },
  ],
  soporte: [
    { name: "Centro de ayuda", href: "/support" },
    { name: "Documentación", href: "/support" },
    { name: "Contacto", href: "/support" },
    { name: "Estado del sistema", href: "/support" },
  ],
  legal: [
    { name: "Privacidad", href: "#contact" },
    { name: "Términos", href: "#contact" },
    { name: "Cookies", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, link: "www.facebook.com", label: "Facebook" },
  { icon: Instagram, link: "www.instagram.com", label: "Instagram" },
  { icon: X, link: "www.x.com", label: "X" },
  { icon: Linkedin, link: "www.linkedin.com", label: "LinkedIn" },
  { icon: Youtube, link: "www.youtube.com", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2">
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="relative w-50 h-10 flex items-center justify-center">
                <img
                  src={LogoNCA}
                  alt="Logo NCA"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <p className="text-background/70 mb-6 max-w-xs">
              Transformando la gestión académica con soluciones tecnológicas innovadoras para instituciones educativas.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
               <a
                  key={social.label}
                  href={
                    social.link.startsWith("http://") ||
                    social.link.startsWith("https://") ||
                    social.link.startsWith("#") ||
                    social.link.startsWith("/")
                      ? social.link
                      : `https://${social.link}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    const url =
                      social.link.startsWith("http://") ||
                      social.link.startsWith("https://") ||
                      social.link.startsWith("#") ||
                      social.link.startsWith("/")
                        ? social.link
                        : `https://${social.link}`;
                    window.open(url, "_blank", "noopener,noreferrer");
                  }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Producto */}
          <div>
            <h3 className="font-heading font-bold mb-4 text-background">Producto</h3>
            <ul className="space-y-3">
              {footerLinks.producto.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-nca-orange transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-heading font-bold mb-4 text-background">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-nca-orange transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h3 className="font-heading font-bold mb-4 text-background">Soporte</h3>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-nca-orange transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-bold mb-4 text-background">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-nca-orange transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Nexus Core Académico. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-background/50 text-sm">
              Hecho con ❤️ para instituciones educativas
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.securecoreconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Secure Core Consulting"
              className="flex items-center gap-2"
            >
              <span className="text-background/50 text-sm">by</span>
              <img
                src={LogoSCC}
                alt="Logo SCC"
                className="w-40 h-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
