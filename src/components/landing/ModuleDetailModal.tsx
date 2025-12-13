import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LucideIcon } from "lucide-react";

interface ModuleDetail {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
  bgColor: string;
  detailedDescription?: string;
  benefits?: string[];
  useCases?: string[];
}

interface ModuleDetailModalProps {
  module: ModuleDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const moduleExtendedInfo: Record<string, { detailedDescription: string; benefits: string[]; useCases: string[] }> = {
  admisiones: {
    detailedDescription: "Nuestro módulo de Admisiones transforma completamente el proceso de inscripción escolar. Desde la búsqueda inicial hasta la matrícula final, todo se gestiona digitalmente, eliminando papelería y visitas innecesarias a las instalaciones.",
    benefits: [
      "Reducción del 80% en tiempo de procesamiento",
      "Eliminación de documentos físicos",
      "Mayor transparencia en el proceso",
      "Mejora en la experiencia de las familias",
      "Reportes y analytics en tiempo real",
      "Disminuye costos administrativos",
    ],
    useCases: [
      "Instituciones con alto volumen de solicitudes",
      "Colegios con múltiples sedes",
      "Procesos de admisión competitivos",
      "Gestión de becas y descuentos",
    ],
  },
  pagos: {
    detailedDescription: "El módulo de Pagos centraliza toda la gestión financiera de la institución. Desde la generación de facturas hasta la conciliación bancaria, todo está automatizado y conectado con los sistemas fiscales locales.",
    benefits: [
      "Reducción de morosidad hasta un 40%",
      "Conciliación automática de pagos",
      "Integración fiscal completa (DIAN/SAT)",
      "Múltiples opciones de pago",
      "Control financiero en tiempo real",
    ],
    useCases: [
      "Gestión de matrículas y pensiones",
      "Cobro de servicios adicionales",
      "Vacacionales y extracurriculares",
      "Planes de financiación personalizados",
    ],
  },
  rutas: {
    detailedDescription: "El módulo de Rutas ofrece tranquilidad total a las familias. Con seguimiento GPS en tiempo real, notificaciones automáticas y gestión completa de novedades, el transporte escolar nunca fue tan seguro.",
    benefits: [
      "Tranquilidad para los padres",
      "Optimización de rutas y tiempos",
      "Registro de asistencia automático",
      "Comunicación directa con conductores",
      "Historial completo de recorridos",
    ],
    useCases: [
      "Colegios con servicio de transporte",
      "Rutas urbanas y rurales",
      "Gestión de flotas propias o terceros",
      "Control de puntualidad",
    ],
  },
  combocard: {
    detailedDescription: "ComboCard digitaliza completamente la cafetería escolar. Los padres recargan saldo desde cualquier lugar, definen restricciones alimentarias y monitorean los consumos de sus hijos en tiempo real.",
    benefits: [
      "Eliminación de manejo de efectivo",
      "Control de dietas y alergias",
      "Cuadre de caja automático",
      "Reducción de filas y tiempos",
      "Reportes de consumo detallados",
    ],
    useCases: [
      "Cafeterías escolares",
      "Tiendas y cooperativas",
      "Eventos especiales",
      "Control de alimentación saludable",
    ],
  },
  boardv: {
    detailedDescription: "BoardV es el aula virtual completa para tu institución. Gestiona tareas, calificaciones, comunicación con familias y seguimiento académico en una sola plataforma integrada con todos los demás módulos.",
    benefits: [
      "Comunicación directa con familias",
      "Seguimiento académico integral",
      "Gestión de tareas y evaluaciones",
      "Soporte para estudiantes incapacitados",
      "Integración con calendario escolar",
    ],
    useCases: [
      "Gestión de tareas virtuales",
      "Comunicación padres-docentes",
      "Seguimiento de incapacidades",
      "Educación híbrida",
    ],
  },
};

export function ModuleDetailModal({ module, isOpen, onClose }: ModuleDetailModalProps) {
  if (!module) return null;

  const extendedInfo = moduleExtendedInfo[module.id];

  // Handler que cierra el modal y hace scroll suave a la sección 'contact'
  const handleRequestDemo = () => {
    try {
      // Cerrar modal (prop del padre)
      onClose();

      // Dar un pequeño tiempo para que la animación de cierre (si la hay) se ejecute
      // y para que el overlay/modal sea removido, evitando que el scroll quede bloqueado.
      const scrollToContact = () => {
        const target = document.getElementById("contact");
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });

          // Intentar enfocar el primer elemento interactivo dentro de la sección (mejora accesibilidad)
          window.setTimeout(() => {
            try {
              const focusable = target.querySelector<any>(
                'input, textarea, button, [tabindex]:not([tabindex="-1"])'
              );
              if (focusable && typeof focusable.focus === "function") {
                focusable.focus({ preventScroll: true } as any);
              }
            } catch (e) {
              // no fatal
            }
          }, 350);
        } else {
          // fallback: scroll al top si no existe el ancla
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      };

      // Timeout corto para permitir cierre del modal. 220ms es suficiente en la mayoría de UIs.
      window.setTimeout(scrollToContact, 220);
    } catch (err) {
      // En caso de error, cerramos modal y hacemos un scroll inmediato
      onClose();
      const target = document.getElementById("contact");
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header with gradient */}
        <div className={`bg-gradient-to-br ${module.color} p-8 relative`}>
          <DialogHeader className="text-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <module.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <DialogTitle className="text-3xl font-heading font-bold text-primary-foreground">
                  {module.title}
                </DialogTitle>
                <span className="text-primary-foreground/80 font-medium">
                  {module.subtitle}
                </span>
              </div>
            </div>
          </DialogHeader>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-4 left-1/2 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Description */}
          <div>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              {module.description}
            </p>
            {extendedInfo && (
              <p className="text-muted-foreground leading-relaxed">
                {extendedInfo.detailedDescription}
              </p>
            )}
          </div>

          {/* Features */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <h4 className="text-xl font-heading font-semibold text-foreground">
                Características Principales
              </h4>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {module.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                >
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${module.color} flex items-center justify-center flex-shrink-0`}>
                    <Check className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          {extendedInfo?.benefits && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-primary" />
                <h4 className="text-xl font-heading font-semibold text-foreground">
                  Beneficios Clave
                </h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {extendedInfo.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <ArrowRight className={`w-4 h-4 mt-1 flex-shrink-0`} style={{ color: 'hsl(var(--primary))' }} />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Use Cases */}
          {extendedInfo?.useCases && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-primary" />
                <h4 className="text-xl font-heading font-semibold text-foreground">
                  Casos de Uso
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {extendedInfo.useCases.map((useCase, index) => (
                  <motion.span
                    key={useCase}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${module.bgColor} text-foreground border border-border/50`}
                  >
                    {useCase}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="pt-4 border-t border-border">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <p className="text-muted-foreground text-center sm:text-left">
                ¿Listo para transformar tu institución?
              </p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={onClose}>
                  Cerrar
                </Button>
                <Button className={`bg-gradient-to-r ${module.color} text-primary-foreground hover:opacity-90`} onClick={handleRequestDemo}>
                  Solicitar Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
