import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Home = () => {
  const roles = ["UI/UX Designer", "Web Developer", "Graphic Designer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Hello, I'm
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight animate-fade-in hover:scale-105 transition-transform duration-500" style={{ animationDelay: "0.2s" }}>
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Pooja Shree P
              </span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <p className="text-3xl md:text-4xl font-semibold text-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <span className="inline-block transition-all duration-500 ease-in-out" key={currentRole}>
                  {roles[currentRole]}
                </span>
              </p>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            I design intuitive, beautiful interfaces that connect people with technology seamlessly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Link to="/projects">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-110 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300">
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
