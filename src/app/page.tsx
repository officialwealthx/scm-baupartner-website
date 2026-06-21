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
      <div className="relative z-10 -mt-8 sm:-mt-10">
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
