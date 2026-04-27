import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import SectionHeading from "@/components/site/SectionHeading";
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import { SOCIAL } from "@/content/social";

const FORM_URL = "https://forms.gle/ii3i3bn21iQFy5Zw8";
const CAMPAIGN_EMAIL = "cecilawach@gmail.com";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.797l-4.77-6.21L4.8 22H2.04l6.97-7.96L2 2h6.93l4.32 5.71L18.244 2Zm-2.38 18h1.83L7.21 4h-1.9l10.55 16Z" />
  </svg>
);

export default function Contact() {
  return (
    <Layout>
      <PageHeader eyebrow="Let's Talk" title="Join the Movement" description="Volunteer, donate, organise — or just say hello. Every Nairobian voice matters." />
      <section className="py-20 md:py-28 bg-secondary/30 border-t border-border">
        <div className="container">
          <SectionHeading
            eyebrow="Let's Talk"
            title="Have a concern? Want to get involved?"
            description="This movement is built by Nairobians, for Nairobians. Drop a message — every voice matters."
          />
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2 space-y-5">
              <div className="p-6 rounded-lg bg-background border border-border border-l-2 border-l-primary">
                <h3 className="font-extrabold text-xl mb-4">Reach the Campaign</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <a href={`mailto:${CAMPAIGN_EMAIL}`} className="hover:text-primary">{CAMPAIGN_EMAIL}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <a href={`tel:${SOCIAL.phoneHref}`} className="hover:text-primary">{SOCIAL.phone}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <span>Campaign HQ · Nairobi CBD</span>
                  </li>
                </ul>
                <div className="flex items-center gap-4 mt-5 pt-5 border-t border-border">
                  <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-foreground hover:text-primary"><Facebook className="h-5 w-5" /></a>
                  <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" aria-label="X" className="text-foreground hover:text-primary"><XIcon /></a>
                  <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground hover:text-primary"><Instagram className="h-5 w-5" /></a>
                  <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-foreground hover:text-primary"><Youtube className="h-5 w-5" /></a>
                </div>
              </div>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-lg bg-primary text-primary-foreground border border-primary text-center font-bold hover:bg-primary/90 transition-colors"
              >
                Open Form in New Tab →
              </a>
            </div>
            <div className="lg:col-span-3 rounded-lg bg-background border border-border overflow-hidden">
              <iframe
                src={FORM_URL}
                title="Join the Campaign"
                className="w-full h-[900px]"
                loading="lazy"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
