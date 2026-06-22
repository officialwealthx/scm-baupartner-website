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
      <div className="relative z-20 -mt-6 sm:-mt-8 lg:-mt-10">
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
