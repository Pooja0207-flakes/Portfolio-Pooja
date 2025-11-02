import { Code2, Palette, Zap, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const tools = [
    "Figma", "Adobe XD", "Canva", "Blender", "Photoshop"
  ];

  const values = [
    {
      icon: Palette,
      title: "Aesthetic Excellence",
      description: "Every pixel matters. I craft visually stunning designs that captivate and inspire."
    },
    {
      icon: Code2,
      title: "User-Centered",
      description: "Design isn't just about looks—it's about solving real problems for real people."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "I stay ahead of trends, bringing fresh perspectives to every project."
    },
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "Design is my craft and my joy. I pour my heart into every detail."
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              About <span className="bg-gradient-accent bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate designer turning ideas into delightful digital experiences
            </p>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-48 h-48 rounded-full bg-gradient-accent p-1 flex-shrink-0 hover:scale-110 hover:rotate-6 transition-all duration-500 cursor-pointer">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-6xl hover:scale-110 transition-transform duration-300">
                👨‍💻
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold">Hello, I'm Pooja Shree P</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands on experience in UI/UX design, web development, and graphic design, I specialize in creating user interfaces that are not only beautiful but also intuitive and accessible. My approach combines data-driven insights with creative vision to deliver designs that truly resonate with users.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe great design is invisible—it just works. My goal is to craft experiences that feel natural, delightful, and empowering.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {values.map((value, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <value.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Tools */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-3xl font-bold text-center">Tools I Use</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-full bg-secondary border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:-translate-y-1 cursor-pointer"
                >
                  <span className="font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
