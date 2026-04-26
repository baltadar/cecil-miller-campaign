import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-background text-foreground overflow-hidden border-b border-border"
    >
      <style>{`
        @keyframes skylineDrift {
          0%   { transform: scale(1.08) translate(0%, 0%); }
          50%  { transform: scale(1.12) translate(-1.5%, -1%); }
          100% { transform: scale(1.08) translate(0%, 0%); }
        }
        .skyline-drift {
          animation: skylineDrift 3s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>

      {/* Animated skyline backdrop */}
      <div aria-hidden className="absolute inset-0 opacity-[0.12] overflow-hidden">
        <div
          className="skyline-drift absolute inset-[-5%]"
          style={{
            backgroundImage: "url('/nairobi-skyline.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="container relative grid md:grid-cols-2 gap-12 items-center min-h-[88vh] py-16">
        <div className="order-2 md:order-1 animate-fade-up">
          <p className="text-sm font-bold tracking-[0.25em] text-primary uppercase">
            Bio
          </p>
          <h1 className="mt-5 font-extrabold text-foreground leading-[0.95] text-balance text-5xl sm:text-6xl lg:text-7xl">
            Meet<br />Cecil Miller
          </h1>
          <div className="mt-6 h-0.5 w-24 bg-primary" />
          <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
            Advocate of the High Court. Secretary General, Roots Party of Kenya.
            Aspiring Senator for Nairobi City County, 2027.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-7">
              <Link to="/my-story">My Story</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 border-foreground/20 text-foreground hover:bg-foreground/5">
              <Link to="/agenda">View Agenda</Link>
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 relative animate-fade-in">
          <img
            src="/cecil-miller.png"
            alt="Hon. Cecil Miller, Aspiring Senator for Nairobi"
            className="relative w-full max-w-lg mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
