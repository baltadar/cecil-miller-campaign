import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import StorySection from "@/components/sections/StorySection";

export default function MyStory() {
  return (
    <Layout>
      <PageHeader eyebrow="My Story" title="A Lawyer. A Servant. A Nairobian." description="From the courtroom to the campaign trail — the journey behind the candidacy." />
      <StorySection preview={false} />
      <section className="py-16 bg-secondary/40">
        <div className="container max-w-3xl prose prose-lg">
          <h2 className="text-3xl font-extrabold mb-6">The Road Ahead</h2>
          <p className="text-foreground/85 leading-relaxed">
            My candidacy is not about a title — it is about the people who built me: the bodaboda rider in Kawangware, the mama mboga in Gikomba, the law student in Parklands. I am running because Nairobi deserves a Senator who has lived their struggle and trained to defend it.
          </p>
          <p className="mt-4 text-foreground/85 leading-relaxed">
            With your support, we will build a Nairobi where opportunity is not a privilege — it is a right.
          </p>
        </div>
      </section>
    </Layout>
  );
}
