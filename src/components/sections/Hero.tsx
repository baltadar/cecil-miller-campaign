import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center bg-night text-night-foreground overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(120deg, hsl(220 50% 6% / 0.92), hsl(220 40% 10% / 0.55)), url('/nairobi-skyline.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-brand" />
      <div className="absolute inset-y-0 right-0 w-1.5 bg-party" />

      <div className="container relative z-10 grid md:grid-cols-2 gap-10 items-center pt-28 pb-16">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/40 text-primary text-xs font-bold tracking-widest uppercase">
            ★ Nairobi Senator · 2027
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] text-balance">
            Hon. Cecil <span className="text-primary">Miller</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-night-foreground/85 max-w-xl">
            Aspiring Senator, Nairobi City County · 2027 General Election
          </p>
          <p className="mt-3 text-2xl md:text-3xl font-bold text-primary tracking-tight">
            Justice. Dignity. Opportunity.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gradient-brand text-primary-foreground hover:opacity-90 shadow-elegant rounded-full px-7">
              <Link to="/my-story">My Story <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 border-night-foreground/40 text-night-foreground bg-transparent hover:bg-night-foreground/10 hover:text-night-foreground">
              <Link to="/agenda">View Agenda</Link>
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute -bottom-4 -right-4 h-full w-full border-4 border-party rounded-2xl" />
            <div className="absolute -top-4 -left-4 h-full w-full border-4 border-primary rounded-2xl" />
            <img
              src="/cecil-miller.png"
              alt="Hon. Cecil Miller"
              className="relative h-full w-full object-cover rounded-2xl shadow-elegant"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
