import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Twitter, ExternalLink, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">AI-Driven Development</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-foreground to-primary/80 bg-clip-text text-transparent"
          data-testid="text-hero-name"
        >
          Vinayak Deshmuk
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl font-semibold text-foreground mb-4"
          data-testid="text-hero-title"
        >
          Modern AI-Augmented Developer & Solutions Architect
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 rounded-lg blur-2xl -z-10"></div>
          <p className="text-lg md:text-xl font-light text-muted-foreground italic" data-testid="text-hero-tagline">
            "I build real solutions using AI + Logic + Prompt Engineering."
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto mb-4"
          data-testid="text-hero-description"
        >
          B.E. – Computer Science and Engineering
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base leading-relaxed text-muted-foreground max-w-3xl mx-auto mb-12 space-y-2"
          data-testid="text-hero-tools"
        >
          Tech Stack: Next.js • TypeScript • Firebase • Tailwind CSS • Framer Motion • n8n • Selenium/Playwright • Claude • ChatGPT
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" data-testid="button-github" className="group">
            <a href="https://github.com/Vinayak19112003" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" data-testid="button-twitter" className="group">
            <a href="https://twitter.com/Vinayak191120" target="_blank" rel="noopener noreferrer">
              <Twitter className="mr-2 h-5 w-5 group-hover:-rotate-12 transition-transform" />
              X (Twitter)
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
