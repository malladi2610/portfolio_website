import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden h-full">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-foreground">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm bg-primary/10 text-primary rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {liveUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => window.open(liveUrl)}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            )}
            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => window.open(githubUrl)}
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}