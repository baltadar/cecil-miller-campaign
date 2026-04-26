import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Facebook, Instagram, Menu, X, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import { SOCIAL } from "@/content/social";

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
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className="sticky top-0 inset-x-0 z-50 bg-background border-b border-border"
    >
      <div className="container flex items-center justify-between gap-6 h-20">
        <Link to="/" className="flex items-baseline gap-2 shrink-0">
          <span className="font-extrabold text-3xl md:text-4xl tracking-tight text-primary leading-none">
            Miller
          </span>
          <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase hidden sm:inline">
            for Senator
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm font-bold tracking-wider transition-colors relative py-2 text-foreground hover:text-primary",
                  isActive && "text-primary after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-primary"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 text-foreground">
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-primary transition-colors"><XIcon /></a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-primary transition-colors"><Youtube className="h-4 w-4" /></a>
          </div>
          <button
            className="lg:hidden p-2 rounded-md text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
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
