import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { IconType } from "react-icons";

interface SkillBadgeProps {
  name: string;
  icon: IconType;
  level: number;
}

export default function SkillBadge({ name, icon: Icon, level }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-6 flex flex-col items-center gap-3">
          <div className="text-3xl text-[#3498DB]">
            <Icon />
          </div>
          <h3 className="font-medium text-[#2D3E50]">{name}</h3>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#3498DB] h-2 rounded-full"
              style={{ width: `${level}%` }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}