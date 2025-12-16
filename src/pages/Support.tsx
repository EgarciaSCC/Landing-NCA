import { motion } from "framer-motion";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Link, useNavigate } from "react-router-dom";
import {
  HelpCircle,
  FileText,
  Mail,
  Activity,
  Search,
  BookOpen,
  MessageCircle,
  Phone,
  CheckCircle,
  AlertTriangle,
  XCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const guideArticles = [
  {
    title: "Configuración del Módulo Administrativo",
    description: "Aprende a configurar colegios, sedes, programas y certificaciones",
    href: "/support/guia-modulo-administrativo"
  },
  {
   title: "Creación de Estructura Académica",
   description: "Configura niveles, grados, capacidades y valores académicos",
   href: "/soporte/guia-estructura-academica"
  }
];

const faqItems = [
  {
    question: "¿Cómo puedo consultar las sedes que están sin estructura académica?",
    answer: "Al acceder a la vista de lista de colegios con un usuario admin, puedes visualizar la lista de colegios y dentro de ellos sus sedes. Si la sede tiene el icono de warning activo, quiere decir que no tiene una estructura académica creada o le falta diligenciar información."
  },
  {
    question: "¿Cómo creo un nuevo colegio en la plataforma?",
    answer: "Desde el módulo administrativo, accede a la sección 'Colegios' y haz clic en 'Agregar Colegio'. Completa los datos requeridos como nombre, NIT, dirección y datos de contacto, luego guarda los cambios."
  },
  {
    question: "¿Cómo agrego una nueva sede a un colegio existente?",
    answer: "Ingresa al colegio desde la lista de colegios, ve a la pestaña 'Sedes' y selecciona 'Agregar Sede'. Ingresa el nombre, dirección y teléfono de la sede, y confirma la creación."
  },
  {
    question: "¿Cómo configuro los niveles académicos de una sede?",
    answer: "Accede a la sede desde el módulo administrativo, ve a 'Estructura Académica' y selecciona 'Agregar Nivel'. Puedes crear niveles como Preescolar, Primaria, Secundaria, etc."
  },
  {
    question: "¿Cómo creo grados dentro de un nivel académico?",
    answer: "Dentro de la vista del nivel académico, haz clic en 'Agregar Grado'. Asigna un nombre al grado (ej: Primero, Segundo), define la capacidad máxima de estudiantes y el valor de la matrícula."
  },
  {
    question: "¿Cómo modifico el cupo o capacidad de un grado?",
    answer: "En la estructura académica de la sede, selecciona el grado que deseas modificar, haz clic en 'Editar' y actualiza el campo de capacidad máxima con el nuevo valor."
  },
  {
    question: "¿Cómo configuro el valor de matrícula para cada grado?",
    answer: "Al crear o editar un grado, encontrarás el campo 'Valor del Grado' donde puedes ingresar el costo de la matrícula. Este valor se utilizará para la gestión de pagos."
  },
  {
    question: "¿Cómo matriculo un estudiante en un grado específico?",
    answer: "Ve al módulo de matrículas, selecciona 'Nueva Matrícula', busca o crea el estudiante, selecciona la sede, nivel y grado correspondiente, y completa el proceso de inscripción."
  },
  {
    question: "¿Cómo consulto los estudiantes matriculados en un grado?",
    answer: "Desde el módulo académico, selecciona la sede y el grado. Verás la lista completa de estudiantes matriculados con su información básica y estado de matrícula."
  },
  {
    question: "¿Cómo genero un reporte de estudiantes por sede?",
    answer: "Accede al módulo de reportes, selecciona 'Reportes Académicos', elige la sede y el tipo de reporte que necesitas. Puedes exportar en PDF o Excel."
  },
  {
    question: "¿Cómo registro un pago de matrícula?",
    answer: "En el módulo de pagos, busca al estudiante, selecciona 'Registrar Pago', elige el concepto (matrícula, pensión, etc.), ingresa el monto y el método de pago."
  },
  {
    question: "¿Cómo consulto el estado de pagos de un estudiante?",
    answer: "Busca al estudiante en el sistema, accede a su perfil y ve a la pestaña 'Financiero'. Allí verás el historial de pagos, saldos pendientes y estado general."
  },
  {
    question: "¿Cómo asigno docentes a un grado?",
    answer: "En el módulo de gestión académica, selecciona el grado, ve a 'Asignación de Docentes' y selecciona los profesores que dictarán clases en ese grado."
  },
  {
    question: "¿Cómo creo el horario de clases para un grado?",
    answer: "Accede al módulo de horarios, selecciona la sede y el grado, utiliza la interfaz de calendario para asignar materias, docentes y franjas horarias."
  },
  {
    question: "¿Cómo registro calificaciones de los estudiantes?",
    answer: "En el módulo académico, selecciona el grado y la materia, haz clic en 'Ingreso de Notas', selecciona el período y registra las calificaciones de cada estudiante."
  },
  {
    question: "¿Cómo genero boletines de calificaciones?",
    answer: "Ve a reportes académicos, selecciona 'Boletines', elige el período, grado y estudiantes. Puedes generar boletines individuales o masivos en formato PDF."
  },
  {
    question: "¿Cómo registro la asistencia de los estudiantes?",
    answer: "En el módulo de asistencia, selecciona la fecha, el grado y marca la asistencia, inasistencia o tardanza de cada estudiante. Puedes agregar observaciones."
  },
  {
    question: "¿Cómo consulto el historial de asistencia de un estudiante?",
    answer: "Busca al estudiante, accede a su perfil y ve a la pestaña 'Asistencia'. Verás el resumen por período y el detalle de cada día con sus observaciones."
  },
  {
    question: "¿Cómo configuro los períodos académicos del año?",
    answer: "En configuración académica, accede a 'Períodos', haz clic en 'Nuevo Período', define las fechas de inicio y fin, y el peso porcentual de cada período."
  },
  {
    question: "¿Cómo cambio de año escolar y promuevo estudiantes?",
    answer: "Al final del año, ve a 'Gestión de Promoción', selecciona el grado, revisa los estudiantes aprobados y usa la opción de promoción masiva para pasarlos al siguiente grado."
  }
];

const helpCategories = [
  {
    icon: BookOpen,
    title: "Guías de Inicio",
    description: "Aprende a configurar y usar NCA desde cero",
    articles: 2
  },
  {
    icon: HelpCircle,
    title: "Preguntas Frecuentes",
    description: "Respuestas a las dudas más comunes",
    articles: 20
  },
  {
    icon: FileText,
    title: "Tutoriales",
    description: "Videos y guías paso a paso",
    articles: 12
  },
  {
    icon: MessageCircle,
    title: "Comunidad",
    description: "Conecta con otros usuarios de NCA",
    articles: 45
  }
];

const documentationSections = [
  { title: "Manual de Usuario", description: "Guía completa del sistema", icon: FileText },
  { title: "API Reference", description: "Documentación técnica para desarrolladores", icon: BookOpen },
  { title: "Integraciones", description: "Conecta NCA con otras herramientas", icon: Activity },
  { title: "Changelog", description: "Historial de actualizaciones y mejoras", icon: CheckCircle }
];

const systemStatus = [
  { service: "Plataforma Principal", status: "operational", uptime: "99.9%" },
  { service: "Base de Datos", status: "operational", uptime: "99.8%" },
  { service: "API", status: "operational", uptime: "99.9%" },
  { service: "Servicios de Email", status: "operational", uptime: "99.7%" },
  { service: "Almacenamiento", status: "operational", uptime: "99.9%" }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "operational":
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case "degraded":
      return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    case "down":
      return <XCircle className="w-5 h-5 text-red-500" />;
    default:
      return <CheckCircle className="w-5 h-5 text-green-500" />;
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "operational":
      return "Operativo";
    case "degraded":
      return "Degradado";
    case "down":
      return "Fuera de línea";
    default:
      return "Operativo";
  }
};

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isGuidesModalOpen, setIsGuidesModalOpen] = useState(false);
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryTitle: string) => {
    if (categoryTitle === "Guías de Inicio") {
      setIsGuidesModalOpen(true);
      } else if (categoryTitle === "Preguntas Frecuentes") {
          setIsFaqModalOpen(true);
          setExpandedFaq(null);
      } else if (categoryTitle === "Tutoriales") {
          navigate("/Support/tutoriales");
      }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              Centro de <span className="text-primary">Soporte</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Encuentra respuestas, accede a documentación y obtén la ayuda que necesitas
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-xl mx-auto relative"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar en el centro de ayuda..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-full border-primary/20 focus:border-primary"
              />
            </motion.div>
          </div>
        </section>

        {/* Help Center */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Centro de Ayuda</h2>
              <p className="text-muted-foreground">Explora nuestras categorías de ayuda</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {helpCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleCategoryClick(category.title)}
                >
                  <Card className="h-full hover:shadow-lg transition-all cursor-pointer group border-border/50 hover:border-primary/30">
                    <CardHeader className="text-center">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <category.icon className="w-7 h-7 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <span className="text-sm text-primary font-medium">{category.articles} artículos</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Guides Modal */}
            <Dialog open={isGuidesModalOpen} onOpenChange={setIsGuidesModalOpen}>
              <DialogContent className="sm:max-w-lg bg-background">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Guías de Inicio
                  </DialogTitle>
                  <DialogDescription>
                    Explora nuestras guías para comenzar a usar NCA
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-3 mt-4">
                  {guideArticles.map((article, index) => (
                    <div
                      key={article.title}
                      className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-muted/30 transition-all"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{article.title}</h4>
                          <p className="text-sm text-muted-foreground">{article.description}</p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => {
                          setIsGuidesModalOpen(false);
                          navigate(article.href);
                        }}
                        className="gap-1"
                      >
                        Ver artículo
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>

            {/* FAQ Modal */}
            <Dialog open={isFaqModalOpen} onOpenChange={setIsFaqModalOpen}>
              <DialogContent className="sm:max-w-2xl bg-background max-h-[80vh] overflow-hidden flex flex-col">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    Preguntas Frecuentes
                  </DialogTitle>
                  <DialogDescription>
                    Encuentra respuestas a las dudas más comunes sobre la gestión académica
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-2 mt-4 overflow-y-auto pr-2 flex-1">
                  {faqItems.map((faq, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-border/50 hover:border-primary/30 transition-all overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs shrink-0">
                            {index + 1}
                          </div>
                          <span className="font-medium text-foreground text-sm">{faq.question}</span>
                        </div>
                        <ArrowRight className={`w-4 h-4 text-muted-foreground transition-transform shrink-0 ml-2 ${expandedFaq === index ? 'rotate-90' : ''}`} />
                      </button>
                      {expandedFaq === index && (
                        <div className="px-4 pb-4 pt-0">
                          <div className="pl-10 text-sm text-muted-foreground bg-muted/20 p-3 rounded-lg">
                            {faq.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>

          </div>
        </section>

        {/* Documentation */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Documentación</h2>
              <p className="text-muted-foreground">Recursos técnicos y manuales detallados</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {documentationSections.map((doc, index) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all cursor-pointer group border-border/50 hover:border-primary/30">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <doc.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{doc.title}</CardTitle>
                        <CardDescription>{doc.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Contacto</h2>
              <p className="text-muted-foreground">¿Necesitas ayuda personalizada? Contáctanos</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full border-border/50">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Email</CardTitle>
                    <CardDescription>Respuesta en 24-48 horas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:soporte@ncasoft.com" className="text-primary hover:underline">
                      soporte@ncasoft.com
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="text-center h-full border-border/50">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Teléfono</CardTitle>
                    <CardDescription>Lun-Vie: 9:00 - 18:00</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:+525512345678" className="text-primary hover:underline">
                      +52 55 1234 5678
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="text-center h-full border-border/50">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Chat en Vivo</CardTitle>
                    <CardDescription>Disponible en horario laboral</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm">
                      Iniciar Chat
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* System Status */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Estado del Sistema</h2>
              <p className="text-muted-foreground">Monitoreo en tiempo real de nuestros servicios</p>
              <div className="mt-4 inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Todos los sistemas operativos</span>
              </div>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <Card className="border-border/50">
                <CardContent className="p-0">
                  {systemStatus.map((item, index) => (
                    <motion.div
                      key={item.service}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex items-center justify-between p-4 ${
                        index !== systemStatus.length - 1 ? "border-b border-border/50" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {getStatusIcon(item.status)}
                        <span className="font-medium text-foreground">{item.service}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">Uptime: {item.uptime}</span>
                        <span className="text-sm font-medium text-green-600">
                          {getStatusText(item.status)}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Support;