import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth" });
}

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <header className={`sticky top-0 z-50 transition-shadow ${scrolled ? "shadow-sm bg-background/80 backdrop-blur" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold">Mohamed Elsawy</Link>
        <nav className="hidden md:flex items-center gap-4">
          {isHome && sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {s.label}
            </button>
          ))}
          <Link to="/resume" className="text-sm text-muted-foreground hover:text-foreground">Resume</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="md:hidden">
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
