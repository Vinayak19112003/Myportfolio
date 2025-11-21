import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const explorations = [
  "Autonomous AI agent workflows that learn & improve over time",
  "AI + Web3 interaction & decentralized intelligence systems",
  "Real-time AI data dashboards with predictive analytics",
  "AI-based Tekla automation for architecture & engineering",
  "Multi-model prompt systems combining Claude + Gemini + GPT",
];

export default function VisionSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-4"
          data-testid="text-vision-heading"
        >
          <span className="text-muted-foreground">🔭 </span>
          What I Want to Explore Next
        </motion.h2>

        <p className="text-lg text-muted-foreground mb-12">
          The future direction of my AI research & experimentation
        </p>

        <motion.div className="space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {explorations.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-lg border border-primary/20 bg-primary/5 backdrop-blur-sm hover-elevate transition-all group cursor-pointer"
              data-testid={`item-vision-${index}`}
            >
              <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
              <p className="text-foreground font-medium">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
