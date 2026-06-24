import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MissionVision } from "@/components/MissionVision";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
// import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Newsletter } from "@/components/Newsletter";
import { MapSection } from "@/components/MapSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <About />
        <MissionVision />
        <Services />
        <WhyChooseUs />
        {/* <Testimonials /> hidden until real, attributable client quotes are ready */}
        <FAQ />
        <Contact />
        <Newsletter />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
