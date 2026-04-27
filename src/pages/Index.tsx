import Layout from "@/components/site/Layout";
import Hero from "@/components/sections/Hero";
import StorySection from "@/components/sections/StorySection";
import AgendaSection from "@/components/sections/AgendaSection";
import PartySection from "@/components/sections/PartySection";
import MediaSection from "@/components/sections/MediaSection";
import LetsTalkSection from "@/components/sections/LetsTalkSection";

const Index = () => (
  <Layout>
    <Hero />
    <StorySection />
    <AgendaSection />
    <PartySection />
    <MediaSection />
    <LetsTalkSection />
  </Layout>
);

export default Index;
