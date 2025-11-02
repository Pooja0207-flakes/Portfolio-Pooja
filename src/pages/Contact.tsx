import { useState } from "react";
import { Send, Mail, Linkedin, Github, Dribbble } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Mail, label: "Email", value: "poojashree05501@gmail.com", href: "poojashree05501@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: "/in/pooja-shree-p-o68993269", href: "#" },
    { icon: Github, label: "GitHub", value: "/Pooja0207-flakes", href: "#" }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Let's <span className="bg-gradient-accent bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's create something amazing together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-card/50 backdrop-blur border-border animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-background border-border focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                </Button>
              </form>
            </Card>

            {/* Social Links & Info */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="p-8 bg-card/50 backdrop-blur border-border">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of these channels.
                </p>

                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <link.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{link.label}</p>
                        <p className="font-medium">{link.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
