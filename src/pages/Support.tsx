import { motion } from "framer-motion";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
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
  XCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const helpCategories = [
  {
    icon: BookOpen,
    title: "Guías de Inicio",
    description: "Aprende a configurar y usar NCA desde cero",
    articles: 12
  },
  {
    icon: HelpCircle,
    title: "Preguntas Frecuentes",
    description: "Respuestas a las dudas más comunes",
    articles: 28
  },
  {
    icon: FileText,
    title: "Tutoriales",
    description: "Videos y guías paso a paso",
    articles: 15
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

  return (
    <div role="support" className="min-h-screen bg-background overflow-x-hidden">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
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
