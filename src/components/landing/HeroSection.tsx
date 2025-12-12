import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Users, BarChart3, Zap } from "lucide-react";
import ncaHeroes from "@/assets/nca-heroes.png";

const stats = [
  { icon: Users, value: "50+", label: "Instituciones" },
  { icon: BarChart3, value: "100K+", label: "Estudiantes" },
  { icon: Shield, value: "99.9%", label: "Uptime" },
  { icon: Zap, value: "24/7", label: "Soporte" },
];

export function HeroSection() {

  const scrollToContact = () => {
            const el = document.getElementById("contact");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bb-0 overflow-hidden pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-purple-bg opacity-95" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-nca-orange/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-nca-yellow/20 rounded-full blur-3xl" />
      
      {/* Animated shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-20 h-20 border-4 border-primary-foreground/20 rounded-full"
        animate={{ scale: [1, 1.2, 1], rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-nca-orange/40 rounded-lg"
        animate={{ y: [-20, 20, -20], rotate: [0, 45, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto px-4 lg:px-8 py-12 pb-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-nca-yellow animate-pulse" />
              <span className="text-sm font-medium text-white">
                Transformando la gestión académica
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight mb-6"
            >
              Algo está a punto de{" "}
              <span className="relative">
                <span className="relative z-10 text-nca-yellow">cambiar</span>
                <motion.span
                  className="absolute bottom-2 left-0 right-0 h-3 bg-nca-orange/40 -z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>{" "}
              en la vida escolar
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Gestión académica integral con módulos especializados. Admisiones 100% virtuales, 
              seguimiento de rutas en tiempo real, pagos digitales y mucho más.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
              variant="accent"
              size="lg"
              className="group"
              onClick={() => { scrollToContact();}}
              >
                Comenzar ahora
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
                {/*
                    Ver demostración
                    <Button variant="hero-outline" size="lg" className="group">
                                    <Play className="w-5 h-5 mr-1" />
                                    Ver demostración
                                  </Button>
                */}

            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-nca-yellow" />
                    <span className="text-2xl lg:text-3xl font-bold text-white">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-sm text-white/70">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Heroes Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative animate-float">
              <img
                src={ncaHeroes}
                alt="NCA Heroes - Tus aliados en la gestión académica"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
              {/* Glow effect behind heroes */}
              <div className="absolute inset-0 -z-10 bg-nca-orange/20 blur-3xl rounded-full" />
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -left-4 top-1/4 glass-card rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-orange-bg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Seguridad</p>
                  <p className="text-sm text-muted-foreground">Total garantizada</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -right-4 bottom-1/4 glass-card rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-warm-bg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">100% Virtual</p>
                  <p className="text-sm text-muted-foreground">Sin papeleos</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
