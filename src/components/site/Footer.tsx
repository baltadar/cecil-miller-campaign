import { Facebook, Instagram, ArrowUp } from "lucide-react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.797l-4.77-6.21L4.8 22H2.04l6.97-7.96L2 2h6.93l4.32 5.71L18.244 2Zm-2.38 18h1.83L7.21 4h-1.9l10.55 16Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t-4 border-party bg-night text-night-foreground relative">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-night-foreground/70 text-center md:text-left">
          Copyright © 2027 Cecil Miller. All Rights Reserved.
        </p>
        <div className="flex items-center gap-5">
          <img src="/roots-party-logo.png" alt="Roots Party of Kenya" className="h-10 w-10 rounded-full object-cover ring-2 ring-party" />
          <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
          <a href="#" aria-label="X" className="hover:text-primary transition-colors"><XIcon /></a>
          <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-gradient-brand text-primary-foreground shadow-elegant grid place-items-center hover:scale-110 transition-transform"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
