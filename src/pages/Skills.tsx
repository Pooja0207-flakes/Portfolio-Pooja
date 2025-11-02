import { Card } from "@/components/ui/card";
import { Figma, Palette, Users, BarChart3, Lightbulb, Layers } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Palette,
      title: "Visual Design",
      skills: [
        { name: "UI Design", level: 95 },
        { name: "Typography", level: 90 },
        { name: "Color Theory", level: 92 },
        { name: "Branding", level: 85 }
      ]
    },
    {
      icon: Users,
      title: "UX Strategy",
      skills: [
        { name: "User Research", level: 88 },
        { name: "Wireframing", level: 93 },
        { name: "Prototyping", level: 90 },
        { name: "Usability Testing", level: 87 }
      ]
    },
    {
      icon: Layers,
      title: "Design Systems",
      skills: [
        { name: "Component Design", level: 94 },
        { name: "Design Tokens", level: 88 },
        { name: "Documentation", level: 85 },
        { name: "Accessibility", level: 90 }
      ]
    },
    {
      icon: Lightbulb,
      title: "Creative Thinking",
      skills: [
        { name: "Problem Solving", level: 92 },
        { name: "Innovation", level: 89 },
        { name: "Visual Storytelling", level: 91 },
        { name: "Design Trends", level: 87 }
      ]
    }
  ];

  const tools = [
    { name: "Figma", icon: "🎨", proficiency: "Expert" },
    { name: "Adobe XD", icon: "✨", proficiency: "Advanced" },
    { name: "Canva", icon: "🖌️", proficiency: "Advanced" },
    { name: "Blender", icon: "🌀", proficiency: "Intermediate" },
    { name: "Photoshop", icon: "🖼️", proficiency: "Advanced" }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Skills & <span className="bg-gradient-accent bg-clip-text text-transparent">Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my design capabilities and technical proficiency
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-12">
                    <category.icon size={28} />
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 0.1) + (i * 0.05)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Tools Section */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-3xl font-bold text-center">Design Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {tools.map((tool, index) => (
                <Card
                  key={index}
                  className="p-6 text-center bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] group cursor-pointer"
                >
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <h3 className="font-bold mb-1">{tool.name}</h3>
                  <p className="text-sm text-primary">{tool.proficiency}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <Card className="p-8 bg-card/30 backdrop-blur border-border animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h2 className="text-3xl font-bold text-center mb-8">Additional Strengths</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-4xl mb-2">🤝</div>
                <h3 className="font-bold text-lg">Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Working seamlessly with developers, product managers, and stakeholders
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl mb-2">💬</div>
                <h3 className="font-bold text-lg">Communication</h3>
                <p className="text-sm text-muted-foreground">
                  Articulating design decisions and presenting ideas clearly
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl mb-2">⚡</div>
                <h3 className="font-bold text-lg">Adaptability</h3>
                <p className="text-sm text-muted-foreground">
                  Thriving in fast-paced environments and learning new tools quickly
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
