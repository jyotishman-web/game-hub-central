import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

const Hero = () => (
  <section className="gradient-hero py-16 md:py-24 text-center relative overflow-hidden">
    {/* Subtle grid overlay */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: "linear-gradient(hsl(185 80% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(185 80% 55%) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }} />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-3 mb-6"
      >
        <Gamepad2 className="w-10 h-10 text-primary" />
        <h1 className="text-4xl md:text-6xl font-bold font-display gradient-text">
          Game Garage
        </h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
      >
        Play free HTML games instantly — no downloads, no installs.
      </motion.p>
    </div>
  </section>
);

export default Hero;
