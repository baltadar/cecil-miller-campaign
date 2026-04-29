import { Mail, Phone, ExternalLink, Heart, Building2, Smartphone } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import { SOCIAL } from "@/content/social";
import mpesaLogo from "@/assets/mpesa-logo.jpg";
import visaLogo from "@/assets/visa-logo.jpg";

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
            href="mailto:cecilawach@gmail.com"
            className="group flex items-start gap-4 p-6 bg-background border border-border hover:border-primary transition-colors"
          >
            <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Email</div>
              <div className="font-medium whitespace-nowrap group-hover:text-primary transition-colors">
                cecilawach@gmail.com
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
          <div className="relative border-2 border-primary/40 bg-gradient-to-br from-primary/5 via-background to-primary-glow/10 p-5 md:p-6 shadow-elegant overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-gradient-brand shadow-elegant shrink-0">
                  <Heart className="h-4 w-4 text-primary-foreground" fill="currentColor" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    Support the Campaign
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    You can channel your contribution via the details shown below.
                  </p>
                </div>
              </div>
              <div
                aria-disabled="true"
                title="Online donations coming soon"
                className="inline-flex items-center justify-center gap-2 bg-muted text-muted-foreground font-semibold text-sm px-5 py-2.5 cursor-not-allowed select-none border border-border"
              >
                <Heart className="h-4 w-4" />
                Donate Online (Coming Soon)
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {/* M-Pesa */}
              <div className="flex flex-col p-4 bg-background border border-border hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-[#4caf50]" />
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wide">M-Pesa Paybill</span>
                  </div>
                  <img src={mpesaLogo} alt="M-Pesa" className="h-5 w-auto object-contain" />
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <div className="text-muted-foreground">Business No.</div>
                    <div className="font-mono font-bold text-base text-primary">516600</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Account No.</div>
                    <div className="font-mono font-bold text-base text-primary">569263001</div>
                  </div>
                </div>
              </div>

              {/* Bank Transfer */}
              <div className="flex flex-col p-4 bg-background border border-border hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Diamond Trust Bank</span>
                  </div>
                  <img src={visaLogo} alt="Visa / Mastercard" className="h-5 w-auto object-contain" />
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <div className="text-muted-foreground">Account Name</div>
                    <div className="font-semibold text-foreground text-sm">Cecil Miller</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Account No.</div>
                    <div className="font-mono font-bold text-base text-primary">569263001</div>
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
