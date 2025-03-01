import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (onClick) onClick();
    }
  };

  return (
    <>
      <button
        onClick={() => handleScroll('projects')}
        className="text-foreground hover:text-primary transition-colors"
      >
        Projects
      </button>
      <button
        onClick={() => handleScroll('skills')}
        className="text-foreground hover:text-primary transition-colors"
      >
        Skills
      </button>
      <button
        onClick={() => handleScroll('blog')}
        className="text-foreground hover:text-primary transition-colors"
      >
        Blog
      </button>
      <button
        onClick={() => handleScroll('contact')}
        className="text-foreground hover:text-primary transition-colors"
      >
        Contact
      </button>
    </>
  );
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold text-foreground">JD</a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-4"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-6 pt-12">
              <NavLinks onClick={() => setIsOpen(false)} />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setIsOpen(false);
                }}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}