import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";
import { Scale, GraduationCap, Users, Briefcase, Award, Sparkles } from "lucide-react";

const credentials = [
  { icon: Scale, label: "Advocate of the High Court" },
  { icon: Award, label: "LSK Coast Chair (3 yrs)" },
  { icon: Sparkles, label: "Sec. General — Roots Party" },
  { icon: GraduationCap, label: "UoN School of Law Alumni" },
  { icon: Users, label: "Youth Champion" },
  { icon: Briefcase, label: "Workers' Advocate" },
];

export default function StorySection({ preview = true }: { preview?: boolean }) {
  return (
    <section id="my-story" className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionHeading eyebrow="My Story" title="A Lawyer for the People of Nairobi" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-party/20 rounded-2xl" />
            <img src="/cecil-miller.png" alt="Cecil Miller portrait" className="relative rounded-2xl shadow-card w-full object-cover aspect-[4/5]" />
          </div>
          <div>
            <p className="text-lg text-foreground/85 leading-relaxed">
              Cecil Miller is a youthful, visionary lawyer and aspiring Nairobi Senator for the 2027 General Election. A graduate of the <strong>University of Nairobi, School of Law</strong>, he is a practicing advocate with a distinguished career in public-interest law.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              For the past three years he has served as <strong className="text-foreground">LSK Chair for the Coast Region</strong>, and is the <strong className="text-foreground">Secretary General of the Roots Party of Kenya</strong>. Cecil is deeply committed to the welfare of workers — gig workers, bodaboda riders, and ride-hailing drivers — and champions dignified skills training and economic empowerment for Nairobi's youth.
            </p>
            {!preview && (
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                His mission is to use the Senate as a platform to fight for justice, opportunity, and dignity for every Nairobian — turning the lived experience of advocacy into legislation that protects, empowers and uplifts.
              </p>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
              {credentials.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-start gap-2 p-3 rounded-xl border border-border bg-secondary/40 hover:border-primary/50 hover:bg-primary/5 transition-colors">
                  <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-foreground leading-tight">{label}</span>
                </div>
              ))}
            </div>

            {preview && (
              <Button asChild className="mt-8 bg-gradient-brand text-primary-foreground rounded-full px-6">
                <Link to="/my-story">Read Full Story</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
