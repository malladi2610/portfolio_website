import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavLinks = ({ onClick }: { onClick?: () => void }) => (
  <>
    <Link href="#projects">
      <a onClick={onClick} className="text-[#333333] hover:text-[#3498DB]">Projects</a>
    </Link>
    <Link href="#skills">
      <a onClick={onClick} className="text-[#333333] hover:text-[#3498DB]">Skills</a>
    </Link>
    <Link href="#contact">
      <a onClick={onClick} className="text-[#333333] hover:text-[#3498DB]">Contact</a>
    </Link>
  </>
);

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold text-[#2D3E50]">JD</a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
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
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
