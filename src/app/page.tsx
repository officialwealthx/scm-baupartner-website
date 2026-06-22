import {
  HeroSection,
  TrustBarSection,
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
      <div aria-hidden="true" className="pointer-events-none -mt-2 h-8 bg-[linear-gradient(to_bottom,rgba(247,248,245,0)_0%,rgba(247,248,245,1)_100%)] sm:h-10" />
      <div className="relative z-20 mt-3 sm:mt-4 lg:mt-5">
        <TrustBarSection />
      </div>
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
