import { motion } from "framer-motion";
import { 
  GraduationCap,
  Layers,
  Users,
  DollarSign,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Building2,
  Plus
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
    title: "Acceder a Niveles y Grados",
    description: "Navega a la sección de estructura académica desde el panel del colegio",
    icon: Building2,
    color: "bg-primary",
    steps: [
      {
        title: "Seleccionar el Colegio",
        description: "Desde el panel principal, selecciona el colegio al que deseas agregar la estructura académica."
      },
      {
        title: "Acceder a la Sede",
        description: "Elige la sede correspondiente utilizando las pestañas (Sede Norte, Sede Sur, etc.)."
      },
      {
        title: "Ir a Niveles y Grados",
        description: "Haz clic en la pestaña 'Niveles y grados' para acceder a la configuración de estructura académica."
      }
    ]
  },
  {
    id: "fase-2",
    number: 2,
    title: "Crear Nivel Académico",
    description: "Define los niveles principales de tu estructura educativa",
    icon: Layers,
    color: "bg-secondary",
    steps: [
      {
        title: "Iniciar Creación",
        description: "Haz clic en el botón 'Crear Nivel académico' para abrir el formulario de creación."
      },
      {
        title: "Información del Nivel",
        items: [
          "Nombre del nivel académico (Ej: Primaria, Secundaria, Preescolar)",
          "Periodo académico (Ej: 5 años, 3 años)",
          "Sede asociada al nivel",
          "Valor del nivel académico (Ej: $500.000)"
        ]
      },
      {
        title: "Guardar Nivel",
        description: "Una vez completada la información, el nivel aparecerá en la tabla de 'Nivel académico' con sus datos y opciones de editar/eliminar."
      }
    ]
  },
  {
    id: "fase-3",
    number: 3,
    title: "Crear Grados Académicos",
    description: "Agrega los grados que pertenecen a cada nivel académico",
    icon: GraduationCap,
    color: "bg-accent",
    steps: [
      {
        title: "Iniciar Creación de Grado",
        description: "Haz clic en el botón 'Grado académico' para abrir el formulario de creación."
      },
      {
        title: "Seleccionar Sedes",
        items: [
          "Marca las sedes donde aplicará este grado",
          "Puedes seleccionar múltiples sedes (Ej: Sede Norte, Sede Sur, Sede Centro)"
        ]
      },
      {
        title: "Seleccionar Nivel Académico",
        description: "Despliega el selector 'Seleccionar nivel académico' y elige el nivel al que pertenecerá el grado. Puedes seleccionar todos o elegir específicos."
      },
      {
        title: "Información del Grado",
        items: [
          "Nombre del grado académico (Ej: 1er grado, 2do grado, Jardín)",
          "Capacidad máxima de estudiantes (Ej: 30 estudiantes)",
          "Valor del grado académico (Ej: $500.000)"
        ]
      },
      {
        title: "Guardar Grado",
        description: "Haz clic en 'Crear grado académico'. El grado aparecerá como subdivisión dentro del nivel correspondiente."
      }
    ]
  },
  {
    id: "fase-4",
    number: 4,
    title: "Gestionar Estructura",
    description: "Visualiza y administra la estructura académica creada",
    icon: Users,
    color: "bg-primary",
    steps: [
      {
        title: "Visualizar Niveles",
        description: "La tabla de 'Nivel académico' muestra todos los niveles con: Nombre, Periodo académico, Sede, Valor y Acciones."
      },
      {
        title: "Expandir Grados",
        description: "Haz clic en el ícono de expansión junto al nivel para ver los grados asociados con: Nombre, Capacidad Max estudiantes, Valor y Acciones."
      },
      {
        title: "Acciones Disponibles",
        items: [
          "Editar nivel o grado (ícono de lápiz)",
          "Eliminar nivel o grado (ícono de papelera)",
          "Los cambios se reflejan inmediatamente en el sistema"
        ]
      }
    ]
  }
];

const structureExample = {
  title: "Ejemplo de Estructura",
  description: "Así se visualiza la jerarquía Nivel → Grado en el sistema",
  levels: [
    {
      name: "Primaria",
      period: "5 años",
      sede: "Colegio San José - Sede Norte",
      value: "$500.000",
      grades: [
        { name: "1er grado", capacity: 30, value: "$500.000" },
        { name: "2do grado", capacity: 30, value: "$500.000" },
        { name: "3er grado", capacity: 28, value: "$520.000" }
      ]
    }
  ]
};

const tips = [
  {
    title: "Planifica primero",
    description: "Define todos los niveles antes de crear los grados para una estructura organizada."
  },
  {
    title: "Capacidades realistas",
    description: "Establece capacidades máximas basadas en la infraestructura real de cada sede."
  },
  {
    title: "Valores consistentes",
    description: "Mantén una política de precios coherente entre niveles y grados similares."
  },
  {
    title: "Múltiples sedes",
    description: "Un mismo grado puede aplicar a varias sedes con diferentes niveles asociados."
  }
];

export function AcademicStructureGuide() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">Guía de Estructura Académica</Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Creación de Niveles y Grados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aprende a configurar la estructura académica de tu institución: niveles, grados, capacidades y valores
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
                  <span className="text-sm font-medium text-foreground mt-2 text-center max-w-[100px]">
                    {phase.title}
                  </span>
                </div>
                {index < phases.length - 1 && (
                  <div className="hidden md:block w-16 h-1 bg-border mx-2 relative top-[-12px]">
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

        {/* Structure Example */}
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
                  <CardTitle>{structureExample.title}</CardTitle>
                  <CardDescription>{structureExample.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              {structureExample.levels.map((level, index) => (
                <div key={index} className="border border-border/50 rounded-lg overflow-hidden">
                  {/* Level Row */}
                  <div className="flex items-center justify-between p-4 bg-muted/30">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Layers className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">{level.name}</span>
                        <span className="text-sm text-muted-foreground ml-4">{level.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-sm text-muted-foreground">{level.sede}</span>
                      <span className="font-medium text-foreground">{level.value}</span>
                    </div>
                  </div>
                  {/* Grades */}
                  <div className="divide-y divide-border/50">
                    {level.grades.map((grade, gradeIndex) => (
                      <div key={gradeIndex} className="flex items-center justify-between p-4 pl-16 bg-background">
                        <div className="flex items-center gap-4">
                          <div className="w-6 h-6 rounded bg-secondary/30 flex items-center justify-center">
                            <GraduationCap className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-foreground">{grade.name}</span>
                        </div>
                        <div className="flex items-center gap-8">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span>{grade.capacity} estudiantes</span>
                          </div>
                          <span className="font-medium text-foreground">{grade.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Tips */}
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
                  <CardTitle>Consejos para la Configuración</CardTitle>
                  <CardDescription>Mejores prácticas para estructurar tu institución</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {tips.map((tip, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border/50 bg-muted/20">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground mb-1">{tip.title}</h4>
                        <p className="text-sm text-muted-foreground">{tip.description}</p>
                      </div>
                    </div>
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
