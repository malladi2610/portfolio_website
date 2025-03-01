import { Router, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        <Router base="/portfolio_website">
          <div className="min-h-screen bg-background flex flex-col">
            <Nav />
            <main className="flex-grow">
              <Route path="/" component={Home} />
              <Route component={NotFound} />
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