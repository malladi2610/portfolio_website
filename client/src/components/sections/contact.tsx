import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3E50] mb-12 text-center">
            Let's Connect
          </h2>

          <Card className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button
                variant="outline"
                size="lg"
                className="w-full md:w-auto"
                onClick={() => window.open('mailto:jane@example.com')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full md:w-auto"
                onClick={() => window.open('https://github.com')}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full md:w-auto"
                onClick={() => window.open('https://linkedin.com')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
