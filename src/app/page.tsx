import {
  HeroSection,
  TrustBarSection,
  StoryTeaserSection,
  ServiceCompassSection,
  ProcessTimelineSection,
  PortalPreviewSection,
  RegionSystemSection,
  InsightsSection,
  GuideSection,
  FaqSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div
        aria-hidden="true"
        className="pointer-events-none h-9 bg-[linear-gradient(to_bottom,rgba(247,248,245,0.06)_0%,rgba(247,248,245,1)_100%)] sm:h-11 lg:h-12"
      />
      <div className="relative z-20">
        <TrustBarSection />
      </div>
      <StoryTeaserSection />
      <ServiceCompassSection />
      <ProcessTimelineSection />
      <PortalPreviewSection />
      <RegionSystemSection />
      <InsightsSection />
      <GuideSection />
      <FaqSection />
    </>
  );
}
