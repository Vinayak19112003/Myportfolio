import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail, ExternalLink } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8" data-testid="text-contact-heading">
            Let's Collaborate!
          </h2>

          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-contact-description">
            Interested in working together on innovative AI-driven solutions? Reach out through any of these channels.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button asChild size="lg" data-testid="button-contact-github">
              <a href="https://github.com/Vinayak19112003" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" data-testid="button-contact-twitter">
              <a href="https://twitter.com/Vinayak191120" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-5 w-5" />
                X (Twitter)
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Mail className="h-5 w-5" />
            <span className="text-sm md:text-base" data-testid="text-contact-email">
              your.email@example.com
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
