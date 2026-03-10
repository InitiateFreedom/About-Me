import HeroSection from "@/components/background-boxes-demo";
import AboutSection from "@/components/about-section";
import TimelineSection from "@/components/timeline-section";
import PinSection from "@/components/pin-section";

export default function Page() {
  return (
    <main className="min-h-svh overflow-x-clip">
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <PinSection />
    </main>
  );
}
