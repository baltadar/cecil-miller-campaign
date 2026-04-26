import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";
import { agendaItems } from "@/content/agenda";
import { cn } from "@/lib/utils";

export default function AgendaSection({ preview = true }: { preview?: boolean }) {
  const [active, setActive] = useState<string>(agendaItems[0].id);
  const current = agendaItems.find((a) => a.id === active)!;

  return (
    <section id="agenda" className="py-20 md:py-28 bg-secondary/30 border-y border-border">
      <div className="container">
        <SectionHeading eyebrow="My Agenda" title="A Manifesto Built on Lived Reality" description="Five priorities that will shape my work in the Senate — for every Nairobian." />
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
        {preview && (
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-7">
              <Link to="/agenda">Explore Full Agenda</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
