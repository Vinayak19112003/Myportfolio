import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12" data-testid="text-philosophy-heading">
            Philosophy
          </h2>

          <div className="relative">
            <Quote className="absolute -top-4 -left-4 h-12 w-12 text-primary/20" />
            <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-8 relative z-10" data-testid="text-philosophy-quote">
              I believe AI is not a tool — it is a co-developer.
            </blockquote>
          </div>

          <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            <p data-testid="text-philosophy-description-1">
              My goal is to <span className="text-foreground font-semibold">design</span> solutions and use AI to execute them efficiently.
            </p>
            <p data-testid="text-philosophy-description-2">
              I work faster than traditional developers because I think <span className="text-foreground font-semibold">structurally</span> and build <span className="text-foreground font-semibold">logically</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
