import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";
import { YOUTUBE_VIDEOS } from "@/content/social";

function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  const [active, setActive] = useState(false);

  return active ? (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="h-full w-full"
    />
  ) : (
    <button
      onClick={() => setActive(true)}
      className="relative h-full w-full group/play"
      aria-label={`Play ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt={title}
        className="h-full w-full object-cover"
      />
      {/* Play button overlay */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-black/70 group-hover/play:bg-primary transition-colors">
          <svg
            className="w-7 h-7 text-white translate-x-0.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}

export default function MediaSection({ preview = true }: { preview?: boolean }) {
  const videos = preview ? YOUTUBE_VIDEOS.slice(0, 2) : YOUTUBE_VIDEOS;

  return (
    <section id="media" className="py-20 md:py-28 bg-background">
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
                <YouTubeEmbed id={v.id} title={v.title} />
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
        {preview && (
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-7 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/media">View All Media</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
