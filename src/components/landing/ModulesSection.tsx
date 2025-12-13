import { useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap,
  CreditCard,
  Bus, 
  UtensilsCrossed, 
  BookOpen,
  ArrowRight,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import containerAdmisiones from "@/assets/container-admisiones.png";
import containerPagos from "@/assets/container-pagos.png";
import containerRutas from "@/assets/container-rutas.png";
import containerComboCard from "@/assets/container-combocard.png";
import containerBoardV from "@/assets/container-boardv.png";
import { ModuleDetailModal } from "./ModuleDetailModal";

const modules = [
  {
    id: "admisiones",
    icon: GraduationCap,
    img: containerAdmisiones,
    alt: "Interfaz de usuario del módulo de Admisiones",
    title: "Admisiones",
    subtitle: "Proceso 100% Virtual",
    description: "Permite que cada grupo familiar encuentre la escuela ideal. Define formularios, documentos y fases personalizadas para cada institución.",
    features: [
      "Búsqueda y filtrado de instituciones",
      "Formularios personalizables",
      "Carga de documentos digital",
      "Seguimiento de estados en tiempo real",
      "Notificaciones automáticas",
    ],
    color: "from-nca-purple to-nca-purple-dark",
    bgColor: "bg-nca-purple/5",
  },
  {
    id: "pagos",
    icon: CreditCard,
    img: containerPagos,
    alt: "Interfaz de usuario del módulo de Pagos",
    title: "Pagos",
    subtitle: "Gestión de Cobranzas",
    description: "Gestiona el pago de matrícula, vacacionales, extracurriculares y más. Integración con sistemas fiscales de Colombia y México.",
    features: [
      "Parcialización de pagos",
      "Recordatorios SMS, Email y WhatsApp",
      "Conciliación contable automática",
      "Integración DIAN y SAT",
      "Reportes financieros detallados",
      "Crea conceptos de pago personalizados",
    ],
    color: "from-nca-orange to-nca-coral",
    bgColor: "bg-nca-orange/5",
  },
  {
    id: "rutas",
    icon: Bus,
    img: containerRutas,
    alt: "Interfaz de usuario del módulo de Rutas",
    title: "Rutas",
    subtitle: "Seguimiento en Tiempo Real",
    description: "Valida rutas asignadas, paradas, tiempos de llegada y novedades. Los padres siempre saben dónde están sus hijos.",
    features: [
      "Geolocalización en vivo",
      "Notificaciones de paradas",
      "Alertas de retrasos y novedades",
      "App para conductor y acompañante",
      "Historial de recorridos",
    ],
    color: "from-nca-yellow to-nca-orange",
    bgColor: "bg-nca-yellow/5",
  },
  {
    id: "combocard",
    icon: UtensilsCrossed,
    img: containerComboCard,
    alt: "Interfaz de usuario del módulo de ComboCard",
    title: "ComboCard",
    subtitle: "Cafetería Digital",
    description: "Recarga de saldo digital, control de dietas y alergias. Cuadre de caja automático para cafeterías escolares.",
    features: [
      "Saldo digital recargable",
      "Restricciones por dieta/alergias",
      "Control de gastos estudiantil",
      "Cuadre de caja automático",
      "Historial de consumos",
    ],
    color: "from-nca-coral to-nca-orange",
    bgColor: "bg-nca-coral/5",
  },
  {
    id: "boardv",
    icon: BookOpen,
    img: containerBoardV,
    alt: "Interfaz de usuario del módulo de BoardV",
    title: "BoardV",
    subtitle: "Aula Virtual",
    description: "Gestor de tareas virtuales, carga de archivos, calificaciones y seguimiento académico con comunicación directa.",
    features: [
      "Creación de actividades",
      "Calificación virtual",
      "Seguimiento de incapacitados",
      "Carga de archivos",
      "Chat con familias",
    ],
    color: "from-nca-purple-light to-nca-purple",
    bgColor: "bg-nca-purple-light/5",
  },
];

export function ModulesSection() {
  const [selectedModule, setSelectedModule] = useState<typeof modules[0] | null>(null);
  return (
    <section id="modules" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-nca-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-nca-orange/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Soluciones Modulares
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Un módulo para cada{" "}
            <span className="gradient-text">necesidad</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Construido por módulos para cubrir las necesidades específicas de cada institución educativa
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="space-y-8">
          {modules.map((module, index) => (
            <motion.div
              id={module.id}
              key={module.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={`elevated-card overflow-hidden ${
                  index % 2 === 0 ? "" : ""
                }`}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-8 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Side */}
                  <div
                    className={`p-8 lg:p-12 flex flex-col justify-center ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg`}
                      >
                        <module.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">
                          {module.title}
                        </h3>
                        <span className="text-sm font-medium text-muted-foreground">
                          {module.subtitle}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {module.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {module.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full bg-gradient-to-br ${module.color} flex items-center justify-center flex-shrink-0`}
                          >
                            <Check className="w-3 h-3 text-primary-foreground" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                    variant="outline"
                    className="self-start group"
                    onClick={() => setSelectedModule(module)}
                    >
                      Conocer más
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>

                  {/* Visual Side */}
                  <div
                    className={`${module.bgColor} p-8 lg:p-12 flex items-center justify-center ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className={`w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br ${module.color} p-1 shadow-2xl`}
                    >
                      <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                        <img
                            src={module.img}
                            alt={module.alt}
                            className="object-contain"
                          />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Module Detail Modal */}
        <ModuleDetailModal
            module={selectedModule}
            isOpen={!!selectedModule}
            onClose={() => setSelectedModule(null)}
        />
      </div>
    </section>
  );
}
