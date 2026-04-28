import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import SectionHeading from "@/components/site/SectionHeading";
import { Play } from "lucide-react";

const videos = [
  { id: "IV-tDkD9lEk", title: "Hon. Cecil Miller — Featured Interview" },
  { id: "0waHuWc5DHI", title: "Hon. Cecil Miller — On the Issues" },
  { id: "0hF-jfCl5o4", title: "Hon. Cecil Miller — On the Campaign Trail" },
  { id: "TBm2XQ4BBIY", title: "Hon. Cecil Miller — Addressing Nairobians" },
];

const photos = [
  { src: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1777268144/Screenshot_2026-04-27_at_08.35.22_cww6a4.png", alt: "Hon. Cecil Miller on the campaign trail" },
  { src: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1777268161/WhatsApp_Image_2026-04-25_at_12.37.04_lhpw1t.jpg", alt: "Hon. Cecil Miller engaging with Nairobi residents" },
  { src: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1777271182/Screenshot_2026-04-27_at_09.19.09_jdaf2k.png", alt: "Hon. Cecil Miller on the campaign trail" },
  { src: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1777271182/Screenshot_2026-04-27_at_09.21.08_zllvwg.png", alt: "Hon. Cecil Miller on the campaign trail" },
  { src: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1777271183/Screenshot_2026-04-27_at_09.18.47_fnxxqi.png", alt: "Hon. Cecil Miller on the campaign trail" },
  { src: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1777268161/WhatsApp_Image_2026-04-25_at_12.37.04_lhpw1t.jpg", alt: "Hon. Cecil Miller engaging with Nairobi residents" },
  { src: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1777271183/Screenshot_2026-04-27_at_09.19.44_daeg9l.png", alt: "Hon. Cecil Miller on the campaign trail" },
  { src: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1777271184/Screenshot_2026-04-27_at_09.20.19_q5a78d.png", alt: "Hon. Cecil Miller on the campaign trail" },
  { src: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1777271183/Screenshot_2026-04-27_at_09.19.25_metjh3.png", alt: "Hon. Cecil Miller on the campaign trail" },
  { src: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1777271184/Screenshot_2026-04-27_at_09.21.53_o8rnjy.png", alt: "Hon. Cecil Miller on the campaign trail" },
  { src: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1777373230/WhatsApp_Image_2026-04-27_at_23.30.03_i7lrcz.jpg", alt: "Hon. Cecil Miller on the campaign trail" },
  { src: "https://res.cloudinary.com/dbgcwdes6/image/upload/v1777268162/WhatsApp_Image_2026-04-25_at_12.36.59_kovknp.jpg", alt: "Hon. Cecil Miller at a community event" },
];

const articles = [
  {
    url: "https://web.facebook.com/watch/?v=26586081924359439",
    source: "Standard",
    title: "Featured: Hon. Cecil Miller in conversation",
    description: "Watch the latest featured coverage of Hon. Cecil Miller on Facebook.",
  },
];

export default function Media() {
  return (
    <Layout>
      <PageHeader eyebrow="Media" title="Press, Speeches & Coverage" description="The campaign in conversation with Kenyans, the press, and the people of Nairobi." />

      {/* Videos */}
      <section id="videos" className="py-20 md:py-28 bg-background">
        <div className="container">
          <SectionHeading eyebrow="Videos" title="On the Record" description="Interviews, speeches and moments from the campaign trail." />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {videos.map((v) => (
              <a key={v.id} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-video w-full overflow-hidden border border-border bg-foreground/5">
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <Play className="h-7 w-7 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
                <h3 className="mt-4 font-bold text-foreground text-lg leading-snug group-hover:text-primary transition-colors">
                  {v.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="py-20 md:py-28 bg-muted/30 border-y border-border">
        <div className="container">
          <SectionHeading eyebrow="Articles" title="Featured Coverage" description="Press features and articles about the campaign." />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {articles.map((a) => (
              <a key={a.url} href={a.url} target="_blank" rel="noopener noreferrer" className="block border border-border bg-background p-6 hover:border-primary transition-colors group">
                <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">{a.source}</div>
                <h3 className="font-bold text-foreground text-lg leading-snug group-hover:text-primary transition-colors">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section id="photos" className="py-20 md:py-28 bg-background">
        <div className="container">
          <SectionHeading eyebrow="Photos" title="On the Ground" description="Snapshots from rallies, meetings and community visits across Nairobi." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {photos.map((p) => (
              <a key={p.src} href={p.src} target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden border border-border bg-foreground/5 group">
                <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
