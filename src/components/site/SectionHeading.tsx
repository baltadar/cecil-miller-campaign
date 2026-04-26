import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  invert?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl mb-12", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow && (
        <div className={cn("inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase mb-4",
          invert ? "text-primary" : "text-primary"
        )}>
          <span className="h-px w-8 bg-primary" />{eyebrow}<span className="h-px w-8 bg-primary" />
        </div>
      )}
      <h2 className={cn("text-3xl md:text-5xl font-extrabold text-balance",
        invert ? "text-night-foreground" : "text-foreground"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base md:text-lg text-balance",
          invert ? "text-night-foreground/75" : "text-muted-foreground"
        )}>{description}</p>
      )}
    </div>
  );
}
