export default function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="bg-night text-night-foreground pt-36 pb-16 md:pb-20 relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-brand" />
      <div className="absolute inset-y-0 right-0 w-1.5 bg-party" />
      <div aria-hidden className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "linear-gradient(120deg, hsl(220 50% 6% / 0.95), hsl(220 40% 12% / 0.7)), url('/nairobi-skyline.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="container relative">
        {eyebrow && <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-3">★ {eyebrow}</p>}
        <h1 className="text-4xl md:text-6xl font-extrabold text-balance">{title}</h1>
        {description && <p className="mt-4 text-lg text-night-foreground/80 max-w-2xl">{description}</p>}
      </div>
    </section>
  );
}
