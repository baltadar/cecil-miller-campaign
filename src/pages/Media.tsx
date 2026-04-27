import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import SectionHeading from "@/components/site/SectionHeading";

// Standalone Media page. Independent from the home page section.
const videos = [
  { id: "IV-tDkD9lEk", title: "Hon. Cecil Miller — Featured Interview" },
  { id: "0waHuWc5DHI", title: "Hon. Cecil Miller — On the Issues" },
];

export default function Media() {
  return (
    <Layout>
      <PageHeader eyebrow="Media" title="Press, Speeches & Coverage" description="The campaign in conversation with Kenyans, the press, and the people of Nairobi." />
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <SectionHeading
            eyebrow="Media"
            title="On the Record"
            description="Interviews, speeches and moments from the campaign trail."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {videos.map((v) => (
              <article key={v.id} className="group">
                <div className="aspect-video w-full overflow-hidden border border-border bg-foreground/5">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                <h3 className="mt-4 font-bold text-foreground text-lg leading-snug">
                  <a
                    href={`https://www.youtube.com/watch?v=${v.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {v.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
