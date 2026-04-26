import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";
import { partyValues, partyPillars } from "@/content/party";

export default function PartySection({ preview = true }: { preview?: boolean }) {
  return (
    <section
      id="the-party"
      className="relative py-20 md:py-28 bg-foreground text-background overflow-hidden"
    >
      <div className="container relative">
        <SectionHeading
          eyebrow="The Party"
          title="The Roots Party of Kenya"
          description="Empowering the People. Reclaiming the Nation."
          invert
        />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img src="/roots-party-logo.png" alt="Roots Party of Kenya flag" className="h-56 w-56 md:h-72 md:w-72 rounded-full object-cover" />
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
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-2xl font-extrabold mb-8 text-background">Core Values</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {partyValues.map((v) => (
              <span key={v} className="px-4 py-2 rounded-full border border-background/20 text-sm font-medium text-background/90">
                {v}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-2xl font-extrabold mb-8 text-background">Party Pillars</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {partyPillars.map((p, i) => (
              <div key={p} className="flex gap-4">
                <div className="text-2xl font-extrabold text-primary leading-none w-10 shrink-0">{String(i + 1).padStart(2, "0")}</div>
                <p className="text-sm font-medium text-background/90 leading-snug pt-1">{p}</p>
              </div>
            ))}
          </div>
        </div>

        {preview && (
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-7">
              <Link to="/the-party">Learn More About The Party</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
