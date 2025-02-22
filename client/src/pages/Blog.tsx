import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    date: "2024-02-20",
    excerpt: "Learn how to set up a new React project with TypeScript and best practices for type safety.",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Building Responsive Layouts with Tailwind CSS",
    date: "2024-02-15",
    excerpt: "Explore the power of Tailwind CSS for creating beautiful, responsive web layouts quickly.",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Modern Animation Techniques with Framer Motion",
    date: "2024-02-10",
    excerpt: "Deep dive into creating smooth animations in React applications using Framer Motion.",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Thoughts, tutorials, and insights about web development
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                  </div>
                  <div className="flex gap-2 text-sm text-muted-foreground">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <button className="mt-4 text-primary hover:underline">
                    Read more →
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
