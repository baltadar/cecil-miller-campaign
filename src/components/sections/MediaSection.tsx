import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";
import { YOUTUBE_VIDEOS } from "@/content/social";

function YouTubeThumbnail({ id, title }: { id: string; title: string }) {
  const url = `https://www.youtube.com/watch?v=${id}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${title} on YouTube`}
      className="relative block h-full w-full group/play"
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt={title}
        className="h-full w-full object-cover"
      />

      {/* Dark overlay on hover */}
      <span className="absolute inset-0 bg-black/20 opacity-0 group-hover/play:opacity-100 transition-opacity" />

      {/* Play button */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-black/70 group-hover/play:bg-primary transition-colors duration-200">
          <svg
            className="w-7 h-7 text-white translate-x-0.5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>

      {/* YouTube logo badge */}
      <span className="absolute bottom-2 right-2 opacity-80">
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="#FF0000"
          aria-hidden="true"
        >
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8z" />
          <path fill="#fff" d="M9.75 15.5v-7l6.25 3.5-6.25 3.5z" />
        </svg>
      </span>
    </a>
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
                <YouTubeThumbnail id={v.id} title={v.title} />
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
