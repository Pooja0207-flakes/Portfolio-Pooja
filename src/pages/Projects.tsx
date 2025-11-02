import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      category: "Web Application",
      description:
        "A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization.",
      image: "🛍️",
      links: {
        live: "https://github.com/Pooja0207-flakes/UI-UX-EcomDemo"
      }
    },
    {
      title: "Tourist Spot Website",
      category: "Web Application",
      description:
        "Discover breathtaking destinations, explore hidden gems, and plan your perfect getaway with our all-in-one tourist spot website.",
      image: "🌍",
      links: {
        live: "https://github.com/Pooja0207-flakes/_Tourist-Spot_"
      }
    },
    {
      title: "To-Do List",
      category: "Web Application",
      description:
        "Stay organized and boost your productivity by managing your daily tasks easily with our simple and efficient to-do list.",
      image: "✅",
      links: {
        live: "https://github.com/Pooja0207-flakes/TODO-List"
      }
    },
    {
      title: "Event Management System",
      category: "Web Application",
      description:
        "Plan, organize, and manage events effortlessly with our all-in-one event management system designed for smooth coordination and success.",
      image: "🎉",
      links: {
        live: "https://github.com/Pooja0207-flakes/Event-Management-System"
      }
    },
    {
      title: "Hospital Appointment Booking",
      category: "Web Application",
      description:
        "Book doctor appointments easily and manage your healthcare schedule with our convenient and reliable hospital appointment booking system.",
      image: "🏥",
      links: {
        live: "https://github.com/Pooja0207-flakes/_Hospital-Appointment-Booking-System_" // ✅ Fixed key from 'link' to 'live'
      }
    },
    {
      title: "Creative Portfolio Template",
      category: "Web Application",
      description:
        "Showcase your creativity with an elegant and customizable portfolio template.",
      image: "🎨",
      links: {
        live: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Featured{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my best work in UI/UX design and digital experiences
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-video bg-secondary/50 flex items-center justify-center text-6xl overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <span className="group-hover:scale-125 transition-transform duration-500">
                    {project.image}
                  </span>
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-primary font-medium mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex gap-2 pt-4 border-t border-border">
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="ghost" className="group/btn">
                          <ExternalLink size={20} />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
