import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import ContactSection from "@/components/sections/ContactSection";

export default function Contact() {
  return (
    <Layout>
      <PageHeader eyebrow="Let's Talk" title="Join the Movement" description="Volunteer, donate, organise — or just say hello. Every Nairobian voice matters." />
      <ContactSection preview={false} />
    </Layout>
  );
}
