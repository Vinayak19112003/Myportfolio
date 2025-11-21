import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 px-6 border-t border-primary/10 backdrop-blur-sm"
      data-testid="footer"
    >
      <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
        <p data-testid="text-footer-copyright">
          © {currentYear} Vinayak Deshmuk. <span className="text-primary">Thinking with AI. Building faster.</span>
        </p>
      </div>
    </motion.footer>
  );
}
