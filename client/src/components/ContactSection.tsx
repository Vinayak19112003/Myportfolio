import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail, ExternalLink } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-8" 
            data-testid="text-contact-heading"
          >
            Let's Collaborate
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" 
            data-testid="text-contact-description"
          >
            Interested in working together on innovative AI-driven solutions? Reach out through any of these channels.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <Button asChild size="lg" data-testid="button-contact-github" className="group">
              <a href="https://github.com/Vinayak19112003" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                GitHub
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" data-testid="button-contact-twitter" className="group">
              <a href="https://twitter.com/Vinayak191120" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-5 w-5 group-hover:-rotate-12 transition-transform" />
                X (Twitter)
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-muted-foreground"
          >
            <Mail className="h-5 w-5 text-primary" />
            <span className="text-sm md:text-base" data-testid="text-contact-email">
              your.email@example.com
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
