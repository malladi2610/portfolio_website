import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
