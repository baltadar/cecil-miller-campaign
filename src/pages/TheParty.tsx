import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import PartySection from "@/components/sections/PartySection";

export default function TheParty() {
  return (
    <Layout>
      <PageHeader eyebrow="The Party" title="Roots Party of Kenya" description="Shake the Tree · Tingiza Mti — a movement to reclaim Kenya for Kenyans." />
      <PartySection preview={false} />
    </Layout>
  );
}
