import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { AppShowcase } from "@/components/landing/AppShowcase";
import { Stats } from "@/components/landing/Stats";
import { Gallery } from "@/components/landing/Gallery";
import { DownloadCTA } from "@/components/landing/DownloadCTA";
import { BlueBanner } from "@/components/landing/BlueBanner";
import { Footer } from "@/components/landing/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <AppShowcase />
      <Stats />
      <Gallery />
      <DownloadCTA />
      <BlueBanner />
      <Footer />
    </div>
  );
}

export default App;
