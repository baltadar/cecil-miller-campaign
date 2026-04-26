import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import MediaSection from "@/components/sections/MediaSection";

export default function Media() {
  return (
    <Layout>
      <PageHeader eyebrow="Media" title="Press, Speeches & Coverage" description="The campaign in conversation with Kenyans, the press, and the people of Nairobi." />
      <MediaSection preview={false} />
    </Layout>
  );
}
