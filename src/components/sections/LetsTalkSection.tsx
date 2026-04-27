import { Mail, Phone, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import { SOCIAL } from "@/content/social";

const FORM_URL = "https://forms.gle/ii3i3bn21iQFy5Zw8";

export default function LetsTalkSection() {
  return (
    <section id="lets-talk" className="py-20 md:py-28 bg-foreground/5 border-t border-border">
      <div className="container">
        <SectionHeading eyebrow="Let's Talk" title="Get in Touch" description="Reach out directly or join the campaign movement." />
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-6 max-w-5xl mx-auto">
          <a href={`mailto:${SOCIAL.email}`} className="group flex items-start gap-4 p-6 bg-background border border-border hover:border-primary transition-colors">
            <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Email</div>
              <div className="font-medium whitespace-nowrap group-hover:text-primary transition-colors">{SOCIAL.email}</div>
            </div>
          </a>
          <a href={`tel:${SOCIAL.phoneHref}`} className="group flex items-start gap-4 p-6 bg-background border border-border hover:border-primary transition-colors">
            <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Phone</div>
              <div className="font-medium group-hover:text-primary transition-colors">{SOCIAL.phone}</div>
            </div>
          </a>
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 p-6 bg-foreground text-background border border-foreground hover:bg-primary hover:border-primary transition-colors">
            <ExternalLink className="h-6 w-6 shrink-0 mt-1" />
            <div>
              <div className="text-xs uppercase tracking-wider opacity-70 mb-1">Get Involved</div>
              <div className="font-semibold">Join the Campaign</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
