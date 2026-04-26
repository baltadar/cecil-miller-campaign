import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";
import { agendaItems } from "@/content/agenda";
import { cn } from "@/lib/utils";

export default function AgendaSection({ preview = true }: { preview?: boolean }) {
  const [active, setActive] = useState<string>(agendaItems[0].id);
  const current = agendaItems.find((a) => a.id === active)!;
  const Icon = current.icon;

  return (
    <section id="agenda" className="py-20 md:py-28 bg-secondary/40 border-y border-border">
      <div className="container">
        <SectionHeading eyebrow="My Agenda" title="A Manifesto Built on Lived Reality" description="Five priorities that will shape my work in the Senate — for every Nairobian." />

        <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-10">
          {agendaItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={cn(
                "px-4 md:px-6 py-3 rounded-xl text-sm font-bold transition-all border-2",
                active === item.id
                  ? "bg-primary text-primary-foreground border-primary shadow-elegant"
                  : "bg-background text-foreground/70 border-border hover:border-primary/40 hover:text-foreground"
              )}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-background rounded-2xl p-8 md:p-10 shadow-card border-l-4 border-primary animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-14 w-14 rounded-xl bg-gradient-brand grid place-items-center">
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">{current.title}</h3>
          </div>
          <p className="text-foreground/85 leading-relaxed text-lg">{current.body}</p>
        </div>

        {preview && (
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-gradient-brand text-primary-foreground rounded-full px-7">
              <Link to="/agenda">Explore Full Agenda</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
