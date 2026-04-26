import Layout from "@/components/site/Layout";
import Hero from "@/components/sections/Hero";
import StorySection from "@/components/sections/StorySection";
import AgendaSection from "@/components/sections/AgendaSection";
import PartySection from "@/components/sections/PartySection";
import MediaSection from "@/components/sections/MediaSection";

const Index = () => (
  <Layout>
    <Hero />
    <StorySection />
    <AgendaSection />
    <PartySection />
    <MediaSection />
  </Layout>
);

export default Index;
