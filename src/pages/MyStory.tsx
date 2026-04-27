import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import SectionHeading from "@/components/site/SectionHeading";

// Content for the standalone My Story page. Edit freely — this page no
// longer shares components with the home page.
const credentials = [
  "Advocate of the High Court of Kenya",
  "LSK Coast Branch Chair (3 years)",
  "Secretary General — Roots Party of Kenya",
  "University of Nairobi, School of Law",
  "Youth & Workers' Rights Champion",
];

export default function MyStory() {
  return (
    <Layout>
      <PageHeader eyebrow="My Story" title="A Lawyer. A Servant. A Nairobian." description="From the courtroom to the campaign trail — the journey behind the candidacy." />
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <SectionHeading eyebrow="My Story" align="left" title="A Lawyer for the People of Nairobi" />
          <div className="grid lg:grid-cols-[2fr_3fr] gap-8 items-start">
            <div className="overflow-hidden rounded-sm" style={{ maxHeight: "380px" }}>
              <img
                src="https://res.cloudinary.com/dbgcwdes6/image/upload/v1777198982/Screenshot_2026-04-26_at_13.22.20_onjmt4.png"
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
                <strong className="text-foreground">Secretary General of the Roots Party of Kenya</strong>. Cecil is deeply committed to the welfare of workers including gig workers, bodaboda riders, and ride-hailing drivers. He champions dignified skills training and economic empowerment for Nairobi's youth.
              </p>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                His mission is to use the Senate as a platform to fight for justice, opportunity, and dignity for every Nairobian — turning the lived experience of advocacy into legislation that protects, empowers and uplifts.
              </p>
              <ul className="mt-5 space-y-2">
                {credentials.map((label) => (
                  <li key={label} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="font-medium">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-secondary/40">
        <div className="container max-w-3xl prose prose-lg">
          <h2 className="text-3xl font-extrabold mb-6">The Road Ahead</h2>
          <p className="text-foreground/85 leading-relaxed">
            My candidacy is not about empty titles. It is about the people who built me: the bodaboda rider in Kawangware, the mama mboga in Gikomba, the law student in Parklands. I am running because Nairobi deserves a Senator who has lived their struggle and is trained to defend it.
          </p>
          <p className="mt-4 text-foreground/85 leading-relaxed">
            With your support, we will build a Nairobi where opportunity is a right for all.
          </p>
        </div>
      </section>
    </Layout>
  );
}
