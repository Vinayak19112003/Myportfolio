import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail, ExternalLink } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-contact-heading">
            Let's Collaborate
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-contact-description">
            Interested in AI, automation, or system design? Let's build something together.
          </p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
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
                @Vinayak191120
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" data-testid="button-contact-email">
              <a href="mailto:vinayak19112003@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
          </motion.div>

          <motion.p
            className="text-sm text-muted-foreground font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            data-testid="text-contact-education"
          >
            B.E. Computer Science and Engineering
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
