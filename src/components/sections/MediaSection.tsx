import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";
import { Newspaper, Mic, Camera, PlayCircle, FileText, Radio } from "lucide-react";

const items = [
  { icon: Newspaper, tag: "PRESS", title: "Cecil Miller declares Senate bid for Nairobi", source: "Daily Nation", accent: "primary" },
  { icon: Mic, tag: "SPEECH", title: "Address to LSK Coast Branch — Justice for All", source: "Mombasa", accent: "party" },
  { icon: Camera, tag: "RALLY", title: "Roots Party Grassroots Tour: Eastlands", source: "Photo Gallery", accent: "primary" },
  { icon: PlayCircle, tag: "INTERVIEW", title: "On gig workers and platform fairness", source: "Citizen TV", accent: "party" },
  { icon: FileText, tag: "OP-ED", title: "Why Nairobi's hustlers deserve a Senator who listens", source: "The Standard", accent: "primary" },
  { icon: Radio, tag: "RADIO", title: "Morning Show — TVET, jobs and the youth dividend", source: "Radio Maisha", accent: "party" },
];

export default function MediaSection({ preview = true }: { preview?: boolean }) {
  const list = preview ? items.slice(0, 6) : items;
  return (
    <section id="media" className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionHeading eyebrow="Media" title="In the News & On the Ground" description="Speeches, press features and moments from the campaign trail." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((item, i) => {
            const Icon = item.icon;
            const isParty = item.accent === "party";
            return (
              <article
                key={i}
                className={`group rounded-2xl bg-secondary/40 overflow-hidden border-t-4 ${isParty ? "border-party" : "border-primary"} hover:shadow-elegant transition-all hover:-translate-y-1`}
              >
                <div className={`aspect-[16/10] ${isParty ? "bg-gradient-party" : "bg-gradient-brand"} grid place-items-center`}>
                  <Icon className="h-14 w-14 text-primary-foreground/90" />
                </div>
                <div className="p-5">
                  <span className={`inline-block text-[10px] font-bold tracking-widest px-2 py-1 rounded ${isParty ? "bg-party/15 text-party" : "bg-primary/15 text-primary"}`}>
                    {item.tag}
                  </span>
                  <h3 className="mt-3 font-bold text-foreground leading-snug group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{item.source}</p>
                </div>
              </article>
            );
          })}
        </div>
        {preview && (
          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/media">View All Media</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
