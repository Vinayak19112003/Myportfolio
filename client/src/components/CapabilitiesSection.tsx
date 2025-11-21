import { motion } from "framer-motion";
import { Settings, Network, Code2, BarChart3, Zap, Brain } from "lucide-react";

const capabilities = [
  { icon: Brain, label: "AI-Assisted Development", description: "ChatGPT, Claude, Gemini integration" },
  { icon: Zap, label: "Prompt Engineering & Logic Design", description: "Architecting AI conversations" },
  { icon: Network, label: "Selenium / Playwright Automation", description: "Human-like browser automation" },
  { icon: Settings, label: "n8n Workflows & API Integration", description: "Enterprise automation pipelines" },
  { icon: BarChart3, label: "Data Analysis & Visualization", description: "Dashboards & real-time insights" },
  { icon: Code2, label: "Next.js + Tailwind Development", description: "Full-stack web applications" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export default function CapabilitiesSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-4 text-center"
          data-testid="text-capabilities-heading"
        >
          <span className="text-muted-foreground">⚙️ </span>
          Capabilities
        </motion.h2>

        <p className="text-center text-lg text-muted-foreground mb-16">
          The tools & methodologies I use to build AI-powered solutions
        </p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              className="p-6 rounded-lg border border-primary/20 bg-primary/5 backdrop-blur-sm hover-elevate transition-all cursor-default"
              data-testid={`card-capability-${index}`}
            >
              <cap.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2" data-testid={`text-cap-label-${index}`}>
                {cap.label}
              </h3>
              <p className="text-sm text-muted-foreground" data-testid={`text-cap-desc-${index}`}>
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
