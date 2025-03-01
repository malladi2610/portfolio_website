import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-8">
            <img 
              src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2" 
              alt="Professional headshot"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Jane Developer
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Full Stack Developer crafting beautiful and functional web experiences
          </p>

          <Button 
            onClick={scrollToProjects}
            variant="secondary"
            size="lg"
          >
            View My Work
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </motion.div>
    </section>
  );
}