import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";

const credentials = [
  "Advocate of the High Court of Kenya",
  "LSK Coast Branch Chair (3 years)",
  "Secretary General — Roots Party of Kenya",
  "University of Nairobi, School of Law",
  "Youth & Workers' Rights Champion",
];

export default function StorySection({ preview = true }: { preview?: boolean }) {
  return (
    <section id="my-story" className="py-12 md:py-16 bg-background">
      <div className="container">
        <SectionHeading eyebrow="My Story" align="left" title="A Lawyer for the People of Nairobi" />
        <div className="grid lg:grid-cols-[2fr_3fr] gap-8 items-start">
          <div className="overflow-hidden rounded-sm" style={{ maxHeight: "380px" }}>
            <img
              src="https://res.cloudinary.com/dbgcwdes6/image/upload/v1777194242/WhatsApp_Image_2026-04-25_at_16.44.28_dodobc.jpg"
              alt="Cecil Miller portrait"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 20%", transform: "scale(0.85)", transformOrigin: "top center" }}
            />
          </div>
          <div>
            <p className="text-base text-foreground/85 leading-relaxed">
              Cecil Miller is a youthful, visionary lawyer and aspiring Nairobi Senator for the 2027 General Election. A graduate of the{" "}
              <strong>University of Nairobi, School of Law</strong>, he is a practicing advocate with a distinguished career in public-interest law.
            </p>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              For the past three years he has served as{" "}
              <strong className="text-foreground">LSK Chair for the Coast Region</strong>, and is the{" "}
              <strong className="text-foreground">Secretary General of the Roots Party of Kenya</strong>. Cecil is deeply committed to the welfare of workers — gig workers, bodaboda riders, and ride-hailing drivers — and champions dignified skills training and economic empowerment for Nairobi's youth.
            </p>
            {!preview && (
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                His mission is to use the Senate as a platform to fight for justice, opportunity, and dignity for every Nairobian — turning the lived experience of advocacy into legislation that protects, empowers and uplifts.
              </p>
            )}
            <ul className="mt-5 space-y-2">
              {credentials.map((label) => (
                <li key={label} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="font-medium">{label}</span>
                </li>
              ))}
            </ul>
            {preview && (
              <Button asChild className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                <Link to="/my-story">Read Full Story</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
