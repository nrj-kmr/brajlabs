import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CaseStudies } from "@/components/CaseStudies";
import { CoreCapabilities } from "@/components/CoreCapabilities";
import { TrustSection } from "@/components/TrustSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CaseStudies />
      <CoreCapabilities />
      <TrustSection />
      <Footer />
    </main>
  );
}
