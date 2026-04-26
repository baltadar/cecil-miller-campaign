import { Facebook, Instagram, Youtube } from "lucide-react";
import { SOCIAL } from "@/content/social";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.797l-4.77-6.21L4.8 22H2.04l6.97-7.96L2 2h6.93l4.32 5.71L18.244 2Zm-2.38 18h1.83L7.21 4h-1.9l10.55 16Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Hon. Cecil Miller for Senator. All Rights Reserved.
        </p>
        <div className="flex items-center gap-5">
          <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
          <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-primary transition-colors"><XIcon /></a>
          <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
          <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-primary transition-colors"><Youtube className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
}
