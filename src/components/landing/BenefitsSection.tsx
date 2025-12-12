import { motion } from "framer-motion";
import { 
  Clock, 
  TrendingUp, 
  Smartphone, 
  Globe, 
  HeartHandshake,
  Lock
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Ahorro de Tiempo",
    description: "Automatiza procesos manuales y reduce el tiempo administrativo hasta en un 70%.",
  },
  {
    icon: TrendingUp,
    title: "Mayor Eficiencia",
    description: "Centraliza toda la gestión académica en una sola plataforma integrada.",
  },
  {
    icon: Smartphone,
    title: "Acceso Móvil",
    description: "Padres y administradores pueden gestionar todo desde cualquier dispositivo.",
  },
  {
    icon: Globe,
    title: "Multi-país",
    description: "Adaptado a normativas fiscales de Colombia, México y más países de Latinoamérica.",
  },
  {
    icon: HeartHandshake,
    title: "Soporte Dedicado",
    description: "Equipo de soporte 24/7 para resolver cualquier duda o incidencia.",
  },
  {
    icon: Lock,
    title: "Datos Seguros",
    description: "Encriptación de nivel bancario y cumplimiento de normativas de protección de datos.",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-nca-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-nca-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Beneficios que{" "}
            <span className="gradient-text">transforman</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más que un software, somos tu aliado estratégico en la transformación digital educativa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="elevated-card p-8 h-full border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
