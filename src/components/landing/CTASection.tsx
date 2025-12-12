import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import ncaHeroes from "@/assets/nca-heroes.png";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-purple-bg" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-nca-orange/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-nca-yellow/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              ¡Tu aliado escolar de{" "}
              <span className="text-nca-yellow">confianza!</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
              Únete a las instituciones educativas que ya están transformando su gestión académica con NCA. 
              Solicita una demostración personalizada y descubre cómo podemos ayudarte.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="accent" size="lg" className="group">
                Solicitar Demo Gratis
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Hablar con Ventas
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-nca-yellow" />
                <span className="text-primary-foreground/80 text-sm">Respuesta en menos de 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-foreground/80 text-sm">Sin compromisos</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Heroes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="animate-float-delayed">
              <img
                src={ncaHeroes}
                alt="NCA Heroes te acompañan"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
