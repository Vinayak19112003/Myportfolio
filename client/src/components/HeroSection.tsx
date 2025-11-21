import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Twitter, ExternalLink } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          data-testid="text-hero-name"
        >
          Vinayak Deshmuk
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-muted-foreground mb-4"
          data-testid="text-hero-title"
        >
          Modern AI-Augmented Developer & Solutions Architect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl font-light text-muted-foreground mb-8"
          data-testid="text-hero-tagline"
        >
          I build real solutions using AI + Logic + Prompt Engineering.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto mb-12"
          data-testid="text-hero-description"
        >
          B.E. – Computer Science and Engineering
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" data-testid="button-github">
            <a href="https://github.com/Vinayak19112003" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" data-testid="button-twitter">
            <a href="https://twitter.com/Vinayak191120" target="_blank" rel="noopener noreferrer">
              <Twitter className="mr-2 h-5 w-5" />
              X (Twitter)
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
