export default function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="bg-background text-foreground pt-16 pb-12 md:pb-16 border-b border-border">
      <div className="container">
        {eyebrow && <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-3">{eyebrow}</p>}
        <h1 className="text-4xl md:text-6xl font-extrabold text-balance">{title}</h1>
        <div className="mt-5 h-0.5 w-16 bg-primary" />
        {description && <p className="mt-5 text-lg text-muted-foreground max-w-2xl">{description}</p>}
      </div>
    </section>
  );
}
