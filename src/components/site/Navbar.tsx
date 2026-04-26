import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "HOME" },
  { to: "/my-story", label: "MY STORY" },
  { to: "/agenda", label: "AGENDA" },
  { to: "/the-party", label: "THE PARTY" },
  { to: "/media", label: "MEDIA" },
  { to: "/contact", label: "LET'S TALK" },
];

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.797l-4.77-6.21L4.8 22H2.04l6.97-7.96L2 2h6.93l4.32 5.71L18.244 2Zm-2.38 18h1.83L7.21 4h-1.9l10.55 16Z" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const onHome = location.pathname === "/";
  const transparent = onHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent py-5"
          : "bg-background/90 backdrop-blur-md border-b border-border py-3 shadow-sm"
      )}
    >
      <div className="container flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-extrabold text-2xl md:text-3xl tracking-tight bg-gradient-brand bg-clip-text text-transparent flex items-center gap-1">
            Miller<span className="text-primary">★</span>
          </span>
          <img
            src="/roots-party-logo.png"
            alt="Roots Party of Kenya"
            className="h-9 w-9 rounded-full object-cover ring-1 ring-border hidden sm:block"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-xs font-semibold tracking-widest transition-colors relative py-1",
                  transparent ? "text-night-foreground/90 hover:text-primary" : "text-foreground hover:text-primary",
                  isActive && "text-primary after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-primary after:rounded"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className={cn("hidden md:flex items-center gap-3", transparent ? "text-night-foreground" : "text-foreground")}>
            <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="X" className="hover:text-primary transition-colors"><XIcon /></a>
            <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></a>
          </div>
          <button
            className={cn("lg:hidden p-2 rounded-md", transparent ? "text-night-foreground" : "text-foreground")}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background mt-3">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "py-3 text-sm font-semibold tracking-wider border-b border-border/60",
                    isActive ? "text-primary" : "text-foreground"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
