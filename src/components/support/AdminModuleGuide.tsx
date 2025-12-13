import { motion } from "framer-motion";
import { 
  Building2, 
  MapPin, 
  Award, 
  GraduationCap,
  DollarSign,
  ChevronRight,
  Image,
  FileText,
  Globe,
  Layers,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const phases = [
  {
    id: "fase-1",
    number: 1,
    title: "Datos Básicos",
    description: "Configura la información fundamental de tu institución educativa",
    icon: Building2,
    color: "bg-primary",
    steps: [
      {
        title: "Logo y Descripción",
        description: "Carga el logo institucional (formatos JPG, PNG) y escribe una descripción detallada del colegio."
      },
      {
        title: "Datos Básicos",
        items: [
          "Nombre del Colegio",
          "Género del colegio (Mixto, Masculino, Femenino)",
          "Idiomas que se imparten",
          "Año de fundación",
          "Religión (si aplica)",
          "Tipo de calendario (A o B)"
        ]
      },
      {
        title: "Misión y Visión",
        description: "Define la misión y visión institucional que guiarán el propósito educativo."
      }
    ]
  },
  {
    id: "fase-2",
    number: 2,
    title: "Datos de Infraestructura",
    description: "Registra las sedes y ubicaciones físicas de la institución",
    icon: MapPin,
    color: "bg-secondary",
    steps: [
      {
        title: "Crear Nueva Sede",
        description: "Para cada sede del colegio, deberás registrar la siguiente información:"
      },
      {
        title: "Información de Dirección",
        items: [
          "Nombre de la sede (Ej: Sede Norte, Sede Principal)",
          "Tipo de vía (Calle, Carrera, Diagonal, etc.)",
          "Número y complemento de dirección",
          "Departamento y Ciudad",
          "Barrio o Localidad"
        ]
      },
      {
        title: "Fotos de la Sede",
        description: "Sube mínimo 5 imágenes de la sede. Formatos aceptados: PNG, JPG. Tamaño máximo: 50MB."
      },
      {
        title: "Fotos Adicionales (Opcional)",
        items: [
          "Zonas verdes",
          "Laboratorios",
          "Zonas deportivas"
        ]
      },
      {
        title: "Localización",
        description: "Utiliza la opción 'Localizar en el mapa' para marcar la ubicación exacta de la sede."
      }
    ]
  },
  {
    id: "fase-3",
    number: 3,
    title: "Programas y Certificaciones",
    description: "Configura el modelo pedagógico y certificaciones institucionales",
    icon: Award,
    color: "bg-accent",
    steps: [
      {
        title: "Modelo Pedagógico (Opcional)",
        items: [
          "IB (Bachillerato Internacional)",
          "Trabajo Colaborativo",
          "Multidisciplinario",
          "Pedagogía del amor",
          "Otros"
        ]
      },
      {
        title: "Certificaciones",
        description: "Arrastra o sube los certificados de la institución. Formato: PDF. Tamaño máximo: 30MB."
      },
      {
        title: "Programas Internacionales",
        items: [
          "Advance Placement (AP)",
          "Cambridge Assessment - International Education",
          "Bachillerato Internacional - Programa Diploma"
        ]
      }
    ]
  }
];

const academicStructure = {
  title: "Estructura Académica",
  description: "La estructura académica en NCA se organiza en dos niveles jerárquicos:",
  levels: [
    {
      name: "Niveles",
      description: "Son las categorías principales de la estructura educativa",
      icon: Layers,
      examples: ["Preescolar", "Primaria", "Secundaria", "Media"]
    },
    {
      name: "Grados",
      description: "Son las subdivisiones dentro de cada nivel",
      icon: GraduationCap,
      examples: ["Jardín, Pre-jardín, Transición", "1° a 5° grado", "6° a 9° grado", "10° y 11° grado"]
    }
  ]
};

const pricingGuide = {
  title: "Configuración de Valores",
  description: "Establece los costos asociados a cada grado académico",
  icon: DollarSign,
  features: [
    "Define el valor de matrícula por grado",
    "Configura pensiones mensuales",
    "Establece descuentos por pronto pago",
    "Agrega costos adicionales (materiales, uniformes, etc.)"
  ]
};

export function AdminModuleGuide() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">Guía del Módulo Administrativo</Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Configuración Inicial del Colegio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sigue esta guía paso a paso para configurar completamente tu institución educativa en NCA
          </p>
        </motion.div>

        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {phases.map((phase, index) => (
              <div key={phase.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full ${phase.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {phase.number}
                  </div>
                  <span className="text-sm font-medium text-foreground mt-2 text-center">
                    {phase.title}
                  </span>
                </div>
                {index < phases.length - 1 && (
                  <div className="hidden md:block w-24 h-1 bg-border mx-4 relative top-[-12px]">
                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Phases Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {phases.map((phase, phaseIndex) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: phaseIndex * 0.1 }}
              >
                <AccordionItem value={phase.id} className="border border-border/50 rounded-xl overflow-hidden bg-card">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg ${phase.color} flex items-center justify-center`}>
                        <phase.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-primary uppercase">Fase {phase.number}</span>
                        </div>
                        <h3 className="font-semibold text-foreground">{phase.title}</h3>
                        <p className="text-sm text-muted-foreground">{phase.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-6 pt-4">
                      {phase.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground mb-2">{step.title}</h4>
                            {step.description && (
                              <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                            )}
                            {step.items && (
                              <ul className="space-y-1">
                                {step.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                                    <ChevronRight className="w-3 h-3 text-primary" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {/* Academic Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="border-border/50 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle>{academicStructure.title}</CardTitle>
                  <CardDescription>{academicStructure.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {academicStructure.levels.map((level, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border/50 bg-muted/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center">
                        <level.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">{level.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{level.description}</p>
                    <div className="space-y-1">
                      <span className="text-xs font-medium text-primary uppercase">Ejemplos:</span>
                      {level.examples.map((example, i) => (
                        <p key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {example}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Pricing Configuration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-border/50 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-accent/20 to-primary/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle>{pricingGuide.title}</CardTitle>
                  <CardDescription>{pricingGuide.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {pricingGuide.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
