import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";
import { partyValues, partyPillars } from "@/content/party";
import { Sprout } from "lucide-react";

export default function PartySection({ preview = true }: { preview?: boolean }) {
  return (
    <section
      id="the-party"
      className="relative py-20 md:py-28 bg-night text-night-foreground overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, hsl(var(--party-red)) 0, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--primary)) 0, transparent 40%)",
        }}
      />
      <div className="container relative">
        <SectionHeading
          eyebrow="The Party"
          title="The Roots Party of Kenya"
          description="Empowering the People. Reclaiming the Nation."
          invert
        />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-party rounded-full blur-3xl opacity-30" />
              <img src="/roots-party-logo.png" alt="Roots Party of Kenya flag" className="relative h-64 w-64 md:h-80 md:w-80 rounded-full object-cover ring-4 ring-party shadow-elegant" />
            </div>
          </div>
          <div>
            <p className="text-night-foreground/85 text-lg leading-relaxed">
              The Roots Party of Kenya is a revolutionary political movement committed to restoring dignity, justice, and prosperity for every Kenyan. We empower the people, harness Kenya's own resources, and reclaim sovereignty — rejecting foreign dependency, corruption, and exploitation.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-night-foreground/5 border-l-4 border-primary">
                <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-1">Vision</h4>
                <p className="text-sm text-night-foreground/80">A prosperous, united, democratic society with empowered citizens under servant leadership.</p>
              </div>
              <div className="p-5 rounded-xl bg-night-foreground/5 border-l-4 border-party">
                <h4 className="font-bold text-party text-sm uppercase tracking-wider mb-1">Mission</h4>
                <p className="text-sm text-night-foreground/80">Lead Kenya's transformation through patriotism, social justice, gender parity, youth empowerment, and global repositioning.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-2xl font-extrabold mb-8 text-night-foreground">Core Values</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {partyValues.map((v) => (
              <div key={v} className="p-4 rounded-xl bg-night-foreground/5 border border-night-foreground/10 hover:border-primary/60 hover:bg-night-foreground/10 transition-all text-center">
                <Sprout className="h-5 w-5 text-primary mx-auto mb-2" />
                <span className="text-sm font-semibold text-night-foreground">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-2xl font-extrabold mb-8 text-night-foreground">Party Pillars</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partyPillars.map((p, i) => (
              <div key={p} className="p-5 rounded-xl bg-night-foreground/5 border-l-4 border-party hover:border-primary transition-colors">
                <div className="text-3xl font-extrabold text-primary mb-1">{String(i + 1).padStart(2, "0")}</div>
                <p className="text-sm font-semibold text-night-foreground/90 leading-snug">{p}</p>
              </div>
            ))}
          </div>
        </div>

        {preview && (
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-party hover:bg-party/90 text-party-foreground rounded-full px-7">
              <Link to="/the-party">Learn More About The Party</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
