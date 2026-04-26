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
          {agendaItems.map((item) => (
            <article key={item.id} className="border-l-2 border-primary pl-6 py-2">
              <h2 className="text-2xl font-extrabold mb-3">{item.title}</h2>
              <p className="text-foreground/85 leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
