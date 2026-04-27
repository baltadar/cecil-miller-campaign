import { Mail, Phone, ExternalLink, Heart, Building2, Smartphone } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import { SOCIAL } from "@/content/social";

const FORM_URL = "https://forms.gle/ii3i3bn21iQFy5Zw8";

export default function LetsTalkSection() {
  return (
    <section id="lets-talk" className="py-20 md:py-28 bg-foreground/5 border-t border-border">
      <div className="container">
        <SectionHeading
          eyebrow="Let's Talk"
          title="Get in Touch"
          description="Reach out directly or join the campaign movement."
        />

        {/* Contact Details */}
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-6 max-w-5xl mx-auto">
          <a
            href={`mailto:${SOCIAL.email}`}
            className="group flex items-start gap-4 p-6 bg-background border border-border hover:border-primary transition-colors"
          >
            <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Email</div>
              <div className="font-medium whitespace-nowrap group-hover:text-primary transition-colors">
                {SOCIAL.email}
              </div>
            </div>
          </a>

          <a
            href={`tel:${SOCIAL.phoneHref}`}
            className="group flex items-start gap-4 p-6 bg-background border border-border hover:border-primary transition-colors"
          >
            <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Phone</div>
              <div className="font-medium group-hover:text-primary transition-colors">{SOCIAL.phone}</div>
            </div>
          </a>

          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 p-6 bg-foreground text-background border border-foreground hover:bg-primary hover:border-primary transition-colors"
          >
            <ExternalLink className="h-6 w-6 shrink-0 mt-1" />
            <div>
              <div className="text-xs uppercase tracking-wider opacity-70 mb-1">Get Involved</div>
              <div className="font-semibold">Join the Campaign</div>
            </div>
          </a>
        </div>

        {/* Donate / Contribute */}
        <div className="max-w-5xl mx-auto mt-4">
          <div className="border border-border bg-background p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                Support the Campaign
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* M-Pesa */}
              <div className="flex items-start gap-4 p-5 border border-border hover:border-primary transition-colors group">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">M-Pesa Paybill</div>
                  <div className="font-semibold group-hover:text-primary transition-colors mb-2">
                    Contribute via M-Pesa
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex gap-2">
                      <span className="text-muted-foreground w-28 shrink-0">Business No.</span>
                      <span className="font-mono font-bold text-foreground">516600</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-muted-foreground w-28 shrink-0">Account No.</span>
                      <span className="font-mono font-bold text-foreground">569263001</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank Transfer */}
              <div className="flex items-start gap-4 p-5 border border-border hover:border-primary transition-colors group">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Bank Transfer</div>
                  <div className="font-semibold group-hover:text-primary transition-colors mb-2">
                    Diamond Trust Bank
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex gap-2">
                      <span className="text-muted-foreground w-28 shrink-0">Account No.</span>
                      <span className="font-mono font-bold text-foreground">569263001</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
