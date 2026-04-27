import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import SectionHeading from "@/components/site/SectionHeading";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// Standalone Roots Party page. Independent from the home page section.
const partyValues = [
  "Integrity", "Servant Leadership", "Natural Resource Stewardship",
  "Patriotism", "Nationhood", "Democracy",
  "Rule of Law", "Equality", "Economic Empowerment", "Family Values",
];

const partyPillars = [
  "Zero Tolerance to Corruption",
  "Economic Productivity and Self-Sufficiency",
  "Justice, Democracy & Citizen Empowerment",
  "Youth Empowerment: Building the Pillars of Tomorrow",
  "Women Empowerment: Advancing Equality and Opportunity",
  "Inclusion of Persons with Disabilities: Dignity Through Accessibility",
  "Free Education for All",
  "Affordable Healthcare for All",
  "Hemp Legalization and Industrialization",
];

export default function TheParty() {
  return (
    <Layout>
      <PageHeader eyebrow="The Party" title="Roots Party of Kenya" description="Shake the Tree · Tingiza Mti — a movement to reclaim Kenya for Kenyans." />
      <section className="relative py-20 md:py-28 bg-foreground text-background overflow-hidden">
        <div className="container relative">
          <SectionHeading
            eyebrow="The Party"
            title="The Roots Party of Kenya"
            description="Empowering the People. Reclaiming the Nation."
            invert
          />
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="h-40 w-40 md:h-52 md:w-52 rounded-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dbgcwdes6/image/upload/v1777200526/roots_party_logo_mqpbpp.jpg"
                  alt="Roots Party of Kenya flag"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div>
              <p className="text-background/85 text-lg leading-relaxed">
                The Roots Party of Kenya is a revolutionary political movement committed to restoring dignity, justice, and prosperity for every Kenyan. We empower the people, harness Kenya's own resources, and reclaim sovereignty — rejecting foreign dependency, corruption, and exploitation.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="p-5 border-l-2 border-primary">
                  <h4 className="font-bold text-primary text-xs uppercase tracking-widest mb-2">Vision</h4>
                  <p className="text-sm text-background/80">A prosperous, united, democratic society with empowered citizens under servant leadership.</p>
                </div>
                <div className="p-5 border-l-2 border-party">
                  <h4 className="font-bold text-party text-xs uppercase tracking-widest mb-2">Mission</h4>
                  <p className="text-sm text-background/80">Lead Kenya's transformation through patriotism, social justice, gender parity, youth empowerment, and global repositioning.</p>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-7">
                  <a href="https://rootspartyofkenya.org/" target="_blank" rel="noopener noreferrer">
                    Visit the Official Party Website
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 max-w-6xl">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Core Values</h2>
            <ul className="grid grid-cols-2 gap-3">
              {partyValues.map((v) => (
                <li key={v} className="flex items-start gap-2 text-sm font-medium text-foreground/85">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Nine Pillars</h2>
            <ul className="space-y-3">
              {partyPillars.map((p, i) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span className="font-extrabold text-primary w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28 bg-secondary/30 border-t border-border">
        <div className="container max-w-6xl">
          <SectionHeading
            eyebrow="Our Promise"
            title="Our Commitment to Kenyans"
            description="Tingiza Mti! Wakati ni Sasa!"
          />
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-5 text-foreground/85 leading-relaxed">
              <p>
                The Roots Party of Kenya is committed to building a nation that is self-sufficient, prosperous, just, and inclusive. By addressing the core issues of corruption, economic independence, youth and women empowerment, inclusive governance, education, healthcare, and industrialization, we will create a Kenya where all Kenyans can thrive.
              </p>
              <p>
                It is time to take back our future and build a nation grounded in integrity, sustainability, and shared prosperity.
              </p>
              <p className="text-primary font-extrabold uppercase tracking-wide">
                Tingiza Mti! Wakati ni Sasa!
              </p>
            </div>
            <aside className="lg:col-span-2">
              <div className="p-6 rounded-lg bg-background border border-border border-l-2 border-l-primary">
                <h3 className="font-extrabold text-xs uppercase tracking-widest text-primary mb-1">
                  Roots Party of Kenya
                </h3>
                <p className="font-bold text-foreground text-lg mb-5">Head Office</p>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Cara House, Karen Road,<br />Nairobi, Kenya</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Hours</p>
                      <p className="text-muted-foreground">Open today · 09:00 – 17:00</p>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}
