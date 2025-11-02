import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase, Lightbulb, Mail } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: User },
    { path: "/projects", label: "Projects", icon: Briefcase },
    { path: "/skills", label: "Skills", icon: Lightbulb },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold bg-gradient-accent bg-clip-text text-transparent hover:scale-110 transition-transform duration-300">
            Pooja Shree P
          </Link>
          
          <div className="flex items-center gap-8">
            {navItems.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                    isActive
                      ? "text-primary bg-primary/10 shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted hover:shadow-[0_0_10px_hsl(var(--primary)/0.2)]"
                  }`}
                >
                  <Icon size={18} className={isActive ? "animate-pulse" : ""} />
                  <span className="hidden md:inline">{label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
