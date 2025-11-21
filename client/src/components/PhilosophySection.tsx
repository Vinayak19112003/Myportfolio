import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const textVariants = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: custom * 0.1,
      ease: "easeOut",
    },
  }),
};

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12" data-testid="text-philosophy-heading">
            Philosophy
          </h2>

          <div className="relative mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute -top-8 -left-8 h-16 w-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-2xl"
            ></motion.div>
            <Quote className="absolute -top-4 -left-4 h-12 w-12 text-primary/30" />
            <motion.blockquote
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="text-2xl md:text-3xl font-light italic leading-relaxed mb-8 relative z-10 text-foreground"
              data-testid="text-philosophy-quote"
            >
              I believe AI is not a tool — <span className="text-primary font-semibold">it is a co-developer.</span>
            </motion.blockquote>
          </div>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              data-testid="text-philosophy-description-1"
            >
              My approach: <span className="text-foreground font-semibold">Design first, code second.</span> I focus on understanding the problem deeply, architecting solutions logically, and then using AI to accelerate execution. Every decision is rooted in logic, not just following frameworks.
            </motion.p>
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              data-testid="text-philosophy-description-2"
            >
              I'm faster than traditional developers because I: <span className="text-primary font-semibold">(1)</span> Think in systems & data flows, <span className="text-primary font-semibold">(2)</span> Write clear specifications before coding, <span className="text-primary font-semibold">(3)</span> Leverage AI for rapid prototyping & iteration.
            </motion.p>
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="text-sm text-muted-foreground italic"
              data-testid="text-philosophy-description-3"
            >
              The future belongs to developers who can orchestrate AI, not those who compete with it.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
