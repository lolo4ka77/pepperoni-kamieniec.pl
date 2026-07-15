import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { MenuShowcase } from "./components/MenuShowcase";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { PromoBanner } from "./components/PromoBanner";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { CookieBanner } from "./components/CookieBanner";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fffbf5]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <MenuShowcase />
        <Features />
        <PromoBanner />
        <Gallery />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <BackToTop />
      <CookieBanner />
    </div>
  );
}
