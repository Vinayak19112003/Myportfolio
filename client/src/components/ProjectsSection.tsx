import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  },
  {
    title: "Tekla MCP Automation Concept",
    description: "Engineering workflow automation",
    details: [
      "Converting PDFs into 3D model automation",
      "AI-generated C# macro structures",
      "Designed the pipeline and logic system",
    ],
  },
  {
    title: "X Automation System",
    description: "Human-behavior automation for X (Twitter)",
    details: [
      "Selenium / Playwright",
      "Auto scrolling, smart delays, button detection",
      "AI-designed strategy & prompts for safety",
    ],
  },
  {
    title: "Web3 Gaming Concept",
    description: "Web3 user-flow & economy system",
    details: [
      "Game logic & database structure conceived with AI",
      "UI and logic drafts generated using prompts",
      "Focus on prototype & system architecture",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          data-testid="text-projects-heading"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="p-8 h-full hover-elevate transition-all duration-300 hover:scale-[1.02]"
                data-testid={`card-project-${index}`}
              >
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
                
                <ul className="space-y-2">
                  {project.details.map((detail, detailIndex) => (
                    <li 
                      key={detailIndex}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                      data-testid={`text-project-detail-${index}-${detailIndex}`}
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
