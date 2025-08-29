import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/sections/About";
import Communities from "@/components/sections/Communities";
import EventsShowcase from "@/components/sections/EventsShowcase";
import ProjectsSection from "@/components/sections/Projects";
import HackHustle24 from "@/components/sections/HackHustle24";
import CentralTeam from "@/components/sections/CentralTeam";
import CommunityLeads from "@/components/sections/CommunityLeads";
import JoinQR from "@/components/sections/JoinQR";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <AboutSection />
      <Communities />
      <EventsShowcase />
      <HackHustle24 />
      <ProjectsSection />
      <CentralTeam />
      <CommunityLeads />
      {/* <JoinQR /> */}
    </main>
  );
};

export default Index;
