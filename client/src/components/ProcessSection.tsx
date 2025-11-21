import { motion } from "framer-motion";
import { Lightbulb, MessageSquare, Zap, CheckCircle, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "IDEA",
    description: "Define problem & desired outcome",
    color: "from-blue-500/40",
  },
  {
    icon: MessageSquare,
    title: "STRUCTURED PROMPT",
    description: "Architect the AI conversation",
    color: "from-cyan-500/40",
  },
  {
    icon: Zap,
    title: "AI PROTOTYPE",
    description: "Generate & iterate with AI",
    color: "from-primary/40",
  },
  {
    icon: CheckCircle,
    title: "LOGIC TEST",
    description: "Validate & refine results",
    color: "from-green-500/40",
  },
  {
    icon: Rocket,
    title: "DEPLOY",
    description: "Launch to production",
    color: "from-purple-500/40",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-4 text-center"
          data-testid="text-process-heading"
        >
          <span className="text-muted-foreground">📈 </span>
          How I Build with AI
        </motion.h2>

        <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
          A structured workflow for turning ideas into intelligent solutions
        </p>

        <div className="grid md:grid-cols-5 gap-4 md:gap-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
              data-testid={`card-process-${index}`}
            >
              <div className={`p-6 rounded-lg bg-gradient-to-br ${step.color} to-transparent border border-primary/20 backdrop-blur-sm h-full flex flex-col items-center text-center hover-elevate transition-all`}>
                <step.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-mono text-sm font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-primary to-transparent"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
