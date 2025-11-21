import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Settings, 
  Repeat, 
  Code2, 
  BarChart3, 
  Puzzle 
} from "lucide-react";

const skills = [
  {
    icon: Settings,
    title: "⚙️ AI-Assisted Development",
    items: [
      "Rapid prototyping using ChatGPT / Claude / Gemini",
      "Debugging & improving AI-generated code",
      "Prompt engineering for complex workflows",
      "Understanding logic, not just typing syntax",
    ],
  },
  {
    icon: Repeat,
    title: "🔁 Workflow Automation",
    items: [
      "n8n workflow building & API integration",
      "Selenium / Playwright human-behavior automation",
      "Task-based browser automation",
      "Web scraping & auto-report systems",
    ],
  },
  {
    icon: Code2,
    title: "💻 Development & Frontend",
    items: [
      "Next.js + TypeScript",
      "Tailwind CSS + Framer Motion",
      "Firebase backend",
      "Recharts data visualization",
    ],
  },
  {
    icon: BarChart3,
    title: "📊 Data & Insights",
    items: [
      "Data structuring & analysis",
      "AI-assisted research & summarization",
      "JSON / CSV handling",
      "Dashboard creation",
    ],
  },
  {
    icon: Puzzle,
    title: "🧩 Problem Solving & System Design",
    items: [
      "Fast MVP building",
      "Idea research & validation",
      "Logic-based execution",
      "Using AI as execution engine",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          data-testid="text-skills-heading"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="p-6 h-full hover-elevate transition-all duration-300 hover:-translate-y-1"
                data-testid={`card-skill-${index}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <skill.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <h3 className="text-xl md:text-2xl font-semibold" data-testid={`text-skill-title-${index}`}>
                    {skill.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="text-sm md:text-base text-muted-foreground flex items-start gap-2"
                      data-testid={`text-skill-item-${index}-${itemIndex}`}
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
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
