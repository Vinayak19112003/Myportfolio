import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full"
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        ></motion.div>
      </div>

      <motion.div
        className="max-w-5xl mx-auto text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-6 inline-block px-4 py-2 border border-primary/30 rounded-full bg-primary/5 backdrop-blur"
          animate={{ borderColor: ["rgba(0,0,0,0)", "rgba(192, 132, 205, 0.3)", "rgba(0,0,0,0)"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="text-xs font-mono text-primary">⚡ AI Research Lab Active</span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="block text-foreground">I experiment, build</span>
          <span className="block bg-gradient-to-r from-primary via-primary/70 to-primary/40 bg-clip-text text-transparent">and think using</span>
          <span className="block text-primary font-mono">Artificial Intelligence.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          AI is not my tool — <span className="text-primary font-semibold">AI is my collaborator.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
            data-testid="button-explore-lab"
          >
            <a href="#experiments">
              Explore My AI Lab
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
