import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";

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
