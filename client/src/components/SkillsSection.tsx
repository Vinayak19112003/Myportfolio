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
    color: "from-cyan-500/20 to-blue-500/20",
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
    color: "from-blue-500/20 to-purple-500/20",
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
    color: "from-purple-500/20 to-pink-500/20",
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
    color: "from-pink-500/20 to-cyan-500/20",
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
    color: "from-cyan-500/20 to-green-500/20",
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40" style={{ animationDelay: '0.5s' }}></div>
      </div>

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

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
            >
              <Card 
                className={`p-6 h-full hover-elevate transition-all duration-300 hover:-translate-y-1 relative overflow-hidden border-0 bg-gradient-to-br ${skill.color}`}
                data-testid={`card-skill-${index}`}
              >
                <div className="absolute inset-0 bg-card/40 -z-10"></div>
                <div className="relative z-10 flex items-start gap-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <skill.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-semibold" data-testid={`text-skill-title-${index}`}>
                    {skill.title}
                  </h3>
                </div>
                <ul className="space-y-2 relative z-10">
                  {skill.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                      className="text-sm md:text-base text-muted-foreground flex items-start gap-2"
                      data-testid={`text-skill-item-${index}-${itemIndex}`}
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
