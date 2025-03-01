import { Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

function App() {
  // Use environment variable for base URL in production
  const base = import.meta.env.VITE_BASE_URL || '';

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        <div className="min-h-screen bg-background flex flex-col">
          <Nav />
          <main className="flex-grow pt-16">
            <Route path={`${base}/`} component={Home} />
            <Route path={`${base}/*`} component={NotFound} />
          </main>
          <Footer />
        </div>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;