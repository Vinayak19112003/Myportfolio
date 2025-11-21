import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-foreground via-foreground to-primary/80 bg-clip-text text-transparent"
            data-testid="text-about-heading"
          >
            Professional Identity
          </motion.h2>
          
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
            <motion.div 
              className="p-6 rounded-lg bg-primary/5 border border-primary/20 backdrop-blur-sm hover-elevate"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              data-testid="text-about-description-1"
            >
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p>
                  I am a <span className="text-foreground font-semibold">Modern AI-Augmented Developer & Solutions Architect</span>.
                  I focus on designing real-world systems using AI, automation, and logic.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm hover-elevate"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              data-testid="text-about-description-2"
            >
              <p>
                I don't rely on syntax memorization – I use <span className="text-foreground font-semibold">AI as a development partner</span> to build fast and efficiently.
                I specialize in <span className="text-primary font-semibold">orchestrating solutions</span>, integrating APIs, and turning ideas into working products.
              </p>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl font-semibold text-primary pt-4 text-center animate-pulse-subtle"
              data-testid="text-about-tagline"
            >
              ✨ I build real solutions using AI + Logic + Prompt Engineering.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
