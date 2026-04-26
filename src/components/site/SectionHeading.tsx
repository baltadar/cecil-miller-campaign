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
        <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4 text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className={cn("text-3xl md:text-5xl font-extrabold text-balance",
        invert ? "text-night-foreground" : "text-foreground"
      )}>
        {title}
      </h2>
      <div className={cn("mt-5 h-0.5 w-16", align === "center" ? "mx-auto" : "", "bg-primary")} />
      {description && (
        <p className={cn("mt-5 text-base md:text-lg text-balance",
          invert ? "text-night-foreground/75" : "text-muted-foreground"
        )}>{description}</p>
      )}
    </div>
  );
}
