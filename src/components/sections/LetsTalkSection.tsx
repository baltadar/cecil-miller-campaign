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
          <div className="relative border-2 border-primary/40 bg-gradient-to-br from-primary/5 via-background to-primary-glow/10 p-6 md:p-10 shadow-elegant overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand" />

            <div className="flex flex-col items-center text-center mb-8">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-brand shadow-elegant mb-3">
                <Heart className="h-6 w-6 text-primary-foreground" fill="currentColor" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Support the Campaign
              </h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Every contribution fuels the movement. Choose your preferred way to give.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* M-Pesa */}
              <div className="relative flex flex-col p-6 bg-background border border-border hover:border-primary hover:shadow-card transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-[#4caf50]/10 flex items-center justify-center shrink-0">
                      <Smartphone className="h-5 w-5 text-[#4caf50]" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Mobile Money</div>
                      <div className="font-semibold text-foreground">M-Pesa Paybill</div>
                    </div>
                  </div>
                  <img src={mpesaLogo} alt="M-Pesa" className="h-8 w-auto object-contain" />
                </div>
                <div className="space-y-2 text-sm border-t border-border pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Business No.</span>
                    <span className="font-mono font-bold text-lg text-primary">516600</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Account No.</span>
                    <span className="font-mono font-bold text-lg text-primary">569263001</span>
                  </div>
                </div>
              </div>

              {/* Bank Transfer */}
              <div className="relative flex flex-col p-6 bg-background border border-border hover:border-primary hover:shadow-card transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Card / Bank</div>
                      <div className="font-semibold text-foreground">Diamond Trust Bank</div>
                    </div>
                  </div>
                  <img src={visaLogo} alt="Visa / Mastercard" className="h-8 w-auto object-contain" />
                </div>
                <div className="space-y-2 text-sm border-t border-border pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Account Name</span>
                    <span className="font-semibold text-foreground">Cecil Miller</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Account No.</span>
                    <span className="font-mono font-bold text-lg text-primary">569263001</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-6">
              Asante sana 🙏 — your support keeps the movement going.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
