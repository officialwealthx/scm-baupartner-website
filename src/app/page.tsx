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
      <div className="relative z-20 -mt-12 sm:-mt-14 lg:-mt-16">
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
