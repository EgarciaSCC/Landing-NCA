import { motion } from "framer-motion";
import { Shield, Handshake, Eye, MapPin } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Seguridad",
    description: "Protección total de datos y trazabilidad completa en cada proceso académico.",
    color: "from-nca-coral to-nca-orange",
  },
  {
    icon: Handshake,
    title: "Confianza",
    description: "Instituciones y familias conectadas en una plataforma transparente y confiable.",
    color: "from-nca-purple to-nca-purple-dark",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description: "Visibilidad total del estado de cada proceso, desde admisiones hasta pagos.",
    color: "from-nca-orange to-nca-yellow",
  },
  {
    icon: MapPin,
    title: "Seguimiento",
    description: "Monitoreo en tiempo real de rutas, actividades y progreso de cada estudiante.",
    color: "from-nca-purple-light to-nca-purple",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function ValueProposition() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-nca-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-nca-orange/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Con <span className="gradient-text">Nexus Core Académico</span> tienes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones tecnológicas innovadoras que impulsan la transformación digital de tu institución educativa
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="elevated-card p-8 h-full border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${value.color}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
