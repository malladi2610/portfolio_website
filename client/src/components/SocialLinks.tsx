import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiDiscord } from "react-icons/si";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: SiGithub,
    color: "hover:text-[#333]",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: SiLinkedin,
    color: "hover:text-[#0077b5]",
  },
  {
    name: "Discord",
    href: "https://discord.com",
    icon: SiDiscord,
    color: "hover:text-[#5865F2]",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-6">
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl ${social.color} transition-colors`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <social.icon />
        </motion.a>
      ))}
    </div>
  );
}