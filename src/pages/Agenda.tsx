import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import AgendaSection from "@/components/sections/AgendaSection";
import { agendaItems } from "@/content/agenda";

export default function Agenda() {
  return (
    <Layout>
      <PageHeader eyebrow="Agenda & Manifesto" title="The Plan for Nairobi" description="Five priorities, grounded in the law, shaped by the streets, and built for every Nairobian." />
      <AgendaSection preview={false} />
      <section className="py-20 bg-background">
        <div className="container max-w-5xl space-y-10">
          {agendaItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.id} className="rounded-2xl border border-border p-8 bg-secondary/30 border-l-4 border-l-primary shadow-card">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-brand">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-extrabold">{item.title}</h2>
                </div>
                <p className="text-foreground/85 leading-relaxed">{item.body}</p>
              </article>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
