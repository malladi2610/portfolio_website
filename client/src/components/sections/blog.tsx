import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const BLOG_POSTS = [
  {
    title: "Getting Started with React and TypeScript",
    date: "2024-02-28",
    preview: "A comprehensive guide to setting up and using React with TypeScript for better development experience.",
    readTime: "5 min read"
  },
  {
    title: "Best Practices for Modern Web Development",
    date: "2024-02-15",
    preview: "Explore the latest best practices and patterns in modern web development.",
    readTime: "8 min read"
  },
  {
    title: "Understanding Web Performance Optimization",
    date: "2024-02-01",
    preview: "Learn how to optimize your web applications for better performance and user experience.",
    readTime: "6 min read"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Latest Blog Posts
          </h2>

          <div className="grid gap-6">
            {BLOG_POSTS.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-foreground">{post.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.preview}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}