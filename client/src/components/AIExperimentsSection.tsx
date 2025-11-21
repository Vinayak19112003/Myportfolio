import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, TrendingUp, Database, Cpu, Network, Sparkles } from "lucide-react";

const experiments = [
  {
    icon: TrendingUp,
    title: "AI Trading Journal",
    description: "Intelligent trading system that learns patterns & generates insights",
    tech: ["Next.js", "Firebase", "Genkit AI", "Recharts"],
    accent: "from-cyan-500/30",
    status: "Active",
  },
  {
    icon: Database,
    title: "Tekla PDF → 3D Model Automation",
    description: "Convert architectural PDFs into 3D model structures using AI",
    tech: ["C#", "PDF Parsing", "AI Generation", "Tekla API"],
    accent: "from-purple-500/30",
    status: "Concept",
  },
  {
    icon: Cpu,
    title: "Browser Automation using Prompts",
    description: "Control X automation entirely through AI-generated logic",
    tech: ["Selenium", "Playwright", "Prompt Engineering"],
    accent: "from-blue-500/30",
    status: "Active",
  },
  {
    icon: Sparkles,
    title: "Web3 Game Logic Built with AI",
    description: "Complete game economics & mechanics designed via AI conversations",
    tech: ["Blockchain", "Game Logic", "AI Design", "TypeScript"],
    accent: "from-pink-500/30",
    status: "Design Phase",
  },
  {
    icon: Network,
    title: "n8n Automation Workflows",
    description: "Enterprise automation pipelines with complex API integrations",
    tech: ["n8n", "REST APIs", "Webhooks", "Data Processing"],
    accent: "from-green-500/30",
    status: "Active",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  hover: {
    y: -8,
    boxShadow: "0 0 30px rgba(192, 132, 205, 0.3)",
  },
};

export default function AIExperimentsSection() {
  return (
    <section id="experiments" className="py-24 px-6 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4" data-testid="text-experiments-heading">
            <span className="text-muted-foreground">🧪 </span>
            AI Experiments Lab
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Active research projects exploring the intersection of AI, automation, and system design.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiments.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={cardVariants}
              whileHover="hover"
              data-testid={`card-experiment-${index}`}
            >
              <Card className={`p-6 h-full relative overflow-hidden border border-primary/20 bg-gradient-to-br ${exp.accent} to-transparent backdrop-blur-sm hover-elevate cursor-pointer transition-all`}>
                <div className="absolute inset-0 bg-card/30 -z-10"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <exp.icon className="h-8 w-8 text-primary" />
                    <Badge variant="secondary" className="text-xs" data-testid={`badge-exp-status-${index}`}>
                      {exp.status}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-2" data-testid={`text-exp-title-${index}`}>
                    {exp.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4" data-testid={`text-exp-description-${index}`}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded bg-primary/10 border border-primary/20 text-primary font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
