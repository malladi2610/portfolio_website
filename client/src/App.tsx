import { Route, Router } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

// Get base from Vite's environment configuration
const base = import.meta.env.BASE_URL;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        <Router base={base}>
          <div className="min-h-screen bg-background flex flex-col">
            <Nav />
            <main className="flex-grow pt-16">
              <Route path="/" component={Home} />
              <Route path="/*" component={NotFound} />
            </main>
            <Footer />
          </div>
          <Toaster />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;