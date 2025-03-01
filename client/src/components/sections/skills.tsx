import { motion } from "framer-motion";
import SkillBadge from "@/components/ui/skill-badge";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3E50] mb-12 text-center">
            Skills & Experience
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, index) => (
              <SkillBadge key={index} {...skill} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
