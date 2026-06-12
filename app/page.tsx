import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Challenges from "@/components/Challenges";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />

      <Metrics />

      <Challenges />

      <Services />

      <Methodology />

      <CTA />

      <Footer />
    </>
  );
}
