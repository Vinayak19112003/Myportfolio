import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "AI Trading Journal",
    status: "In Progress",
    description: "Smart journal system for tracking trades with insights.",
    details: [
      "Uses Next.js, Firebase, Recharts & Genkit AI",
      "Designed the logic & structure for data insights",
      "Goal: automatically analyze user performance",
    ],
    accent: "from-blue-500/30",
  },
  {
    title: "Tekla MCP Automation Concept",
    description: "Engineering workflow automation",
    details: [
      "Converting PDFs into 3D model automation",
      "AI-generated C# macro structures",
      "Designed the pipeline and logic system",
    ],
    accent: "from-purple-500/30",
  },
  {
    title: "X Automation System",
    description: "Human-behavior automation for X (Twitter)",
    details: [
      "Selenium / Playwright",
      "Auto scrolling, smart delays, button detection",
      "AI-designed strategy & prompts for safety",
    ],
    accent: "from-cyan-500/30",
  },
  {
    title: "Web3 Gaming Concept",
    description: "Web3 user-flow & economy system",
    details: [
      "Game logic & database structure conceived with AI",
      "UI and logic drafts generated using prompts",
      "Focus on prototype & system architecture",
    ],
    accent: "from-pink-500/30",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          data-testid="text-projects-heading"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group"
            >
              <Card 
                className={`p-8 h-full hover-elevate transition-all duration-300 hover:scale-[1.02] relative overflow-hidden border-0 bg-gradient-to-br ${project.accent} to-transparent`}
                data-testid={`card-project-${index}`}
              >
                <div className="absolute inset-0 bg-card/50 -z-10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold" data-testid={`text-project-title-${index}`}>
                      {project.title}
                    </h3>
                    {project.status && (
                      <Badge variant="secondary" data-testid={`badge-project-status-${index}`}>
                        {project.status}
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${index}`}>
                    {project.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {project.details.map((detail, detailIndex) => (
                      <motion.li 
                        key={detailIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: detailIndex * 0.05 }}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                        data-testid={`text-project-detail-${index}-${detailIndex}`}
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    Explore <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
