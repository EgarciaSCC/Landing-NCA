import { motion } from "framer-motion";
import { 
  FileText,
  Type,
  Hash,
  Calendar,
  List,
  FolderOpen,
  Layers,
  CheckSquare,
  Circle,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Save,
  Eye,
  Move
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import formsHomepage from "@/assets/support/forms-homepage.png";
import formsCreating from "@/assets/support/forms-creating.png";
import formsFirstTexts from "@/assets/support/forms-first-texts.png";
import formsTextsRadio from "@/assets/support/forms-texts-radio.png";
import formsFolders from "@/assets/support/forms-folders.png";
import formsSections from "@/assets/support/forms-sections.png";
import formsSaveModal from "@/assets/support/forms-save-modal.png";
import formsCreated from "@/assets/support/forms-created.png";

const phases = [
  {
    id: "fase-1",
    number: 1,
    title: "Acceder a Formularios",
    description: "Navega al módulo de formularios desde el menú lateral",
    icon: FileText,
    color: "bg-primary",
    image: formsHomepage,
    steps: [
      {
        title: "Ir al Módulo de Formularios",
        description: "Desde el menú lateral, haz clic en 'Formularios' para expandir las opciones."
      },
      {
        title: "Opciones Disponibles",
        items: [
          "Crear formulario: Para diseñar un nuevo formulario desde cero",
          "Administrador de formularios: Para gestionar los formularios existentes"
        ]
      },
      {
        title: "Plantillas Predefinidas",
        description: "También puedes usar plantillas como 'Form de Admisiones' o 'Form de cobros y pagos' para agilizar la creación."
      }
    ]
  },
  {
    id: "fase-2",
    number: 2,
    title: "Controles Disponibles",
    description: "Conoce los tipos de campos que puedes agregar a tu formulario",
    icon: Type,
    color: "bg-secondary",
    image: formsCreating,
    steps: [
      {
        title: "Tipos de Campos de Texto",
        items: [
          "Texto normal: Campo de texto corto para nombres, títulos, etc.",
          "Tipo Valor: Para ingresar valores monetarios",
          "Tipo numérico: Solo acepta números",
          "Tipo fecha: Selector de calendario",
          "Texto largo: Para descripciones extensas"
        ]
      },
      {
        title: "Tipos de Selección",
        items: [
          "Acordión: Desplegable con opciones",
          "Estados: Indicadores visuales (Ej: Validado, Error)",
          "Múltiples opciones: Checkboxes para selección múltiple",
          "Escoger 1 opción: Radio buttons para selección única"
        ]
      },
      {
        title: "Organización",
        items: [
          "Carpetas: Agrupa campos relacionados en pestañas",
          "Secciones: Divide el contenido dentro de carpetas",
          "Text title: Añade títulos y encabezados",
          "Vista previa: Visualiza cómo quedará el formulario"
        ]
      }
    ]
  },
  {
    id: "fase-3",
    number: 3,
    title: "Agregar Campos",
    description: "Arrastra y configura los campos en tu formulario",
    icon: List,
    color: "bg-accent",
    image: formsTextsRadio,
    steps: [
      {
        title: "Agregar un Campo",
        description: "Haz clic en el tipo de control deseado desde la barra superior. El campo aparecerá en el área de diseño."
      },
      {
        title: "Configurar el Campo",
        items: [
          "Edita el título de la pregunta haciendo clic en 'Escribir pregunta aquí'",
          "Para campos de opción, agrega las respuestas (Ej: Sí, No)",
          "Usa los íconos de acción para: Añadir (+), Eliminar, Editar, Duplicar, Mover"
        ]
      },
      {
        title: "Ejemplo Práctico",
        description: "Para la pregunta '¿Usa anteojos?', agrega un campo de 'Escoger 1 opción' con opciones Sí y No."
      }
    ]
  },
  {
    id: "fase-4",
    number: 4,
    title: "Organizar con Carpetas",
    description: "Agrupa campos relacionados en pestañas para mejor organización",
    icon: FolderOpen,
    color: "bg-primary",
    image: formsFolders,
    steps: [
      {
        title: "Crear Carpetas",
        description: "Haz clic en 'Carpetas' desde los controles. Se crearán pestañas como 'Carpeta 1', 'Carpeta 2'."
      },
      {
        title: "Renombrar Carpetas",
        description: "Haz clic en el nombre de la carpeta para editarlo (Ej: 'Datos Personales', 'Información Médica')."
      },
      {
        title: "Gestionar Carpetas",
        items: [
          "Usa el ícono + para agregar más carpetas",
          "Usa el ícono de papelera para eliminar carpetas",
          "Cada carpeta tiene su propia barra de controles para agregar campos"
        ]
      }
    ]
  },
  {
    id: "fase-5",
    number: 5,
    title: "Crear Secciones",
    description: "Subdivide las carpetas en secciones temáticas",
    icon: Layers,
    color: "bg-secondary",
    image: formsSections,
    steps: [
      {
        title: "Agregar Secciones",
        description: "Dentro de una carpeta, haz clic en 'Secciones' para crear divisiones internas."
      },
      {
        title: "Configurar Secciones",
        items: [
          "Las secciones aparecen como 'Sección 1', 'Sección 2', etc.",
          "Cada sección puede contener múltiples campos",
          "Los campos dentro de secciones se organizan en columnas"
        ]
      },
      {
        title: "Mover Elementos",
        description: "Usa el ícono de flecha (→) para mover campos entre carpetas y secciones. Aparecerá un árbol jerárquico para seleccionar el destino."
      }
    ]
  },
  {
    id: "fase-6",
    number: 6,
    title: "Guardar y Asignar",
    description: "Finaliza el formulario y asígnalo a un módulo",
    icon: Save,
    color: "bg-accent",
    image: formsSaveModal,
    steps: [
      {
        title: "Guardar Formulario",
        description: "Haz clic en 'Guardar y finalizar formulario' cuando hayas terminado el diseño."
      },
      {
        title: "Asignar a Módulo (Opcional)",
        items: [
          "Selecciona el módulo donde se usará el formulario",
          "Opciones: Admisiones, Rutas, Pagos, etc.",
          "Esto permite encontrar el formulario fácilmente en cada módulo"
        ]
      },
      {
        title: "Confirmar",
        description: "Haz clic en 'Guardar' para finalizar. El formulario aparecerá en la tabla de 'Formularios creados'."
      }
    ]
  }
];

const controlTypes = [
  { name: "Texto normal", icon: Type, description: "Campo de texto corto" },
  { name: "Tipo Valor", icon: Hash, description: "Valores monetarios" },
  { name: "Tipo numérico", icon: Hash, description: "Solo números" },
  { name: "Tipo fecha", icon: Calendar, description: "Selector de fecha" },
  { name: "Acordión", icon: List, description: "Lista desplegable" },
  { name: "Texto largo", icon: FileText, description: "Texto extenso" },
  { name: "Carpetas", icon: FolderOpen, description: "Agrupa en pestañas" },
  { name: "Secciones", icon: Layers, description: "Divide contenido" },
  { name: "Múltiples opciones", icon: CheckSquare, description: "Checkboxes" },
  { name: "Escoger 1 opción", icon: Circle, description: "Radio buttons" },
  { name: "Vista previa", icon: Eye, description: "Ver resultado" },
];

const useCases = [
  {
    title: "Formulario de Admisiones",
    description: "Captura datos del estudiante y acudientes para el proceso de matrícula",
    fields: ["Datos personales", "Información médica", "Documentos requeridos", "Datos del acudiente"]
  },
  {
    title: "Formulario de Pagos",
    description: "Define los conceptos de cobro y sus valores",
    fields: ["Tipo de pago", "Valor", "Fecha límite", "Descuentos aplicables"]
  },
  {
    title: "Cuestionarios",
    description: "Crea encuestas y evaluaciones personalizadas",
    fields: ["Preguntas de opción múltiple", "Preguntas abiertas", "Escalas de valoración"]
  },
  {
    title: "Formulario de Rutas",
    description: "Registra información de transporte escolar",
    fields: ["Dirección de recogida", "Horarios", "Contacto de emergencia", "Observaciones"]
  }
];

const tips = [
  {
    title: "Usa carpetas para agrupar",
    description: "Organiza campos relacionados en carpetas para formularios más claros."
  },
  {
    title: "Nombres descriptivos",
    description: "Usa títulos claros para preguntas y secciones que el usuario entienda fácilmente."
  },
  {
    title: "Vista previa frecuente",
    description: "Revisa cómo se verá el formulario antes de guardarlo."
  },
  {
    title: "Asigna al módulo correcto",
    description: "Vincular el formulario a un módulo facilita encontrarlo después."
  }
];

export function DynamicFormsGuide() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">Guía de Formularios Dinámicos</Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Creación de Formularios Personalizados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aprende a diseñar formularios dinámicos para admisiones, pagos, cuestionarios y más
          </p>
        </motion.div>

        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 overflow-x-auto pb-4"
        >
          <div className="flex items-center justify-center gap-2 md:gap-0 min-w-max px-4">
            {phases.map((phase, index) => (
              <div key={phase.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${phase.color} flex items-center justify-center text-white font-bold text-sm md:text-lg`}>
                    {phase.number}
                  </div>
                  <span className="text-xs md:text-sm font-medium text-foreground mt-2 text-center max-w-[70px] md:max-w-[100px]">
                    {phase.title}
                  </span>
                </div>
                {index < phases.length - 1 && (
                  <div className="w-8 md:w-12 h-1 bg-border mx-1 md:mx-2 relative top-[-12px]">
                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Available Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="border-border/50 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <List className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle>Controles Disponibles</CardTitle>
                  <CardDescription>Tipos de campos que puedes agregar a tus formularios</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {controlTypes.map((control, index) => (
                  <div key={index} className="p-3 rounded-lg border border-border/50 bg-muted/20 text-center hover:border-primary/30 transition-colors">
                    <control.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <span className="text-sm font-medium text-foreground block">{control.name}</span>
                    <span className="text-xs text-muted-foreground">{control.description}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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
                      {/* Phase Image */}
                      {phase.image && (
                        <div className="rounded-lg overflow-hidden border border-border/50 mb-6">
                          <img 
                            src={phase.image} 
                            alt={phase.title} 
                            className="w-full h-auto"
                          />
                        </div>
                      )}
                      
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
                                  <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <ChevronRight className="w-3 h-3 text-primary flex-shrink-0 mt-1" />
                                    <span>{item}</span>
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

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="border-border/50 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-secondary/20 to-accent/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle>Ejemplos de Aplicabilidad</CardTitle>
                  <CardDescription>Casos de uso comunes para formularios dinámicos</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border/50 bg-muted/20">
                    <h4 className="font-semibold text-foreground mb-2">{useCase.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{useCase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {useCase.fields.map((field, fieldIndex) => (
                        <Badge key={fieldIndex} variant="outline" className="text-xs">
                          {field}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
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
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle>Consejos para Formularios Efectivos</CardTitle>
                  <CardDescription>Mejores prácticas para diseñar tus formularios</CardDescription>
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
