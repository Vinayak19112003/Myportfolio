import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-testid="text-about-heading">
            Professional Identity
          </h2>
          
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
            <p data-testid="text-about-description-1">
              I am a <span className="text-foreground font-semibold">Modern AI-Augmented Developer & Solutions Architect</span>.
              I focus on designing real-world systems using AI, automation, and logic.
            </p>
            
            <p data-testid="text-about-description-2">
              I don't rely on syntax memorization – I use <span className="text-foreground font-semibold">AI as a development partner</span> to build fast and efficiently.
              I specialize in <span className="text-foreground font-semibold">orchestrating solutions</span>, integrating APIs, and turning ideas into working products.
            </p>
            
            <p className="text-lg md:text-xl font-medium text-primary pt-4" data-testid="text-about-tagline">
              I build real solutions using AI + Logic + Prompt Engineering.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
