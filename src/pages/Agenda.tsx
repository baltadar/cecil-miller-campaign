import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { useState } from "react";
import SectionHeading from "@/components/site/SectionHeading";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const agendaItems = [
  {
    id: "youth",
    title: "Youth Empowerment & Skills",
    body: "Nairobi is Africa's youngest capital — and yet thousands of qualified young people leave school each year with nowhere to go. As Senator, I will fight for a fully-funded, demand-driven TVET pipeline, county-level apprenticeship guarantees, and direct partnerships between Nairobi's industry leaders and our youth so that 'tarmacking' stops being a rite of passage.",
  },
  {
    id: "workers",
    title: "Workers' Rights & Gig Economy",
    body: "Bodaboda riders, ride-hailing drivers, mama mbogas and gig workers power Nairobi's economy without a safety net. I will champion legislation guaranteeing minimum earnings, transparent platform fees, mandatory insurance, and pension access for every worker — formal or informal.",
  },
  {
    id: "justice",
    title: "Access to Justice",
    body: "Justice should never depend on income. Drawing on years as an advocate and LSK Coast Chair, I will push for county legal-aid clinics in every sub-county, fast-track small-claims courts, and Senate oversight on police accountability and prosecutorial fairness.",
  },
  {
    id: "business",
    title: "Ease of Doing Business",
    body: "From Gikomba to Eastleigh to Westlands, Nairobi's hustlers carry the city. I will sponsor reforms to consolidate licensing, cap county levies, digitise permits, and give SMEs real protection from arbitrary harassment by enforcement officers.",
  },
  {
    id: "health",
    title: "Quality & Affordable Healthcare",
    body: "Every Nairobian — from Kibera to Karen — deserves dignified healthcare. I will push for fully-equipped Level 4 facilities in every sub-county, transparent SHA implementation, and mental-health services integrated into primary care.",
  },
];

export default function Agenda() {
  const [active, setActive] = useState<string>(agendaItems[0].id);
  const current = agendaItems.find((a) => a.id === active)!;

  return (
    <Layout>
      <PageHeader eyebrow="Agenda & Manifesto" title="The Plan for Nairobi" description="Five priorities, grounded in the law, shaped by the streets, and built for every Nairobian." />
      <section className="py-20 md:py-28 bg-secondary/30 border-y border-border">
        <div className="container">
          <SectionHeading eyebrow="My Agenda" title="A Manifesto Built on Lived Reality" description="Five priorities that will shape my work in the Senate for every Nairobian." />

          {/* Download button below heading */}
          <div className="flex justify-center mb-10">
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-7">
              <a href="https://drive.google.com/file/d/19b2LPOquARN-awyNuTEYPcb59SX4VsC-/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 mr-2" />
                Download Manifesto
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-10">
            {agendaItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-semibold transition-all border",
                  active === item.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-primary/10 text-foreground/80 border-primary/20 hover:bg-primary/20 hover:border-primary hover:text-foreground"
                )}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="max-w-4xl mx-auto bg-background rounded-lg p-8 md:p-10 border border-border border-l-2 border-l-primary animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">{current.title}</h3>
            <p className="text-foreground/85 leading-relaxed text-lg">{current.body}</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container max-w-5xl space-y-10">
          {agendaItems.map((item) => (
            <article key={item.id} className="border-l-2 border-primary pl-6 py-2">
              <h2 className="text-2xl font-extrabold mb-3">{item.title}</h2>
              <p className="text-foreground/85 leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="container max-w-5xl mt-14 pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-extrabold text-lg text-foreground">Read the Full Manifesto</p>
            <p className="text-sm text-muted-foreground mt-1">Download the complete agenda as a PDF document.</p>
          </div>
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-7 shrink-0">
            <a href="https://drive.google.com/file/d/19b2LPOquARN-awyNuTEYPcb59SX4VsC-/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4 mr-2" />
              Download Manifesto
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
