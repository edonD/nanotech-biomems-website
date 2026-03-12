import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import ImpactStrip from "./components/ImpactStrip";
import Technology from "./components/Technology";
import WhyNow from "./components/WhyNow";
import Product from "./components/Product";
import Applications from "./components/Applications";
import Market from "./components/Market";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Problem />
      <ImpactStrip />
      <Technology />
      <WhyNow />
      <Product />
      <Applications />
      <Market />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
