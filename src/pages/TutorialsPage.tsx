import { motion } from "framer-motion";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Play, 
  Users, 
  CreditCard, 
  UserSearch, 
  Bus, 
  Utensils,
  ShieldCheck,
  GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Tutorial {
  id: string;
  title: string;
  description: string;
  role: string;
  roleColor: string;
  icon: React.ComponentType<{ className?: string }>;
  youtubeUrl?: string;
  duration?: string;
}

const tutorials: Tutorial[] = [
  {
    id: "admisiones-padres",
    title: "Admisiones",
    description: "Aprende cómo realizar el proceso de admisión de tu hijo/a en la institución educativa",
    role: "Padres",
    roleColor: "bg-blue-500",
    icon: GraduationCap,
    youtubeUrl: "",
    duration: "Próximamente"
  },
  {
    id: "admisiones-admin",
    title: "Admisiones",
    description: "Gestiona y administra las solicitudes de admisión de nuevos estudiantes",
    role: "Admin",
    roleColor: "bg-purple-500",
    icon: GraduationCap,
    youtubeUrl: "",
    duration: "Próximamente"
  },
  {
    id: "pagos-admin",
    title: "Pagos",
    description: "Administra los pagos, genera reportes financieros y gestiona la cartera",
    role: "Admin",
    roleColor: "bg-purple-500",
    icon: CreditCard,
    youtubeUrl: "",
    duration: "Próximamente"
  },
  {
    id: "pagos-padres",
    title: "Pagos",
    description: "Realiza pagos de matrículas, pensiones y servicios adicionales",
    role: "Padres",
    roleColor: "bg-blue-500",
    icon: CreditCard,
    youtubeUrl: "",
    duration: "Próximamente"
  },
  {
    id: "consultar-estudiante-admin",
    title: "Consultar Estudiante",
    description: "Busca y consulta información detallada de cualquier estudiante",
    role: "Admin",
    roleColor: "bg-purple-500",
    icon: UserSearch,
    youtubeUrl: "",
    duration: "Próximamente"
  },
  {
    id: "consultar-estudiante-padre",
    title: "Consultar Estudiante",
    description: "Consulta la información académica y estado de tu hijo/a",
    role: "Padres",
    roleColor: "bg-blue-500",
    icon: UserSearch,
    youtubeUrl: "",
    duration: "Próximamente"
  },
  {
    id: "rutas-padre",
    title: "Rutas",
    description: "Visualiza las rutas de transporte y sigue el recorrido en tiempo real",
    role: "Padres",
    roleColor: "bg-blue-500",
    icon: Bus,
    youtubeUrl: "",
    duration: "Próximamente"
  },
  {
    id: "rutas-admin",
    title: "Rutas",
    description: "Configura y administra las rutas de transporte escolar",
    role: "Admin",
    roleColor: "bg-purple-500",
    icon: Bus,
    youtubeUrl: "",
    duration: "Próximamente"
  },
  {
    id: "rutas-coordinador",
    title: "Rutas",
    description: "Gestiona las rutas asignadas, conductores y horarios de recorrido",
    role: "Coordinador/a de Rutas",
    roleColor: "bg-green-500",
    icon: Bus,
    youtubeUrl: "",
    duration: "Próximamente"
  },
  {
    id: "combocard-padre",
    title: "ComboCard",
    description: "Consulta el saldo, realiza recargas y visualiza consumos de cafetería",
    role: "Padres",
    roleColor: "bg-blue-500",
    icon: Utensils,
    youtubeUrl: "",
    duration: "Próximamente"
  },
  {
    id: "combocard-admin",
    title: "ComboCard",
    description: "Administra el sistema de tarjetas, productos y reportes de cafetería",
    role: "Admin",
    roleColor: "bg-purple-500",
    icon: Utensils,
    youtubeUrl: "",
    duration: "Próximamente"
  },
  {
    id: "combocard-cafeteria",
    title: "ComboCard",
    description: "Procesa ventas, gestiona inventario y atiende a los estudiantes",
    role: "Cafetería",
    roleColor: "bg-orange-500",
    icon: Utensils,
    youtubeUrl: "",
    duration: "Próximamente"
  }
];

const TutorialsPage = () => {
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);

  const groupedTutorials = tutorials.reduce((acc, tutorial) => {
    const key = tutorial.title;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(tutorial);
    return acc;
  }, {} as Record<string, Tutorial[]>);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link to="/soporte">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Volver a Soporte
              </Button>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Play className="w-4 h-4" />
              <span className="text-sm font-medium">Video Tutoriales</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tutoriales <span className="text-primary">NCA</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aprende a utilizar todas las funcionalidades de la plataforma con nuestros videos paso a paso
            </p>
          </motion.div>

          {/* Role Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-sm text-muted-foreground">Padres</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-sm text-muted-foreground">Admin</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm text-muted-foreground">Coordinador/a</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-sm text-muted-foreground">Cafetería</span>
            </div>
          </motion.div>

          {/* Tutorials Grid by Category */}
          <div className="space-y-12">
            {Object.entries(groupedTutorials).map(([category, categoryTutorials], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  {categoryTutorials[0] && (() => {
                    const IconComponent = categoryTutorials[0].icon;
                    return (
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                    );
                  })()}
                  <h2 className="text-2xl font-bold text-foreground">{category}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryTutorials.map((tutorial, index) => (
                    <Card 
                      key={tutorial.id}
                      className="group hover:shadow-lg transition-all cursor-pointer border-border/50 hover:border-primary/30 overflow-hidden"
                      onClick={() => setSelectedTutorial(tutorial)}
                    >
                      {/* Video Thumbnail Area */}
                      <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                        {tutorial.youtubeUrl ? (
                          <iframe
                            src={tutorial.youtubeUrl}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <div className="text-center">
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/30 transition-colors">
                              <Play className="w-8 h-8 text-primary" />
                            </div>
                            <span className="text-sm text-muted-foreground">{tutorial.duration}</span>
                          </div>
                        )}
                        <Badge 
                          className={`absolute top-3 right-3 ${tutorial.roleColor} text-white border-0`}
                        >
                          {tutorial.role}
                        </Badge>
                      </div>

                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          {tutorial.title}
                          <span className="text-sm font-normal text-muted-foreground">
                            ({tutorial.role})
                          </span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="line-clamp-2">
                          {tutorial.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 text-center"
          >
            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-muted-foreground mb-4">
              Contáctanos y con gusto crearemos un tutorial personalizado para tu necesidad
            </p>
            <Link to="/soporte">
              <Button variant="outline" className="gap-2">
                Contactar Soporte
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TutorialsPage;
